import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    enabled?: boolean;
    onCheckedChange?: (updatedMode: boolean) => void;
    data: [];
}

export default ({ children, breadcrumbs, data = [], ...props }: AppLayoutProps) => (
    <AppLayoutTemplate
        breadcrumbs={breadcrumbs}
        data={data}
        {...props}
    >
        {children}
    </AppLayoutTemplate>
);
