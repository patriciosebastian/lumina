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

        if (!$user) {
            $guestMessages = session('guest_messages', []);
            // \Log::info('Storing guest message in session. Message: ' . $message);
            $guestMessages[] = $message;
            session(['guest_messages' => $guestMessages]);
        } else {
            // Account for saving to existing chats: I need to receive the chat information if the message is being sent from within an existing chat. (ref to my notes)

            $user->chats()->create([
                'name' => substr($message, 0, 30), // TODO: Change this to a more meaningful name
                'user_id' => $user->id,
            ])->messages()->create([
                'content' => $message,
                'role' => MessageRole::USER,
            ]);
        }

        return Redirect::route('chat')->with('success', 'Message sent successfully');
    }
}