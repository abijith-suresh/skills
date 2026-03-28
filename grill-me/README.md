# Grill Me

Pressure-test an idea, design, or implementation plan until assumptions, risks,
and missing decisions are explicit.

## When to Use

- You want someone to challenge an idea before implementation starts.
- A plan feels hand-wavy and you want sharper decisions.
- You want the agent to ask focused follow-up questions instead of agreeing too
  quickly.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/grill-me
```

## Install the Full Collection

```bash
npx skills@latest add abijith-suresh/skills
```

## Example Prompts

- "Use the grill-me skill on this feature idea before we write code."
- "Grill this rollout plan and tell me what decisions are still missing."
- "Use grill-me on this architecture sketch until the risky parts are clear."

## What It Produces

- Confirmed decisions
- Open questions
- Top risks
- A recommended next step

## Works Well With

- `write-a-prd` to turn the clarified idea into a durable planning artifact.
- `prd-to-plan` after the design questions are resolved.

## Notes

- This skill is intentionally challenging; use it when you want pushback, not a
  quick validation pass.
- It works best when there is at least a rough artifact to review.

## Attribution

Adapted from Matt Pocock's `grill-me` skill.

- Source: `https://github.com/mattpocock/skills/tree/main/grill-me`
- Author: Matt Pocock
- License: MIT

Changes made in this repo:

- Reworked into the `Goals / Workflow / Output / Guardrails` format used here.
- Tuned for evidence-first repo exploration before asking the user questions.
- Added repo-local documentation and installation guidance.
