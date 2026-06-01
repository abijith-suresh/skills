---
name: grill-me
description: >-
  Interview the user relentlessly about a plan or design until shared
  understanding is reached, resolving each branch of the decision tree
  one question at a time. Use when the user explicitly invokes grill-me,
  says "use the grill me skill", "grill me on this", or asks to be
  interviewed about a plan before building.
---

# Grill Me

## What this skill does
Explores the codebase silently, then interviews you one question at a time
until shared understanding is reached. Always pairs with the plan skill —
grill-me runs first, plan runs after.

## Steps

### 1. Explore the codebase silently
Read relevant files, grep for related symbols, trace dependencies. Use what
you find to ask smarter questions and avoid asking things the codebase can
already answer. Do not narrate what you are reading. Do not summarise
findings. Go straight to the first question.

### 2. Interview one question at a time
Ask one question. Wait for the answer. Let the answer shape the next
question. Walk down each branch of the decision tree, resolving upstream
decisions before moving to downstream ones.

For every question:
- Provide your recommended answer, based on codebase patterns or common sense
- Make the question specific to this feature — never generic
- Skip any question the codebase has already answered

Never batch questions. Never ask more than one at a time.

### 3. Keep going until shared understanding is reached
Continue until every significant branch of the decision tree is resolved —
scope, constraints, design choices, edge cases, tradeoffs. You decide when
that point is reached. Do not stop early.

### 4. Write a decisions summary in chat
Once shared understanding is reached, write a compact decisions summary
directly in chat:

---
**Decisions Summary**

1. [Decision made — one sentence]
2. [Decision made — one sentence]
...
---

This summary is the handoff document for the plan skill.

### 5. Prompt the user to invoke plan
End with:
> Shared understanding reached. Invoke the plan skill when you are ready.

## Rules
- Silent codebase exploration — no narration, go straight to the first question
- One question at a time, always — never batch
- Always include a recommended answer for every question
- Freeform — no prescribed topic checklist, work from what the user describes
- Never write to any file
- Never present an implementation plan — that is the plan skill's job
