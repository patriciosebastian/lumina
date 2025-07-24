import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { Ellipsis, Trash2 } from 'lucide-react';
import { useRoute } from 'ziggy-js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useState } from 'react';

export function NavMain({ items = [] }: { items: [] }) {
    const route = useRoute();
    const isChatRoute = route().current('chat.*');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const getSidebarLabel = (): string => {
        return isChatRoute ? 'Chats' : 'Journals';
    }

    const getRouteName = (): string => {
        return isChatRoute ? 'chat.show' : 'journal.show';
    }

    const getItemId = (item: object) => {
        if (item.id) return item.id;
        if (item.chat_id) return item.chat_id;
        if (item.journal_id) return item.journal_id;
    }

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{getSidebarLabel()}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={getItemId(item)} className="group/item relative">
                        <SidebarMenuButton
                            asChild
                            isActive={route().current(getRouteName(), { id: getItemId(item) })}
                            className="hover:bg-primary-950/70"
                        >
                            <Link
                                href={route(getRouteName(), getItemId(item))}
                                prefetch
                            >
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                        <DropdownMenu
                            open={openDropdown === getItemId(item)}
                            onOpenChange={(open) => setOpenDropdown(open ? getItemId(item) : null)}
                        >
                            <DropdownMenuTrigger className={`absolute top-0 right-0 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto ${openDropdown === getItemId(item) ? 'opacity-100 pointer-events-auto' : ''}`}>
                                <Button
                                    variant={'ghost'}
                                    size={'icon'}
                                    className={`h-8 rounded-md hover:bg-primary-950/70 ${openDropdown === getItemId(item) ? 'bg-primary-950/70' : ''}`}
                                >
                                    <Ellipsis />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="justify-between">
                                        Delete
                                        <Trash2 />
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
