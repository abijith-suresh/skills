---
name: explain
description: >-
  Explain how existing code or a system works by tracing a concrete execution
  path, with source locations and clear limits on what the evidence shows.
  Use when asked to explain how this works, walk through a flow, or understand
  an unfamiliar function, feature, or subsystem.
---

# Explain

Help the user understand the behavior well enough to follow what happens
and where to look next. Explain the existing system at their level.
Do not automatically refactor, fix, or change code. Loading this skill
does not expand authorization.

## Set the scope

Use the question and conversation to identify the behavior, the user's
reason for asking, and what they already know. State a reasonable scope
and proceed when the target is clear. Ask a focused question if choosing
the wrong target would change the answer.

For a broad system, give a brief map of its responsibilities, then choose
a representative path through it. For a small function, stay with that
function and the callers needed to explain it. Avoid a repository tour.

## Trace a concrete path

Read the implementation and relevant configuration. Names, comments,
documentation, and tests can guide the search, but check their claims
against the code. For systems without accessible source, use the supplied
documentation or observations and say what they cannot establish.

Pick a concrete input or user action and follow it from its entry point
to its result. Mark invented example values as illustrative. Trace:

- What triggers the behavior and which conditions select this path.
- Which functions or components handle it, what each receives, and how
  the data changes before the next step.
- Which state is read or changed, who owns it, and how long it survives.
- Where execution crosses a module, process, service, or storage boundary,
  including the inputs, outputs, and ordering that matter to this example.
- What the user or caller receives and which side effects remain afterward.

Follow relevant failure branches from the same path. Explain where an
invalid input, missing value, or failed operation goes, whether earlier
state changes remain, and how the caller learns about the failure. Include
retries, cleanup, caching, or concurrency only when they affect the answer.
Do not invent guarantees at a boundary whose implementation is unavailable.

Inspect existing tests or runtime evidence when useful to resolve a
specific uncertainty. Run a demonstration only within the user's existing
authorization and account for its side effects. An explanation request
does not itself authorize changes to code or live systems.

## Keep evidence and intent separate

Attach source locations to the steps and claims they support. Use file
paths, symbols, and current line numbers where available, or precise
document sections and observation details otherwise. Cite the implementation
for behavior, rather than a caller's name or a test's title.

Distinguish what the inspected code does, what an executed check showed,
and what documentation says should happen. Reading a branch does not prove
that it ran in production. If sources disagree, describe the disagreement.

Explain design intent only when it helps answer the question. Attribute
documented reasons to their source. Label your own interpretation as an
inference and give its basis. Code behavior alone does not establish why
someone chose it.

When a link in the path cannot be established, name the gap and the
evidence needed to resolve it. Give the supported portion of the answer
rather than filling the gap with a plausible story.

## Deliver the explanation

Lead with a short account of what the system does. Define unfamiliar
terms as they appear, then walk through the chosen example in execution
order. Connect each component to its role in that example. Match detail
to the user's question and familiarity, and deepen the explanation when
they ask.

Use a short snippet or diagram when it clarifies a transformation or
interaction. Keep source references beside the explanation and avoid
annotating every line of code. Include the failure paths and evidence
limits that change the user's understanding. The result is the explanation
itself, not a refactoring plan or a report of files inspected.
