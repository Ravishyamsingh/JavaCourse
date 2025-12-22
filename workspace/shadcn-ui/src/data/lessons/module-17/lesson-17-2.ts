import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_2: LessonContent = {
  title: 'Spring Boot for Microservices',
  type: 'lesson',
  duration: '75 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn how to build microservices using Spring Boot, including service configuration, externalized configuration, profiles, actuator endpoints, and microservice-specific patterns.',
    objectives: [
      'Build microservices with Spring Boot framework',
      'Implement externalized configuration and profiles',
      'Use Spring Boot Actuator for monitoring and management',
      'Implement health checks and metrics collection',
      'Handle service-to-service communication',
      'Apply microservice-specific Spring Boot patterns'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Spring Boot for Microservices
        </h1>
        <p class="mt-3 text-green-100 text-lg">Rapid microservice development with Spring Boot</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Spring Boot for Microservices Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Spring Boot provides an excellent foundation for building microservices with its auto-configuration, 
            embedded servers, production-ready features, and extensive ecosystem. It simplifies the development 
            and deployment of microservices while providing enterprise-grade capabilities.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Spring Boot Advantages for Microservices</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Rapid Development:</strong> Auto-configuration and starter dependencies</li>
              <li>• <strong>Embedded Servers:</strong> No need for external application servers</li>
              <li>• <strong>Production Ready:</strong> Built-in monitoring, health checks, and metrics</li>
              <li>• <strong>Cloud Native:</strong> Easy deployment to cloud platforms</li>
              <li>• <strong>Externalized Configuration:</strong> Environment-specific configurations</li>
              <li>• <strong>Microservice Patterns:</strong> Built-in support for common patterns</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Key Features</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Auto-configuration for common scenarios</li>
                <li>• Starter POMs for quick setup</li>
                <li>• Embedded Tomcat, Jetty, or Undertow</li>
                <li>• Spring Boot Actuator for monitoring</li>
                <li>• Configuration properties binding</li>
                <li>• Profile-based configuration</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">🏗️ Microservice Architecture</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Independent deployable units</li>
                <li>• Service discovery integration</li>
                <li>• Circuit breaker patterns</li>
                <li>• Distributed configuration</li>
                <li>• API gateway integration</li>
                <li>• Event-driven communication</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Creating Microservices with Spring Boot
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Essential Dependencies</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Core Spring Boot Starters</h5>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>spring-boot-starter-web</strong>
                    <p class="text-gray-600">REST APIs and web applications</p>
                  </div>
                  <div>
                    <strong>spring-boot-starter-data-jpa</strong>
                    <p class="text-gray-600">Database access with JPA</p>
                  </div>
                  <div>
                    <strong>spring-boot-starter-actuator</strong>
                    <p class="text-gray-600">Monitoring and management</p>
                  </div>
                  <div>
                    <strong>spring-boot-starter-security</strong>
                    <p class="text-gray-600">Security features</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Microservice Structure</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Recommended Package Structure</h5>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
com.example.userservice
├── UserServiceApplication.java
├── config/
│   ├── DatabaseConfig.java
│   ├── SecurityConfig.java
│   └── WebConfig.java
├── controller/
│   └── UserController.java
├── service/
│   ├── UserService.java
│   └── impl/
│       └── UserServiceImpl.java
├── repository/
│   └── UserRepository.java
├── model/
│   ├── entity/
│   │   └── User.java
│   └── dto/
│       ├── UserDto.java
│       └── CreateUserRequest.java
├── exception/
│   ├── UserNotFoundException.java
│   └── GlobalExceptionHandler.java
└── client/
    └── OrderServiceClient.java</pre>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Configuration Management
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Externalized Configuration</h4>
              <p class="text-purple-700 mb-3">Spring Boot supports multiple configuration sources with a specific precedence order:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Configuration Precedence (High to Low)</h5>
                <ol class="text-sm space-y-1">
                  <li>1. Command line arguments</li>
                  <li>2. JNDI attributes</li>
                  <li>3. Java System properties</li>
                  <li>4. OS environment variables</li>
                  <li>5. Profile-specific properties</li>
                  <li>6. Application properties</li>
                  <li>7. @PropertySource annotations</li>
                  <li>8. Default properties</li>
                </ol>
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Configuration Profiles</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Environment Profiles</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>development:</strong> Local development settings</li>
                    <li>• <strong>testing:</strong> Test environment configuration</li>
                    <li>• <strong>staging:</strong> Pre-production settings</li>
                    <li>• <strong>production:</strong> Production configuration</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Profile Activation</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>spring.profiles.active=prod</code></li>
                    <li>• <code>SPRING_PROFILES_ACTIVE=prod</code></li>
                    <li>• <code>--spring.profiles.active=prod</code></li>
                    <li>• <code>@ActiveProfiles("test")</code></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Configuration Properties</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">Type-Safe Configuration</h5>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@ConfigurationProperties(prefix = "app")
@Component
public class AppProperties {
    private String name;
    private String version;
    private Database database = new Database();
    private Security security = new Security();
    
    public static class Database {
        private String url;
        private String username;
        private String password;
        // getters and setters
    }
    
    public static class Security {
        private String jwtSecret;
        private long jwtExpiration;
        // getters and setters
    }
}</pre>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Spring Boot Actuator
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Production-Ready Features</h4>
              <p class="text-orange-700 mb-3">Actuator provides built-in endpoints for monitoring and managing your microservices:</p>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Endpoint</th>
                      <th class="py-2 px-4 text-left">Purpose</th>
                      <th class="py-2 px-4 text-left">HTTP Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">/actuator/health</td>
                      <td class="py-2 px-4">Application health status</td>
                      <td class="py-2 px-4">GET</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">/actuator/metrics</td>
                      <td class="py-2 px-4">Application metrics</td>
                      <td class="py-2 px-4">GET</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">/actuator/info</td>
                      <td class="py-2 px-4">Application information</td>
                      <td class="py-2 px-4">GET</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">/actuator/env</td>
                      <td class="py-2 px-4">Environment properties</td>
                      <td class="py-2 px-4">GET</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">/actuator/loggers</td>
                      <td class="py-2 px-4">Logger configuration</td>
                      <td class="py-2 px-4">GET/POST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Custom Health Indicators</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Health Check Components</h5>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Database Health</strong>
                    <p class="text-gray-600">Check database connectivity</p>
                  </div>
                  <div>
                    <strong>External Service Health</strong>
                    <p class="text-gray-600">Verify dependent services</p>
                  </div>
                  <div>
                    <strong>Disk Space Health</strong>
                    <p class="text-gray-600">Monitor available disk space</p>
                  </div>
                  <div>
                    <strong>Custom Business Health</strong>
                    <p class="text-gray-600">Application-specific checks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Metrics and Monitoring</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">JVM Metrics</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Memory usage</li>
                    <li>• Garbage collection</li>
                    <li>• Thread pools</li>
                    <li>• Class loading</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">HTTP Metrics</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Request count</li>
                    <li>• Response times</li>
                    <li>• Error rates</li>
                    <li>• Status codes</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Custom Metrics</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Business metrics</li>
                    <li>• Performance counters</li>
                    <li>• Application events</li>
                    <li>• Resource usage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Service Communication Patterns
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">HTTP Client Configuration</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">RestTemplate</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Synchronous HTTP client</li>
                    <li>• Load balancing support</li>
                    <li>• Error handling</li>
                    <li>• Interceptors for logging</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">WebClient</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Reactive HTTP client</li>
                    <li>• Non-blocking I/O</li>
                    <li>• Backpressure handling</li>
                    <li>• Streaming support</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Resilience Patterns</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Circuit Breaker</h5>
                  <p class="text-sm text-gray-700 mb-2">Prevent cascading failures</p>
                  <ul class="text-xs space-y-1">
                    <li>• Closed: Normal operation</li>
                    <li>• Open: Fail fast</li>
                    <li>• Half-Open: Test recovery</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Retry Pattern</h5>
                  <p class="text-sm text-gray-700 mb-2">Handle transient failures</p>
                  <ul class="text-xs space-y-1">
                    <li>• Exponential backoff</li>
                    <li>• Maximum retry attempts</li>
                    <li>• Jitter for load distribution</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Asynchronous Communication</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-1">Message Queues</h5>
                  <p class="text-sm text-gray-700">RabbitMQ, Apache Kafka, Amazon SQS</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-1">Event Streaming</h5>
                  <p class="text-sm text-gray-700">Apache Kafka, Amazon Kinesis, Azure Event Hubs</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-1">Pub/Sub Messaging</h5>
                  <p class="text-sm text-gray-700">Redis Pub/Sub, Google Pub/Sub, Azure Service Bus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Testing Microservices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Testing Strategy</h4>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Unit Tests</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Service layer testing</li>
                    <li>Repository testing</li>
                    <li>Utility function testing</li>
                    <li>Mock external dependencies</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Integration Tests</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>@SpringBootTest</li>
                    <li>@WebMvcTest</li>
                    <li>@DataJpaTest</li>
                    <li>TestContainers</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Contract Tests</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Spring Cloud Contract</li>
                    <li>Pact testing</li>
                    <li>API schema validation</li>
                    <li>Consumer-driven contracts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Test Slices</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Web Layer Testing</h5>
                  <ul class="text-sm space-y-1">
                    <li>• @WebMvcTest for controllers</li>
                    <li>• MockMvc for HTTP testing</li>
                    <li>• @MockBean for dependencies</li>
                    <li>• JSON serialization testing</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Data Layer Testing</h5>
                  <ul class="text-sm space-y-1">
                    <li>• @DataJpaTest for repositories</li>
                    <li>• TestEntityManager for data setup</li>
                    <li>• In-memory database testing</li>
                    <li>• Custom query testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Spring Boot Microservice Example

// 1. Main Application Class
@SpringBootApplication
@EnableJpaRepositories
@EnableConfigurationProperties(AppProperties.class)
public class UserServiceApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
    
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @Bean
    public WebClient webClient() {
        return WebClient.builder()
            .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(2 * 1024 * 1024))
            .build();
    }
}

