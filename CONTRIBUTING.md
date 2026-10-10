# Contributing

## Prerequisites

- [mise](https://mise.jdx.dev/) for managing tool versions
- Node and Bun versions pinned in `mise.toml`

```bash
mise install
bun install
```

## Run locally

```bash
bun run dev
```

Open `http://localhost:4321/` in a browser. Changes under `skills/` reload
through Astro's development server.

## Verify changes

```bash
bun run type-check
bun run lint
bun run format:check
bun run test
bun run build
bun run verify
```

`bun run verify` validates the skill packages, runs all site checks, and
builds the production site. Browser checks run with `bun run test:e2e`
after a build.

## Branches, commits, and pull requests

- Branch from `main` with a descriptive feature branch name.
- Never push directly to `main`.
- Keep each commit focused on one reason to change.
- Use conventional commit messages in the form `type(scope?): summary`.
- Open a pull request from the feature branch and wait for CI to pass.
- Squash merge the pull request into `main`.

## Add a skill

1. Create `skills/<skill-name>/SKILL.md`.
2. Follow the [Agent Skills specification](https://agentskills.io/specification).
   Use YAML frontmatter with `name`, `description`, and optional `metadata`.
   Put site flags in `metadata` as strings. Keep platform invocation policy
   out of the canonical content.
3. Make the directory name and frontmatter `name` match in lowercase
   kebab-case.
4. Write a description that says what the skill does and when to use it.
   Try a natural request that should load it and a nearby request that should
   not. Do not rely on slash commands.
5. Define the workflow's inputs, output, failure conditions, and scope.
   Keep it standalone. Optional companions may help within the authorized
   task, with a usable fallback and no dependency cycles.
6. Add `agents/openai.yaml` with display metadata and no invocation locks.
7. Add the skill to the catalog and update the count in `README.md`.
8. Add a dated entry under `[Unreleased]` in `CHANGELOG.md`.

Supporting `references/`, `scripts/`, or `assets/` directories are allowed
when a skill needs them. Do not add a per-skill README.

Use available capabilities instead of prescribing a model or agent API.
Read [docs/skill-design.md](docs/skill-design.md) for the collection's design
and migration decisions. Check substantial workflow changes against the
realistic scenarios in [docs/skill-evaluations.md](docs/skill-evaluations.md).
Metadata validation does not establish correct agent behavior.

## Update a skill

1. Edit the relevant `SKILL.md` and supporting files.
2. Update the README catalog if the skill name or catalog description changes.
3. Add a dated entry under `[Unreleased]` in `CHANGELOG.md`.
4. Run `bun run verify`.

## Change the site

- Put design tokens in `src/styles/global.css`.
- Put reusable components in `src/components/`.
- Keep content collection configuration in `src/content.config.ts`.
- Keep catalog and path logic in `src/lib/`.
- Preserve the site's dark, high-contrast, typography-led design and its
  accessibility behavior.
