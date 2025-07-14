import { useState } from 'react';
import MessageCard from './messageCard';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (message.trim()) {
          setMessages(prev => [...prev, { text: message, role: 'user' }]);
          setMessage('');
        }
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