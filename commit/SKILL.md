---
name: commit
description: >-
  Inspect the diff, split changes by intent, and create clean conventional
  commits. Detects GitLab repos and adds the ticket number to every commit
  scope automatically. Use after implementation is done: "commit these
  changes", "make a commit", "commit this", "create commits". Stops after
  committing — does not push or open a PR.
---

# Commit

Split by intent. One commit per reason to change.

## Goals

- One intent per commit
- Conventional commit messages, imperative mood
- Honest splits — never bundle unrelated changes behind a broad message
- For GitLab repos: ticket number in every commit scope

## Workflow

### 1. Detect platform

Run `git remote -v`. If the remote URL contains `gitlab`, this is a
work repo. If not, this is a personal repo.

For work repos: check whether a ticket number has been mentioned in
this conversation. If not, ask for it now before doing anything else:
"What's the ticket number for this?"

### 2. Inspect the diff

Run `git status` and `git diff HEAD`. Read every changed file.

### 3. Plan the split

Group changes by intent. A good split separates things like:

- A new feature from the refactoring that made room for it
- A bug fix from unrelated formatting changes
- Generated files from hand-written code
- Changes in unrelated modules with different reasons to change

When in doubt, split. A slightly smaller commit is always easier to
review and safer to revert.

Present the proposed split to the user before committing:
"I'm going to make N commits: [list]. Go ahead?"

### 4. Stage and commit each group

For each group in order:

1. Stage only the relevant files: `git add <files>`
2. Write the commit message

**Personal format:**
`type: imperative summary`

**Work format:**
`type(TICKET-NO): imperative summary`

Available types: feat, fix, refactor, docs, test, chore, ci, build, perf

Message rules:
- Imperative mood: "add X" not "added X" or "adding X"
- Lowercase summary, no period at the end
- No scope for personal unless it meaningfully narrows the message
- Body only when the *why* isn't obvious from the summary alone
- If the message needs "and" to connect unrelated things, split the commit

3. Commit: `git commit -m "message"` (or with `-m` body for multi-line)

### 5. Report

After all commits: show the list of commits made and confirm there are
no leftover staged or unstaged changes that need another commit.

## Rules

- Never commit unrelated changes together
- Never push — that is a separate step
- Never include PLAN.md or any agent-generated planning files in
  commits unless the user explicitly asks
- Always confirm the proposed split before committing
- Call out risky git operations before taking them
