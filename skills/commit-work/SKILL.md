---
name: commit-work
description: 'Use when the user says "commit work".'
metadata:
  summary: "Create conventional commits with a ticket number in every scope."
---

# Commit Work

Turn the current diff into conventional commits with a ticket number in every
scope. Do not push, and do not commit on `main`, `master`, `develop`, or the
remote default branch unless the user explicitly overrides this guardrail.
Execute the split without asking.

## Steps

1. Check `git branch --show-current` against the remote default from
   `git symbolic-ref refs/remotes/origin/HEAD --short`. If it is the default or
   a shared integration branch, stop and ask for a feature branch.

2. Resolve the ticket. Use the key from the branch, MR, or conversation. Ask
   for it only when none of them has one.

3. Read `git status` and `git diff HEAD`; read every changed file. Do not include
   `PLAN.md`, `IMPROVE.md`, `REVIEW.md`, or `INVESTIGATION.md` unless the user
   explicitly asks.

4. Group the changes by intent. Separate a feature from the refactor that made
   room for it, a fix from unrelated cleanup, generated files from hand-written
   code, and unrelated modules with different reasons to change. When in doubt,
   split.

5. For each group:

   ```bash
   git add <files>
   git commit -m "type(TICKET-123): imperative summary"
   ```

   Stage explicit paths; never `git add .` or `git add -A`. Use imperative,
   lowercase summaries with no trailing period. The ticket belongs in the scope
   position. Add a body only when the why is not obvious. Common types are
   `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`,
   and `chore`. If a message needs `and` to join unrelated ideas, split the
   commit.

6. Report the commits you made and whether any staged or unstaged changes
   remain.
