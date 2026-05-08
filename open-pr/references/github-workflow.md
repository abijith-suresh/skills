# GitHub Workflow (Personal)

## Title format

Use conventional commits:

```
type(scope?): summary
```

Examples:
- `feat: add investigation workflow`
- `fix(open-pr): correct target branch detection`
- `chore: update dependencies`

Common types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`

---

## PR body template

```markdown
## Summary
[What changed and why. 2–3 concise sentences.]

## Changes
- [Specific action taken]
- [Specific action taken]

## Testing
- [ ] [Specific verification step]
- [ ] [Edge case or regression check]

## Notes
[Risks, follow-ups, rollout notes, or reviewer context. Omit this section if there is nothing useful to say.]

Closes #[issue-number]
```

### Rules

- Derive the Testing checklist from the real changes, not a generic template
- Each Changes bullet describes an action, not just a file name
- Omit `Notes` if there is nothing useful to say
- `Closes #[issue-number]`: include only if an issue number is present in the conversation context. If no issue was mentioned, omit this line entirely — do not leave a placeholder

---

## Push and create

```bash
git push -u origin <branch-name>

gh pr create \
  --title "<title>" \
  --body "<body>" \
  --assignee @me
```

Only add `--reviewer <username>` if the user names a specific reviewer.

---

## Report

Print the PR URL returned by `gh pr create` and note any follow-up the user still needs to do manually.
