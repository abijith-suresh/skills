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
- `gh` CLI must be installed and authenticated — verify with `gh auth status`
- If `gh` is missing: "gh CLI is required. Install it from https://cli.github.com/."
- Origin must be GitHub. Run `git remote get-url origin`. If the URL contains
  `gitlab`, stop: "create-issue is GitHub-only. This remote is GitLab."

## Steps

### 1. Identify the thought

Use what the user just named, or a leftover the conversation turned up that
is out of scope for the current work. One issue, one thought. If nothing is
worth parking, say so and stop.

### 2. Draft

**Title** — imperative, under 72 characters.

**Body:**

```markdown
## What
[The follow-up, one or two sentences.]

## Why later
[Why it is not part of the current change.]

## Notes
[File, symbol, or constraint to remember. Omit this section if empty.]
```

Show the draft in chat and wait for approval. Do not create anything yet.

### 3. Create

```bash
gh issue create --title "<title>" --body "<body>" --assignee @me
```

Add labels only when the user names them. Do not invent a label vocabulary.

### 4. Report

Print the issue URL. Then continue the original work. Do not start
implementing the parked item.

## Rules

- One issue per invocation
- Never create issues before the user approves the draft
- Never turn a plan into a set of tickets
- Never switch the current branch or commit
- Never create GitLab issues
