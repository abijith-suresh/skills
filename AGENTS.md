# skills — agent brief

A personal collection of standalone agent skills for the workflows I use every day: implementation, test cleanup, commits, pull and merge requests, research, issue creation, handoffs, and writing cleanup. Each skill is platform-agnostic and installs on its own, and the repo publishes a browsable Astro catalog so the collection can be read and copied from the web.

## The Project

Core promise: `skills/` is the only source of skill content. The site reads it at build time, so a skill is written once and appears in the catalog, on its own page, and in its install command.

Non-negotiables:
- Every skill is standalone: one repeatable workflow, usable without another skill installed, and it never runs another skill.
- `skills/` is canonical. No per-skill README, no duplicated copies elsewhere.
- Directory names and frontmatter `name` values match in lowercase kebab-case and follow the Agent Skills spec.
- Every skill is user-invoked. Frontmatter is `name`, `description` (`Use when the user says "<say>".`), and `metadata.summary` plus optional `metadata.featured`.
- No invocation locks: no `disable-model-invocation`, no `metadata.opencode/autoinvoke`, no `agents/openai.yaml`.

Status: live — actively reorganizing, so keep diffs small and local.

## Sources of Truth

| Fact | Where |
|---|---|
| Product intent | § The Project (this file) |
| Runtime behavior | code + tests |
| Commands & deps | package.json |
| How to work here | `CONTRIBUTING.md` |
| Commit rules | commitlint.config.ts |

Code and tests are the authority; this file never overrides executable truth.
