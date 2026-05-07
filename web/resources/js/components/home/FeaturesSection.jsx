export default function FeaturesSection() {
    return (
        <section
            className="py-[140px] relative"
            id="what"
        >
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="text-center mb-20">
                    <span className="block font-ui font-normal text-[12px] uppercase tracking-[0.22em] text-ink-2 mb-[18px]">§ I — What Lumina does</span>
                    <h2 className="font-serif font-normal italic text-[clamp(46px,5.2vw,64px)] leading-[1.1] mx-auto max-w-[18ch] text-ink">
                        <span className="not-italic">A companion for </span>reading <span className="not-italic">and</span> wondering<span className="not-italic">.</span>
                    </h2>
                    <p className="mt-[22px] font-book text-[18px] text-ink-2 max-w-[36em] mx-auto leading-[1.75]">
                        Three things Lumina does well — and a few it deliberately doesn't. It will not pray for you, preach at you, or pretend to know the unknowable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-border">

                    <div className="p-16 md:p-[64px_40px] border-b md:border-b-0 md:border-r border-border text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">i.</span>
                        <svg className="w-16 h-16 text-gold mb-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M8 22 Q20 18 32 22 Q44 18 56 22 L56 50 Q44 46 32 50 Q20 46 8 50 Z"/>
                            <path d="M32 22 V50"/>
                            <line x1="14" y1="28" x2="26" y2="27"/><line x1="14" y1="32" x2="26" y2="31"/>
                            <line x1="14" y1="36" x2="26" y2="35"/><line x1="14" y1="40" x2="24" y2="39"/>
                            <line x1="38" y1="27" x2="50" y2="28"/><line x1="38" y1="31" x2="50" y2="32"/>
                            <line x1="38" y1="35" x2="50" y2="36"/><line x1="38" y1="39" x2="48" y2="40"/>
                            <g opacity=".7">
                                <line x1="32" y1="14" x2="32" y2="6"/><line x1="24" y1="16" x2="20" y2="9"/>
                                <line x1="40" y1="16" x2="44" y2="9"/><line x1="18" y1="20" x2="12" y2="16"/>
                                <line x1="46" y1="20" x2="52" y2="16"/>
                            </g>
                        </svg>
                        <h3 className="font-serif italic font-normal text-[30px] leading-[1.15] mb-4 text-ink">Read with you, not at you</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">Open any passage and Lumina sits beside it — offering historical context, cross-references, and the questions a good study partner would ask. Verses stay primary. Commentary stays secondary.</p>
                    </div>

                    <div className="p-16 md:p-[64px_40px] border-b md:border-b-0 md:border-r border-border text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">ii.</span>
                        <svg className="w-16 h-16 text-gold mb-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M32 6 V12"/>
                            <rect x="22" y="12" width="20" height="6" rx="1"/>
                            <path d="M22 18 L18 22 L18 50 L46 50 L46 22 L42 18"/>
                            <line x1="18" y1="50" x2="18" y2="56"/><line x1="46" y1="50" x2="46" y2="56"/>
                            <line x1="14" y1="56" x2="50" y2="56"/>
                            <rect x="24" y="24" width="16" height="22" rx="0.5"/>
                            <line x1="32" y1="24" x2="32" y2="46"/><line x1="24" y1="35" x2="40" y2="35"/>
                            <ellipse cx="32" cy="35" rx="3" ry="5" fill="currentColor" opacity=".25"/>
                            <path d="M32 32 Q30 35 32 38 Q34 35 32 32 Z" fill="currentColor"/>
                        </svg>
                        <h3 className="font-serif italic font-normal text-[30px] leading-[1.15] mb-4 text-ink">Honest about what it doesn't know</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">When scholars disagree, Lumina says so. When a question is contested, you'll see the traditions side-by-side — Catholic, Orthodox, Protestant — without being nudged toward any of them.</p>
                    </div>

                    <div className="p-16 md:p-[64px_40px] text-left relative">
                        <span className="absolute top-6 right-[30px] font-ui text-[11px] tracking-[0.22em] text-ink-2 opacity-60">iii.</span>
                        <svg className="w-16 h-16 text-gold mb-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M10 54 Q24 40 32 30 Q40 18 54 10"/>
                            <ellipse cx="20" cy="44" rx="6" ry="3" transform="rotate(-30 20 44)"/>
                            <ellipse cx="28" cy="36" rx="6" ry="3" transform="rotate(-40 28 36)"/>
                            <ellipse cx="36" cy="26" rx="6" ry="3" transform="rotate(-45 36 26)"/>
                            <ellipse cx="44" cy="18" rx="6" ry="3" transform="rotate(-50 44 18)"/>
                            <circle cx="24" cy="50" r="2"/><circle cx="40" cy="32" r="2"/>
                            <line x1="20" y1="44" x2="22" y2="48" opacity=".6"/>
                            <line x1="36" y1="26" x2="38" y2="30" opacity=".6"/>
                        </svg>
                        <h3 className="font-serif italic font-normal text-[30px] leading-[1.15] mb-4 text-ink">Rooted in the long tradition</h3>
                        <p className="font-book text-[16px] leading-[1.75] text-ink-2">Two thousand years of theologians, mystics, and ordinary readers have wrestled with these texts. Lumina draws on that conversation — Augustine and Julian of Norwich and your grandmother's marginalia, all welcome at the table.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
