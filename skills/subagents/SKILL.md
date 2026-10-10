---
name: subagents
description: >-
  Delegate substantive work while keeping the main conversation available.
  Use when coordinating subagents for research, implementation, or verification,
  especially in large codebases. Choose parallel or sequential work and
  reconcile worker findings into a complete result.
---

# Subagents

Keep the main agent focused on scope, decisions, integration, and the user.
Delegate substantive work and read only enough to judge the results. Use as
few workers as the task needs. Small tasks do not need a swarm.

## Brief workers

Discover available delegation capabilities and models. Respect the user's
choices. Do not assume tool names, inherited context, shared files, or access
to sibling results. If delegation is unavailable, say so; use a direct
fallback only when the user's instructions permit it.

Give each worker a clear question or outcome, relevant context, scope and
constraints, and the evidence to return. Pass accessible references or needed
content. Request concise findings, source locations, checks actually run,
and unresolved questions. Keep bulk files, logs, and analysis in workers.

## Explore broadly, then narrow

For unfamiliar work, start with broad sweeps of the code and possible
explanations. Use the findings to delegate narrower follow-ups that trace
behavior, test hypotheses, or resolve disagreements. Each round should answer
an open question. Stop exploring when you can explain the task and justify
the next step. Ask the user about requirements the code cannot settle.

Keep partial analysis internal until the relevant workers finish and you
have reconciled their evidence. Do not invent certainty or repeat sweeps
without learning. Bound failed retries and report blockers honestly.

## Choose the order

Parallelize independent research, hypotheses, or checks. Sequence dependent
work and pass each result to the next worker. Give overlapping writes one
owner at a time and confirm how changes reach the working branch.

For an agreed plan, delegate implementation, then verification of the actual
changes. Send failures back for fixes and verify again until green, within
a finite repair budget. Green requires the requested behavior and required
checks to pass on the integrated result. Keep substantive fixes in workers.
Push and open a PR or MR when the user has requested that outcome.

## Stay available

Use background workers and completion notifications when supported. After
dispatch, briefly acknowledge and end your turn so the user can keep talking.
Resume when results arrive. Do not block or keep polling. If the environment
cannot resume you on completion, disclose that limitation.

Retain task handles and enough notes to avoid duplicate work. Acknowledge
completions without dumping partial findings. Respond to user questions and
carry steering into affected briefs. Confirm an old writer stopped before
replacing it. Present the complete result with evidence and remaining limits
when the relevant workers and checks finish. Missing results are not passes.
The main agent remains responsible for scope and correctness.

Other skills may supply task-specific guidance. Composition is optional,
standalone, and acyclic; this workflow needs no companion. Loading skills or
delegating work never expands the user's authorization.

For provenance, see [source patterns](references/source-patterns.md).
