import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_1: LessonContent = {
  title: 'Microservices Architecture',
  type: 'lesson',
  duration: '90 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn the fundamentals of microservices architecture, including design principles, patterns, benefits, challenges, and when to use microservices over monolithic architectures.',
    objectives: [
      'Understand microservices architecture principles and patterns',
      'Learn the differences between monolithic and microservices architectures',
      'Explore service decomposition strategies and domain-driven design',
      'Understand inter-service communication patterns',
      'Learn about data management in microservices',
      'Explore monitoring, testing, and deployment strategies'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Microservices Architecture
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Building scalable, distributed systems with independent services</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Microservices?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Microservices architecture is an approach to developing a single application as a suite of small services, 
            each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. 
            These services are built around business capabilities and independently deployable.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Core Characteristics</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Business Capability Focus:</strong> Services organized around business functions</li>
              <li>• <strong>Decentralized:</strong> Decentralized governance and data management</li>
              <li>• <strong>Independent Deployment:</strong> Each service can be deployed independently</li>
              <li>• <strong>Technology Diversity:</strong> Different services can use different technologies</li>
              <li>• <strong>Failure Isolation:</strong> Failure in one service doesn't bring down the entire system</li>
              <li>• <strong>Scalability:</strong> Scale individual services based on demand</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Independent scaling and deployment</li>
                <li>• Technology diversity and flexibility</li>
                <li>• Better fault isolation</li>
                <li>• Easier to understand and maintain</li>
                <li>• Team autonomy and ownership</li>
                <li>• Faster time to market</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Challenges</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Increased complexity in communication</li>
                <li>• Data consistency challenges</li>
                <li>• Network latency and reliability</li>
                <li>• Distributed system complexity</li>
                <li>• Testing and debugging difficulties</li>
                <li>• Operational overhead</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Monolithic vs Microservices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Architecture Comparison</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Aspect</th>
                      <th class="py-2 px-4 text-left">Monolithic</th>
                      <th class="py-2 px-4 text-left">Microservices</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Deployment</td>
                      <td class="py-2 px-4">Single deployable unit</td>
                      <td class="py-2 px-4">Multiple independent deployments</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Scaling</td>
                      <td class="py-2 px-4">Scale entire application</td>
                      <td class="py-2 px-4">Scale individual services</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Technology</td>
                      <td class="py-2 px-4">Single technology stack</td>
                      <td class="py-2 px-4">Multiple technology stacks</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Data</td>
                      <td class="py-2 px-4">Shared database</td>
                      <td class="py-2 px-4">Database per service</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Communication</td>
                      <td class="py-2 px-4">In-process calls</td>
                      <td class="py-2 px-4">Network calls (HTTP, messaging)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">When to Choose Microservices?</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Good Fit</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Large, complex applications</li>
                    <li>• Multiple development teams</li>
                    <li>• Need for independent scaling</li>
                    <li>• Different technology requirements</li>
                    <li>• High availability requirements</li>
                    <li>• Rapid development cycles</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Consider Monolith</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Small applications or teams</li>
                    <li>• Simple business logic</li>
                    <li>• Limited operational expertise</li>
                    <li>• Strong consistency requirements</li>
                    <li>• Prototype or MVP development</li>
                    <li>• Limited infrastructure resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Service Decomposition Strategies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Domain-Driven Design (DDD)</h4>
              <p class="text-purple-700 mb-3">Use DDD principles to identify service boundaries:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Bounded Context</h5>
                  <p class="text-sm text-gray-700 mb-2">Define clear boundaries where a domain model applies</p>
                  <ul class="text-xs space-y-1">
                    <li>• User Management Context</li>
                    <li>• Order Processing Context</li>
                    <li>• Inventory Management Context</li>
                    <li>• Payment Processing Context</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Aggregates</h5>
                  <p class="text-sm text-gray-700 mb-2">Group related entities that change together</p>
                  <ul class="text-xs space-y-1">
                    <li>• Customer Aggregate</li>
                    <li>• Order Aggregate</li>
                    <li>• Product Aggregate</li>
                    <li>• Payment Aggregate</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Decomposition Patterns</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-1">By Business Capability</h5>
                  <p class="text-sm text-gray-700">Organize services around what the business does</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-1">By Subdomain</h5>
                  <p class="text-sm text-gray-700">Align services with DDD subdomains</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-1">By Team Structure</h5>
                  <p class="text-sm text-gray-700">Conway's Law - services mirror team communication</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Inter-Service Communication
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Communication Patterns</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Synchronous</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>HTTP/REST:</strong> Request-response over HTTP</li>
                    <li>• <strong>GraphQL:</strong> Query language for APIs</li>
                    <li>• <strong>gRPC:</strong> High-performance RPC framework</li>
                    <li>• <strong>WebSockets:</strong> Real-time bidirectional communication</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Asynchronous</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Message Queues:</strong> Point-to-point messaging</li>
                    <li>• <strong>Publish-Subscribe:</strong> Event-driven communication</li>
                    <li>• <strong>Event Streaming:</strong> Continuous event processing</li>
                    <li>• <strong>Webhooks:</strong> HTTP callbacks for events</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Communication Considerations</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Reliability</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Circuit breakers</li>
                    <li>• Retry mechanisms</li>
                    <li>• Timeouts</li>
                    <li>• Bulkhead pattern</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Performance</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Connection pooling</li>
                    <li>• Caching strategies</li>
                    <li>• Load balancing</li>
                    <li>• Compression</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Security</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Service-to-service auth</li>
                    <li>• API keys/tokens</li>
                    <li>• mTLS encryption</li>
                    <li>• Network policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Data Management in Microservices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Database per Service Pattern</h4>
              <p class="text-teal-700 mb-3">Each microservice owns its data and database:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">✅ Benefits</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Service independence</li>
                    <li>• Technology diversity</li>
                    <li>• Better scalability</li>
                    <li>• Fault isolation</li>
                    <li>• Team autonomy</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">⚠️ Challenges</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Data consistency</li>
                    <li>• Cross-service queries</li>
                    <li>• Transaction management</li>
                    <li>• Data synchronization</li>
                    <li>• Reporting complexity</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Data Consistency Patterns</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-1">Saga Pattern</h5>
                  <p class="text-sm text-gray-700">Manage distributed transactions across services</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-1">Event Sourcing</h5>
                  <p class="text-sm text-gray-700">Store events instead of current state</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-1">CQRS</h5>
                  <p class="text-sm text-gray-700">Separate read and write models</p>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-1">Eventually Consistent</h5>
                  <p class="text-sm text-gray-700">Accept temporary inconsistency for availability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Microservices Patterns and Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Essential Patterns</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Resilience Patterns</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Circuit Breaker</li>
                    <li>Bulkhead</li>
                    <li>Timeout</li>
                    <li>Retry with backoff</li>
                    <li>Health checks</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Observability Patterns</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Distributed tracing</li>
                    <li>Centralized logging</li>
                    <li>Metrics collection</li>
                    <li>Health monitoring</li>
                    <li>Application performance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Design Principles</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-2">Service Design</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Single responsibility principle</li>
                    <li>• High cohesion, low coupling</li>
                    <li>• API-first design</li>
                    <li>• Stateless services</li>
                    <li>• Idempotent operations</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-2">Operational Excellence</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Automated testing</li>
                    <li>• Continuous deployment</li>
                    <li>• Infrastructure as code</li>
                    <li>• Monitoring and alerting</li>
                    <li>• Disaster recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Microservices Architecture Example - E-commerce System

// 1. User Service - Handles user management
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable String userId) {
        User user = userService.findById(userId);
        return ResponseEntity.ok(UserDto.from(user));
    }
    
    @PostMapping
    public ResponseEntity<UserDto> createUser(@Valid @RequestBody CreateUserRequest request) {
        User user = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(UserDto.from(user));
    }
    
    @PutMapping("/{userId}")
    public ResponseEntity<UserDto> updateUser(
            @PathVariable String userId,
            @Valid @RequestBody UpdateUserRequest request) {
        User user = userService.updateUser(userId, request);
        return ResponseEntity.ok(UserDto.from(user));
    }
}

