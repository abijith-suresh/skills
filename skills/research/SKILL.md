---
name: research
description: >-
  Clone and reference external repositories as source-of-truth when implementing
  against frameworks, libraries, or tools where memory alone is unreliable. Use
  when implementing non-trivial integrations, unfamiliar APIs, or version-specific
  patterns. If a repo URL is provided, use it. Otherwise infer the right repo from
  context.
---

# Research

Clone the source. Pull fresh. Implement from truth — not memory.

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

### 1. Check what is already cloned

```bash
ls ~/.research/<username>/
```

If `~/.research/<username>/<repo-name>/` exists, skip to step 3.

### 2. Clone

```bash
git clone <repo-url> ~/.research/<username>/<repo-name>/
```

Notify the user briefly:
> Cloning `<username>/<repo-name>` for reference…

### 3. Pull latest

Pull once per repo, the first time it is accessed in a task. Not on every file read.

```bash
git -C ~/.research/<username>/<repo-name> pull
```

Notify the user briefly:
> Pulling latest `<username>/<repo-name>`…

If pull fails, note it briefly and continue with existing state.

### 4. Read with purpose

Orient first, then go deep on what the task needs:

```bash
cat ~/.research/<username>/<repo-name>/README.md
ls -la ~/.research/<username>/<repo-name>/
find ~/.research/<username>/<repo-name> -name "*.md" | head -20
```

Then read the specific files, modules, and examples directly relevant to the implementation.

### 5. Implement

Apply findings directly. Do not summarize or present findings unless the user explicitly asks.

## Rules

- **Inform, never ask** — say "Cloning…" or "Pulling latest…" then act immediately
- **Pull once per repo per task** — not on every file read, not never
- **Full clone only** — no `--depth 1`
- **Never clone into the project directory** — always use `~/.research/`
- **Never delete repos** — the store is persistent; cleanup is always a manual user action
- **Implement, don't narrate** — the output of this skill is working code, not a report

## Extensions

See [references/list.md](references/list.md) for the `/research list` command.
See [references/citations.md](references/citations.md) for presenting findings when the user asks.
