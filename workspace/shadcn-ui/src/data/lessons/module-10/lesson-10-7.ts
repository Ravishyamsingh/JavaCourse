import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_7: LessonContent = {
  title: 'Functional Programming Best Practices',
  type: 'lesson',
  duration: '30 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Learn essential best practices and design principles for functional programming in Java. Master immutability, pure functions, composition patterns, and performance optimization techniques for writing clean, maintainable functional code.',
    objectives: [
      'Understand functional programming principles and their benefits',
      'Master immutability and pure function concepts',
      'Learn function composition and higher-order function patterns',
      'Implement error handling in functional style',
      'Practice performance optimization for functional code',
      'Apply functional design patterns and best practices'
    ],
    theory: `
      <div class="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Functional Programming Best Practices
        </h1>
        <p class="mt-3 text-violet-100 text-lg">Design principles and patterns for clean, maintainable functional code</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-violet-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Core Functional Principles
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700 mb-4 leading-relaxed text-lg">
              Functional programming is based on mathematical functions and emphasizes immutability, 
              pure functions, and declarative programming style.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-violet-50 p-4 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-2">Pure Functions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• No side effects</li>
                  <li>• Same input always produces same output</li>
                  <li>• Don't modify external state</li>
                  <li>• Easier to test and reason about</li>
                  <li>• Enable parallel processing</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  <div class="text-yellow-400">// Pure function</div>
                  public static int add(int a, int b) {<br/>
                  &nbsp;&nbsp;return a + b;<br/>
                  }
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Immutability</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Objects don't change after creation</li>
                  <li>• Thread-safe by default</li>
                  <li>• Prevents accidental modifications</li>
                  <li>• Enables safe sharing</li>
                  <li>• Simplifies reasoning about code</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  <div class="text-yellow-400">// Immutable class</div>
                  public final class Person {<br/>
                  &nbsp;&nbsp;private final String name;<br/>
                  &nbsp;&nbsp;// Constructor and getters only<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Function Composition
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Function composition allows you to build complex operations by combining simpler functions.</p>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
              <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
              <p class="text-purple-700">Composition creates new functions by combining existing ones, promoting code reuse and modularity.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Function Interface Methods</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>compose():</strong> Execute before</li>
                  <li>• <strong>andThen():</strong> Execute after</li>
                  <li>• <strong>identity():</strong> Return input unchanged</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Function&lt;String, String&gt; trim = String::trim;<br/>
                  Function&lt;String, String&gt; upper = String::toUpperCase;<br/>
                  Function&lt;String, String&gt; combined = trim.andThen(upper);
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Predicate Composition</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>and():</strong> Logical AND</li>
                  <li>• <strong>or():</strong> Logical OR</li>
                  <li>• <strong>negate():</strong> Logical NOT</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Predicate&lt;String&gt; notEmpty = s -> !s.isEmpty();<br/>
                  Predicate&lt;String&gt; longEnough = s -> s.length() > 3;<br/>
                  Predicate&lt;String&gt; valid = notEmpty.and(longEnough);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Error Handling Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Functional programming requires different approaches to error handling that maintain functional purity.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Optional for Null Safety</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Instead of returning null</div>
                  public Optional&lt;User&gt; findUser(String id) {<br/>
                  &nbsp;&nbsp;return Optional.ofNullable(database.get(id));<br/>
                  }
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Try-Catch in Functional Style</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Wrap exceptions in Optional</div>
                  public static Optional&lt;Integer&gt; parseInt(String s) {<br/>
                  &nbsp;&nbsp;try {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return Optional.of(Integer.parseInt(s));<br/>
                  &nbsp;&nbsp;} catch (NumberFormatException e) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return Optional.empty();<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Performance Best Practices
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Stream Optimization</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use primitive streams for numerical operations</li>
                  <li>• Place filter operations early in pipeline</li>
                  <li>• Use parallel streams for large datasets</li>
                  <li>• Avoid unnecessary intermediate collections</li>
                  <li>• Use lazy evaluation effectively</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Memory Management</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Prefer immutable objects for thread safety</li>
                  <li>• Use builder patterns for complex objects</li>
                  <li>• Avoid creating unnecessary intermediate objects</li>
                  <li>• Consider object pooling for expensive operations</li>
                  <li>• Use method references over lambda expressions when possible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Design Patterns
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Strategy Pattern</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Functional strategy</div>
                  Function&lt;List&lt;Integer&gt;, Integer&gt; sumStrategy = <br/>
                  &nbsp;&nbsp;list -> list.stream().mapToInt(i -> i).sum();<br/><br/>
                  Function&lt;List&lt;Integer&gt;, Integer&gt; maxStrategy = <br/>
                  &nbsp;&nbsp;list -> list.stream().max(Integer::compare).orElse(0);
                </div>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Command Pattern</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Commands as functions</div>
                  Runnable saveCommand = () -> database.save(data);<br/>
                  Runnable logCommand = () -> logger.log("Saved");<br/><br/>
                  List&lt;Runnable&gt; commands = Arrays.asList(<br/>
                  &nbsp;&nbsp;saveCommand, logCommand);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Code Quality Guidelines
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Keep lambda expressions short and focused</li>
                  <li>• Use method references when possible</li>
                  <li>• Prefer immutable objects</li>
                  <li>• Avoid side effects in functional operations</li>
                  <li>• Use meaningful variable names</li>
                  <li>• Compose functions for complex operations</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Anti-Patterns</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Long, complex lambda expressions</li>
                  <li>• Modifying external state in lambdas</li>
                  <li>• Using functional style for simple loops</li>
                  <li>• Overusing Optional for everything</li>
                  <li>• Ignoring performance implications</li>
                  <li>• Mixing imperative and functional styles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
            Testing Functional Code
          </h2>
          <div class="space-y-4">
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Testing Strategies</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Pure functions are easy to unit test</li>
                <li>• Test function composition separately</li>
                <li>• Use property-based testing for functional code</li>
                <li>• Mock external dependencies, not pure functions</li>
                <li>• Test edge cases with Optional and streams</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// FunctionalBestPracticesDemo.java</div>
        <div class="text-blue-400">import</div> java.util.*;<br/>
        <div class="text-blue-400">import</div> java.util.stream.*;<br/>
        <div class="text-blue-400">import</div> java.util.function.*;<br/>
        <div class="text-blue-400">import</div> java.math.BigDecimal;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">FunctionalBestPracticesDemo</div> {<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// 1. Immutable data class</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">static final class</div> <div class="text-yellow-400">Product</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">BigDecimal</div> price;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> category;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">boolean</div> available;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">Product</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">BigDecimal</div> price, <div class="text-blue-400">String</div> category, <div class="text-blue-400">boolean</div> available) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = <div class="text-blue-400">Objects</div>.requireNonNull(name);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.price = <div class="text-blue-400">Objects</div>.requireNonNull(price);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.category = <div class="text-blue-400">Objects</div>.requireNonNull(category);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.available = available;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Getters</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getName</div>() { <div class="text-blue-400">return</div> name; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">BigDecimal</div> <div class="text-yellow-400">getPrice</div>() { <div class="text-blue-400">return</div> price; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getCategory</div>() { <div class="text-blue-400">return</div> category; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">isAvailable</div>() { <div class="text-blue-400">return</div> available; }<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Functional methods for transformations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Product</div> <div class="text-yellow-400">withPrice</div>(<div class="text-blue-400">BigDecimal</div> newPrice) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>(name, newPrice, category, available);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Product</div> <div class="text-yellow-400">withAvailability</div>(<div class="text-blue-400">boolean</div> newAvailability) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>(name, price, category, newAvailability);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// 2. Pure functions for business logic</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">Predicate</div>&lt;<div class="text-blue-400">Product</div>&gt; <div class="text-yellow-400">isAvailable</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">Product</div>::isAvailable;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">Predicate</div>&lt;<div class="text-blue-400">Product</div>&gt; <div class="text-yellow-400">inCategory</div>(<div class="text-blue-400">String</div> category) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> product -> product.getCategory().equals(category);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">Predicate</div>&lt;<div class="text-blue-400">Product</div>&gt; <div class="text-yellow-400">priceRange</div>(<div class="text-blue-400">BigDecimal</div> min, <div class="text-blue-400">BigDecimal</div> max) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> product -> product.getPrice().compareTo(min) >= <div class="text-purple-400">0</div> &&<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product.getPrice().compareTo(max) <= <div class="text-purple-400">0</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// 3. Function composition utilities</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> &lt;T&gt; <div class="text-blue-400">Function</div>&lt;<div class="text-blue-400">List</div>&lt;T&gt;, <div class="text-blue-400">Optional</div>&lt;T&gt;&gt; <div class="text-yellow-400">findFirst</div>(<div class="text-blue-400">Predicate</div>&lt;T&gt; predicate) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> list -> list.stream().filter(predicate).findFirst();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static</div> &lt;T, R&gt; <div class="text-blue-400">Function</div>&lt;<div class="text-blue-400">List</div>&lt;T&gt;, <div class="text-blue-400">List</div>&lt;R&gt;&gt; <div class="text-yellow-400">mapAndFilter</div>(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Function</div>&lt;T, R&gt; mapper, <div class="text-blue-400">Predicate</div>&lt;R&gt; filter) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> list -> list.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(mapper)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(filter)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// 4. Safe parsing utility</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">BigDecimal</div>&gt; <div class="text-yellow-400">safeParseBigDecimal</div>(<div class="text-blue-400">String</div> value) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.of(<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(value));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">NumberFormatException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.empty();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Sample data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Product</div>&gt; products = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>(<div class="text-green-300">"Laptop"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"999.99"</div>), <div class="text-green-300">"Electronics"</div>, <div class="text-blue-400">true</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>(<div class="text-green-300">"Book"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"29.99"</div>), <div class="text-green-300">"Books"</div>, <div class="text-blue-400">true</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>(<div class="text-green-300">"Phone"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"699.99"</div>), <div class="text-green-300">"Electronics"</div>, <div class="text-blue-400">false</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Product</div>(<div class="text-green-300">"Tablet"</div>, <div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(<div class="text-green-300">"399.99"</div>), <div class="text-green-300">"Electronics"</div>, <div class="text-blue-400">true</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. Function composition example</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Predicate</div>&lt;<div class="text-blue-400">Product</div>&gt; availableElectronics = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;isAvailable().and(inCategory(<div class="text-green-300">"Electronics"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Function</div>&lt;<div class="text-blue-400">Product</div>, <div class="text-blue-400">String</div>&gt; formatProduct = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;product -> product.getName() + <div class="text-green-300">" - $"</div> + product.getPrice();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 6. Higher-order functions</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Function</div>&lt;<div class="text-blue-400">Predicate</div>&lt;<div class="text-blue-400">Product</div>&gt;, <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Product</div>&gt;&gt; filterProducts = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;predicate -> products.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(predicate)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 7. Apply composed predicates</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Product</div>&gt; availableElectronicsProducts = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filterProducts.apply(availableElectronics);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Available Electronics:"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;availableElectronicsProducts.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(formatProduct)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(<div class="text-blue-400">System</div>.out::println);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 8. Functional error handling</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; priceStrings = <div class="text-blue-400">Arrays</div>.asList(<div class="text-green-300">"99.99"</div>, <div class="text-green-300">"invalid"</div>, <div class="text-green-300">"149.99"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">BigDecimal</div>&gt; validPrices = priceStrings.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(FunctionalBestPracticesDemo::safeParseBigDecimal)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.flatMap(<div class="text-blue-400">Optional</div>::stream)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Valid prices: "</div> + validPrices);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 9. Functional pipeline with error handling</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">BigDecimal</div>&gt; totalValue = products.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(isAvailable())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">Product</div>::getPrice)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.reduce(<div class="text-blue-400">BigDecimal</div>::add);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;totalValue.ifPresentOrElse(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value -> <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Total value: $"</div> + value),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"No products available"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 10. Functional data transformation pipeline</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">BigDecimal</div>&gt; categoryTotals = products.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(isAvailable())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.groupingBy(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Product</div>::getCategory,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.reducing(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div>.ZERO,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Product</div>::getPrice,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">BigDecimal</div>::add<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Category totals: "</div> + categoryTotals);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Utility method for safe parsing</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">BigDecimal</div>&gt; <div class="text-yellow-400">safeParseBigDecimal</div>(<div class="text-blue-400">String</div> value) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.of(<div class="text-blue-400">new</div> <div class="text-yellow-400">BigDecimal</div>(value));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">NumberFormatException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.empty();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold mb-4">🎯 Practice Exercise: Functional E-Commerce System</h2>
        <p class="text-violet-100">Design and implement a comprehensive e-commerce system that demonstrates all functional programming best practices and patterns.</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-violet-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-violet-50 p-4 rounded-lg">
              <h4 class="font-bold text-violet-800 mb-2">1. Immutable Domain Models</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create immutable Product, Customer, Order, and OrderItem classes</li>
                <li>• Implement builder patterns for complex object creation</li>
                <li>• Use Optional for nullable fields appropriately</li>
                <li>• Provide functional transformation methods (withX methods)</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">2. Pure Business Logic Functions</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement pricing calculations as pure functions</li>
                <li>• Create validation functions that return Optional or boolean</li>
                <li>• Design discount and tax calculation functions</li>
                <li>• Implement inventory management functions</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">3. Function Composition</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Compose complex business rules from simple predicates</li>
                <li>• Create reusable function combinations</li>
                <li>• Implement higher-order functions for flexible processing</li>
                <li>• Design functional pipelines for order processing</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">4. Stream Processing</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Process orders and calculate statistics functionally</li>
                <li>• Implement reporting with advanced collectors</li>
                <li>• Use parallel processing for performance-critical operations</li>
                <li>• Handle errors gracefully in stream pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Implementation Hints</h3>
          <div class="space-y-3">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Immutability:</strong> Use final fields and provide transformation methods instead of setters</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Pure Functions:</strong> Ensure functions don't modify input parameters or external state</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Composition:</strong> Use Function.compose() and andThen() for building complex operations</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Error Handling:</strong> Use Optional and functional error handling patterns instead of exceptions</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">All domain classes are immutable with proper encapsulation</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Business logic implemented as pure functions</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Effective use of function composition and higher-order functions</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Comprehensive error handling with Optional patterns</span>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Efficient stream processing with proper optimization</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Clean separation of concerns using functional principles</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Proper use of parallel processing where appropriate</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Comprehensive testing of functional components</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🚀 Bonus Challenges</h3>
          <div class="space-y-3">
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Functional Validation:</strong> Create a comprehensive validation framework using function composition</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Event Sourcing:</strong> Implement an event-driven system using functional programming principles</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Functional Caching:</strong> Design a memoization system for expensive function calls</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Reactive Programming:</strong> Integrate with reactive streams for asynchronous processing</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📚 Key Takeaways</h3>
          <div class="bg-emerald-50 p-4 rounded-lg">
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Immutability:</strong> Creates safer, more predictable code</li>
              <li>• <strong>Pure Functions:</strong> Enable better testing and parallel processing</li>
              <li>• <strong>Composition:</strong> Builds complex behavior from simple, reusable parts</li>
              <li>• <strong>Declarative Style:</strong> Focuses on what to do, not how to do it</li>
              <li>• <strong>Error Handling:</strong> Use Optional and functional patterns for robust code</li>
              <li>• <strong>Performance:</strong> Consider the trade-offs between readability and efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }
};