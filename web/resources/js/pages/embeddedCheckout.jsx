import { useCallback, useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

export default function CheckoutEmbedded({ clientSecret }) {
    const stripePromise = useMemo(
        () => loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY),
        []
    );

    const fetchClientSecret = useCallback(() => {
        return Promise.resolve(clientSecret);
    }, [clientSecret]);

    const options = useMemo(() => ({
        fetchClientSecret
    }), [fetchClientSecret]);

  return (
    <div
        id="checkout"
        className="lg:w-full lg:mx-auto lg:top-0 lg:translate-y-1/8"
    >
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    </div>
  );
}
