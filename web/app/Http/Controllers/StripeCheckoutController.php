<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StripeCheckoutController extends Controller
{
    public function __invoke(Request $request, string $plan = 'price_1RofbU338HSujneJq5VBjLOn')
    {
        $session = $request->user()
            ->newSubscription('prod_Sk9vJopGt0GV2q', $plan)
            ->checkout([
                'success_url' => route('checkout.success'),
                'cancel_url' => route('checkout.cancel'),
            ]);

        return Inertia::location($session->url);
    }
}
