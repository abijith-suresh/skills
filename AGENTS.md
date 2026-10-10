# Agent instructions

Read this file before editing the repository. Keep these rules aligned with
what the repository actually does.

## Where to look

- `README.md` explains the collection, its scope, and installation.
- `CONTRIBUTING.md` explains local development and contribution workflow.
- `skills/` contains the installable skills. Each skill's `SKILL.md` is its
  canonical content.
- `src/consts.ts` holds site-wide config (URLs, titles, descriptions).
- `src/styles/` holds the design tokens, base styles, and component styles.
- `src/components/seo/` holds the SEO meta and structured data components.
- `CHANGELOG.md` records user-visible repository changes.

There is no separate architecture document. Before changing the Astro site,
inspect the relevant files under `src/`, `astro.config.ts`, and the package
scripts.

## Repository rules

- Use `@/` path alias for all imports from `src/`.
- Keep the `skills/` directory as the only source for skill content. Do not
  create per-skill README files.
- Follow the [Agent Skills specification](https://agentskills.io/specification).
  Skill directories and their frontmatter `name` fields use lowercase
  kebab-case and must match.
- A skill must define one repeatable workflow. It must work without another
  skill being installed or run.
- Skills may use installed companions within the authorized task. Keep
  composition optional, provide a standalone path, and avoid dependency
  cycles. Loading a skill never expands authorization.
- Keep skill bodies independent of models and agent platforms. Put optional
  tool-specific examples in supporting references. Discover capabilities
  instead of assuming model IDs, tool names, or shared filesystems.
- Keep repository prose direct. Use sentence-case headings, concrete claims,
  and plain punctuation.

## Skill invocation

All skills support natural-language discovery. Descriptions say what the
skill does and when to use it, with boundaries that prevent common routing
mistakes. Do not add automatic-invocation locks. `agents/openai.yaml` provides
optional display metadata only; the canonical workflow lives in `SKILL.md`.

Discovery is not authorization. Analysis does not authorize a fix or tracker
updates. Committing does not authorize pushing. Reuse authorization already
present in the task instead of adding redundant confirmation steps.

`prove-it`, `java`, `typescript`, and `writing` can apply during an existing
task. `orchestration` applies when delegated work is requested. Hosts decide
whether to load skills; descriptions cannot guarantee it across platforms.

## Adding or updating a skill

- Add a skill only when the workflow is repeated and has clear inputs,
  outputs, and failure conditions.
- Keep frontmatter to spec fields (`name`, `description`, optional
  `metadata`). `metadata` values are strings. Site curation uses
  `featured: "true"`. Do not put platform policy in the canonical content.
- Every skill ships `agents/openai.yaml` with `interface.display_name` and
  `interface.short_description`. Do not require this file to run a skill.
- When adding, removing, or renaming a skill, update the catalog and count in
  `README.md`.
- Add a dated entry under `[Unreleased]` in `CHANGELOG.md` for every change.
  Add to today's section when one already exists.
- Local installation is optional. Do not commit anything from `~/.agents/`.

## Git and verification

- Work on a feature branch. Never commit or push directly to `main`.
- Use the `commit` skill. Resolve any required ticket scope from the project
  conventions and task rather than using a separate skill.
- Use conventional commit messages and keep each commit focused on one reason
  to change.
- Open a pull request for review.
- Run `bun run verify` before opening the pull request.
