import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_7: LessonContent = {
  title: 'Industry Best Practices and Standards',
  type: 'lesson',
  duration: '85 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn industry best practices and standards for Java development including coding standards, design patterns, testing strategies, DevOps practices, and software engineering principles. Understand how to build maintainable, scalable, and professional-grade applications.',
    objectives: [
      'Apply industry-standard coding practices and standards',
      'Implement proven design patterns and architectural principles',
      'Follow testing strategies and quality assurance practices',
      'Apply DevOps and CI/CD best practices',
      'Implement monitoring and observability standards',
      'Follow security and compliance best practices',
      'Apply software engineering principles and methodologies'
    ],
    theory: '<div class="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Industry Best Practices and Standards' +
      '</h1>' +
      '<p class="mt-3 text-gray-300 text-lg">Professional Java development practices and standards</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-700">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Coding Standards and Practices' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Professional software development requires adherence to established coding standards ' +
      'and best practices. These guidelines ensure code quality, maintainability, and collaboration ' +
      'across development teams.' +
      '</p>' +
      '<div class="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-600 mb-4">' +
      '<h4 class="font-bold text-gray-800 mb-2">🎯 Coding Best Practices</h4>' +
      '<ul class="text-gray-700 space-y-1">' +
      '<li>• <strong>Naming Conventions:</strong> Clear, descriptive names for variables, methods, and classes</li>' +
      '<li>• <strong>Code Organization:</strong> Logical package structure and class organization</li>' +
      '<li>• <strong>Documentation:</strong> Comprehensive JavaDoc and inline comments</li>' +
      '<li>• <strong>Error Handling:</strong> Proper exception handling and logging</li>' +
      '<li>• <strong>Code Reviews:</strong> Regular peer review processes</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ Industry Standards</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• SOLID principles for object-oriented design</li>' +
      '<li>• Clean Code principles and practices</li>' +
      '<li>• Design patterns implementation</li>' +
      '<li>• Test-driven development (TDD)</li>' +
      '<li>• Continuous integration and delivery</li>' +
      '<li>• Security by design principles</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Common Pitfalls</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Inconsistent naming conventions</li>' +
      '<li>• Over-engineering solutions</li>' +
      '<li>• Insufficient testing coverage</li>' +
      '<li>• Poor error handling</li>' +
      '<li>• Lack of documentation</li>' +
      '<li>• Ignoring code review feedback</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Design Patterns and Principles' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-indigo-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-indigo-800 mb-2">SOLID Principles</h4>' +
      '<p class="text-indigo-700 mb-3">Fundamental principles of object-oriented design:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Core Principles</h5>' +
      '<div class="grid md:grid-cols-2 gap-4 text-sm">' +
      '<div>' +
      '<strong>Single Responsibility</strong>' +
      '<p class="text-gray-600">One class, one reason to change</p>' +
      '</div>' +
      '<div>' +
      '<strong>Open/Closed</strong>' +
      '<p class="text-gray-600">Open for extension, closed for modification</p>' +
      '</div>' +
      '<div>' +
      '<strong>Liskov Substitution</strong>' +
      '<p class="text-gray-600">Subtypes must be substitutable</p>' +
      '</div>' +
      '<div>' +
      '<strong>Interface Segregation</strong>' +
      '<p class="text-gray-600">Many client-specific interfaces</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Common Design Patterns</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Pattern</th>' +
      '<th class="py-2 px-4 text-left">Category</th>' +
      '<th class="py-2 px-4 text-left">Use Case</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Factory</td>' +
      '<td class="py-2 px-4">Creational</td>' +
      '<td class="py-2 px-4">Object creation abstraction</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Observer</td>' +
      '<td class="py-2 px-4">Behavioral</td>' +
      '<td class="py-2 px-4">Event handling and notifications</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Decorator</td>' +
      '<td class="py-2 px-4">Structural</td>' +
      '<td class="py-2 px-4">Adding responsibilities dynamically</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Testing Strategies' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">Testing Pyramid</h4>' +
      '<div class="grid md:grid-cols-3 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Unit Tests</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Test individual components</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Fast execution</li>' +
      '<li>• High coverage</li>' +
      '<li>• Isolated testing</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Integration Tests</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Test component interactions</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Database integration</li>' +
      '<li>• Service communication</li>' +
      '<li>• External dependencies</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">End-to-End Tests</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Test complete user flows</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• User interface testing</li>' +
      '<li>• Real environment simulation</li>' +
      '<li>• Business process validation</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'DevOps and CI/CD Practices' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">CI/CD Pipeline Stages</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Continuous Integration</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Automated code builds</li>' +
      '<li>• Static code analysis</li>' +
      '<li>• Automated testing</li>' +
      '<li>• Security scanning</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Continuous Deployment</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Automated deployments</li>' +
      '<li>• Environment promotion</li>' +
      '<li>• Rollback capabilities</li>' +
      '<li>• Monitoring integration</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Industry Best Practices Implementation\n\n' +
      '// 1. SOLID Principles Implementation\n\n' +
      '// Single Responsibility Principle\n' +
      'public class UserService {\n' +
      '    private final UserRepository userRepository;\n' +
      '    private final EmailService emailService;\n' +
      '    \n' +
      '    public UserService(UserRepository userRepository, EmailService emailService) {\n' +
      '        this.userRepository = userRepository;\n' +
      '        this.emailService = emailService;\n' +
      '    }\n' +
      '    \n' +
      '    public User createUser(CreateUserRequest request) {\n' +
      '        // Only responsible for user creation logic\n' +
      '        User user = new User();\n' +
      '        user.setName(request.getName());\n' +
      '        user.setEmail(request.getEmail());\n' +
      '        \n' +
      '        User savedUser = userRepository.save(user);\n' +
      '        \n' +
      '        // Notification is handled by separate service\n' +
      '        emailService.sendWelcomeEmail(savedUser);\n' +
      '        \n' +
      '        return savedUser;\n' +
      '    }\n' +
      '}\n\n' +
      '// Open/Closed Principle\n' +
      'public interface PaymentProcessor {\n' +
      '    PaymentResult processPayment(PaymentRequest request);\n' +
      '}\n\n' +
      'public class CreditCardPaymentProcessor implements PaymentProcessor {\n' +
      '    @Override\n' +
      '    public PaymentResult processPayment(PaymentRequest request) {\n' +
      '        // Credit card processing logic\n' +
      '        return new PaymentResult();\n' +
      '    }\n' +
      '}\n\n' +
      'public class PayPalPaymentProcessor implements PaymentProcessor {\n' +
      '    @Override\n' +
      '    public PaymentResult processPayment(PaymentRequest request) {\n' +
      '        // PayPal processing logic\n' +
      '        return new PaymentResult();\n' +
      '    }\n' +
      '}\n\n' +
      '// Liskov Substitution Principle\n' +
      'public abstract class Bird {\n' +
      '    public abstract void move();\n' +
      '}\n\n' +
      'public class FlyingBird extends Bird {\n' +
      '    @Override\n' +
      '    public void move() {\n' +
      '        System.out.println("Flying");\n' +
      '    }\n' +
      '    \n' +
      '    public void fly() {\n' +
      '        System.out.println("Flying high");\n' +
      '    }\n' +
      '}\n\n' +
      'public class Penguin extends Bird {\n' +
      '    @Override\n' +
      '    public void move() {\n' +
      '        System.out.println("Swimming");\n' +
      '    }\n' +
      '    \n' +
      '    // No fly() method - penguins can\'t fly\n' +
      '    // This maintains substitutability\n' +
      '}\n\n' +
      '// 2. Design Patterns Implementation\n\n' +
      '// Factory Pattern\n' +
      'public class DatabaseConnectionFactory {\n' +
      '    public static Connection createConnection(DatabaseType type) {\n' +
      '        switch (type) {\n' +
      '            case MYSQL:\n' +
      '                return new MySqlConnection();\n' +
      '            case POSTGRESQL:\n' +
      '                return new PostgreSqlConnection();\n' +
      '            case ORACLE:\n' +
      '                return new OracleConnection();\n' +
      '            default:\n' +
      '                throw new IllegalArgumentException("Unsupported database type");\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// Observer Pattern\n' +
      'public interface EventListener<T> {\n' +
      '    void onEvent(T event);\n' +
      '}\n\n' +
      'public class EventPublisher<T> {\n' +
      '    private final List<EventListener<T>> listeners = new ArrayList<>();\n' +
      '    \n' +
      '    public void addListener(EventListener<T> listener) {\n' +
      '        listeners.add(listener);\n' +
      '    }\n' +
      '    \n' +
      '    public void publish(T event) {\n' +
      '        listeners.forEach(listener -> listener.onEvent(event));\n' +
      '    }\n' +
      '}\n\n' +
      '// Decorator Pattern\n' +
      'public interface Coffee {\n' +
      '    String getDescription();\n' +
      '    double getCost();\n' +
      '}\n\n' +
      'public class SimpleCoffee implements Coffee {\n' +
      '    @Override\n' +
      '    public String getDescription() {\n' +
      '        return "Simple coffee";\n' +
      '    }\n' +
      '    \n' +
      '    @Override\n' +
      '    public double getCost() {\n' +
      '        return 2.0;\n' +
      '    }\n' +
      '}\n\n' +
      'public abstract class CoffeeDecorator implements Coffee {\n' +
      '    protected final Coffee coffee;\n' +
      '    \n' +
      '    public CoffeeDecorator(Coffee coffee) {\n' +
      '        this.coffee = coffee;\n' +
      '    }\n' +
      '}\n\n' +
      'public class MilkDecorator extends CoffeeDecorator {\n' +
      '    public MilkDecorator(Coffee coffee) {\n' +
      '        super(coffee);\n' +
      '    }\n' +
      '    \n' +
      '    @Override\n' +
      '    public String getDescription() {\n' +
      '        return coffee.getDescription() + ", milk";\n' +
      '    }\n' +
      '    \n' +
      '    @Override\n' +
      '    public double getCost() {\n' +
      '        return coffee.getCost() + 0.5;\n' +
      '    }\n' +
      '}\n\n' +
      '// 3. Testing Best Practices\n\n' +
      '// Unit Test Example\n' +
      '@ExtendWith(MockitoExtension.class)\n' +
      'class UserServiceTest {\n' +
      '    \n' +
      '    @Mock\n' +
      '    private UserRepository userRepository;\n' +
      '    \n' +
      '    @Mock\n' +
      '    private EmailService emailService;\n' +
      '    \n' +
      '    @InjectMocks\n' +
      '    private UserService userService;\n' +
      '    \n' +
      '    @Test\n' +
      '    void shouldCreateUserSuccessfully() {\n' +
      '        // Given\n' +
      '        CreateUserRequest request = new CreateUserRequest("John Doe", "john@example.com");\n' +
      '        User user = new User("John Doe", "john@example.com");\n' +
      '        \n' +
      '        when(userRepository.save(any(User.class))).thenReturn(user);\n' +
      '        \n' +
      '        // When\n' +
      '        User result = userService.createUser(request);\n' +
      '        \n' +
      '        // Then\n' +
      '        assertThat(result).isNotNull();\n' +
      '        assertThat(result.getName()).isEqualTo("John Doe");\n' +
      '        assertThat(result.getEmail()).isEqualTo("john@example.com");\n' +
      '        \n' +
      '        verify(userRepository).save(any(User.class));\n' +
      '        verify(emailService).sendWelcomeEmail(result);\n' +
      '    }\n' +
      '    \n' +
      '    @Test\n' +
      '    void shouldThrowExceptionWhenEmailExists() {\n' +
      '        // Given\n' +
      '        CreateUserRequest request = new CreateUserRequest("John Doe", "john@example.com");\n' +
      '        \n' +
      '        when(userRepository.existsByEmail("john@example.com")).thenReturn(true);\n' +
      '        \n' +
      '        // When & Then\n' +
      '        assertThatThrownBy(() -> userService.createUser(request))\n' +
      '            .isInstanceOf(UserAlreadyExistsException.class)\n' +
      '            .hasMessage("User already exists with email: john@example.com");\n' +
      '        \n' +
      '        verify(userRepository, never()).save(any(User.class));\n' +
      '        verify(emailService, never()).sendWelcomeEmail(any(User.class));\n' +
      '    }\n' +
      '}\n\n' +
      '// Integration Test Example\n' +
      '@SpringBootTest\n' +
      '@Testcontainers\n' +
      'class UserServiceIntegrationTest {\n' +
      '    \n' +
      '    @Container\n' +
      '    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:13")\n' +
      '        .withDatabaseName("testdb")\n' +
      '        .withUsername("test")\n' +
      '        .withPassword("test");\n' +
      '    \n' +
      '    @DynamicPropertySource\n' +
      '    static void configureProperties(DynamicPropertyRegistry registry) {\n' +
      '        registry.add("spring.datasource.url", postgres::getJdbcUrl);\n' +
      '        registry.add("spring.datasource.username", postgres::getUsername);\n' +
      '        registry.add("spring.datasource.password", postgres::getPassword);\n' +
      '    }\n' +
      '    \n' +
      '    @Autowired\n' +
      '    private UserService userService;\n' +
      '    \n' +
      '    @Test\n' +
      '    void shouldCreateUserInDatabase() {\n' +
      '        // Given\n' +
      '        CreateUserRequest request = new CreateUserRequest("Jane Doe", "jane@example.com");\n' +
      '        \n' +
      '        // When\n' +
      '        User user = userService.createUser(request);\n' +
      '        \n' +
      '        // Then\n' +
      '        assertThat(user.getId()).isNotNull();\n' +
      '        assertThat(user.getName()).isEqualTo("Jane Doe");\n' +
      '        assertThat(user.getEmail()).isEqualTo("jane@example.com");\n' +
      '        \n' +
      '        // Verify in database\n' +
      '        User savedUser = userRepository.findById(user.getId()).orElse(null);\n' +
      '        assertThat(savedUser).isNotNull();\n' +
      '        assertThat(savedUser.getName()).isEqualTo("Jane Doe");\n' +
      '    }\n' +
      '}\n\n' +
      '// 4. CI/CD Pipeline Configuration\n\n' +
      '// GitHub Actions Workflow\n' +
      'name: CI/CD Pipeline\n' +
      '\n' +
      'on:\n' +
      '  push:\n' +
      '    branches: [ main, develop ]\n' +
      '  pull_request:\n' +
      '    branches: [ main ]\n' +
      '\n' +
      'jobs:\n' +
      '  build-and-test:\n' +
      '    runs-on: ubuntu-latest\n' +
      '    \n' +
      '    steps:\n' +
      '    - name: Checkout code\n' +
      '      uses: actions/checkout@v3\n' +
      '    \n' +
      '    - name: Set up JDK 17\n' +
      '      uses: actions/setup-java@v3\n' +
      '      with:\n' +
      '        java-version: \'17\'\n' +
      '        distribution: \'temurin\'\n' +
      '        \n' +
      '    - name: Cache Maven packages\n' +
      '      uses: actions/cache@v3\n' +
      '      with:\n' +
      '        path: ~/.m2\n' +
      '        key: ${{ runner.os }}-m2-${{ hashFiles(\'**/pom.xml\') }}\n' +
      '        restore-keys: ${{ runner.os }}-m2\n' +
      '        \n' +
      '    - name: Build with Maven\n' +
      '      run: mvn clean compile\n' +
      '      \n' +
      '    - name: Run unit tests\n' +
      '      run: mvn test\n' +
      '      \n' +
      '    - name: Run integration tests\n' +
      '      run: mvn verify -Dskip.surefire.tests=false\n' +
      '      \n' +
      '    - name: Static code analysis\n' +
      '      run: mvn sonar:sonar\n' +
      '      env:\n' +
      '        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}\n' +
      '        \n' +
      '    - name: Security scan\n' +
      '      run: mvn dependency-check:check\n' +
      '      \n' +
      '    - name: Build Docker image\n' +
      '      if: github.ref == \'refs/heads/main\'\n' +
      '      run: |\n' +
      '        docker build -t myapp:${{ github.sha }} .\n' +
      '        docker tag myapp:${{ github.sha }} myregistry/myapp:latest\n' +
      '        \n' +
      '    - name: Push to container registry\n' +
      '      if: github.ref == \'refs/heads/main\'\n' +
      '      run: |\n' +
      '        echo ${{ secrets.REGISTRY_PASSWORD }} | docker login myregistry -u ${{ secrets.REGISTRY_USERNAME }} --password-stdin\n' +
      '        docker push myregistry/myapp:latest\n' +
      '        \n' +
      '  deploy:\n' +
      '    needs: build-and-test\n' +
      '    runs-on: ubuntu-latest\n' +
      '    if: github.ref == \'refs/heads/main\'\n' +
      '    \n' +
      '    steps:\n' +
      '    - name: Deploy to production\n' +
      '      run: |\n' +
      '        curl -X POST ${{ secrets.DEPLOY_HOOK }} \\\n' +
      '          -H "Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}" \\\n' +
      '          -H "Content-Type: application/json" \\\n' +
      '          -d \'{"image": "myregistry/myapp:${{ github.sha }}"}\'\n' +
      '          \n' +
      '    - name: Health check\n' +
      '      run: |\n' +
      '        timeout 300 bash -c \\\n' +
      '        \'while ! curl -f http://myapp.example.com/health; do sleep 5; done\'\n' +
      '        \n' +
      '// 5. Monitoring and Observability\n\n' +
      '// Application Metrics with Micrometer\n' +
      '@Service\n' +
      'public class OrderService {\n' +
      '    \n' +
      '    private final MeterRegistry meterRegistry;\n' +
      '    private final Counter orderCounter;\n' +
      '    private final Timer orderProcessingTimer;\n' +
      '    \n' +
      '    public OrderService(MeterRegistry meterRegistry) {\n' +
      '        this.meterRegistry = meterRegistry;\n' +
      '        this.orderCounter = Counter.builder("orders.created")\n' +
      '            .description("Number of orders created")\n' +
      '            .register(meterRegistry);\n' +
      '        this.orderProcessingTimer = Timer.builder("order.processing.time")\n' +
      '            .description("Time to process orders")\n' +
      '            .register(meterRegistry);\n' +
      '    }\n' +
      '    \n' +
      '    public Order createOrder(OrderRequest request) {\n' +
      '        Timer.Sample sample = Timer.start(meterRegistry);\n' +
      '        \n' +
      '        try {\n' +
      '            // Process order\n' +
      '            Order order = processOrder(request);\n' +
      '            \n' +
      '            // Record metrics\n' +
      '            orderCounter.increment();\n' +
      '            sample.stop(orderProcessingTimer);\n' +
      '            \n' +
      '            return order;\n' +
      '        } catch (Exception e) {\n' +
      '            // Record error metrics\n' +
      '            Counter.builder("orders.errors")\n' +
      '                .tag("type", e.getClass().getSimpleName())\n' +
      '                .register(meterRegistry)\n' +
      '                .increment();\n' +
      '            \n' +
      '            sample.stop(Timer.builder("order.processing.time.error")\n' +
      '                .register(meterRegistry));\n' +
      '                \n' +
      '            throw e;\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// Structured Logging\n' +
      '@Service\n' +
      'public class UserService {\n' +
      '    \n' +
      '    private static final Logger logger = LoggerFactory.getLogger(UserService.class);\n' +
      '    \n' +
      '    public User createUser(CreateUserRequest request) {\n' +
      '        logger.info("Creating user: {}", \n' +
      '            StructuredArguments.keyValue("email", request.getEmail()),\n' +
      '            StructuredArguments.keyValue("name", request.getName()));\n' +
      '        \n' +
      '        try {\n' +
      '            User user = new User();\n' +
      '            user.setName(request.getName());\n' +
      '            user.setEmail(request.getEmail());\n' +
      '            \n' +
      '            User savedUser = userRepository.save(user);\n' +
      '            \n' +
      '            logger.info("User created successfully: {}", \n' +
      '                StructuredArguments.keyValue("userId", savedUser.getId()),\n' +
      '                StructuredArguments.keyValue("email", savedUser.getEmail()));\n' +
      '                \n' +
      '            return savedUser;\n' +
      '        } catch (Exception e) {\n' +
      '            logger.error("Failed to create user: {}", \n' +
      '                StructuredArguments.keyValue("email", request.getEmail()),\n' +
      '                StructuredArguments.keyValue("error", e.getMessage()),\n' +
      '                e);\n' +
      '            \n' +
      '            throw new UserServiceException("Failed to create user", e);\n' +
      '        }\n' +
      '    }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Implement a Professional-Grade Banking Application' +
      '</h1>' +
      '<p class="mt-3 text-gray-300 text-lg">Create a banking application following industry best practices with comprehensive testing and CI/CD pipeline</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gray-700">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Banking Application Requirements' +
      '</h2>' +
      '<div class="bg-gray-100 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-gray-800 mb-2">📋 Application Features</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-gray-800 mb-2">Core Functionality</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• User account management</li>' +
      '<li>• Account balance and transactions</li>' +
      '<li>• Fund transfers between accounts</li>' +
      '<li>• Transaction history and reporting</li>' +
      '<li>• Security and authentication</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-gray-800 mb-2">Quality Requirements</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• 99.99% uptime requirement</li>' +
      '<li>• Comprehensive test coverage (>80%)</li>' +
      '<li>• Security compliance (PCI DSS)</li>' +
      '<li>• Performance SLA (<200ms response)</li>' +
      '<li>• Audit trail for all transactions</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-gray-300 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Design application architecture following SOLID principles\n' +
      '2. Implement core banking services with proper design patterns\n' +
      '3. Create comprehensive unit and integration tests\n' +
      '4. Set up CI/CD pipeline with GitHub Actions\n' +
      '5. Implement monitoring and observability\n' +
      '6. Add security measures and compliance features\n' +
      '7. Configure automated code quality checks\n' +
      '8. Document all components with JavaDoc</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Professional Development Practices' +
      '</h2>' +
      '<div class="bg-indigo-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-indigo-800 mb-2">✅ Best Practices Implementation</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Code Quality</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Follow Java coding standards</li>' +
      '<li>• Apply design patterns appropriately</li>' +
      '<li>• Write clean, maintainable code</li>' +
      '<li>• Implement comprehensive error handling</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-indigo-800 mb-2">Testing Strategy</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Unit tests for all business logic</li>' +
      '<li>• Integration tests for service interactions</li>' +
      '<li>• Security and performance testing</li>' +
      '<li>• Automated test execution in pipeline</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-gray-300">' +
      'After completing this exercise, you\'ll have created a professional-grade banking application ' +
      'that follows industry best practices for coding standards, testing, security, and DevOps.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};