import { LessonContent } from '../../types/LessonTypes';

export const lesson_16_3: LessonContent = {
  title: 'Spring Framework Basics',
  type: 'lesson',
  duration: '60 min',
  module: 'Web Development with Java',
  content: {
    overview: 'Learn the fundamentals of the Spring Framework, a powerful inversion of control (IoC) and aspect-oriented programming (AOP) framework for Java applications.',
    objectives: [
      'Understand Spring Framework architecture and core concepts',
      'Learn about Inversion of Control (IoC) and Dependency Injection (DI)',
      'Master Spring Bean lifecycle and configuration',
      'Work with Spring Annotations and Component Scanning',
      'Implement Spring AOP for cross-cutting concerns',
      'Configure Spring applications using XML and Java configuration'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Spring Framework Basics
        </h1>
        <p class="mt-3 text-green-100 text-lg">Powerful framework for enterprise Java applications</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Spring Framework?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Spring Framework is a comprehensive programming and configuration model for modern Java-based enterprise applications. 
            It provides infrastructure support at the application level, allowing developers to focus on application business logic.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Core Features</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Inversion of Control (IoC):</strong> Decouples object creation and management</li>
              <li>• <strong>Dependency Injection (DI):</strong> Reduces tight coupling between components</li>
              <li>• <strong>Aspect-Oriented Programming (AOP):</strong> Separates cross-cutting concerns</li>
              <li>• <strong>Transaction Management:</strong> Declarative transaction support</li>
              <li>• <strong>Data Access Framework:</strong> Simplified database access and ORM integration</li>
              <li>• <strong>MVC Framework:</strong> Model-View-Controller web framework</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Loose coupling and high cohesion</li>
                <li>• Testable code with dependency injection</li>
                <li>• Modular architecture</li>
                <li>• Comprehensive ecosystem</li>
                <li>• Strong community support</li>
                <li>• Backward compatibility</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Learning curve for beginners</li>
                <li>• Configuration complexity</li>
                <li>• Performance overhead</li>
                <li>• Version compatibility issues</li>
                <li>• Over-engineering for simple applications</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Inversion of Control (IoC) and Dependency Injection (DI)
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">IoC Principle</h4>
              <p class="text-green-700 mb-3">Inversion of Control means that objects do not create their dependencies directly, but receive them from an external source (the container).</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Traditional Approach</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Tight coupling - object creates its dependencies
public class UserService {
    private UserRepository userRepository = 
        new DatabaseUserRepository();
    
    public User findUser(String id) {
        return userRepository.findById(id);
    }
}</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Spring Approach</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Loose coupling - dependencies injected by container
@Component
public class UserService {
    private UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User findUser(String id) {
        return userRepository.findById(id);
    }
}</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Types of Dependency Injection</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Constructor Injection</h5>
                  <p class="text-sm text-gray-700 mb-2">Dependencies provided through constructor parameters</p>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Autowired
public UserService(UserRepository repo) {
    this.userRepository = repo;
}</pre>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Setter Injection</h5>
                  <p class="text-sm text-gray-700 mb-2">Dependencies provided through setter methods</p>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Autowired
public void setUserRepository(UserRepository repo) {
    this.userRepository = repo;
}</pre>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Field Injection</h5>
                  <p class="text-sm text-gray-700 mb-2">Dependencies injected directly into fields</p>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Autowired
private UserRepository userRepository;</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Spring Bean Lifecycle
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Bean Lifecycle Phases</h4>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">1. Instantiation</h5>
                  <p class="text-gray-700 text-sm">Spring container instantiates the bean</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">2. Population of Properties</h5>
                  <p class="text-gray-700 text-sm">Spring injects values and bean dependencies</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">3. Pre-initialization</h5>
                  <p class="text-gray-700 text-sm">BeanPostProcessors process the bean</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">4. Initialization</h5>
                  <p class="text-gray-700 text-sm">Initialization callbacks are invoked</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">5. Post-initialization</h5>
                  <p class="text-gray-700 text-sm">Bean is ready for use</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-purple-400">
                  <h5 class="font-semibold text-purple-800 mb-2">6. Destruction</h5>
                  <p class="text-gray-700 text-sm">Cleanup when container is shut down</p>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Lifecycle Callbacks</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Initialization Callbacks</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>@PostConstruct</code> annotation</li>
                    <li>• <code>InitializingBean</code> interface</li>
                    <li>• <code>init-method</code> attribute in XML</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-indigo-800 mb-2">Destruction Callbacks</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>@PreDestroy</code> annotation</li>
                    <li>• <code>DisposableBean</code> interface</li>
                    <li>• <code>destroy-method</code> attribute in XML</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Spring Configuration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Configuration Approaches</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-3">Java Configuration</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
    
    @Bean
    public UserRepository userRepository() {
        return new DatabaseUserRepository();
    }
    
    @Bean
    public UserService userService() {
        return new UserService(userRepository());
    }
}</pre>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-3">XML Configuration</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <bean id="userRepository" 
          class="com.example.DatabaseUserRepository" />
    
    <bean id="userService" 
          class="com.example.UserService">
        <constructor-arg ref="userRepository" />
    </bean>
    
</beans></pre>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Component Scanning</h4>
              <p class="text-red-700 mb-3">Spring can automatically detect and register beans using annotations:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Component Stereotypes</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <code>@Component</code> - Generic stereotype</li>
                    <li>• <code>@Service</code> - Service layer components</li>
                    <li>• <code>@Repository</code> - Data access components</li>
                    <li>• <code>@Controller</code> - Web layer components</li>
                    <li>• <code>@RestController</code> - REST web services</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Enabling Component Scanning</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
    // Configuration code
}

// Or in XML:
<context:component-scan 
    base-package="com.example" /></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Aspect-Oriented Programming (AOP)
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">AOP Concepts</h4>
              <p class="text-teal-700 mb-3">AOP separates cross-cutting concerns from business logic:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Key AOP Terms</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Aspect:</strong> Modularization of a concern</li>
                    <li>• <strong>Join Point:</strong> Point during execution</li>
                    <li>• <strong>Advice:</strong> Action taken at a join point</li>
                    <li>• <strong>Pointcut:</strong> Predicate to match join points</li>
                    <li>• <strong>Target Object:</strong> Object being advised</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Types of Advice</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Before:</strong> Executes before method</li>
                    <li>• <strong>After:</strong> Executes after method</li>
                    <li>• <strong>After-returning:</strong> After successful method</li>
                    <li>• <strong>After-throwing:</strong> After exception</li>
                    <li>• <strong>Around:</strong> Around method execution</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">AOP Implementation</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Aspect Example</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Aspect
@Component
public class LoggingAspect {
    
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Method " + 
            joinPoint.getSignature().getName() + 
            " is called");
    }
    
    @AfterThrowing(
        pointcut = "execution(* com.example.service.*.*(..))",
        throwing = "ex")
    public void logException(JoinPoint joinPoint, 
                            Throwable ex) {
        System.out.println("Exception in method " + 
            joinPoint.getSignature().getName() + 
            ": " + ex.getMessage());
    }
}</pre>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Enabling AOP</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
@Configuration
@EnableAspectJAutoProxy
@ComponentScan(basePackages = "com.example")
public class AopConfig {
    // AOP configuration
}

