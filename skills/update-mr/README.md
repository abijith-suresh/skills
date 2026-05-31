# update-mr

Regenerate and update an existing merge request's title and body on GitLab using the `glab` CLI.

## What This Skill Covers

- **MR detection** — finds the open MR associated with the current branch automatically
- **Fresh regeneration** — rebuilds title and body from scratch based on latest commits
- **Structured MR body** — produces structured MR body with summary, changes, and testing

## Install

```bash
npx skills add abijith-suresh/skills --skill update-mr
```

## Use

- "update the MR"
- "update the merge request"

## Requirements

- [GitLab CLI (`glab`)](https://gitlab.com/gitlab-org/cli#installation) installed and authenticated

## How it works

1. **Detect** — finds the current MR associated with the branch.
2. **Regenerate** — produces an updated title and body based on the latest commits and branch changes.
3. **Apply** — updates the MR on GitLab via the `glab` CLI.
