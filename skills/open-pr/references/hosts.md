# Forge adapters

Read the adapter for the detected host. These are examples, not dependencies.
Use installed tool help for version-specific flags. For another host, use
its available authenticated connector or API with the same workflow.

## GitHub

With `gh`, inspect authentication, repository identity and the target:

```sh
gh auth status
gh repo view --json nameWithOwner,defaultBranchRef
gh pr list --head <source> --base <target> --state open --json number,url,headRepository
```

Use `gh pr view` to read an existing body and draft state. Create with
explicit `--head`, `--base`, `--title` and `--body-file`. Update title and
body with `gh pr edit <number>`. Add `--draft` when a new request should be
a draft. Do not make an existing draft ready without authorization.

## GitLab, including self-hosted instances

With `glab`, select the repository and host from the actual remote. Verify
authentication for that host. Inspect the default branch and existing MRs:

```sh
glab auth status
glab repo view
glab mr list --source-branch <source> --target-branch <target> --output json
```

Use `glab mr view <iid>` to read existing content. `glab mr create` and
`glab mr update` accept title and description arguments. Check installed
help for description-file support; otherwise use a structured API body.
Push explicitly once rather than combining a push with MR creation.

A GitLab remote does not imply Jira, a ticket key, or a specific title
format. Those come from the repository's policy.
