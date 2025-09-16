<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StripeCheckoutController extends Controller
{
    public function __invoke(Request $request, string $priceId = 'price_1S7hy23UT84VygR6bTB6XPN3'): Response
    {
        $checkout = $request->user()
            ->newSubscription('default', $priceId)
            ->checkout([
                'ui_mode' => 'embedded',
                'redirect_on_completion' => 'never',
                'payment_method_types' => [
                    'card',
                    'link',
                    'us_bank_account'
                ],
                'automatic_tax' => ['enabled' => true],
            ]);

        return Inertia::render('embeddedCheckout', [
            'clientSecret' => $checkout->client_secret,
        ]);
    }
}
