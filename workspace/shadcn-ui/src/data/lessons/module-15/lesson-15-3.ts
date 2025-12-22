import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_3: LessonContent = {
  title: 'Dependency Management',
  type: 'lesson',
  duration: '40 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Master Maven\'s powerful dependency management system. Learn how to declare, manage, and resolve dependencies effectively. Understand dependency scopes, transitive dependencies, version conflicts, and best practices for maintaining clean and efficient project dependencies.',
    objectives: [
      'Understand Maven\'s dependency management fundamentals',
      'Learn about different dependency scopes and their usage',
      'Master transitive dependency resolution and conflicts',
      'Explore dependency exclusions and version management',
      'Understand the Maven repository system and artifact resolution',
      'Learn best practices for dependency management',
      'Handle version conflicts and dependency hell scenarios'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Maven Dependency Management
        </h1>
        <p class="mt-3 text-green-100 text-lg">Mastering project dependencies and library management</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Dependency Fundamentals
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📦 What are Dependencies?</h4>
              <p class="text-green-700 mb-3">Dependencies are external libraries or modules that your project needs to compile, test, or run:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<dependencies>
    <!-- Core dependency declaration -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>6.0.4</version>
    </dependency>
    
    <!-- Test dependency -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.9.2</version>
        <scope>test</scope>
    </dependency>
    
    <!-- Optional dependency -->
    <dependency>
        <groupId>org.apache.commons</groupId>
        <artifactId>commons-lang3</artifactId>
        <version>3.12.0</version>
        <optional>true</optional>
    </dependency>
</dependencies></pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🔍 Dependency Coordinates</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Required Elements</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>groupId:</strong> Organization identifier</li>
                    <li>• <strong>artifactId:</strong> Project/library name</li>
                    <li>• <strong>version:</strong> Specific version to use</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Optional Elements</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>scope:</strong> When dependency is needed</li>
                    <li>• <strong>type:</strong> Artifact type (jar, war, pom)</li>
                    <li>• <strong>classifier:</strong> Additional qualifier</li>
                    <li>• <strong>optional:</strong> Whether dependency is optional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Dependency Scopes
          </h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Understanding Scopes</h4>
              <p class="text-blue-700 mb-3">Dependency scopes control when and where dependencies are available:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border">
                    <h5 class="font-bold text-green-800 mb-1">compile (default)</h5>
                    <p class="text-sm text-gray-700">Available in all classpaths. Transitive.</p>
                    <code class="text-xs bg-gray-100 px-1 rounded">compile, test, runtime</code>
                  </div>
                  <div class="bg-white p-3 rounded border">
                    <h5 class="font-bold text-blue-800 mb-1">provided</h5>
                    <p class="text-sm text-gray-700">Compile-time only. Not packaged.</p>
                    <code class="text-xs bg-gray-100 px-1 rounded">compile, test</code>
                  </div>
                  <div class="bg-white p-3 rounded border">
                    <h5 class="font-bold text-purple-800 mb-1">runtime</h5>
                    <p class="text-sm text-gray-700">Runtime and test only. Not compile.</p>
                    <code class="text-xs bg-gray-100 px-1 rounded">test, runtime</code>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border">
                    <h5 class="font-bold text-red-800 mb-1">test</h5>
                    <p class="text-sm text-gray-700">Test compilation and execution only.</p>
                    <code class="text-xs bg-gray-100 px-1 rounded">test</code>
                  </div>
                  <div class="bg-white p-3 rounded border">
                    <h5 class="font-bold text-orange-800 mb-1">system</h5>
                    <p class="text-sm text-gray-700">Like provided, but explicit path.</p>
                    <code class="text-xs bg-gray-100 px-1 rounded">compile, test</code>
                  </div>
                  <div class="bg-white p-3 rounded border">
                    <h5 class="font-bold text-teal-800 mb-1">import</h5>
                    <p class="text-sm text-gray-700">Import managed dependencies (POM only).</p>
                    <code class="text-xs bg-gray-100 px-1 rounded">dependencyManagement</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">💡 Scope Usage Examples</h4>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<!-- Compile scope (default) - available everywhere -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
    <!-- scope>compile</scope --> <!-- Default, can be omitted -->
</dependency>

<!-- Provided scope - servlet API provided by container -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope>
</dependency>

<!-- Runtime scope - database driver needed at runtime -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.32</version>
    <scope>runtime</scope>
</dependency>

<!-- Test scope - testing frameworks -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.9.2</version>
    <scope>test</scope>
</dependency>

<!-- Import scope - BOM (Bill of Materials) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-dependencies</artifactId>
    <version>3.0.2</version>
    <type>pom</type>
    <scope>import</scope>
</dependency></pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Transitive Dependencies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🔗 Understanding Transitivity</h4>
              <p class="text-purple-700 mb-3">Transitive dependencies are dependencies of your dependencies:</p>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm">
Your Project
    └── Spring Web (compile)
        ├── Spring Core (compile) ← Transitive
        ├── Spring Context (compile) ← Transitive
        └── Jackson (compile) ← Transitive
            └── Jackson Core (compile) ← Transitive</pre>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">📊 Dependency Tree Analysis</h4>
              <p class="text-indigo-700 mb-3">Use Maven commands to analyze your dependency tree:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Display complete dependency tree
mvn dependency:tree

# Show conflicts and duplicates
mvn dependency:tree -Dverbose

# Analyze specific dependency
mvn dependency:tree -Dincludes=org.springframework:*

# Generate dependency report
mvn dependency:analyze

# Find unused dependencies
mvn dependency:analyze -DfailOnWarning=true

# Resolve dependency sources
mvn dependency:sources

# Download dependency documentation
mvn dependency:resolve -Dclassifier=javadoc</pre>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Transitive Scope Rules</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 p-2">Direct Scope</th>
                      <th class="border border-gray-300 p-2">Transitive Scope</th>
                      <th class="border border-gray-300 p-2">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td class="border border-gray-300 p-2">compile</td><td class="border border-gray-300 p-2">compile</td><td class="border border-gray-300 p-2">compile</td></tr>
                    <tr><td class="border border-gray-300 p-2">compile</td><td class="border border-gray-300 p-2">runtime</td><td class="border border-gray-300 p-2">runtime</td></tr>
                    <tr><td class="border border-gray-300 p-2">runtime</td><td class="border border-gray-300 p-2">compile</td><td class="border border-gray-300 p-2">runtime</td></tr>
                    <tr><td class="border border-gray-300 p-2">test</td><td class="border border-gray-300 p-2">compile</td><td class="border border-gray-300 p-2">test</td></tr>
                    <tr><td class="border border-gray-300 p-2">provided</td><td class="border border-gray-300 p-2">*</td><td class="border border-gray-300 p-2">not included</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Version Conflicts and Resolution
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🎯 Conflict Resolution Strategy</h4>
              <p class="text-orange-700 mb-3">Maven uses the "nearest wins" strategy for version conflicts:</p>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm">
Project
├── A 1.0 → C 2.0 (depth 2)
└── B 1.0 → C 1.0 (depth 2)

Result: C 1.0 wins (first declared at same depth)

Project
├── A 1.0 → B 1.0 → C 2.0 (depth 3)
└── C 1.0 (depth 1)

Result: C 1.0 wins (shorter path)</pre>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">🚫 Dependency Exclusions</h4>
              <p class="text-red-700 mb-3">Exclude unwanted transitive dependencies:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-web</artifactId>
    <version>6.0.4</version>
    <exclusions>
        <!-- Exclude specific transitive dependency -->
        <exclusion>
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
        </exclusion>
        <!-- Exclude all transitive dependencies from a group -->
        <exclusion>
            <groupId>org.slf4j</groupId>
            <artifactId>*</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- Alternative: Use different logging implementation -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>jcl-over-slf4j</artifactId>
    <version>2.0.6</version>
</dependency></pre>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">🔧 Version Management Strategies</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Direct Version Declaration</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>2.14.2</version>
</dependency></pre>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Property-based Versions</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-xs">
<properties>
    <jackson.version>2.14.2</jackson.version>
</properties>

<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>\${jackson.version}</version>
</dependency></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Dependency Management Section
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">📋 Central Version Management</h4>
              <p class="text-teal-700 mb-3">Use dependencyManagement for centralized version control:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<!-- Parent POM or main POM -->
<dependencyManagement>
    <dependencies>
        <!-- Spring Boot BOM -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.0.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        
        <!-- Custom version management -->
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.14.2</version>
        </dependency>
        
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.12.0</version>
        </dependency>
    </dependencies>
</dependencyManagement>

<!-- Child modules or same POM -->
<dependencies>
    <!-- Version inherited from dependencyManagement -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <!-- No version needed -->
    </dependency>
    
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-core</artifactId>
        <!-- Version managed above -->
    </dependency>
</dependencies></pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 BOM (Bill of Materials) Usage</h4>
              <p class="text-blue-700 mb-3">Import pre-configured dependency versions:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<!-- Import Spring Boot BOM -->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-dependencies</artifactId>
            <version>3.0.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
        
        <!-- Import Jackson BOM -->
        <dependency>
            <groupId>com.fasterxml.jackson</groupId>
            <artifactId>jackson-bom</artifactId>
            <version>2.14.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement></pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices and Troubleshooting
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">✅ Dependency Best Practices</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Version Management</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Use properties for version numbers</li>
                    <li>• Prefer BOM imports for consistency</li>
                    <li>• Avoid version ranges in production</li>
                    <li>• Keep dependencies up to date</li>
                    <li>• Use dependencyManagement in parent POMs</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Scope and Organization</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Use appropriate scopes (test, provided, etc.)</li>
                    <li>• Group related dependencies together</li>
                    <li>• Document why dependencies are needed</li>
                    <li>• Exclude unnecessary transitive deps</li>
                    <li>• Minimize direct dependencies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">🔍 Troubleshooting Common Issues</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-1">ClassNotFoundException</h5>
                  <p class="text-sm text-gray-700 mb-2">Missing dependency at runtime</p>
                  <code class="text-xs bg-gray-100 px-1 rounded">Check scope: might need 'runtime' instead of 'provided'</code>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-1">NoSuchMethodError</h5>
                  <p class="text-sm text-gray-700 mb-2">Version conflict between dependencies</p>
                  <code class="text-xs bg-gray-100 px-1 rounded">Use mvn dependency:tree to find conflicts</code>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-1">Dependency not found</h5>
                  <p class="text-sm text-gray-700 mb-2">Artifact not in configured repositories</p>
                  <code class="text-xs bg-gray-100 px-1 rounded">Check repository configuration and coordinates</code>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">🛠️ Useful Maven Commands</h4>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Analyze dependencies
mvn dependency:analyze

# Show dependency tree
mvn dependency:tree

# Resolve all dependencies
mvn dependency:resolve

# Copy dependencies to target/dependency
mvn dependency:copy-dependencies

# Show effective POM (with inherited dependencies)
mvn help:effective-pom

# Purge local repository for project
mvn dependency:purge-local-repository

# Check for newer versions
mvn versions:display-dependency-updates</pre>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Comprehensive Dependency Management Example</div>
        
        <div class="text-gray-400 mb-4">// === PARENT POM WITH DEPENDENCY MANAGEMENT ===</div>
        
        <div class="text-blue-400"><?xml version</div>=<div class="text-green-300">"1.0"</div> <div class="text-blue-400">encoding</div>=<div class="text-green-300">"UTF-8"</div>?><br/>
        <div class="text-blue-400"><project</div> <div class="text-blue-400">xmlns</div>=<div class="text-green-300">"http://maven.apache.org/POM/4.0.0"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xmlns:xsi</div>=<div class="text-green-300">"http://www.w3.org/2001/XMLSchema-instance"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xsi:schemaLocation</div>=<div class="text-green-300">"http://maven.apache.org/POM/4.0.0</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">http://maven.apache.org/xsd/maven-4.0.0.xsd"</div>><br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400"><modelVersion></div>4.0.0<div class="text-blue-400"></modelVersion></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400"><groupId></div>com.example<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>dependency-management-example<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><version></div>1.0.0-SNAPSHOT<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><packaging></div>jar<div class="text-blue-400"></packaging></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Properties for version management --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><properties></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><java.version></div>17<div class="text-blue-400"></java.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><spring-boot.version></div>3.0.2<div class="text-blue-400"></spring-boot.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><jackson.version></div>2.14.2<div class="text-blue-400"></jackson.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><junit.version></div>5.9.2<div class="text-blue-400"></junit.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><mockito.version></div>5.1.1<div class="text-blue-400"></mockito.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><slf4j.version></div>2.0.6<div class="text-blue-400"></slf4j.version></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></properties></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Dependency Management Section --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><dependencyManagement></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependencies></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Spring Boot BOM --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.springframework.boot<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>spring-boot-dependencies<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div><div class="text-green-300">\${spring-boot.version}</div><div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><type></div>pom<div class="text-blue-400"></type></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><scope></div>import<div class="text-blue-400"></scope></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Jackson BOM --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>com.fasterxml.jackson<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>jackson-bom<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div><div class="text-green-300">\${jackson.version}</div><div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><type></div>pom<div class="text-blue-400"></type></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><scope></div>import<div class="text-blue-400"></scope></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Individual dependency versions --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.junit.jupiter<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>junit-jupiter<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div><div class="text-green-300">\${junit.version}</div><div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependencies></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></dependencyManagement></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Actual Dependencies --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><dependencies></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Spring Boot Starter Web (version managed) --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.springframework.boot<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>spring-boot-starter-web<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- No version needed - managed by BOM --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Database driver (runtime scope) --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>mysql<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>mysql-connector-java<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div>8.0.32<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><scope></div>runtime<div class="text-blue-400"></scope></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Test dependencies --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.junit.jupiter<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>junit-jupiter<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><scope></div>test<div class="text-blue-400"></scope></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Version managed by dependencyManagement --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Dependency with exclusions --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.springframework<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>spring-context<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><exclusions></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><exclusion></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>commons-logging<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>commons-logging<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></exclusion></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></exclusions></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Alternative logging implementation --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.slf4j<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>jcl-over-slf4j<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div><div class="text-green-300">\${slf4j.version}</div><div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></dependencies></div><br/>
        <div class="text-blue-400"></project></div><br/><br/>
        
        <div class="text-gray-400 mb-4">// === DEPENDENCY ANALYSIS COMMANDS ===</div>
        
        <div class="text-gray-400"># Display complete dependency tree</div><br/>
        <div class="text-blue-400">mvn</div> dependency:tree<br/><br/>
        
        <div class="text-gray-400"># Show conflicts and duplicates</div><br/>
        <div class="text-blue-400">mvn</div> dependency:tree -Dverbose<br/><br/>
        
        <div class="text-gray-400"># Analyze unused and undeclared dependencies</div><br/>
        <div class="text-blue-400">mvn</div> dependency:analyze<br/><br/>
        
        <div class="text-gray-400"># Check for newer versions</div><br/>
        <div class="text-blue-400">mvn</div> versions:display-dependency-updates<br/><br/>
        
        <div class="text-gray-400"># Copy all dependencies to target/dependency</div><br/>
        <div class="text-blue-400">mvn</div> dependency:copy-dependencies<br/><br/>
        
        <div class="text-gray-400"># Resolve and download sources</div><br/>
        <div class="text-blue-400">mvn</div> dependency:sources<br/><br/>
        
        <div class="text-gray-400"># Show effective POM with resolved dependencies</div><br/>
        <div class="text-blue-400">mvn</div> help:effective-pom
      </div>
    `,
    exercise: `
1) Configure Maven dependencies with different scopes (compile, test, runtime, provided) and explain when to use each.
2) Resolve a dependency conflict using Maven's dependency tree and exclusion mechanisms.
3) Set up a BOM (Bill of Materials) in a Maven project and demonstrate version management.
4) Use dependencyManagement to centralize version control across multiple modules.
5) Analyze and fix a dependency resolution issue using Maven commands.
`
  }
};