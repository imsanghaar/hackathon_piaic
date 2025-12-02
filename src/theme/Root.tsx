import React from 'react';
import ChatbaseWidget from '../components/ChatbaseWidget';
import TextSelectionPopup from '../components/TextSelectionPopup';
import WelcomePopup from '../components/WelcomePopup';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
            {children}
            <ChatbaseWidget />
            <TextSelectionPopup />
            <WelcomePopup />
        </>
    );
}
