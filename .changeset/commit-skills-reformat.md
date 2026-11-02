---
"skills-site": minor
---

Align the commit skills with what their repos enforce. `commit` reads message types from the repo's own commitlint, commit-style docs, or history before falling back to the standard list, and pairs a bad/good subject example. `commit-work` drops conventional-commit types for ticketed work: tickets lead as `TICKET-123: short description`, matching MR titles, and only non-ticket changes keep the conventional format with repo-first types. Both skills check the diff for secrets, follow a hook-failure policy of fix and commit again with never amend and never skip hooks, keep AI attribution out of commit messages, verify against `git status` and `git log` before reporting, and name `pr` or `mr` as the follow-up.
