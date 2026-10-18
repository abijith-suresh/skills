---
name: implement
description: >-
  Build a feature, fix a bug, or carry out an implementation plan, and prove
  it works against what the user actually asked for. Use whenever the task is
  to change code behavior and deliver something working, including "add X",
  "fix Y", "make Z do W", or a plan to execute. If the root cause of a bug is
  still unknown, investigate the cause first. Skip for pure questions, reviews, or
  explanations.
---

# Implement

Deliver a change that does what the user asked, verified against their request
and not against the implementer's reading of it. The failure mode this guards
against is code that passes its own tests but misses the point.

## Ground rules

- Edit only what the request needs. Report unrelated problems you find
  separately instead of fixing them.
- Authorized by default: edits in the working tree and local checks.
  Commits, pushes, PRs, merges, and deploys need the user's say-so (or a
  repo rule that grants it). Delegating to a worker grants nothing extra.
- Ask the user when the request is ambiguous in a way that changes what gets
  built. Pick a reasonable default and note it when the choice is routine.

## Who does the work

If subagents are available, use an implementer and a separate verifier, and
keep the parent for integration and review. Separating them gives you an
independent check; the implementer shouldn't grade its own work.

Skip the workers when the user asks you to work directly, when no subagents
exist, or when the change is small and mechanical (a rename, a typo, a
one-line config tweak). Say which path you chose and why. When working
directly, say verification wasn't independent.

Give each worker the original request unchanged, plus any diagnosis or plan,
scope limits, and repo rules. Keep reported observations separate from the
user's expectations. Parallelize independent changes; give overlapping edits to
one owner.

## Implementing

1. Reproduce the reported failure first, where practical, so you know the fix
   changes something.
2. Make the change.
3. Add a regression test if existing tests missed the failure.
4. Return the diff and the results of the checks you ran.

New evidence and user steering go to the same implementer.

## Verifying

Give the verifier the original request and the integrated diff, nothing
else from the implementer. It should:

- Derive acceptance criteria from the request, then test those, including any
  inputs the reporter said fail.
- Run the repo's required checks.
- Treat mocks and static checks as covering only what they exercise. A passing
  mocked test says nothing about the real integration.

The parent reads the diff and the verification evidence against the request.
Reuse valid checks; rerun only after code, inputs, or environment change, or
to close a specific gap. Send discrepancies back to the implementer, then
reverify. After three rounds without convergence, change approach or report
the blocker.

## Report

**Changed:** (files and behavior)
**Verified:** (each requested outcome and the observation that supports it)
**Unverified:** (anything blocked, with the next check or prerequisite)
**Limits:** (known gaps, follow-ups, unrelated findings)
