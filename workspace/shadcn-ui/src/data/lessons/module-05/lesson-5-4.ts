import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_4: LessonContent = {
  title: 'Regular Expressions Basics',
  type: 'lesson',
  duration: '30 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Learn the fundamentals of regular expressions (regex) for pattern matching in Java. This lesson covers basic regex syntax, character classes, quantifiers, and how to use them effectively for text processing and validation.',
    objectives: [
      'Understand regular expression syntax and components',
      'Learn character classes, quantifiers, and anchors',
      'Master the Pattern and Matcher classes in Java',
      'Practice common regex patterns for validation',
      'Implement efficient pattern matching techniques',
      'Handle regex-related exceptions and edge cases'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Regular Expressions Basics
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Pattern matching and text processing with regex</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Regular Expressions
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Regular expressions (regex) are powerful tools for pattern matching and text processing. 
            In Java, regex is implemented through the java.util.regex package, which provides 
            classes for compiling patterns and matching text.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">A regular expression is a sequence of characters that defines a search pattern, used primarily for pattern matching with strings.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Java Regex Classes
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java provides three main classes for working with regular expressions:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Class</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Pattern</td>
                    <td class="p-3">Compiled representation of a regex</td>
                    <td class="p-3 font-mono">Pattern.compile("[a-z]+")</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Matcher</td>
                    <td class="p-3">Performs match operations on input</td>
                    <td class="p-3 font-mono">pattern.matcher("hello")</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">PatternSyntaxException</td>
                    <td class="p-3">Indicates invalid regex syntax</td>
                    <td class="p-3 font-mono">catch(PatternSyntaxException e)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Pattern Class</h4>
                <p class="text-blue-700">Used to compile a regex into a Pattern object for reuse:</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Pattern pattern = Pattern.compile("[a-z]+");<br/>
                  Matcher matcher = pattern.matcher("hello");
                </div>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Matcher Class</h4>
                <p class="text-purple-700">Performs match operations on character sequences:</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  boolean matches = matcher.matches();<br/>
                  boolean found = matcher.find();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Basic Regex Components
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-green-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Component</th>
                  <th class="text-left p-3 font-bold border-b">Description</th>
                  <th class="text-left p-3 font-bold border-b">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-mono">.</td>
                  <td class="p-3">Any character except newline</td>
                  <td class="p-3 font-mono">a.c matches "abc"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">^</td>
                  <td class="p-3">Start of line</td>
                  <td class="p-3 font-mono">^Hello matches "Hello" at start</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">$</td>
                  <td class="p-3">End of line</td>
                  <td class="p-3 font-mono">World$ matches "World" at end</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">*</td>
                  <td class="p-3">Zero or more occurrences</td>
                  <td class="p-3 font-mono">a* matches "", "a", "aa", etc.</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">+</td>
                  <td class="p-3">One or more occurrences</td>
                  <td class="p-3 font-mono">a+ matches "a", "aa", "aaa", etc.</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">?</td>
                  <td class="p-3">Zero or one occurrence</td>
                  <td class="p-3 font-mono">a? matches "" or "a"</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">{n}</td>
                  <td class="p-3">Exactly n occurrences</td>
                  <td class="p-3 font-mono">a{3} matches "aaa"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">{n,}</td>
                  <td class="p-3">n or more occurrences</td>
                  <td class="p-3 font-mono">a{2,} matches "aa", "aaa", etc.</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">{n,m}</td>
                  <td class="p-3">Between n and m occurrences</td>
                  <td class="p-3 font-mono">a{2,4} matches "aa", "aaa", "aaaa"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Character Classes
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Character classes allow you to specify sets of characters:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-orange-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Class</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                    <th class="text-left p-3 font-bold border-b">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">[abc]</td>
                    <td class="p-3">Any of the characters a, b, or c</td>
                    <td class="p-3 font-mono">[abc] matches "a", "b", or "c"</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">[^abc]</td>
                    <td class="p-3">Any character except a, b, or c</td>
                    <td class="p-3 font-mono">[^abc] matches "d", "e", etc.</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">[a-z]</td>
                    <td class="p-3">Any lowercase letter</td>
                    <td class="p-3 font-mono">[a-z] matches "a" through "z"</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">[A-Z]</td>
                    <td class="p-3">Any uppercase letter</td>
                    <td class="p-3 font-mono">[A-Z] matches "A" through "Z"</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">[0-9]</td>
                    <td class="p-3">Any digit</td>
                    <td class="p-3 font-mono">[0-9] matches "0" through "9"</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">\\d</td>
                    <td class="p-3">Any digit (same as [0-9])</td>
                    <td class="p-3 font-mono">\\d matches "0" through "9"</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">\\w</td>
                    <td class="p-3">Any word character (letter, digit, underscore)</td>
                    <td class="p-3 font-mono">\\w matches "a", "5", "_", etc.</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">\\s</td>
                    <td class="p-3">Any whitespace character</td>
                    <td class="p-3 font-mono">\\s matches " ", "\\t", "\\n", etc.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common Regex Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Here are some frequently used regex patterns:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Validation Patterns</h4>
                <ul class="space-y-2 text-gray-700">
                  <li><span class="font-mono">^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$</span> - Email</li>
                  <li><span class="font-mono">^\\d{3}-\\d{3}-\\d{4}$</span> - US Phone</li>
                  <li><span class="font-mono">^\\d{5}(?:-\\d{4})?$</span> - US ZIP Code</li>
                  <li><span class="font-mono">^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/\\d{4}$</span> - Date (MM/DD/YYYY)</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Text Processing Patterns</h4>
                <ul class="space-y-2 text-gray-700">
                  <li><span class="font-mono">\\b\\w+\\b</span> - Words</li>
                  <li><span class="font-mono">\\b[A-Z][a-z]+</span> - Capitalized words</li>
                  <li><span class="font-mono">\\d+</span> - Numbers</li>
                  <li><span class="font-mono">\\b\\d{4}\\b</span> - 4-digit numbers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Regex</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Compile patterns once and reuse them</li>
                <li>• Use raw strings to avoid escaping backslashes</li>
                <li>• Test patterns thoroughly with edge cases</li>
                <li>• Use specific patterns instead of generic ones</li>
                <li>• Comment complex regex for maintainability</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use regex for simple string operations</li>
                <li>• Don't create patterns in loops unnecessarily</li>
                <li>• Don't ignore PatternSyntaxException</li>
                <li>• Don't use complex regex for performance-critical code</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * RegexBasicsDemo.java
 * 
 * This comprehensive example demonstrates regular expressions in Java:
 * - Basic regex syntax and components
 * - Pattern and Matcher classes usage
 * - Character classes and quantifiers
 * - Common validation patterns
 * - Text processing with regex
 * 
 * Run this program to see how regex works in practice.
 */

import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.regex.PatternSyntaxException;

public class RegexBasicsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic regex patterns
        demonstrateBasicPatterns();
        
        // Demonstrate character classes
        demonstrateCharacterClasses();
        
        // Demonstrate quantifiers
        demonstrateQuantifiers();
        
        // Demonstrate common validation patterns
        demonstrateValidationPatterns();
        
        // Demonstrate text processing
        demonstrateTextProcessing();
        
        // Demonstrate error handling
        demonstrateErrorHandling();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    REGEX BASICS DEMO                         ║");
        System.out.println("║         Pattern Matching and Text Processing                 ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicPatterns() {
        System.out.println("🔸 BASIC REGEX PATTERNS");
        System.out.println("   ────────────────────");
        
        // Simple pattern matching
        String text = "The quick brown fox jumps over the lazy dog";
        Pattern pattern = Pattern.compile("fox");
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("   Text: " + text);
        System.out.println("   Pattern: fox");
        System.out.println("   Matches: " + matcher.matches());
        System.out.println("   Found: " + matcher.find());
        System.out.println("   Match position: " + matcher.start() + "-" + matcher.end());
        
        // Using find() to locate all matches
        System.out.println("   All occurrences of 'the':");
        pattern = Pattern.compile("the");
        matcher = pattern.matcher(text.toLowerCase());
        while (matcher.find()) {
            System.out.println("     Found 'the' at position " + matcher.start());
        }
        
        System.out.println();
    }
    
    private static void demonstrateCharacterClasses() {
        System.out.println("🔸 CHARACTER CLASSES");
        System.out.println("   ─────────────────");
        
        String text = "Java123!";
        
        // Match digits
        Pattern digitPattern = Pattern.compile("\\\\d");
        Matcher digitMatcher = digitPattern.matcher(text);
        System.out.println("   Text: " + text);
        System.out.print("   Digits: ");
        while (digitMatcher.find()) {
            System.out.print(digitMatcher.group() + " ");
        }
        System.out.println();
        
        // Match word characters
        Pattern wordPattern = Pattern.compile("\\\\w");
        Matcher wordMatcher = wordPattern.matcher(text);
        System.out.print("   Word characters: ");
        while (wordMatcher.find()) {
            System.out.print(wordMatcher.group() + " ");
        }
        System.out.println();
        
        // Match specific characters
        Pattern specificPattern = Pattern.compile("[aeiou]");
        Matcher specificMatcher = specificPattern.matcher(text.toLowerCase());
        System.out.print("   Vowels: ");
        while (specificMatcher.find()) {
            System.out.print(specificMatcher.group() + " ");
        }
        System.out.println();
        
        System.out.println();
    }
    
    private static void demonstrateQuantifiers() {
        System.out.println("🔸 QUANTIFIERS");
        System.out.println("   ───────────");
        
        String text = "aaaabbbbcccc";
        
        // Zero or more
        Pattern starPattern = Pattern.compile("a*");
        Matcher starMatcher = starPattern.matcher(text);
        System.out.println("   Text: " + text);
        System.out.println("   Pattern a*: matches zero or more 'a'");
        
        // One or more
        Pattern plusPattern = Pattern.compile("b+");
        Matcher plusMatcher = plusPattern.matcher(text);
        System.out.println("   Pattern b+: matches one or more 'b'");
        
        // Exactly n
        Pattern exactPattern = Pattern.compile("c{3}");
        Matcher exactMatcher = exactPattern.matcher(text);
        System.out.println("   Pattern c{3}: matches exactly 3 'c'");
        
        System.out.println();
    }
    
    private static void demonstrateValidationPatterns() {
        System.out.println("🔸 VALIDATION PATTERNS");
        System.out.println("   ───────────────────");
        
        // Email validation
        String[] emails = {"user@example.com", "invalid.email", "user@.com"};
        Pattern emailPattern = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$");
        
        System.out.println("   Email validation:");
        for (String email : emails) {
            Matcher matcher = emailPattern.matcher(email);
            System.out.println("   " + email + " → " + (matcher.matches() ? "Valid" : "Invalid"));
        }
        
        // Phone number validation
        String[] phones = {"123-456-7890", "1234567890", "123-45-67890"};
        Pattern phonePattern = Pattern.compile("^\\\\d{3}-\\\\d{3}-\\\\d{4}$");
        
        System.out.println("   Phone validation (###-###-####):");
        for (String phone : phones) {
            Matcher matcher = phonePattern.matcher(phone);
            System.out.println("   " + phone + " → " + (matcher.matches() ? "Valid" : "Invalid"));
        }
        
        System.out.println();
    }
    
    private static void demonstrateTextProcessing() {
        System.out.println("🔸 TEXT PROCESSING");
        System.out.println("   ───────────────");
        
        String text = "Contact us at support@example.com or sales@example.com for more info.";
        
        // Extract email addresses
        Pattern emailPattern = Pattern.compile("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}");
        Matcher emailMatcher = emailPattern.matcher(text);
        
        System.out.println("   Text: " + text);
        System.out.println("   Extracted emails:");
        while (emailMatcher.find()) {
            System.out.println("     " + emailMatcher.group());
        }
        
        // Replace email domains
        String replaced = text.replaceAll("@example\\\\.com", "@newcompany.com");
        System.out.println("   After domain replacement:");
        System.out.println("   " + replaced);
        
        // Split text by punctuation
        String sentence = "Hello, world! How are you?";
        String[] words = sentence.split("[,!?\\\\s]+");
        System.out.println("   Splitting: " + sentence);
        System.out.print("   Words: ");
        for (String word : words) {
            if (!word.isEmpty()) {
                System.out.print(word + " ");
            }
        }
        System.out.println();
        
        System.out.println();
    }
    
    private static void demonstrateErrorHandling() {
        System.out.println("🔸 ERROR HANDLING");
        System.out.println("   ──────────────");
        
        try {
            // Invalid regex pattern
            Pattern pattern = Pattern.compile("[");
            System.out.println("   Compiled invalid pattern successfully");
        } catch (PatternSyntaxException e) {
            System.out.println("   Caught PatternSyntaxException: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Basic regex syntax and components                         ║");
        System.out.println("║  • Pattern and Matcher classes usage                         ║");
        System.out.println("║  • Character classes and quantifiers                         ║");
        System.out.println("║  • Common validation patterns                               ║");
        System.out.println("║  • Text processing with regex                                ║");
        System.out.println("║  • Error handling for regex operations                      ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Compile patterns once and reuse them                      ║");
        System.out.println("║  • Use raw strings to avoid escaping backslashes              ║");
        System.out.println("║  • Test patterns thoroughly with edge cases                  n");
        System.out.println("║  • Handle PatternSyntaxException appropriately                n");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
      1) Use Pattern and Matcher to check if a string contains "Java".
      2) Create a regex pattern to match email addresses and test it.
      3) Use regex to find all digits in a string.
    `
  }
};