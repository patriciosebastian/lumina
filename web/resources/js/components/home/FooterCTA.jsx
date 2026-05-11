import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function FooterCTA() {
    const route = useRoute();

    return (
        <section className="pt-[160px] pb-[120px] text-center bg-bg relative">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">
                <figure className="mx-auto mb-[72px] max-w-[650px] w-full">
                    <img
                        src="/images/paintings/painting-footer.png"
                        alt="An intimate close-up: folded hands resting on the open pages of a Bible, soft daylight from a leaded window catching the cuffs of a linen shirt and warm woolen sleeve."
                        width={600}
                        height={600}
                        className="block w-full h-auto aspect-[16/9] object-cover object-[center_60%] border border-border rounded-[3px]"
                    />
                </figure>

                <h2 className="font-serif italic font-light text-[clamp(44px,5.2vw,68px)] leading-[1.08] mb-[22px] max-w-[18ch] mx-auto text-ink">
                    The question<span className="not-italic font-light"> won't ask </span>itself<span className="not-italic font-light">.</span>
                </h2>
                <p className="font-book text-[18px] text-ink-2 leading-[1.75] max-w-[32em] mx-auto mb-11">
                    Bring it here. The Bible has an answer, and Lumina will help you find it.
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
