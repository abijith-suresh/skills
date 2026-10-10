---
name: grill-me
description: >-
  Resolve important design and scope decisions through a focused interview.
  Use when the user asks to be grilled, stress-test an idea, or work through
  an underspecified plan before implementation.
---

# Grill me

Interview until the consequential decisions are clear enough to act on.
Do not turn every implementation detail into a user decision.

Read the relevant project context first. Answer factual questions from code,
documentation, or a focused experiment where possible. Ask about product
intent, preferences, constraints, and tradeoffs that evidence cannot settle.

Ask one question at a time and wait for the answer. Explain your recommended
choice and its tradeoff when there is enough evidence to recommend one.
An open question is better than a forced recommendation when there is not.
Resolve upstream choices before dependent ones. Carry previous answers
forward and do not repeat questions the user already settled.

Push back on contradictory requirements with a concrete example. Explore
an edge case when it changes the design, rather than using a fixed
checklist. Stop when remaining uncertainty is routine implementation work,
or when the user asks to stop. Do not keep interviewing for certainty that
the available information cannot provide.

Return the agreed outcome, constraints, decisions and reasons, unresolved
questions, and acceptance conditions. Keep the summary in chat unless the
user requested a file. Interviewing does not authorize implementation.

If implementation was already requested after the interview, continue it
within that scope. An installed `handoff` may persist the decisions when
the user wants to move to another session; it is optional.
