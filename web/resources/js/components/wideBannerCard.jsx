import GroupedCircles from "../../images/grouped-circles.svg";
import LuminaCard from "./ui/luminaCard";

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
    <LuminaCard className={`w-[21.438rem] max-w-[21.438rem] h-[39.938rem] lg:w-[60rem] lg:max-w-[60rem] lg:h-[25rem] block lg:flex lg:flex-row lg:justify-between lg:items-center lg:p-10 ${className} ${hasImage ? '' : 'place-content-center'}`}>
        <LuminaCard.Header className={`lg:h-[12.875rem] ${hasImage ? '' : 'text-center mx-auto'}`}>
            <LuminaCard.Header.Title>
                {title}
            </LuminaCard.Header.Title>
            <LuminaCard.Header.WideBannerTextContent subtitle={subtitle}>
                {children}
            </LuminaCard.Header.WideBannerTextContent>
        </LuminaCard.Header>
        {hasImage && (
            <LuminaCard.Content className="lg:w-80 lg:h-80">
                <div className="size-fit max-w-[19.438rem] border rounded-2xl border-[#51A5CB26] p-[1.213rem] justify-self-center place-self-center mt-10 max-lg:mx-auto lg:w-80 lg:max-w-80 lg:h-80 lg:p-5 lg:mt-0">
                    <img
                        src={imageSource}
                        width={imageWidth}
                        height={imageHeight}
                        className={`object-cover object-center rounded-2xl lg:w-full ${imageClasses}`}
                        alt={imageAltText}
                    />
                </div>
            </LuminaCard.Content>
        )}
    </LuminaCard>
  );
}
