import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { CheckIcon } from './HomeIcons';

const READER_FEATURES = [
    'Unlimited reading of any passage',
    'Twenty conversations each month',
    'Three saved notebooks',
    'Cross-translation comparison',
];

const COMPANION_FEATURES = [
    'Everything in The Reader',
    'Unlimited conversations and notebooks',
    'Greek and Hebrew lexical lookups',
    'Daily lectionary, sent at first light',
    'A small thanks to the scholars cited',
];

function FeatureList({ items }) {
    return (
        <ul className="list-none p-0 mb-9 border-t border-border">
            {items.map(item => (
                <li key={item} className="py-3.5 border-b border-border font-book text-[15px] text-ink leading-[1.5] flex gap-3.5 items-start">
                    <CheckIcon />
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default function PricingSection() {
    const route = useRoute();

    return (
        <section className="py-[120px] bg-bg" id="pricing">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ III — A modest pricing</span>
                    <h2 className="font-serif font-normal italic text-[clamp(40px,4.6vw,56px)] leading-[1.1] mx-auto max-w-[18ch] text-ink">
                        <span className="not-italic">Free to read. </span>A small sum<span className="not-italic"> for the rest.</span>
                    </h2>
                    <p className="mt-[22px] font-book text-[18px] text-ink-2 max-w-[36em] mx-auto leading-[1.75]">
                        No tiers named after gemstones. Pay what's fair, support the writers and theologians whose work informs Lumina, and never see an ad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px] mx-auto">

                    <div className="bg-surface border border-border rounded-[5px] p-[48px_44px] relative transition-[border-color] duration-[450ms] hover:border-gold">
                        <div className="font-ui text-[11px] tracking-[0.28em] uppercase text-ink-2 mb-3.5">The Reader</div>
                        <div className="font-serif font-light text-[64px] leading-none text-ink mb-1.5 tracking-[-0.01em]">
                            <span className="text-[32px] align-top mr-0.5 text-ink-2">$</span>
                            0
                            <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-ink-2 ml-2.5">free, always</span>
                        </div>
                        <p className="font-book italic text-[15px] text-ink-2 mt-3.5 mb-8 leading-[1.7]">
                            Open the door. A generous taste — enough to read with Lumina each morning if you'd like.
                        </p>
                        <FeatureList items={READER_FEATURES} />
                        <Link
                            href={route('register')}
                            className="w-full inline-flex justify-center items-center gap-[0.6em] font-ui font-normal text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-[4px] border border-gold text-gold bg-transparent hover:bg-gold/10 transition-all duration-[450ms] cursor-pointer"
                        >
                            Begin reading
                        </Link>
                    </div>

                    <div className="bg-bg border border-border rounded-[5px] p-[48px_44px] relative transition-[border-color] duration-[450ms] hover:border-gold">
                        <svg className="absolute top-7 right-7 text-gold" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M11 2 L13 9 L20 11 L13 13 L11 20 L9 13 L2 11 L9 9 Z"/>
                        </svg>
                        <div className="font-ui text-[11px] tracking-[0.28em] uppercase text-ink-2 mb-3.5">The Companion</div>
                        <div className="font-serif font-light text-[64px] leading-none text-ink mb-1.5 tracking-[-0.01em]">
                            <span className="text-[32px] align-top mr-0.5 text-ink-2">$</span>
                            9
                            <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-ink-2 ml-2.5">/ month</span>
                        </div>
                        <p className="font-book italic text-[15px] text-ink-2 mt-3.5 mb-8 leading-[1.7]">
                            For the slow reader. The one who keeps a journal, returns to passages, and asks the longer kind of question.
                        </p>
                        <FeatureList items={COMPANION_FEATURES} />
                        <Link
                            href={route('register')}
                            className="w-full inline-flex justify-center items-center gap-[0.6em] font-ui font-normal text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-[4px] bg-gold text-bg border border-gold hover:bg-gold-deep hover:border-gold-deep transition-all duration-[450ms] cursor-pointer"
                        >
                            Begin a free month
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
