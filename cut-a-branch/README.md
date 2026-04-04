# Cut a Branch

Create a new branch from the latest main branch and get the exact git commands to run.

## Install

```bash
npx skills@latest add abijith-suresh/skills/cut-a-branch
```

## When to use

- After you and the agent finalize a plan and are ready to start implementing.

## Example prompts

- "Cut a branch for ticket ABC-123 with description 'improve login flow' (dry-run)."
- "Create branch from latest main and make it named feat/ABC-123/improve-login-flow — execute it."

## Notes

This skill will never push the branch. It only fetches and creates the branch locally unless you explicitly ask it to push.