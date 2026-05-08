export default function AboutMissionSection() {
    return (
        <section className="py-[140px] relative" id="mission">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ I — Why we built this</span>
                    <h2 className="font-serif font-normal italic text-[clamp(40px,5.2vw,60px)] leading-[1.1] mx-auto max-w-[18ch] text-ink">
                        <span className="not-italic">A voice in </span>the wilderness<span className="not-italic">.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[900px] mx-auto mb-20">
                    <div>
                        <p className="font-book text-[18px] leading-[1.8] text-ink-2 mb-6">
                            We're in a strange moment. People are seeking spiritual guidance from AI — whether the people building those tools intended it or not. That situation isn't going to get better by itself.
                        </p>
                        <p className="font-book text-[18px] leading-[1.8] text-ink-2">
                            Lumina was built by someone who didn't want to sit on the sidelines. If people are going to bring their faith questions to AI, we'd rather be the version that's honest about what it knows, careful about what it claims, and always pointing back to scripture.
                        </p>
                    </div>
                    <div>
                        <p className="font-book text-[18px] leading-[1.8] text-ink-2 mb-6">
                            AI works most accurately when given exact, curated knowledge. So Lumina is built on the Bible as its primary source — not a vague training corpus, not the averaged-out internet, but the text itself, alongside two thousand years of careful readers.
                        </p>
                        <p className="font-book text-[18px] leading-[1.8] text-ink-2">
                            Not a replacement for your pastor, your church, or your own hard thinking. A reminder. A better placeholder. A lamp that still points toward the window.
                        </p>
                    </div>
                </div>

                <div className="max-w-[760px] mx-auto">
                    <blockquote className="border-l-2 border-gold pl-8 py-2">
                        <p className="font-serif italic text-[clamp(22px,2.8vw,32px)] leading-[1.4] text-ink mb-5">
                            "While big tech points people to AI, I'll use AI to try and point people back to Jesus."
                        </p>
                        <footer className="font-ui text-[11px] tracking-[0.26em] uppercase text-ink-2">
                            Patricio Salazar &middot; Co-Founder
                        </footer>
                    </blockquote>
                </div>

            </div>
        </section>
    );
}
