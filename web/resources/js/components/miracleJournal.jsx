import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import MessageCard from './messageCard';
import { router } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function MiracleJournal({ initialJournalEntries = [] }) {
    const [journalEntry, setJournalEntry] = useState('');
    const [journalEntries, setJournalEntries] = useState(initialJournalEntries);
    const route = useRoute();
    const bottomSentinelRef = useRef(null);
    const journalId = route().params.id;

    const scrollToBottom = (behavior = 'auto') => {
        requestAnimationFrame(() => {
            bottomSentinelRef.current?.scrollIntoView({
                behavior,
                block: 'end',
            });
        });
    };

    useLayoutEffect(() => {
        if (initialJournalEntries.length > 0) {
            scrollToBottom('auto');
        }
    }, [initialJournalEntries.length]);

    useEffect(() => {
        if (journalId && journalEntries.length > 0) {
            scrollToBottom('auto');
        }
    }, [journalId, journalEntries.length]);

    const handleSendJournalEntry = () => {
        const cleanJournalEntry = journalEntry.trim();

        if (!cleanJournalEntry) {
            console.warn('Empty journal entry, not sending.');
            return;
        }

        setJournalEntries(prev => [...prev, { message: cleanJournalEntry, role: 'user' }]);
        setJournalEntry('');

        router.post(route('journal.store'), {
            content: cleanJournalEntry,
            role: 'user',
            journalId: route().params.id || null,
        }, {
            onFinish: () => {
                console.log('Finished sending message');
            },
            onSuccess: (response) => {
                router.visit(route('journal.show', { id: response.props.data.id }), {
                    replace: true,
                });
            },
            onError: (errors) => {
                console.error('Error sending message: ', errors);
            },
        });
    };

    const handleJournalEntryChange = (e) => {
        setJournalEntry(e.target.value);
    };

  return (
    <MessageCard
        currentMessage={journalEntry}
        messages={journalEntries}
        onSendMessage={handleSendJournalEntry}
        onMessageChange={handleJournalEntryChange}
        showCross={false}
        placeholder="What are you going through right now?"
        bottomSentinelRef={bottomSentinelRef}
    />
  );
}
