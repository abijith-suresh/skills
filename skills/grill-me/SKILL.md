---
name: grill-me
description: >-
  Interviews until a plan or design is settled. Asks independent questions
  in one round.
disable-model-invocation: true
metadata:
  featured: "true"
  opencode/autoinvoke: "false"
---

# Grill me

Explores the codebase silently, then interviews you until shared
understanding is reached. Independent questions go in one round. Dependent
questions wait. Produces a decisions summary in chat that can feed planning,
implementation, or a handoff.

## Steps

### 1. Explore the codebase silently

Read relevant files, grep for related symbols, trace dependencies. Use what
you find to skip facts the repo already answers. Do not narrate what you
are reading. Do not summarise findings. Go straight to the first round.

### 2. Ask the frontier

A frontier is every open question whose answer does not depend on another
unanswered question.

In each round:

- Ask all frontier questions together, numbered.
- Give a recommended answer for each, from codebase patterns or common sense.
- Make each question specific to this feature. Never generic.
- Skip anything the codebase already answered. Those are facts. Do not ask
  the user to confirm them.
- Wait for the answers before asking the next frontier.

Do not serialize independent questions. Do not ask a question that only
makes sense after an unanswered one.

Facts stay with the agent. Decisions stay with the user.

### 3. Keep going until shared understanding is reached

Continue rounds until every significant branch is resolved: scope,
constraints, design choices, edge cases, tradeoffs. You decide when that
point is reached. Do not stop early.

### 4. Write a decisions summary in chat

Once shared understanding is reached, write a compact decisions summary
directly in chat:

**Decisions summary**

1. [Decision made. One sentence.]
2. [Decision made. One sentence.]

This summary is the source of truth for the next step, whether that is
planning, implementation, or a handoff to another session.

### 5. Wrap up

End with:

> Shared understanding reached. Ready for the next step? You can ask me to
> plan the implementation, start building, or use the handoff skill to
> persist this for another session.

## Rules

- Silent codebase exploration. No narration. Go straight to the first round.
- Independent questions in one round. Dependent questions wait.
- Always include a recommended answer for every question.
- Freeform. No prescribed topic checklist. Work from what the user describes.
- Never write to any file.
- Never present an implementation plan. This skill only interviews and
  produces a decisions summary.
