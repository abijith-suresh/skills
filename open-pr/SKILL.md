---
name: open-pr
description: >-
  Push the current branch and open or update a pull request on GitHub using
  the gh CLI. Detects whether a PR already exists for the current branch
  and updates it instead of creating a duplicate. Use when asked to "open a
  PR", "create a PR", "update a PR", or "push and open a PR" in a GitHub
  repository.
---

# Open PR (GitHub)

Push, detect, create or update, report.

## Prerequisites

- `gh` CLI must be installed and authenticated (`gh auth status`).
- If `gh` is missing, error: "gh CLI is required. Install it from https://cli.github.com/."

## 1. Check branch and working tree state

Run `git status`, `git branch --show-current`, and detect the remote default branch
via `git remote show origin`.

Stop and tell the user if:

- There are uncommitted changes
- The current branch is `main`, `master`, or the remote default branch — ask which
  feature branch to use instead

Never push directly to the default branch.

## 2. Push the branch

```bash
git push -u origin <branch-name>
```

If push fails, stop and show the error.

## 3. Detect existing PR

Check whether a PR already exists for this branch:

```bash
gh pr list --head <branch-name> --state open --json number --jq '.[0].number // empty'
```

- If a number is returned → an existing PR exists. Note it and proceed to **update**.
- If empty → no existing PR. Proceed to **create**.

## 4. Prepare title and body

### Title format

Use conventional commits:

```
type(scope?): summary
```

Examples:
- `feat: add investigation workflow`
- `fix(open-pr): correct target branch detection`
- `chore: update dependencies`

Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`

### PR body template

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

Closes #[issue-number]
```

#### Rules

- Derive the Testing checklist from the real changes, not a generic template
- Each Changes bullet describes an action, not just a file name
- Omit `Notes` if there is nothing useful to say
- `Closes #[issue-number]`: include only if an issue number is present in the
  conversation context. If no issue was mentioned, omit this line entirely —
  do not leave a placeholder

## 5. Create or update

### Create (no existing PR)

```bash
gh pr create \
  --title "<title>" \
  --body "<body>" \
  --assignee @me
```

Only add `--reviewer <username>` if the user names a specific reviewer.

### Update (existing PR found)

```bash
gh pr edit <number> \
  --title "<title>" \
  --body "<body>"
```

## 6. Report

Print the PR URL returned by the command. If updating, explicitly note that the
existing PR was updated (not a new one). Note any follow-up the user still
needs to do manually.
