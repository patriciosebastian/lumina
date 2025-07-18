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

        router.post('/chat/message', {
            content: cleanMessage,
            role: 'user',
            journal: false,
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