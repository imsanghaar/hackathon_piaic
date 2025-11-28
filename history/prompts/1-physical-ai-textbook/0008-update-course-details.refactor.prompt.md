---
ID: 0008
TITLE: Update Home Page with Course Details Only
STAGE: refactor
DATE_ISO: 2025-11-28
SURFACE: agent
MODEL: gemini-2.0-pro-exp
FEATURE: 1-physical-ai-textbook
BRANCH: main
USER: imsanghaar
COMMAND: update-course-details
LABELS: ["docusaurus", "home-page", "content-update"]
LINKS: null
FILES_YAML:
 - src/pages/index.tsx
 - src/components/HomeContent/CourseDetails.tsx
TESTS_YAML:
 - Verified CourseDetails content matches provided text
PROMPT_TEXT: |
  You just have to read the given thing and chang eth ehome page layout according to this: **The Course Details** ...
RESPONSE_TEXT: |
  Updated `src/pages/index.tsx` to remove `HackathonInfo` and `HardwareRequirements`, keeping only `CourseDetails` and `Hero`.
  Updated `src/components/HomeContent/CourseDetails.tsx` to strictly match the provided text:
  - Added "Quarter Overview" section.
  - Updated Modules 1-4 with exact bullet points.
  - Removed the "Weekly Breakdown" table which was not in the provided text.
OUTCOME:
  success: true
  notes: The home page now focuses exclusively on the Course Details as requested.
---
User requested to update the home page layout based on a specific "Course Details" text snippet.
I interpreted "according to this" as making this the primary content.
I modified `src/pages/index.tsx` to remove the Hackathon and Hardware sections, leaving only the Hero and Course Details.
I rewrote `src/components/HomeContent/CourseDetails.tsx` to match the provided text exactly, adding the "Quarter Overview" and ensuring the module descriptions were precise, while removing the extraneous weekly breakdown table.
