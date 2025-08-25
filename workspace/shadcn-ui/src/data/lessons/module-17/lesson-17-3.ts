import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_3: LessonContent = {
  title: 'Service Discovery and Configuration',
  type: 'lesson',
  duration: '80 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn service discovery patterns, configuration management, and service registration in microservices architecture using Spring Cloud, Eureka, Consul, and centralized configuration servers.',
    objectives: [
      'Understand service discovery patterns and implementations',
      'Set up service registration and discovery with Eureka',
      'Implement centralized configuration management',
      'Use Spring Cloud Config for distributed configuration',
      'Handle configuration refresh and environment-specific settings',
      'Implement service health checks and load balancing'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Service Discovery and Configuration
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Dynamic service location and centralized configuration management</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Service Discovery Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Service discovery is a mechanism that allows services to find and communicate with each other 
            without hardcoding network locations. In a microservices architecture, services are dynamically 
            deployed and scaled, making static configuration impractical.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Why Service Discovery?</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Dynamic Environment:</strong> Services can be deployed anywhere</li>
              <li>• <strong>Auto-scaling:</strong> Number of service instances changes dynamically</li>
              <li>• <strong>Fault Tolerance:</strong> Failed instances are automatically removed</li>
              <li>• <strong>Load Distribution:</strong> Requests distributed across healthy instances</li>
              <li>• <strong>Zero Downtime:</strong> Rolling deployments without service interruption</li>
              <li>• <strong>Environment Agnostic:</strong> Same code works across environments</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Eliminates hardcoded service locations</li>
                <li>• Enables automatic failover</li>
                <li>• Supports dynamic scaling</li>
                <li>• Simplifies deployment processes</li>
                <li>• Improves system resilience</li>
                <li>• Enables blue-green deployments</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Challenges</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Additional infrastructure complexity</li>
                <li>• Service registry becomes critical component</li>
                <li>• Network partitioning issues</li>
                <li>• Consistency vs availability trade-offs</li>
                <li>• Debugging and monitoring complexity</li>
                <li>• Security considerations</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Service Discovery Patterns
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Client-Side Discovery</h4>
              <p class="text-green-700 mb-3">Client is responsible for determining network locations of available service instances:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">✅ Advantages</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Simple and straightforward</li>
                    <li>• Client has full control over load balancing</li>
                    <li>• No additional network hop</li>
                    <li>• Better performance</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">❌ Disadvantages</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Couples client with service registry</li>
                    <li>• Client-side load balancing logic</li>
                    <li>• Language-specific implementations</li>
                    <li>• More complex client code</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Server-Side Discovery</h4>
              <p class="text-blue-700 mb-3">Client makes requests via a load balancer that queries the service registry:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">✅ Advantages</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Decouples client from service registry</li>
                    <li>• Centralized load balancing</li>
                    <li>• Language agnostic</li>
                    <li>• Simpler client implementation</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">❌ Disadvantages</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Additional network hop</li>
                    <li>• Load balancer becomes bottleneck</li>
                    <li>• More infrastructure to manage</li>
                    <li>• Potential single point of failure</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Service Registry Patterns</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Self-Registration</h5>
                  <p class="text-sm text-gray-700 mb-2">Service instances register themselves</p>
                  <ul class="text-xs space-y-1">
                    <li>• Service controls registration logic</li>
                    <li>• Handles health check reporting</li>
                    <li>• Examples: Eureka, Consul</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Third-Party Registration</h5>
                  <p class="text-sm text-gray-700 mb-2">External system handles registration</p>
                  <ul class="text-xs space-y-1">
                    <li>• Service deployer handles registration</li>
                    <li>• Platform-managed health checks</li>
                    <li>• Examples: Kubernetes, AWS ELB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Netflix Eureka Service Discovery
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Eureka Architecture</h4>
              <p class="text-purple-700 mb-3">Netflix Eureka provides service registration and discovery for Spring Cloud applications:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Components</h5>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Eureka Server</strong>
                    <p class="text-gray-600">Service registry that holds service information</p>
                  </div>
                  <div>
                    <strong>Eureka Client</strong>
                    <p class="text-gray-600">Service instances that register with server</p>
                  </div>
                  <div>
                    <strong>Service Consumer</strong>
                    <p class="text-gray-600">Applications that discover and call services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Eureka Features</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Core Features</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Service registration and deregistration</li>
                    <li>• Health check monitoring</li>
                    <li>• Service instance metadata</li>
                    <li>• Load balancing integration</li>
                    <li>• Failover and recovery</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Advanced Features</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Multi-zone deployment</li>
                    <li>• Self-preservation mode</li>
                    <li>• REST API for service queries</li>
                    <li>• Dashboard for monitoring</li>
                    <li>• Security integration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Eureka Configuration</h4>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-teal-800 mb-2">Key Configuration Properties</h5>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Server Configuration</strong>
                    <ul class="text-xs space-y-1 mt-1">
                      <li>• eureka.server.enable-self-preservation</li>
                      <li>• eureka.server.eviction-interval-timer-in-ms</li>
                      <li>• eureka.server.renewal-percent-threshold</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Client Configuration</strong>
                    <ul class="text-xs space-y-1 mt-1">
                      <li>• eureka.client.service-url.defaultZone</li>
                      <li>• eureka.instance.lease-renewal-interval-in-seconds</li>
                      <li>• eureka.instance.lease-expiration-duration-in-seconds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Centralized Configuration Management
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Configuration Challenges in Microservices</h4>
              <p class="text-orange-700 mb-3">Managing configuration across multiple services presents unique challenges:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">❌ Problems</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Configuration scattered across services</li>
                    <li>• Environment-specific configurations</li>
                    <li>• Configuration drift between environments</li>
                    <li>• Difficulty in updating configurations</li>
                    <li>• Security of sensitive information</li>
                    <li>• Configuration versioning and rollback</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">✅ Solutions</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Centralized configuration server</li>
                    <li>• Environment-based profiles</li>
                    <li>• Configuration encryption</li>
                    <li>• Dynamic configuration refresh</li>
                    <li>• Version control integration</li>
                    <li>• Audit trails and rollback</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Spring Cloud Config</h4>
              <p class="text-blue-700 mb-3">Centralized configuration management solution for distributed systems:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Architecture Components</h5>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Config Server</strong>
                    <ul class="text-xs space-y-1 mt-1">
                      <li>• Centralized configuration repository</li>
                      <li>• REST API for configuration access</li>
                      <li>• Git/SVN backend support</li>
                      <li>• Environment and profile support</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Config Client</strong>
                    <ul class="text-xs space-y-1 mt-1">
                      <li>• Fetches configuration at startup</li>
                      <li>• Supports configuration refresh</li>
                      <li>• Failover and retry mechanisms</li>
                      <li>• Local configuration override</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Configuration Sources</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Git Repository</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Version controlled</li>
                    <li>• Branch-based environments</li>
                    <li>• Audit trail</li>
                    <li>• Collaborative editing</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">File System</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Local file access</li>
                    <li>• Simple deployment</li>
                    <li>• No external dependencies</li>
                    <li>• Limited scalability</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Vault/Database</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Secure secret storage</li>
                    <li>• Dynamic secrets</li>
                    <li>• Access control</li>
                    <li>• Audit logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Configuration Refresh and Management
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Dynamic Configuration Refresh</h4>
              <p class="text-teal-700 mb-3">Update configuration without restarting services:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Manual Refresh</h5>
                  <ul class="text-sm space-y-1">
                    <li>• POST /actuator/refresh endpoint</li>
                    <li>• @RefreshScope annotation</li>
                    <li>• Selective property refresh</li>
                    <li>• Manual trigger required</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-teal-800 mb-2">Automatic Refresh</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Spring Cloud Bus integration</li>
                    <li>• Git webhooks trigger</li>
                    <li>• Message broker propagation</li>
                    <li>• Cluster-wide updates</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Configuration Security</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-2">Encryption</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Symmetric key encryption</li>
                    <li>• Asymmetric key encryption</li>
                    <li>• {cipher} prefix for encrypted values</li>
                    <li>• Key management strategies</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-yellow-800 mb-2">Access Control</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Authentication mechanisms</li>
                    <li>• Role-based access control</li>
                    <li>• Network-level security</li>
                    <li>• Audit logging</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Configuration Best Practices</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Organization</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Use consistent naming conventions</li>
                    <li>Group related configurations</li>
                    <li>Separate environment-specific configs</li>
                    <li>Document configuration properties</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-3">Security</h5>
                  <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Encrypt sensitive information</li>
                    <li>Use secure communication channels</li>
                    <li>Implement proper access controls</li>
                    <li>Regular security audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Load Balancing and Health Checks
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Client-Side Load Balancing</h4>
              <p class="text-red-700 mb-3">Spring Cloud LoadBalancer provides client-side load balancing:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Load Balancing Algorithms</h5>
                  <ul class="text-sm space-y-1">
                    <li>• <strong>Round Robin:</strong> Default algorithm</li>
                    <li>• <strong>Random:</strong> Random selection</li>
                    <li>• <strong>Weighted:</strong> Based on instance weights</li>
                    <li>• <strong>Zone Aware:</strong> Prefer same zone instances</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Health-Based Routing</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Health check integration</li>
                    <li>• Automatic instance removal</li>
                    <li>• Circuit breaker integration</li>
                    <li>• Retry mechanisms</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Health Check Strategies</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Application Health</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Service availability</li>
                    <li>• Database connectivity</li>
                    <li>• External dependencies</li>
                    <li>• Resource utilization</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Infrastructure Health</h5>
                  <ul class="text-xs space-y-1">
                    <li>• CPU and memory usage</li>
                    <li>• Disk space availability</li>
                    <li>• Network connectivity</li>
                    <li>• Container health</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Business Health</h5>
                  <ul class="text-xs space-y-1">
                    <li>• Business logic validation</li>
                    <li>• Data consistency checks</li>
                    <li>• Performance thresholds</li>
                    <li>• SLA compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Service Discovery and Configuration Example

// 1. Eureka Server Configuration
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// Eureka Server application.yml
server:
  port: 8761

eureka:
  instance:
    hostname: localhost
  client:
    register-with-eureka: false
    fetch-registry: false
    service-url:
      defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/
  server:
    enable-self-preservation: false
    eviction-interval-timer-in-ms: 5000

// 2. Spring Cloud Config Server
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}

// Config Server application.yml
server:
  port: 8888

spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/your-org/config-repo
          clone-on-start: true
          default-label: main
        encrypt:
          enabled: true
        health:
          repositories:
            myapp:
              label: main
              name: myapp
              profiles: development,production

encrypt:
  key: mySecretKey

// 3. Microservice with Service Discovery and Config
@SpringBootApplication
@EnableEurekaClient
@EnableConfigurationProperties(AppConfig.class)
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
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}

