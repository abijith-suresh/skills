# Code Review

Review a diff, branch, or pull request for correctness, regressions, missing
tests, and maintainability before the work moves forward.

## When to Use

- You want a high-signal review before merging or handing off changes.
- You want a second pass focused on correctness and risk, not just style.
- You want the agent to separate blockers from suggestions.
- You want maintainability concerns surfaced when they genuinely affect the change quality.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/code-review
```

## Example Prompts

- "Use the code-review skill on this diff."
- "Do a code review before I open a PR."
- "Use code-review and tell me what would block approval."
- "Review this branch and call out both blockers and meaningful maintainability concerns."

## What It Produces

- An overall assessment of the change
- Blocking issues and non-blocking suggestions
- Missing tests, checks, or rollout validation
- A moderately detailed rationale for the highest-value findings

## Works Well With

- `repo-onboarding` when the repo context is unfamiliar.
- `triage-issue` when a risky change appears to address a bug.
- `commit-atomically` after follow-up fixes are made.

## Notes

- This skill is meant to be high-signal, not exhaustive or noisy.
- It works best when there is a clear diff, branch, or PR-sized change to read.
- It should stay review-focused rather than turning into a separate triage workflow.
