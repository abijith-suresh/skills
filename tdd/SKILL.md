---
name: tdd
description: >-
  Build features test-first using red-green-refactor. One failing test,
  minimal code to pass, repeat. Use when the user says "let's do TDD",
  "write tests first", "red-green-refactor", "build this test-first",
  or "TDD this". Includes Java Spring Boot test layer guidance.
---

# TDD

One test. Minimal code. Never the other way around.

## What makes a good test

Tests verify behavior through public interfaces. They describe *what* the
system does, not *how*. A good test survives a complete internal refactor —
if you rename a private method and a test breaks, that test was testing
implementation, not behavior.

Bad signals:
- Mocks internal collaborators or private methods
- Breaks on rename with no behavior change
- Verifies internal state instead of observable output

Good signals:
- Reads like a spec: "user can checkout with a valid cart"
- Exercises a real code path end-to-end
- Survives refactors

See [tests.md](tests.md) for examples.

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

## Java Spring Boot test layers

| What to test | Annotation | Notes |
|---|---|---|
| Full API behavior end-to-end | `@SpringBootTest` + `MockMvc` | Best coverage, slower |
| Controller layer only | `@WebMvcTest` | Fast, catches request/response issues |
| Repository queries | `@DataJpaTest` | Spins up only JPA context |
| Real DB integration | `@SpringBootTest` + Testcontainers | Use for critical paths |
| Pure domain logic | Plain JUnit, no Spring | No context needed |

Prefer `@SpringBootTest` + `MockMvc` for behavior that crosses layers.
Use Testcontainers when the test needs a real database. Do not mock the
DB in integration tests — it defeats the purpose.

## Checklist per cycle

- [ ] Test describes behavior, not implementation
- [ ] Test uses public interface only
- [ ] Test would survive an internal refactor
- [ ] Code is the minimum needed to pass this test
- [ ] No speculative code added