@Service
@Transactional
public class UserService {
    
    private final UserRepository userRepository;
    private final EventPublisher eventPublisher;
    
    public UserService(UserRepository userRepository, EventPublisher eventPublisher) {
        this.userRepository = userRepository;
        this.eventPublisher = eventPublisher;
    }
    
    public User createUser(CreateUserRequest request) {
        User user = new User(request.getEmail(), request.getName());
        User savedUser = userRepository.save(user);
        
        // Publish user created event
        eventPublisher.publish(new UserCreatedEvent(savedUser.getId(), savedUser.getEmail()));
        
        return savedUser;
    }
    
    public User findById(String userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException(userId));
    }
}

// 2. Order Service - Handles order processing
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@Valid @RequestBody CreateOrderRequest request) {
        Order order = orderService.createOrder(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(OrderDto.from(order));
    }
    
    @GetMapping("/{orderId}")
    public ResponseEntity<OrderDto> getOrder(@PathVariable String orderId) {
        Order order = orderService.findById(orderId);
        return ResponseEntity.ok(OrderDto.from(order));
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderDto>> getUserOrders(@PathVariable String userId) {
        List<Order> orders = orderService.findByUserId(userId);
        List<OrderDto> orderDtos = orders.stream()
            .map(OrderDto::from)
            .collect(Collectors.toList());
        return ResponseEntity.ok(orderDtos);
    }
}

@Service
@Transactional
public class OrderService {
    
    private final OrderRepository orderRepository;
    private final UserServiceClient userServiceClient;
    private final InventoryServiceClient inventoryServiceClient;
    private final EventPublisher eventPublisher;
    
    public OrderService(OrderRepository orderRepository,
                       UserServiceClient userServiceClient,
                       InventoryServiceClient inventoryServiceClient,
                       EventPublisher eventPublisher) {
        this.orderRepository = orderRepository;
        this.userServiceClient = userServiceClient;
        this.inventoryServiceClient = inventoryServiceClient;
        this.eventPublisher = eventPublisher;
    }
    
    public Order createOrder(CreateOrderRequest request) {
        // Validate user exists
        UserDto user = userServiceClient.getUser(request.getUserId());
        if (user == null) {
            throw new UserNotFoundException(request.getUserId());
        }
        
        // Check inventory availability
        for (OrderItemRequest item : request.getItems()) {
            boolean available = inventoryServiceClient.checkAvailability(
                item.getProductId(), item.getQuantity());
            if (!available) {
                throw new InsufficientInventoryException(item.getProductId());
            }
        }
        
        // Create order
        Order order = new Order(request.getUserId());
        request.getItems().forEach(item -> 
            order.addItem(item.getProductId(), item.getQuantity(), item.getPrice()));
        
        Order savedOrder = orderRepository.save(order);
        
        // Publish order created event
        eventPublisher.publish(new OrderCreatedEvent(savedOrder.getId(), 
            savedOrder.getUserId(), savedOrder.getItems()));
        
        return savedOrder;
    }
}

// 3. Service Communication - HTTP Client with Circuit Breaker
@Component
public class UserServiceClient {
    
    private final RestTemplate restTemplate;
    private final CircuitBreaker circuitBreaker;
    
    public UserServiceClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.circuitBreaker = CircuitBreaker.ofDefaults("userService");
    }
    
    public UserDto getUser(String userId) {
        return circuitBreaker.executeSupplier(() -> {
            try {
                ResponseEntity<UserDto> response = restTemplate.getForEntity(
                    "http://user-service/api/users/" + userId, UserDto.class);
                return response.getBody();
            } catch (Exception e) {
                throw new ServiceCommunicationException("Failed to get user: " + userId, e);
            }
        });
    }
}

