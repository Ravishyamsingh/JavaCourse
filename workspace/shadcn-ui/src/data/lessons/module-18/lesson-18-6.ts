import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_6: LessonContent = {
  title: 'Scalability and Architecture Patterns',
  type: 'lesson',
  duration: '100 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn scalability principles and architecture patterns for building highly scalable Java applications. Understand horizontal and vertical scaling, load balancing, caching strategies, database scaling, and microservices architecture patterns.',
    objectives: [
      'Understand scalability principles and trade-offs',
      'Implement horizontal and vertical scaling strategies',
      'Apply load balancing and caching patterns',
      'Design scalable database architectures',
      'Implement microservices scalability patterns',
      'Apply circuit breaker and bulkhead patterns',
      'Design for failure and resilience'
    ],
    theory: '<div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Scalability and Architecture Patterns' +
      '</h1>' +
      '<p class="mt-3 text-teal-100 text-lg">Building highly scalable Java applications</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Scalability Fundamentals' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Scalability is the ability of a system to handle growing amounts of work ' +
      'by adding resources. It involves both functional scalability (handling ' +
      'more users and data) and non-functional scalability (maintaining performance ' +
      'and reliability under load).' +
      '</p>' +
      '<div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400 mb-4">' +
      '<h4 class="font-bold text-teal-800 mb-2">🎯 Scalability Principles</h4>' +
      '<ul class="text-teal-700 space-y-1">' +
      '<li>• <strong>Horizontal Scaling:</strong> Add more machines/nodes</li>' +
      '<li>• <strong>Vertical Scaling:</strong> Add more power to existing machines</li>' +
      '<li>• <strong>Elasticity:</strong> Automatically adjust resources based on demand</li>' +
      '<li>• <strong>Decoupling:</strong> Separate components for independent scaling</li>' +
      '<li>• <strong>Statelessness:</strong> Enable easy horizontal scaling</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ Scaling Strategies</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Load balancing and distribution</li>' +
      '<li>• Caching at multiple levels</li>' +
      '<li>• Database sharding and replication</li>' +
      '<li>• Asynchronous processing</li>' +
      '<li>• Content delivery networks</li>' +
      '<li>• Microservices architecture</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Scalability Challenges</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Increased system complexity</li>' +
      '<li>• Data consistency issues</li>' +
      '<li>• Network latency and failures</li>' +
      '<li>• Coordination overhead</li>' +
      '<li>• Cost management</li>' +
      '<li>• Monitoring and debugging difficulty</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Load Balancing Patterns' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-cyan-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-cyan-800 mb-2">Load Balancing Algorithms</h4>' +
      '<p class="text-cyan-700 mb-3">Distributing traffic across multiple servers:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Common Algorithms</h5>' +
      '<div class="grid md:grid-cols-3 gap-4 text-sm">' +
      '<div>' +
      '<strong>Round Robin</strong>' +
      '<p class="text-gray-600">Sequential distribution</p>' +
      '</div>' +
      '<div>' +
      '<strong>Weighted Round Robin</strong>' +
      '<p class="text-gray-600">Based on server capacity</p>' +
      '</div>' +
      '<div>' +
      '<strong>Least Connections</strong>' +
      '<p class="text-gray-600">Send to least busy server</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Load Balancer Types</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Type</th>' +
      '<th class="py-2 px-4 text-left">Description</th>' +
      '<th class="py-2 px-4 text-left">Use Case</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Hardware</td>' +
      '<td class="py-2 px-4">Physical load balancers</td>' +
      '<td class="py-2 px-4">High-performance enterprise</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Software</td>' +
      '<td class="py-2 px-4">Software-based solutions</td>' +
      '<td class="py-2 px-4">Cloud and flexible deployments</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">DNS</td>' +
      '<td class="py-2 px-4">DNS-based load distribution</td>' +
      '<td class="py-2 px-4">Geographic load distribution</td>' +
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
      'Caching Strategies' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-green-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-green-800 mb-2">Caching Patterns</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Cache-Aside</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Application manages cache</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Check cache first</li>' +
      '<li>• Load from database if miss</li>' +
      '<li>• Update cache on write</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Read-Through</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Cache manages loading</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Cache handles database calls</li>' +
      '<li>• Transparent to application</li>' +
      '<li>• Automatic cache population</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Database Scaling' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Scaling Techniques</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Vertical Scaling</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Add CPU, RAM, storage</li>' +
      '<li>• Simple to implement</li>' +
      '<li>• Limited by hardware</li>' +
      '<li>• Single point of failure</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Horizontal Scaling</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Add more database servers</li>' +
      '<li>• Sharding and replication</li>' +
      '<li>• Complex to manage</li>' +
      '<li>• Better fault tolerance</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Scalability Implementation\n\n' +
      '// 1. Load Balancer Configuration\n' +
      '@Configuration\n' +
      'public class LoadBalancerConfig {\n' +
      '    \n' +
      '    @Bean\n' +
      '    public LoadBalancerClient loadBalancerClient() {\n' +
      '        return new RoundRobinLoadBalancer();\n' +
      '    }\n' +
      '    \n' +
      '    @Bean\n' +
      '    @LoadBalanced\n' +
      '    public RestTemplate restTemplate() {\n' +
      '        return new RestTemplate();\n' +
      '    }\n' +
      '    \n' +
      '    // Custom load balancer with weighted round robin\n' +
      '    @Bean\n' +
      '    public ReactorLoadBalancer<ServiceInstance> reactorServiceInstanceLoadBalancer(\n' +
      '            Environment environment,\n' +
      '            LoadBalancerClientFactory loadBalancerClientFactory) {\n' +
      '        \n' +
      '        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);\n' +
      '        return new WeightedResponseTimeLoadBalancer(\n' +
      '            loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),\n' +
      '            name);\n' +
      '    }\n' +
      '}\n\n' +
      '// 2. Circuit Breaker Pattern Implementation\n' +
      '@Service\n' +
      'public class ResilientUserService {\n' +
      '    \n' +
      '    private final UserServiceClient userServiceClient;\n' +
      '    private final CircuitBreaker circuitBreaker;\n' +
      '    \n' +
      '    public ResilientUserService(UserServiceClient userServiceClient, \n' +
      '                               CircuitBreakerFactory circuitBreakerFactory) {\n' +
      '        this.userServiceClient = userServiceClient;\n' +
      '        this.circuitBreaker = circuitBreakerFactory.create("userService");\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets user with circuit breaker protection\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return user details\n' +
      '     */\n' +
      '    public User getUser(String userId) {\n' +
      '        return circuitBreaker.run(\n' +
      '            () -> userServiceClient.getUser(userId),\n' +
      '            throwable -> getDefaultUser(userId)\n' +
      '        );\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets user with retry mechanism\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return user details\n' +
      '     */\n' +
      '    @Retryable(value = {RemoteServiceException.class}, maxAttempts = 3, backoff = @Backoff(delay = 1000))\n' +
      '    public User getUserWithRetry(String userId) {\n' +
      '        return userServiceClient.getUser(userId);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Fallback method for circuit breaker\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return default user\n' +
      '     */\n' +
      '    public User getDefaultUser(String userId) {\n' +
      '        User defaultUser = new User();\n' +
      '        defaultUser.setId(userId);\n' +
      '        defaultUser.setName("Default User");\n' +
      '        defaultUser.setEmail("default@example.com");\n' +
      '        return defaultUser;\n' +
      '    }\n' +
      '}\n\n' +
      '// 3. Bulkhead Pattern Implementation\n' +
      '@Service\n' +
      'public class BulkheadService {\n' +
      '    \n' +
      '    private final Bulkhead userBulkhead;\n' +
      '    private final Bulkhead orderBulkhead;\n' +
      '    \n' +
      '    public BulkheadService(BulkheadRegistry bulkheadRegistry) {\n' +
      '        // Configure bulkheads for different services\n' +
      '        this.userBulkhead = bulkheadRegistry.bulkhead("user-service", \n' +
      '            configureUserServiceBulkhead());\n' +
      '        this.orderBulkhead = bulkheadRegistry.bulkhead("order-service", \n' +
      '            configureOrderServiceBulkhead());\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Process user request with bulkhead protection\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return user details\n' +
      '     * @throws BulkheadFullException if bulkhead is full\n' +
      '     */\n' +
      '    public User processUserRequest(String userId) {\n' +
      '        Supplier<User> userSupplier = Bulkhead.decorateSupplier(\n' +
      '            userBulkhead, \n' +
      '            () -> fetchUserDetails(userId)\n' +
      '        );\n' +
      '        \n' +
      '        return Try.ofSupplier(userSupplier)\n' +
      '            .recover(throwable -> handleBulkheadException(throwable, userId))\n' +
      '            .get();\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Process order request with bulkhead protection\n' +
      '     * \n' +
      '     * @param orderId the order ID\n' +
      '     * @return order details\n' +
      '     * @throws BulkheadFullException if bulkhead is full\n' +
      '     */\n' +
      '    public Order processOrderRequest(String orderId) {\n' +
      '        Supplier<Order> orderSupplier = Bulkhead.decorateSupplier(\n' +
      '            orderBulkhead, \n' +
      '            () -> fetchOrderDetails(orderId)\n' +
      '        );\n' +
      '        \n' +
      '        return Try.ofSupplier(orderSupplier)\n' +
      '            .recover(throwable -> handleBulkheadException(throwable, orderId))\n' +
      '            .get();\n' +
      '    }\n' +
      '    \n' +
      '    private User fetchUserDetails(String userId) {\n' +
      '        // Simulate user service call\n' +
      '        return userServiceClient.getUser(userId);\n' +
      '    }\n' +
      '    \n' +
      '    private Order fetchOrderDetails(String orderId) {\n' +
      '        // Simulate order service call\n' +
      '        return orderServiceClient.getOrder(orderId);\n' +
      '    }\n' +
      '    \n' +
      '    private BulkheadConfig configureUserServiceBulkhead() {\n' +
      '        return BulkheadConfig.custom()\n' +
      '            .maxConcurrentCalls(10)\n' +
      '            .maxWaitDuration(Duration.ofSeconds(5))\n' +
      '            .build();\n' +
      '    }\n' +
      '    \n' +
      '    private BulkheadConfig configureOrderServiceBulkhead() {\n' +
      '        return BulkheadConfig.custom()\n' +
      '            .maxConcurrentCalls(20)\n' +
      '            .maxWaitDuration(Duration.ofSeconds(10))\n' +
      '            .build();\n' +
      '    }\n' +
      '    \n' +
      '    private <T> T handleBulkheadException(Throwable throwable, String id) {\n' +
      '        if (throwable instanceof BulkheadFullException) {\n' +
      '            logger.warn("Bulkhead full for request: {}", id);\n' +
      '            throw new ServiceUnavailableException("Service temporarily unavailable");\n' +
      '        }\n' +
      '        throw new RuntimeException("Service error", throwable);\n' +
      '    }\n' +
      '}\n\n' +
      '// 4. Database Sharding Implementation\n' +
      '@Repository\n' +
      'public class ShardedUserRepository {\n' +
      '    \n' +
      '    private final List<DataSource> shards;\n' +
      '    \n' +
      '    public ShardedUserRepository(List<DataSource> shards) {\n' +
      '        this.shards = shards;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Save user to appropriate shard\n' +
      '     * \n' +
      '     * @param user the user to save\n' +
      '     * @return saved user\n' +
      '     */\n' +
      '    public User save(User user) {\n' +
      '        DataSource shard = getShardForUser(user.getId());\n' +
      '        \n' +
      '        try (Connection connection = shard.getConnection()) {\n' +
      '            PreparedStatement statement = connection.prepareStatement(\n' +
      '                "INSERT INTO users (id, name, email) VALUES (?, ?, ?)");\n' +
      '            statement.setString(1, user.getId());\n' +
      '            statement.setString(2, user.getName());\n' +
      '            statement.setString(3, user.getEmail());\n' +
      '            statement.executeUpdate();\n' +
      '            \n' +
      '            return user;\n' +
      '        } catch (SQLException e) {\n' +
      '            throw new DataAccessException("Failed to save user", e);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Find user by ID from appropriate shard\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return user or null if not found\n' +
      '     */\n' +
      '    public User findById(String userId) {\n' +
      '        DataSource shard = getShardForUser(userId);\n' +
      '        \n' +
      '        try (Connection connection = shard.getConnection()) {\n' +
      '            PreparedStatement statement = connection.prepareStatement(\n' +
      '                "SELECT id, name, email FROM users WHERE id = ?");\n' +
      '            statement.setString(1, userId);\n' +
      '            \n' +
      '            ResultSet resultSet = statement.executeQuery();\n' +
      '            if (resultSet.next()) {\n' +
      '                User user = new User();\n' +
      '                user.setId(resultSet.getString("id"));\n' +
      '                user.setName(resultSet.getString("name"));\n' +
      '                user.setEmail(resultSet.getString("email"));\n' +
      '                return user;\n' +
      '            }\n' +
      '            \n' +
      '            return null;\n' +
      '        } catch (SQLException e) {\n' +
      '            throw new DataAccessException("Failed to find user", e);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Determine shard for user based on ID\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return appropriate shard\n' +
      '     */\n' +
      '    private DataSource getShardForUser(String userId) {\n' +
      '        int shardIndex = Math.abs(userId.hashCode()) % shards.size();\n' +
      '        return shards.get(shardIndex);\n' +
      '    }\n' +
      '}\n\n' +
      '// 5. Caching with Redis\n' +
      '@Service\n' +
      'public class CachedUserService {\n' +
      '    \n' +
      '    private final UserService userService;\n' +
      '    private final RedisTemplate<String, Object> redisTemplate;\n' +
      '    \n' +
      '    public CachedUserService(UserService userService, \n' +
      '                           RedisTemplate<String, Object> redisTemplate) {\n' +
      '        this.userService = userService;\n' +
      '        this.redisTemplate = redisTemplate;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Get user with cache-aside pattern\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return user details\n' +
      '     */\n' +
      '    public User getUser(String userId) {\n' +
      '        // Try cache first\n' +
      '        String cacheKey = "user:" + userId;\n' +
      '        User cachedUser = (User) redisTemplate.opsForValue().get(cacheKey);\n' +
      '        \n' +
      '        if (cachedUser != null) {\n' +
      '            return cachedUser;\n' +
      '        }\n' +
      '        \n' +
      '        // Load from database\n' +
      '        User user = userService.findById(userId);\n' +
      '        \n' +
      '        if (user != null) {\n' +
      '            // Cache for 1 hour\n' +
      '            redisTemplate.opsForValue().set(cacheKey, user, Duration.ofHours(1));\n' +
      '        }\n' +
      '        \n' +
      '        return user;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Update user and invalidate cache\n' +
      '     * \n' +
      '     * @param user the user to update\n' +
      '     * @return updated user\n' +
      '     */\n' +
      '    public User updateUser(User user) {\n' +
      '        User updatedUser = userService.update(user);\n' +
      '        \n' +
      '        // Invalidate cache\n' +
      '        String cacheKey = "user:" + user.getId();\n' +
      '        redisTemplate.delete(cacheKey);\n' +
      '        \n' +
      '        return updatedUser;\n' +
      '    }\n' +
      '}\n\n' +
      '// 6. Asynchronous Processing with Message Queues\n' +
      '@Service\n' +
      'public class AsyncNotificationService {\n' +
      '    \n' +
      '    private final RabbitTemplate rabbitTemplate;\n' +
      '    \n' +
      '    public AsyncNotificationService(RabbitTemplate rabbitTemplate) {\n' +
      '        this.rabbitTemplate = rabbitTemplate;\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Send notification asynchronously\n' +
      '     * \n' +
      '     * @param notification the notification to send\n' +
      '     */\n' +
      '    @Async\n' +
      '    public void sendNotification(Notification notification) {\n' +
      '        try {\n' +
      '            rabbitTemplate.convertAndSend("notifications", notification);\n' +
      '        } catch (Exception e) {\n' +
      '            logger.error("Failed to send notification: {}", notification.getId(), e);\n' +
      '            // Handle failure (e.g., dead letter queue)\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Process notification from queue\n' +
      '     * \n' +
      '     * @param notification the notification to process\n' +
      '     */\n' +
      '    @RabbitListener(queues = "notifications")\n' +
      '    public void processNotification(Notification notification) {\n' +
      '        try {\n' +
      '            // Send actual notification (email, SMS, etc.)\n' +
      '            notificationSender.send(notification);\n' +
      '            \n' +
      '            // Update notification status\n' +
      '            notification.setStatus(NotificationStatus.SENT);\n' +
      '            notificationRepository.save(notification);\n' +
      '        } catch (Exception e) {\n' +
      '            logger.error("Failed to process notification: {}", notification.getId(), e);\n' +
      '            \n' +
      '            // Retry logic\n' +
      '            if (notification.getRetryCount() < 3) {\n' +
      '                notification.incrementRetryCount();\n' +
      '                notificationRepository.save(notification);\n' +
      '                \n' +
      '                // Requeue with delay\n' +
      '                rabbitTemplate.convertAndSend("notifications.retry", notification, \n' +
      '                    message -> {\n' +
      '                        message.getMessageProperties().setDelay(5000); // 5 second delay\n' +
      '                        return message;\n' +
      '                    });\n' +
      '            } else {\n' +
      '                // Move to dead letter queue\n' +
      '                notification.setStatus(NotificationStatus.FAILED);\n' +
      '                notificationRepository.save(notification);\n' +
      '                rabbitTemplate.convertAndSend("notifications.failed", notification);\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Design and Implement a Scalable E-Commerce Platform' +
      '</h1>' +
      '<p class="mt-3 text-teal-100 text-lg">Create a highly scalable e-commerce platform using microservices architecture and scalability patterns</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'E-Commerce Platform Scalability' +
      '</h2>' +
      '<div class="bg-teal-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-teal-800 mb-2">📋 Scalability Requirements</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Performance Targets</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Handle 100,000 concurrent users</li>' +
      '<li>• Page load time < 1 second</li>' +
      '<li>• 99.99% uptime requirement</li>' +
      '<li>• Auto-scaling based on demand</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Architecture Components</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Product catalog service</li>' +
      '<li>• Shopping cart service</li>' +
      '<li>• Order processing service</li>' +
      '<li>• Payment processing service</li>' +
      '<li>• User management service</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-teal-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Design microservices architecture with proper boundaries\n' +
      '2. Implement load balancing with service discovery\n' +
      '3. Add circuit breaker patterns for resilience\n' +
      '4. Implement database sharding for user data\n' +
      '5. Add Redis caching for product catalog\n' +
      '6. Implement asynchronous processing for orders\n' +
      '7. Configure auto-scaling policies\n' +
      '8. Add monitoring and alerting for all services</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Scalability Testing and Validation' +
      '</h2>' +
      '<div class="bg-cyan-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-cyan-800 mb-2">✅ Testing Strategy</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Load Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Simulate peak traffic scenarios</li>' +
      '<li>• Test auto-scaling triggers</li>' +
      '<li>• Validate response time targets</li>' +
      '<li>• Monitor resource utilization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-cyan-800 mb-2">Failure Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Test circuit breaker behavior</li>' +
      '<li>• Validate bulkhead isolation</li>' +
      '<li>• Test database failover</li>' +
      '<li>• Verify cache fallback mechanisms</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-teal-100">' +
      'After completing this exercise, you\'ll have designed and implemented a highly scalable ' +
      'e-commerce platform that can handle massive traffic with proper resilience patterns.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};