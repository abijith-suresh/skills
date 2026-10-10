# TypeScript decisions

Read the section relevant to the current change. These examples illustrate
choices, not a required architecture or compiler baseline. Sources were checked
on 2026-10-10. Recommendations about scope and verification are this skill's
engineering judgment; linked documentation explains the language behavior.

## Type and boundary decisions

### Validate the contract you consume

Annotations and assertions disappear during compilation. A declaration supplied
by a dependency is a static contract, so check whether its runtime data is actually
trusted. An existing schema parser is useful for nested structures and shared
contracts. Small inputs can use explicit checks without a new dependency.

This parser accepts a nonempty ID and a nonnegative safe integer retry count.
It returns a new object containing only the consumed fields. Other contracts may
need to retain or reject extra fields instead.

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

Malformed JSON can throw before field validation. Test valid values and inputs
such as `null`, arrays, missing fields, blank IDs, and fractional or negative
counts.

Sources: [erased types](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#erased-types),
[assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions),
and [`unknown`](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown).

### Inference, narrowing, and escape hatches

For TypeScript 4.9 or later, `satisfies` can check an authored configuration while
retaining useful property types. An annotation can instead deliberately expose a
wider contract. Inspect the inferred type when literal widening or contextual
typing matters.

```ts
type Formatter = string | ((value: number) => string);

const formats = {
  label: "items",
  count: (value: number) => value.toFixed(0),
} satisfies Record<"label" | "count", Formatter>;

formats.label.toUpperCase();
formats.count(3);
```

Use an explicit null or undefined check when `0`, `false`, or `""` is valid.
Bounds and key-existence assumptions still matter without
`noUncheckedIndexedAccess`. A predicate that only checks one property cannot
justify a full object contract. Type assertions can bridge a verified invariant
the compiler cannot express; they cannot establish it. An unavoidable untyped
integration may justify local `any`, with a checked typed boundary around it.

Sources: [`satisfies`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator),
[truthiness narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing),
and [indexed access checking](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess).

### Model states and choose abstractions

Put fields on the variant where they exist. This makes a saved ID available only
after narrowing to the saved state. Adding a variant makes the exhaustive branch
fail to type check until its behavior is handled.

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

The `never` check covers a closed static union, not unvalidated network data.
Validate incoming variants first. Use simpler fields when combinations are valid
and there is no state invariant to encode.

Aliases express unions and other type compositions; interfaces can support
declaration merging. Follow the codebase's choice for ordinary object contracts.
Use generics when callers need a relationship between input and output types,
rather than hiding an unchecked cast behind a type parameter. `readonly` and
`as const` do not freeze objects. Classes and enums can supply runtime values;
their emit behavior and loader support matter. Existing enum APIs need not be
rewritten merely because a literal union could also represent their values.

Sources: [discriminated unions and exhaustiveness](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions),
[aliases and interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces),
[generic relationships](https://www.typescriptlang.org/docs/handbook/2/functions.html#guidelines-for-writing-good-generic-functions),
[`readonly`](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties),
and [enum emit and const enum pitfalls](https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls).

## Module compatibility

Check the actual path from source to execution before choosing imports or syntax.

- A bundler may resolve imports that direct execution cannot. Match `module` and
  `moduleResolution` to the host, package `type` and `exports`, file extensions,
  and consumer expectations. Inspect inherited options and separate build/test
  configurations. Published libraries also need working consumer imports and
  declarations.
- Mark imports used only as types where the project's compiler and emitter
  support it. Keep value imports needed for runtime evaluation or side effects.
  `verbatimModuleSyntax` and single-file transformation constraints affect what
  can be emitted; changing them can require edits beyond the current task.
- `paths` tells TypeScript about mappings. It does not install a runtime alias
  resolver or rewrite those aliases in emitted JavaScript. Check the bundler or
  loader configuration and exercise the real entry point.
- `target` affects emitted syntax, while `lib` provides declarations for APIs.
  Neither supplies missing runtime APIs. Check runtime support or an existing
  polyfill rather than silencing an API error by adding declarations.
- Type stripping supports a subset of TypeScript syntax that needs no runtime
  transformation. Enums, parameter properties, and namespaces with runtime code
  may need a compiler or supported transform. Diagnose the actual loader instead
  of banning these constructs in every project.

Sources: [module host theory](https://www.typescriptlang.org/docs/handbook/modules/theory.html#who-is-the-host),
[choosing compiler options](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html),
and TSConfig entries for [`paths`](https://www.typescriptlang.org/tsconfig/#paths),
[`lib`](https://www.typescriptlang.org/tsconfig/#lib),
[`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax),
and [`erasableSyntaxOnly`](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly).

## Async and errors

`Promise<T>` describes fulfillment, not a typed rejection channel. Narrow catch
values before reading `.message`; a rejection may be a string or another value.
Catch where code can recover or add context, and follow existing error contracts.
Use a result union when callers need to branch on expected failures as data.

Return or await promises that callers must observe. A detached task needs an
explicit rejection handler and a runtime that allows the work to finish.
`void task()` discards a value; it does not handle rejection. To handle a rejected
promise in a local `try`/`catch`, await it inside that block.

Run dependent operations in sequence. `Promise.all` suits independent operations
whose aggregate result requires every success; its rejection does not cancel
other started work. Use `Promise.allSettled` when every outcome is needed and
inspect each result. Large workloads may require bounded concurrency. Preserve
ordering, resource cleanup, and existing cancellation semantics; a timeout alone
does not stop the underlying operation.

Sources: [promise return annotations](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions-which-return-promises),
[unknown catch variables](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html#defaulting-to-the-unknown-type-in-catch-variables---useunknownincatchvariables),
and the ECMAScript algorithms for [`Promise.all`](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all)
and [`Promise.allSettled`](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled).

## Meaningful verification

Use the repository's check command first. If no command exists, use the installed
compiler with the intended project, such as `tsc --noEmit -p tsconfig.json` for
a project that supports that check. Passing individual source files can bypass
the intended configuration. Projects with references or generated types may
need their existing build sequence instead.

For a parser, test accepted and rejected inputs and the returned data. For an
async change, test rejection propagation and any changed sequencing or cleanup.
For a module change, build or load the real entry point. For a public generic API,
use the existing type-test approach to check inference and rejected calls when
those are part of the contract. Keep runtime checks alongside static checks;
neither substitutes for the other.

Sources: [project selection](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
and [emit despite diagnostics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#emitting-with-errors).