// 4. Event-Driven Communication
@Component
public class EventPublisher {
    
    private final RabbitTemplate rabbitTemplate;
    
    public EventPublisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }
    
    public void publish(DomainEvent event) {
        rabbitTemplate.convertAndSend(
            event.getEventType(), 
            event.getRoutingKey(), 
            event
        );
    }
}

@RabbitListener(queues = "order.created")
@Component
public class OrderEventHandler {
    
    private final InventoryService inventoryService;
    private final NotificationService notificationService;
    
    public OrderEventHandler(InventoryService inventoryService,
                           NotificationService notificationService) {
        this.inventoryService = inventoryService;
        this.notificationService = notificationService;
    }
    
    @RabbitHandler
    public void handleOrderCreated(OrderCreatedEvent event) {
        try {
            // Reserve inventory
            inventoryService.reserveItems(event.getItems());
            
            // Send notification
            notificationService.sendOrderConfirmation(event.getUserId(), event.getOrderId());
            
        } catch (Exception e) {
            // Handle compensation logic
            handleOrderCreationFailure(event);
        }
    }
    
    private void handleOrderCreationFailure(OrderCreatedEvent event) {
        // Implement saga pattern for compensation
        // Cancel order, release inventory, notify user
    }
}

// 5. Configuration and Service Discovery
@SpringBootApplication
@EnableEurekaClient
@EnableCircuitBreaker
@EnableRabbitMQ
public class OrderServiceApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
    
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @Bean
    public CircuitBreakerConfig circuitBreakerConfig() {
        return CircuitBreakerConfig.custom()
            .failureRateThreshold(50)
            .waitDurationInOpenState(Duration.ofSeconds(30))
            .slidingWindowSize(10)
            .minimumNumberOfCalls(5)
            .build();
    }
}

