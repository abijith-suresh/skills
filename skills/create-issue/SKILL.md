---
name: create-issue
description: >-
  Capture one actionable issue or follow-up in the project's tracker. Use when
  the user asks to file an issue, report a bug, or park a thought for later
  rather than implement it now.
---

# Create issue

Turn one concrete thought into an actionable issue. This workflow captures
work; it does not implement it or split a whole project into tickets.

## Locate and draft

Identify the project's tracker from repository instructions, links, and
available integrations. Use the actual tracker, whether GitHub, GitLab,
another service, or local issue files. Do not infer a tracker from a model
or platform. If the destination is ambiguous, draft first and ask for it.

Read the user's report and relevant code or prior discussion. Search for
an existing issue when access permits. If it covers the same work, return
that link; update it only when authorized.

Write a specific title and a body with the problem, expected outcome,
known evidence, and acceptance conditions. For a bug, include reproduction
steps and observed versus expected behavior. Separate hypotheses from
facts. For a follow-up, explain why it sits outside the current task.
Omit empty sections. Do not invent reproduction results or priority.

## Publish or return the draft

An explicit request to file the issue authorizes publication to the known
destination. If the issue is an agent-discovered follow-up, present the
draft and obtain authorization before posting. Reuse authorization already
given in this session. Skill discovery alone does not authorize posting.

Use a structured tool argument or body file. Set labels, priority, or
assignees only from the request or project conventions. After an uncertain
write result, check for the issue before retrying to avoid duplicates.

Return its URL or local path. If publication is blocked, return the usable
draft and the exact missing capability. Resume the original task without
starting the parked work.

For an unverified bug, an installed `triage` can supply evidence when
investigation is in scope. Otherwise record that reproduction is unknown.
