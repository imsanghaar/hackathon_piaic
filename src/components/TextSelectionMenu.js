import React, { useState, useEffect, useRef } from 'react';
import styles from './TextSelectionMenu.module.css';

const TextSelectionMenu = ({ onAction }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const menuRef = useRef(null);
  const responseDisplayRef = useRef(null);

  const handleMouseUp = (event) => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text.length > 0) {
      setSelectedText(text);
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      // Position the menu slightly below the selected text
      setMenuPosition({
        x: rect.left + window.scrollX + rect.width / 2, // Center horizontally relative to selection
        y: rect.bottom + window.scrollY + 10, // 10px below selection
      });
      setMenuVisible(true);
      setAiResponse(null); // Clear previous response when a new selection is made
    } else {
      setMenuVisible(false);
      setAiResponse(null);
    }
  };

  const handleMouseDown = (event) => {
    // Hide menu if click is outside the menu itself
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const handleAIAction = async (action) => {
    setIsLoading(true);
    setAiResponse(null); // Clear previous response before new fetch
    setMenuVisible(false);

    try {
      const response = await fetch('/query_snippet', { // Assuming backend is served from same origin or proxied
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          // Pass selected text and a dummy source context for now
          body: JSON.stringify({ text_snippet: selectedText, source_context: 'Current Page Context' }), 
      });

      if (!response.ok) {
        // Handle non-OK responses, e.g., 400, 500
        const errorData = await response.json();
        throw new Error(error.message || errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setAiResponse(data);

    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiResponse({
        response_text: "Sorry, I couldn't get a response.",
        explanation: "An error occurred while fetching data from the AI.",
        source: "Error"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {menuVisible && (
        <div
          ref={menuRef}
          className={styles.selectionMenu}
          style={{ left: menuPosition.x, top: menuPosition.y }}
        >
          <button onClick={() => handleAIAction('Explain with AI')} disabled={isLoading || !selectedText}>
            {isLoading ? 'Thinking...' : 'Explain with AI'}
          </button>
          <button onClick={() => handleAIAction('Summarize')} disabled={isLoading || !selectedText}>
            {isLoading ? 'Thinking...' : 'Summarize'}
          </button>
        </div>
      )}

      {/* Display the AI response in a dedicated area */}
      {aiResponse && (
        <div ref={responseDisplayRef} className={styles.aiResponseDisplay} style={{ marginTop: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: 'var(--ifm-background-color)' }}>
          <h4>AI Response</h4>
          <p><strong>Answer:</strong> {aiResponse.response_text}</p>
          <p><strong>Explanation:</strong> {aiResponse.explanation}</p>
          <p><strong>Source:</strong> {aiResponse.source}</p>
        </div>
      )}
    </>
  );
};

export default TextSelectionMenu;