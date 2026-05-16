import { QuoteRule } from './HomeIcons';

export default function PullQuote() {
    return (
        <section className="py-[180px] bg-surface border-t border-b border-border text-center max-md:py-[120px]">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">
                <QuoteRule />
                <p className="font-serif italic font-light text-[clamp(46px,5.8vw,72px)] max-md:text-[clamp(36px,7vw,52px)] leading-[1.18] text-ink max-w-[22ch] mx-auto my-14 tracking-[-0.005em]">
                    <span className="text-gold">&ldquo;</span>Your word is a lamp to my feet and a light to my path.<span className="text-gold">&rdquo;</span>
                </p>
                <QuoteRule />
                <div className="font-ui text-[12px] tracking-[0.28em] uppercase text-ink-2 mt-12">
                    — Psalm 119 &middot; 105
                </div>
            </div>
        </section>
    );
}
