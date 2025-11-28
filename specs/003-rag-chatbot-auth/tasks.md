# Tasks: RAG Chatbot with Authentication

**Input**: Design documents from `/specs/003-rag-chatbot-auth/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: This plan includes test tasks, following a TDD approach as per project constitution.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `- [ ] [TaskID] [P?] [Story] Description with file path`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/` (Docusaurus project)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create `backend/` directory and initialize Python project (virtual env, `requirements.txt`)
- [ ] T002 Create `frontend/` directory (Docusaurus root) and install Node.js dependencies
- [ ] T003 [P] Create `.env` template files for backend and frontend configuration (`backend/.env.example`, `frontend/.env.example`)
- [ ] T004 Create `backend/requirements.txt` with initial dependencies (FastAPI, Uvicorn, Psycopg2, python-dotenv, qdrant-client, openai)
- [ ] T005 [P] Configure backend linting and formatting tools (`backend/pyproject.toml` or similar)
- [ ] T006 [P] Configure frontend linting and formatting tools (`frontend/package.json` or similar)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Setup Neon Serverless Postgres database, create `users` table schema (`backend/src/data/database.py`, `backend/src/models/user_model.py`)
- [ ] T008 [P] Implement base API routing and middleware structure in FastAPI (`backend/src/main.py`, `backend/src/api/auth_router.py`)
- [ ] T009 [P] Implement basic error handling and logging infrastructure for backend (`backend/src/utils/errors.py`, `backend/src/utils/logging.py`)
- [ ] T010 Configure Qdrant client connection (`backend/src/data/qdrant_client.py`)
- [ ] T011 Create script to parse Docusaurus content and ingest embeddings into Qdrant (`backend/scripts/ingest_content.py`)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Signup & Profile Personalization (P2 - US3) 🎯 MVP (Authentication)

**Goal**: Enable new users to sign up, provide background, and trigger content personalization.

**Independent Test**: A new user can successfully register, provide background info, log in, and press the "Personalize Content" button to see personalized content for a chapter.

### Tests for User Story 3

- [ ] T012 [P] [US3] Write unit tests for user model validation (`backend/tests/unit/test_user_model.py`)
- [ ] T013 [P] [US3] Write integration tests for `better-auth.com` signup endpoint (`backend/tests/integration/test_auth_signup.py`)
- [ ] T014 [P] [US3] Write E2E test for frontend signup flow, including background data input (`frontend/tests/e2e/test_signup.spec.ts`)

### Implementation for User Story 3

- [ ] T015 [P] [US3] Implement User model in `backend/src/models/user_model.py` (with JSONB fields for background/preferences)
- [ ] T016 [US3] Implement `better-auth.com` signup logic in `backend/src/services/auth_service.py` (uses User model)
- [ ] T017 [US3] Create `/auth/signup` endpoint in `backend/src/api/auth_router.py` (uses auth service)
- [ ] T018 [P] [US3] Create React signup component with background input fields (`frontend/src/components/SignupForm.tsx`)
- [ ] T019 [P] [US3] Integrate signup form into Docusaurus page (`frontend/src/pages/signup.tsx`)
- [ ] T020 [US3] Implement backend logic for content personalization based on user profile (`backend/src/services/personalization_service.py`)
- [ ] T021 [US3] Create `/chapter/{chapter_id}/personalize` endpoint in `backend/src/api/content_router.py`
- [ ] T022 [P] [US3] Create "Personalize Content" button component for frontend (`frontend/src/components/PersonalizeButton.tsx`)
- [ ] T023 [US3] Integrate "Personalize Content" button into Docusaurus chapter layout (`frontend/src/theme/DocItem/Layout/index.js` or similar)
- [ ] T024 [US3] Implement client-side content adaptation logic in Docusaurus to display personalized content (`frontend/src/utils/content_personalizer.ts`)

**Checkpoint**: At this point, User Story 3 should be fully functional and testable independently

---

## Phase 4: User Signin (P2 - US4)

**Goal**: Enable registered users to sign in and access personalized content.

**Independent Test**: A registered user can successfully log in and see their personalized content or be able to personalize.

### Tests for User Story 4

- [ ] T025 [P] [US4] Write integration tests for `better-auth.com` signin endpoint (`backend/tests/integration/test_auth_signin.py`)
- [ ] T026 [P] [US4] Write E2E test for frontend signin flow (`frontend/tests/e2e/test_signin.spec.ts`)

### Implementation for User Story 4

