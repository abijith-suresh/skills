# AGENTS.md

## What this repo is

This is a personal collection of AI agent skills. Each skill is a
`SKILL.md` file that instructs an AI coding agent how to perform a
specific workflow — planning, committing, reviewing, testing, researching,
and so on.

Skills follow the Agent Skills specification:
https://agentskills.io/specification

---

## Understanding how agent skills work

Before writing or significantly updating a skill, use the `research` skill
to clone a reference collection and read how mature skills are structured.
Good starting points:

- `anthropics/skills` — canonical templates and specification-aligned examples
- `mattpocock/skills` — strong workflow and architecture language patterns
- `addyosmani/agent-skills` — broad engineering workflow collection
- `muratcankoylan/Agent-Skills-for-Context-Engineering` — context-engineering patterns
- `vercel-labs/agent-skills` — product and engineering skill examples

Clone whichever is most relevant to the task, read the skill files, then
apply those patterns here.

---

## Skill structure

Each skill lives in its own directory under `skills/` at the repo root:

```
skills/
  <skill-name>/
    SKILL.md      ← the skill definition (required)
    README.md     ← install instructions and example prompts (required)
    references/   ← optional supporting docs
    scripts/      ← optional deterministic helper scripts
    assets/       ← optional templates/resources
```

Prefer `references/` over loose top-level `.md` files when a skill needs
supporting documentation.

Skill names are short verbs or nouns in kebab-case: `plan`, `commit`,
`review`, `tdd`, `research`. No namespacing.

---

## SKILL.md format

```markdown
---
name: <skill-name>
description: >-
  [One-line what the skill does]
  Use when [trigger scenario A].
  Use when [trigger scenario B].
  [Do NOT trigger when [anti-trigger].]
---

# Title

[Content: intent, workflow, rules]
```

Frontmatter: `name` and `description` only. No `metadata` block. The
description is the most important field — it must be specific enough that
an agent can decide at a glance whether this skill applies.

### Description pattern

Descriptions must follow this structure **exactly**:

1. **First sentence** — one-line what the skill does, in active voice.
   No branding, no philosophy, no framing. Just the verb and its object.
2. **"Use when" clauses** — one or more trigger scenarios that tell the
   agent exactly when to load this skill. Lead with the most specific
   trigger phrases the user might say. Repeat "Use when" for each group
   of related triggers rather than cramming everything into one sentence.
3. **"Do NOT trigger" clause** (optional) — only when a common phrasing
   could trigger a false positive.

Examples of good descriptions (trimmed for agent consumption):

```markdown
description: >-
  Create clean conventional commits from the current diff. Use when asked
  to "commit these changes", "make a commit", "commit this", or "create
  commits". Stops after committing — does not push or open a PR.
```

```markdown
description: >-
  Audit the codebase for technical debt and fix issues incrementally.
  Use when asked to "improve the codebase", "health check", "address
  technical debt", or "audit the codebase".
```

```markdown
description: >-
  Produce an implementation plan before writing code. Use when the user
  says "plan", "make a plan", "plan this out", "let's think through this",
  or "I want to build X". Do NOT trigger for "come up with a plan" or
  "present a plan" — those are chat only, not a file.
```

Guidelines:

- **Agent-oriented, not human-oriented.** The description is matched at
  runtime by an AI agent deciding whether to load this skill. Write for
  that reader: trigger phrases first, background never.
- **No branding or marketing.** "Holistic codebase health audit" and
  "Research-first implementation gate" are human copy, not agent triggers.
- **Use "Use when" consistently.** It is the clearest introduction for a
  trigger condition. Every skill description should contain at least one
  "Use when" clause.
- **Wrap trigger phrases in quotes.** Agents match on literal user
  utterances. Quote the exact phrases that should trigger the skill.
- **Keep under 50 words.** If the description needs more, prioritize
  trigger scenarios over background context.

---

## README.md format

```markdown
# <skill-name>

[One sentence description]

## What This Skill Covers

- **Capability 1** — brief explanation
- **Capability 2** — brief explanation

## Install

\```bash
npx skills add abijith-suresh/skills --skill <skill-name>
\```

## Use

- "[trigger phrase]"
- "[trigger phrase]"

## Requirements (optional)

- [External tool or precondition, with link if applicable]

## How it works

1. **Step name** — description.
2. **Step name** — description.

## Resources (optional)

- [External doc link]
- [Related file in this skill]
```

Sections **must** appear in this order. `## What This Skill Covers`, `## Install`, `## Use`, and `## How it works` are mandatory. `## Requirements` and `## Resources` are optional — include them only when relevant.

---

## Design principles

- **Atomic**: each skill does one thing. No skill orchestrates another
  by name.
- **Self-contained**: a skill should make sense and be useful without
  any other skill in this collection.
- **Platform-agnostic**: skills detect context (GitHub vs GitLab,
  language, framework) at runtime rather than being pre-configured.
- **Intent over implementation**: skills describe what to do and why,
  not how to do it in a specific language or framework.

---

## Creating a new skill

1. Use the `research` skill to read reference implementations if the
   workflow is non-trivial
2. Create `skills/<skill-name>/SKILL.md` with the correct frontmatter
3. Create `skills/<skill-name>/README.md` with install instructions and trigger
   phrases
4. Update the catalog table in the root `README.md`
5. Update the badge count in the root `README.md`
6. Add an entry to `CHANGELOG.md` under `[Unreleased]`. If a `### Changed — YYYY-MM-DD`
   section with today's date already exists, add the entry there instead of
   creating a duplicate section. If it doesn't exist, create a new section
   with `### Changed — YYYY-MM-DD`.
7. Install the skill locally by replacing the whole directory at
   `~/.agents/skills/<skill-name>/`

## Updating an existing skill

1. Edit `skills/<skill-name>/SKILL.md` (and any supporting files)
2. If the description or trigger phrases changed, update `skills/<skill-name>/README.md`
3. Add an entry to `CHANGELOG.md` under `[Unreleased]`. If a
   `### Changed — YYYY-MM-DD` section with today's date already exists,
   add the entry there instead of creating a duplicate section.
4. Replace the locally installed copy at `~/.agents/skills/<skill-name>/`
   so stale files are removed

---

## Committing and pushing

Use the `commit` skill to create clean conventional commits. Push to a
feature branch and open a PR — never push directly to `main`. Branch
protection is enabled on `main`: linear history required, force pushes
blocked, PRs required, PR title must follow conventional commit format.
