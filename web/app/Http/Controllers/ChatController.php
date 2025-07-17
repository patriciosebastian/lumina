<?php

namespace App\Http\Controllers;

use App\Enums\MessageRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $initialMode = $request->has('journal') ? 'journal' : 'chat';
        $data = $request->user() ? $request->user()->load('chats', 'journals') : [];

        return Inertia::render('mainApp', [
            'initialMode' => $initialMode,
            'data' => $data,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'message' => 'required|string|max:500',
        ]);

        $user = $request->user();
        $message = $request->input('message');
        $isMiracleJournal = $request->has('journal');

        if (!$user && $isMiracleJournal) {
            $request->session()->push('guest_messages', $message);

            return redirect()->route('chat', ['journal' => true]);
        }

        if (!$user && !$isMiracleJournal) {
            $request->session()->push('guest_messages', $message);

            return Redirect::route('chat');
        }

        if ($user && $isMiracleJournal) {
            // 
        }

        $user->chats()->create([
            'name' => substr($message, 0, 30), // TODO: Change this to a more meaningful name
            'user_id' => $user->id,
        ])->messages()->create([
            'content' => $message,
            'role' => MessageRole::USER,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent successfully',
        ], 200, ['X-Inertia' => 'true',]);
    }
}