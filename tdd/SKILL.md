---
name: tdd
description: Implement features and fixes through a red-green-refactor loop, one small behavior slice at a time. Use when the user wants test-driven development or a disciplined incremental implementation workflow.
---

# Test-Driven Development

Use this skill to implement or fix behavior through small, test-first steps.

## Goals

- Deliver one verifiable behavior slice at a time
- Use tests to drive design and prevent regressions
- Keep implementation changes small and explainable
- Preserve fast feedback throughout the loop

## Workflow

1. Define the smallest useful slice.

   Choose the next behavior that can be expressed clearly and verified on its
   own.

2. Choose the right test level.

   Prefer the narrowest test that still validates externally visible behavior.
   Use unit, integration, or end-to-end tests based on the shape of the change.

3. Write or update a failing test first.

   Make the missing behavior visible. Confirm the test fails for the right
   reason before changing production code.

4. Implement the minimum code to go green.

   Resist the urge to solve future slices early.

5. Refactor with tests protecting behavior.

   Once green, improve naming, structure, duplication, or extraction without
   changing the contract.

6. Repeat for the next slice.

   Keep the loop tight until the requested behavior is complete.

## Guardrails

- Test behavior, not implementation details
- Prefer targeted test runs over full suites while iterating
- Keep each cycle small enough to understand quickly
- If no tests exist, create the smallest durable seam or explain why that is
  not currently practical
- Pair naturally with `commit-atomically` for small, reviewable history
