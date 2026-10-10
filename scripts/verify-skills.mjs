import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { YAML } from "bun";

const root = fileURLToPath(new URL("../", import.meta.url));
const skillsRoot = resolve(root, "skills");
const errors = [];
const names = [];

function requireContract(condition, message) {
  if (!condition) errors.push(message);
}

async function checkReferences(directory, skillRoot) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      await checkReferences(path, skillRoot);
    } else if (entry.name.endsWith(".md")) {
      requireContract(entry.name !== "README.md", `${relative(root, path)}: use SKILL.md`);
      const content = await readFile(path, "utf8");
      for (const match of content.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
        const target = match[1];
        if (/^(?:[a-z]+:|#)/i.test(target)) continue;
        const destination = resolve(dirname(path), target.split("#")[0]);
        const inside = relative(skillRoot, destination);
        requireContract(
          inside !== ".." && !inside.startsWith("../"),
          `${relative(root, path)}: reference must stay in the skill package: ${target}`
        );
        try {
          requireContract((await stat(destination)).isFile(), `${path}: not a file: ${target}`);
        } catch {
          errors.push(`${relative(root, path)}: missing reference: ${target}`);
        }
      }
    }
  }
}

for (const entry of await readdir(skillsRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const name = entry.name;
  names.push(name);
  const directory = resolve(skillsRoot, name);
  try {
    const content = await readFile(resolve(directory, "SKILL.md"), "utf8");
    const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!frontmatter) throw new Error("missing YAML frontmatter");
    const data = YAML.parse(frontmatter[1]);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("frontmatter must be a map");
    }
    requireContract(
      name.length <= 64 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) && data.name === name,
      `${name}: name must match its lowercase kebab-case directory`
    );
    requireContract(
      typeof data.description === "string" &&
        data.description.trim().length > 0 &&
        data.description.length <= 1024,
      `${name}: description must be a nonempty string of at most 1024 characters`
    );
    requireContract(
      Object.keys(data).every((key) => ["name", "description", "metadata"].includes(key)),
      `${name}: unsupported canonical frontmatter field or invocation lock`
    );
    if (data.metadata !== undefined) {
      requireContract(
        data.metadata !== null &&
          typeof data.metadata === "object" &&
          !Array.isArray(data.metadata) &&
          Object.values(data.metadata).every((value) => typeof value === "string") &&
          !("opencode/autoinvoke" in data.metadata),
        `${name}: metadata must contain string values and no invocation policy`
      );
    }
    const display = YAML.parse(await readFile(resolve(directory, "agents/openai.yaml"), "utf8"));
    requireContract(
      display !== null &&
        typeof display === "object" &&
        Object.keys(display).every((key) => key === "interface") &&
        typeof display.interface?.display_name === "string" &&
        display.interface.display_name.trim().length > 0 &&
        typeof display.interface?.short_description === "string" &&
        display.interface.short_description.length >= 25 &&
        display.interface.short_description.length <= 64,
      `${name}: display metadata must be complete and must not restrict invocation`
    );
    await checkReferences(directory, directory);
  } catch (error) {
    errors.push(`${name}: ${error.message}`);
  }
}

const readme = await readFile(resolve(root, "README.md"), "utf8");
const catalog = readme.split("## Skill catalog")[1]?.split("\n## ")[0] ?? "";
const listed = [...catalog.matchAll(/^\| `([^`]+)` \|/gm)].map((match) => match[1]).sort();
requireContract(
  JSON.stringify(listed) === JSON.stringify(names.sort()),
  "README skill catalog must list every installed skill exactly once"
);
requireContract(
  Number(readme.match(/\[!\[Skills: (\d+)\]/)?.[1]) === names.length,
  "README skill count must match the collection"
);

if (errors.length) {
  process.stderr.write(`${errors.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    `Validated ${names.length} discoverable skill packages and README catalog.\n`
  );
}
