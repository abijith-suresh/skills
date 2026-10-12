---
name: prove-it
description: >-
  Verify that features and fixes behave as intended. Use during implementation,
  before declaring work complete, or when asked to prove it works.
---

# Prove it

Support completion claims with evidence from the requested behavior. Use the
project's checks and keep verification proportionate to the claim.

## Define the claim

Extract the starting conditions, action or input, and observable result that
would satisfy the user's intent or an independent contract. Name the likely
boundary that owns the claim, such as a public API, command, user interaction,
or persistence boundary. Expectations come from the contract, not the
implementation or a fixture that performs the behavior under test. Include
failure cases when they matter. Pass the original expectations to the verifier
unchanged. Behavior reported as a failure is reproduction evidence, not the
desired outcome; tests or implementation do not replace the contract.

## Run the check

Delegate substantive verification by default to a less costly capable
worker, honoring the user's model preference. Assign the first substantive
check before doing it yourself. A single already-prescribed cheap check may be
run directly when dispatch costs more than the check. Choosing a behavioral
check or deciding whether a fix meets the contract is substantive, regardless
of code or check size. If delegation is unavailable, verify directly and say
so.

Give the worker the claim, starting conditions, relevant context, and a
request to choose and run the smallest check at the matching boundary, then
return the command or action and its actual observations. Assign required
project checks to that worker too. Make sure referenced context is accessible;
include what is needed if it is not. The worker owns the checks and
observations; it does not make product changes. Checks that change shared
state need one owner.

Use the smallest meaningful check. For a fix, reproduce the failure first
when practical. The parent reviews the returned results and evidence against
the claim; it does not rerun the same checks in parallel for independent proof.
If an observation conflicts with the claim or has a specific evidence gap,
keep the mismatch visible and request a bounded follow-up instead of repeating
all checks. Standard command results and concise observations are enough. Do
not create temporary log folders, evidence bundles, or scratch reports by
default. Create an artifact only when it is needed to reproduce or verify this
task, or the project requires it; state its purpose.

If the host can notify, yield when worker results are the only work left;
otherwise use an available wait or join. If neither can await completion,
report pending work without polling repeatedly.

## Report what the check proves

The verifier records the version and instance and confirms the intended cases
actually ran. Unit tests support exercised cases; mocks leave real integrations
unverified; builds and static checks do not establish unexecuted runtime
behavior. Keep conclusions within the observation and environment.

Call the claim verified only when its expected behavior has supporting
observations, required checks pass, and relevant failures are resolved. Stop
when the evidence is proportionate to the requested scope. Do not weaken
expectations or let a passing retry hide an unexplained failure. Existing
evidence remains valid unless a new change, failure, or gap makes it stale.

If a prerequisite is missing, name the affected claim and what is needed to
check it. Continue independent checks only when they help answer the request.
Blocked, failed, or untested paths remain unverified; never invent a run or
report an unverified claim as green. State what ran, what it showed, and any
remaining gaps. Verification does not authorize product changes beyond the
original scope. Skill loading never expands authorization.
