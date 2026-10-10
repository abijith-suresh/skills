# Contributing

## Local development

[mise](https://mise.jdx.dev/) manages the Node and Bun versions pinned in
`mise.toml`, currently Node `24.20.0` and Bun `1.4.1`.

```bash
mise install
mise exec -- bun install --frozen-lockfile
mise exec -- bun run dev
```

Open `http://localhost:4321/`. The Astro site loads its skill content from
`skills/` through `src/content.config.ts`.

## Verification

```bash
bun run verify
```

This runs type checking, linting, formatting checks, unit tests, and the
production build. If the pinned tools are not on `PATH`, use
`mise exec -- bun run verify`.

Browser tests are separate. Run `bun run test:e2e:build` to build and test,
or `bun run test:e2e` to test an existing `dist/`. They require Playwright's
Chromium, Firefox, and WebKit installations.

## Authoring skills

- Define one repeatable workflow with clear inputs, outputs, and failure
  conditions in `skills/<skill-name>/SKILL.md`.
- Follow the [Agent Skills specification](https://agentskills.io/specification).
  Use matching lowercase kebab-case names for the directory and frontmatter
  `name`.
- Keep discovery descriptions short and natural. Explain what the skill
  does and when to invoke it.
- Write plain English that captures the user's working preferences and
  reduces repeated prompting. Prescribe only the structure the task needs.
- Keep canonical instructions agnostic to models and agent platforms.
  Describe behavior and intent without platform branches, fixed agent tool or
  model names, or a mandated context mode. State any tools or services the
  workflow requires, and make assignments clear in the context a worker
  receives.
- Use spec frontmatter fields only. `metadata` values are strings; the site
  uses `featured: "true"` to curate skills.
- Do not add automatic-invocation locks. `agents/openai.yaml` is optional
  display metadata, not invocation policy.
- Keep each skill usable on its own. Optional companion skills must have a
  standalone fallback and no dependency cycles. Loading any skill never
  expands the user's authorization.
- Adapt research into useful instructions. Ship references only when using
  the skill needs that material, rather than keeping research provenance by
  default. Add scripts or assets only when the workflow needs them.
- Preserve personal and work skills as separate workflows and installations.

## Submitting changes

1. Branch from `main`. Never commit or push directly to `main`.
2. Keep each commit and PR focused on one reason to change. Use conventional
   commit messages in the form `type(scope?): summary`.
3. Update the README catalog when a skill's name or summary changes. Update
   its count when adding or removing a skill.
4. Add a dated entry under `[Unreleased]` in `CHANGELOG.md`. Add to today's
   section if one exists, and preserve history.
5. Run `bun run verify`, then open a PR against `main` for review. Wait for
   CI and review before squash merging.
