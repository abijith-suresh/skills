---
name: open-mr
description: >-
  Pushes the current branch and opens a GitLab merge request. Requires a
  ticket number.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Open MR (GitLab)

Push the current branch and create a new merge request on GitLab.

## Prerequisites

- `glab` CLI must be installed and authenticated — verify with `glab auth status`.
- If `glab` is missing: "glab CLI is required. Install it from https://gitlab.com/gitlab-org/cli#installation."
- Ticket number required in the branch name or conversation.

## Steps

### 1. Check branch state

```bash
git branch --show-current
git remote show origin | grep "HEAD branch"
git status --porcelain
```

- If current branch is `main`, `master`, or the remote default branch — stop: "Cannot open an MR from the default branch. Switch to a feature branch first."
- If `git status --porcelain` returns any output — stop: "Uncommitted changes detected. Commit or stash them before opening an MR."

### 2. Check for existing MR

```bash
glab mr list --source-branch <branch-name> -F json
```

Parse the JSON output. If the array is non-empty — stop: "An MR already exists for this branch. Use update-mr to modify it."

### 3. Push the branch

```bash
git push -u origin <branch-name>
```

- If push fails — stop and show the exact error.

### 4. Derive title and body

Run the following to gather branch data:

```bash
git log origin/<default-branch>..HEAD --oneline
git log origin/<default-branch>..HEAD --format="%s %b"
git diff origin/<default-branch>..HEAD --stat
```

**Title format:**

```
TICKET-123: Short description
```

Examples:
- `PROJ-214: Add investigation workflow`
- `PROJ-214: Fix target branch detection`

**MR body template:**

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

**Rules:**

- Derive the Testing checklist from the real changes, not a generic template
- Each Changes bullet describes an action, not just a file name
- Omit `Notes` if there is nothing useful to say
- No References section — the ticket is already in the title

### 5. Create the MR

```bash
glab mr create \
  --title "<title>" \
  --description "<body>" \
  --push \
  --yes
```

Note: `--push` pushes the branch first, then creates the MR. `--yes` skips the confirmation prompt.

### 6. Report

Print the MR URL returned by `glab mr create`. Note any follow-up the user still needs to do manually.

---

## Failure Conditions

| Condition | Message |
|---|---|
| `glab` CLI not installed | "glab CLI is required. Install it from https://gitlab.com/gitlab-org/cli#installation." |
| Not authenticated | "glab CLI is not authenticated. Run glab auth login first." |
| On default branch | "Cannot open an MR from the default branch. Switch to a feature branch first." |
| Uncommitted changes | "Uncommitted changes detected. Commit or stash them before opening an MR." |
| MR already exists | "An MR already exists for this branch. Use update-mr to modify it." |
| Push failed | Show the exact git error and stop. |
