import Nav from '@/components/nav';
import { FleuronDivider } from '@/components/home/HomeIcons';
import AboutHeader from '@/components/about/AboutHeader';
import Mission from '@/components/about/Mission';
import Philosophy from '@/components/about/Philosophy';
import Limits from '@/components/about/Limits';
import AboutCTA from '@/components/about/AboutCTA';
import HomeSiteFooter from '@/components/home/HomeSiteFooter';

export default function About() {
    return (
        <div className="relative min-h-screen bg-bg text-ink font-book antialiased overflow-x-hidden">
            <Nav />
            <AboutHeader />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <Mission />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <Philosophy />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <Limits />
            <FleuronDivider className="max-w-[1100px] mx-auto px-10 relative z-[2]" />
            <AboutCTA />
            <HomeSiteFooter />
        </div>
    );
}