- [ ] T027 [US4] Implement `better-auth.com` signin logic in `backend/src/services/auth_service.py`
- [ ] T028 [US4] Create `/auth/signin` endpoint in `backend/src/api/auth_router.py`
- [ ] T029 [P] [US4] Create React signin component (`frontend/src/components/SigninForm.tsx`)
- [ ] T030 [P] [US4] Integrate signin form into Docusaurus page (`frontend/src/pages/signin.tsx`)
- [ ] T031 [US4] Implement frontend user session management (store token, handle logout) (`frontend/src/services/auth.ts`)
- [ ] T032 [P] [US4] Update Docusaurus theme to show login/logout state and access personalized content.

**Checkpoint**: At this point, User Stories 3 AND 4 should both work independently

---

## Phase 5: Book Content Q&A (P1 - US1)

**Goal**: Provide a functional RAG chatbot for answering questions about book content.

**Independent Test**: A user can ask a question about the book content to the chatbot and receive a relevant answer.

### Tests for User Story 1

- [ ] T033 [P] [US1] Write unit tests for RAG embedding generation (`backend/tests/unit/test_rag_embeddings.py`)
- [ ] T034 [P] [US1] Write integration tests for Qdrant search (`backend/tests/integration/test_qdrant_search.py`)
- [ ] T035 [P] [US1] Write integration tests for RAG pipeline (query to response) (`backend/tests/integration/test_rag_pipeline.py`)
- [ ] T036 [P] [US1] Write E2E test for chatbot interaction (`frontend/tests/e2e/test_chatbot_qa.spec.ts`)

### Implementation for User Story 1

- [ ] T037 [P] [US1] Implement RAG embedding generation (`backend/src/services/embedding_service.py`)
- [ ] T038 [P] [US1] Implement Qdrant vector search and retrieval logic (`backend/src/data/vector_db.py`)
- [ ] T039 [US1] Implement OpenAI ChatKit integration for response generation (`backend/src/services/rag_service.py`)
- [ ] T040 [US1] Create `/chat/query` endpoint in `backend/src/api/chat_router.py` (uses RAG service)
- [ ] T041 [P] [US1] Create React chatbot UI component (`frontend/src/components/Chatbot.tsx`)
- [ ] T042 [US1] Integrate chatbot UI component into Docusaurus (`frontend/src/theme/Layout/index.js` or a dedicated page)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 6: Selected Text Q&A (P1 - US2)

**Goal**: Extend the RAG chatbot to answer questions based on user-selected text.

**Independent Test**: A user can select text, ask a question about it, and receive an answer limited to that context.

### Tests for User Story 2

- [ ] T043 [P] [US2] Write unit tests for selected text processing in RAG service (`backend/tests/unit/test_rag_context.py`)
- [ ] T044 [P] [US2] Write E2E test for selected text Q&A interaction (`frontend/tests/e2e/test_selected_text_qa.spec.ts`)

### Implementation for User Story 2

- [ ] T045 [P] [US2] Modify `backend/src/api/chat_router.py` to accept `context_text` in `/chat/query`
- [ ] T046 [US2] Update `backend/src/services/rag_service.py` to incorporate `context_text` into the RAG process
- [ ] T047 [P] [US2] Implement frontend logic for text selection and passing to chatbot (`frontend/src/utils/text_selection.ts`)
- [ ] T048 [US2] Update chatbot UI component (`frontend/src/components/Chatbot.tsx`) to send selected text as context

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 7: Urdu Translation (P3 - US5)

**Goal**: Enable logged-in users to translate chapter content into Urdu.

**Independent Test**: A logged-in user can click a button and see the current chapter translated into Urdu.

### Tests for User Story 5

- [ ] T049 [P] [US5] Write unit tests for Google Cloud Translation API integration (`backend/tests/unit/test_translation_service.py`)
- [ ] T050 [P] [US5] Write integration tests for chapter translation endpoint (`backend/tests/integration/test_chapter_translation.py`)
- [ ] T051 [P] [US5] Write E2E test for frontend translation button and content display (`frontend/tests/e2e/test_urdu_translation.spec.ts`)

### Implementation for User Story 5

- [ ] T052 [P] [US5] Implement Google Cloud Translation API integration (`backend/src/services/translation_service.py`)
- [ ] T053 [P] [US5] Implement caching mechanism for translated content (if desired for performance) (`backend/src/data/translation_cache.py`)
- [ ] T054 [US5] Create `/chapter/{chapter_id}/translate` endpoint in `backend/src/api/content_router.py` (uses translation service)
- [ ] T055 [P] [US5] Create "Translate to Urdu" button component for frontend (`frontend/src/components/TranslateButton.tsx`)
- [ ] T056 [US5] Integrate "Translate to Urdu" button into Docusaurus chapter layout (`frontend/src/theme/DocItem/Layout/index.js` or similar)
- [ ] T057 [US5] Implement client-side logic to display translated content (`frontend/src/utils/content_translator.ts`)

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T058 Code cleanup and refactoring across backend and frontend
- [ ] T059 Performance optimization for RAG pipeline and translation
- [ ] T060 Security hardening (e.g., rate limiting, input sanitization)
- [ ] T061 Comprehensive documentation updates (API docs, user guides)
- [ ] T062 Validate quickstart.md instructions by following them
- [ ] T063 Implement robust deployment pipeline configuration (CI/CD)

