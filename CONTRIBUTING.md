# Contributing

## Prerequisites

- [mise](https://mise.jdx.dev/) for managing tool versions
- Node `24.19.0`, pinned in `.node-version`
- Bun `1.3.14`, pinned in `.bun-version` and `mise.toml`

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

`bun run verify` runs all checks and the production build.

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
   Add `disable-model-invocation: true` when the skill should only run when
   named. Put site flags and OpenCode invocation in `metadata` as strings.
3. Make the directory name and frontmatter `name` match in lowercase
   kebab-case.
4. Write a short description. For model-invoked skills include when to use
   it. For user-invoked skills, keep it a human summary.
5. Keep the workflow standalone. It must not require or run another skill.
6. Add `agents/openai.yaml` with display metadata. User-invoked skills also
   set `policy.allow_implicit_invocation: false`.
7. Add the skill to the catalog and update the count in `README.md`.
8. Add a dated entry under `[Unreleased]` in `CHANGELOG.md`.

Supporting `references/`, `scripts/`, or `assets/` directories are allowed
when a skill needs them. Do not add a per-skill README.

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
