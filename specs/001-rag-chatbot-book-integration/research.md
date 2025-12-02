# Research Findings: RAG Chatbot for Book Integration

**Feature**: RAG Chatbot for Book Integration
**Branch**: `001-rag-chatbot-book-integration`
**Date**: 2025-12-01
**Plan**: specs/001-rag-chatbot-book-integration/plan.md

## Summary of Research Tasks

This section details the findings from researching various aspects of the RAG Chatbot implementation.

---## Language/Version Confirmation

*   **Decision**: Python 3.10+ and Node.js LTS.
*   **Rationale**: These are widely adopted, stable versions with broad library support, suitable for hackathon development and deployment.
*   **Alternatives Considered**: Newer preview versions were considered but deferred for stability. Older versions were rejected due to missing features or security vulnerabilities.

---## OpenAI Agents/Chatkit SDK with FastAPI Integration

*   **Decision**: Use the official SDKs within a FastAPI service layer. Design API endpoints in FastAPI to abstract SDK calls.
*   **Rationale**: Official SDKs provide the most direct and supported integration. FastAPI's asynchronous capabilities are well-suited for handling I/O bound operations like external API calls.
*   **Alternatives Considered**: Custom API wrappers were considered but rejected in favor of official SDKs for maintainability and access to latest features.

---## QDRANT Cloud Interaction Patterns

*   **Decision**: Utilize the official QDRANT client library for Python. Implement a repository pattern within the FastAPI backend to abstract QDRANT operations.
*   **Rationale**: The client library offers a clean interface for CRUD operations and vector search. A repository pattern enhances testability and decouples the core RAG logic from the specific database implementation.
*   **Alternatives Considered**: Direct HTTP calls to QDRANT were considered but rejected for abstraction and type safety benefits of the client library.

---## Chatbot Widget Integration in Docusaurus

*   **Decision**: Develop a React component (or similar framework compatible with Docusaurus) that interfaces with the FastAPI backend via REST API calls. This component will be placed within a Docusaurus page or layout.
*   **Rationale**: React is commonly used with Docusaurus and allows for component-based UI development. A clear API contract between the frontend widget and the backend service is essential.
*   **Alternatives Considered**: Integrating a pre-built chatbot widget was considered but rejected as it might not meet specific UI/UX requirements or integration needs.

---## Contract Testing Best Practices

*   **Decision**: Employ `pytest` with libraries like `requests` for API contract testing. Define schemas for requests and responses using Pydantic models (for FastAPI) and potentially JSON schema validation.
*   **Rationale**: Pytest provides a robust framework for testing. Contract tests ensure that the API provider (FastAPI backend) and consumers (Docusaurus widget) adhere to agreed-upon interfaces, preventing integration issues.
*   **Alternatives Considered**: Mocking libraries were considered for integration testing, but contract testing offers more explicit contract enforcement.

---## Deployment Strategies for FastAPI and Docusaurus

*   **Decision**: Deploy the FastAPI backend using a production-ready ASGI server (e.g., Uvicorn with Gunicorn workers) on a cloud platform (e.g., Render, Heroku, AWS Lambda/ECS). Deploy the Docusaurus frontend as static assets. Manage secrets using environment variables loaded from a `.env` file, committed to `.gitignore`.
*   **Rationale**: This provides a scalable and secure deployment architecture. Using environment variables for secrets is a common and effective practice for managing sensitive information in different environments.
*   **Alternatives Considered**: Dockerizing both applications for containerized deployment was considered, offering more isolation but potentially adding complexity for a hackathon MVP.

---## Performance Tuning for RAG Systems

*   **Decision**: Optimize QDRANT indexing and query parameters. Implement efficient data retrieval from Neon Postgres. Use asynchronous programming in FastAPI. Cache frequent responses where applicable.
*   **Rationale**: These optimizations aim to meet the performance goal of sub-5-second response times for 90% of queries by reducing latency in data retrieval and processing.
*   **Alternatives Considered**: In-memory caching strategies for embeddings were considered but might be overkill for MVP if QDRANT performance is sufficient.

---## Python Scheduled Jobs and `.env` Security

*   **Decision**: Use a Python scheduling library (e.g., `APScheduler` or `schedule`) within the FastAPI application or as a separate background task for weekly updates. Store secrets in a `.env` file, strictly adhering to `.gitignore` conventions. For production, consider a secrets manager.
*   **Rationale**: `APScheduler` is a robust Python scheduling library. Using `.env` files with `.gitignore` is standard practice for managing local secrets, and externalizing them for production environments is a clear security measure.
*   **Alternatives Considered**: Cron jobs or systemd timers were considered for scheduling but integrating within Python offers better control and portability.

---## Efficient Book Content Indexing in QDRANT

*   **Decision**: Implement a batching strategy for upserting vectors into QDRANT. Prioritize indexing the core content of the book first for MVP. Implement metadata filtering in QDRANT queries to efficiently retrieve relevant context.
*   **Rationale**: Batching improves upsert performance in QDRANT. Prioritizing core content ensures a functional MVP. Metadata filtering aids in retrieving accurate and relevant information for RAG.
*   **Alternatives Considered**: Upserting documents one by one was rejected due to performance implications. More complex indexing strategies were deferred for future optimization.
