import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { Head, Link } from '@inertiajs/react';
import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { useRoute } from 'ziggy-js';

export default function Billing({ chatsData, userHasActiveSubscription }) {
    const route = useRoute();
    const userHasPurchased = userHasActiveSubscription;

    return (
        <AppLayout
            data={chatsData.chats}
        >
            <Head title="Billing" />

            <SettingsLayout>
                {!userHasPurchased && (
                    <div className="space-y-6">
                        <HeadingSmall title="Purchase a Subscription" description="Purchase a subscription plan to unlock paid features." />
                        <Button
                            asChild
                            variant={'salosSecondaryAlt'}
                        >
                            <Link href={`${route('home')}#Pricing`}>
                                View Plans
                            </Link>
                        </Button>
                    </div>
                )}
                <div className="space-y-6">
                    <HeadingSmall title="Manage billing and subscription information" description="Ensure your billing information is up to date" />
                    <Button asChild>
                        <a
                            href="https://billing.stripe.com/p/login/00w28k2xtf7x43f8sNao800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Manage Billing
                        </a>
                    </Button>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