// Required dependencies in pom.xml:
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-aop</artifactId>
</dependency>
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
</dependency></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Spring Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Design Principles</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Do's</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Use constructor injection for required dependencies</li>
                    <li>Favor Java configuration over XML</li>
                    <li>Apply component stereotypes appropriately</li>
                    <li>Keep beans stateless when possible</li>
                    <li>Use @Configuration classes for complex setup</li>
                    <li>Implement proper exception handling</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Don'ts</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Avoid field injection in production code</li>
                    <li>Don't mix configuration styles unnecessarily</li>
                    <li>Avoid circular dependencies</li>
                    <li>Don't ignore lifecycle callbacks</li>
                    <li>Avoid overusing AOP for simple logic</li>
                    <li>Don't create overly complex configurations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Basic Spring Application Configuration
@Configuration
@ComponentScan(basePackages = "com.example")
@EnableAspectJAutoProxy
public class AppConfig {
    
    // Bean definition using @Bean annotation
    @Bean
    public UserRepository userRepository() {
        return new DatabaseUserRepository();
    }
    
    // Bean with dependencies
    @Bean
    public UserService userService(UserRepository userRepository) {
        return new UserService(userRepository);
    }
    
    // Bean with initialization logic
    @Bean(initMethod = "init", destroyMethod = "cleanup")
    public EmailService emailService() {
        return new EmailService();
    }
}

