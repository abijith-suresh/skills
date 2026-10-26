import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const { version } = JSON.parse(readFileSync("package.json", "utf8"));

if (version === "0.0.0") {
  const output = process.env.CHANGESETS_OUTPUT;
  if (output) {
    writeFileSync(output, "");
  }
  process.exit(0);
}

const result = spawnSync("bun", ["run", "changeset", "git-tag"], {
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);
