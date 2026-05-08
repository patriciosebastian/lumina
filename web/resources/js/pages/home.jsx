import { FleuronDivider } from '@/components/home/HomeIcons';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import MidPainting from '@/components/home/MidPainting';
import PullQuote from '@/components/home/PullQuote';
import Pricing from '@/components/home/Pricing';
import FooterCTA from '@/components/home/FooterCTA';
import HomeSiteFooter from '@/components/home/HomeSiteFooter';
import Nav from '@/components/nav';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-bg text-ink font-book antialiased overflow-x-hidden">
            <Nav />
            <Hero />
            <FleuronDivider />
            <Features />
            <HowItWorks />
            <MidPainting />
            <PullQuote />
            <Pricing />
            <FooterCTA />
            <HomeSiteFooter />
        </div>
    );
}
