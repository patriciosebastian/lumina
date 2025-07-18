import { useState } from 'react';
import MessageCard from './messageCard';
import { router } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function MiracleJournal() {
    const [journalEntry, setJournalEntry] = useState('');
    const [journalEntries, setJournalEntries] = useState([]);
    const route = useRoute();

    const handleSendJournalEntry = () => {
        const cleanJournalEntry = journalEntry.trim();

        if (!cleanJournalEntry) {
            console.warn('Empty journal entry, not sending.');
            return;
        }

        setJournalEntries(prev => [...prev, { message: cleanJournalEntry, role: 'user' }]);
        setJournalEntry('');

        router.post(route('chat.store'), {
            content: cleanJournalEntry,
            role: 'user',
            journal: true,
            journalId: route().params.journalId || null,
        }, {
            onFinish: () => {
                console.log('Finished sending message');
            },
            onSuccess: (response) => {
                console.log('Message sent successfully. Response: ', response);
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
    />
  );
}