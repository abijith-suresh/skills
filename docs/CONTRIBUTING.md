# CONTRIBUTING.md

Development workflow for the Agent Skills collection.

## Prerequisites

- [mise](https://mise.jdx.dev/) — tool version manager
- Node `24.14.1` — pinned in `.node-version`
- Bun `1.3.14` — pinned in `mise.toml`

```bash
mise install
bun install
```

## Local Development

```bash
bun run dev
```

Open `http://localhost:4321/skills/`.

The site uses Astro's dev server with HMR. Content changes in `skills/`
hot-reload automatically.

## Verification

```bash
bun run type-check     # Astro and TypeScript type checking
bun run lint           # Biome linting
bun run format:check   # Biome formatting check
bun run test           # Vitest tests
bun run build          # Production build
bun run verify         # Full local quality gate
```

## Project Conventions

### Branching

- Branch off `main` with a descriptive feature branch name.
- Never push directly to `main`. Branch protection is enabled.
- Linear history required — no merge commits, no force pushes.

### Commits

- Use conventional commit format: `type(scope?): summary`
- Common types: `feat`, `fix`, `docs`, `refactor`, `chore`
- Use the `commit` skill to automate clean splitting.

### PRs

- PR title must follow conventional commit format (enforced by CI).
- Open a PR from your feature branch. Wait for CI to pass.
- Squash merge into `main`.

## Creating a New Skill

1. Research reference implementations if the workflow is non-trivial.
   See AGENTS.md for recommended reference repos.
2. Create `skills/<skill-name>/SKILL.md` with the correct frontmatter
   (`name` and `description` only).
3. Update the skill catalog table in `README.md`.
4. Update the badge count in `README.md`.
5. Add an entry to `CHANGELOG.md` under `[Unreleased]`. Merge into an
   existing date section if one exists for today.
6. Install locally: replace `~/.agents/skills/<skill-name>/` with the
   new skill directory.

## Updating an Existing Skill

1. Edit `skills/<skill-name>/SKILL.md` (and any supporting files).
2. Add an entry to `CHANGELOG.md` under `[Unreleased]`.
3. Replace the locally installed copy at `~/.agents/skills/<skill-name>/`.

## Design Principles

Skills in this collection follow these rules:

- **Atomic**: each skill does one thing. No skill invokes another by name.
- **Self-contained**: a skill should work without any other skill installed.
- **Platform-agnostic**: skills detect context (GitHub vs GitLab, language,
  framework) at runtime rather than being pre-configured.
- **Intent over implementation**: skills describe what to do and why, not
  how to do it in a specific language or framework.

## Docs Site Changes

When modifying the Astro site:

- Design tokens are plain CSS custom properties in `src/styles/global.css`.
- Components live in `src/components/`.
- Content collection config is in `src/content.config.ts`.
- Business logic (catalog building, path building) lives in `src/lib/`.

Maintain the Swiss Style design language: dark-only, high contrast,
typography-driven, neutral palette, minimal decoration.

## Questions

Refer to `docs/CONTEXT.md` for scope decisions and `docs/ARCHITECTURE.md`
for technical design details.
