---
name: open-pr
description: >-
  Push the current branch and open a pull request or merge request.
  Detects GitHub vs GitLab from the remote URL and uses the right title
  format and creation flow for each. Use after committing: "open a PR",
  "open an MR", "create a PR", "create an MR", "push and open a PR",
  "submit for review".
---

# Open PR

Detect platform. Push safely. Open the PR or MR with the right title and body.

## Workflow

### 1. Detect platform

Run `git remote -v`.

- Remote URL contains `github.com` → GitHub
- Remote URL contains `gitlab` → GitLab

For GitLab/work repos, a ticket number is required for the MR title:
`TICKET-123: Title`

If the ticket number is not already known from the branch, issue, or
conversation, ask for it before continuing.

### 2. Check branch and working tree state

Run `git status`, `git branch --show-current`, and detect the remote
default branch with `origin/HEAD` or `git remote show origin`.

Stop and tell the user if:

- there are uncommitted changes
- the current branch is `main`, `master`, or the remote default branch

Ask which feature branch to use instead. Never push directly to the
default branch.

### 3. Decide the target branch

Default the PR/MR target to the remote default branch unless the user
specifies another branch.

### 4. Write the title

**GitHub / personal PR title**

`type(scope?): summary`

Examples:

- `feat: add investigation workflow`
- `fix(open-pr): correct GitLab target option`

**GitLab / work MR title**

`TICKET-123: Title`

Examples:

- `PROJ-214: Add investigation workflow`
- `PROJ-214: Correct GitLab target option`

### 5. Write one shared body

Use this structure for both GitHub PRs and GitLab MRs:

```markdown
## Summary
[What changed and why. 2–3 concise sentences.]

## Changes
- [Specific action]
- [Specific action]

## Testing
- [ ] [Specific verification step]
- [ ] [Edge case or regression check]

## Notes
[Any risks, follow-ups, rollout notes, or reviewer context. Omit this
section if there is nothing useful to say.]

## References
- Ticket/Issue: [ticket, issue, or N/A]
```

Rules for the body:

- Keep it specific to the actual branch scope
- Derive the testing checklist from the real changes, not a generic template
- Each `Changes` bullet should describe an action, not just name a file
- Omit `Notes` if there is nothing useful to say

### 6. Push and open

**GitHub**

```bash
git push -u origin <branch-name>

gh pr create \
  --title "<title>" \
  --body "<body>" \
  --assignee @me
```

Only request reviewers if the user names someone.

**GitLab**

```bash
git push \
  -o merge_request.create \
  -o "merge_request.title=TICKET-123: <title>" \
  -o "merge_request.description=<body>" \
  -o "merge_request.target=<target>" \
  origin <branch-name>
```

If assignment is desired and the GitLab username is known, add:

```bash
-o "merge_request.assign=<username>"
```

If the GitLab username is unknown, ask for it or tell the user how to
assign the MR after creation.

### 7. Report

Print the PR or MR URL and note any follow-up the user still needs to do
manually.

## Rules

- Never push to `main`, `master`, or the remote default branch directly
- Never open a PR/MR if there are uncommitted changes
- Keep the title and body aligned with the real branch scope
- Use the shared body structure for both platforms
- Keep platform-specific mechanics separate from the body format
