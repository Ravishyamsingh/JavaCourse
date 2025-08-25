import { LessonContent } from '../../types/LessonTypes';

export const lesson_14_5: LessonContent = {
  title: 'Test-Driven Development (TDD)',
  type: 'lesson',
  duration: '50 min',
  module: 'Testing and Quality Assurance',
  content: {
    overview: 'Master the Test-Driven Development (TDD) methodology. Learn the Red-Green-Refactor cycle, understand the benefits of writing tests first, and practice TDD with real Java examples.',
    objectives: [
      'Understand the principles and philosophy of Test-Driven Development',
      'Master the Red-Green-Refactor cycle',
      'Learn to write failing tests before implementation',
      'Practice TDD with practical Java examples',
      'Understand the benefits and challenges of TDD',
      'Apply TDD best practices and avoid common pitfalls'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-green-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Test-Driven Development (TDD)
        </h1>
        <p class="mt-3 text-red-100 text-lg">Write tests first, then make them pass - the TDD way</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Test-Driven Development?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Test-Driven Development (TDD) is a software development methodology where you write tests before writing the actual code. 
            It follows a simple cycle: write a failing test, write the minimum code to make it pass, then refactor the code while 
            keeping the tests green.
          </p>
          
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">🎯 Core Principles of TDD</h4>
            <ul class="text-red-700 space-y-1">
              <li>• <strong>Test First:</strong> Always write the test before the implementation</li>
              <li>• <strong>Minimal Code:</strong> Write only enough code to make the test pass</li>
              <li>• <strong>Refactor:</strong> Improve code quality while maintaining functionality</li>
              <li>• <strong>Fast Feedback:</strong> Get immediate feedback on your design decisions</li>
              <li>• <strong>Living Documentation:</strong> Tests serve as executable specifications</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits of TDD</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Better code design and architecture</li>
                <li>• Higher test coverage by default</li>
                <li>• Reduced debugging time</li>
                <li>• Improved code confidence</li>
                <li>• Better understanding of requirements</li>
                <li>• Easier refactoring and maintenance</li>
                <li>• Documentation through tests</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚠️ TDD Challenges</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Initial learning curve</li>
                <li>• Slower initial development</li>
                <li>• Requires discipline and practice</li>
                <li>• May feel counterintuitive at first</li>
                <li>• Test maintenance overhead</li>
                <li>• Difficulty with legacy code</li>
                <li>• Team adoption challenges</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            The Red-Green-Refactor Cycle
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 class="font-bold text-red-800 mb-2 flex items-center">
                <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">🔴</span>
                RED - Write a Failing Test
              </h4>
              <p class="text-red-700 mb-3">Start by writing a test that fails because the functionality doesn't exist yet.</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Write the simplest test that could possibly fail</li>
                <li>• Focus on one specific behavior or requirement</li>
                <li>• Make sure the test actually fails (and for the right reason)</li>
                <li>• Think about the API design while writing the test</li>
                <li>• Keep the test focused and specific</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 class="font-bold text-green-800 mb-2 flex items-center">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">🟢</span>
                GREEN - Make the Test Pass
              </h4>
              <p class="text-green-700 mb-3">Write the minimum amount of code necessary to make the test pass.</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Write the simplest implementation that works</li>
                <li>• Don't worry about code quality yet</li>
                <li>• Hard-code values if necessary</li>
                <li>• Focus only on making the test green</li>
                <li>• Resist the urge to add extra functionality</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">🔄</span>
                REFACTOR - Improve the Code
              </h4>
              <p class="text-blue-700 mb-3">Clean up the code while keeping all tests passing.</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Remove duplication</li>
                <li>• Improve naming and readability</li>
                <li>• Extract methods and classes</li>
                <li>• Apply design patterns where appropriate</li>
                <li>• Ensure all tests still pass after refactoring</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 class="font-bold text-gray-800 mb-2">🔄 The TDD Cycle Flow</h4>
            <div class="flex items-center justify-center space-x-4 text-sm">
              <div class="bg-red-500 text-white px-3 py-2 rounded">RED</div>
              <span class="text-gray-600">→</span>
              <div class="bg-green-500 text-white px-3 py-2 rounded">GREEN</div>
              <span class="text-gray-600">→</span>
              <div class="bg-blue-500 text-white px-3 py-2 rounded">REFACTOR</div>
              <span class="text-gray-600">→</span>
              <div class="bg-red-500 text-white px-3 py-2 rounded">RED</div>
              <span class="text-gray-600">...</span>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            TDD Best Practices
          </h2>
          
          <div class="space-y-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Test Writing Guidelines</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Start Simple:</strong> Begin with the simplest test case</li>
                <li>• <strong>One Assertion:</strong> Focus on one behavior per test</li>
                <li>• <strong>Descriptive Names:</strong> Use clear, descriptive test method names</li>
                <li>• <strong>AAA Pattern:</strong> Structure tests with Arrange, Act, Assert</li>
                <li>• <strong>Fast Tests:</strong> Keep tests fast and independent</li>
                <li>• <strong>Edge Cases:</strong> Gradually add tests for edge cases</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Implementation Guidelines</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Fake It:</strong> Start with hard-coded return values</li>
                <li>• <strong>Triangulate:</strong> Add more tests to drive generalization</li>
                <li>• <strong>Transform:</strong> Gradually transform the implementation</li>
                <li>• <strong>YAGNI:</strong> You Aren't Gonna Need It - don't add extra features</li>
                <li>• <strong>Small Steps:</strong> Take small, incremental steps</li>
                <li>• <strong>Commit Often:</strong> Commit after each green phase</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Refactoring Guidelines</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Green Bar:</strong> Only refactor when tests are passing</li>
                <li>• <strong>Small Changes:</strong> Make small, safe refactoring steps</li>
                <li>• <strong>Run Tests:</strong> Run tests frequently during refactoring</li>
                <li>• <strong>Both Code:</strong> Refactor both production and test code</li>
                <li>• <strong>Design Patterns:</strong> Apply patterns to improve design</li>
                <li>• <strong>Code Smells:</strong> Address code smells as they appear</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            TDD Techniques and Patterns
          </h2>
          
          <div class="space-y-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Fake It Till You Make It</h4>
              <p class="text-orange-700 mb-3">Start with the simplest possible implementation, even if it's hard-coded:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// Test
@Test
void testAdd() {
    Calculator calc = new Calculator();
    assertEquals(4, calc.add(2, 2));
}

// First implementation (fake it)
public int add(int a, int b) {
    return 4; // Hard-coded!
}

// After more tests, generalize
public int add(int a, int b) {
    return a + b;
}</pre>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Triangulation</h4>
              <p class="text-blue-700 mb-3">Use multiple test cases to drive toward a general solution:</p>
              <pre class="bg-gray-800 text-green-400 p-3 rounded text-sm">
// First test
@Test
void testMultiplyByZero() {
    assertEquals(0, multiply(5, 0));
}

// Second test (triangulate)
@Test
void testMultiplyPositiveNumbers() {
    assertEquals(6, multiply(2, 3));
}

// Third test (more triangulation)
@Test
void testMultiplyNegativeNumbers() {
    assertEquals(-6, multiply(-2, 3));
}</pre>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Transformation Priority Premise</h4>
              <p class="text-green-700 mb-3">Apply transformations in order of preference:</p>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Null → Constant:</strong> Return a constant instead of null</li>
                <li>• <strong>Constant → Variable:</strong> Replace constant with a variable</li>
                <li>• <strong>Statement → Statements:</strong> Add more statements</li>
                <li>• <strong>Unconditional → Conditional:</strong> Add if statements</li>
                <li>• <strong>Scalar → Array:</strong> Change from single value to collection</li>
                <li>• <strong>Array → Container:</strong> Use more sophisticated data structures</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common TDD Anti-Patterns
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ What NOT to Do</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Writing implementation before tests</li>
                  <li>• Writing too many tests at once</li>
                  <li>• Making tests too complex</li>
                  <li>• Testing implementation details</li>
                  <li>• Skipping the refactor step</li>
                  <li>• Writing tests that always pass</li>
                  <li>• Not running tests frequently</li>
                  <li>• Ignoring failing tests</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">⚠️ Common Mistakes</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Over-engineering early solutions</li>
                  <li>• Writing tests for getters/setters</li>
                  <li>• Mocking everything</li>
                  <li>• Not testing edge cases</li>
                  <li>• Coupling tests to implementation</li>
                  <li>• Writing slow integration tests first</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Start with failing tests</li>
                  <li>• Write minimal implementation</li>
                  <li>• Refactor regularly</li>
                  <li>• Keep tests simple and focused</li>
                  <li>• Test behavior, not implementation</li>
                  <li>• Use descriptive test names</li>
                  <li>• Maintain fast test execution</li>
                  <li>• Practice the discipline consistently</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">🎯 Success Tips</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Start with simple examples</li>
                  <li>• Practice with coding katas</li>
                  <li>• Pair program to learn faster</li>
                  <li>• Use TDD for new features</li>
                  <li>• Be patient with the learning curve</li>
                  <li>• Focus on design benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Complete TDD Example - Bowling Game Kata</div>
        
        <div class="text-gray-400 mb-4">// === STEP 1: RED - Write First Failing Test ===</div>
        
        <div class="text-purple-400">@Test</div><br/>
        <div class="text-blue-400">void</div> <div class="text-yellow-400">testGutterGame</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">BowlingGame</div> game = <div class="text-blue-400">new</div> <div class="text-yellow-400">BowlingGame</div>();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Roll 20 times, knocking down 0 pins each time</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-green-300">0</div>; i < <div class="text-green-300">20</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;game.roll(<div class="text-green-300">0</div>);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;assertEquals(<div class="text-green-300">0</div>, game.score());<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 2: GREEN - Minimal Implementation ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">BowlingGame</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">roll</div>(<div class="text-blue-400">int</div> pins) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Do nothing for now</div><br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">score</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">0</div>; <div class="text-gray-400">// Hard-coded to make test pass</div><br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 3: RED - Add Second Test ===</div>
        
        <div class="text-purple-400">@Test</div><br/>
        <div class="text-blue-400">void</div> <div class="text-yellow-400">testAllOnes</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">BowlingGame</div> game = <div class="text-blue-400">new</div> <div class="text-yellow-400">BowlingGame</div>();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Roll 20 times, knocking down 1 pin each time</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-green-300">0</div>; i < <div class="text-green-300">20</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;game.roll(<div class="text-green-300">1</div>);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;assertEquals(<div class="text-green-300">20</div>, game.score());<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 4: GREEN - Implement to Pass Both Tests ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">BowlingGame</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> score = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">roll</div>(<div class="text-blue-400">int</div> pins) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;score += pins;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">score</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> score;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 5: RED - Add Spare Test ===</div>
        
        <div class="text-purple-400">@Test</div><br/>
        <div class="text-blue-400">void</div> <div class="text-yellow-400">testOneSpare</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">BowlingGame</div> game = <div class="text-blue-400">new</div> <div class="text-yellow-400">BowlingGame</div>();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Roll a spare (5 + 5), then 3, then all zeros</div><br/>
        &nbsp;&nbsp;game.roll(<div class="text-green-300">5</div>);<br/>
        &nbsp;&nbsp;game.roll(<div class="text-green-300">5</div>); <div class="text-gray-400">// Spare</div><br/>
        &nbsp;&nbsp;game.roll(<div class="text-green-300">3</div>); <div class="text-gray-400">// Next roll counts double</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-green-300">0</div>; i < <div class="text-green-300">17</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;game.roll(<div class="text-green-300">0</div>);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Score: 10 (spare) + 3 (bonus) + 3 = 16</div><br/>
        &nbsp;&nbsp;assertEquals(<div class="text-green-300">16</div>, game.score());<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 6: GREEN - Implement Spare Logic ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">BowlingGame</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div>[] rolls = <div class="text-blue-400">new int</div>[<div class="text-green-300">21</div>];<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> currentRoll = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">roll</div>(<div class="text-blue-400">int</div> pins) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;rolls[currentRoll++] = pins;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">score</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> score = <div class="text-green-300">0</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rollIndex = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> frame = <div class="text-green-300">0</div>; frame < <div class="text-green-300">10</div>; frame++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (isSpare(rollIndex)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += <div class="text-green-300">10</div> + rolls[rollIndex + <div class="text-green-300">2</div>]; <div class="text-gray-400">// Spare bonus</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">2</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += rolls[rollIndex] + rolls[rollIndex + <div class="text-green-300">1</div>];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">2</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> score;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private boolean</div> <div class="text-yellow-400">isSpare</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> rolls[rollIndex] + rolls[rollIndex + <div class="text-green-300">1</div>] == <div class="text-green-300">10</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 7: RED - Add Strike Test ===</div>
        
        <div class="text-purple-400">@Test</div><br/>
        <div class="text-blue-400">void</div> <div class="text-yellow-400">testOneStrike</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">BowlingGame</div> game = <div class="text-blue-400">new</div> <div class="text-yellow-400">BowlingGame</div>();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Roll a strike (10), then 3 and 4, then all zeros</div><br/>
        &nbsp;&nbsp;game.roll(<div class="text-green-300">10</div>); <div class="text-gray-400">// Strike</div><br/>
        &nbsp;&nbsp;game.roll(<div class="text-green-300">3</div>);<br/>
        &nbsp;&nbsp;game.roll(<div class="text-green-300">4</div>);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-green-300">0</div>; i < <div class="text-green-300">16</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;game.roll(<div class="text-green-300">0</div>);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Score: 10 (strike) + 3 + 4 (bonus) + 3 + 4 = 24</div><br/>
        &nbsp;&nbsp;assertEquals(<div class="text-green-300">24</div>, game.score());<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 8: GREEN - Implement Strike Logic ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">BowlingGame</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div>[] rolls = <div class="text-blue-400">new int</div>[<div class="text-green-300">21</div>];<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> currentRoll = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">roll</div>(<div class="text-blue-400">int</div> pins) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;rolls[currentRoll++] = pins;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">score</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> score = <div class="text-green-300">0</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rollIndex = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> frame = <div class="text-green-300">0</div>; frame < <div class="text-green-300">10</div>; frame++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (isStrike(rollIndex)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += <div class="text-green-300">10</div> + rolls[rollIndex + <div class="text-green-300">1</div>] + rolls[rollIndex + <div class="text-green-300">2</div>]; <div class="text-gray-400">// Strike bonus</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">1</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else if</div> (isSpare(rollIndex)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += <div class="text-green-300">10</div> + rolls[rollIndex + <div class="text-green-300">2</div>]; <div class="text-gray-400">// Spare bonus</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">2</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += rolls[rollIndex] + rolls[rollIndex + <div class="text-green-300">1</div>];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">2</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> score;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private boolean</div> <div class="text-yellow-400">isStrike</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> rolls[rollIndex] == <div class="text-green-300">10</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private boolean</div> <div class="text-yellow-400">isSpare</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> rolls[rollIndex] + rolls[rollIndex + <div class="text-green-300">1</div>] == <div class="text-green-300">10</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === STEP 9: REFACTOR - Extract Helper Methods ===</div>
        
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">BowlingGame</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div>[] rolls = <div class="text-blue-400">new int</div>[<div class="text-green-300">21</div>];<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> currentRoll = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">roll</div>(<div class="text-blue-400">int</div> pins) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;rolls[currentRoll++] = pins;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public int</div> <div class="text-yellow-400">score</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> score = <div class="text-green-300">0</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> rollIndex = <div class="text-green-300">0</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> frame = <div class="text-green-300">0</div>; frame < <div class="text-green-300">10</div>; frame++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (isStrike(rollIndex)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += strikeScore(rollIndex);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">1</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else if</div> (isSpare(rollIndex)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += spareScore(rollIndex);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">2</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">else</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score += normalScore(rollIndex);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rollIndex += <div class="text-green-300">2</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> score;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> <div class="text-yellow-400">strikeScore</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">10</div> + rolls[rollIndex + <div class="text-green-300">1</div>] + rolls[rollIndex + <div class="text-green-300">2</div>];<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> <div class="text-yellow-400">spareScore</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">10</div> + rolls[rollIndex + <div class="text-green-300">2</div>];<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> <div class="text-yellow-400">normalScore</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> rolls[rollIndex] + rolls[rollIndex + <div class="text-green-300">1</div>];<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private boolean</div> <div class="text-yellow-400">isStrike</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> rolls[rollIndex] == <div class="text-green-300">10</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private boolean</div> <div class="text-yellow-400">isSpare</div>(<div class="text-blue-400">int</div> rollIndex) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> rolls[rollIndex] + rolls[rollIndex + <div class="text-green-300">1</div>] == <div class="text-green-300">10</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === FINAL TEST - Perfect Game ===</div>
        
        <div class="text-purple-400">@Test</div><br/>
        <div class="text-blue-400">void</div> <div class="text-yellow-400">testPerfectGame</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">BowlingGame</div> game = <div class="text-blue-400">new</div> <div class="text-yellow-400">BowlingGame</div>();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Roll 12 strikes for a perfect game</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-green-300">0</div>; i < <div class="text-green-300">12</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;game.roll(<div class="text-green-300">10</div>);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;assertEquals(<div class="text-green-300">300</div>, game.score());<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === TDD PRINCIPLES DEMONSTRATED ===</div>
        <div class="text-gray-400">/*</div><br/>
        <div class="text-gray-400">1. RED: Write failing test first</div><br/>
        <div class="text-gray-400">2. GREEN: Write minimal code to pass</div><br/>
        <div class="text-gray-400">3. REFACTOR: Improve design while keeping tests green</div><br/>
        <div class="text-gray-400">4. REPEAT: Add more tests and functionality incrementally</div><br/>
        <div class="text-gray-400">*/</div>
      </div>
    `,
    exercise: `
      **🎯 Test-Driven Development Exercises**

      **Exercise 1: String Calculator Kata**
      Implement a String Calculator using TDD:
      - Start with an empty string returning 0
      - Handle single numbers: "1" returns 1
      - Handle two numbers: "1,2" returns 3
      - Handle multiple numbers: "1,2,3" returns 6
      - Handle new line delimiters: "1\\n2,3" returns 6
      - Support custom delimiters: "//;\\n1;2" returns 3
      - Throw exception for negative numbers

      **Exercise 2: FizzBuzz TDD**
      Create FizzBuzz using strict TDD approach:
      - Return "1" for input 1
      - Return "2" for input 2
      - Return "Fizz" for multiples of 3
      - Return "Buzz" for multiples of 5
      - Return "FizzBuzz" for multiples of both 3 and 5
      - Follow Red-Green-Refactor cycle for each requirement

      **Exercise 3: Bank Account TDD**
      Build a BankAccount class using TDD:
      - Create account with initial balance
      - Implement deposit functionality
      - Implement withdrawal functionality
      - Prevent overdrafts
      - Track transaction history
      - Calculate interest

      **Exercise 4: Roman Numerals Converter**
      Convert integers to Roman numerals using TDD:
      - Start with 1 → "I"
      - Handle 2 → "II", 3 → "III"
      - Handle 4 → "IV", 5 → "V"
      - Handle 9 → "IX", 10 → "X"
      - Handle larger numbers up to 3999
      - Follow transformation priority premise

      **Exercise 5: Gilded Rose Refactoring**
      Refactor the Gilded Rose kata using TDD:
      - First, write comprehensive tests for existing behavior
      - Ensure 100% test coverage
      - Refactor the code while keeping tests green
      - Add new item types using TDD approach
      - Practice working with legacy code

      **Exercise 6: Mars Rover TDD**
      Create a Mars Rover using TDD:
      - Initialize rover with position and direction
      - Implement forward/backward movement
      - Implement left/right turning
      - Handle grid boundaries (wrapping or obstacles)
      - Process command strings like "MMRMMRMRRM"
      - Add obstacle detection

      **Deliverable:**
      Complete at least 3 of the above katas using strict TDD methodology. Document your Red-Green-Refactor cycles, showing the evolution of your tests and implementation. Reflect on how TDD influenced your design decisions and code quality.
    `
  }
};