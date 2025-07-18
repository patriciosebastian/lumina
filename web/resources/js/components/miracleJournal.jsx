import { useState } from 'react';
import MessageCard from './messageCard';
import { router } from '@inertiajs/react';

export default function MiracleJournal() {
    const [journalEntry, setJournalEntry] = useState('');
    const [journalEntries, setJournalEntries] = useState([]);

    const handleSendJournalEntry = () => {
        const cleanJournalEntry = journalEntry.trim();

        if (!cleanJournalEntry) {
            console.warn('Empty journal entry, not sending.');
            return;
        }

        setJournalEntries(prev => [...prev, { message: cleanJournalEntry, role: 'user' }]);
        setJournalEntry('');

        router.post('/chat/message', {
            content: cleanJournalEntry,
            role: 'user',
            journal: true,
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