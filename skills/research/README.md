# research

Clone and reference external repositories as source-of-truth when implementing against frameworks, libraries, or tools.

## What This Skill Covers

- **Persistent repo cache** — stores clones in ~/.research/ and pulls latest once per session
- **Reference-first implementation** — reads canonical source code instead of relying on memory
- **Direct application** — applies findings immediately without unnecessary summarization
- **Repository resolution** — infers canonical repos from context when no URL is provided

## Install

```bash
npx skills add abijith-suresh/skills --skill research
```

## Use

- "research how X is done"
- "look at how Y implements Z"
- "use [repo URL] as reference"
- "clone [repo] for context"
- "I need to understand how [library/framework] works before implementing"
- "/research list" — list all cached repos

## How it works

1. **Locate** — checks if the repo is already cloned in `~/.research/`.
2. **Clone** — if not found, clones the full repo (no shallow copies).
3. **Pull** — fetches latest changes once per session.
4. **Read** — reads README, directory structure, and relevant source files.
5. **Implement** — applies findings directly without summarization.

## Resources

- [references/list.md](references/list.md) — the `/research list` command
- [references/citations.md](references/citations.md) — presenting findings when the user asks
