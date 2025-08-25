import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_4: LessonContent = {
  title: 'Performance Tuning',
  type: 'lesson',
  duration: '60 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Master Java performance optimization techniques including profiling, benchmarking, and systematic tuning approaches. Learn to identify bottlenecks, optimize algorithms, and improve application throughput and latency.',
    objectives: [
      'Master performance profiling and benchmarking techniques',
      'Identify and resolve common performance bottlenecks',
      'Optimize JVM settings for specific workloads',
      'Implement efficient algorithms and data structures',
      'Apply concurrency optimization patterns',
      'Build comprehensive performance monitoring systems'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Java Performance Tuning
        </h1>
        <p class="mt-3 text-green-100 text-lg">Systematic approaches to optimize Java application performance</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Performance Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Performance tuning is a systematic process of identifying bottlenecks, measuring improvements, 
            and optimizing code, JVM settings, and system resources for better throughput and latency.
          </p>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 Performance Metrics</h4>
            <p class="text-green-700">Key metrics include throughput (operations/second), latency (response time), CPU utilization, memory usage, and GC overhead.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Performance Goals</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Throughput</h5>
                  <p class="text-gray-600 text-sm">Maximum operations per unit time</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Latency</h5>
                  <p class="text-gray-600 text-sm">Response time for individual operations</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                  <h5 class="font-bold text-orange-700">Scalability</h5>
                  <p class="text-gray-600 text-sm">Performance under increasing load</p>
                </div>
              </div>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Optimization Process</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Measure:</strong> Establish baseline performance</li>
                <li>• <strong>Profile:</strong> Identify bottlenecks and hotspots</li>
                <li>• <strong>Optimize:</strong> Apply targeted improvements</li>
                <li>• <strong>Validate:</strong> Measure improvement impact</li>
                <li>• <strong>Iterate:</strong> Repeat until goals are met</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Profiling and Benchmarking
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Effective profiling identifies performance bottlenecks while benchmarking provides quantitative measurements of improvements.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Profiling Tools</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">JProfiler</h5>
                    <p class="text-gray-600 text-sm">Commercial profiler with GUI</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">VisualVM</h5>
                    <p class="text-gray-600 text-sm">Free profiler bundled with JDK</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">async-profiler</h5>
                    <p class="text-gray-600 text-sm">Low-overhead sampling profiler</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Benchmarking</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">JMH</h5>
                    <p class="text-gray-600 text-sm">Java Microbenchmark Harness</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-indigo-400">
                    <h5 class="font-bold text-indigo-700">Load Testing</h5>
                    <p class="text-gray-600 text-sm">JMeter, Gatling for system tests</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-pink-400">
                    <h5 class="font-bold text-pink-700">APM Tools</h5>
                    <p class="text-gray-600 text-sm">Application Performance Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Common Performance Bottlenecks
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding common bottlenecks helps focus optimization efforts on areas with the highest impact.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">CPU Bottlenecks</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Inefficient algorithms</li>
                  <li>• Excessive object creation</li>
                  <li>• String concatenation</li>
                  <li>• Reflection overuse</li>
                  <li>• Synchronization overhead</li>
                </ul>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Memory Issues</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Memory leaks</li>
                  <li>• Excessive GC pressure</li>
                  <li>• Large object retention</li>
                  <li>• Inefficient collections</li>
                  <li>• Memory fragmentation</li>
                </ul>
              </div>
              
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">I/O Bottlenecks</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Blocking I/O operations</li>
                  <li>• Database query inefficiency</li>
                  <li>• Network latency</li>
                  <li>• File system access</li>
                  <li>• Serialization overhead</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Optimization Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Systematic optimization techniques address different aspects of performance from algorithms to JVM configuration.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Code Optimization</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>Algorithm Choice:</strong> Use efficient algorithms and data structures
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>Object Pooling:</strong> Reuse expensive objects
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>Lazy Loading:</strong> Defer expensive operations
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-yellow-400">
                    <strong>Caching:</strong> Store frequently accessed data
                  </div>
                </div>
              </div>
              
              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-2">JVM Tuning</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-orange-400">
                    <strong>Heap Sizing:</strong> Optimize memory allocation
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-teal-400">
                    <strong>GC Selection:</strong> Choose appropriate collector
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-indigo-400">
                    <strong>JIT Optimization:</strong> Warm-up and compilation
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>Thread Tuning:</strong> Optimize concurrency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Performance Optimization Examples</div>
        
        <div class="text-blue-400">import</div> java.util.*;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.*;<br/>
        <div class="text-blue-400">import</div> java.lang.management.*;<br/>
        <div class="text-blue-400">import</div> org.openjdk.jmh.annotations.*;<br/><br/>

        <div class="text-gray-400 mb-4">// === String Optimization Example ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">StringOptimization</div> {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Inefficient string concatenation</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">inefficientConcat</div>(<div class="text-blue-400">String</div>[] words) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> result = <div class="text-green-300">""</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">String</div> word : words) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += word + <div class="text-green-300">" "</div>; <div class="text-gray-400">// Creates new String objects</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result.trim();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Optimized string concatenation</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">optimizedConcat</div>(<div class="text-blue-400">String</div>[] words) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">StringBuilder</div> sb = <div class="text-blue-400">new</div> <div class="text-yellow-400">StringBuilder</div>(words.length * <div class="text-purple-400">10</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i &lt; words.length; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (i &gt; <div class="text-purple-400">0</div>) sb.append(<div class="text-green-300">' '</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.append(words[i]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> sb.toString();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Collection Optimization ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">CollectionOptimization</div> {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Inefficient collection usage</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; <div class="text-yellow-400">inefficientSearch</div>(<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; numbers, <div class="text-blue-400">int</div> target) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; result = <div class="text-blue-400">new</div> <div class="text-yellow-400">ArrayList</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Integer</div> num : numbers) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (numbers.contains(target - num)) { <div class="text-gray-400">// O(n) lookup</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.add(num);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-gray-400">// Optimized with HashSet for O(1) lookup</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; <div class="text-yellow-400">optimizedSearch</div>(<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; numbers, <div class="text-blue-400">int</div> target) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Set</div>&lt;<div class="text-blue-400">Integer</div>&gt; numSet = <div class="text-blue-400">new</div> <div class="text-yellow-400">HashSet</div>&lt;&gt;(numbers);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Integer</div>&gt; result = <div class="text-blue-400">new</div> <div class="text-yellow-400">ArrayList</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Integer</div> num : numbers) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (numSet.contains(target - num)) { <div class="text-gray-400">// O(1) lookup</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.add(num);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Object Pool Pattern ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ObjectPool</div>&lt;<div class="text-blue-400">T</div>&gt; {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">Queue</div>&lt;<div class="text-blue-400">T</div>&gt; pool = <div class="text-blue-400">new</div> <div class="text-yellow-400">ConcurrentLinkedQueue</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">Supplier</div>&lt;<div class="text-blue-400">T</div>&gt; factory;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">Consumer</div>&lt;<div class="text-blue-400">T</div>&gt; resetFunction;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-4">public</div> <div class="text-yellow-400">ObjectPool</div>(<div class="text-blue-400">Supplier</div>&lt;<div class="text-blue-400">T</div>&gt; factory, <div class="text-blue-400">Consumer</div>&lt;<div class="text-blue-400">T</div>&gt; resetFunction) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.factory = factory;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.resetFunction = resetFunction;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">T</div> <div class="text-yellow-400">acquire</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">T</div> object = pool.poll();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> object != <div class="text-blue-400">null</div> ? object : factory.get();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">release</div>(<div class="text-blue-400">T</div> object) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (object != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resetFunction.accept(object);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pool.offer(object);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === JMH Benchmark Example ===</div>
        <div class="text-blue-400">@BenchmarkMode</div>(<div class="text-blue-400">Mode</div>.AverageTime)<br/>
        <div class="text-blue-400">@OutputTimeUnit</div>(<div class="text-blue-400">TimeUnit</div>.NANOSECONDS)<br/>
        <div class="text-blue-400">@State</div>(<div class="text-blue-400">Scope</div>.Benchmark)<br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">StringConcatBenchmark</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">@Param</div>({<div class="text-green-300">"10"</div>, <div class="text-green-300">"100"</div>, <div class="text-green-300">"1000"</div>})<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private int</div> size;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div>[] words;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Setup</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setup</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;words = <div class="text-blue-400">new</div> <div class="text-blue-400">String</div>[size];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i &lt; size; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;words[i] = <div class="text-green-300">"word"</div> + i;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Benchmark</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">stringConcatenation</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> result = <div class="text-green-300">""</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">String</div> word : words) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += word + <div class="text-green-300">" "</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Benchmark</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">stringBuilder</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">StringBuilder</div> sb = <div class="text-blue-400">new</div> <div class="text-yellow-400">StringBuilder</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">String</div> word : words) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.append(word).append(<div class="text-green-300">" "</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> sb.toString();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Performance Monitoring ===</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">PerformanceMonitor</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">ThreadMXBean</div> threadBean = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ManagementFactory</div>.getThreadMXBean();<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static</div> &lt;<div class="text-blue-400">T</div>&gt; <div class="text-blue-400">T</div> <div class="text-yellow-400">measurePerformance</div>(<div class="text-blue-400">Supplier</div>&lt;<div class="text-blue-400">T</div>&gt; operation, <div class="text-blue-400">String</div> operationName) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> startTime = <div class="text-blue-400">System</div>.nanoTime();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> startCpuTime = threadBean.getCurrentThreadCpuTime();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> startMemory = <div class="text-yellow-400">getUsedMemory</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">T</div> result = operation.get();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> endTime = <div class="text-blue-400">System</div>.nanoTime();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> endCpuTime = threadBean.getCurrentThreadCpuTime();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> endMemory = <div class="text-yellow-400">getUsedMemory</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"%s: Wall time: %.2f ms, CPU time: %.2f ms, Memory: %d KB%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;operationName,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(endTime - startTime) / <div class="text-purple-400">1_000_000.0</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(endCpuTime - startCpuTime) / <div class="text-purple-400">1_000_000.0</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(endMemory - startMemory) / <div class="text-purple-400">1024</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static long</div> <div class="text-yellow-400">getUsedMemory</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Runtime</div> runtime = <div class="text-blue-400">Runtime</div>.getRuntime();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> runtime.totalMemory() - runtime.freeMemory();<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Performance Optimization Suite
        </h2>
        <p class="text-green-100">Build a comprehensive performance optimization suite with profiling, benchmarking, and automated tuning</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">1. Performance Profiler</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• CPU usage and method execution time tracking</li>
                <li>• Memory allocation and GC pressure monitoring</li>
                <li>• Thread contention and synchronization analysis</li>
                <li>• I/O operation performance measurement</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">2. Benchmark Framework</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• JMH integration for microbenchmarks</li>
                <li>• Load testing capabilities for system benchmarks</li>
                <li>• Statistical analysis and confidence intervals</li>
                <li>• Performance regression detection</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Optimization Engine</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Automatic bottleneck identification</li>
                <li>• JVM parameter tuning recommendations</li>
                <li>• Code optimization suggestions</li>
                <li>• Performance improvement validation</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Reporting Dashboard</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Real-time performance metrics visualization</li>
                <li>• Historical performance trend analysis</li>
                <li>• Optimization impact assessment</li>
                <li>• Automated performance alerts</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Comprehensive Profiling</p>
                  <p class="text-gray-600 text-sm">Complete performance metrics collection and analysis</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Accurate Benchmarking</p>
                  <p class="text-gray-600 text-sm">Reliable performance measurements with statistical validation</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Bottleneck Detection</p>
                  <p class="text-gray-600 text-sm">Automatic identification of performance issues</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Optimization Recommendations</p>
                  <p class="text-gray-600 text-sm">Actionable suggestions for performance improvements</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Performance Validation</p>
                  <p class="text-gray-600 text-sm">Measurable improvement verification system</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Visual Dashboard</p>
                  <p class="text-gray-600 text-sm">Intuitive performance monitoring interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Focus Areas</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-1">Algorithm Optimization</h4>
                <p class="text-gray-700 text-sm">Implement and benchmark different algorithms for common operations like sorting, searching, and data processing.</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Memory Management</h4>
                <p class="text-gray-700 text-sm">Optimize object creation, implement object pooling, and minimize GC pressure through efficient memory usage.</p>
              </div>
              
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-bold text-red-800 mb-1">Concurrency Tuning</h4>
                <p class="text-gray-700 text-sm">Optimize thread pool sizes, reduce lock contention, and implement lock-free data structures where appropriate.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">I/O Optimization</h4>
                <p class="text-gray-700 text-sm">Implement async I/O, optimize database queries, and reduce network latency through caching and batching.</p>
              </div>
              
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">JVM Tuning</h4>
                <p class="text-gray-700 text-sm">Experiment with different GC algorithms, heap sizes, and JIT compiler settings for optimal performance.</p>
              </div>
              
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-1">Monitoring Integration</h4>
                <p class="text-gray-700 text-sm">Integrate with APM tools, implement custom metrics, and create alerting systems for performance degradation.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🔧 Technical Specifications</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Profiling Components</h4>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• CPU profiler with method-level granularity</li>
                  <li>• Memory profiler with allocation tracking</li>
                  <li>• Thread profiler with contention analysis</li>
                  <li>• I/O profiler with latency measurement</li>
                </ul>
              </div>
              
              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-2">Benchmark Suite</h4>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• Microbenchmarks for individual methods</li>
                  <li>• System benchmarks for end-to-end performance</li>
                  <li>• Load tests with realistic traffic patterns</li>
                  <li>• Regression tests for performance validation</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Optimization Engine</h4>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• Pattern recognition for common bottlenecks</li>
                  <li>• Machine learning for parameter tuning</li>
                  <li>• A/B testing framework for optimizations</li>
                  <li>• Automated rollback for failed optimizations</li>
                </ul>
              </div>
              
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Reporting System</h4>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• Real-time dashboards with key metrics</li>
                  <li>• Historical trend analysis and forecasting</li>
                  <li>• Automated report generation and distribution</li>
                  <li>• Integration with monitoring and alerting systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};