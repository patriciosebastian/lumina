const pricingCards = [
    {
        badgeText: "Basic Access",
        title: "Free",
        subtitle: "Basic functions with no commitment.",
        features: [
            "Limited AI interactions per day (3 messages per day).",
            "Session based conversations with limited memory recall.",
            "Limited access to all features."
        ],
        monthlyPrice: 0.00,
        yearlyPrice: 0.00,
        monthlyPriceId: 'free',
        yearlyPriceId: 'free',
        buttonText: "Get Started Now",
        popular: false
    },
    {
        badgeText: "General Access",
        title: "Standard",
        subtitle: "Essential features without limitations.",
        features: [
            "Unlimited interactions and messages.",
            "Memory Recall For personalized responses.",
            "Open-ended spiritual journaling tool."
        ],
        monthlyPrice: 7.49,
        yearlyPrice: 84.99,
        monthlyPriceId: import.meta.env.VITE_STRIPE_STANDARD_MONTHLY_PRICE_ID,
        yearlyPriceId: import.meta.env.VITE_STRIPE_STANDARD_YEARLY_PRICE_ID,
        buttonText: "Get Started Now",
        popular: true
    },
    {
        badgeText: "VIP Access",
        title: "Premium",
        subtitle: "Unlimited functionality and features.",
        features: [
            "All features in the standard package.",
            "Advanced Memory Recall for deeper and evolving conversations.",
            "SALOS Overflow community."
        ],
        monthlyPrice: 12.49,
        yearlyPrice: 124.99,
        monthlyPriceId: import.meta.env.VITE_STRIPE_PREMIUM_MONTHLY_PRICE_ID,
        yearlyPriceId: import.meta.env.VITE_STRIPE_PREMIUM_YEARLY_PRICE_ID,
        buttonText: "Get Started Now",
        popular: false
    }
];

export default pricingCards;
