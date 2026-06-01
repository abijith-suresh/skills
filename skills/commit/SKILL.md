---
name: commit
description: >-
  Create clean conventional commits from the current diff. Use when asked
  to "commit these changes", "make a commit", "commit this", or "create
  commits". Stops after committing — does not push or open a PR.
---

# Commit

Split by intent. One commit per reason to change.

## Goals

- One intent per commit
- Conventional commit messages, imperative mood
- Honest splits — never bundle unrelated changes behind a broad message
- Branch safety — never commit directly on `main`, `master`, `develop`, or
  the remote default branch
- For GitLab/work repos: ticket number in every commit scope

## Workflow

### 1. Check branch safety first

Run:

- `git branch --show-current`
- `git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@'`
- or `git remote show origin` if `origin/HEAD` is unavailable

If the current branch is `main`, `master`, `develop`, or the remote
default branch, stop.

Warn the user and ask whether to create or switch to a feature branch
before committing. Do not commit on those branches unless the user
explicitly overrides the guardrail.

### 2. Detect platform

Run `git remote -v`.

- Remote URL contains `gitlab` → work repo
- Otherwise → personal repo

For work repos, a ticket number is required in every commit scope:
`type(TICKET-123): summary`

If the ticket number is not already known from the branch, PR, or
conversation, ask for it before continuing.

### 3. Inspect the diff

Run `git status` and `git diff HEAD`. Read every changed file.

Never include these agent-generated working files unless the user
explicitly asks:

- `PLAN.md`
- `IMPROVE.md`
- `REVIEW.md`
- `INVESTIGATION.md`

### 4. Plan the split

Group changes by intent. A good split separates things like:

- a new feature from the refactoring that made room for it
- a bug fix from unrelated formatting or cleanup changes
- generated files from hand-written code
- changes in unrelated modules with different reasons to change

When in doubt, split. A slightly smaller commit is easier to review and
safer to revert.

Plan the split, then proceed directly to committing. Do not ask for
permission — make a good judgement call and execute.

### 5. Stage and commit each group

For each group in order:

1. Stage only the relevant files: `git add <files>`
2. Write the commit message
3. Commit: `git commit -m "message"` (or add a body when the why is not obvious)

**Personal format**

`type(scope?): imperative summary`

Examples:

- `feat: add investigation workflow`
- `fix(open-pr): correct GitLab target option`

**Work format**

`type(TICKET-123): imperative summary`

Examples:

- `feat(PROJ-214): add investigation workflow`
- `fix(PROJ-214): correct GitLab target option`

Common types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`
- `build`
- `ci`
- `chore`

Conventional Commits gives semantic meaning primarily to `feat`, `fix`,
and `BREAKING CHANGE`. The rest are common types used by convention, not
a hard mandatory list from the spec.

Message rules:

- Imperative mood: `add X`, not `added X` or `adding X`
- Lowercase summary, no period at the end
- Scope is optional on personal commits; use it only when it sharpens meaning
- Use a body only when the why is not obvious from the summary alone
- If the message needs `and` to connect unrelated ideas, split the commit

### 6. Report

After all commits, show the list of commits made and confirm whether any
staged or unstaged changes remain.

## Rules

- Never commit unrelated changes together
- Never push — that is a separate step
- Never include `PLAN.md`, `IMPROVE.md`, `REVIEW.md`, or `INVESTIGATION.md`
  unless the user explicitly asks
- Do not ask for permission to commit — plan the split, make a judgement call, and execute
- Call out risky git operations before taking them
