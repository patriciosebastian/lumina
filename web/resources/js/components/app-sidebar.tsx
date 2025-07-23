import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import SalosLogo from './ui/salosLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRoute } from 'ziggy-js';
import { Edit } from 'lucide-react';

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
    const route = useRoute();
    const isChatRoute = route().current('chat.*');

    const getRouteName = (): string => {
        return isChatRoute ? 'chat.index' : 'journal.index';
    }

    const getLabel = (): string => {
        return isChatRoute ? 'New Chat' : 'New Journal';
    }

    return (
        <div className="relative">
            <div className={`${!isMobile ? "bg-transparent rounded-2xl before:rounded-2xl before:content-[''] before:absolute before:z-[1] before:inset-2 before:p-[1px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]" : ''}`}>
                <Sidebar
                    collapsible="icon"
                    className="border-none"
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
                                        <SalosLogo />
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarMenuButton
                            asChild
                            className="w-auto pl-2 my-2 mx-2 hover:bg-primary-950/70"
                        >
                            <Link
                                href={route(getRouteName())}
                                prefetch
                                className="flex items-center gap-4 px-2 mx-2"
                            >
                                <Edit className="text-primary-500" />
                                <span>{getLabel()}</span>
                            </Link>
                        </SidebarMenuButton>
                        <NavMain items={data} />
                    </SidebarContent>

                    <SidebarFooter>
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
