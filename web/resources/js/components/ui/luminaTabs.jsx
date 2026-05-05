import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function LuminaTabs({ defaultValue, tabs, className, tabsListStyles, children, ...props }) {
    const tabLabels = tabs.split(",").map((t) => t.trim());

    return (
        <Tabs defaultValue={defaultValue} className={cn("flex flex-col", className)} {...props}>
            <TabsList className={cn("mx-auto", tabsListStyles)}>
                {tabLabels.map((label) => (
                    <TabsTrigger key={label} value={label}>
                        {label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {children}
        </Tabs>
    );
}
