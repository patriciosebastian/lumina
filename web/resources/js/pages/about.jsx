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
            <FleuronDivider />
            <Mission />
            <FleuronDivider />
            <Philosophy />
            <FleuronDivider />
            <Limits />
            <FleuronDivider />
            <AboutCTA />
            <HomeSiteFooter />
        </div>
    );
}
