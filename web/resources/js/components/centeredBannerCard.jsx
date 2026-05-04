import { Badge } from './ui/badge';
import LuminaCard from './ui/luminaCard';
import AIBubbles from '../../images/AI_Bubble.svg';

export default function CenteredBannerCard({
    className = '',
    badgeClasses = '',
    img = AIBubbles,
    imgWidth = 60,
    imgHeight = 60,
    imgClasses = '',
    imgAltText = 'Icon',
    titleClasses = '',
    title,
    contentClasses = '',
    children,
}) {
  return (
    <LuminaCard className={`max-lg:size-auto w-[60rem] h-[18.875rem] p-6 gap-4 max-w-[960px] rounded-[1.25rem] before:rounded-[1.25rem] lg:p-10 ${className}`}>
        <LuminaCard.Header className="gap-y-8">
            <Badge
                variant={'luminaPrimary'}
                className={`mx-auto w-[3.75rem] h-[3.75rem] max-h-none p-3.5 border rounded-[1.125rem] before:rounded-[1.125rem] flex justify-center items-center shadow-none lg:w-20 lg:h-20 lg:p-[1.125rem] ${badgeClasses}`}
            >
                <img
                    src={img}
                    width={imgWidth}
                    height={imgHeight}
                    className={`w-full object-cover object-center rounded-2xl min-w-8 ${imgClasses}`}
                    alt={imgAltText}
                />
            </Badge>
            <LuminaCard.Header.Title className={`text-center !text-[1.75rem] leading-[110%] !mb-0 ${titleClasses}`}>
                {title}
            </LuminaCard.Header.Title>
        </LuminaCard.Header>
        <LuminaCard.Content className={`text-sm text-center text-balance mx-auto leading-5 ${contentClasses}`}>
            {children}
        </LuminaCard.Content>
    </LuminaCard>
  );
}
