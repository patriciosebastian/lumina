import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder } from 'lucide-react';
import SalosLogo from './ui/salosLogo';
import { useIsMobile } from '@/hooks/use-mobile';

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        url: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar({data = []}: { data?: [] }) {
    const isMobile = useIsMobile();

    return (
        <div className="relative">
            <div className={`${!isMobile ? "bg-transparent rounded-2xl before:rounded-2xl before:content-[''] before:absolute before:z-[1] before:inset-2 before:p-[1px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]" : ''}`}>
                <Sidebar
                    className="border-none"
                    mobileClasses="border-none border-r-0 bg-background rounded-2xl before:rounded-2xl before:content-[''] before:absolute before:z-[1] before:inset-0 before:p-[0px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]"
                >
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" asChild>
                                    <Link href="/chat" prefetch>
                                        <SalosLogo />
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>

                    <SidebarContent>
                        <NavMain items={data} />
                    </SidebarContent>

                    <SidebarFooter>
                        <NavFooter items={footerNavItems} className="mt-auto" />
                        <NavUser />
                    </SidebarFooter>
                </Sidebar>
            </div>
        </div>
    );
}
