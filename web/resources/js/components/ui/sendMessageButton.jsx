import { ArrowUpIcon } from 'lucide-react';
import { Button } from './button';

export default function SendMessageButton({ onSendMessage }) {
  return (
    <Button
        variant={'salosSecondary'}
        className="w-[4.5rem] h-full px-4 py-5 rounded-2xl border-none z-0 before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-purple-700 before:to-cyan-300 before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]"
        onClick={onSendMessage}
    >
        <ArrowUpIcon className="size-8" />
    </Button>
  );
}