// Service bootstrap.yml (loaded before application.yml)
spring:
  application:
    name: user-service
  cloud:
    config:
      uri: http://localhost:8888
      fail-fast: true
      retry:
        initial-interval: 1000
        max-attempts: 6
        max-interval: 2000
        multiplier: 1.1

// Service application.yml
server:
  port: 0  # Random port

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
    fetch-registry: true
    register-with-eureka: true
  instance:
    instance-id: \${spring.application.name}:\${spring.application.instance_id:\${random.value}}
    prefer-ip-address: true
    lease-renewal-interval-in-seconds: 30
    lease-expiration-duration-in-seconds: 90

management:
  endpoints:
    web:
      exposure:
        include: health,info,refresh,env
  endpoint:
    health:
      show-details: always

// 4. Configuration Properties with Refresh Support
@ConfigurationProperties(prefix = "app")
@RefreshScope
@Component
@Validated
public class AppConfig {
    
    @NotBlank
    private String name;
    
    @NotBlank
    private String version;
    
    private Database database = new Database();
    private ExternalServices externalServices = new ExternalServices();
    private Features features = new Features();
    
    @RefreshScope
    public static class Database {
        @Min(1)
        private int maxConnections = 10;
        
        @NotBlank
        private String url;
        
        @NotBlank
        private String username;
        
