import { FleuronDivider } from '@/components/home/HomeIcons';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import MidPainting from '@/components/home/MidPainting';
import PullQuote from '@/components/home/PullQuote';
import PricingSection from '@/components/home/PricingSection';
import FooterCTA from '@/components/home/FooterCTA';
import HomeSiteFooter from '@/components/home/HomeSiteFooter';
import Nav from '@/components/nav';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-bg text-ink font-book antialiased overflow-x-hidden">
            <Nav />
            <HeroSection />
            <div className="max-w-[1100px] mx-auto px-10 relative z-[2]">
                <FleuronDivider />
            </div>
            <FeaturesSection />
            <HowItWorksSection />
            <MidPainting />
            <PullQuote />
            <PricingSection />
            <FooterCTA />
            <HomeSiteFooter />
        </div>
    );
}
