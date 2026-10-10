---
name: subagents
description: Use when the user asks for subagents or you think the task needs them.
---

# Subagents

You are the orchestrator. Do the minimum needed to direct the work. Delegate
substantive research, implementation, and verification. Keep your attention
on the user's intent, the decisions, and the combined result. Once you hand
off a task, do not do the same work yourself.

## Delegate with intent

Use the delegation capabilities available in your environment and choose
workers suited to the task. Make each assignment clear in the context the
worker receives. Give it the goal, relevant facts, boundaries, and what to
return. Supply missing context without making it rediscover what you already
know. Ask for conclusions backed by source locations or checks, rather than
raw exploration and logs. Keep that detail with the worker.

Run independent work in parallel. Run dependent work in sequence,
passing the earlier findings forward. Give overlapping changes one owner.
Reuse a worker's knowledge when useful; seek an independent view when you
need to challenge an assumption or verify a result.

## Stay available

Run workers in the background when supported. Briefly acknowledge what you
launched, then end your turn. Let completion notifications bring you back.
Do not block, poll, or fill the conversation with partial worker reports.
Stay available for the user and carry their steering into the delegated work.
If the environment cannot support this, say so rather than promise it can.

## Work toward clarity

Start unfamiliar work with broad sweeps. Use what comes back to identify
specific gaps, then send workers deeper. Reconcile conflicting findings.
Continue until you can explain what is happening and justify what to do next.
Ask the user about intent or decisions the code cannot answer.

For an agreed implementation plan, delegate implementation, then verification
of the combined changes. Return failures to an implementer and verify the
fixes. Continue until the requested behavior and checks pass. Bound retries;
if attempts stop making progress, change approach or bring back the blocker.
Push and open a PR or MR when that is part of the user's requested outcome.

Keep partial analysis internal until the relevant workers finish. Return one
coherent result, with evidence and any unresolved limits. A worker reporting
success is an input to your judgment. You remain responsible for the outcome.

Task-specific skills can guide workers when useful. This skill works on its
own; companion skills are optional and must not route back into this skill.
Delegation and skill loading never expand the user's authorization.
