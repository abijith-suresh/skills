---
name: mr
description: 'Use when opening or updating a merge request.'
metadata:
  summary: "Open or update the GitLab merge request for this branch with a description reviewers can scan."
---

# MR

Open or update the GitLab merge request for this branch. This uses GitLab and
a Jira ticket key, which must lead the title. An existing merge request on
the branch is the one to update, never a second. Both title and description
are regenerated from the **net diff**, not an old body. Open ready, not
draft; never flip an existing one to draft; never from the default branch.
This skill does not commit: if the work is uncommitted, stop and tell the
user to run `commit-work` first.

## Title

Use the ticket key from the branch or conversation. If neither has one, stop
and ask.

`TICKET-123: Short description`

Do not use conventional-commit types in the title.

## Body

Derive the description from the **net diff**, not the first commit.

```markdown
## Summary

[Why this ticket needed code, and what is now true. Two or three sentences.
Do not write "this MR implements the ticket."]

[An optional sketch: the smallest view that makes the structure clear.]

## Evidence

**Before:** <output the change improves on>
**After:** <output the change produces>

## Merge Danger

**Door:** <one-way or two-way>

**Blast Radius:** <one word>

[Optional: ramifications of merging.]
```

### Summary

Sketch the smallest view that makes the structure clear. Use one or two
forms; you will not use all of them. The sketch sits next to the prose it
supports, and a trivial diff needs no sketch.

The forms: pseudocode for logic or an algorithm, a call tree for runtime
control flow, a component tree for UI structure, a shallow file tree for file
responsibility, a mermaid diagram for component interaction, and a `diff`
sketch matched to the topic. Sketch the shape, never an inventory of files.
Show a whole block when most of it is new, when omitted context would hide
ownership or order, or when the reviewer needs a copyable target shape.

Surface user-visible behaviour and API or data-contract changes in the
summary or the merge-danger section, never as a bare file list.

### Evidence

Fill the section only when a human must check what CI cannot arbitrate;
otherwise omit it. A screenshot is S-tier evidence when the environment is
set up for it and the change is visual. Execution output is A-tier: test
results and console output. Show the exact test that failed before and passes
after; keep the failing and the passing run.

Never assert a result; show it. Fake or promised evidence is worse than none.

### Merge danger

The door test asks one question: can you walk back through it? A two-way door
you can; a one-way door you cannot, and an MR cheap to roll back is lower
risk. Ticket context helps reviewers walk back through doors. Destructive
actions and hard-to-reverse decisions are one-way doors: migrations,
contract changes, irreversible commands.

Blast radius is the potential impact or scope. Consider all of it: layout
shift, breakage for consumers, degraded mobile responsiveness, anything else
the reviewer could wake up to. One word in the template; the optional
ramification line earns its place only when the reviewer would otherwise be
surprised.

Omit the section for a two-way door with a contained radius; the absence
tells reviewers the change is safe and cheap to reverse.

Omit a heading when it has nothing to say. Do not add a Testing checklist, a
References or Jira link section, or local paths. Write the body to a temp
file and pass it as the description. Do not interpolate markdown through a
quoted `--description`.

