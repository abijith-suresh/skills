---
name: grill-me
description: >-
  Use when the user says "grill me" or wants to think a problem through before
  building, such as "help me figure out" or "I'm not sure what I want".
metadata:
  scope: "personal work"
  summary: "Discuss a problem, challenge assumptions, and settle decisions before building."
  featured: "true"
  author: "Matt Pocock"
---

# Grill me

Reach a shared understanding of what the user wants before work starts. The
main agent runs the conversation, offers recommendations, and keeps track of
decisions. Do not implement, write files, or produce an implementation plan
during the discussion.

## Ground the discussion

Dispatch a subagent to read relevant files, trace dependencies, and check
existing behavior. Ask it to return code facts with file references, constraints,
and open decisions the code cannot answer. It must not edit files or start
subagents. Use the user's named model, or the harness default if none is named.
If that model is unavailable, report it without substituting.

Use those facts to ask specific questions and skip anything the code already
answers. Keep facts separate from assumptions. If later answers need more code
evidence, dispatch a focused follow-up exploration. For an idea with no codebase,
start from the user's context and identify assumptions that need discussion.

## Discuss one topic at a time

Resolve upstream decisions before choices that depend on them. Work from the
problem the user describes, without a prescribed topic checklist.

- Use the harness's question tool when available. Ask 1 to 4 related questions
  per round, within the tool's limits. Each question has 2 to 4 concrete options.
  Put the recommended option first, mark it as recommended, and give a one-line
  reason. Always allow a free-text answer, using the tool's built-in support.
- If no question tool exists, ask in plain chat with the same options and
  recommendation, and invite a free-text answer.
- Only group questions that can be answered independently. Wait for the user's
  answers before asking questions that depend on them. Let each answer shape
  the next round.
- Discuss the answers. If a choice seems risky or conflicts with the code or an
  earlier decision, explain why and recommend a concrete alternative. Let the
  user choose after hearing the trade-off. Do not silently override them.
- When the user says "I don't know", propose a default, explain its trade-off,
  and let them accept or change it. Do not treat uncertainty as agreement.
- Keep settled decisions closed unless new evidence or a changed requirement
  makes them relevant again. Explain why before reopening one.
- If evidence or an external decision is missing, record the open question and
  what would settle it. Do not make the user supply facts a subagent can find.

## Finish and compose

Stop when the decisions affecting scope, design, and edge cases are settled,
or when the user says to stop. Write a compact decisions summary in chat with
these sections, using "None" where appropriate:

- Decisions, including the reasons for consequential choices.
- Acceptance criteria, stated as observable outcomes.
- Constraints the next stage must respect.
- Out of scope.
- Open questions, including missing evidence and what would settle them.

If the user chained further work, such as "grill me, then implement and open a
PR", pass the summary to the next stage and continue without asking "ready for
the next step?". The main agent orchestrates that work through subagents, which
never start their own subagents. Keep unresolved blockers explicit and settle
any that prevent the next stage from proceeding. If the user stopped all work,
end with the summary and do not continue the chain. If nothing was chained,
end with the summary.
