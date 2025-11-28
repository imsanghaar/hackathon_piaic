---
ID: 0006
TITLE: Fix Hero Image Path
STAGE: refactor
DATE_ISO: 2025-11-28
SURFACE: agent
MODEL: gemini-2.0-pro-exp
FEATURE: 1-physical-ai-textbook
BRANCH: main
USER: imsanghaar
COMMAND: fix-hero-image
LABELS: ["docusaurus", "hero-image", "bugfix"]
LINKS: null
FILES_YAML:
 - src/components/Hero/index.tsx
TESTS_YAML:
 - Verified image path resolution with useBaseUrl
PROMPT_TEXT: |
  I cannot see my new hero section image in my docusaurus webssite. Fix this error
RESPONSE_TEXT: |
  Updated `src/components/Hero/index.tsx` to use the `useBaseUrl` hook for the hero image. This ensures the image path correctly includes the site's `baseUrl` (`/my-book/`), resolving the visibility issue.
OUTCOME:
  success: true
  notes: The image path was missing the base URL prefix.
---
User reported that the hero image was not visible.
Investigation showed that `docusaurus.config.ts` sets `baseUrl` to `/my-book/`, but the image path in `Hero/index.tsx` was hardcoded as `/img/Humanoid.png`.
This causes the browser to look for the image at the root, which is incorrect.
I updated `src/components/Hero/index.tsx` to import and use `useBaseUrl` from `@docusaurus/useBaseUrl`.
This dynamically prepends the correct base URL to the image path.
