# review

Review code changes and write a structured REVIEW.md. Supports standard
diff review and story-aware review.

## Install

```bash
npx skills add abijith-suresh/skills --skill review
```

## Use

- "review my changes"
- "do a code review"
- "review this branch"
- "review against the story [description]"
- "check if this branch covers everything for [bug/story]"

## How it works

1. **Diff analysis** — reads the full diff of the branch.
2. **Standard mode** — checks documentation, code quality, logging, and
   test coverage against the diff.
3. **Story-aware mode** — evaluates whether the changes fully address
   the requirements of a bug or feature story.
4. **Report** — produces a structured REVIEW.md with findings and
   recommendations.
