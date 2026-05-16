import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { SunRayIcon } from './HomeIcons';

function handleSectionLink(e, id) {
    if (window.location.pathname === '/') {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView();
    }
}

export default function HomeSiteFooter() {
    const route = useRoute();

    return (
        <footer className="border-t border-border pt-[72px] pb-14 bg-bg">
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">

                <div className="mb-12">
                    <div className="flex items-center justify-center gap-[18px] text-gold">
                        <span className="flex-1 h-px bg-current opacity-55" />
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                            <circle cx="10" cy="6" r="1.6" fill="currentColor"/>
                            <path d="M10 6 L2 6"/><path d="M10 6 L18 6"/>
                        </svg>
                        <span className="flex-1 h-px bg-current opacity-55" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-14">
                    <div>
                        <Link
                            href={route('home')}
                            className="flex items-center gap-2.5 font-serif text-[26px] tracking-[0.04em] text-ink mb-2.5"
                        >
                            <span className="text-gold">
                                <SunRayIcon size={22} />
                            </span>
                            Lumina
                        </Link>
                        <p className="font-book italic text-[15px] text-ink-2 leading-[1.7] mt-[18px] max-w-[30ch]">
                            Scripture, faithfully. A small studio in the tradition of slow reading.
                        </p>
                    </div>

                    <div className="block md:hidden" />

                    <div>
                        <h4 className="font-ui font-medium text-[11px] tracking-[0.28em] uppercase text-ink mb-5">Lumina</h4>
                        <Link
                            href={route('about')}
                            className="block font-ui text-[14px] text-ink-2 py-1.5 hover:text-gold transition-colors duration-[350ms]"
                        >
                            About
                        </Link>
                        {[
                            { label: 'What it does', href: '/#what', id: 'what' },
                            { label: 'How it works', href: '/#how', id: 'how' },
                            { label: 'Pricing', href: '/#pricing', id: 'pricing' },
                        ].map(({ label, href, id }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={(e) => handleSectionLink(e, id)}
                                className="block font-ui text-[14px] text-ink-2 py-1.5 hover:text-gold transition-colors duration-[350ms]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <div>
                        <h4 className="font-ui font-medium text-[11px] tracking-[0.28em] uppercase text-ink mb-5">Legal</h4>
                        <a
                            href="mailto:info@chatwithlumina.com"
                            className="block font-ui text-[14px] text-ink-2 py-1.5 hover:text-gold transition-colors duration-[350ms]"
                        >
                            Contact
                        </a>
                        <Link
                            href={route('privacy-policy')}
                            className="block font-ui text-[14px] text-ink-2 py-1.5 hover:text-gold transition-colors duration-[350ms]"
                        >
                            Privacy
                        </Link>
                        <Link
                            href={route('terms')}
                            className="block font-ui text-[14px] text-ink-2 py-1.5 hover:text-gold transition-colors duration-[350ms]"
                        >
                            Terms
                        </Link>
                    </div>
                </div>

                <div className="border-t border-border pt-7 flex justify-between items-center font-ui text-[12px] tracking-[0.16em] text-ink-2 uppercase flex-wrap gap-2">
                    <span>chatwithlumina.com</span>
                    <span>© MMXXVI &middot; Lumina</span>
                </div>
            </div>
        </footer>
    );
}
