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
        visitNewOrLastRoute(updatedMode);
    };

    const visitNewOrLastRoute = (updatedMode) => {
        const resourceId = route().params.id;

        if (updatedMode) {
            route().current('chat.show')
                ? sessionStorage.setItem('lastChatId', resourceId)
                : sessionStorage.removeItem('lastChatId');

            const lastJournalId = sessionStorage.getItem('lastJournalId');

            lastJournalId
                ? router.visit(route('journal.show', { id: lastJournalId }))
                : router.visit(route('journal.index'));
        } else {
            route().current('journal.show')
                ? sessionStorage.setItem('lastJournalId', resourceId)
                : sessionStorage.removeItem('lastJournalId');

            const lastChatId = sessionStorage.getItem('lastChatId');

            lastChatId
                ? router.visit(route('chat.show', { id: lastChatId }))
                : router.visit(route('chat.index'));
        }
    };

  return (
    <AppLayout
        enabled={isJournalMode}
        onCheckedChange={handleCheckedChange}
        data={dataToShow}
    >
        <Head title="Chat with SALOS" />
        <div className="flex h-full flex-1 flex-col justify-center gap-4 rounded-xl p-1">
            {isJournalMode ?
                <MiracleJournal initialJournalEntries={data.messages} /> :
                <Chat initialMessages={data.messages} chatboxMessage={chatboxMessage} />
            }
        </div>
    </AppLayout>
  );
}
