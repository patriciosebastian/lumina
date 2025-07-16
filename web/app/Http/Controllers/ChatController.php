<?php

namespace App\Http\Controllers;

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

        \Log::info('ChatController@store called with message. Message: ' . $request->input('message'));

        return Redirect::route('chat')->with('success', 'Message sent successfully');
    }
}