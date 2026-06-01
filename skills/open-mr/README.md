# open-mr

Push the current branch and open a new GitLab MR via glab CLI. Requires a ticket number.

## What This Skill Covers

- **Branch safety** — blocks MR creation from default branches and uncommitted changes
- **Duplicate prevention** — stops if an open MR already exists for the branch
- **Structured MR body** — generates title with ticket number and body with summary, changes, and testing

## Install

```bash
npx skills add abijith-suresh/skills --skill open-mr
```

## Use

- "open an MR"
- "create an MR"

## Requirements

- [GitLab CLI (`glab`)](https://gitlab.com/gitlab-org/cli#installation) installed and authenticated

## How it works

1. **Push** — pushes the current branch to the remote.
2. **Generate** — produces an MR title and body based on the branch name and commit history.
3. **Open** — creates the MR on GitLab using the `glab` CLI.
