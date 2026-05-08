import { SunRayIcon } from '@/components/home/HomeIcons';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import { useRoute } from 'ziggy-js';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const route = useRoute();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 py-12">
            {/* Logo mark */}
            <Link
                href={route('home')}
                className="flex flex-col items-center gap-2 no-underline"
            >
                <span className="text-gold">
                    <SunRayIcon size={28} />
                </span>
                <span className="font-serif text-[28px] tracking-[0.04em] text-ink" style={{ fontStyle: 'normal' }}>
                    Lumina
                </span>
            </Link>

            {/* Gold rule */}
            <div className="mx-auto my-8 h-px w-[60px] bg-gold" />

            {/* Form card */}
            <div className="w-full max-w-[420px] rounded-[6px] border border-border bg-bg" style={{ padding: '48px 44px' }}>
                {title && (
                    <h1 className="mb-2 text-center font-serif text-[28px] font-light italic text-ink">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="mb-8 text-center font-book text-[15px] leading-[1.7] text-ink-2">
                        {description}
                    </p>
                )}

                {children}
            </div>
        </div>
    );
}
