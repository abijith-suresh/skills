# TypeScript examples

Use the example relevant to the contract you are writing. Adapt its fields,
failure behavior, and syntax to the project.

## Validate unknown input

This parser accepts a nonempty ID and a nonnegative safe integer retry count.
It returns only the fields the code consumes. Decide whether your contract should
retain or reject extra fields instead. An existing schema parser may be clearer
for nested data or shared contracts.

```ts
type Job = { id: string; retries: number };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseJob(value: unknown): Job {
  if (
    !isRecord(value) ||
    typeof value.id !== "string" ||
    value.id.trim().length === 0 ||
    typeof value.retries !== "number" ||
    !Number.isSafeInteger(value.retries) ||
    value.retries < 0
  ) {
    throw new Error("Invalid job");
  }
  return { id: value.id.trim(), retries: value.retries };
}

function parseJobJson(text: string): Job {
  const value: unknown = JSON.parse(text);
  return parseJob(value);
}
```

Malformed JSON can throw before field validation. Check the accepted output as
well as rejected inputs such as `null`, arrays, missing fields, blank IDs, and
fractional or negative counts. The runtime checks establish the type; an
[assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
would only tell the compiler to trust you.

## Check authored configuration

On TypeScript 4.9 or later,
[`satisfies`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
checks compatibility while retaining useful property types. A wider annotation
may be preferable when callers should see only the declared contract. Neither
choice validates data received at runtime.

```ts
type Formatter = string | ((value: number) => string);

const formats = {
  label: "items",
  count: (value: number) => value.toFixed(0),
} satisfies Record<"label" | "count", Formatter>;

formats.label.toUpperCase();
formats.count(3);
```

The string method and formatter call remain available without assertions.
Inspect the inferred type when literal widening or contextual typing matters.
Use syntax supported by the project's compiler version.

## Put data on its state

A saved ID is available after narrowing to the saved state. The
[`never` check](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking)
makes an added, unhandled variant fail to type check.

```ts
type SaveState =
  | { status: "idle" }
  | { status: "saving" }
  | { status: "saved"; id: string }
  | { status: "failed"; error: Error };

function assertNever(_value: never): never {
  throw new Error("Unexpected save state");
}

function describeSave(state: SaveState): string {
  switch (state.status) {
    case "idle":
      return "Ready";
    case "saving":
      return "Saving";
    case "saved":
      return state.id;
    case "failed":
      return state.error.message;
    default:
      return assertNever(state);
  }
}
```

This checks a closed static union. Validate incoming data before treating it as
that union. Verify each state's observable behavior; adding a new variant should
require handling it. Use simpler fields when their combinations are valid and
there is no state invariant to encode.
