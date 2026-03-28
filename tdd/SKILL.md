---
name: tdd
description: Implement features and fixes through a red-green-refactor loop, one small behavior slice at a time. Use whenever the user wants test-driven development or a disciplined incremental implementation workflow for bug fixes or new behavior. Prefer this after `triage-issue` when the fix path is understood and should now be implemented safely.
---

# Test-Driven Development

Use this skill to implement or fix behavior through small, test-first steps.

## Goals

- Deliver one verifiable behavior slice at a time
- Use tests to drive design and prevent regressions
- Keep implementation changes small and explainable
- Preserve fast feedback throughout the loop
- Stay strict about test-first thinking without getting blocked by awkward codebases

## Workflow

1. Define the smallest useful slice.

   Choose the next behavior that can be expressed clearly and verified on its
   own.

   Use this skill for both new behavior and bug fixes. Keep the slice small
   enough that one failing test can explain what comes next.

2. Choose the right test level.

   Prefer the narrowest test that still validates externally visible behavior.
   Use unit, integration, or end-to-end tests based on the shape of the change.

3. Write or update a failing test first.

   Make the missing behavior visible. Confirm the test fails for the right
   reason before changing production code.

   Be strict about test-first sequencing by default. If the codebase makes pure
   TDD awkward, create the smallest practical seam that restores the loop.

4. Implement the minimum code to go green.

   Resist the urge to solve future slices early.

5. Refactor with tests protecting behavior.

   Once green, improve naming, structure, duplication, or extraction without
   changing the contract.

   Keep refactoring inside the protected loop. If the real task becomes broader
   structural cleanup without behavior change, hand off to `refactor`.

6. Repeat for the next slice.

   Keep the loop tight until the requested behavior is complete.

## Output

Return:

- the current behavior slice
- the failing test or test update that drives it
- the minimal production change to go green
- any refactor done under test protection
- the next smallest slice or stopping point

## Guardrails

- Test behavior, not implementation details
- Prefer targeted test runs over full suites while iterating
- Keep each cycle small enough to understand quickly
- If no tests exist, create the smallest durable seam or explain why that is
  not currently practical
- Pair naturally with `commit-atomically` for small, reviewable history
- Do not let cleanup work take over the task when the main goal is behavior change
