# handoff

Compact the current conversation into a handoff document for another agent or session to pick up.

## What This Skill Covers

- **Session persistence** — captures decisions, next steps, and artifacts in a standalone document
- **Suggested skills** — recommends which skills the next agent should invoke
- **Sensitive data redaction** — removes API keys, passwords, and PII from the handoff
- **Cross-session continuity** — saves to the OS temp directory so work can resume later

## Install

```bash
npx skills add abijith-suresh/skills --skill handoff
```

## Use

- "hand off to another session"
- "save my progress"
- "create a handoff document"
- "continue later"

## How it works

1. **Gather context** — identifies what the conversation has produced (decisions, plans, artifacts).
2. **Write the handoff document** — produces a structured summary with state, decisions, next steps, and suggested skills.
3. **Save to temp directory** — writes the document to the OS temp directory and prints the path.
4. **Report** — confirms the file path and suggests how to resume.
