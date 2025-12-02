# Quick Start: RAG Chatbot for Book Integration

**Feature**: RAG Chatbot for Book Integration
**Branch**: `001-rag-chatbot-book-integration`
**Date**: 2025-12-01
**Plan**: specs/001-rag-chatbot-book-integration/plan.md

## Introduction

This guide provides the essential steps to set up and run the RAG Chatbot project, which allows users to query a book's content and receive answers with explanations and sources.

## Prerequisites

*   **Python**: Version 3.10+ installed.
*   **Node.js**: LTS version installed.
*   **Git**: For version control.
*   **OpenAI API Key**: For accessing OpenAI's language models.
*   **QDRANT Cloud Account**: Free tier details for vector storage.
*   **Neon Postgres Account**: Free tier details for database.
*   **Docusaurus Project**: Existing Docusaurus setup where the chatbot will be embedded.

## Setup Steps

### Backend Setup (FastAPI)

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Create and activate a virtual environment**:
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
    ```

3.  **Install backend dependencies**:
    ```bash
    pip install -r backend/requirements.txt
    # Or if using pyproject.toml directly:
    # pip install poetry
    # poetry install
    ```
    *Note: Ensure psycopg2-binary and other dependencies install correctly. If issues arise, consult the project's README or relevant documentation for environment-specific setup.* 

4.  **Configure environment variables**:
    *   Create a `.env` file in the `backend/` directory.
    *   Add your API keys and connection details:
        ```dotenv
        OPENAI_API_KEY=your_openai_api_key
        QDRANT_API_KEY=your_qdrant_api_key
        QDRANT_URL=your_qdrant_cloud_url
        NEON_POSTGRES_URL=your_neon_postgres_connection_url
        # ... other secrets as needed
        ```
    *   **IMPORTANT**: Ensure `.env` is added to `.gitignore` to prevent committing secrets.

5.  **Initialize the database and index**:
    *   Run database migrations (if applicable).
    *   Perform initial book content indexing:
        ```bash
        # Example command (actual command will depend on implementation)
        python backend/src/manage_index.py index_book --book-path /path/to/your/book.md
        ```

6.  **Run the FastAPI application**:
    ```bash
    uvicorn backend.src.api.main:app --reload
    ```
    The API will typically be available at `http://127.0.0.1:8000`.

### Frontend Integration (Docusaurus)

1.  **Install frontend dependencies** (if not already done for Docusaurus):
    ```bash
    cd website # or your Docusaurus project directory
    npm install
    ```

2.  **Add the chatbot widget component**:
    *   Locate the appropriate place in your Docusaurus site (e.g., in a `src/theme/Layout.tsx` or a new page).
    *   Import and render the chatbot component, passing the backend API endpoint as a prop.

    ```jsx
    // Example within a React component
    import React from 'react';
    import ChatbotWidget from 'path/to/your/chatbot-component';

    function MyPage() {
      return (
        <div>
          <h1>Welcome to the Book</h1>
          <ChatbotWidget apiUrl="http://127.0.0.1:8000/query" />
        </div>
      );
    }

    export default MyPage;
    ```

3.  **Run the Docusaurus development server**:
    ```bash
    cd website # or your Docusaurus project directory
    npm run start
    ```

## Deployment Notes

### Backend Deployment (FastAPI)

*   Build a Docker image for the FastAPI application using the provided `backend/Dockerfile`.
*   For production, inject sensitive credentials (API keys, database URLs) as environment variables into the container, rather than relying on a `.env` file within the image.
*   Use a production-ready ASGI server like Gunicorn with Uvicorn workers for better performance and stability.

### Frontend Deployment (Docusaurus)

*   Build the static site using `yarn build`.
*   Deploy the contents of the `build` directory to your chosen static hosting provider (e.g., Netlify, Vercel, GitHub Pages).
*   Ensure the `apiUrl` prop passed to the chatbot widget correctly points to the deployed backend API.

### Secure Secrets Management for Production

*   **Never commit `.env` files or secrets directly into your repository.**
*   For production deployments, use environment variables provided by your hosting platform or a dedicated secrets management service.
*   Ensure API keys and database credentials are kept secure and are only accessible by the necessary services.

## Next Steps

*   Familiarize yourself with the project structure and code.
*   Refer to `specs/001-rag-chatbot-book-integration/plan.md` and `specs/001-rag-chatbot-book-integration/research.md` for detailed architectural decisions and research findings.
*   Begin implementing tasks outlined in `specs/001-rag-chatbot-book-integration/tasks.md` (to be generated later).