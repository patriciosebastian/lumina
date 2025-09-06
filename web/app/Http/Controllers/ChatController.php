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
            $guestMessages = $request->session()->get('guest_messages', []);
            $data = [
                'chats' => collect($guestMessages)->where('chat_id', '!=', null)->values(),
            ];
        }

        return Inertia::render('mainApp', [
            'initialMode' => 'chat',
            'data' => $data,
            'chatboxMessage' => $request->input('message'),
        ]);
    }

    public function show(Request $request, $id): Response
    {
        if ($request->user()) {
            $chat = $request->user()->chats()->find($id);
            $messages = $chat ? $chat->load('messages')->messages->sortBy('created_at') : collect();
            $allChats = $request->user()->chats()->get();
        } else {
            $allChats = collect($request->session()->get('guest_messages', []))
                ->filter(function ($message) {
                    return isset($message['chat_id']);
                })
                ->where('chat_id', $id)
                ->sortBy('session_created_at')
                ->values();

            $messages = collect($allChats)
                ->groupBy('chat_id')
                ->map(function ($message, $chatId) {
                    return (object) [
                        'id' => $chatId,
                        'name' => $message->first()['name'],
                        'created_at' => $message->first()['session_created_at'],
                    ];
                })
                ->values();
        }

        return Inertia::render('mainApp', [
            'initialMode' => 'chat',
            'data' => [
                'chats' => $allChats,
                // 'messages' => $messages,
                'messages' => ($messages instanceof \Illuminate\Support\Collection) ? $messages->values()->all() : (is_array($messages) ? $messages : []),
            ]
        ]);
    }

    public function store(Request $request): JsonResponse|StreamedResponse
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
                $chatId = $request->input('chatId') ?: uniqid(more_entropy: true);

                $messageData = [
                    'session_id' => uniqid('id_', true),
                    'chat_id' => $chatId,
                    'name' => substr($content, 0, 30),
                    'content' => $content,
                    'role' => 'user',
                    'params' => ['chat_id' => $chatId],
                    'session_created_at' => now()->toISOString(),
                ];

                $request->session()->push('guest_messages', $messageData);
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

    public function destroy(Request $request, $id): RedirectResponse
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

    private function startRagProcess(Request $request, $chatId): JsonResponse|StreamedResponse
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

    private function streamResponse(Request $request, array $conversationMessages, $chatId): StreamedResponse
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
                                            $usage = $event['response']['usage'] ?? null;
                                            \Log::info('Response completed', ['usage' => $usage]);
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
                                    \Log::warning('Invalid JSON in stream', [
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
            You are a genuine, helpful, Christian Bible scholar and expert. You have deep theological knowledge on the contents of the Christian Bible. You understand big picture themes, and subtle nuances of the scriptures. You are to provide helpful answers to requests and prompts from users regarding their faith journey, and any of their inquiries in a way that honors Jesus Christ and His Word. You should always lead users back to intimate relationship with Jesus and the scriptures, and the Church. Do not make up anything on behalf of the Bible--do not make up verses, or thoughts or anything else. Always try to end your responses in a question or in a way that invites further discussion in a meaningful way, but only if it makes sense to do so.
            TXT
        ];

        $messages[] = [
            'role' => 'system',
            'content' => <<<TXT
            IMPORTANT: You are being provided content from the system (system role)--the content is not provided from the user (user role). The user is not providing you with any content, and they do not know exactly what content you are being provided. You are to use the content your are being provided and your knowledge of the Christian Bible as your fundamental knowledge base and point of reasoning when you answer questions and comments and craft your response.
            TXT
        ];

        $messages[] = [
            'role' => 'system',
            'content' => <<<TXT
            IMPORTANT: Markdown formatting contract:
                Headings:
                - Use # for main headings
                - Use ## for section headings and subheadings
                - Use ### for subsections
                - Never use #### or deeper.

                Paragraphs:
                - Write normal paragraphs separated by a blank line. Keep lines readable.

                Lists:
                - Unordered lists: use "- " for bullet points (never "*" or "+").
                - Ordered lists: use "1." "2." "3." numbering (Markdown style).
                - Keep lists concise (<= 8 items when possible). Nesting is allowed; indent by two spaces.

                Emphasis:
                - **Bold** for emphasis and key phrases.
                - *Italics* ONLY for scripture references (e.g., *John 3:16*), not for emphasis.
                - Don't combine bold+italics on Scripture references.

                Blockquotes (Scripture quotes):
                - Use > for biblical quotations only.
                - Put the reference in *italics* on the same line or the line after the quote.
                - Keep quoted blocks short (1-4 lines).

                What NOTE to use:
                - No tables, images, raw HTML, or code fences unless explicitly requested.
                - No footnotes or link syntax unless the user asks.
                - Avoid headings beyond ###.

                Keep responses well-structured and readable.
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

    private function storeAiMessageForUser(Request $request, string $fullResponse, $chatId): \Illuminate\Database\Eloquent\Model
    {
        $user = $request->user();

        return Message::query()->create([
            'content' => $fullResponse,
            'role' => MessageRole::ASSISTANT,
            'user_id' => $user->id,
            'chat_id' => $chatId,
        ]);
    }

    private function storeAiMessageForGuest(string $fullResponse, $chatId): array
    {
        try {
            $messageData = [
                'session_id' => uniqid('id_', true),
                'chat_id' => $chatId,
                'name' => substr($fullResponse, 0, 30),
                'content' => $fullResponse,
                'role' => 'assistant',
                'params' => ['chat_id' => $chatId],
                'session_created_at' => now()->toISOString(),
            ];

            session()->push('guest_messages', $messageData);
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
