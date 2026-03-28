---
name: refactor
description: Safely improve code structure without changing externally visible behavior. Use when the user says "refactor this", "clean this up", "simplify this module", or wants a behavior-preserving cleanup plan or implementation.
---

# Refactor

Use this skill to improve the structure of code while preserving behavior.

## Goals

- Preserve externally visible behavior
- Shrink risk through small, reversible steps
- Build or use a safety net before deeper changes
- Prevent cleanup work from quietly turning into feature work

## Workflow

1. Define the refactor target and invariants.

   Clarify what should improve and what must stay the same from the caller or
   user perspective.

2. Inspect the current safety net.

   Check whether tests, type coverage, linters, or other validation already
   protect the area being changed.

3. Add protection if needed.

   If the area is fragile or weakly tested, add the smallest practical safety
   net before making structural changes.

4. Choose the smallest sequence of steps.

   Prefer small extractions, renames, isolations, and boundary cleanups over a
   broad rewrite.

5. Validate after each meaningful step.

   Run focused checks so breakage is caught while the change set is still easy
   to understand.

6. Stop when the target outcome is reached.

   Do not keep rewriting code just because the area is now open.

## Output

Return:

- Refactor target
- Invariants to preserve
- Safety net or missing protection
- Recommended step sequence
- Risks and stop conditions

## Guardrails

- Do not bundle feature work into a refactor unless the user asks
- Do not attempt a broad rewrite without a safety net
- Keep public contracts stable unless changing them is part of the request
- Prefer clarity and reversibility over cleverness
