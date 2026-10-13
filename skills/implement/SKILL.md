---
name: implement
description: >-
  Turn feature requests, bug fixes, and implementation plans into verified
  code. Use when the task calls for changing behavior or delivering a
  working feature.
---

# Implement

The parent coordinates, integrates, and reviews; workers investigate, edit,
and check.

## 1. Delegate first

- Honor explicit user delegation and model choices. If required delegation is
  unavailable, report the blocker.
- Otherwise, work directly only for an isolated fact lookup or a mechanical
  edit requiring no investigation or behavior judgment. State the reason first.
- For a feature or fix, dispatch an implementer before investigating or
  editing. Prefer a lower-cost capable worker and announce the assignment.
- Otherwise, if delegation is unavailable, perform these steps directly and
  state that limitation before starting.

Judge the complete change, not its patch size or next command's cost. Reading
the skill and request, locating the workspace, and requested source
synchronization may precede dispatch.

The contract is the original request and report. Pass it unchanged to the
implementer and verifier; separate expectations from reported observations.
Include any diagnosis or plan, edit scope, constraints, accessible context,
and repository rules.

## 2. Implement

One implementer owns a cohesive change. Parallelize independent assignments;
give overlapping edits one owner. The implementer reproduces a reported failure
before editing when practical, makes the change, adds regression coverage where
existing tests miss the failure, and returns the diff and check results.

Keep source investigation, edits, and execution checks with assigned workers.
The parent resolves missing intent or consequential choices; routine choices
stay with the implementer. New evidence and user steering go to the same owner.
Keep edits within the requested change; report unrelated findings separately.
Keep findings in the conversation. Save diagnostic files or log bundles only
for a stated task need or required project convention.

When only worker results remain, yield for completion notifications or use
wait/join. If neither is available, report pending work separately from results.

## 3. Verify

For every behavior change or bug fix, give a separate verifier the contract
and integrated diff. It derives acceptance criteria from the contract and
checks supplied interpretations against it, including reported failing inputs.
It compares requested outcomes with observed behavior and runs required
repository checks. Static checks and mocks establish only the contracts they
exercise. Mechanical edits may use direct, proportionate checks.
When delegation is unavailable, verify the contract directly and state that
verification was not independent.

The parent reviews the actual diff and verification evidence against the
contract. Reuse valid worker checks. Rerun only after code, inputs, or
environment changes, or to close a concrete evidence gap. Return discrepancies
and unexplained failures to the implementer, then reverify affected outcomes.
Continue while each round makes progress; otherwise change approach or report
the blocker.

## Finish

Complete when requested outcomes have supporting observations, required checks
pass, and relevant failures are resolved. Report blocked claims as unverified
with the next check or prerequisite. Return what changed, checks, and remaining
limits. Complete authorized git or forge actions under repository rules;
merge or deploy only when authorized. Delegation adds no authorization.
