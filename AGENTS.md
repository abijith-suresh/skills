# Agent instructions

Read this file before editing the repository. Follow the development and
authoring workflow in [CONTRIBUTING.md](CONTRIBUTING.md).

## Where to look

- `README.md` covers installation and the ten-skill catalog.
- `skills/<skill-name>/SKILL.md` is the canonical content for each skill.
- `src/content.config.ts` loads the skills; `src/lib/` holds catalog and
  path logic.
- `src/consts.ts` holds site-wide URLs, titles, and descriptions.
- `src/styles/tokens.css` holds design tokens; the other stylesheets hold
  fonts, base styles, and component styles.
- `src/components/seo/` holds meta tags and structured data.
- `CHANGELOG.md` records repository changes.

Before changing the Astro site, inspect the relevant source files,
`astro.config.ts`, and the scripts in `package.json`.

## Working rules

- Use the `@/` alias for imports from `src/`.
- Preserve the site's dark, high-contrast, typography-led design and
  accessibility behavior.
- Keep skill content in `skills/`. Do not create per-skill READMEs or
  duplicate authoring and architecture manuals.
- Keep personal and work workflows distinct, including `commit` and
  `open-pr` versus `commit-work` and `open-mr`. Installation guidance is in
  `README.md`.
- Keep prose direct, with sentence-case headings and plain punctuation.
- Local skill installation is optional. Do not commit local installations.
- Use `commit` for ordinary commits and `commit-work` for ticket-scoped
  work commits. Push and open a PR only within the user's authorization.
- Run `bun run verify` before opening a PR. Use `mise exec -- bun run verify`
  if the pinned tools are not on `PATH`.
