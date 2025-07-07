import { MicIcon, PenLineIcon } from 'lucide-react';
import JournalCard from '@/components/journalCard';
import journalEntries from '@/data/fake/journalEntries/journalEntries';

export default function JournalInterface({ selectedJournal }) {
    const userJournalEntries = journalEntries;
    const inactiveCss = "border-[#0A5678]";

    return (
        <div className="">
            <JournalCard className={`p-4 md:p-6 w-full relative`}>
                <div className="flex flex-col h-[calc(85vh-100px)] justify-between gap-4 overflow-hidden relative">
                    <div className="flex-1 overflow-y-auto pb-[108px]">
                        <div
                            className={`font-normal bg-[#00AFFF14] text-lg min-h-[47px] text-primary-200 p-4 rounded-[8px] border-[1px] ${inactiveCss}`}
                        >
                            {userJournalEntries[selectedJournal].content}
                        </div>
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
