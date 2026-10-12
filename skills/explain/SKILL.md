---
name: explain
description: >-
  Explain how existing code or a system works. Use when the user asks how
  something works or wants a code walkthrough.
---

# Explain

Explain the existing system at the user's level. Focus on understanding; do
not automatically refactor, fix, or change code.

## Explore

Understand what the user wants to learn and what they already know. A single
factual lookup may be answered directly. Delegate substantive exploration by
default to a less costly capable worker, honoring the user's model preference.
If no worker is available, explore directly and say so.

Tracing behavior across multiple steps is substantive even when the code is
small; reserve direct work for a single fact, not a short behavioral trace.

Assign the first substantive exploration before doing it yourself. Give the
worker the question, relevant context, bounded paths or questions, and a
concise request for findings with source locations and unresolved gaps,
returned inline. Make sure referenced context is accessible; include what is
needed if it is not. Create a diagnostic artifact only when this task needs it
to support or reproduce the explanation, or the user or project requires it;
state its purpose. Workers investigate only; they do not edit product code.

The worker traces the execution and writes the explanation. For a question
crossing independent boundaries, split those boundaries among distinct
explorers and assign one worker to synthesize their findings. The parent frames
the question, assigns the work, reviews the cited evidence, and presents the
answer. Request bounded follow-up for an actual gap or conflict; do not repeat
the source tracing.
If the host can notify, yield when worker results are the only work left;
otherwise use an available wait or join. If neither can await completion,
report pending work without polling repeatedly.

## Explain

In the returned explanation, give the shortest complete account that answers
the question. Trace a concrete input or action through the relevant flow to its
result, including decisions, state changes, and failure behavior when they
matter. Put source locations near the claims they support. Use a snippet or
diagram only when it makes the explanation clearer.

Distinguish inspected code behavior from observed execution and documented
promises. Label inferred intent and give its basis. Mark illustrative values as
examples. State unresolved gaps or source conflicts without filling them with
guesswork. Stop when the question is answered; do not add a subsystem tour or
sections the user does not need.

Skill loading and demonstrations stay within the user's existing
authorization.
