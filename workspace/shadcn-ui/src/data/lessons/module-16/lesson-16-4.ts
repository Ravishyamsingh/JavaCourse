import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_4: LessonContent = {
  title: 'Spring Boot Introduction',
  type: 'lesson',
  duration: '55 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Learn Spring Boot, an opinionated framework that simplifies Spring application development with auto-configuration, embedded servers, and production-ready features.',
    objectives: [
      'Understand Spring Boot architecture and key features',
      'Learn auto-configuration and starter dependencies',
      'Master Spring Boot application structure and annotations',
      'Work with embedded servers and externalized configuration',
      'Implement RESTful services with Spring Boot',
      'Configure logging, monitoring, and actuator endpoints'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Spring Boot Introduction
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Rapid application development with convention over configuration</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Spring Boot?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Spring Boot is an opinionated framework that makes it easy to create stand-alone, production-grade 
            Spring-based applications with minimal configuration. It takes an opinionated view of the Spring 
            platform and third-party libraries, allowing you to get started with minimum setup.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Features</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Auto-configuration:</strong> Automatically configures Spring application based on dependencies</li>
              <li>• <strong>Starter Dependencies:</strong> Simplified dependency management with curated starters</li>
              <li>• <strong>Embedded Servers:</strong> Built-in Tomcat, Jetty, or Undertow servers</li>
              <li>• <strong>Production-ready:</strong> Actuator endpoints for monitoring and management</li>
              <li>• <strong>Externalized Configuration:</strong> Flexible configuration management</li>
              <li>• <strong>Convention over Configuration:</strong> Sensible defaults reduce boilerplate code</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Rapid application development</li>
                <li>• Reduced configuration overhead</li>
                <li>• Embedded server eliminates deployment complexity</li>
                <li>• Production-ready features out of the box</li>
                <li>• Extensive ecosystem and community support</li>
                <li>• Easy integration with cloud platforms</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Opinionated approach may limit flexibility</li>
                <li>• Learning curve for understanding auto-configuration</li>
                <li>• Potential for over-dependency on conventions</li>
                <li>• Debugging auto-configuration issues</li>
                <li>• Version compatibility with dependencies</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Spring Boot Architecture
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Core Components</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Starter Dependencies</h5>
                  <p class="text-sm text-gray-700 mb-2">Curated set of convenient dependency descriptors</p>
                  <ul class="text-xs space-y-1">
                    <li>• spring-boot-starter-web</li>
                    <li>• spring-boot-starter-data-jpa</li>
                    <li>• spring-boot-starter-security</li>
                    <li>• spring-boot-starter-test</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Auto-configuration</h5>
                  <p class="text-sm text-gray-700 mb-2">Automatically configures application based on classpath</p>
                  <ul class="text-xs space-y-1">
                    <li>• @EnableAutoConfiguration</li>
                    <li>• Conditional configuration</li>
                    <li>• Configuration properties</li>
                    <li>• Custom auto-configuration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Application Structure</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">Main Application Class</h5>
                  <p class="text-gray-700 text-sm">Entry point with @SpringBootApplication annotation</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">Configuration Classes</h5>
                  <p class="text-gray-700 text-sm">Custom configuration with @Configuration</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">Component Classes</h5>
                  <p class="text-gray-700 text-sm">Business logic with @Component, @Service, @Repository</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-semibold text-blue-800 mb-1">Controller Classes</h5>
                  <p class="text-gray-700 text-sm">Web layer with @RestController, @Controller</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Auto-configuration and Starters
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">How Auto-configuration Works</h4>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">1. Classpath Scanning</h5>
                  <p class="text-gray-700 text-sm">Spring Boot scans classpath for specific classes and configurations</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">2. Conditional Configuration</h5>
                  <p class="text-gray-700 text-sm">Applies configurations based on @Conditional annotations</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">3. Bean Registration</h5>
                  <p class="text-gray-700 text-sm">Registers appropriate beans based on conditions</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">4. Property Binding</h5>
                  <p class="text-gray-700 text-sm">Binds external configuration to beans</p>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Popular Starter Dependencies</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Web Starters</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>spring-boot-starter-web</code> - Web applications</li>
                    <li>• <code>spring-boot-starter-webflux</code> - Reactive web</li>
                    <li>• <code>spring-boot-starter-thymeleaf</code> - Template engine</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Data Starters</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>spring-boot-starter-data-jpa</code> - JPA persistence</li>
                    <li>• <code>spring-boot-starter-data-mongodb</code> - MongoDB</li>
                    <li>• <code>spring-boot-starter-jdbc</code> - JDBC support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Embedded Servers and Deployment
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Embedded Server Options</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-orange-800 mb-2">Tomcat</h5>
                  <p class="text-xs text-gray-600">Default servlet container</p>
                  <p class="text-xs text-gray-600 mt-1">spring-boot-starter-tomcat</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-orange-800 mb-2">Jetty</h5>
                  <p class="text-xs text-gray-600">Alternative servlet container</p>
                  <p class="text-xs text-gray-600 mt-1">spring-boot-starter-jetty</p>
                </div>
                <div class="bg-white p-3 rounded border text-center">
                  <h5 class="font-bold text-orange-800 mb-2">Undertow</h5>
                  <p class="text-xs text-gray-600">High-performance web server</p>
                  <p class="text-xs text-gray-600 mt-1">spring-boot-starter-undertow</p>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Deployment Options</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Executable JAR</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Fully self-contained application</li>
                    <li>Includes embedded server</li>
                    <li>Run with: java -jar app.jar</li>
                    <li>Easy deployment and scaling</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Traditional WAR</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Deploy to external servlet container</li>
                    <li>Requires web.xml configuration</li>
                    <li>Compatible with existing infrastructure</li>
                    <li>Smaller deployment artifact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Externalized Configuration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Configuration Sources</h4>
              <p class="text-teal-700 mb-3">Spring Boot supports multiple configuration sources with specific precedence:</p>
              <div class="space-y-2">
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">1.</span> Command line arguments
                </div>
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">2.</span> ServletConfig init parameters
                </div>
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">3.</span> ServletContext init parameters
                </div>
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">4.</span> JNDI attributes from java:comp/env
                </div>
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">5.</span> Java System properties (System.getProperties())
                </div>
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">6.</span> OS environment variables
                </div>
                <div class="bg-white p-2 rounded border text-sm">
                  <span class="font-bold">7.</span> application.properties/yml files
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Configuration Properties</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Property Files</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
# application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=user
spring.datasource.password=password
logging.level.com.example=DEBUG</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Configuration Classes</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@ConfigurationProperties(prefix = "app")
@Component
public class AppProperties {
    private String name;
    private String description;
    private List<String> servers = new ArrayList<>();
    // Getters and setters
}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Spring Boot Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Development Guidelines</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Do's</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Use @SpringBootApplication on main class</li>
                    <li>Favor application.properties/yml over XML</li>
                    <li>Organize code in packages by feature</li>
                    <li>Use profiles for environment-specific config</li>
                    <li>Enable actuator for production monitoring</li>
                    <li>Follow REST conventions for web APIs</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Don'ts</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Avoid @ComponentScan with base packages</li>
                    <li>Don't override auto-configuration unnecessarily</li>
                    <li>Avoid complex custom configurations</li>
                    <li>Don't hardcode environment-specific values</li>
                    <li>Avoid mixing configuration styles</li>
                    <li>Don't ignore actuator security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Main Application Class
@SpringBootApplication
public class SpringBootWebApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(SpringBootWebApplication.class, args);
    }
    
    // Custom configuration beans
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    // Profile-specific configuration
    @Bean
    @Profile("dev")
    public CommandLineRunner dataInitializer(UserService userService) {
        return args -> {
            userService.createDefaultUsers();
            System.out.println("Development data initialized");
        };
    }
}

