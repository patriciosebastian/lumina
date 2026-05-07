const pricingCards = [
    {
        tier: 'basic',
        title: 'The Reader',
        description: 'Open the door. A generous taste — enough to read with Lumina each morning if you\'d like.',
        features: [
            'Unlimited reading of any passage',
            'Twenty conversations each month',
            'Three saved notebooks',
            'Cross-translation comparison',
        ],
        monthlyPrice: 0,
        cta: 'Begin reading',
        recommended: false,
    },
    {
        tier: 'pro',
        title: 'The Companion',
        description: 'For the slow reader. The one who keeps a journal, returns to passages, and asks the longer kind of question.',
        features: [
            'Everything in basic',
            'Unlimited conversations and notebooks',
            'Greek and Hebrew lexical lookups',
            'Daily lectionary, sent at first light',
            'A small thanks to the scholars cited',
        ],
        monthlyPrice: 9,
        monthlyPriceId: import.meta.env.VITE_STRIPE_PRO_MONTHLY_PRICE_ID,
        cta: 'Begin a free month',
        recommended: true,
    },
    // {
    //     tier: 'premium',
    //     title: 'The Scholar',
    //     description: 'For the dedicated reader. The one who engages deeply with the text and seeks advanced insights.',
    //     features: [
    //         'Everything in pro',
    //         'Priority access to new features and improvements',
    //         'Direct line for feedback and suggestions',
    //         'A small thanks to the scholars cited',
    //     ],
    //     monthlyPrice: 15,
    //     monthlyPriceId: import.meta.env.VITE_STRIPE_PREMIUM_MONTHLY_PRICE_ID,
    //     cta: 'Begin a free month',
    //     recommended: false,
    // },
];

export default pricingCards;
