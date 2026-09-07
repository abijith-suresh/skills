---
name: open-mr
description: >-
  Pushes the current branch and creates or updates the GitLab merge request
  for it. Requires a ticket number.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Open MR (GitLab)

Push the current branch. Create a GitLab merge request if this branch has
none. Update title and body if it already has one. Work GitLab. The ticket
lives in Jira. The title must carry that key.

This skill does not commit. If the work is uncommitted, stop and tell the
user to use `commit-work` first.

## Prerequisites

- `glab` CLI must be installed and authenticated. Verify with `glab auth status`.
- If `glab` is missing: "glab CLI is required. Install it from https://gitlab.com/gitlab-org/cli#installation."
- Ticket number from the branch name or the conversation. If neither has
  one, stop and ask.

## Title

```
TICKET-123: Short description
```

Examples:

- `PROJ-214: Retry payment webhooks`
- `PROJ-214: Fix target branch detection`

Do not use conventional-commit types in the title. The Jira key is the
prefix. Derive the description from the **net diff**, not from the first
commit on the branch.

## Body

```markdown
## Summary
[Why this ticket needed code, and what is now true. Two or three sentences.
Do not write "this MR implements the ticket."]

## What changed
- [User-visible behaviour, API or data contract, or risk]
- [Same bar. Not a file name.]
```

Omit **What changed** when every bullet would only name a file. Then Summary
is enough.

Forbidden:

- File-list bullets (`Updated Foo.ts`, `Added tests`)
- A Testing checklist. CI is the automated record. One concrete QA line
  under Summary is allowed only when you will actually do that step
  ("Refund a captured payment in staging.")
- A References or Jira link section. The key is already in the title
- Local disk paths

Write the body to a temp file. Pass it as the description. Do not interpolate
markdown through a quoted `--description`.

## Steps

### 1. Check branch state

```bash
git branch --show-current
git remote show origin | grep "HEAD branch"
git status --porcelain
```

- Default branch: stop. "Cannot open an MR from the default branch. Switch
  to a feature branch first."
- `git status --porcelain` has output: stop. "Uncommitted changes detected.
  Commit or stash them before opening an MR."

### 2. Push

```bash
git push -u origin <branch-name>
```

If push fails, stop and show the exact error. Do not pass `--push` to
`glab mr create` after this.

### 3. Find an existing MR

```bash
glab mr list --source-branch <branch-name> -F json
```

If the array is non-empty, note the `iid` and URL. Do not create a second MR.

### 4. Derive title and body

```bash
git log origin/<default-branch>..HEAD --oneline
git diff origin/<default-branch>..HEAD
git diff origin/<default-branch>..HEAD --stat
```

Read the **full diff**. Regenerate title and body from scratch every time,
including updates.

### 5. Create or update

**No MR:**

```bash
glab mr create \
  --title "<title>" \
  --description-file <temp-body> \
  --yes
```

Open ready, not draft.

**MR exists:**

```bash
glab mr update <iid> \
  --title "<title>" \
  --description-file <temp-body> \
  --yes
```

If `glab` rejects `--description-file` on update, pass the file contents
with `--description`. Do not hand-quote a multiline body on the command
line.

### 6. Report

Print the URL. Say whether this created an MR or updated one.

## Failure Conditions

| Condition | Message |
|---|---|
| `glab` CLI not installed | "glab CLI is required. Install it from https://gitlab.com/gitlab-org/cli#installation." |
| Not authenticated | "glab CLI is not authenticated. Run glab auth login first." |
| On default branch | "Cannot open an MR from the default branch. Switch to a feature branch first." |
| Uncommitted changes | "Uncommitted changes detected. Commit or stash them before opening an MR." |
| No ticket number | "A ticket number is required in the branch name or conversation." |
| Push failed | Show the exact git error and stop. |
