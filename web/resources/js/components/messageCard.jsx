import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ContentBubble from '@/components/ui/contentBubble';
import { useRoute } from 'ziggy-js';
import { Streamdown } from 'streamdown';
import { Plus, Globe, BookOpen } from 'lucide-react';

const LuminaStarMark = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path
            d="M5 1L6.12 3.62L9 3.84L6.94 5.68L7.62 8.5L5 7L2.38 8.5L3.06 5.68L1 3.84L3.88 3.62L5 1Z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
        />
    </svg>
);

const CheckIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1.5 4L3 5.5L6.5 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const THINKING_STEPS = [
    { label: 'Located relevant passages', state: 'done' },
    { label: 'Cross-referencing scripture', state: 'active' },
    { label: 'Consulting commentaries', state: 'pending' },
    { label: 'Drafting response', state: 'pending' },
];

const SUGGESTED_PROMPTS = [
    'What does Paul mean by "the peace that passes understanding"?',
    'Walk me slowly through the Sermon on the Mount.',
    'Why are there four gospels, and what do they each see?',
    "I'm sitting with a hard week. Where might I read?",
];
const ROMAN_NUMERALS = ['i', 'ii', 'iii', 'iv'];

export default function MessageCard({
    className = '',
    showSendButton = true,
    showVoiceButton = false,
    currentMessage = '',
    messages = [],
    onSendMessage,
    onMessageChange,
    placeholder = 'How can I help you?',
    isLoading = false,
    scrollContainerRef,
    bottomSentinelRef,
    onScroll,
    isAtBottom,
    isStreaming,
    ...props
}) {
    const textareaRef = useRef(null);
    const toolsRef = useRef(null);
    const isMobile = useIsMobile();
    const chatMessages = Object.values(messages);
    const route = useRoute();
    const [showTools, setShowTools] = useState(false);

    const chatRoute =
        route().current() === 'chat.index' || route().current() === 'chat.show';

    const todayLabel = new Date()
        .toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        .toUpperCase();

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = Math.min(textarea.scrollHeight, 280) + 'px';
        }
    }, [currentMessage]);

    useEffect(() => {
        if (!showTools) return;
        const handler = (e) => {
            if (toolsRef.current && !toolsRef.current.contains(e.target)) {
                setShowTools(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [showTools]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSendMessage?.();
        }
    };

    const handlePromptClick = (prompt) => {
        onMessageChange?.({ target: { value: prompt } });
    };

    return (
        <div className={`flex flex-1 flex-col min-h-0 bg-bg ${className}`}>

            {/* ── scrollable thread ── */}
            <div
                ref={scrollContainerRef}
                onScroll={onScroll}
                className="flex-1 min-h-0 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]"
            >
                {/* chat route: empty / new conversation state — fills container, no scroll */}
                {chatRoute && chatMessages.length === 0 && !isLoading ? (
                    <div className="h-full flex items-center justify-center px-14 py-6 max-md:px-9 max-sm:px-4">
                        <div className="text-center max-w-[560px] w-full mx-auto">
                            {/* botanical branch icon */}
                            <div className="w-[108px] h-[108px] mx-auto mb-6 text-gold" style={{ opacity: 0.85 }}>
                                <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 82 Q34 64 48 50 Q62 36 82 18" />
                                    <ellipse cx="28" cy="68" rx="9" ry="4" transform="rotate(-30 28 68)" />
                                    <ellipse cx="40" cy="56" rx="9" ry="4" transform="rotate(-40 40 56)" />
                                    <ellipse cx="52" cy="44" rx="9" ry="4" transform="rotate(-45 52 44)" />
                                    <ellipse cx="64" cy="32" rx="9" ry="4" transform="rotate(-50 64 32)" />
                                    <ellipse cx="76" cy="22" rx="8" ry="3.5" transform="rotate(-55 76 22)" />
                                    <circle cx="34" cy="76" r="2.2" />
                                    <circle cx="58" cy="50" r="2.2" />
                                    <path d="M28 68 L31 73" opacity=".5" />
                                    <path d="M52 44 L55 49" opacity=".5" />
                                </svg>
                            </div>

                            {/* eyebrow */}
                            <div className="inline-flex items-center gap-[14px] font-ui text-[11px] tracking-[.28em] uppercase text-ink-2 mb-6">
                                <span className="lum-rule" />
                                A new conversation
                                <span className="lum-rule" />
                            </div>

                            {/* title */}
                            <h1 className="font-serif font-light text-[56px] leading-[1.06] text-ink tracking-[-0.005em] mb-[22px] max-md:text-[44px] max-sm:text-[36px]">
                                <em className="italic text-gold font-normal">Begin</em>{' '}
                                where you are.
                            </h1>

                            {/* lede */}
                            <p className="font-book text-base leading-[1.78] text-ink-2 max-w-[38em] mx-auto mb-4 max-sm:text-[15px]">
                                Type a verse, a doubt, a half-formed thought. Lumina will sit with you and reply with care, in plain language, with the references kept open beside the text.
                            </p>

                            {/* suggested prompts */}
                            <div className="text-left border-t border-b border-border py-2">
                                <div className="font-ui text-[11px] tracking-[.26em] uppercase text-ink-2 px-2 py-[14px] pb-[10px] border-b border-border">
                                    A few places to begin
                                </div>
                                <ul className="flex flex-col">
                                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                                        <li
                                            key={i}
                                            className="flex items-baseline gap-[18px] px-2 py-4 border-b-2 border-border/60 last:border-b-0 font-book text-[15.5px] leading-[1.55] text-ink cursor-pointer hover:text-gold-deep transition-colors duration-250"
                                            onClick={() => handlePromptClick(prompt)}
                                        >
                                            <span className="font-serif italic text-[18px] text-gold min-w-[22px] flex-shrink-0">
                                                {ROMAN_NUMERALS[i]}.
                                            </span>
                                            {prompt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                <div className="max-w-[760px] mx-auto px-14 pt-10 pb-8 max-md:px-9 max-sm:px-4">
                    {/* chat route: thread head — shown once messages exist */}
                    {chatRoute && chatMessages.length > 0 && (
                        <div className="flex items-center justify-between mb-8 pb-[18px] border-b border-border gap-4">
                            <span className="font-serif italic text-[18px] text-gold tracking-[.02em]">
                                Lumina
                            </span>
                            <span className="font-ui text-[11px] tracking-[.24em] uppercase text-ink-2">
                                {todayLabel}
                            </span>
                        </div>
                    )}

                    {/* chat route: message list */}
                    {chatRoute &&
                        chatMessages.map((message, index) => (
                            <div
                                key={message.id || message.session_id || index}
                                className="mb-10 last:mb-2"
                            >
                                {/* meta row */}
                                <div className="flex items-center gap-[10px] mb-3 font-ui text-[11px] tracking-[.24em] uppercase text-ink-2">
                                    {message.role !== 'user' && (
                                        <span className="inline-flex w-[22px] h-[22px] items-center justify-center border-2 border-gold rounded-full text-gold flex-shrink-0">
                                            <LuminaStarMark />
                                        </span>
                                    )}
                                    <span className="text-ink tracking-[.22em]">
                                        {message.role === 'user' ? 'You' : 'Lumina'}
                                    </span>
                                    {message.created_at && (
                                        <span className="inline-flex items-center gap-2 text-ink-3">
                                            <span
                                                className="inline-block h-px bg-gold"
                                                style={{ width: 28, opacity: 0.55 }}
                                            />
                                            {new Date(message.created_at).toLocaleTimeString('en-US', {
                                                hour: 'numeric',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                    )}
                                    {/* streaming pulse indicator */}
                                    {message.streaming && (
                                        <span className="lum-streaming-pulse ml-1" />
                                    )}
                                </div>

                                {/* body */}
                                <ContentBubble
                                    className={
                                        message.role === 'user'
                                            ? 'bg-surface border border-border rounded-[5px] py-[18px] px-[22px] text-[15.5px] max-sm:py-[14px] max-sm:px-4'
                                            : `border-l-2 pl-[22px] py-1 ${message.streaming ? 'border-amber' : 'border-gold'}`
                                    }
                                >
                                    {message.role === 'user' ? (
                                        <p className="font-book text-[15.5px] leading-[1.78] text-ink">
                                            {message.content}
                                        </p>
                                    ) : (
                                        message.content && (
                                            <div className="lum-ai-body">
                                                <Streamdown
                                                    key={index}
                                                    parseIncompleteMarkdown={true}
                                                >
                                                    {message.content}
                                                </Streamdown>
                                                {message.streaming && (
                                                    <span className="lum-stream-cursor">|</span>
                                                )}
                                            </div>
                                        )
                                    )}
                                </ContentBubble>
                            </div>
                        ))}

                    {/* thinking / loading state */}
                    {isLoading && (
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
                                <div className="flex items-center gap-[14px] mb-[18px]">
                                    <div className="lum-thinking-dots inline-flex items-center gap-[6px]">
                                        <i /><i /><i />
                                    </div>
                                    <span className="font-serif italic text-[18px] text-ink tracking-[.005em]">
                                        Considering
                                    </span>
                                </div>
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
                    )}

                    <div ref={bottomSentinelRef} className="h-[1px] w-[1px] invisible" aria-hidden="true" />
                </div>
                )}
            </div>

            {/* ── composer ── */}
            <div
                className="shrink-0 relative z-[6]"
                style={{ background: 'linear-gradient(180deg, rgba(250,247,242,0) 0%, #FAF7F2 18%)' }}
            >
                <div className="max-w-[760px] mx-auto px-14 pt-3 pb-6 max-md:px-9 max-sm:px-4">
                    <div
                        className={[
                            'border border-border rounded-[5px] flex flex-col gap-[10px]',
                            'transition-[border-color] duration-[350ms]',
                            'focus-within:border-gold',
                            'p-[14px_16px_12px]',
                            isLoading ? 'bg-surface opacity-[.85]' : 'bg-white',
                        ].join(' ')}
                    >
                        {/* textarea */}
                        <textarea
                            id="message-card-input"
                            name="message-card-input"
                            ref={textareaRef}
                            placeholder={
                                isLoading
                                    ? 'Lumina is considering…'
                                    : chatMessages.length === 0
                                    ? 'Ask anything. A verse, a question, a half-formed thought.'
                                    : placeholder
                            }
                            value={currentMessage}
                            onChange={onMessageChange}
                            onKeyDown={handleKeyDown}
                            disabled={isLoading}
                            className="w-full border-0 outline-0 resize-none bg-transparent font-book text-base leading-[1.7] text-ink placeholder:italic placeholder:text-ink-3 min-h-8 max-h-[280px] overflow-y-auto [scrollbar-width:thin]"
                            autoComplete="off"
                            rows={1}
                        />

                        {/* toolbar row */}
                        <div className="flex items-center justify-between gap-4">
                            {/* plus / tools */}
                            <div className="relative" ref={toolsRef}>
                                <button
                                    type="button"
                                    aria-label="Open tools"
                                    className={[
                                        'w-[34px] h-[34px] inline-flex items-center justify-center',
                                        'border border-border rounded-full text-ink-2',
                                        'bg-transparent transition-colors',
                                        'hover:border-gold hover:text-gold hover:bg-[rgba(184,146,42,.08)]',
                                        showTools
                                            ? 'border-gold text-gold bg-[rgba(184,146,42,.08)]'
                                            : '',
                                    ].join(' ')}
                                    onClick={() => setShowTools((v) => !v)}
                                >
                                    <Plus size={16} />
                                </button>

                                {showTools && (
                                    <div className="absolute bottom-[calc(100%+10px)] left-0 min-w-[280px] z-[80] bg-white border border-border rounded-[4px] p-2 shadow-[0_0_0_1px_rgba(184,146,42,.18),0_14px_28px_-10px_rgba(44,36,22,.22),0_4px_10px_-6px_rgba(44,36,22,.18)] lum-popover-enter">
                                        <div className="font-ui text-[10.5px] tracking-[.26em] uppercase text-ink-2 px-[10px] py-2 pb-[10px] border-b border-border/60 mb-1">
                                            Tools
                                        </div>
                                        {[
                                            {
                                                icon: <Globe size={14} />,
                                                name: 'Web Search',
                                                desc: 'Search the web for current information',
                                            },
                                            {
                                                icon: <BookOpen size={14} />,
                                                name: 'Deep Research',
                                                desc: 'Thorough multi-step research on a topic',
                                            },
                                        ].map(({ icon, name, desc }) => (
                                            <button
                                                key={name}
                                                type="button"
                                                className="flex items-start gap-[10px] w-full px-3 py-[10px] rounded-[3px] text-left font-ui text-[13px] text-ink tracking-[.03em] hover:bg-surface transition-colors"
                                            >
                                                <span className="text-ink-2 mt-[3px] flex-shrink-0">
                                                    {icon}
                                                </span>
                                                <div className="flex flex-col gap-[2px]">
                                                    <span>{name}</span>
                                                    <span className="font-book italic text-[12px] text-ink-2 leading-[1.4]">
                                                        {desc}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* send */}
                            {showSendButton && (
                                <button
                                    type="button"
                                    className="lum-send"
                                    onClick={onSendMessage}
                                    disabled={!currentMessage.trim() || isLoading}
                                >
                                    <span>Send</span>
                                    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                                        <path d="M2.5 9 L15.5 9" /><path d="M11 4.5 L15.5 9 L11 13.5" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="mt-[10px] font-ui text-[11px] tracking-[.04em] text-ink-3 text-center italic">
                        Lumina cites scripture and tradition. Read carefully, and check the references for yourself.
                    </p>
                </div>
            </div>
        </div>
    );
}
