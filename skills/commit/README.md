# commit

Create clean conventional commits from the current diff.

## What This Skill Covers

- **Intent-based splitting** — groups changes by reason and commits each group separately
- **Conventional commits** — writes clean, semantic commit messages in imperative mood
- **Branch safety** — prevents commits on main, master, or develop without explicit override
- **Platform detection** — automatically detects GitLab vs GitHub and applies ticket scope rules

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
4. **Intent-based split** — groups changes by reason, stages and commits each group separately with conventional commit messages.
5. **Report** — shows the list of commits made.