---

## Dependencies & Execution Order

### Phase Dependencies

-   **Setup (Phase 1)**: No dependencies - can start immediately
-   **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
-   **User Stories (Phase 3-7)**: All depend on Foundational phase completion
    *   `Phase 3: User Signup & Profile Personalization (P2 - US3)`: Depends on Foundational.
    *   `Phase 4: User Signin (P2 - US4)`: Depends on Foundational and can be done in parallel with or after US3.
    *   `Phase 5: Book Content Q&A (P1 - US1)`: Depends on Foundational.
    *   `Phase 6: Selected Text Q&A (P1 - US2)`: Depends on Foundational and US1.
    *   `Phase 7: Urdu Translation (P3 - US5)`: Depends on Foundational.
-   **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

-   **User Story 1 (P1 - Book Content Q&A)**: Can start after Foundational.
-   **User Story 2 (P1 - Selected Text Q&A)**: Depends on User Story 1.
-   **User Story 3 (P2 - User Signup & Profile Personalization)**: Can start after Foundational.
-   **User Story 4 (P2 - User Signin)**: Depends on User Story 3 (can start once signup is functional).
-   **User Story 5 (P3 - Urdu Translation)**: Can start after Foundational.

### Within Each User Story

-   Tests (if included) MUST be written and FAIL before implementation
-   Models before services
-   Services before endpoints
-   Core implementation before integration
-   Story complete before moving to next priority

### Parallel Opportunities

-   All tasks marked [P] can run in parallel within their respective phases/stories.
-   Once the Foundational phase (Phase 2) completes, User Stories 1, 3, and 5 can be started in parallel (if team capacity allows).
-   User Story 2 depends on User Story 1.
-   User Story 4 depends on User Story 3.

## Parallel Example: User Story 3

```bash
# Launch all tests for User Story 3 together:
- [ ] T012 [P] [US3] Write unit tests for user model validation (`backend/tests/unit/test_user_model.py`)
- [ ] T013 [P] [US3] Write integration tests for `better-auth.com` signup endpoint (`backend/tests/integration/test_auth_signup.py`)
- [ ] T014 [P] [US3] Write E2E test for frontend signup flow, including background data input (`frontend/tests/e2e/test_signup.spec.ts`)

# Launch parallel implementation for User Story 3:
- [ ] T015 [P] [US3] Implement User model in `backend/src/models/user_model.py`
- [ ] T018 [P] [US3] Create React signup component with background input fields (`frontend/src/components/SignupForm.tsx`)
- [ ] T022 [P] [US3] Create "Personalize Content" button component for frontend (`frontend/src/components/PersonalizeButton.tsx`)
```

## Implementation Strategy

### MVP First (User Story 3, 4, then 1)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3.  Complete Phase 3: User Story 3 (Signup & Personalization)
4.  Complete Phase 4: User Story 4 (Signin)
5.  Complete Phase 5: User Story 1 (Book Content Q&A)
6.  **STOP and VALIDATE**: Test US3, US4, US1 independently and together.
7.  Deploy/demo if ready (MVP includes core chatbot and auth)

### Incremental Delivery

1.  Complete Setup + Foundational → Foundation ready
2.  Add User Story 3 + 4 → Test independently → Deploy/Demo (Auth + Personalization MVP!)
3.  Add User Story 1 → Test independently → Deploy/Demo (Core Chatbot MVP!)
4.  Add User Story 2 → Test independently → Deploy/Demo
5.  Add User Story 5 → Test independently → Deploy/Demo
6.  Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1.  Team completes Setup + Foundational together
2.  Once Foundational is done:
    *   Developer A: User Story 3 (Signup & Personalization) & User Story 4 (Signin)
    *   Developer B: User Story 1 (Book Content Q&A) & User Story 2 (Selected Text Q&A)
    *   Developer C: User Story 5 (Urdu Translation)
3.  Stories complete and integrate independently based on defined dependencies.

---

## Notes

-   [P] tasks = different files, no dependencies
-   [Story] label maps task to specific user story for traceability
-   Each user story should be independently completable and testable
-   Verify tests fail before implementing
-   Commit after each task or logical group
-   Stop at any checkpoint to validate story independently
-   Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
