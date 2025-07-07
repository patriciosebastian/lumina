import JournalCard from '@/components/journalCard';
import { MicIcon, PenLineIcon } from 'lucide-react';
import SALOSChat from '../../../../public/SALOS_Chat.svg';
import SALOSCross from '../../../../public/SALOS_Cross.svg';
import SALOSUser from '../../../../public/user.svg'
import { Badge } from '@/components/ui/badge';

export default function ChatInterface() {
  return (
    <div className="w-full">
      <JournalCard className="p-4 md:p-6 w-full">
        <div className="relative h-[calc(85vh-100px)] flex flex-col justify-between gap-4 overflow-hidden">
          <div
            className="absolute top-1/2 left-0 right-0 h-[50%] bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none z-0 transform -translate-y-1/2"
            style={{ backgroundImage: `url(${SALOSCross})` }}
          />

          <div className="flex-1 overflow-y-auto pb-[108px] space-y-4 flex flex-col">
            <SalosChatBubble text="Welcome, child of God. How can I guide you today?" />
            <UserChatBubble text="What steps can I take to further my faith?" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 pb-2 bg-[#031e2b]">
            <div className="flex flex-row items-center gap-4">
              <div className="relative p-4 flex items-center w-full h-[72px] rounded-[16px] bg-linear-to-b from-[#54C0F100] to-[#54C0F133] before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-[16px] before:bg-gradient-to-l before:from-[#45E5FF] before:to-[#7F42C1] before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] text-primary-700">
                <PenLineIcon />
                <input
                  type="text"
                  placeholder="Type message or speak..."
                  className="ml-2 bg-transparent text-primary-700 placeholder:text-primary-700 focus:outline-none w-full"
                />
              </div>
              <div className="relative flex items-center justify-center h-[72px] w-[72px] rounded-[16px] bg-linear-to-b from-[#54C0F100] to-[#54C0F133] before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-[16px] before:bg-gradient-to-l before:from-[#45E5FF] before:to-[#7F42C1] before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] text-primary-700">
                <MicIcon className="h-[35px] text-[#45E5FF]" />
              </div>
            </div>
          </div>
        </div>
      </JournalCard>
    </div>
  );
}

const SalosChatBubble = ({ text }) => (
  <div className="flex justify-start">
    <div className="border-primary-950 border flex items-center gap-2 bg-[#00AFFF14] py-[24px] px-[20px] rounded-[16px] w-[70%] md:w-[60%] xl:w-[40%]">
      <Badge
        variant={'salosPrimary'}
        className={`h-10 w-10 max-h-none p-2 border rounded-[68px] before:rounded-[68px] flex justify-center items-center shadow-none`}
      >
        <img
          src={SALOSChat}
          alt="salos"
        />
      </Badge>
      <div className="text-primary-200">{text}</div>
    </div>
  </div>
);

const UserChatBubble = ({ text }) => (
  <div className="flex justify-end">
    <div className="border-primary-950 border flex items-center gap-2 bg-[#00AFFF14] py-[24px] px-[20px] rounded-[16px] w-[70%] md:w-[60%] xl:w-[40%]">
      <img src={SALOSUser} className="h-10 w-10 rounded-[68px]" alt="user" />
      <div className="text-primary-200">{text}</div>
    </div>
  </div>
);
