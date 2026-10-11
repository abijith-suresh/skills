---
name: writing
description: Draft and edit natural, direct prose. Use when drafting text, or when the user asks for wording, tone, or clarity edits.
---

# Writing

Write for the intended reader and purpose. Preserve the author's meaning and
stance, and make the prose clear enough to understand on the first reading.

## Delegate substantial writing work

Default substantial drafting, editing, and source checks to a worker. If
delegation is unavailable, do the work directly and say so. Give the worker
the audience, purpose, format, voice, supplied facts, and bounded deliverable.
Keep a coherent piece with one writer; parallelize independent
source checks or genuinely separate sections only when that will preserve a
consistent voice. Review the complete draft against the supplied context for
factual drift, missing qualifications, and changes in stance. Resolve message
and wording decisions yourself, then return the final text with only material
assumptions or unresolved facts called out. Do not send or publish it unless
requested.

Keep scope, user decisions, and the combined result with the parent. Choose a
capable worker that honors the user's model preferences, using a less costly
option when available. State in each brief what the worker may change and
what evidence to return. Point to context only when the worker can access it;
otherwise include the needed material in the brief. Direct trivial lookups or
edits when dispatch and reporting would outweigh the work.

Run workers in the background when completion notifications are supported;
acknowledge the dispatch. With notifications, when only worker results
remain, end the turn and let completion bring you back. Carry user steering into active work. Without
notifications, wait for results using an available wait or join operation.
If no wait or join operation is available, make bounded status checks at
meaningful work boundaries; do not poll rapidly. If checks do not show
completion and there is no way to await it, report pending results and what
follow-up is needed.

## Understand the message

Use the request and available context to work out who will read this, what
they already know, and what they should understand or do next. Match the
requested format, length, language, and tone. Use the author's own writing as
a guide when available. Ask only when a missing detail would materially change
the message.

Keep facts, judgments, and unknowns distinct. Preserve names, numbers, dates,
quotations, attribution, conditions, and the strength of claims. An estimate
must not become a promise, or an opinion a fact. Keep the author's
reservations and disagreements. Do not invent evidence, feelings, anecdotes,
or personal experience to make the writing sound human.

If an essential fact is missing or sources conflict, ask or mark the gap in a
working draft. Continue with unaffected passages and surface unresolved gaps
when returning the draft. Do not present an incomplete draft as ready to send.

## Draft and edit

Choose an opening and order that serve the purpose. Practical writing usually
benefits from the answer, request, or result first, followed by needed
context. A narrative may need a scene before its point. In an edit, fix buried
points, missing connections, and repetition before polishing sentences. Keep
passages that work, and respect the requested depth of editing.

Prefer familiar words and precise verbs. Replace abstract praise with a
supported action, observation, or consequence. Name the actor when known and
relevant; keep passive voice when the actor is unknown or the outcome matters
more. Preserve needed technical terms and explain them for unfamiliar readers.
Cut filler, but keep qualifications that affect truth.

Read adjacent sentences together. Split a sentence if its clauses obscure the
point; join short sentences when that makes their relationship clearer. Repeat
a key term when a synonym would confuse the reader. Let sentence length follow
the thought. Let each paragraph develop a point and connect to the next.

Match the author's voice to the situation. Warmth can come from attending to
the reader's needs. It does not require praise, jokes, slang, or invented
first person. Use headings and lists when they help readers navigate or
compare. Judge words and punctuation in context rather than applying a
blacklist or forcing a rhythm. End when the message is complete.

## Check the prose

Read the whole piece as its intended reader. Is the point clear? Can they
follow the reasoning without backtracking? Does each paragraph add something
needed? Compare the draft with the supplied material for changed facts,
missing qualifications, or a shifted stance. Then proofread names, numbers,
links, quotations, grammar, and formatting.

Return the requested prose in its intended format. Add a brief note only for
material assumptions, unresolved facts, or substantive changes the user needs
to assess. Keep the editing process out of the finished text unless requested.

Skill loading never expands authorization to send, publish, or change
additional documents.

## Before and after

These examples illustrate decisions, not phrases to copy. The revisions use
only information supplied in the original.

### State the action

Before: "We are pleased to announce the implementation of an enhancement to the
password recovery experience that enables users to reset their passwords by email."

After: "You can now reset your password by email."

The revision names the change for a user-facing announcement and cuts the
announcement language that delays it.

### Keep the reservation

Before: "I believe this could potentially reduce support requests, but we have
not yet tested it with customers."

After: "I think this could reduce support requests, but we haven't tested it
with customers yet."

The opinion and untested claim stay intact. "This will reduce support
requests" would change the meaning.

### Connect the sentences

Before: "The file exceeded the size limit. The limit is 20 MB. This caused the
export to fail. You can split the file into smaller parts. You can try again."

After: "The export failed because the file exceeded the 20 MB limit. Split the
file into smaller parts and try again."

The cause and next action are easier to follow together.

### Preserve the author's position

Before: "While the proposal offers several compelling benefits, I remain of the
opinion that the ongoing maintenance burden outweighs them."

After: "The proposal has benefits, but I think the maintenance it would require
outweighs them."

The objection stays an objection. "The proposal has pros and cons" would erase
that judgment.

### Keep a useful passive sentence

Before: "The backup was deleted at 14:10. We don't know who deleted it."

After: "The backup was deleted at 14:10. We don't know who deleted it."

The original is clear. Naming an actor would invent a fact.
