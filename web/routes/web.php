<?php

use App\Http\Controllers\JournalController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\StripeCheckoutController;
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
Route::post('/chat/{id}', [ChatController::class, 'destroy'])->name('chat.destroy');

Route::get('/journal', [JournalController::class, 'index'])->name('journal.index');
Route::get('/journal/{id}', [JournalController::class, 'show'])->name('journal.show');
Route::post('/journal', [JournalController::class, 'store'])
    ->middleware(['throttle:guest_chat'])
    ->name('journal.store');
Route::post('/journal/{id}', [JournalController::class, 'destroy'])->name('journal.destroy');

Route::get('/checkout/{plan?}', StripeCheckoutController::class)
    ->middleware(['auth', 'verified'])
    ->name('checkout');

Route::view('/checkout/success', 'checkoutSuccess')
    ->middleware(['auth', 'verified'])
    ->name('checkout.success'); // TODO: Create

Route::view('/checkout/cancel', 'checkoutCancel')
    ->middleware(['auth', 'verified'])
    ->name('checkout.cancel'); // TODO: Create

// Make this route accessible only in local development
Route::get('/component-development', function () {
    return Inertia::render('componentDevelopment');
})->name('component-development');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
