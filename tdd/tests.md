# Test Examples — Java Spring Boot

## Good tests (behavior through public interface)

### API behavior with MockMvc

```java
@SpringBootTest
@AutoConfigureMockMvc
class OrderControllerTest {

    @Autowired MockMvc mockMvc;

    @Test
    void shouldReturnOrderSummaryForValidId() throws Exception {
        mockMvc.perform(get("/orders/42"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(42))
            .andExpect(jsonPath("$.status").value("CONFIRMED"));
    }

    @Test
    void shouldReturn404ForUnknownOrder() throws Exception {
        mockMvc.perform(get("/orders/9999"))
            .andExpect(status().isNotFound());
    }
}
```

These exercise the real HTTP layer, assert on observable output (status,
body), and survive any internal refactor that doesn't change the API contract.

### Repository query test

```java
@DataJpaTest
class OrderRepositoryTest {

    @Autowired OrderRepository repository;

    @Test
    void shouldFindPendingOrdersOlderThanOneHour() {
        // arrange — save test data using repository.save(...)
        // act    — call the query method
        // assert — verify result matches the predicate
    }
}
```

---

## Bad tests (implementation detail coupling)

### Mocking internal services — avoid this

```java
// BAD: tests internal wiring, not behavior
@Test
void shouldCallPaymentServiceOnCheckout() {
    when(paymentService.charge(any())).thenReturn(success());
    orderService.checkout(cart);
    verify(paymentService).charge(cart.total()); // testing internals
}
```

Why it's bad: this breaks if you rename `charge()` or swap the payment
service implementation, even if checkout behavior is identical externally.

Prefer: test that the order reaches CONFIRMED status after checkout via
the public API, not that a specific internal method was called.

---

## Testcontainers setup (minimal)

```java
@SpringBootTest
@Testcontainers
class OrderIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres =
        new PostgreSQLContainer<>("postgres:15")
            .withDatabaseName("testdb");

    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    // tests run against a real Postgres instance
}
```
