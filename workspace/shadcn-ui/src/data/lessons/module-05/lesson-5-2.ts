import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_2: LessonContent = {
  title: 'StringBuilder and StringBuffer',
  type: 'lesson',
  duration: '25 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Learn about StringBuilder and StringBuffer classes for efficient string manipulation. This lesson covers when and how to use these mutable alternatives to the immutable String class, their performance characteristics, and thread safety considerations.',
    objectives: [
      'Understand the differences between String, StringBuilder, and StringBuffer',
      'Learn when to use StringBuilder vs StringBuffer',
      'Master common methods for efficient string building',
      'Practice performance optimization techniques with mutable strings',
      'Explore thread safety considerations with StringBuffer',
      'Implement efficient string concatenation in loops'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          StringBuilder and StringBuffer
        </h1>
        <p class="mt-3 text-green-100 text-lg">Efficient mutable string operations in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Mutable Strings
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            While the String class is immutable and convenient for simple operations, it can be inefficient for extensive string manipulation. 
            StringBuilder and StringBuffer provide mutable alternatives that allow for efficient string building and modification.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">StringBuilder and StringBuffer are mutable, meaning they can be modified without creating new objects, making them much more efficient for repeated string operations.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            StringBuilder vs StringBuffer
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the differences between these two classes is crucial for choosing the right one:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Feature</th>
                    <th class="text-left p-3 font-bold border-b">StringBuilder</th>
                    <th class="text-left p-3 font-bold border-b">StringBuffer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Thread Safety</td>
                    <td class="p-3 text-red-600">Not thread-safe</td>
                    <td class="p-3 text-green-600">Thread-safe (synchronized)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Performance</td>
                    <td class="p-3 text-green-600">Faster</td>
                    <td class="p-3 text-red-600">Slower (due to synchronization)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Use Case</td>
                    <td class="p-3">Single-threaded applications</td>
                    <td class="p-3">Multi-threaded applications</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Memory Usage</td>
                    <td class="p-3 text-green-600">Lower</td>
                    <td class="p-3 text-red-600">Higher (synchronization overhead)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Introduced In</td>
                    <td class="p-3">Java 1.5</td>
                    <td class="p-3">Java 1.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Common StringBuilder/StringBuffer Methods
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-orange-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Method</th>
                  <th class="text-left p-3 font-bold border-b">Description</th>
                  <th class="text-left p-3 font-bold border-b">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-mono">append(value)</td>
                  <td class="p-3">Appends value to the end</td>
                  <td class="p-3 font-mono">sb.append("World")</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">insert(index, value)</td>
                  <td class="p-3">Inserts value at index</td>
                  <td class="p-3 font-mono">sb.insert(5, " Beautiful")</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">delete(start, end)</td>
                  <td class="p-3">Deletes characters from start to end</td>
                  <td class="p-3 font-mono">sb.delete(0, 5)</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">reverse()</td>
                  <td class="p-3">Reverses the sequence</td>
                  <td class="p-3 font-mono">sb.reverse()</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">replace(start, end, str)</td>
                  <td class="p-3">Replaces characters from start to end with str</td>
                  <td class="p-3 font-mono">sb.replace(0, 5, "Hi")</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">capacity()</td>
                  <td class="p-3">Returns current capacity</td>
                  <td class="p-3 font-mono">sb.capacity()</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">ensureCapacity(min)</td>
                  <td class="p-3">Ensures capacity is at least min</td>
                  <td class="p-3 font-mono">sb.ensureCapacity(100)</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">toString()</td>
                  <td class="p-3">Converts to String</td>
                  <td class="p-3 font-mono">sb.toString()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Performance Comparison
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding when to use each approach can significantly impact application performance:</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">String Concatenation</h4>
                <p class="text-red-700">Inefficient for loops</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                  // Inefficient<br/>
                  String result = "";<br/>
                  for(int i=0; i<1000; i++) {<br/>
                  &nbsp;&nbsp;result += "a";<br/>
                  }
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">StringBuilder</h4>
                <p class="text-blue-700">Efficient for single-threaded</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                  // Efficient<br/>
                  StringBuilder sb = new StringBuilder();<br/>
                  for(int i=0; i<1000; i++) {<br/>
                  &nbsp;&nbsp;sb.append("a");<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">StringBuffer</h4>
                <p class="text-green-700">Thread-safe but slower</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mt-2">
                  // Thread-safe<br/>
                  StringBuffer sb = new StringBuffer();<br/>
                  for(int i=0; i<1000; i++) {<br/>
                  &nbsp;&nbsp;sb.append("a");<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Best Practices
          </h2>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">✅ Do's</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use StringBuilder for single-threaded string building</li>
                  <li>• Use StringBuffer only when thread safety is required</li>
                  <li>• Pre-allocate capacity when known to avoid resizing</li>
                  <li>• Convert to String with toString() when done</li>
                  <li>• Reuse instances when building multiple strings</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">🚫 Don'ts</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Don't use String concatenation in loops</li>
                  <li>• Don't use StringBuffer unnecessarily</li>
                  <li>• Don't ignore capacity planning</li>
                  <li>• Don't forget to convert to String when needed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 When to Use Which?</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="text-center bg-white p-4 rounded-lg shadow">
              <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span class="font-bold text-xl">1</span>
              </div>
              <h4 class="font-bold mb-2">String</h4>
              <p class="text-sm text-gray-600">Simple operations, literals, method returns</p>
            </div>
            <div class="text-center bg-white p-4 rounded-lg shadow">
              <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span class="font-bold text-xl">2</span>
              </div>
              <h4 class="font-bold mb-2">StringBuilder</h4>
              <p class="text-sm text-gray-600">Building strings in single-threaded contexts</p>
            </div>
            <div class="text-center bg-white p-4 rounded-lg shadow">
              <div class="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span class="font-bold text-xl">3</span>
              </div>
              <h4 class="font-bold mb-2">StringBuffer</h4>
              <p class="text-sm text-gray-600">Thread-safe string building in multi-threaded contexts</p>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * StringBuilderStringBufferDemo.java
 * 
 * This comprehensive example demonstrates StringBuilder and StringBuffer in Java:
 * - Differences between String, StringBuilder, and StringBuffer
 * - Common methods for mutable string operations
 * - Performance comparisons between approaches
 * - Thread safety considerations
 * 
 * Run this program to see how mutable string operations work in practice.
 */

public class StringBuilderStringBufferDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate differences between String, StringBuilder, and StringBuffer
        demonstrateDifferences();
        
        // Demonstrate common methods
        demonstrateCommonMethods();
        
        // Demonstrate performance comparison
        demonstratePerformance();
        
        // Demonstrate thread safety
        demonstrateThreadSafety();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         STRINGBUILDER & STRINGBUFFER DEMO                    ║");
        System.out.println("║         Efficient Mutable String Operations                  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateDifferences() {
        System.out.println("🔸 IMMUTABILITY VS MUTABILITY");
        System.out.println("   ──────────────────────────");
        
        // String (immutable)
        String str = "Hello";
        System.out.println("   Original String: " + str);
        str.concat(" World");
        System.out.println("   After concat: " + str + " (unchanged!)");
        
        // StringBuilder (mutable)
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("   Original StringBuilder: " + sb);
        sb.append(" World");
        System.out.println("   After append: " + sb + " (changed!)");
        
        // StringBuffer (mutable, thread-safe)
        StringBuffer sbf = new StringBuffer("Hello");
        System.out.println("   Original StringBuffer: " + sbf);
        sbf.append(" World");
        System.out.println("   After append: " + sbf + " (changed!)");
        
        System.out.println();
    }
    
    private static void demonstrateCommonMethods() {
        System.out.println("🔸 COMMON METHODS DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        StringBuilder sb = new StringBuilder("Java Programming");
        System.out.println("   Original: " + sb);
        
        // append
        sb.append(" Language");
        System.out.println("   After append: " + sb);
        
        // insert
        sb.insert(5, "Awesome ");
        System.out.println("   After insert: " + sb);
        
        // delete
        sb.delete(5, 13);
        System.out.println("   After delete: " + sb);
        
        // reverse
        sb.reverse();
        System.out.println("   After reverse: " + sb);
        
        // reverse back
        sb.reverse();
        System.out.println("   Reversed back: " + sb);
        
        // replace
        sb.replace(0, 4, "Python");
        System.out.println("   After replace: " + sb);
        
        // capacity
        System.out.println("   Current capacity: " + sb.capacity());
        
        // ensureCapacity
        sb.ensureCapacity(100);
        System.out.println("   After ensureCapacity(100): " + sb.capacity());
        
        System.out.println();
    }
    
    private static void demonstratePerformance() {
        System.out.println("🔸 PERFORMANCE COMPARISON");
        System.out.println("   ──────────────────────");
        
        int iterations = 10000;
        
        // Inefficient String concatenation
        long startTime = System.currentTimeMillis();
        String str = "";
        for (int i = 0; i < iterations; i++) {
            str += "a";
        }
        long stringTime = System.currentTimeMillis() - startTime;
        
        // Efficient StringBuilder
        startTime = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < iterations; i++) {
            sb.append("a");
        }
        String result = sb.toString();
        long stringBuilderTime = System.currentTimeMillis() - startTime;
        
        // StringBuffer
        startTime = System.currentTimeMillis();
        StringBuffer sbf = new StringBuffer();
        for (int i = 0; i < iterations; i++) {
            sbf.append("a");
        }
        String result2 = sbf.toString();
        long stringBufferTime = System.currentTimeMillis() - startTime;
        
        System.out.println("   String concatenation time: " + stringTime + " ms");
        System.out.println("   StringBuilder time: " + stringBuilderTime + " ms");
        System.out.println("   StringBuffer time: " + stringBufferTime + " ms");
        System.out.println("   StringBuilder is " + (stringTime/stringBuilderTime) + "x faster than String");
        
        System.out.println();
    }
    
    private static void demonstrateThreadSafety() {
        System.out.println("🔸 THREAD SAFETY DEMONSTRATION");
        System.out.println("   ───────────────────────────");
        
        // Non-thread-safe StringBuilder
        StringBuilder sb = new StringBuilder();
        System.out.println("   StringBuilder in multi-threaded environment:");
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                sb.append("A");
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                sb.append("B");
            }
        });
        
        t1.start();
        t2.start();
        
        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("   Result length: " + sb.length() + " (expected 200)");
        // Note: Length might not be exactly 200 due to race conditions
        
        // Thread-safe StringBuffer
        StringBuffer sbf = new StringBuffer();
        System.out.println("   StringBuffer in multi-threaded environment:");
        
        Thread t3 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                sbf.append("X");
            }
        });
        
        Thread t4 = new Thread(() -> {
            for (int i = 0; i < 100; i++) {
                sbf.append("Y");
            }
        });
        
        t3.start();
        t4.start();
        
        try {
            t3.join();
            t4.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("   Result length: " + sbf.length() + " (always 200)");
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Differences between String, StringBuilder, StringBuffer   ║");
        System.out.println("║  • Common methods for mutable string operations              ║");
        System.out.println("║  • Performance characteristics of each approach              ║");
        System.out.println("║  • Thread safety considerations                              ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use StringBuilder for single-threaded string building     ║");
        System.out.println("║  • Use StringBuffer only when thread safety is required      ║");
        System.out.println("║  • Avoid String concatenation in loops                       ║");
        System.out.println("║  • Pre-allocate capacity when possible for better performance║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         STRINGBUILDER & STRINGBUFFER DEMO                    ║
 * ║         Efficient Mutable String Operations                  ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 IMMUTABILITY VS MUTABILITY
 *    ──────────────────────────
 *    Original String: Hello
 *    After concat: Hello (unchanged!)
 *    Original StringBuilder: Hello
 *    After append: Hello World (changed!)
 *    Original StringBuffer: Hello
 *    After append: Hello World (changed!)
 * 
 * 🔸 COMMON METHODS DEMONSTRATION
 *    ─────────────────────────────
 *    Original: Java Programming
 *    After append: Java Programming Language
 *    After insert: Java Awesome Programming Language
 *    After delete: Java Programming Language
 *    After reverse: egaugnaL gnimmargorP avaJ
 *    Reversed back: Java Programming Language
 *    After replace: Python Programming Language
 *    Current capacity: 35
 *    After ensureCapacity(100): 100
 * 
 * 🔸 PERFORMANCE COMPARISON
 *    ──────────────────────
 *    String concatenation time: 120 ms
 *    StringBuilder time: 2 ms
 *    StringBuffer time: 3 ms
 *    StringBuilder is 60x faster than String
 * 
 * 🔸 THREAD SAFETY DEMONSTRATION
 *    ───────────────────────────
 *    StringBuilder in multi-threaded environment:
 *    Result length: 197 (expected 200)
 *    StringBuffer in multi-threaded environment:
 *    Result length: 200 (always 200)
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 StringBuilder and StringBuffer Practice Exercise**

      Create a comprehensive set of programs to practice mutable string operations and performance optimization.

      **Part 1: Text Builder**
      
      Create a program called \`TextBuilder.java\` that efficiently builds large text content:
      
      Requirements:
      - Generate large text files with customizable content
      - Implement different text generation patterns (repetition, random, structured)
      - Use appropriate mutable string classes based on requirements
      - Measure and report performance metrics
      
      Features to implement:
      - Template-based text generation
      - Batch processing for multiple files
      - Memory usage monitoring
      - Performance comparison reports

      **Part 2: XML/JSON Builder**
      
      Create a program called \`DataFormatBuilder.java\` that builds structured data formats:
      
      Requirements:
      - Generate XML documents with proper formatting
      - Create JSON structures with nested objects
      - Implement indentation and formatting options
      - Handle special characters and escaping
      
      Advanced Features:
      - Schema validation for generated structures
      - Pretty printing with customizable indentation
      - Support for different data types (numbers, booleans, dates)
      - Streaming output for large documents

      **Part 3: Log Message Formatter**
      
      Create a program called \`LogFormatter.java\` that formats log messages efficiently:
      
      Requirements:
      - Format log entries with timestamps and metadata
      - Support different log levels (INFO, WARN, ERROR, DEBUG)
      - Implement thread-safe logging for multi-threaded applications
      - Generate structured log output (JSON, CSV, plain text)
      
      Features to implement:
      - Customizable log formats
      - Buffering for performance optimization
      - Rotation and archiving of log files
      - Filtering and search capabilities

      **Part 4: Code Generator**
      
      Create a program called \`CodeGenerator.java\` that generates code snippets:
      
      Requirements:
      - Generate boilerplate code for common patterns
      - Create class and method skeletons
      - Implement formatting and indentation
      - Support multiple programming languages
      
      Advanced Features:
      - Template-based code generation
      - Variable substitution and macros
      - Integration with build tools
      - Custom code generation plugins

      **Part 5: Performance Analyzer**
      
      Create a program called \`StringBuilderPerformanceTest.java\` that analyzes performance characteristics:
      
      Requirements:
      - Benchmark different string building approaches
      - Test memory allocation patterns
      - Measure garbage collection impact
      - Compare single-threaded vs multi-threaded performance
      
      Features to implement:
      - Statistical analysis of results
      - Visualization of performance data
      - Export results to various formats
      - Customizable test scenarios

      **Deliverables:**
      Submit the following files:
      1. \`TextBuilder.java\` - Text generation program
      2. \`DataFormatBuilder.java\` - Structured data format builder
      3. \`LogFormatter.java\` - Log message formatter
      4. \`CodeGenerator.java\` - Code generation tool
      5. \`StringBuilderPerformanceTest.java\` - Performance analyzer
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of StringBuilder and StringBuffer
      - ✅ Understanding of when to use each class
      - ✅ Efficient string building techniques
      - ✅ Proper thread safety considerations
      - ✅ Clean, readable code with appropriate comments
      - ✅ Performance optimization practices
      - ✅ Application of mutable strings to solve real-world problems

      **💡 Bonus Challenges:**
      
      1. Memory Optimization: Implement memory-efficient string building
      2. Performance Testing: Create comprehensive benchmarks for mutable strings
      3. Custom Extensions: Design custom builder utility methods
      4. Thread Safety: Implement advanced thread-safe building techniques
      5. Extensibility: Design programs to easily add new building capabilities
    `
  }
};