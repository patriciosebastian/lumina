<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\JournalController;
use App\Http\Controllers\MarketingCopyController;
use App\Http\Controllers\StripeCheckoutController;
use App\Models\MarketingCopy;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'marketingCopy' => MarketingCopy::getAllFormatted(),
    ]);
})->middleware('compress')->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->middleware('compress')->name('about');

Route::get('/privacy-policy', function () {
    return Inertia::render('privacyPolicy');
})->middleware('compress')->name('privacy-policy');

Route::get('/terms', function () {
    return Inertia::render('termsAndConditions');
})->middleware('compress')->name('terms');

Route::get('/chat', [ChatController::class, 'index'])->name('chat.index');
Route::post('/chat', [ChatController::class, 'store'])->middleware(['throttle:guest_messages'])->name('chat.store');
Route::get('/chat/{id}', [ChatController::class, 'show'])->name('chat.show');
Route::delete('/chat/{id}', [ChatController::class, 'destroy'])->name('chat.destroy');

Route::get('/journal', [JournalController::class, 'index'])->name('journal.index');
Route::post('/journal', [JournalController::class, 'store'])->middleware(['throttle:guest_messages'])->name('journal.store');
Route::get('/journal/{id}', [JournalController::class, 'show'])->name('journal.show');
Route::delete('/journal/{id}', [JournalController::class, 'destroy'])->name('journal.destroy');

Route::get('/checkout/{priceId?}', StripeCheckoutController::class)->middleware(['auth', 'verified'])->name('checkout.embedded');

// Admin Routes
Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/marketing-copy', [MarketingCopyController::class, 'index'])->name('marketing-copy.index');
    Route::put('/marketing-copy/{marketingCopy}', [MarketingCopyController::class, 'update'])->name('marketing-copy.update');
    Route::put('/marketing-copy', [MarketingCopyController::class, 'bulkUpdate'])->name('marketing-copy.bulk-update');
});

if (app()->environment('local')) {
    Route::get('/component-development', function () {
        return Inertia::render('componentDevelopment');
    })->name('component-development');
}

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
