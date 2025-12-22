import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_4: LessonContent = {
  title: 'StringBuilder and StringBuffer',
  type: 'lesson',
  duration: '25 min',
  module: 'Arrays and Strings',
  content: {
    overview: 'Learn about StringBuilder and StringBuffer classes for efficient string manipulation. This lesson covers when and how to use these mutable string classes, their methods, and performance considerations. You\'ll understand the differences between these classes and when to use each in different scenarios.',
    objectives: [
      'Understand the differences between String, StringBuilder, and StringBuffer',
      'Learn when to use mutable string classes for performance optimization',
      'Master common StringBuilder and StringBuffer methods',
      'Understand thread safety considerations with StringBuffer',
      'Practice efficient string building techniques',
      'Learn about memory management with mutable strings',
      'Understand performance implications of different string operations'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          StringBuilder and StringBuffer
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Efficient mutable string operations in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Mutable Strings
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            While String objects are immutable in Java, StringBuilder and StringBuffer provide mutable alternatives 
            for efficient string manipulation. These classes allow you to modify the content of a string without creating 
            new objects, which is especially important for performance when doing many string operations.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">StringBuilder and StringBuffer are mutable, meaning their content can be changed after creation without creating new objects.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            StringBuilder vs StringBuffer
          </h2>
          <div class="space-y-4">
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
                    <td class="p-3 text-red-600">Not Thread-Safe</td>
                    <td class="p-3 text-green-600">Thread-Safe</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Performance</td>
                    <td class="p-3 text-green-600">Faster</td>
                    <td class="p-3 text-red-600">Slower</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Synchronization</td>
                    <td class="p-3 text-red-600">No Synchronization</td>
                    <td class="p-3 text-green-600">Synchronized Methods</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Use Case</td>
                    <td class="p-3">Single-threaded applications</td>
                    <td class="p-3">Multi-threaded applications</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Introduction</td>
                    <td class="p-3">Java 5</td>
                    <td class="p-3">Java 1.0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Common StringBuilder Methods
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">StringBuilder provides many methods for string manipulation:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Construction and Basic Methods:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  StringBuilder sb = new StringBuilder();<br/>
                  StringBuilder sb2 = new StringBuilder("Hello");<br/>
                  StringBuilder sb3 = new StringBuilder(50); // Capacity<br/>
                  <br/>
                  sb.append("World");<br/>
                  sb.insert(0, "Hello ");<br/>
                  sb.length();<br/>
                  sb.capacity();
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Modification Methods:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  sb.delete(0, 5); // Delete chars from index 0 to 5<br/>
                  sb.deleteCharAt(2); // Delete char at index 2<br/>
                  sb.replace(0, 5, "Hi"); // Replace chars<br/>
                  sb.reverse(); // Reverse the string<br/>
                  <br/>
                  sb.setCharAt(0, 'h'); // Set char at index<br/>
                  sb.setLength(10); // Set length
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Performance Considerations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding when to use StringBuilder for performance optimization:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Inefficient String Concatenation:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  // Creates many temporary objects<br/>
                  String result = "";<br/>
                  for (int i = 0; i < 1000; i++) {<br/>
                  &nbsp;&nbsp;result += "a"; // Inefficient!<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Efficient StringBuilder Usage:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  // More efficient approach<br/>
                  StringBuilder sb = new StringBuilder();<br/>
                  for (int i = 0; i < 1000; i++) {<br/>
                  &nbsp;&nbsp;sb.append("a");<br/>
                  }<br/>
                  String result = sb.toString();
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">When to Use Each:</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use <strong>StringBuilder</strong> in single-threaded applications for better performance</li>
                <li>• Use <strong>StringBuffer</strong> in multi-threaded applications where thread safety is required</li>
                <li>• Use <strong>String</strong> when you need immutable strings or simple concatenation</li>
                <li>• Consider initial capacity when creating StringBuilder/StringBuffer to avoid resizing</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Practical Applications
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Real-world scenarios where StringBuilder is particularly useful:</p>
            
            <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Dynamic String Building:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  StringBuilder html = new StringBuilder();<br/>
                  html.append("<html><body>");<br/>
                  html.append("<h1>").append(title).append("</h1>");<br/>
                  html.append("<p>").append(content).append("</p>");<br/>
                  html.append("</body></html>");<br/>
                  String page = html.toString();
                </div>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">String Processing Pipeline:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  StringBuilder processed = new StringBuilder(input);<br/>
                  processed.replace(oldPattern, newPattern);<br/>
                  processed.delete(0, headerLength);<br/>
                  processed.insert(0, newHeader);<br/>
                  processed.reverse();<br/>
                  return processed.toString();
                </div>
              </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for StringBuilder/StringBuffer</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use StringBuilder for single-threaded string manipulation</li>
                <li>• Use StringBuffer when thread safety is required</li>
                <li>• Set initial capacity to avoid frequent resizing</li>
                <li>• Convert to String only when necessary using toString()</li>
                <li>• Use method chaining for cleaner code</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use String concatenation in loops</li>
                <li>• Don't ignore thread safety requirements</li>
                <li>• Don't forget to convert StringBuilder to String when needed</li>
                <li>• Don't use magic numbers for indices</li>
                <li>• Don't create unnecessary intermediate String objects</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * StringBuilderDemo.java
 * 
 * This comprehensive example demonstrates StringBuilder and StringBuffer in Java:
 * - Differences between String, StringBuilder, and StringBuffer
 * - Common methods for mutable string operations
 * - Performance considerations and optimizations
 * - Thread safety aspects of StringBuffer
 * - Practical applications of mutable strings
 * 
 * Run this program to see how mutable string operations work in practice.
 */

public class StringBuilderDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate StringBuilder basics
        demonstrateStringBuilderBasics();
        
        // Demonstrate StringBuilder methods
        demonstrateStringBuilderMethods();
        
        // Demonstrate performance differences
        demonstratePerformance();
        
        // Demonstrate StringBuffer thread safety
        demonstrateStringBuffer();
        
        // Demonstrate practical applications
        demonstratePracticalApplications();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              STRINGBUILDER & STRINGBUFFER DEMO               ║");
        System.out.println("║        Efficient Mutable String Operations in Java          ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateStringBuilderBasics() {
        System.out.println("🔸 STRINGBUILDER BASICS");
        System.out.println("   ─────────────────────");
        
        // Different ways to create StringBuilder
        StringBuilder sb1 = new StringBuilder();
        StringBuilder sb2 = new StringBuilder("Hello");
        StringBuilder sb3 = new StringBuilder(50); // Initial capacity
        
        System.out.println("   Empty StringBuilder: '" + sb1 + "'");
        System.out.println("   StringBuilder with initial value: '" + sb2 + "'");
        System.out.println("   StringBuilder with capacity 50: length=" + sb3.length() + ", capacity=" + sb3.capacity());
        
        // Append operations
        sb1.append("Hello");
        sb1.append(" ");
        sb1.append("World");
        System.out.println("   After appending: '" + sb1 + "'");
        
        System.out.println();
    }
    
    private static void demonstrateStringBuilderMethods() {
        System.out.println("🔸 STRINGBUILDER METHODS");
        System.out.println("   ──────────────────────");
        
        StringBuilder sb = new StringBuilder("Java Programming");
        System.out.println("   Original: " + sb);
        
        // Insert method
        sb.insert(4, " is ");
        System.out.println("   After insert: " + sb);
        
        // Delete methods
        sb.delete(8, 11); // Delete "is "
        System.out.println("   After delete: " + sb);
        
        sb.deleteCharAt(0); // Delete first character 'J'
        System.out.println("   After deleteCharAt: " + sb);
        
        // Replace method
        sb.replace(0, 4, "Kotlin");
        System.out.println("   After replace: " + sb);
        
        // Reverse method
        sb.reverse();
        System.out.println("   After reverse: " + sb);
        
        // Set methods
        sb.reverse(); // Reverse back
        sb.setCharAt(0, 'J');
        System.out.println("   After setCharAt: " + sb);
        
        // Set length
        sb.setLength(4);
        System.out.println("   After setLength(4): " + sb);
        
        System.out.println();
    }
    
    private static void demonstratePerformance() {
        System.out.println("🔸 PERFORMANCE COMPARISON");
        System.out.println("   ───────────────────────");
        
        // Inefficient String concatenation
        System.out.println("   Inefficient String concatenation:");
        long startTime = System.currentTimeMillis();
        String str = "";
        for (int i = 0; i < 10000; i++) {
            str += "a";
        }
        long endTime = System.currentTimeMillis();
        System.out.println("   Time taken: " + (endTime - startTime) + " ms");
        System.out.println("   Final length: " + str.length());
        
        // Efficient StringBuilder
        System.out.println("   Efficient StringBuilder:");
        startTime = System.currentTimeMillis();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10000; i++) {
            sb.append("a");
        }
        String result = sb.toString();
        endTime = System.currentTimeMillis();
        System.out.println("   Time taken: " + (endTime - startTime) + " ms");
        System.out.println("   Final length: " + result.length());
        
        System.out.println();
    }
    
    private static void demonstrateStringBuffer() {
        System.out.println("🔸 STRINGBUFFER THREAD SAFETY");
        System.out.println("   ───────────────────────────");
        
        StringBuffer buffer = new StringBuffer("Thread-safe example");
        System.out.println("   Original StringBuffer: " + buffer);
        
        // StringBuffer methods are same as StringBuilder
        buffer.append(" with synchronization");
        System.out.println("   After append: " + buffer);
        
        buffer.insert(0, "Synchronized ");
        System.out.println("   After insert: " + buffer);
        
        buffer.reverse();
        System.out.println("   After reverse: " + buffer);
        
        System.out.println("   Note: StringBuffer methods are synchronized for thread safety");
        System.out.println("   but this comes with a performance cost compared to StringBuilder");
        
        System.out.println();
    }
    
    private static void demonstratePracticalApplications() {
        System.out.println("🔸 PRACTICAL APPLICATIONS");
        System.out.println("   ───────────────────────");
        
        // Building HTML dynamically
        System.out.println("   Building HTML dynamically:");
        StringBuilder html = new StringBuilder();
        html.append("<html><body>");
        html.append("<h1>Welcome to Java Programming</h1>");
        html.append("<p>This is a dynamically generated HTML page.</p>");
        html.append("<ul>");
        html.append("<li>Item 1</li>");
        html.append("<li>Item 2</li>");
        html.append("<li>Item 3</li>");
        html.append("</ul>");
        html.append("</body></html>");
        System.out.println("   Generated HTML: " + html.toString());
        
        // Building CSV data
        System.out.println("   Building CSV data:");
        StringBuilder csv = new StringBuilder();
        csv.append("Name,Age,City\\n");
        csv.append("John,25,New York\\n");
        csv.append("Jane,30,Los Angeles\\n");
        csv.append("Bob,35,Chicago\\n");
        System.out.println("   Generated CSV: " + csv.toString());
        
        // String processing pipeline
        System.out.println("   String processing pipeline:");
        String input = "  Hello,   World!  This   is   Java.  ";
        StringBuilder processed = new StringBuilder(input.trim());
        // Simple whitespace normalization
        while (processed.indexOf("  ") != -1) {
            processed.replace(processed.indexOf("  "), processed.indexOf("  ") + 2, " ");
        }
        System.out.println("   Processed string: " + processed.toString());
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Differences between String, StringBuilder, StringBuffer   ║");
        System.out.println("║  • Common methods for mutable string operations              ║");
        System.out.println("║  • Performance considerations and optimizations              ║");
        System.out.println("║  • Thread safety aspects of StringBuffer                    ║");
        System.out.println("║  • Practical applications of mutable strings                 ║");
        System.out.println("║  • Best practices for efficient string manipulation          ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use StringBuilder for single-threaded applications        ║");
        System.out.println("║  • Use StringBuffer when thread safety is required           ║");
        System.out.println("║  • Avoid String concatenation in loops                       ║");
        System.out.println("║  • Set appropriate initial capacity for better performance   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create a StringBuilder and append "Hello" and "World" to it, then print the result.
2. Write a program to reverse a string using StringBuilder.
3. Create a program to insert a string at a specific position using StringBuilder.
4. Write a program to delete characters from a StringBuilder.
5. Create a program to replace a substring in a StringBuilder.
`
  }
};