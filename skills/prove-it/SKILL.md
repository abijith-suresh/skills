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
intent or an independent contract. Ask the user about decisions the code
cannot resolve.

Choose a check at the boundary that owns the claim. A library result belongs
at its public API; a CLI claim may include output, exit status, and files
written; a UI claim may span an interaction, a response, and persisted state.
Ask what plausible defect would make the check fail. If the behavior could be
broken while it passes, improve the observation or narrow the claim. Avoid
expectations copied from the implementation and fixtures that perform the
behavior under test.

## Observe the behavior

Delegate substantive verification by default. Give a verifier the expected
behavior or independent contract, starting conditions, relevant version and
instance, bounded checks to execute, and the evidence to return. Give one
verifier ownership of overlapping execution.

The verifier returns commands or actions, inputs and version, observations,
failures, and gaps. A summary or claim of completion is not proof: inspect the
returned evidence and confirm it supports the expected behavior. Use the
smallest meaningful check and follow required repository checks. Add a focused
regression check when useful. For a fix, reproduce the failure before the fix
when practical; say when that was not possible. Verification does not require
a giant suite or new evaluator infrastructure.

Keep scope, user decisions, and the combined result with the parent. Prefer a
less costly capable worker, honoring the user's model preferences. Include
applicable guidance and authorization limits in each brief, and use context
pointers only when the worker can access them. Keep coordination with the
parent and avoid repeating completed discovery. Parallelize independent work
and sequence dependencies. Trivial lookups or checks can stay direct when
worker setup and reporting would outweigh the work.

Run workers in the background when completion notifications are supported.
When only worker results remain, acknowledge the launch and end the turn; let
completion bring you back. Carry user steering into active work and keep
partial worker analysis internal. If notifications are unavailable, use the
supported completion mechanism and state the limitation. If delegation is
unavailable, perform the workflow directly and say so.

Keep conclusions within what the evidence observes:

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
error. After a fix, rerun affected checks. Do not weaken expectations or let a
passing retry hide an unexplained failure. If verification stops making
progress, report the blocker and what would resolve it.

When credentials, services, tools, safe test data, or authorization are
missing, name the blocked claim and prerequisite. Continue independent safe
checks when useful. Label partial evidence and substitutions; failed, blocked,
or untested paths cannot establish success.

## Hand back the evidence

Give a concise account of the expected behavior, what actually ran, and what
it showed. Include the command or interaction, relevant environment and
inputs, and evidence pointers where useful. Separate completed executions from
proposed checks. State failures, blocked paths, remaining gaps, and the next
step. Never invent a run or a successful result.

This skill works on its own. Delegated verification may identify actionable
defects, but it does not authorize product changes beyond the original scope.
Skill loading never expands authorization. Hosts decide loading; descriptions
cannot guarantee automatic use across hosts. Optional `agents/openai.yaml`
supplies display metadata only.
