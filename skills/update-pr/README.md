# update-pr

Regenerate and update an existing pull request's title and body on
GitHub using the `gh` CLI.

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
2. **Regenerate** — produces an updated title and body based on the
   latest commits and branch changes.
3. **Apply** — updates the PR on GitHub via the `gh` CLI.
