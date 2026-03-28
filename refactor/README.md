# Refactor

Improve code structure without changing externally visible behavior, using a
small-step and safety-net-first workflow.

## When to Use

- A module works but is hard to understand, extend, or test.
- You want cleanup without quietly changing product behavior.
- You want the agent to move in small, reversible refactor steps.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/refactor
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the refactor skill on this module."
- "Refactor this area safely without changing behavior."
- "Use refactor and tell me what safety net we need first."

## What It Produces

- A behavior-preserving refactor plan or implementation path
- Clear invariants and validation steps
- Explicit risks and stop conditions

## Works Well With

- `repo-onboarding` when the codebase is still unfamiliar.
- `tdd` when you need characterization tests or a tighter safety net.
- `commit-atomically` for small cleanup commits.

## Notes

- This skill is for cleanup and simplification, not for feature expansion.
- It is best when the desired behavior can be stated clearly before the cleanup
  begins.
