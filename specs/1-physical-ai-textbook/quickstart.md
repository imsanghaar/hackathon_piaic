# Quickstart: AI/Spec-Driven Book Creation

This guide provides instructions on how to set up and run the Docusaurus project locally.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Local Development

1.  **Navigate to the project directory**:
    Open your terminal in the root of the `my-book` repository.

2.  **Install Dependencies**:
    Run the following command to install the necessary Node.js packages.
    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
    ```bash
    npm run start
    ```
    By default, the site will be available at `http://localhost:3000`.

## Building the Site

To generate a static production build of the site, run:
```bash
npm run build
```
The output will be placed in the `build` directory. This is the directory that would be deployed to a static site host like GitHub Pages.