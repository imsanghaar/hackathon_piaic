---
ID: 0012
TITLE: Fix Base URL for Vercel Deployment
STAGE: misc
DATE_ISO: 2025-11-28
SURFACE: agent
MODEL: gemini-2.0-pro-exp
FEATURE: 1-physical-ai-textbook
BRANCH: 1-physical-ai-textbook
USER: imsanghaar
COMMAND: fix-base-url
LABELS: ["docusaurus", "deployment", "vercel", "bugfix"]
LINKS: null
FILES_YAML:
 - docusaurus.config.ts
TESTS_YAML:
 - Verified git add, commit, and push
PROMPT_TEXT: |
  Your Docusaurus site did not load properly. A very common reason is a wrong site baseUrl configuration. Current configured baseUrl = /my-book/ We suggest trying baseUrl = /
RESPONSE_TEXT: |
  Updated `docusaurus.config.ts` to change `baseUrl` from `/my-book/` to `/`.
  Committed and pushed the change to remote.
OUTCOME:
  success: true
  notes: This should resolve the Vercel deployment issue where assets were failing to load.
---
User reported a Vercel deployment error due to incorrect `baseUrl`.
I updated `docusaurus.config.ts` to set `baseUrl` to `/` as suggested.
I then committed and pushed the fix to the repository.
