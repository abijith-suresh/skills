---
name: research
description: >-
  Clones canonical source and reads the actual API before implementation
  against a framework or library. Invoke when implementing against unfamiliar
  APIs or libraries. The user may also name this skill explicitly.
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

## Repo Resolution

**If the user provides a URL** — use it directly.

**If no URL is provided** — infer from context:

- Identify the framework, library, or tool being implemented against
- Find the canonical repo (official org, actively maintained, default branch)
- If genuinely ambiguous between multiple repos, ask before cloning

## Core Workflow

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

On every access, refresh to the latest commit:

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
- **Refresh on every access** — always fetch the latest HEAD before reading.
  A stale reference is worse than no reference.
- **Never clone into the project directory** — always use `~/.research/`
- **Never delete repos** — the store is persistent; cleanup is always a manual
  user action
- **Implement from truth** — the output of this skill is working code grounded
  in the source, not a summary or report
