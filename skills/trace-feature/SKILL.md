---
name: trace-feature
description: >-
  Trace how a specific feature or code path works in the current repo,
  from entry point to side effects.
  Use when asked "how does X work", "trace the path for X", "walk me
  through feature X", or "what happens when Y".
---

# Trace Feature

Follow a specific feature or code path through the current repo
from entry to side effects. Read-only by default.

## What this is for

Use this skill when you need to understand how one thing in the
current repo works end-to-end:

- a feature ("how does checkout work")
- a request path ("what happens when a user clicks submit")
- a domain flow ("how is the invoice generated")
- a cross-cutting concern ("how is auth checked across the API")

## Default mode

Read-only. No file edits, no commits, no package installs, no test
runs without permission.

Safe inspection tools to use by default:

- `read`
- `ls`, `find`
- `rg` / `grep`
- `git log`, `git log -p`, `git blame`
- `gh issue view`, `gh pr view` when relevant

Before running tests, builds, or any command that may modify the
working tree, ask first.

Default output is chat. Do not write a doc file unless asked.

## Workflow

The trace is shallow by default — one representative flow per
entry point, with enough detail to know what's at each layer.
The user can then ask to go deep on a specific path. The skill
does not pick which path to deep-dive on its own; the user
chooses.

### 1. Anchor on the feature

If the request names a feature ambiguously, ask one focused
question to pin it down. Don't guess.

### 2. Find the entry points

Locate the seams where the feature is triggered:

- HTTP routes / RPC handlers
- CLI commands
- scheduled jobs
- event subscribers
- UI entry components

List them even if there are multiple. The path may fork.

### 3. Trace forward

Follow the execution path layer by layer:

- entry → orchestrator / controller
- validation / auth / permission checks
- domain logic
- persistence (DB writes, cache, queue)
- integrations (third-party APIs)
- side effects (logs, metrics, notifications)
- response shaping

Cite real symbols and file paths. Quote the code that matters;
don't paraphrase what you infer.

### 4. Surface the test surface

Identify the tests that cover this path. They tell you what the
system actually guarantees, not what the code *says* it does.

### 5. Call out the non-obvious

Things worth flagging:

- feature flags or config that gates the path
- error handling that swallows failures
- retry / backoff / idempotency logic
- cross-service boundaries and contracts
- places where the code's stated intent and its actual behavior
  differ

### 6. Summarize

Respond in chat using this structure:

```markdown
## Summary
## Entry points
## Path
## Side effects
## Test coverage
## Non-obvious
## Open questions
```

## Rules

- Stay read-only by default
- Default to a shallow map of all entry points; go deep on a
  specific path only when the user asks
- Cite file paths and symbols for every important claim
- If a path branches, show both branches — don't pick one silently
- If the feature is partially missing or stubbed, say so
- If you can't trace it confidently, say what blocked you
- Never present inferences as confirmed behavior
