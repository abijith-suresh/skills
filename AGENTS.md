# Skills agent brief

This collection turns short request keywords into composable workflows. Requests
such as "implement X", "verify branch Y", or "grill me" trigger skills.
"Implement, verify and open a PR" chains skills and ends with the PR or MR link.

The main agent plans, dispatches subagents, integrates their work and reports.
Subagents do the actual work and never start their own subagents. Skills do not
hardcode a model, provider or harness. Use the model the user names per request,
such as "using deepseek". If unavailable, say so without substituting. Otherwise
use the harness default.

## Content rules

- `skills/` is canonical. The Astro site reads it at build time. Do not duplicate
  skill content or add per-skill READMEs.
- Directory names and frontmatter `name` values match in lowercase kebab-case.
  Follow the Agent Skills specification.
- Frontmatter includes `name`, `description`, `metadata.summary` and
  `metadata.scope`. Optional `metadata.featured: "true"` curates the site.
- Scope is `personal`, `work`, or `personal work`. Personal means the GitHub
  laptop; work means the separate GitLab and Jira laptop. There is no `common` tag.
- Attribute adapted skills only through `metadata.author: "<original author>"`.
  Do not add attribution license files or credit sections.
- Install through the `skills` CLI with `--skill <name> ...`. No global loader files.

## Working here

Keep diffs small and focused while the collection is reorganized. Read
`CONTRIBUTING.md` for checks, changesets and review rules. `package.json` defines
commands and dependencies; `commitlint.config.ts` defines commit rules. Code and
tests define runtime behavior.
