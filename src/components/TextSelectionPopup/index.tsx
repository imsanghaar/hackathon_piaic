import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

declare global {
    interface Window {
        chatbase: any;
    }
}

export default function TextSelectionPopup() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [selectedText, setSelectedText] = useState('');

    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            const text = selection?.toString().trim();

            if (text && text.length > 0) {
                setSelectedText(text);
                const range = selection?.getRangeAt(0);
                const rect = range?.getBoundingClientRect();

                if (rect) {
                    setPosition({
                        top: rect.top + window.scrollY - 50,
                        left: rect.left + window.scrollX + rect.width / 2,
                    });
                    setVisible(true);
                }
            } else {
                setVisible(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(`.${styles.popup}`)) {
                setVisible(false);
            }
        };

        document.addEventListener('mouseup', handleSelection);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mouseup', handleSelection);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleAskAI = () => {
        if (!selectedText) return;

        try {
            // Open the chatbase widget first
            if (window.chatbase) {
                window.chatbase('open');
            }

            // Wait for the iframe to be ready
            setTimeout(() => {
                // Find the chatbase iframe
                const iframe = document.querySelector('iframe[src*="chatbase.co"]') as HTMLIFrameElement;

                if (iframe && iframe.contentWindow) {
                    // Try to send message via postMessage
                    iframe.contentWindow.postMessage({
                        type: 'CHATBASE_SET_INPUT',
                        message: selectedText
                    }, '*');

                    // Also try with different event types
                    setTimeout(() => {
                        iframe.contentWindow?.postMessage({
                            type: 'SET_MESSAGE',
                            text: selectedText
                        }, '*');

                        iframe.contentWindow?.postMessage({
                            action: 'sendMessage',
                            message: selectedText
                        }, '*');
                    }, 500);
                }

                // Fallback: Copy to clipboard
                navigator.clipboard.writeText(selectedText).catch(() => {
                    console.log('Clipboard access denied');
                });
            }, 500);
        } catch (error) {
            console.error('Error:', error);
        }

        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className={styles.popup}
            style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
            }}
        >
            <button className={styles.askButton} onClick={handleAskAI}>
                <span className={styles.icon}>🤖</span>
                Ask AI
            </button>
        </div>
    );
}
