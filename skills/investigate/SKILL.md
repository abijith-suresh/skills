---
name: investigate
description: >-
  Read-only codebase analysis. Use when asked to "investigate X", "analyze
  X", "deep dive into X", or "help me understand how X works".
---

# Investigate

Read the current repo. Trace the real code path. Recommend next steps.

## What this is for

Use this skill to understand the codebase in front of you:

- a newly assigned story
- an existing implementation
- a bug path
- a current feature flow
- a decision that depends on how the system already works

This is for the current repository and its surrounding context, not
external reference repos.

## Default mode

Investigation is read-only by default.

Start with safe inspection tools and commands:

- `read`
- `ls`
- `find`
- `rg` / `grep`
- `git status`
- `git log`
- `git diff`
- `gh issue view`, `gh pr view`, or equivalent when relevant

Do not edit files, write files, format code, install packages, generate
code, commit, or push during the investigation phase.

Before running tests, builds, or any command that may create artifacts or
modify the working tree, ask the user first.

Default output is chat. Ask before writing `INVESTIGATION.md`.

## Workflow

### 1. Clarify the target if needed

If the request is broad or ambiguous, ask one focused question to define
the investigation target.

Good starting prompts:

- Which story, bug, feature, or code path should I trace?
- Are you trying to understand behavior, find likely causes, or check story coverage?

### 2. Orient in the repo

Inspect enough of the repo to understand the landscape:

- relevant directories and entry points
- config and integration boundaries
- current branch, recent history, and open issue/PR context when it matters

Do not tunnel into a single file too early.

### 3. Trace the code path or behavior

Follow the real execution path:

- entry point → orchestrator → domain logic → persistence/integration → tests
- request path → validation → branching decisions → side effects → error handling

Prefer evidence from real symbols, configs, tests, logs, and git history
over assumptions.

### 4. Gather evidence

Collect the facts that support the answer:

- files and symbols
- config values and feature flags
- relevant tests and fixtures
- logs or error messages already present in the repo or provided by the user
- recent commits or PR history when useful

Label hypotheses as hypotheses. Do not present speculation as fact.

### 5. Summarize findings

Respond in chat using this structure:

```markdown
## Summary
## Scope
## Evidence
## Findings
## Recommendations
## Next steps
```

Add optional sections when they help:

- `Relevant code path`
- `Bug hypothesis`
- `Story coverage`
- `Risks`
- `Open questions`

Every important finding should cite evidence: a file path, symbol,
command output, or observed behavior.

### 6. Recommend next steps

Recommend the smallest sensible next actions:

- continue investigating a missing piece
- confirm a hypothesis with a targeted test or reproduction
- make a code change
- open follow-up questions with a teammate or product owner

If the investigation cannot answer the question, say what is missing and
what would be needed.

### 7. Ask before writing `INVESTIGATION.md`

If the user wants a durable artifact, ask before creating
`INVESTIGATION.md`. Do not write it by default.

### 8. Switch to implementation only with explicit confirmation

If the investigation reveals a likely fix and the user wants to act on
it, ask for confirmation before leaving read-only mode.

Once confirmed, implementation can happen in the same session — but it is
a separate phase, not part of the default investigation workflow.

## Rules

- Stay read-only by default
- Ask before tests, builds, or any non-read command that may change the
  working tree
- Ask before creating `INVESTIGATION.md`
- Never present hypotheses as confirmed facts
- Cite evidence for every major conclusion
- If the answer is incomplete, say what is still unknown
