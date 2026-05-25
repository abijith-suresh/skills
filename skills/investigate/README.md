# investigate

Analyze the current repository in a read-only way before deciding what to change.

## What This Skill Covers

- **Read-only analysis** — traces code paths and behavior without modifying files
- **Evidence-based findings** — collects facts from symbols, configs, tests, and git history
- **Structured reporting** — produces INVESTIGATION.md with summary, evidence, and recommendations
- **Safe exploration** — asks before running tests, builds, or any tree-modifying commands

## Install

```bash
npx skills add abijith-suresh/skills --skill investigate
```

## Use

- "investigate how this story is implemented"
- "analyze this bug path"
- "trace how X currently works"
- "help me understand the existing implementation"

## How it works

1. **Read-only** — never modifies files. All analysis is done in-memory.
2. **Trace** — follows code paths to understand how features work.
3. **Document** — produces an INVESTIGATION.md with findings.
4. **Report** — presents a structured summary of what was discovered.
