import Chat from '@/components/chat';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function MainChatApp({ data, chatboxMessage }) {
    return (
        <AppLayout
            data={data.chats || []}
        >
            <Head title="Chat with Lumina" />
            <div className="flex flex-1 flex-col min-h-0">
                <Chat initialMessages={data.messages} chatboxMessage={chatboxMessage} />
            </div>
        </AppLayout>
    );
}
