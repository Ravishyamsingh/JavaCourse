import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_1: LessonContent = {
  title: 'Introduction to Maven',
  type: 'lesson',
  duration: '30 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Learn the fundamentals of Apache Maven, a powerful build automation and project management tool for Java projects. Understand how Maven simplifies project setup, dependency management, and build processes.',
    objectives: [
      'Understand what Maven is and its core concepts',
      'Learn about the Maven build lifecycle and phases',
      'Master the Project Object Model (POM) structure',
      'Explore Maven directory structure conventions',
      'Discover Maven repositories and coordinates',
      'Set up Maven in your development environment'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Maven
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Streamlining Java project management and builds</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Maven?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Apache Maven is a powerful build automation and project management tool primarily used for Java projects. 
            It addresses two aspects of building software: first, it describes how software is built, and second, 
            it describes its dependencies.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Core Principles of Maven</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Convention over Configuration:</strong> Standardized project structure and naming conventions</li>
              <li>• <strong>Declarative Configuration:</strong> Project information defined in XML (pom.xml)</li>
              <li>• <strong>Dependency Management:</strong> Automatic handling of library dependencies</li>
              <li>• <strong>Build Lifecycle:</strong> Standardized phases for building, testing, and packaging</li>
              <li>• <strong>Plugin Architecture:</strong> Extensible through plugins for various tasks</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits of Maven</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Standardized project structure across teams</li>
                <li>• Automated dependency resolution</li>
                <li>• Consistent build process</li>
                <li>• Easy project setup and onboarding</li>
                <li>• Rich ecosystem of plugins</li>
                <li>• Integration with IDEs and CI/CD tools</li>
                <li>• Transitive dependency management</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Maven Limitations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• XML-based configuration can be verbose</li>
                <li>• Steep learning curve for complex projects</li>
                <li>• Less flexible than script-based build tools</li>
                <li>• Can be slower for large projects</li>
                <li>• Limited support for non-Java projects</li>
                <li>• Complex inheritance and multi-module setups</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Maven Build Lifecycle
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Default Lifecycle Phases</h4>
              <p class="text-green-700 mb-3">Maven has three built-in build lifecycles with predefined phases:</p>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Clean Lifecycle</h5>
                  <ul class="text-sm space-y-1">
                    <li>• pre-clean</li>
                    <li>• clean</li>
                    <li>• post-clean</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Default Lifecycle</h5>
                  <ul class="text-sm space-y-1">
                    <li>• validate</li>
                    <li>• compile</li>
                    <li>• test</li>
                    <li>• package</li>
                    <li>• verify</li>
                    <li>• install</li>
                    <li>• deploy</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Site Lifecycle</h5>
                  <ul class="text-sm space-y-1">
                    <li>• pre-site</li>
                    <li>• site</li>
                    <li>• post-site</li>
                    <li>• site-deploy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Common Maven Commands</h4>
              <p class="text-blue-700 mb-3">Frequently used Maven commands for project management:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Validate project structure
mvn validate

# Compile source code
mvn compile

# Run unit tests
mvn test

# Package project (JAR, WAR, etc.)
mvn package

# Install artifact to local repository
mvn install

# Deploy artifact to remote repository
mvn deploy

# Clean build artifacts
mvn clean

# Clean and compile
mvn clean compile

# Clean, compile, test, and package
mvn clean package</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Project Object Model (POM)
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">POM Structure</h4>
              <p class="text-purple-700 mb-3">The pom.xml file contains project configuration and metadata:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    
    <name>My Application</name>
    <description>A sample Maven project</description>
    
    <properties>
        <java.version>11</java.version>
        <maven.compiler.source>11</maven.compiler.source>
        <maven.compiler.target>11</maven.compiler.target>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project></pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Maven Coordinates</h4>
              <p class="text-indigo-700 mb-3">Unique identifiers for Maven artifacts:</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>GroupId:</strong> Unique identifier for organization or project</li>
                <li>• <strong>ArtifactId:</strong> Unique identifier for the project or module</li>
                <li>• <strong>Version:</strong> Version number of the project</li>
                <li>• <strong>Packaging:</strong> Type of artifact (jar, war, pom, etc.)</li>
                <li>• <strong>Classifier:</strong> Additional qualifier (optional)</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Maven Directory Structure
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Standard Directory Layout</h4>
              <p class="text-orange-700 mb-3">Maven follows a standard directory structure:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
my-app/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/App.java
│   │   ├── resources/
│   │   │   └── application.properties
│   │   └── webapp/ (for web projects)
│   │       └── WEB-INF/
│   └── test/
│       ├── java/
│       │   └── com/example/AppTest.java
│       └── resources/
└── target/ (generated by Maven)</pre>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Key Directories Explained</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>src/main/java:</strong> Application source code</li>
                <li>• <strong>src/main/resources:</strong> Configuration files and resources</li>
                <li>• <strong>src/test/java:</strong> Unit test source code</li>
                <li>• <strong>src/test/resources:</strong> Test configuration files</li>
                <li>• <strong>target/:</strong> Generated build artifacts and output</li>
                <li>• <strong>pom.xml:</strong> Project configuration file</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Maven Repositories
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Repository Types</h4>
              <p class="text-teal-700 mb-3">Maven uses different types of repositories:</p>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Local Repository</h5>
                  <ul class="text-sm space-y-1">
                    <li>• ~/.m2/repository/</li>
                    <li>• Caches downloaded dependencies</li>
                    <li>• Stores locally built artifacts</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Central Repository</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Default remote repository</li>
                    <li>• Hosted by Maven community</li>
                    <li>• Contains most open-source libraries</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Remote Repository</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Private or third-party repos</li>
                    <li>• Company internal libraries</li>
                    <li>• Custom artifact storage</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Dependency Resolution Process</h4>
              <p class="text-blue-700 mb-3">How Maven resolves dependencies:</p>
              <ol class="space-y-2 text-gray-700 text-sm">
                <li>1. Check local repository first</li>
                <li>2. If not found, check remote repositories</li>
                <li>3. Download dependency to local repository</li>
                <li>4. Resolve transitive dependencies recursively</li>
                <li>5. Handle version conflicts using nearest-wins strategy</li>
              </ol>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Setting Up Maven
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Installation Steps</h4>
              <p class="text-red-700 mb-3">How to install and configure Maven:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# 1. Download Maven from https://maven.apache.org/download.cgi
# 2. Extract to a directory (e.g., /opt/apache-maven)
# 3. Set environment variables:

# On Linux/Mac (add to ~/.bashrc or ~/.zshrc):
export MAVEN_HOME=/opt/apache-maven
export PATH=$MAVEN_HOME/bin:$PATH

# On Windows (set in System Properties):
MAVEN_HOME=C:\\apache-maven
PATH=%MAVEN_HOME%\\bin;%PATH%

# 4. Verify installation:
mvn --version</pre>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Maven Wrapper</h4>
              <p class="text-yellow-700 mb-3">Using Maven Wrapper for project-specific Maven versions:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Generate Maven Wrapper files
mvn wrapper:wrapper

# Use Maven Wrapper (no need to install Maven globally)
./mvnw clean package  # Linux/Mac
mvnw.cmd clean package  # Windows</pre>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Maven Project Example</div>
        
        <div class="text-gray-400 mb-4">// === POM.XML CONFIGURATION ===</div>
        
        <div class="text-blue-400"><?xml version</div>=<div class="text-green-300">"1.0"</div> <div class="text-blue-400">encoding</div>=<div class="text-green-300">"UTF-8"</div>?><br/>
        <div class="text-blue-400"><project</div> <div class="text-blue-400">xmlns</div>=<div class="text-green-300">"http://maven.apache.org/POM/4.0.0"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xmlns:xsi</div>=<div class="text-green-300">"http://www.w3.org/2001/XMLSchema-instance"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xsi:schemaLocation</div>=<div class="text-green-300">"http://maven.apache.org/POM/4.0.0 </div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">http://maven.apache.org/xsd/maven-4.0.0.xsd"</div>><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><modelVersion></div>4.0.0<div class="text-blue-400"></modelVersion></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Project Coordinates --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><groupId></div>com.example<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>maven-tutorial<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><version></div>1.0.0-SNAPSHOT<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><packaging></div>jar<div class="text-blue-400"></packaging></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Project Information --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><name></div>Maven Tutorial Project<div class="text-blue-400"></name></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><description></div>A sample Maven project for learning<div class="text-blue-400"></description></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Properties --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><properties></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><project.build.sourceEncoding></div>UTF-8<div class="text-blue-400"></project.build.sourceEncoding></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><maven.compiler.source></div>11<div class="text-blue-400"></maven.compiler.source></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><maven.compiler.target></div>11<div class="text-blue-400"></maven.compiler.target></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><junit.version></div>5.8.2<div class="text-blue-400"></junit.version></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></properties></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Dependencies --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><dependencies></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- JUnit 5 for testing --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.junit.jupiter<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>junit-jupiter<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div><div class="text-green-300">junit.version</div><div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><scope></div>test<div class="text-blue-400"></scope></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Apache Commons Lang for utilities --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.apache.commons<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>commons-lang3<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div>3.12.0<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></dependencies></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Build Configuration --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><build></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><plugins></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Maven Compiler Plugin --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><plugin></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.apache.maven.plugins<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>maven-compiler-plugin<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div>3.10.1<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></plugin></div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400"><!-- Maven Surefire Plugin for testing --></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><plugin></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.apache.maven.plugins<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>maven-surefire-plugin<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div>3.0.0-M7<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></plugin></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></plugins></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></build></div><br/>
        <div class="text-blue-400"></project></div><br/><br/>
        
        <div class="text-gray-400 mb-4">// === SAMPLE JAVA APPLICATION ===</div>
        
        <div class="text-blue-400">package</div> com.example;<br/><br/>
        
        <div class="text-blue-400">import</div> org.apache.commons.lang3.StringUtils;<br/><br/>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">App</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Hello Maven!"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> text = <div class="text-green-300">"  Hello Maven World  "</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Original: '"</div> + text + <div class="text-green-300">"'"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Trimmed: '"</div> + StringUtils.trim(text) + <div class="text-green-300">"'"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === SAMPLE UNIT TEST ===</div>
        
        <div class="text-blue-400">package</div> com.example;<br/><br/>
        
        <div class="text-blue-400">import</div> org.junit.jupiter.api.Test;<br/>
        <div class="text-blue-400">import static</div> org.junit.jupiter.api.Assertions.*;<br/><br/>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">AppTest</div> {<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">testAppHasAGreeting</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">App</div> app = <div class="text-blue-400">new</div> <div class="text-yellow-400">App</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertNotNull(app);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === MAVEN COMMANDS DEMONSTRATION ===</div>
        
        <div class="text-gray-400"># Validate project structure</div><br/>
        <div class="text-blue-400">mvn</div> validate<br/><br/>
        
        <div class="text-gray-400"># Compile source code</div><br/>
        <div class="text-blue-400">mvn</div> compile<br/><br/>
        
        <div class="text-gray-400"># Run unit tests</div><br/>
        <div class="text-blue-400">mvn</div> test<br/><br/>
        
        <div class="text-gray-400"># Package project into JAR</div><br/>
        <div class="text-blue-400">mvn</div> package<br/><br/>
        
        <div class="text-gray-400"># Install to local repository</div><br/>
        <div class="text-blue-400">mvn</div> install<br/><br/>
        
        <div class="text-gray-400"># Clean build artifacts</div><br/>
        <div class="text-blue-400">mvn</div> clean<br/><br/>
        
        <div class="text-gray-400"># Generate project site documentation</div><br/>
        <div class="text-blue-400">mvn</div> site<br/><br/>
        
        <div class="text-gray-400"># Run with multiple goals</div><br/>
        <div class="text-blue-400">mvn</div> clean compile test package
      </div>
    `,
    exercise: `
      **🎯 Introduction to Maven Exercises**

      **Exercise 1: Maven Installation and Setup**
      Install Maven on your system and verify the installation:
      - Download and install Apache Maven
      - Set up environment variables (MAVEN_HOME, PATH)
      - Verify installation with "mvn --version"
      - Create a simple "Hello World" Maven project using archetype
      - Explore the generated project structure

      **Exercise 2: POM Configuration**
      Create and configure a Maven project with the following requirements:
      - Set up project coordinates (groupId, artifactId, version)
      - Configure Java version properties
      - Add JUnit 5 dependency for testing
      - Add Apache Commons Lang dependency
      - Configure Maven Compiler and Surefire plugins
      - Validate the POM structure

      **Exercise 3: Project Structure Exploration**
      Work with the Maven standard directory structure:
      - Create the standard Maven directory layout
      - Add sample Java classes to src/main/java
      - Add unit tests to src/test/java
      - Add configuration files to src/main/resources
      - Build the project and examine the target directory
      - Understand the relationship between directories and build process

      **Exercise 4: Dependency Management**
      Practice adding and managing dependencies:
      - Add multiple dependencies to your pom.xml
      - Explore transitive dependencies using "mvn dependency:tree"
      - Resolve dependency conflicts by examining version resolution
      - Use dependency exclusions when needed
      - Understand different dependency scopes (compile, test, runtime, provided)

      **Exercise 5: Build Lifecycle Practice**
      Execute various Maven lifecycle phases:
      - Run individual lifecycle phases (validate, compile, test)
      - Execute multiple phases in sequence
      - Clean and rebuild the project
      - Package the application into a JAR file
      - Install the artifact to your local repository
      - Understand how phases are interdependent

      **Exercise 6: Maven Wrapper Usage**
      Set up and use Maven Wrapper for your project:
      - Generate Maven Wrapper files for your project
      - Use the wrapper to build your project
      - Verify that the wrapper uses the correct Maven version
      - Share the wrapper with team members
      - Understand the benefits of using Maven Wrapper

      **Deliverable:**
      Create a comprehensive Maven project that demonstrates understanding of project setup, POM configuration, dependency management, and build lifecycle. Document your learning process and include screenshots of key Maven commands and their outputs.
    `
  }
};