import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SalosSwitch({ checked, onCheckedChange, unCheckedText = "Chat with SALOS", checkedText = "Miracle Journal" }) {
  return (
    <div className="relative flex items-center gap-2.5 rounded-[4.25rem] px-4 py-3 border bg-linear-to-b from-[#54C0F100] to-[#54C0F133] z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-[4.25rem] before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]">
        <Label
            htmlFor="salos-switch"
            className="w-[6.8062rem] text-sm font-normal text-[#95DCFB] leading-5.5"
        >
            {checked ? checkedText : unCheckedText}
        </Label>
        <Switch
            id="salos-switch"
            checked={checked}
            onCheckedChange={onCheckedChange}
        />
    </div>
  );
}