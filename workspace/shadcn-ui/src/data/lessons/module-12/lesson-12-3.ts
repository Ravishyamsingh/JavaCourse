import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_3: LessonContent = {
  title: 'JVM Internals and Memory Management',
  type: 'lesson',
  duration: '55 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Deep dive into JVM architecture, memory management, and garbage collection. Understand how the JVM executes Java code, manages memory, and optimizes performance through various GC algorithms.',
    objectives: [
      'Understand JVM architecture and execution model',
      'Master memory areas: heap, stack, method area, and PC register',
      'Learn garbage collection algorithms and their trade-offs',
      'Analyze memory leaks and performance bottlenecks',
      'Configure JVM parameters for optimal performance',
      'Use profiling tools for memory analysis'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          JVM Internals and Memory Management
        </h1>
        <p class="mt-3 text-red-100 text-lg">Understanding the Java Virtual Machine's inner workings and memory optimization</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            JVM Architecture Overview
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The JVM is a runtime environment that executes Java bytecode. It provides platform independence, 
            automatic memory management, and security through its layered architecture.
          </p>
          
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">🎯 JVM Components</h4>
            <p class="text-red-700">Class Loader, Runtime Data Areas, Execution Engine, and Native Method Interface work together to execute Java programs.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Core Components</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Class Loader</h5>
                  <p class="text-gray-600 text-sm">Loads, links, and initializes classes</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Execution Engine</h5>
                  <p class="text-gray-600 text-sm">Interprets and compiles bytecode</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Runtime Data Areas</h5>
                  <p class="text-gray-600 text-sm">Memory regions for program execution</p>
                </div>
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Execution Process</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Loading:</strong> Class files loaded into memory</li>
                <li>• <strong>Verification:</strong> Bytecode security checks</li>
                <li>• <strong>Preparation:</strong> Memory allocation for static variables</li>
                <li>• <strong>Resolution:</strong> Symbolic references resolved</li>
                <li>• <strong>Initialization:</strong> Static initializers executed</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Memory Areas and Structure
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The JVM divides memory into distinct areas, each serving specific purposes in program execution.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Heap Memory</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">Young Generation</h5>
                    <p class="text-gray-600 text-sm">Eden space + Survivor spaces (S0, S1)</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">Old Generation</h5>
                    <p class="text-gray-600 text-sm">Tenured space for long-lived objects</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">Metaspace</h5>
                    <p class="text-gray-600 text-sm">Class metadata (Java 8+)</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Non-Heap Memory</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">Stack Memory</h5>
                    <p class="text-gray-600 text-sm">Method call frames and local variables</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-indigo-400">
                    <h5 class="font-bold text-indigo-700">PC Register</h5>
                    <p class="text-gray-600 text-sm">Current executing instruction pointer</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-pink-400">
                    <h5 class="font-bold text-pink-700">Native Method Stack</h5>
                    <p class="text-gray-600 text-sm">Native method call support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Garbage Collection Algorithms
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Different GC algorithms optimize for various performance characteristics: throughput, latency, or memory footprint.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">Serial GC</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Single-threaded collection</li>
                  <li>• Best for small applications</li>
                  <li>• Low memory overhead</li>
                  <li>• Stop-the-world pauses</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Parallel GC</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Multi-threaded collection</li>
                  <li>• High throughput focus</li>
                  <li>• Default for server applications</li>
                  <li>• Longer pause times</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">G1 GC</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Low-latency collector</li>
                  <li>• Predictable pause times</li>
                  <li>• Large heap optimization</li>
                  <li>• Concurrent collection</li>
                </ul>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">CMS GC (Deprecated)</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Concurrent mark and sweep</li>
                  <li>• Low pause times</li>
                  <li>• Memory fragmentation issues</li>
                  <li>• Replaced by G1 and ZGC</li>
                </ul>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">ZGC & Shenandoah</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Ultra-low latency (&lt;10ms)</li>
                  <li>• Concurrent collection</li>
                  <li>• Scalable to large heaps</li>
                  <li>• Experimental/Production ready</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Memory Optimization and Tuning
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper JVM tuning can significantly improve application performance and reduce memory-related issues.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Common JVM Parameters</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded border-l-4 border-blue-400">
                    <strong>-Xms/-Xmx:</strong> Initial/Maximum heap size
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-green-400">
                    <strong>-XX:NewRatio:</strong> Old/Young generation ratio
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-purple-400">
                    <strong>-XX:+UseG1GC:</strong> Enable G1 garbage collector
                  </div>
                  <div class="bg-white p-2 rounded border-l-4 border-red-400">
                    <strong>-XX:MaxGCPauseMillis:</strong> Target pause time
                  </div>
                </div>
              </div>
              
              <div class="bg-lime-50 p-4 rounded-lg">
                <h4 class="font-bold text-lime-800 mb-2">Memory Leak Detection</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Heap dump analysis</li>
                  <li>• Memory profiling tools</li>
                  <li>• GC log analysis</li>
                  <li>• Object reference tracking</li>
                  <li>• Memory usage monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// JVM Memory Analysis and Optimization Demo</div>
        
        <div class="text-blue-400">import</div> java.lang.management.*;<br/>
        <div class="text-blue-400">import</div> java.util.*;<br/>
        <div class="text-blue-400">import</div> java.util.concurrent.*;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">JVMMemoryAnalyzer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">MemoryMXBean</div> memoryBean = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ManagementFactory</div>.getMemoryMXBean();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static final</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">GarbageCollectorMXBean</div>&gt; gcBeans = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ManagementFactory</div>.getGarbageCollectorMXBeans();<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Display JVM memory information</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">displayMemoryInfo</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Demonstrate memory allocation patterns</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">demonstrateMemoryAllocation</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Monitor GC activity</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">monitorGarbageCollection</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Analyze memory leaks</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-yellow-400">analyzeMemoryLeaks</div>();<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">displayMemoryInfo</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">MemoryUsage</div> heapUsage = memoryBean.getHeapMemoryUsage();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">MemoryUsage</div> nonHeapUsage = memoryBean.getNonHeapMemoryUsage();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== JVM Memory Information ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"Heap Memory: Used=%d MB, Max=%d MB%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heapUsage.getUsed() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heapUsage.getMax() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"Non-Heap Memory: Used=%d MB, Max=%d MB%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nonHeapUsage.getUsed() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nonHeapUsage.getMax() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Display memory pool information</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">MemoryPoolMXBean</div> pool : <div class="text-blue-400">ManagementFactory</div>.getMemoryPoolMXBeans()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">MemoryUsage</div> usage = pool.getUsage();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"Pool %s: Used=%d MB, Max=%d MB%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pool.getName(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usage.getUsed() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usage.getMax() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">demonstrateMemoryAllocation</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\n=== Memory Allocation Demo ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">List</div>&lt;<div class="text-blue-400">byte</div>[]&gt; memoryHog = <div class="text-blue-400">new</div> <div class="text-yellow-400">ArrayList</div>&lt;&gt;();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">int</div> i = <div class="text-purple-400">0</div>; i &lt; <div class="text-purple-400">100</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Allocate 1MB chunks</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;memoryHog.add(<div class="text-blue-400">new</div> <div class="text-blue-400">byte</div>[<div class="text-purple-400">1024</div> * <div class="text-purple-400">1024</div>]);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (i % <div class="text-purple-400">10</div> == <div class="text-purple-400">0</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">MemoryUsage</div> usage = memoryBean.getHeapMemoryUsage();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"Allocated %d MB, Heap used: %d MB%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i + <div class="text-purple-400">1</div>, usage.getUsed() / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Force garbage collection</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;memoryHog.clear();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.gc();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Memory cleared and GC requested"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">monitorGarbageCollection</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\n=== Garbage Collection Statistics ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">GarbageCollectorMXBean</div> gcBean : gcBeans) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"GC %s: Collections=%d, Time=%d ms%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gcBean.getName(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gcBean.getCollectionCount(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gcBean.getCollectionTime());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">private static void</div> <div class="text-yellow-400">analyzeMemoryLeaks</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"\n=== Memory Leak Analysis ==="</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Simulate potential memory leak</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">String</div>, <div class="text-blue-400">Object</div>&gt; cache = <div class="text-blue-400">new</div> <div class="text-yellow-400">HashMap</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> initialMemory = memoryBean.getHeapMemoryUsage().getUsed();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-4">int</div> i = <div class="text-purple-400">0</div>; i &lt; <div class="text-purple-400">10000</div>; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cache.put(<div class="text-green-300">"key"</div> + i, <div class="text-blue-400">new</div> <div class="text-blue-400">byte</div>[<div class="text-purple-400">1024</div>]);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">long</div> afterAllocation = memoryBean.getHeapMemoryUsage().getUsed();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.printf(<div class="text-green-300">"Memory increase: %d MB%n"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(afterAllocation - initialMemory) / <div class="text-purple-400">1024</div> / <div class="text-purple-400">1024</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Clear cache to prevent actual leak</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;cache.clear();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === JVM Tuning Examples ===</div>
        <div class="text-gray-400">// Basic heap sizing</div><br/>
        <div class="text-green-300">java -Xms2g -Xmx4g MyApplication</div><br/><br/>

        <div class="text-gray-400">// G1 GC with pause time target</div><br/>
        <div class="text-green-300">java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 MyApplication</div><br/><br/>

        <div class="text-gray-400">// Enable GC logging</div><br/>
        <div class="text-green-300">java -Xloggc:gc.log -XX:+PrintGCDetails -XX:+PrintGCTimeStamps MyApplication</div><br/><br/>

        <div class="text-gray-400">// Heap dump on OutOfMemoryError</div><br/>
        <div class="text-green-300">java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/heapdump.hprof MyApplication</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: JVM Memory Profiler
        </h2>
        <p class="text-red-100">Build a comprehensive JVM memory profiler with leak detection and performance analysis</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">1. Memory Monitor</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Real-time heap and non-heap memory tracking</li>
                <li>• Memory pool usage analysis</li>
                <li>• Memory allocation rate calculation</li>
                <li>• Memory usage trend visualization</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">2. Garbage Collection Analyzer</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• GC event monitoring and logging</li>
                <li>• Pause time analysis and reporting</li>
                <li>• Throughput calculation</li>
                <li>• GC algorithm performance comparison</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">3. Memory Leak Detection</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Object reference tracking</li>
                <li>• Memory growth pattern analysis</li>
                <li>• Heap dump generation and analysis</li>
                <li>• Automatic leak detection alerts</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">4. Performance Profiler</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• JIT compilation monitoring</li>
                <li>• Method execution time tracking</li>
                <li>• CPU usage correlation</li>
                <li>• Performance bottleneck identification</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Real-time Monitoring</p>
                  <p class="text-gray-600 text-sm">Live memory usage and GC activity tracking</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Leak Detection</p>
                  <p class="text-gray-600 text-sm">Automatic identification of memory leaks</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">GC Analysis</p>
                  <p class="text-gray-600 text-sm">Comprehensive garbage collection performance analysis</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Performance Insights</p>
                  <p class="text-gray-600 text-sm">Actionable performance optimization recommendations</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Reporting System</p>
                  <p class="text-gray-600 text-sm">Detailed reports with charts and recommendations</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">JVM Integration</p>
                  <p class="text-gray-600 text-sm">Seamless integration with JVM management APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🔧 Technical Implementation</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-1">Memory Monitoring</h4>
                <p class="text-gray-700 text-sm">Use MemoryMXBean and MemoryPoolMXBean for real-time memory tracking and threshold notifications.</p>
              </div>
              
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">GC Monitoring</h4>
                <p class="text-gray-700 text-sm">Implement GarbageCollectorMXBean listeners for GC event tracking and performance analysis.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">Heap Analysis</h4>
                <p class="text-gray-700 text-sm">Generate and parse heap dumps using HotSpotDiagnosticMXBean for leak detection.</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Performance Correlation</h4>
                <p class="text-gray-700 text-sm">Correlate memory usage with application performance metrics for comprehensive analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};