// 2. Configuration Properties
@ConfigurationProperties(prefix = "user-service")
@Component
@Validated
public class AppProperties {
    
    @NotBlank
    private String name;
    
    @NotBlank
    private String version;
    
    private Database database = new Database();
    private Security security = new Security();
    private ExternalServices externalServices = new ExternalServices();
    
    public static class Database {
        @NotBlank
        private String url;
        @NotBlank
        private String username;
        @NotBlank
        private String password;
        private int maxPoolSize = 10;
        private Duration connectionTimeout = Duration.ofSeconds(30);
        
        // Getters and setters
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
        
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
        
        public int getMaxPoolSize() { return maxPoolSize; }
        public void setMaxPoolSize(int maxPoolSize) { this.maxPoolSize = maxPoolSize; }
        
        public Duration getConnectionTimeout() { return connectionTimeout; }
        public void setConnectionTimeout(Duration connectionTimeout) { this.connectionTimeout = connectionTimeout; }
    }
    
    public static class Security {
        @NotBlank
        private String jwtSecret;
        private Duration jwtExpiration = Duration.ofHours(24);
        private boolean enableCsrf = false;
        
        // Getters and setters
        public String getJwtSecret() { return jwtSecret; }
        public void setJwtSecret(String jwtSecret) { this.jwtSecret = jwtSecret; }
        
