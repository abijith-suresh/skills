# Code Review

Review a diff, branch, or pull request for correctness, regressions, missing
tests, and maintainability before the work moves forward.

## When to Use

- You want a high-signal review before merging or handing off changes.
- You want a second pass focused on correctness and risk, not just style.
- You want the agent to separate blockers from suggestions.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/code-review
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the code-review skill on this diff."
- "Do a code review before I open a PR."
- "Use code-review and tell me what would block approval."

## What It Produces

- An overall assessment of the change
- Blocking issues and non-blocking suggestions
- Missing tests, checks, or rollout validation

## Works Well With

- `repo-onboarding` when the repo context is unfamiliar.
- `triage-issue` when a risky change appears to address a bug.
- `commit-atomically` after follow-up fixes are made.

## Notes

- This skill is meant to be high-signal, not exhaustive or noisy.
- It works best when there is a clear diff, branch, or PR-sized change to read.
