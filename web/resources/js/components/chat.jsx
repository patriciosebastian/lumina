import { useState } from 'react';
import MessageCard from './messageCard';
import { router } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const route = useRoute();

    const handleSendMessage = () => {
        const cleanMessage = message.trim();

        if (!cleanMessage) {
            console.warn('Empty message, not sending.');
            return;
        }

        setMessages(prev => [...prev, { message: cleanMessage, role: 'user' }]);
        setMessage('');

        router.post(route('chat.store'), {
            content: cleanMessage,
            role: 'user',
            chatId: route().params.id || null,
        }, {
            onFinish: () => {
                console.log('Finished sending message');
            },
            onSuccess: (response) => {
                // TODO: figure out if I want to do this every time or only when the chat is created
                router.visit(route('chat.show', { id: response.props.data.id }), {
                    replace: true,
                });
            },
            onError: (errors) => {
                console.error('Error sending message: ', errors);
            },
        });
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

  return (
    <MessageCard
        currentMessage={message}
        messages={messages}
        onSendMessage={handleSendMessage}
        onMessageChange={handleMessageChange}
    />
  );
}