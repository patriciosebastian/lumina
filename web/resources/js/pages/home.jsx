import CenteredBannerCard from '@/components/centeredBannerCard';
import CenteredIconCard from '@/components/centeredIconCard';
import Navbar from '@/components/navbar';
import TestimonialCard from '@/components/testimonialCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Chatbox from '@/components/ui/chatbox';
import SalosTabs from '@/components/ui/salosTabs';
import { TabsContent } from '@/components/ui/tabs';
import WideBannerCard from '@/components/wideBannerCard';
import { Link } from '@inertiajs/react';
import testimonials from '@/data/fake/testimonials/testimonials';
import pricingCards from '@/data/static/pricingCards';
import PricingCard from '@/components/pricingCard';
import handPhone from '../../../public/hand_phone.png';
import blankScreen from '../../../public/white_rectangle_for_phone.svg';
import SalosODove from '../../../public/SALOS_Dove_O_Group_1.svg';
import DownloadOnAppStore from '../../../public/download_on_app_store.svg';
import { useIsMobile } from '@/hooks/use-mobile';
import xtwitterLogo from '../../../public/X_Twitter.svg';
import instagramLogo from '../../../public/instagram.svg';
import tiktokLogo from '../../../public/tiktok.svg';
import SalosLogo from '@/components/ui/salosLogo';
import { useRoute } from 'ziggy-js';