        public Duration getJwtExpiration() { return jwtExpiration; }
        public void setJwtExpiration(Duration jwtExpiration) { this.jwtExpiration = jwtExpiration; }
        
        public boolean isEnableCsrf() { return enableCsrf; }
        public void setEnableCsrf(boolean enableCsrf) { this.enableCsrf = enableCsrf; }
    }
    
    public static class ExternalServices {
        @NotBlank
        private String orderServiceUrl;
        @NotBlank
        private String notificationServiceUrl;
        private Duration timeout = Duration.ofSeconds(5);
        private int maxRetries = 3;
        
        // Getters and setters
        public String getOrderServiceUrl() { return orderServiceUrl; }
        public void setOrderServiceUrl(String orderServiceUrl) { this.orderServiceUrl = orderServiceUrl; }
        
        public String getNotificationServiceUrl() { return notificationServiceUrl; }
        public void setNotificationServiceUrl(String notificationServiceUrl) { 
            this.notificationServiceUrl = notificationServiceUrl; 
        }
        
        public Duration getTimeout() { return timeout; }
        public void setTimeout(Duration timeout) { this.timeout = timeout; }
        
        public int getMaxRetries() { return maxRetries; }
        public void setMaxRetries(int maxRetries) { this.maxRetries = maxRetries; }
    }
    
    // Main class getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }
    
    public Database getDatabase() { return database; }
    public void setDatabase(Database database) { this.database = database; }
    
    public Security getSecurity() { return security; }
    public void setSecurity(Security security) { this.security = security; }
    
    public ExternalServices getExternalServices() { return externalServices; }
    public void setExternalServices(ExternalServices externalServices) { this.externalServices = externalServices; }
}

// 3. REST Controller with Validation
@RestController
@RequestMapping("/api/users")
@Validated
@Slf4j
public class UserController {
    
