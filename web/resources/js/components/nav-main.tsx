import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export function NavMain({ items = [] }: { items: [] }) {
    const route = useRoute();
    const isChatRoute = route().current('chat.*');

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
                    <SidebarMenuItem key={getItemId(item)}>
                        <SidebarMenuButton asChild isActive={route().current(getRouteName(), { id: getItemId(item) })}>
                            <Link
                                href={route(getRouteName(), getItemId(item))}
                                prefetch
                            >
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
