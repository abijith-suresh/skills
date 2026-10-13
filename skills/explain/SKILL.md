---
name: explain
description: >-
  Explain existing code or system behavior. Use for code walkthroughs and
  questions about how the user's codebase or system works.
---

# Explain

The worker traces and writes; the parent reviews and presents. Explanation
alone authorizes no product edits. Demonstrations stay within the user's
existing authorization.

## 1. Delegate first

Frame the supplied question for its audience; state your interpretation if
ambiguous.

- Honor explicit user delegation and model choices. If required delegation is
  unavailable, report the blocker.
- Otherwise, answer directly only for an isolated single-fact lookup or when
  delegation is unavailable. State the reason first.
- Otherwise, dispatch a capable worker before investigating. Prefer lower cost
  and announce its assignment.

Judge the whole request, not its next command's cost. Even a short multi-step
trace requires delegation. Reading the request and locating the workspace may
precede dispatch.

At dispatch, keep one owner for a coherent flow. Split independent topics when
useful, naming explorers and one synthesis owner who handles follow-up.

Give workers the question, audience, context, paths, and requirements below.
Include material they cannot access.

## 2. Trace and explain

The worker traces a concrete input or action to its result, including relevant
decisions, state changes, and failure behavior. It writes the shortest complete
answer with source locations beside supported claims.

Separate inspected code, observed execution, and documented promises. Label
inferred intent with its basis and illustrative values as examples. Name gaps
or conflicting sources. Use snippets or diagrams only when they clarify.

Return inline. Save diagnostic files only for a stated task need or required
project convention.

## 3. Review and present

The parent checks the draft against the brief, citations, and evidence labels.
Route source inspection, execution, and checks through the assigned worker.
Send concrete gaps back as bounded follow-up; continue only while resolving
them. New evidence and user steering go to the same owner.

When only worker results remain, yield for completion notifications or use
wait/join. If neither is available, report pending work separately from findings.

Present the worker's answer with light clarity edits. Finish when the question
is answered. If blocked, return what was traced, remaining unknowns, and the
smallest missing input or access needed.
