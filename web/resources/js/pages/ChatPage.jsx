import ChatInterface from '@/components/chat/ChatInterface';
import ChatLayout from '@/components/chat/ChatLayout';
import JournalInterface from '@/components/chat/JournalInterface';
import { useState } from 'react';


export default function ChatPage({ initialMode }) {
  const [isJournalMode, setIsJournalMode] = useState(initialMode === 'journal');
  const [selectedJournal, setSelectedJournal] = useState(0);

  const handleCheckedChange = (updatedMode) => {
    setIsJournalMode(updatedMode);
    const url = updatedMode ? '/chat?journal=true' : '/chat';
    window.history.pushState(null, '', url);
  };

  return (
    <ChatLayout
      isJournalMode={isJournalMode}
      onCheckedChange={handleCheckedChange}
      showSidebar={true}
      setSelectedJournal={setSelectedJournal}
      selectedJournal={selectedJournal}
    >
      {isJournalMode ? <JournalInterface selectedJournal={selectedJournal} /> : <ChatInterface />}
    </ChatLayout>
  );
}
