<?php

use App\Http\Controllers\JournalController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\StripeCheckoutController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');
Route::post('/chat', [ChatController::class, 'store'])->middleware(['throttle:guest_messages'])->name('chat.store');
Route::get('/chat/{id}', [ChatController::class, 'show'])->name('chat.show');
Route::delete('/chat/{id}', [ChatController::class, 'destroy'])->name('chat.destroy');

Route::get('/journal', [JournalController::class, 'index'])->name('journal.index');
Route::post('/journal', [JournalController::class, 'store'])->middleware(['throttle:guest_messages'])->name('journal.store');
Route::get('/journal/{id}', [JournalController::class, 'show'])->name('journal.show');
Route::delete('/journal/{id}', [JournalController::class, 'destroy'])->name('journal.destroy');

Route::get('/checkout/{priceId?}', StripeCheckoutController::class)->middleware(['auth', 'verified'])->name('checkout.embedded');

if (app()->environment('local')) {
    Route::get('/component-development', function () {
        return Inertia::render('componentDevelopment');
    })->name('component-development');
}

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
