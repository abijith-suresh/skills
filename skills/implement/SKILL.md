---
name: implement
description: >-
  Implement features and fixes through verified code. Use when building a
  requested change or carrying out an existing plan.
---

# Implement

Take a feature or fix request, or an existing plan, through implementation and
verification. Delegate substantive investigation, edits, and verification.
Keep scope, user decisions, dependencies, integration, and the final result
with the parent.

## Establish the change

Use workers to inspect the affected paths, callers, tests, and repository
guidance. Start with a broad sweep within the requested scope, then close
specific gaps that affect the approach. Establish the expected behavior,
constraints, and observable acceptance criteria before assigning edits.
Carry an existing diagnosis or plan forward instead of rediscovering it.

Keep a concise plan with change ownership and dependencies. Ask about missing
intent or consequential decisions the code cannot settle. Continue independent
work while answers are pending. Make routine implementation choices within the
request without adding a plan-approval gate.

## Delegate and integrate

Give each worker a bounded goal, relevant context and project guidance,
authorization limits, and concrete evidence to return. Use context pointers
only when the worker can access them; otherwise supply the needed material.
Prefer a less costly capable worker, honoring the user's model preferences.
Keep coordination with the parent so workers complete their assigned slices.

One implementer can own a cohesive change. Parallelize independent work;
sequence dependencies and give overlapping edits one owner. Pass established
contracts and earlier findings forward. Review and integrate the actual changes
before verifying the combined result. Avoid repeating delegated work unless a
conflict or verification gap requires it. Trivial lookups or edits can stay
direct when dispatch and reporting would outweigh the work.

Run workers in the background when completion notifications are supported.
When only worker results remain, acknowledge the launch and end the turn;
let completion bring you back. Carry user steering into the active work.
Keep partial worker analysis internal and return one reconciled result.
If notifications are unavailable, use the supported completion mechanism and
state the limitation. If delegation is unavailable, perform the workflow
directly and say so.

## Verify and correct

Give a separate verifier the original requirements, the integrated artifact or
diff, and observable acceptance criteria. It must inspect and execute checks
against the result, returning commands or actions, conditions, observations,
failures, and gaps. The implementer's summary is context, not proof.

Review that evidence before calling the work green. Green means the requested
behavior has supporting observations, required repository checks pass, and
relevant failures are resolved. Static checks and mocks support only the
contracts they exercise. For a fix, reproduce the failure before the change
when practical and add a focused regression check when useful.

Return failures with evidence to the implementer, then reverify affected
behavior and checks. Keep passing evidence unless new changes invalidate it.
Preserve expectations and investigate unexplained failures. Continue while
each round makes progress; change approach or report a concrete blocker when
it does not. Missing access, prerequisites, or user decisions leave affected
claims unverified.

## Finish

Return what changed, supporting verification, remaining limits, and the next
step. Commit, push, or open a PR or MR when that is part of the authorized
outcome, following the repository's branch and publishing guidance. Do not
merge or deploy unless authorized. This workflow needs no companion skill;
delegation and skill loading never expand the user's authorization.
