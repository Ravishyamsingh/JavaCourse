import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_5: LessonContent = {
  title: 'Advanced Stream Operations',
  type: 'lesson',
  duration: '30 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Master advanced Stream API operations including flatMap, complex collectors, parallel processing, and custom stream operations. Learn to handle complex data transformations and optimize stream performance.',
    objectives: [
      'Master flatMap for handling nested collections',
      'Implement advanced collectors and custom collectors',
      'Understand parallel streams and their performance implications',
      'Learn complex reduction and grouping operations',
      'Practice stream composition and chaining',
      'Optimize stream performance for large datasets'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Advanced Stream Operations
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Complex data transformations and performance optimization</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            FlatMap Operations
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            FlatMap is used to flatten nested structures and transform each element into a stream, then flatten 
            all resulting streams into a single stream. It's essential for working with collections of collections.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">FlatMap = Map + Flatten. It applies a function that returns a stream for each element, then flattens all streams into one.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">FlatMap vs Map</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// Map: 1-to-1 transformation</div>
                stream.map(String::toUpperCase)<br/><br/>
                <div class="text-yellow-400">// FlatMap: 1-to-many transformation</div>
                stream.flatMap(s -> Arrays.stream(s.split("")))
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Common Use Cases</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Flattening nested collections</li>
                <li>• Processing words from sentences</li>
                <li>• Handling Optional values</li>
                <li>• Working with hierarchical data</li>
                <li>• Stream composition</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Advanced Collectors
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Collectors provide powerful ways to accumulate stream elements into various data structures and perform complex aggregations.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Grouping Collectors</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• groupingBy() - Group by classifier</li>
                  <li>• partitioningBy() - Boolean partitioning</li>
                  <li>• groupingByConcurrent() - Concurrent grouping</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Map&lt;String, List&lt;Person&gt;&gt; byCity = <br/>
                  &nbsp;&nbsp;people.stream().collect(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;Collectors.groupingBy(Person::getCity));
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Downstream Collectors</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• counting() - Count elements</li>
                  <li>• summingInt() - Sum values</li>
                  <li>• averagingDouble() - Calculate average</li>
                  <li>• mapping() - Transform then collect</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Map&lt;String, Double&gt; avgAgeByCity = <br/>
                  &nbsp;&nbsp;people.stream().collect(<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;groupingBy(Person::getCity,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;averagingInt(Person::getAge)));
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Custom Collectors</h4>
              <p class="text-gray-700 mb-2">Create custom collectors using Collector.of():</p>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Collector&lt;String, ?, String&gt; customJoiner = Collector.of(<br/>
                &nbsp;&nbsp;StringBuilder::new,<br/>
                &nbsp;&nbsp;(sb, s) -> sb.append(s).append("|"),<br/>
                &nbsp;&nbsp;(sb1, sb2) -> sb1.append(sb2),<br/>
                &nbsp;&nbsp;StringBuilder::toString<br/>
                );
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Parallel Streams
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700 mb-4">Parallel streams can improve performance for CPU-intensive operations on large datasets by utilizing multiple CPU cores.</p>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
              <h4 class="font-bold text-green-800 mb-2">⚡ Performance Tip</h4>
              <p class="text-green-700">Use parallel streams when you have large datasets (typically > 10,000 elements) and CPU-intensive operations.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">When to Use Parallel</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Large datasets (> 10K elements)</li>
                  <li>• CPU-intensive operations</li>
                  <li>• Independent operations</li>
                  <li>• Stateless operations</li>
                  <li>• No shared mutable state</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">When to Avoid Parallel</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Small datasets</li>
                  <li>• I/O-bound operations</li>
                  <li>• Operations with side effects</li>
                  <li>• Ordered operations</li>
                  <li>• Shared mutable state</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Complex Reductions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Advanced reduction operations allow you to combine stream elements in sophisticated ways.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Three-Argument Reduce</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  &lt;U&gt; U reduce(U identity,<br/>
                  &nbsp;&nbsp;BiFunction&lt;U, ? super T, U&gt; accumulator,<br/>
                  &nbsp;&nbsp;BinaryOperator&lt;U&gt; combiner)
                </div>
                <p class="text-gray-700 mt-2 text-sm">Used for parallel processing and type transformation</p>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Collect vs Reduce</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Reduce:</strong> Immutable reduction</li>
                  <li>• <strong>Collect:</strong> Mutable reduction</li>
                  <li>• <strong>Collect:</strong> Better for containers</li>
                  <li>• <strong>Reduce:</strong> Better for values</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Stream Composition Patterns
          </h2>
          <div class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Chaining Multiple Operations</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                List&lt;String&gt; result = data.stream()<br/>
                &nbsp;&nbsp;.filter(Objects::nonNull)<br/>
                &nbsp;&nbsp;.flatMap(list -> list.stream())<br/>
                &nbsp;&nbsp;.map(String::trim)<br/>
                &nbsp;&nbsp;.filter(s -> !s.isEmpty())<br/>
                &nbsp;&nbsp;.distinct()<br/>
                &nbsp;&nbsp;.sorted()<br/>
                &nbsp;&nbsp;.collect(Collectors.toList());
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Conditional Processing</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Stream&lt;String&gt; conditionalStream = condition ?<br/>
                &nbsp;&nbsp;stream.filter(predicate1) :<br/>
                &nbsp;&nbsp;stream.filter(predicate2);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Performance Optimization
          </h2>
          <div class="space-y-4">
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2">Optimization Strategies</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use primitive streams (IntStream, LongStream, DoubleStream) for better performance</li>
                <li>• Place filter operations early in the pipeline</li>
                <li>• Use short-circuiting operations when possible</li>
                <li>• Avoid unnecessary boxing/unboxing</li>
                <li>• Consider stream size and operation complexity</li>
              </ul>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Short-Circuiting Operations</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                <div class="text-yellow-400">// These operations can terminate early</div>
                anyMatch(), allMatch(), noneMatch()<br/>
                findFirst(), findAny()<br/>
                limit(), takeWhile(), dropWhile()
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// AdvancedStreamDemo.java</div>
        <div class="text-blue-400">import</div> java.util.*;<br/>
        <div class="text-blue-400">import</div> java.util.stream.*;<br/>
        <div class="text-blue-400">import</div> java.util.function.*;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">AdvancedStreamDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">static class</div> <div class="text-yellow-400">Department</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; employees;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">Department</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; employees) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.employees = employees;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getName</div>() { <div class="text-blue-400">return</div> name; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; <div class="text-yellow-400">getEmployees</div>() { <div class="text-blue-400">return</div> employees; }<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">static class</div> <div class="text-yellow-400">Employee</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> department;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">double</div> salary;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">int</div> age;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">Employee</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> dept, <div class="text-blue-400">double</div> salary, <div class="text-blue-400">int</div> age) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name; <div class="text-blue-400">this</div>.department = dept;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.salary = salary; <div class="text-blue-400">this</div>.age = age;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Getters</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getName</div>() { <div class="text-blue-400">return</div> name; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDepartment</div>() { <div class="text-blue-400">return</div> department; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getSalary</div>() { <div class="text-blue-400">return</div> salary; }<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">int</div> <div class="text-yellow-400">getAge</div>() { <div class="text-blue-400">return</div> age; }<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Sample data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Employee</div>&gt; employees = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"Alice"</div>, <div class="text-green-300">"Engineering"</div>, <div class="text-purple-400">75000</div>, <div class="text-purple-400">28</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"Bob"</div>, <div class="text-green-300">"Marketing"</div>, <div class="text-purple-400">65000</div>, <div class="text-purple-400">32</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"Charlie"</div>, <div class="text-green-300">"Engineering"</div>, <div class="text-purple-400">80000</div>, <div class="text-purple-400">25</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"David"</div>, <div class="text-green-300">"Sales"</div>, <div class="text-purple-400">55000</div>, <div class="text-purple-400">35</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Employee</div>(<div class="text-green-300">"Eve"</div>, <div class="text-green-300">"Engineering"</div>, <div class="text-purple-400">90000</div>, <div class="text-purple-400">30</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Department</div>&gt; departments = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Department</div>(<div class="text-green-300">"Engineering"</div>, <div class="text-blue-400">Arrays</div>.asList(<div class="text-green-300">"Alice"</div>, <div class="text-green-300">"Charlie"</div>, <div class="text-green-300">"Eve"</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Department</div>(<div class="text-green-300">"Marketing"</div>, <div class="text-blue-400">Arrays</div>.asList(<div class="text-green-300">"Bob"</div>, <div class="text-green-300">"Frank"</div>)),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">Department</div>(<div class="text-green-300">"Sales"</div>, <div class="text-blue-400">Arrays</div>.asList(<div class="text-green-300">"David"</div>, <div class="text-green-300">"Grace"</div>))<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. FlatMap - Flatten department employees</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; allEmployees = departments.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.flatMap(dept -> dept.getEmployees().stream())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"All employees: "</div> + allEmployees);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Advanced grouping with downstream collectors</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">Double</div>&gt; avgSalaryByDept = employees.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.groupingBy(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Employee</div>::getDepartment,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.averagingDouble(<div class="text-blue-400">Employee</div>::getSalary)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Average salary by department: "</div> + avgSalaryByDept);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Multi-level grouping</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Employee</div>&gt;&gt;&gt; groupedData = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;employees.stream().collect(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.groupingBy(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Employee</div>::getDepartment,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.groupingBy(emp -> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emp.getAge() < <div class="text-purple-400">30</div> ? <div class="text-green-300">"Young"</div> : <div class="text-green-300">"Senior"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Partitioning</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">Boolean</div>, <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Employee</div>&gt;&gt; partitioned = employees.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.partitioningBy(emp -> emp.getSalary() > <div class="text-purple-400">70000</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"High earners: "</div> + partitioned.get(<div class="text-blue-400">true</div>).size());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. Complex reduction with three arguments</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> concatenated = employees.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.reduce(<div class="text-green-300">""</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(result, emp) -> result + emp.getName() + <div class="text-green-300">","</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(s1, s2) -> s1 + s2);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Concatenated names: "</div> + concatenated);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 6. Custom collector example</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collector</div>&lt;<div class="text-blue-400">Employee</div>, ?, <div class="text-blue-400">String</div>&gt; nameCollector = <div class="text-blue-400">Collector</div>.of(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">StringBuilder</div>::new,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(sb, emp) -> sb.append(emp.getName()).append(<div class="text-green-300">"|"</div>),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(sb1, sb2) -> sb1.append(sb2),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">StringBuilder</div>::toString<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> customResult = employees.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(emp -> emp.getSalary() > <div class="text-purple-400">60000</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(nameCollector);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"High earners (custom): "</div> + customResult);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 7. Parallel stream performance comparison</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; largeList = <div class="text-blue-400">IntStream</div>.range(<div class="text-purple-400">1</div>, <div class="text-purple-400">1000000</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.boxed()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Sequential processing</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> start = <div class="text-blue-400">System</div>.currentTimeMillis();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> sequentialSum = largeList.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.mapToLong(i -> i * i)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.sum();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> sequentialTime = <div class="text-blue-400">System</div>.currentTimeMillis() - start;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Parallel processing</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;start = <div class="text-blue-400">System</div>.currentTimeMillis();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> parallelSum = largeList.parallelStream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.mapToLong(i -> i * i)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.sum();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> parallelTime = <div class="text-blue-400">System</div>.currentTimeMillis() - start;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Sequential time: "</div> + sequentialTime + <div class="text-green-300">"ms"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Parallel time: "</div> + parallelTime + <div class="text-green-300">"ms"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 8. Complex stream pipeline with multiple operations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">IntSummaryStatistics</div>&gt; salaryStats = employees.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.groupingBy(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Employee</div>::getDepartment,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Collectors</div>.summarizingInt(emp -> (<div class="text-blue-400">int</div>) emp.getSalary())<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;salaryStats.forEach((dept, stats) -> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(dept + <div class="text-green-300">": "</div> + stats);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;});<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 9. FlatMap with Optional handling</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt;&gt; optionalNames = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>.of(<div class="text-green-300">"Alice"</div>), <div class="text-blue-400">Optional</div>.empty(), <div class="text-blue-400">Optional</div>.of(<div class="text-green-300">"Bob"</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; presentNames = optionalNames.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.flatMap(<div class="text-blue-400">Optional</div>::stream)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Present names: "</div> + presentNames);<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
exercise: `
1. Use flatMap to flatten a list of lists into a single stream.
2. Create a custom collector that collects strings into a comma-separated string.
3. Use parallelStream() to process a large list of numbers.
4. Implement a complex grouping operation with multiple downstream collectors.
5. Use reduce() with three arguments to combine stream elements.
`
  }
};