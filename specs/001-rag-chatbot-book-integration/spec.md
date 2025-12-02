# Feature Specification: RAG Chatbot for Book Integration

**Feature Branch**: `001-rag-chatbot-book-integration`  
**Created**: 2025-12-01  
**Status**: Draft  
**Input**: User description: "Keeping the constitution.md in mind, I will tell you and you have to write the spec for the chatbot. ***The chatbot will be made by using these only: 1. OpenAI Agents/Chatkit SDK 2. FastAPI 3. QDRANT Cloud Free Tier 4. Neon Postgres Serverless database The chatbot will be using API key to answer the user queries about the book with source. When the chatbot will be integreted and embedded in the book as there is already a widgte for it. The chatbot will have all the knowledge of the book and if the user asks questions about the content of the book the chatbot is supposed to answer from the book with explanation and give source for the question in the book. The chatbot will have all the knowlege of the book, including author, when was it made and etc. The chatbot will auto-update if the book content is updated like (if a chapter is added in the book, the chatbot should automatically update it self according to the book). If you want any externel help let me know before doing it. I am going to push this chatbot including my book to github so please if you use secrets then usse it in way that the chatbot must be running when it is puhed to github and deployed to webisite. When deployed to website the chatbot must be running there as well."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Ask a question about the book content (Priority: P1)

As a reader of the book, I want to ask specific questions about its content so that I can quickly find information and understand topics with explanations and sources.

**Why this priority**: This is the core functionality of the RAG chatbot and provides the primary value to the user.

**Independent Test**: A user can ask a question about a specific chapter, receive an answer with a source reference (e.g., chapter title or page number), and verify the accuracy.

**Acceptance Scenarios**:

1. **Given** the chatbot has indexed the book content, **When** a user asks "What is the main thesis of Chapter 3?", **Then** the chatbot should provide an answer based on Chapter 3 and cite "Chapter 3" as the source.
2. **Given** the chatbot has access to book metadata, **When** a user asks "Who is the author of this book?", **Then** the chatbot should provide the author's name and cite "Book Metadata" as the source.

---

### User Story 2 - Handle out-of-scope questions (Priority: P2)

As a user, when I ask a question not related to the book's content, I want the chatbot to inform me that the information is outside its knowledge base, so I don't receive incorrect or irrelevant answers.

**Why this priority**: Ensures the chatbot remains focused on its intended purpose and manages user expectations.

**Independent Test**: A user can ask a question completely unrelated to the book's content (e.g., "What is the weather like today?"), and the chatbot will respond appropriately.

**Acceptance Scenarios**:

1. **Given** the chatbot's knowledge is limited to the book content, **When** a user asks "What is the capital of France?", **Then** the chatbot should respond with a message indicating it can only answer questions about the book.

---

### Edge Cases

- What happens when the book content is updated? A scheduled job checks for updates every weekend and re-indexes the content.
- How does the system handle malformed or ambiguous queries from the user?
- What happens if the external APIs (OpenAI, Chatkit, Qdrant, Neon) are unavailable?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST ingest and index the entire content of the book. 
- **FR-002**: Users MUST be able to query the chatbot in natural language about the book's content.
- **FR-003**: The chatbot MUST answer user queries based SOLELY on the book's content.
- **FR-004**: For each answer, the chatbot MUST provide a verifiable source reference from the book: Chapter title and section name.
- **FR-005**: The chatbot MUST provide explanations for its answers, derived from the book's text.
- **FR-006**: The chatbot MUST be able to retrieve and provide general book metadata, such as author and creation date.
- **FR-007**: The chatbot SHOULD automatically update its knowledge base when the book content is modified. **[NOTE: The selected mechanism is a scheduled job that checks for updates every weekend and re-indexes the content.]**
- **FR-008**: The chatbot MUST be embeddable as a widget within the Docusaurus book.
- **FR-009**: The system MUST securely manage API keys and secrets for all integrated services (OpenAI, Chatkit, FastAPI, QDRANT, Neon) for deployment on GitHub and a website. Store secrets in a `.env` file in the project root, excluded from Git.
- **FR-010**: The chatbot MUST be operational and accessible when deployed to the website.

### Key Entities *(include if feature involves data)*

- **Book Content**: The text, structure, and metadata of the book.
- **User Query**: The natural language question posed by the user.
- **Chatbot Response**: The answer provided by the chatbot, including explanation and source.
- **Book Metadata**: Information about the book such as author, publication date, etc.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can ask at least 10 different questions about the book's content, and the chatbot provides accurate answers for at least 90% of them.
- **SC-002**: For 95% of successful answers, the provided source reference (Chapter title and section name) is accurate and verifiable within the book.
- **SC-003**: The chatbot successfully answers 100% of questions related to book metadata (author, creation date).
- **SC-004**: The chatbot widget is successfully integrated into the Docusaurus book and is functional across major browsers.
- **SC-005**: The system successfully handles a simulated book content update (e.g., a new chapter added) and reflects the new information in subsequent queries within 24 hours (via scheduled job running weekly).
- **SC-006**: The deployed chatbot is accessible and responsive on the website, with an average query response time under 5 seconds for 90% of requests. Store secrets in a `.env` file in the project root, excluded from Git.