---
name: research
description: >-
  Clones canonical source and reads the actual API before implementing against
  a framework or library. Use when implementing against unfamiliar APIs or
  libraries.
metadata:
  featured: "true"
---

# Research

Clone the source shallow. Read the actual docs. Implement from truth.

## Store

All repos live at `~/.research/<username>/<repo-name>/`.

```
~/.research/
  vercel/
    next.js/
  tailwindlabs/
    tailwindcss/
  facebook/
    react/
```

This persists across sessions. Repos are never deleted automatically.

## Resolve the repository

**If the user provides a URL** — use it directly.

**If no URL is provided** — infer from context:

- Identify the framework, library, or tool being implemented against
- Find the canonical repo (official org, actively maintained, default branch)
- If genuinely ambiguous between multiple repos, ask before cloning

## Core workflow

### 1. Identify target

Determine what framework, library, or tool the implementation depends on.

- If the user gives a URL, that is the target.
- Otherwise, inspect project files (`package.json`, imports, config files) to
  identify dependencies the implementation will interact with.
- Be explicit about what you are researching before you clone.

### 2. Clone shallow

```bash
git clone --depth 1 <repo-url> ~/.research/<username>/<repo-name>/
```

If it already exists, skip to step 3.

Notify the user briefly:
> Cloning `<username>/<repo-name>` for reference…

### 3. Refresh

Before each research pass, refresh to the latest commit:

```bash
git -C ~/.research/<username>/<repo-name> fetch --depth 1 origin HEAD
git -C ~/.research/<username>/<repo-name> reset --hard FETCH_HEAD
```

This keeps the clone at depth 1 forever — no history bloat.

Notify the user briefly:
> Refreshing `<username>/<repo-name>`…

If refresh fails, note it briefly and continue with the existing state.

### 4. Orient

Build a mental map of the project:

```bash
cat ~/.research/<username>/<repo-name>/README.md
ls -la ~/.research/<username>/<repo-name>/
find ~/.research/<username>/<repo-name> -name "*.md" | head -20
```

Focus on:

- What does the project export or expose?
- Where are the source files (src/, lib/, packages/)?
- Are there examples or tests that show real usage patterns?

### 5. Read with intent

Read the specific files, modules, types, tests, or examples directly relevant
to the code you are about to write. Not browsing — targeted reading driven by
what the implementation needs.

### 6. Implement

Write code that mirrors the patterns found. This is the implicit output of the
skill — the research exists to ground implementation in source truth.

## Rules

- **Inform, never ask** — say "Cloning…" or "Refreshing…" then act immediately
- **Shallow clone only** — always `--depth 1`. Full clones waste disk space.
- **Refresh before each research pass** — fetch the latest HEAD before reading.
  A stale reference is worse than no reference.
- **Never clone into the project directory** — always use `~/.research/`
- **Never delete repos** — the store is persistent; cleanup is always a manual
  user action
- **Implement from truth** — the output of this skill is working code grounded
  in the source, not a summary or report

## Delegation

Delegate substantive source investigation with the target, question, relevant
repository context, bounded scope, and a request for source locations and
observed evidence. The parent owns target resolution, conclusions, and
implementation decisions. For broad research, sweep first, then assign focused
reads for the questions that matter; do not ask workers to repeat discovery.

One owner refreshes a shared clone. Keep its revision stable while workers read
it. If concurrent refresh or reads could change what they see, use snapshots or
isolated clones. Do not run duplicate refreshes. Reconcile findings against the
source before implementing, and report refresh failures or unresolved ambiguity.

Keep scope, user decisions, and the combined result with the parent. Prefer a
less costly capable worker, honoring the user's model preferences. Include
applicable guidance and authorization limits in each brief, and use context
pointers only when the worker can access them. Keep coordination with the
parent and avoid repeating completed discovery. Parallelize independent work
and sequence dependencies. Trivial lookups or edits can stay direct when
worker setup and reporting would outweigh the work.

Run workers in the background when completion notifications are supported.
When only worker results remain, acknowledge the launch and end the turn;
let completion bring you back. Carry user steering into active work and keep
partial worker analysis internal. If notifications are unavailable, use the
supported completion mechanism and state the limitation. If delegation is
unavailable, perform the workflow directly and say so.
