import { Input } from './ui/input';
import SalosCard from './ui/salosCard';
import SALOSCross from '../../../public/SALOS_Cross.svg';
import SendMessageButton from './ui/sendMessageButton';
import VoiceButton from './ui/voiceButton';

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
    const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onSendMessage?.();
      }
    };

  return (
    <SalosCard className={`relative min-w-[84rem] h-[52.438rem] rounded-2xl p-8 flex flex-col items-center gap-8 bg-[#00AFFF14] before:rounded-2xl before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] overflow-y-visible overflow-x-hidden ${className}`}>
        <SalosCard.Content className="w-full h-[41.938rem] flex-1 overflow-y-auto overflow-x-hidden space-y-4">
            {/*  */}
        </SalosCard.Content>
        {showCross && (
            <div
              className="absolute size-[17.688rem] top-1/2 left-1/2 right-0 bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none z-0 transform -translate-y-1/2 -translate-x-1/2"
              style={{ backgroundImage: `url(${SALOSCross})` }}
            />
        )}
        <SalosCard.Footer className="w-full h-[4.5rem] flex items-center gap-4">
            <div className="relative size-full z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]">
                <Input
                    id="message-card-input"
                    name="message-card-input"
                    type="text"
                    placeholder={placeholder}
                    value={currentMessage}
                    onChange={onMessageChange}
                    onKeyDown={handleKeyDown}
                    className="relative h-full rounded-2xl px-5 py-4 !text-lg font-medium text-primary-700 border-none placeholder:text-primary-400/70 selection:bg-primary-900 selection:text-primary-100 bg-linear-to-b from-[#54C0F100] to-[#54C0F133]"
                    autoComplete="off"
                />
            </div>
            {showSendButton && (
                <SendMessageButton onSendMessage={onSendMessage} />
            )}
            {showVoiceButton && (
                <VoiceButton />
            )}
        </SalosCard.Footer>
    </SalosCard>
  );
}