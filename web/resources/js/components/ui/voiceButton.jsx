import { Button } from './button';
import { MicIcon } from 'lucide-react';

export default function VoiceButton({ className = '', iconClasses = '', }) {
  return (
    <Button
        variant={'luminaSecondary'}
        className={`w-[4.5rem] h-full max-h-[4.5rem] px-4 py-5 rounded-2xl border-none z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box] ${className}`}
    >
        <MicIcon className={`size-8 ${iconClasses}`} />
    </Button>
  );
}