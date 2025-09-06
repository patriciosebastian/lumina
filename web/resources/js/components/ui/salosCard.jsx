import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

function SalosCard({ className, children }) {
  return (
    <Card className={`bg-transparent border rounded-[20px] relative z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-[20px] before:bg-gradient-to-b before:from-primary-700/60 before:to-primary-700/0 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] ${className}`}>
       {children}
    </Card>
  );
}

SalosCard.Header = function SalosCardHeader({ className, children }) {
    return <CardHeader className={className}>{children}</CardHeader>;
}

SalosCard.Header.Title = function SalosCardTitle({ className, children }) {
    return <CardTitle className={`text-[1.75rem] font-semibold leading-[110%] text-primary-300 lg:mb-3 lg:text-[2.5rem] lg:font-bold ${className}`}>{children}</CardTitle>;
}

SalosCard.Header.CardDescription = function SalosCardDescription({ className, children }) {
    return <CardDescription className={`text-lg font-normal text-primary-300 leading-[128%] -tracking-[2%] ${className}`}>{children}</CardDescription>;
}

SalosCard.Header.WideBannerTextContent = function SalosCardHeaderWideBannerTextContent({ subtitle, children }) {
    return (
        <div className="space-y-4 lg:w-[28.125rem] lg:max-w-[450px]">
            {subtitle && <div className="text-lg font-normal leading-[128%] tracking-tight text-primary-300">{subtitle}</div>}
            <p className="text-sm font-normal !leading-5 text-primary-400">{children}</p>
        </div>
    );
}

SalosCard.Content = function SalosCardContent({ className, children }) {
    return <CardContent className={`text-primary-400 lg:text-lg ${className}`}>{children}</CardContent>;
}

SalosCard.Footer = function SalosCardFooter({ className, children }) {
    return <CardFooter className={`text-primary-300 ${className}`}>{children}</CardFooter>;
}

export default SalosCard;
