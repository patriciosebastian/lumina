<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ChatController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/chat', [ChatController::class, 'index'])->name('chat');
Route::post('/chat/message', [ChatController::class, 'store'])
    ->middleware(['throttle:guest_chat'])
    ->name('chat.message');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/component-development', function () {
    return Inertia::render('componentDevelopment');
})->name('component-development');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
