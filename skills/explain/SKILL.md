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

## Understand the system

Use the question and conversation to understand what the user wants to learn
and what they already know. Start with a broad look at the responsibilities
and connections relevant to the question, then narrow the exploration to
specific gaps. Keep a small question small. Ask the user about intent or
decisions the code cannot resolve.

Delegate substantive exploration by default. Give workers bounded paths or
questions, the user's question and relevant context, and concrete evidence to
return. Assign one owner to overlapping exploration.

Read the implementation and relevant configuration. Use documentation,
comments, tests, and runtime observations to check your understanding. A
worker may trace one path or prepare a cohesive explanation; check its claims
against the user's question and the source evidence, then reconcile the
findings into one explanation. Keep partial analysis internal until the
relevant work is complete.

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

This skill works on its own. Companion skills are optional and must not route
back into it. Skill loading and any demonstrations stay within the user's
existing authorization.
