# grill-me

Interview the user relentlessly about a plan or design until shared understanding is reached.

## What This Skill Covers

- **Silent codebase exploration** — reads relevant files before asking a single question
- **One-at-a-time interviewing** — asks one question, waits for the answer, walks down each decision branch
- **Recommended answers** — every question includes a recommended option based on codebase patterns
- **Decisions summary** — produces a compact decisions summary capturing all decisions made

## Install

```bash
npx skills add abijith-suresh/skills --skill grill-me
```

## Use

- "use the grill me skill"
- "grill me on this"
- Ask to be interviewed about a plan before building

## How it works

1. **Explore silently** — reads the codebase without narration to inform smarter questions.
2. **Interview one question at a time** — asks one question with a recommended answer, waits for the user, walks down each decision branch.
3. **Reach shared understanding** — continues until every significant branch is resolved.
4. **Write decisions summary** — produces a compact summary in chat as the source of truth for next steps.
5. **Wrap up** — lets the user decide what to do next with the decisions made.
