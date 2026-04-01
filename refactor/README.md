# Refactor

Improve code structure without changing externally visible behavior, using a
small-step and safety-net-first workflow.

## When to Use

- A module works but is hard to understand, extend, or test.
- You want cleanup without quietly changing product behavior.
- You want the agent to move in small, reversible refactor steps.
- You want structural improvement, not a disguised bug fix or feature change.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/refactor
```

## Example Prompts

- "Use the refactor skill on this module."
- "Refactor this area safely without changing behavior."
- "Use refactor and tell me what safety net we need first."
- "Clean this code up, but stop if the work turns into a behavior change."

## What It Produces

- A behavior-preserving refactor plan or implementation path
- Clear invariants and validation steps
- Explicit risks and stop conditions
- A clear callout when the task should move to `tdd` instead

## Works Well With

- `repo-onboarding` when the codebase is still unfamiliar.
- `tdd` when you need characterization tests or a tighter safety net.
- `commit-atomically` for small cleanup commits.

## Notes

- This skill is for cleanup and simplification, not for feature expansion.
- It is best when the desired behavior can be stated clearly before the cleanup
  begins.
- It should push hard for the smallest practical safety net before deeper structural work.
