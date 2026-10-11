---
name: explain
description: >-
  Explain how existing code or a system works. Use when the user asks how
  something works or wants a code walkthrough.
---

# Explain

Explain the existing system at the user's level. Help them follow what happens
and know where to look next. Focus on understanding; do not automatically
refactor, fix, or change code.

## Understand the question

Use the question and conversation to understand what the user wants to learn
and what they already know. If the question is narrow, trace the path needed
to answer it and stop once answered. If it spans several parts of the system,
identify the relevant paths before exploring them. Ask about intent or
decisions the code cannot resolve.

Delegate substantive exploration by default. Choose a capable worker at the
lowest cost that fits the task, honoring the user's model preference. For a
narrow lookup whose dispatch and reporting would outweigh the work, inspect it
directly. If delegation is unavailable, do the same exploration directly and
say so.

Give each worker a bounded path or question, the user's question and context
the worker can access, the evidence to inspect, the limits on changes or
experiments, and the concrete claims and source locations to return. Check
that each context pointer is accessible to the worker. If not, include the
relevant content in the brief; if that is not possible, do that part directly
or name the access gap.

Read the implementation and relevant configuration. Use documentation,
comments, tests, and runtime observations to check your understanding. Run
independent read-only explorations in parallel, even when they inspect the
same files. Assign one owner to any experiment that changes shared state.
Check claims against the source evidence and the user's question, then
reconcile them into one explanation. Keep partial findings internal until
the relevant work is complete.

Use background work when the harness supports completion notifications.
Acknowledge the dispatch and carry user steering into active work. Continue
useful exploration and reconciliation; with notifications, end the turn for worker completion
only when worker results are the only work left. If notifications are
unavailable, use an available wait or join operation when results are the
only work left. If the harness offers only status queries, check at meaningful work boundaries with time for
useful work between checks, never in rapid succession. If workers remain
active at turn end, report that limitation without presenting their findings.

## Follow a concrete path

Choose an input or user action that makes the behavior clear. Follow it from
the entry point to the result. Explain who handles each step, how the data
changes, and which conditions select the path. Track the state that is read or
changed, who owns it, and how long it survives.

At module, process, service, or storage boundaries, establish what goes in,
what comes back, and which ordering or guarantees matter. Follow relevant
failure paths too. Explain how the caller learns about failure and whether
earlier state changes remain. Include retries, caching, cleanup, or
concurrency when they affect the answer.

## Explain what the evidence supports

Lead with the smallest complete account of what the system does, then walk
through the example in execution order. Define unfamiliar terms as they
appear. Use a short snippet or diagram when it helps. Put source locations
beside the claims they support, rather than returning a file inventory or
annotating every line. Deepen the explanation where the user's question needs
it.

Distinguish inspected code behavior from observed execution and from what
documentation promises. Attribute documented design reasons to their source;
label inferred intent and give its basis. Mark illustrative example values as
examples. If sources disagree or part of the path is unavailable, say what is
known, what remains uncertain, and what evidence would resolve it. Do not fill
gaps with a plausible story.

Skill loading and any demonstrations stay within the user's existing
authorization.
