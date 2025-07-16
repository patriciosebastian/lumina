import { useState } from 'react';
import MessageCard from './messageCard';
import { router } from '@inertiajs/react';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        const cleanMessage = message.trim();

        if (!cleanMessage) {
            console.warn('Empty message, not sending.');
            return;
        }

        setMessages(prev => [...prev, { message: cleanMessage, role: 'user' }]);
        setMessage('');

        router.visit('/chat/message', {
            method: 'post',
            data: {
                message: cleanMessage
            },
            onFinish: () => {
                console.log('Finished sending message');
            },
            onSuccess: () => {
                console.log('Message sent successfully');
            },
            onError: (error) => {
                console.error('Error sending message: ', error);
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