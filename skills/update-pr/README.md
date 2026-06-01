# update-pr

Update an existing GitHub PR's title and body.

## What This Skill Covers

- **PR detection** — finds the open PR associated with the current branch automatically
- **Test re-validation** — re-runs the project test suite before regenerating PR content
- **Fresh regeneration** — rebuilds title and body from scratch based on latest commits
- **Conventional format** — produces structured PR body with summary, changes, and testing checklist

## Install

```bash
npx skills add abijith-suresh/skills --skill update-pr
```

## Use

- "update the PR"
- "update the pull request"

## Requirements

- [GitHub CLI (`gh`)](https://cli.github.com/) installed and authenticated

## How it works

1. **Detect** — finds the current PR associated with the branch.
2. **Regenerate** — produces an updated title and body based on the latest commits and branch changes.
3. **Apply** — updates the PR on GitHub via the `gh` CLI.
