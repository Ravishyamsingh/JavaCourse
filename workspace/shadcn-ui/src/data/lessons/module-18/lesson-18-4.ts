import { LessonContent } from '../../types/LessonTypes';

export const lesson_18_4: LessonContent = {
  title: 'Performance Optimization Techniques',
  type: 'lesson',
  duration: '90 min',
  module: 'Advanced Topics and Best Practices',
  content: {
    overview: 'Learn advanced performance optimization techniques for Java applications including JVM tuning, memory management, caching strategies, database optimization, and profiling tools. Understand how to identify and resolve performance bottlenecks.',
    objectives: [
      'Master JVM performance tuning and garbage collection',
      'Implement effective caching strategies',
      'Optimize database queries and connections',
      'Use profiling tools to identify bottlenecks',
      'Apply concurrency and parallel processing techniques',
      'Optimize memory usage and prevent leaks',
      'Implement monitoring and performance metrics'
    ],
    theory: '<div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Performance Optimization Techniques' +
      '</h1>' +
      '<p class="mt-3 text-red-100 text-lg">Maximizing Java application performance and efficiency</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Performance Optimization Fundamentals' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Performance optimization is the process of improving the speed, efficiency, and resource ' +
      'utilization of applications. Effective optimization requires a systematic approach that ' +
      'identifies bottlenecks, measures impact, and implements targeted improvements.' +
      '</p>' +
      '<div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">' +
      '<h4 class="font-bold text-red-800 mb-2">🎯 Optimization Principles</h4>' +
      '<ul class="text-red-700 space-y-1">' +
      '<li>• <strong>Measure First:</strong> Identify bottlenecks before optimizing</li>' +
      '<li>• <strong>Focus on Hotspots:</strong> Optimize the 20% that consumes 80% of resources</li>' +
      '<li>• <strong>Iterative Approach:</strong> Make incremental improvements with measurement</li>' +
      '<li>• <strong>Balance Trade-offs:</strong> Consider maintainability vs. performance</li>' +
      '<li>• <strong>Prevent Regressions:</strong> Monitor performance after changes</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ Optimization Areas</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• JVM and Garbage Collection Tuning</li>' +
      '<li>• Memory Management and Leak Prevention</li>' +
      '<li>• Database Query Optimization</li>' +
      '<li>• Caching Strategies</li>' +
      '<li>• Concurrency and Parallel Processing</li>' +
      '<li>• Algorithm and Data Structure Optimization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-red-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-red-800 mb-2">⚠️ Common Optimization Mistakes</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Premature optimization without measurement</li>' +
      '<li>• Optimizing the wrong parts of the system</li>' +
      '<li>• Ignoring algorithmic complexity</li>' +
      '<li>• Over-engineering solutions</li>' +
      '<li>• Neglecting maintainability for performance</li>' +
      '<li>• Failing to test under realistic loads</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'JVM Performance Tuning' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Garbage Collection Optimization</h4>' +
      '<p class="text-orange-700 mb-3">Choosing the right garbage collector and tuning parameters:</p>' +
      '<div class="bg-white p-4 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">GC Algorithms</h5>' +
      '<div class="grid md:grid-cols-3 gap-4 text-sm">' +
      '<div>' +
      '<strong>G1GC</strong>' +
      '<p class="text-gray-600">Low pause collector for large heaps</p>' +
      '</div>' +
      '<div>' +
      '<strong>ZGC</strong>' +
      '<p class="text-gray-600">Ultra-low pause times (<10ms)</p>' +
      '</div>' +
      '<div>' +
      '<strong>Shenandoah</strong>' +
      '<p class="text-gray-600">Low pause collector with concurrent compaction</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">JVM Memory Settings</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Parameter</th>' +
      '<th class="py-2 px-4 text-left">Purpose</th>' +
      '<th class="py-2 px-4 text-left">Example</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">-Xms</td>' +
      '<td class="py-2 px-4">Initial heap size</td>' +
      '<td class="py-2 px-4">-Xms2g</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">-Xmx</td>' +
      '<td class="py-2 px-4">Maximum heap size</td>' +
      '<td class="py-2 px-4">-Xmx8g</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">-XX:NewRatio</td>' +
      '<td class="py-2 px-4">Young/Old generation ratio</td>' +
      '<td class="py-2 px-4">-XX:NewRatio=2</td>' +
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
      '<h5 class="font-bold text-green-800 mb-2">Local Caching</h5>' +
      '<p class="text-sm text-gray-700 mb-2">In-memory caching within application</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Caffeine, Ehcache</li>' +
      '<li>• Fast access times</li>' +
      '<li>• Limited by heap size</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Distributed Caching</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Shared cache across multiple nodes</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Redis, Memcached</li>' +
      '<li>• Scalable and resilient</li>' +
      '<li>• Network overhead</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Database Optimization' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">Query Optimization Techniques</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Indexing Strategies</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Create indexes on frequently queried columns</li>' +
      '<li>• Use composite indexes for multi-column queries</li>' +
      '<li>• Monitor index usage and remove unused indexes</li>' +
      '<li>• Consider covering indexes for read-heavy workloads</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Query Best Practices</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Use prepared statements to prevent SQL injection</li>' +
      '<li>• Limit result sets with pagination</li>' +
      '<li>• Avoid SELECT * in production queries</li>' +
      '<li>• Use connection pooling for efficient database access</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Performance Optimization Implementation\n\n' +
      '// 1. JVM Tuning Configuration\n' +
      '// Application startup script with optimized JVM settings\n' +
      'JAVA_OPTS="-server \\\n' +
      '  -Xms4g \\\n' +
      '  -Xmx8g \\\n' +
      '  -XX:NewRatio=2 \\\n' +
      '  -XX:SurvivorRatio=8 \\\n' +
      '  -XX:+UseG1GC \\\n' +
      '  -XX:MaxGCPauseMillis=200 \\\n' +
      '  -XX:G1HeapRegionSize=16m \\\n' +
      '  -XX:+G1UseAdaptiveIHOP \\\n' +
      '  -XX:G1MixedGCCountTarget=8 \\\n' +
      '  -XX:+UnlockExperimentalVMOptions \\\n' +
      '  -XX:+UseZGC \\\n' +
      '  -XX:+UseStringDeduplication \\\n' +
      '  -XX:+OptimizeStringConcat \\\n' +
      '  -XX:+UseCompressedOops \\\n' +
      '  -XX:+UseCompressedClassPointers \\\n' +
      '  -XX:+AggressiveOpts \\\n' +
      '  -XX:+UseBiasedLocking \\\n' +
      '  -XX:BiasedLockingStartupDelay=0 \\\n' +
      '  -XX:+UseFastAccessorMethods \\\n' +
      '  -XX:+UseCMSInitiatingOccupancyOnly \\\n' +
      '  -XX:CMSInitiatingOccupancyFraction=70 \\\n' +
      '  -XX:+CMSClassUnloadingEnabled \\\n' +
      '  -XX:+CMSPermGenSweepingEnabled \\\n' +
      '  -XX:+ExplicitGCInvokesConcurrent \\\n' +
      '  -XX:+HeapDumpOnOutOfMemoryError \\\n' +
      '  -XX:HeapDumpPath=/var/log/app/heapdump.hprof \\\n' +
      '  -XX:+PrintGC \\\n' +
      '  -XX:+PrintGCDetails \\\n' +
      '  -XX:+PrintGCTimeStamps \\\n' +
      '  -XX:+PrintGCApplicationStoppedTime \\\n' +
      '  -Xloggc:/var/log/app/gc.log \\\n' +
      '  -XX:+UseGCLogFileRotation \\\n' +
      '  -XX:NumberOfGCLogFiles=5 \\\n' +
      '  -XX:GCLogFileSize=100M \\\n' +
      '  -XX:+UseTLAB \\\n' +
      '  -XX:+ResizeTLAB \\\n' +
      '  -XX:TLABSize=512k \\\n' +
      '  -XX:MinTLABSize=256k"\n\n' +
      '// 2. Efficient Caching Implementation with Caffeine\n' +
      'import com.github.benmanes.caffeine.cache.Cache;\n' +
      'import com.github.benmanes.caffeine.cache.Caffeine;\n' +
      'import com.github.benmanes.caffeine.cache.LoadingCache;\n' +
      'import com.github.benmanes.caffeine.cache.RemovalCause;\n' +
      'import com.github.benmanes.caffeine.cache.Scheduler;\n' +
      'import java.time.Duration;\n' +
      'import java.util.concurrent.Executors;\n' +
      'import java.util.concurrent.TimeUnit;\n\n' +
      '@Service\n' +
      'public class OptimizedCacheService {\n' +
      '    \n' +
      '    // Loading cache with automatic refresh\n' +
      '    private final LoadingCache<String, UserProfile> userProfileCache = Caffeine.newBuilder()\n' +
      '        .maximumSize(10_000)\n' +
      '        .expireAfterWrite(Duration.ofHours(1))\n' +
      '        .refreshAfterWrite(Duration.ofMinutes(30))\n' +
      '        .scheduler(Scheduler.systemScheduler())\n' +
      '        .recordStats()\n' +
      '        .removalListener((String key, UserProfile value, RemovalCause cause) -> {\n' +
      '            if (cause == RemovalCause.EXPIRED || cause == RemovalCause.SIZE) {\n' +
      '                logger.info("Cache entry removed: {} for reason: {}", key, cause);\n' +
      '            }\n' +
      '        })\n' +
      '        .build(this::loadUserProfile);\n' +
      '    \n' +
      '    // Manual cache with time-based eviction\n' +
      '    private final Cache<String, ProductCatalog> productCatalogCache = Caffeine.newBuilder()\n' +
      '        .maximumSize(5_000)\n' +
      '        .expireAfterWrite(Duration.ofMinutes(15))\n' +
      '        .recordStats()\n' +
      '        .build();\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets user profile with caching\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return the user profile\n' +
      '     */\n' +
      '    public UserProfile getUserProfile(String userId) {\n' +
      '        return userProfileCache.get(userId);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Loads user profile from database (expensive operation)\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return the user profile\n' +
      '     */\n' +
      '    private UserProfile loadUserProfile(String userId) {\n' +
      '        // Simulate database call\n' +
      '        return userProfileRepository.findById(userId)\n' +
      '            .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Updates product catalog cache\n' +
      '     * \n' +
      '     * @param catalogId the catalog ID\n' +
      '     * @param catalog the updated catalog\n' +
      '     */\n' +
      '    public void updateProductCatalog(String catalogId, ProductCatalog catalog) {\n' +
      '        productCatalogCache.put(catalogId, catalog);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Gets cache statistics for monitoring\n' +
      '     * \n' +
      '     * @return cache statistics\n' +
      '     */\n' +
      '    public CacheStats getCacheStats() {\n' +
      '        CacheStats stats = new CacheStats();\n' +
      '        stats.userProfileHitRate = userProfileCache.stats().hitRate();\n' +
      '        stats.userProfileLoadCount = userProfileCache.stats().loadCount();\n' +
      '        stats.productCatalogHitRate = productCatalogCache.stats().hitRate();\n' +
      '        return stats;\n' +
      '    }\n' +
      '}\n\n' +
      '// 3. Database Connection Pool Optimization\n' +
      '@Configuration\n' +
      'public class DatabaseConfig {\n' +
      '    \n' +
      '    @Bean\n' +
      '    public HikariDataSource dataSource() {\n' +
      '        HikariConfig config = new HikariConfig();\n' +
      '        config.setJdbcUrl("jdbc:postgresql://localhost:5432/myapp");\n' +
      '        config.setUsername("user");\n' +
      '        config.setPassword("password");\n' +
      '        \n' +
      '        // Connection pool optimization\n' +
      '        config.setMaximumPoolSize(20);\n' +
      '        config.setMinimumIdle(5);\n' +
      '        config.setConnectionTimeout(30000);\n' +
      '        config.setIdleTimeout(600000);\n' +
      '        config.setMaxLifetime(1800000);\n' +
      '        config.setLeakDetectionThreshold(60000);\n' +
      '        config.setPoolName("MyAppHikariPool");\n' +
      '        \n' +
      '        // Performance optimizations\n' +
      '        config.addDataSourceProperty("cachePrepStmts", "true");\n' +
      '        config.addDataSourceProperty("prepStmtCacheSize", "250");\n' +
      '        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");\n' +
      '        config.addDataSourceProperty("useServerPrepStmts", "true");\n' +
      '        config.addDataSourceProperty("useLocalSessionState", "true");\n' +
      '        config.addDataSourceProperty("rewriteBatchedStatements", "true");\n' +
      '        config.addDataSourceProperty("cacheResultSetMetadata", "true");\n' +
      '        config.addDataSourceProperty("cacheServerConfiguration", "true");\n' +
      '        config.addDataSourceProperty("elideSetAutoCommits", "true");\n' +
      '        config.addDataSourceProperty("maintainTimeStats", "false");\n' +
      '        \n' +
      '        return new HikariDataSource(config);\n' +
      '    }\n' +
      '}\n\n' +
      '// 4. Optimized Database Query with JPA\n' +
      '@Repository\n' +
      'public class OptimizedUserRepository {\n' +
      '    \n' +
      '    @PersistenceContext\n' +
      '    private EntityManager entityManager;\n' +
      '    \n' +
      '    /**\n' +
      '     * Efficient user search with pagination and projections\n' +
      '     * \n' +
      '     * @param searchTerm the search term\n' +
      '     * @param page the page number\n' +
      '     * @param size the page size\n' +
      '     * @return paginated user results\n' +
      '     */\n' +
      '    @Query("SELECT new com.example.dto.UserSummary(u.id, u.name, u.email) " +\n' +
      '           "FROM User u " +\n' +
      '           "WHERE u.name LIKE %:searchTerm% OR u.email LIKE %:searchTerm% " +\n' +
      '           "ORDER BY u.name")\n' +
      '    public Page<UserSummary> findUserSummaries(\n' +
      '            @Param("searchTerm") String searchTerm, \n' +
      '            Pageable pageable);\n' +
      '    \n' +
      '    /**\n' +
      '     * Fetch user with orders in single query to avoid N+1 problem\n' +
      '     * \n' +
      '     * @param userId the user ID\n' +
      '     * @return user with orders\n' +
      '     */\n' +
      '    @Query("SELECT u FROM User u " +\n' +
      '           "LEFT JOIN FETCH u.orders o " +\n' +
      '           "LEFT JOIN FETCH o.items i " +\n' +
      '           "WHERE u.id = :userId")\n' +
      '    public User findUserWithOrders(@Param("userId") Long userId);\n' +
      '    \n' +
      '    /**\n' +
      '     * Batch update for better performance\n' +
      '     * \n' +
      '     * @param userIds list of user IDs\n' +
      '     * @param status the new status\n' +
      '     * @return number of updated records\n' +
      '     */\n' +
      '    @Modifying\n' +
      '    @Query("UPDATE User u SET u.status = :status WHERE u.id IN :userIds")\n' +
      '    public int updateUserStatusInBatch(\n' +
      '            @Param("userIds") List<Long> userIds, \n' +
      '            @Param("status") UserStatus status);\n' +
      '}\n\n' +
      '// 5. Memory-Efficient Data Processing\n' +
      'public class EfficientDataProcessor {\n' +
      '    \n' +
      '    /**\n' +
      '     * Process large datasets with streaming to avoid memory issues\n' +
      '     * \n' +
      '     * @param dataSource the data source\n' +
      '     * @param processor the data processor\n' +
      '     */\n' +
      '    public void processLargeDataset(DataSource dataSource, DataProcessor processor) {\n' +
      '        try (Connection connection = dataSource.getConnection();\n' +
      '             PreparedStatement statement = connection.prepareStatement(\n' +
      '                 "SELECT * FROM large_table", \n' +
      '                 ResultSet.TYPE_FORWARD_ONLY, \n' +
      '                 ResultSet.CONCUR_READ_ONLY)) {\n' +
      '            \n' +
      '            // Enable streaming for large result sets\n' +
      '            statement.setFetchSize(Integer.MIN_VALUE);\n' +
      '            \n' +
      '            try (ResultSet resultSet = statement.executeQuery()) {\n' +
      '                while (resultSet.next()) {\n' +
      '                    // Process one row at a time\n' +
      '                    DataRecord record = mapResultSetToRecord(resultSet);\n' +
      '                    processor.process(record);\n' +
      '                }\n' +
      '            }\n' +
      '        } catch (SQLException e) {\n' +
      '            throw new DataProcessingException("Error processing dataset", e);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Use primitive collections for better memory efficiency\n' +
      '     * \n' +
      '     * @param userIds list of user IDs\n' +
      '     * @return set of user IDs\n' +
      '     */\n' +
      '    public IntSet createUserSet(List<Integer> userIds) {\n' +
      '        // Using Eclipse Collections for primitive collections\n' +
      '        IntSet userSet = IntSets.mutable.empty();\n' +
      '        userIds.forEach(userSet::add);\n' +
      '        return userSet;\n' +
      '    }\n' +
      '}\n\n' +
      '// 6. Concurrency Optimization\n' +
      '@Service\n' +
      'public class ConcurrentDataService {\n' +
      '    \n' +
      '    // Use thread-safe collections\n' +
      '    private final ConcurrentHashMap<String, UserProfile> userProfiles = \n' +
      '        new ConcurrentHashMap<>();\n' +
      '    \n' +
      '    // Use CompletableFuture for async processing\n' +
      '    public CompletableFuture<List<UserProfile>> fetchUserProfilesAsync(\n' +
      '            List<String> userIds) {\n' +
      '        \n' +
      '        List<CompletableFuture<UserProfile>> futures = userIds.stream()\n' +
      '            .map(this::fetchUserProfileAsync)\n' +
      '            .collect(Collectors.toList());\n' +
      '        \n' +
      '        return CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))\n' +
      '            .thenApply(v -> futures.stream()\n' +
      '                .map(CompletableFuture::join)\n' +
      '                .collect(Collectors.toList()));\n' +
      '    }\n' +
      '    \n' +
      '    private CompletableFuture<UserProfile> fetchUserProfileAsync(String userId) {\n' +
      '        return CompletableFuture.supplyAsync(() -> {\n' +
      '            // Simulate database call\n' +
      '            return userProfileRepository.findById(userId)\n' +
      '                .orElseThrow(() -> new UserNotFoundException(userId));\n' +
      '        }, executorService);\n' +
      '    }\n' +
      '}\n\n' +
      '// 7. Performance Monitoring and Metrics\n' +
      '@Component\n' +
      'public class PerformanceMonitor {\n' +
      '    \n' +
      '    private final MeterRegistry meterRegistry;\n' +
      '    private final Timer requestTimer;\n' +
      '    private final Counter errorCounter;\n' +
      '    \n' +
      '    public PerformanceMonitor(MeterRegistry meterRegistry) {\n' +
      '        this.meterRegistry = meterRegistry;\n' +
      '        this.requestTimer = Timer.builder("http.requests")\n' +
      '            .description("HTTP request duration")\n' +
      '            .register(meterRegistry);\n' +
      '        this.errorCounter = Counter.builder("http.errors")\n' +
      '            .description("HTTP error count")\n' +
      '            .register(meterRegistry);\n' +
      '    }\n' +
      '    \n' +
      '    /**\n' +
      '     * Monitor method execution time\n' +
      '     * \n' +
      '     * @param methodName the method name\n' +
      '     * @param callable the operation to monitor\n' +
      '     * @return the result\n' +
      '     */\n' +
      '    public <T> T monitor(String methodName, Callable<T> callable) {\n' +
      '        Timer.Sample sample = Timer.start(meterRegistry);\n' +
      '        try {\n' +
      '            T result = callable.call();\n' +
      '            sample.stop(Timer.builder("method.duration")\n' +
      '                .tag("method", methodName)\n' +
      '                .register(meterRegistry));\n' +
      '            return result;\n' +
      '        } catch (Exception e) {\n' +
      '            errorCounter.increment();\n' +
      '            throw new RuntimeException(e);\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// 8. Memory Leak Prevention\n' +
      'public class MemoryLeakPrevention {\n' +
      '    \n' +
      '    // Use weak references for caches\n' +
      '    private final Map<String, WeakReference<UserProfile>> userProfileCache = \n' +
      '        new ConcurrentHashMap<>();\n' +
      '    \n' +
      '    // Properly close resources\n' +
      '    public void processData(InputStream inputStream) {\n' +
      '        try (BufferedReader reader = new BufferedReader(\n' +
      '                new InputStreamReader(inputStream))) {\n' +
      '            // Process data\n' +
      '            String line;\n' +
      '            while ((line = reader.readLine()) != null) {\n' +
      '                processLine(line);\n' +
      '            }\n' +
      '        } catch (IOException e) {\n' +
      '            logger.error("Error processing data", e);\n' +
      '        }\n' +
      '        // Resource automatically closed\n' +
      '    }\n' +
      '    \n' +
      '    // Avoid string concatenation in loops\n' +
      '    public String buildMessage(List<String> parts) {\n' +
      '        StringBuilder sb = new StringBuilder();\n' +
      '        for (String part : parts) {\n' +
      '            sb.append(part);\n' +
      '        }\n' +
      '        return sb.toString();\n' +
      '    }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Optimize a High-Traffic E-Commerce Application' +
      '</h1>' +
      '<p class="mt-3 text-red-100 text-lg">Implement comprehensive performance optimizations for a production e-commerce platform</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'E-Commerce Performance Optimization' +
      '</h2>' +
      '<div class="bg-red-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-red-800 mb-2">📋 Application Components</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-red-800 mb-2">Performance Targets</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Page load time < 2 seconds</li>' +
      '<li>• API response time < 500ms</li>' +
      '<li>• Handle 10,000 concurrent users</li>' +
      '<li>• 99.9% uptime requirement</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-red-800 mb-2">Optimization Areas</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Product catalog search</li>' +
      '<li>• Shopping cart operations</li>' +
      '<li>• Order processing pipeline</li>' +
      '<li>• Payment processing</li>' +
      '<li>• User session management</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-red-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Optimize JVM settings for production\n' +
      '2. Implement multi-level caching strategy\n' +
      '3. Optimize database queries and indexes\n' +
      '4. Add connection pooling with optimal settings\n' +
      '5. Implement async processing for non-critical operations\n' +
      '6. Add performance monitoring and alerting\n' +
      '7. Optimize memory usage and prevent leaks\n' +
      '8. Conduct load testing and performance validation</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Performance Testing and Validation' +
      '</h2>' +
      '<div class="bg-orange-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-orange-800 mb-2">✅ Testing Strategy</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Load Testing</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Simulate 10,000 concurrent users</li>' +
      '<li>• Test peak traffic scenarios</li>' +
      '<li>• Validate response time targets</li>' +
      '<li>• Monitor resource utilization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Monitoring Setup</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• JVM metrics and GC monitoring</li>' +
      '<li>• Database performance metrics</li>' +
      '<li>• Cache hit/miss ratios</li>' +
      '<li>• Error rates and response times</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<div class="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-red-100">' +
      'After completing this exercise, you\'ll have optimized a complete e-commerce application ' +
      'with comprehensive performance improvements and monitoring in place.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};