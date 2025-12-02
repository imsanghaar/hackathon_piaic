import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextSelectionMenu from '../../src/components/TextSelectionMenu'; // Adjust path as necessary

// Mock the fetch API for testing
const mockFetch = jest.fn();
global.fetch = mockFetch;

// Mock the CSS module
jest.mock('../src/components/TextSelectionMenu.module.css', () => ({
  selectionMenu: 'mock-selection-menu',
  aiResponseDisplay: 'mock-ai-response-display',
}));

describe('TextSelectionMenu', () => {
  const mockOnAction = jest.fn();

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    // Clear selection and hide menu if it was visible
    window.getSelection().removeAllRanges();
    document.body.click(); // Simulate a click outside to hide any lingering menus
  });

  test('renders null when menu is not visible', () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);
    expect(screen.queryByRole('button', { name: /Explain with AI|Summarize/i })).not.toBeInTheDocument();
  });

  test('shows menu when text is selected and mouse is released', async () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);

    // Simulate text selection
    const textNode = document.body;
    textNode.textContent = 'This is some selectable text.'; // Set content for selection
    document.body.appendChild(textNode); // Append to body for getBoundingClientRect

    // Simulate selection
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(textNode);
    selection.addRange(range);

    // Simulate mouseup event
    fireEvent.mouseUp(document.body);

    // Wait for menu to be visible
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Explain with AI/i })).toBeInTheDocument();
    });

    // Cleanup
    document.body.removeChild(textNode);
  });

  test('hides menu when clicking outside', async () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);

    // Simulate text selection to make menu visible
    const textNode = document.body;
    textNode.textContent = 'Selectable text';
    document.body.appendChild(textNode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(textNode);
    selection.addRange(range);
    fireEvent.mouseUp(document.body);

    // Wait for menu to be visible
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Explain with AI/i })).toBeInTheDocument();
    });

    // Simulate a click outside the menu to hide it
    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByRole('button', { name: /Explain with AI/i })).not.toBeInTheDocument();
    });

    // Cleanup
    document.body.removeChild(textNode);
  });

  test('calls onAction prop when an action button is clicked', async () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);

    // Simulate text selection and menu visibility
    const textNode = document.body;
    textNode.textContent = 'Test text';
    document.body.appendChild(textNode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(textNode);
    selection.addRange(range);
    fireEvent.mouseUp(document.body);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Explain with AI/i })).toBeInTheDocument();
    });

    // Click the "Explain with AI" button
    const explainButton = screen.getByRole('button', { name: /Explain with AI/i });
    fireEvent.click(explainButton);

    // Verify that onAction was called with the correct arguments
    await waitFor(() => {
      expect(mockOnAction).toHaveBeenCalledWith('Explain with AI', 'Test text');
    });

    // Cleanup
    document.body.removeChild(textNode);
  });

  test('displays loading state while fetching AI response', async () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);

    // Simulate text selection and menu visibility
    const textNode = document.body;
    textNode.textContent = 'Text for loading test';
    document.body.appendChild(textNode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(textNode);
    selection.addRange(range);
    fireEvent.mouseUp(document.body);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Explain with AI/i })).toBeInTheDocument();
    });

    // Mock fetch to simulate a delay, but don't resolve the promise immediately
    mockFetch.mockImplementationOnce(() => new Promise(resolve => setTimeout(() => resolve({ ok: true, json: async () => ({ response_text: 'Mock response', explanation: 'Mock explanation', source: 'Mock Source' }) }), 1000)));

    // Click the "Explain with AI" button
    const explainButton = screen.getByRole('button', { name: /Explain with AI/i });
    fireEvent.click(explainButton);

    // Check if the button text changes to 'Thinking...'
    await waitFor(() => {
      expect(explainButton).toHaveTextContent('Thinking...');
    });

    // Cleanup
    document.body.removeChild(textNode);
  });

  test('displays AI response after fetch is successful', async () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);

    // Simulate text selection and menu visibility
    const textNode = document.body;
    textNode.textContent = 'Text for response display';
    document.body.appendChild(textNode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(textNode);
    selection.addRange(range);
    fireEvent.mouseUp(document.body);

    // Mock fetch to return a successful response
    mockFetch.mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: async () => ({ 
        response_text: 'This is the AI answer.',
        explanation: 'Detailed explanation here.',
        source: 'Chapter 5, Section 2'
      })
    }));

    // Click the "Explain with AI" button
    const explainButton = screen.getByRole('button', { name: /Explain with AI/i });
    fireEvent.click(explainButton);

    // Wait for the AI response to be displayed
    await waitFor(() => {
      expect(screen.getByText(/This is the AI answer./i)).toBeInTheDocument();
      expect(screen.getByText(/Detailed explanation here./i)).toBeInTheDocument();
      expect(screen.getByText(/Chapter 5, Section 2/i)).toBeInTheDocument();
    });

    // Cleanup
    document.body.removeChild(textNode);
  });

  test('displays error message if fetch fails', async () => {
    render(<TextSelectionMenu onAction={mockOnAction} />);

    // Simulate text selection and menu visibility
    const textNode = document.body;
    textNode.textContent = 'Text for error test';
    document.body.appendChild(textNode);
    const selection = window.getSelection();
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(textNode);
    selection.addRange(range);
    fireEvent.mouseUp(document.body);

    // Mock fetch to simulate a network error
    mockFetch.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

    // Click the "Explain with AI" button
    const explainButton = screen.getByRole('button', { name: /Explain with AI/i });
    fireEvent.click(explainButton);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Sorry, I couldn't get a response./i)).toBeInTheDocument();
      expect(screen.getByText(/An error occurred while fetching data from the AI./i)).toBeInTheDocument();
    });

    // Cleanup
    document.body.removeChild(textNode);
  });
