import { useState } from 'react';
import MessageCard from './messageCard';

export default function MiracleJournal() {
    const [journalEntry, setJournalEntry] = useState('');
    const [journalEntries, setJournalEntries] = useState([]);

    const handleSendJournalEntry = () => {
        if (journalEntry.trim()) {
          setJournalEntries(prev => [...prev, { text: journalEntry, role: 'user' }]);
          setJournalEntry('');
        }
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