import SalosCard from './ui/salosCard';
import SALOSCross from '../../images/SALOS_Cross.svg';
import SALOSChat from '../../images/SALOS_Chat.svg';
import SendMessageButton from './ui/sendMessageButton';
import VoiceButton from './ui/voiceButton';
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ContentBubble from '@/components/ui/contentBubble';
import { useRoute } from 'ziggy-js';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import FormatMarkdown from './formatMarkdown';

export default function MessageCard({
    className = '',
    showCross = true,
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
    const isMobile = useIsMobile();
    const chatMessages = Object.values(messages);
    const route = useRoute();

    const chatRoute = route().current() === 'chat.index' || route().current() === 'chat.show';

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = (textarea.scrollHeight) + 'px';
        }
    }, [currentMessage]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          onSendMessage?.();
        }
    };

  return (
    <SalosCard className={`relative w-full h-[calc(100vh-4.5rem)] mx-auto rounded-2xl flex flex-col items-center gap-2 bg-[#00AFFF14] before:rounded-2xl before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] overflow-y-visible overflow-x-hidden lg:p-8 lg:w-[90%] lg:max-w-[84rem] xl:max-h-[52.438rem] ${className}`}>
        <SalosCard.Content
            ref={scrollContainerRef}
            onScroll={onScroll}
            className="w-full h-[41.938rem] px-3 flex-1 overflow-y-auto overflow-x-hidden space-y-4 transparent-scrollbar"
        >
            {chatRoute && chatMessages.length > 0 && chatMessages.map((message, index) => (
                <ContentBubble
                    key={message.id || message.session_id || index}
                    className={`${message.role === 'user' ? 'ml-auto !w-fit max-w-[70%] md:max-w-[60%] lg:max-w-[34.375rem]' : 'max-md:w-full max-md:border-none max-md:bg-transparent max-md:mx-auto lg:mr-auto lg:!w-[35rem]'}`}
                >
                    {message.role === 'user' ? (
                        <p>
                            {message.content}
                        </p>

                    ) : (
                        message.content && <FormatMarkdown content={message.content} />
                    )}
                </ContentBubble>
            ))}
            {!chatRoute && chatMessages.length > 0 && chatMessages.map((message, index) => (
                <div
                    key={message.id || message.session_id || index}
                    className={`${message.role === 'user' ? 'ml-auto' : 'mr-auto'} text-foreground mx-auto w-full max-md:px-3.5 border-none bg-transparent md:w-3/4 lg:!w-[50%]`}
                >
                    <em className="text-neutral-400 block mb-4">{message.created_at ? new Date(message.created_at).toLocaleDateString() : ''}</em>
                    <p>{message.content}</p>
                    {index < chatMessages.length - 1 &&
                        <Separator className="my-10 w-full bg-muted-foreground/50" />
                    }
                </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="flex items-center gap-2">
                        <Badge
                            variant={'salosPrimary'}
                            className={`h-10 w-10 max-h-none p-2 border rounded-[68px] before:rounded-[68px] flex justify-center items-center shadow-none animate-pulse`}
                        >
                            <img
                                src={SALOSChat}
                                alt="salos"
                            />
                        </Badge>
                        <div className="text-primary-200 flex items-center gap-2">
                            <div className="animate-pulse">Searching His Word...</div>
                        </div>
                    </div>
                </div>
            )}
            <div ref={bottomSentinelRef} className="h-[1px] w-[1px] invisible" aria-hidden="true" />
        </SalosCard.Content>
        {showCross && (
            <div
              className="absolute size-[17.688rem] top-1/2 left-1/2 right-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none z-0 transform -translate-y-1/2 -translate-x-1/2"
              style={{ backgroundImage: `url(${SALOSCross})` }}
            />
        )}
        <SalosCard.Footer className="w-full max-h-52 flex items-end gap-4 lg:max-h-96">
            <div className="relative size-full bg-linear-to-b from-[#54C0F100] to-[#54C0F133] rounded-2xl z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]">
                {!isMobile && (
                    <textarea
                        id="message-card-input"
                        name="message-card-input"
                        ref={textareaRef}
                        placeholder={placeholder}
                        value={currentMessage}
                        onChange={onMessageChange}
                        onKeyDown={handleKeyDown}
                        className="relative w-full h-[4.5rem] rounded-2xl px-5 py-4 !text-lg font-medium text-foreground/90 border-none placeholder:text-foreground/60 selection:bg-primary-900 selection:text-primary-100 transition-all duration-200 lg:max-h-96 resize-none break-words focus:outline-none overflow-auto [scrollbar-width:thin] transparent-scrollbar"
                        autoComplete="off"
                        rows={1}
                    />
                )}
                {isMobile && (
                    <div className="w-full flex flex-col rounded-2xl max-h-52">
                        <textarea
                            id="message-card-input"
                            name="message-card-input"
                            ref={textareaRef}
                            placeholder={placeholder}
                            value={currentMessage}
                            onChange={onMessageChange}
                            onKeyDown={handleKeyDown}
                            className="w-full flex-grow !min-h-full max-h-43 rounded-t-2xl px-5 py-4 !text-lg font-medium text-foreground/90 border-none placeholder:text-foreground/60 selection:bg-primary-900 selection:text-primary-100 transition-all duration-200 resize-none break-words focus:outline-none overflow-auto [scrollbar-width:thin] transparent-scrollbar"
                            autoComplete="off"
                            rows={2}
                        />
                        <div className="w-full h-9 flex justify-end items-center gap-4 px-2.5 pb-2.5 rounded-2xl z-10">
                            {showVoiceButton && (
                                <VoiceButton
                                    className="!size-7.5 rounded-[.5rem] px-2 py-2.5 !before:size-7.5 before:rounded-[.5rem] z-10"
                                    iconClasses="!size-4"
                                />
                            )}
                            <SendMessageButton
                                onSendMessage={onSendMessage}
                                className="!size-7.5 rounded-[.5rem] px-2 py-2.5 !before:size-7.5 before:rounded-[.5rem] z-10"
                                iconClasses="!size-4"
                                disabled={!currentMessage.trim() || isLoading}
                            />
                        </div>
                    </div>
                )}
            </div>
            {!isMobile && (
                <>
                    {showVoiceButton && (
                        <VoiceButton />
                    )}
                    {showSendButton && (
                        <SendMessageButton
                            onSendMessage={onSendMessage}
                            disabled={!currentMessage.trim() || isLoading}
                        />
                    )}
                </>
            )}
        </SalosCard.Footer>
    </SalosCard>
  );
}
