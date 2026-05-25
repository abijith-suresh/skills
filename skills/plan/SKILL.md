---
name: plan
description: >-
  Explore the codebase, ask all open questions at once with labeled
  options, and present an implementation plan in chat before any code
  is written. Only writes PLAN.md if the user explicitly asks for a
  durable file. Use when the user says "plan", "make a plan", "plan this
  out", "let's think through this", or "I want to build X".
  Do NOT trigger when the user simply asks to "present a plan" or
  "come up with a plan" — that means chat only, not a file.
---

# Plan

## Understanding this skill

This skill is for **planning** — exploring the codebase, asking questions,
and presenting a plan **in chat**. It does NOT write to PLAN.md unless the
user explicitly asks for a file. Presenting in chat is always the default.

> If the user says "present a plan", "tell me your plan", or "come up
> with a plan", they mean chat only. Do not write a file unless they
> explicitly say "write it to PLAN.md" or "save it to a file".

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

Do not ask questions yet if the codebase can answer them. Do not skip
this step.

### 3. Ask all open questions at once (mandatory)

**You MUST do this before presenting any plan or writing anything to a
file.**

After exploring, collect every decision that is still genuinely open.
Group them by topic and present them in a single message with labeled
options and a recommended choice for each. Never drip questions one at
a time.

```
**[Topic name]**

**Q1. [Question]**
- A) [Option]
- B) [Option] ← recommended
- C) Other — describe

**Q2. [Question]**
- A) [Option] ← recommended
- B) [Option]
- C) Other — describe
```

Mark one option as recommended on each question. Base recommendations
on what the codebase already does or what fits its patterns best. Only
ask questions the codebase cannot answer.

The user replies with letters or free text. If a question goes
unanswered, use the recommended option and note it in the plan.

If there are genuinely no open questions (everything is determined by
the codebase or prior conversation), you may skip this step — but note
in your presentation that there were no open decisions.

### 4. Present the plan in chat (not to a file)

Once all decisions are settled, present the full plan **in chat**. Do not
write to a file yet.

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

### 5. Ask whether to persist to PLAN.md (do not skip)

The plan is already in chat. PLAN.md is only needed when handing off to
another agent or returning to the task later.

**Ask explicitly:**

> Should I write this to PLAN.md? Only needed if you plan to hand off to
> another agent.

If the user says yes, write the plan to `PLAN.md` in the project root.
If they say no, do not write it. If they do not answer, do not write it.

### 6. Confirm

After presenting (or writing): "Ready to start implementing, or anything to adjust?"

## Rules

- **Never write PLAN.md without asking first.** Default is chat-only.
- **Never present a plan without asking all open questions first.**
  The only exception is when there are genuinely zero open decisions.
- Never ask questions one at a time.
- Never skip exploration unless the request is too ambiguous to identify
  where to look.
- Never modify source files during planning.
