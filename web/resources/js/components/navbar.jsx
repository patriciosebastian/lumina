import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { Button } from './ui/button';
import { Link, usePage } from '@inertiajs/react';
import MobileNavIcon from '../../images/MobileNavIcon.svg';
import LuminaLogo from './ui/luminaLogo';
import { useRoute } from 'ziggy-js';

export default function Navbar() {
    const route = useRoute();
    const props = usePage().props;
    const user = props.auth?.user;

  return (
    <>
        <NavigationMenu className="bg-transparent p-3 rounded-xl mx-auto bg-linear-to-b from-[#54C0F100] to-[#54C0F133] relative before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-xl before:bg-gradient-to-b before:from-[#54C0F133] before:to-[#54C0F100] before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] lg:py-3 lg:px-6 [&_[data-state='open']]:border-0 z-100">
            <NavigationMenuList className="w-[18.063rem] justify-between items-center md:w-auto md:gap-4">
                <NavigationMenuItem className="lg:w-[7.25rem] lg:h-8 mb-2">
                    <Link
                        href={route('home')}
                        prefetch={['hover', 'click']}
                        cacheFor="1m"
                    >
                        <LuminaLogo />
                    </Link>
                </NavigationMenuItem>
                <div className="hidden md:flex md:justify-center md:items-center md:gap-4 text-md w-fit text-primary-700">
                    <NavigationMenuItem>
                        <Button
                            asChild
                            variant={'luminaGhost'}
                            size={'luminaNav'}
                        >
                            <Link
                                href={`${route('home')}#Features`}
                            >
                                Features
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                            asChild
                            variant={'luminaGhost'}
                            size={'luminaNav'}
                        >
                            <Link
                                href={`${route('home')}#Benefits`}
                            >
                                Benefits
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                            asChild
                            variant={'luminaGhost'}
                            size={'luminaNav'}
                        >
                            <Link
                                href={route('about')}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                            >
                                About
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button
                            asChild
                            variant={'luminaGhost'}
                            size={'luminaNav'}
                        >
                            <Link
                                href={`${route('home')}#Pricing`}
                            >
                                Pricing
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                </div>
                <NavigationMenuItem className='hidden md:block'>
                    {!user ? (
                        <Button
                            asChild
                            size={'luminaNav'}
                        >
                            <Link
                                href={route('chat.index')}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                            >
                                Ask Lumina
                            </Link>
                        </Button>
                    ) : (
                        <Button
                            asChild
                            size={'luminaNav'}
                            variant={'luminaSecondaryAlt'}
                            className="hover:bg-background/60 hover:text-primary-300"
                        >
                            <Link
                                href={route('chat.index')}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                            >
                                Go to Chat
                            </Link>
                        </Button>
                    )}
                </NavigationMenuItem>
                <NavigationMenuItem className="md:hidden w-7 h-7 p-0.5">
                    <NavigationMenuTrigger className="[&>svg]:hidden p-0 h-auto !bg-transparent">
                        <img
                            src={MobileNavIcon}
                            width={24}
                            height={24}
                            alt="Mobile Navigation Icon"
                        />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="text-primary-700 text-lg font-normal w-[19.563rem] rounded-xl bg-radial from-[#081F29] to-[#031B26] py-10 px-4 flex flex-col gap-12 !border-0">
                        <div className="flex flex-col gap-4">
                            <Link
                                href={`${route('home')}#Features`}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                                className="block hover:text-primary-100"
                            >
                                Features
                            </Link>
                            <Link
                                href={`${route('home')}#Benefits`}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                                className="block hover:text-primary-100"
                            >
                                Benefits
                            </Link>
                            <Link
                                href={route('about')}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                                className="block hover:text-primary-100"
                            >
                                About
                            </Link>
                            <Link
                                href={`${route('home')}#Pricing`}
                                prefetch={['hover', 'click']}
                                cacheFor="1m"
                                className="block hover:text-primary-100"
                            >
                                Pricing
                            </Link>
                        </div>
                        {!user ? (
                            <Button
                                asChild
                                size={'luminaDropdown'}
                            >
                                <Link
                                    href={route('chat.index')}
                                    prefetch={['hover', 'click']}
                                    cacheFor="1m"
                                >
                                    Ask Lumina
                                </Link>
                            </Button>
                        ) : (
                            <Button
                                asChild
                                size={'luminaDropdown'}
                                variant={'luminaSecondaryAlt'}
                                className="hover:bg-background/60 hover:text-primary-300"
                            >
                                <Link
                                    href={route('chat.index')}
                                    prefetch={['hover', 'click']}
                                    cacheFor="1m"
                                >
                                    Go to Chat
                                </Link>
                            </Button>
                        )}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    </>
  );
}
