# ARCHITECTURE.md

Technical truth for the Agent Skills collection. Describes the repository
structure, component responsibilities, data flow, and design decisions.

## Repository Layout

```
skills/                    ← canonical skill collection (source of truth)
  <skill-name>/
    SKILL.md               ← skill definition (required)
    references/            ← optional supporting docs
    scripts/               ← optional deterministic helper scripts
    assets/                ← optional templates/resources
src/                       ← Astro docs site
  components/              ← reusable UI components
  layouts/                 ← page shell (SiteLayout)
  lib/                     ← business logic (catalog, paths, parsers)
  pages/                   ← route definitions (index, [skill])
  styles/                  ← global CSS with design tokens
docs/                      ← project documentation
  CONTEXT.md               ← product vision, goals, constraints
  ARCHITECTURE.md          ← this file
  CONTRIBUTING.md          ← development workflow
AGENTS.md                  ← agent behavior and skill authoring rules

~/.agents/skills/          ← local skill installs (outside repositories)
```

## Skill Format

Every skill is a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: <skill-name>
description: >-
  [What the skill does.]
  Use only when the user explicitly invokes the <skill-name> skill.
  Do not trigger from ordinary task requests.
---
```

The body contains the skill's workflow: goals, steps, rules, failure
conditions. No `metadata` block. Only `name` and `description` are allowed
in frontmatter.

Descriptions use explicit invocation phrases because Agent Skills has no
portable frontmatter field that disables model invocation across every
supported agent.

## Runtime State

Most skills are stateless. Local installs live under `~/.agents/skills/`
so agent-facing copies stay outside project repositories and version
control.

## Data Flow

### Build time (Astro)

```
skills/<name>/SKILL.md  ──→  content.config.ts (glob loader)  ──→  Astro collections
                                                                    │
                                              ┌─────────────────────┘
                                              ▼
                                    skill-catalog.ts (buildSkillSummaries)
                                              │
                                    ┌─────────┴─────────┐
                                    ▼                     ▼
                            pages/index.astro     pages/[skill].astro
                            (catalog landing)     (skill detail page)
```

### Content types

One Astro content collection:

**skillDefinitions** — globs `skills/*/SKILL.md`. Schema validates `name`
and `description` from frontmatter. ID is the directory slug.

### Site routing

All routes live under `/skills/` (Astro base URL):

- `/skills/` — catalog landing page
- `/skills/<skill-name>/` — skill detail page

Route generation is dynamic from the `skillDefinitions` collection. Adding
or removing a skill from the `skills/` directory automatically updates
the site at build time.

## Component Tree

```
SiteLayout (shell: head, nav, footer, scripts)
├── pages/index.astro
│   ├── PageHero (title, description, install-everything)
│   └── section header + skill list (catalog)
└── pages/[skill].astro
    ├── breadcrumb
    ├── install command
    ├── description
    └── prose container (full SKILL.md rendered content)
```

### Key components

| Component | Responsibility |
|---|---|
| `SiteLayout` | HTML shell, meta tags, font preloads, skip link, footer |
| `PageHero` | Landing page hero with eyebrow, title, description, action slot |
| `InstallCommandBlock` | Code block with copy button for install commands |
| `Footer` | GitHub link and copyright |

## Design System

Swiss-inspired developer tooling aesthetic — dark-only, high contrast,
typography-driven, and minimally decorated. Tokens are defined as CSS custom
properties in `global.css`.

Key tokens: `--color-bg`, `--color-text`, `--color-muted`,
`--color-border`, and neutral surface tints.

Fonts: IBM Plex Sans (body, headings) and IBM Plex Mono (code). Self-hosted
woff2 font files with `font-display: swap`.

Accessibility: focus-visible styles, skip-to-content link,
`prefers-reduced-motion` support, forced-colors media query, and print
stylesheet.

## Markdown Rendering

Skill Markdown is rendered through `@astrojs/markdown-satteri` with
`satteri-expressive-code` for code blocks. This matches the reference site
stack and keeps code block styling in Astro's Markdown pipeline instead of a
separate integration.

## Deployment

GitHub Pages via `withastro/action@v6` with bun package manager.
Builds on push to `main`. Route base is `/skills/`.

## CI

- **CI workflow**: `.github/workflows/ci.yml` — installs dependencies and runs
  `bun run verify` on pull requests.
- **Deploy workflow**: `.github/workflows/deploy.yml` — builds and deploys
  on push to main.
- **PR title check**: `.github/workflows/pr-title.yml` — enforces
  conventional commit format on PR titles.

## Testing

Vitest covers catalog metadata and route generation helpers. The `verify`
script runs type checking, Biome linting, format checks, tests, and a
production build.

## Design Decisions

- **Skills at repo root, not in site tree**: `skills/` is the canonical
  location. Moving them inside `src/` would couple the collection to the
  site build system. The site reads from `skills/` via Astro content
  collections.
- **SKILL.md as single source of truth**: Each skill contains only a
  `SKILL.md` file. The site renders the full SKILL.md body directly via
  Astro's content collections, eliminating the need for a separate
  README parser or per-skill README files.
- **Local installs outside repos**: Installed skill copies live under
  `~/.agents/skills/` so agent tooling does not depend on committing
  machine-local state into project repositories.
- **Astro over a static generator**: Astro's content collections provide
  type-safe, validated markdown loading with frontmatter schemas. The
  site ships zero JavaScript to the client (except the copy button script
  and scroll reveal observer).
- **GitHub Pages base route `/skills/`**: This is a project site, not a
  user site. The base path is required.
