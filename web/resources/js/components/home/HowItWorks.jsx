import STEPS from '@/data/static/howItWorksSteps';

export default function HowItWorks() {
    return (
        <section
            className="py-[120px] bg-surface border-t border-b border-border relative"
            id="how"
        >
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ II — How it works</span>
                    <h2 className="font-serif font-normal italic text-[clamp(46px,5.2vw,64px)] leading-[1.1] mx-auto max-w-[18ch] text-ink">
                        <span className="not-italic">Three small</span> movements.
                    </h2>
                    <p className="mt-[22px] font-book text-[18px] text-ink-2 max-w-[36em] mx-auto leading-[1.75]">
                        No onboarding. No quiz. Open the window, type what's on your mind, and read what the Bible says about it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
                    {STEPS.map(({ numeral, label, heading, body }) => (
                        <div key={numeral} className="relative pt-20 max-md:pt-[60px]">
                            <div className="absolute top-[-30px] left-[-12px] font-serif italic font-light text-[160px] max-md:text-[120px] leading-none text-gold opacity-[0.22] tracking-[-0.02em] pointer-events-none z-0 select-none">
                                {numeral}
                            </div>
                            <div className="relative z-[1]">
                                <span className="inline-block font-ui text-[11px] tracking-[0.28em] uppercase text-ink-2 mb-[18px] border-b border-border pb-2">
                                    {label}
                                </span>
                                <h3 className="font-serif font-normal italic text-[34px] mb-3.5 text-ink leading-[1.15]">{heading}</h3>
                                <p className="font-book text-[16px] leading-[1.75] text-ink-2 max-w-[24em]">{body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
