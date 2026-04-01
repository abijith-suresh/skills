# PRD to Plan

Convert an approved PRD into a practical implementation plan built from thin,
demoable vertical slices.

## When to Use

- The PRD is agreed on and you want an execution plan.
- You want to de-risk delivery before anyone starts coding.
- You want phases that can be reviewed, demoed, and validated incrementally.
- You want to design the order of work before breaking it into implementation issues.

## Install This Skill

```bash
npx skills@latest add abijith-suresh/skills/prd-to-plan
```

## Example Prompts

- "Use the prd-to-plan skill on this PRD."
- "Turn this approved PRD into thin vertical slices."
- "Use prd-to-plan and give me a phased implementation plan."
- "Plan this feature in demoable phases, then we'll turn the plan into issues later."

## What It Produces

- Durable implementation decisions
- Ordered phases with acceptance criteria
- Validation steps and dependency notes
- Clear blocking unknowns when the PRD is not quite ready to plan from

## Works Well With

- `write-a-prd` when you need the source document first.
- `prd-to-issues` after the phase plan is approved.
- `tdd` when you start implementing each slice.

## Notes

- This skill is best when the PRD is already stable enough to plan from.
- It favors vertical slices over horizontal layer-by-layer task lists.
- It stays one level above `prd-to-issues`: first decide the phases, then break approved phases into execution-ready issues.
