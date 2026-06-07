# ARCHITECTURE.md

Technical truth for the Agent Skills collection. Describes the repository
structure, component responsibilities, data flow, and design decisions.

## Repository Layout

```
skills/                    ← canonical skill collection (source of truth)
  <skill-name>/
    SKILL.md               ← skill definition (required)
    README.md              ← install instructions and example triggers (required)
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
```

## Skill Format

Every skill is a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: <skill-name>
description: >-
  [One-line description with trigger phrases.]
---
```

The body contains the skill's workflow: goals, steps, rules, failure
conditions. No `metadata` block. Only `name` and `description` are allowed
in frontmatter.

Each skill directory also contains a `README.md` with standardized sections:
What This Skill Covers, Install, Use, How it works, and optional Requirements
and Resources.

## Data Flow

### Build time (Astro)

```
skills/<name>/SKILL.md  ──→  content.config.ts (glob loader)  ──→  Astro collections
skills/<name>/README.md ──→  content.config.ts (glob loader)  ──→  Astro collections
                                                                    │
                                              ┌─────────────────────┘
                                              ▼
                              skill-catalog.ts (buildSkillSummaries, parseReadmeBody)
                                              │
                                    ┌─────────┴─────────┐
                                    ▼                     ▼
                            pages/index.astro     pages/[skill].astro
                            (catalog landing)     (skill detail page)
```

### Content types

Two Astro content collections:

1. **skillDefinitions** — globs `skills/*/SKILL.md`. Schema validates `name`
   and `description` from frontmatter. ID is the directory slug.
2. **skillReadmes** — globs `skills/*/README.md`. No schema — body is
   parsed at page render time.

Both collections use the same ID scheme (skill directory slug), so entries
are joinable by ID.

### README parser (`parseReadmeBody`)

Parses README body into structured sections by matching `##` headings:
What This Skill Covers, Install, Use, How it works, Requirements, Resources.
The parser extracts the name from `# heading` and description from the first
paragraph after it. This is intentionally simple — READMEs follow the
standardized format defined in AGENTS.md.

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
│   └── SectionHeader + skill list (catalog)
└── pages/[skill].astro
    ├── SkillPageNav (back link)
    ├── skill hero (name, description, install command)
    ├── SkillSection × N (parsed README sections)
    └── SkillSection (SKILL.md rendered content)
```

### Key components

| Component | Responsibility |
|---|---|
| `SiteLayout` | HTML shell, meta tags, fonts, view transitions, copy-to-clipboard script |
| `PageHero` | Landing page hero with eyebrow, title, description, action slot |
| `SectionHeader` | Thin border-top divider with eyebrow text |
| `SkillSection` | Content section with heading and body; `tinted` variant for the SKILL.md block |
| `SkillPageNav` | Back link to catalog with arrow icon |
| `InstallCommandBlock` | Code block with copy button for install commands |
| `ScrollReveal` | IntersectionObserver-based stagger animation (respects reduced-motion) |
| `Footer` | GitHub link and copyright |

## Design System

Swiss Style (International Typographic Style) — dark-only, high contrast,
typography-driven. Tokens are defined as CSS custom properties via
`@theme inline` in `global.css`.

Key tokens: `--color-base` (#111111), `--color-text` (#F4F4F4),
`--color-accent` (#F5A623), `--color-border` (#2A2A2A).

Fonts: Manrope (sans), JetBrains Mono (mono). Served via Google Fonts with
preconnect hints.

Accessibility: focus-visible styles with accent outline, skip-to-content
link, `prefers-reduced-motion` support, forced-colors media query, print
stylesheet.

## Deployment

GitHub Pages via `withastro/action@v6` with bun package manager.
Builds on push to `main`. Route base is `/skills/`.

## CI

- **Deploy workflow**: `.github/workflows/deploy.yml` — builds and deploys
  on push to main.
- **PR title check**: `.github/workflows/pr-title.yml` — enforces
  conventional commit format on PR titles.

## Testing

No tests are configured. `vitest` is in devDependencies but unused.
The `test` script is a no-op. Candidate areas for test coverage:
- `skill-catalog.ts` (buildSkillSummaries, parseReadmeBody)
- `site-paths.ts` (buildCatalogPath, buildSkillPath)
- Content collection schema validation

## Design Decisions

- **Skills at repo root, not in site tree**: `skills/` is the canonical
  location. Moving them inside `src/` would couple the collection to the
  site build system. The site reads from `skills/` via Astro content
  collections.
- **Custom README parser over a markdown library**: The parser extracts
  structured data (sections, name, description) from markdown. Using a
  full AST parser added complexity without benefit since all READMEs
  follow the same template.
- **Astro over a static generator**: Astro's content collections provide
  type-safe, validated markdown loading with frontmatter schemas. The
  site ships zero JavaScript to the client (except the copy button script
  and scroll reveal observer).
- **GitHub Pages base route `/skills/`**: This is a project site, not a
  user site. The base path is required.
