---
name: commit
description: >-
  Create focused conventional commits from the current changes. Use when the
  user asks to commit work, split a diff into commits, or commit with a ticket
  key in every scope.
metadata:
  featured: "true"
---

# Commit

Turn the authorized changes into reviewable commits, one reason to change
per commit. This workflow ends at local commits.

## Inspect and choose scope

Read repository instructions, commit conventions, branch state, staged and
unstaged changes, and untracked files. Inspect staged changes separately;
they may belong to the user. Do not sweep unrelated work into the commit.

Determine the remote default branch. On that branch or another protected
branch, create a feature branch when the task authorizes it. Otherwise ask
for the target branch. Never commit on a protected branch by accident.

Resolve ticket conventions from repository instructions and the request.
If every scope requires a ticket, use `type(TICKET-123): summary`. Use a
key from an unambiguous branch, linked issue, or conversation. Ask if the
required key is missing or conflicts. Never invent one. Otherwise use
`type(scope?): summary`.

## Group and commit

Read the full diff and group by intent. Keep a behavior change with its
tests and necessary documentation. Separate unrelated cleanup. A commit
should describe a coherent state that can be reviewed or reverted.

Run required checks if they have not already passed on this state. Stage
explicit paths or hunks for each group. Inspect the staged diff before
committing, including deletions and generated files. Exclude secrets and
temporary investigation artifacts. Do not discard existing staging to
make the split easier.

Use an imperative, lowercase summary with no final period. Add a body for
the reason or a non-obvious tradeoff. Follow repository hooks; do not bypass
them to turn a failure into success. If a hook fails, correct the relevant
problem and inspect what remains staged before retrying.

## Return

Report each commit hash and purpose, checks run, and remaining changes.
Do not push or rewrite published history as part of committing.

When the authorized task also includes opening a review, an installed
`open-pr` can continue from the commits. Otherwise return the commit
results. Missing companion skills never prevent this workflow.
