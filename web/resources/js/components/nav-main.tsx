import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, router } from '@inertiajs/react';
import { Ellipsis, Trash2 } from 'lucide-react';
import { useRoute } from 'ziggy-js';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useState } from 'react';

export function NavMain({
    items = [],
    sidebarState,
}: {
    items: [];
    sidebarState?: 'expanded' | 'collapsed';
}) {
    const route = useRoute();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const sidebarLabel = 'Chats';
    const routeName = 'chat.show';

    const getItemId = (item: object) => {
        if (item.id) return item.id;
        if (item.chat_id) return item.chat_id;
    };

    const handleDelete = (itemId: number) => {
        router.delete(route('chat.destroy', { id: itemId }), {
            onBefore: () => window.confirm('Are you sure? This cannot be undone.'),
            onError: (errors) => {
                console.error('Error deleting message: ', errors);
            },
        });
    };

    return (
        <SidebarGroup className="px-2 py-0 mt-4">
            {sidebarState !== 'collapsed' && (
                <SidebarGroupLabel className="flex items-center gap-[10px] px-[14px] pb-[10px] font-ui text-[10.5px] tracking-[.26em] uppercase text-ink-2">
                    <span className="lum-rule" style={{ width: 14 }} />
                    {sidebarLabel}
                </SidebarGroupLabel>
            )}
            <SidebarMenu>
                {items.map((item) => {
                    const id = getItemId(item);
                    const isActive = route().current(routeName, { id });
                    const isMenuOpen = openDropdown === id;

                    return (
                        <SidebarMenuItem
                            key={id}
                            className="group/item relative"
                        >
                            <SidebarMenuButton
                                asChild
                                isActive={isActive}
                                className={[
                                    'rounded-[4px] transition-colors duration-300',
                                    'hover:!bg-[rgba(184,146,42,.07)]',
                                    isActive
                                        ? '!bg-bg !shadow-[inset_2px_0_0_var(--color-gold)]'
                                        : '',
                                ].join(' ')}
                            >
                                <Link
                                    href={route(routeName, { id })}
                                    prefetch
                                    className="pr-9"
                                >
                                    <span className="font-book text-[13.5px] leading-[1.45] text-ink tracking-[.005em] truncate">
                                        {item.name}
                                    </span>
                                </Link>
                            </SidebarMenuButton>

                            {sidebarState !== 'collapsed' && (
                                <DropdownMenu
                                    open={isMenuOpen}
                                    onOpenChange={(open) =>
                                        setOpenDropdown(open ? id : null)
                                    }
                                >
                                    <DropdownMenuTrigger
                                        className={[
                                            'absolute top-1/2 -translate-y-1/2 right-[6px]',
                                            'w-[24px] h-[24px] flex items-center justify-center',
                                            'rounded-[3px] text-ink-2 transition-[opacity,background,color] duration-250',
                                            'opacity-0 pointer-events-none',
                                            'group-hover/item:opacity-100 group-hover/item:pointer-events-auto',
                                            isMenuOpen
                                                ? '!opacity-100 !pointer-events-auto bg-[rgba(44,36,22,.08)]'
                                                : '',
                                            'hover:bg-[rgba(44,36,22,.08)] hover:text-ink',
                                        ].join(' ')}
                                    >
                                        <Ellipsis className="size-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="bg-white border border-border rounded-[4px] p-[6px] min-w-[220px] shadow-[0_0_0_1px_rgba(184,146,42,.18),0_14px_28px_-10px_rgba(44,36,22,.22),0_4px_10px_-6px_rgba(44,36,22,.18)] lum-popover-enter"
                                    >
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem
                                                className="flex items-center gap-[10px] w-full px-3 py-[9px] rounded-[3px] font-ui text-[13px] tracking-[.04em] text-[#8b2e1a] hover:!bg-[#f7e8e2] hover:text-[#6e2010] cursor-pointer"
                                                onClick={() => handleDelete(id)}
                                            >
                                                Delete
                                                <Trash2 className="ml-auto size-4 text-[#8b2e1a]" />
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
