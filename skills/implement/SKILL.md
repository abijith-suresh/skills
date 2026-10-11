---
name: implement
description: >-
  Turn feature requests, bug fixes, and implementation plans into verified
  code. Use when the task calls for changing behavior or delivering a
  working feature.
---

# Implement

Take a feature or fix request, or an existing plan, through implementation and
verification. Delegate substantive investigation, edits, and verification.
If delegation is unavailable, perform the same workflow directly and state
that limitation. The parent owns scope, user decisions, dependencies,
integration, and the final result.

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

Give each worker a bounded change, the relevant requirements and repository
rules, the files it may edit, and the checks and evidence it must return.
Use context pointers only when the worker can access them; otherwise supply
the needed material.
Prefer a less costly capable worker, honoring the user's model preferences.

One implementer can own a cohesive change. Parallelize independent work;
sequence dependencies and give overlapping edits one owner. Pass established
contracts and earlier findings forward. Review and integrate the actual changes
before verifying the combined result. Inspect changes and evidence; repeat
discovery only to resolve a conflict or verification gap. Trivial lookups or
edits can stay direct when dispatch and reporting would outweigh the work.

Run workers in the background when completion notifications are supported.
Continue independent work. With notifications, when only worker results
remain, tell the user what is running and end the turn so completion brings
you back. Carry user
steering into the active work.
Report reconciled findings rather than unresolved worker conclusions.
Without notifications, use an available wait or join operation. If the host
only offers status queries, check at meaningful work boundaries, without
rapid polling. If results remain pending and the host cannot await completion,
report the pending work and the follow-up needed.

## Verify and correct

Give a separate verifier the original requirements, the integrated artifact or
diff, and observable acceptance criteria. It must inspect and execute checks
against the result, returning commands or actions, conditions, observations,
failures, and gaps. The implementer's summary is context, not proof.

Review that evidence before calling the work green. Green means the requested
behavior has supporting observations, required repository checks pass, and
relevant failures are resolved. Static checks and mocks support only the
contracts they exercise. For a fix, reproduce the failure before the change
when practical. Add a regression check when existing coverage would not
detect the same failure.

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
merge or deploy unless authorized. Delegation never expands the user's
authorization.
