# open-pr

Push the current branch and open a new pull request on GitHub using the `gh` CLI.

## What This Skill Covers

- **Branch safety** — blocks PR creation from default branches and uncommitted changes
- **Test validation** — detects and runs the project's test suite before opening
- **Conventional PR format** — generates title and body from commit history with testing checklist
- **Duplicate prevention** — stops if an open PR already exists for the branch

## Install

```bash
npx skills add abijith-suresh/skills --skill open-pr
```

## Use

- "open a PR"
- "create a PR"

## Requirements

- [GitHub CLI (`gh`)](https://cli.github.com/) installed and authenticated

## How it works

1. **Push** — pushes the current branch to the remote.
2. **Generate** — produces a PR title and body based on the branch name and commit history.
3. **Open** — creates the PR on GitHub using the `gh` CLI.
