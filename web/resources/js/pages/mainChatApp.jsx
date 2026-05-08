import Chat from '@/components/chat';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function MainChatApp({ data, chatboxMessage }) {
    return (
        <AppLayout
            data={data.chats || []}
        >
            <Head title="Chat with Lumina" />
            <div className="flex h-full flex-1 flex-col justify-center gap-4 rounded-xl p-1">
                <Chat initialMessages={data.messages} chatboxMessage={chatboxMessage} />
            </div>
        </AppLayout>
    );
}