        private String password;
        
        // Getters and setters
        public int getMaxConnections() { return maxConnections; }
        public void setMaxConnections(int maxConnections) { this.maxConnections = maxConnections; }
        
        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
        
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
    }
    
    public static class ExternalServices {
        @NotBlank
        private String orderServiceName = "order-service";
        
        @NotBlank
        private String paymentServiceName = "payment-service";
        
        @Min(1000)
        private int timeout = 5000;
        
        @Min(1)
        private int maxRetries = 3;
        
        // Getters and setters
        public String getOrderServiceName() { return orderServiceName; }
        public void setOrderServiceName(String orderServiceName) { this.orderServiceName = orderServiceName; }
        
        public String getPaymentServiceName() { return paymentServiceName; }
        public void setPaymentServiceName(String paymentServiceName) { this.paymentServiceName = paymentServiceName; }
        
        public int getTimeout() { return timeout; }
        public void setTimeout(int timeout) { this.timeout = timeout; }
        
        public int getMaxRetries() { return maxRetries; }
        public void setMaxRetries(int maxRetries) { this.maxRetries = maxRetries; }
    }
    
    public static class Features {
        private boolean enableCaching = true;
        private boolean enableMetrics = true;
        private boolean enableTracing = false;
        private int cacheSize = 1000;
        
