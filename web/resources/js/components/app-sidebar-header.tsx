import { SidebarTrigger } from '@/components/ui/sidebar';
import { Breadcrumbs } from '@/components/breadcrumbs';
import SalosSwitch from './ui/salosSwitch';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { useRoute } from 'ziggy-js';
import Announcement from './ui/announcement';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppSidebarHeaderProps {
    breadcrumbs?: BreadcrumbItemType[];
    enabled?: boolean;
    onCheckedChange?: (updatedMode: boolean) => void;
}

export function AppSidebarHeader({ breadcrumbs = [], enabled, onCheckedChange, ...props }: AppSidebarHeaderProps) {
    const route = useRoute();
    const currentRoute = route().current();
    const isHidden = ! currentRoute?.includes('chat.') && ! currentRoute?.includes('journal.');
    const isMobile = useIsMobile();

    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 md:px-4">
            <div className="w-full flex justify-between items-center gap-2">
                <SidebarTrigger className="-ml-1 hover:bg-primary-950 hover:text-foreground cursor-pointer" />
                {!isMobile &&
                    <Announcement className="w-fit bg-transparent absolute left-1/2 -translate-x-1/2 text-primary-800">
                        SALOS is in Beta. Help us make it better. Report feedback or bugs to <a href="mailto:info@salosai.com" className="underline">info@salosai.com</a>
                    </Announcement>
                }
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div>
                    <SalosSwitch checked={enabled} onCheckedChange={onCheckedChange} hidden={isHidden} />
                </div>
            </div>
        </header>
    );
}
