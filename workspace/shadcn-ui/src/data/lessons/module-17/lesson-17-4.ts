import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_4: LessonContent = {
  title: 'API Gateway and Load Balancing',
  type: 'lesson',
  duration: '85 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn API Gateway patterns, implementation with Spring Cloud Gateway, load balancing strategies, routing, filtering, rate limiting, and security integration in microservices architecture.',
    objectives: [
      'Understand API Gateway patterns and benefits',
      'Implement API Gateway with Spring Cloud Gateway',
      'Configure routing and load balancing strategies',
      'Implement request/response filtering and transformation',
      'Add rate limiting and circuit breaker patterns',
      'Integrate security and authentication at gateway level'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          API Gateway and Load Balancing
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Centralized entry point for microservices communication</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            API Gateway Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            An API Gateway is a server that acts as an API front-end, receiving API requests, enforcing 
            throttling and security policies, passing requests to the back-end service, and then passing 
            the response back to the requester. It provides a single entry point for all clients.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Core Functions</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Request Routing:</strong> Route requests to appropriate microservices</li>
              <li>• <strong>Load Balancing:</strong> Distribute requests across service instances</li>
              <li>• <strong>Authentication & Authorization:</strong> Centralized security enforcement</li>
              <li>• <strong>Rate Limiting:</strong> Control request rates and prevent abuse</li>
              <li>• <strong>Request/Response Transformation:</strong> Modify requests and responses</li>
              <li>• <strong>Monitoring & Analytics:</strong> Collect metrics and logs</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Single entry point for all clients</li>
                <li>• Simplified client implementation</li>
                <li>• Centralized cross-cutting concerns</li>
                <li>• Protocol translation capabilities</li>
                <li>• Reduced client-service coupling</li>
                <li>• Enhanced security and monitoring</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Challenges</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Potential single point of failure</li>
                <li>• Additional network latency</li>
                <li>• Complexity in configuration</li>
                <li>• Performance bottleneck risk</li>
                <li>• Development and deployment overhead</li>
                <li>• Debugging complexity</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Spring Cloud Gateway
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Gateway Architecture</h4>
              <p class="text-green-700 mb-3">Spring Cloud Gateway is built on Spring WebFlux and provides reactive, non-blocking API gateway:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Core Components</h5>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Route</strong>
                    <p class="text-gray-600">Basic building block with ID, destination URI, predicates, and filters</p>
                  </div>
                  <div>
                    <strong>Predicate</strong>
                    <p class="text-gray-600">Matches HTTP request attributes (path, headers, parameters)</p>
                  </div>
                  <div>
                    <strong>Filter</strong>
                    <p class="text-gray-600">Modifies requests and responses before/after routing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Built-in Predicates</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Predicate</th>
                      <th class="py-2 px-4 text-left">Description</th>
                      <th class="py-2 px-4 text-left">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Path</td>
                      <td class="py-2 px-4">Match request path</td>
                      <td class="py-2 px-4">Path=/api/users/**</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Method</td>
                      <td class="py-2 px-4">Match HTTP method</td>
                      <td class="py-2 px-4">Method=GET,POST</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Header</td>
                      <td class="py-2 px-4">Match request header</td>
                      <td class="py-2 px-4">Header=X-Request-Id</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Load Balancing Strategies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Load Balancing Algorithms</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Round Robin</h5>
                  <p class="text-sm text-gray-700 mb-2">Distribute requests evenly across instances</p>
                  <ul class="text-xs space-y-1">
                    <li>• Simple and fair distribution</li>
                    <li>• Good for homogeneous instances</li>
                    <li>• Default algorithm in most systems</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Weighted Round Robin</h5>
                  <p class="text-sm text-gray-700 mb-2">Distribute based on instance weights</p>
                  <ul class="text-xs space-y-1">
                    <li>• Accounts for instance capacity</li>
                    <li>• Configurable weight per instance</li>
                    <li>• Better for heterogeneous instances</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Rate Limiting and Circuit Breaker
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Rate Limiting Strategies</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Token Bucket</h5>
                  <p class="text-sm text-gray-700 mb-2">Allow burst traffic up to bucket capacity</p>
                  <ul class="text-xs space-y-1">
                    <li>• Tokens added at fixed rate</li>
                    <li>• Requests consume tokens</li>
                    <li>• Allows traffic bursts</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Fixed Window</h5>
                  <p class="text-sm text-gray-700 mb-2">Fixed number of requests per time window</p>
                  <ul class="text-xs space-y-1">
                    <li>• Simple implementation</li>
                    <li>• Clear rate boundaries</li>
                    <li>• Potential traffic spikes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Spring Cloud Gateway Implementation

// 1. Gateway Application Main Class
@SpringBootApplication
@EnableEurekaClient
public class ApiGatewayApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("user-service", r -> r.path("/api/users/**")
                .uri("lb://user-service"))
            .route("order-service", r -> r.path("/api/orders/**")
                .uri("lb://order-service"))
            .build();
    }
}

// 2. Custom Authentication Filter
@Component
public class AuthenticationGatewayFilterFactory extends AbstractGatewayFilterFactory<AuthenticationGatewayFilterFactory.Config> {
    
    private final JwtTokenUtil jwtTokenUtil;
    
    public AuthenticationGatewayFilterFactory(JwtTokenUtil jwtTokenUtil) {
        super(Config.class);
        this.jwtTokenUtil = jwtTokenUtil;
    }
    
    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            
            if (isPublicEndpoint(request.getPath().toString())) {
                return chain.filter(exchange);
            }
            
            String authHeader = request.getHeaders().getFirst("Authorization");
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return handleUnauthorized(exchange);
            }
            
            String token = authHeader.substring(7);
            try {
                if (jwtTokenUtil.validateToken(token)) {
                    String username = jwtTokenUtil.getUsernameFromToken(token);
                    
                    ServerHttpRequest modifiedRequest = request.mutate()
                        .header("X-User-Name", username)
                        .build();
                    
                    return chain.filter(exchange.mutate().request(modifiedRequest).build());
                } else {
                    return handleUnauthorized(exchange);
                }
            } catch (Exception e) {
                return handleUnauthorized(exchange);
            }
        };
    }
    
    private boolean isPublicEndpoint(String path) {
        return path.startsWith("/api/auth/") || path.startsWith("/api/public/");
    }
    
    private Mono<Void> handleUnauthorized(ServerWebExchange exchange) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(HttpStatus.UNAUTHORIZED);
        return response.setComplete();
    }
    
    public static class Config {
        // Configuration properties
    }
}

// 3. Rate Limiting Configuration
@Configuration
public class RateLimitingConfig {
    
    @Bean
    public RedisRateLimiter redisRateLimiter() {
        return new RedisRateLimiter(10, 20, 1);
    }
    
    @Bean
    @Primary
    public KeyResolver userKeyResolver() {
        return exchange -> {
            String userId = exchange.getRequest().getHeaders().getFirst("X-User-ID");
            return Mono.just(userId != null ? userId : "anonymous");
        };
    }
}

// 4. Circuit Breaker Configuration
@Configuration
public class CircuitBreakerConfig {
    
    @Bean
    public Customizer<ReactiveResilience4JCircuitBreakerFactory> defaultCustomizer() {
        return factory -> factory.configureDefault(id -> new Resilience4JConfigBuilder(id)
            .circuitBreakerConfig(CircuitBreakerConfig.custom()
                .slidingWindowSize(10)
                .minimumNumberOfCalls(5)
                .failureRateThreshold(50.0f)
                .waitDurationInOpenState(Duration.ofSeconds(30))
                .build())
            .build());
    }
}

// 5. Fallback Controller
@RestController
@RequestMapping("/fallback")
public class FallbackController {
    
    @GetMapping("/users")
    public ResponseEntity<Map<String, Object>> userServiceFallback() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "User service is currently unavailable");
        response.put("status", "fallback");
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response);
    }
}
    `,
    exercise: `
1) Create a Spring Cloud Gateway application with @SpringBootApplication and @EnableEurekaClient annotations.
2) Configure routing rules in application.yml to route requests to different microservices based on path patterns.
3) Implement a custom GatewayFilter to add request headers for downstream services.
4) Configure rate limiting using Redis for API protection against abuse.
5) Set up CORS configuration in the gateway to allow cross-origin requests from specific domains.
`
  }
};