---
name: create-issue
description: 'Use when the user says "create issue".'
metadata:
  summary: "File one GitHub issue to park a later thought."
---

# Create issue

File one GitHub issue for a follow-up the user named, or for an out-of-scope
leftover the conversation turned up. This is a parking lot, not a plan
breakdown. GitHub only. If nothing is worth parking, say so and stop.

## Steps
1. Verify `gh auth status`. If `gh` is missing: "gh CLI is required. Install it
   from https://cli.github.com/." Check `git remote get-url origin`; if it
   contains `gitlab`, stop: "create-issue is GitHub-only. This remote is GitLab."
2. Draft one issue with an imperative title under 72 characters:
   ```markdown
   ## What
   [The follow-up, one or two sentences.]

   ## Why later
   [Why it is not part of the current change.]

   ## Notes
   [File, symbol, or constraint to remember. Omit if empty.]
   ```
3. Show the draft in chat and wait for approval. Do not create it yet.
4. Create it with `gh issue create --title "<title>" --body "<body>"
   --assignee @me`. Add labels only when the user names them.
5. Print the issue URL and continue the original work. Do not start the parked
   item.
