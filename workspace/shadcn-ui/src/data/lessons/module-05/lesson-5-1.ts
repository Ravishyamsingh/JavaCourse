import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_1: LessonContent = {
  title: 'String Class and String Methods',
  type: 'lesson',
  duration: '35 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Master the String class in Java, which is one of the most frequently used classes in Java applications. This lesson covers the fundamentals of string manipulation, immutability, and essential methods for working with text data.',
    objectives: [
      'Understand the String class and its immutability characteristics',
      'Learn about string pooling and memory management',
      'Master common String methods for manipulation and searching',
      'Practice efficient string concatenation techniques',
      'Explore string comparison methods and best practices',
      'Understand the difference between String, StringBuilder, and StringBuffer'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          String Class and Methods
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Mastering Java's most used class for text manipulation</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to String Class
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The String class in Java represents sequences of characters and is one of the most fundamental classes in the Java API. 
            Strings are immutable, meaning once created, their values cannot be changed. This design decision has important 
            implications for memory management and thread safety.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Strings are immutable in Java, which means every operation that appears to modify a String actually creates a new String object.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            String Creation and String Pool
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java optimizes string storage through the String pool, which stores unique string literals:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">String Literals</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  String s1 = "Hello";<br/>
                  String s2 = "Hello";<br/>
                  // s1 and s2 reference the same object
                </div>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Using new Keyword</h4>
                <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                  String s3 = new String("Hello");<br/>
                  String s4 = new String("Hello");<br/>
                  // s3 and s4 are different objects
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Essential String Methods
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
                  <td class="p-3 font-mono">length()</td>
                  <td class="p-3">Returns the length of the string</td>
                  <td class="p-3 font-mono">"Java".length() → 4</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">charAt(int)</td>
                  <td class="p-3">Returns character at specified index</td>
                  <td class="p-3 font-mono">"Java".charAt(0) → 'J'</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">substring(int)</td>
                  <td class="p-3">Returns substring from index</td>
                  <td class="p-3 font-mono">"Java".substring(1) → "ava"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">indexOf(String)</td>
                  <td class="p-3">Returns index of first occurrence</td>
                  <td class="p-3 font-mono">"Java".indexOf("a") → 1</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">toLowerCase()</td>
                  <td class="p-3">Converts to lowercase</td>
                  <td class="p-3 font-mono">"Java".toLowerCase() → "java"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">toUpperCase()</td>
                  <td class="p-3">Converts to uppercase</td>
                  <td class="p-3 font-mono">"Java".toUpperCase() → "JAVA"</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">trim()</td>
                  <td class="p-3">Removes leading and trailing whitespace</td>
                  <td class="p-3 font-mono">" Java ".trim() → "Java"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">replace(char, char)</td>
                  <td class="p-3">Replaces characters</td>
                  <td class="p-3 font-mono">"Java".replace('a', 'o') → "Jovo"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            String Comparison Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the different ways to compare strings is crucial for avoiding common pitfalls:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">equals() Method</h4>
                <p class="text-red-700">Compares the content of two strings (recommended approach)</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  String s1 = "Hello";<br/>
                  String s2 = new String("Hello");<br/>
                  s1.equals(s2); // true
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">== Operator</h4>
                <p class="text-blue-700">Compares object references, not content</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  String s1 = "Hello";<br/>
                  String s2 = new String("Hello");<br/>
                  s1 == s2; // false
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Performance Considerations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">When working with strings, consider these performance tips:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">✅ Do's</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use StringBuilder for multiple concatenations</li>
                  <li>• Compare strings with equals(), not ==</li>
                  <li>• Use String.isEmpty() instead of length() == 0</li>
                  <li>• Leverage string literals when possible</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">🚫 Don'ts</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Don't use + for multiple concatenations in loops</li>
                  <li>• Don't ignore case sensitivity in comparisons</li>
                  <li>• Don't forget to handle null strings</li>
                  <li>• Don't use == for string content comparison</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for String Usage</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="text-center bg-white p-4 rounded-lg shadow">
              <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span class="font-bold text-xl">1</span>
              </div>
              <h4 class="font-bold mb-2">Null Safety</h4>
              <p class="text-sm text-gray-600">Always check for null before calling string methods</p>
            </div>
            <div class="text-center bg-white p-4 rounded-lg shadow">
              <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span class="font-bold text-xl">2</span>
              </div>
              <h4 class="font-bold mb-2">Efficient Concatenation</h4>
              <p class="text-sm text-gray-600">Use StringBuilder for multiple string operations</p>
            </div>
            <div class="text-center bg-white p-4 rounded-lg shadow">
              <div class="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span class="font-bold text-xl">3</span>
              </div>
              <h4 class="font-bold mb-2">Case Sensitivity</h4>
              <p class="text-sm text-gray-600">Be explicit about case requirements in comparisons</p>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * StringClassDemo.java
 * 
 * This comprehensive example demonstrates the String class in Java:
 * - String creation methods and immutability
 * - String pool behavior and memory management
 * - Common string methods for manipulation
 * - String comparison techniques
 * - Performance considerations with string operations
 * 
 * Run this program to see how String operations work in practice.
 */

public class StringClassDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate string creation and immutability
        demonstrateStringCreation();
        
        // Demonstrate string methods
        demonstrateStringMethods();
        
        // Demonstrate string comparison
        demonstrateStringComparison();
        
        // Demonstrate performance considerations
        demonstratePerformance();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    STRING CLASS DEMO                         ║");
        System.out.println("║         Understanding Java's Most Used Class                 ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateStringCreation() {
        System.out.println("🔸 STRING CREATION AND IMMUTABILITY");
        System.out.println("   ─────────────────────────────────");
        
        // String literals and string pool
        String literal1 = "Hello";
        String literal2 = "Hello";
        System.out.println("   String literals 'Hello' assigned to two variables:");
        System.out.println("   literal1 == literal2: " + (literal1 == literal2));
        System.out.println("   literal1.equals(literal2): " + literal1.equals(literal2));
        
        // Using new keyword
        String newString1 = new String("Hello");
        String newString2 = new String("Hello");
        System.out.println("   Strings created with 'new' keyword:");
        System.out.println("   newString1 == newString2: " + (newString1 == newString2));
        System.out.println("   newString1.equals(newString2): " + newString1.equals(newString2));
        
        // Immutability demonstration
        System.out.println("   Demonstrating immutability:");
        String original = "Java";
        System.out.println("   Original string: " + original);
        String modified = original.concat(" Programming");
        System.out.println("   After concat: " + modified);
        System.out.println("   Original unchanged: " + original);
        
        System.out.println();
    }
    
    private static void demonstrateStringMethods() {
        System.out.println("🔸 STRING METHODS DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        String text = "  Java Programming Language  ";
        System.out.println("   Original text: '" + text + "'");
        System.out.println("   Length: " + text.length());
        System.out.println("   Trimmed: '" + text.trim() + "'");
        System.out.println("   To uppercase: '" + text.trim().toUpperCase() + "'");
        System.out.println("   To lowercase: '" + text.trim().toLowerCase() + "'");
        System.out.println("   Character at index 2: '" + text.trim().charAt(2) + "'");
        System.out.println("   Substring from index 5: '" + text.trim().substring(5) + "'");
        System.out.println("   Substring from 5 to 16: '" + text.trim().substring(5, 16) + "'");
        System.out.println("   Index of 'gram': " + text.trim().indexOf("gram"));
        System.out.println("   Last index of 'a': " + text.trim().lastIndexOf("a"));
        System.out.println("   Replace 'Java' with 'Python': '" + text.trim().replace("Java", "Python") + "'");
        System.out.println("   Contains 'Programming': " + text.trim().contains("Programming"));
        System.out.println("   Starts with 'Java': " + text.trim().startsWith("Java"));
        System.out.println("   Ends with 'Language': " + text.trim().endsWith("Language"));
        
        System.out.println();
    }
    
    private static void demonstrateStringComparison() {
        System.out.println("🔸 STRING COMPARISON TECHNIQUES");
        System.out.println("   ────────────────────────────");
        
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        String s4 = "HELLO";
        
        System.out.println("   Comparing '" + s1 + "' with '" + s2 + "':");
        System.out.println("   Using == operator: " + (s1 == s2));
        System.out.println("   Using equals(): " + s1.equals(s2));
        
        System.out.println("   Comparing '" + s1 + "' with '" + s3 + "' (created with new):");
        System.out.println("   Using == operator: " + (s1 == s3));
        System.out.println("   Using equals(): " + s1.equals(s3));
        
        System.out.println("   Case-sensitive comparison with '" + s4 + "':");
        System.out.println("   Using equals(): " + s1.equals(s4));
        System.out.println("   Using equalsIgnoreCase(): " + s1.equalsIgnoreCase(s4));
        
        System.out.println();
    }
    
    private static void demonstratePerformance() {
        System.out.println("🔸 PERFORMANCE COMPARISON");
        System.out.println("   ──────────────────────");
        
        // Inefficient string concatenation
        long startTime = System.currentTimeMillis();
        String inefficient = "";
        for (int i = 0; i < 1000; i++) {
            inefficient += "a";
        }
        long endTime = System.currentTimeMillis();
        System.out.println("   Inefficient concatenation (+= in loop): " + (endTime - startTime) + " ms");
        
        // Efficient string concatenation with StringBuilder
        startTime = System.currentTimeMillis();
        StringBuilder efficient = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            efficient.append("a");
        }
        String result = efficient.toString();
        endTime = System.currentTimeMillis();
        System.out.println("   Efficient concatenation (StringBuilder): " + (endTime - startTime) + " ms");
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • String creation methods and immutability                  ║");
        System.out.println("║  • String pool behavior and memory management                ║");
        System.out.println("║  • Common string methods for manipulation                    ║");
        System.out.println("║  • String comparison techniques                              ║");
        System.out.println("║  • Performance considerations with string operations         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use equals() for content comparison, not ==               ║");
        System.out.println("║  • Use StringBuilder for multiple concatenations             ║");
        System.out.println("║  • Be aware of case sensitivity in comparisons               ║");
        System.out.println("║  • Handle null strings appropriately                         ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
      1) Create a String variable and print its length using length().
      2) Use substring() to extract part of a string and print it.
      3) Compare two strings using equals() and print the result.
    `
  }
};