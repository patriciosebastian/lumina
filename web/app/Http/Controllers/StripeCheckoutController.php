<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Cashier\Cashier;

class StripeCheckoutController extends Controller
{
    public function __invoke(Request $request, string $priceId = 'price_1RofbU338HSujneJq5VBjLOn'): Response
    {
        $stripe = Cashier::stripe();

        $session = $stripe->checkout->sessions->create([
            'mode' => 'subscription',
            'line_items' => [[
                'price' => $priceId,
                'quantity' => 1,
            ]],
            'payment_method_types' => [
                'affirm',
                'apple_pay',
                'amazon_pay',
                'bancontact',
                'card',
                'cashapp',
                'eps',
                'google_pay',
                'klarna',
                'link',
                'us_bank_account'
            ],
            'automatic_tax' => ['enabled' => true],
            'redirect_on_completion' => 'never',
            'ui_mode' => 'embedded',
        ]);

        return Inertia::render('embeddedCheckout', [
            'clientSecret' => $session->client_secret,
        ]);
    }
}
