---
name: implement-from-source
description: >-
  Clones canonical library source, reads the real API, then implements
  against it. Use when writing code against an unfamiliar framework or
  library.
metadata:
  featured: "true"
---

# Implement from source

Clone the library. Read the types, tests, and exports you will call. Then
write code that matches that API. The output is working code, not a
research note.

## Store

Clones live at `~/.research/<username>/<repo-name>/`. The path is leftover
from the old skill name. Keep using it so existing clones still work.

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

## Repo resolution

If the user provides a URL, use it.

If they do not, infer from context:

- Identify the framework, library, or tool the new code will call
- Find the canonical repo (official org, actively maintained, default branch)
- If two repos are genuinely plausible, ask before cloning

## Core workflow

### 1. Identify the target

Name the dependency the implementation will call.

- A URL from the user is the target.
- Otherwise inspect `package.json`, imports, and config to find it.
- Say what you are cloning before you clone.

### 2. Clone if missing

```bash
git clone --depth 1 <repo-url> ~/.research/<username>/<repo-name>/
```

If that directory already exists, skip clone.

Notify briefly:
> Cloning `<username>/<repo-name>` for reference.

### 3. Refresh without destroying local edits

On every access:

```bash
git -C ~/.research/<username>/<repo-name> fetch --depth 1 origin HEAD
git -C ~/.research/<username>/<repo-name> status --porcelain
```

If the working tree is **dirty**, do not reset. Warn:

> Local changes in `~/.research/<username>/<repo-name>`. Leaving them in
> place and reading that tree.

If the working tree is **clean**:

```bash
git -C ~/.research/<username>/<repo-name> reset --hard FETCH_HEAD
```

If fetch fails, note it and continue with the existing tree.

### 4. Orient from the API, not the README tour

Find the export you will call:

- `package.json` `exports` / `main` / `types`
- The type definition or source next to that export
- Tests or examples that exercise that API

Do not start with `cat README` and `find | head`. Use those only when you
cannot find an entrypoint.

### 5. Read with intent

Read the files that define the call you are about to write. Types, tests,
and the implementation of that export. Stop when you can write the call
correctly.

### 6. Implement

Write the project code. Mirror patterns from the clone. The skill is done
when that code exists, not when you have summarized the library.

## Rules

- Say "Cloning." or "Refreshing." then act. Ask only when the repo itself
  is ambiguous.
- Shallow clone only. Always `--depth 1`.
- Never `reset --hard` over a dirty clone.
- Never clone into the project directory. Always `~/.research/`.
- Never delete repos. Cleanup is a manual user action.
- Output is working code grounded in that source, not a report.
