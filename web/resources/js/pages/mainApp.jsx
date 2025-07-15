import Chat from '@/components/chat';
import MiracleJournal from '@/components/miracleJournal';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MainApp() {
    const { initialMode } = usePage().props;
    const [isJournalMode, setIsJournalMode] = useState(initialMode === 'journal');

    const handleCheckedChange = (updatedMode) => {
      setIsJournalMode(updatedMode);

      const url = updatedMode ? '/chat?journal=true' : '/chat';
      window.history.pushState(null, '', url);
    };

  return (
    <AppLayout
        enabled={isJournalMode}
        onCheckedChange={handleCheckedChange}
    >
        <Head title="Chat with SALOS" />
        <div className="flex h-full flex-1 flex-col justify-center gap-4 rounded-xl p-1">
            {isJournalMode ?
                <MiracleJournal /> :
                <Chat />
            }
        </div>
    </AppLayout>
  );
}