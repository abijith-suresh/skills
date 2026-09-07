---
name: create-issue
description: >-
  Files one GitHub issue to capture a later thought from the current work so
  it is not lost.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Create issue

Capture one follow-up as a GitHub issue on the current repo. This is a
parking lot, not a plan breakdown. Personal GitHub only. Do not use this
on GitLab.

## Prerequisites

- `git` must be available
- `gh` CLI must be installed and authenticated. Verify with `gh auth status`.
- Origin must be GitHub. Run `git remote get-url origin`. If the URL
  contains `gitlab`, stop.

## Steps

### 1. Identify the thought

Use what the user just named, or a leftover the conversation turned up that
is out of scope for the current work. One issue, one thought. If nothing is
worth parking, say so and stop.

### 2. Draft

Title: imperative, under 72 characters.

Body:

```markdown
## What
[The follow-up, one or two sentences. Include the file, symbol, or
constraint to remember.]

## Why later
[Why it is not part of the current change.]
```

No Notes section. If a heading would be empty, omit it.

Write the body to a temp file. Pass `--body-file`. Do not interpolate
markdown through a quoted `--body`.

### 3. Create

If the user named the thought, create it. Do not wait for a second
approval.

If you inferred a leftover they did not name, show the draft and wait.

```bash
gh issue create --title "<title>" --body-file <temp-body> --assignee @me
```

Add labels only when the user names them. Do not invent a label vocabulary.

### 4. Report

Print the issue URL. Then continue the original work. Do not start
implementing the parked item.

## Rules

- One issue per invocation
- Create immediately when the thought was named. Preview only when inferred
- Never turn a plan into a set of tickets
- Never switch the current branch or commit
- Never create GitLab issues

## Failure conditions

| Condition | Message |
|---|---|
| `gh` CLI not installed | "gh CLI is required. Install it from https://cli.github.com/." |
| Not authenticated | "gh CLI is not authenticated. Run gh auth login first." |
| Origin is GitLab | "create-issue is GitHub-only. This remote is GitLab." |
| Nothing worth parking | Say so and stop. |
