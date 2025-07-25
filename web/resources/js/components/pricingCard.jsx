import { CheckIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import SalosCard from './ui/salosCard';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { router } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function PricingCard({
    className = '',
    badgeText = '',
    title = '',
    subtitle = '',
    features = [],
    monthly = false,
    yearly = false,
    price = 0.00,
    priceId = 'price_1RofbU338HSujneJq5VBjLOn',
    buttonText = 'Get Started Now',
    popular = false,
}) {
    const route = useRoute();

    const handleStartCheckout = (priceId) => {
        router.post(route('checkout.embedded', { priceId }));
    };

  return (
    <>
        <SalosCard className={`h-[37.938rem] p-6 gap-0 place-content-center ${popular ? 'before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300' : ''} lg:w-[24.333rem] ${className}`}>
            <SalosCard.Header className="space-y-4 p-0 mb-8">
                <Badge
                    variant={'salosPrimary'}
                    className="mb-0"
                >
                    {badgeText}
                </Badge>
                <SalosCard.Header.Title className="text-[1.75rem] leading-[110%] mb-0">
                    {title}
                </SalosCard.Header.Title>
                <SalosCard.Header.CardDescription>
                    {subtitle}
                </SalosCard.Header.CardDescription>
            </SalosCard.Header>
            <Separator className="h-[1px] bg-gradient-to-r from-primary-500/0 via-primary-500 lg:w-[5.5rem] to-primary-500/0" />
            <SalosCard.Content className="p-0">
                <div className="flex justify-start items-center gap-3.5 mb-4 mt-8">
                    <Badge
                        variant={'salosPrimary'}
                        className="size-8 p-0"
                    >
                        <CheckIcon className="!size-4" />
                    </Badge>
                    <span>{features[0]}</span>
                </div>
                <div className="flex justify-start items-center gap-3.5 mb-4">
                    <Badge
                        variant={'salosPrimary'}
                        className="size-8 p-0"
                    >
                        <CheckIcon className="!size-4" />
                    </Badge>
                    <span>{features[1]}</span>
                </div>
                <div className="flex justify-start items-center gap-3.5 mb-8">
                    <Badge
                        variant={'salosPrimary'}
                        className="size-8 p-0"
                    >
                        <CheckIcon className="!size-4" />
                    </Badge>
                    <span>{features[2]}</span>
                </div>
                <div className="mb-8">
                    <span className="text-[1.75rem] text-primary-200 font-semibold leading-[110%]">${price.toFixed(2)}</span>
                    {monthly && <span className="text-base font-normal leading-6"> /per month</span>}
                    {yearly && <span className="text-base font-normal leading-6"> /per year</span>}
                </div>
            </SalosCard.Content>
            <SalosCard.Footer className="p-0">
                <Button
                    variant={'salosSecondary'}
                    className="w-full"
                    onClick={() => handleStartCheckout(priceId)}
                >
                    {buttonText}
                </Button>
            </SalosCard.Footer>
        </SalosCard>
    </>
  );
}