export default function Home() {
    const isMobile = useIsMobile();
    const route = useRoute();

  return (
    <>
        {/*
        *     NOTES:
        *
        *   - Don't forget to componentize certain sections:
        *       - Think of header as a HomeLayout layout file, not a component (navbar as children).
        */}
        <div className="relative grid grid-rows-8 h-screen min-h-svh lg:h-full lg:grid-rows-[1fr_64px_69px_5fr]">
            <div className="place-items-center border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="w-4 h-full border-r lg:w-full" />
                <div className="hidden size-full border-r lg:block" />
                <Navbar />
                <div className="hidden size-full border-l lg:block" />
                <div className="w-4 h-full border-l lg:w-full" />
            </div>
            <div className="hidden border-b lg:col-span-5 lg:grid lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="size-full border-r" />
                <div className="w-[4.125rem] h-full border-r" />
                <div className="w-[55.625rem]" />
                <div className="w-[4.125rem] h-full border-l" />
                <div className="w-full border-l" />
            </div>
            <div className="place-items-center text-center text-balance text-primary-400 border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="size-full border-r" />
                <div className="hidden size-full border-r lg:block" />
                <span className="size-full place-content-center p-4 lg:p-6">
                    <div className="w-full flex justify-center items-center gap-4">
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500/0 to-primary-500 lg:w-[5.5rem]" />
                        SALOS Your Bible Based AI Driven Mentor.
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500 to primary-500/0 lg:w-[5.5rem]" />
                    </div>
                </span>
                <div className="hidden size-full border-l lg:block" />
                <div className="size-full border-l" />
            </div>
            <div className="row-span-5 relative border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="size-full border-r" />
                <div className="hidden size-full border-r lg:block" />
                <div className="space-y-6 px-4 py-6 flex flex-col justify-center items-center lg:space-y-14 lg:px-6 lg:py-10">
                    <h1 className="text-[2.5rem] font-bold text-center leading-[110%] lg:w-[55.625rem] lg:text-[5rem] lg:font-black lg:leading-[100%]">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                            Wisdom at Your Fingertips
                        </span>
                    </h1>
                    <Chatbox />
                </div>
                <div className="hidden size-full border-l lg:block" />
                <div className="size-full border-l" />

                {/* Verses */}
                <div className="hidden absolute w-[13.125rem] p-4 top-[7.5rem] lg:block">
                    <p className="text-xs opacity-30">
                        <span className="block font-semibold">Romans 12:2:</span>
                        &quot;Do not conform to the pattern of this world, but be transformed by the renewing of your mind&quot;
                    </p>
                </div>
                <div className="hidden absolute w-[13.125rem] p-4 bottom-[7.5rem] right-0 text-end lg:block">
                    <p className="text-xs opacity-30">
                        <span className="block font-semibold">Philippians 4:13:</span>
                        &quot;I can do all things through Christ who strengthens me&quot;
                    </p>
                </div>
            </div>
            <div className="relative size-full flex justify-center items-center lg:col-span-5 lg:h-[400px]">
                {/* Planet container */}
                <div className="relative w-[23.438rem] max-w-full aspect-[616/345] lg:w-full lg:aspect-[1022/345]">
                    <div className="absolute top-26 left-1/2 -translate-x-1/2 size-full lg:h-full lg:w-[85%] lg:top-48">
                        {/* Outer glow */}
                        <div
                          className="absolute size-full top-0 left-1/2 -translate-x-1/2 rounded-[250px/87px] blur-[75px] lg:rounded-[1022px/300px]"
                          style={{
                            background:
                              "linear-gradient(270deg, rgba(84,192,241,0) 20%, rgba(84,192,241,1) 50%, rgba(84,192,241,0) 80%)",
                          }}
                        />

                        {/* Edge glow */}
                        <div
                          className="absolute size-full top-0 left-0 rounded-[262px/87px] lg:rounded-[1022px/300px]"
                          style={{
                            background:
                              "linear-gradient(270deg, rgba(84,192,241,0) 20%, rgba(84,192,241,1) 50%, rgba(84,192,241,0) 80%)",
                          }}
                        />

                        {/* Dark surface */}
                        <div className="absolute size-full top-[3px] left-0 bg-[#021219] rounded-[262px/85.5px] blur-[10px] lg:rounded-[1022px/300px]" />
                    </div>
                </div>
            </div>

            {/* Main Hero Background Gradient */}
            <div className="absolute size-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 rounded-full bg-radial-[at_50%_75%] from-primary-200 via-primary-500 to-background to-90% blur-[15rem]" />
        </div>

        {/* TODO: Does the little logo badge go here? */}
        {/* About */}
        <div className="relative grid grid-rows-[3.563rem_auto] bg-[#031118] mb-14 overflow-x-clip before:content-[''] before:absolute before:inset-x-0 before:-top-8 before:h-8 before:bg-gradient-to-b before:from-transparent before:from-[0%] before:to-[#031118] before:to-[100%] lg:mb-[11.5rem] lg:grid-rows-1 lg:before:content-none lg:before:bg-none">
            <div className="grid grid-cols-[16px_1fr_16px] bg-background">
                <div />
                <div />
                <div />
            </div>
            <div className="grid grid-cols-[16px_1fr_16px] lg:grid-cols-[1fr_55.625rem_1fr]">
                <div className="border-y" />
                <div className="text-primary-400 text-3xl text-pretty leading-[128%] -tracking-[2%] border px-4 py-10 space-y-8 lg:text-[2.5rem] lg:px-8 lg:py-14 lg:space-y-10">
                    <p>
                        Inspired by the wisdom of Solomon, guided by The Word, and powered by AI. Salos helps you discover God's truth, realign your purpose, and supplement your spiritual journey.
                    </p>
                    <p>
                        By integrating the timeless truth of Scripture with the convenience of artificial intelligence, Salos seeks to inspire, guide, and uplift individuals in their pursuit of purpose and spiritual direction through cutting edge AI chat features, robust journaling mechanics, and purposeful habit formation.
                    </p>
                </div>
                <div className="border-y" />
            </div>

            {/* Gradient Blobs */}
            <div className="absolute w-[12.5rem] h-[46.25rem] top-[14.813rem] left-20 -translate-x-1/2 bg-[#D387FF] opacity-15 blur-[150px] lg:h-[42.688rem]" />
            <div className="absolute w-[12.5rem] h-[46.25rem] top-[14.813rem] right-20 translate-x-1/2 bg-[#D387FF] opacity-15 blur-[150px] lg:h-[42.688rem]" />
        </div>

        {/* Features */}
        <div
            className="space-y-10 px-4 mb-14 lg:space-y-20 lg:mb-[11.5rem]"
            id="Features"
        >
            <div className="text-center max-w-[41.75rem] mx-auto">
                <Badge
                    variant={'salosPrimary'}
                    className="mb-6"
                >
                    Features
                </Badge>
                <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] mb-4 lg:text-[4rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%] lg:mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                        Elevate Your Potential With Our AI Solutions
                    </span>
                </h2>
                <p className="text-lg text-balance text-primary-500 mx-auto leading-[128%] -tracking-[2%]">
                    Discover the transformative power of AI. Our solutions revolutionize your approach, ensuring success in dynamic landscape.
                </p>
            </div>
            <div className="space-y-4">
                <WideBannerCard
                    title="Biblical Based Wisdom"
                    subtitle="Answers grounded in God's Word."
                    className="mx-auto"
                >
                    With logic derived exclusively from the teachings of Jesus and the wisdom of the Bible, Salos empowers users to invite Jesus into their day to day schedule to be reminded and grounded in true purpose.
                </WideBannerCard>
                <WideBannerCard
                    title="AI-Powered Mentorship"
                    subtitle="Learn, grow, and receive guidance through advanced AI."
                    className="mx-auto"
                >
                    Salos' state-of-the-art chat features contains memory recall and biblical based advice to help navigate trials and tribulations and celebrate great successes. A robust database with tailored solutions applicable to modern day situations rooted in eternal truth gives quick and easy access to a new age Bible based chat, and journal functions that pushes users toward self progression and a deeper relationship with Jesus.
                </WideBannerCard>
                <WideBannerCard
                    title="Biblical and Theological Accuracy"
                    subtitle="Retrieval-Augmented Generation."
                    className="mx-auto"
                >
                    AI responses draw exclusively from our curated database of the complete Bible and select Christian theological works. We retrieve the most relevant biblical passages and theological concepts to ensure the AI crafts responses based solely on these trusted Christian sources.
                </WideBannerCard>
            </div>
            <div className="grid grid-cols-[1rem_2.375rem_1fr_2.375rem_1rem] border-y h-[5.5rem] -mx-4 lg:grid-cols-[auto_4.125rem_60rem_4.125rem_auto] lg:h-auto">
                <div className="size-full border-r" />
                <div className="size-full" />
                <div className="size-full border-x flex justify-center items-center py-4 px-6 lg:p-6">
                    <Button asChild>
                        <Link
                            href={route('chat.index')}
                            prefetch={['hover', 'click']}
                            cacheFor="1m"
                        >
                            Ask SALOS
                        </Link>
                    </Button>
                </div>
                <div className="size-full" />
                <div className="size-full border-l" />
            </div>
        </div>

        {/* Benefits */}
        <div
            className="space-y-10 px-4 mb-14 lg:space-y-20 lg:mb-[8.75rem]"
            id="Benefits"
        >
            <div className="text-center max-w-[41.75rem] mx-auto">
                <Badge
                    variant={'salosPrimary'}
                    className="mb-6"
                >
                    Benefits
                </Badge>
                <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] mb-4 lg:text-[4rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%] lg:mb-5">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                        Extensive Catalog Of Tailored Solutions
                    </span>
                </h2>
                <p className="text-lg font-normal text-primary-500 mx-auto leading-[128%] -tracking-[2%]">
                    Each solution is meticulously crafted to suit your specific requirements. Our offerings can elevate your business to new heights.
                </p>
            </div>
            <div className="space-y-4 lg:grid lg:grid-cols-2 lg:w-[60rem] lg:mx-auto lg:gap-4 lg:space-y-0">
                <CenteredIconCard
                    title="Guidance Rooted in Divine Wisdom"
                    className="mx-auto"
                    contentClasses="p-0"
                >
                    SALOS offers mentorship and advice grounded in God&apos;s wisdom, helping users navigate life&apos;s challenges with clarity, faith, and purpose.
                </CenteredIconCard>
                <CenteredIconCard
                    title="A Trusted Companion for Life's Journey"
                    subtitle="Learn, grow, and receive guidance through advanced AI."
                    className="mx-auto"
                    titleClasses="!w-full"
                    contentClasses="p-0"
                >
                    Unlike traditional self-help tools, SALOS grows alongside users, providing continuous support, encouragement, and wisdom tailored to their unique journey.
                </CenteredIconCard>
                <CenteredIconCard
                    title="Spiritual Growth & Personal Development"
                    subtitle="Ask questions anytime, anywhere."
                    className="mx-auto"
                    titleClasses="!w-full"
                    contentClasses="p-0"
                >
                    By integrating biblical teachings and profound spiritual insights, SALOS helps users deepen their faith, align with their higher purpose, and live a more fulfilling life.
                </CenteredIconCard>
                <CenteredIconCard
                    title="Actionable & Life-Changing Advice"
                    subtitle="Ask questions anytime, anywhere."
                    className="mx-auto"
                    titleClasses="!w-full"
                    contentClasses="p-0"
                >
                    SALOS doesn&apos;t just inspire—it provides real, actionable steps users can take to improve their relationships, mindset, career, and overall well-being.
                </CenteredIconCard>
                <CenteredBannerCard
                    title="Unwavering Support, 24/7"
                    className="lg:col-span-2 lg:text-balance"
                    contentClasses="p-0"
                >
                    No matter the topic, nothing is too small or too big for SALOS. SALOS is always there to provide faith-driven guidance, ensuring users always have someone in their corner navigating life with them.
                </CenteredBannerCard>
            </div>
        </div>

        {/* Testimonials */}
        <div className="mb-14 lg:mb-[8.75rem]">
            <div className="place-items-center text-center text-balance text-primary-400 border-y grid grid-cols-[1rem_2.375rem_1fr_2.375rem_1rem] lg:col-span-5 lg:grid-cols-[auto_4.125rem_60rem_4.125rem_auto]">
                <div className="size-full border-r" />
                <div className="size-full border-r" />
                <span className="size-full place-content-center p-4 lg:p-6">
                    <div className="w-full flex justify-center items-center gap-4">
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500/0 to-primary-500 lg:w-[5.5rem]" />
                        Testimonials
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500 to primary-500/0 lg:w-[5.5rem]" />
                    </div>
                </span>
                <div className="size-full border-l" />
                <div className="size-full border-l" />
            </div>
            <div className="border-b grid grid-cols-[16px_1fr_16px] lg:grid-cols-[auto_60rem_auto] lg:h-[70.625rem] overflow-hidden">
                <div className="size-full border-r" />
                <div className="space-y-6 py-6 lg:space-y-8 lg:px-8 lg:py-10 lg:grid lg:grid-cols-3">
                    {testimonials?.map((testimonial) =>  (
                        <TestimonialCard
                            key={testimonial.id}
                            text={testimonial.text}
                            authorImg={testimonial.author_image}
                            authorName={testimonial.author_name}
                            authorTitle={testimonial.author_title}
                            className={`mx-auto ${testimonial.id >= 4 ? 'hidden lg:flex' : undefined}`}
                        />
                    ))}
                </div>
                <div className="size-full border-l" />
            </div>
        </div>

        {/* Pricing */}
        <div
            className="space-y-10 px-4 mb-14 lg:space-y-20 lg:mb-[11.5rem]"
            id="Pricing"
        >
            <div className="text-center max-w-[41.75rem] mx-auto">
                <h2 className="text-[2rem] font-black leading-11 -tracking-[2%] mb-4 lg:text-[4rem] lg:font-semibold lg:leading-[100%] lg:-tracking-[4%] lg:mb-5">
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px]">
                        Innovative Pricing for Modern Needs
                    </span>
                </h2>
                <p className="text-pretty text-lg font-normal text-primary-500 mx-auto leading-[128%] -tracking-[2%] lg:w-[65%]">
                    Choose from our range of plans designed to help you maximize your search
                </p>
            </div>
            <SalosTabs
                defaultValue="Monthly"
                tabs="Monthly, Yearly"
                className="w-fit mx-auto gap-6 lg:gap-8"
                tabsListStyles="mx-auto"
            >
                <TabsContent
                    value="Monthly"
                    className="space-y-4 lg:space-y-0 lg:flex lg:justify-center lg:items-center lg:gap-4"
                >
                    {pricingCards.map((tier, index) => (
                        <PricingCard
                            key={index}
                            badgeText={tier.badgeText}
                            title={tier.title}
                            subtitle={tier.subtitle}
                            features={tier.features}
                            monthly={true}
                            price={tier.monthlyPrice}
                            priceId={tier.monthlyPriceId}
                            buttonText={tier.buttonText}
                            popular={tier.popular}
                        />
                    ))}
                </TabsContent>
                <TabsContent
                    value="Yearly"
                    className="space-y-4 lg:space-y-0 lg:flex lg:justify-center lg:items-center lg:gap-4"
                >
                    {pricingCards.map((tier, index) => (
                        <PricingCard
                            key={index}
                            badgeText={tier.badgeText}
                            title={tier.title}
                            subtitle={tier.subtitle}
                            features={tier.features}
                            yearly={true}
                            price={tier.yearlyPrice}
                            priceId={tier.yearlyPriceId}
                            buttonText={tier.buttonText}
                            popular={tier.popular}
                        />
                    ))}
                </TabsContent>
            </SalosTabs>
        </div>

        {/* SALOS mobile is coming soon */}
        <div>
            <div className="place-items-center text-center text-balance text-primary-400 border-y grid grid-cols-[1rem_2.375rem_1fr_2.375rem_1rem] lg:col-span-5 lg:grid-cols-[auto_4.125rem_60rem_4.125rem_auto]">
                <div className="size-full border-r" />
                <div className="size-full border-r" />
                <span className="size-full place-content-center p-4 lg:p-6">
                    <div className="w-full flex justify-center items-center gap-4">
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500/0 to-primary-500 lg:w-[5.5rem]" />
                        SALOS Mobile is coming soon
                        <div className="h-[1px] w-6 rounded-full bg-gradient-to-r from-primary-500 to primary-500/0 lg:w-[5.5rem]" />
                    </div>
                </span>
                <div className="size-full border-l" />
                <div className="size-full border-l" />
            </div>
            <div className="border-b grid grid-cols-[16px_1fr_16px] lg:grid-cols-[auto_60rem_auto] lg:h-[70.625rem] overflow-hidden">
                <div className="size-full border-r" />
                <div className="size-full pt-14 px-4 lg:pt-20 lg:px-8 mx-auto">
                    <div className="mb-10 lg:mb-[4.938rem]">
                        <h2 className="text-center text-[1.75rem] font-semibold lg:text-[2.5rem] lg:font-bold text-primary-300 mb-5 lg:px-34 lg:-tracking-[2px] leading-[110%]">Elevating Innovation Beyond Comes True</h2>
                        <p className="text-center text-sm font-normal text-primary-400 lg:px-51 leading-[21px] mb-10">
                            Elevate your business to new heights with our cutting-edge artificial intelligence solutions deployed worldwide. Unlock your company's potential with advanced AI technologies.
                        </p>
                        <Button
                            asChild
                            className="block mx-auto"
                        >
                            <Link
                                href={route('chat.index')}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                                className="text-center"
                            >
                                Ask SALOS
                            </Link>
                        </Button>
                    </div>
                    <div className="relative size-full overflow-hidden">
                        <img
                            src={handPhone}
                            width={isMobile ? 419 : 762}
                            height={isMobile ? 422 : 767}
                            className="-ml-12 mt-3 lg:-ml-14 lg:mt-0"
                            alt="Image of a hand holding a phone with the SALOS app"
                        />
                        <img
                            src={blankScreen}
                            width={isMobile ? 124 : 302}
                            height={isMobile ? 360 : 600}
                            className="absolute top-5.5 left-1/2 ml-[0.3rem] -translate-x-1/2 lg:top-6 lg:left-112.5"
                            alt="Image of a blank screen"
                        />
                        <Badge
                            variant={'salosPrimary'}
                            className="absolute size-[2.375rem] p-[0.61rem] top-1/2 -translate-y-48 left-40 -translate-x-1/2 bg-black shadow-none rounded-[0.61rem] max-h-none lg:rounded-[1.125rem] lg:p-4.5 lg:top-80 lg:size-[4.375rem] lg:left-112.5 lg:-translate-y-0 before:rounded-[0.61rem] lg:before:rounded-[1.125rem]"
                        >
                            <img
                                src={SalosODove}
                                width={isMobile ? 18.44 : 34}
                                height={isMobile ? 18.44 : 34}
                                alt="SALOS abbreviated logo"
                            />
                        </Badge>
                        <div className="absolute w-[6.5rem] h-8 pt-[0.311rem] pb-[0.229rem] px-[0.613rem] rounded-[0.543rem] top-1/2 -translate-y-19 left-40 -translate-x-1/2 place-content-center bg-primary-950 lg:w-[11.813rem] lg:h-14 lg:pt-[0.544rem] lg:pb-[0.401rem] lg:px-[1.119rem] lg:top-150 lg:rounded-2xl lg:-translate-y-0 lg:left-90 lg:-translate-x-0">
                            <img
                                src={DownloadOnAppStore}
                                width={153.11}
                                height={40.88}
                                alt="Download on the App Store"
                            />
                        </div>
                    </div>
                </div>
                <div className="size-full border-l" />
            </div>
        </div>

        {/* Footer */}
        <div className="grid grid-cols-[1rem_1fr_1rem] lg:grid-cols-[auto_60rem_auto]">
            <div className="size-full border-r" />
            <div className="space-y-10 py-14 px-4 lg:space-y-14 lg:py-[8.75rem] lg:px-6">
                <Link
                    href={route('home')}
                    prefetch={['hover', 'click']}
                    cacheFor={86400} // 1 day
                    className="block"
                >
                    <SalosLogo
                        width={292}
                        height={80}
                        className="mx-auto"
                    />
                </Link>
                <div className="w-fit text-center text-lg font-normal text-primary-700 grid grid-cols-2 gap-4 -tracking-[2%] mx-auto lg:flex lg:justify-center lg:items-center lg:gap-12">
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600} // 1 hour
                    >
                        Features
                    </Link>
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        Benefits
                    </Link>
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        Pricing
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-10">
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        <img
                            src={xtwitterLogo}
                            width={24}
                            height={24}
                            alt="X (formerly known as Twitter) logo"
                        />
                    </Link>
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        <img
                            src={instagramLogo}
                            width={24}
                            height={24}
                            alt="Instagram logo"
                        />
                    </Link>
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor={3600}
                    >
                        <img
                            src={tiktokLogo}
                            width={24}
                            height={24}
                            alt="TikTok logo"
                        />
                    </Link>
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
