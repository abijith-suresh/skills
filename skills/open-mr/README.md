# open-mr

Push the current branch and open or update a merge request on GitLab
using the `glab` CLI. Detects if an MR already exists for the current
branch and updates it instead of creating a duplicate.

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

- [GitLab CLI (`glab`)](https://gitlab.com/gitlab-org/cli#installation)
  installed and authenticated

## How it works

1. **Push** — pushes the current branch to the remote.
2. **Check** — queries GitLab for existing MRs on this branch.
3. **Create or update** — opens a new MR or updates the existing one
   with the latest commits and a generated title/description.
