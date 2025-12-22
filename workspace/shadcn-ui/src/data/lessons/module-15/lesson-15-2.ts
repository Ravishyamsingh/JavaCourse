import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_2: LessonContent = {
  title: 'Maven Project Structure and POM',
  type: 'lesson',
  duration: '35 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Master the Maven project structure conventions and dive deep into the Project Object Model (POM). Learn how to configure your pom.xml file effectively, understand project coordinates, manage properties, and set up build configurations for different environments.',
    objectives: [
      'Understand Maven\'s standard directory layout and conventions',
      'Master the structure and elements of the POM.xml file',
      'Learn about project coordinates and artifact identification',
      'Configure project properties and build settings',
      'Understand inheritance and aggregation in Maven projects',
      'Set up profiles for different environments and builds',
      'Explore advanced POM configuration options'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Maven Project Structure and POM
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Building organized and maintainable Java projects</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Maven Standard Directory Layout
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">📁 Complete Project Structure</h4>
              <p class="text-purple-700 mb-3">Maven follows a standardized directory structure that promotes consistency:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
my-maven-project/
├── pom.xml                          # Project Object Model
├── README.md                        # Project documentation
├── .gitignore                       # Version control ignore file
├── src/
│   ├── main/                        # Main source code
│   │   ├── java/                    # Java source files
│   │   │   └── com/example/app/
│   │   │       ├── App.java         # Main application class
│   │   │       ├── model/           # Data models
│   │   │       ├── service/         # Business logic
│   │   │       └── util/            # Utility classes
│   │   ├── resources/               # Configuration files
│   │   │   ├── application.properties
│   │   │   ├── logback.xml
│   │   │   └── static/              # Static web resources
│   │   └── webapp/                  # Web application files (for web projects)
│   │       ├── WEB-INF/
│   │       │   └── web.xml
│   │       ├── css/
│   │       ├── js/
│   │       └── index.html
│   ├── test/                        # Test source code
│   │   ├── java/                    # Unit test files
│   │   │   └── com/example/app/
│   │   │       ├── AppTest.java
│   │   │       └── service/
│   │   └── resources/               # Test configuration files
│   │       └── test.properties
│   └── site/                        # Site documentation (optional)
│       └── site.xml
└── target/                          # Generated files (not in version control)
    ├── classes/                     # Compiled main classes
    ├── test-classes/                # Compiled test classes
    ├── surefire-reports/            # Test reports
    ├── site/                        # Generated site
    └── my-maven-project-1.0.jar     # Final artifact</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Directory Purpose and Benefits</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Main Directories</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>src/main/java:</strong> Production source code</li>
                    <li>• <strong>src/main/resources:</strong> Configuration files, properties</li>
                    <li>• <strong>src/main/webapp:</strong> Web application resources</li>
                    <li>• <strong>src/test/java:</strong> Unit and integration tests</li>
                    <li>• <strong>src/test/resources:</strong> Test-specific configurations</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Generated Directories</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>target/classes:</strong> Compiled production code</li>
                    <li>• <strong>target/test-classes:</strong> Compiled test code</li>
                    <li>• <strong>target/surefire-reports:</strong> Test execution reports</li>
                    <li>• <strong>target*.properties</include>
                <include>**/*.yml</include>
            </includes>
        </resource>
        <resource>
            <directory>src/main/resources</directory>
            <filtering>false</filtering>
            <excludes>
                <exclude>**/*.properties</exclude>
                <exclude>**/*.yml</exclude>
            </excludes>
        </resource>
    </resources>
    
    <!-- Plugin Management -->
    <pluginManagement>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>\${maven-compiler-plugin.version}</version>
                <configuration>
                    <source>\${maven.compiler.source}</source>
                    <target>\${maven.compiler.target}</target>
                    <encoding>\${project.build.sourceEncoding}</encoding>
                </configuration>
            </plugin>
        </plugins>
    </pluginManagement>
    
    <!-- Active Plugins -->
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
        </plugin>
        
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>\${maven-surefire-plugin.version}</version>
            <configuration>
                <includes>
                    <include>**/*Test.java</include>
                    <include>**/*Tests.java</include>
                </includes>
            </configuration>
        </plugin>
    </plugins>
</build></pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Profiles for Environment Management
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">🎭 Profile Configuration</h4>
              <p class="text-red-700 mb-3">Profiles allow different configurations for different environments:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<profiles>
    <!-- Development Profile -->
    <profile>
        <id>development</id>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <environment>dev</environment>
            <database.url>jdbc:h2:mem:devdb</database.url>
            <log.level>DEBUG</log.level>
        </properties>
        <dependencies>
            <dependency>
                <groupId>com.h2database</groupId>
                <artifactId>h2</artifactId>
                <scope>runtime</scope>
            </dependency>
        </dependencies>
    </profile>
    
    <!-- Production Profile -->
    <profile>
        <id>production</id>
        <properties>
            <environment>prod</environment>
            <database.url>jdbc:postgresql://prod-db:5432/myapp</database.url>
            <log.level>WARN</log.level>
        </properties>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-war-plugin</artifactId>
                    <configuration>
                        <webResources>
                            <resource>
                                <directory>src/main/webapp-prod</directory>
                            </resource>
                        </webResources>
                    </configuration>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles></pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🚀 Profile Activation Methods</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Command Line Activation</h5>
                  <pre class="bg-gray-800 text-green-400 p-2 rounded text-sm">
# Activate specific profile
mvn clean package -Pproduction

# Activate multiple profiles
mvn clean package -Pproduction,testing

# Deactivate profile
mvn clean package -P!development</pre>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Automatic Activation</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>activeByDefault:</strong> Default activation</li>
                    <li>• <strong>jdk:</strong> Java version based</li>
                    <li>• <strong>os:</strong> Operating system based</li>
                    <li>• <strong>property:</strong> System property based</li>
                    <li>• <strong>file:</strong> File existence based</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            POM Inheritance and Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">👨‍👩‍👧‍👦 Parent POM Structure</h4>
              <p class="text-teal-700 mb-3">Use parent POMs for shared configuration across projects:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
<!-- Parent POM (company-parent-pom) -->
<project>
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.company</groupId>
    <artifactId>company-parent</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>
    
    <properties>
        <java.version>17</java.version>
        <spring-boot.version>3.0.2</spring-boot.version>
        <junit.version>5.9.2</junit.version>
    </properties>
    
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>\${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project></pre>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">✅ POM Best Practices</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Organization</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Use meaningful groupId (reverse domain)</li>
                    <li>• Keep artifactId descriptive and consistent</li>
                    <li>• Follow semantic versioning</li>
                    <li>• Use properties for version management</li>
                    <li>• Group related dependencies together</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Maintenance</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• Use dependencyManagement for versions</li>
                    <li>• Minimize direct dependencies</li>
                    <li>• Document custom properties</li>
                    <li>• Use profiles judiciously</li>
                    <li>• Keep POM files clean and readable</li>
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
        <div class="text-yellow-400 mb-4">// Complete Maven Project Structure Example</div>
        
        <div class="text-gray-400 mb-4">// === COMPREHENSIVE POM.XML ===</div>
        
        <div class="text-blue-400"><?xml version</div>=<div class="text-green-300">"1.0"</div> <div class="text-blue-400">encoding</div>=<div class="text-green-300">"UTF-8"</div>?><br/>
        <div class="text-blue-400"><project</div> <div class="text-blue-400">xmlns</div>=<div class="text-green-300">"http://maven.apache.org/POM/4.0.0"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xmlns:xsi</div>=<div class="text-green-300">"http://www.w3.org/2001/XMLSchema-instance"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">xsi:schemaLocation</div>=<div class="text-green-300">"http://maven.apache.org/POM/4.0.0</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">http://maven.apache.org/xsd/maven-4.0.0.xsd"</div>><br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400"><modelVersion></div>4.0.0<div class="text-blue-400"></modelVersion></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Project Coordinates --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><groupId></div>com.example.enterprise<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>user-management-service<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><version></div>2.1.0-SNAPSHOT<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><packaging></div>jar<div class="text-blue-400"></packaging></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Project Information --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><name></div>User Management Service<div class="text-blue-400"></name></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><description></div>Enterprise user management microservice<div class="text-blue-400"></description></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><url></div>https://github.com/example/user-management<div class="text-blue-400"></url></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Properties Section --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><properties></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><project.build.sourceEncoding></div>UTF-8<div class="text-blue-400"></project.build.sourceEncoding></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><java.version></div>17<div class="text-blue-400"></java.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><maven.compiler.source></div><div class="text-green-300">\${java.version}</div><div class="text-blue-400"></maven.compiler.source></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><maven.compiler.target></div><div class="text-green-300">\${java.version}</div><div class="text-blue-400"></maven.compiler.target></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><spring-boot.version></div>3.0.2<div class="text-blue-400"></spring-boot.version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><junit.version></div>5.9.2<div class="text-blue-400"></junit.version></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></properties></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Dependencies --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><dependencies></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.springframework.boot<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>spring-boot-starter-web<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><dependency></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.junit.jupiter<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>junit-jupiter<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div><div class="text-green-300">\${junit.version}</div><div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><scope></div>test<div class="text-blue-400"></scope></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></dependency></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></dependencies></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Build Configuration --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><build></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><finalName></div><div class="text-green-300">\${project.artifactId}</div>-<div class="text-green-300">\${project.version}</div><div class="text-blue-400"></finalName></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><plugins></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><plugin></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><groupId></div>org.apache.maven.plugins<div class="text-blue-400"></groupId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><artifactId></div>maven-compiler-plugin<div class="text-blue-400"></artifactId></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><version></div>3.10.1<div class="text-blue-400"></version></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></plugin></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></plugins></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></build></div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400"><!-- Profiles --></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"><profiles></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><profile></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><id></div>development<div class="text-blue-400"></id></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><activation></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"><activeByDefault></div>true<div class="text-blue-400"></activeByDefault></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></activation></div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400"></profile></div><br/>
        &nbsp;&nbsp;<div class="text-blue-400"></profiles></div><br/>
        <div class="text-blue-400"></project></div>
      </div>
    `,
    exercise: `
1) Create a Maven POM file with proper project coordinates and explain each coordinate's purpose.
2) Set up Maven profiles for development and production environments with different configurations.
3) Demonstrate POM inheritance by creating a parent POM and child modules.
4) Configure Maven properties and show how they are used in dependency versions and plugin configurations.
5) Create a multi-module Maven project with proper inter-module dependencies.
`
  }
};
