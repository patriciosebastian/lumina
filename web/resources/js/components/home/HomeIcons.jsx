export function SunRayIcon({ size = 22 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3.4"/>
            <line x1="12" y1="2" x2="12" y2="5.5"/>
            <line x1="12" y1="18.5" x2="12" y2="22"/>
            <line x1="2" y1="12" x2="5.5" y2="12"/>
            <line x1="18.5" y1="12" x2="22" y2="12"/>
            <line x1="4.9" y1="4.9" x2="7.4" y2="7.4"/>
            <line x1="16.6" y1="16.6" x2="19.1" y2="19.1"/>
            <line x1="4.9" y1="19.1" x2="7.4" y2="16.6"/>
            <line x1="16.6" y1="7.4" x2="19.1" y2="4.9"/>
        </svg>
    );
}

export function FleuronDivider({ className = '' }) {
    return (
        <div className={`flex items-center justify-center gap-[18px] text-gold my-0 mx-auto ${className}`} aria-hidden="true">
            <span className="flex-1 max-w-[160px] h-px bg-current opacity-55" />
            <svg width="42" height="14" viewBox="0 0 42 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                <path d="M21 1 Q15 7 9 7 Q3 7 1 4"/>
                <path d="M21 1 Q27 7 33 7 Q39 7 41 4"/>
                <path d="M21 1 V13"/>
                <circle cx="21" cy="7" r="1.4" fill="currentColor"/>
            </svg>
            <span className="flex-1 max-w-[160px] h-px bg-current opacity-55" />
        </div>
    );
}

export function QuoteRule() {
    return (
        <div className="flex items-center justify-center mx-auto w-[160px]" aria-hidden="true">
            <span className="w-[4px] h-[4px] bg-gold rounded-full" />
            <span className="flex-1 h-px bg-gold mx-1.5" />
            <span className="w-[4px] h-[4px] bg-gold rounded-full" />
        </div>
    );
}

export function CheckIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="flex-shrink-0 text-gold mt-[5px]">
            <path d="M2 7 L6 11 L12 3"/>
        </svg>
    );
}
