import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function Hero() {
    const route = useRoute();

    return (
        <section className="pt-[150px] pb-[160px] relative text-center max-md:pt-[140px] max-md:pb-20">
            <div className="max-w-[1100px] mx-auto px-10">
                <div className="max-w-[880px] mx-auto">

                    <div className="inline-flex items-center gap-3.5 mb-9 justify-center">
                        <span className="w-[42px] h-px bg-gold" />
                        <span className="font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2">Scripture, illuminated</span>
                        <span className="w-[42px] h-px bg-gold" />
                    </div>

                    <h1 className="font-serif font-light italic text-[clamp(56px,7vw,96px)] leading-[1.02] tracking-[-0.005em] text-ink mx-auto mb-8 max-w-[14ch]">
                        The question<br/>
                        you've been<br/>
                        <span className="not-italic font-normal">carrying.</span>
                    </h1>

                    <p className="font-book text-[18px] leading-[1.75] text-ink-2 max-w-[34em] mx-auto mb-12">
                        Lumina is an AI companion built for scripture. Ask anything — about a passage, a doctrine, a doubt — and receive an answer drawn directly from the Bible, offered with a Christian perspective.
                    </p>

                    <div className="flex gap-4 items-center flex-wrap justify-center">
                        <Link
                            href={route('chat.index')}
                            prefetch={['hover', 'click']}
                            cacheFor="1m"
                            className="inline-flex items-center gap-[0.6em] font-ui font-normal text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-[4px] bg-gold text-bg border border-gold hover:bg-gold-deep hover:border-gold-deep transition-all duration-[450ms] cursor-pointer group"
                        >
                            Ask your first question
                            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                        </Link>
                        <a
                            href="#how"
                            className="inline-flex items-center gap-[0.6em] font-ui font-normal text-[13px] tracking-[0.18em] uppercase px-8 py-3.5 rounded-[4px] border border-gold text-gold bg-transparent hover:bg-gold/10 transition-all duration-[450ms] cursor-pointer"
                        >
                            See how it works
                        </a>
                    </div>

                    <figure className="mt-20 max-w-[1000px] w-full mx-auto max-md:mt-14">
                        <img
                            src="/images/paintings/painting-hero.png"
                            alt="A sunlit study with an open manuscript on a wooden desk, a brass candlestick, leather-bound books, and a leaded arched window looking out onto a tiled rooftop and church spire."
                            width={1659}
                            height={948}
                            className="block w-full h-auto aspect-[16/10] object-cover border border-amber/40 rounded-[3px]"
                        />
                        <figcaption className="mt-5 font-ui text-[11px] tracking-[0.26em] uppercase text-ink-2 text-center">
                            Plate I &middot; The Sunlit Study, after a Flemish master
                        </figcaption>
                    </figure>

                    <div className="mt-12 flex gap-8 items-center text-ink-2 font-ui text-[12px] tracking-[0.18em] uppercase justify-center flex-wrap">
                        <span>No account required</span>
                        <span className="w-[3px] h-[3px] bg-gold rounded-full" />
                        <span>Free to begin</span>
                        <span className="w-[3px] h-[3px] bg-gold rounded-full" />
                        <span>Cancel anytime</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
