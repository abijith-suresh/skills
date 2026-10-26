---
name: commit
description: 'Use when the user says "commit".'
metadata:
  summary: "Create conventional commits from the current diff, one intent per commit."
  featured: "true"
---

# Commit

Turn the current diff into conventional commits, one intent per commit. Do not
push, and do not commit on `main`, `master`, `develop`, or the remote default
branch unless the user explicitly overrides this guardrail. Execute the split
without asking.

## Steps

1. Check `git branch --show-current` against the remote default from
   `git symbolic-ref refs/remotes/origin/HEAD --short`. If it is the default or
   a shared integration branch, stop and ask for a feature branch.

2. Read `git status` and `git diff HEAD`; read every changed file. Do not include
   `PLAN.md`, `IMPROVE.md`, `REVIEW.md`, or `INVESTIGATION.md` unless the user
   explicitly asks.

3. Group the changes by intent. Separate a feature from the refactor that made
   room for it, a fix from unrelated cleanup, generated files from hand-written
   code, and unrelated modules with different reasons to change. When in doubt,
   split.

4. For each group:

   ```bash
   git add <files>
   git commit -m "type(scope?): imperative summary"
   ```

   Stage explicit paths. Use imperative, lowercase summaries with no trailing
   period. Scope is optional; use it only when it sharpens meaning. Add a body
   only when the why is not obvious. Common types are `feat`, `fix`, `docs`,
   `style`, `refactor`, `perf`, `test`, `build`, `ci`, and `chore`. If a
   message needs `and` to join unrelated ideas, split the commit.

5. Report the commits you made and whether any staged or unstaged changes
   remain.
