import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link, router } from '@inertiajs/react';
import { Ellipsis, Trash2 } from 'lucide-react';
import { useRoute } from 'ziggy-js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
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

    const handleDelete = (itemId: number) => {
        const routeName = isChatRoute ? 'chat.destroy' : 'journal.destroy';
        const routeNameIndexEndpoint = isChatRoute ? 'chat.index' : 'journal.index';

        router.post(route(routeName, { id: itemId }), {}, {
            onSuccess: () => {
                router.visit(route(routeNameIndexEndpoint), {
                    replace: true,
                });
            },
            onError: (errors) => {
                console.error('Error deleting message: ', errors);
            },
        });
    }

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{getSidebarLabel()}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem
                        key={getItemId(item)}
                        className="group/item relative"
                    >
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
                            <DropdownMenuTrigger className={`absolute top-0 right-0 w-8 h-8 rounded-md hover:bg-primary-950/70 lg:opacity-0 lg:pointer-events-none lg:group-hover/item:opacity-100 lg:group-hover/item:pointer-events-auto ${openDropdown === getItemId(item) ? 'bg-primary-950/70 lg:opacity-100 lg:pointer-events-auto' : ''}`}>
                                <Ellipsis className="justify-self-center self-center align-middle mx-auto size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="bg-background"
                            >
                                <DropdownMenuGroup>
                                    <DropdownMenuItem
                                        className="justify-between hover:!bg-destructive-foreground/10"
                                        onClick={() => handleDelete(getItemId(item))}
                                    >
                                        Delete
                                        <Trash2 className="text-destructive-foreground" />
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
