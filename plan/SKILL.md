---
name: plan
description: >-
  Explore the relevant codebase state and produce a settled PLAN.md before
  writing any code. Use when the user wants to plan a feature, think
  through a change, or start something new. Triggers on: "create a plan",
  "plan this out", "help me plan", "let's plan X", "I want to build X",
  "help me think through this". Ask all open questions at once with
  labeled options — never one question at a time.
---

# Plan

Explore first. Ask everything at once. Write last.

## Philosophy

Inspect the current implementation before asking the user to decide
anything the codebase can answer for you. The only exception: if the
request is so ambiguous that you cannot tell which part of the repo to
inspect, ask one focused clarifying question first.

Once you understand the current state, identify every genuinely open
decision and surface them all in one message — grouped by topic, each
question with labeled options and a clear recommendation. Never drip
questions one at a time. The user picks by letter or overrides with a
free-form answer. Iterate only if first-round answers open new decisions.

Do not modify any source files. Write only to PLAN.md at the end.

## Steps

### 1. Understand the goal

If you can identify the relevant part of the repo, go straight to
exploration.

Ask one focused clarifying question only if the request is genuinely too
ambiguous to know what area of the codebase to inspect.

### 2. Explore before asking

Read relevant files. Grep for related symbols. Trace dependencies. Build
an implementation-aware picture of the current state before asking the
user to make design choices.

Do not ask questions yet if the codebase can answer them.

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
- Never skip exploration unless the request is too ambiguous to identify
  where to look
- Never write PLAN.md until all decisions are resolved
- Never modify source files during planning
- Never stage or commit PLAN.md — it is a working document, not a deliverable