        // Getters and setters
        public boolean isEnableCaching() { return enableCaching; }
        public void setEnableCaching(boolean enableCaching) { this.enableCaching = enableCaching; }
        
        public boolean isEnableMetrics() { return enableMetrics; }
        public void setEnableMetrics(boolean enableMetrics) { this.enableMetrics = enableMetrics; }
        
        public boolean isEnableTracing() { return enableTracing; }
        public void setEnableTracing(boolean enableTracing) { this.enableTracing = enableTracing; }
        
        public int getCacheSize() { return cacheSize; }
        public void setCacheSize(int cacheSize) { this.cacheSize = cacheSize; }
    }
    
    // Main class getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }
    
    public Database getDatabase() { return database; }
    public void setDatabase(Database database) { this.database = database; }
    
    public ExternalServices getExternalServices() { return externalServices; }
    public void setExternalServices(ExternalServices externalServices) { this.externalServices = externalServices; }
    
    public Features getFeatures() { return features; }
    public void setFeatures(Features features) { this.features = features; }
}

// 5. Service Discovery Client
@Component
@Slf4j
public class OrderServiceClient {
    
    private final RestTemplate restTemplate;
    private final DiscoveryClient discoveryClient;
    private final AppConfig appConfig;
    
    public OrderServiceClient(RestTemplate restTemplate,
                             DiscoveryClient discoveryClient,
                             AppConfig appConfig) {
        this.restTemplate = restTemplate;
        this.discoveryClient = discoveryClient;
        this.appConfig = appConfig;
    }
    
    public List<OrderDto> getUserOrders(String userId) {
        String serviceName = appConfig.getExternalServices().getOrderServiceName();
        
        // Get service instances from Eureka
        List<ServiceInstance> instances = discoveryClient.getInstances(serviceName);
        if (instances.isEmpty()) {
            throw new ServiceUnavailableException("No instances available for " + serviceName);
        }
        
        // Use load-balanced RestTemplate (automatically handles service discovery)
        String url = "http://" + serviceName + "/api/orders/user/" + userId;
        
        try {
            ResponseEntity<List<OrderDto>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<OrderDto>>() {}
            );
            
            return response.getBody();
        } catch (Exception e) {
            log.error("Failed to fetch orders for user: {}", userId, e);
            throw new ServiceCommunicationException("Order service unavailable", e);
        }
    }
    
    // Alternative: Using WebClient with service discovery
    @Autowired
    private WebClient.Builder webClientBuilder;
    
    public Mono<List<OrderDto>> getUserOrdersReactive(String userId) {
        String serviceName = appConfig.getExternalServices().getOrderServiceName();
        String url = "http://" + serviceName + "/api/orders/user/" + userId;
        
        return webClientBuilder.build()
            .get()
            .uri(url)
            .retrieve()
            .bodyToMono(new ParameterizedTypeReference<List<OrderDto>>() {})
            .timeout(Duration.ofMillis(appConfig.getExternalServices().getTimeout()))
            .retry(appConfig.getExternalServices().getMaxRetries())
            .onErrorMap(WebClientException.class,
                ex -> new ServiceCommunicationException("Order service unavailable", ex));
    }
}

// 6. Configuration Refresh Controller
@RestController
@RequestMapping("/api/config")
@RefreshScope
public class ConfigController {
    
    private final AppConfig appConfig;
    
    public ConfigController(AppConfig appConfig) {
        this.appConfig = appConfig;
    }
    
    @GetMapping("/current")
    public ResponseEntity<AppConfig> getCurrentConfig() {
        return ResponseEntity.ok(appConfig);
    }
    
