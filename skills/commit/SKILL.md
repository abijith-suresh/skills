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

2. Read `git status` and `git diff HEAD`; read every changed file, tracked and
   untracked. Do not include `PLAN.md`, `IMPROVE.md`, `REVIEW.md`, or
   `INVESTIGATION.md` unless the user explicitly asks. Scan the diff for
   secrets, tokens, and private details; if any appear, stop and ask before
   committing anything.

3. Group the changes by intent. Separate a feature from the refactor that made
   room for it, a fix from unrelated cleanup, generated files from hand-written
   code, and unrelated modules with different reasons to change. Untracked new
   files group with the intent they belong to. When in doubt, split.

4. For each group:

   ```bash
   git add <files>
   git commit -m "type(scope?): imperative summary"
   ```

   Stage explicit paths; never `git add .` or `git add -A`. Before writing
   messages, read what the repo enforces: its commitlint config, commit-style
   docs, or the last `git log --oneline -10`. Types the repo allows win; when
   it names none, the standard types are `feat`, `fix`, `docs`, `refactor`,
   `perf`, `test`, `build`, `ci`, and `chore`. Use imperative, lowercase
   summaries with no trailing period. Scope is optional; use it only when it
   sharpens meaning. Add a body only when the why is not obvious, and give the
   why the subject cannot carry instead of restating the subject. If a message
   needs `and` to join unrelated ideas, split the commit.

   `fix: update auth and session code` names work and makes no claim about the
   change. `fix(auth): prompt again when the refresh token expires` names the
   behavior the user will look for.

   When a pre-commit or commit-msg hook rejects a commit, fix the failure,
   re-stage the files, and commit again with a fresh message. Never amend, and
   never skip hooks with `--no-verify`. Never add `Co-Authored-By` or
   "Generated with" footers; attribution lives outside commit messages.

5. Verify before reporting. Re-read `git status` and `git log --oneline`, then
   report the commits you made, name any staged or unstaged changes that remain
   and why, and tell the user to run `pr` next when the branch is ready.
