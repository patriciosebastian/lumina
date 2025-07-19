<?php

use App\Http\Controllers\JournalController;
use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');
Route::get('/chat/{id}', [ChatController::class, 'show'])->name('chat.show');
Route::post('/chat', [ChatController::class, 'store'])
    ->middleware(['throttle:guest_chat'])
    ->name('chat.store');

Route::get('/journal', [JournalController::class, 'index'])->name('journal.index');
Route::get('/journal/{id}', [JournalController::class, 'show'])->name('journal.show');
Route::post('/journal', [JournalController::class, 'store'])
    ->middleware(['throttle:guest_chat'])
    ->name('journal.store');

// Make this route accessible only in local development
Route::get('/component-development', function () {
    return Inertia::render('componentDevelopment');
})->name('component-development');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
