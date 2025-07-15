import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

interface AppSidebarLayout {
    breadcrumbs?: BreadcrumbItem[];
    enabled: boolean;
    onCheckedChange: (updatedMode: boolean) => void;
    data: [];
}

export default function AppSidebarLayout({ children, breadcrumbs = [], data = [], ...props }: PropsWithChildren<AppSidebarLayout>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar data={data} {...props} />
            <AppContent variant="sidebar">
                <AppSidebarHeader breadcrumbs={breadcrumbs} {...props} />
                {children}
            </AppContent>
        </AppShell>
    );
}
