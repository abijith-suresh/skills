---
name: research
description: >-
  Clone one or more remote repositories into a temporary directory and use
  them as source-of-truth reference material. Use when implementing something
  that benefits from reading a real implementation rather than relying on
  training knowledge: "research how X is done", "look at how Y implements Z",
  "use [repo] as reference", "clone [repo] for context", "I need to understand
  how [library/framework] works before implementing".
---

# Research

Clone the source. Read the real thing. Apply what you learn.

## Why this exists

Training knowledge has a cutoff and can be imprecise on specifics.
Canonical repos do not have this problem. When implementing against a
framework, library, or pattern that has a reference implementation,
reading that implementation is more reliable than guessing from memory.

This skill handles the mechanics: find the right repo, clone it to a
temp directory, explore it with purpose, summarize findings, and leave
the clone available for follow-up reference.

## Workflow

### 1. Identify what to clone

From the user's request or the task at hand, determine what needs to be
researched. This could be:

- A specific repo URL the user provides
- The canonical source for a framework or library (e.g., the official
  tailwindlabs/tailwindcss repo for Tailwind v4 configuration patterns,
  sveltejs/svelte for Svelte idioms)
- Multiple repos if the task benefits from comparing implementations

If the URL is not provided, identify the canonical repo:
- Prefer the official org (the maintainer's GitHub org, not a fork)
- Verify it is actively maintained (recent commits, not archived)
- Use the default branch unless a specific version is needed

If there is any ambiguity about which repo is the right reference, ask
the user before cloning.

### 2. Check if already cloned

Before cloning, check whether the repo already exists at the target path:

```bash
ls /tmp/research/<task-slug>/<repo-name>/
```

If it does, skip the clone and use what is there. The task slug should
be descriptive enough to avoid collisions (e.g., `tailwind-v4-setup`,
`svelte-routing`, `spring-security-oauth`).

### 3. Clone to temp

```bash
git clone --depth 1 <repo-url> /tmp/research/<task-slug>/<repo-name>
```

Always use `--depth 1`. Full history is not needed for reference reading
and adds significant time and disk usage.

Path structure:

```
/tmp/research/
  <task-slug>/
    <repo-name>/       ← cloned here
    <repo-name-2>/     ← additional repos if needed
```

### 4. Explore with purpose

You are answering a specific question, not reading documentation for its
own sake. Orient yourself first:

- Read the README
- Look at the directory structure (`ls -la`, `find . -name "*.md" | head -20`)
- Locate entry points, configuration files, and key modules relevant
  to the task

Then go deep on the parts that answer the question. Trace patterns, read
examples, understand the conventions the project uses.

Narrate what you are finding in chat as you go. Think out loud — what
you read, what surprised you, what applies directly to the task.

### 5. Summarize and apply

After exploring, summarize findings concretely:

- What are the key patterns, conventions, or configurations?
- What does the canonical implementation do that is non-obvious?
- What should be applied to the current task, and how?

Apply findings directly to the task at hand, or hand them off as a
clear set of decisions for the user if choices need to be made.

### 6. Leave the clone in place

Do not delete the temp directory. The clone may be needed for follow-up
questions or to verify details during implementation. Note the path in
the summary so it can be referenced later:

> Cloned to `/tmp/research/<task-slug>/<repo-name>` — available for
> follow-up reference.

If the user explicitly asks to clean up:

```bash
rm -rf /tmp/research/<task-slug>/
```

## Rules

- Always `--depth 1` — never clone full history unless the task
  explicitly requires it (e.g., researching git history patterns)
- Never clone into the project directory — always use `/tmp/research/`
- Check before cloning — do not re-clone if already present
- Read with purpose — you are answering a specific question
- Prefer official maintainer repos over forks or mirrors
- Leave the clone in place unless asked to clean up
- When the right repo is ambiguous, ask before cloning
