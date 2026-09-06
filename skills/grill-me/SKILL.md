---
name: grill-me
description: >-
  Interview the user relentlessly about a plan or design until shared
  understanding is reached, resolving each branch of the decision tree
  one question at a time. Invoke when a plan or design needs rigorous
  clarification. The user may also name this skill explicitly.
metadata:
  featured: "true"
---

# Grill Me

## What this skill does
Explores the codebase silently, then interviews you one question at a time
until shared understanding is reached. Produces a decisions summary that can
feed into planning, implementation, or a handoff to another session.

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

This summary captures every decision made. Use it as the source of truth for
the next step — whether that's planning, implementation, or a handoff to
another session.

### 5. Wrap up
End with:
> Shared understanding reached. Ready for the next step? You can ask me to
> plan the implementation, start building, or use the handoff skill to
> persist this for another session.

## Rules
- Silent codebase exploration — no narration, go straight to the first question
- One question at a time, always — never batch
- Always include a recommended answer for every question
- Freeform — no prescribed topic checklist, work from what the user describes
- Never write to any file
- Never present an implementation plan — this skill only interviews and produces a decisions summary
