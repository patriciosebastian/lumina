import { useCallback, useMemo } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import SalosLogo from '@/components/ui/salosLogo';
import { Link } from '@inertiajs/react';

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
        className="w-full mx-auto"
    >
        <Link
            href={route('chat.index')}
            prefetch={['hover', 'click']}
            cacheFor={86400} // 1 day
            className="hidden lg:block mx-auto"
        >
            <SalosLogo
                width={292}
                height={80}
                className="mt-6 mb-8 mx-auto"
            />
        </Link>
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    </div>
  );
}
