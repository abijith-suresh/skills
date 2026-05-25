# open-mr

Push the current branch and open or update a merge request on GitLab using the `glab` CLI.

## What This Skill Covers

- **Branch detection** — prevents pushing from default branches and detects uncommitted changes
- **MR deduplication** — checks for existing MRs and updates them instead of creating duplicates
- **Structured MR body** — generates title with ticket number and body with summary, changes, and testing
- **GitLab automation** — creates or updates MRs via glab CLI with zero manual prompts

## Install

```bash
npx skills add abijith-suresh/skills --skill open-mr
```

## Use

- "open an MR"
- "create an MR"
- "update my MR"
- "push and open an MR"

## Requirements

- [GitLab CLI (`glab`)](https://gitlab.com/gitlab-org/cli#installation) installed and authenticated

## How it works

1. **Push** — pushes the current branch to the remote.
2. **Check** — queries GitLab for existing MRs on this branch.
3. **Create or update** — opens a new MR or updates the existing one with the latest commits and a generated title/description.
