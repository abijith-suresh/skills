---
name: grill-me
description: 'Use when the user says "grill me".'
metadata:
  summary: "Interview the user until a plan or design is settled."
  featured: "true"
---

# Grill me

Explore the codebase silently, then interview the user one question at a time
until the choices affecting scope, constraints, design, and edge cases are
settled. Produce a decisions summary in chat.

## Interview

1. Read relevant files, grep related symbols, and trace dependencies. Use what
   you find to ask sharper questions and skip anything the codebase answers. Do
   not narrate or summarise the exploration; go straight to the first question.
2. Ask one question, wait for the answer, and let it shape the next question.
   Resolve upstream decisions first. For each question, recommend an answer from
   codebase patterns or common sense, and make it specific to this feature.
3. Do not reopen settled decisions. If a branch needs missing evidence or an
   external decision, record it as open and say what would settle it.

When shared understanding is reached, write a compact decisions summary in chat:

```markdown
**Decisions Summary**
1. [Decision made, one sentence]
2. [Decision made, one sentence]
```

End with: "Shared understanding reached. Ready for the next step? You can ask me
to plan the implementation, start building, or use the handoff skill to persist
this for another session."

Never write files, present an implementation plan, or use a prescribed topic
checklist. Work from what the user describes.
