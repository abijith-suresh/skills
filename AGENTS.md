# skills — agent brief

A personal collection of standalone agent skills for the workflows I use every day: implementation, test cleanup, commits, pull and merge requests, research, issue creation, handoffs, and writing cleanup. Each skill is platform-agnostic and installs on its own, and the repo publishes a browsable Astro catalog so the collection can be read and copied from the web.

## The Project

Core promise: `skills/` is the only source of skill content. The site reads it at build time, so a skill is written once and appears in the catalog, on its own page, and in its install command.

Non-negotiables:
- Every skill is standalone: one repeatable workflow, usable without another skill installed, and it never runs another skill.
- `skills/` is canonical. No per-skill README, no duplicated copies elsewhere.
- Directory names and frontmatter `name` values match in lowercase kebab-case and follow the Agent Skills spec.

Status: live — actively reorganizing, so keep diffs small and local.

## How I Work Here

- Quality gate: `bun run verify` before handoff. Add focused tests for behavior you change; CI owns the full suite.
- Commits: Conventional Commits; types live in `commitlint.config.ts`. Squash merges; never commit or push to `main`.
- Open a focused PR for review and leave merging to the owner.
- Adding, removing, or renaming a skill means updating the catalog and count in `README.md` and adding a dated `[Unreleased]` entry in `CHANGELOG.md`.
- User-invoked skills carry all three invocation locks together: `disable-model-invocation: true`, `agents/openai.yaml` with `policy.allow_implicit_invocation: false`, and `metadata.opencode/autoinvoke: "false"`. Missing one silently changes how the skill is discovered.
- Prose is direct: sentence-case headings, concrete claims, plain punctuation.

## Sources of Truth

| Fact | Where |
|---|---|
| Product intent | § The Project (this file) |
| Runtime behavior | code + tests |
| Commands & deps | package.json |
| Commit rules | commitlint.config.ts |

Code and tests are the authority; this file never overrides executable truth.
