import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { useInitials } from '@/hooks/use-initials';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { ChevronsUpDown, LogOut, Settings } from 'lucide-react';

export function NavUser() {
    const { auth } = usePage<SharedData>().props;
    const { state } = useSidebar();
    const getInitials = useInitials();
    const cleanup = useMobileNavigation();
    const route = useRoute();
    const isCollapsed = state === 'collapsed';

    const user = auth.user ?? {
        name: 'Guest',
        email: '',
    };

    const initials = getInitials(user.name);

    const avatar = (
        <span
            className="w-8 h-8 inline-flex items-center justify-center bg-gold text-bg rounded-full font-serif text-[17px] font-medium tracking-[.02em] flex-shrink-0 select-none"
            aria-hidden="true"
        >
            {initials}
        </span>
    );

    return (
        <SidebarMenu className="p-0">
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className={[
                                'w-full flex items-center gap-3 text-left',
                                'px-[10px] py-3 rounded-[5px] border border-transparent',
                                'transition-[background,border-color] duration-350',
                                'hover:bg-bg hover:border-border',
                                isCollapsed ? 'justify-center px-2 py-3' : '',
                            ].join(' ')}
                        >
                            {avatar}
                            {!isCollapsed && (
                                <>
                                    <div className="flex flex-col flex-1 min-w-0 leading-[1.2]">
                                        <span className="font-ui text-[13px] tracking-[.03em] text-ink truncate">
                                            {user.name}
                                        </span>
                                    </div>
                                    <ChevronsUpDown className="size-4 text-ink-2 flex-shrink-0" />
                                </>
                            )}
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align={isCollapsed ? 'start' : 'end'}
                        side={isCollapsed ? 'right' : 'top'}
                        sideOffset={8}
                        className="bg-white border border-border rounded-[4px] p-[6px] min-w-[240px] shadow-[0_0_0_1px_rgba(184,146,42,.18),0_14px_28px_-10px_rgba(44,36,22,.22),0_4px_10px_-6px_rgba(44,36,22,.18)] lum-popover-enter"
                    >
                        {/* Identity block */}
                        <div className="px-[14px] py-[14px] flex flex-col gap-[3px] border-b border-border mb-1">
                            <span className="font-serif italic text-[18px] text-ink leading-[1.2]">
                                {user.name}
                            </span>
                            {user.email && (
                                <span className="font-ui text-[12px] text-ink-2 tracking-[.04em] break-all">
                                    {user.email}
                                </span>
                            )}
                        </div>

                        {/* Settings */}
                        <Link
                            href={route('profile.edit')}
                            as="button"
                            prefetch
                            onClick={cleanup}
                            className="flex items-center gap-[10px] w-full px-3 py-[9px] rounded-[3px] font-ui text-[13px] tracking-[.04em] text-ink hover:bg-surface transition-colors"
                        >
                            <Settings className="size-4 text-ink-2 flex-shrink-0" />
                            Settings
                        </Link>

                        <div className="h-px bg-border mx-[6px] my-1" />

                        {/* Log out */}
                        {user.email ? (
                            <Link
                                method="post"
                                href={route('logout')}
                                as="button"
                                onClick={cleanup}
                                className="flex items-center gap-[10px] w-full px-3 py-[9px] rounded-[3px] font-ui text-[13px] tracking-[.04em] text-ink hover:bg-surface transition-colors"
                            >
                                <LogOut className="size-4 text-ink-2 flex-shrink-0" />
                                Log out
                            </Link>
                        ) : (
                            <Link
                                href={route('login')}
                                as="button"
                                onClick={cleanup}
                                className="flex items-center gap-[10px] w-full px-3 py-[9px] rounded-[3px] font-ui text-[13px] tracking-[.04em] text-ink hover:bg-surface transition-colors"
                            >
                                Log in
                            </Link>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
