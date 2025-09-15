import { Badge } from './ui/badge';
import SalosCard from './ui/salosCard';
import RobotIcon from '../../images/Robot.svg';

export default function CenteredIconCard({
    className = '',
    badgeClasses = '',
    img = RobotIcon,
    imgWidth = 60,
    imgHeight = 60,
    imgClasses = '',
    imgAltText = 'Icon',
    titleClasses = '',
    title,
    contentClasses = '',
    children
}) {
  return (
    <SalosCard className={`p-6 gap-3 rounded-[1.25rem] before:rounded-[1.25rem] lg:gap-4 lg:p-10 ${className}`}>
        <SalosCard.Header className="p-0 gap-y-6 lg:gap-y-8">
            <Badge
                variant={'salosPrimary'}
                className={`mx-auto w-[3.75rem] h-[3.75rem] max-h-none p-3.5 border rounded-[1.125rem] before:rounded-[1.125rem] flex justify-center items-center shadow-none lg:w-20 lg:h-20 lg:p-[1.125rem] ${badgeClasses}`}
            >
                {/* TODO: should I do a useMedia hook to get the screen size and set the width and height of the image accordingly? also, can that be server side? */}
                <img
                    src={img}
                    width={imgWidth}
                    height={imgHeight}
                    className={`w-full object-cover object-center rounded-2xl min-w-8 ${imgClasses}`}
                    alt={imgAltText}
                />
            </Badge>
            <SalosCard.Header.Title className={`!text-2xl text-center mx-auto !font-semibold leading-[100%] w-full !mb-0 lg:!text-[1.75rem] lg:w-[18.438rem] lg:leading-[110%] ${titleClasses}`}>
                {title}
            </SalosCard.Header.Title>
        </SalosCard.Header>
        <SalosCard.Content className={`text-sm text-center mx-auto leading-5 w-[18.438rem] lg:w-[24.5rem] lg:text-balance ${contentClasses}`}>
            {children}
        </SalosCard.Content>
    </SalosCard>
  );
}
