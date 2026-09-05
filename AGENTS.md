# Agent instructions

Read this file before editing the repository. Keep these rules aligned with
what the repository actually does.

## Where to look

- `README.md` explains the collection, its scope, and installation.
- `CONTRIBUTING.md` explains local development and contribution workflow.
- `skills/` contains the installable skills. Each skill's `SKILL.md` is its
  canonical content.
- `CHANGELOG.md` records user-visible repository changes.

There is no separate architecture document. Before changing the Astro site,
inspect the relevant files under `src/`, `astro.config.ts`, and the package
scripts.

## Repository rules

- Keep the `skills/` directory as the only source for skill content. Do not
  create per-skill README files.
- Follow the [Agent Skills specification](https://agentskills.io/specification).
  Skill directories and their frontmatter `name` fields use lowercase
  kebab-case and must match.
- A skill must define one repeatable workflow. It must work without another
  skill being installed or run.
- Skills must not automatically invoke or require other skills. A skill may
  point users to a separate workflow when that helps them continue.
- Keep repository prose direct. Use sentence-case headings, concrete claims,
  and plain punctuation.

## Adding or updating a skill

- Add a skill only when the workflow is repeated and has clear inputs,
  outputs, and failure conditions.
- Keep frontmatter to `name`, `description`, and the optional spec `metadata`
  map (site curation flags such as `featured` live there). Never add new
  top-level frontmatter keys. The description must say what
  the skill does, when agents should use it, and that users may name it
  explicitly.
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
