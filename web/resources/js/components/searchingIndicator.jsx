import { SunRayIcon } from './home/HomeIcons';

export default function SearchingIndicator({ showLuminaIcon = true }) {
    return (
        <div className="flex items-center gap-3.5 mb-4.5">
            <SunRayIcon className={`${showLuminaIcon ? ' ' : 'hidden'}`} />
            <div className="lum-thinking-dots inline-flex items-center gap-1.5">
                <i /><i /><i />
            </div>
            <span className="font-serif italic text-[18px] text-ink tracking-[.005em]">
                Considering
            </span>
        </div>
    );
}