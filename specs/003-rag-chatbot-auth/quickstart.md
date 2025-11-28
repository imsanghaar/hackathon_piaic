# Quickstart Guide: RAG Chatbot with Authentication

**Feature Branch**: `003-rag-chatbot-auth`  
**Date**: 2025-11-28  
**Spec**: specs/003-rag-chatbot-auth/spec.md
**Plan**: specs/003-rag-chatbot-auth/plan.md

This guide provides a quick overview of how to set up and run the RAG Chatbot with Authentication and personalization features.

## Prerequisites

Ensure you have the following installed on your development machine:

*   **Git**: For cloning the repository.
*   **Python 3.9+**: For the FastAPI backend.
*   **Node.js (LTS)**: For the Docusaurus frontend.
*   **npm or Yarn**: Node.js package manager.
*   **Cloud Accounts/Credentials**:
    *   OpenAI API Key
    *   Qdrant Cloud Free Tier credentials
    *   Neon Serverless Postgres connection string
    *   `better-auth.com` API Key/Client ID & Secret

## Setup Steps

### 1. Clone the Repository

```bash
git clone [repository-url]
cd [repository-name]
```

### 2. Backend Setup (`backend/` directory)

Navigate to the `backend/` directory:

```bash
cd backend
```

**a. Create a Python Virtual Environment and Install Dependencies:**

```bash
python -m venv .venv
./.venv/Scripts/activate # On Windows
source .venv/bin/activate # On macOS/Linux
pip install -r requirements.txt
```
*(Note: `requirements.txt` will need to be created with FastAPI, Uvicorn, OpenAI SDK, Qdrant client, Psycopg2, python-dotenv, etc.)*

**b. Configure Environment Variables:**

Create a `.env` file in the `backend/` directory with your credentials:

```
OPENAI_API_KEY=your_openai_api_key
QDRANT_URL=your_qdrant_cloud_url
QDRANT_API_KEY=your_qdrant_api_key
NEON_POSTGRES_URL=your_neon_postgres_connection_string
BETTER_AUTH_CLIENT_ID=your_better_auth_client_id
BETTER_AUTH_CLIENT_SECRET=your_better_auth_client_secret
# Add any other necessary secrets/keys
```

**c. Ingest Book Content into Qdrant:**

A script will be provided to parse the Docusaurus content and ingest it into Qdrant.
*(Note: This script needs to be developed.)*

```bash
python scripts/ingest_content.py
```

### 3. Frontend Setup (`frontend/` directory)

Navigate to the `frontend/` directory (which is the Docusaurus root):

```bash
cd ../frontend # Adjust path if needed, assuming Docusaurus is in frontend/
```

**a. Install Dependencies:**

```bash
npm install # or yarn install
```

**b. Configure Environment Variables:**

Create a `.env` file in the `frontend/` directory with necessary public API keys/URLs:

```
REACT_APP_BACKEND_API_URL=http://localhost:8000 # Or your deployed backend URL
REACT_APP_BETTER_AUTH_DOMAIN=your_better_auth_domain
REACT_APP_BETTER_AUTH_CLIENT_ID=your_better_auth_client_id
```
*(Note: Frontend environment variables vary depending on Docusaurus/React setup.)*

## Running the Application

### 1. Start the Backend

From the `backend/` directory:

```bash
./.venv/Scripts/activate # On Windows
source .venv/bin/activate # On macOS/Linux
uvicorn main:app --reload --port 8000
```
The backend API will be available at `http://localhost:8000`.

### 2. Start the Frontend (Docusaurus)

From the `frontend/` directory:

```bash
npm start # or yarn start
```
The Docusaurus book with the integrated features will be available at `http://localhost:3000`.

## Testing

*(Note: Specific test commands will be detailed in the `tasks.md` file.)*

### 1. Backend Tests

From the `backend/` directory:

```bash
pytest
```

### 2. Frontend Tests

From the `frontend/` directory:

```bash
npm test # or yarn test
```
