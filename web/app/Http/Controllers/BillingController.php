<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();

        if ($user) {
            $data = $user->load('chats');
        } else {
            $guestMessages = $request->session()->get('guest_messages', []);
            $data = [
                'chats' => collect($guestMessages)->whereNotNull('chat_id')->values(),
            ];
        }

        return Inertia::render('settings/billing', [
            'chatsData' => $data,
        ]);
    }
}