// 6. Health Checks and Monitoring
@RestController
@RequestMapping("/actuator")
public class HealthController {
    
    @Autowired
    private HealthIndicatorRegistry healthIndicatorRegistry;
    
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> health() {
        Map<String, Object> health = new HashMap<>();
        health.put("status", "UP");
        health.put("service", "order-service");
        health.put("timestamp", Instant.now());
        
        // Check dependencies
        Map<String, Object> dependencies = new HashMap<>();
        dependencies.put("database", checkDatabaseHealth());
        dependencies.put("userService", checkUserServiceHealth());
        dependencies.put("messageQueue", checkMessageQueueHealth());
        
        health.put("dependencies", dependencies);
        return ResponseEntity.ok(health);
    }
    
    private String checkDatabaseHealth() {
        // Implement database health check
        return "UP";
    }
    
    private String checkUserServiceHealth() {
        // Implement user service health check
        return "UP";
    }
    
    private String checkMessageQueueHealth() {
        // Implement message queue health check
        return "UP";
    }
}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Design a Microservices E-commerce System
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Design and implement a complete microservices architecture for an e-commerce platform</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            System Analysis and Service Identification
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📋 Business Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Core Features</h5>
                <ul class="text-sm space-y-1">
                  <li>• User registration and authentication</li>
                  <li>• Product catalog and search</li>
                  <li>• Shopping cart management</li>
                  <li>• Order processing and tracking</li>
                  <li>• Payment processing</li>
                  <li>• Inventory management</li>
                  <li>• Notification system</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Non-Functional Requirements</h5>
                <ul class="text-sm space-y-1">
                  <li>• High availability (99.9% uptime)</li>
                  <li>• Scalability (handle 10k concurrent users)</li>
                  <li>• Performance (response time < 200ms)</li>
                  <li>• Security (PCI DSS compliance)</li>
                  <li>• Fault tolerance and resilience</li>
                  <li>• Data consistency and integrity</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Service Decomposition Task</h4>
            <pre class="text-sm">
Identify and design the following microservices:

1. User Service - User registration, authentication, profile management
2. Product Service - Product catalog, categories, search functionality
3. Cart Service - Shopping cart operations, session management
4. Order Service - Order creation, processing, status tracking
5. Payment Service - Payment processing, transaction management
6. Inventory Service - Stock management, availability checking
7. Notification Service - Email, SMS, push notifications</pre>
          </div>
        </section>

        <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-blue-100">
            After completing this exercise, you'll have designed and implemented a production-ready microservices architecture
            with proper service decomposition, communication patterns, data consistency, and observability practices.
          </p>
        </div>
      </div>
    `
  }
};
    