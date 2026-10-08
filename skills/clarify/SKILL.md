---
name: clarify
description: Rewrite a rough request into a clear, precise prompt.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Clarify

## What this skill does
Rewrites a rough, plain-language request into a clear, precise prompt for a
coding agent using terminology compression. It preserves the user's intent
exactly and never answers the request.

## Steps

### 1. Read the request
Take the user's rough request as the source. Do not add features, constraints,
stack choices, or preferences they did not state.

### 2. Compress the terminology
When a well-known technical term matches what the user described, use that
term instead of the long description:

- "remember old card positions, measure new ones, animate between them" → "FLIP animation"
- "thumbnail grows into the large image on the next screen so it feels like the same image" → "shared-element transition"
- "one small part working end-to-end from UI through backend and database" → "vertical slice"
- "show the new state right away, then fix it if the server fails" → "optimistic update"
- "wait until the user stops typing before searching" → "debounce the search input"

Apply the same idea in any domain: use the standard name for the pattern,
algorithm, UX move, architecture choice, protocol, or process the user is
describing.

### 3. Preserve the details
Keep every concrete detail: product names, file names, paths, numbers,
constraints, UI copy, error text, and acceptance criteria. Structure
multi-part asks with short bullets or numbered steps when that makes the ask
clearer.

### 4. Output the rewrite
Output only the rewritten prompt text. Do not wrap it in quotes and do not
add a preamble like "Here is the rewritten prompt".

## Rules
- Terminology compression and clarity only — never invention
- Keep the user's intent exactly
- Prefer short, exact terms over long explanations
- Use the same language the user wrote in
- If the original is already precise, make only light cleanup; never force
  jargon that does not fit
- Never answer the request; output only the rewritten prompt
