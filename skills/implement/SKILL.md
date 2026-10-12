---
name: implement
description: >-
  Turn feature requests, bug fixes, and implementation plans into verified
  code. Use when the task calls for changing behavior or delivering a
  working feature.
---

# Implement

Take a feature or fix request, or an existing plan, through implementation and
verification. The parent owns coordination, user decisions, integration, and
the final result. If delegation is unavailable, perform the same workflow
directly and state that limitation.

## Assign the work

Start by delegating substantive work. Prefer a less costly capable worker,
honoring the user's model preference. Give the worker the request, supplied
diagnosis or plan, original expected behavior, claimed failure, allowed edit
scope, known constraints, and relevant repository guidance. Ask it to inspect
the requested paths and reproduce the reported failure before changing code
when practical. It owns the assigned edits and runs checks needed for its
change. Carry forward intended inputs and compatibility constraints. Existing
behavior on a reported failing input does not redefine the request.
Label reported behavior as observations and requested behavior as expectations
in worker briefs.

The parent carries forward supplied expectations and decisions, asks only
about missing intent or consequential choices the code cannot resolve, and
sets ownership for overlapping work. Use one implementer for a cohesive
change. Parallelize only independent work. Keep routine choices within the
request; do not add a plan-approval gate. A narrow single lookup or trivial
mechanical edit may stay direct only when it needs no investigation or behavior
judgment. Patch size or cheap checks alone do not make behavior changes direct.

Workers return concise findings and relevant command results in the
conversation. Standard tool output is enough by default. Create diagnostic
files, logs, or evidence bundles only when the task needs them or an existing
project convention requires them, and state their purpose. Use context
pointers only when workers can access them; otherwise provide the needed
material.

## Integrate and verify

For every behavior change or bug fix, including a small patch, a separate
verifier gets the original user request, expected behavior, and claimed failure
unchanged, plus the integrated diff. The verifier inspects the result, runs
relevant checks, and compares each requested outcome with observed behavior.
The implementer's interpretation, summary, or new tests cannot replace that
contract or its verification. Add a regression check when existing coverage
would not catch the reported failure. A mechanical edit may use direct,
proportionate checks.

The parent reviews the actual diff and verifier's observations against the
original request. It does not repeat assigned checks in place of independent
verification. Reuse completed worker checks; reading the diff does not require
another run. Rerun only if the checked code, inputs, or environment changed,
or the result leaves a concrete evidence gap. If an outcome and observation conflict, send that
specific gap to the implementer and verifier to resolve. Required repository
checks must pass, relevant failures must be resolved, and unexplained failures
must be investigated. Static checks and mocks support only the contracts they
exercise. Keep passing evidence unless a new change invalidates it. If missing
access, prerequisites, or a user decision blocks a check, report the unverified
claim and next step.

While workers run, coordinate and await their results without taking over
their assignments. If the host supports notifications, yield or end the turn
when worker results are the only work left. Otherwise use the available wait
or join operation. If the host cannot wait, report what remains pending; do not
poll rapidly or present pending results as complete.

## Finish

Return what changed, supporting checks, remaining limits, and the next step.
Commit, push, or open a PR or MR only when that is part of the authorized
outcome, following repository guidance. Do not merge or deploy unless
authorized. Delegation does not expand the user's authorization.
