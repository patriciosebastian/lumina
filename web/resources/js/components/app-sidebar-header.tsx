import { SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import Announcement from './ui/announcement';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppSidebarHeaderProps {
    breadcrumbs?: BreadcrumbItemType[];
}

export function AppSidebarHeader({ breadcrumbs = [], ...props }: AppSidebarHeaderProps) {
    const isMobile = useIsMobile();

    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 md:px-4">
            <div className="w-full flex justify-between items-center gap-2">
                <SidebarTrigger className="-ml-1 hover:bg-primary-950 hover:text-foreground cursor-pointer" />
                {!isMobile &&
                    <Announcement className="w-fit bg-transparent absolute left-1/2 -translate-x-1/2 text-primary-800">
                        Lumina is in Beta. Help us make it better. Report feedback or bugs to <a href="mailto:info@chatwithlumina.com" className="underline">info@chatwithlumina.com</a>
                    </Announcement>
                }
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
        </header>
    );
}
