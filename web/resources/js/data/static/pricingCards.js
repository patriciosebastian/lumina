const pricingCards = [
    {
        tier: 'basic',
        title: 'The Reader',
        description: 'Open the door. Bring your first questions and see what the Bible says.',
        features: [
            'Bible-grounded AI chat',
            'Up to 10 questions per day',
            'Full access to scripture conversations',
        ],
        monthlyPrice: 0,
        cta: 'Start asking',
        recommended: false,
    },
    {
        tier: 'pro',
        title: 'The Companion',
        description: 'For the slow reader. The one who comes back. The one with more questions than one month can hold.',
        features: [
            'Everything in free',
            'Unlimited conversations',
            'Priority responses',
        ],
        monthlyPrice: 9,
        monthlyPriceId: import.meta.env.VITE_STRIPE_PRO_MONTHLY_PRICE_ID,
        cta: 'Begin a free month',
        recommended: true,
    },
];

export default pricingCards;
