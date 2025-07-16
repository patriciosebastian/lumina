import SalosCard from './ui/salosCard';
import SALOSCross from '../../../public/SALOS_Cross.svg';
import SendMessageButton from './ui/sendMessageButton';
import VoiceButton from './ui/voiceButton';
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

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
    ...props
}) {
    const textareaRef = useRef(null);
    const isMobile = useIsMobile();

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
    <SalosCard className={`relative w-full h-[52.438rem] mx-auto rounded-2xl p-4 flex flex-col items-center gap-8 bg-[#00AFFF14] before:rounded-2xl before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] overflow-y-visible overflow-x-hidden lg:p-8 lg:w-[84rem] ${className}`}>
        <SalosCard.Content className="w-full h-[41.938rem] flex-1 overflow-y-auto overflow-x-hidden space-y-4">
            {/*  */}
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
                        className="relative w-full h-[4.5rem] rounded-2xl px-5 py-4 !text-lg font-medium text-primary-700 border-none placeholder:text-primary-400/70 selection:bg-primary-900 selection:text-primary-100 transition-all duration-200 lg:max-h-96 resize-none break-words focus:outline-none overflow-auto [scrollbar-width:thin] transparent-scrollbar"
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
                            className="w-full flex-grow !min-h-full max-h-43 rounded-t-2xl px-5 py-4 !text-lg font-medium text-primary-700 border-none placeholder:text-primary-400/70 selection:bg-primary-900 selection:text-primary-100 transition-all duration-200 resize-none break-words focus:outline-none overflow-auto [scrollbar-width:thin] transparent-scrollbar"
                            autoComplete="off"
                            rows={1}
                        />
                        <div className="w-full h-9 flex justify-end items-center gap-4 px-2.5 pb-2.5 rounded-2xl z-10">
                            <VoiceButton
                                className="!size-7.5 rounded-[.5rem] px-2 py-2.5 !before:size-7.5 before:rounded-[.5rem] z-10"
                                iconClasses="!size-4"
                            />
                            <SendMessageButton
                                onSendMessage={onSendMessage}
                                className="!size-7.5 rounded-[.5rem] px-2 py-2.5 !before:size-7.5 before:rounded-[.5rem] z-10"
                                iconClasses="!size-4"
                                disabled={!currentMessage.trim()}
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
                            disabled={!currentMessage.trim()}
                        />
                    )}
                </>
            )}
        </SalosCard.Footer>
    </SalosCard>
  );
}
