---
name: commit
description: >-
  Creates conventional commits from the current diff, one intent per commit.
disable-model-invocation: true
metadata:
  featured: "true"
  opencode/autoinvoke: "false"
---

# Commit

Split by intent. One commit per reason to change.

## Goals

- One intent per commit
- Conventional commit messages, imperative mood
- Honest splits. Never bundle unrelated changes behind a broad message
- Branch safety. Never commit directly on `main`, `master`, `develop`, or
  the remote default branch

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

### 2. Inspect the diff

Run `git status` and `git diff HEAD`. Read every changed file.

### 3. Plan the split

Group changes by intent. A good split separates things like:

- a new feature from the refactoring that made room for it
- a bug fix from unrelated formatting or cleanup changes
- generated files from hand-written code
- changes in unrelated modules with different reasons to change

When in doubt, split. A slightly smaller commit is easier to review and
safer to revert.

Plan the split, then proceed directly to committing. Do not ask for
permission. Make a good judgement call and execute.

### 4. Stage and commit each group

For each group in order:

1. Stage only the relevant files: `git add <files>`
2. Write the commit message
3. Commit: `git commit -m "message"` (or add a body when the why is not obvious)

Never `git add .` or `git add -A`. Stage by path so unrelated files stay out.

**Format**

`type(scope?): imperative summary`

Examples:

- `feat(open-pr): upsert existing pull requests`
- `fix(open-pr): correct target branch detection`

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
- Scope is optional; use it only when it sharpens meaning
- Use a body only when the why is not obvious from the summary alone
- If the message needs `and` to connect unrelated ideas, split the commit

### 5. Report

After all commits, show the list of commits made and confirm whether any
staged or unstaged changes remain.

## Rules

- Never commit unrelated changes together
- Never push. That is a separate step
- Never `git add .` or `git add -A`
- Do not ask for permission to commit. Plan the split, make a judgement
  call, and execute
- Call out risky git operations before taking them
