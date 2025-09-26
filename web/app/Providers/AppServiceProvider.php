<?php

namespace App\Providers;

use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Laravel\Cashier\Cashier;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use App\Listeners\HandleUserRegistered;

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

        Gate::define('viewPulse', function (User $user) {
            return in_array($user->email, [
                'psebastiansalazar@gmail.com',
                'salosengineering@gmail.com',
                'erikloudermilk@yahoo.com',
                'rickyloudermilk14@yahoo.com',
            ]);
        });

        Testimonial::preventSilentlyDiscardingAttributes();

        Cashier::calculateTaxes();

        Event::listen(Registered::class, HandleUserRegistered::class);
    }
}
