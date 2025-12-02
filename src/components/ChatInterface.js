import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatInterface.module.css';

const ChatInterface = ({ initialMessages = [], onSendMessage }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null); // Ref to scroll to the bottom

  // Effect to scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = async () => {
    if (inputValue.trim() === '' || isLoading) {
      return;
    }

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (onSendMessage) {
        // Pass the actual text to the handler for API call
        const aiResponse = await onSendMessage(inputValue);
        
        // Ensure response is in expected format, provide defaults if missing
        const responseToShow = {
          text: aiResponse.response_text || 'Sorry, could not get a proper response.',
          explanation: aiResponse.explanation || 'No explanation available.',
          source: aiResponse.source || 'Unknown Source',
          sender: 'ai'
        };
        setMessages((prevMessages) => [...prevMessages, responseToShow]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error sending message. Please try again.', sender: 'error' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent default newline behavior
      handleSend();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
            <strong>{msg.sender === 'user' ? 'You:' : (msg.sender === 'error' ? 'Error:' : 'AI:')}</strong>
            <p>{msg.text}</p>
            {msg.explanation && <p className={styles.explanation}><em>{msg.explanation}</em></p>}
            {msg.source && <p className={styles.source}><em>Source: {msg.source}</em></p>}
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.ai}`}>
            <strong>AI:</strong>
            <p>Thinking...</p>
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Element to scroll to */} 
      </div>
      <div className={styles.inputContainer}>
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleSend} 
          placeholder="Ask me anything about the book..."
          rows={2}
          disabled={isLoading}
        />
        <button onClick={handleSend} disabled={isLoading || inputValue.trim() === ''}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;