    private final UserService userService;
    private final AppProperties appProperties;
    
    public UserController(UserService userService, AppProperties appProperties) {
        this.userService = userService;
        this.appProperties = appProperties;
    }
    
    @GetMapping
    public ResponseEntity<PagedResponse<UserDto>> getAllUsers(
            @RequestParam(defaultValue = "0") @Min(0) int page,
            @RequestParam(defaultValue = "20") @Max(100) int size,
            @RequestParam(defaultValue = "name") String sortBy) {
        
        log.info("Fetching users - page: {}, size: {}, sortBy: {}", page, size, sortBy);
        
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        Page<UserDto> users = userService.findAll(pageable);
        
        PagedResponse<UserDto> response = new PagedResponse<>();
        response.setContent(users.getContent());
        response.setPage(page);
        response.setSize(size);
        response.setTotalElements(users.getTotalElements());
        response.setTotalPages(users.getTotalPages());
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUserById(@PathVariable @NotBlank String userId) {
        log.info("Fetching user by ID: {}", userId);
        UserDto user = userService.findById(userId);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping
    public ResponseEntity<UserDto> createUser(
            @Valid @RequestBody CreateUserRequest request,
            UriComponentsBuilder uriBuilder) {
        
        log.info("Creating new user with email: {}", request.getEmail());
        UserDto user = userService.createUser(request);
        
        URI location = uriBuilder.path("/api/users/{id}")
            .buildAndExpand(user.getId()).toUri();
        
        return ResponseEntity.created(location).body(user);
    }
    
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(
            @PathVariable @NotBlank String userId,
            @Valid @RequestBody UpdateUserRequest request) {
        
        log.info("Updating user: {}", userId);
        UserDto user = userService.updateUser(userId, request);
        return ResponseEntity.ok(user);
    }
    
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable @NotBlank String userId) {
        log.info("Deleting user: {}", userId);
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/info")
    public ResponseEntity<Map<String, Object>> getServiceInfo() {
        Map<String, Object> info = new HashMap<>();
        info.put("service", appProperties.getName());
        info.put("version", appProperties.getVersion());
        info.put("timestamp", Instant.now());
        return ResponseEntity.ok(info);
    }
}

// 4. Service Layer with External Communication
@Service
@Transactional
@Slf4j
public class UserService {
    
    private final UserRepository userRepository;
    private final OrderServiceClient orderServiceClient;
    private final NotificationServiceClient notificationServiceClient;
    private final ApplicationEventPublisher eventPublisher;
    
    public UserService(UserRepository userRepository,
                      OrderServiceClient orderServiceClient,
                      NotificationServiceClient notificationServiceClient,
                      ApplicationEventPublisher eventPublisher) {
        this.userRepository = userRepository;
        this.orderServiceClient = orderServiceClient;
        this.notificationServiceClient = notificationServiceClient;
        this.eventPublisher = eventPublisher;
    }
    
    @Transactional(readOnly = true)
    public Page<UserDto> findAll(Pageable pageable) {
        Page<User> users = userRepository.findAll(pageable);
        return users.map(UserDto::from);
    }
    
    @Transactional(readOnly = true)
    public UserDto findById(String userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));
        return UserDto.from(user);
    }
    
    public UserDto createUser(CreateUserRequest request) {
        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("User already exists with email: " + request.getEmail());
        }
        
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // Should be encoded
        user.setActive(true);
        
        User savedUser = userRepository.save(user);
        
        // Publish user created event
        eventPublisher.publishEvent(new UserCreatedEvent(savedUser.getId(), savedUser.getEmail()));
        
        // Send welcome notification asynchronously
        CompletableFuture.runAsync(() -> {
            try {
                notificationServiceClient.sendWelcomeEmail(savedUser.getEmail(), savedUser.getName());
            } catch (Exception e) {
                log.error("Failed to send welcome email for user: {}", savedUser.getId(), e);
            }
        });
        
