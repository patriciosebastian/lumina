<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JournalController extends Controller
{
    public function index(Request $request)
    {
        $initialMode = $request->has('journal') ? 'journal' : 'chat';

        if ($request->user()) {
            $data = $request->user()->load('journals');
        } else {
            $guestMessages = $request->session()->get('guest_messages', []);
            $data = collect($guestMessages)->where('journal_id', '!=', null)->values();
        }

        return inertia('mainApp', [
            'initialMode' => $initialMode,
            'data' => $data,
        ]);
    }

    public function show(Request $request, $id)
    {
        // Logic to show a specific journal entry
    }

    public function store(Request $request)
    {
        // Logic to store a new journal entry
    }
}
