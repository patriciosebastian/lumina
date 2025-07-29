import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { Head } from '@inertiajs/react';

import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';

export default function Billing() {
    return (
        <AppLayout>
            <Head title="Billing" />

            <SettingsLayout>
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
