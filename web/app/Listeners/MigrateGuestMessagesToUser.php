<?php

namespace App\Listeners;

use App\Enums\MessageRole;
use Illuminate\Auth\Events\Login;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class MigrateGuestMessagesToUser
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Login|Registered $event): void
    {
        if (Session::has('guest_messages')) {
            DB::transaction(function () use ($event) {
                $user = $event->user;
                $allSessionMessages = collect(session('guest_messages', []));
                $chatMessages = $allSessionMessages->whereNotNull('chat_id')->sortBy('session_created_at');
                $chatIds = $chatMessages->pluck('chat_id')->unique();

                $chatIdMap = [];

                if ($chatIds->isNotEmpty()) {
                    foreach ($chatIds as $sessionChatId) {
                        $messagesInChat = $chatMessages->where('chat_id', $sessionChatId);
                        if ($messagesInChat->isNotEmpty()) {
                            $newChat = $user->chats()->create([
                                'name' => $messagesInChat->first()['name'] ?? "Chat-$sessionChatId",
                                'user_id' => $user->id,
                            ]);
                            $chatIdMap[$sessionChatId] = $newChat->id;
                        }
                    }
                }

                if ($chatMessages->isNotEmpty()) {
                    foreach ($chatMessages as $message) {
                        $user->messages()->create([
                            'content' => $message['content'],
                            'role' => MessageRole::from($message['role']),
                            'chat_id' => $chatIdMap[$message['chat_id']],
                            'user_id' => $user->id,
                        ]);
                    }
                }
            });

            Session::forget('guest_messages');
        }
    }
}
