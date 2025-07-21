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

    public function show(Request $request, $id): Response
    {
        if ($request->user()) {
            $journal = $request->user()->journals()->find($id);
            $entries = $journal ? $journal->load('entries')->entries->sortByDesc('created_at') : collect();
            $allJournals = $request->user()->journals()->get();
        } else {
            $allJournals = collect($request->session()->get('guest_messages', []))
                ->filter(function ($message) {
                    return isset($message['journal_id']);
                })
                ->where('journal_id', '===', $id)
                ->sortByDesc('session_created_at')
                ->values();

            $entries = collect($allJournals)
                ->groupBy('journal_id')
                ->map(function ($entry, $journalId) {
                    return (object) [
                        'id' => $journalId,
                        'name' => $entry->first()['name'],
                        'created_at' => $entry->first()['session_created_at'],
                    ];
                })
                ->values();
        }

        return Inertia::render('mainApp', [
            'initialMode' => 'journal',
            'data' => [
                'journals' => $allJournals,
                'messages' => $entries,
            ]
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:500',
        ]);

        $user = $request->user();
        $content = $request->input('content');
        $role = $request->input('role');

        if (!$user) {
            $journalId = $request->input('journalId') ?: uniqid(more_entropy: true);

            $journalData = [
                'session_id' => uniqid('id_', true),
                'journal_id' => $journalId,
                'name' => substr($content, 0, 30),
                'content' => $content,
                'role' => $role,
                'params' => ['journal' => 'true', 'journal_id' => $journalId],
                'session_created_at' => now()->toISOString(),
            ];

            $request->session()->push('guest_messages', $journalData);
            return redirect()->route('journal.index');
        }

        // Save for auth users
    }
}
