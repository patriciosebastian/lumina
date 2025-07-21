<?php

namespace App\Http\Controllers;

use App\Enums\MessageRole;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

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
        ]);
    }

    public function show(Request $request, $id): Response
    {
        if ($request->user()) {
            $chat = $request->user()->chats()->find($id);
            $messages = $chat ? $chat->load('messages')->messages->sortByDesc('created_at') : collect();
            $allChats = $request->user()->chats()->get();
        } else {
            $allChats = collect($request->session()->get('guest_messages', []))
                ->filter(function ($message) {
                    return isset($message['chat_id']);
                })
                ->where('chat_id', $id)
                ->sortByDesc('session_created_at')
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
                'messages' => $messages,
            ]
        ]);
    }

    public function store(Request $request): RedirectResponse|Response
    {
        $request->validate([
            'content' => 'required|string|max:500',
        ]);

        $user = $request->user();
        $content = $request->input('content');
        $role = $request->input('role');

        if (!$user) {
            $chatId = $request->input('chatId') ?: uniqid(more_entropy: true);

            $messageData = [
                'session_id' => uniqid('id_', true),
                'chat_id' => $chatId,
                'name' => substr($content, 0, 30),
                'content' => $content,
                'role' => $role,
                'params' => ['chat_id' => $chatId],
                'session_created_at' => now()->toISOString(),
            ];

            $request->session()->push('guest_messages', $messageData);
            return redirect()->route('chat.index');
        }

        $id = $request->input('chatId');

        if (!$id) {
            $user->chats()->create([
                'name' => substr($content, 0, 30), // TODO: Change this to a more meaningful name
                'user_id' => $user->id,
            ]);

            $user->messages()->create([
                'content' => $content,
                'role' => MessageRole::USER,
                'user_id' => $user->id,
                'chat_id' => $user->chats()->latest()->first()->id,
            ]);

            return Inertia::render('mainApp', [
                'initialMode' => 'chat',
                'data' => [
                    'chats' => $user->chats()->get()->toArray(),
                    'id' => $user->chats()->latest()->first()->id,
                ],
            ]);
        }

        $user->messages()->create([
            'content' => $content,
            'role' => MessageRole::USER,
            'user_id' => $user->id,
            'chat_id' => $id,
        ]);

        return Inertia::render('mainApp', [
            'data' => [
                'chats' => $user->chats()->get()->toArray(),
                'id' => $id,
            ],
        ]);
    }
}