---
name: inbox-zero
description: Scan a Gorgias support inbox and batch-process open tickets with suggested quick actions.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Inbox Zero

Scan unhandled Gorgias tickets and turn them into a compact action queue so the
support inbox can be processed in batches.

## Workflow

### 1. Discover the Gorgias tools

Use Composio to find the current actions for listing tickets and reading ticket
details:

```bash
composio search "list open unassigned tickets from Gorgias" "get ticket details from Gorgias"
```

If Gorgias is not connected, stop and ask the user to run:

```bash
composio link gorgias
```

### 2. Fetch unhandled tickets

List open tickets that still need attention, oldest first. Keep the initial
payload compact and retain the ticket IDs for follow-up reads.

### 3. Read tickets in batches

Read the latest message for up to 10 tickets at a time. Parallelize independent
ticket-detail calls when the environment supports it.

### 4. Choose one primary action per ticket

Assign exactly one of these actions:

- **QUICK REPLY** — The answer is straightforward. Draft a 1–2 sentence reply.
- **NEEDS INFO** — More detail is required. Draft the question to send.
- **ESCALATE** — Engineering or a specialist needs to investigate. State why.
- **CLOSE** — The ticket is resolved, duplicated, or spam.
- **ASSIGN** — A specific team or specialist should own it.
- **DEFER** — Progress depends on something external. State what is pending and
  when to revisit it.

Do not perform any mutation while building the queue.

### 5. Present the queue

Use this shape:

```md
## Inbox Zero Queue
**Tickets to process:** X

| # | Ticket | Customer | Age | Action | Preview |
|---|--------|----------|-----|--------|---------|
| 1 | #123 | alice@example.com | 2h | QUICK REPLY | "Yes, you can reset it in Settings…" |
| 2 | #124 | bob@example.com | 4h | NEEDS INFO | "Could you share your browser version?" |
| 3 | #125 | eve@example.com | 1d | ESCALATE | Checkout flow appears broken |
| 4 | #126 | dan@example.com | 1d | CLOSE | Duplicate of #120 |

### Quick Stats
- Quick replies: X
- Need info: X
- Escalations: X
- Closeable: X
- Deferred: X
```

Ask which actions the user wants to execute.

### 6. Execute only approved actions

Apply approved actions one at a time. Before each mutation, show the exact
reply, assignment, close, or defer action that will be performed when it is not
already explicit from the approved queue.

For replies, send only the approved text. For escalations, leave the ticket in a
state that clearly routes it to the appropriate engineering or specialist team.

## Rules

- Never send, close, assign, tag, or otherwise mutate a ticket without explicit
  user approval.
- Keep one primary action per ticket so the queue stays scannable.
- Prefer the latest customer message when deciding the action.
- Process large inboxes in batches rather than loading every full ticket at
  once.
