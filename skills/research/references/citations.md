# Citations

Use this when the user explicitly asks how something is implemented, where a
pattern came from, or wants to understand what the repo says about a topic.

## Format

Cite by file path and named anchor — not by line number. Line numbers drift
across pulls; function and class names stay stable.

```
# pattern from ~/.research/vercel/next.js/packages/next/src/server/app-router.ts
# see: createRequestHandler
```

## When to apply

- User asks "how does X work in Y framework"
- User asks "where did this pattern come from"
- User asks "what does the repo say about Z"
- Any request where showing the source adds understanding

Do not apply during silent implementation. Citations are a presentation concern,
not an implementation concern.
