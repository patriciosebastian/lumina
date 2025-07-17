import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: [] }) {
    const page = usePage();
    const currentPath = window.location.pathname;
    const currentParams = new URLSearchParams(window.location.search);

    const getSidebarLabel = (): string => {
        if (currentPath === '/chat' && currentParams.get('journal') === 'true') {
            return 'Journals';
        }

        return 'Chats';
    }

    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{getSidebarLabel()}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton asChild isActive={item.url === page.url}>
                            <Link href={item.url} prefetch>
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
