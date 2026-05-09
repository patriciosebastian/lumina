import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import AppLogoIcon from '@/components/app-logo-icon';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import LuminaLogo from './ui/luminaLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRoute } from 'ziggy-js';
import { PenLine, Search } from 'lucide-react';
import Announcement from './ui/announcement';

const footerNavItems: NavItem[] = [];

export function AppSidebar({ data = [] }: { data?: [] }) {
    const isMobile = useIsMobile();
    const { state } = useSidebar();
    const route = useRoute();
    const isCollapsed = state === 'collapsed';

    return (
        <Sidebar
            collapsible="icon"
            className="border-none bg-surface text-ink"
            mobileClasses="border-none bg-surface text-ink"
        >
            <SidebarHeader className="px-[22px] pt-[22px] pb-4 border-b border-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            asChild
                            className="hover:bg-transparent active:bg-transparent p-0 h-auto"
                        >
                            <Link
                                href={route('chat.index')}
                                prefetch
                            >
                                {isCollapsed ? (
                                    <AppLogoIcon className="size-[22px] text-[#B8922A]" />
                                ) : (
                                    <LuminaLogo />
                                )}
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="px-0 gap-0">
                {isCollapsed ? (
                    <div className="flex flex-col items-center gap-2 py-3">
                        <Link
                            href={route('chat.index')}
                            prefetch
                            className="w-[38px] h-[38px] flex items-center justify-center border border-border rounded-[4px] text-ink-2 hover:bg-[rgba(184,146,42,.10)] hover:border-gold hover:text-gold transition-colors"
                        >
                            <PenLine size={16} />
                        </Link>
                    </div>
                ) : (
                    <div className="px-4 pt-4 pb-0 flex flex-col gap-[10px]">
                        <Link
                            href={route('chat.index')}
                            prefetch
                            className="lum-newchat"
                        >
                            <span className="lum-newchat-mark">
                                <PenLine size={14} />
                            </span>
                            <span className="lum-newchat-label">New Chat</span>
                        </Link>
                        <button
                            className="lum-side-search"
                            type="button"
                        >
                            <Search size={13} />
                            <span>Search</span>
                        </button>
                    </div>
                )}

                <NavMain
                    items={data}
                    sidebarState={state}
                />
            </SidebarContent>

            <SidebarFooter className="text-ink border-t border-border p-0">
                {isMobile && !isCollapsed && (
                    <Announcement className="w-fit bg-transparent text-left text-xs text-ink-2 font-ui px-4 pt-3 pb-1">
                        Lumina is in Beta. Report feedback or bugs to{' '}
                        <a
                            href="mailto:info@chatwithlumina.com"
                            className="underline"
                        >
                            info@chatwithlumina.com
                        </a>
                    </Announcement>
                )}
                <NavFooter
                    items={footerNavItems}
                    className="mt-auto"
                />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
