---
name: orchestration
description: >-
  Coordinate requested delegated work by assigning research, implementation,
  and verification to workers while the main agent owns scope, dependencies,
  integration, and the final result. Use when the user asks for subagents,
  parallel workers, or an orchestrator-led workflow.
---

# Orchestration

Keep substantive work in workers and coordination in the main agent. The main
agent defines the outcome, assigns work, judges evidence, and owns the final
result. Read only enough source and output to make those decisions. Delegate
deep research, implementation, test execution, and substantive integration
fixes. Do not turn every small task into a multi-agent workflow.

Loading this skill grants no additional authorization. Carry the user's
scope, permissions, and restrictions into every brief. Delegation does not
authorize publishing, commits, deployments, destructive actions, or further
delegation that the user has not permitted.

## Discover capabilities

Inspect the current environment's delegation tools and capability metadata
before choosing workers. Discover supported providers, models, concurrency,
context inheritance, workspace access, result retrieval, and cancellation.
Use documented discovery or lazy tool loading when available before declaring
delegation absent. Do not guess tool names, model identifiers, or access to a
shared filesystem. Honor the user's worker choices if supported. If a
required choice is unavailable, report that blocker. For a preference that
permits alternatives, choose from discovered capabilities and disclose the
substitution.

Choose the supported child-task mechanism. A separate top-level conversation
is not a substitute for a worker. If workers can run only sequentially, keep
the delegation and state that parallel execution is unavailable. If no
delegation mechanism works, report that before proceeding. Work directly only
if the user's instructions permit that fallback. If delegation is required,
return the blocker and prepared task boundaries without claiming workers ran.

## Frame the work

State the requested outcome, acceptance criteria, and scope exclusions. Split
work into the smallest useful tasks with clear outputs and dependencies.
One worker can own a tightly coupled change. Parallelize independent tasks
only when their inputs are ready and their writes cannot collide.

Keep a compact task record in the conversation or available task store. Track
each task's owner, dependencies, state, returned task handle, input revision,
output location, and verification result. Use states such as ready, running,
blocked, returned, integrated, and verified. A returned task is not yet done.
Do not create a new orchestration service or require an issue tracker.

Give each mutable target one writer at a time, including shared files,
branches, databases, and external resources. Separate workspaces when the
environment supports them. Otherwise partition ownership or serialize
writes. Record the starting revision and how outputs will reach integration.
Do not assume a local path or sibling branch is visible to another worker.

## Brief and dispatch workers

Every brief must stand alone. Size it to the task, retaining these details:

- Goal and checkable acceptance criteria.
- Allowed writes, excluded paths or resources, and existing authorization.
- Inputs, source references, exact revision when relevant, and upstream
  decisions or findings. Use pointers only when the worker can access them;
  otherwise include the needed content or transfer the artifact.
- Ownership, dependencies, workspace access, and output delivery method.
- Relevant verification commands or behavioral checks and their environment.
- A time or effort limit, retry limit, and when to return blocked or partial.
- A report containing status, output or patch, changed resources, evidence,
  checks actually run, failures, assumptions, and unresolved questions.

Research workers return cited findings and actionable uncertainties.
Implementation workers return changes and evidence against their criteria.
Verification workers inspect the specified artifact and report observed
behavior, failures, and coverage gaps. Keep verification read-only unless
fixes are explicitly in that worker's scope.

Pass applicable local instructions and user corrections even when context
inheritance exists. Tell workers to report scope changes or missing inputs
instead of guessing. Keep further delegation within the user's limits and
the task budget. Retain the returned task handles. Dispatch ready work within
available capacity, then refill as dependencies become satisfied.

## Integrate and verify

Retrieve results through the supported result mechanism. Use notifications
or bounded status checks; do not restart work merely to ask for status.
Inspect each output for scope, acceptance evidence, and compatibility with
the current integration state. Relay accepted upstream findings to dependent
workers. Do not unblock them on a completion message alone.

The main agent may mechanically apply or merge an accepted output within its
authorization. Delegate conflicts and substantive repairs to an integration
worker with exclusive ownership and the relevant outputs and decisions.
Reject unrelated changes and keep unresolved findings visible.

Have a worker verify the integrated result against the requested outcome and
the repository's required checks. Use a separate verification worker when
independent judgment adds value. A cheap deterministic check may run in the
implementation worker, but final evidence must cover the integrated artifact.
Record the revision or artifact identity, commands, results, and limitations.
Recheck affected behavior after integration or repairs change it. A blocked
check, missing output, or unsupported pass claim is a gap, not a pass.

## Bound failures and retries

Set a finite retry budget before dispatch. Default to one retry per failed
task unless the user supplies a different limit. Retry with a concrete
correction, such as narrower scope, repaired access, or missing input. Do not
repeat an unchanged brief after a reproducible failure. Count replacement
workers and revised briefs against the original task's budget. Apply the same
budget to integration and verification repair cycles.

When launch acceptance is uncertain, inspect existing task state before
retrying. Reuse a request identifier when the mechanism supports idempotency.
Before replacing a worker or reassigning its writes, confirm it stopped or
cancel it through supported controls. If that cannot be confirmed, block
conflicting writes. Reconcile late output against current ownership and
revision before accepting it.

On budget exhaustion, preserve partial outputs, report the last failure, and
mark affected tasks blocked. Continue independent work that remains useful.
Request user input only when a required decision or permission is missing.
Do not silently absorb a failed worker's substantive task into the main agent.

## Optional composition and final report

An available companion skill may guide a worker's research, implementation,
or verification when it fits the task. Read its instructions before using it
and pass the relevant content if the worker cannot load it. Keep composition
optional and acyclic. Do not call a companion that routes back to this skill.
Without companions, use the briefs, source research, implementation criteria,
and verification steps above. Companion instructions never expand scope or
authorization.

Before finishing, account for every launched worker and stop or explicitly
report unfinished work. Assess the integrated result against the original
criteria. Report the delivered artifact, what was delegated, verification
evidence, deviations, and remaining blockers or gaps. Distinguish observed
results from worker claims and disclose any direct-work fallback. The main
agent remains responsible for the result.

For provenance when maintaining this workflow, read
[source patterns](references/source-patterns.md).
