export default function AboutHeader() {
    return (
        <section className="pt-[150px] pb-[120px] relative text-center max-md:pt-[140px] max-md:pb-20">
            <div className="max-w-[1100px] mx-auto px-10">
                <div className="max-w-[820px] mx-auto">

                    <div className="inline-flex items-center gap-3.5 mb-9 justify-center">
                        <span className="w-[42px] h-px bg-gold" />
                        <span className="font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2">§ — About Lumina</span>
                        <span className="w-[42px] h-px bg-gold" />
                    </div>

                    <h1 className="font-serif font-light italic text-[clamp(48px,6.5vw,84px)] leading-[1.04] tracking-[-0.005em] text-ink mx-auto mb-8 max-w-[22ch]">
                        A small studio at the margin of a very long conversation.
                    </h1>

                    <p className="font-book text-[18px] leading-[1.75] text-ink-2 max-w-[36em] mx-auto">
                        Lumina exists because people are already turning to AI with their deepest questions. We'd rather be the version that actually listens — and points back to the text.
                    </p>

                </div>
            </div>
        </section>
    );
}
