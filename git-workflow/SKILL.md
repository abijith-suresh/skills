---
name: git-workflow
description: Full git branch → commit → PR workflow. Use when the user asks to "cut a branch", "create a branch and commit", "push and open a PR", "do a git workflow", "commit my changes", or any multi-step git operation involving branching, staging, committing, pushing, and/or opening a pull request. Also triggered by "conventional commit", "commit with message", or "push this".
disable-model-invocation: true
---

# Git Workflow

A reusable, end-to-end git workflow: branch → stage → commit → push → PR.

## When to Use

Use this skill when the user wants to:

- Cut a new branch and commit work to it
- Stage, commit, and push changes
- Open a pull request
- Do any combination of the above steps
- Write a conventional commit message

## Workflow Steps

### Step 1 — Understand current state

Before doing anything, check the current git state:

```bash
git status
git branch --show-current
git log --oneline -5
```

Ask the user if you're unsure about:
- Which branch to create / what to name it
- What the commit scope/message should be
- Whether to push and/or open a PR

### Step 2 — Create branch (if needed)

If the user wants a new branch:

```bash
git checkout -b <type>/<short-description>
```

Branch naming convention: `<type>/<kebab-case-description>`

Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`

Examples:
- `feat/add-dark-mode`
- `fix/login-redirect`
- `chore/update-dependencies`

### Step 3 — Stage changes

Stage only the relevant files (prefer specific files over `git add .`):

```bash
# Specific files (preferred):
git add path/to/file1 path/to/file2

# Or all tracked changes:
git add -u

# Or everything (use with care):
git add .
```

Review what will be committed:

```bash
git diff --staged --stat
```

### Step 4 — Write a conventional commit

Commit message format:

```
<type>(<scope>): <short summary>

[optional body — explain WHY, not WHAT]

[optional footer — breaking changes, closes #issue]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`

**Rules:**
- Summary line: imperative mood, ≤ 72 characters, no trailing period
- Scope: lowercase, matches the subsystem changed (e.g., `auth`, `api`, `ui`)
- Body: wrap at 72 chars, explain motivation and context
- Breaking change: add `BREAKING CHANGE:` in footer, or `!` after type

**Examples:**

```
feat(auth): add OAuth2 login via GitHub
```

```
fix(api): handle null response from payment gateway

The payment API can return null when the session expires.
Previously this caused an unhandled exception. Now we return
a 402 with a user-friendly error message.

Closes #142
```

```
refactor!: rename UserProfile to Profile

BREAKING CHANGE: UserProfile component has been renamed to Profile.
Update all imports accordingly.
```

Commit command (always use HEREDOC for multi-line messages):

```bash
git commit -m "$(cat <<'EOF'
feat(scope): summary here

Optional body explaining why.

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Step 5 — Push

```bash
git push -u origin <branch-name>
```

If the branch already tracks a remote:

```bash
git push
```

### Step 6 — Open a pull request (if requested)

Use the `gh` CLI:

```bash
gh pr create \
  --title "feat(scope): short summary" \
  --body "$(cat <<'EOF'
## Summary
- What changed and why

## Test plan
- [ ] Manual test step 1
- [ ] Manual test step 2

🤖 Generated with Claude Code
EOF
)"
```

Or open the PR in the browser for manual editing:

```bash
gh pr create --web
```

## Confirmation Before Side Effects

Because this skill involves side effects (creating branches, pushing, opening PRs),
**always confirm with the user before**:

1. Pushing to a remote
2. Opening a pull request
3. Force-pushing or resetting

For local-only steps (branching, staging, committing), proceed unless the user says otherwise.

## Quick Reference

| Step | Command |
|------|---------|
| New branch | `git checkout -b feat/name` |
| Stage all | `git add -u` |
| Review staged | `git diff --staged --stat` |
| Commit | `git commit -m "type(scope): summary"` |
| Push + track | `git push -u origin branch` |
| Open PR | `gh pr create --title "..." --body "..."` |
| View PR | `gh pr view --web` |
