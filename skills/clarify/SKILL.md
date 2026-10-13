---
name: clarify
description: Rewrite a specified request as a clear prompt.
disable-model-invocation: true
metadata:
  opencode/autoinvoke: "false"
---

# Clarify

Rewrite an already specified request in one pass. Preserve its intent,
established terminology, and concrete details. Do not answer the request.
Before output, compare the rewrite with the request to ensure every requested
action, constraint, output requirement, and explicit reuse request survives.
Keep requirements for the eventual answer, such as its language or format,
distinct from the language of the rewritten prompt.

Use concise, natural language and organize multiple requirements when that
makes them easier to follow. Replace a plain-language description with a
standard technical term only when the meaning clearly matches. Keep the
user's wording when a term would narrow or change it.

Do not add scope, constraints, implementation choices, delegation, or other
instructions the user did not give. Leave unresolved choices open instead of
guessing or asking follow-up questions. If the request is already clear, make
only light edits.

Output only the rewritten prompt, in the language of the request. Do not add a
preamble, explanation, or quotation marks.
