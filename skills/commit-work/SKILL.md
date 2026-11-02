---
name: commit-work
description: 'Use when the user says "commit" or "commit work".'
metadata:
  summary: "Commit work as TICKET-123: short description; conventional commits only when a change has no ticket."
---

# Commit Work

Turn the current diff into commits, one intent per commit. A change that
belongs to a Jira ticket is committed as `TICKET-123: short description` with
no conventional-commit type. Only a change with no ticket uses the conventional
format. Ticketed and non-ticket changes can mix in one split; each commit
carries the format its own change needs. Do not push, and do not commit on
`main`, `master`, `develop`, or the remote default branch unless the user
explicitly overrides this guardrail. Execute the split without asking.

## Steps

1. Check `git branch --show-current` against the remote default from
   `git symbolic-ref refs/remotes/origin/HEAD --short`. If it is the default or
   a shared integration branch, stop and ask for a feature branch.

2. Resolve the ticket. Use the key from the branch, MR, or conversation. Ask
   for it only when none of them has one.

3. Read `git status` and `git diff HEAD`; read every changed file, tracked and
   untracked. Commit only what the requested work covers; leave scratch and
   working files out unless the user names them. Scan the diff for secrets,
   tokens, and private details; if any appear, stop and ask before committing
   anything.

4. Group the changes by intent. Separate a feature from the refactor that made
   room for it, a fix from unrelated cleanup, generated files from hand-written
   code, and unrelated modules with different reasons to change. Untracked new
   files group with the intent they belong to. When in doubt, split.

5. For each group:

   ```bash
   git add <files>
   git commit -m "TICKET-123: imperative summary"
   ```

   Stage explicit paths; never `git add .` or `git add -A`. When the change
   belongs to a ticket, the key leads the subject and nothing else classifies
   the commit: `UI-214: search results keep the chosen filing order`. No
   conventional-commit type in a ticketed subject. When the change has no
   ticket, use `type(scope?): imperative summary` with types read from what
   the repo enforces, falling back to `feat`, `fix`, `docs`, `refactor`,
   `perf`, `test`, `build`, `ci`, and `chore`. Keep every subject imperative,
   lowercase, and without a trailing period. Add a body only when the why is
   not obvious, and never restate the subject. If a message needs `and` to
   join unrelated ideas, split the commit.

   `feat(web): reduce re-renders on the results table` invents a type for
   ticketed work. `UI-381: keep result rows mounted while filters change`
   leads with the ticket the reader can look up.

   When a pre-commit or commit-msg hook rejects a commit, fix the failure,
   re-stage the files, and commit again with a fresh message. Never amend, and
   never skip hooks with `--no-verify`. Never add `Co-Authored-By` or
   "Generated with" footers; attribution lives outside commit messages.

6. Verify before reporting. Re-read `git status` and `git log --oneline`, then
   report the commits you made, name any staged or unstaged changes that remain
   and why, and tell the user to run `mr` next when the work is ready.
