import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_6: LessonContent = {
  title: 'Optional Class and Null Safety',
  type: 'lesson',
  duration: '25 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Master the Optional class in Java for null safety and functional programming. Learn to eliminate NullPointerExceptions and write more robust, expressive code using Optional patterns and best practices.',
    objectives: [
      'Understand the purpose and benefits of the Optional class',
      'Learn to create and work with Optional instances',
      'Master Optional methods for safe value handling',
      'Implement null safety patterns in functional programming',
      'Practice Optional chaining and composition',
      'Apply best practices for Optional usage'
    ],
    theory: `
      <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Optional Class and Null Safety
        </h1>
        <p class="mt-3 text-emerald-100 text-lg">Eliminate null pointer exceptions with functional null handling</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Optional
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Optional is a container object that may or may not contain a non-null value. It was introduced in Java 8 
            to provide a functional approach to handling null values and reduce NullPointerExceptions.
          </p>
          
          <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400 mb-4">
            <h4 class="font-bold text-emerald-800 mb-2">💡 Key Concept</h4>
            <p class="text-emerald-700">Optional forces you to explicitly handle the absence of a value, making your code more robust and self-documenting.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Traditional Null Handling</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Prone to NPE</div>
                String name = getName();<br/>
                if (name != null) {<br/>
                &nbsp;&nbsp;System.out.println(name.toUpperCase());<br/>
                }
              </div>
              <p class="text-red-700 mt-2 text-sm">Risk of forgetting null checks</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Optional Approach</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Safe and expressive</div>
                Optional&lt;String&gt; name = getOptionalName();<br/>
                name.map(String::toUpperCase)<br/>
                &nbsp;&nbsp;.ifPresent(System.out::println);
              </div>
              <p class="text-green-700 mt-2 text-sm">Explicit null handling</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Creating Optional Instances
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">There are several ways to create Optional instances:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Factory Methods</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Empty Optional</div>
                  Optional&lt;String&gt; empty = Optional.empty();<br/><br/>
                  <div class="text-yellow-400">// Optional with non-null value</div>
                  Optional&lt;String&gt; present = Optional.of("Hello");<br/><br/>
                  <div class="text-yellow-400">// Optional that may be null</div>
                  Optional&lt;String&gt; nullable = Optional.ofNullable(getValue());
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Important Notes</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>of():</strong> Throws NPE if value is null</li>
                  <li>• <strong>ofNullable():</strong> Safe for potentially null values</li>
                  <li>• <strong>empty():</strong> Creates empty Optional</li>
                  <li>• Never pass null to Optional.of()</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Optional Methods
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Checking and Retrieving</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>isPresent():</strong> Check if value exists</li>
                  <li>• <strong>isEmpty():</strong> Check if empty (Java 11+)</li>
                  <li>• <strong>get():</strong> Get value (throws if empty)</li>
                  <li>• <strong>orElse(T):</strong> Get value or default</li>
                  <li>• <strong>orElseGet(Supplier):</strong> Get value or compute default</li>
                  <li>• <strong>orElseThrow():</strong> Get value or throw exception</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Functional Operations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>map(Function):</strong> Transform if present</li>
                  <li>• <strong>flatMap(Function):</strong> Transform to Optional</li>
                  <li>• <strong>filter(Predicate):</strong> Filter if present</li>
                  <li>• <strong>ifPresent(Consumer):</strong> Execute if present</li>
                  <li>• <strong>ifPresentOrElse():</strong> Execute or else (Java 9+)</li>
                  <li>• <strong>or(Supplier):</strong> Alternative Optional (Java 9+)</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Method Chaining Example</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Optional.ofNullable(user)<br/>
                &nbsp;&nbsp;.map(User::getAddress)<br/>
                &nbsp;&nbsp;.map(Address::getCity)<br/>
                &nbsp;&nbsp;.filter(city -> city.length() > 5)<br/>
                &nbsp;&nbsp;.map(String::toUpperCase)<br/>
                &nbsp;&nbsp;.orElse("UNKNOWN");
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Optional Best Practices
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">✅ Do</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use Optional as return type for methods that might not return a value</li>
                  <li>• Use functional methods (map, flatMap, filter)</li>
                  <li>• Chain operations for complex transformations</li>
                  <li>• Use orElseGet() for expensive default computations</li>
                  <li>• Use Optional.stream() in stream pipelines</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">❌ Don't</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use Optional for fields or parameters</li>
                  <li>• Call get() without checking isPresent()</li>
                  <li>• Use Optional just to avoid null checks</li>
                  <li>• Create Optional of Optional</li>
                  <li>• Use Optional for collections (use empty collections instead)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Optional with Streams
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Optional integrates seamlessly with the Stream API for powerful null-safe data processing.</p>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Optional.stream() (Java 9+)</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Convert Optional to Stream</div>
                List&lt;String&gt; results = optionals.stream()<br/>
                &nbsp;&nbsp;.flatMap(Optional::stream)<br/>
                &nbsp;&nbsp;.collect(Collectors.toList());<br/><br/>
                <div class="text-yellow-400">// Filter and process Optional values</div>
                optionals.stream()<br/>
                &nbsp;&nbsp;.flatMap(Optional::stream)<br/>
                &nbsp;&nbsp;.filter(s -> s.length() > 3)<br/>
                &nbsp;&nbsp;.forEach(System.out::println);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Null Safety Patterns
          </h2>
          <div class="space-y-4">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Common Patterns</h4>
              <div class="space-y-3">
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Safe method chaining</div>
                  Optional.ofNullable(user)<br/>
                  &nbsp;&nbsp;.map(User::getProfile)<br/>
                  &nbsp;&nbsp;.map(Profile::getEmail)<br/>
                  &nbsp;&nbsp;.orElse("no-email@example.com");
                </div>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  <div class="text-yellow-400">// Conditional execution</div>
                  Optional.ofNullable(config)<br/>
                  &nbsp;&nbsp;.filter(c -> c.isEnabled())<br/>
                  &nbsp;&nbsp;.ifPresent(this::processConfig);
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// OptionalDemo.java</div>
        <div class="text-blue-400">import</div> java.util.*;<br/>
        <div class="text-blue-400">import</div> java.util.stream.*;<br/>
        <div class="text-blue-400">import</div> java.util.function.*;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">OptionalDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">static class</div> <div class="text-yellow-400">User</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> email;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Address</div> address;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">User</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email, <div class="text-blue-400">Address</div> address) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.email = email;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.address = address;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getName</div>() { <div class="text-blue-400">return</div> name; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt; <div class="text-yellow-400">getEmail</div>() { <div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.ofNullable(email); }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">Address</div>&gt; <div class="text-yellow-400">getAddress</div>() { <div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.ofNullable(address); }<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">static class</div> <div class="text-yellow-400">Address</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> street;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> city;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> zipCode;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">Address</div>(<div class="text-blue-400">String</div> street, <div class="text-blue-400">String</div> city, <div class="text-blue-400">String</div> zipCode) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.street = street;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.city = city;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.zipCode = zipCode;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getStreet</div>() { <div class="text-blue-400">return</div> street; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getCity</div>() { <div class="text-blue-400">return</div> city; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt; <div class="text-yellow-400">getZipCode</div>() { <div class="text-blue-400">return</div> <div class="text-blue-400">Optional</div>.ofNullable(zipCode); }<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Sample data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">User</div>&gt; users = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"Alice"</div>, <div class="text-green-300">"alice@email.com"</div>, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Address</div>(<div class="text-green-300">"123 Main St"</div>, <div class="text-green-300">"New York"</div>, <div class="text-green-300">"10001"</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"Bob"</div>, <div class="text-blue-400">null</div>, <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Address</div>(<div class="text-green-300">"456 Oak Ave"</div>, <div class="text-green-300">"Boston"</div>, <div class="text-blue-400">null</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"Charlie"</div>, <div class="text-green-300">"charlie@email.com"</div>, <div class="text-blue-400">null</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Basic Optional usage</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt; optionalValue = <div class="text-blue-400">Optional</div>.ofNullable(getValue());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> result = optionalValue.orElse(<div class="text-green-300">"Default Value"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Result: "</div> + result);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Safe method chaining</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;users.forEach(user -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> city = user.getAddress()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">Address</div>::getCity)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(<div class="text-green-300">"Unknown City"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(user.getName() + <div class="text-green-300">" lives in "</div> + city);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Optional with filtering</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;users.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">User</div>::getEmail)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(<div class="text-blue-400">Optional</div>::isPresent)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">Optional</div>::get)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(email -> <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Email: "</div> + email));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Better approach with flatMap</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; emails = users.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">User</div>::getEmail)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.flatMap(<div class="text-blue-400">Optional</div>::stream)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Valid emails: "</div> + emails);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. Complex Optional chaining</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;users.forEach(user -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> zipCode = user.getAddress()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.flatMap(<div class="text-blue-400">Address</div>::getZipCode)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(zip -> zip.length() == <div class="text-purple-400">5</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElse(<div class="text-green-300">"00000"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(user.getName() + <div class="text-green-300">" zip: "</div> + zipCode);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 6. Optional with exception handling</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt; emailOpt = <div class="text-blue-400">Optional</div>.ofNullable(getEmailFromDatabase());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = emailOpt.orElseThrow(() -> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">IllegalStateException</div>(<div class="text-green-300">"Email is required"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 7. Optional with lazy evaluation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> expensiveDefault = <div class="text-blue-400">Optional</div>.ofNullable(getCachedValue())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElseGet(() -> computeExpensiveDefault());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 8. Optional in stream processing</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt;&gt; emailsByCity = users.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(user -> user.getAddress().isPresent())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(user -> user.getEmail().isPresent())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.groupingBy(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user -> user.getAddress().get().getCity(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.mapping(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user -> user.getEmail().get(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.toList()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 9. Optional conditional execution</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;users.forEach(user -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user.getEmail()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(email -> email.contains(<div class="text-green-300">"@"</div>))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.ifPresentOrElse(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email -> <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Valid email: "</div> + email),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;() -> <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"No valid email for "</div> + user.getName())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 10. Optional with custom operations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt; processedEmail = users.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.findFirst()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.flatMap(<div class="text-blue-400">User</div>::getEmail)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">String</div>::toLowerCase)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(email -> email.endsWith(<div class="text-green-300">".com"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;processedEmail.ifPresent(email -> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Processed email: "</div> + email));<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getValue</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Simulate method that might return null</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">Math</div>.random() > <div class="text-purple-400">0.5</div> ? <div class="text-green-300">"Some Value"</div> : <div class="text-blue-400">null</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getEmailFromDatabase</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Simulate database lookup</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">null</div>; <div class="text-gray-400">// Might be null</div><br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getCachedValue</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">null</div>; <div class="text-gray-400">// Simulate cache miss</div><br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">computeExpensiveDefault</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Computing expensive default..."</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Expensive Default"</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
exercise: `
1. Create an Optional from a potentially null string and use orElse() to provide a default value.
2. Use map() to transform an Optional<String> to Optional<Integer> by getting the string length.
3. Use flatMap() to safely navigate from Optional<User> to Optional<Address>.
4. Use filter() to check if an Optional<String> contains a specific substring.
5. Use ifPresent() to execute code only when an Optional has a value.
`
  }
};