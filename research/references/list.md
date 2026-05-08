# Research List

Show all repos currently cached in `~/.research/`.

## Command

Triggered by `/research list`, "what repos are in research", or equivalent phrasing.

## Output

```bash
find ~/.research -mindepth 2 -maxdepth 2 -type d | \
  sed "s|$HOME/.research/||" | sort
```

Format output as:

```
username/repo-name
username/another-repo
other-user/repo-name
```

No timestamps, no URLs, no descriptions. Just `username/repo` identifiers.
