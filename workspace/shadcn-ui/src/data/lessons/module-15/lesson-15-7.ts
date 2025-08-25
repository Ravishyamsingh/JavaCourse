import { LessonContent } from '../../types/LessonTypes';

export const lesson_15_7: LessonContent = {
  title: 'CI/CD Pipeline Integration',
  type: 'lesson',
  duration: '50 min',
  module: 'Build Tools and Project Management',
  content: {
    overview: 'Master the integration of Maven and Gradle builds with modern CI/CD pipelines. Learn how to configure automated builds, testing, quality gates, security scanning, and deployment processes using popular CI/CD platforms like GitHub Actions, Jenkins, GitLab CI, and Azure DevOps.',
    objectives: [
      'Understand CI/CD principles and build tool integration',
      'Configure automated builds for Maven and Gradle projects',
      'Implement comprehensive testing pipelines with quality gates',
      'Set up security scanning and vulnerability assessment',
      'Master artifact management and deployment strategies',
      'Learn platform-specific CI/CD configurations',
      'Implement monitoring and notification systems'
    ],
    theory: `
      <div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          CI/CD Pipeline Integration
        </h1>
        <p class="mt-3 text-cyan-100 text-lg">Automating build, test, and deployment workflows</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            CI/CD Fundamentals
          </h2>
          
          <div class="space-y-6">
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">🔄 CI/CD Pipeline Overview</h4>
              <p class="text-cyan-700 mb-3">Understanding the continuous integration and deployment workflow:</p>
              <div class="bg-white p-4 rounded border">
                <pre class="text-sm">
CI/CD Pipeline Stages:
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│   Source    │──▶│    Build    │──▶│    Test     │──▶│   Quality   │
│   Control   │   │  & Compile  │   │   & Verify  │   │   Gates     │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘
                                                              │
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│   Deploy    │◀──│   Package   │◀──│   Security  │◀──│  Artifact   │
│ & Monitor   │   │ & Artifact  │   │   Scan      │   │  Storage    │
└─────────────┘   └─────────────┘   └─────────────┘   └─────────────┘</pre>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Build Tool Integration Benefits</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">✅ Advantages</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Consistency:</strong> Same build process everywhere</li>
                    <li>• <strong>Automation:</strong> Reduced manual intervention</li>
                    <li>• <strong>Fast Feedback:</strong> Quick detection of issues</li>
                    <li>• <strong>Quality Assurance:</strong> Automated testing and checks</li>
                    <li>• <strong>Deployment Automation:</strong> Reliable releases</li>
                    <li>• <strong>Traceability:</strong> Complete audit trail</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded border">
                  <h5 class="font-bold text-orange-800 mb-2">🔧 Key Components</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Build Scripts:</strong> Maven/Gradle configurations</li>
                    <li>• <strong>Pipeline Definitions:</strong> CI/CD workflow files</li>
                    <li>• <strong>Environment Configuration:</strong> Target environments</li>
                    <li>• <strong>Artifact Repositories:</strong> Binary storage</li>
                    <li>• <strong>Monitoring:</strong> Build and deployment metrics</li>
                    <li>• <strong>Notifications:</strong> Status updates and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            GitHub Actions Integration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🚀 GitHub Actions Workflow</h4>
              <p class="text-purple-700 mb-3">Complete CI/CD pipeline using GitHub Actions:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        java: [ '11', '17', '21' ]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      with:
        fetch-depth: 0
    
    - name: Set up JDK \${{ matrix.java }}
      uses: actions/setup-java@v3
      with:
        java-version: \${{ matrix.java }}
        distribution: 'temurin'
        cache: 'gradle'
    
    - name: Run tests
      run: ./gradlew test jacocoTestReport
    
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results-java-\${{ matrix.java }}
        path: |
          build/reports/tests/
          build/reports/jacoco/
  
  quality-gate:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      with:
        fetch-depth: 0
    
    - name: Set up JDK
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: 'gradle'
    
    - name: Run quality checks
      run: |
        ./gradlew check jacocoTestReport sonarqube \
          -Dsonar.projectKey=\${{ github.repository_owner }}_\${{ github.event.repository.name }} \
          -Dsonar.host.url=\${{ secrets.SONAR_HOST_URL }} \
          -Dsonar.login=\${{ secrets.SONAR_TOKEN }}
    
    - name: Security scan
      run: ./gradlew dependencyCheckAnalyze</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Jenkins Pipeline Integration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">🔧 Jenkins Declarative Pipeline</h4>
              <p class="text-green-700 mb-3">Comprehensive Jenkins pipeline for Java projects:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Jenkinsfile
pipeline {
    agent any
    
    tools {
        jdk 'JDK-17'
        gradle 'Gradle-8.5'
    }
    
    environment {
        GRADLE_OPTS = '-Dorg.gradle.daemon=false'
        JAVA_OPTS = '-Xmx2g -XX:+UseG1GC'
    }
    
    stages {
        stage('Build') {
            steps {
                sh './gradlew clean compileJava compileTestJava'
            }
        }
        
        stage('Test') {
            parallel {
                stage('Unit Tests') {
                    steps {
                        sh './gradlew test'
                    }
                    post {
                        always {
                            publishTestResults testResultsPattern: 'build/test-results/test/*.xml'
                        }
                    }
                }
                
                stage('Integration Tests') {
                    steps {
                        sh './gradlew integrationTest'
                    }
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh './gradlew sonarqube'
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        
        stage('Package') {
            when {
                branch 'main'
            }
            steps {
                sh './gradlew bootJar'
                archiveArtifacts artifacts: 'build/libs/*.jar'
            }
        }
    }
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Best Practices and Optimization
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">✅ CI/CD Best Practices</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Pipeline Design</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Fail Fast:</strong> Run quick tests first</li>
                    <li>• <strong>Parallel Execution:</strong> Run independent stages in parallel</li>
                    <li>• <strong>Caching:</strong> Cache dependencies and build artifacts</li>
                    <li>• <strong>Incremental Builds:</strong> Build only what changed</li>
                    <li>• <strong>Environment Parity:</strong> Keep environments consistent</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Security and Quality</h5>
                  <ul class="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Secret Management:</strong> Use secure secret storage</li>
                    <li>• <strong>Quality Gates:</strong> Enforce quality thresholds</li>
                    <li>• <strong>Security Scanning:</strong> Automated vulnerability checks</li>
                    <li>• <strong>Compliance:</strong> Audit trails and approvals</li>
                    <li>• <strong>Monitoring:</strong> Track pipeline performance</li>
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
        <div class="text-yellow-400 mb-4">// Complete CI/CD Pipeline Example</div>
        
        <div class="text-gray-400 mb-4">// === GITHUB ACTIONS COMPREHENSIVE PIPELINE ===</div>
        
        <div class="text-gray-400"># .github/workflows/complete-pipeline.yml</div><br/>
        <div class="text-blue-400">name:</div> <div class="text-green-300">'Complete CI/CD Pipeline'</div><br/><br/>
        
        <div class="text-blue-400">on:</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">push:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">branches:</div> [ <div class="text-green-300">main</div>, <div class="text-green-300">develop</div> ]<br/>
        &nbsp;&nbsp;<div class="text-blue-400">pull_request:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">branches:</div> [ <div class="text-green-300">main</div> ]<br/><br/>
        
        <div class="text-blue-400">env:</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">JAVA_VERSION:</div> <div class="text-green-300">'17'</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">GRADLE_OPTS:</div> <div class="text-green-300">'-Dorg.gradle.daemon=false'</div><br/><br/>
        
        <div class="text-blue-400">jobs:</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">build-and-test:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runs-on:</div> <div class="text-green-300">ubuntu-latest</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">strategy:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">matrix:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">java:</div> [ <div class="text-green-300">'11'</div>, <div class="text-green-300">'17'</div>, <div class="text-green-300">'21'</div> ]<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Checkout Repository'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">uses:</div> <div class="text-green-300">actions/checkout@v4</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Set up JDK \${{ matrix.java }}'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">uses:</div> <div class="text-green-300">actions/setup-java@v3</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">with:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">java-version:</div> <div class="text-green-300">'\${{ matrix.java }}'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">distribution:</div> <div class="text-green-300">'temurin'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">cache:</div> <div class="text-green-300">'gradle'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Build Application'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> <div class="text-green-300">./gradlew build --build-cache</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Run Tests'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> <div class="text-green-300">./gradlew test jacocoTestReport</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">quality-gate:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runs-on:</div> <div class="text-green-300">ubuntu-latest</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">needs:</div> <div class="text-green-300">build-and-test</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Code Quality Analysis'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> <div class="text-green-300">./gradlew sonarqube</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Security Scan'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> <div class="text-green-300">./gradlew dependencyCheckAnalyze</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">deploy:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runs-on:</div> <div class="text-green-300">ubuntu-latest</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">needs:</div> [ <div class="text-green-300">build-and-test</div>, <div class="text-green-300">quality-gate</div> ]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if:</div> <div class="text-green-300">github.ref == 'refs/heads/main'</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Build Docker Image'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> <div class="text-green-300">docker build -t myapp:\${{ github.sha }} .</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">'Deploy to Production'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> <div class="text-green-300">kubectl set image deployment/myapp myapp=myapp:\${{ github.sha }}</div><br/><br/>
        
        <div class="text-gray-400 mb-4">// === DOCKERFILE FOR CONTAINERIZATION ===</div>
        
        <div class="text-blue-400">FROM</div> <div class="text-green-300">openjdk:17-jdk-slim</div> <div class="text-blue-400">AS</div> <div class="text-green-300">builder</div><br/>
        <div class="text-blue-400">WORKDIR</div> <div class="text-green-300">/app</div><br/>
        <div class="text-blue-400">COPY</div> <div class="text-green-300">gradlew .</div><br/>
        <div class="text-blue-400">COPY</div> <div class="text-green-300">gradle gradle</div><br/>
        <div class="text-blue-400">COPY</div> <div class="text-green-300">build.gradle .</div><br/>
        <div class="text-blue-400">RUN</div> <div class="text-green-300">./gradlew dependencies</div><br/>
        <div class="text-blue-400">COPY</div> <div class="text-green-300">src src</div><br/>
        <div class="text-blue-400">RUN</div> <div class="text-green-300">./gradlew bootJar</div><br/><br/>
        
        <div class="text-blue-400">FROM</div> <div class="text-green-300">openjdk:17-jre-slim</div><br/>
        <div class="text-blue-400">WORKDIR</div> <div class="text-green-300">/app</div><br/>
        <div class="text-blue-400">COPY</div> <div class="text-green-300">--from=builder /app/build/libs/*.jar app.jar</div><br/>
        <div class="text-blue-400">EXPOSE</div> <div class="text-green-300">8080</div><br/>
        <div class="text-blue-400">ENTRYPOINT</div> [<div class="text-green-300">"java"</div>, <div class="text-green-300">"-jar"</div>, <div class="text-green-300">"app.jar"</div>]
      </div>
    `,
    exercise: `
      **🎯 CI/CD Pipeline Integration Exercises**

      **Exercise 1: GitHub Actions Setup**
      Create a comprehensive GitHub Actions workflow:
      - Set up a multi-stage pipeline with build, test, and deploy stages
      - Configure matrix builds for multiple Java versions
      - Add caching for Gradle dependencies
      - Implement parallel test execution
      - Set up artifact publishing and Docker image building
      - Configure environment-specific deployments

      **Exercise 2: Jenkins Pipeline Implementation**
      Build a complete Jenkins declarative pipeline:
      - Create a Jenkinsfile with multiple stages
      - Configure parallel execution for tests
      - Add SonarQube integration for code quality
      - Set up artifact archiving and publishing
      - Implement approval gates for production deployment
      - Add notification systems (email, Slack)

      **Exercise 3: GitLab CI/CD Configuration**
      Implement GitLab CI/CD pipeline:
      - Create .gitlab-ci.yml with comprehensive stages
      - Configure Docker-in-Docker for containerization
      - Set up GitLab Container Registry integration
      - Implement environment-specific deployments
      - Add security scanning and dependency checking
      - Configure manual approval for production

      **Exercise 4: Quality Gates and Security**
      Implement comprehensive quality and security checks:
      - Set up SonarQube quality gates with thresholds
      - Configure OWASP dependency checking
      - Add static code analysis tools
      - Implement security vulnerability scanning
      - Set up license compliance checking
      - Create quality reports and dashboards

      **Exercise 5: Multi-environment Deployment**
      Design deployment strategies for multiple environments:
      - Configure development, staging, and production environments
      - Implement blue-green deployment strategy
      - Set up canary deployments with traffic splitting
      - Configure rollback mechanisms
      - Add health checks and monitoring
      - Implement feature flags for controlled releases

      **Exercise 6: Performance Optimization**
      Optimize CI/CD pipeline performance:
      - Implement build caching strategies
      - Configure parallel job execution
      - Optimize Docker layer caching
      - Set up incremental builds
      - Measure and improve build times
      - Create performance benchmarks and monitoring

      **Exercise 7: Monitoring and Observability**
      Set up comprehensive monitoring:
      - Configure build metrics collection
      - Set up deployment monitoring
      - Implement alerting for failed builds
      - Create dashboards for pipeline visibility
      - Add log aggregation and analysis
      - Set up performance tracking

      **Exercise 8: Advanced Pipeline Patterns**
      Implement advanced CI/CD patterns:
      - Create reusable pipeline templates
      - Implement pipeline as code with version control
      - Set up cross-repository dependencies
      - Configure conditional pipeline execution
      - Implement pipeline orchestration for microservices
      - Add compliance and audit trails

      **Deliverable:**
      Create a production-ready CI/CD pipeline demonstrating all learned concepts: comprehensive automation, quality gates, security scanning, multi-environment deployment, monitoring, and optimization. Include documentation of the pipeline architecture and operational procedures.
    `
  }
};