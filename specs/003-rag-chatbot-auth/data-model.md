# Data Model: RAG Chatbot with Authentication

**Feature Branch**: `003-rag-chatbot-auth`  
**Date**: 2025-11-28  
**Spec**: specs/003-rag-chatbot-auth/spec.md
**Research**: specs/003-rag-chatbot-auth/research.md

## Entities

### 1. User

Represents a registered user of the book platform.

*   **Attributes**:
    *   `id`: UUID (Primary Key) - Unique identifier for the user.
    *   `email`: String (Unique, Indexed) - User's email address, used for login.
    *   `hashed_password`: String - Securely stored hashed password.
    *   `software_background`: JSONB (or TEXT array) - User's self-declared software experience (e.g., ["Python", "JavaScript", "ROS"]).
    *   `hardware_background`: JSONB (or TEXT array) - User's self-declared hardware experience (e.g., ["Robotics", "IoT", "NVIDIA Jetson"]).
    *   `personalization_settings`: JSONB - Key-value store for user-specific content personalization preferences (e.g., `{"difficulty_level": "advanced", "example_preference": "code"}`).
    *   `created_at`: Timestamp - Date and time of user registration.
    *   `updated_at`: Timestamp - Date and time of last profile update.
*   **Relationships**:
    *   One-to-many with `UserSession` (implicit for authentication).
    *   Many-to-one with `BookContent` (indirect, via personalized views).
*   **Validation Rules**:
    *   `email` must be a valid email format and unique.
    *   `password` must meet complexity requirements (e.g., min length, mix of chars).
    *   Background fields can be optional during signup but may be updated later.

### 2. BookContent (Conceptual / External)

Represents the raw, indexed content of the book. This is largely external (Docusaurus MDX files) but conceptually part of the RAG knowledge base.

*   **Attributes**:
    *   `content_id`: String (Unique) - Identifier for a chunk of book content (e.g., chapter ID, section ID, or paragraph hash).
    *   `text_segment`: String - The actual text content.
    *   `embeddings`: Vector - Numerical representation of `text_segment` for vector search (stored in Qdrant).
    *   `metadata`: JSONB - Additional context (e.g., `chapter_title`, `section_title`, `tags`, `language`).
*   **Relationships**:
    *   Used by `RAGQuery` for retrieval.
*   **Storage**: Primarily Qdrant (embeddings) and underlying Docusaurus files (raw text).

### 3. RAGQuery

Represents a user's question submitted to the RAG chatbot.

*   **Attributes**:
    *   `query_id`: UUID (Primary Key) - Unique identifier for the query.
    *   `user_id`: UUID (Foreign Key to `User.id`) - The user who made the query.
    *   `query_text`: String - The user's original question.
    *   `context_text`: String (Optional) - User-selected text providing additional context for the query.
    *   `timestamp`: Timestamp - Date and time of query submission.
*   **Relationships**:
    *   Many-to-one with `User`.
    *   One-to-one with `RAGResponse`.

### 4. RAGResponse

Represents the RAG chatbot's answer to a `RAGQuery`.

*   **Attributes**:
    *   `response_id`: UUID (Primary Key) - Unique identifier for the response.
    *   `query_id`: UUID (Foreign Key to `RAGQuery.query_id`) - The query this response is for.
    *   `response_text`: String - The chatbot's generated answer.
    *   `source_documents`: JSONB (Array of Strings/Objects) - References to the `BookContent` segments used to formulate the answer.
    *   `timestamp`: Timestamp - Date and time the response was generated.
*   **Relationships**:
    *   Many-to-one with `RAGQuery`.

### 5. TranslationJob (Conceptual)

Represents an on-demand translation request for a chapter.

*   **Attributes**:
    *   `job_id`: UUID (Primary Key) - Unique identifier for the translation job.
    *   `user_id`: UUID (Foreign Key to `User.id`) - The user requesting the translation.
    *   `chapter_id`: String - Identifier for the chapter being translated.
    *   `source_language`: String - The original language (e.g., "en").
    *   `target_language`: String - The target language (e.g., "ur").
    *   `status`: Enum (e.g., "pending", "in_progress", "completed", "failed") - Current status of the translation.
    *   `requested_at`: Timestamp - When the translation was requested.
    *   `translated_content`: TEXT (Potentially cached) - The translated chapter content.
*   **Relationships**:
    *   Many-to-one with `User`.
    *   One-to-one with `BookContent` (for translated version).