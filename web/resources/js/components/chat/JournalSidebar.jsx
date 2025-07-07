import journalEntries from '@/data/fake/journalEntries/journalEntries';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';
import JournalCard from '../journalCard';
import { MenuIcon } from 'lucide-react';

export default function JournalSidebar({ setSelectedJournal, selectedJournal }) {
  const isMobile = useIsMobile();
  const [showList, setShowList] = useState(!isMobile);
  const userJournalEntries = journalEntries;

  useEffect(() => {
    setShowList(!isMobile);
  }, [isMobile]);

  const activeCss = "before:content-[''] before:absolute before:z-[-1] before:inset-0 before:p-[1px] before:rounded-[8px] before:bg-gradient-to-l before:from-[#45E5FF] before:to-[#7F42C1] before:[mask:linear-gradient(var(--color-primary-500)_0_0)_exclude,_linear-gradient(#000_0_0)_content-box]";
  const inactiveCss = "border-[#0A5678]";

  return (
    <>
      {isMobile && (
        <div className="flex justify-start px-4 mt-4 md:hidden">
          <MenuIcon
            className="text-primary-700 cursor-pointer"
            size={28}
            onClick={() => setShowList(prev => !prev)}
          />
        </div>
      )}
      <div className="overflow-y-auto">
        {(showList || !isMobile) && (
          <JournalCard className="p-4 md:p-6 w-full">
            <div className={`${isMobile ? 'h-fit' : 'h-[calc(85vh-100px)]'} flex flex-col gap-4 overflow-y-auto`}>
              {userJournalEntries.map((journal, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedJournal(index);
                    if (isMobile) setShowList(false);
                  }}
                  className={`bg-linear-to-b from-[#54C0F100] to-[#54C0F133] text-primary-200 min-h-[47px] px-4 rounded-[8px] flex justify-between items-center border-[1px] relative z-0 cursor-pointer ${selectedJournal === index ? activeCss : inactiveCss
                    }`}
                >
                  <div className={`${selectedJournal !== index ? 'font-normal' : 'font-semibold'} text-lg`}>
                    {journal.title}
                  </div>
                  <div className="font-normal text-xs opacity-60">{journal.date}</div>
                </div>
              ))}
            </div>
          </JournalCard>
        )}
      </div>
    </>
  );
}
