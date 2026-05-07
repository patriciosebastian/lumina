import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { useRoute } from 'ziggy-js';
import { SunRayIcon } from './home/HomeIcons';

export default function Nav() {
    const route = useRoute();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { label: 'What it does', href: '#what' },
        { label: 'How it works', href: '#how' },
        { label: 'Pricing', href: '#pricing' },
    ];

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 transition-all duration-500 border-b ${
                scrolled ?
                'py-3.5 bg-bg/95 backdrop-saturate-[1.2] border-border' :
                'py-[22px] bg-transparent border-transparent'
            }`}
            aria-label="Main navigation"
        >
            <Link
                href={route('home')}
                className="flex items-center gap-2.5 font-serif text-[26px] tracking-[0.04em] text-ink"
            >
                <span className="text-gold">
                    <SunRayIcon size={22} />
                </span>
                Lumina
            </Link>

            <div className="hidden md:flex items-center gap-9">
                {navItems.map(({ label, href }, index) => (
                    <Link
                        key={index}
                        href={`${route('home')}${href}`}
                        className="font-ui text-[12px] tracking-[0.22em] uppercase text-ink-2 hover:text-ink relative py-1 group transition-colors duration-[450ms]"
                    >
                        {label}
                        <span className="absolute inset-x-0 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-[450ms] origin-left" />
                    </Link>
                ))}
            </div>

            <Link
                href={route('chat.index')}
                prefetch={['hover', 'click']}
                cacheFor="1m"
                className="font-ui text-[12px] tracking-[0.22em] uppercase text-gold border border-gold px-[18px] py-[9px] rounded-[4px] hover:bg-gold/10 transition-colors duration-[450ms]"
            >
                Begin
            </Link>
        </nav>
    );
}