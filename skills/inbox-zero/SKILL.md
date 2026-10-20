---
name: inbox-zero
description: Triage a Gmail inbox and clean up messages within the user's authorization.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Inbox zero

Triage a scoped Gmail inbox, identify what still needs attention, and clean up messages when the user has authorized the change. Work from Gmail access or message data actually available in the current environment. If the needed messages or capability are unavailable, say what is missing and offer a useful next step. Do not claim to have inspected or changed mail you could not access.

## Workflow

1. **Set the scope.** Use the inbox, date range, or batch the user named. If the request makes the scope clear, proceed. If it does not and the choice would change what gets reviewed, ask one focused question. For large inboxes, start with a manageable recent batch or the user's stated priority and say what remains out of scope.
2. **Choose who inspects.** Decide for the whole request whether delegation will help. Delegate substantive inbox or thread analysis when useful and workers are available, with a bounded scope, read-only limits, and a factual brief. The parent retains scope, authorization decisions, and the combined result. Handle small reviews directly; if substantive work must stay direct because delegation is unavailable, state why.
3. **Read for context.** Review the relevant message and thread context, including newer replies when available. Use the sender, content, dates, and requested next step. An unread marker or subject line alone is not enough to decide a message is unimportant.
4. **Sort by what happens next.** Identify messages that need the user to act or decide, messages awaiting someone else, useful reference, finished messages that can leave the inbox, and messages whose status is unclear. Surface genuine deadlines or account risks early, based on the message and current dates.
5. **Make only authorized changes.** A request to review or triage calls for findings and recommendations. When the user asks to clean the inbox, carry out clearly requested, low-risk cleanup if the available Gmail access supports it. Prefer archiving finished mail when appropriate. Do not delete, send or reply, unsubscribe, create filters, or make other unrequested changes unless the session already authorizes that action. Ask only when authorization is missing. Leave uncertain or consequential messages untouched and explain why.
6. **Report the result.** Briefly state the messages that need attention and why, the cleanup completed, and the important uncertain items or remaining scope. Include proposed actions separately from actions already taken. Mention a recurring noise pattern or a narrow filter idea only when the reviewed mail supports it.

## Judgment

- Keep related messages together when a thread explains whether an older request is resolved. Archive an older message only when the newer context clearly closes it.
- Check whether dates, deadlines, renewals, appointments, or requests are still active before treating them as finished.
- Do not infer that a message is safe to hide just because it is automated or comes from a recurring sender. Check for account security, payment, legal, medical, employment, travel, or other personal consequences in context.
- Suggest a filter only for a repeated, well-understood pattern that the user would not want in the inbox. Show its exact Gmail search criteria, intended effect, and any important exclusions. Keep it narrow and create it only when the session authorizes filter creation; otherwise ask first.
- Use existing labels only when they help the user's stated workflow. Do not require labels, a particular Gmail setup, or a specific connector or command line tool.

## Preferences for this collection's owner

Carry forward the owner's stated preference for a small inbox, archiving finished messages, narrow filters, few labels, and fewer routine decisions. Treat these as defaults for this collection's owner, not rules for every Gmail user. Follow any newer or more specific preference the user gives.
