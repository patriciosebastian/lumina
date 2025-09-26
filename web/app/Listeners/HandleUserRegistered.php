<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class HandleUserRegistered implements ShouldQueue
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
    public function handle(Registered $event): void
    {
        $user = $event->user;

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '.env('GO_HIGH_LEVEL_KEY'),
            'location-id' => env('GO_HIGH_LEVEL_LOCATION_ID'),
        ])->post(env('GO_HIGH_LEVEL_URL'), [
            'name' => $user->name,
            'email' => $user->email,
        ]);

        if ($response->failed() || $response->clientError() || $response->serverError()) {
            Log::error('Error sending user data to GoHighLevel', [
                'response' => $response->body(),
            ]);
        }
    }
}
