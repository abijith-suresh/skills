# open-pr

Push the current branch and open a new pull request on GitHub using
the `gh` CLI.


## Use

- "open a PR"
- "create a PR"

## Requirements

- [GitHub CLI (`gh`)](https://cli.github.com/) installed and authenticated

## How it works

1. **Push** — pushes the current branch to the remote.
2. **Generate** — produces a PR title and body based on the branch name
   and commit history.
3. **Open** — creates the PR on GitHub using the `gh` CLI.
