<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JournalController extends Controller
{
    public function index(Request $request): Response
    {
        if ($request->user()) {
            $data = $request->user()->load('journals');
        } else {
            $guestJournals = $request->session()->get('guest_messages', []);
            $data = [
                'journals' => collect($guestJournals)->where('journal_id', '!=', null)->values(),
            ];
        }

        return Inertia::render('mainApp', [
            'initialMode' => 'journal',
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
