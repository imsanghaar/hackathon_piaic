# Data Model: AI/Spec-Driven Book Creation

This document describes the content structure of the "Physical AI & Humanoid Robotics Textbook" within the Docusaurus framework. Given that Docusaurus is a static site generator, this "data model" focuses on the organization and relationships of markdown files and their metadata.

## 1. Core Entities

### 1.1. Book (Root Entity)
-   **Description**: The entire textbook project, managed by Docusaurus.
-   **Key Attributes**:
    -   `title`: Overall title of the book (e.g., "The Rise Of Physical AI and Humanoid Robotics"). Defined in `docusaurus.config.ts`.
    -   `tagline`: A short descriptive phrase for the book. Defined in `docusaurus.config.ts`.
    -   `url`: Base URL for deployment (e.g., GitHub Pages URL). Defined in `docusaurus.config.ts`.
    -   `baseUrl`: Base URL path for the site. Defined in `docusaurus.config.ts`.

### 1.2. Module/Section (Organizational Unit)
-   **Description**: A grouping of related chapters within the book, typically represented by a directory in `docs/` and a `_category_.json` file for metadata.
-   **Location**: Resides in the `docs/` directory, organized into logical sections (e.g., `introduction`, `ros-2-fundamentals`).
-   **Key Attributes (in `_category_.json`)**:
    -   `label`: Display name for the module/section in the sidebar.
    -   `position`: Controls the order of modules in the sidebar.

### 1.3. Chapter (Primary Content Unit)
-   **Description**: A major section or article within a module, corresponding to a Docusaurus document.
-   **Location**: Typically resides within a module's subdirectory in `docs/`.
-   **Key Attributes (Markdown Frontmatter)**:
    -   `sidebar_position`: Controls order within its module in the sidebar navigation.
    -   `title`: Title of the chapter, displayed in navigation and page header.

### 1.4. Static Asset (Supporting Media)
-   **Description**: Images, diagrams, or other media embedded within the textbook content or used in the theme.
-   **Location**: Typically stored in `static/img/`.
-   **Key Attributes**: `src` (path), `alt` (alternative text).
    -   Specifically, `static/img/book-cover-page.png` for the hero section image.

## 2. Relationships

-   **Book has Modules/Sections**: The `docs/` directory structure and `_category_.json` files define how modules are organized within the entire book.
-   **Modules/Sections contain Chapters**: Each chapter (Markdown file) belongs to a specific module/section based on its directory location.
-   **Chapters include Static Assets**: Markdown chapters reference assets via relative or absolute paths.
-   **Homepage utilizes Static Assets**: The homepage (e.g., `src/pages/index.tsx`) directly references specific static assets for branding and visuals (e.g., hero image).

## 3. Navigation Structure

Docusaurus automatically generates navigation based on the `docs/` directory structure and `sidebars.ts`.

-   **Sidebar**: Displays chapters grouped by modules, based on `_category_.json` and chapter frontmatter.
-   **Table of Contents**: Generated automatically for each chapter from its headings.
-   **Homepage Links**: The homepage will include a "Start Reading" button linking to the book's introduction page (e.g., `/docs/introduction/`).