// REST Controller Example
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest request) {
        User user = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, 
                                         @Valid @RequestBody UpdateUserRequest request) {
        return userService.updateUser(id, request)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.deleteUser(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

// Service Layer with Business Logic
@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private EmailService emailService;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
    
    public User createUser(CreateUserRequest request) {
        // Validation
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists: " + request.getEmail());
        }
        
        // Create user
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setCreatedAt(LocalDateTime.now());
        
        User savedUser = userRepository.save(user);
        
        // Send welcome email
        emailService.sendWelcomeEmail(savedUser);
        
        return savedUser;
    }
    
    public Optional<User> updateUser(Long id, UpdateUserRequest request) {
        return userRepository.findById(id)
            .map(user -> {
                user.setName(request.getName());
                user.setEmail(request.getEmail());
                return userRepository.save(user);
            });
    }
    
    public boolean deleteUser(Long id) {
        return userRepository.findById(id)
            .map(user -> {
                userRepository.delete(user);
                return true;
            })
            .orElse(false);
    }
    
    @Transactional(readOnly = true)
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}

// Data Access Layer with Spring Data JPA
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
    List<User> findByNameContaining(@Param("name") String name);
    
    @Modifying
    @Query("UPDATE User u SET u.lastLogin = :lastLogin WHERE u.id = :id")
    void updateLastLogin(@Param("id") Long id, @Param("lastLogin") LocalDateTime lastLogin);
}

