<?php

namespace App\Providers;

use App\Models\Testimonial;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        RateLimiter::for('guest_messages', function (Request $request) {
            if (!$request->user()) {
                return Limit::perDay(3)->by($request->ip());
            }
        });

        Testimonial::preventSilentlyDiscardingAttributes();

        Cashier::calculateTaxes();
    }
}