// Component Stereotypes Examples
@Component
public class DatabaseUserRepository implements UserRepository {
    
    @Autowired
    private DataSource dataSource;
    
    @Override
    public User findById(String id) {
        // Implementation
        return null;
    }
}

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final EmailService emailService;
    
    // Constructor injection (recommended)
    @Autowired
    public UserService(UserRepository userRepository, 
                      EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    public User createUser(String name, String email) {
        User user = new User(name, email);
        userRepository.save(user);
        emailService.sendWelcomeEmail(user);
        return user;
    }
}

@Repository
public class ProductRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public List<Product> findAll() {
        return entityManager
            .createQuery("SELECT p FROM Product p", Product.class)
            .getResultList();
    }
    
    public Product findById(Long id) {
        return entityManager.find(Product.class, id);
    }
    
    @Transactional
    public Product save(Product product) {
        if (product.getId() == null) {
            entityManager.persist(product);
        } else {
            entityManager.merge(product);
        }
        return product;
    }
}

@Controller
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable String id) {
        User user = userService.findById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody CreateUserRequest request) {
        User user = userService.createUser(request.getName(), request.getEmail());
        return ResponseEntity.ok(user);
    }
}

// Lifecycle Callbacks Example
@Component
public class DatabaseConnectionManager implements InitializingBean, DisposableBean {
    
    private Connection connection;
    
    @Override
    public void afterPropertiesSet() throws Exception {
        // Initialization logic
        System.out.println("Initializing database connection...");
        connection = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/mydb", "user", "password");
    }
    
    @PreDestroy
    public void cleanup() {
        // Cleanup logic
        System.out.println("Closing database connection...");
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                System.err.println("Error closing connection: " + e.getMessage());
            }
        }
    }
    
    @Override
    public void destroy() throws Exception {
        // Alternative cleanup method
        System.out.println("Destroying DatabaseConnectionManager...");
    }
}

// AOP Aspect Example
@Aspect
@Component
public class LoggingAspect {
    
    private static final Logger logger = 
        LoggerFactory.getLogger(LoggingAspect.class);
    
    // Before advice
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        logger.info("Method {} is called with args: {}", 
            joinPoint.getSignature().getName(), 
            Arrays.toString(joinPoint.getArgs()));
    }
    
    // After returning advice
    @AfterReturning(
        pointcut = "execution(* com.example.service.*.*(..))",
        returning = "result")
    public void logAfterReturning(JoinPoint joinPoint, Object result) {
        logger.info("Method {} returned: {}", 
            joinPoint.getSignature().getName(), result);
    }
    
    // After throwing advice
    @AfterThrowing(
        pointcut = "execution(* com.example.service.*.*(..))",
        throwing = "ex")
    public void logAfterThrowing(JoinPoint joinPoint, Throwable ex) {
        logger.error("Method {} threw exception: {}", 
            joinPoint.getSignature().getName(), ex.getMessage(), ex);
    }
    
    // Around advice
    @Around("execution(* com.example.service.*.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        try {
            Object result = joinPoint.proceed();
            long endTime = System.currentTimeMillis();
            logger.info("Method {} executed in {} ms", 
                joinPoint.getSignature().getName(), (endTime - startTime));
            return result;
        } catch (Exception e) {
            logger.error("Method {} failed after {} ms", 
                joinPoint.getSignature().getName(), 
                (System.currentTimeMillis() - startTime), e);
            throw e;
        }
    }
    
    // Pointcut definitions
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceLayer() {}
    
    @Pointcut("@annotation(org.springframework.transaction.annotation.Transactional)")
    public void transactionalMethod() {}
    
    @Before("serviceLayer() && transactionalMethod()")
    public void logTransactionalServiceCall() {
        logger.info("Transactional service method called");
    }
}

