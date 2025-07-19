import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export function NavMain({ items = [] }: { items: [] }) {
    const page = usePage();
    const route = useRoute();
    const isChatRoute = route().current('chat.*');

    const getSidebarLabel = (): string => {
        return isChatRoute ? 'Chats' : 'Journals';
    }

    const getRouteName = (): string => {
        return isChatRoute ? 'chat.show' : 'journal.show';
    }

    const getItemId = (item: object): string | number => {
        return item.id ? item.id : item.session_id;
    }

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{getSidebarLabel()}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={getItemId(item)}>
                        <SidebarMenuButton asChild isActive={route(getRouteName(), getItemId(item)) === page.url}>
                            <Link
                                href={route(getRouteName(), getItemId(item))}
                                prefetch
                            >
                                {/* {item.icon && <item.icon />} */}
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
