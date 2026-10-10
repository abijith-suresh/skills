---
name: java
description: >-
  Implement and review Java changes with explicit domain types, boundaries,
  resource ownership, and testable behavior. Use when writing, modifying, or
  reviewing Java code and Java API design.
---

# Java

Apply these decisions to the requested Java change. Respect the project's
JDK, framework, build, and compatibility requirements; do not upgrade them
or add a framework to enforce a style preference.

## Read the local contract

Inspect the Maven or Gradle wrapper, configured toolchain, module conventions,
static analysis, and neighboring code. Identify callers and API compatibility
before changing signatures. Use language features supported by the actual
target. Preview features require an existing project decision or authorization.

## Model the behavior

- Prefer immutable value objects. Records suit transparent data carriers
  on supported JDKs; they do not make referenced collections deeply immutable.
  Make defensive copies when the contract requires ownership.
- Use enums or sealed variants where they clarify distinct states. Avoid
  booleans and nullable field combinations that permit impossible states.
  Validate invariants at construction or input boundaries.
- Define null and absence behavior. Use `Optional` for an absent return value
  when it clarifies the API; follow framework conventions for fields and
  parameters. Do not blindly replace every nullable value with `Optional`.
- Keep equality and hashing consistent. Avoid mutable hash keys and inspect
  entity/proxy semantics before generating equality for persistence objects.
- For decimal money, use an explicit currency and rounding policy. Prefer
  `BigDecimal` from decimal strings or suitable decimal conversion over a
  binary floating-point constructor. Account for scale-sensitive `equals`.
- Use `java.time` with explicit zone semantics. Separate an instant from a
  local date or wall-clock time; use a controllable clock for time-dependent
  behavior.

## Make boundaries and ownership visible

Keep domain behavior separate from transport and persistence mapping when
the separation reduces coupling. Add an interface or service layer only
for a real boundary or multiple meaningful implementations.

Catch exceptions where recovery or translation is possible. Preserve causes,
do not return a success-shaped default after failure, and never swallow
interrupts. Prefer propagating `InterruptedException`; if caught and not
re-thrown, restore interruption and exit the interrupted operation.

Use try-with-resources for owned closeable resources. Define executor,
connection, and transaction ownership. Bound concurrency, timeouts and
retries, and retry only operations with understood idempotency. Cancellation
must stop or bound the underlying work. Virtual threads do not remove shared
state hazards or external capacity limits.

With an ORM, inspect transaction boundaries, lazy access, query count and
locking. A method name or annotation does not prove transactional behavior;
verify the framework's actual invocation path. Test database-sensitive
behavior against a representative database rather than mocks alone.

Prefer loops over streams when mutation, control flow, resource use, or
debugging becomes clearer. Avoid parallel streams for blocking work or
shared mutation. Do not introduce abstractions for one straightforward call.

## Verify and return

Run relevant tests and the project's compile/static checks using its wrapper.
Exercise changed public behavior, invalid input, and material failure paths.
Use a supported API or real dependency fixture instead of private-field
assertions. An installed `prove-it` can guide this; without it, state the
claim and demonstrate the result directly.

Review the diff for API breaks, accidental framework behavior, leaked
resources and concurrency hazards. Report what changed, evidence, and gaps.
