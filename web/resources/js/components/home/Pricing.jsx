import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { CheckIcon } from './HomeIcons';
import pricingCards from '@/data/static/pricingCards';

export default function Pricing() {
    const route = useRoute();

    return (
        <section className="py-[120px] bg-bg" id="pricing">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ III — A modest pricing</span>
                    <h2 className="font-serif font-normal italic text-[clamp(40px,4.6vw,56px)] leading-[1.1] mx-auto max-w-[18ch] text-ink">
                        <span className="not-italic">Free to begin. </span>A small sum<span className="not-italic"> for more.</span>
                    </h2>
                    <p className="mt-[22px] font-book text-[18px] text-ink-2 max-w-[36em] mx-auto leading-[1.75]">
                        Two plans. No ads. Your conversations stay yours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px] mx-auto">
                    {pricingCards.map(item => (
                        <div
                            key={item.tier}
                            className={`${item.recommended ? 'bg-bg' : 'bg-surface'} border border-border rounded-[5px] p-[48px_44px] relative transition-[border-color] duration-[450ms] hover:border-gold`}
                        >
                            {item.recommended && (
                                <svg className="absolute top-7 right-7 text-gold" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                                    <path d="M11 2 L13 9 L20 11 L13 13 L11 20 L9 13 L2 11 L9 9 Z"/>
                                </svg>
                            )}
                            <div className="font-ui text-[11px] tracking-[0.28em] uppercase text-ink-2 mb-3.5">{item.title}</div>
                            <div className="font-serif font-light text-[64px] leading-none text-ink mb-1.5 tracking-[-0.01em]">
                                <span className="text-[32px] align-top mr-0.5 text-ink-2">$</span>
                                {item.monthlyPrice}
                                <span className="font-ui text-[13px] tracking-[0.16em] uppercase text-ink-2 ml-2.5">{item.monthlyPrice === 0 ? 'free, always' : '/ month'}</span>
                            </div>
                            <p className="font-book italic text-[15px] text-ink-2 mt-3.5 mb-8 leading-[1.7]">
                                {item.description}
                            </p>
                            <ul className="list-none p-0 mb-9 border-t border-border">
                                {item.features.map(feature => (
                                    <li
                                        key={feature}
                                        className="py-3.5 border-b border-border font-book text-[15px] text-ink leading-[1.5] flex gap-3.5 items-start"
                                    >
                                        <CheckIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={route('register')}
                                className={`w-full inline-flex justify-center items-center gap-[0.6em] font-ui font-normal text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-[4px] ${item.recommended ? 'bg-gold text-bg hover:bg-gold-deep hover:border-gold-deep' : 'text-gold bg-transparent hover:bg-gold/10'} border border-gold transition-all duration-[450ms] cursor-pointer`}
                            >
                                {item.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
