---
name: open-pr
description: >-
  Pushes the current branch and creates or updates the GitHub pull request
  for it.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Open PR

Push the current branch. Create a GitHub pull request if this branch has
none. Update title and body if it already has one. Personal GitHub. Squash
merge: the title is the commit that will land on the default branch.

This skill does not commit. If the work is uncommitted, stop and tell the
user to use `commit` first.

## Prerequisites

- `git` must be available
- `gh` CLI must be installed and authenticated. Verify with `gh auth status`.
- If `gh` is missing: "gh CLI is required. Install it from https://cli.github.com/."

## Title

Conventional commit from the **net diff**, not from the first commit on the
branch:

```
type(scope?): summary
```

- Imperative, lowercase, no period
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`,
  `ci`, `chore`
- Scope only when it sharpens meaning
- Under 72 characters
- If the title needs `and` to join unrelated ideas, stop and say the branch
  should be split

## Body

```markdown
## Why
[The problem or the outcome. One short paragraph. Do not restate the title.]

## How
[Only if the approach is not obvious from the diff.]

## Out of scope
[Only if a reviewer would reasonably ask why something was left out.]

Closes #123
```

**Omit a heading when it has nothing to say.** `Closes` only when an issue
number is in the conversation or a linked GitHub issue is already known. Do
not invent `Closes`. Do not add a Testing section. CI is the automated
record. One extra line under Why is allowed only when a human must check
something CI cannot.

Forbidden in the body:

- Restating the title
- File-list bullets (`Updated Foo.ts`, `Added tests`)
- Fake checklists
- Local disk paths
- A Notes dump because the template used to have Notes

Ignore `.github/pull_request_template.md`. This skill is the convention.

Write the body to a temp file and pass `--body-file`. Do not interpolate
markdown through a quoted `--body`.

## Steps

### 1. Check branch state

```bash
git branch --show-current
git remote show origin | grep "HEAD branch"
git status --porcelain
```

- Default branch (`main`, `master`, or the remote HEAD): stop. "Cannot open
  a PR from the default branch. Switch to a feature branch first."
- `git status --porcelain` has output: stop. "Uncommitted changes detected.
  Commit or stash them before opening a PR."

### 2. Push

```bash
git push -u origin <branch-name>
```

If push fails, stop and show the exact error.

### 3. Find an existing PR

```bash
gh pr view --json number,url --jq '{number,url}'
```

If this errors because there is no PR, treat that as missing. Do not create
a second PR when one exists.

### 4. Derive title and body

```bash
git log origin/<default-branch>..HEAD --oneline
git diff origin/<default-branch>..HEAD
git diff origin/<default-branch>..HEAD --stat
```

Read the **full diff**. Infer the title from that intent. Regenerate the
body from scratch every time, including updates. Do not preserve an old
body to "tweak" it.

### 5. Create or update

**No PR:**

```bash
gh pr create \
  --title "<title>" \
  --body-file <temp-body> \
  --assignee @me
```

Only add `--reviewer` when the user names a reviewer. Open ready, not draft.

**PR exists:**

```bash
gh pr edit <number> \
  --title "<title>" \
  --body-file <temp-body>
```

Do not change draft vs ready on an existing PR.

### 6. Report

Print the URL. Say whether this created a PR or updated one.

## Failure Conditions

| Condition | Message |
|---|---|
| `gh` CLI not installed | "gh CLI is required. Install it from https://cli.github.com/." |
| Not authenticated | "gh CLI is not authenticated. Run gh auth login first." |
| On default branch | "Cannot open a PR from the default branch. Switch to a feature branch first." |
| Uncommitted changes | "Uncommitted changes detected. Commit or stash them before opening a PR." |
| Push failed | Show the exact git error and stop. |
| Title is not one intent | Stop and say the branch should be split before opening. |
