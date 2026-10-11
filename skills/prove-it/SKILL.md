---
name: prove-it
description: >-
  Verify that features and fixes behave as intended. Use during implementation,
  before declaring work complete, or when asked to prove it works.
---

# Prove it

Support completion claims with evidence that observes the requested behavior.
Use the project's existing tools and checks, and keep the effort proportionate
to the change.

## Define what must work

Read the relevant requirements, code, and project verification guidance. State
the starting conditions, action or input, and expected observable result.
Include failure cases when they matter. Take expectations from the user's
intent or an independent contract. Ask about decisions the code cannot resolve.

Choose a check at the boundary that owns the claim. A library result belongs
at its public API; a CLI claim may include output, exit status, and files
written; a UI claim may span an interaction, a response, and persisted state.
Ask what plausible defect would make the check fail. If the behavior could be
broken while it passes, improve the observation or narrow the claim. Avoid
expectations copied from the implementation and fixtures that perform the
behavior under test.

## Observe the behavior

Delegate substantive verification by default. Choose a capable verifier at the
lowest cost that fits the task, honoring the user's model preference. For a
narrow check whose dispatch and reporting would outweigh the work, run it
directly. If delegation is unavailable, perform the same verification
yourself and say so.

Give each verifier the expected behavior or independent contract, starting
conditions, relevant version and instance, bounded checks to execute, the
evidence to return, and the authorization limits. Check that each context
pointer is accessible to the verifier. If not, include the relevant content
in the brief; if that is not possible, do that part directly or name the
access gap. Give one verifier ownership of executions that change shared
state. Independent checks that do not share mutable state may run in
parallel.

The verifier returns commands or actions, inputs and version, observations,
failures, and gaps. A summary or claim of completion is not proof: inspect the
returned evidence and confirm it supports the expected behavior. Use the
smallest meaningful check and follow required repository checks. Add a focused
regression check when useful. For a fix, reproduce the failure before the fix
when practical; say when that was not possible. Verification does not require
a giant suite or new evaluator infrastructure.

Use background work when the harness supports completion notifications.
Acknowledge the dispatch and carry user steering into active work. Continue
useful checks and evidence reconciliation; with notifications, end the turn for worker completion
only when worker results are the only work left. If notifications are
unavailable, use an available wait or join operation when results are the
only work left. If the harness offers only status queries, check at meaningful work boundaries with time for
useful work between checks, never in rapid succession. If workers remain
active at turn end, report that limitation without presenting their findings.

## Keep conclusions within the evidence

- Unit checks support the exercised cases. Mocked dependencies leave the real
  integration unverified.
- Static checks and builds support their contracts, not unexecuted runtime paths.
- Screenshots show appearance in the captured state, not interaction or persistence.
- Worker agreement and completion summaries cannot replace observed evidence.

For "saved settings survive reload," change a value through the UI, save
through the real application path, and reload to read it back. If the claim
includes server storage, check that boundary too. A success toast or cached
value alone does not establish persistence.

Confirm prerequisites and the version and instance under test. Run the check
and inspect the actual result. Make sure the intended cases executed and
completed; skipped tests and stale artifacts leave gaps. Keep enough context
and evidence to repeat the check, and preserve that evidence during cleanup.

## Decide whether it is green

Call the work green when the agreed behavior has supporting observations,
required checks pass, and relevant failures are resolved. Limit that
conclusion to the exercised cases and environment. Stop adding checks once
they provide proportionate evidence for the requested scope.

Investigate a mismatch as a possible defect, setup problem, or observation
error. After a fix, rerun affected checks. Do not weaken expectations or let
a passing retry hide an unexplained failure.

When a prerequisite such as credentials, services, tools, safe test data, or
authorization is missing, name the blocked claim and prerequisite. Continue
checks that do not depend on the missing prerequisite. Label partial evidence
and substitutions; failed, blocked, or untested paths cannot establish
success. If verification stops making progress for another reason, report the
blocker and what would resolve it.

## Hand back the evidence

Give a concise account of the expected behavior, what actually ran, and what
it showed. Include the command or interaction, relevant environment and
inputs, and evidence pointers where useful. Separate completed executions
from proposed checks. State failures, blocked paths, remaining gaps, and the
next step. Never invent a run or a successful result.

Delegated verification may identify actionable defects, but it does not
authorize product changes beyond the original scope. Skill loading never
expands authorization.
