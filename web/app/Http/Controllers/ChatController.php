<?php

namespace App\Http\Controllers;

use App\Enums\MessageRole;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ChatController extends Controller
{
    public function index(Request $request): Response
    {
        $initialMode = $request->has('journal') ? 'journal' : 'chat';

        if ($request->user()) {
            $data = $request->user()->load('chats', 'journals');
        } else {
            $guestMessages = $request->session()->get('guest_messages', []);
            $data = [
                'chats' => collect($guestMessages)->where('chatId', '!=', null)->values(),
                'journals' => collect($guestMessages)->where('journalId', '!=', null)->values(),
            ];
        }

        // $request->session()->forget('guest_messages');

        return Inertia::render('mainApp', [
            'initialMode' => $initialMode,
            'data' => $data,
        ]);
    }

    public function store(Request $request): JsonResponse|RedirectResponse
    {
        $request->validate([
            'content' => 'required|string|max:500',
        ]);

        $user = $request->user();
        $content = $request->input('content');
        $role = $request->input('role');
        $isMiracleJournal = $request->boolean('journal');

        if (!$user && $isMiracleJournal) {
            $journalId = $request->input('journalId') ?: uniqid(more_entropy: true);

            $messageData = [
                'id' => uniqid('id_', true),
                'journalId' => $journalId,
                'name' => substr($content, 0, 30),
                'content' => $content,
                'role' => $role,
                'params' => ['journal' => 'true', 'journalId' => $journalId],
                'created_at' => now()->toISOString(),
            ];

            $request->session()->push('guest_messages', $messageData);
            return redirect()->route('chat', ['journal' => 'true']);
        }

        if (!$user && !$isMiracleJournal) {
            $chatId = $request->input('chatId') ?: uniqid(more_entropy: true);

            $messageData = [
                'id' => uniqid('id_', true),
                'chatId' => $chatId,
                'name' => substr($content, 0, 30),
                'content' => $content,
                'role' => $role,
                'params' => ['chatId' => $chatId],
                'created_at' => now()->toISOString(),
            ];

            $request->session()->push('guest_messages', $messageData);
            return redirect()->route('chat');
        }

        if ($user && $isMiracleJournal) {
            // 
        }

        $user->chats()->create([
            'name' => substr($content, 0, 30), // TODO: Change this to a more meaningful name
            'user_id' => $user->id,
        ])->messages()->create([
            'content' => $content,
            'role' => MessageRole::USER,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully',
        ], 200, ['X-Inertia' => 'true',]);
    }
}