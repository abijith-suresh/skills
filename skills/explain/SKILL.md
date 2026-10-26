---
name: explain
description: 'Use when the user says "explain".'
metadata:
  summary: "Explain existing behavior through a concrete execution path."
---

# Explain

The worker traces and writes; the parent edits and presents. Explanation
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

Fill only these fields in each worker assignment:

- Question: the user's request unchanged.
- Context: audience, workspace, and relevant facts or access limits.
- Instructions: section 2 verbatim.

## 2. Trace and explain

Give a working mental model of the asked behavior. Trace input to result,
highlighting the decisions and failure behavior needed to understand it.
Use source locations for the key steps.

Ground the explanation in inspected code. Label execution results and inferred
intent; name gaps that affect the answer. Use snippets or diagrams when they
clarify the flow.

Return the answer and demonstration output inline. Use one-off commands for
focused demonstrations that clarify the answer. Create files only for requested
outputs or required project tooling.

## 3. Edit and present

The parent edits the worker's answer for relevance, completeness, and clarity.
It may spot-check a specific claim; the worker owns substantial tracing.
Send concrete gaps back as bounded follow-up; continue only while resolving
them. New evidence and user steering go to the same owner.

When only worker results remain, yield for completion notifications or use
wait/join. If neither is available, report pending work separately from findings.

Present the worker's answer with light clarity edits. Finish when the question
is answered. If blocked, return what was traced, remaining unknowns, and the
smallest missing input or access needed.
