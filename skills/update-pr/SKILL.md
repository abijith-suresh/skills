---
name: update-pr
description: >-
  Updates an existing GitHub PR's title and body. Use only when the user
  explicitly invokes the update-pr skill. Do not trigger from ordinary
  requests that mention pull requests.
---

# Update PR

Run tests and update the title and body of the existing pull request for the current branch.

## Prerequisites

- `git` must be available
- `gh` CLI must be installed and authenticated — verify with `gh auth status`
- If `gh` is missing: "gh CLI is required. Install it from https://cli.github.com/."
- The current branch must already have an open PR on GitHub
- Any new commits should already be pushed before invoking this skill

## Steps

### 1. Check branch state

```bash
git branch --show-current
git remote show origin | grep "HEAD branch"
```

- If current branch is `main`, `master`, or the remote default branch — stop: "Cannot update a PR from the default branch. Switch to the correct feature branch first."

### 2. Detect existing PR

```bash
gh pr list --head <branch-name> --state open --json number,url --jq '.[0] // empty'
```

- If no PR is found — stop: "No open PR found for this branch. Use open-pr to create one."
- If a PR is found — note the PR number and URL, proceed.

### 3. Run tests

Detect the test setup from project files:

- `package.json` with a `test` script → identify the test command and run it
- `pytest.ini`, `pyproject.toml`, or `setup.py` → `pytest`
- `Makefile` with a `test` target → `make test`
- If none found → skip tests entirely; omit the Automated sub-section from the PR body

Run the detected command and capture the result (pass/fail, test count).

- If tests fail — stop: "Tests failed. Fix the failures before updating the PR." Show the output.

### 4. Derive title and body

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

**Body** — follow the Output Format section below. Derive every field from the git data. Regenerate from scratch — do not fetch or preserve the existing PR body. Leave no unfilled placeholders.

### 5. Update the PR

```bash
gh pr edit <number> \
  --title "<title>" \
  --body "<body>"
```

### 6. Report

Print the PR URL and explicitly state that the existing PR was updated, not a new one created. Note any follow-up the user still needs to do manually.

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
| On default branch | "Cannot update a PR from the default branch. Switch to the correct feature branch first." |
| No open PR found | "No open PR found for this branch. Use open-pr to create one." |
| Tests failed | "Tests failed. Fix the failures before updating the PR." Show test output. |
