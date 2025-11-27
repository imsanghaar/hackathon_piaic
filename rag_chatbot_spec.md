# Specification: Integrated RAG Chatbot for Docusaurus Book

## 1. Project Overview

This document outlines the specifications for developing a Retrieval-Augmented Generation (RAG) chatbot and embedding it within a Docusaurus-based online book. The chatbot will serve as an interactive guide, helping users understand the book's content by answering their questions. It will leverage the book's text as its primary knowledge source and will be built using the OpenAI Agents/ChatKit SDKs, with a FastAPI backend and a Qdrant Cloud vector database.

## 2. Target Audience

This specification is intended for software developers, AI engineers, and technical project managers involved in the development and deployment of the RAG chatbot.

## 3. Core Features

The chatbot must provide the following functionalities:

*   **Conversational Q&A:** Users can ask questions in natural language and receive answers based on the book's content.
*   **Contextual Understanding:** The chatbot should be able to understand the context of the user's questions and provide relevant answers.
*   **Selected-Text Q&A:** Users can select a specific passage of text within the book and ask questions pertaining only to that selection. This will require the frontend to pass the selected text to the backend.
*   **Embedded UI:** The chat interface will be a React component embedded within the Docusaurus site, providing a seamless user experience.
*   **Streaming Responses:** To improve user experience, the chatbot should stream responses back to the user.

## 4. Technical Stack

*   **Frontend:**
    *   **Framework:** Docusaurus (React.js)
    *   **Chat Interface:** Custom React component
*   **Backend:**
    *   **Framework:** FastAPI
    *   **LLM Orchestration:** OpenAI Agents/ChatKit SDKs
*   **Vector Database:**
    *   **Service:** Qdrant Cloud (Free Tier)
*   **Deployment:**
    *   **Frontend:** GitHub Pages (via Docusaurus deployment process)
    *   **Backend:** A suitable cloud service for hosting FastAPI applications (e.g., Vercel, Render, or a small VM).

## 5. Architecture

The system will consist of three main components:

1.  **Docusaurus Frontend:** A React-based chat component will be embedded in the book's pages. It will handle user input and display the chatbot's responses.
2.  **FastAPI Backend:** This service will expose an API for the frontend to call. It will process user queries, orchestrate the RAG pipeline, and return the results.
3.  **Qdrant Cloud:** This will store the vector embeddings of the book's content.

### High-Level Diagram

```
[User on Docusaurus Site] <--> [React Chat Component] <--> [FastAPI Backend]
                                                            |
                                                            v
[User Query] -> [FastAPI] -> [OpenAI API (for embeddings)] -> [Qdrant Cloud (for retrieval)] -> [OpenAI API (for generation)] -> [FastAPI] -> [User]
```

### Data Flow

#### Whole-Book Q&A

1.  **Ingestion (Offline):**
    *   The book's content (Markdown files) is parsed and split into chunks.
    *   Each chunk is converted into a vector embedding using an OpenAI embedding model.
    *   The embeddings and their corresponding text chunks are stored in a Qdrant collection.
2.  **Query (Online):**
    *   The user enters a question into the chat interface.
    *   The frontend sends the question to the FastAPI backend.
    *   The backend converts the question into a vector embedding.
    *   The backend queries the Qdrant collection to find the most relevant text chunks (the "context").
    *   The backend sends the user's question and the retrieved context to an OpenAI chat model via the Agents/ChatKit SDK.
    *   The model generates an answer, which is streamed back to the frontend and displayed to the user.

#### Selected-Text Q&A

1.  **Query (Online):**
    *   The user selects a passage of text in the book and asks a question.
    *   The frontend sends both the selected text and the question to the FastAPI backend.
    *   The backend treats the selected text as the *only* context.
    *   The backend sends the user's question and the selected text to an OpenAI chat model.
    *   The model generates an answer, which is streamed back to the frontend.

## 6. Implementation Details

### Data Ingestion (Backend Script)

*   A Python script will be created to handle the data ingestion process.
*   This script will:
    *   Connect to the Qdrant Cloud instance.
    *   Create a Qdrant collection with the appropriate vector parameters.
    *   Scan the Docusaurus project for Markdown files.
    *   Parse and chunk the content of each file.
    *   Use the OpenAI API to generate embeddings for each chunk.
    *   Upload the embeddings and a payload (containing the raw text) to the Qdrant collection.

### FastAPI Backend

*   The backend will be a FastAPI application with at least one main endpoint (e.g., `/chat`).
*   This endpoint will accept a POST request with a JSON body containing:
    *   `query`: The user's question (string).
    *   `selected_text`: (Optional) The text selected by the user (string).
    *   `history`: (Optional) The chat history.
*   The endpoint will implement the logic described in the "Data Flow" section.
*   It will use the `StreamingResponse` class from FastAPI to stream the response back to the client.
*   CORS (Cross-Origin Resource Sharing) must be enabled to allow requests from the Docusaurus site.

### Frontend (React Component)

*   A new React component will be created for the chat interface.
*   This component will be "swizzled" into the Docusaurus theme to appear on all pages.
*   The component will manage its own state, including the chat history and the user's input.
*   It will make API calls to the FastAPI backend.
*   It will handle the streaming response and update the UI in real-time.
*   It will detect when a user has selected text and provide a way to ask a question about it.

## 7. Deployment and Operations

*   **Backend:** The FastAPI application will be containerized using Docker and deployed to a cloud hosting service. The URL of the deployed backend will be configured in the Docusaurus frontend.
*   **Frontend:** The Docusaurus site will be built and deployed to GitHub Pages using the standard `npm run deploy` command (or similar).
*   **Qdrant:** The Qdrant Cloud instance will be provisioned and the connection details will be provided to the backend as environment variables.
*   **OpenAI API Key:** An OpenAI API key will be required and must be configured as an environment variable for the backend.

## 8. Milestones

1.  **Milestone 1: Backend Setup:**
    *   Set up the FastAPI server.
    *   Implement the data ingestion script.
    *   Populate the Qdrant Cloud instance with the book's content.
2.  **Milestone 2: Core Chat Logic:**
    *   Implement the whole-book Q&A logic in the backend.
    *   Integrate the OpenAI Agents/ChatKit SDKs.
    *   Test the `/chat` endpoint using a tool like `curl` or Postman.
3.  **Milestone 3: Frontend Integration:**
    *   Develop the React chat component.
    *   Integrate the component into the Docusaurus site.
    *   Connect the frontend to the backend and ensure communication is working.
4.  **Milestone 4: Advanced Features & Deployment:**
    *   Implement the selected-text Q&A feature.
    *   Deploy the backend to a cloud service.
    *   Deploy the Docusaurus site to GitHub Pages.
    *   Conduct end-to-end testing.
