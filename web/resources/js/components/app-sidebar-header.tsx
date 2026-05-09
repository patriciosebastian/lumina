import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppSidebarHeaderProps {
    breadcrumbs?: BreadcrumbItemType[];
}

export function AppSidebarHeader({ breadcrumbs = [], ...props }: AppSidebarHeaderProps) {
    const isMobile = useIsMobile();
    const title = breadcrumbs.length > 0 ? breadcrumbs[breadcrumbs.length - 1].title : '';

    return (
        <header className="flex h-[52px] shrink-0 items-center gap-2 px-4 border-b border-border bg-bg transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[52px]">
            <div className="w-full flex justify-between items-center gap-3">
                <div className="flex items-center gap-3 min-w-0">
                    <SidebarTrigger className="-ml-0.5 w-[30px] h-[30px] flex-shrink-0 hover:bg-[rgba(184,146,42,.08)] hover:text-ink text-ink-2 rounded-[4px] transition-colors cursor-pointer" />
                    {title && (
                        <span className="font-serif italic text-[18px] text-ink leading-[1.2] tracking-[.005em] truncate">
                            {title}
                        </span>
                    )}
                </div>
                {!isMobile && (
                    <span className="font-ui text-[11px] text-ink-3 tracking-[.04em] italic flex-shrink-0">
                        Beta ·{' '}
                        <a
                            href="mailto:info@chatwithlumina.com"
                            className="underline underline-offset-2 hover:text-ink-2 transition-colors"
                        >
                            feedback
                        </a>
                    </span>
                )}
            </div>
        </header>
    );
}