        return UserDto.from(savedUser);
    }
    
    public UserDto updateUser(String userId, UpdateUserRequest request) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));
        
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        
        User updatedUser = userRepository.save(user);
        
        // Publish user updated event
        eventPublisher.publishEvent(new UserUpdatedEvent(updatedUser.getId(), updatedUser.getEmail()));
        
        return UserDto.from(updatedUser);
    }
    
    public void deleteUser(String userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));
        
        // Check if user has active orders
        try {
            List<OrderDto> activeOrders = orderServiceClient.getActiveOrdersByUserId(userId);
            if (!activeOrders.isEmpty()) {
                throw new UserDeletionException("Cannot delete user with active orders");
            }
        } catch (Exception e) {
            log.warn("Failed to check active orders for user: {}", userId, e);
            // Continue with deletion if order service is unavailable
        }
        
        userRepository.delete(user);
        
        // Publish user deleted event
        eventPublisher.publishEvent(new UserDeletedEvent(userId, user.getEmail()));
    }
}

// 5. External Service Clients with Circuit Breaker
@Component
@Slf4j
public class OrderServiceClient {
    
    private final RestTemplate restTemplate;
    private final AppProperties appProperties;
    private final CircuitBreaker circuitBreaker;
    
    public OrderServiceClient(RestTemplate restTemplate, AppProperties appProperties) {
        this.restTemplate = restTemplate;
        this.appProperties = appProperties;
        this.circuitBreaker = CircuitBreaker.ofDefaults("orderService");
        
        // Configure circuit breaker
        circuitBreaker.getEventPublisher()
            .onStateTransition(event ->
                log.info("Circuit breaker state transition: {}", event));
    }
    
    public List<OrderDto> getActiveOrdersByUserId(String userId) {
        return circuitBreaker.executeSupplier(() -> {
            try {
                String url = appProperties.getExternalServices().getOrderServiceUrl() +
                           "/api/orders/user/" + userId + "/active";
                
                ResponseEntity<List<OrderDto>> response = restTemplate.exchange(
                    url,
                    HttpMethod.GET,
                    null,
                    new ParameterizedTypeReference<List<OrderDto>>() {}
                );
                
                return response.getBody();
            } catch (Exception e) {
                log.error("Failed to fetch active orders for user: {}", userId, e);
                throw new ServiceCommunicationException("Order service unavailable", e);
            }
        });
    }
}

@Component
@Slf4j
public class NotificationServiceClient {
    
    private final WebClient webClient;
    private final AppProperties appProperties;
    
    public NotificationServiceClient(WebClient webClient, AppProperties appProperties) {
        this.webClient = webClient;
        this.appProperties = appProperties;
    }
    
    public void sendWelcomeEmail(String email, String name) {
        WelcomeEmailRequest request = new WelcomeEmailRequest(email, name);
        
        webClient.post()
            .uri(appProperties.getExternalServices().getNotificationServiceUrl() + "/api/notifications/welcome")
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(request)
            .retrieve()
            .bodyToMono(Void.class)
            .timeout(appProperties.getExternalServices().getTimeout())
            .retry(appProperties.getExternalServices().getMaxRetries())
            .subscribe(
                result -> log.info("Welcome email sent successfully to: {}", email),
                error -> log.error("Failed to send welcome email to: {}", email, error)
            );
    }
}

// 6. Custom Health Indicators
@Component
public class DatabaseHealthIndicator implements HealthIndicator {
    
    private final DataSource dataSource;
    
    public DatabaseHealthIndicator(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    @Override
    public Health health() {
        try (Connection connection = dataSource.getConnection()) {
            if (connection.isValid(1)) {
                return Health.up()
                    .withDetail("database", "Available")
                    .withDetail("validationQuery", "SELECT 1")
                    .build();
            } else {
                return Health.down()
                    .withDetail("database", "Connection invalid")
                    .build();
            }
        } catch (Exception e) {
            return Health.down()
                .withDetail("database", "Connection failed")
                .withException(e)
                .build();
        }
    }
}

@Component
public class ExternalServiceHealthIndicator implements HealthIndicator {
    
    private final OrderServiceClient orderServiceClient;
    private final AppProperties appProperties;
    
    public ExternalServiceHealthIndicator(OrderServiceClient orderServiceClient,
                                        AppProperties appProperties) {
        this.orderServiceClient = orderServiceClient;
        this.appProperties = appProperties;
    }
    
    @Override
    public Health health() {
        Health.Builder builder = new Health.Builder();
        
        try {
            // Check order service health
            String healthUrl = appProperties.getExternalServices().getOrderServiceUrl() + "/actuator/health";
            // Implement health check logic
            builder.up().withDetail("orderService", "Available");
        } catch (Exception e) {
            builder.down().withDetail("orderService", "Unavailable").withException(e);
        }
        
        return builder.build();
    }
}

// 7. Custom Metrics
@Component
public class UserMetrics {
    
