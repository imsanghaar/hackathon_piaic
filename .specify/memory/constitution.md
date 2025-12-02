# RAG Chatbot for Hackathon Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### API-First Development
<!-- Example: I. Library-First -->
All backend services must expose a well-defined API using FastAPI. Data exchange will primarily be JSON-based. OpenAI and Chatkit SDKs are considered first-party APIs. Promotes modularity, testability, and ease of integration with various components and potential future expansions.

### Robust Data Management
<!-- Example: II. CLI Interface -->
Neon Postgres Serverless will store structured data. Qdrant Cloud will manage vector embeddings for the RAG system. Ensures data integrity, scalability, and efficient retrieval crucial for the RAG chatbot's performance.

### Integrated Documentation
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
All user-facing documentation, API specifications, and critical design decisions must be maintained within the existing Docusaurus book. Centralizes project knowledge, ensuring accessibility and discoverability for all team members and stakeholders.

### Hackathon Velocity & MVP Focus
<!-- Example: IV. Integration Testing -->
Prioritize the core RAG chatbot functionality. Deliver a functional Minimum Viable Product (MVP) by the hackathon deadline, deferring non-essential features. Maximizes the chance of a demonstrable, working system within the limited hackathon timeframe.

### Code Quality & Maintainability
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
Adhere to idiomatic Python and TypeScript where applicable. Implement sufficient logging for FastAPI and core service interactions. Code should be readable and follow established project conventions. Ensures the codebase remains understandable, debuggable, and maintainable, even within a rapid development cycle.

### Undefined
<!-- Example: VI. Versioning & Breaking Changes, VII. Simplicity -->
No specific principle defined for this slot yet. This can be used for future expansion or left blank.

## Security & Compliance
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

Adhere to security best practices for API keys and data handling. Ensure compliance with any hackathon-specific rules.

## Development Workflow
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

Utilize Git for version control. Employ a feature-branch workflow. Regular code reviews will be conducted.

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

This constitution supersedes all other practices. Amendments require documentation, approval by a majority of the core hackathon team, and a plan for migration if necessary. All code and documentation changes must demonstrate compliance with these principles. Complex solutions must be justified. Refer to development guidance documents for runtime best practices.

**Version**: 0.1.0 | **Ratified**: 2025-12-01 | **Last Amended**: 2025-12-01
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->