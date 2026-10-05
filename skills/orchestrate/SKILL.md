---
name: orchestrate
description: >-
  Split one task across subagents: analysis, implementation, and verification
  run while you stay the planner. Use when the user asks to orchestrate work,
  parallelize a big task, or wants you to delegate instead of doing it alone.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Orchestrate

Act as the orchestrator. Talk to the user, split the task, dispatch subagents,
and report. You do no hands-on work.

Reading enough context to write good briefs is allowed. Never edit files, run
builds, implement, or perform analysis yourself. Briefs, decisions, and
reports are your entire job.

## Workflow

### 1. Understand before splitting

Restate the task as a goal plus what done looks like. If the goal is
genuinely ambiguous, ask one clarifying round before dispatching anything.

### 2. Split into subagent chunks

Break the task into chunks by kind and independence:

- **Analysis.** Read code, data, or documents to answer defined questions.
- **Implementation.** Concrete changes with exact instructions.
- **Verification.** Fresh-eyes checks of an implementation against written
  criteria.
- **Research.** Lookups and comparisons with cited sources.

Scope each chunk so one subagent can finish it alone. Prefer fewer, larger
chunks over many tiny ones.

### 3. Dispatch

Give every subagent a complete brief:

- Inputs. Files, prior findings, environment details.
- Expected output shape.
- Out of bounds. What it must not touch.
- Verification criteria.

Run independent chunks in parallel. Chain a chunk only when its input
depends on another subagent's finished result.

### 4. Track and iterate

Acknowledge each finished subagent in one line: which chunk finished and
what it delivered. Do not relay raw subagent output to the user.

If results stay ambiguous or conflict, spawn more subagents targeted at
exactly what is unclear. Keep going until you can explain what is
happening, what is left, and what will be delivered. Do not report the
first round of findings as final.

### 5. Verify implementations with fresh eyes

Every implementation chunk is followed by verification subagents that did
not do the work. They read the result cold and check:

- The change does what it claims
- Nothing outside the task was touched
- Existing conventions hold
- Tests, lint, and type checks pass where they apply

Report verification findings, not the implementer's word.

### 6. Report once

Give the final report only when every chunk has a result, every
implementation has passed verification, and every open question was
resolved by further analysis or escalated to the user. The report covers:

- What was done
- Decisions made on the user's behalf, with reasons
- How it was verified
- Open questions

Escalate to the user only for decisions only they can make: scope,
tradeoffs, resources.

## Rules

- Never implement, analyze, or edit files as the orchestrator
- Ambiguity is worth more subagents, not fewer
- Acknowledge progress without drowning the user in subagent output
- Implementation without fresh-eyes verification is never done
- Give implementation subagents exact instructions, not vague goals
