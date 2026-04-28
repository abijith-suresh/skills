---
name: plan
description: >-
  Explore the codebase and produce a settled PLAN.md before writing any
  code. Use when the user wants to plan a feature, think through a change,
  or start something new. Triggers on: "create a plan", "plan this out",
  "help me plan", "let's plan X", "I want to build X", "help me think
  through this". Ask all open questions at once with labeled options —
  never one question at a time.
---

# Plan

Explore first. Ask everything at once. Write last.

## Philosophy

Read the codebase before forming any opinion. Once you understand the
current state, identify every genuinely open decision and surface them
all in one message — grouped by topic, each question with labeled options
and a clear recommendation. Never drip questions one at a time. The user
picks by letter or overrides with a free-form answer. Iterate only if
first-round answers open new decisions.

Do not modify any source files. Write only to PLAN.md at the end.

## Steps

### 1. Understand the goal

If the intent is clear, go straight to exploration. Ask one focused
question only if the goal is genuinely ambiguous — not a list, one.

### 2. Explore

Read relevant files. Grep for related symbols. Trace dependencies.
Narrate what you find in chat as you go — what you read, what you
skipped, what surprised you. Think out loud.

### 3. Ask all open questions at once

After exploring, collect every decision that is still genuinely open.
Group them by topic and present them in a single message:

---
**[Topic name]**

**Q1. [Question]**
- A) [Option]
- B) [Option] ← recommended
- C) Other — describe

**Q2. [Question]**
- A) [Option] ← recommended
- B) [Option]
- C) Other — describe
---

Mark one option as recommended on each question. Base recommendations
on what the codebase already does or what fits its patterns best. Only
ask questions the codebase cannot answer.

The user replies with letters or free text. If a question goes
unanswered, use the recommended option and note it in PLAN.md.

### 4. Write PLAN.md

Once all decisions are settled, write PLAN.md to the project root:

```
# Plan: [Feature Name]

## Goal
[One sentence: what this achieves and why.]

## Approach
[The key decisions made and why. Reference choices from the Q&A.]

## Steps
1. [Concrete implementation step]
2. [Concrete implementation step]
...

## Testing Notes
[What to check after implementing — specific flows, edge cases,
regressions. Derived from what actually changed.]
```

### 5. Confirm

After writing: "Ready to start implementing, or anything to adjust?"

## Rules

- Never ask questions one at a time
- Never write PLAN.md until all decisions are resolved
- Never modify source files during planning
- Never stage or commit PLAN.md — it is a working document, not a deliverable
