---
name: open-pr
description: >-
  Push the current branch and open a pull request or merge request.
  Detects GitHub vs GitLab from the remote URL and uses the right
  method and description format for each. Use after committing: "open
  a PR", "open an MR", "create a PR", "create an MR", "push and open
  a PR", "submit for review".
---

# Open PR

Detect platform. Push. Open PR or MR with the right format.

## Workflow

### 1. Detect platform

Run `git remote -v`.

- Remote URL contains `github.com` → GitHub
- Remote URL contains `gitlab` → GitLab

For GitLab: check whether a ticket number is in the conversation.
If not, ask: "What's the ticket number?"

### 2. Check branch state

Run `git status` and confirm:
- There are no uncommitted changes (if there are, stop and tell the user)
- The current branch is not main, master, or the repo's default branch
  (if it is, stop and ask which branch to push to)

### 3. Push and open

**GitHub:**

```bash
# Push branch
git push -u origin <branch-name>

# Open PR
gh pr create \
  --title "<title>" \
  --body "<body>"
```

**GitLab:**

```bash
git push \
  -o merge_request.create \
  -o "merge_request.title=TICKET-NO: <title>" \
  -o "merge_request.description=<body>" \
  -o "merge_request.target_branch=<target>" \
  origin <branch-name>
```

The target branch defaults to the repo's default branch unless the
user specifies otherwise.

### 4. Write the description

**GitHub PR format:**

Title: short imperative sentence describing what the PR does.

Body:
```
[2–3 sentences describing what changed and why. Plain language. What
problem does this solve and what approach was taken?]

**Preview Testing**
- [ ] [Specific user-facing scenario to verify in preview]
- [ ] [Edge case or error state to check]
- [ ] [Any regression scenario relevant to what changed]
```

Derive the testing checklist from the actual changes — specific flows
tied to what was modified, not generic items.

**GitLab MR format:**

Title: `TICKET-NO: What this is about`
(Plain sentence after the ticket prefix, no brackets, no "feat:")

Body:
```
[One paragraph: what this change does and why it was needed. 2–3
sentences. Answer what and why in plain language.]

**Changes**
- [Specific action — "add validation for X", not just "update Z"]
- [Another specific change]

**Ticket:** TICKET-NO
```

Rules for both:
- No filler sections unless the user asks
- Each Changes bullet is a distinct action, not a file name
- Total body is scannable in 15 seconds

### 5. Report

Print the PR or MR URL. Done.

## Rules

- Never push to main, master, or the default branch directly
- Never open a PR/MR if there are uncommitted changes
- Always derive the testing checklist from what actually changed
- For GitLab: always include the ticket in the title and body
