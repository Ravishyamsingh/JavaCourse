import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_4: LessonContent = {
  title: 'Introduction to Gradle',
  type: 'lesson',
  duration: '35 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Discover Gradle, a powerful and flexible build automation tool that combines the best features of Ant and Maven. Learn about Gradle\'s domain-specific language (DSL), build scripts, project structure, and understand how it differs from Maven while providing superior flexibility and performance.',
    objectives: [
      'Understand what Gradle is and its core principles',
      'Learn about Gradle\'s build script structure and DSL',
      'Master Gradle project layout and conventions',
      'Explore Gradle tasks, plugins, and build lifecycle',
      'Compare Gradle with Maven and understand trade-offs',
      'Set up and configure a Gradle project from scratch',
      'Understand Gradle\'s dependency management approach'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Gradle
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Modern build automation with flexibility and performance</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Gradle?
          </h2>
          
          <div class="space-y-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🚀 Gradle Overview</h4>
              <p class="text-indigo-700 mb-3">Gradle is an open-source build automation tool that focuses on flexibility and performance:</p>
              <ul class="space-y-2 text-indigo-700 text-sm">
                <li>• <strong>Declarative and Imperative:</strong> Combines configuration with scripting</li>
                <li>• <strong>Groovy/Kotlin DSL:</strong> Powerful domain-specific language</li>
                <li>• <strong>Incremental Builds:</strong> Only rebuilds what changed</li>
                <li>• <strong>Build Cache:</strong> Shares build outputs across teams</li>
                <li>• <strong>Parallel Execution:</strong> Runs tasks in parallel when possible</li>
                <li>• <strong>Multi-language Support:</strong> Java, Kotlin, Scala, C++, and more</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Core Principles</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Flexibility</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Customizable build logic</li>
                    <li>• Plugin-based architecture</li>
                    <li>• Support for any project structure</li>
                    <li>• Extensible through custom tasks</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Performance</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Incremental compilation</li>
                    <li>• Build caching</li>
                    <li>• Parallel task execution</li>
                    <li>• Daemon process for faster builds</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📊 Gradle vs Maven Comparison</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 p-2">Aspect</th>
                      <th class="border border-gray-300 p-2">Gradle</th>
                      <th class="border border-gray-300 p-2">Maven</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="border border-gray-300 p-2">Configuration</td><td class="border border-gray-300 p-2">Groovy/Kotlin DSL</td><td class="border border-gray-300 p-2">XML</td></tr>
                    <tr><td class="border border-gray-300 p-2">Flexibility</td><td class="border border-gray-300 p-2">High</td><td class="border border-gray-300 p-2">Medium</td></tr>
                    <tr><td class="border border-gray-300 p-2">Performance</td><td class="border border-gray-300 p-2">Faster (incremental)</td><td class="border border-gray-300 p-2">Slower (full builds)</td></tr>
                    <tr><td class="border border-gray-300 p-2">Learning Curve</td><td class="border border-gray-300 p-2">Steeper</td><td class="border border-gray-300 p-2">Gentler</td></tr>
                    <tr><td class="border border-gray-300 p-2">IDE Support</td><td class="border border-gray-300 p-2">Good</td><td class="border border-gray-300 p-2">Excellent</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Gradle Project Structure
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">📁 Standard Project Layout</h4>
              <p class="text-purple-700 mb-3">Gradle follows Maven's standard directory layout by default:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
my-gradle-project/
├── build.gradle(.kts)               # Main build script
├── settings.gradle(.kts)            # Project settings
├── gradle.properties               # Project properties
├── gradlew                         # Gradle wrapper script (Unix)
├── gradlew.bat                     # Gradle wrapper script (Windows)
├── gradle/
│   └── wrapper/
│       ├── gradle-wrapper.jar      # Wrapper JAR
│       └── gradle-wrapper.properties # Wrapper configuration
├── src/
│   ├── main/
│   │   ├── java/                   # Main Java source
│   │   ├── kotlin/                 # Main Kotlin source (if used)
│   │   └── resources/              # Main resources
│   └── test/
│       ├── java/                   # Test Java source
│       ├── kotlin/                 # Test Kotlin source (if used)
│       └── resources/              # Test resources
└── build/                          # Generated build outputs
    ├── classes/                    # Compiled classes
    ├── libs/                       # Generated JARs
    ├── reports/                    # Test and analysis reports
    └── tmp/                        # Temporary build files</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">📋 Key Files Explained</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Core Files</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>build.gradle:</strong> Main build configuration</li>
                    <li>• <strong>settings.gradle:</strong> Project and subproject settings</li>
                    <li>• <strong>gradle.properties:</strong> Project-wide properties</li>
                    <li>• <strong>gradlew/gradlew.bat:</strong> Gradle wrapper scripts</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Generated Files</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>build/:</strong> All build outputs</li>
                    <li>• <strong>build/classes/:</strong> Compiled bytecode</li>
                    <li>• <strong>build/libs/:</strong> Generated JAR files</li>
                    <li>• <strong>build/reports/:</strong> Test and analysis reports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Build Script Fundamentals
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📝 Basic build.gradle Structure</h4>
              <p class="text-green-700 mb-3">A typical Gradle build script contains several key sections:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Plugin declarations
plugins {
    id 'java'
    id 'application'
    id 'org.springframework.boot' version '3.0.2'
}

// Project information
group = 'com.example'
version = '1.0.0-SNAPSHOT'
sourceCompatibility = '17'

// Repository configuration
repositories {
    mavenCentral()
    gradlePluginPortal()
}

// Dependencies
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.apache.commons:commons-lang3:3.12.0'
    
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.junit.jupiter:junit-jupiter'
}

// Task configuration
application {
    mainClass = 'com.example.Application'
}

// Custom tasks
task hello {
    doLast {
        println 'Hello, Gradle!'
    }
}

// Test configuration
test {
    useJUnitPlatform()
}</pre>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">🔧 Groovy vs Kotlin DSL</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Groovy DSL (build.gradle)</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
plugins {
    id 'java'
}

dependencies {
    implementation 'org.apache.commons:commons-lang3:3.12.0'
    testImplementation 'junit:junit:4.13.2'
}

task hello {
    doLast {
        println 'Hello from Groovy!'
    }
}</pre>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Kotlin DSL (build.gradle.kts)</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
plugins {
    java
}

dependencies {
    implementation("org.apache.commons:commons-lang3:3.12.0")
    testImplementation("junit:junit:4.13.2")
}

tasks.register("hello") {
    doLast {
        println("Hello from Kotlin!")
    }
}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Tasks and Build Lifecycle
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">⚙️ Understanding Tasks</h4>
              <p class="text-orange-700 mb-3">Tasks are the basic unit of work in Gradle:</p>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm">
Task Lifecycle:
1. Initialization → 2. Configuration → 3. Execution

Common Java Plugin Tasks:
├── compileJava      (compile main Java sources)
├── processResources (copy main resources)
├── classes          (assemble main classes)
├── compileTestJava  (compile test Java sources)
├── processTestResources (copy test resources)
├── testClasses      (assemble test classes)
├── test             (run unit tests)
├── jar              (create JAR file)
├── assemble         (build all artifacts)
├── check            (run all checks)
└── build            (full build)</pre>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">🔄 Task Dependencies and Execution</h4>
              <p class="text-red-700 mb-3">Tasks can depend on other tasks, creating an execution graph:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Task dependency example
task compileCustom {
    dependsOn 'compileJava'
    doLast {
        println 'Custom compilation step'
    }
}

// Task ordering
task taskA {
    doLast { println 'Task A' }
}

task taskB {
    mustRunAfter taskA
    doLast { println 'Task B' }
}

// Conditional task execution
task conditionalTask {
    onlyIf { project.hasProperty('runConditional') }
    doLast { println 'Conditional task executed' }
}

// Task configuration
tasks.withType(JavaCompile) {
    options.encoding = 'UTF-8'
    options.compilerArgs += ['-Xlint:unchecked', '-Xlint:deprecation']
}</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">📊 Common Gradle Commands</h4>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Build the project
./gradlew build

# Clean build outputs
./gradlew clean

# Compile main sources
./gradlew compileJava

# Run tests
./gradlew test

# Create JAR file
./gradlew jar

# Run the application
./gradlew run

# Show all tasks
./gradlew tasks

# Show task dependencies
./gradlew build --dry-run

# Build with info logging
./gradlew build --info

# Build with debug logging
./gradlew build --debug

# Skip tests
./gradlew build -x test

# Parallel execution
./gradlew build --parallel</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Plugins and Extensions
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">🔌 Plugin System</h4>
              <p class="text-teal-700 mb-3">Plugins extend Gradle's functionality and provide pre-configured tasks:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Core plugins (no version needed)
plugins {
    id 'java'                    // Java compilation and testing
    id 'application'             // Application packaging and running
    id 'java-library'            // Java library publishing
    id 'war'                     // WAR file creation
    id 'ear'                     // EAR file creation
}

// Community plugins (version required)
plugins {
    id 'org.springframework.boot' version '3.0.2'
    id 'io.spring.dependency-management' version '1.1.0'
    id 'org.gradle.test-retry' version '1.5.1'
    id 'com.github.johnrengelman.shadow' version '8.1.1'
}

// Legacy plugin application (not recommended)
apply plugin: 'java'
apply plugin: 'org.springframework.boot'</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🎯 Popular Gradle Plugins</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Core Plugins</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>java:</strong> Java compilation and testing</li>
                    <li>• <strong>application:</strong> Run and package applications</li>
                    <li>• <strong>java-library:</strong> Library development</li>
                    <li>• <strong>maven-publish:</strong> Maven repository publishing</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Community Plugins</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Spring Boot:</strong> Spring Boot applications</li>
                    <li>• <strong>Shadow:</strong> Fat JAR creation</li>
                    <li>• <strong>Spotless:</strong> Code formatting</li>
                    <li>• <strong>JaCoCo:</strong> Code coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Gradle Wrapper and Setup
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">🎁 Gradle Wrapper Benefits</h4>
              <p class="text-red-700 mb-3">The Gradle Wrapper ensures consistent builds across environments:</p>
              <ul class="space-y-2 text-red-700 text-sm">
                <li>• <strong>Version Consistency:</strong> Everyone uses the same Gradle version</li>
                <li>• <strong>No Installation Required:</strong> Downloads Gradle automatically</li>
                <li>• <strong>CI/CD Friendly:</strong> Works in automated environments</li>
                <li>• <strong>Easy Upgrades:</strong> Update wrapper to upgrade Gradle</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚙️ Setting Up Gradle</h4>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Install Gradle (optional - wrapper is preferred)
# Using SDKMAN
sdk install gradle

# Using Homebrew (macOS)
brew install gradle

# Using Chocolatey (Windows)
choco install gradle

# Generate wrapper for existing project
gradle wrapper

# Generate wrapper with specific version
gradle wrapper --gradle-version 8.5

# Upgrade wrapper to latest version
./gradlew wrapper --gradle-version 8.5

# Verify installation
./gradlew --version</pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">🚀 Creating a New Gradle Project</h4>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Create new Java application
gradle init --type java-application --dsl groovy --test-framework junit-jupiter

# Create new Java library
gradle init --type java-library --dsl kotlin --test-framework spock

# Create new Spring Boot application
gradle init --type java-application --dsl groovy
# Then add Spring Boot plugin to build.gradle

# Interactive project creation
gradle init</pre>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Gradle Project Example</div>
        
        <div class="text-gray-400 mb-4">// === BUILD.GRADLE (GROOVY DSL) ===</div>
        
        <div class="text-blue-400">plugins</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'java'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'application'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'org.springframework.boot'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'3.0.2'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'io.spring.dependency-management'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'1.1.0'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Project information</div><br/>
        <div class="text-blue-400">group</div> = <div class="text-green-300">'com.example'</div><br/>
        <div class="text-blue-400">version</div> = <div class="text-green-300">'1.0.0-SNAPSHOT'</div><br/>
        <div class="text-blue-400">sourceCompatibility</div> = <div class="text-green-300">'17'</div><br/>
        <div class="text-blue-400">targetCompatibility</div> = <div class="text-green-300">'17'</div><br/><br/>
        
        <div class="text-gray-400">// Java compilation options</div><br/>
        <div class="text-blue-400">java</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">toolchain</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">languageVersion</div> = JavaLanguageVersion.<div class="text-yellow-400">of</div>(<div class="text-green-300">17</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Repository configuration</div><br/>
        <div class="text-blue-400">repositories</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">mavenCentral</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">gradlePluginPortal</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Custom repository</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">maven</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">url</div> <div class="text-green-300">'https://repo.spring.io/milestone'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Dependency configuration</div><br/>
        <div class="text-blue-400">dependencies</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Spring Boot starters</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-web'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-data-jpa'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-security'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Utility libraries</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'org.apache.commons:commons-lang3:3.12.0'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">implementation</div> <div class="text-green-300">'com.google.guava:guava:31.1-jre'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Database</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runtimeOnly</div> <div class="text-green-300">'com.h2database:h2'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runtimeOnly</div> <div class="text-green-300">'mysql:mysql-connector-java'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Development tools</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">developmentOnly</div> <div class="text-green-300">'org.springframework.boot:spring-boot-devtools'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">annotationProcessor</div> <div class="text-green-300">'org.springframework.boot:spring-boot-configuration-processor'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Testing</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.springframework.boot:spring-boot-starter-test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.springframework.security:spring-security-test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.testcontainers:junit-jupiter'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testImplementation</div> <div class="text-green-300">'org.testcontainers:mysql'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Application configuration</div><br/>
        <div class="text-blue-400">application</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">mainClass</div> = <div class="text-green-300">'com.example.Application'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Test configuration</div><br/>
        <div class="text-blue-400">test</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">useJUnitPlatform</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testLogging</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">events</div> <div class="text-green-300">'passed'</div>, <div class="text-green-300">'skipped'</div>, <div class="text-green-300">'failed'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// JAR configuration</div><br/>
        <div class="text-blue-400">jar</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">archiveBaseName</div> = <div class="text-green-300">'my-gradle-app'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">archiveVersion</div> = <div class="text-blue-400">version</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">manifest</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">attributes</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">'Main-Class'</div>: <div class="text-green-300">'com.example.Application'</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">'Implementation-Title'</div>: <div class="text-blue-400">project</div>.name,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">'Implementation-Version'</div>: <div class="text-blue-400">project</div>.version<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Custom tasks</div><br/>
        <div class="text-blue-400">task</div> <div class="text-yellow-400">hello</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'custom'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Prints a hello message'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">doLast</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">println</div> <div class="text-green-300">'Hello from Gradle!'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">println</div> <div class="text-green-300">"Project: \${project.name}"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">println</div> <div class="text-green-300">"Version: \${project.version}"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Task with dependencies</div><br/>
        <div class="text-blue-400">task</div> <div class="text-yellow-400">customBuild</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> <div class="text-green-300">'clean'</div>, <div class="text-green-300">'compileJava'</div>, <div class="text-green-300">'test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'build'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Custom build with specific order'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">doLast</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">println</div> <div class="text-green-300">'Custom build completed!'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === SETTINGS.GRADLE ===</div>
        
        <div class="text-blue-400">rootProject</div>.name = <div class="text-green-300">'gradle-example'</div><br/>
        <div class="text-blue-400">include</div> <div class="text-green-300">'subproject-a'</div>, <div class="text-green-300">'subproject-b'</div><br/><br/>
        
        <div class="text-gray-400 mb-4">// === GRADLE.PROPERTIES ===</div>
        
        <div class="text-gray-400"># Project properties</div><br/>
        <div class="text-blue-400">version</div>=1.0.0-SNAPSHOT<br/>
        <div class="text-blue-400">group</div>=com.example<br/><br/>
        
        <div class="text-gray-400"># Gradle daemon configuration</div><br/>
        <div class="text-blue-400">org.gradle.daemon</div>=true<br/>
        <div class="text-blue-400">org.gradle.parallel</div>=true<br/>
        <div class="text-blue-400">org.gradle.caching</div>=true<br/>
        <div class="text-blue-400">org.gradle.configureondemand</div>=true<br/><br/>
        
        <div class="text-gray-400"># JVM options</div><br/>
        <div class="text-blue-400">org.gradle.jvmargs</div>=-Xmx2g -XX:MaxMetaspaceSize=512m<br/><br/>
        
        <div class="text-gray-400 mb-4">// === COMMON GRADLE COMMANDS ===</div>
        
        <div class="text-gray-400"># Build the project</div><br/>
        <div class="text-blue-400">./gradlew</div> build<br/><br/>
        
        <div class="text-gray-400"># Clean and build</div><br/>
        <div class="text-blue-400">./gradlew</div> clean build<br/><br/>
        
        <div class="text-gray-400"># Run tests</div><br/>
        <div class="text-blue-400">./gradlew</div> test<br/><br/>
        
        <div class="text-gray-400"># Run the application</div><br/>
        <div class="text-blue-400">./gradlew</div> run<br/><br/>
        
        <div class="text-gray-400"># Show all tasks</div><br/>
        <div class="text-blue-400">./gradlew</div> tasks --all<br/><br/>
        
        <div class="text-gray-400"># Build with parallel execution</div><br/>
        <div class="text-blue-400">./gradlew</div> build --parallel<br/><br/>
        
        <div class="text-gray-400"># Build with build cache</div><br/>
        <div class="text-blue-400">./gradlew</div> build --build-cache<br/><br/>
        
        <div class="text-gray-400"># Show dependency tree</div><br/>
        <div class="text-blue-400">./gradlew</div> dependencies<br/><br/>
        
        <div class="text-gray-400"># Generate wrapper</div><br/>
        <div class="text-blue-400">gradle</div> wrapper --gradle-version 8.5
      </div>
    `,
    exercise: `
      **🎯 Introduction to Gradle Exercises**

      **Exercise 1: Gradle Installation and Setup**
      Set up Gradle development environment:
      - Install Gradle using your preferred method (SDKMAN, Homebrew, or manual)
      - Verify installation with "gradle --version"
      - Create a new Java application using "gradle init"
      - Explore the generated project structure
      - Run the application using "./gradlew run"
      - Understand the purpose of each generated file

      **Exercise 2: Build Script Exploration**
      Work with Gradle build scripts:
      - Examine the generated build.gradle file
      - Add project information (group, version, description)
      - Configure Java toolchain for specific version
      - Add custom properties and use them in tasks
      - Create a simple custom task that prints project information
      - Run your custom task and verify output

      **Exercise 3: Plugin Configuration**
      Practice working with Gradle plugins:
      - Add the 'application' plugin to your project
      - Configure the main class for your application
      - Add the Spring Boot plugin and dependencies
      - Explore the tasks added by each plugin
      - Use "gradle tasks" to see all available tasks
      - Run different plugin-provided tasks

      **Exercise 4: Dependency Management**
      Configure project dependencies:
      - Add compile-time dependencies (Apache Commons, Guava)
      - Include runtime dependencies (database drivers)
      - Add test dependencies (JUnit 5, Mockito)
      - Configure different dependency scopes
      - Use "gradle dependencies" to view dependency tree
      - Resolve any dependency conflicts

      **Exercise 5: Task Creation and Configuration**
      Create custom tasks and configure existing ones:
      - Create a custom task with dependencies on other tasks
      - Configure the test task to use JUnit Platform
      - Add a task that copies files from one location to another
      - Create a task that generates a project report
      - Use task ordering (mustRunAfter, shouldRunAfter)
      - Test task execution order and dependencies

      **Exercise 6: Build Lifecycle and Performance**
      Explore Gradle's build features:
      - Enable parallel builds in gradle.properties
      - Configure build caching
      - Use incremental compilation
      - Measure build performance with --profile
      - Compare build times with and without optimizations
      - Document performance improvements

      **Exercise 7: Gradle vs Maven Comparison**
      Compare Gradle and Maven approaches:
      - Convert a simple Maven project to Gradle
      - Compare build script complexity and readability
      - Measure build performance differences
      - Document advantages and disadvantages of each tool
      - Create a decision matrix for choosing between them
      - Present findings with practical examples

      **Deliverable:**
      Create a comprehensive Gradle project demonstrating all learned concepts: proper project structure, plugin usage, dependency management, custom tasks, and performance optimizations. Include documentation comparing Gradle with Maven and recommendations for when to use each tool.
    `
  }
};