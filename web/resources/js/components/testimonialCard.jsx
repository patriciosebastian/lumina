import SalosCard from './ui/salosCard';

export default function TestimonialCard({
    className = '',
    text,
    authorImg = null,
    authorImgWidth = 56,
    authorImgHeight = 56,
    authorImgClasses = '',
    authorImgAltText = 'Author Image',
    authorName = null,
    authorTitle = null,
}) {
  return (
    <SalosCard className={`w-[19.563rem] h-[18.5rem] flex flex-col justify-center p-6 gap-6 lg:w-[17.5rem] ${className}`}>
        <SalosCard.Content>
            {text}
        </SalosCard.Content>
        <SalosCard.Footer className="w-60 flex justify-start items-center gap-4">
            {authorImg && (
                <img
                    src={authorImg}
                    width={authorImgWidth}
                    height={authorImgHeight}
                    className={`object-cover object-center rounded-full ${authorImgClasses}`}
                    alt={authorImgAltText}
                    loading="lazy"
                />
            )}
            <div>
                <p className="text-xl text-primary-300">{authorName}</p>
                {authorTitle && (
                    <p className="text-sm font-normal text-primary-500">{authorTitle}</p>
                )}
            </div>
        </SalosCard.Footer>
    </SalosCard>
  );
}
