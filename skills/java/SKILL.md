---
name: java
description: >-
  Write maintainable Java code. Use when implementing, refactoring, or
  reviewing Java changes.
---

# Java

Work from the requested behavior or diff. Write code that fits the project's
supported Java version and existing contracts. For a review, return findings
with code locations, concrete effects, and verification gaps.

## Understand the project

Read repository instructions, affected code, callers, build configuration,
tests, and CI. Establish the module's compiler JDK, source and API target,
deployed runtime, and preview policy. The local JDK alone does not establish
what the project supports. Check official documentation for the target
release before adopting unfamiliar syntax or APIs.

Identify the expected result, important failure cases, and contracts for
nulls, mutation, ordering, ownership, and thread safety. Preserve public
behavior unless changing it is part of the request. Ask when a missing or
conflicting requirement affects the solution; continue work that does not
depend on that answer.

## Write for correctness and maintenance

Follow local naming, formatting, package boundaries, and dependency patterns.
Keep methods focused on the behavior they own. Add abstractions when they
clarify a real contract or remove meaningful duplication.

- Use domain types, parameterized collections, and the smallest useful
  visibility. Prefer immutable state when it simplifies ownership. Choose
  records and interfaces for the contract they express.
- Validate required inputs at boundaries. Distinguish expected absence from
  failure. Use `Optional` for an absent return value when it clarifies the
  API, and never return a null `Optional`. Catch failures where recovery or
  translation is useful, preserving causes. Handle interruption according
  to the operation's cancellation policy.
- Close owned resources on every exit, usually with try-with-resources.
  Leave borrowed resources to their owner. Make ownership transfers explicit,
  including lazy results that keep resources open.
- Choose collections by order, duplicates, nulls, and mutation needs.
  Distinguish a live view, a defensive copy, and deeply immutable data.
- For shared state, establish visibility and atomicity for the whole
  invariant. Define task lifetime, failure handling, cancellation, capacity,
  and executor ownership before adding concurrency.

Consult [the Java guidelines](references/guidelines.md) when checking feature
availability, equality and copying, resource lifetime, or concurrency
semantics. Read only the sections relevant to the change.

Apply framework advice only when the project uses that framework and the
change touches its behavior. Check the installed version's transaction,
proxy, serialization, persistence, or lifecycle contracts. Follow the existing
stack rather than introducing Spring, an ORM, or a new architecture.

## Verify the result

Use the project's build commands, wrapper, and configured toolchain. Compile
for its declared target and run required checks. Choose tests that exercise
observable results and affected failure paths. Check mutation isolation and
cleanup when ownership changes. For concurrency, use coordination and bounded
waits, and explain why the synchronization protects the invariant. A passing
stress test alone does not prove thread safety.

Use existing integration tests when correctness depends on framework
behavior. Run on the supported runtime when compatibility changes. Review
warnings in changed code; justify performance claims with measurements.

Return the change or findings, compatibility evidence, checks and results,
and unresolved limits. If a JDK, service, or test prerequisite is missing,
report which check is blocked and what remains unverified. Stop dependent
work when the target or contract needs a user decision.

This workflow works on its own. Skill loading never expands authorization,
including permission to upgrade Java, add dependencies, commit, publish,
or deploy.
