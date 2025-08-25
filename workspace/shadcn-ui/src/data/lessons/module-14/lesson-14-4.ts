import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_4: LessonContent = {
  title: 'Integration Testing',
  type: 'lesson',
  duration: '45 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Learn the principles and practices of integration testing in Java applications. Understand how to test interactions between components, work with databases, and ensure your system works correctly as a whole.',
    objectives: [
      'Understand the purpose and benefits of integration testing',
      'Learn to test component interactions and data flow',
      'Master database testing with Testcontainers and in-memory databases',
      'Implement integration tests for REST APIs and web services',
      'Use Spring Boot Test for integration testing',
      'Apply testing strategies for complex system interactions'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Integration Testing
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Testing the connections between your application components</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Integration Testing?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Integration testing is the phase in software testing where individual software modules are combined and tested as a group. 
            It occurs after unit testing and before system testing. Integration testing verifies that different modules or services 
            used by your application work well together.
          </p>
          
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">🎯 Key Goals of Integration Testing</h4>
            <ul class="text-indigo-700 space-y-1">
              <li>• <strong>Data Flow:</strong> Verify data flows correctly between components</li>
              <li>• <strong>Interface:</strong> Test interfaces between modules</li>
              <li>• <strong>Interaction:</strong> Ensure components interact as expected</li>
              <li>• <strong>Communication:</strong> Validate communication protocols</li>
              <li>• <strong>Integration:</strong> Confirm integrated system works correctly</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits of Integration Testing</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Detects interface defects early</li>
                <li>• Verifies data communication between modules</li>
                <li>• Reduces system testing time</li>
                <li>• Improves software reliability</li>
                <li>• Identifies integration issues before deployment</li>
                <li>• Ensures third-party integrations work correctly</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Challenges in Integration Testing</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Complex test environment setup</li>
                <li>• Time-consuming test execution</li>
                <li>• Difficult to isolate failures</li>
                <li>• Dependency on external systems</li>
                <li>• Managing test data</li>
                <li>• Coordinating with multiple teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Integration Testing Strategies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Top-Down Approach</h4>
              <p class="text-blue-700 mb-3">Testing starts from the top of the control hierarchy and moves down.</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Main control modules are tested first</li>
                <li>• Subordinate modules are simulated with stubs</li>
                <li>• Stubs are replaced with actual modules gradually</li>
                <li>• Early demonstration of system functionality</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Bottom-Up Approach</h4>
              <p class="text-green-700 mb-3">Testing starts from the bottom of the control hierarchy and moves up.</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Lower-level modules are tested first</li>
                <li>• Test drivers are used to simulate higher-level modules</li>
                <li>• Drivers are replaced with actual modules gradually</li>
                <li>• Functional modules are available early</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Sandwich Approach</h4>
              <p class="text-purple-700 mb-3">Combines both top-down and bottom-up approaches.</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Middle layer is tested first</li>
                <li>• Top and bottom layers are tested simultaneously</li>
                <li>• Reduces the need for stubs and drivers</li>
                <li>• Balanced approach to testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Database Integration Testing
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">In-Memory Databases</h4>
              <p class="text-green-700 mb-3">Use H2 or HSQLDB for fast, isolated database tests:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@SpringBootTest
@TestPropertySource(properties = {
    "spring.datasource.url=jdbc:h2:mem:testdb",
    "spring.jpa.hibernate.ddl-auto=create-drop"
})
class UserRepositoryIntegrationTest {
    
    @Autowired
    private TestEntityManager entityManager;
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testFindByEmail() {
        // Given
        User user = new User("John", "john@example.com");
        entityManager.persistAndFlush(user);
        
        // When
        Optional<User> found = userRepository.findByEmail("john@example.com");
        
        // Then
        assertTrue(found.isPresent());
        assertEquals("John", found.get().getName());
    }
}</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Testcontainers</h4>
              <p class="text-blue-700 mb-3">Use real databases in Docker containers for realistic testing:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@SpringBootTest
@Testcontainers
class UserServiceIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:13")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @Autowired
    private UserService userService;
    
    @Test
    void testCreateUser() {
        // Given
        UserDto userDto = new UserDto("John", "john@example.com");
        
        // When
        UserDto created = userService.createUser(userDto);
        
        // Then
        assertNotNull(created.getId());
        assertEquals("John", created.getName());
    }
}</pre>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Database Test Best Practices</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Use @Transactional to rollback changes after each test</li>
                <li>• Create test data in @BeforeEach or @Test methods</li>
                <li>• Use @Sql to load SQL scripts for complex test data</li>
                <li>• Test both success and failure scenarios</li>
                <li>• Verify data integrity and constraints</li>
                <li>• Clean up test data to avoid test interdependencies</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            REST API Integration Testing
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Using MockMvc</h4>
              <p class="text-orange-700 mb-3">Test Spring MVC controllers without starting a server:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@SpringBootTest
@AutoConfigureTestDatabase
@AutoConfigureTestEntityManager
@Transactional
class UserControllerIntegrationTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testCreateUser() throws Exception {
        // Given
        String userJson = "{\\"name\\": \\"John\\", \\"email\\": \\"john@example.com\\"}";
        
        // When & Then
        mockMvc.perform(post("/api/users")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("John"))
                .andExpect(jsonPath("$.email").value("john@example.com"));
        
        // Verify in database
        assertTrue(userRepository.findByEmail("john@example.com").isPresent());
    }
    
    @Test
    void testGetUserById() throws Exception {
        // Given
        User user = userRepository.save(new User("John", "john@example.com"));
        
        // When & Then
        mockMvc.perform(get("/api/users/{id}", user.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John"))
                .andExpect(jsonPath("$.email").value("john@example.com"));
    }
}</pre>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Using TestRestTemplate</h4>
              <p class="text-red-700 mb-3">Test with a real HTTP server:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerRestTemplateTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    @Test
    void testGetUserById() {
        // Given
        User user = userRepository.save(new User("John", "john@example.com"));
        
        // When
        ResponseEntity<UserDto> response = restTemplate.getForEntity(
            "/api/users/" + user.getId(), UserDto.class);
        
        // Then
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("John", response.getBody().getName());
    }
    
    @Test
    void testCreateUser() {
        // Given
        UserDto userDto = new UserDto("Jane", "jane@example.com");
        
        // When
        ResponseEntity<UserDto> response = restTemplate.postForEntity(
            "/api/users", userDto, UserDto.class);
        
        // Then
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals("Jane", response.getBody().getName());
        
        // Verify in database
        assertTrue(userRepository.findByEmail("jane@example.com").isPresent());
    }
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            External Service Integration Testing
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Mocking External Services</h4>
              <p class="text-teal-700 mb-3">Use WireMock to mock external HTTP services:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@SpringBootTest
@AutoConfigureWireMock(port = 0)
class PaymentServiceIntegrationTest {
    
    @Autowired
    private PaymentService paymentService;
    
    @Test
    void testProcessPayment() {
        // Given
        stubFor(post(urlEqualTo("/payments"))
                .willReturn(aResponse()
                        .withStatus(200)
                        .withHeader("Content-Type", "application/json")
                        .withBody("{\\"status\\": \\"SUCCESS\\", \\"transactionId\\": \\"12345\\"}")));
        
        PaymentRequest request = new PaymentRequest(100.0, "USD", "1234");
        
        // When
        PaymentResult result = paymentService.processPayment(request);
        
        // Then
        assertTrue(result.isSuccess());
        assertEquals("12345", result.getTransactionId());
    }
    
    @Test
    void testPaymentFailure() {
        // Given
        stubFor(post(urlEqualTo("/payments"))
                .willReturn(aResponse()
                        .withStatus(500)
                        .withBody("{\\"status\\": \\"FAILED\\", \\"message\\": \\"Service unavailable\\"}")));
        
        PaymentRequest request = new PaymentRequest(100.0, "USD", "1234");
        
        // When & Then
        assertThrows(PaymentException.class, 
            () -> paymentService.processPayment(request));
    }
}</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Testing with Real Services</h4>
              <p class="text-indigo-700 mb-3">When to use real external services in tests:</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Contract testing with service providers</li>
                <li>• End-to-end testing in staging environments</li>
                <li>• Performance testing with real services</li>
                <li>• Testing service-specific behaviors and quirks</li>
                <li>• Validating security and authentication flows</li>
                <li>• Testing failover and resilience scenarios</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Configuration Management</h4>
              <p class="text-purple-700 mb-3">Manage test configurations for different environments:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// application-test.properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.jpa.hibernate.ddl-auto=create-drop
payment.service.url=http://localhost:8089

// application-integration.properties
spring.datasource.url=jdbc:postgresql://test-db:5432/testdb
payment.service.url=https://payment-service-test.company.com

// In tests
@SpringBootTest
@TestPropertySource(locations = "classpath:application-integration.properties")
class IntegrationEnvironmentTest {
    // Tests using integration environment configuration
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices and Anti-Patterns
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Test realistic data scenarios and edge cases</li>
                  <li>• Use dedicated test environments</li>
                  <li>• Implement proper test data management</li>
                  <li>• Test both success and failure paths</li>
                  <li>• Keep tests independent and isolated</li>
                  <li>• Use meaningful test names and assertions</li>
                  <li>• Monitor and maintain test performance</li>
                  <li>• Automate integration tests in CI/CD</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">🎯 Test Organization</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Group related tests in test classes</li>
                  <li>• Use @DisplayName for readable test names</li>
                  <li>• Separate unit and integration tests</li>
                  <li>• Use profiles for different environments</li>
                  <li>• Implement test data builders</li>
                  <li>• Create reusable test utilities</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Common Anti-Patterns</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Testing too many components at once</li>
                  <li>• Relying on shared test databases</li>
                  <li>• Ignoring test data cleanup</li>
                  <li>• Making tests dependent on each other</li>
                  <li>• Testing implementation details</li>
                  <li>• Using production data in tests</li>
                  <li>• Not testing error conditions</li>
                  <li>• Skipping integration tests due to slowness</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">⚠️ Performance Considerations</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Run integration tests in parallel when possible</li>
                  <li>• Use in-memory databases for faster execution</li>
                  <li>• Limit the scope of each test</li>
                  <li>• Cache expensive setup operations</li>
                  <li>• Use @DirtiesContext sparingly</li>
                  <li>• Profile and optimize slow tests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Integration Testing Example - E-commerce Application</div>
        
        <div class="text-gray-400 mb-4">// === DOMAIN CLASSES ===</div>
        
        <div class="text-purple-400">@Entity</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Product</div> {<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@Id</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@GeneratedValue</div>(strategy = GenerationType.IDENTITY)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Long</div> id;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Column</div>(nullable = <div class="text-blue-400">false</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Column</div>(nullable = <div class="text-blue-400">false</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">BigDecimal</div> price;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Column</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> description;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Constructors, getters, setters...</div><br/>
        }<br/><br/>
        
        <div class="text-purple-400">@Entity</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Order</div> {<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@Id</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@GeneratedValue</div>(strategy = GenerationType.IDENTITY)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Long</div> id;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Column</div>(nullable = <div class="text-blue-400">false</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">LocalDateTime</div> orderDate;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@OneToMany</div>(cascade = CascadeType.ALL)<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@JoinColumn</div>(name = <div class="text-green-300">"order_id"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">List</div><<div class="text-blue-400">OrderItem</div>> items = <div class="text-blue-400">new</div> <div class="text-yellow-400">ArrayList</div><>();<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Enumerated</div>(EnumType.STRING)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">OrderStatus</div> status;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Constructors, getters, setters, helper methods...</div><br/>
        }<br/><br/>
        
        <div class="text-purple-400">@Entity</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">OrderItem</div> {<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@Id</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@GeneratedValue</div>(strategy = GenerationType.IDENTITY)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Long</div> id;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@ManyToOne</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Product</div> product;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">int</div> quantity;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">BigDecimal</div> price;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Constructors, getters, setters...</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === REPOSITORIES ===</div><br/>
        
        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">ProductRepository</div> <div class="text-blue-400">extends</div> <div class="text-blue-400">JpaRepository</div><<div class="text-blue-400">Product</div>, <div class="text-blue-400">Long</div>> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">List</div><<div class="text-blue-400">Product</div>> <div class="text-yellow-400">findByNameContaining</div>(<div class="text-blue-400">String</div> name);<br/>
        }<br/><br/>
        
        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">OrderRepository</div> <div class="text-blue-400">extends</div> <div class="text-blue-400">JpaRepository</div><<div class="text-blue-400">Order</div>, <div class="text-blue-400">Long</div>> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">List</div><<div class="text-blue-400">Order</div>> <div class="text-yellow-400">findByStatus</div>(<div class="text-blue-400">OrderStatus</div> status);<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === SERVICES ===</div><br/>
        
        <div class="text-purple-400">@Service</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">OrderService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">OrderRepository</div> orderRepository;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">ProductRepository</div> productRepository;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">PaymentService</div> paymentService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">OrderService</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OrderRepository</div> orderRepository,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ProductRepository</div> productRepository,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">PaymentService</div> paymentService) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.orderRepository = orderRepository;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.productRepository = productRepository;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.paymentService = paymentService;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Order</div> <div class="text-yellow-400">createOrder</div>(<div class="text-blue-400">OrderRequest</div> request) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Order</div> order = <div class="text-blue-400">new</div> <div class="text-yellow-400">Order</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;order.setOrderDate(LocalDateTime.now());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;order.setStatus(OrderStatus.PENDING);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Add items to order</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">OrderItemRequest</div> itemRequest : request.getItems()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Product</div> product = productRepository.findById(itemRequest.getProductId())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElseThrow(() -> <div class="text-blue-400">new</div> <div class="text-yellow-400">ProductNotFoundException</div>(<div class="text-green-300">"Product not found"</div>));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OrderItem</div> item = <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderItem</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.setProduct(product);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.setQuantity(itemRequest.getQuantity());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;item.setPrice(product.getPrice());<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order.getItems().add(item);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Save order</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Order</div> savedOrder = orderRepository.save(order);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Process payment</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;paymentService.processPayment(<div class="text-blue-400">new</div> <div class="text-yellow-400">PaymentRequest</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;savedOrder.getId(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;savedOrder.getTotalAmount()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;savedOrder.setStatus(OrderStatus.CONFIRMED);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">PaymentException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;savedOrder.setStatus(OrderStatus.FAILED);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw</div> <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderProcessingException</div>(<div class="text-green-300">"Payment failed"</div>, e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> orderRepository.save(savedOrder);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === INTEGRATION TESTS ===</div><br/>
        
        <div class="text-purple-400">@SpringBootTest</div><br/>
        <div class="text-purple-400">@TestPropertySource</div>(properties = {<br/>
        &nbsp;&nbsp;<div class="text-green-300">"spring.datasource.url=jdbc:h2:mem:testdb"</div>,<br/>
        &nbsp;&nbsp;<div class="text-green-300">"spring.jpa.hibernate.ddl-auto=create-drop"</div><br/>
        })<br/>
        <div class="text-purple-400">@Transactional</div><br/>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">OrderServiceIntegrationTest</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Autowired</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">TestEntityManager</div> entityManager;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Autowired</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">OrderService</div> orderService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Autowired</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">ProductRepository</div> productRepository;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@MockBean</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">PaymentService</div> paymentService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">createOrder_ValidRequest_CreatesOrder</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Given</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Product</div> product = <div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product.setName(<div class="text-green-300">"Test Product"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product.setPrice(<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"29.99"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product = entityManager.persistAndFlush(product);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OrderRequest</div> request = <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderRequest</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OrderItemRequest</div> itemRequest = <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderItemRequest</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;itemRequest.setProductId(product.getId());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;itemRequest.setQuantity(<div class="text-green-300">2</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;request.setItems(Arrays.asList(itemRequest));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;when(paymentService.processPayment(any(<div class="text-blue-400">PaymentRequest</div>.<div class="text-blue-400">class</div>)))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.thenReturn(<div class="text-blue-400">new</div> <div class="text-yellow-400">PaymentResponse</div>(<div class="text-blue-400">true</div>, <div class="text-green-300">"payment-123"</div>));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// When</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Order</div> order = orderService.createOrder(request);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Then</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertNotNull(order.getId());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(OrderStatus.CONFIRMED, order.getStatus());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">1</div>, order.getItems().size());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(product.getId(), order.getItems().get(<div class="text-green-300">0</div>).getProduct().getId());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">2</div>, order.getItems().get(<div class="text-green-300">0</div>).getQuantity());<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;verify(paymentService).processPayment(any(<div class="text-blue-400">PaymentRequest</div>.<div class="text-blue-400">class</div>));<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">createOrder_PaymentFails_OrderStatusFailed</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Given</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Product</div> product = <div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product.setName(<div class="text-green-300">"Test Product"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product.setPrice(<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"29.99"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product = entityManager.persistAndFlush(product);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OrderRequest</div> request = <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderRequest</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">OrderItemRequest</div> itemRequest = <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderItemRequest</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;itemRequest.setProductId(product.getId());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;itemRequest.setQuantity(<div class="text-green-300">1</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;request.setItems(Arrays.asList(itemRequest));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;when(paymentService.processPayment(any(<div class="text-blue-400">PaymentRequest</div>.<div class="text-blue-400">class</div>)))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.thenThrow(<div class="text-blue-400">new</div> <div class="text-yellow-400">PaymentException</div>(<div class="text-green-300">"Payment failed"</div>));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// When & Then</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertThrows(OrderProcessingException.<div class="text-blue-400">class</div>, () -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orderService.createOrder(request);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Verify order status is failed</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div><<div class="text-blue-400">Order</div>> orders = orderRepository.findByStatus(OrderStatus.FAILED);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">1</div>, orders.size());<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// === REST CONTROLLER INTEGRATION TEST ===</div><br/>
        
        <div class="text-purple-400">@SpringBootTest</div><br/>
        <div class="text-purple-400">@AutoConfigureTestDatabase</div><br/>
        <div class="text-purple-400">@AutoConfigureMockMvc</div><br/>
        <div class="text-purple-400">@Transactional</div><br/>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">OrderControllerIntegrationTest</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Autowired</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">MockMvc</div> mockMvc;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Autowired</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">TestEntityManager</div> entityManager;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@MockBean</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">PaymentService</div> paymentService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">createOrder_ValidRequest_ReturnsCreatedOrder</div>() <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Given</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Product</div> product = <div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product.setName(<div class="text-green-300">"Test Product"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product.setPrice(<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"19.99"</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;product = entityManager.persistAndFlush(product);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> orderJson = <div class="text-green-300">"{\\"items\\":[{\\"productId\\":"</div> + product.getId() + <div class="text-green-300">",\\"quantity\\":2}]}"</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;when(paymentService.processPayment(any(<div class="text-blue-400">PaymentRequest</div>.<div class="text-blue-400">class</div>)))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.thenReturn(<div class="text-blue-400">new</div> <div class="text-yellow-400">PaymentResponse</div>(<div class="text-blue-400">true</div>, <div class="text-green-300">"payment-456"</div>));<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// When & Then</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;mockMvc.perform(post(<div class="text-green-300">"/api/orders"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.contentType(MediaType.APPLICATION_JSON)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.content(orderJson))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.andExpect(status().isCreated())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.andExpect(jsonPath(<div class="text-green-300">"$.status"</div>).value(<div class="text-green-300">"CONFIRMED"</div>))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.andExpect(jsonPath(<div class="text-green-300">"$.items[0].productId"</div>).value(product.getId().intValue()))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.andExpect(jsonPath(<div class="text-green-300">"$.items[0].quantity"</div>).value(<div class="text-green-300">2</div>));<br/>
        &nbsp;&nbsp;}<br/>
        }<br/>
      </div>
    `,
    exercise: `
      **🎯 Integration Testing Exercises**

      **Exercise 1: Database Integration Testing**
      Create a Spring Boot application with User entity and UserRepository:
      - Implement integration tests using H2 in-memory database
      - Test CRUD operations with TestEntityManager
      - Use @DataJpaTest for repository-focused tests
      - Verify data integrity constraints

      **Exercise 2: Service Layer Integration Testing**
      Create a UserService that depends on UserRepository and EmailService:
      - Write integration tests using @SpringBootTest
      - Mock external services (EmailService) with @MockBean
      - Test service methods that involve multiple components
      - Verify transactional behavior

      **Exercise 3: REST API Integration Testing**
      Create a UserController with endpoints for user management:
      - Test API endpoints using MockMvc
      - Verify HTTP status codes and response bodies
      - Test both success and error scenarios
      - Validate request and response JSON structures

      **Exercise 4: External Service Integration Testing**
      Create a PaymentService that integrates with an external payment gateway:
      - Use WireMock to mock the external service
      - Test different response scenarios (success, failure, timeout)
      - Verify request payloads sent to external service
      - Handle and test error responses

      **Exercise 5: Testcontainers Integration Testing**
      Set up Testcontainers for realistic database testing:
      - Configure PostgreSQL Testcontainer
      - Test with a real database instead of in-memory
      - Verify database-specific features and constraints
      - Test database migration scripts

      **Exercise 6: Configuration and Profiles**
      Implement different configurations for testing environments:
      - Create separate configuration files for test and integration
      - Use @ActiveProfiles to switch between configurations
      - Test environment-specific behavior
      - Implement conditional bean creation for tests

      **Deliverable:**
      Create a comprehensive integration test suite that covers database interactions, service layer integration, REST API endpoints, and external service integration. Ensure tests are well-organized, properly isolated, and cover both happy path and error scenarios.
    `
  }
};
