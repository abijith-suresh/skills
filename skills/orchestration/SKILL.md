---
name: orchestration
description: >-
  Coordinate delegated work while the main agent owns scope, integration, and
  acceptance. Use when the user asks for orchestration, subagents, or parallel
  agent work on a task.
---

# Orchestration

The main agent coordinates. Delegate exploration, implementation, and
verification; keep direct work to task framing, decisions, integration,
and evidence review. You remain accountable for the combined result.

## Establish the task and capabilities

Define the requested outcome, constraints, acceptance conditions, and
authorized side effects. Inspect enough context to split the work, or ask
an explorer to produce that map. Do not perform the whole investigation
before deciding to delegate it.

Discover the environment's actual delegation and isolation capabilities.
Use available agent tools and the user's model preferences. Do not assume
model IDs, named agent roles, background execution, or shared filesystems.
Inherit the current model unless a configured choice or the task warrants
another available model. Report a rejected choice before selecting a valid
fallback. If delegation is unavailable, say so; return a task breakdown,
or continue directly only when the user accepts that fallback.

## Divide ownership

Create tasks with dependencies, not just a numbered list. Run independent
tasks concurrently within available capacity. Assign one writer to each
file or shared resource. Use isolated worktrees or disjoint ownership when
supported; otherwise serialize overlapping writes. Declare an integration
owner. Workers must not change shared branches or publish independently.

Give each worker a self-contained brief:

- Goal, scope, acceptance conditions, and explicit exclusions.
- Necessary context and accessible paths or links.
- Owned files or resources and the state to start from.
- Dependencies, relevant conventions, and authorized actions.
- Required evidence and result format: changes, checks, findings, blockers.

If available, supply relevant installed skills such as `triage`, `java`,
`typescript`, or `prove-it`. Do not assume children inherit the parent's
skills or conversation. Without companions, put the needed acceptance and
verification criteria directly in the brief. Never require workers to
install a skill or delegate again.

## Coordinate and integrate

Track each task's identity, owner, status, and dependencies. Keep updates
about decisions and blockers. Do not duplicate a running task or repeatedly
poll it when the environment offers completion notifications or waits.

Inspect results and their evidence. Resolve conflicting claims against the
actual artifact. When a task fails, diagnose the blocker and revise the
brief before a bounded retry. Reassign or stop after repeated failure;
never retry indefinitely or count missing evidence as a pass.

Integrate completed work in dependency order without discarding other
changes. Delegate a check of the combined state, independent of the author
when the risk justifies it. Give the verifier acceptance conditions and
artifacts, not instructions to agree with the implementation. Confirm
that the evidence applies to the final state after integration.

On cancellation or a scope change, stop obsolete workers and preserve
completed work. Report the consolidated outcome, checks, unresolved gaps,
and any work still running. Do not forward raw worker reports as the answer.
