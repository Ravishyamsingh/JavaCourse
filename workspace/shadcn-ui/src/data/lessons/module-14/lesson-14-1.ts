import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_1: LessonContent = {
  title: 'Introduction to Unit Testing',
  type: 'lesson',
  duration: '40 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Learn the fundamentals of unit testing in Java, including testing principles, benefits, and best practices. Understand the testing pyramid, test anatomy, and how to write effective unit tests that improve code quality and maintainability.',
    objectives: [
      'Understand the importance and benefits of unit testing',
      'Learn the testing pyramid and different types of tests',
      'Master the anatomy of a good unit test',
      'Apply testing best practices and naming conventions',
      'Understand test-driven development principles',
      'Learn to identify what and how to test effectively'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Unit Testing
        </h1>
        <p class="mt-3 text-green-100 text-lg">Building reliable software through comprehensive testing strategies</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Unit Testing?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Unit testing is the practice of testing individual components or modules of software in isolation. 
            A unit test verifies that a specific piece of code (usually a method or function) behaves as expected 
            under various conditions. It's the foundation of a robust testing strategy.
          </p>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 Key Characteristics of Unit Tests</h4>
            <ul class="text-green-700 space-y-1">
              <li>• <strong>Fast:</strong> Execute quickly (milliseconds)</li>
              <li>• <strong>Isolated:</strong> Test one unit at a time</li>
              <li>• <strong>Repeatable:</strong> Same results every time</li>
              <li>• <strong>Self-validating:</strong> Clear pass/fail result</li>
              <li>• <strong>Timely:</strong> Written close to production code</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">✅ Benefits of Unit Testing</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Early bug detection and prevention</li>
                <li>• Improved code design and architecture</li>
                <li>• Documentation of code behavior</li>
                <li>• Confidence in refactoring</li>
                <li>• Faster debugging and development</li>
                <li>• Reduced maintenance costs</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ Common Misconceptions</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• "Testing slows down development"</li>
                <li>• "100% coverage means bug-free code"</li>
                <li>• "Unit tests replace other testing types"</li>
                <li>• "Testing is only for complex code"</li>
                <li>• "Tests are too hard to maintain"</li>
                <li>• "Manual testing is sufficient"</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            The Testing Pyramid
          </h2>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-6">
            <div class="text-center">
              <div class="inline-block">
                <div class="bg-red-400 text-white px-8 py-2 text-sm font-bold">UI Tests</div>
                <div class="bg-yellow-400 text-white px-12 py-2 text-sm font-bold mt-1">Integration Tests</div>
                <div class="bg-green-400 text-white px-16 py-2 text-sm font-bold mt-1">Unit Tests</div>
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 class="font-bold text-green-800 mb-2">Unit Tests (Base of Pyramid)</h4>
              <p class="text-gray-700 mb-2">Test individual components in isolation</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-green-700 mb-1">Characteristics:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Fast execution (< 1ms)</li>
                    <li>• High volume (70-80% of tests)</li>
                    <li>• Isolated and independent</li>
                    <li>• Easy to write and maintain</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-green-700 mb-1">Focus Areas:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Business logic validation</li>
                    <li>• Edge cases and error handling</li>
                    <li>• Data transformations</li>
                    <li>• Algorithm correctness</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 class="font-bold text-yellow-800 mb-2">Integration Tests (Middle)</h4>
              <p class="text-gray-700 mb-2">Test interactions between components</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-yellow-700 mb-1">Characteristics:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Moderate execution time</li>
                    <li>• Medium volume (15-25% of tests)</li>
                    <li>• Test component interactions</li>
                    <li>• More complex setup</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-yellow-700 mb-1">Focus Areas:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Database interactions</li>
                    <li>• API integrations</li>
                    <li>• Service communications</li>
                    <li>• Configuration validation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 class="font-bold text-red-800 mb-2">UI/E2E Tests (Top)</h4>
              <p class="text-gray-700 mb-2">Test complete user workflows</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-red-700 mb-1">Characteristics:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Slow execution (seconds/minutes)</li>
                    <li>• Low volume (5-10% of tests)</li>
                    <li>• Test entire user journeys</li>
                    <li>• Complex and brittle</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-bold text-red-700 mb-1">Focus Areas:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Critical user paths</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• End-to-end workflows</li>
                    <li>• System-wide validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Anatomy of a Good Unit Test
          </h2>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🏗️ AAA Pattern (Arrange-Act-Assert)</h4>
            <p class="text-purple-700">The most common structure for organizing unit tests</p>
          </div>
          
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">1. Arrange (Setup)</h4>
              <p class="text-gray-700 mb-2">Prepare the test environment and input data</p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Create test objects and dependencies</li>
                <li>• Set up mock objects and stubs</li>
                <li>• Initialize test data and parameters</li>
                <li>• Configure the system under test</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">2. Act (Execute)</h4>
              <p class="text-gray-700 mb-2">Execute the method or functionality being tested</p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Call the method under test</li>
                <li>• Trigger the behavior to be verified</li>
                <li>• Capture the result or outcome</li>
                <li>• Keep this section minimal and focused</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">3. Assert (Verify)</h4>
              <p class="text-gray-700 mb-2">Verify that the expected outcome occurred</p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Check return values and object states</li>
                <li>• Verify method calls and interactions</li>
                <li>• Validate side effects and exceptions</li>
                <li>• Use descriptive assertion messages</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Testing Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 class="font-bold text-orange-800 mb-2">📝 Test Naming Conventions</h4>
              <p class="text-gray-700 mb-2">Clear, descriptive names that explain what is being tested</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-orange-700 mb-1">Recommended Patterns:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• <code>methodName_stateUnderTest_expectedBehavior()</code></li>
                  <li>• <code>should_ExpectedBehavior_When_StateUnderTest()</code></li>
                  <li>• <code>given_Precondition_when_StateUnderTest_then_ExpectedBehavior()</code></li>
                </ul>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Do's</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Write tests before or alongside code</li>
                  <li>• Keep tests simple and focused</li>
                  <li>• Test one thing at a time</li>
                  <li>• Use descriptive test names</li>
                  <li>• Make tests independent</li>
                  <li>• Test edge cases and error conditions</li>
                  <li>• Keep tests maintainable</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Don'ts</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Don't test implementation details</li>
                  <li>• Don't write overly complex tests</li>
                  <li>• Don't ignore failing tests</li>
                  <li>• Don't test third-party libraries</li>
                  <li>• Don't create test dependencies</li>
                  <li>• Don't skip edge cases</li>
                  <li>• Don't write tests just for coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            What to Test
          </h2>
          
          <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 class="font-bold text-green-800 mb-2">✅ Focus on Testing</h4>
              <ul class="text-gray-700 space-y-2">
                <li>• <strong>Business Logic:</strong> Core algorithms and calculations</li>
                <li>• <strong>Edge Cases:</strong> Boundary conditions and limits</li>
                <li>• <strong>Error Handling:</strong> Exception scenarios and validation</li>
                <li>• <strong>State Changes:</strong> Object state modifications</li>
                <li>• <strong>Public APIs:</strong> Method contracts and interfaces</li>
                <li>• <strong>Complex Conditions:</strong> Branching logic and decisions</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 class="font-bold text-red-800 mb-2">❌ Avoid Testing</h4>
              <ul class="text-gray-700 space-y-2">
                <li>• <strong>Private Methods:</strong> Test through public interfaces</li>
                <li>• <strong>Third-party Libraries:</strong> Assume they work correctly</li>
                <li>• <strong>Simple Getters/Setters:</strong> Unless they contain logic</li>
                <li>• <strong>Framework Code:</strong> Configuration and annotations</li>
                <li>• <strong>Implementation Details:</strong> Focus on behavior, not structure</li>
                <li>• <strong>Trivial Code:</strong> Simple assignments and constants</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Unit Testing Examples and Best Practices</div>
        
        <div class="text-gray-400 mb-4">// === EXAMPLE: CALCULATOR CLASS TO TEST ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Calculator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">int</div> <div class="text-yellow-400">add</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> a + b;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">divide</div>(<div class="text-blue-400">double</div> dividend, <div class="text-blue-400">double</div> divisor) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (divisor == <div class="text-green-300">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Cannot divide by zero"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> dividend / divisor;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">isPrime</div>(<div class="text-blue-400">int</div> number) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (number <= <div class="text-green-300">1</div>) <div class="text-blue-400">return false</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (number <= <div class="text-green-300">3</div>) <div class="text-blue-400">return true</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (number % <div class="text-green-300">2</div> == <div class="text-green-300">0</div> || number % <div class="text-green-300">3</div> == <div class="text-green-300">0</div>) <div class="text-blue-400">return false</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-green-300">5</div>; i * i <= number; i += <div class="text-green-300">6</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (number % i == <div class="text-green-300">0</div> || number % (i + <div class="text-green-300">2</div>) == <div class="text-green-300">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return false</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return true</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === BASIC UNIT TEST STRUCTURE ===</div>
        
        <div class="text-blue-400">import</div> org.junit.jupiter.api.Test;<br/>
        <div class="text-blue-400">import</div> org.junit.jupiter.api.BeforeEach;<br/>
        <div class="text-blue-400">import static</div> org.junit.jupiter.api.Assertions.*;<br/><br/>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">CalculatorTest</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Calculator</div> calculator;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@BeforeEach</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">setUp</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange: Create fresh instance for each test</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;calculator = <div class="text-blue-400">new</div> <div class="text-yellow-400">Calculator</div>();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === GOOD TEST EXAMPLES ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">add_TwoPositiveNumbers_ReturnsSum</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> a = <div class="text-green-300">5</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> b = <div class="text-green-300">3</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> expected = <div class="text-green-300">8</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> result = calculator.add(a, b);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(expected, result, <div class="text-green-300">"5 + 3 should equal 8"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">add_NegativeNumbers_ReturnsCorrectSum</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> a = -<div class="text-green-300">5</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> b = -<div class="text-green-300">3</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> expected = -<div class="text-green-300">8</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> result = calculator.add(a, b);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(expected, result, <div class="text-green-300">"Adding negative numbers should work correctly"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">divide_ValidNumbers_ReturnsQuotient</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> dividend = <div class="text-green-300">10.0</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> divisor = <div class="text-green-300">2.0</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> expected = <div class="text-green-300">5.0</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> result = calculator.divide(dividend, divisor);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(expected, result, <div class="text-green-300">0.001</div>, <div class="text-green-300">"10.0 / 2.0 should equal 5.0"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">divide_ByZero_ThrowsIllegalArgumentException</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Arrange</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> dividend = <div class="text-green-300">10.0</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">double</div> divisor = <div class="text-green-300">0.0</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Act & Assert</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">IllegalArgumentException</div> exception = assertThrows(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">IllegalArgumentException</div>.<div class="text-blue-400">class</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> calculator.divide(dividend, divisor),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"Division by zero should throw IllegalArgumentException"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">"Cannot divide by zero"</div>, exception.getMessage());<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === TESTING EDGE CASES ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">isPrime_EdgeCases_ReturnsCorrectResults</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Test multiple edge cases</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertFalse(calculator.isPrime(<div class="text-green-300">1</div>), <div class="text-green-300">"1 is not prime"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertFalse(calculator.isPrime(<div class="text-green-300">0</div>), <div class="text-green-300">"0 is not prime"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertFalse(calculator.isPrime(-<div class="text-green-300">5</div>), <div class="text-green-300">"Negative numbers are not prime"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(calculator.isPrime(<div class="text-green-300">2</div>), <div class="text-green-300">"2 is prime"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(calculator.isPrime(<div class="text-green-300">3</div>), <div class="text-green-300">"3 is prime"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertFalse(calculator.isPrime(<div class="text-green-300">4</div>), <div class="text-green-300">"4 is not prime"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(calculator.isPrime(<div class="text-green-300">17</div>), <div class="text-green-300">"17 is prime"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/>
      </div>
    `,
    exercise: 'Create a comprehensive unit testing suite for a simple banking system. Your task is to implement and test a BankAccount class with proper unit testing practices.\n\n' +
      '**Requirements:**\n\n' +
      '1. **BankAccount Class Implementation:**\n' +
      '   - Properties: accountNumber, balance, accountHolder\n' +
      '   - Methods: deposit(), withdraw(), getBalance(), transfer()\n' +
      '   - Validation: Prevent negative deposits/withdrawals, insufficient funds\n' +
      '   - Exception handling for invalid operations\n\n' +
      '2. **Unit Test Suite:**\n' +
      '   - Test all public methods with various scenarios\n' +
      '   - Include edge cases and boundary conditions\n' +
      '   - Test exception handling and error conditions\n' +
      '   - Use descriptive test names following conventions\n' +
      '   - Apply AAA pattern (Arrange-Act-Assert)\n\n' +
      '3. **Test Categories:**\n' +
      '   - **Happy Path Tests:** Normal operations with valid inputs\n' +
      '   - **Edge Case Tests:** Boundary values, zero amounts, etc.\n' +
      '   - **Error Condition Tests:** Invalid inputs, insufficient funds\n' +
      '   - **State Verification Tests:** Ensure object state changes correctly\n\n' +
      '4. **Testing Best Practices:**\n' +
      '   - One assertion per test (when possible)\n' +
      '   - Independent tests that don\'t rely on each other\n' +
      '   - Clear, descriptive test names\n' +
      '   - Proper setup and teardown\n' +
      '   - Meaningful assertion messages\n\n' +
      '**Learning Objectives:**\n' +
      '- Practice writing comprehensive unit tests\n' +
      '- Apply testing best practices and conventions\n' +
      '- Understand the importance of testing edge cases\n' +
      '- Learn to structure tests using the AAA pattern\n' +
      '- Experience test-driven development principles'
  }
};