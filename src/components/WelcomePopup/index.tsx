import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function WelcomePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a short delay every time
        setTimeout(() => {
            setIsVisible(true);
        }, 500);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div className={styles.backdrop} onClick={handleClose} />

            {/* Popup */}
            <div className={styles.popup}>
                <button className={styles.closeButton} onClick={handleClose}>
                    ×
                </button>

                <div className={styles.content}>
                    <div className={styles.icon}>🤖✨</div>
                    <h2 className={styles.title}>Exciting News!</h2>
                    <p className={styles.message}>
                        Chatbot is now available in the book.<br />
                        Ask anything from it!
                    </p>
                    <button className={styles.tryButton} onClick={handleClose}>
                        Got it! 🎉
                    </button>
                </div>
            </div>

            {/* Left Ribbons */}
            <div className={styles.ribbonsLeft}>
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`left-${i}`}
                        className={styles.ribbon}
                        style={{
                            left: `${Math.random() * 30}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]
                        }}
                    />
                ))}
            </div>

            {/* Right Ribbons */}
            <div className={styles.ribbonsRight}>
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`right-${i}`}
                        className={styles.ribbon}
                        style={{
                            right: `${Math.random() * 30}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]
                        }}
                    />
                ))}
            </div>
        </>
    );
}
