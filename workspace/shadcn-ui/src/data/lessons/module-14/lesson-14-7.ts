import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_7: LessonContent = {
  title: 'Continuous Integration and Testing',
  type: 'lesson',
  duration: '50 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Learn how to integrate testing into CI/CD pipelines, automate test execution, and implement quality gates. Understand best practices for continuous testing in modern software development workflows.',
    objectives: [
      'Understand the role of testing in CI/CD pipelines',
      'Configure automated testing in popular CI platforms',
      'Implement quality gates and build failure conditions',
      'Learn parallel test execution and optimization strategies',
      'Master test reporting and notification systems',
      'Apply continuous testing best practices'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Continuous Integration and Testing
        </h1>
        <p class="mt-3 text-green-100 text-lg">Automating quality assurance in modern development workflows</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            CI/CD and Testing Integration
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Continuous Integration (CI) and Continuous Deployment (CD) rely heavily on automated testing to ensure code quality 
            and prevent regressions. Testing becomes the safety net that allows teams to deploy frequently with confidence.
          </p>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🔄 CI/CD Testing Pipeline</h4>
            <ul class="text-green-700 space-y-1">
              <li>• <strong>Commit Stage:</strong> Unit tests and static analysis</li>
              <li>• <strong>Build Stage:</strong> Integration tests and packaging</li>
              <li>• <strong>Test Stage:</strong> End-to-end and performance tests</li>
              <li>• <strong>Deploy Stage:</strong> Smoke tests and health checks</li>
              <li>• <strong>Monitor Stage:</strong> Production monitoring and alerts</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">✅ Benefits of CI Testing</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Early detection of integration issues</li>
                <li>• Consistent test execution environment</li>
                <li>• Automated quality gates</li>
                <li>• Faster feedback to developers</li>
                <li>• Reduced manual testing effort</li>
                <li>• Improved code quality over time</li>
                <li>• Confidence in deployments</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🎯 Testing Strategy in CI</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Fast feedback with unit tests</li>
                <li>• Comprehensive integration testing</li>
                <li>• Selective end-to-end testing</li>
                <li>• Parallel test execution</li>
                <li>• Test result aggregation</li>
                <li>• Failure analysis and reporting</li>
                <li>• Test environment management</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            GitHub Actions CI Configuration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Basic Java CI Workflow</h4>
              <p class="text-blue-700 mb-3">GitHub Actions workflow for Java testing:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
name: CI Pipeline
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
        java-version: [11, 17, 21]
    
    steps:
    - uses: actions/checkout@v3
    - name: Set up JDK
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
    - name: Cache Maven dependencies
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: maven-deps-hash
    - name: Run tests
      run: mvn clean test
    - name: Upload test results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results
        path: target/surefire-reports/</pre>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Advanced CI with Quality Gates</h4>
              <p class="text-purple-700 mb-3">Enhanced workflow with coverage and quality checks:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
  quality:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
    - uses: actions/checkout@v3
      with:
        fetch-depth: 0
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
    - name: Run tests with coverage
      run: mvn clean verify jacoco:report
    - name: SonarQube Scan
      env:
        GITHUB_TOKEN: github-token
        SONAR_TOKEN: sonar-token
      run: mvn sonar:sonar
    - name: Quality Gate Check
      run: |
        echo "Checking quality gate status..."
    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        file: target/site/jacoco/jacoco.xml</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Jenkins Pipeline Configuration
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Declarative Pipeline</h4>
              <p class="text-purple-700 mb-3">Jenkins pipeline for comprehensive testing:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
pipeline {
    agent any
    tools {
        maven 'Maven-3.8.1'
        jdk 'JDK-17'
    }
    environment {
        MAVEN_OPTS = '-Xmx1024m'
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
        stage('Integration Tests') {
            steps {
                sh 'mvn verify -P integration-tests'
            }
        }
        stage('Quality Gate') {
            steps {
                script {
                    def qualityGate = waitForQualityGate()
                    if (qualityGate.status != 'OK') {
                        error "Quality gate failed"
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
        failure {
            emailext (
                subject: "Build Failed",
                body: "Build failed. Check console output.",
                to: "team@company.com"
            )
        }
    }
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Test Optimization and Parallelization
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Maven Parallel Execution</h4>
              <p class="text-orange-700 mb-3">Configure Maven for parallel test execution:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
&lt;plugin&gt;
    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
    &lt;artifactId&gt;maven-surefire-plugin&lt;/artifactId&gt;
    &lt;configuration&gt;
        &lt;parallel&gt;methods&lt;/parallel&gt;
        &lt;threadCount&gt;4&lt;/threadCount&gt;
        &lt;forkCount&gt;2C&lt;/forkCount&gt;
        &lt;reuseForks&gt;true&lt;/reuseForks&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;</pre>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">JUnit 5 Parallel Execution</h4>
              <p class="text-teal-700 mb-3">Enable parallel execution in JUnit 5:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
# junit-platform.properties
junit.jupiter.execution.parallel.enabled=true
junit.jupiter.execution.parallel.mode.default=concurrent

@Execution(ExecutionMode.CONCURRENT)
class ParallelTest {
    @Test
    @Execution(ExecutionMode.CONCURRENT)
    void testMethod1() {
        // Runs in parallel
    }
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Quality Gates and Build Policies
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Coverage-Based Quality Gates</h4>
              <p class="text-red-700 mb-3">Implement coverage thresholds that fail builds:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
&lt;plugin&gt;
    &lt;groupId&gt;org.jacoco&lt;/groupId&gt;
    &lt;artifactId&gt;jacoco-maven-plugin&lt;/artifactId&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;id&gt;check&lt;/id&gt;
            &lt;goals&gt;
                &lt;goal&gt;check&lt;/goal&gt;
            &lt;/goals&gt;
            &lt;configuration&gt;
                &lt;rules&gt;
                    &lt;rule&gt;
                        &lt;limits&gt;
                            &lt;limit&gt;
                                &lt;counter&gt;LINE&lt;/counter&gt;
                                &lt;minimum&gt;0.80&lt;/minimum&gt;
                            &lt;/limit&gt;
                        &lt;/limits&gt;
                    &lt;/rule&gt;
                &lt;/rules&gt;
            &lt;/configuration&gt;
        &lt;/execution&gt;
    &lt;/executions&gt;
&lt;/plugin&gt;</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices and Anti-Patterns
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ CI Testing Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Run fast tests first (fail fast principle)</li>
                  <li>• Use parallel execution for test optimization</li>
                  <li>• Implement proper test isolation</li>
                  <li>• Cache dependencies to speed up builds</li>
                  <li>• Use test containers for consistent environments</li>
                  <li>• Implement comprehensive quality gates</li>
                  <li>• Monitor and optimize build times</li>
                  <li>• Provide clear failure notifications</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Common Anti-Patterns</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Running all tests sequentially</li>
                  <li>• Ignoring flaky tests instead of fixing them</li>
                  <li>• Not failing builds on quality gate violations</li>
                  <li>• Running expensive tests on every commit</li>
                  <li>• Poor test environment management</li>
                  <li>• Inadequate failure notifications</li>
                  <li>• Not monitoring build performance</li>
                  <li>• Skipping tests to meet deadlines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete CI/CD Pipeline Example with Testing</div>
        
        <div class="text-gray-400 mb-4">// === GITHUB ACTIONS WORKFLOW ===</div>
        
        <div class="text-gray-400"># .github/workflows/ci-cd.yml</div><br/>
        <div class="text-blue-400">name:</div> <div class="text-green-300">Complete CI/CD Pipeline</div><br/><br/>
        
        <div class="text-blue-400">on:</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">push:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">branches:</div> [ main, develop ]<br/>
        &nbsp;&nbsp;<div class="text-blue-400">pull_request:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">branches:</div> [ main ]<br/><br/>
        
        <div class="text-blue-400">jobs:</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">unit-tests:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runs-on:</div> ubuntu-latest<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">uses:</div> actions/checkout@v3<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">Set up JDK</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">uses:</div> actions/setup-java@v3<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">with:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">java-version:</div> <div class="text-green-300">'17'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">Run tests</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> mvn clean test<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">integration-tests:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">needs:</div> unit-tests<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">runs-on:</div> ubuntu-latest<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">services:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">postgres:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">image:</div> postgres:13<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">env:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">POSTGRES_PASSWORD:</div> postgres<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps:</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;- <div class="text-blue-400">name:</div> <div class="text-green-300">Run integration tests</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">run:</div> mvn verify -P integration-tests<br/><br/>
        
        <div class="text-gray-400 mb-4">// === JENKINS PIPELINE ===</div>
        
        <div class="text-blue-400">pipeline</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">agent</div> any<br/>
        &nbsp;&nbsp;<div class="text-blue-400">stages</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">stage</div>(<div class="text-green-300">'Parallel Tests'</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">parallel</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">stage</div>(<div class="text-green-300">'Unit Tests'</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh <div class="text-green-300">'mvn test'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">stage</div>(<div class="text-green-300">'Integration Tests'</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh <div class="text-green-300">'mvn verify -P integration-tests'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">stage</div>(<div class="text-green-300">'Quality Gate'</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">steps</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sh <div class="text-green-300">'mvn jacoco:report sonar:sonar'</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === QUALITY GATE SCRIPT ===</div>
        
        <div class="text-gray-400">#!/bin/bash</div><br/>
        <div class="text-blue-400">echo</div> <div class="text-green-300">"Running quality checks..."</div><br/><br/>
        
        <div class="text-blue-400">COVERAGE</div>=$(mvn jacoco:report | grep -o <div class="text-green-300">'[0-9]*%'</div>)<br/>
        <div class="text-blue-400">if</div> [ <div class="text-green-300">"$COVERAGE"</div> -lt 80 ]; <div class="text-blue-400">then</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">echo</div> <div class="text-green-300">"❌ Coverage below threshold"</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">exit</div> 1<br/>
        <div class="text-blue-400">fi</div><br/><br/>
        
        <div class="text-blue-400">echo</div> <div class="text-green-300">"✅ All quality gates passed!"</div>
      </div>
    `,
    exercise: `
1) Write a GitHub Actions workflow that runs unit tests on every push to main branch.
2) Create a Maven configuration for parallel test execution with 4 threads.
3) Implement a quality gate script that fails the build if test coverage is below 80%.
4) Write a Jenkins pipeline stage that runs integration tests with database setup.
5) Create a test configuration that runs different test suites for unit and integration tests.
`
  }
};