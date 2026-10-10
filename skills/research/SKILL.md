---
name: research
description: >-
  Resolve technical uncertainty using primary documentation and source. Use
  when working with unfamiliar APIs, checking version-sensitive behavior, or
  investigating a technical claim before choosing an implementation.
---

# Research

Answer a specific technical question with evidence relevant to the project's
actual versions. Research can inform implementation or end with an answer.

## Bound the question

State the uncertainty and what decision it affects. Inspect the project's
manifests, lockfiles, runtime configuration, and existing usage. Determine
the version or commit that matters. Do not treat the latest default branch
as evidence for an older installed release.

## Read primary sources

Start with available local source, types, official versioned documentation,
examples, and tests. Browse or clone the canonical repository only when
those do not resolve the question. Inspect the smallest relevant portion.
Record the release, commit, or retrieval date needed to interpret it.

If cloning helps, use a temporary directory or the user's existing reference
store outside the project. For an existing checkout, inspect its remote,
revision and dirty state before reuse. Never reset or clean a user-owned
clone. Use a separate checkout for a different revision. A shallow clone is
usually enough; fetch a specific tag or history only when the question needs
it.

Use a small experiment when documentation and source disagree or behavior
depends on configuration. Record exact input, version, command, and observed
output. Keep unrelated dependencies and project files out of the experiment.

## Return usable evidence

Give the answer, supporting file or source links, version, and implication
for the current task. Distinguish documented behavior, observed behavior,
and inference. State unresolved uncertainty or unavailable access rather
than filling gaps from memory.

Continue implementation only when it was part of the original request.
An installed language skill can guide that work; neither installation nor
research expands the scope.
