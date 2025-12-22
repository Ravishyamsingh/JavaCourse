import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_6: LessonContent = {
  title: 'Multi-module Projects',
  type: 'lesson',
  duration: '40 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Master the art of organizing large-scale applications using multi-module project structures. Learn how to design, configure, and manage complex projects with multiple interconnected modules using both Maven and Gradle, including dependency management, build coordination, and best practices for modular architecture.',
    objectives: [
      'Understand the benefits and challenges of multi-module projects',
      'Learn to design effective module hierarchies and dependencies',
      'Master Maven multi-module project configuration',
      'Explore Gradle multi-project builds and subprojects',
      'Implement inter-module dependency management',
      'Configure shared build logic and plugin management',
      'Apply best practices for modular project architecture'
    ],
    theory: `
      <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Multi-module Projects
        </h1>
        <p class="mt-3 text-teal-100 text-lg">Organizing complex applications with modular architecture</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Multi-module Architecture Benefits
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">🏗️ Why Multi-module Projects?</h4>
              <p class="text-teal-700 mb-3">Multi-module projects provide structure and organization for complex applications:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">✅ Advantages</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Separation of Concerns:</strong> Clear module boundaries</li>
                    <li>• <strong>Reusability:</strong> Modules can be shared across projects</li>
                    <li>• <strong>Parallel Development:</strong> Teams work on different modules</li>
                    <li>• <strong>Incremental Builds:</strong> Only changed modules rebuild</li>
                    <li>• <strong>Dependency Management:</strong> Clear inter-module dependencies</li>
                    <li>• <strong>Testing Isolation:</strong> Module-specific test suites</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">⚠️ Challenges</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Complexity:</strong> More complex build configuration</li>
                    <li>• <strong>Dependency Hell:</strong> Complex inter-module dependencies</li>
                    <li>• <strong>Version Management:</strong> Coordinating module versions</li>
                    <li>• <strong>Build Time:</strong> Potentially longer build times</li>
                    <li>• <strong>IDE Support:</strong> May require IDE-specific configuration</li>
                    <li>• <strong>Learning Curve:</strong> Steeper learning curve for developers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Common Module Patterns</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Layered Architecture</h5>
                  <ul class="space-y-1 text-gray-700 text-xs">
                    <li>• presentation-layer</li>
                    <li>• business-layer</li>
                    <li>• data-layer</li>
                    <li>• common-utils</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Feature-based</h5>
                  <ul class="space-y-1 text-gray-700 text-xs">
                    <li>• user-management</li>
                    <li>• order-processing</li>
                    <li>• payment-gateway</li>
                    <li>• notification-service</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Component-based</h5>
                  <ul class="space-y-1 text-gray-700 text-xs">
                    <li>• core-api</li>
                    <li>• web-ui</li>
                    <li>• mobile-api</li>
                    <li>• shared-models</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Maven Multi-module Projects
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">📁 Maven Multi-module Structure</h4>
              <p class="text-purple-700 mb-3">Typical Maven multi-module project layout:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
my-enterprise-app/
├── pom.xml                          # Parent POM
├── README.md
├── .gitignore
├── common/                          # Shared utilities module
│   ├── pom.xml
│   └── src/
│       ├── main/java/com/example/common/
│       └── test/java/com/example/common/
├── core-api/                        # Core business logic
│   ├── pom.xml
│   └── src/
│       ├── main/java/com/example/core/
│       └── test/java/com/example/core/
├── web-service/                     # REST API module
│   ├── pom.xml
│   └── src/
│       ├── main/java/com/example/web/
│       ├── main/resources/
│       └── test/java/com/example/web/
├── web-ui/                          # Frontend module
│   ├── pom.xml
│   └── src/
│       ├── main/webapp/
│       └── test/
└── integration-tests/               # End-to-end tests
    ├── pom.xml
    └── src/
        └── test/java/com/example/integration/</pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📋 Parent POM Configuration</h4>
              <p class="text-green-700 mb-3">The parent POM coordinates all modules:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Parent project coordinates -->
    <groupId>com.example</groupId>
    <artifactId>enterprise-app-parent</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>
    
    <name>Enterprise Application</name>
    <description>Multi-module enterprise application</description>
    
    <!-- Module declarations -->
    <modules>
        <module>common</module>
        <module>core-api</module>
        <module>web-service</module>
        <module>web-ui</module>
        <module>integration-tests</module>
    </modules>
    
    <!-- Shared properties -->
    <properties>
        <java.version>17</java.version>
        <maven.compiler.source>\${java.version}</maven.compiler.source>
        <maven.compiler.target>\${java.version}</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        
        <!-- Dependency versions -->
        <spring-boot.version>3.0.2</spring-boot.version>
        <junit.version>5.9.2</junit.version>
        <mockito.version>5.1.1</mockito.version>
    </properties>
    
    <!-- Dependency management for all modules -->
    <dependencyManagement>
        <dependencies>
            <!-- Spring Boot BOM -->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>\${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            
            <!-- Internal module dependencies -->
            <dependency>
                <groupId>\${project.groupId}</groupId>
                <artifactId>common</artifactId>
                <version>\${project.version}</version>
            </dependency>
            
            <dependency>
                <groupId>\${project.groupId}</groupId>
                <artifactId>core-api</artifactId>
                <version>\${project.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
    
    <!-- Plugin management for all modules -->
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.11.0</version>
                    <configuration>
                        <source>\${maven.compiler.source}</source>
                        <target>\${maven.compiler.target}</target>
                    </configuration>
                </plugin>
                
                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                    <version>\${spring-boot.version}</version>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>
</project></pre>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">🔗 Module POM Example</h4>
              <p class="text-yellow-700 mb-3">Individual module POM configuration:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <!-- Parent reference -->
    <parent>
        <groupId>com.example</groupId>
        <artifactId>enterprise-app-parent</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>
    
    <!-- Module-specific coordinates -->
    <artifactId>web-service</artifactId>
    <packaging>jar</packaging>
    
    <name>Web Service Module</name>
    <description>REST API web service</description>
    
    <!-- Module-specific dependencies -->
    <dependencies>
        <!-- Internal module dependency -->
        <dependency>
            <groupId>\${project.groupId}</groupId>
            <artifactId>common</artifactId>
        </dependency>
        
        <dependency>
            <groupId>\${project.groupId}</groupId>
            <artifactId>core-api</artifactId>
        </dependency>
        
        <!-- External dependencies (versions managed by parent) -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <!-- Module-specific build configuration -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project></pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Gradle Multi-project Builds
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">⚡ Gradle Multi-project Structure</h4>
              <p class="text-green-700 mb-3">Gradle multi-project build organization:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
my-enterprise-app/
├── build.gradle                     # Root build script
├── settings.gradle                  # Project settings
├── gradle.properties               # Global properties
├── gradlew / gradlew.bat           # Gradle wrapper
├── gradle/wrapper/                 # Wrapper files
├── common/                         # Shared utilities subproject
│   ├── build.gradle
│   └── src/
├── core-api/                       # Core business logic
│   ├── build.gradle
│   └── src/
├── web-service/                    # REST API subproject
│   ├── build.gradle
│   └── src/
├── web-ui/                         # Frontend subproject
│   ├── build.gradle
│   └── src/
└── integration-tests/              # End-to-end tests
    ├── build.gradle
    └── src/</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">⚙️ Settings.gradle Configuration</h4>
              <p class="text-blue-700 mb-3">Define project structure and subprojects:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// settings.gradle
rootProject.name = 'enterprise-app'

// Include all subprojects
include 'common'
include 'core-api'
include 'web-service'
include 'web-ui'
include 'integration-tests'

// Optional: Configure subproject directories
project(':common').projectDir = file('common')
project(':core-api').projectDir = file('core-api')
project(':web-service').projectDir = file('web-service')
project(':web-ui').projectDir = file('web-ui')
project(':integration-tests').projectDir = file('integration-tests')

// Plugin management for all subprojects
pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }
}

// Dependency resolution management
dependencyResolutionManagement {
    repositories {
        mavenCentral()
        gradlePluginPortal()
    }
}</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🔧 Root Build.gradle</h4>
              <p class="text-indigo-700 mb-3">Shared configuration for all subprojects:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Root build.gradle
plugins {
    id 'java' apply false
    id 'org.springframework.boot' version '3.0.2' apply false
    id 'io.spring.dependency-management' version '1.1.0' apply false
}

// Configuration applied to all subprojects
allprojects {
    group = 'com.example'
    version = '1.0.0-SNAPSHOT'
    
    repositories {
        mavenCentral()
    }
}

// Configuration applied to all subprojects except root
subprojects {
    apply plugin: 'java'
    apply plugin: 'io.spring.dependency-management'
    
    java {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    
    // Common dependencies for all subprojects
    dependencies {
        implementation 'org.slf4j:slf4j-api'
        
        testImplementation 'org.junit.jupiter:junit-jupiter'
        testImplementation 'org.mockito:mockito-core'
        testImplementation 'org.assertj:assertj-core'
    }
    
    // Common test configuration
    test {
        useJUnitPlatform()
        testLogging {
            events 'passed', 'skipped', 'failed'
        }
    }
    
    // Dependency management for all subprojects
    dependencyManagement {
        imports {
            mavenBom 'org.springframework.boot:spring-boot-dependencies:3.0.2'
        }
    }
}

// Task to build all subprojects
task buildAll {
    dependsOn subprojects.collect { it.tasks.named('build') }
    group = 'build'
    description = 'Build all subprojects'
}

// Task to clean all subprojects
task cleanAll {
    dependsOn subprojects.collect { it.tasks.named('clean') }
    group = 'build'
    description = 'Clean all subprojects'
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Inter-module Dependencies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🔗 Gradle Subproject Dependencies</h4>
              <p class="text-orange-700 mb-3">Configure dependencies between subprojects:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// web-service/build.gradle
plugins {
    id 'org.springframework.boot'
    id 'java'
}

dependencies {
    // Internal project dependencies
    implementation project(':common')
    implementation project(':core-api')
    
    // External dependencies
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    
    // Test dependencies
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation project(':common').sourceSets.test.output
}

// core-api/build.gradle
dependencies {
    // Depends on common utilities
    implementation project(':common')
    
    // External dependencies
    implementation 'org.springframework.boot:spring-boot-starter'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    
    // Test dependencies
    testImplementation project(':common').sourceSets.test.output
}

// integration-tests/build.gradle
dependencies {
    // Depends on all other modules for integration testing
    testImplementation project(':common')
    testImplementation project(':core-api')
    testImplementation project(':web-service')
    
    // Test-specific dependencies
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.testcontainers:junit-jupiter'
    testImplementation 'org.testcontainers:postgresql'
}</pre>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">📊 Dependency Graph Visualization</h4>
              <p class="text-red-700 mb-3">Understanding module relationships:</p>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm">
Dependency Graph:
┌─────────────────┐
│   common        │ ← Base utilities (no dependencies)
└─────────────────┘
         ↑
┌─────────────────┐
│   core-api      │ ← Business logic (depends on common)
└─────────────────┘
         ↑
┌─────────────────┐
│  web-service    │ ← REST API (depends on core-api, common)
└─────────────────┘
         ↑
┌─────────────────┐
│  web-ui         │ ← Frontend (depends on web-service)
└─────────────────┘
         ↑
┌─────────────────┐
│integration-tests│ ← E2E tests (depends on all modules)
└─────────────────┘</pre>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Avoiding Circular Dependencies</h4>
              <p class="text-yellow-700 mb-3">Best practices for dependency management:</p>
              <ul class="space-y-2 text-yellow-700 text-sm">
                <li>• <strong>Layered Architecture:</strong> Dependencies flow in one direction</li>
                <li>• <strong>Common Module:</strong> Shared utilities at the bottom layer</li>
                <li>• <strong>Interface Segregation:</strong> Use interfaces to break tight coupling</li>
                <li>• <strong>Dependency Inversion:</strong> Depend on abstractions, not concretions</li>
                <li>• <strong>Event-driven Communication:</strong> Use events for loose coupling</li>
                <li>• <strong>Shared Libraries:</strong> Extract common functionality to separate libraries</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Build Coordination and Optimization
          </h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🚀 Parallel Builds</h4>
              <p class="text-blue-700 mb-3">Optimize build performance with parallel execution:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// gradle.properties
# Enable parallel builds
org.gradle.parallel=true

# Configure build cache
org.gradle.caching=true

# Optimize JVM settings
org.gradle.jvmargs=-Xmx4g -XX:MaxMetaspaceSize=1g -XX:+UseG1GC

# Configure daemon
org.gradle.daemon=true
org.gradle.configureondemand=true

// Root build.gradle - Configure parallel execution
subprojects {
    // Enable parallel test execution
    test {
        maxParallelForks = Runtime.runtime.availableProcessors().intdiv(2) ?: 1
        forkEvery = 100
    }
}

// Custom task for parallel module builds
task buildModulesInParallel {
    dependsOn ':common:build', ':core-api:build'
    
    // web-service depends on core-api completion
    tasks.getByPath(':web-service:build').mustRunAfter ':core-api:build'
    dependsOn ':web-service:build'
    
    // web-ui can build in parallel with web-service
    dependsOn ':web-ui:build'
    
    group = 'build'
    description = 'Build modules with optimal parallelization'
}</pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📦 Incremental Builds</h4>
              <p class="text-green-700 mb-3">Build only what has changed:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Configure incremental compilation
subprojects {
    tasks.withType(JavaCompile) {
        options.incremental = true
        options.fork = true
        options.forkOptions.jvmArgs += ['-Xmx1g']
    }
}

// Custom task to build only changed modules
task buildChanged {
    group = 'build'
    description = 'Build only modules that have changed'
    
    doLast {
        def changedProjects = getChangedProjects()
        changedProjects.each { projectPath ->
            project(projectPath).tasks.build.execute()
        }
    }
}

def getChangedProjects() {
    // Implementation to detect changed modules
    // This could integrate with Git to find changed files
    def changedFiles = 'git diff --name-only HEAD~1'.execute().text.split('\n')
    def changedProjects = []
    
    changedFiles.each { file ->
        subprojects.each { subproject ->
            if (file.startsWith(subproject.projectDir.name + '/')) {
                if (!changedProjects.contains(subproject.path)) {
                    changedProjects.add(subproject.path)
                }
            }
        }
    }
    
    return changedProjects
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Multi-module Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">✅ Design Principles</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Module Organization</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Single Responsibility:</strong> Each module has one clear purpose</li>
                    <li>• <strong>High Cohesion:</strong> Related functionality grouped together</li>
                    <li>• <strong>Loose Coupling:</strong> Minimal dependencies between modules</li>
                    <li>• <strong>Clear Interfaces:</strong> Well-defined module APIs</li>
                    <li>• <strong>Consistent Naming:</strong> Follow naming conventions</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Build Management</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Version Consistency:</strong> Synchronized module versions</li>
                    <li>• <strong>Shared Configuration:</strong> Common build logic in parent</li>
                    <li>• <strong>Dependency Management:</strong> Centralized version management</li>
                    <li>• <strong>Build Optimization:</strong> Parallel and incremental builds</li>
                    <li>• <strong>Testing Strategy:</strong> Unit, integration, and E2E tests</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">🎯 Common Anti-patterns to Avoid</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>God Modules:</strong> Modules that do too many things</li>
                <li>• <strong>Circular Dependencies:</strong> Modules depending on each other</li>
                <li>• <strong>Tight Coupling:</strong> Modules knowing too much about each other</li>
                <li>• <strong>Inconsistent Versioning:</strong> Different versions across modules</li>
                <li>• <strong>Duplicate Code:</strong> Same functionality in multiple modules</li>
                <li>• <strong>Poor Abstraction:</strong> Exposing implementation details</li>
                <li>• <strong>Build Dependencies:</strong> Unnecessary build-time coupling</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">🚀 Performance Optimization Tips</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Build Performance</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Enable parallel builds</li>
                    <li>• Use build caching</li>
                    <li>• Implement incremental compilation</li>
                    <li>• Optimize test execution</li>
                    <li>• Use build scans for analysis</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Development Workflow</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Build only changed modules</li>
                    <li>• Use composite builds for development</li>
                    <li>• Implement fast feedback loops</li>
                    <li>• Optimize IDE integration</li>
                    <li>• Use continuous builds during development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Multi-module Project Example</div>
        
        <div class="text-gray-400 mb-4">// === GRADLE MULTI-PROJECT BUILD ===</div>
        
        <div class="text-gray-400">// settings.gradle</div><br/>
        <div class="text-blue-400">rootProject</div>.name = <div class="text-green-300">'enterprise-application'</div><br/><br/>
        
        <div class="text-blue-400">include</div> <div class="text-green-300">'common'</div><br/>
        <div class="text-blue-400">include</div> <div class="text-green-300">'core-api'</div><br/>
        <div class="text-blue-400">include</div> <div class="text-green-300">'web-service'</div><br/>
        <div class="text-blue-400">include</div> <div class="text-green-300">'web-ui'</div><br/>
        <div class="text-blue-400">include</div> <div class="text-green-300">'integration-tests'</div><br/><br/>
        
        <div class="text-gray-400">// Root build.gradle</div><br/>
        <div class="text-blue-400">plugins</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'java'</div> <div class="text-blue-400">apply</div> <div class="text-green-300">false</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'org.springframework.boot'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'3.0.2'</div> <div class="text-blue-400">apply</div> <div class="text-green-300">false</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'io.spring.dependency-management'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'1.1.0'</div> <div class="text-blue-400">apply</div> <div class="text-green-300">false</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">allprojects</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'com.example'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">version</div> = <div class="text-green-300">'1.0.0-SNAPSHOT'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">repositories</div> { <div class="text-yellow-400">mavenCentral</div>() }<br/>
        }<br/><br/>
        
        <div class="text-blue-400">subprojects</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">apply plugin:</div> <div class="text-green-300">'java'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">apply plugin:</div> <div class="text-green-300">'io.spring.dependency-management'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">java</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">sourceCompatibility</div> = JavaVersion.<div class="text-yellow-400">VERSION_17</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">targetCompatibility</div> = JavaVersion.<div class="text-yellow-400">VERSION_17</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependencies</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.slf4j:slf4j-api'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.junit.jupiter:junit-jupiter'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.mockito:mockito-core'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">test</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">useJUnitPlatform</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">maxParallelForks</div> = Runtime.runtime.<div class="text-yellow-400">availableProcessors</div>().<div class="text-yellow-400">intdiv</div>(<div class="text-green-300">2</div>) ?: <div class="text-green-300">1</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// common/build.gradle</div><br/>
        <div class="text-blue-400">dependencies</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.apache.commons:commons-lang3:3.12.0'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'com.google.guava:guava:31.1-jre'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'com.fasterxml.jackson.core:jackson-databind'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// core-api/build.gradle</div><br/>
        <div class="text-blue-400">dependencies</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':common'</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-validation'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-data-jpa'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':common'</div>).sourceSets.test.output<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// web-service/build.gradle</div><br/>
        <div class="text-blue-400">plugins</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'org.springframework.boot'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">dependencies</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':common'</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':core-api'</div>)<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-web'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-security'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-actuator'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runtimeOnly</div> <div class="text-green-300">'com.h2database:h2'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runtimeOnly</div> <div class="text-green-300">'org.postgresql:postgresql'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.springframework.security:spring-security-test'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// integration-tests/build.gradle</div><br/>
        <div class="text-blue-400">dependencies</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':common'</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':core-api'</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-yellow-400">project</div>(<div class="text-green-300">':web-service'</div>)<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.testcontainers:junit-jupiter'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.testcontainers:postgresql'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'io.rest-assured:rest-assured'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">test</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">systemProperty</div> <div class="text-green-300">'spring.profiles.active'</div>, <div class="text-green-300">'integration-test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">shouldRunAfter</div> <div class="text-green-300">':web-service:test'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === CUSTOM BUILD TASKS ===</div>
        
        <div class="text-gray-400">// Root build.gradle - Custom tasks</div><br/>
        <div class="text-blue-400">task</div> <div class="text-yellow-400">buildAllModules</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> subprojects.<div class="text-yellow-400">collect</div> { it.tasks.<div class="text-yellow-400">named</div>(<div class="text-green-300">'build'</div>) }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'build'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Build all modules'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">task</div> <div class="text-yellow-400">testAllModules</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> subprojects.<div class="text-yellow-400">collect</div> { it.tasks.<div class="text-yellow-400">named</div>(<div class="text-green-300">'test'</div>) }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'verification'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Run tests for all modules'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">task</div> <div class="text-yellow-400">integrationTest</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> <div class="text-green-300">':integration-tests:test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'verification'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Run integration tests'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === BUILD COMMANDS ===</div>
        
        <div class="text-gray-400"># Build all modules</div><br/>
        <div class="text-blue-400">./gradlew</div> buildAllModules<br/><br/>
        
        <div class="text-gray-400"># Build specific module</div><br/>
        <div class="text-blue-400">./gradlew</div> :web-service:build<br/><br/>
        
        <div class="text-gray-400"># Run all tests</div><br/>
        <div class="text-blue-400">./gradlew</div> testAllModules<br/><br/>
        
        <div class="text-gray-400"># Run integration tests</div><br/>
        <div class="text-blue-400">./gradlew</div> integrationTest<br/><br/>
        
        <div class="text-gray-400"># Build with parallel execution</div><br/>
        <div class="text-blue-400">./gradlew</div> buildAllModules --parallel<br/><br/>
        
        <div class="text-gray-400"># Build only changed modules</div><br/>
        <div class="text-blue-400">./gradlew</div> build --continuous<br/><br/>
        
        <div class="text-gray-400"># Show project dependencies</div><br/>
        <div class="text-blue-400">./gradlew</div> :web-service:dependencies<br/><br/>
        
        <div class="text-gray-400"># Generate dependency report for all modules</div><br/>
        <div class="text-blue-400">./gradlew</div> dependencyInsight --dependency spring-boot-starter-web
      </div>
    `,
    exercise: `
1) Create a Maven multi-module project with parent POM and child modules.
2) Set up inter-module dependencies in a Maven multi-module project.
3) Configure a Gradle multi-project build with settings.gradle and subprojects.
4) Implement parallel builds and incremental compilation in a multi-module setup.
5) Set up shared build logic and plugin management across modules.
`
  }
};