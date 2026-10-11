---
name: typescript
description: >-
  Write TypeScript that fits the project. Use when implementing, refactoring, or
  reviewing TypeScript code.
---

# TypeScript

Write types that describe the code's behavior and check the assumptions that
matter at runtime. Work within the requested change or review scope. Loading
this skill never expands authorization.

## Delegate substantial work

Send substantive investigation, implementation, and review to a worker by
default. If delegation is unavailable, do the workflow directly and say so.
Give the worker the requested outcome, bounded files or questions, relevant
caller and runtime contracts, project guidance, and observable completion
checks. Keep coupled edits with one worker; parallelize only independent
questions or changes. Have a separate verifier check the combined diff and
run relevant project checks. Send failures to the implementer and recheck the
correction. In review-only work, make no edits. Report evidence, gaps, and
assumptions; do not commit or publish unless requested.

Keep scope, user decisions, and the combined result with the parent. Choose a
capable worker that honors the user's model preferences, using a less costly
option when available. State in each brief what the worker may change and
what evidence to return. Point to context only when the worker can access it;
otherwise include the needed material in the brief. Direct trivial lookups or
edits when dispatch and reporting would outweigh the work.

Run workers in the background when completion notifications are supported;
acknowledge the dispatch. With notifications, when only worker results
remain, end the turn and let completion bring you back. Carry user steering into active work. Without
notifications, wait for results using an available wait or join operation.
If no wait or join operation is available, make bounded status checks at
meaningful work boundaries; do not poll rapidly. If checks do not show
completion and there is no way to await it, report pending results and what
follow-up is needed.

## Use the project's contracts

Read the relevant code, callers, tests, package scripts, installed TypeScript
version, and compiler settings, including inherited configuration. Understand
what checks types, what emits or strips them, and what loads the modules. If a
missing requirement affects correctness, inspect the project first, then ask
about what remains unclear.

Follow local conventions and the project's runtime, framework, and
dependencies. Change compiler settings or add dependencies only when the
requested behavior needs them, explaining the effect on compatibility and
scope.

## Check data at boundaries

Treat untrusted input as `unknown` until runtime checks establish the contract
used by the code. JSON parsing, annotations, assertions, and generic arguments
do not validate data. Use the project's existing parser or explicit checks for
consumed fields and domain constraints. Validate at the boundary so trusted
internal code can use the resulting type.

Narrow through checks that prove what the next operation needs. Distinguish
missing values from valid `0`, `false`, or empty strings, and check uncertain
indexed reads even if compiler settings do not flag them. Type predicates and
assertion functions need implementations that prove their claims.

## Keep types clear

Let straightforward locals and callbacks infer their types. Add explicit
contracts where they clarify public APIs or catch accidental return changes.
Use `satisfies` for authored values when supported by the installed compiler.

Use discriminated unions when fields depend on a state, and handle closed
unions exhaustively. Choose interfaces, aliases, classes, and enums for what
they express and the runtime behavior they need. Generics should preserve a
real relationship between values. Follow existing conventions instead of
replacing equivalent representations throughout the project.

Before bypassing a diagnostic, check for a missing runtime check or incorrect
contract. An assertion, non-null assertion, `any`, or suppression can bridge a
specific gap you can justify. Keep it local and explain the supporting
invariant. `readonly` and `as const` do not freeze objects at runtime.

Read the relevant [examples](references/decisions.md) when a parser, inferred
configuration, or state union would help make the contract concrete.

## Preserve runtime behavior

Match module format, resolution, imports, extensions, and package exports to
the actual loader and emitter. Keep runtime and side-effect imports when
marking imports as type-only. Check single-file transformation and type-
stripping limits before introducing syntax that needs runtime code generation.
Path mappings do not supply runtime resolution, and API declarations do not
supply runtime APIs.

Give each promise an owner that awaits, returns, or handles it. Sequence
dependent operations; run independent work concurrently when its failure
behavior permits. `Promise.all` rejection does not cancel work already
started. Inspect every result when using `Promise.allSettled`. A detached task
needs rejection handling and a runtime that lets it finish; `void` alone does
not handle rejection.

JavaScript can throw any value. Narrow caught values, preserve useful context,
and follow the project's throw or result convention. Await inside a local
`try`/`catch` when it needs to handle rejection. Preserve cleanup and
cancellation behavior, and consider duplicate effects before adding retries.

## Verify the change

Use the project's type check with its installed compiler and intended
configuration, plus relevant lint, tests, and build checks. Transpilation or
successful emit does not prove type correctness. Exercise behavior that types
cannot establish, including malformed input, missing data, failure paths, and
module loading through the real entry point. Test changed contracts and
outcomes.

Return the scoped change or actionable review findings, the checks and
results, and unresolved assumptions. Report missing tools or context and what
remains unverified. If checks fail, distinguish introduced failures from
existing ones; do not weaken settings or expand scope to conceal them.
