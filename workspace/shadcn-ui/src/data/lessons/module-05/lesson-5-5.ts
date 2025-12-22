import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_5: LessonContent = {
  title: 'Advanced Regular Expressions',
  type: 'coding',
  duration: '35 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Dive deep into advanced regular expression features including capturing groups, backreferences, lookahead/lookbehind assertions, and embedded flags. This lesson covers complex pattern matching techniques and performance optimization strategies.',
    objectives: [
      'Master capturing groups and backreferences',
      'Learn lookahead and lookbehind assertions',
      'Understand embedded flags and their applications',
      'Practice complex pattern matching scenarios',
      'Implement efficient regex solutions for real-world problems',
      'Optimize regex performance and avoid common pitfalls'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Advanced Regular Expressions
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Complex pattern matching and optimization techniques</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Capturing Groups and Backreferences
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Capturing groups allow you to extract specific parts of a match and reference them later using backreferences. 
            This powerful feature enables complex text manipulation and validation scenarios.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Parentheses create capturing groups, and \\1, \\2, etc. reference them in the same pattern or replacement string.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Group Types and Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding different group types is essential for advanced regex:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Group Type</th>
                    <th class="text-left p-3 font-bold border-b">Syntax</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Capturing Group</td>
                    <td class="p-3 font-mono">(...)</td>
                    <td class="p-3">Creates a numbered group for backreference</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Non-capturing Group</td>
                    <td class="p-3 font-mono">(?:...)</td>
                    <td class="p-3">Groups without creating backreference</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Named Group</td>
                    <td class="p-3 font-mono">(?<name>...)</td>
                    <td class="p-3">Creates a named group for reference</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Atomic Group</td>
                    <td class="p-3 font-mono">(?>...)</td>
                    <td class="p-3">Non-backtracking group (advanced)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Lookahead and Lookbehind Assertions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">These zero-width assertions allow you to match patterns based on what comes before or after:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-green-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Assertion</th>
                    <th class="text-left p-3 font-bold border-b">Syntax</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Positive Lookahead</td>
                    <td class="p-3 font-mono">(?=...)</td>
                    <td class="p-3">Matches if followed by pattern</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Negative Lookahead</td>
                    <td class="p-3 font-mono">(?!...)</td>
                    <td class="p-3">Matches if NOT followed by pattern</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Positive Lookbehind</td>
                    <td class="p-3 font-mono">(?<=...)</td>
                    <td class="p-3">Matches if preceded by pattern</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Negative Lookbehind</td>
                    <td class="p-3 font-mono">(?<!...)</td>
                    <td class="p-3">Matches if NOT preceded by pattern</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Example: Password Validation</h4>
                <p class="text-green-700">Ensure password has at least one digit, one lowercase, one uppercase:</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d).{8,}$
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Example: Word Boundaries</h4>
                <p class="text-blue-700">Match "cat" only when not part of another word:</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  \\\\bcat\\\\b
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Embedded Flags
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Flags can be embedded directly in regex patterns for localized control:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-orange-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Flag</th>
                    <th class="text-left p-3 font-bold border-b">Syntax</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Case Insensitive</td>
                    <td class="p-3 font-mono">(?i)</td>
                    <td class="p-3">Case-insensitive matching</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Multiline</td>
                    <td class="p-3 font-mono">(?m)</td>
                    <td class="p-3">^ and $ match line boundaries</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Dotall</td>
                    <td class="p-3 font-mono">(?s)</td>
                    <td class="p-3">. matches newline characters</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Comments</td>
                    <td class="p-3 font-mono">(?x)</td>
                    <td class="p-3">Allow whitespace and comments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example: Commented Regex</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                (?x)              # Enable comments<br/>
                \\\\b             # Word boundary<br/>
                (\\\\w+)          # Capture word<br/>
                \\\\s+            # Whitespace<br/>
                (\\\\w+)          # Capture another word<br/>
                \\\\b             # Word boundary
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Advanced Pattern Matching Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Complex scenarios require sophisticated regex techniques:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Balanced Parentheses</h4>
                <p class="text-red-700">Match nested structures (simplified example):</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  \\\\(\\\\s*[^()]*+(?:(?:\\\\([^()]*+\\\\)|[^()]*+)*+\\\\s*\\\\)
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">HTML Tag Matching</h4>
                <p class="text-blue-700">Match opening and closing tags:</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  <(\\\\w+)>(.*?)<\\\\/\\\\1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Advanced Regex</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use non-capturing groups when backreferences aren't needed</li>
                <li>• Leverage lookahead/lookbehind for complex conditions</li>
                <li>• Use named groups for better readability</li>
                <li>• Test patterns with edge cases thoroughly</li>
                <li>• Document complex regex with comments</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use regex for parsing HTML/XML (use proper parsers)</li>
                <li>• Don't create overly complex patterns that are hard to maintain</li>
                <li>• Don't forget to escape special characters when needed</li>
                <li>• Don't use regex for performance-critical operations without testing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * AdvancedRegexDemo.java
 * 
 * This comprehensive example demonstrates advanced regular expressions in Java:
 * - Capturing groups and backreferences
 * - Lookahead and lookbehind assertions
 * - Named groups and non-capturing groups
 * - Embedded flags and their applications
 * - Complex pattern matching scenarios
 * 
 * Run this program to see advanced regex techniques in practice.
 */

import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.regex.PatternSyntaxException;

public class AdvancedRegexDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate capturing groups and backreferences
        demonstrateCapturingGroups();
        
        // Demonstrate lookahead and lookbehind
        demonstrateLookaroundAssertions();
        
        // Demonstrate named groups
        demonstrateNamedGroups();
        
        // Demonstrate embedded flags
        demonstrateEmbeddedFlags();
        
        // Demonstrate complex patterns
        demonstrateComplexPatterns();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              ADVANCED REGEX DEMO                             ║");
        System.out.println("║         Complex Pattern Matching Techniques                  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateCapturingGroups() {
        System.out.println("🔸 CAPTURING GROUPS AND BACKREFERENCES");
        System.out.println("   ───────────────────────────────────");
        
        // Basic capturing groups
        String text = "John Smith, Jane Doe, Bob Johnson";
        Pattern pattern = Pattern.compile("(\\\\w+)\\\\s+(\\\\w+)");
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("   Text: " + text);
        System.out.println("   Pattern: (\\\\w+)\\\\s+(\\\\w+)");
        System.out.println("   Captured groups:");
        while (matcher.find()) {
            System.out.println("     Group 0 (full match): " + matcher.group(0));
            System.out.println("     Group 1 (first name): " + matcher.group(1));
            System.out.println("     Group 2 (last name): " + matcher.group(2));
            System.out.println();
        }
        
        // Backreferences in replacement
        String html = "<b>Bold</b> and <i>Italic</i>";
        String converted = html.replaceAll("<(\\\\w+)>(.*?)</\\\\1>", "[$1]$2[/$1]");
        System.out.println("   HTML conversion:");
        System.out.println("   Original: " + html);
        System.out.println("   Converted: " + converted);
        
        System.out.println();
    }
    
    private static void demonstrateLookaroundAssertions() {
        System.out.println("🔸 LOOKAROUND ASSERTIONS");
        System.out.println("   ─────────────────────");
        
        // Positive lookahead - match word followed by specific pattern
        String text = "cat catalog catch category";
        Pattern lookaheadPattern = Pattern.compile("\\\\b\\\\w+(?=alog\\\\b)");
        Matcher lookaheadMatcher = lookaheadPattern.matcher(text);
        
        System.out.println("   Text: " + text);
        System.out.println("   Positive lookahead (words followed by 'alog'):");
        while (lookaheadMatcher.find()) {
            System.out.println("     Found: " + lookaheadMatcher.group());
        }
        
        // Negative lookahead - match word NOT followed by specific pattern
        Pattern negLookaheadPattern = Pattern.compile("\\\\b\\\\w{4}(?!\\\\w)");
        Matcher negLookaheadMatcher = negLookaheadPattern.matcher(text);
        
        System.out.println("   Negative lookahead (4-letter words not followed by more letters):");
        while (negLookaheadMatcher.find()) {
            System.out.println("     Found: " + negLookaheadMatcher.group());
        }
        
        // Positive lookbehind - match word preceded by specific pattern
        String text2 = "prefix_value suffix_value standalone";
        Pattern lookbehindPattern = Pattern.compile("(?<=prefix_)\\\\w+");
        Matcher lookbehindMatcher = lookbehindPattern.matcher(text2);
        
        System.out.println("   Positive lookbehind (words preceded by 'prefix_'):");
        while (lookbehindMatcher.find()) {
            System.out.println("     Found: " + lookbehindMatcher.group());
        }
        
        System.out.println();
    }
    
    private static void demonstrateNamedGroups() {
        System.out.println("🔸 NAMED GROUPS");
        System.out.println("   ────────────");
        
        // Named groups for better readability
        String text = "Date: 2024-01-15, Time: 14:30:25";
        Pattern namedPattern = Pattern.compile(
            "Date: (?<year>\\\\d{4})-(?<month>\\\\d{2})-(?<day>\\\\d{2}), " +
            "Time: (?<hour>\\\\d{2}):(?<minute>\\\\d{2}):(?<second>\\\\d{2})"
        );
        Matcher namedMatcher = namedPattern.matcher(text);
        
        System.out.println("   Text: " + text);
        System.out.println("   Named groups pattern:");
        if (namedMatcher.find()) {
            System.out.println("     Year: " + namedMatcher.group("year"));
            System.out.println("     Month: " + namedMatcher.group("month"));
            System.out.println("     Day: " + namedMatcher.group("day"));
            System.out.println("     Hour: " + namedMatcher.group("hour"));
            System.out.println("     Minute: " + namedMatcher.group("minute"));
            System.out.println("     Second: " + namedMatcher.group("second"));
        }
        
        System.out.println();
    }
    
    private static void demonstrateEmbeddedFlags() {
        System.out.println("🔸 EMBEDDED FLAGS");
        System.out.println("   ──────────────");
        
        // Case-insensitive matching with embedded flag
        String text = "Java Programming JAVA Development";
        Pattern caseInsensitivePattern = Pattern.compile("(?i)java");
        Matcher caseInsensitiveMatcher = caseInsensitivePattern.matcher(text);
        
        System.out.println("   Text: " + text);
        System.out.println("   Case-insensitive pattern (?i)java:");
        while (caseInsensitiveMatcher.find()) {
            System.out.println("     Found: " + caseInsensitiveMatcher.group() + 
                             " at position " + caseInsensitiveMatcher.start());
        }
        
        // Multiline matching
        String multilineText = "Line 1\\nLine 2\\nLine 3";
        Pattern multilinePattern = Pattern.compile("(?m)^Line\\\\s+(\\\\d+)$");
        Matcher multilineMatcher = multilinePattern.matcher(multilineText);
        
        System.out.println("   Multiline pattern (?m)^Line\\\\s+(\\\\d+)$:");
        while (multilineMatcher.find()) {
            System.out.println("     Line number: " + multilineMatcher.group(1));
        }
        
        System.out.println();
    }
    
    private static void demonstrateComplexPatterns() {
        System.out.println("🔸 COMPLEX PATTERNS");
        System.out.println("   ────────────────");
        
        // Password validation with lookahead assertions
        String[] passwords = {"password", "Password123", "Pass123!", "StrongPass!2024"};
        Pattern passwordPattern = Pattern.compile(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[!@#$%^&*]).{8,}$"
        );
        
        System.out.println("   Password validation (at least 8 chars, upper, lower, digit, special):");
        for (String password : passwords) {
            Matcher matcher = passwordPattern.matcher(password);
            System.out.println("     " + password + " → " + 
                             (matcher.matches() ? "Valid" : "Invalid"));
        }
        
        // Email with name extraction
        String emailText = "Contact John Doe at john.doe@example.com or Jane Smith at jane@example.org";
        Pattern emailPattern = Pattern.compile(
            "(?<name>\\\\b[A-Z][a-z]+\\\\s+[A-Z][a-z]+)\\\\s+at\\\\s+(?<email>[\\\\w.-]+@[\\\\w.-]+\\\\.[\\\\w]+)"
        );
        Matcher emailMatcher = emailPattern.matcher(emailText);
        
        System.out.println("   Email with name extraction:");
        System.out.println("   Text: " + emailText);
        while (emailMatcher.find()) {
            System.out.println("     Name: " + emailMatcher.group("name"));
            System.out.println("     Email: " + emailMatcher.group("email"));
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Capturing groups and backreferences                       ║");
        System.out.println("║  • Lookahead and lookbehind assertions                       ║");
        System.out.println("║  • Named groups and non-capturing groups                     ║");
        System.out.println("║  • Embedded flags and their applications                     ║");
        System.out.println("║  • Complex pattern matching scenarios                        ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use non-capturing groups when backreferences aren't needed ║");
        System.out.println("║  • Leverage lookahead/lookbehind for complex conditions      ║");
        System.out.println("║  • Use named groups for better readability                   ║");
        System.out.println("║  • Test patterns with edge cases thoroughly                  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
      1) Use capturing groups to extract first and last names from "John Smith".
      2) Create a regex with positive lookahead to find words followed by a number.
      3) Use named groups to extract date components from "2024-01-15".
    `
  }
};