import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_5: LessonContent = {
  title: 'Build Automation and Plugins',
  type: 'lesson',
  duration: '45 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Master advanced build automation techniques using Maven and Gradle plugins. Learn how to extend build functionality, create custom plugins, automate code quality checks, integrate testing frameworks, and implement comprehensive build pipelines that ensure consistent, reliable, and efficient software delivery.',
    objectives: [
      'Understand the plugin architecture in Maven and Gradle',
      'Learn to configure and use popular build plugins',
      'Master code quality and analysis plugins integration',
      'Explore testing automation and reporting plugins',
      'Create custom plugins for specific build requirements',
      'Implement automated build pipelines and workflows',
      'Understand plugin lifecycle and best practices'
    ],
    theory: `
      <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Build Automation and Plugins
        </h1>
        <p class="mt-3 text-orange-100 text-lg">Extending build capabilities with powerful automation</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Plugin Architecture Overview
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🔌 Understanding Build Plugins</h4>
              <p class="text-orange-700 mb-3">Plugins extend build tools with additional functionality:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Maven Plugins</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Goals:</strong> Individual plugin tasks</li>
                    <li>• <strong>Phases:</strong> Bound to lifecycle phases</li>
                    <li>• <strong>Configuration:</strong> XML-based parameters</li>
                    <li>• <strong>Execution:</strong> Automatic or manual</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Gradle Plugins</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Tasks:</strong> Individual plugin operations</li>
                    <li>• <strong>Extensions:</strong> Configuration objects</li>
                    <li>• <strong>DSL:</strong> Groovy/Kotlin configuration</li>
                    <li>• <strong>Lifecycle:</strong> Flexible task dependencies</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Plugin Categories</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Core Plugins</h5>
                  <ul class="space-y-1 text-gray-700 text-xs">
                    <li>• Compiler plugins</li>
                    <li>• Testing frameworks</li>
                    <li>• Packaging tools</li>
                    <li>• Resource processing</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Quality Plugins</h5>
                  <ul class="space-y-1 text-gray-700 text-xs">
                    <li>• Code analysis</li>
                    <li>• Coverage reporting</li>
                    <li>• Style checking</li>
                    <li>• Security scanning</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-red-800 mb-2">Integration Plugins</h5>
                  <ul class="space-y-1 text-gray-700 text-xs">
                    <li>• Docker integration</li>
                    <li>• Cloud deployment</li>
                    <li>• Database migration</li>
                    <li>• API generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Essential Maven Plugins
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🔨 Core Maven Plugins</h4>
              <p class="text-purple-700 mb-3">Essential plugins for Java development:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<build>
    <plugins>
        <!-- Compiler Plugin -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
            <configuration>
                <source>17</source>
                <target>17</target>
                <encoding>UTF-8</encoding>
                <compilerArgs>
                    <arg>-Xlint:unchecked</arg>
                    <arg>-Xlint:deprecation</arg>
                </compilerArgs>
            </configuration>
        </plugin>
        
        <!-- Surefire Plugin (Unit Tests) -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.0.0-M9</version>
            <configuration>
                <includes>
                    <include>**/*Test.java</include>
                    <include>**/*Tests.java</include>
                </includes>
                <excludes>
                    <exclude>**/*IntegrationTest.java</exclude>
                </excludes>
                <systemPropertyVariables>
                    <java.awt.headless>true</java.awt.headless>
                </systemPropertyVariables>
            </configuration>
        </plugin>
        
        <!-- Failsafe Plugin (Integration Tests) -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-failsafe-plugin</artifactId>
            <version>3.0.0-M9</version>
            <configuration>
                <includes>
                    <include>**/*IntegrationTest.java</include>
                    <include>**/*IT.java</include>
                </includes>
            </configuration>
            <executions>
                <execution>
                    <goals>
                        <goal>integration-test</goal>
                        <goal>verify</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build></pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📊 Code Quality Plugins</h4>
              <p class="text-green-700 mb-3">Plugins for code analysis and quality assurance:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<!-- JaCoCo Code Coverage -->
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.8</version>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
        <execution>
            <id>check</id>
            <goals>
                <goal>check</goal>
            </goals>
            <configuration>
                <rules>
                    <rule>
                        <element>BUNDLE</element>
                        <limits>
                            <limit>
                                <counter>INSTRUCTION</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.80</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>

<!-- SpotBugs Static Analysis -->
<plugin>
    <groupId>com.github.spotbugs</groupId>
    <artifactId>spotbugs-maven-plugin</artifactId>
    <version>4.7.3.0</version>
    <configuration>
        <effort>Max</effort>
        <threshold>Low</threshold>
        <xmlOutput>true</xmlOutput>
    </configuration>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>

<!-- Checkstyle Code Style -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-checkstyle-plugin</artifactId>
    <version>3.2.1</version>
    <configuration>
        <configLocation>checkstyle.xml</configLocation>
        <encoding>UTF-8</encoding>
        <consoleOutput>true</consoleOutput>
        <failsOnError>true</failsOnError>
    </configuration>
    <executions>
        <execution>
            <id>validate</id>
            <phase>validate</phase>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin></pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Essential Gradle Plugins
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">⚡ Core Gradle Plugins</h4>
              <p class="text-green-700 mb-3">Essential plugins for modern Java development:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
plugins {
    // Core Java plugins
    id 'java'
    id 'java-library'
    id 'application'
    
    // Testing plugins
    id 'jacoco'
    id 'test-retry' version '1.5.1'
    
    // Code quality plugins
    id 'checkstyle'
    id 'pmd'
    id 'spotbugs' version '5.0.13'
    
    // Build enhancement plugins
    id 'com.github.johnrengelman.shadow' version '8.1.1'
    id 'org.springframework.boot' version '3.0.2'
}

// Java configuration
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
    withJavadocJar()
    withSourcesJar()
}

// Application configuration
application {
    mainClass = 'com.example.Application'
    applicationDefaultJvmArgs = ['-Xmx1g', '-XX:+UseG1GC']
}

// Test configuration
test {
    useJUnitPlatform()
    
    // Test execution options
    maxParallelForks = Runtime.runtime.availableProcessors().intdiv(2) ?: 1
    forkEvery = 100
    
    // JVM options for tests
    jvmArgs '-XX:+UseG1GC', '-Xmx512m'
    
    // Test logging
    testLogging {
        events 'passed', 'skipped', 'failed'
        exceptionFormat 'full'
        showStandardStreams = false
    }
    
    // Retry failed tests
    retry {
        maxRetries = 3
        maxFailures = 5
    }
}

// JaCoCo code coverage
jacoco {
    toolVersion = '0.8.8'
}

jacocoTestReport {
    dependsOn test
    reports {
        xml.required = true
        html.required = true
        csv.required = false
    }
    
    afterEvaluate {
        classDirectories.setFrom(files(classDirectories.files.collect {
            fileTree(dir: it, exclude: [
                '**/config/**',
                '**/dto/**',
                '**/entity/**'
            ])
        }))
    }
}

jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                minimum = 0.80
            }
        }
    }
}</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🔍 Code Quality Configuration</h4>
              <p class="text-blue-700 mb-3">Advanced quality checks and reporting:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Checkstyle configuration
checkstyle {
    toolVersion = '10.7.0'
    configFile = file('config/checkstyle/checkstyle.xml')
    ignoreFailures = false
    maxWarnings = 0
    maxErrors = 0
}

// PMD configuration
pmd {
    toolVersion = '6.55.0'
    ruleSetFiles = files('config/pmd/pmd-rules.xml')
    ignoreFailures = false
    consoleOutput = true
}

// SpotBugs configuration
spotbugs {
    toolVersion = '4.7.3'
    effort = 'max'
    reportLevel = 'low'
    ignoreFailures = false
}

spotbugsMain {
    reports {
        html {
            required = true
            outputLocation = file('build/reports/spotbugs/main/spotbugs.html')
            stylesheet = 'fancy-hist.xsl'
        }
        xml {
            required = true
            outputLocation = file('build/reports/spotbugs/main/spotbugs.xml')
        }
    }
}

// Custom quality check task
task qualityCheck {
    dependsOn 'checkstyleMain', 'checkstyleTest', 'pmdMain', 'pmdTest', 'spotbugsMain'
    group = 'verification'
    description = 'Run all code quality checks'
}

// Make build depend on quality checks
check.dependsOn qualityCheck</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Build Automation
          </h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🚀 Docker Integration</h4>
              <p class="text-blue-700 mb-3">Containerize applications as part of the build process:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Gradle Docker plugin
plugins {
    id 'com.bmuschko.docker-java-application' version '9.3.1'
}

docker {
    javaApplication {
        baseImage = 'openjdk:17-jre-slim'
        maintainer = 'Your Name <your.email@example.com>'
        ports = [8080, 8443]
        images = ["myapp:latest", "myapp:\${project.version}"]
        jvmArgs = ['-Xmx2048m', '-XX:+UseG1GC']
    }
}

// Custom Docker tasks
task buildDockerImage(type: com.bmuschko.gradle.docker.tasks.image.DockerBuildImage) {
    dependsOn 'bootJar'
    inputDir = file('.')
    images.add('myapp:latest')
    images.add("myapp:\${project.version}")
}

task pushDockerImage(type: com.bmuschko.gradle.docker.tasks.image.DockerPushImage) {
    dependsOn 'buildDockerImage'
    images = ['myapp:latest', "myapp:\${project.version}"]
}</pre>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">📦 Multi-Stage Build Pipeline</h4>
              <p class="text-yellow-700 mb-3">Create comprehensive build workflows:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Gradle multi-stage pipeline
task unitTest(type: Test) {
    useJUnitPlatform()
    include '**/*Test.class'
    exclude '**/*IntegrationTest.class'
    
    testLogging {
        events 'passed', 'skipped', 'failed'
    }
}

task integrationTest(type: Test) {
    useJUnitPlatform()
    include '**/*IntegrationTest.class'
    shouldRunAfter unitTest
    
    testLogging {
        events 'passed', 'skipped', 'failed'
    }
}

task performanceTest(type: Test) {
    useJUnitPlatform()
    include '**/*PerformanceTest.class'
    shouldRunAfter integrationTest
    
    systemProperty 'performance.test.enabled', 'true'
}

task securityScan(type: Exec) {
    dependsOn 'build'
    commandLine 'docker', 'run', '--rm', '-v', "\${projectDir}:/workspace",
                'owasp/dependency-check:latest',
                '--scan', '/workspace',
                '--format', 'ALL',
                '--out', '/workspace/build/reports/security'
}

task fullPipeline {
    dependsOn 'clean', 'unitTest', 'integrationTest', 'jacocoTestReport',
              'qualityCheck', 'performanceTest', 'securityScan', 'build'
    
    group = 'build'
    description = 'Run complete build pipeline with all checks'
}

// Task ordering
unitTest.mustRunAfter clean
integrationTest.mustRunAfter unitTest
jacocoTestReport.mustRunAfter integrationTest
qualityCheck.mustRunAfter jacocoTestReport
performanceTest.mustRunAfter qualityCheck
securityScan.mustRunAfter performanceTest
build.mustRunAfter securityScan</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Custom Plugin Development
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">🛠️ Creating Custom Gradle Plugin</h4>
              <p class="text-red-700 mb-3">Build custom plugins for specific requirements:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// buildSrc/src/main/groovy/MyCustomPlugin.groovy
import org.gradle.api.Plugin
import org.gradle.api.Project

class MyCustomPlugin implements Plugin<Project> {
    @Override
    void apply(Project project) {
        // Create extension for configuration
        def extension = project.extensions.create('myCustom', MyCustomExtension)
        
        // Register custom task
        project.tasks.register('generateReport', GenerateReportTask) {
            group = 'reporting'
            description = 'Generate custom project report'
            
            // Configure task with extension values
            outputFile = project.file("\${project.buildDir}/reports/custom-report.html")
            projectName = extension.projectName
            includeTests = extension.includeTests
        }
        
        // Add task to check lifecycle
        project.tasks.named('check').configure {
            dependsOn 'generateReport'
        }
    }
}

// Extension class for configuration
class MyCustomExtension {
    String projectName = 'Default Project'
    boolean includeTests = true
    List<String> excludePatterns = []
}

// Custom task implementation
import org.gradle.api.DefaultTask
import org.gradle.api.tasks.*

class GenerateReportTask extends DefaultTask {
    @Input
    String projectName
    
    @Input
    boolean includeTests
    
    @OutputFile
    File outputFile
    
    @TaskAction
    void generateReport() {
        outputFile.parentFile.mkdirs()
        
        def html = """
        <!DOCTYPE html>
        <html>
        <head><title>Project Report: \${projectName}</title></head>
        <body>
            <h1>Project Report</h1>
            <p>Project: \${projectName}</p>
            <p>Generated: \${new Date()}</p>
            <p>Include Tests: \${includeTests}</p>
        </body>
        </html>
        """
        
        outputFile.text = html
        println "Report generated: \${outputFile.absolutePath}"
    }
}</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🔧 Using Custom Plugin</h4>
              <p class="text-indigo-700 mb-3">Apply and configure custom plugins:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// build.gradle
plugins {
    id 'java'
    id 'MyCustomPlugin' // Apply custom plugin
}

// Configure custom plugin
myCustom {
    projectName = 'My Awesome Project'
    includeTests = true
    excludePatterns = ['**/generated/**', '**/test/resources/**']
}

// Custom plugin can also be applied programmatically
apply plugin: MyCustomPlugin

// Access extension in build script
afterEvaluate {
    println "Project configured: \${myCustom.projectName}"
    println "Include tests: \${myCustom.includeTests}"
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Build Automation Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">✅ Automation Guidelines</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Performance Optimization</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Enable parallel execution</li>
                    <li>• Use build caching effectively</li>
                    <li>• Implement incremental builds</li>
                    <li>• Optimize test execution</li>
                    <li>• Profile build performance</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Quality Assurance</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Fail fast on quality violations</li>
                    <li>• Integrate security scanning</li>
                    <li>• Maintain high test coverage</li>
                    <li>• Automate code formatting</li>
                    <li>• Generate comprehensive reports</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">🎯 Build Pipeline Strategy</h4>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm">
Build Pipeline Stages:
1. 🧹 Clean → Remove previous build artifacts
2. 🔍 Validate → Check project structure and dependencies
3. 🔨 Compile → Compile source code
4. 🧪 Unit Test → Run fast, isolated tests
5. 📦 Package → Create distributable artifacts
6. 🔗 Integration Test → Test component interactions
7. 📊 Quality Check → Code analysis and coverage
8. 🔒 Security Scan → Vulnerability assessment
9. 📈 Performance Test → Load and stress testing
10. 🚀 Deploy → Publish artifacts and deploy</pre>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Common Pitfalls to Avoid</h4>
              <ul class="space-y-2 text-yellow-700 text-sm">
                <li>• <strong>Slow builds:</strong> Not utilizing parallel execution and caching</li>
                <li>• <strong>Flaky tests:</strong> Tests that pass/fail inconsistently</li>
                <li>• <strong>Missing dependencies:</strong> Not declaring all required dependencies</li>
                <li>• <strong>Version conflicts:</strong> Incompatible dependency versions</li>
                <li>• <strong>Environment differences:</strong> Builds work locally but fail in CI</li>
                <li>• <strong>Security vulnerabilities:</strong> Not scanning for known vulnerabilities</li>
                <li>• <strong>Poor error handling:</strong> Builds fail without clear error messages</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Build Automation Example</div>
        
        <div class="text-gray-400 mb-4">// === GRADLE BUILD WITH COMPREHENSIVE AUTOMATION ===</div>
        
        <div class="text-blue-400">plugins</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'java'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'application'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'jacoco'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'checkstyle'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'pmd'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'com.github.spotbugs'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'5.0.13'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'org.springframework.boot'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'3.0.2'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">id</div> <div class="text-green-300">'com.bmuschko.docker-java-application'</div> <div class="text-blue-400">version</div> <div class="text-green-300">'9.3.1'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Project configuration</div><br/>
        <div class="text-blue-400">group</div> = <div class="text-green-300">'com.example'</div><br/>
        <div class="text-blue-400">version</div> = <div class="text-green-300">'1.0.0-SNAPSHOT'</div><br/>
        <div class="text-blue-400">sourceCompatibility</div> = <div class="text-green-300">'17'</div><br/><br/>
        
        <div class="text-gray-400">// Application configuration</div><br/>
        <div class="text-blue-400">application</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">mainClass</div> = <div class="text-green-300">'com.example.Application'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">applicationDefaultJvmArgs</div> = [<div class="text-green-300">'-Xmx1g'</div>, <div class="text-green-300">'-XX:+UseG1GC'</div>]<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Test configuration with automation</div><br/>
        <div class="text-blue-400">test</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">useJUnitPlatform</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">maxParallelForks</div> = Runtime.runtime.<div class="text-yellow-400">availableProcessors</div>().<div class="text-yellow-400">intdiv</div>(<div class="text-green-300">2</div>) ?: <div class="text-green-300">1</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">forkEvery</div> = <div class="text-green-300">100</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">testLogging</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">events</div> <div class="text-green-300">'passed'</div>, <div class="text-green-300">'skipped'</div>, <div class="text-green-300">'failed'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">exceptionFormat</div> = <div class="text-green-300">'full'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// JaCoCo code coverage automation</div><br/>
        <div class="text-blue-400">jacoco</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">toolVersion</div> = <div class="text-green-300">'0.8.8'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">jacocoTestReport</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> test<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">reports</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xml</div>.required = <div class="text-green-300">true</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">html</div>.required = <div class="text-green-300">true</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Code quality automation</div><br/>
        <div class="text-blue-400">checkstyle</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">toolVersion</div> = <div class="text-green-300">'10.7.0'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">configFile</div> = <div class="text-yellow-400">file</div>(<div class="text-green-300">'config/checkstyle/checkstyle.xml'</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ignoreFailures</div> = <div class="text-green-300">false</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">pmd</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">toolVersion</div> = <div class="text-green-300">'6.55.0'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ignoreFailures</div> = <div class="text-green-300">false</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">consoleOutput</div> = <div class="text-green-300">true</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">spotbugs</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">toolVersion</div> = <div class="text-green-300">'4.7.3'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">effort</div> = <div class="text-green-300">'max'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">reportLevel</div> = <div class="text-green-300">'low'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Docker automation</div><br/>
        <div class="text-blue-400">docker</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">javaApplication</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">baseImage</div> = <div class="text-green-300">'openjdk:17-jre-slim'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">maintainer</div> = <div class="text-green-300">'DevOps Team <devops@example.com>'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ports</div> = [<div class="text-green-300">8080</div>, <div class="text-green-300">8443</div>]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">images</div> = [<div class="text-green-300">"myapp:latest"</div>, <div class="text-green-300">"myapp:\${project.version}"</div>]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Custom automation tasks</div><br/>
        <div class="text-blue-400">task</div> <div class="text-yellow-400">unitTest</div>(<div class="text-blue-400">type:</div> Test) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">useJUnitPlatform</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">include</div> <div class="text-green-300">'**/*Test.class'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">exclude</div> <div class="text-green-300">'**/*IntegrationTest.class'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">task</div> <div class="text-yellow-400">integrationTest</div>(<div class="text-blue-400">type:</div> Test) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">useJUnitPlatform</div>()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">include</div> <div class="text-green-300">'**/*IntegrationTest.class'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">shouldRunAfter</div> unitTest<br/>
        }<br/><br/>
        
        <div class="text-blue-400">task</div> <div class="text-yellow-400">qualityCheck</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> <div class="text-green-300">'checkstyleMain'</div>, <div class="text-green-300">'pmdMain'</div>, <div class="text-green-300">'spotbugsMain'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'verification'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Run all code quality checks'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">task</div> <div class="text-yellow-400">securityScan</div>(<div class="text-blue-400">type:</div> Exec) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> <div class="text-green-300">'build'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">commandLine</div> <div class="text-green-300">'docker'</div>, <div class="text-green-300">'run'</div>, <div class="text-green-300">'--rm'</div>, <div class="text-green-300">'-v'</div>, <div class="text-green-300">"\${projectDir}:/workspace"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">'owasp/dependency-check:latest'</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">'--scan'</div>, <div class="text-green-300">'/workspace'</div>, <div class="text-green-300">'--format'</div>, <div class="text-green-300">'ALL'</div><br/>
        }<br/><br/>
        
        <div class="text-blue-400">task</div> <div class="text-yellow-400">fullPipeline</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">dependsOn</div> <div class="text-green-300">'clean'</div>, <div class="text-green-300">'unitTest'</div>, <div class="text-green-300">'integrationTest'</div>, <div class="text-green-300">'jacocoTestReport'</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">'qualityCheck'</div>, <div class="text-green-300">'securityScan'</div>, <div class="text-green-300">'dockerBuildImage'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">group</div> = <div class="text-green-300">'build'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">description</div> = <div class="text-green-300">'Run complete automated build pipeline'</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Task ordering for pipeline</div><br/>
        <div class="text-blue-400">unitTest</div>.<div class="text-yellow-400">mustRunAfter</div> clean<br/>
        <div class="text-blue-400">integrationTest</div>.<div class="text-yellow-400">mustRunAfter</div> unitTest<br/>
        <div class="text-blue-400">jacocoTestReport</div>.<div class="text-yellow-400">mustRunAfter</div> integrationTest<br/>
        <div class="text-blue-400">qualityCheck</div>.<div class="text-yellow-400">mustRunAfter</div> jacocoTestReport<br/>
        <div class="text-blue-400">securityScan</div>.<div class="text-yellow-400">mustRunAfter</div> qualityCheck<br/>
        <div class="text-blue-400">dockerBuildImage</div>.<div class="text-yellow-400">mustRunAfter</div> securityScan<br/><br/>
        
        <div class="text-gray-400 mb-4">// === MAVEN EQUIVALENT AUTOMATION ===</div>
        
        <div class="text-gray-400"># Maven commands for automation</div><br/>
        <div class="text-blue-400">mvn</div> clean compile test<br/>
        <div class="text-blue-400">mvn</div> jacoco:report<br/>
        <div class="text-blue-400">mvn</div> checkstyle:check pmd:check spotbugs:check<br/>
        <div class="text-blue-400">mvn</div> failsafe:integration-test failsafe:verify<br/>
        <div class="text-blue-400">mvn</div> package docker:build<br/><br/>
        
        <div class="text-gray-400 mb-4">// === GRADLE AUTOMATION COMMANDS ===</div>
        
        <div class="text-gray-400"># Run full automated pipeline</div><br/>
        <div class="text-blue-400">./gradlew</div> fullPipeline<br/><br/>
        
        <div class="text-gray-400"># Run specific automation stages</div><br/>
        <div class="text-blue-400">./gradlew</div> unitTest integrationTest<br/>
        <div class="text-blue-400">./gradlew</div> qualityCheck<br/>
        <div class="text-blue-400">./gradlew</div> jacocoTestReport<br/>
        <div class="text-blue-400">./gradlew</div> securityScan<br/>
        <div class="text-blue-400">./gradlew</div> dockerBuildImage<br/><br/>
        
        <div class="text-gray-400"># Parallel execution for performance</div><br/>
        <div class="text-blue-400">./gradlew</div> fullPipeline --parallel --build-cache<br/><br/>
        
        <div class="text-gray-400"># Continuous build for development</div><br/>
        <div class="text-blue-400">./gradlew</div> build --continuous
      </div>
    `,
    exercise: `
      **🎯 Build Automation and Plugins Exercises**

      **Exercise 1: Maven Plugin Configuration**
      Set up comprehensive Maven build automation:
      - Configure Maven Compiler plugin with custom options
      - Add Surefire plugin for unit tests with custom includes/excludes
      - Set up Failsafe plugin for integration tests
      - Configure JaCoCo plugin for code coverage with thresholds
      - Add Checkstyle plugin with custom rules
      - Test all plugins and verify their outputs

      **Exercise 2: Gradle Plugin Ecosystem**
      Explore and configure essential Gradle plugins:
      - Apply and configure core Java plugins
      - Add code quality plugins (Checkstyle, PMD, SpotBugs)
      - Set up JaCoCo for coverage reporting
      - Configure test retry plugin for flaky tests
      - Add Docker plugin for containerization
      - Create custom tasks that depend on plugin tasks

      **Exercise 3: Code Quality Automation**
      Implement comprehensive code quality checks:
      - Set up Checkstyle with custom configuration file
      - Configure PMD with project-specific rules
      - Add SpotBugs for static analysis
      - Set up JaCoCo with coverage thresholds
      - Create a quality gate that fails builds on violations
      - Generate and analyze quality reports

      **Exercise 4: Custom Plugin Development**
      Create a custom Gradle plugin:
      - Develop a plugin that generates project documentation
      - Create custom tasks with input/output annotations
      - Add configuration extension for plugin customization
      - Implement proper task dependencies and ordering
      - Test the plugin in a sample project
      - Package and distribute the plugin

      **Exercise 5: Multi-Stage Build Pipeline**
      Design and implement a comprehensive build pipeline:
      - Create separate tasks for unit tests, integration tests, and performance tests
      - Add security scanning with OWASP dependency check
      - Implement Docker image building and pushing
      - Set up proper task ordering and dependencies
      - Add parallel execution where possible
      - Create a single command to run the entire pipeline

      **Exercise 6: Performance Optimization**
      Optimize build performance through automation:
      - Enable parallel test execution
      - Configure build caching for faster builds
      - Implement incremental compilation
      - Set up daemon processes for Gradle
      - Profile build performance and identify bottlenecks
      - Compare build times before and after optimizations

      **Exercise 7: CI/CD Integration Preparation**
      Prepare builds for continuous integration:
      - Configure builds to work in headless environments
      - Set up proper test reporting for CI systems
      - Add build notifications and status reporting
      - Create different build profiles for different environments
      - Implement artifact publishing to repositories
      - Document the complete build process

      **Exercise 8: Advanced Automation Scenarios**
      Implement complex automation workflows:
      - Set up conditional task execution based on changed files
      - Create environment-specific build configurations
      - Implement automatic version bumping
      - Add license checking and dependency vulnerability scanning
      - Create build health monitoring and reporting
      - Set up automated cleanup of old artifacts

      **Deliverable:**
      Create a fully automated build system demonstrating all learned concepts: comprehensive plugin configuration, custom plugin development, multi-stage pipeline, performance optimization, and CI/CD readiness. Include documentation of the automation strategy and performance benchmarks.
    `
  }
};