# Java guidelines

Use the sections relevant to the task. These are engineering recommendations
based on the linked language and API contracts. They do not mandate a style
guide, Java upgrade, or framework. The Java SE 21 links below are reference
anchors, not a minimum version. Consult the edition matching the project
before relying on an API or runtime behavior.

## Compatibility

Inspect effective configuration, including inherited build settings and
module overrides. In Maven, check compiler `release` or `source` and `target`,
properties, profiles, and toolchains. In Gradle, check toolchains,
`options.release`, and source/target compatibility. Compare those settings
with CI JDKs and deployed runtimes. The JDK running a build tool can differ
from the compiler toolchain and the code's target.

`javac --release` constrains language rules, class-file target, and the
platform APIs available for that release. `source` and `target` alone do not
prevent references to newer platform APIs. Supported release targets depend
on the compiler. Third-party dependencies also need to support the runtime.
Use the existing build configuration to verify this; propose a correction
when it is insufficient instead of changing it without authorization.
[javac](https://docs.oracle.com/en/java/javase/21/docs/specs/man/javac.html),
[Maven compiler release](https://maven.apache.org/plugins/maven-compiler-plugin/examples/set-compiler-release.html),
[Gradle toolchains](https://docs.gradle.org/current/userguide/toolchains.html).

Common gates, not an upgrade checklist:

- Records became final in Java 16. Use an ordinary class on older targets.
  [JEP 395](https://openjdk.org/jeps/395).
- Sealed classes became final in Java 17. Use them for a deliberately closed
  hierarchy, not an extensible plugin API. [JEP 409](https://openjdk.org/jeps/409).
- `List.copyOf` requires Java 10; `Stream.toList` requires Java 16 and returns
  an unmodifiable list. They are not interchangeable with a mutable list.
  [List](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html),
  [Stream](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html#toList()).
- Virtual threads became final in Java 21. Version-specific constraints still
  apply; see [Concurrency](#concurrency). [JEP 444](https://openjdk.org/jeps/444).

Confirm preview status for the exact target. A preview feature in one release
is not a portable API contract. Follow the project's existing compile, test,
and runtime preview settings rather than adding flags to make a sample work.

## Types and APIs

Use a domain type when it prevents confusing values such as an account ID
and an amount. Avoid raw types and unchecked casts unless an external
boundary requires them. Keep any suppression narrow and explain its safety.
Use interfaces where callers need a contract, not one interface per class.

Document externally relevant constraints: nulls, ranges, side effects,
ordering, failures, thread safety, and who owns returned resources.
Distinguish compatibility obligations from internal implementation choices.
[Oracle API specification guidance](https://www.oracle.com/java/technologies/javase/api-specifications.html).

Records fit transparent data carriers. Their final component fields do not
make referenced lists or arrays immutable. Validate invariants in the
constructor and copy mutable inputs where ownership requires it. For arrays,
consider copying both on input and access; generated record equality follows
component equality and does not give arrays content equality.
[JEP 395](https://openjdk.org/jeps/395).

For example, on Java 16 or later, a record can snapshot its list of immutable
strings while rejecting a null list or null elements:

```java
import java.util.List;

public record Batch(List<String> names) {
    public Batch {
        names = List.copyOf(names);
    }
}
```

Use value equality for values and identity only when the contract needs it.
If overriding `equals`, maintain symmetry, transitivity, and consistent
`hashCode`. Mutating fields used for equality while an object is a hash key
breaks lookup assumptions.
[Object](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html#equals(java.lang.Object)),
[Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html).

## Nulls and errors

Define null handling at boundaries and follow the project's existing
nullability annotations and checking tools. Do not add an annotation library
just to mark one method. Reject invalid required arguments near their entry
point; preserve legitimate optional values.

`Optional` fits a return value whose absence is expected. Return an empty
instance for absence, never a null `Optional`. Do not mechanically wrap every
field or parameter. Use an empty collection only when it means a valid result
with zero elements, not a failed operation.
[Optional](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Optional.html).

Choose checked or unchecked exceptions using the API's recovery contract
and existing conventions. Catch an exception where recovery or useful
translation is possible. Preserve its cause when translating it. Do not turn
failures into success values or routinely catch `Throwable`; fatal errors
usually cannot be recovered from. Log where the failure is handled rather
than logging and rethrowing at every layer.
[JLS exceptions](https://docs.oracle.com/javase/specs/jls/se21/html/jls-11.html).

Propagate `InterruptedException` when the API allows it. When a boundary
cannot propagate it, restore the interrupt flag and exit or otherwise follow
the documented cancellation policy. Do not restore the flag and then resume
the same blocking loop unconditionally.
[ExecutorService shutdown example](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html).

## Resources

Determine whether a resource is owned, borrowed, or transferred before
closing it. Use try-with-resources for owned `AutoCloseable` resources.
Resources close in reverse initialization order; a close failure can become
a suppressed exception when another exception is already in flight. Avoid
manual `finally` logic that replaces the original failure.
[JLS try-with-resources](https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.20.3),
[AutoCloseable](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AutoCloseable.html).

I/O-backed streams need closing. Consuming their terminal operation does not
close them. Ordinary collection streams generally need no closing. Do not
return a lazy stream from inside a scope that closes its source. Either
consume it within that scope or document a caller-owned closeable result.
[Stream resource contract](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html).

For example, this Java 8 or later method owns the file stream and returns a
fully evaluated value:

```java
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

static long countNonemptyLines(Path path) throws IOException {
    try (Stream<String> lines = Files.lines(path, StandardCharsets.UTF_8)) {
        return lines.filter(line -> !line.isEmpty()).count();
    }
}
```

For framework-managed connections, sessions, and executors, follow that
version's lifecycle contract. Closing a borrowed resource can disrupt other
operations.

## Collections

Select a list, set, or map from required order, duplicate semantics, lookup,
and mutation. Do not rely on unspecified `HashMap` or factory-map iteration
order. Keep map keys stable for equality, hashing, and any ordering comparator.
Check null and duplicate-key behavior before replacing a collection factory.
[Map](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html).

An unmodifiable wrapper is a live view of its backing collection. `List.copyOf`
protects against later structural changes in its input but shares element
references. Neither makes mutable elements deeply immutable. For Java 8,
an unmodifiable wrapper around a private `new ArrayList<>(input)` can provide
a structural snapshot; preserve the intended null semantics explicitly.
[Collections.unmodifiableList](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html#unmodifiableList(java.util.List)),
[List.copyOf](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html#copyOf(java.util.Collection)).

Use a loop when branching, checked failures, or mutation reads more clearly
that way. Stream functions should avoid modifying the source or shared
state. Required side effects do not belong in `peek`, since pipeline
optimization can skip them. Do not add parallel streams as an assumed speedup.
[Stream](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html).

## Concurrency

Prefer confinement or immutable messages when possible. When state is
shared, identify the invariant and a happens-before relationship for its
publication and updates. `volatile` supplies visibility, not a lock for a
compound operation such as incrementing or checking then updating several
fields. Use a lock, atomic operation, or other synchronization that covers
the entire invariant.
[JLS memory model](https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4),
[java.util.concurrent](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/package-summary.html).

A concurrent collection protects its documented operations, not arbitrary
multi-step application transactions. Use documented atomic operations where
they fit. Plan executor ownership, task completion and failure observation,
deadlines, cancellation, queue limits, and downstream capacity. A timed-out
wait does not itself stop the task. Shut down owned executors; leave shared
executors to their owner. `ExecutorService` supports try-with-resources only
since Java 19, and closing it waits for termination.
[ExecutorService](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html).

On Java 21 or later, virtual threads can help many blocking tasks scale.
They do not speed up CPU-bound work and should not be pooled. Limit access
to scarce downstream resources independently of thread count. On JDK 21
through 23, blocking while holding a monitor can pin a carrier thread.
JDK 24's JEP 491 removes monitor-related pinning; some native interactions
can still pin. Check the actual runtime before recommending a lock rewrite.
[JEP 444](https://openjdk.org/jeps/444), [JEP 491](https://openjdk.org/jeps/491).

## Verification

Choose checks from the behavior changed, using the existing test framework:

- Exercise a normal result and the relevant invalid, absent, empty, or
  boundary inputs. Assert the result or failure contract, not private calls.
- When ownership changes, test mutation isolation and cleanup on failure.
  When value types change, test equality and hash-based lookup expectations.
- For concurrency changes, coordinate participants with synchronization and
  bounded waits. Test cancellation, task failures, and the shared invariant.
  Sleep-based timing and a passing stress test do not prove thread safety;
  explain the synchronization argument as well.
- When a framework boundary changes, use an existing integration test that
  exercises the real transaction, mapping, or lifecycle behavior. A mocked
  collaborator cannot verify those framework guarantees.

Compile with the effective target and run required checks using the configured
toolchain. Where the task changes compatibility, exercise the result on the
supported runtime too. Review compiler/static-analysis warnings in changed
code. Do not add global warning policies, a test stack, benchmarks, or build
infrastructure unless the task requires them.

Use explicit exceptions for production input validation; Java assertions
can be disabled. Use the test framework's assertions for test expectations.
[JLS assert statement](https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.10).

Report failed or unavailable checks and distinguish evidence of correctness
from unverified assumptions. Performance claims need representative
measurements; shorter syntax and newer APIs do not establish a speedup.