    @PostMapping("/refresh")
    public ResponseEntity<Map<String, String>> refreshConfig() {
        // This endpoint can be used to trigger manual refresh
        // In practice, you'd use /actuator/refresh
        Map<String, String> response = new HashMap<>();
        response.put("message", "Configuration refresh triggered");
        response.put("timestamp", Instant.now().toString());
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/features")
    public ResponseEntity<AppConfig.Features> getFeatures() {
        return ResponseEntity.ok(appConfig.getFeatures());
    }
}

// 7. Custom Health Indicator for External Services
@Component
public class ExternalServicesHealthIndicator implements HealthIndicator {
    
    private final DiscoveryClient discoveryClient;
    private final AppConfig appConfig;
    
    public ExternalServicesHealthIndicator(DiscoveryClient discoveryClient,
                                         AppConfig appConfig) {
        this.discoveryClient = discoveryClient;
        this.appConfig = appConfig;
    }
    
    @Override
    public Health health() {
        Health.Builder builder = new Health.Builder();
        
        try {
            // Check order service availability
            String orderServiceName = appConfig.getExternalServices().getOrderServiceName();
            List<ServiceInstance> orderInstances = discoveryClient.getInstances(orderServiceName);
            
            if (!orderInstances.isEmpty()) {
                builder.withDetail("orderService",
                    Map.of("status", "UP", "instances", orderInstances.size()));
            } else {
                builder.withDetail("orderService",
                    Map.of("status", "DOWN", "instances", 0));
            }
            
            // Check payment service availability
            String paymentServiceName = appConfig.getExternalServices().getPaymentServiceName();
            List<ServiceInstance> paymentInstances = discoveryClient.getInstances(paymentServiceName);
            
            if (!paymentInstances.isEmpty()) {
                builder.withDetail("paymentService",
                    Map.of("status", "UP", "instances", paymentInstances.size()));
            } else {
                builder.withDetail("paymentService",
                    Map.of("status", "DOWN", "instances", 0));
            }
            
            // Overall health based on critical services
            if (!orderInstances.isEmpty() && !paymentInstances.isEmpty()) {
                builder.up();
            } else {
                builder.down();
            }
            
        } catch (Exception e) {
            builder.down().withException(e);
        }
        
        return builder.build();
    }
}

// 8. Load Balancer Configuration
@Configuration
public class LoadBalancerConfig {
    
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        
        // Add interceptors for logging
        restTemplate.getInterceptors().add(new LoggingInterceptor());
        
        // Configure timeout
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
        factory.setConnectTimeout(5000);
        factory.setReadTimeout(5000);
        restTemplate.setRequestFactory(factory);
        
        return restTemplate;
    }
    
    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder()
            .filter(ExchangeFilterFunction.ofRequestProcessor(
                clientRequest -> {
                    log.info("Request: {} {}", clientRequest.method(), clientRequest.url());
                    return Mono.just(clientRequest);
                }))
            .filter(ExchangeFilterFunction.ofResponseProcessor(
                clientResponse -> {
                    log.info("Response: {}", clientResponse.statusCode());
                    return Mono.just(clientResponse);
                }));
    }
    
    // Custom load balancer configuration
    @Bean
    public ReactorLoadBalancer<ServiceInstance> reactorServiceInstanceLoadBalancer(
            Environment environment,
            LoadBalancerClientFactory loadBalancerClientFactory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RoundRobinLoadBalancer(
            loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),
            name);
    }
}

// 9. Service Registration Event Listener
@Component
@Slf4j
public class ServiceRegistrationEventListener {
    
    @EventListener
    public void handleInstanceRegistered(InstanceRegisteredEvent<?> event) {
        log.info("Service instance registered: {}", event.getConfig());
    }
    
    @EventListener
    public void handleHeartbeat(HeartbeatEvent event) {
        log.debug("Heartbeat received: {}", event.getValue());
    }
    
    @EventListener
    public void handleRefresh(RefreshRemoteApplicationEvent event) {
        log.info("Configuration refresh event received from: {}", event.getOriginService());
    }
}

// 10. Integration Test with TestContainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Testcontainers
public class ServiceDiscoveryIntegrationTest {
    
    @Container
    static GenericContainer<?> eurekaServer = new GenericContainer<>("springcloud/eureka:latest")
            .withExposedPorts(8761)
            .withEnv("EUREKA_CLIENT_REGISTER_WITH_EUREKA", "false")
            .withEnv("EUREKA_CLIENT_FETCH_REGISTRY", "false");
    
