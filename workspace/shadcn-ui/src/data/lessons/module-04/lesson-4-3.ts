import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_3: LessonContent = {
  title: 'String Class and Methods',
  type: 'lesson',
  duration: '35 min',
  module: 'Arrays and Strings',
  content: {
    overview: 'Master the String class in Java and its powerful methods for string manipulation. This lesson covers string creation, immutability, common string methods, and best practices for efficient string handling. You\'ll learn about StringBuilder and StringBuffer for mutable string operations and understand when to use each approach.',
    objectives: [
      'Understand the String class and its immutability',
      'Learn different ways to create and initialize strings',
      'Master common string methods for manipulation and comparison',
      'Understand string pooling and memory management',
      'Learn about StringBuilder and StringBuffer for mutable strings',
      'Practice string parsing and formatting techniques',
      'Understand performance considerations with string operations'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          String Class and Methods
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Mastering text manipulation in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to the String Class
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            In Java, strings are objects that represent sequences of characters. The String class is part of the java.lang package 
            and is one of the most commonly used classes in Java applications. Strings are immutable, meaning once created, 
            their values cannot be changed.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Strings are immutable in Java, which means every time you modify a string, a new String object is created.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            String Creation and Initialization
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Strings can be created and initialized in several ways:</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">String Literal:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                String str1 = "Hello World"; // String literal<br/>
                String str2 = "Hello World"; // Same object from string pool
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Using new Keyword:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                String str3 = new String("Hello World"); // New object<br/>
                String str4 = new String("Hello World"); // Different object
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">String from Character Array:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                char[] chars = {'H', 'e', 'l', 'l', 'o'};<br/>
                String str5 = new String(chars);<br/>
                <br/>
                // Substring from character array<br/>
                String str6 = new String(chars, 1, 3); // "ell"
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Common String Methods
          </h2>
          <div class="space-y-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-green-50">
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
                    <td class="p-3 font-mono">"Hello".length() → 5</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">charAt(int)</td>
                    <td class="p-3">Returns character at specified index</td>
                    <td class="p-3 font-mono">"Hello".charAt(1) → 'e'</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">substring(int)</td>
                    <td class="p-3">Returns substring from index</td>
                    <td class="p-3 font-mono">"Hello".substring(2) → "llo"</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">substring(int, int)</td>
                    <td class="p-3">Returns substring between indices</td>
                    <td class="p-3 font-mono">"Hello".substring(1, 4) → "ell"</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">indexOf(String)</td>
                    <td class="p-3">Returns index of first occurrence</td>
                    <td class="p-3 font-mono">"Hello".indexOf("l") → 2</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">lastIndexOf(String)</td>
                    <td class="p-3">Returns index of last occurrence</td>
                    <td class="p-3 font-mono">"Hello".lastIndexOf("l") → 3</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">toUpperCase()</td>
                    <td class="p-3">Converts to uppercase</td>
                    <td class="p-3 font-mono">"Hello".toUpperCase() → "HELLO"</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">toLowerCase()</td>
                    <td class="p-3">Converts to lowercase</td>
                    <td class="p-3 font-mono">"Hello".toLowerCase() → "hello"</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">trim()</td>
                    <td class="p-3">Removes leading and trailing whitespace</td>
                    <td class="p-3 font-mono">" Hello ".trim() → "Hello"</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">replace(char, char)</td>
                    <td class="p-3">Replaces characters</td>
                    <td class="p-3 font-mono">"Hello".replace('l', 'L') → "HeLLo"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            String Comparison Methods
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">equals() vs == :</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                String str1 = "Hello";<br/>
                String str2 = "Hello";<br/>
                String str3 = new String("Hello");<br/>
                <br/>
                // true - same string literal<br/>
                System.out.println(str1 == str2);<br/>
                <br/>
                // false - different objects<br/>
                System.out.println(str1 == str3);<br/>
                <br/>
                // true - same content<br/>
                System.out.println(str1.equals(str3));
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Comparison Methods:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                String str = "Hello";<br/>
                <br/>
                // Case-sensitive comparison<br/>
                str.equals("Hello");<br/>
                <br/>
                // Case-insensitive comparison<br/>
                str.equalsIgnoreCase("HELLO");<br/>
                <br/>
                // Lexicographic comparison<br/>
                str.compareTo("World");
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            StringBuilder and StringBuffer
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">For mutable string operations, use StringBuilder (single-threaded) or StringBuffer (thread-safe):</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">StringBuilder Example:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  StringBuilder sb = new StringBuilder();<br/>
                  sb.append("Hello");<br/>
                  sb.append(" ");<br/>
                  sb.append("World");<br/>
                  <br/>
                  // Convert to String<br/>
                  String result = sb.toString();
                </div>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">StringBuffer Example:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  StringBuffer sb = new StringBuffer();<br/>
                  sb.append("Hello");<br/>
                  sb.append(" ");<br/>
                  sb.append("World");<br/>
                  <br/>
                  // Thread-safe operations<br/>
                  String result = sb.toString();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for String Handling</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use StringBuilder/StringBuffer for multiple string modifications</li>
                <li>• Use equals() method for string comparison, not ==</li>
                <li>• Use String literals instead of new String() when possible</li>
                <li>• Use trim() to handle whitespace properly</li>
                <li>• Use isEmpty() to check for empty strings</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use + operator in loops for string concatenation</li>
                <li>• Don't ignore null pointer exceptions with strings</li>
                <li>• Don't use magic numbers for string indices</li>
                <li>• Don't forget to handle case sensitivity in comparisons</li>
                <li>• Don't create unnecessary string objects</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * StringClassDemo.java
 * 
 * This comprehensive example demonstrates the String class and its methods in Java:
 * - String creation and initialization methods
 * - Common string manipulation and comparison methods
 * - String immutability and memory management
 * - StringBuilder and StringBuffer for mutable strings
 * - Best practices for efficient string handling
 * 
 * Run this program to see how string operations work in practice.
 */

public class StringClassDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate string creation methods
        demonstrateStringCreation();
        
        // Demonstrate string manipulation methods
        demonstrateStringManipulation();
        
        // Demonstrate string comparison methods
        demonstrateStringComparison();
        
        // Demonstrate string search methods
        demonstrateStringSearch();
        
        // Demonstrate StringBuilder and StringBuffer
        demonstrateStringBuilder();
        
        // Demonstrate string performance considerations
        demonstrateStringPerformance();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                  STRING CLASS DEMO                           ║");
        System.out.println("║           Mastering String Operations in Java                ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateStringCreation() {
        System.out.println("🔸 STRING CREATION AND INITIALIZATION");
        System.out.println("   ───────────────────────────────────");
        
        // String literal
        String str1 = "Hello World";
        String str2 = "Hello World";
        System.out.println("   String literal: " + str1);
        System.out.println("   Same string literal reference: " + (str1 == str2));
        
        // Using new keyword
        String str3 = new String("Hello World");
        String str4 = new String("Hello World");
        System.out.println("   String with new keyword: " + str3);
        System.out.println("   Different object references: " + (str3 == str4));
        System.out.println("   Same content comparison: " + str3.equals(str4));
        
        // From character array
        char[] chars = {'J', 'a', 'v', 'a', ' ', 'P', 'r', 'o', 'g', 'r', 'a', 'm'};
        String str5 = new String(chars);
        String str6 = new String(chars, 5, 6); // "Progra"
        System.out.println("   String from char array: " + str5);
        System.out.println("   Substring from char array: " + str6);
        
        System.out.println();
    }
    
    private static void demonstrateStringManipulation() {
        System.out.println("🔸 STRING MANIPULATION METHODS");
        System.out.println("   ───────────────────────────");
        
        String original = "  Hello, Java Programming!  ";
        System.out.println("   Original string: '" + original + "'");
        System.out.println("   Length: " + original.length());
        System.out.println("   Trimmed: '" + original.trim() + "'");
        System.out.println("   Uppercase: '" + original.toUpperCase() + "'");
        System.out.println("   Lowercase: '" + original.toLowerCase() + "'");
        
        // Substring operations
        String text = "Java Programming Language";
        System.out.println("   Text: " + text);
        System.out.println("   Substring from index 5: " + text.substring(5));
        System.out.println("   Substring from 5 to 16: " + text.substring(5, 16));
        
        // Character operations
        System.out.println("   First character: " + text.charAt(0));
        System.out.println("   Last character: " + text.charAt(text.length() - 1));
        
        // Replace operations
        String sentence = "The quick brown fox jumps over the lazy dog";
        System.out.println("   Original sentence: " + sentence);
        System.out.println("   Replace 'the' with 'THE': " + sentence.replace("the", "THE"));
        System.out.println("   Replace 'o' with '0': " + sentence.replace('o', '0'));
        
        System.out.println();
    }
    
    private static void demonstrateStringComparison() {
        System.out.println("🔸 STRING COMPARISON METHODS");
        System.out.println("   ─────────────────────────");
        
        String str1 = "Hello";
        String str2 = "Hello";
        String str3 = new String("Hello");
        String str4 = "HELLO";
        
        System.out.println("   str1: " + str1);
        System.out.println("   str2: " + str2);
        System.out.println("   str3: " + str3);
        System.out.println("   str4: " + str4);
        
        // Reference comparison
        System.out.println("   str1 == str2: " + (str1 == str2));
        System.out.println("   str1 == str3: " + (str1 == str3));
        
        // Content comparison
        System.out.println("   str1.equals(str2): " + str1.equals(str2));
        System.out.println("   str1.equals(str3): " + str1.equals(str3));
        System.out.println("   str1.equals(str4): " + str1.equals(str4));
        System.out.println("   str1.equalsIgnoreCase(str4): " + str1.equalsIgnoreCase(str4));
        
        // Lexicographic comparison
        System.out.println("   str1.compareTo(str4): " + str1.compareTo(str4));
        System.out.println("   str4.compareTo(str1): " + str4.compareTo(str1));
        
        System.out.println();
    }
    
    private static void demonstrateStringSearch() {
        System.out.println("🔸 STRING SEARCH METHODS");
        System.out.println("   ─────────────────────");
        
        String text = "Java is a programming language. Java is platform independent.";
        System.out.println("   Text: " + text);
        
        // Index methods
        System.out.println("   Index of 'Java': " + text.indexOf("Java"));
        System.out.println("   Last index of 'Java': " + text.lastIndexOf("Java"));
        System.out.println("   Index of 'Python': " + text.indexOf("Python"));
        
        // Contains method
        System.out.println("   Contains 'programming': " + text.contains("programming"));
        System.out.println("   Contains 'Python': " + text.contains("Python"));
        
        // Starts with and ends with
        System.out.println("   Starts with 'Java': " + text.startsWith("Java"));
        System.out.println("   Ends with 'independent.': " + text.endsWith("independent."));
        
        System.out.println();
    }
    
    private static void demonstrateStringBuilder() {
        System.out.println("🔸 STRINGBUILDER AND STRINGBUFFER");
        System.out.println("   ───────────────────────────────");
        
        // StringBuilder example
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" ");
        sb.append("World");
        sb.append("!");
        System.out.println("   StringBuilder result: " + sb.toString());
        
        // StringBuilder methods
        sb.insert(5, " Beautiful");
        System.out.println("   After insertion: " + sb.toString());
        
        sb.reverse();
        System.out.println("   After reverse: " + sb.toString());
        
        sb.reverse(); // Reverse back
        sb.delete(5, 15); // Delete " Beautiful"
        System.out.println("   After deletion: " + sb.toString());
        
        // StringBuffer example (thread-safe)
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("Thread-safe ");
        stringBuffer.append("StringBuffer ");
        stringBuffer.append("example");
        System.out.println("   StringBuffer result: " + stringBuffer.toString());
        
        System.out.println();
    }
    
    private static void demonstrateStringPerformance() {
        System.out.println("🔸 STRING PERFORMANCE CONSIDERATIONS");
        System.out.println("   ─────────────────────────────────");
        
        // Inefficient way - creates many temporary strings
        System.out.println("   Inefficient concatenation with + operator:");
        long startTime = System.currentTimeMillis();
        String inefficient = "";
        for (int i = 0; i < 1000; i++) {
            inefficient += "a";
        }
        long endTime = System.currentTimeMillis();
        System.out.println("   Time taken: " + (endTime - startTime) + " ms");
        System.out.println("   Length: " + inefficient.length());
        
        // Efficient way - using StringBuilder
        System.out.println("   Efficient concatenation with StringBuilder:");
        startTime = System.currentTimeMillis();
        StringBuilder efficient = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            efficient.append("a");
        }
        String result = efficient.toString();
        endTime = System.currentTimeMillis();
        System.out.println("   Time taken: " + (endTime - startTime) + " ms");
        System.out.println("   Length: " + result.length());
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • String creation and initialization methods                ║");
        System.out.println("║  • Common string manipulation and comparison methods         ║");
        System.out.println("║  • String immutability and memory management                 ║");
        System.out.println("║  • StringBuilder and StringBuffer for mutable strings        ║");
        System.out.println("║  • String search and indexing methods                        ║");
        System.out.println("║  • Performance considerations with string operations         ║");
        System.out.println("║  • Best practices for efficient string handling              ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use StringBuilder for multiple string modifications       ║");
        System.out.println("║  • Use equals() method for string comparison, not ==         ║");
        System.out.println("║  • Handle null pointer exceptions appropriately              ║");
        System.out.println("║  • Consider performance implications of string operations    ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create a program to reverse a string without using built-in methods.
2. Write a program to check if a string is a palindrome.
3. Create a program to count the number of vowels in a string.
4. Write a program to find the first non-repeated character in a string.
5. Create a program to remove all spaces from a string.
`
  }
};