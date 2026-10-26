---
name: test-audit
description: 'Use when the user says "test audit".'
metadata:
  summary: "Audit existing tests and remove low-value coverage."
---

# Test audit

Audit tests in the requested scope, remove those that add no independent
evidence, and simplify production code that exists only to support them. Do not
commit, push, or open a PR unless asked.

## Audit

Read root and scoped `AGENTS.md`, test docs, and test commands. Bound to the
user's scope; if broad, work one module or package batch at a time. Read each
candidate in full, including its behavior, owner, overlapping tests, and
history. Delegate substantive batches to workers, one owner per file or
overlap; the parent owns scope, decisions, and integration, and a separate
verifier checks the combined diff and surviving contracts. Keep discovery
read-only and share candidates before editing.

For each candidate, record the test location, the contract it protects, the
credible failure it detects, stronger remaining coverage or why none is needed,
production callers of helpers, and the validation command. Treat as candidates,
not junk: assertion-free probes, self-comparisons, copied inventories, exact
source greps, duplicated private-helper checks, one contract replayed at several
layers, generated values, and mocks that perform the asserted behavior.

A test that fails under a behavior-preserving refactor is suspect, not
disposable. Keep source checks for durable external keys, bytes, or paths, and
tests for public APIs, protocols, config, migrations, storage, security,
compatibility, defaults, and observable call ordering when they enforce a
distinct contract. Static or slow tests are not deletion reasons. If a test
fails on current code, investigate before removing it; do not delete it on that
failure alone, report a possible product bug instead of changing product
behavior, and fix stale setup only within scope.

## Clean up and report

Remove a test only when it duplicates stronger coverage or protects no
meaningful contract. Work at the owning boundary, move valuable regressions to
their canonical owner, and remove test-only exports or hooks only after checking
production callers. Do not add replacement tests or delete tests for a count,
coverage, or runtime target.

Have the verifier run the smallest relevant owner and sibling tests under
repository guidance. Reuse valid evidence; rerun on a change, failure, or gap.
For a removed source-level check, run the executable test or dry run that owns
the contract. Report what ran, what could not be checked, removed coverage,
remaining proof, simplified code, and retained candidates.
