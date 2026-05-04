import { useCallback, useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import LuminaLogo from '@/components/ui/luminaLogo';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function CheckoutEmbedded({ clientSecret }) {
    const [isComplete, setIsComplete] = useState(false);

    const handleComplete = () => setIsComplete(true);

    const stripePromise = useMemo(
        () => loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY),
        []
    );

    const fetchClientSecret = useCallback(() => {
        return Promise.resolve(clientSecret);
    }, [clientSecret]);

    const options = useMemo(() => ({
        fetchClientSecret,
        onComplete: handleComplete,
    }), [fetchClientSecret]);

  return isComplete ? (
    <div className="w-full h-screen mx-auto overflow-hidden">
        <Link
            href={route('chat.index')}
            prefetch={['hover', 'click']}
            cacheFor={86400} // 1 day
            className="hidden lg:block mx-auto w-fit"
        >
            <LuminaLogo
                width={292}
                height={80}
                className="mt-6 mx-auto"
            />
        </Link>
        <div className="w-full h-2/3 flex flex-col justify-center items-center space-y-8">
            <h2 className="text-lg text-center text-primary-300 font-semibold leading-9 lg:text-2xl">
                Your payment was successful.<br /> Thank you for your purchase!
            </h2>
            <Button
                asChild
                variant={'luminaSecondaryAlt'}
                size={'luminaPrimary'}
                className="w-fit mx-auto"
            >
                <Link
                    href={route('chat.index')}
                    prefetch={['hover', 'click']}
                    cacheFor={86400} // 1 day
                    className="w-fit mx-auto"
                >
                    Go to Chat
                </Link>
            </Button>
        </div>
    </div>
  ) : (
    <div
        id="checkout"
        className="w-full mx-auto"
    >
        <Link
            href={route('chat.index')}
            prefetch={['hover', 'click']}
            cacheFor={86400} // 1 day
            className="hidden lg:block mx-auto w-fit"
        >
            <LuminaLogo
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
