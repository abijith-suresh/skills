---
name: open-pr
description: 'Use when the user says "open PR".'
metadata:
  summary: "Create or update the GitHub pull request for this branch."
---

# Open PR

Push the current branch, then create or update its GitHub pull request. This is
personal GitHub; squash merge means the PR title becomes the commit on the
default branch. This skill does not commit. If the work is uncommitted, stop
and tell the user to run `commit` first.

## Title and body

Derive the title from the **net diff**, not the first commit:
`type(scope?): imperative summary`.

Use `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`,
or `chore`. Keep it lowercase, imperative, under 72 characters, and without a
trailing period. Scope only when it sharpens meaning. If the title needs `and`
to join unrelated ideas, stop and say the branch should be split.

```markdown
## Why
[The problem or outcome. One short paragraph. Do not restate the title.]

## How
[Only if the approach is not obvious from the diff.]

## Out of scope
[Only if a reviewer would reasonably ask why something was left out.]

Closes #123
```

Omit a heading when it has nothing to say. Add `Closes` only for an issue in
the conversation or a known linked issue; never invent one. Do not add a
Testing section; CI is the automated record. One extra line under Why is
allowed only when a human must check something CI cannot.

Do not restate the title, list files, add fake checklists, use local paths, or
keep a Notes section. Ignore `.github/pull_request_template.md`; this skill is
the convention. Write the body to a temp file and pass `--body-file`, never a
quoted `--body`.

## Steps
1. Check the branch:
   ```bash
   git branch --show-current
   git symbolic-ref refs/remotes/origin/HEAD --short
   git status --porcelain
   ```
   On the default branch, stop: "Cannot open a PR from the default branch.
   Switch to a feature branch first." If `git status --porcelain` prints
   anything, stop: "Uncommitted changes detected. Commit or stash them before
   opening a PR."

2. Push, and stop with the exact error if it fails:
   ```bash
   git push -u origin <branch-name>
   ```

3. Look for an existing PR, then read the full net diff:
   ```bash
   gh pr view --json number,url
   git diff origin/<default-branch>..HEAD
   ```
   No PR is fine; a second PR never is. Regenerate the title and body from the
   net diff; do not preserve an old body to tweak it.

4. Create with the first command if there is no PR; update with the second:
   ```bash
   gh pr create --title "<title>" --body-file <temp-body> --assignee @me
   gh pr edit <number> --title "<title>" --body-file <temp-body>
   ```
   Create ready, not draft; leave an existing PR's draft state alone.

5. Print the URL and say whether you created or updated the PR.
