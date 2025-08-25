import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_6: LessonContent = {
  title: 'Code Coverage and Quality Metrics',
  type: 'lesson',
  duration: '45 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Learn about code coverage metrics, quality measurement tools, and how to interpret and improve code quality indicators. Understand the relationship between test coverage and code quality.',
    objectives: [
      'Understand different types of code coverage metrics',
      'Learn to use JaCoCo for Java code coverage analysis',
      'Master SonarQube for comprehensive code quality assessment',
      'Interpret coverage reports and quality metrics',
      'Implement quality gates and thresholds',
      'Balance coverage goals with meaningful testing'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Code Coverage and Quality Metrics
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Measuring and improving code quality through metrics and analysis</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Code Coverage
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Code coverage is a metric that measures the percentage of code that is executed during automated tests. 
            It helps identify untested parts of your codebase and provides insights into the thoroughness of your test suite.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📊 Types of Code Coverage</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Line Coverage:</strong> Percentage of executable lines covered by tests</li>
              <li>• <strong>Branch Coverage:</strong> Percentage of decision branches executed</li>
              <li>• <strong>Function Coverage:</strong> Percentage of functions called by tests</li>
              <li>• <strong>Statement Coverage:</strong> Percentage of statements executed</li>
              <li>• <strong>Condition Coverage:</strong> Percentage of boolean conditions evaluated</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits of Code Coverage</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Identifies untested code areas</li>
                <li>• Provides objective testing metrics</li>
                <li>• Helps maintain test quality over time</li>
                <li>• Supports refactoring confidence</li>
                <li>• Enables quality gate enforcement</li>
                <li>• Facilitates team communication about testing</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Coverage Limitations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• High coverage doesn't guarantee quality</li>
                <li>• Can lead to testing for coverage sake</li>
                <li>• Doesn't measure test effectiveness</li>
                <li>• May miss edge cases and scenarios</li>
                <li>• Can create false sense of security</li>
                <li>• Doesn't test business logic correctness</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            JaCoCo Code Coverage Tool
          </h2>
          
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Maven Configuration</h4>
              <p class="text-green-700 mb-3">Add JaCoCo plugin to your Maven pom.xml:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
&lt;plugin&gt;
    &lt;groupId&gt;org.jacoco&lt;/groupId&gt;
    &lt;artifactId&gt;jacoco-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;0.8.8&lt;/version&gt;
    &lt;executions&gt;
        &lt;execution&gt;
            &lt;goals&gt;
                &lt;goal&gt;prepare-agent&lt;/goal&gt;
            &lt;/goals&gt;
        &lt;/execution&gt;
        &lt;execution&gt;
            &lt;id&gt;report&lt;/id&gt;
            &lt;phase&gt;test&lt;/phase&gt;
            &lt;goals&gt;
                &lt;goal&gt;report&lt;/goal&gt;
            &lt;/goals&gt;
        &lt;/execution&gt;
        &lt;execution&gt;
            &lt;id&gt;check&lt;/id&gt;
            &lt;goals&gt;
                &lt;goal&gt;check&lt;/goal&gt;
            &lt;/goals&gt;
            &lt;configuration&gt;
                &lt;rules&gt;
                    &lt;rule&gt;
                        &lt;element&gt;BUNDLE&lt;/element&gt;
                        &lt;limits&gt;
                            &lt;limit&gt;
                                &lt;counter&gt;LINE&lt;/counter&gt;
                                &lt;value&gt;COVEREDRATIO&lt;/value&gt;
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
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Gradle Configuration</h4>
              <p class="text-blue-700 mb-3">Add JaCoCo plugin to your build.gradle:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
plugins {
    id 'jacoco'
}

jacoco {
    toolVersion = "0.8.8"
}

jacocoTestReport {
    dependsOn test
    reports {
        xml.required = true
        html.required = true
        csv.required = false
    }
}

jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                counter = 'LINE'
                value = 'COVEREDRATIO'
                minimum = 0.80
            }
        }
        rule {
            limit {
                counter = 'BRANCH'
                value = 'COVEREDRATIO'
                minimum = 0.70
            }
        }
    }
}

test.finalizedBy jacocoTestReport
check.dependsOn jacocoTestCoverageVerification</pre>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Running Coverage Analysis</h4>
              <p class="text-purple-700 mb-3">Commands to generate coverage reports:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Maven