// Entity Class
@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "last_login")
    private LocalDateTime lastLogin;
    
    // Constructors
    public User() {}
    
    public User(String name, String email) {
        this.name = name;
        this.email = email;
        this.createdAt = LocalDateTime.now();
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getLastLogin() { return lastLogin; }
    public void setLastLogin(LocalDateTime lastLogin) { this.lastLogin = lastLogin; }
}

// Configuration Properties Example
@ConfigurationProperties(prefix = "app")
@Component
public class AppProperties {
    
    private String name = "Spring Boot Application";
    private String version = "1.0.0";
    private List<String> supportedLanguages = Arrays.asList("en", "es");
    private Map<String, String> defaultSettings = new HashMap<>();
    private Security security = new Security();
    
    // Nested configuration class
    public static class Security {
        private boolean enabled = true;
        private String defaultRole = "USER";
        private List<String> allowedOrigins = new ArrayList<>();
        
        // Getters and setters
        public boolean isEnabled() { return enabled; }
        public void setEnabled(boolean enabled) { this.enabled = enabled; }
        
        public String getDefaultRole() { return defaultRole; }
        public void setDefaultRole(String defaultRole) { this.defaultRole = defaultRole; }
        
        public List<String> getAllowedOrigins() { return allowedOrigins; }
        public void setAllowedOrigins(List<String> allowedOrigins) { this.allowedOrigins = allowedOrigins; }
    }
    
    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }
    
    public List<String> getSupportedLanguages() { return supportedLanguages; }
    public void setSupportedLanguages(List<String> supportedLanguages) { this.supportedLanguages = supportedLanguages; }
    
    public Map<String, String> getDefaultSettings() { return defaultSettings; }
    public void setDefaultSettings(Map<String, String> defaultSettings) { this.defaultSettings = defaultSettings; }
    
    public Security getSecurity() { return security; }
    public void setSecurity(Security security) { this.security = security; }
}

// Exception Handling with Controller Advice
@ControllerAdvice
public class GlobalExceptionHandler {
    
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException ex) {
        logger.warn("User not found: {}", ex.getMessage());
        ErrorResponse error = new ErrorResponse("USER_NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<ErrorResponse> handleEmailExists(EmailAlreadyExistsException ex) {
        logger.warn("Email already exists: {}", ex.getMessage());
        ErrorResponse error = new ErrorResponse("EMAIL_EXISTS", ex.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        logger.warn("Validation failed: {}", ex.getMessage());
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage()));
        ErrorResponse error = new ErrorResponse("VALIDATION_ERROR", "Validation failed", errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {
        logger.error("Unexpected error: ", ex);
        ErrorResponse error = new ErrorResponse("INTERNAL_ERROR", "An unexpected error occurred");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
    }
}

// Error Response DTO
public class ErrorResponse {
    private String code;
    private String message;
    private Map<String, String> details;
    private LocalDateTime timestamp;
    
    public ErrorResponse() {
        this.timestamp = LocalDateTime.now();
    }
    
    public ErrorResponse(String code, String message) {
        this();
        this.code = code;
        this.message = message;
    }
    
    public ErrorResponse(String code, String message, Map<String, String> details) {
        this(code, message);
        this.details = details;
    }
    
    // Getters and setters
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    
    public Map<String, String> getDetails() { return details; }
    public void setDetails(Map<String, String> details) { this.details = details; }
    
    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}

// Custom Exception Classes
@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}

