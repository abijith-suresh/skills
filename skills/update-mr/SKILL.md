---
name: update-mr
description: >-
  Regenerates the title and body of the open GitLab merge request.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Update MR (GitLab)

Regenerate the title and body of the existing merge request for the current branch.

## Prerequisites

- `glab` CLI must be installed and authenticated — verify with `glab auth status`.
- If `glab` is missing: "glab CLI is required. Install it from https://gitlab.com/gitlab-org/cli#installation."
- Ticket number required in the branch name or conversation.
- The current branch must already have an open MR on GitLab.
- Any new commits should already be pushed before invoking this skill.

## Steps

### 1. Check branch state

```bash
git branch --show-current
git remote show origin | grep "HEAD branch"
```

- If current branch is `main`, `master`, or the remote default branch — stop: "Cannot update an MR from the default branch. Switch to the correct feature branch first."

### 2. Detect existing MR

```bash
glab mr list --source-branch <branch-name> -F json
```

Parse the JSON output. If the array is empty — stop: "No open MR found for this branch. Use open-mr to create one."
If an MR is found — note its `iid` and proceed.

### 3. Derive title and body

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

### 4. Update the MR

```bash
glab mr update <iid> \
  --title "<title>" \
  --description "<body>" \
  --yes
```

### 5. Report

Print the MR URL and explicitly state that the existing MR was updated, not a new one created. Note any follow-up the user still needs to do manually.

---

## Failure Conditions

| Condition | Message |
|---|---|
| `glab` CLI not installed | "glab CLI is required. Install it from https://gitlab.com/gitlab-org/cli#installation." |
| Not authenticated | "glab CLI is not authenticated. Run glab auth login first." |
| On default branch | "Cannot update an MR from the default branch. Switch to the correct feature branch first." |
| No open MR found | "No open MR found for this branch. Use open-mr to create one." |
