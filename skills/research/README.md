# research

Before implementing against a framework or library, clone the canonical source and read the actual API.

## What This Skill Covers

- **Target identification** — determines what framework/library/tool the implementation depends on before cloning
- **Shallow clone cache** — stores depth-1 clones in `~/.research/` and refreshes on every access
- **Reference-first implementation** — reads canonical source code instead of relying on memory
- **Direct application** — applies findings immediately without summarization

## Install

```bash
npx skills add abijith-suresh/skills --skill research
```

## Use

- "research how X is implemented"
- "look at how Y does Z"
- "use [repo URL] as reference"
- "clone [repo] for context"

## How it works

1. **Identify** — determines what framework/library/tool the task depends on.
2. **Clone** — shallow clones (`--depth 1`) into `~/.research/` if not already cached.
3. **Refresh** — fetches the latest HEAD on every access.
4. **Read** — orients on the project structure, then reads relevant source files.
5. **Implement** — writes code grounded in the patterns found.
