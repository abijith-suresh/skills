---
name: typescript
description: >-
  Implement and review TypeScript changes with accurate types, validated
  boundaries, and explicit asynchronous behavior. Use when writing, modifying,
  or reviewing TypeScript or TSX code and typed APIs.
---

# TypeScript

Apply these decisions to the requested change. Work within the repository's
runtime, TypeScript version, framework, compiler options, and conventions.
This skill does not choose a framework or upgrade configuration for style.

## Establish the contract

Inspect package scripts, the lockfile, relevant compiler configuration,
module format, and neighboring APIs. Trace callers before changing exported
types. Account for runtime behavior as well as compile-time compatibility.

## Make types carry useful information

- Represent distinct states with discriminated unions when different states
  require different data. Avoid optional-field bags that allow invalid pairs.
  Check exhaustiveness where adding a variant must require new handling.
- Treat untrusted input as `unknown`. Parse it at the boundary using the
  project's validation tools or a guard that checks the full claimed shape.
  Type annotations and assertions do not validate runtime data.
- Prefer inference locally and explicit contracts at meaningful boundaries.
  Derive related types from their owner when that prevents drift. Avoid
  clever conditional types that obscure a simple domain model.
- Prefer `satisfies` for checking a compatible shape while retaining the
  expression's inferred type. Use `as const` for intended literal/readonly
  inference. Neither validates input at runtime.
- Avoid `any`, double assertions and non-null assertions that hide a missing
  invariant. A necessary assertion around a third-party limitation needs a
  narrow scope and an explained invariant. Do not ban sound assertions by
  syntax alone.
- Brand IDs or strengthen a collection type when mixing values or a missing
  invariant creates a real bug risk. Do not brand every primitive or encode
  all business rules as type gymnastics.
- Distinguish absent, `undefined`, `null`, empty, and zero according to the
  contract. Do not use truthiness where a valid zero or empty string matters.
  Treat indexed access as potentially missing when input or bounds allow it.

## Make runtime behavior explicit

Use `import type` for type-only dependencies and respect the project's
module resolution and path aliases. Avoid barrels or wrappers that introduce
cycles or hide ownership without simplifying callers.

Await asynchronous work or deliberately handle its lifetime and errors.
Do not leave floating promises. Use concurrent promises for independent
operations; bound fan-out when resources are limited. Choose fail-fast or
partial-result behavior intentionally and account for work still running
after a rejection. Propagate cancellation to I/O where supported.

Catch `unknown` errors and narrow them. Translate errors at a boundary that
can recover or present them, preserving useful context without leaking
secrets. Use explicit timeouts and retry only with understood idempotency.

Prefer straightforward functions and owned data over generic frameworks.
Use readonly types to express ownership where useful, while remembering
that compile-time readonly does not freeze an object at runtime. For TSX,
follow the framework's state, lifecycle, and accessibility conventions.

## Verify and return

Run the repository's type check and relevant runtime tests. Verify the
changed public contract, malformed input and material asynchronous failures.
Do not use a passing compiler as evidence of boundary validation. An
installed `prove-it` can guide checking the behavior; otherwise exercise
the owning boundary directly and report the evidence and gaps.
