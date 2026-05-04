import { BookPlusIcon, CheckIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import LuminaCard from './ui/luminaCard';
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
    priceId = 'price_1S7hy23UT84VygR6bTB6XPN3',
    buttonText = 'Get Started Now',
    popular = false,
}) {
    const route = useRoute();

    const handleStartCheckout = (priceId) => {
        if (priceId === 'free') {
            router.visit(route('register'));
        } else {
            router.visit(route('checkout.embedded', { priceId }));
        }
    };

  return (
    <>
        <LuminaCard className={`min-h-[37.938rem] p-6 gap-0 place-content-center lg:flex-1 lg:flex lg:flex-col before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 lg:w-[24.333rem] ${className}`}>
            <LuminaCard.Header className="p-0 mb-8">
                {!popular && (
                    <Badge
                        variant={'luminaPrimary'}
                        className="mb-0"
                    >
                        {badgeText}
                    </Badge>
                )}
                {popular && (
                    <div className="flex justify-between items-center">
                        <Badge
                            variant={'luminaPrimary'}
                            className="mb-0"
                        >
                            {badgeText}
                        </Badge>
                        <span className="text-lg text-primary-200">&#10024; Popular</span>
                    </div>
                )}
                <LuminaCard.Header.Title className="text-[1.75rem] leading-[110%] mb-0">
                    {title}
                </LuminaCard.Header.Title>
                <LuminaCard.Header.CardDescription>
                    {subtitle}
                </LuminaCard.Header.CardDescription>
            </LuminaCard.Header>
            <Separator className="h-[1px] bg-gradient-to-r from-primary-500/0 via-primary-500 lg:w-[5.5rem] to-primary-500/0" />
            <LuminaCard.Content className="p-0 lg:flex-grow">
                <div className="flex justify-start items-center gap-3.5 mb-4 mt-8">
                    <Badge
                        variant={'luminaPrimary'}
                        className="size-8 p-0"
                    >
                        <CheckIcon className="!size-4" />
                    </Badge>
                    <span>{features[0]}</span>
                </div>
                <div className="flex justify-start items-center gap-3.5 mb-4">
                    <Badge
                        variant={'luminaPrimary'}
                        className="size-8 p-0"
                    >
                        <CheckIcon className="!size-4" />
                    </Badge>
                    <span>{features[1]}</span>
                </div>
                <div className="flex justify-start items-center gap-3.5 mb-8">
                    <Badge
                        variant={'luminaPrimary'}
                        className="size-8 p-0"
                    >
                        <CheckIcon className="!size-4" />
                    </Badge>
                    <span>{features[2]}</span>
                </div>
                {yearly && features[3] && (
                    <div className="flex justify-start items-center gap-3.5 mb-8">
                        <BookPlusIcon className="!size-4" />
                        <span>{features[3]}</span>
                    </div>
                )}
                <div className="mb-8">
                    <span className="text-[1.75rem] text-primary-200 font-semibold leading-[110%]">${price.toFixed(2)}</span>
                    {monthly && <span className="text-base font-normal leading-6"> /per month</span>}
                    {yearly && <span className="text-base font-normal leading-6"> /per year</span>}
                </div>
            </LuminaCard.Content>
            <LuminaCard.Footer className="p-0">
                <Button
                    variant={'luminaSecondary'}
                    className="w-full"
                    onClick={() => handleStartCheckout(priceId)}
                >
                    {buttonText}
                </Button>
            </LuminaCard.Footer>
        </LuminaCard>
    </>
  );
}
