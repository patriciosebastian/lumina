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
    <div className="w-full min-h-screen bg-bg text-ink overflow-hidden">
        <Link
            href={route('chat.index')}
            prefetch={['hover', 'click']}
            cacheFor={86400}
            className="hidden lg:block mx-auto w-fit"
        >
            <LuminaLogo
                width={292}
                height={80}
                className="mt-8 mx-auto"
            />
        </Link>
        <div className="w-full h-2/3 flex flex-col justify-center items-center gap-8 px-6 py-20">
            <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-gold">
                Payment Complete
            </p>
            <div className="flex flex-col items-center gap-3">
                <span className="block w-16 h-px bg-gold opacity-55" />
            </div>
            <h2 className="font-serif italic font-light text-2xl lg:text-4xl text-center text-ink leading-snug max-w-md">
                Your payment was successful.<br />
                <span className="text-gold">Thank you</span> for your purchase.
            </h2>
            <p className="font-book text-base text-ink-2 text-center max-w-xs leading-relaxed">
                Your conversation with Lumina awaits.
            </p>
            <Button
                asChild
                variant={'luminaPrimary'}
                size={'luminaPrimary'}
                className="w-fit mx-auto mt-2"
            >
                <Link
                    href={route('chat.index')}
                    prefetch={['hover', 'click']}
                    cacheFor={86400}
                >
                    Go to Chat
                </Link>
            </Button>
        </div>
    </div>
  ) : (
    <div
        id="checkout"
        className="w-full min-h-screen bg-bg"
    >
        <Link
            href={route('chat.index')}
            prefetch={['hover', 'click']}
            cacheFor={86400}
            className="hidden lg:block mx-auto w-fit"
        >
            <LuminaLogo
                width={292}
                height={80}
                className="mt-8 mb-2 mx-auto"
            />
        </Link>
        <div className="hidden lg:flex justify-center mb-8">
            <span className="block w-24 h-px bg-gold opacity-40" />
        </div>
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
    </div>
  );
}
