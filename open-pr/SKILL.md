---
name: open-pr
description: >-
  Push the current branch and open a pull request on GitHub or merge request on GitLab.
  Use when asked to "open a PR", "create a PR", "open an MR", "create an MR", or "push and open a PR".
---

# Open PR

Detect platform. Check branch state. Route to the right workflow.

## 1. Detect platform

Run `git remote -v`.

- Remote URL contains `github.com` → GitHub (personal). Follow `references/github-workflow.md`.
- Remote URL contains `gitlab` → GitLab (work). Follow `references/gitlab-workflow.md`.

## 2. Check branch and working tree state

Run `git status`, `git branch --show-current`, and detect the remote default branch via `git remote show origin`.

Stop and tell the user if:

- There are uncommitted changes
- The current branch is `main`, `master`, or the remote default branch — ask which feature branch to use instead

Never push directly to the default branch.

## 3. Route

Once the platform is confirmed and the branch is clean, follow the platform-specific reference file. All title formats, body templates, and push commands live there.
