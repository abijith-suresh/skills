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
- Skills must not run other user-invoked skills. A skill may name a follow-on
  skill in its output so the user can invoke it next.
- Keep repository prose direct. Use sentence-case headings, concrete claims,
  and plain punctuation.

## Skill invocation

User-invoked skills (git writes, forge writes, interviews, handoffs) use all
three harness controls together:

- `disable-model-invocation: true` in `SKILL.md` (Cursor, Claude Code, Pi)
- `agents/openai.yaml` with `policy.allow_implicit_invocation: false` (Codex)
- `metadata.opencode/autoinvoke: "false"` (OpenCode)

Model-invoked skills (`research`, `unslop`) omit those locks so the agent can
reach them from context. They still ship `agents/openai.yaml` with display
metadata only.

The description is the discovery API. For model-invoked skills it must say
what the skill does and when to use it. For user-invoked skills it is a short
human summary. Do not pad descriptions with "the user may also name this
skill explicitly."

## Adding or updating a skill

- Add a skill only when the workflow is repeated and has clear inputs,
  outputs, and failure conditions.
- Keep frontmatter to spec fields (`name`, `description`, optional
  `metadata`) plus `disable-model-invocation` when the skill is user-invoked.
  Never add other top-level frontmatter keys. `metadata` values are strings.
  Site curation uses `featured: "true"`. OpenCode uses
  `opencode/autoinvoke: "false"`.
- Every skill ships `agents/openai.yaml` with `interface.display_name` and
  `interface.short_description`. User-invoked skills also set
  `policy.allow_implicit_invocation: false`.
- When adding, removing, or renaming a skill, update the catalog and count in
  `README.md`.
- Add a dated entry under `[Unreleased]` in `CHANGELOG.md` for every change.
  Add to today's section when one already exists.
- Local installation is optional. Do not commit anything from `~/.agents/`.

## Git and verification

- Work on a feature branch. Never commit or push directly to `main`.
- Use the `commit` skill for ordinary commits. Use `commit-work` when every
  commit scope must include a ticket number.
- Use conventional commit messages and keep each commit focused on one reason
  to change.
- Open a pull request for review.
- Run `bun run verify` before opening the pull request.
