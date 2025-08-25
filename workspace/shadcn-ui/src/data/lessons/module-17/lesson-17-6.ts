import { LessonContent } from '../../types/LessonTypes';

export const lesson_17_6: LessonContent = {
  title: 'Containerization with Docker',
  type: 'lesson',
  duration: '95 min',
  module: 'Microservices and Cloud',
  content: {
    overview: 'Learn containerization fundamentals with Docker, creating efficient Docker images for Java microservices, multi-stage builds, Docker Compose for local development, and best practices for containerized applications.',
    objectives: [
      'Understand containerization concepts and Docker architecture',
      'Create optimized Docker images for Java applications',
      'Implement multi-stage Docker builds',
      'Use Docker Compose for multi-service applications',
      'Apply container security best practices',
      'Manage container networking and volumes',
      'Deploy containers to cloud platforms'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Containerization with Docker
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Packaging and deploying microservices with containers</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Docker Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Docker is a containerization platform that enables developers to package applications 
            and their dependencies into lightweight, portable containers that can run consistently 
            across different environments.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Docker Concepts</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Images:</strong> Read-only templates used to create containers</li>
              <li>• <strong>Containers:</strong> Runnable instances of images</li>
              <li>• <strong>Dockerfile:</strong> Text file with instructions to build images</li>
              <li>• <strong>Registry:</strong> Storage for Docker images (Docker Hub, private registries)</li>
              <li>• <strong>Daemon:</strong> Background service that manages Docker objects</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Container Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Consistent environments across dev, test, prod</li>
                <li>• Efficient resource utilization</li>
                <li>• Fast startup and deployment</li>
                <li>• Isolation between applications</li>
                <li>• Simplified dependency management</li>
                <li>• Easy scaling and orchestration</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Container Challenges</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Learning curve for new concepts</li>
                <li>• Image size optimization</li>
                <li>• Security considerations</li>
                <li>• Networking complexity</li>
                <li>• Persistent data handling</li>
                <li>• Debugging in containers</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Docker Architecture
          </h2>
          
          <div class="space-y-6">
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">Docker Components</h4>
              <p class="text-cyan-700 mb-3">Docker follows a client-server architecture with several key components:</p>
              <div class="bg-white p-4 rounded border">
                <h5 class="font-bold text-cyan-800 mb-2">Core Architecture</h5>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Docker Client</strong>
                    <p class="text-gray-600">CLI interface for users</p>
                  </div>
                  <div>
                    <strong>Docker Daemon</strong>
                    <p class="text-gray-600">Background service</p>
                  </div>
                  <div>
                    <strong>Docker Registry</strong>
                    <p class="text-gray-600">Image storage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Container Lifecycle</h4>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded border">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left">Stage</th>
                      <th class="py-2 px-4 text-left">Command</th>
                      <th class="py-2 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Build</td>
                      <td class="py-2 px-4">docker build</td>
                      <td class="py-2 px-4">Create image from Dockerfile</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Run</td>
                      <td class="py-2 px-4">docker run</td>
                      <td class="py-2 px-4">Create and start container</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Stop</td>
                      <td class="py-2 px-4">docker stop</td>
                      <td class="py-2 px-4">Gracefully stop container</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 px-4 font-medium">Remove</td>
                      <td class="py-2 px-4">docker rm</td>
                      <td class="py-2 px-4">Delete container</td>
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
            Dockerfile Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Optimization Techniques</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Layer Caching</h5>
                  <p class="text-sm text-gray-700 mb-2">Order instructions to maximize cache reuse</p>
                  <ul class="text-xs space-y-1">
                    <li>• Place infrequently changing layers first</li>
                    <li>• Combine related RUN commands</li>
                    <li>• Use .dockerignore to exclude files</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Multi-stage Builds</h5>
                  <p class="text-sm text-gray-700 mb-2">Reduce final image size with multiple stages</p>
                  <ul class="text-xs space-y-1">
                    <li>• Separate build and runtime environments</li>
                    <li>• Copy only necessary artifacts</li>
                    <li>• Use different base images per stage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Docker Compose
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Multi-Service Orchestration</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Benefits</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Define multi-container applications</li>
                    <li>• Single command deployment</li>
                    <li>• Environment-specific configurations</li>
                    <li>• Service dependencies management</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">Key Features</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Service definitions</li>
                    <li>• Network configuration</li>
                    <li>• Volume management</li>
                    <li>• Environment variables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
// Complete Docker Implementation for Microservices

// 1. Basic Dockerfile for Spring Boot Application
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy JAR file
COPY target/*.jar app.jar

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run application
ENTRYPOINT ["java", "-jar", "app.jar"]

// 2. Optimized Multi-stage Dockerfile
# Build stage
FROM maven:3.8.4-openjdk-17 AS builder

# Set working directory
WORKDIR /build

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build application
RUN mvn clean package -DskipTests

# Runtime stage
FROM openjdk:17-jre-slim

# Set working directory
WORKDIR /app

# Create non-root user
RUN addgroup --system spring && adduser --system spring --ingroup spring

# Copy JAR from builder stage
COPY --from=builder /build/target/*.jar app.jar

# Change ownership
RUN chown spring:spring app.jar

# Switch to non-root user
USER spring

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run application
ENTRYPOINT ["java", "-jar", "app.jar"]

// 3. Docker Compose for Microservices
version: '3.8'

services:
  # Service Registry
  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
    networks:
      - microservices-network

  # API Gateway
  api-gateway:
    build: ./api-gateway
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka
    depends_on:
      - eureka-server
    networks:
      - microservices-network

  # User Service
  user-service:
    build: ./user-service
    ports:
      - "8081:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/users
    depends_on:
      - eureka-server
      - postgres
    networks:
      - microservices-network

  # Order Service
  order-service:
    build: ./order-service
    ports:
      - "8082:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/orders
    depends_on:
      - eureka-server
      - postgres
    networks:
      - microservices-network

  # Product Service
  product-service:
    build: ./product-service
    ports:
      - "8083:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/products
    depends_on:
      - eureka-server
      - postgres
    networks:
      - microservices-network

  # PostgreSQL Database
  postgres:
    image: postgres:14
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=microservices
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - microservices-network

  # Redis for Caching
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - microservices-network

networks:
  microservices-network:
    driver: bridge

volumes:
  postgres_data:

// 4. .dockerignore File
# Build artifacts
target/
!target/*.jar
target/classes/

# IDE files
.idea/
.vscode/
*.swp
*.swo

# OS generated files
.DS_Store
Thumbs.db

# Maven
.mvn/wrapper/maven-wrapper.properties

// 5. Dockerfile for Development
FROM openjdk:17-jdk-slim

# Install Maven
RUN apt-get update && apt-get install -y maven && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run in development mode with auto-reload
ENTRYPOINT ["mvn", "spring-boot:run"]

// 6. Production Dockerfile with Security
FROM openjdk:17-jre-slim

# Security updates and cleanup
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Set working directory
WORKDIR /app

# Copy application
COPY --chown=appuser:appuser target/*.jar app.jar

# Switch to non-root user
USER appuser

# Security hardening
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:8080/actuator/health || exit 1

# Run application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Exercise: Containerize a Microservices Architecture
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Create Docker images and Docker Compose configuration for a complete microservices system</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            System Architecture
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📋 System Components</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Microservices</h5>
                <ul class="text-sm space-y-1">
                  <li>• Eureka Server (Service Registry)</li>
                  <li>• API Gateway (Spring Cloud Gateway)</li>
                  <li>• User Service (User management)</li>
                  <li>• Order Service (Order processing)</li>
                  <li>• Product Service (Product catalog)</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-blue-800 mb-2">Infrastructure</h5>
                <ul class="text-sm space-y-1">
                  <li>• PostgreSQL (Database)</li>
                  <li>• Redis (Caching)</li>
                  <li>• Zipkin (Distributed tracing)</li>
                  <li>• Prometheus (Monitoring)</li>
                  <li>• Grafana (Visualization)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 text-green-400 p-4 rounded-lg">
            <h4 class="text-white mb-2">💡 Implementation Tasks</h4>
            <pre class="text-sm">
1. Create optimized Dockerfiles for each service
2. Implement multi-stage builds for smaller images
3. Configure Docker Compose for local development
4. Set up networking between services
5. Configure health checks for all services
6. Implement persistent volumes for databases
7. Add security best practices (non-root users)
8. Test container communication and service discovery</pre>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Docker Configuration Requirements
          </h2>
          
          <div class="bg-cyan-50 p-4 rounded-lg mb-4">
            <h4 class="font-bold text-cyan-800 mb-2">🔧 Configuration Elements</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-cyan-800 mb-2">Dockerfiles</h5>
                <ul class="text-sm space-y-1">
                  <li>• Multi-stage builds for efficiency</li>
                  <li>• Proper base images selection</li>
                  <li>• Security hardening measures</li>
                  <li>• Health check implementations</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded border">
                <h5 class="font-bold text-cyan-800 mb-2">Docker Compose</h5>
                <ul class="text-sm space-y-1">
                  <li>• Service dependencies</li>
                  <li>• Environment variables</li>
                  <li>• Network configurations</li>
                  <li>• Volume management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg mt-8">
          <h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>
          <p class="text-blue-100">
            After completing this exercise, you'll have containerized a complete microservices 
            architecture with proper networking, security, and monitoring configurations.
          </p>
        </div>
      </div>
    `
  }
};