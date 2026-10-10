---
name: java
description: >-
  Write, refactor, or review Java code for correctness and maintainability.
  Use when implementing Java behavior, designing Java APIs, or reviewing
  Java changes against a project's supported Java version and conventions.
---

# Java

Turn a Java task into a bounded change with explicit contracts and evidence
that it works on the project's supported Java version. For a review, produce
findings and verification gaps instead of editing files.

## Inputs and scope

Start from the requested behavior or diff, affected source files, and access
to the project's build configuration and tests. Inspect surrounding callers
and implementations to establish the existing contract.

Work within the user's request. Loading this skill grants no permission to
upgrade Java, add frameworks or dependencies, change public contracts, commit,
publish, or deploy. The workflow needs no other skill or particular agent,
editor, operating system, or build tool.

## Workflow

### 1. Establish compatibility

Read repository instructions, build files, toolchains, wrappers, CI, and
runtime configuration. Record the compiler JDK, source/API target, deployed
runtime, and preview policy for the affected module. A local `java -version`
alone does not establish any of these project requirements.

Use APIs and syntax supported by that target. Check release-specific official
documentation and `Since` tags before adopting unfamiliar features. Resolve
conflicting version declarations before a version-dependent change. If the
target is unknown, ask when it affects the solution and continue independent
inspection. Do not assume the latest Java or enable preview features.

Read [Compatibility](references/guidelines.md#compatibility) for target checks
and common feature gates.

### 2. Define the contract

State the expected result and important failure cases before implementing.
Identify nullability, valid values, mutation, ordering, resource ownership,
and any thread-safety requirements. Preserve established public behavior
unless the requested change includes changing it.

Use types that express the domain, parameterized collections, and the
smallest useful visibility. Prefer immutable state when it simplifies
ownership. Choose classes, records, interfaces, and exceptions for the
contract, not to follow a new language feature or framework convention.

Consult [Types and APIs](references/guidelines.md#types-and-apis) and
[Nulls and errors](references/guidelines.md#nulls-and-errors) when those
contracts change.

### 3. Implement or inspect the change

Follow local naming, formatting, package boundaries, and dependency patterns.
Keep methods focused on the behavior they own. Add abstractions when they
clarify an actual contract or remove meaningful duplication.

Check the concerns touched by the task:

- Validate required inputs at boundaries. Distinguish absence from failure,
  preserve exception causes, and handle interruption as cancellation.
- Close resources owned by the operation on every exit. Make any transfer
  of ownership explicit, including lazy results that keep resources open.
- Choose collections by ordering, duplicates, nulls, and mutation needs.
  Distinguish a live view, a defensive copy, and deeply immutable data.
- For shared state, establish visibility and atomicity for the whole
  invariant. Define task lifetime, cancellation, capacity, and executor
  ownership before adding concurrency.

Read the relevant sections on [resources](references/guidelines.md#resources),
[collections](references/guidelines.md#collections), or
[concurrency](references/guidelines.md#concurrency) for examples and traps.

Apply framework guidance only when the project uses that framework and the
change touches its behavior. Verify the installed version's contracts for
transactions, proxies, serialization, persistence, or lifecycle management.
Do not impose Spring, an ORM, or a new architectural stack.

### 4. Verify and report

Use the project's documented build and checks, including its wrapper and
configured toolchain when present. Compile for the declared target and run
focused tests that exercise observable behavior and affected failure paths.
Run required repository checks before reporting completion.

Read [Verification](references/guidelines.md#verification) to select evidence
for the contract. Do not equate compilation or coverage with correctness.

Report the change or review findings, compatibility evidence, commands and
results, and remaining limitations. Locate review findings in the code and
explain their concrete effect. If a JDK, service, or test prerequisite is
missing, report the blocked check and its impact. Stop dependent work when
version conflicts or an unresolved contract require a user decision. Never
silently upgrade the project or claim an unrun check passed.
