---
name: prove-it
description: >-
  Verify implementation claims with observable evidence at the boundary that
  owns the behavior. Use while implementing features or fixes, before declaring
  work complete, or when asked to prove it works. Report what ran, what it showed,
  and what remains unverified.
---

# Prove it

Turn a claim about an implementation into a repeatable check of its observable
behavior. Start from the requested change, acceptance criteria, or explicit
claim and the current implementation.

The description supports discovery during implementation and explicit "prove it"
requests. Hosts decide which skills they expose and load. A description cannot
guarantee automatic loading across hosts. Optional `agents/openai.yaml` is display
metadata only. This workflow needs no companion skill or particular model,
platform, or test framework. Loading it grants no additional authorization.

## Define the claim

Read the relevant project instructions, implementation, and existing verification
commands. State the starting conditions, action or input, and expected observable
result. Include a failure or edge case when it matters to the change. Derive
expectations from the user's requirement or an independent contract, rather than
copying the implementation into the assertion.

Identify the boundary that owns the claim and what must be real to observe it.
A library result belongs at its public API. A CLI claim may include exit status,
output, and files written. A UI claim may span an interaction, server response,
and persisted state. Match the check to the behavior being claimed.

Resolve a missing expectation from available requirements. Ask a focused question
if different interpretations would change what counts as success. Keep that
claim unresolved while checking independent claims.

## Choose proportionate evidence

Use existing checks and tools first. Choose the smallest check that exercises
the owning boundary and can detect the relevant defect. Add a focused regression
check when it provides lasting value. A simple change may need only one targeted
execution; a cross-boundary claim may need a short sequence of observations.
Follow required repository checks, but do not invent a giant suite, coverage
target, or evaluator infrastructure.

For each check, ask what plausible defect would make it fail. If the claimed
behavior could be broken while the check still passes, strengthen the observation
or narrow the claim. Avoid assertions whose expected result comes from the same
code under test, and fixtures or mocks that perform the behavior being claimed.
For a regression, reproduce the failure before the fix when practical. If that
is unavailable, say so; do not imply a failing run occurred.

Keep evidence within what it observes:

- A unit check can establish a function's result for the exercised cases.
  A mocked dependency cannot establish that the real integration works.
- A type check, lint run, or build establishes its static or build contract.
  It does not establish an unexecuted runtime path.
- A screenshot can establish appearance in the captured state. It cannot alone
  establish an interaction, persistence, or an unseen side effect.
- Worker agreement or a completion summary can suggest checks. It cannot replace
  observed execution results or inspected artifacts.

For example, verify "saved settings survive reload" by changing a value through
the UI, saving through the real application path, and reloading to read it back.
Use an authorized test environment and account. A mocked save response or success
toast alone leaves persistence unverified. If the claim includes server storage,
observe that boundary too, rather than letting cached UI state stand in for it.

## Execute and inspect

Confirm prerequisites such as the build under test, runtime, configuration,
credentials, services, and fixture state. Use isolated local or test resources
when available. Stay within the user's authorized scope. Verification does not
authorize deployments, purchases, messages, production writes, or unrelated
repairs. If a necessary step needs additional authorization, report that exact
step and continue checks that do not depend on it.

Run the selected command or interaction and inspect its actual output and final
state. Confirm that the intended checks executed, the expected instance answered,
and long-running work completed before reporting success. Wait for readiness
using a concrete signal. An exit code without the relevant assertion, a skipped
test, or an old artifact does not establish the claim.

Record enough to repeat the check: command or interaction steps, environment and
version or revision, relevant inputs and substitutions, expected and observed
outcomes, and useful evidence paths. Preserve relevant failure output. Retain
evidence when cleaning up temporary processes and state created for the run.

## Handle failures and blocked paths

When an observation disagrees with the expectation, report the mismatch. Check
whether it is a product defect, invalid setup, or an observation error. Do not
weaken the expectation, remove the check, or retry until a passing run hides an
unexplained failure. Fix an identified cause within the authorized implementation
scope and rerun affected checks. Preserve any unresolved intermittent failure.

Missing credentials, unavailable tools or services, unsafe test data, and required
authorization can block a path. Name the prerequisite and the claim it prevents
you from checking. A smaller safe check may provide partial evidence; record its
substitutions and limits. Never present it as equivalent to the blocked path.

Stop expanding verification when the bounded claims have proportionate evidence
and required checks pass, or when the remaining paths need an unavailable
prerequisite or action outside scope. Keep failed, blocked, and untested claims
explicit. Never fabricate executions or turn those states into success.

## Hand off the evidence

Keep the report short enough to review. For each material claim, include:

- Expected behavior and the boundary checked.
- What actually ran, with the observed result and an evidence pointer when useful.
- Status: supported for the exercised cases, failed, blocked, or not checked.
- Remaining gaps, substitutions, and the next check or prerequisite needed.

Separate commands proposed for later from completed executions. Qualify broader
claims when the evidence covers only part of the behavior. A passing run supports
the observed cases in the tested environment, not universal correctness.
