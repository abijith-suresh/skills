# skills — agent brief

A personal collection of standalone agent skills, published as a browsable Astro catalog with install commands. For agents and maintainers changing this repo.

## The Project

Core promise: `skills/` is the only source of skill content. The site reads each `skills/<name>/SKILL.md` at build time and renders the catalog, per-skill pages, and install commands. Add a skill once; the site picks it up.

Non-goals: no runtime or hosted registry, no duplicated skill copies, no per-skill README, no separate architecture document.

Status: live — actively reorganizing, so keep diffs small and local.

## How I Work Here

- Quality gate: `bun run verify` — runs type-check, lint, format check, unit tests, and build. Run before handoff. Playwright smoke tests are separate (`bun run test:e2e`, needs browsers installed once).
- Commits: Conventional Commits; types live in `commitlint.config.ts` (72-char header limit, no trailing period). Squash merges; never commit or push to `main`.
- Import from `src/` with the `@/` alias, not relative climbs.
- Skill directory names and frontmatter `name` values must match in lowercase kebab-case. Frontmatter stays on spec fields (`name`, `description`, optional `metadata`) plus `disable-model-invocation`; `metadata` values are strings.
- User-invoked skills carry all three invocation locks together: `disable-model-invocation: true`, `agents/openai.yaml` with `policy.allow_implicit_invocation: false`, and `metadata.opencode/autoinvoke: "false"`. Model-invoked skills omit them.
- One repeatable workflow per skill. It must work standalone; it may name a follow-on skill in output but never runs one.
- Adding, removing, or renaming a skill means updating the catalog and count in `README.md` and adding a dated `[Unreleased]` entry in `CHANGELOG.md`.
- Prose is direct: sentence-case headings, concrete claims, plain punctuation.
- Git hooks: pre-commit runs lint-staged (Biome), commit-msg runs commitlint, pre-push runs the full verify.

## Sources of Truth

| Fact | Where |
|---|---|
| Product intent | § The Project (this file) |
| Runtime behavior | code + tests |
| Commands & deps | package.json |
| Commit rules | commitlint.config.ts |

Code and tests are the authority; this file never overrides executable truth.

## Getting Around

- `skills/<name>/SKILL.md` — canonical skill content; optional `references/`, `scripts/`, `assets/`.
- `src/content.config.ts` — content collection ingesting `skills/*/SKILL.md`, plus the frontmatter schema.
- `src/lib/` — catalog, paths, route metadata, heading stripping, OG image rendering; unit tests sit beside sources.
- `src/pages/` — Astro routes: home, `all`, `[skill]`, `404`, and the OG image endpoint. `trailingSlash` is `always`.
- `src/components/`, `src/layouts/` — UI, SEO, install command block, site shell.
- `src/styles/` — design tokens and base styles; `src/consts.ts` — site URL, title, description.
- `tests/e2e/` — Playwright smoke coverage of the built site.
