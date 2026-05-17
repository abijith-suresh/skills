---
name: open-mr
description: >-
  Push the current branch and open or update a merge request on GitLab
  using the glab CLI. Detects whether an MR already exists for the current
  branch and updates it instead of creating a duplicate. Requires a ticket
  number in the branch name or conversation. Use when asked to "open an MR",
  "create an MR", "update an MR", or "push and open an MR" in a GitLab
  repository.
---

# Open MR (GitLab)

Push, detect, create or update, report.

## Prerequisites

- `glab` CLI must be installed and authenticated (`glab auth status`).
- If `glab` is missing, error: "glab CLI is required. Install it from
  https://gitlab.com/gitlab-org/cli#installation."
- Ticket number required in the branch name or conversation.

## 1. Ticket number

A ticket number is required for the MR title. Look for it in:
- The branch name (e.g., `feature/PROJ-214-add-login`)
- The conversation context

If no ticket number is found, ask for it before continuing.

## 2. Check branch and working tree state

Run `git status`, `git branch --show-current`, and detect the remote default branch
via `git remote show origin`.

Stop and tell the user if:

- There are uncommitted changes
- The current branch is `main`, `master`, or the remote default branch — ask which
  feature branch to use instead

Never push directly to the default branch.

## 3. Push the branch

```bash
git push -u origin <branch-name>
```

If push fails, stop and show the error.

## 4. Detect existing MR

Check whether an MR already exists for this branch:

```bash
glab mr list --source-branch <branch-name> -F json
```

Parse the JSON output. If the array is non-empty, an existing MR exists — note its
`iid` and proceed to **update**. If empty, proceed to **create**.

## 5. Prepare title and body

### Title format

```
TICKET-123: Short description
```

Examples:
- `PROJ-214: Add investigation workflow`
- `PROJ-214: Fix target branch detection`

### MR body template

```markdown
## Summary
[What changed and why. 2–3 concise sentences.]

## Changes
- [Specific action taken]
- [Specific action taken]

## Testing
- [ ] [Specific verification step]
- [ ] [Edge case or regression check]

## Notes
[Risks, follow-ups, rollout notes, or reviewer context. Omit this section if
there is nothing useful to say.]
```

#### Rules

- Derive the Testing checklist from the real changes, not a generic template
- Each Changes bullet describes an action, not just a file name
- Omit `Notes` if there is nothing useful to say
- No References section — the ticket is already in the title

## 6. Create or update

### Create (no existing MR)

```bash
glab mr create \
  --title "<title>" \
  --description "<body>" \
  --push \
  --yes
```

Note: `--push` pushes the branch first, then creates the MR. `--yes` skips
the confirmation prompt.

### Update (existing MR found)

```bash
glab mr update <iid> \
  --title "<title>" \
  --description "<body>" \
  --yes
```

## 7. Report

Print the MR URL returned by the command. If updating, explicitly note that the
existing MR was updated (not a new one). Note any follow-up the user still
needs to do manually.
