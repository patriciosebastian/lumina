export default function AboutPhilosophySection() {
    return (
        <section className="py-[140px] relative" id="philosophy">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ II — How we read</span>
                    <h2 className="font-serif font-normal italic text-[clamp(40px,5.2vw,60px)] leading-[1.1] mx-auto max-w-[20ch] text-ink">
                        <span className="not-italic">The text </span>stays primary<span className="not-italic">. Always.</span>
                    </h2>
                    <p className="mt-[22px] font-book text-[18px] text-ink-2 max-w-[36em] mx-auto leading-[1.75]">
                        Three convictions that shape every response Lumina gives — and a few it refuses to give.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-border">

                    <div className="p-16 md:p-[64px_40px] border-b md:border-b-0 md:border-r border-border text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">i.</span>
                        <h3 className="font-serif italic font-normal text-[28px] leading-[1.2] mb-4 text-ink">Scripture first, commentary second</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">Verses stay primary. Lumina's observations stay secondary. We never lead with interpretation — we lead with the text, then sit with you as you wrestle with it.</p>
                    </div>

                    <div className="p-16 md:p-[64px_40px] border-b md:border-b-0 md:border-r border-border text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">ii.</span>
                        <h3 className="font-serif italic font-normal text-[28px] leading-[1.2] mb-4 text-ink">Honest about disagreement</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">When scholars diverge, Lumina says so. Catholic, Orthodox, Protestant — shown side by side, without nudging you toward any of them. The contested questions stay contested.</p>
                    </div>

                    <div className="p-16 md:p-[64px_40px] text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">iii.</span>
                        <h3 className="font-serif italic font-normal text-[28px] leading-[1.2] mb-4 text-ink">Rooted in two thousand years</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">Augustine, Julian of Norwich, the Desert Fathers, your grandmother's marginalia — all welcome at the table. We draw on the long conversation, not just the last decade.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
