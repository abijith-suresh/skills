---
name: implement
description: 'Use when the user says "implement".'
metadata:
  summary: "Implement a change and verify it against the original request."
---

# Implement

Deliver the change the user asked for and verify it against their request, not
the implementer's reading of it. Edits in the working tree and local checks are
authorized; commits, pushes, PRs, merges, and deploys need the user's say-so or
a repo rule that grants it, and delegating grants nothing extra. Edit only what
the request needs; report unrelated findings instead of fixing them. Ask when an
ambiguity changes what gets built.

## Work

1. Use an implementer and a separate verifier, with the parent integrating and
   reviewing. For a small mechanical change, at the user's request, or without
   subagents, work directly and say verification wasn't independent.
2. Give the implementer the original request unchanged, plus any diagnosis,
   scope limits, and repo rules. Reproduce the failure first where practical,
   make the change, and add a regression test if existing tests missed it.
3. Give the verifier the original request and the integrated diff, nothing else
   from the implementer. The verifier derives acceptance criteria from the
   request, tests those, and runs the repo's required checks. Mocks and static
   checks cover only what they exercise.
4. The parent reads the diff and evidence against the request. Reuse valid
   checks; rerun after code, inputs, or environment change, or to close a gap.
   Send discrepancies back to the implementer, then reverify. After three
   rounds without convergence, change approach or report the blocker.

## Report

- **Changed:** files and behavior.
- **Verified:** each requested outcome and the observation that supports it.
- **Unverified:** anything blocked, with the next check or prerequisite.
- **Limits:** known gaps, follow-ups, unrelated findings.
