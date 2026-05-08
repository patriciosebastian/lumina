import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof Link>;

export default function TextLink({ className = '', children, ...props }: LinkProps) {
    return (
        <Link
            className={cn(
                'font-ui text-[12px] uppercase tracking-[0.12em] text-gold underline underline-offset-2 transition-colors duration-200 ease-out hover:text-gold-deep',
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
