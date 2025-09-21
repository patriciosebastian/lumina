import { useState } from "react";
import { router } from "@inertiajs/react";
import { useRoute } from "ziggy-js";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import magicWandTransparent from "../../../images/magic-wand-transparent.svg";

export default function Chatbox({ className = '', textareaClasses = '', buttonClasses = '' }) {
  const [message, setMessage] = useState('');
  const route = useRoute();

  const handleSendMessage = () => {
    const cleanMessage = message.trim();

    if (!cleanMessage) {
      return;
    }

    router.visit(route('chat.index'), {
      method: 'get',
      data: { message: cleanMessage },
      preserveScroll: false,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`mx-auto border-0 rounded-[8px] has-focus-visible:shadow-[0_0_50px_12px] has-focus-visible:shadow-[#0072FF99] transition-shadow z-70 ${className}`}>
        <Textarea
            className={`w-[313px] h-[124px] p-6 rounded-t-[8px] rounded-b-none border-b-0 border-primary-700 text-primary-200 !placeholder-primary-400/50 text-lg font-normal !bg-[#00AFFF14] focus-visible:border-primary-700 focus-visible:ring-0 resize-none caret-primary-900 focus-visible:!bg-[#072938] transition-colors peer lg:w-[640px] lg:h-[200px] ${textareaClasses}`}
            placeholder="How can I help guide you today?"
            name="chatbox"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
        />
        <Button
            variant={'salosInputBox'}
            size={'salosInputBox'}
            className={`hover:bg-background/60 hover:text-primary-300 ${buttonClasses}`}
            onClick={handleSendMessage}
        >
            <img
                src={magicWandTransparent}
                width={24}
                height={24}
                alt="Static SVG graphic of a magic wand"
                className="w-6 h-6"
            />
            Ask SALOS
        </Button>
    </div>
  );
}
