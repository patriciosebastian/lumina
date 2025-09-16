import Chat from '@/components/chat';
import MiracleJournal from '@/components/miracleJournal';
import AppLayout from '@/layouts/app-layout';
import { Head, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useRoute } from 'ziggy-js';

export default function MainApp({ initialMode, data, chatboxMessage }) {
    const [isJournalMode, setIsJournalMode] = useState(initialMode === 'journal');
    const [dataToShow, setDataToShow] = useState([]);
    const route = useRoute();

    useEffect(() => {
        updateDataToShow();
    }, [data, isJournalMode]);

    const updateDataToShow = () => {
        isJournalMode ?
            setDataToShow(data.journals || []) :
            setDataToShow(data.chats || []);
    }

    const handleCheckedChange = (updatedMode) => {
        setIsJournalMode(updatedMode);

        const routeName = updatedMode ? 'journal.index' : 'chat.index';
        router.visit(route(routeName));
    };

  return (
    <AppLayout
        enabled={isJournalMode}
        onCheckedChange={handleCheckedChange}
        data={dataToShow}
    >
        <Head title="Chat with SALOS" />
        <div className="flex h-svh flex-1 flex-col justify-center gap-4 rounded-xl p-1 md:h-full">
            {isJournalMode ?
                <MiracleJournal initialJournalEntries={data.messages} /> :
                <Chat initialMessages={data.messages} chatboxMessage={chatboxMessage} />
            }
        </div>
    </AppLayout>
  );
}
