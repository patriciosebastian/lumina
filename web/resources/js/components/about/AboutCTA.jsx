import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function AboutCTA() {
    const route = useRoute();

    return (
        <section className="pt-[120px] pb-[160px] text-center bg-bg relative">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <h2 className="font-serif italic font-light text-[clamp(44px,5.2vw,68px)] leading-[1.08] mb-[22px] max-w-[18ch] mx-auto text-ink">
                    <span className="not-italic font-light">Bring your </span>questions<span className="not-italic font-light">.</span>
                </h2>
                <p className="font-book text-[18px] text-ink-2 leading-[1.75] max-w-[32em] mx-auto mb-11">
                    Lumina will bring the lamp. No account required to begin.
                </p>
                <Link
                    href={route('chat.index')}
                    prefetch={['hover', 'click']}
                    cacheFor="1m"
                    className="inline-flex items-center gap-[0.6em] font-ui font-normal text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-[4px] bg-gold text-bg border border-gold hover:bg-gold-deep hover:border-gold-deep transition-all duration-[450ms] cursor-pointer group"
                >
                    Ask your first question
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </Link>

            </div>
        </section>
    );
}
