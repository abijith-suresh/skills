---
name: typescript
description: >-
  Write and review TypeScript with checked runtime boundaries, clear types, and
  project-compatible modules. Use when implementing, refactoring, or reviewing
  TypeScript code.
---

# TypeScript

Turn a requested TypeScript change into code whose types describe its behavior
and whose runtime assumptions are checked where needed.

## Inputs and scope

Use the requested behavior or review scope, affected code, project configuration,
and runtime as inputs. If a missing contract affects correctness, inspect callers
and tests first, then ask for the unresolved requirement. Loading this skill grants
no additional authorization. It works without companion skills or specific tools.

## Workflow

### 1. Establish the project contract

Read local instructions, package scripts, the installed TypeScript version,
relevant `tsconfig` files including inherited settings, and nearby code. Identify
who checks types, who emits or strips them, and what loads the resulting modules.
Check public callers, input sources, and existing error conventions.

Respect the project's framework, runtime, dependency choices, and compiler
settings. Propose configuration changes only when the requested behavior requires
them, explaining compatibility and scope. Do not turn a local edit into a compiler
migration or add a validation library merely to follow this skill.

### 2. Write types that carry evidence

- Treat external data as `unknown` until validated. JSON parsing, annotations,
  assertions, and generic type arguments do not validate a value. Use an existing
  schema parser or explicit runtime checks for the fields and domain constraints
  consumed by the code. Establish where validation belongs rather than repeating
  it throughout trusted internal paths.
- Let straightforward local values and callbacks infer their types. Add explicit
  contracts where they clarify public APIs or prevent accidental return changes.
  Use `satisfies` for compatibility checks on authored values when supported;
  it provides no runtime validation.
- Narrow with control flow and checks that prove the needed property. Distinguish
  missing values from valid falsy values. Check uncertain indexed reads even when
  compiler settings do not expose them. A type predicate or assertion function is
  a promise whose implementation needs evidence and tests.
- Model mutually exclusive states with discriminated unions when this prevents
  invalid combinations. Use exhaustive handling for closed unions. Choose
  interfaces, aliases, generics, classes, or enums for the contract and runtime
  behavior they express, following local conventions. Generics should preserve a
  real relationship between values.
- Use assertions, non-null assertions, `any`, or diagnostic suppressions only for
  a specific gap you can explain. Keep them local and record the supporting
  invariant or compatibility constraint. Repair missing checks or incorrect types
  before bypassing diagnostics. `readonly` expresses static access restrictions;
  it does not freeze runtime objects.

Read the relevant examples in [Type and boundary decisions](references/decisions.md#type-and-boundary-decisions)
when choosing validation, inference, or state representations.

### 3. Preserve runtime behavior

Match imports, exports, extensions, and type-only imports to the actual loader
and emitter. Check module format, resolution, package exports, runtime APIs, and
syntax support before introducing features. Type declarations and path aliases
alone do not make an import or API work at runtime.

Give each promise an owner that awaits, returns, or deliberately handles it.
Choose sequencing or concurrency according to dependencies and failure behavior.
Narrow caught values before accessing them; JavaScript can throw any value.
Follow the established throw or result convention and preserve useful failure
context. Avoid converting a failure into an apparent success or adding retries
without considering duplicate effects.

Read [Module compatibility](references/decisions.md#module-compatibility) for
loader or compiler questions, and [Async and errors](references/decisions.md#async-and-errors)
when changing asynchronous behavior.

### 4. Verify the contract and report

Run the project's type check with its installed compiler and intended project
configuration, plus relevant lint, tests, and build checks. A transpile-only test
runner or successful emit does not prove type correctness. Verify runtime behavior
where types cannot help, especially malformed input, missing data, failure paths,
and imports through the real entry point. Add tests for changed contracts and
observable outcomes rather than duplicating the implementation.

Deliver the scoped code change, or actionable findings for a review-only request,
with checks run, results, and remaining assumptions. If required context or tools
are missing, report the specific blocker and what remains unverified. If checks
fail, distinguish introduced failures from existing ones and stop short of
claiming completion; do not weaken settings or expand scope to conceal them.
