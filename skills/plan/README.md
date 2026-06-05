# plan

Present a concrete implementation plan in chat based on a decisions summary.

## What This Skill Covers

- **Decisions summary consumption** — reads a decisions summary from the conversation or project documents as the sole source of truth
- **Structured plan generation** — produces a plan with goal, concrete steps, and specific testing notes
- **Optional PLAN.md persistence** — writes to PLAN.md only when explicitly asked
- **No re-exploration** — does not explore the codebase or ask clarifying questions (assumes decisions are already made)

## Install

```bash
npx skills add abijith-suresh/skills --skill plan
```

## Use

- "present the plan"
- "use the plan skill"
- "now make the plan"

## How it works

1. **Read the decisions summary** — finds a decisions summary from the conversation, a handoff document, or a project file (IMPROVE.md, design doc, spec).
2. **Present the plan in chat** — writes a structured plan with goal, steps (naming files/components), and specific testing notes.
3. **Ask about PLAN.md** — offers to save to PLAN.md for handoff or continuation.
4. **Confirm** — asks if the user is ready to start implementing.
