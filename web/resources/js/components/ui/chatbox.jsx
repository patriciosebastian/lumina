import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import magicWandTransparent from "../../../../public/magic-wand-transparent.svg";

export default function Chatbox({ className = '', textareaClasses = '', buttonClasses = '' }) {
  return (
    <div className={`mx-auto border-0 rounded-[8px] has-focus-visible:shadow-[0_0_50px_12px] has-focus-visible:shadow-[#0072FF99] transition-shadow ${className}`}>
        <Textarea
            className={`w-[313px] h-[124px] lg:w-[640px] lg:h-[200px] p-6 rounded-t-[8px] rounded-b-none border-b-0 border-primary-700 text-primary-400 !placeholder-primary-400/50 text-lg font-normal !bg-[#00AFFF14] focus-visible:border-primary-700 focus-visible:ring-0 resize-none caret-primary-900 focus-visible:!bg-[#072938] transition-colors peer ${textareaClasses}`}
            placeholder="How can I help guide you today?"
        />
        <Button
            variant={'salosInputBox'}
            size={'salosInputBox'}
            className={`${buttonClasses}`}
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