@ResponseStatus(HttpStatus.CONFLICT)
public class EmailAlreadyExistsException extends RuntimeException {
    public EmailAlreadyExistsException(String message) {
        super(message);
    }
}

// Application Properties Example
/*
# application.properties
server.port=8080
server.servlet.context-path=/api

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/myapp
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Logging Configuration
logging.level.com.example=DEBUG
logging.level.org.springframework=INFO
logging.file.name=logs/application.log

# Actuator Configuration
management.endpoints.web.exposure.include=health,info,metrics,env
management.endpoint.health.show-details=always

# Custom Properties
app.name=My Spring Boot App
app.version=1.0.0
app.security.enabled=true
app.security.default-role=USER
*/

// Profile-specific Configuration
@Configuration
@Profile("production")
public class ProductionConfig {
    
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://prod-server:3306/myapp");
        config.setUsername("prod-user");
        config.setPassword("prod-password");
        config.setMaximumPoolSize(20);
        return new HikariDataSource(config);
    }
    
    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        // Configure timeouts for production
        HttpComponentsClientHttpRequestFactory factory = 
            new HttpComponentsClientHttpRequestFactory();
        factory.setConnectTimeout(5000);
        factory.setReadTimeout(10000);
        restTemplate.setRequestFactory(factory);
        return restTemplate;
    }
}

@Configuration
@Profile("development")
public class DevelopmentConfig {
    
    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .addScript("schema.sql")
            .addScript("data.sql")
            .build();
    }
    
    @Bean
    @Profile("dev")
    public CommandLineRunner demoDataLoader(UserService userService) {
        return args -> {
            System.out.println("Loading demo data...");
            // Create sample users for development
            userService.createUser(new CreateUserRequest("John Doe", "john@example.com"));
            userService.createUser(new CreateUserRequest("Jane Smith", "jane@example.com"));
        };
    }
}

// Main Class with Multiple Profiles
@SpringBootApplication
public class SpringBootWebApplication {
    
    public static void main(String[] args) {
        // Set active profiles programmatically
        System.setProperty("spring.profiles.active", "development");
        
        SpringApplication app = new SpringApplication(SpringBootWebApplication.class);
        app.setBannerMode(Banner.Mode.OFF);
        app.run(args);
    }
}
    `,
    exercise: `
      **🎯 Spring Boot Introduction Exercises**

      **Exercise 1: Basic Spring Boot Application**
      Create a simple Spring Boot application with the following features:
      - Use @SpringBootApplication annotation on main class
      - Create a REST controller with basic CRUD endpoints
      - Implement service and repository layers
      - Configure application properties for server port and logging
      - Run the application and test endpoints with curl or Postman

      **Exercise 2: Configuration Management**
      Set up comprehensive configuration management:
      - Create application.properties with database and server settings
      - Implement @ConfigurationProperties for custom configuration
      - Set up profile-specific configurations (dev, test, prod)
      - Use environment variables for sensitive configuration
      - Test configuration loading with different profiles

      **Exercise 3: Exception Handling**
      Implement global exception handling for a REST API:
      - Create custom exception classes with appropriate HTTP status codes
      - Implement @ControllerAdvice for global exception handling
      - Create standardized error response format
      - Handle validation exceptions and business logic exceptions
      - Test exception scenarios with different HTTP clients

      **Exercise 4: Data Persistence**
      Build a complete data persistence layer:
      - Create JPA entities with proper annotations
      - Implement Spring Data JPA repositories
      - Configure database connection with H2 for development
      - Implement custom query methods
      - Add transaction management with @Transactional

      **Exercise 5: Actuator and Monitoring**
      Enable and configure Spring Boot Actuator:
      - Add spring-boot-starter-actuator dependency
      - Configure actuator endpoints exposure
      - Customize health indicators
      - Implement custom metrics
      - Test actuator endpoints and monitor application health

      **Deliverable:**
      Create a complete Spring Boot web application that demonstrates REST API development, data persistence, configuration management, exception handling, and production-ready features. Include proper project structure, comprehensive testing, and documentation.
    `
  }
};