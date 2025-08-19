import GroupedCircles from "../../../public/grouped-circles.svg";
import SalosCard from "./ui/salosCard";

export default function WideBannerCard({
    title,
    subtitle,
    className = '',
    children,
    hasImage = true,
    imageSource = GroupedCircles,
    imageWidth = 311,
    imageHeight = 311,
    imageAltText = 'feature image',
    imageClasses = ''
}) {
  return (
    <SalosCard className={`w-[21.438rem] max-w-[21.438rem] h-[39.938rem] lg:w-[60rem] lg:max-w-[60rem] lg:h-[25rem] block lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-10 ${className} ${hasImage ? '' : 'place-content-center'}`}>
        <SalosCard.Header className={`lg:h-[12.875rem] ${hasImage ? '' : 'text-center mx-auto'}`}>
            <SalosCard.Header.Title>
                {title}
            </SalosCard.Header.Title>
            <SalosCard.Header.WideBannerTextContent subtitle={subtitle}>
                {children}
            </SalosCard.Header.WideBannerTextContent>
        </SalosCard.Header>
        {hasImage && (
            <SalosCard.Content className="lg:w-80 lg:h-80">
                <div className="size-fit max-w-[19.438rem] border rounded-2xl border-[#51A5CB26] p-[1.213rem] justify-self-center place-self-center mt-10 max-lg:mx-auto lg:w-80 lg:max-w-80 lg:h-80 lg:p-5 lg:mt-0">
                    {console.log('image width', imageWidth, 'image height', imageHeight)}
                    <img
                        src={imageSource}
                        width={imageWidth}
                        height={imageHeight}
                        className={`object-cover object-center rounded-2xl lg:w-full ${imageClasses}`}
                        alt={imageAltText}
                    />
                </div>
            </SalosCard.Content>
        )}
    </SalosCard>
  );
}
