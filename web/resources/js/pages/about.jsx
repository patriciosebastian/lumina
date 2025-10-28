import Navbar from '@/components/navbar';
import Announcement from '@/components/ui/announcement';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CenteredIconCard from '@/components/centeredIconCard';
import PatricioPortrait from '../../images/patricio_portrait.webp';
import PatricioPortraitJpg from '../../images/patricio_portrait.jpg';
import RickyPortrait from '../../images/ricky_portrait.webp';
import RickyPortraitJpg from '../../images/ricky_portrait.jpeg';
import ErikPortrait from '../../images/erik_portrait.webp';
import ErikPortraitJpg from '../../images/erik_portrait.jpeg';
import SalosDove from '../../images/SALOS_Dove_O_Group_1.svg';
import SalosLogo from '@/components/ui/salosLogo';
import { Link } from '@inertiajs/react';
import xtwitterLogo from '../../images/X_Twitter.svg';
import instagramLogo from '../../images/instagram.svg';
import tiktokLogo from '../../images/tiktok.svg';

export default function About() {
  return (
    <>
        <Announcement className="text-xs md:text-base text-balance">
            Welcome to the Beta &#127881; We want to hear from you! Please report any feedback or bugs you find to <a href="mailto:info@salosai.com" className="underline">info@salosai.com</a>
        </Announcement>
        <div className="place-items-center h-[92px] border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr] lg:h-[113.5px]">
            <div className="w-4 h-full border-r lg:w-full" />
            <div className="hidden size-full border-r lg:block" />
            <Navbar />
            <div className="hidden size-full border-l lg:block" />
            <div className="w-4 h-full border-l lg:w-full" />
        </div>
        {/* Hero Section */}
        <div className="relative grid grid-rows-[auto] h-auto min-h-[50vh] lg:h-auto">
            <div className="place-items-center text-center text-balance text-primary-400 border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="size-full border-r" />
                <div className="hidden size-full border-r lg:block" />
                <span className="size-full place-content-center p-4 lg:p-6">
                    <div className="w-full flex justify-center items-center gap-4">
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500/0 to-primary-500 lg:w-[5.5rem]" />
                        About SALOS
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-500/0 lg:w-[5.5rem]" />
                    </div>
                </span>
                <div className="hidden size-full border-l lg:block" />
                <div className="size-full border-l" />
            </div>
            <div className="relative border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="size-full border-r" />
                <div className="hidden size-full border-r lg:block" />
                <div className="space-y-6 px-4 py-10 flex flex-col justify-center items-center lg:space-y-8 lg:px-6 lg:py-14">
                    <h1 className="text-[2.5rem] font-bold text-center leading-[110%] lg:w-[55.625rem] lg:text-[4rem] lg:font-black lg:leading-[100%]">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px] lg:pb-[.3rem]">
                            Building a Bridge Between Faith and Technology
                        </span>
                    </h1>
                    <p className="text-lg text-primary-500 text-center max-w-[41.75rem] leading-[128%] -tracking-[2%]">
                        Discover the heart behind our mission to integrate biblical wisdom with cutting-edge AI technology.
                    </p>
                </div>
                <div className="hidden size-full border-l lg:block" />
                <div className="size-full border-l" />
            </div>
        </div>
        {/* Background Gradient */}
        <div className="absolute size-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 rounded-full bg-radial-[at_50%_75%] from-primary-200 via-primary-500 to-background to-90% blur-[15rem]" />

        {/* Mission Statement */}
        <div className="space-y-10 px-4 mb-14 lg:space-y-20 lg:mb-[11.5rem]" id="Mission">
            <div className="text-center max-w-[41.75rem] mx-auto mt-8">
                <Badge variant={'salosPrimary'} className="mb-6">
                    Mission Statement
                </Badge>
                <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] mb-4 lg:text-[4rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%] lg:mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                        Our Purpose
                    </span>
                </h2>
                <p className="text-lg text-balance text-primary-500 mx-auto leading-[128%] -tracking-[2%]">
                    Use every tool available to spread the Good News of Jesus and guide individuals toward deeper spiritual understanding.
                </p>
            </div>
            <div className="relative grid grid-cols-[16px_1fr_16px] bg-[#031118] mb-14 overflow-x-clip before:content-[''] before:absolute before:inset-x-0 before:-top-8 before:h-8 before:bg-gradient-to-b before:from-transparent before:from-[0%] before:to-[#031118] before:to-[100%] lg:mb-[11.5rem] lg:grid-cols-[1fr_55.625rem_1fr] lg:before:content-none lg:before:bg-none">
                <div className="border-y" />
                <div className="text-primary-400 text-xl text-center text-pretty leading-[128%] -tracking-[2%] border px-4 py-10 space-y-6 lg:px-8 lg:py-14 lg:space-y-8 lg:text-2xl">
                    <p>
                        At SALOS, our mission is to merge modern technology with eternal truth. We exist to solve a growing problem in today&apos;s world - disconnection. Disconnection from God, from ourselves, and from one another. People are searching for hope in places that often leave them more empty, anxious, or alone. SALOS was born to stand in that gap.
                    </p>
                    <p>
                        We believe technology should not pull us further away from faith, but point us back to it. SALOS is designed to be a companion that reminds you of who you are in Christ, equips you with wisdom rooted in Scripture, and helps you walk with Jesus in your everyday life.
                    </p>
                </div>
                <div className="border-y" />
            </div>
        </div>

        {/* Our Beliefs */}
        <div className="space-y-10 px-4 mb-14 lg:space-y-20 lg:mb-[8.75rem]" id="Beliefs">
            <div className="text-center max-w-[41.75rem] mx-auto">
                <Badge variant={'salosPrimary'} className="mb-6">
                    Our Beliefs
                </Badge>
                <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] mb-4 lg:text-[4rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%] lg:mb-5">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                        Foundational Truths
                    </span>
                </h2>
                <p className="text-lg font-normal text-primary-500 mx-auto leading-[128%] -tracking-[2%]">
                    The biblical principles that guide every aspect of our development and design decisions.
                </p>
            </div>
            <div className="space-y-4 lg:grid lg:grid-cols-2 lg:w-[60rem] lg:mx-auto lg:gap-4 lg:space-y-0">
                <CenteredIconCard
                    title="Scripture as Ultimate Authority"
                    className="mx-auto"
                    contentClasses="p-0"
                    img={SalosDove}
                    imgWidth={60}
                    imgHeight={60}
                    imgAltText="Scripture icon"
                    imgClasses="w-full h-full object-cover object-center p-0"
                >
                    We believe the Bible is the inspired, infallible Word of God and the final authority for all matters of faith and practice. Every response and guidance provided by SALOS is filtered through biblical truth.
                </CenteredIconCard>
                <CenteredIconCard
                    title="Jesus Christ as Lord and Savior"
                    className="mx-auto"
                    titleClasses="!w-full"
                    contentClasses="p-0"
                    img={SalosDove}
                    imgAltText="Cross icon"
                >
                    We affirm that Jesus Christ is the Son of God, our Lord and Savior, and the only way to eternal life. Our AI is designed to point users toward a deeper relationship with Him.
                </CenteredIconCard>
                <CenteredIconCard
                    title="The Holy Spirit's Guidance"
                    className="mx-auto"
                    titleClasses="!w-full"
                    contentClasses="p-0"
                    img={SalosDove}
                    imgAltText="Holy Spirit flame icon"
                >
                    We recognize that true spiritual understanding comes through the Holy Spirit's work in believers' hearts. SALOS serves as a tool to support, not replace, this divine guidance.
                </CenteredIconCard>
                <CenteredIconCard
                    title="Church and Community"
                    className="mx-auto"
                    titleClasses="!w-full"
                    contentClasses="p-0"
                    img={SalosDove}
                    imgAltText="Technology icon"
                >
                    We believe the Body of Christ is essential and that technology should never replace community but strengthen it. We strongly direct users to seek fellowship and counsel within their local church.
                </CenteredIconCard>
            </div>
        </div>

        {/* Meet The Founders */}
        <div className="space-y-10 px-4 mb-14 lg:space-y-20 lg:mb-[8.75rem]" id="Founders">
            <div className="text-center max-w-[41.75rem] mx-auto">
                <Badge variant={'salosPrimary'} className="mb-6">
                    Meet The Founders
                </Badge>
                <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] mb-4 lg:text-[4rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%] lg:mb-5">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                        The Hearts Behind SALOS
                    </span>
                </h2>
                <p className="text-lg font-normal text-primary-500 mx-auto leading-[128%] -tracking-[2%]">
                    Meet the team of passionate believers.
                </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:w-[60rem] lg:mx-auto lg:gap-8 lg:space-y-0">
                <div className="border rounded-lg p-6 space-y-4 mx-auto max-w-sm lg:max-w-none">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
                        <picture>
                            <source srcSet={ErikPortrait} type="image/webp" />
                            <img
                                src={ErikPortraitJpg}
                                alt="Erik Loudermilk"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    <div>
                        <h3 className="text-center text-xl font-semibold text-primary-200 mb-1">Erik Loudermilk</h3>
                        <p className="text-center text-sm text-primary-400 font-medium mb-4">Co-Founder</p>
                        <p className="text-sm text-primary-200 leading-relaxed">
                            AI is inevitable and a worldwide controversial subject. I figured why not bring Jesus to the forefront of technology to shepherd our hearts back to what really matters in this world. SALOS is meant to be your guide back to the only eternal truth: Jesus.
                        </p>
                        <br />
                        <p className="text-sm text-primary-200 leading-relaxed">
                            SALOS welcomes anyone to learn about Jesus, no matter your starting point. Whether you have no idea how to navigate your faith journey or you&apos;re just looking for more purpose in your day to day life, SALOS is for everyone.
                        </p>
                        <br />
                        <p className="text-sm text-primary-200 leading-relaxed">
                            SALOS is the asset I yearned for when I was fearful to show up to church because of my imperfections, when I was shy to ask questions that I felt I should already know, or when I was afraid to face vulnerability to accept Jesus into my life. And through God&apos;s grace, we are able to share it with you!
                        </p>
                    </div>
                </div>
                <div className="border rounded-lg p-6 space-y-4 mx-auto max-w-sm lg:max-w-none">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
                        <picture>
                            <source srcSet={PatricioPortrait} type="image/webp" />
                            <img
                                src={PatricioPortraitJpg}
                                alt="Patricio Salazar"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    <div>
                        <h3 className="text-center text-xl font-semibold text-primary-200 mb-1">Patricio Salazar</h3>
                        <p className="text-center text-sm text-primary-400 font-medium mb-4">Co-Founder</p>
                        <p className="text-sm text-primary-200 leading-relaxed">
                            We're in a unique time where people are seeking spiritual advice from something that's not human. Which is very dangerous. So then why build SALOS? While I believe that people shouldn't be delegating the process of building their faith and learning with others, I think the situation will only get worse. And as a Christian, I don&apos;t want to sit on the sidelines. While big tech points people to AI, I'll use AI to try and point people back to Jesus.
                        </p>
                        <br />
                        <p className="text-sm text-primary-200 leading-relaxed">
                            AI "hallucinates" and can get many things wrong. It works most accurately and "hallucinates" the least when you provide it exact context as knowledge. So when people ask AI about their faith, which one of them is actually using the Bible as the exclusive knowledge base? I hope this is what SALOS can be. Not a replacement, not a substitute. A reminder, a better placeholder. A voice crying out in the AI wilderness.
                        </p>
                    </div>
                </div>
                <div className="border rounded-lg p-6 space-y-4 mx-auto max-w-sm lg:max-w-none">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
                        <picture>
                            <source srcSet={RickyPortrait} type="image/webp" />
                            <img
                                src={RickyPortraitJpg}
                                alt="Ricky Loudermilk"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                            />
                        </picture>
                    </div>
                    <div>
                        <h3 className="text-center text-xl font-semibold text-primary-200 mb-1">Ricky Loudermilk</h3>
                        <p className="text-center text-sm text-primary-400 font-medium mb-4">Co-Founder</p>
                        <p className="text-sm text-primary-200 leading-relaxed">
                            SALOS is the intersection of modern technology and eternal truth. SALOS is a constant reminder of faith, and that no matter how far humanity progresses, we are all aligned in the image of God. SALOS is a call to action to put Jesus at the forefront of your life. SALOS is a tool for those who know God, and for those who have yet to meet God. SALOS reminds us that no matter how far we stray away, He&apos;s right by your side struggling and succeeding with you.
                        </p>
                        <br />
                        <p className="text-sm text-primary-200 leading-relaxed">
                            SALOS is a resource I wish I had when I was getting to learn my Bible. SALOS is a resource I wish I had when I was struggling with battles only I could speak with God about. SALOS is more than a product, it&apos;s a tool that gives anyone unlimited access into Christianity. A solution to modern day depression and anxiety. A solution to chronic loneliness, and a solution to unlocking your passion and fulfillment.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact */}
        <div id="Contact">
            <div className="place-items-center text-center text-balance text-primary-400 border-y grid grid-cols-[1rem_2.375rem_1fr_2.375rem_1rem] lg:col-span-5 lg:grid-cols-[auto_4.125rem_60rem_4.125rem_auto]">
                <div className="size-full border-r" />
                <div className="size-full border-r" />
                <span className="size-full place-content-center p-4 lg:p-6">
                    <div className="w-full flex justify-center items-center gap-4">
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500/0 to-primary-500 lg:w-[5.5rem]" />
                        Contact Us
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-500/0 lg:w-[5.5rem]" />
                    </div>
                </span>
                <div className="size-full border-l" />
                <div className="size-full border-l" />
            </div>
            <div className="border-b grid grid-cols-[16px_1fr_16px] lg:grid-cols-[auto_60rem_auto]">
                <div className="size-full border-r" />
                <div className="space-y-8 py-10 px-4 lg:py-14 lg:px-8">
                    <div className="text-center max-w-[41.75rem] mx-auto space-y-4">
                        <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] lg:text-[3rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%]">
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                                Get In Touch
                            </span>
                        </h2>
                        <p className="text-lg text-primary-500 leading-[128%] -tracking-[2%]">
                            We'd love to hear from you. Whether you have questions, feedback, or just want to connect, we're here to listen.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="w-fit mx-auto text-center bg-primary-gradient/5 border border-primary-950 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-primary-100">All Inquiries</h3>
                            <p className="text-sm text-primary-300">
                                Questions about SALOS, partnerships, or anything else
                            </p>
                            <a
                                href="mailto:info@salosai.com"
                                className="inline-block text-primary-200 hover:text-primary-300 transition-colors underline"
                            >
                                info@salosai.com
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-primary-600 mb-4">
                            Ready to start your spiritual journey with SALOS?
                        </p>
                        <Button asChild>
                            <a href="/chat">
                                Start Chatting
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="size-full border-l" />
            </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-[1rem_1fr_1rem] lg:grid-cols-[auto_60rem_auto]">
            <div className="size-full border-r" />
            <div className="space-y-10 py-14 px-4 lg:space-y-14 lg:py-18 lg:px-6">
                <Link
                    href={route('home')}
                    prefetch={['hover', 'click']}
                    cacheFor={86400} // 1 day
                    className="block w-fit mx-auto"
                >
                    <SalosLogo
                        width={292}
                        height={80}
                        className="mx-auto"
                    />
                </Link>
                <div className="w-fit text-center font-normal text-primary-700 space-x-3 -tracking-[2%] mx-auto lg:text-lg lg:flex lg:justify-center lg:items-center lg:gap-12">
                    <Link
                        href={`${route('home')}#Features`}
                        prefetch={['hover', 'click']}
                        cacheFor={3600} // 1 hour
                    >
                        Features
                    </Link>
                    <Link
                        href={`${route('home')}#Benefits`}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        Benefits
                    </Link>
                    <Link
                        href={route('about')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        About
                    </Link>
                    <Link
                        href={`${route('home')}#Pricing`}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        Pricing
                    </Link>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-center items-center gap-10">
                        <a
                            href="https://x.com/salos_ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={xtwitterLogo}
                                width={24}
                                height={24}
                                alt="X (formerly known as Twitter) logo"
                            />
                        </a>
                        <a
                            href="https://instagram.com/salos.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={instagramLogo}
                                width={24}
                                height={24}
                                alt="Instagram logo"
                            />
                        </a>
                        <a
                            href="https://tiktok.com/@salos.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={tiktokLogo}
                                width={24}
                                height={24}
                                alt="TikTok logo"
                            />
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-sm text-primary-700 lg:gap-6 lg:text-base">
                        <Link
                            href={route('privacy-policy')}
                            prefetch={['hover', 'click']}
                            cacheFor={3600}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href={route('terms')}
                            prefetch={['hover', 'click']}
                            cacheFor={3600}
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
            <div className="size-full border-l" />
            <div className="size-full border-r border-t" />
            <div className="flex justify-center items-center p-6 border-t">
                <span className="text-center text-base font-normal text-primary-950 leading-6">© 2025 SALOS. All Rights Reserved</span>
            </div>
            <div className="size-full border-l border-t" />
        </div>
    </>
  );
}
