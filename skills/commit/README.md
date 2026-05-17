# commit

Inspect the diff, split by intent, and create clean conventional commits.
Requires ticket scope for GitLab/work repos.

## Install

```bash
npx skills add abijith-suresh/skills --skill commit
```

## Use

- "commit these changes"
- "make a commit"
- "commit this"
- "create commits"

## How it works

1. **Branch safety check** — verifies you aren't on `main`, `master`, or `develop`.
2. **Platform detection** — checks if the remote is GitLab (work) or GitHub (personal).
3. **Diff inspection** — reads every changed file.
4. **Intent-based split** — groups changes by reason, stages and commits each group
   separately with conventional commit messages.
5. **Report** — shows the list of commits made.

For work repos, a ticket number is required in every commit scope:
`feat(TICKET-123): add user authentication`.
