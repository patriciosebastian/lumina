import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import MessageCard from './messageCard';
import { router } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';
import { useStream } from '@laravel/stream-react';

export default function Chat({ initialMessages = [], chatboxMessage = null }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(Array.isArray(initialMessages) ? initialMessages : []);
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const scrollContainerRef = useRef(null);
    const bottomSentinelRef = useRef(null);
    const [isAtBottom, setIsAtBottom] = useState(true);
    const chatId = route().params.id;
    const aiMsgIdRef = useRef(null);
    const bufferRef = useRef('');
    const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    const { send } = useStream(
        route('chat.store'),
        {
            csrfToken: csrf,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            onData: (chunk) => {
                bufferRef.current += chunk;
                let idx;

                while ((idx = bufferRef.current.indexOf('\n')) !== -1) {
                    let line = bufferRef.current.slice(0, idx).trim();
                    bufferRef.current = bufferRef.current.slice(idx + 1);

                    if (!line) continue;

                    if (line === 'null' || line[0] === ':') {
                        continue;
                    }

                    const brace = line.indexOf('{');
                    if (brace > 0) {
                        line = line.slice(brace);
                    }

                    let evt;
                    try {
                        evt = JSON.parse(line);
                    } catch (error) {
                        console.error('Failed to parse event:', line, error);
                        continue;
                    }

                    switch (evt.type) {
                        case 'start': {
                            setLoading(false);
                            const id = `ai-${Date.now()}`;
                            aiMsgIdRef.current = id;
                            setMessages(prev => [
                                ...prev,
                                {
                                    id,
                                    role: 'assistant',
                                    content: '',
                                    created_at: new Date().toISOString(),
                                    streaming: true,
                                },
                            ]);
                            break;
                        }
                        case 'content': {
                            const delta = evt.content ?? '';
                            if (!aiMsgIdRef.current) {
                                break;
                            }
                            setMessages(prev => prev.map(msg =>
                                msg.id === aiMsgIdRef.current ?
                                    { ...msg, content: (msg.content || '') + delta } :
                                    msg
                            ));
                            break;
                        }
                        case 'complete': {
                            if (aiMsgIdRef.current) {
                                setMessages(prev => prev.map(msg =>
                                    msg.id === aiMsgIdRef.current ?
                                        { ...msg, streaming: false, content: (msg.content || '') } :
                                        msg
                                ));
                                aiMsgIdRef.current = null;
                            }
                            if (evt.chatId && !chatId) {
                                router.visit(route('chat.show', { id: evt.chatId }), {
                                    replace: true,
                                    preserveState: true,
                                    preserveScroll: true,
                                });
                            }
                            break;
                        }
                        case 'error': {
                            console.error('Error event received:', evt);
                            setMessages(prev => [
                                ...prev,
                                {
                                    id: `error-${Date.now()}`,
                                    role: 'assistant',
                                    content: evt.error || 'A streaming error occurred while processing your request. Please try again.',
                                    created_at: new Date().toISOString(),
                                    streaming: false,
                                },
                            ]);
                            break;
                        }
                    }
                }
            },
            onFinish: () => {
                setLoading(false);
            },
            onError: (error) => {
                setLoading(false);

                let errorData = null;

                if (error.response && error.response.status === 429) {
                    errorData = error.response.data;
                }

                else if (error.message && error.message.includes('Rate limit exceeded')) {
                    try {
                        errorData = JSON.parse(error.message);
                    } catch (e) {
                        console.error('Failed to parse error message:', e);
                    }
                }

                if (errorData && (errorData.error === 'Rate limit exceeded' || errorData.redirect)) {
                    const message = errorData.message || 'Please create an account or log in to continue your session.';
                    router.visit(route('register'), {
                        data: { message }
                    });
                    return;
                }
            }
        }
    );

    const isStreaming = useMemo(() =>
        messages.some(msg => msg.streaming),
        [messages]
    );

    const scrollToBottom = (behavior = 'auto') => {
        requestAnimationFrame(() => {
            bottomSentinelRef.current?.scrollIntoView({
                behavior,
                block: 'end',
            });
        });
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const threshold = 50;
        const { scrollTop, scrollHeight, clientHeight } = container;
        const nearBottom = scrollHeight - scrollTop - clientHeight < threshold;

        setIsAtBottom(nearBottom);
    };

    useLayoutEffect(() => {
        if (initialMessages.length > 0) {
            scrollToBottom('auto');
        }
    }, [initialMessages.length]);

    useEffect(() => {
        if (isAtBottom || isStreaming && isAtBottom) {
            scrollToBottom(isStreaming ? 'auto' : 'smooth');
        }
    }, [messages, isStreaming, isAtBottom]);

    useEffect(() => {
        if (chatId && messages.length > 0) {
            scrollToBottom('auto');
            setIsAtBottom(true);
        }
    }, [chatId, messages.length]);

    useEffect(() => {
        if (chatboxMessage && chatboxMessage.trim()) {
            setMessage(chatboxMessage.trim());
        }
    }, [chatboxMessage]);

    useEffect(() => {
        if (chatboxMessage && chatboxMessage.trim() && message === chatboxMessage.trim()) {
            handleSendMessage();
        }
    }, [message, chatboxMessage]);

    useEffect(() => {
        const draftMessage = chatId
            ? sessionStorage.getItem(`chatDraft-${chatId}`)
            : sessionStorage.getItem('chatDraft-new');

        if (draftMessage && !chatboxMessage) {
            setMessage(draftMessage);
        }
    }, []);

    const handleSendMessage = async () => {
        const cleanMessage = message.trim();

        if (!cleanMessage) {
            return;
        }

        const userMessage = {
            content: cleanMessage,
            role: 'user',
            id: Date.now() + '-user',
            created_at: new Date().toISOString()
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage('');
        setLoading(true);
        setIsAtBottom(true);
        chatId
            ? sessionStorage.removeItem(`chatDraft-${chatId}`)
            : sessionStorage.removeItem('chatDraft-new');

        bufferRef.current = '';
        aiMsgIdRef.current = null;

        send({
            content: cleanMessage,
            role: 'user',
            chatId: chatId ?? null,
            with_ai_response: true,
        });
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        handleChatDraft(e.target.value);
    };

    const handleChatDraft = (value) => {
        if (chatId) {
            value.trim()
                ? sessionStorage.setItem(`chatDraft-${chatId}`, value)
                : sessionStorage.removeItem(`chatDraft-${chatId}`);
        } else {
            value.trim()
                ? sessionStorage.setItem('chatDraft-new', value)
                : sessionStorage.removeItem('chatDraft-new');
        }
    };

    return (
        <MessageCard
            currentMessage={message}
            messages={messages}
            onSendMessage={handleSendMessage}
            onMessageChange={handleMessageChange}
            isLoading={loading}
            scrollContainerRef={scrollContainerRef}
            bottomSentinelRef={bottomSentinelRef}
            onScroll={handleScroll}
            isAtBottom={isAtBottom}
            isStreaming={isStreaming}
        />
    );
}
