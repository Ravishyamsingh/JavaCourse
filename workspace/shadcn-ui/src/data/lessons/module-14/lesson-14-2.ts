import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_2: LessonContent = {
  title: 'JUnit Framework Basics',
  type: 'lesson',
  duration: '45 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Master the fundamentals of JUnit, the most popular testing framework for Java. Learn to write, organize, and execute unit tests using JUnit 5 annotations, assertions, and lifecycle methods.',
    objectives: [
      'Understand JUnit architecture and key components',
      'Learn JUnit 5 annotations and their usage',
      'Master test lifecycle management with setup and teardown methods',
      'Write effective assertions and test cases',
      'Organize tests with nested and parameterized tests',
      'Handle test exceptions and timeouts'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          JUnit Framework Basics
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Building robust tests with the industry-standard Java testing framework</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to JUnit
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JUnit is a simple, open source framework to write and run repeatable tests. It is an instance of the xUnit architecture for unit testing frameworks.
            JUnit 5 is the next generation of JUnit with a completely new architecture that consists of three sub-projects:
          </p>
          
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">JUnit Platform</h4>
              <p class="text-blue-700 text-sm">Foundation for launching testing frameworks</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-2">JUnit Jupiter</h4>
              <p class="text-indigo-700 text-sm">New programming model and extension model</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">JUnit Vintage</h4>
              <p class="text-purple-700 text-sm">TestEngine for running JUnit 3 and JUnit 4 tests</p>
            </div>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Benefits of JUnit</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• <strong>Annotations:</strong> Easy to learn and use annotations</li>
              <li>• <strong>Assertions:</strong> Rich set of assertions with helpful error messages</li>
              <li>• <strong>Test Runners:</strong> Easy to run tests directly or via IDE</li>
              <li>• <strong>Test Suites:</strong> Bundle tests together for execution</li>
              <li>• <strong>Integration:</strong> Works seamlessly with build tools like Maven and Gradle</li>
            </ul>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            JUnit 5 Annotations
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">@Test</h4>
                <p class="text-green-700 mb-2">Marks a method as a test method</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Test
void testAddition() {
    assertEquals(4, calculator.add(2, 2));
}</pre>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">@BeforeEach</h4>
                <p class="text-blue-700 mb-2">Executed before each test method</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@BeforeEach
void setUp() {
    calculator = new Calculator();
}</pre>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">@AfterEach</h4>
                <p class="text-purple-700 mb-2">Executed after each test method</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@AfterEach
void tearDown() {
    // Cleanup resources
}</pre>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">@BeforeAll</h4>
                <p class="text-yellow-700 mb-2">Executed once before all test methods</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@BeforeAll
static void initAll() {
    // One-time setup
}</pre>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">@AfterAll</h4>
                <p class="text-red-700 mb-2">Executed once after all test methods</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@AfterAll
static void tearDownAll() {
    // One-time cleanup
}</pre>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">@DisplayName</h4>
                <p class="text-indigo-700 mb-2">Custom name for test class or method</p>
                <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@DisplayName("Calculator Addition Tests")
@Test
@DisplayName("Test adding two positive numbers")
void testAddPositiveNumbers() { /* ... */ }</pre>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Assertions and Assumptions
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Standard Assertions</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-orange-700 mb-2">Equality Assertions</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
assertEquals(expected, actual);
assertNotEquals(expected, actual);
assertSame(expected, actual);
assertNotSame(expected, actual);</pre>
                </div>
                <div>
                  <h5 class="font-bold text-orange-700 mb-2">Boolean Assertions</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
assertTrue(condition);
assertFalse(condition);
assertNull(object);
assertNotNull(object);</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Advanced Assertions</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-yellow-700 mb-2">Exception Testing</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Test
void testDivisionByZero() {
    Exception exception = assertThrows(
        ArithmeticException.class, 
        () -> calculator.divide(1, 0)
    );
    assertEquals("/ by zero", exception.getMessage());
}</pre>
                </div>
                <div>
                  <h5 class="font-bold text-yellow-700 mb-2">Timeout Testing</h5>
                  <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Test
@Timeout(5)
void testSlowOperation() {
    // Test that completes within 5 seconds
}</pre>
                </div>
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Assumptions</h4>
              <p class="text-purple-700 mb-3">Used to conditionally skip tests based on environment or conditions</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@Test
void testOnlyOnLinux() {
    assumeTrue("Linux".equals(System.getProperty("os.name")));
    // Test runs only on Linux
}

@Test
void testInexpensiveOnly() {
    assumingThat("CI".equals(System.getenv("ENV")),
        () -> {
            // Run expensive test only in CI
        }
    );
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Testing Features
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Parameterized Tests</h4>
              <p class="text-red-700 mb-3">Run the same test with different input values</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@ParameterizedTest
@ValueSource(ints = {1, 3, 5, -1, -3, -5})
void testOddNumbers(int number) {
    assertTrue(calculator.isOdd(number));
}

@ParameterizedTest
@CsvSource({
    "1, 2, 3",
    "2, 3, 5",
    "3, 5, 8"
})
void testAddition(int a, int b, int expected) {
    assertEquals(expected, calculator.add(a, b));
}</pre>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Nested Tests</h4>
              <p class="text-indigo-700 mb-3">Group related tests in nested classes</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
class CalculatorTest {
    @Nested
    @DisplayName("Addition tests")
    class AdditionTests {
        @Test
        @DisplayName("Add two positive numbers")
        void testAddPositive() { /* ... */ }
        
        @Test
        @DisplayName("Add negative numbers")
        void testAddNegative() { /* ... */ }
    }
    
    @Nested
    @DisplayName("Division tests")
    class DivisionTests {
        @Test
        @DisplayName("Divide by zero throws exception")
        void testDivideByZero() { /* ... */ }
    }
}</pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Dynamic Tests</h4>
              <p class="text-green-700 mb-3">Generate tests at runtime</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
@TestFactory
Stream<DynamicTest> testEvenNumbers() {
    return Stream.of(2, 4, 6, 8)
        .map(n -> DynamicTest.dynamicTest(
            "Test if " + n + " is even",
            () -> assertTrue(n % 2 == 0)
        ));
}</pre>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Test Organization and Best Practices
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Test Class Structure</h4>
                <ul class="text-teal-700 space-y-2">
                  <li>• Use descriptive class names ending with "Test"</li>
                  <li>• Group related tests in nested classes</li>
                  <li>• Use @DisplayName for readable test names</li>
                  <li>• Keep tests small and focused</li>
                  <li>• Follow AAA pattern (Arrange, Act, Assert)</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Test Method Naming</h4>
                <ul class="text-blue-700 space-y-2">
                  <li>• Use descriptive method names</li>
                  <li>• Follow naming conventions like test[MethodName][Scenario][ExpectedResult]</li>
                  <li>• Use @DisplayName for human-readable names</li>
                  <li>• Keep method names concise but meaningful</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Test Execution</h4>
                <ul class="text-purple-700 space-y-2">
                  <li>• Run tests in isolation</li>
                  <li>• Use @Disabled to temporarily skip tests</li>
                  <li>• Use @Tag to group tests for selective execution</li>
                  <li>• Configure test execution order when needed</li>
                  <li>• Use test suites to group related test classes</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Common Pitfalls to Avoid</h4>
                  <ul class="text-green-700 space-y-2">
                    <li>• Don't test implementation details</li>
                    <li>• Don't create dependencies between tests</li>
                    <li>• Don't ignore failing tests</li>
                    <li>• Don't write overly complex assertions</li>
                    <li>• Don't forget to clean up resources</li>
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete JUnit 5 Example with Various Test Types</div>
        
        <div class="text-blue-400">import</div> org.junit.jupiter.api.*;<br/>
        <div class="text-blue-400">import static</div> org.junit.jupiter.api.Assertions.*;<br/>
        <div class="text-blue-400">import static</div> org.junit.jupiter.api.Assumptions.*;<br/>
        <div class="text-blue-400">import</div> org.junit.jupiter.params.ParameterizedTest;<br/>
        <div class="text-blue-400">import</div> org.junit.jupiter.params.provider.ValueSource;<br/>
        <div class="text-blue-400">import</div> org.junit.jupiter.params.provider.CsvSource;<br/><br/>
        
        <div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Calculator Test Suite"</div>)<br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">CalculatorTest</div> {<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Calculator</div> calculator;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@BeforeAll</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">static void</div> <div class="text-yellow-400">initAll</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<div class="text-green-300">"Starting all tests"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@BeforeEach</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">init</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;calculator = <div class="text-blue-400">new</div> <div class="text-yellow-400">Calculator</div>();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === BASIC TESTS ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Add two positive numbers"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testAddPositiveNumbers</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> result = calculator.add(<div class="text-green-300">2</div>, <div class="text-green-300">3</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">5</div>, result, <div class="text-green-300">"2 + 3 should equal 5"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Divide by zero throws exception"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testDivideByZeroThrowsException</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ArithmeticException</div> exception = assertThrows(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ArithmeticException</div>.<div class="text-blue-400">class</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> calculator.divide(<div class="text-green-300">1</div>, <div class="text-green-300">0</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"Division by zero should throw ArithmeticException"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === PARAMETERIZED TESTS ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@ParameterizedTest</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@ValueSource</div>(ints = {<div class="text-green-300">1</div>, <div class="text-green-300">3</div>, <div class="text-green-300">5</div>, <div class="text-green-300">7</div>})<br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Odd numbers are correctly identified"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testOddNumbers</div>(<div class="text-blue-400">int</div> number) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertTrue(calculator.isOdd(number), number + <div class="text-green-300">" should be odd"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@ParameterizedTest</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@CsvSource</div>({<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"2, 3, 5"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"0, 5, 5"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"-2, 7, 5"</div><br/>
        &nbsp;&nbsp;})<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testAddition</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b, <div class="text-blue-400">int</div> expected) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assertEquals(expected, calculator.add(a, b));<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === NESTED TESTS ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Nested</div><br/>
        &nbsp;&nbsp;<div class="text-purple-400">@DisplayName</div>(<div class="text-green-300">"Subtraction tests"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">class</div> <div class="text-yellow-400">SubtractionTests</div> {<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testSubtractPositiveNumbers</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assertEquals(<div class="text-green-300">2</div>, calculator.subtract(<div class="text-green-300">5</div>, <div class="text-green-300">3</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testSubtractToNegative</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assertEquals(-<div class="text-green-300">2</div>, calculator.subtract(<div class="text-green-300">3</div>, <div class="text-green-300">5</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// === CONDITIONAL TESTS ===</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@Test</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">testOnlyOnFastMachines</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;assumingThat(<div class="text-green-300">"true"</div>.equals(System.getenv(<div class="text-green-300">"FAST_MACHINE"</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Only run on fast machines</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assertTrue(calculator.performFastOperation());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@AfterEach</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">tearDown</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;calculator = <div class="text-blue-400">null</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-purple-400">@AfterAll</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">static void</div> <div class="text-yellow-400">tearDownAll</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<div class="text-green-300">"Finished all tests"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Calculator class being tested</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Calculator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">add</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> a + b;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public double</div> <div class="text-yellow-400">divide</div>(<div class="text-blue-400">double</div> a, <div class="text-blue-400">double</div> b) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (b == <div class="text-green-300">0</div>) <div class="text-blue-400">throw new</div> <div class="text-yellow-400">ArithmeticException</div>(<div class="text-green-300">"Division by zero"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> a / b;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">isOdd</div>(<div class="text-blue-400">int</div> number) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> number % <div class="text-green-300">2</div> != <div class="text-green-300">0</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">performFastOperation</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return true</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">subtract</div>(<div class="text-blue-400">int</div> a, <div class="text-blue-400">int</div> b) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> a - b;<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      **🎯 JUnit Framework Exercises**

      **Exercise 1: Basic JUnit Test Setup**
      Create a simple Calculator class with methods for addition, subtraction, multiplication, and division. Write JUnit tests for each method using:
      - @BeforeEach for setup
      - @Test for each operation
      - Appropriate assertions for each test case
      - @DisplayName for readable test names

      **Exercise 2: Parameterized Testing**
      Extend your Calculator tests with parameterized tests:
      - Test addition with multiple pairs of numbers using @ValueSource
      - Test all operations with multiple data sets using @CsvSource
      - Test edge cases like division by zero with different inputs

      **Exercise 3: Nested and Conditional Tests**
      Create nested test classes for different operations:
      - Group all addition tests in an AdditionTests nested class
      - Group all division tests in a DivisionTests nested class
      - Add conditional tests that only run on specific environments
      - Use @Disabled to temporarily skip a test and verify it's skipped

      **Exercise 4: Exception Testing**
      Write tests that verify exceptions are properly thrown:
      - Test that division by zero throws ArithmeticException
      - Test that square root of negative numbers throws IllegalArgumentException
      - Use assertThrows with custom messages

      **Exercise 5: Advanced Assertions**
      Implement advanced assertion techniques:
      - Test timeout behavior with @Timeout
      - Use assumptions to conditionally run tests
      - Create custom assertion methods for complex objects
      - Test object equality with assertEquals vs assertSame

      **Deliverable:**
      Create a well-organized test suite with all the above exercises implemented. Ensure all tests pass and follow JUnit 5 best practices.
    `
  }
};