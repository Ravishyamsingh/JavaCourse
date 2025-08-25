import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_4: LessonContent = {
  title: 'Stream API Basics',
  type: 'lesson',
  duration: '25 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Learn the fundamentals of the Stream API in Java, which provides a functional approach to processing sequences of elements. This lesson covers stream creation, basic operations, and common use cases for data processing.',
    objectives: [
      'Understand what streams are and their benefits',
      'Learn to create streams from different sources',
      'Practice basic stream operations like filter, map, and forEach',
      'Explore intermediate and terminal operations',
      'Apply streams to common data processing scenarios',
      'Implement best practices for stream usage'
    ],
    theory: `
      <div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Stream API Basics
        </h1>
        <p class="mt-3 text-cyan-100 text-lg">Functional approach to processing sequences of elements</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Streams?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            A Stream in Java is a sequence of elements that supports various methods to produce desired results. 
            Streams do not store elements; instead, they are computed on demand. Streams support functional-style 
            operations that make code more readable and expressive.
          </p>
          <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mb-4">
            <h4 class="font-bold text-cyan-800 mb-2">💡 Key Concept</h4>
            <p class="text-cyan-700">Streams are not data structures; they are functional tools for processing data from collections, arrays, or I/O channels.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Stream Characteristics</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Not a data structure</li>
                <li>• Designed for functional programming</li>
                <li>• Lazy evaluation</li>
                <li>• Supports parallel processing</li>
                <li>• Consumable (single use)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Stream Pipeline</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Source (collection, array, etc.)</li>
                <li>• Zero or more intermediate operations</li>
                <li>• One terminal operation</li>
                <li>• Operations are chained</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                list.stream()<br/>
                &nbsp;&nbsp;.filter(p -> p.getAge() > 18)<br/>
                &nbsp;&nbsp;.map(Person::getName)<br/>
                &nbsp;&nbsp;.collect(Collectors.toList());
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Creating Streams
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Streams can be created from various sources:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">From Collections</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Collection.stream()</li>
                  <li>• Collection.parallelStream()</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  List&lt;String&gt; list = Arrays.asList("a", "b", "c");<br/>
                  Stream&lt;String&gt; stream = list.stream();<br/>
                  Stream&lt;String&gt; parallelStream = list.parallelStream();
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">From Arrays and Values</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Arrays.stream(array)</li>
                  <li>• Stream.of(values)</li>
                  <li>• Stream.empty()</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  String[] array = {"a", "b", "c"};<br/>
                  Stream&lt;String&gt; stream1 = Arrays.stream(array);<br/>
                  Stream&lt;String&gt; stream2 = Stream.of("a", "b", "c");<br/>
                  Stream&lt;String&gt; emptyStream = Stream.empty();
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">From Generators and Ranges</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Stream.generate(Supplier)</li>
                  <li>• Stream.iterate(seed, function)</li>
                  <li>• IntStream.range(start, end)</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Stream&lt;Double&gt; randoms = Stream.generate(Math::random);<br/>
                  Stream&lt;Integer&gt; numbers = Stream.iterate(0, n -> n + 2);<br/>
                  IntStream range = IntStream.range(1, 10);
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">From Files and I/O</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Files.lines(path)</li>
                  <li>• BufferedReader.lines()</li>
                  <li>• Pattern.splitAsStream()</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Stream&lt;String&gt; lines = Files.lines(Paths.get("file.txt"));<br/>
                  Stream&lt;String&gt; words = Pattern.compile("\\s+").splitAsStream(text);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Stream Operations
          </h2>
          <div class="space-y-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">Intermediate Operations</h4>
              <p class="text-gray-700 mb-3">Return a new stream and are lazy (not executed until a terminal operation is called):</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>filter(Predicate)</strong> - Filters elements</li>
                    <li><strong>map(Function)</strong> - Transforms elements</li>
                    <li><strong>flatMap(Function)</strong> - Flattens nested streams</li>
                    <li><strong>distinct()</strong> - Removes duplicates</li>
                  </ul>
                </div>
                <div>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>sorted()</strong> - Sorts elements</li>
                    <li><strong>peek(Consumer)</strong> - Performs action without consuming</li>
                    <li><strong>limit(long)</strong> - Limits stream size</li>
                    <li><strong>skip(long)</strong> - Skips elements</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">Terminal Operations</h4>
              <p class="text-gray-700 mb-3">Trigger the execution of the stream pipeline and produce a result:</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>forEach(Consumer)</strong> - Performs action on each element</li>
                    <li><strong>collect(Collector)</strong> - Collects to collection</li>
                    <li><strong>reduce(BinaryOperator)</strong> - Reduces to single value</li>
                    <li><strong>count()</strong> - Counts elements</li>
                  </ul>
                </div>
                <div>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>findFirst()</strong> - Finds first element</li>
                    <li><strong>findAny()</strong> - Finds any element</li>
                    <li><strong>anyMatch(Predicate)</strong> - Tests if any match</li>
                    <li><strong>allMatch(Predicate)</strong> - Tests if all match</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Common Stream Patterns
          </h2>
          <div class="space-y-4">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Filtering and Mapping</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                List&lt;String&gt; names = people.stream()<br/>
                &nbsp;&nbsp;.filter(person -> person.getAge() > 18)<br/>
                &nbsp;&nbsp;.map(Person::getName)<br/>
                &nbsp;&nbsp;.collect(Collectors.toList());
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Aggregation</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int sum = numbers.stream()<br/>
                &nbsp;&nbsp;.filter(n -> n > 0)<br/>
                &nbsp;&nbsp;.mapToInt(Integer::intValue)<br/>
                &nbsp;&nbsp;.sum();
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Grouping</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Map&lt;String, List&lt;Person&gt;&gt; byCity = people.stream()<br/>
                &nbsp;&nbsp;.collect(Collectors.groupingBy(Person::getCity));
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Stream Best Practices
          </h2>
          <div class="space-y-4">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Performance Considerations</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use parallel streams for CPU-intensive operations on large datasets</li>
                <li>• Avoid side effects in stream operations</li>
                <li>• Prefer specialized streams (IntStream, LongStream, DoubleStream) for primitives</li>
                <li>• Use lazy evaluation to your advantage</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Common Pitfalls</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't reuse streams (they are consumable)</li>
                <li>• Avoid modifying the source during stream processing</li>
                <li>• Be careful with infinite streams</li>
                <li>• Don't use parallel streams for small datasets</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// StreamBasicsDemo.java</div>
        <div class="text-blue-400">import</div> java.util.*;<br/>
        <div class="text-blue-400">import</div> java.util.stream.*;<br/>
        <div class="text-blue-400">import</div> java.util.function.*;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">StreamBasicsDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Sample data</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; names = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"Alice"</div>, <div class="text-green-300">"Bob"</div>, <div class="text-green-300">"Charlie"</div>, <div class="text-green-300">"David"</div>, <div class="text-green-300">"Eve"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; numbers = <div class="text-blue-400">Arrays</div>.asList(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-purple-400">1</div>, <div class="text-purple-400">2</div>, <div class="text-purple-400">3</div>, <div class="text-purple-400">4</div>, <div class="text-purple-400">5</div>, <div class="text-purple-400">6</div>, <div class="text-purple-400">7</div>, <div class="text-purple-400">8</div>, <div class="text-purple-400">9</div>, <div class="text-purple-400">10</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 1. Basic filtering and collecting</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; longNames = names.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(name -> name.length() > <div class="text-purple-400">4</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Long names: "</div> + longNames);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 2. Mapping and transformation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">String</div>&gt; upperCaseNames = names.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">String</div>::toUpperCase)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Uppercase names: "</div> + upperCaseNames);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 3. Numerical operations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">int</div> sum = numbers.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(n -> n % <div class="text-purple-400">2</div> == <div class="text-purple-400">0</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.mapToInt(<div class="text-blue-400">Integer</div>::intValue)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.sum();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Sum of even numbers: "</div> + sum);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 4. Finding elements</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">String</div>&gt; firstLongName = names.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(name -> name.length() > <div class="text-purple-400">5</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.findFirst();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;firstLongName.ifPresent(name -> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"First long name: "</div> + name));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 5. Checking conditions</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">boolean</div> hasLongNames = names.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.anyMatch(name -> name.length() > <div class="text-purple-400">6</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Has names longer than 6 chars: "</div> + hasLongNames);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 6. Counting and statistics</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> count = numbers.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(n -> n > <div class="text-purple-400">5</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.count();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Numbers greater than 5: "</div> + count);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 7. Reduction operations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Optional</div>&lt;<div class="text-blue-400">Integer</div>&gt; max = numbers.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.reduce(<div class="text-blue-400">Integer</div>::max);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;max.ifPresent(value -> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Maximum number: "</div> + value));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 8. Complex pipeline example</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> result = names.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(name -> name.length() > <div class="text-purple-400">3</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(<div class="text-blue-400">String</div>::toUpperCase)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.sorted()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.joining(<div class="text-green-300">", "</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Processed names: "</div> + result);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 9. Working with primitive streams</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">IntSummaryStatistics</div> stats = numbers.stream()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.mapToInt(<div class="text-blue-400">Integer</div>::intValue)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.summaryStatistics();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Statistics: "</div> + stats);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// 10. Creating infinite streams (with limit)</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; evenNumbers = <div class="text-blue-400">Stream</div>.iterate(<div class="text-purple-400">0</div>, n -> n + <div class="text-purple-400">2</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.limit(<div class="text-purple-400">10</div>)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.collect(<div class="text-blue-400">Collectors</div>.toList());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"First 10 even numbers: "</div> + evenNumbers);<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
        <h2 class="text-2xl font-bold mb-4">🎯 Practice Exercise: Stream Processing Challenge</h2>
        <p class="text-blue-100">Create a comprehensive program that demonstrates various stream operations on a collection of products.</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">1. Product Class</h4>
              <p class="text-gray-700">Create a Product class with properties: id, name, category, price, inStock</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">2. Stream Operations</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Filter products by category and availability</li>
                <li>• Map products to their names and prices</li>
                <li>• Find the most expensive product</li>
                <li>• Calculate average price by category</li>
                <li>• Group products by category</li>
                <li>• Sort products by price</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">3. Advanced Operations</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create a summary report using collectors</li>
                <li>• Implement custom reduction operations</li>
                <li>• Use peek() for debugging stream operations</li>
                <li>• Demonstrate parallel stream processing</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Implementation Hints</h3>
          <div class="space-y-3">
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Stream Creation:</strong> Use Arrays.asList() or List.of() to create your product collection</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Filtering:</strong> Use filter() with lambda expressions or method references</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Mapping:</strong> Use map() to transform objects and mapToDouble() for price calculations</p>
            </div>
            <div class="bg-gray-50 p-3 rounded">
              <p class="text-gray-700"><strong>Collecting:</strong> Use Collectors.groupingBy(), Collectors.averagingDouble(), etc.</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Product class with all required properties</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Proper use of filter, map, and collect operations</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Implementation of finding and matching operations</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Correct use of reduction and aggregation</span>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Grouping and statistical operations</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Proper handling of Optional results</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="w-4 h-4 bg-green-500 rounded-full"></span>
                <span class="text-gray-700">Clean, readable stream pipeline code</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🚀 Bonus Challenges</h3>
          <div class="space-y-3">
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Performance Comparison:</strong> Compare sequential vs parallel stream performance</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Custom Collectors:</strong> Implement a custom collector for specific aggregation</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded">
              <p class="text-gray-700"><strong>Stream Debugging:</strong> Use peek() to debug complex stream pipelines</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
};