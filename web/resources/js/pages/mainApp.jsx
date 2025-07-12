import ChatInterface from '@/components/chat/ChatInterface';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

export default function MainApp() {
    const { initialMode } = usePage().props;
    const isJournalMode = initialMode === 'journal';

  return (
    <AppLayout enabled={isJournalMode}>
        <Head title="Chat with SALOS" />
        <div className="flex h-full flex-1 flex-col justify-center gap-4 rounded-xl p-4">
            <ChatInterface />
        </div>
    </AppLayout>
  );
}