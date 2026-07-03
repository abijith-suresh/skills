---
name: tdd
description: >-
  Builds features test-first using red-green-refactor. Use only when the
  user explicitly invokes the tdd skill. Do not trigger from ordinary
  requests to add tests or implement a feature.
---

# TDD

One test. Minimal code. Never the other way around.

## What makes a good test

Tests verify behavior through public interfaces. They describe *what* the
system does, not *how*. A good test survives a complete internal refactor —
if you rename a private method or restructure an implementation and a test
breaks, that test was testing implementation, not behavior.

Bad signals:
- Mocks internal collaborators or private methods
- Breaks on rename with no behavior change
- Verifies internal state instead of observable output

Good signals:
- Reads like a spec: "user can checkout with a valid cart"
- Exercises a real code path end-to-end
- Survives refactors

## The anti-pattern: horizontal slicing

Never write all tests first and then all implementations.

```
WRONG — horizontal:
  RED:   test1  test2  test3  test4
  GREEN: impl1  impl2  impl3  impl4

RIGHT — vertical tracer bullets:
  RED → GREEN:  test1 → impl1
  RED → GREEN:  test2 → impl2
  RED → GREEN:  test3 → impl3
```

Horizontal slicing produces tests that reflect imagined behavior written
before you understood the implementation. They test shape, not behavior.

## Workflow

### 1. Plan the interface

Before writing any test, confirm with the user:

- What is the public interface? (method signatures, API endpoints,
  whatever callers use)
- Which behaviors matter most? Prioritize — you cannot test everything.

Design for testability. A small interface hiding a lot of behavior is
easier to test than a sprawling one.

### 2. Tracer bullet

Write ONE test for the most important behavior. The simplest end-to-end
path that proves the design works.

RED: Write the test. Run it. Confirm it fails for the right reason — not
a missing import, but because the behavior doesn't exist yet.

GREEN: Write the minimum code to pass. Nothing more.

### 3. Incremental loop

For each remaining behavior:

RED: Write the next test. Confirm it fails.
GREEN: Write minimum code to pass. Confirm it passes.

One test at a time. Never write the next test until the current one is
green. If the next test passes without new code, the behavior was already
covered — note it and move on.

### 4. Refactor

Once all tests are green:
- Remove duplication
- Improve names
- Simplify interfaces where possible

Run the full test suite after every refactor step. Never refactor while RED.

## Test pyramid

Invest testing effort according to the pyramid — most tests should be
small and fast, with progressively fewer at each higher level:

- **Small (unit):** pure logic, no I/O, no network, milliseconds each — the majority
- **Medium (integration):** crosses a boundary (database, API, file system, external service)
- **Large (end-to-end):** critical user flows only — keep these few

A suite of slow end-to-end tests is expensive to run and expensive to
maintain. Push coverage down to the smallest layer where it makes sense.

## What to test at each layer

**Small tests:** pure functions, domain rules, validation logic, data
transforms. No infrastructure involved. The fastest feedback loop.

**Medium tests:** behavior that crosses a layer boundary — a method that
reads from real storage, an endpoint that writes to a real database. Use
real infrastructure where practical. Avoid mocking what you own.

**Large tests:** flows a real user would run end-to-end. Reserve for the
most critical paths. Lower-layer tests should cover everything else.

## Using mocks and fakes

Prefer real implementations over test doubles. The more your tests use
real code, the more confidence they provide.

Use a mock or fake only when the real dependency is:
- Too slow (external network call, heavy process)
- Non-deterministic (time, randomness)
- Has side effects you cannot control (email sending, payment processing)

Never mock what you own. If you own the code, test it. Mocking internals
creates tests that pass while production breaks.

## Checklist per cycle

- [ ] Test describes behavior, not implementation
- [ ] Test uses public interface only
- [ ] Test would survive an internal refactor
- [ ] RED confirmed: test fails for the right reason
- [ ] GREEN: code is the minimum needed to pass this test
- [ ] No speculative code added
- [ ] Refactor complete: no duplication, clear names, full suite still green
