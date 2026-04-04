# Create a PR

Create a pull request for the current branch using the gh CLI or GitHub API.

## Install

```bash
npx skills@latest add abijith-suresh/skills/create-a-pr
```

## When to use

- After changes are committed and pushed and you want the agent to open a PR.

## Example prompts

- "Create a PR titled 'Fix login redirect (ABC-101)' and add label bug, reviewer @alice. Do a dry-run first."
- "Open a draft PR against main with the generated title and body and assign it to @bob."

## Notes

Requires the gh CLI to be authenticated, or a GITHUB_TOKEN in the environment for API usage.