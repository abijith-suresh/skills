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
- Write a `description` in natural language that explains what the skill
  does and when to invoke it. Keep canonical instructions agnostic to models
  and agent platforms. State any tools or services the workflow requires.
- Use spec frontmatter fields only. `metadata` values are strings; the site
  uses `featured: "true"` to curate skills.
- Do not add automatic-invocation locks. `agents/openai.yaml` is optional
  display metadata, not invocation policy.
- Keep each skill usable on its own. Optional companion skills must have a
  standalone fallback and no dependency cycles. Loading any skill never
  expands the user's authorization.
- Add supporting references, scripts, or assets only when the workflow
  needs them. Keep skill content in `skills/`, without per-skill READMEs.
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