    @Autowired
    private DiscoveryClient discoveryClient;
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("eureka.client.service-url.defaultZone",
            () -> "http://localhost:" + eurekaServer.getMappedPort(8761) + "/eureka/");
    }
    
    @Test
    void shouldRegisterWithEureka() {
        // Wait for service registration
        await().atMost(30, TimeUnit.SECONDS)
            .until(() -> !discoveryClient.getInstances("user-service").isEmpty());
        
        List<ServiceInstance> instances = discoveryClient.getInstances("user-service");
        assertThat(instances).isNotEmpty();
        
        ServiceInstance instance = instances.get(0);
        assertThat(instance.getServiceId()).isEqualTo("user-service");
        assertThat(instance.getHost()).isNotNull();
        assertThat(instance.getPort()).isGreaterThan(0);
    }
    
    @Test
    void shouldLoadBalanceRequests() {
        // Test load balancing behavior
        String serviceName = "user-service";
        List<ServiceInstance> instances = discoveryClient.getInstances(serviceName);
        
        assertThat(instances).isNotEmpty();
        
        // Make multiple requests and verify distribution
        for (int i = 0; i < 10; i++) {
            ResponseEntity<String> response = restTemplate.getForEntity(
                "http://" + serviceName + "/api/users/info", String.class);
            assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        }
    }
}
    `,
    exercise: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Build Service Discovery Infrastructure
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Set up complete service discovery and configuration management infrastructure for a microservices ecosystem</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Setup Eureka Server
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📋 Eureka Server Requirements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Core Features</h5>
                <ul class="text-sm space-y-1">
                  <li>• Service registry and discovery</li>
                  <li>• Health check monitoring</li>
                  <li>• Self-preservation mode</li>
                  <li>• Multi-zone support</li>
                  <li>• REST API for service queries</li>
                  <li>• Web dashboard for monitoring</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Configuration</h5>
                <ul class="text-sm space-y-1">
                  <li>• Port: 8761 (default)</li>
                  <li>• Disable self-registration</li>
                  <li>• Configure eviction intervals</li>
                  <li>• Set renewal thresholds</li>
                  <li>• Enable/disable self-preservation</li>
                  <li>• Configure peer awareness</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Implementation Tasks</h4>
            <pre class="text-sm">
1. Create Eureka Server Spring Boot application
2. Add @EnableEurekaServer annotation
3. Configure application.yml with server settings
4. Disable client registration for server
5. Configure self-preservation mode
6. Set up health check intervals
7. Test server startup and dashboard access</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Setup Spring Cloud Config Server
          </h2>
          
          <div class="bg-green-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 Config Server Setup</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Git Repository Structure</h5>
                <ul class="text-sm space-y-1">
                  <li>• application.yml (default config)</li>
                  <li>• application-dev.yml</li>
                  <li>• application-prod.yml</li>
                  <li>• user-service.yml</li>
                  <li>• order-service.yml</li>
                  <li>• payment-service.yml</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-green-800 mb-2">Configuration Features</h5>
                <ul class="text-sm space-y-1">
                  <li>• Environment-specific profiles</li>
                  <li>• Encrypted sensitive properties</li>
                  <li>• Service-specific configurations</li>
                  <li>• Default fallback values</li>
                  <li>• Health check endpoints</li>
                  <li>• Refresh capabilities</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Configuration Repository Structure</h4>
            <pre class="text-sm">
config-repo/
├── application.yml              # Default configuration
├── application-dev.yml          # Development environment
├── application-prod.yml         # Production environment
├── user-service.yml            # User service specific
├── user-service-dev.yml        # User service dev config
├── order-service.yml           # Order service specific
├── payment-service.yml         # Payment service specific
└── gateway-service.yml         # API Gateway specific

Sample application.yml:
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/

management:
  endpoints:
    web:
      exposure:
        include: health,info,refresh</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Create Multiple Microservices
          </h2>
          
          <div class="bg-purple-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🔄 Services to Implement</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">User Service</h5>
                <ul class="text-sm space-y-1">
                  <li>• User CRUD operations</li>
                  <li>• Service discovery registration</li>
                  <li>• Configuration from config server</li>
                  <li>• Health check endpoints</li>
                  <li>• Load balanced client calls</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-purple-800 mb-2">Order Service</h5>
                <ul class="text-sm space-y-1">
                  <li>• Order management operations</li>
                  <li>• Call user service for validation</li>
                  <li>• Dynamic configuration refresh</li>
                  <li>• Circuit breaker implementation</li>
                  <li>• Custom health indicators</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Service Implementation Requirements</h4>
            <pre class="text-sm">
Each service must implement:

1. Service Registration
   - @EnableEurekaClient annotation
   - Unique application name
   - Instance ID configuration
   - Health check endpoints

2. Configuration Management
   - bootstrap.yml for config server connection
   - @ConfigurationProperties classes
   - @RefreshScope for dynamic refresh
   - Environment-specific profiles

3. Service Communication
   - @LoadBalanced RestTemplate
   - Service discovery client
   - Circuit breaker patterns
   - Retry mechanisms

4. Monitoring and Health
   - Actuator endpoints
   - Custom health indicators
   - Metrics collection
   - Distributed tracing preparation</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Implement Service Communication
          </h2>
          
          <div class="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-orange-800 mb-2">📊 Communication Patterns</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Synchronous Communication</h5>
                <ul class="text-sm space-y-1">
                  <li>• RestTemplate with @LoadBalanced</li>
                  <li>• WebClient for reactive calls</li>
                  <li>• Service name-based URLs</li>
                  <li>• Automatic load balancing</li>
                  <li>• Circuit breaker integration</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-orange-800 mb-2">Error Handling</h5>
                <ul class="text-sm space-y-1">
                  <li>• Service unavailable scenarios</li>
                  <li>• Timeout configurations</li>
                  <li>• Retry with exponential backoff</li>
                  <li>• Fallback mechanisms</li>
                  <li>• Graceful degradation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Communication Implementation</h4>
            <pre class="text-sm">
Example: Order Service calling User Service

@Component
public class UserServiceClient {
    
    @Autowired
    @LoadBalanced
    private RestTemplate restTemplate;
    
    public UserDto getUser(String userId) {
        String url = "http://user-service/api/users/" + userId;
        return restTemplate.getForObject(url, UserDto.class);
    }
    
    // With error handling
    public Optional&lt;UserDto&gt; getUserSafely(String userId) {
        try {
            String url = "http://user-service/api/users/" + userId;
            UserDto user = restTemplate.getForObject(url, UserDto.class);
            return Optional.ofNullable(user);
        } catch (Exception e) {
            log.error("Failed to fetch user: {}", userId, e);
            return Optional.empty();
        }
    }
}</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Testing and Monitoring
          </h2>
          
          <div class="bg-red-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-red-800 mb-2">🧪 Testing Strategy</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Unit Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Service layer testing</li>
                  <li>• Configuration binding tests</li>
                  <li>• Mock external services</li>
                  <li>• Health indicator tests</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Integration Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• Service discovery tests</li>
                  <li>• Configuration refresh tests</li>
                  <li>• Load balancing tests</li>
                  <li>• End-to-end scenarios</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-red-800 mb-2">Contract Tests</h5>
                <ul class="text-sm space-y-1">
                  <li>• API contract validation</li>
                  <li>• Service interface tests</li>
                  <li>• Configuration schema tests</li>
                  <li>• Backward compatibility</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-yellow-800 mb-2">📊 Monitoring Requirements</h4>
            <ul class="text-yellow-700 space-y-2">
              <li>• Service registration/deregistration events</li>
              <li>• Health check status monitoring</li>
              <li>• Configuration change tracking</li>
              <li>• Service communication metrics</li>
              <li>• Load balancing distribution</li>
              <li>• Error rates and response times</li>
            </ul>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Testing Checklist</h4>
            <pre class="text-sm">
□ Eureka server starts and dashboard accessible
□ Services register with Eureka successfully
□ Configuration server serves configurations
□ Services fetch configuration from config server
□ Load balancing works across service instances
□ Health checks report correct status
□ Configuration refresh works without restart
□ Service discovery handles instance failures
□ Circuit breakers activate on service failures
□ Monitoring and metrics collection working</pre>
          </div>
        </section>

        <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-purple-100">
            After completing this exercise, you'll have built a complete service discovery and configuration
            management infrastructure that supports dynamic service registration, centralized configuration,
            and resilient service communication patterns.
          </p>
        </div>
      </div>
    `
  }
};