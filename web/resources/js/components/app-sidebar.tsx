import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import LuminaLogo from './ui/luminaLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRoute } from 'ziggy-js';
import { Edit } from 'lucide-react';
import Announcement from './ui/announcement';

const footerNavItems: NavItem[] = [
    // {
    //     title: '',
    //     url: '',
    //     icon: Folder,
    // },
    // {
    //     title: '',
    //     url: '',
    //     icon: BookOpen,
    // },
];

export function AppSidebar({ data = [] }: { data?: [] }) {
    const isMobile = useIsMobile();
    const { state } = useSidebar();
    const route = useRoute();

    return (
        <div className="relative">
            <div className={`${!isMobile ? "bg-transparent rounded-2xl before:rounded-2xl before:content-[''] before:absolute before:z-[1] before:inset-2 before:p-[1px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]" : ''}`}>
                <Sidebar
                    collapsible="icon"
                    className="border-none text-foreground"
                    mobileClasses="border-none border-r-0 bg-background rounded-2xl before:rounded-2xl before:content-[''] before:absolute before:z-[1] before:inset-0 before:p-[0px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]"
                >
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    size="lg"
                                    asChild
                                    className="hover:bg-transparent"
                                >
                                    <Link href={route('chat.index')} prefetch>
                                        <LuminaLogo />
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>

                    <SidebarContent className="transparent-scrollbar">
                        <SidebarMenuButton
                            asChild
                            className="w-auto pl-2 my-2 mx-2 hover:text-foreground hover:bg-primary-950/70"
                        >
                            <Link
                                href={route('chat.index')}
                                prefetch
                                className="flex items-center gap-4 px-2 mx-2"
                            >
                                <Edit className="text-primary-500" />
                                <span>New Chat</span>
                            </Link>
                        </SidebarMenuButton>
                        <NavMain
                            items={data}
                            sidebarState={state}
                        />
                    </SidebarContent>

                    <SidebarFooter className="text-foreground">
                        {isMobile &&
                            <Announcement className="w-fit bg-transparent text-left text-sm text-primary-800 ml-4">
                                Lumina is in Beta. Help us make it better. Report feedback or bugs to <a href="mailto:info@chatwithlumina.com" className="underline">info@chatwithlumina.com</a>
                            </Announcement>
                        }
                        <NavFooter
                            items={footerNavItems}
                            className="mt-auto"
                        />
                        <NavUser />
                    </SidebarFooter>
                </Sidebar>
            </div>
        </div>
    );
}
