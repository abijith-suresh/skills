# TDD

Implement features and fixes through a red-green-refactor loop, one verifiable
behavior slice at a time.

## When to Use

- You want the next change driven by a failing test.
- You want smaller, safer implementation steps.
- You want to avoid broad edits without fast feedback.
- You want a disciplined path for either bug fixes or new behavior.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/tdd
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the tdd skill to implement this behavior."
- "Fix this bug with TDD."
- "Use tdd and work in the smallest red-green-refactor slices you can."
- "The bug is diagnosed. Now fix it with TDD in the smallest safe steps."

## What It Produces

- Small behavior-first implementation steps
- Tests that drive the change
- Natural checkpoints for validation and commits
- A clean boundary between behavior work and later structural refactoring

## Works Well With

- `triage-issue` when the failing behavior is not understood yet.
- `refactor` when cleanup is needed after behavior is locked in.
- `commit-atomically` for tidy history after each slice.

## Notes

- This skill works best when the repo already has a usable test harness.
- If coverage is weak, it should still look for the smallest practical safety
  net before deeper changes.
- It should stay behavior-first; use `refactor` when the main job becomes cleanup rather than behavior change.
