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

    useEffect(() => {
        const draftJournalEntry = journalId
            ? sessionStorage.getItem(`journalDraft-${journalId}`)
            : sessionStorage.getItem('journalDraft-new');

        if (draftJournalEntry) {
            setJournalEntry(draftJournalEntry);
        }
    }, []);

    const handleSendJournalEntry = () => {
        const cleanJournalEntry = journalEntry.trim();

        if (!cleanJournalEntry) {
            return;
        }

        setJournalEntries(prev => [...prev, {
            content: cleanJournalEntry,
            role: 'user',
            created_at: new Date().toISOString(),
            id: Date.now(),
        }]);

        setJournalEntry('');
        journalId
            ? sessionStorage.removeItem(`journalDraft-${journalId}`)
            : sessionStorage.removeItem('journalDraft-new');

        router.post(route('journal.store'), {
            content: cleanJournalEntry,
            role: 'user',
            journalId: parseInt(route().params.id) || null,
        }, {
            onFinish: () => {},
            onSuccess: (response) => {},
            onError: (errors) => {},
        });
    };

    const handleJournalEntryChange = (e) => {
        setJournalEntry(e.target.value);
        handleJournalEntryDraft(e.target.value);
    };

    const handleJournalEntryDraft = (value) => {
        if (journalId) {
            value.trim()
                ? sessionStorage.setItem(`journalDraft-${journalId}`, value)
                : sessionStorage.removeItem(`journalDraft-${journalId}`);
        } else {
            value.trim()
                ? sessionStorage.setItem('journalDraft-new', value)
                : sessionStorage.removeItem('journalDraft-new');
        }
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
