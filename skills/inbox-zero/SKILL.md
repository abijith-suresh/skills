---
name: inbox-zero
description: >-
  Triage a Gmail inbox using Inbox Zero. Use when the user asks to clean,
  review, or triage their inbox, or to reduce recurring email noise with
  filters.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Inbox zero

Inbox = requires attention. Keep a message only if the user still needs to
act, decide, respond, review something important, monitor an open issue, or
stay aware of something time-sensitive. Otherwise archive it. Unread is not
the same as important.

## Access

Use whatever Gmail access the environment provides, such as a Gmail MCP
server or the `composio` CLI. If nothing is connected, stop and say what is
missing.

## Rules

- Use only the existing labels: **Follow Up** (user must act, tracked
  outside the inbox), **Waiting** (next step belongs to someone else),
  **Read Through** (worth reading, no action; use sparingly, never for
  newsletters, promos, or notifications).
- Never create new labels.
- Archive, don't delete, unless asked.
- Prefer reversible actions. When uncertain, leave the message in the inbox.

## Triage

Read each message before classifying; don't rely on the IMPORTANT label,
unread state, or subject alone. Put each into one category: **Keep in
Inbox**, **Archive**, **Follow Up**, **Waiting**, **Read Through**, or
**Filter Candidate** (can combine with Archive).

1. Surface urgent items first: security, failed payments, deadlines,
   account problems.
2. Archive anything with no remaining action: receipts, completed
   confirmations, expired invitations, resolved alerts, routine
   notifications, unwanted newsletters.
3. Check whether a newer message resolves an older one ("Payment received"
   after "Payment failed"). Only archive the older one if the link is
   clear.
4. For anything mentioning a deadline, expiry, appointment, renewal, or
   "action required," confirm the date is past and nothing is outstanding
   before archiving.

## Never auto-hide

Security or login alerts, authentication changes, failed or unusual
transactions, fraud, account suspension, expiring resources or deletion
warnings, bills due, legal, tax, medical, or HR mail, travel changes, exams
and appointments, and humans requesting action. A recurring sender is not
enough reason to filter these.

## Filters

If a class of email repeatedly arrives and never needs action (test: would
the user want to see ten more of these?), propose a filter.

- Behavior: **Skip Inbox + Mark as read**. No label unless requested. Mail
  stays searchable.
- Keep them narrow. Combine sender with subject pattern, recipient alias,
  CC address, or a specific phrase. Don't filter a whole sender that can
  also send important mail (use
  `from:notifications@github.com cc:ci_activity@noreply.github.com`, not
  all of GitHub).
- Marketing. Suggest unsubscribing first; otherwise use the filter.
- Developer mail. Filter CI and workflow noise, but keep mentions, review
  requests, human comments, security advisories, access changes, and
  billing. Suggest cutting noise at the source when volume is high.
- Verify what the query matches before proposing it. Never create broad
  filters silently.

## Output

Keep it concise:

- **Needs attention.** What and why.
- **Archived.** Types of mail and why they're done.
- **Filter candidates.** Type, exact Gmail query, behavior, reasoning, and
  important exclusions.
- **Observations.** Recurring patterns worth fixing, if any.

## User preferences

Minimal inbox, aggressive archiving, narrow filters, no extra labels,
fewer decisions. These override generic email advice.