    private final Counter userCreatedCounter;
    private final Counter userDeletedCounter;
    private final Gauge activeUsersGauge;
    private final Timer userCreationTimer;
    
    private final UserRepository userRepository;
    
    public UserMetrics(MeterRegistry meterRegistry, UserRepository userRepository) {
        this.userRepository = userRepository;
        
        this.userCreatedCounter = Counter.builder("users.created")
            .description("Number of users created")
            .register(meterRegistry);
            
        this.userDeletedCounter = Counter.builder("users.deleted")
            .description("Number of users deleted")
            .register(meterRegistry);
            
        this.activeUsersGauge = Gauge.builder("users.active")
            .description("Number of active users")
            .register(meterRegistry, this, UserMetrics::getActiveUserCount);
            
        this.userCreationTimer = Timer.builder("users.creation.time")
            .description("Time taken to create a user")
            .register(meterRegistry);
    }
    
    public void incrementUserCreated() {
        userCreatedCounter.increment();
    }
    
    public void incrementUserDeleted() {
        userDeletedCounter.increment();
    }
    
    public Timer.Sample startUserCreationTimer() {
        return Timer.start();
    }
    
    public void recordUserCreationTime(Timer.Sample sample) {
        sample.stop(userCreationTimer);
    }
    
    private double getActiveUserCount() {
        return userRepository.countByActiveTrue();
    }
}

// 8. Testing Configuration
@TestConfiguration
public class TestConfig {
    
    @Bean
    @Primary
    public Clock testClock() {
        return Clock.fixed(Instant.parse("2023-01-01T00:00:00Z"), ZoneOffset.UTC);
    }
    
    @Bean
    @Primary
    public OrderServiceClient mockOrderServiceClient() {
        return Mockito.mock(OrderServiceClient.class);
    }
    
    @Bean
    @Primary
    public NotificationServiceClient mockNotificationServiceClient() {
        return Mockito.mock(NotificationServiceClient.class);
    }
}

// 9. Integration Test Example
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Testcontainers
public class UserServiceIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:13")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private UserRepository userRepository;
    
    @MockBean
    private OrderServiceClient orderServiceClient;
    
    @MockBean
    private NotificationServiceClient notificationServiceClient;
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }
    
    @Test
    void shouldCreateUserSuccessfully() {
        // Given
        CreateUserRequest request = new CreateUserRequest();
        request.setName("John Doe");
        request.setEmail("john@example.com");
        request.setPassword("password123");
        
        // When
        ResponseEntity<UserDto> response = restTemplate.postForEntity(
            "/api/users", request, UserDto.class);
        
        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(response.getBody().getName()).isEqualTo("John Doe");
        assertThat(response.getBody().getEmail()).isEqualTo("john@example.com");
        assertThat(response.getHeaders().getLocation()).isNotNull();
        
        // Verify user was saved to database
        Optional<User> savedUser = userRepository.findByEmail("john@example.com");
        assertThat(savedUser).isPresent();
        assertThat(savedUser.get().getName()).isEqualTo("John Doe");
    }
    
    @Test
    void shouldReturnNotFoundForNonExistentUser() {
        // When
        ResponseEntity<ErrorResponse> response = restTemplate.getForEntity(
            "/api/users/non-existent-id", ErrorResponse.class);
        
        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(response.getBody().getMessage()).contains("User not found");
    }
    
    @Test
    void shouldHandleOrderServiceFailureGracefully() {
        // Given
        User user = new User("John Doe", "john@example.com", "password");
        user = userRepository.save(user);
        
        when(orderServiceClient.getActiveOrdersByUserId(user.getId()))
            .thenThrow(new ServiceCommunicationException("Order service unavailable"));
        
        // When
        ResponseEntity<Void> response = restTemplate.exchange(
            "/api/users/" + user.getId(), HttpMethod.DELETE, null, Void.class);
        
        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NO_CONTENT);
        assertThat(userRepository.findById(user.getId())).isEmpty();
    }
}
    `,
    exercise: `
1) Create a Spring Boot application with @SpringBootApplication annotation and a main method that runs SpringApplication.run().
2) Configure application properties in application.yml with server port, database URL, and logging level settings.
3) Create a @ConfigurationProperties class to bind external configuration properties with validation annotations.
4) Implement a REST controller with @RestController annotation and basic CRUD endpoints for a User entity.
5) Create a service class with @Service annotation that handles business logic and calls a repository.
`
  }
};