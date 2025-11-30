import React, { useState } from 'react';
import './Chatbot.css';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState<Message[]>([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <h3>🤖 AI Book Assistant</h3>
            <button className="chatbot-close" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="chatbot-content">
            <div className="development-message">
              The Chatbot Is Under Development. It'll Be Available Soon!
            </div>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
}