import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectionPos, setSelectionPos] = useState<{ x: number, y: number } | null>(null);
    const [selectedText, setSelectedText] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            if (selection && selection.toString().trim().length > 0) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                setSelectedText(selection.toString());
                setSelectionPos({
                    x: rect.left + window.scrollX,
                    y: rect.top + window.scrollY - 40
                });
            } else {
                setSelectedText(null);
                setSelectionPos(null);
            }
        };

        document.addEventListener('mouseup', handleSelection);
        return () => document.removeEventListener('mouseup', handleSelection);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (text: string, selection?: string) => {
        if (!text.trim()) return;

        const newMessages = [...messages, { role: 'user', content: text } as Message];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: text,
                    selected_text: selection || null,
                    history: newMessages
                }),
            });

            if (!response.body) throw new Error('No response body');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantMessage = '';

            setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                assistantMessage += chunk;

                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1].content = assistantMessage;
                    return updated;
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAskAboutSelection = () => {
        setIsOpen(true);
        setSelectionPos(null);
        if (selectedText) {
            sendMessage("Explain this selection", selectedText);
            window.getSelection()?.removeAllRanges();
        }
    };

    return (
        <>
            {selectionPos && !isOpen && (
                <button
                    className={styles.selectionPopup}
                    style={{ left: selectionPos.x, top: selectionPos.y }}
                    onClick={handleAskAboutSelection}
                >
                    Ask AI
                </button>
            )}

            <button className={styles.chatButton} onClick={() => {
                console.log("Chat button clicked. Current state:", isOpen);
                setIsOpen(!isOpen);
            }}>
                {isOpen ? '✕' : '💬'}
            </button>

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <span>Book Assistant</span>
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    <div className={styles.messages}>
                        {messages.length === 0 && (
                            <div className={styles.welcomeMessage}>
                                👋 Hi! I can help you understand this book. Ask me anything!
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.botMessage}`}>
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && <div className={`${styles.message} ${styles.botMessage}`}>Thinking...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            className={styles.input}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage(input)}
                            placeholder="Ask a question..."
                            disabled={isLoading}
                        />
                        <button
                            className={styles.sendButton}
                            onClick={() => sendMessage(input)}
                            disabled={isLoading}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
