<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $initialMode = $request->has('journal') ? 'journal' : 'chat';
        $data = $request->user()->load('chats', 'journals');

        return Inertia::render('mainApp', [
            'initialMode' => $initialMode,
            'data' => $data,
        ]);
    }
}