mvn clean test jacoco:report

# Gradle
./gradlew test jacocoTestReport

# View HTML report
open target/site/jacoco/index.html  # Maven
open build/reports/jacoco/test/html/index.html  # Gradle</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            SonarQube Quality Analysis
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">SonarQube Setup</h4>
              <p class="text-purple-700 mb-3">Configure SonarQube analysis in your project:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# sonar-project.properties
sonar.projectKey=my-java-project
sonar.projectName=My Java Project
sonar.projectVersion=1.0
sonar.sources=src/main/java
sonar.tests=src/test/java
sonar.java.binaries=target/classes
sonar.java.test.binaries=target/test-classes
sonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml

# Maven plugin
&lt;plugin&gt;
    &lt;groupId&gt;org.sonarsource.scanner.maven&lt;/groupId&gt;
    &lt;artifactId&gt;sonar-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;3.9.1.2184&lt;/version&gt;
&lt;/plugin&gt;</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Quality Metrics</h4>
              <p class="text-indigo-700 mb-3">Key metrics tracked by SonarQube:</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Bugs:</strong> Issues that represent coding errors</li>
                <li>• <strong>Vulnerabilities:</strong> Security-related issues</li>
                <li>• <strong>Code Smells:</strong> Maintainability issues</li>
                <li>• <strong>Coverage:</strong> Test coverage percentage</li>
                <li>• <strong>Duplications:</strong> Duplicated code blocks</li>
                <li>• <strong>Complexity:</strong> Cyclomatic complexity metrics</li>
                <li>• <strong>Technical Debt:</strong> Estimated time to fix issues</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Quality Gates</h4>
              <p class="text-teal-700 mb-3">Define quality thresholds for your project:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
