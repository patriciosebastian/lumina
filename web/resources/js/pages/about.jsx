import Nav from '@/components/nav';
import { FleuronDivider } from '@/components/home/HomeIcons';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutMissionSection from '@/components/about/AboutMissionSection';
import AboutPhilosophySection from '@/components/about/AboutPhilosophySection';
import AboutNotSection from '@/components/about/AboutNotSection';
import AboutCTA from '@/components/about/AboutCTA';
import HomeSiteFooter from '@/components/home/HomeSiteFooter';

export default function About() {
    return (
        <div className="relative min-h-screen bg-bg text-ink font-book antialiased overflow-x-hidden">
            <Nav />
            <AboutHeroSection />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <AboutMissionSection />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <AboutPhilosophySection />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <AboutNotSection />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <AboutCTA />
            <HomeSiteFooter />
        </div>
    );
}
