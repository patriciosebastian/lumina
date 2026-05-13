import { THINKING_STEPS } from '@/data/static/chat';
import { CheckIcon, LuminaStarMark } from './chat/ChatIcons';
import SearchingIndicator from './searchingIndicator';

export default function SearchThinkingSteps() {
    return (
        <div className="mb-10">
            {/* meta */}
            <div className="flex items-center gap-[10px] mb-3 font-ui text-[11px] tracking-[.24em] uppercase text-ink-2">
                <span className="inline-flex w-[22px] h-[22px] items-center justify-center border-2 border-gold rounded-full text-gold flex-shrink-0">
                    <LuminaStarMark />
                </span>
                <span className="text-ink tracking-[.22em]">Lumina</span>
            </div>

            {/* dashed left border body */}
            <div className="border-l-2 border-dashed border-gold pl-[22px] py-1">
                <SearchingIndicator showLuminaIcon={false} />
                <ul className="flex flex-col border-t border-b-2 border-border/60">
                    {THINKING_STEPS.map(({ label, state: stepState }, i) => (
                        <li
                            key={i}
                            className={[
                                'flex items-center gap-[14px] py-[11px]',
                                'border-b border-border/60 last:border-b-0',
                                'font-book text-[14.5px] leading-[1.4]',
                                stepState === 'pending' ? 'text-ink-3 italic' : 'text-ink',
                            ].join(' ')}
                        >
                            <span
                                className={[
                                    'w-[18px] h-[18px] inline-flex items-center justify-center',
                                    'rounded-full flex-shrink-0 font-ui text-[11px] border',
                                    stepState === 'done'
                                        ? 'bg-gold text-bg border-gold'
                                        : stepState === 'active'
                                        ? 'border-gold text-gold'
                                        : 'border-border text-ink-3',
                                ].join(' ')}
                            >
                                {stepState === 'done' && <CheckIcon />}
                                {stepState === 'active' && (
                                    <span className="lum-thinking-spin" />
                                )}
                            </span>
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}