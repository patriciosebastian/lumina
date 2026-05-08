import limits from '@/data/static/limits';

export default function Limits() {
    return (
        <section className="py-[140px] relative" id="what-we-are-not">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">
                <div className="max-w-[760px] mx-auto">
                    <div className="mb-16">
                        <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ III — What Lumina will not do</span>
                        <h2 className="font-serif font-normal italic text-[clamp(40px,5.2vw,60px)] leading-[1.1] text-ink mb-[22px]">
                            <span className="not-italic">Honest about </span>its limits<span className="not-italic">.</span>
                        </h2>
                        <p className="font-book text-[18px] text-ink-2 leading-[1.75]">
                            We believe clarity about limits is a form of respect. These are things Lumina deliberately does not do — and the reason for each is the same: you deserve honesty more than you deserve flattery.
                        </p>
                    </div>
                    <ul>
                        {limits.map(({ label, description }, i) => (
                            <li key={i} className="flex gap-8 py-8 border-t border-border last:border-b">
                                <span className="font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-50 pt-[5px] shrink-0 tabular-nums">
                                    {String(i + 1).padStart(2, '0')}.
                                </span>
                                <div>
                                    <h3 className="font-serif font-normal text-[22px] leading-[1.25] text-ink mb-2">{label}</h3>
                                    <p className="font-book text-[16px] leading-[1.75] text-ink-2">{description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
