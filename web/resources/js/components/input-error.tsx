import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={cn('font-ui text-[12px] tracking-[0.12em] text-amber', className)}>
            {message}
        </p>
    ) : null;
}
