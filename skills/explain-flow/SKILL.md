---
name: explain-flow
description: >-
  Explains and persistently documents one bounded application or business
  flow across repositories and services using source-backed evidence. Use
  only when the user explicitly invokes the explain-flow skill. Do not
  trigger from ordinary requests to explain code.
---

# Explain Flow

Build a verified, reusable explanation of how one application or business
flow currently works. Keep source inspection read-only and persist the result
outside project repositories.

## Boundaries

- Trace one bounded flow per invocation.
- Keep project source read-only.
- Write only the knowledge document under `~/.agents/knowledge/`.
- Explain implemented behavior without inventing business intent.
- Do not diagnose a reported defect or recommend a fix.
- Do not invoke or depend on another skill.

## Knowledge document

Create or refresh:

```text
~/.agents/knowledge/flows/<topic>.md
```

Use a stable, sufficiently specific topic slug so later sessions find the
same file. Include a project or domain qualifier in the slug only when needed
to avoid ambiguity. Refresh the document in place; do not create dated journal
entries.

Use this structure:

```markdown
---
status: current
verified: YYYY-MM-DD
---

# <Flow>

## Scope
## Business purpose
## Entry points
## Preconditions
## Flow
## Branches and failure paths
## Data and state changes
## Service contracts
## Side effects
## Tests and guarantees
## Business context
## Unknowns
## Source revisions
```

Use `status: needs-verification` when recorded source revisions cannot be
checked or when material parts of the flow remain unverified.

## Workflow

### 1. Bound the question

Identify the specific trigger and outcome the user wants explained. Examples:

- an HTTP request through downstream services
- a consumed event through resulting state changes
- a scheduled job through emitted messages
- a user action through its backend effects

If the request could refer to materially different flows, ask one focused
question. Do not map the entire feature by default.

**Exit:** One trigger, intended scope, and stopping point are clear.

### 2. Check existing knowledge

List likely filenames under `~/.agents/knowledge/flows/` and select by topic.
Do not load every saved document. If the stable topic file exists:

1. Read its source revisions and unresolved unknowns.
2. Compare the recorded revisions with the current repositories.
3. Reuse verified facts.
4. Recheck changed or previously uncertain areas.

Do not trust a note merely because it exists. Mark it
`status: needs-verification` if freshness cannot be established.

**Exit:** Existing knowledge is classified as reusable, stale, or absent.

### 3. Find entry points and participants

Locate the seams that can start the flow:

- HTTP or RPC endpoints
- UI actions and API clients
- message consumers and publishers
- scheduled jobs
- CLI commands
- database or integration callbacks

List the repositories and services that actually participate. If multiple
entry points converge, record them; if they produce different flows, keep the
current trace scoped and note the alternatives.

**Exit:** The starting seam and participating components are source-backed.

### 4. Trace execution and data

Follow the flow in execution order:

1. input parsing and validation
2. authentication and authorization
3. orchestration and domain decisions
4. data transformations
5. persistence and transaction boundaries
6. messages, caches, and external integrations
7. retries, idempotency, compensation, and error handling
8. response construction or terminal side effects

At every service boundary record:

- caller and callee
- protocol, endpoint, topic, or queue
- request, response, or message contract
- identifiers and context propagated
- failure and retry behavior

Follow only branches that materially change the outcome. Summarize repetitive
plumbing instead of performing line-by-line commentary.

**Exit:** The path from trigger to terminal effects is complete enough to
answer the bounded question.

### 5. Establish guarantees and uncertainty

Inspect relevant tests, configuration, feature flags, migrations, and
documentation. Distinguish:

- **Code-backed behavior** — implemented by the inspected revision.
- **Tested guarantee** — explicitly exercised by a relevant test.
- **Business rule** — supplied by the user or authoritative documentation.
- **Inference** — a plausible interpretation requiring confirmation.
- **Unknown** — missing source, inaccessible service, or unresolved context.

Do not describe existing code as the intended business rule unless evidence
establishes that intent. When source and supplied business context conflict,
show the conflict instead of choosing silently.

**Exit:** Important claims have evidence and unresolved questions are
explicit.

### 6. Refresh the knowledge document

Write a concise explanation that a fresh agent can use without re-reading the
entire codebase.

For every important step include:

- repository and file path
- symbol, route, topic, or configuration key
- relevant revision
- input, decision, output, and side effect

Prefer references and short excerpts over copied source. Replace superseded
content rather than accumulating history. Preserve confirmed business context
and remaining unknowns.

Record each repository and inspected commit under `Source revisions`, then set
the verification date.

**Exit:** The stable topic file reflects the current evidence and can be
selectively loaded in a later session.

## Chat response

Respond with:

```markdown
## Summary
## Flow
## Branches and failure paths
## Data and side effects
## Guarantees
## Unknowns
## Knowledge document
```

Keep the chat explanation readable; the knowledge document carries the
detailed source references. Always include its path.

## Failure conditions

- If the requested business purpose is absent from code and documentation,
  ask the user or mark it unknown.
- If a participating repository is unavailable, identify the exact boundary
  where the trace stops.
- If revisions cannot be established, do not mark the document current.
- If the request changes from understanding behavior to diagnosing a defect,
  stop at the verified flow and let the user choose the next workflow.