# Example Quality Gate Conditions
Coverage: >= 80%
Duplicated Lines: <= 3%
Maintainability Rating: A
Reliability Rating: A
Security Rating: A
New Bugs: 0
New Vulnerabilities: 0
New Code Smells: <= 5</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Coverage Analysis and Interpretation
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Reading Coverage Reports</h4>
              <p class="text-orange-700 mb-3">Understanding coverage report elements:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-gray-800 mb-2">Coverage Colors</h5>
                  <ul class="text-sm space-y-1">
                    <li><span class="bg-green-200 px-2 py-1 rounded">Green</span> - Covered lines</li>
                    <li><span class="bg-red-200 px-2 py-1 rounded">Red</span> - Uncovered lines</li>
                    <li><span class="bg-yellow-200 px-2 py-1 rounded">Yellow</span> - Partially covered</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-gray-800 mb-2">Branch Indicators</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Diamond symbols show branches</li>
                    <li>• Red diamonds = uncovered branches</li>
                    <li>• Green diamonds = covered branches</li>
                    <li>• Numbers show covered/total branches</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Coverage Targets by Project Type</h4>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-blue-800 mb-2">Critical Systems</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Line Coverage: 95%+</li>
                    <li>• Branch Coverage: 90%+</li>
                    <li>• Function Coverage: 100%</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-green-800 mb-2">Business Applications</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Line Coverage: 80-90%</li>
                    <li>• Branch Coverage: 70-80%</li>
                    <li>• Function Coverage: 85%+</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded border">
                  <h5 class="font-bold text-purple-800 mb-2">Prototypes/POCs</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Line Coverage: 60-70%</li>
                    <li>• Branch Coverage: 50-60%</li>
                    <li>• Function Coverage: 70%+</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Improving Coverage Strategically</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Focus on Critical Paths:</strong> Prioritize business-critical code</li>
                <li>• <strong>Test Edge Cases:</strong> Cover boundary conditions and error paths</li>
                <li>• <strong>Avoid Trivial Tests:</strong> Don't test getters/setters just for coverage</li>
                <li>• <strong>Use Mutation Testing:</strong> Verify test quality beyond coverage</li>
                <li>• <strong>Review Uncovered Code:</strong> Analyze why code isn't covered</li>
                <li>• <strong>Exclude Irrelevant Code:</strong> Exclude generated code and trivial methods</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Quality Metrics and Technical Debt
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Code Quality Dimensions</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Maintainability</h5>
                  <ul class="text-sm space-y-1 text-gray-700">
                    <li>• Cyclomatic complexity</li>
                    <li>• Code duplication</li>
                    <li>• Method/class size</li>
                    <li>• Coupling and cohesion</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Reliability</h5>
                  <ul class="text-sm space-y-1 text-gray-700">
                    <li>• Bug density</li>
                    <li>• Exception handling</li>
                    <li>• Resource management</li>
                    <li>• Null pointer safety</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Technical Debt Management</h4>
              <p class="text-yellow-700 mb-3">Strategies for managing technical debt:</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Measure Debt:</strong> Use tools to quantify technical debt</li>
                <li>• <strong>Prioritize Issues:</strong> Focus on high-impact, low-effort fixes</li>
                <li>• <strong>Set Budgets:</strong> Allocate time for debt reduction</li>
                <li>• <strong>Prevent New Debt:</strong> Use quality gates to prevent regression</li>
                <li>• <strong>Track Progress:</strong> Monitor debt trends over time</li>
                <li>• <strong>Educate Team:</strong> Share quality metrics and best practices</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Continuous Quality Improvement</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Daily Practices</h5>
                  <ul class="text-sm space-y-1 text-gray-700">
                    <li>• Code review with quality focus</li>
                    <li>• Automated quality checks in CI</li>
                    <li>• Regular refactoring sessions</li>
                    <li>• Quality metrics in standups</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-gray-800 mb-2">Long-term Strategies</h5>
                  <ul class="text-sm space-y-1 text-gray-700">
                    <li>• Architecture reviews</li>
                    <li>• Quality training programs</li>
                    <li>• Tool and process improvements</li>
                    <li>• Quality culture development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices and Anti-Patterns
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Set realistic coverage targets</li>
                  <li>• Focus on meaningful test scenarios</li>
                  <li>• Use coverage to find gaps, not drive development</li>
                  <li>• Combine multiple quality metrics</li>
                  <li>• Automate quality checks in CI/CD</li>
                  <li>• Review coverage reports regularly</li>
                  <li>• Exclude irrelevant code from coverage</li>
                  <li>• Use quality gates to maintain standards</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">🎯 Quality Goals</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Maintain consistent quality standards</li>
                  <li>• Improve code maintainability</li>
                  <li>• Reduce bug density over time</li>
                  <li>• Minimize technical debt accumulation</li>
                  <li>• Enhance team quality awareness</li>
                  <li>• Support confident refactoring</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Common Anti-Patterns</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Chasing 100% coverage at all costs</li>
                  <li>• Writing tests only for coverage</li>
                  <li>• Ignoring code quality for coverage</li>
                  <li>• Using coverage as the only quality metric</li>
                  <li>• Not excluding generated or trivial code</li>
                  <li>• Setting unrealistic coverage targets</li>
                  <li>• Focusing on quantity over quality</li>
                  <li>• Not acting on quality insights</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">⚠️ Warning Signs</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Coverage dropping without explanation</li>
                  <li>• High coverage but frequent bugs</li>
                  <li>• Tests that don't assert anything meaningful</li>
                  <li>• Skipping quality checks to meet deadlines</li>
                  <li>• Increasing technical debt trends</li>
                  <li>• Team resistance to quality practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete Code Coverage and Quality Example</div>
        
        <div class="text-gray-400 mb-4">// === SAMPLE CLASS TO TEST ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Calculator</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">add</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> a + b;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">divide</div>(<div class="text-blue-400">int</div> dividend, <div class="text-blue-400">int</div> divisor) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (divisor == <div class="text-green-300">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Division by zero"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> dividend / divisor;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getGrade</div>(<div class="text-blue-400">int</div> score) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (score >= <div class="text-green-300">90</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"A"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else if</div> (score >= <div class="text-green-300">80</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"B"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else if</div> (score >= <div class="text-green-300">70</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"C"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else if</div> (score >= <div class="text-green-300">60</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"D"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"F"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">isEven</div>(<div class="text-blue-400">int</div> number) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> number % <div class="text-green-300">2</div> == <div class="text-green-300">0</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// This method is never called in tests - shows up as uncovered</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">multiply</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> a * b;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === COMPREHENSIVE TEST SUITE ===</div>
        
        <div class="text-purple-400">@ExtendWith</div>(MockitoExtension.<div class="text-blue-400">class</div>)<br/>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">CalculatorTest</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Calculator</div> calculator;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@BeforeEach</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">setUp</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;calculator = <div class="text-blue-400">new</div> <div class="text-yellow-400">Calculator</div>();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === BASIC FUNCTIONALITY TESTS ===</div><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should add two positive numbers correctly"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testAddPositiveNumbers</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// This test covers the add method - line coverage</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> result = calculator.add(<div class="text-green-300">5</div>, <div class="text-green-300">3</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">8</div>, result);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should handle division by zero"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testDivisionByZero</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// This test covers the exception branch - branch coverage</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertThrows(IllegalArgumentException.<div class="text-blue-400">class</div>, () -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calculator.divide(<div class="text-green-300">10</div>, <div class="text-green-300">0</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should perform normal division"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testNormalDivision</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// This test covers the normal division branch</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> result = calculator.divide(<div class="text-green-300">10</div>, <div class="text-green-300">2</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">5</div>, result);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === COMPREHENSIVE BRANCH COVERAGE TESTS ===</div><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@ParameterizedTest</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@CsvSource</div>({<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"95, A"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"85, B"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"75, C"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"65, D"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"55, F"</div><br/>
        &nbsp;&nbsp;})<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should return correct grade for all score ranges"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testGetGradeAllBranches</div>(<div class="text-blue-400">int</div> score, <div class="text-blue-400">String</div> expectedGrade) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// This test covers all branches in getGrade method</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> grade = calculator.getGrade(score);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(expectedGrade, grade);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@ParameterizedTest</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@ValueSource</div>(ints = {<div class="text-green-300">2</div>, <div class="text-green-300">4</div>, <div class="text-green-300">6</div>, <div class="text-green-300">8</div>, <div class="text-green-300">0</div>})<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should identify even numbers correctly"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testIsEvenTrue</div>(<div class="text-blue-400">int</div> number) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(calculator.isEven(number));<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@ParameterizedTest</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@ValueSource</div>(ints = {<div class="text-green-300">1</div>, <div class="text-green-300">3</div>, <div class="text-green-300">5</div>, <div class="text-green-300">7</div>, <div class="text-green-300">9</div>})<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should identify odd numbers correctly"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testIsEvenFalse</div>(<div class="text-blue-400">int</div> number) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertFalse(calculator.isEven(number));<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === EDGE CASE TESTS ===</div><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Should handle boundary grade values"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testGradeBoundaries</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Test boundary conditions for complete branch coverage</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">"A"</div>, calculator.getGrade(<div class="text-green-300">90</div>)); <div class="text-gray-400">// Boundary</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">"B"</div>, calculator.getGrade(<div class="text-green-300">89</div>)); <div class="text-gray-400">// Just below A</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">"B"</div>, calculator.getGrade(<div class="text-green-300">80</div>)); <div class="text-gray-400">// Boundary</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">"F"</div>, calculator.getGrade(<div class="text-green-300">59</div>)); <div class="text-gray-400">// Just below D</div><br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Note: multiply method is NOT tested - will show as uncovered</div><br/>
        &nbsp;&nbsp;<div class="text-gray-400">// This demonstrates how coverage reports highlight untested code</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === JACOCO CONFIGURATION EXAMPLE ===</div>
        
        <div class="text-gray-400">/*</div><br/>
        <div class="text-gray-400">Coverage Results for this test suite:</div><br/>
        <div class="text-gray-400">- Line Coverage: ~85% (multiply method not covered)</div><br/>
        <div class="text-gray-400">- Branch Coverage: 100% (all if/else branches tested)</div><br/>
        <div class="text-gray-400">- Method Coverage: 83% (5 out of 6 methods tested)</div><br/>
        <div class="text-gray-400">*/</div><br/><br/>
        
        <div class="text-gray-400 mb-4">// === SONARQUBE QUALITY RULES EXAMPLE ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">QualityExample</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Good: Low cyclomatic complexity</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">isValidAge</div>(<div class="text-blue-400">int</div> age) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> age >= <div class="text-green-300">0</div> && age <= <div class="text-green-300">150</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Bad: High cyclomatic complexity (would be flagged by SonarQube)</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getComplexGrade</div>(<div class="text-blue-400">int</div> score, <div class="text-blue-400">boolean</div> extraCredit, <div class="text-blue-400">boolean</div> attendance) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (score >= <div class="text-green-300">90</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (extraCredit) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (attendance) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"A+"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"A"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> attendance ? <div class="text-green-300">"A"</div> : <div class="text-green-300">"A-"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// ... more complex nested conditions</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"F"</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Good: Refactored for better maintainability</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getImprovedGrade</div>(<div class="text-blue-400">int</div> score, <div class="text-blue-400">boolean</div> extraCredit, <div class="text-blue-400">boolean</div> attendance) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> baseGrade = getBaseGrade(score);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> applyModifiers(baseGrade, extraCredit, attendance);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getBaseGrade</div>(<div class="text-blue-400">int</div> score) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (score >= <div class="text-green-300">90</div>) <div class="text-blue-400">return</div> <div class="text-green-300">"A"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (score >= <div class="text-green-300">80</div>) <div class="text-blue-400">return</div> <div class="text-green-300">"B"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (score >= <div class="text-green-300">70</div>) <div class="text-blue-400">return</div> <div class="text-green-300">"C"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (score >= <div class="text-green-300">60</div>) <div class="text-blue-400">return</div> <div class="text-green-300">"D"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"F"</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">applyModifiers</div>(<div class="text-blue-400">String</div> grade, <div class="text-blue-400">boolean</div> extraCredit, <div class="text-blue-400">boolean</div> attendance) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (extraCredit && attendance) <div class="text-blue-400">return</div> grade + <div class="text-green-300">"+"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!attendance) <div class="text-blue-400">return</div> grade + <div class="text-green-300">"-"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> grade;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === COVERAGE EXCLUSION EXAMPLE ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ConfigurationClass</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Exclude generated code from coverage</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@Generated</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">toString</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"ConfigurationClass{}"</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Exclude utility methods that are hard to test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@ExcludeFromJacocoGeneratedReport</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<div class="text-green-300">"Application started"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      **🎯 Code Coverage and Quality Metrics Exercises**

      **Exercise 1: Coverage Analysis Setup**
      Set up code coverage analysis for a Java project:
      - Configure JaCoCo plugin in Maven or Gradle
      - Create a simple Calculator class with multiple methods
      - Write basic tests and generate coverage reports
      - Analyze line, branch, and method coverage results
      - Set coverage thresholds and quality gates

      **Exercise 2: Improving Coverage Strategically**
      Work with an existing codebase to improve coverage:
      - Identify uncovered code areas using coverage reports
      - Write tests for critical business logic first
      - Focus on branch coverage for conditional statements
      - Test edge cases and error conditions
      - Exclude irrelevant code (getters, setters, generated code)
      - Achieve 80%+ meaningful coverage

      **Exercise 3: SonarQube Quality Analysis**
      Set up comprehensive quality analysis:
      - Install and configure SonarQube locally
      - Integrate SonarQube with your build process
      - Analyze code quality metrics (bugs, vulnerabilities, code smells)
      - Create custom quality gates with specific thresholds
      - Fix identified issues and re-analyze
      - Document quality improvements over time

      **Exercise 4: Quality Metrics Dashboard**
      Create a quality metrics tracking system:
      - Set up automated quality checks in CI/CD pipeline
      - Track coverage trends over time
      - Monitor technical debt accumulation
      - Create quality reports for stakeholders
      - Implement quality gates that fail builds
      - Establish team quality standards

      **Exercise 5: Coverage vs Quality Analysis**
      Compare high coverage with low-quality tests:
      - Write tests that achieve high coverage but poor quality
      - Use mutation testing to verify test effectiveness
      - Refactor tests to be more meaningful
      - Demonstrate how coverage alone doesn't guarantee quality
      - Create guidelines for writing effective tests

      **Exercise 6: Legacy Code Coverage**
      Work with legacy code to improve testability:
      - Analyze coverage of existing legacy codebase
      - Identify areas with zero test coverage
      - Write characterization tests for existing behavior
      - Refactor code to improve testability
      - Gradually increase coverage while maintaining functionality
      - Document the refactoring process

      **Deliverable:**
      Create a comprehensive quality analysis report that includes coverage metrics, quality gate results, technical debt assessment, and improvement recommendations. Include before/after comparisons showing quality improvements achieved through systematic testing and refactoring.
    `
  }
};