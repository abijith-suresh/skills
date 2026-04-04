---
name: create-a-pr
description: Create a pull request for the current branch using the gh CLI or GitHub API. Produces a preview and only creates the PR with explicit confirmation. Use after code is committed and pushed.
allowed-tools: gh
---

# Create a PR

Open a pull request on GitHub for the current branch.

## Goals

- Produce a PR title and body that follow repository conventions
- Preview labels, reviewers, and base branch before creation
- Create the PR only after explicit confirmation and return the PR URL

## Workflow

1. Confirm the current branch and that it has been pushed.
2. Draft a PR title and body (use the latest commit messages and the plan discussion to populate the body).
3. Show a preview including title, body, labels, reviewers, and target branch.
4. On confirmation, create the PR using gh or the GitHub API and return the PR URL.

## Output

- preview: title, body, labels, reviewers, base
- created_pr_url: when executed
- created_pr_number: when executed

## Guardrails

- Require gh CLI auth or GITHUB_TOKEN; otherwise only show the API call to run manually.
- Do not create PRs against protected branches without explicit instruction to use a draft PR.
- Do not include secrets or environment variables in the PR body.
- Confirm labels and reviewers before creating the PR.

