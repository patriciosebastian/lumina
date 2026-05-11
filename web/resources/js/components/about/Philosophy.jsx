export default function Philosophy() {
    return (
        <section className="py-[140px] relative" id="philosophy">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ II — How we read</span>
                    <h2 className="font-serif font-normal italic text-[clamp(40px,5.2vw,60px)] leading-[1.1] mx-auto max-w-[20ch] text-ink">
                        Three convictions<span className="not-italic">.</span>
                    </h2>
                    <p className="mt-[22px] font-book text-[18px] text-ink-2 max-w-[36em] mx-auto leading-[1.75]">
                        These aren't preferences. They're convictions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-border">

                    <div className="p-16 md:p-[64px_40px] border-b md:border-b-0 md:border-r border-border text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">i.</span>
                        <h3 className="font-serif italic font-normal text-[28px] leading-[1.2] mb-4 text-ink">Scripture first, always</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">When you ask a question, Lumina searches the Bible before it responds. Every answer is built from what the text actually says — not from the averaged-out internet, not from a model's training data. The text stays primary. Lumina's voice stays secondary.</p>
                    </div>

                    <div className="p-16 md:p-[64px_40px] border-b md:border-b-0 md:border-r border-border text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">ii.</span>
                        <h3 className="font-serif italic font-normal text-[28px] leading-[1.2] mb-4 text-ink">Christian, not neutral</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">Lumina reads the Bible the way Christians have always read it — as a unified story, with the incarnation and resurrection at the center. This is its frame. If you're exploring it, or already inside it, the answers will reflect that.</p>
                    </div>

                    <div className="p-16 md:p-[64px_40px] text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">iii.</span>
                        <h3 className="font-serif italic font-normal text-[28px] leading-[1.2] mb-4 text-ink">Honest about what it doesn't know</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">Where the text is genuinely ambiguous — where believers have disagreed for centuries — Lumina says so clearly. Confidence where the Bible is clear. Honesty where it isn't.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
