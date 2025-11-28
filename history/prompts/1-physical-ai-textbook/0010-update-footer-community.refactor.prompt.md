---
ID: 0010
TITLE: Update Footer Community Links
STAGE: refactor
DATE_ISO: 2025-11-28
SURFACE: agent
MODEL: gemini-2.0-pro-exp
FEATURE: 1-physical-ai-textbook
BRANCH: main
USER: imsanghaar
COMMAND: update-footer-community
LABELS: ["docusaurus", "footer", "community-links"]
LINKS: null
FILES_YAML:
 - docusaurus.config.ts
TESTS_YAML:
 - Verified removal of YouTube link
 - Verified update of LinkedIn and Facebook URLs
PROMPT_TEXT: |
  In footer, in community section remove "Youtube" and for linked in when it is clicked it hsould redirect to my linkedin account... second, for facebook, add this link...
RESPONSE_TEXT: |
  Updated `docusaurus.config.ts` to:
  - Remove the "YouTube" link from the Community section.
  - Update the "LinkedIn" link to `https://www.linkedin.com/in/imam-sanghaar-chandio-96780b274/`.
  - Update the "Facebook" link to `https://www.facebook.com/profile.php?id=61556981875577`.
OUTCOME:
  success: true
  notes: Links updated as requested.
---
User requested changes to the footer's community links.
I modified `docusaurus.config.ts` to remove the YouTube entry and update the URLs for LinkedIn and Facebook to the specific profile links provided by the user.
