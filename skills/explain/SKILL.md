---
name: explain
description: >-
  Explain how existing code or a system works by tracing its actual behavior.
  Use when the user asks how something works, wants a code walkthrough, or
  needs to understand a subsystem before changing it.
---

# Explain

Build a useful mental model grounded in the implementation. Start with
the user's question and apparent familiarity; do not require a questionnaire
before answering a clear question. State a reasonable scope for a broad one.

## Trace the behavior

Find the entry point, relevant callers, core data, and boundaries. Follow
one concrete example from input through decisions and state changes to
observable output. Inspect failure paths, configuration, persistence,
and asynchronous work when they affect the answer.

Read source and relevant tests rather than deriving behavior from names.
Check documentation against the code. Run a focused example when useful
and permitted; otherwise distinguish what the source suggests from what
was observed at runtime. Keep exploration read-only unless an experiment
requires a temporary artifact outside the project.

## Teach in the order the reader needs

Lead with what the system does. Introduce only the concepts needed for the
trace. Show the normal path with the concrete example, then the failure
paths or constraints that change the mental model. Separate what happens
from why the design might have been chosen. Cite history or design records
for motivation; label an inferred rationale.

Link the key files and symbols, with line numbers when available. Explain
the relationships between them instead of cataloging every file. Use a
small diagram when flow, ownership, or concurrency is easier to see than
read. Describe any analogy's limit so it does not replace the mechanism.

End with the implications for the user's question and any uncertainty.
Offer a deeper trace only when it would add useful detail. Do not refactor,
produce a plan, or create a learning workspace merely to explain code.

An installed `research` can resolve an unfamiliar dependency and `writing`
can shape the explanation. Use primary sources and plain prose directly
when those companions are absent.
