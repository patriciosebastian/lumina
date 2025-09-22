import Navbar from '@/components/navbar';
import Announcement from '@/components/ui/announcement';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

interface ErrorPageProps {
    status: number;
    message?: string;
}

const ErrorPage = ({ status, message: errorMessage }: ErrorPageProps) => {
    const route = useRoute();

    const getErrorMessage = (status: number) => {
        switch (status) {
            case 403:
                return {
                    title: 'Access Forbidden',
                    message: 'You do not have permission to access this resource.',
                    verse: '"Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it."',
                    reference: 'Matthew 7:13-14 (NIV)',
                };
            case 404:
                return {
                    title: 'Page Not Found',
                    message: 'The page you are looking for could not be found.',
                    verse: '"What do you think? If a man owns a hundred sheep, and one of them wanders away, will he not leave the ninety-nine on the hills and go to look for the one that wandered off?"',
                    reference: 'Matthew 18:12 (NIV)',
                };
            case 500:
                return {
                    title: 'Server Error',
                    message: 'Something went wrong on our end. We are working to fix this issue.',
                    verse: '"Come to me, all you who are weary and burdened, and I will give you rest."',
                    reference: 'Matthew 11:28 (NIV)',
                };
            case 503:
                return {
                    title: 'Service Unavailable',
                    message: 'The service is temporarily unavailable. Please try again later.',
                    verse: '"He says, Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth."',
                    reference: 'Psalm 46:10 (NIV)',
                };
            default:
                return {
                    title: 'Something Went Wrong',
                    message: 'An unexpected error occurred.',
                    verse: '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."',
                    reference: 'Romans 8:28 (NIV)',
                };
        }
    };

    const { title, message, verse, reference } = getErrorMessage(status);

    return (
        <>
            <Head title={`${title} ${status}`} />
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

            {/* Main Error Content */}
            <div className="relative min-h-[calc(100vh-200px)] border-b grid grid-cols-[16px_1fr_16px] lg:col-span-5 lg:grid-cols-[1fr_4.125rem_55.625rem_4.125rem_1fr]">
                <div className="size-full border-r" />
                <div className="hidden size-full border-r lg:block" />
                <div className="space-y-6 px-4 py-8 flex flex-col justify-center items-center lg:space-y-8 lg:px-6 lg:py-10">

                    <div className="flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center">
                        <span className="text-xl lg:text-4xl font-bold text-primary-100">{status}</span>
                    </div>

                    <h1 className="text-[2rem] lg:text-[3rem] font-bold text-center leading-[110%] lg:font-black lg:leading-[100%]">
                        <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#A8E4FF] to-primary-500 lg:-tracking-[3px] lg:pb-[.3rem]">
                            {title}
                        </span>
                    </h1>

                    <p className="text-base lg:text-lg text-primary-500 text-center max-w-[35rem] leading-[128%] -tracking-[2%]">
                        {message}
                        {errorMessage && errorMessage !== message && (
                            <span className="block mt-2 text-xs text-primary-600 font-mono">
                                <span className="underline">Error Message:</span> {errorMessage}
                            </span>
                        )}
                    </p>

                    <div className="max-w-[35rem] text-center bg-gradient-to-b from-[#54C0F100] to-[#54C0F133] border-l-4 border-primary-300 rounded-md p-4 lg:p-6">
                        <blockquote className="mb-2 italic text-sm lg:text-base text-primary-700 dark:text-primary-300">
                            {verse}
                        </blockquote>
                        <cite className="text-xs lg:text-sm font-medium text-primary-600 dark:text-primary-400">
                            — {reference}
                        </cite>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center pt-2">
                        <Button asChild size="lg">
                            <Link
                                href={route('home')}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                            >
                                Return Home
                            </Link>
                        </Button>
                        <Button
                            variant="salosSecondary"
                            size="lg"
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </div>

                    <div className="text-center pt-4">
                        <p className="text-sm text-primary-700">
                            Need help or problem persisting? Contact us at{' '}
                            <a
                                href="mailto:info@salosai.com"
                                className="font-medium text-primary-100 underline underline-offset-4"
                            >
                                info@salosai.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="hidden size-full border-l lg:block" />
                <div className="size-full border-l" />

                {/* Background Gradient */}
                <div className="absolute size-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-[at_50%_75%] from-primary-200 via-primary-500 to-background to-90% blur-[15rem]" />
            </div>
        </>
    );
};

export default ErrorPage;
