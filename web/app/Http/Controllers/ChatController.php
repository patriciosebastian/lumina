<?php

namespace App\Http\Controllers;

use App\Enums\MessageRole;
use App\Models\Message;
use Illuminate\Http\Client\Pool;
use Illuminate\Http\JsonResponse;;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ChatController extends Controller
{
    public function index(Request $request): Response
    {
        if ($request->user()) {
            $data = $request->user()->load('chats');
        } else {
            $guestMessages = collect($request->session()->get('guest_messages', []))
                ->whereNotNull('chat_id')
                ->unique('chat_id')
                ->sortByDesc('session_created_at')
                ->values();
            $data = ['chats' => $guestMessages];
        }

        $chatboxMessage = $request->input('message');

        return Inertia::render('mainApp', [
            'initialMode' => 'chat',
            'data' => $data,
            'chatboxMessage' => $chatboxMessage,
        ]);
    }

    public function show(Request $request, int $id): Response
    {
        if ($request->user()) {
            $chat = $request->user()->chats()->find($id);
            $messages = $chat ? $chat->load('messages')->messages->sortBy('created_at') : collect();
            $allChats = $request->user()->chats()->get();
        } else {
            $messages = collect($request->session()->get('guest_messages', []))
                ->filter(function ($message) {
                    return isset($message['chat_id']);
                })
                ->where('chat_id',$id)
                ->map(function ($message) {
                    return array_merge($message, [
                        'id' => $message['id'],
                        'chat_id' => $message['chat_id'],
                        'created_at' => $message['session_created_at']
                    ]);
                })
                ->sortBy('created_at')
                ->values();

            $allChats = collect($request->session()->get('guest_messages', []))
                ->filter(function ($message) {
                    return isset($message['chat_id']);
                })
                ->groupBy('chat_id')
                ->map(function ($messages, $chatId) {
                    return (object) [
                        'id' => $chatId,
                        'name' => $messages->first()['name'],
                        'created_at' => $messages->first()['session_created_at'],
                    ];
                })
                ->sortByDesc('created_at')
                ->values();
        }

        return Inertia::render('mainApp', [
            'initialMode' => 'chat',
            'data' => [
                'chats' => $allChats,
                'messages' => $messages,
            ]
        ]);
    }

    public function store(Request $request): JsonResponse|StreamedResponse|RedirectResponse
    {
        $request->validate([
            'content' => 'required|string|max:500',
            'with_ai_response' => 'boolean',
        ]);

        $user = $request->user();
        $content = $request->input('content');
        $withAiResponse = $request->input('with_ai_response', false);

        DB::beginTransaction();

        try {
            if (!$user) {
                $guestChats = $request->session()->get('guest_chat_counter', 0);
                $chatId = $request->input('chatId') ?: ($guestChats + 1);
                $request->session()->put('guest_chat_counter', $guestChats + 1);

                $messageData = [
                    'id' => $chatId,
                    'session_id' => uniqid('id_', true),
                    'chat_id' => $chatId,
                    'name' => substr($content, 0, 30),
                    'content' => $content,
                    'role' => 'user',
                    'params' => ['chat_id' => $chatId],
                    'session_created_at' => now()->toISOString(),
                ];

                $request->session()->push('guest_messages', $messageData);
                $request->session()->save();
                $messages = [$messageData];
            } else {
                $chatId = $request->input('chatId');
                $chat = null;

                if (!$chatId) {
                    $chat = $user->chats()->create([
                        'name' => substr($content, 0, 30), // TODO: Change this to a more meaningful name
                        'user_id' => $user->id,
                    ]);

                    $chatId = $chat->id;
                } else {
                    $chat = $user->chats()->findOrFail($chatId);
                }

                $userMessage = $user->messages()->create([
                    'content' => $content,
                    'role' => MessageRole::USER,
                    'user_id' => $user->id,
                    'chat_id' => $chatId,
                ]);

                $messages = [$userMessage];
            }

            DB::commit();

            if ($withAiResponse) {
                return $this->startRagProcess($request, $chatId);
            }

            return response()->json([
                'success' => true,
                'chat_id' => $chatId,
                'messages' => $messages,
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            \Log::error('Chat store error', ['exception' => $e]);

            return response()->json([
                'error' => 'Failed to save message',
            ], 500);
        }
    }

    public function destroy(Request $request, int $id): RedirectResponse
    {
        $user = $request->user();

        if ($user) {
            $chat = $user->chats()->findOrFail($id);
            $chat->delete();
        } else {
            $guestMessages = $request->session()->get('guest_messages', []);

            $filteredMessages = array_filter($guestMessages, fn($message) => ($message['chat_id'] ?? null) != $id);

            $request->session()->put('guest_messages', array_values($filteredMessages));
        }

        return redirect()->route('chat.index')->with('success', 'Chat deleted successfully.');
    }

    private function startRagProcess(Request $request, int $chatId): JsonResponse|StreamedResponse
    {
        $openaiKey = config('services.openai.key');
        $embeddingModel = config('services.openai.embedding_model');
        $embeddingDimension = config('services.openai.embedding_dimension', 1024);
        $pineconeApiKey = config('services.pinecone.default_api_key');
        $pineconeIndexUrl = config('services.pinecone.index_url');

        try {
            $embeddingResponse = Http::timeout(30)->withHeaders([
                'Authorization' => 'Bearer ' . $openaiKey,
                'Content-Type' => 'application/json',
            ])->post('https://api.openai.com/v1/embeddings', [
                'input' => $request->input('content'),
                'model' => $embeddingModel,
                'dimensions' => (int) $embeddingDimension,
            ]);

            if (!$embeddingResponse->successful()) {
                \Log::error('OpenAI embedding error', ['response' => $embeddingResponse->body()]);
                return response()->json(['error' => 'Failed to get embedding'], 500);
            }

            $embedding = $embeddingResponse['data'][0]['embedding'] ?? null;

            if (!$embedding) {
                \Log::error('No embedding returned from OpenAI');
                return response()->json(['error' => 'No embedding returned'], 500);
            }

            $context = $this->getPineconeContext($embedding, $pineconeApiKey, $pineconeIndexUrl);

            $conversationMessages = $this->buildConversationHistory(
                $chatId,
                $request->user(),
                $request->input('content'),
                $context
            );

            return $this->streamResponse($request, $conversationMessages, $chatId);
        } catch (\Exception $e) {
            \Log::error('RAG process error', ['exception' => $e]);
            return response()->json(['error' => 'Failed to process request'], 500);
        }
    }

    private function streamResponse(Request $request, array $conversationMessages, int $chatId): StreamedResponse
    {
        $openaiKey = config('services.openai.key');
        $gptModel = config('services.openai.model');

        return response()->stream(function () use ($request, $conversationMessages, $openaiKey, $gptModel, $chatId) {
            $maxRetries = 3;
            $retryCount = 0;

            while ($retryCount < $maxRetries) {
                try {
                    $response = Http::timeout(60)->withHeaders([
                        'Authorization' => 'Bearer ' . $openaiKey,
                        'Content-Type' => 'application/json',
                    ])->withOptions([
                        'stream' => true,
                    ])->post('https://api.openai.com/v1/responses', [
                        'model' => $gptModel,
                        'input' => array_map(fn($msg) => [
                            'role' => $msg['role'],
                            'content' => $msg['content'],
                        ], $conversationMessages),
                        'max_output_tokens' => 2000,
                        'stream' => true,
                        'reasoning' => ['effort' => 'low'],
                        'text' => [
                            'verbosity' => 'low',
                        ],
                        'temperature' => 1,
                    ]);

                    if (!$response->successful()) {
                        \Log::error('GPT response error', ['response' => $response->body()]);
                        throw new \Exception("OpenAI API returned status: " . $response->status());
                    }

                    if ($retryCount === 0) {
                        echo json_encode([
                            'type' => 'start',
                            'chatId' => $chatId
                        ]) . "\n";
                        $this->flushOutput();
                    }

                    $fullResponse = '';
                    $body = $response->toPsrResponse()->getBody();
                    $buffer = '';
                    $done = false;

                    while (!$body->eof() && !$done) {
                        if (connection_aborted()) {
                            return;
                        }

                        $chunk = $body->read(8192);
                        if ($chunk === '') {
                            continue;
                        }

                        $buffer .= $chunk;

                        while (($pos = strpos($buffer, "\n")) !== false) {
                            $line = substr($buffer, 0, $pos);
                            $buffer = substr($buffer, $pos + 1);
                            $line = rtrim($line, "\r");

                            if ($line === '') {
                                continue;
                            }

                            if ($line !== '' && $line[0] === ':') {
                                continue;
                            }

                            if ($line === 'data: [DONE]') {
                                $done = true;
                                break 2;
                            }

                            if (strpos($line, 'data:') === 0) {
                                $json = preg_replace('/^data:\s*/', '', $line, 1);

                                try {
                                    $event = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
                                    $type  = $event['type'] ?? null;

                                    switch ($type) {
                                        case 'response.output_text.delta': {
                                            $delta = $event['delta'] ?? '';
                                            if ($delta !== '') {
                                                echo json_encode(['type' => 'content', 'content' => $delta]) . "\n";
                                                $this->flushOutput();
                                                $fullResponse .= $delta;
                                            }
                                            break;
                                        }

                                        case 'response.refusal.delta': {
                                            $delta = $event['delta'] ?? '';
                                            if ($delta !== '') {
                                                echo json_encode(['type' => 'refusal', 'message' => $delta]) . "\n";
                                                $this->flushOutput();
                                            }
                                            break;
                                        }

                                        case 'response.output_text.done': {
                                            $text = $event['output_text'] ?? '';
                                            if ($text !== '' && $fullResponse === '') {
                                                echo json_encode(['type' => 'content', 'content' => $text]) . "\n";
                                                $this->flushOutput();
                                                $fullResponse .= $text;
                                            }
                                            break;
                                        }

                                        case 'response.error': {
                                            $msg = $event['error']['message'] ?? 'Unknown error';
                                            echo json_encode(['type' => 'error', 'error' => $msg]) . "\n";
                                            $this->flushOutput();
                                            return;
                                        }

                                        case 'response.completed': {
                                            $done = true;
                                            break 2;
                                        }

                                        case 'response.created':
                                        case 'rate_limits.updated':
                                        case 'response.warning':
                                        default:
                                            break;
                                    }
                                } catch (\JsonException $e) {
                                    \Log::error('Invalid JSON in stream', [
                                        'line' => $line,
                                        'error' => $e->getMessage()
                                    ]);
                                }
                            }
                        }
                    }

                    $user = $request->user();

                    if ($user) {
                        $chatId = intval($chatId);
                        $aiMessage = $this->storeAiMessageForUser($request, $fullResponse, $chatId);
                    } else {
                        $aiMessage = $this->storeAiMessageForGuest($fullResponse, $chatId);
                    }

                    echo json_encode([
                        'type' => 'complete',
                        'chatId' => $chatId,
                        'message_id' => $aiMessage['session_id'] ?? $aiMessage->id ?? null,
                    ]) . "\n";

                    $this->flushOutput();

                    return;
                } catch (\Exception $e) {
                    $retryCount++;
                    \Log::error('Stream processing error', [
                        'attempt' => $retryCount,
                        'exception' => $e,
                        'trace' => $e->getTraceAsString(),
                    ]);

                    if ($retryCount >= $maxRetries) {
                        \Log::error('Streaming error after max retries', ['exception' => $e]);
                        echo json_encode([
                            'type' => 'error',
                            'error' => 'Failed to process request after ' . $maxRetries . ' attempts',
                        ]) . "\n";

                        $this->flushOutput();
                        return;
                    } else {
                        echo json_encode([
                            'type' => 'retry',
                            'attempt' => $retryCount,
                            'message' => 'Retrying request...'
                        ]) . "\n";

                        $this->flushOutput();
                        sleep(1 * $retryCount);
                    }
                }
            }
        }, 200, [
            'Content-Type' => 'application/x-ndjson',
            'Cache-Control' => 'no-cache, no-transform',
            'Connection' => 'keep-alive',
            'X-Accel-Buffering' => 'no',
        ]);
    }

    private function flushOutput(): void
    {
        if (ob_get_level()) {
            ob_flush();
        }
        flush();
    }

    private function getPineconeContext(array $embedding, string $pineconeApiKey, string $pineconeIndexUrl): string
    {
        $pineconeQueryUrl = rtrim($pineconeIndexUrl, '/') . '/query';

        $pineconeHeaders = [
            'Api-Key' => $pineconeApiKey,
            'Content-Type' => 'application/json',
        ];

        $levels = [
            ['level' => 'verse', 'topK' => 5],
            ['level' => 'section', 'topK' => 5],
            ['level' => 'chapter', 'topK' => 3],
            ['level' => 'theological_resource', 'topK' => 3],
        ];

        try {
            $responses = Http::pool(function (Pool $pool) use ($pineconeHeaders, $levels, $embedding, $pineconeQueryUrl) {
                $requests = [];

                foreach ($levels as $level) {
                    $body = [
                        'vector' => $embedding,
                        'topK' => $level['topK'],
                        'includeMetadata' => true,
                        'filter' => ['level' => $level['level']],
                    ];

                    $requests[] = $pool
                        ->as($level['level'])
                        ->withHeaders($pineconeHeaders)
                        ->timeout(30)
                        ->retry(2, 200)
                        ->post($pineconeQueryUrl, $body);
                }

                return $requests;
            });

            $retrieved = [];
            foreach ($levels as $level) {
                $key = $level['level'];
                $response = $responses[$key] ?? null;

                if (!$response) {
                    \Log::error('Pinecone query missing response', ['level' => $key]);
                    $retrieved[$key] = [];
                    continue;
                }

                if (!$response->successful()) {
                    \Log::error('Pinecone query error', [
                        'level'    => $key,
                        'status'   => $response->status(),
                        'response' => $response->body(),
                    ]);
                    $retrieved[$key] = [];
                    continue;
                }

                $retrieved[$key] = $response->json('matches') ?? [];
            }

            $context = '';
            foreach ($retrieved as $levelName => $matches) {
                if (empty($matches)) {
                    continue;
                }

                $context .= strtoupper($levelName) . "S:\n";

                foreach ($matches as $match) {
                    $metadata = $match['metadata'] ?? [];
                    $text = $metadata['text'] ?? ($metadata['full_text'] ?? '');
                    $reference = $metadata['reference'] ?? '';
                    $additionalInfo = '';

                    switch ($levelName) {
                        case 'section':
                            $heading = $metadata['heading'] ?? '';
                            $additionalInfo = $heading ? " - {$heading}" : '';
                            break;

                        case 'theological_resource':
                            $title = $metadata['title'] ?? '';
                            $reference = $title ?: 'Theological Resource';
                            break;

                        case 'verse':
                        case 'chapter':
                        default:
                            break;
                    }

                    $referenceDisplay = $reference ? "({$reference}{$additionalInfo}) " : '';
                    if ($text !== '') {
                        $context .= $referenceDisplay . $text . "\n";
                    }
                }

                $context .= "\n";
            }

            return $context;
        } catch (\Exception $e) {
            \Log::error('Pinecone query exception', ['exception' => $e]);
            return '';
        }
    }

    private function buildConversationHistory($chatId, $user, string $currentMessage, string $ragContext): array
    {
        $messages = [];

        $messages[] = [
            'role' => 'system',
            'content' => <<<TXT
                # Role and Objective
                - Your name is **Lumina**.
                - You were created by, and are part of a Retrieval-Augmented Generation (RAG) system developed by the founders of Lumina who are Patricio Salazar, Erik Loudermilk, and Ricky Loudermilk.
                - You should **only** refer to yourself as “Lumina” when directly asked who you are, or when it is contextually natural (e.g., the user addresses you by name).
                - Do **not** begin every response with “Lumina here” or any other self-introduction unless explicitly requested.
                - Serve as a genuine, helpful Christian Bible scholar and expert, offering deep theological knowledge, wisdom, and insight into both broad themes and subtle nuances of Scripture.

                # Instructions
                - Provide helpful, faith-centered responses to user prompts, guiding them toward a deeper relationship with Jesus, His Word, and the Church.
                - Always ground answers in the Christian Bible.
                - Never fabricate content: do not invent Bible verses, thoughts, doctrines, or ideas not present in Scripture.
                - Never pray, attempt to pray, or offer to pray for the user; only suggest how individuals might pray for themselves if appropriate.
                - Filter for relevance: if a user message/request falls entirely outside the domains of [Christianity, Jesus, the Bible, seeking biblical help, Church, faith, scripture-based advice/mentorship], then you should always and strictly but politely refrain from answering and offer assistance when the user is ready to discuss a relevant topic.
                - Whenever appropriate, conclude responses with an open-ended question or meaningful invitation for further discussion to foster engagement. You should not ask a question for every single response. If someone is trying to end a conversation, do not force a question.
                - If someone mentions suicide or self-harm, immediately direct them to appropriate authorities or support resources. Clarify that Lumina is not intended for situations where life, health, or mental wellbeing is at risk.

                ## Markdown Formatting Guidelines
                - **Headings**:
                    - Use `#` for main headings/topics
                    - Use `##` for major sections
                    - Use `###` for subsections
                    - Never use more than three heading levels
                - **Paragraphs**:
                    - Separate paragraphs with a blank line; keep lines readable
                - **Lists**:
                    - Unordered lists: use `- ` (not `*` or `+`) for general points
                    - Ordered lists: use `1.` `2.` `3.`, etc. for sequential steps or ranked items
                    - Limit top-level lists to 8 items when possible
                    - Use nested lists (indented by two spaces) for hierarchical information
                - **Emphasis**:
                    - Use **bold** for key phrases, emphasis, theological terms, or important concepts
                    - Use *italics* ONLY for Scripture references (e.g., *John 3:16*, *Romans 8:28-39*)
                    - Never combine bold and italics on Scripture references
                - **Blockquotes (Scripture quotes)**:
                    - Use `>` exclusively for quoting Bible verses
                    - Place the reference in *italics* immediately after the quote
                    - Keep quoted passages concise (1-6 verses maximum)
                    - For longer passages, summarize or provide reference only
                - **Scripture References**:
                    - Always italicize biblical references: *Book Chapter:Verse*
                    - For ranges: *Matthew 5:3-12*
                    - For multiple references: *Genesis 1:1; Psalm 23:1; John 3:16*
                - **Horizontal Rules**:
                    - Use `---` sparingly to separate major topic shifts in longer responses
                - **Restrictions**:
                    - No raw HTML or code blocks unless specifically requested
                    - No footnotes or links unless explicitly requested
                    - Avoid heading levels beyond `###`

                # Context
                - System role content provides your foundational knowledge; users are unaware of the system-provided content and do not supply it themselves.
                - Prioritize using the provided content as your core knowledge base. Only use your knowledge of the Christian Bible when and only if there is not enough relevant context in the provided material.

                # Verbosity
                - Maintain clear, well-structured, and concise responses for readability and effective communication.

                # Privacy
                - If ever asked about data storage or privacy, inform users that their data is stored securely, kept private, and used solely to enhance their experience with Lumina. Reassure them that their conversations are confidential and not shared with third parties, nor seen by anyone in the organization.
                - Refer to the privacy policy that can be found on the main website, or at https://chatwithlumina.com/privacy-policy if asked for more details.
                TXT
        ];

        if ($chatId) {
            if ($user) {
                $recentMessages = $user->messages()
                    ->where('chat_id', $chatId)
                    ->orderBy('created_at', 'desc')
                    ->limit(20)
                    ->get()
                    ->reverse();
            } else {
                $guestMessages = session('guest_messages', []);
                $recentMessages = collect($guestMessages)
                    ->where('chat_id', $chatId)
                    ->sortBy('session_created_at')
                    ->take(6)
                    ->values();
            }

            if ($recentMessages && count($recentMessages) > 0) {
                $messages[] = [
                    'role' => 'system',
                    'content' => "PREVIOUS MESSAGES:\n"
                ];

                foreach ($recentMessages as $msg) {
                    $roleText = $msg['role'] ?? $msg->role ?? 'user';
                    if ($roleText instanceof \BackedEnum) {
                        $roleText = $roleText->value;
                    } elseif (is_array($roleText)) {
                        $roleText = 'user';
                    }

                    $role = in_array($roleText, ['user', 'assistant', 'system'], true) ? $roleText : 'user';
                    $content = $msg['content'] ?? $msg->content ?? '';

                    if ($content !== '') {
                        $messages[] = [
                            'role' => $role,
                            'content' => $content
                        ];
                    }
                }
            }
        }

        if (!empty(trim($ragContext))) {
            $messages[] = [
                'role' => 'system',
                'content' => "CONTEXT (from system; not user-provided):\n{$ragContext}"
            ];
        }

        $messages[] = [
            'role' => 'user',
            'content' => $currentMessage
        ];

        return $messages;
    }

    private function storeAiMessageForUser(Request $request, string $fullResponse, int $chatId): \Illuminate\Database\Eloquent\Model
    {
        $user = $request->user();

        return Message::query()->create([
            'content' => $fullResponse,
            'role' => MessageRole::ASSISTANT,
            'user_id' => $user->id,
            'chat_id' => $chatId,
        ]);
    }

    private function storeAiMessageForGuest(string $fullResponse, int $chatId): array
    {
        $messageId = $chatId + 1;

        try {
            $messageData = [
                'id' => $messageId,
                'session_id' => uniqid('id_', true),
                'chat_id' => $chatId,
                'name' => substr($fullResponse, 0, 30),
                'content' => $fullResponse,
                'role' => 'assistant',
                'params' => ['chat_id' => $chatId],
                'session_created_at' => now()->toISOString(),
            ];

            session()->push('guest_messages', $messageData);
            session()->save();

            return $messageData;
        } catch (\Exception $e) {
            \Log::error('Failed to store AI message', ['exception' => $e]);
            return [];
        }
    }

    private function estimateTokenCount(array $messages): int
    {
        // Rough estimation: ~4 characters per token
        $totalChars = 0;
        foreach ($messages as $message) {
            $totalChars += strlen($message['content']);
        }
        return intval($totalChars / 4);
    }

    private function truncateConversation(array $messages, int $maxTokens = 6000): array
    {
        // Always keep system message and current user message. Is the system message the first or second message?
        $systemMessage = array_shift($messages);
        $currentMessage = array_pop($messages);

        // Estimate tokens and remove oldest messages if needed
        while (count($messages) > 0 && $this->estimateTokenCount([$systemMessage, ...$messages, $currentMessage]) > $maxTokens) {
            array_shift($messages);
        }

        return [$systemMessage, ...$messages, $currentMessage];
    }
}