// Transaction Management Example
@Service
@Transactional(readOnly = true)
public class AccountService {
    
    @Autowired
    private AccountRepository accountRepository;
    
    public Account getAccount(Long id) {
        return accountRepository.findById(id);
    }
    
    @Transactional
    public void transferMoney(Long fromAccountId, Long toAccountId, BigDecimal amount) {
        Account fromAccount = accountRepository.findById(fromAccountId);
        Account toAccount = accountRepository.findById(toAccountId);
        
        if (fromAccount.getBalance().compareTo(amount) < 0) {
            throw new InsufficientFundsException("Insufficient funds");
        }
        
        fromAccount.setBalance(fromAccount.getBalance().subtract(amount));
        toAccount.setBalance(toAccount.getBalance().add(amount));
        
        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);
    }
}

// Configuration with Profiles
@Configuration
@Profile("production")
public class ProductionConfig {
    
    @Bean
    @Primary
    public DataSource dataSource() {
        // Production database configuration
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://prod-server:3306/mydb");
        config.setUsername("prod-user");
        config.setPassword("prod-password");
        return new HikariDataSource(config);
    }
}

@Configuration
@Profile("development")
public class DevelopmentConfig {
    
    @Bean
    public DataSource dataSource() {
        // Development database configuration
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .addScript("schema.sql")
            .addScript("test-data.sql")
            .build();
    }
}

// Main Application Class
@SpringBootApplication
public class SpringWebApplication {
    
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(SpringWebApplication.class);
        app.setBannerMode(Banner.Mode.OFF);
        app.run(args);
    }
    
    // Profile-specific bean
    @Bean
    @Profile("dev")
    public CommandLineRunner demoDataLoader(UserService userService) {
        return args -> {
            System.out.println("Loading demo data...");
            userService.createUser("John Doe", "john@example.com");
            userService.createUser("Jane Smith", "jane@example.com");
        };
    }
}
    `,
    exercise: `
      **🎯 Spring Framework Basics Exercises**

      **Exercise 1: Basic Spring Configuration**
      Create a simple Spring application with the following requirements:
      - Define a configuration class using @Configuration annotation
      - Create beans for UserRepository, UserService, and EmailService
      - Use constructor injection to wire dependencies
      - Implement component scanning with @ComponentScan
      - Test the configuration using ApplicationContext

      **Exercise 2: Component Stereotypes**
      Build a layered application demonstrating different component stereotypes:
      - Create a @Repository component for data access
      - Create a @Service component for business logic
      - Create a @Controller component for web layer
      - Use appropriate annotations for each layer
      - Implement proper dependency injection between layers

      **Exercise 3: Lifecycle Management**
      Implement comprehensive lifecycle management:
      - Create beans with initialization and destruction callbacks
      - Use @PostConstruct and @PreDestroy annotations
      - Implement InitializingBean and DisposableBean interfaces
      - Test lifecycle methods with proper logging
      - Verify initialization and cleanup order

      **Exercise 4: AOP Implementation**
      Create aspects for cross-cutting concerns:
      - Implement logging aspect with before/after advice
      - Create performance monitoring aspect with around advice
      - Implement exception handling aspect with after-throwing advice
      - Define pointcuts for service layer methods
      - Test aspect functionality with sample service calls

      **Exercise 5: Profile-based Configuration**
      Set up environment-specific configurations:
      - Create configuration classes for different profiles (dev, test, prod)
      - Define profile-specific beans (e.g., different data sources)
      - Use @Profile annotation to activate configurations
      - Test profile activation with different runtime environments
      - Implement conditional bean creation based on profiles

      **Deliverable:**
      Create a complete Spring-based application that demonstrates understanding of IoC, DI, AOP, lifecycle management, and configuration best practices. Include proper separation of concerns, appropriate component stereotypes, and comprehensive testing of Spring features.
    `
  }
};