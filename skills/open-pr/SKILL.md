---
name: open-pr
description: >-
  Pushes the current branch, runs tests, and opens a GitHub pull request.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Open PR

Push the current branch, run tests, and create a new pull request on GitHub.

## Prerequisites

- `git` must be available
- `gh` CLI must be installed and authenticated — verify with `gh auth status`
- If `gh` is missing: "gh CLI is required. Install it from https://cli.github.com/."

## Steps

### 1. Check branch state

```bash
git branch --show-current
git remote show origin | grep "HEAD branch"
git status --porcelain
```

- If current branch is `main`, `master`, or the remote default branch — stop: "Cannot open a PR from the default branch. Switch to a feature branch first."
- If `git status --porcelain` returns any output — stop: "Uncommitted changes detected. Commit or stash them before opening a PR."

### 2. Check for existing PR

```bash
gh pr list --head <branch-name> --state open --json number,url --jq '.[0] // empty'
```

- If a PR is found — stop: "A PR already exists for this branch: <url>. Use update-pr to modify it."

### 3. Push the branch

```bash
git push -u origin <branch-name>
```

- If push fails — stop and show the exact error.

### 4. Run tests

Detect the test setup from project files:

- `package.json` with a `test` script → identify the test command and run it
- `pytest.ini`, `pyproject.toml`, or `setup.py` → `pytest`
- `Makefile` with a `test` target → `make test`
- If none found → skip tests entirely; omit the Automated sub-section from the PR body

Run the detected command and capture the result (pass/fail, test count).

- If tests fail — stop: "Tests failed. Fix the failures before opening a PR." Show the output.

### 5. Derive title and body

Run the following to gather branch data:

```bash
git log origin/<default-branch>..HEAD --oneline
git log origin/<default-branch>..HEAD --format="%s %b"
git diff origin/<default-branch>..HEAD --stat
```

**Title** — use conventional commits format:

```
type(scope?): summary
```

Infer `type` from commit messages. Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`. Infer `scope` from the files changed if it adds clarity. Keep the summary under 72 characters.

**Body** — follow the Output Format section below. Derive every field from the git data. Leave no unfilled placeholders.

### 6. Create the PR

```bash
gh pr create \
  --title "<title>" \
  --body "<body>" \
  --assignee @me
```

Only add `--reviewer <username>` if the user explicitly names a reviewer.

### 7. Report

Print the PR URL returned by `gh pr create`. Note any follow-up the user still needs to do manually.

---

## Output Format

```markdown
## Summary
[What changed and why — 2–3 sentences derived from commit messages and diff.]

## Changes
- [Specific action taken, not just a filename]
- [Specific action taken]

## Testing
**Automated**
- [x] [test command] passed ([N] tests)

**Manual**
- [ ] [UI or user-facing change to verify]

## Notes
[Risks, follow-ups, rollout notes, or reviewer context.]

Closes #[issue-number]
```

**Rules:**
- `## Notes` — omit entirely if there is nothing useful to say
- `Closes #[issue-number]` — include only if an issue number appears in the conversation. Omit otherwise; do not leave a placeholder
- `**Automated**` sub-section — omit if no test suite was detected or run
- `**Manual**` sub-section — omit if the diff contains no UI or user-facing changes
- `## Testing` — omit entirely if both sub-sections would be empty
- Never leave any placeholder text unfilled in the final output

---

## Failure Conditions

| Condition | Message |
|---|---|
| `gh` CLI not installed | "gh CLI is required. Install it from https://cli.github.com/." |
| Not authenticated | "gh CLI is not authenticated. Run gh auth login first." |
| On default branch | "Cannot open a PR from the default branch. Switch to a feature branch first." |
| Uncommitted changes | "Uncommitted changes detected. Commit or stash them before opening a PR." |
| PR already exists | "A PR already exists for this branch: <url>. Use update-pr to modify it." |
| Push failed | Show the exact git error and stop. |
| Tests failed | "Tests failed. Fix the failures before opening a PR." Show test output. |
