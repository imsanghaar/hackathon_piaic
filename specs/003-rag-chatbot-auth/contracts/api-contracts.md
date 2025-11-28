# API Contracts: RAG Chatbot with Authentication

**Feature Branch**: `003-rag-chatbot-auth`  
**Date**: 2025-11-28  
**Spec**: specs/003-rag-chatbot-auth/spec.md
**Data Model**: specs/003-rag-chatbot-auth/data-model.md

This document outlines the REST API endpoints for the RAG Chatbot with Authentication and personalization features.

## Authentication Endpoints (`/auth`)

### 1. User Signup

*   **Endpoint**: `/auth/signup`
*   **Method**: `POST`
*   **Description**: Registers a new user account, collecting background information.
*   **Request Body**: `application/json`
    ```json
    {
      "email": "user@example.com",
      "password": "strongpassword123",
      "software_background": ["Python", "Machine Learning"],
      "hardware_background": ["Robotics", "IoT"]
    }
    ```
*   **Response (201 Created)**: `application/json`
    ```json
    {
      "user_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "access_token": "jwt_token_string",
      "token_type": "bearer"
    }
    ```
*   **Error Responses**:
    *   `400 Bad Request`: Invalid input (e.g., invalid email, weak password).
    *   `409 Conflict`: Email already registered.

### 2. User Signin

*   **Endpoint**: `/auth/signin`
*   **Method**: `POST`
*   **Description**: Authenticates a user and provides an access token.
*   **Request Body**: `application/json`
    ```json
    {
      "email": "user@example.com",
      "password": "strongpassword123"
    }
    ```
*   **Response (200 OK)**: `application/json`
    ```json
    {
      "user_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      "access_token": "jwt_token_string",
      "token_type": "bearer"
    }
    ```
*   **Error Responses**:
    *   `400 Bad Request`: Invalid input.
    *   `401 Unauthorized`: Invalid credentials.

## Chatbot Endpoints (`/chat`)

### 1. Query Chatbot

*   **Endpoint**: `/chat/query`
*   **Method**: `POST`
*   **Description**: Submits a question to the RAG chatbot, optionally with selected text context.
*   **Authentication**: Bearer Token
*   **Request Body**: `application/json`
    ```json
    {
      "query_text": "What are the main components of ROS 2?",
      "context_text": "ROS 2 is a flexible framework for writing robot software."
    }
    ```
*   **Response (200 OK)**: `application/json`
    ```json
    {
      "response_text": "ROS 2 primarily consists of nodes, topics, services, and actions...",
      "source_documents": [
        {"id": "doc123", "title": "ROS 2 Concepts", "url": "/docs/ros-2-concepts"}
      ]
    }
    ```
*   **Error Responses**:
    *   `400 Bad Request`: Invalid query.
    *   `401 Unauthorized`: Missing or invalid token.

## Content Interaction Endpoints (`/chapter`)

### 1. Personalize Chapter Content

*   **Endpoint**: `/chapter/{chapter_id}/personalize`
*   **Method**: `POST`
*   **Description**: Triggers content personalization for a specific chapter based on user profile.
*   **Authentication**: Bearer Token
*   **Parameters**:
    *   `chapter_id`: String (Path Parameter) - Unique identifier for the chapter.
*   **Request Body**: `application/json` (Optional, for future manual override of preferences)
    ```json
    {}
    ```
*   **Response (200 OK)**: `application/json`
    ```json
    {
      "status": "success",
      "message": "Chapter content personalized",
      "personalized_content_url": "/docs/chapter/{chapter_id}/personalized"
    }
    ```
    (Note: `personalized_content_url` might be a redirect or a signal for frontend to re-render.)
*   **Error Responses**:
    *   `401 Unauthorized`: Missing or invalid token.
    *   `404 Not Found`: Chapter not found.

### 2. Translate Chapter Content to Urdu

*   **Endpoint**: `/chapter/{chapter_id}/translate`
*   **Method**: `POST`
*   **Description**: Translates the content of a specific chapter into Urdu.
*   **Authentication**: Bearer Token
*   **Parameters**:
    *   `chapter_id`: String (Path Parameter) - Unique identifier for the chapter.
*   **Request Body**: `application/json` (Optional, could specify target language if not fixed)
    ```json
    {
      "target_language": "ur"
    }
    ```
*   **Response (200 OK)**: `application/json`
    ```json
    {
      "status": "success",
      "message": "Chapter content translated to Urdu",
      "translated_content_url": "/docs/chapter/{chapter_id}/ur"
    }
    ```
    (Note: `translated_content_url` might be a redirect or a signal for frontend to re-render.)
*   **Error Responses**:
    *   `401 Unauthorized`: Missing or invalid token.
    *   `404 Not Found`: Chapter not found.
    *   `500 Internal Server Error`: Translation service error.
