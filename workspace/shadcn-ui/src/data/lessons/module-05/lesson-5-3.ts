import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_3: LessonContent = {
  title: 'String Formatting and Parsing',
  type: 'coding',
  duration: '30 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Master string formatting with printf and format methods, and learn to parse strings into different data types. This lesson covers industry-standard techniques for creating well-formatted output and extracting meaningful data from text.',
    objectives: [
      'Master printf and String.format for output formatting',
      'Learn format specifiers and their applications',
      'Practice parsing strings into primitive types and objects',
      'Understand locale-specific formatting',
      'Implement custom formatting for complex data structures',
      'Handle parsing exceptions and edge cases'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          String Formatting and Parsing
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Creating beautiful output and extracting data from text</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            String Formatting Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java provides powerful formatting capabilities through printf-style methods and the String.format() method. 
            These tools allow you to create well-structured output with precise control over alignment, padding, and data representation.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Format specifiers follow the pattern: %[argument_index$][flags][width][.precision]conversion</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Format Specifiers Overview
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the components of format specifiers is essential for effective formatting:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Component</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                    <th class="text-left p-3 font-bold border-b">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Argument Index</td>
                    <td class="p-3">Position of argument (1$ for first)</td>
                    <td class="p-3 font-mono">%1$s %2$d</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Flags</td>
                    <td class="p-3">Formatting options (+, -, 0, #, ,)</td>
                    <td class="p-3 font-mono">%-10s %+d</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Width</td>
                    <td class="p-3">Minimum number of characters</td>
                    <td class="p-3 font-mono">%10s %5d</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Precision</td>
                    <td class="p-3">Number of digits after decimal</td>
                    <td class="p-3 font-mono">%.2f</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Conversion</td>
                    <td class="p-3">Type of conversion (s, d, f, etc.)</td>
                    <td class="p-3 font-mono">%s %d %f</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Common Format Specifiers
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-green-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Specifier</th>
                  <th class="text-left p-3 font-bold border-b">Type</th>
                  <th class="text-left p-3 font-bold border-b">Description</th>
                  <th class="text-left p-3 font-bold border-b">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-mono">%s</td>
                  <td class="p-3">String</td>
                  <td class="p-3">String value</td>
                  <td class="p-3 font-mono">String.format("%s", "Hello") → "Hello"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">%d</td>
                  <td class="p-3">Integer</td>
                  <td class="p-3">Decimal integer</td>
                  <td class="p-3 font-mono">String.format("%d", 42) → "42"</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">%f</td>
                  <td class="p-3">Float</td>
                  <td class="p-3">Floating-point number</td>
                  <td class="p-3 font-mono">String.format("%.2f", 3.14159) → "3.14"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">%e</td>
                  <td class="p-3">Scientific</td>
                  <td class="p-3">Scientific notation</td>
                  <td class="p-3 font-mono">String.format("%e", 1234.5) → "1.234500e+03"</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">%t</td>
                  <td class="p-3">Date/Time</td>
                  <td class="p-3">Date/time formatting</td>
                  <td class="p-3 font-mono">String.format("%tD", date) → "01/15/24"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">%c</td>
                  <td class="p-3">Character</td>
                  <td class="p-3">Character value</td>
                  <td class="p-3 font-mono">String.format("%c", 'A') → "A"</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">%b</td>
                  <td class="p-3">Boolean</td>
                  <td class="p-3">Boolean value</td>
                  <td class="p-3 font-mono">String.format("%b", true) → "true"</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">%x</td>
                  <td class="p-3">Hexadecimal</td>
                  <td class="p-3">Hexadecimal integer</td>
                  <td class="p-3 font-mono">String.format("%x", 255) → "ff"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Formatting Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Master advanced formatting with flags, width, and precision controls:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Alignment and Padding</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  // Left-aligned in 10 characters<br/>
                  String.format("%-10s", "Hello")<br/>
                  // Right-aligned in 10 characters<br/>
                  String.format("%10s", "Hello")<br/>
                  // Zero-padded number<br/>
                  String.format("%05d", 42)
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Number Formatting</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  // Two decimal places<br/>
                  String.format("%.2f", 3.14159)<br/>
                  // Comma separator<br/>
                  String.format("%,d", 1000000)<br/>
                  // Always show sign<br/>
                  String.format("%+d", 42)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            String Parsing Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Extracting data from strings is a common requirement in Java applications:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-red-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Integer.parseInt()</td>
                    <td class="p-3">Parse string to integer</td>
                    <td class="p-3 font-mono">Integer.parseInt("123") → 123</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Double.parseDouble()</td>
                    <td class="p-3">Parse string to double</td>
                    <td class="p-3 font-mono">Double.parseDouble("3.14") → 3.14</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Boolean.parseBoolean()</td>
                    <td class="p-3">Parse string to boolean</td>
                    <td class="p-3 font-mono">Boolean.parseBoolean("true") → true</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">String.split()</td>
                    <td class="p-3">Split string into array</td>
                    <td class="p-3 font-mono">"a,b,c".split(",") → ["a","b","c"]</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Scanner</td>
                    <td class="p-3">Parse formatted input</td>
                    <td class="p-3 font-mono">Scanner.next() methods</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Formatting and Parsing</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use String.format() for complex formatting</li>
                <li>• Handle NumberFormatException gracefully</li>
                <li>• Validate input before parsing</li>
                <li>• Use locale-specific formatting for internationalization</li>
                <li>• Consider StringBuilder for multiple formatting operations</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use string concatenation for formatting</li>
                <li>• Don't ignore parsing exceptions</li>
                <li>• Don't hardcode format strings</li>
                <li>• Don't forget to specify radix for parseInt() when needed</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * StringFormattingParsingDemo.java
 * 
 * This comprehensive example demonstrates string formatting and parsing in Java:
 * - printf and String.format methods with various specifiers
 * - Advanced formatting techniques with flags and precision
 * - String parsing into different data types
 * - Error handling for parsing operations
 * - Locale-specific formatting
 * 
 * Run this program to see how formatting and parsing work in practice.
 */

import java.util.Locale;
import java.util.Scanner;
import java.text.NumberFormat;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class StringFormattingParsingDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic formatting
        demonstrateBasicFormatting();
        
        // Demonstrate advanced formatting
        demonstrateAdvancedFormatting();
        
        // Demonstrate string parsing
        demonstrateStringParsing();
        
        // Demonstrate error handling
        demonstrateErrorHandling();
        
        // Demonstrate locale-specific formatting
        demonstrateLocaleFormatting();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         STRING FORMATTING & PARSING DEMO                     ║");
        System.out.println("║         Creating Beautiful Output & Extracting Data          ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicFormatting() {
        System.out.println("🔸 BASIC FORMATTING DEMONSTRATION");
        System.out.println("   ──────────────────────────────");
        
        String name = "Alice";
        int age = 30;
        double salary = 75000.50;
        boolean isEmployed = true;
        
        // Basic formatting
        System.out.println("   Basic formatting:");
        System.out.printf("   Name: %s, Age: %d, Salary: $%.2f, Employed: %b%n", 
                         name, age, salary, isEmployed);
        
        // Using String.format()
        String formatted = String.format("   Formatted string: %s is %d years old", name, age);
        System.out.println(formatted);
        
        System.out.println();
    }
    
    private static void demonstrateAdvancedFormatting() {
        System.out.println("🔸 ADVANCED FORMATTING TECHNIQUES");
        System.out.println("   ──────────────────────────────");
        
        // Alignment and padding
        System.out.println("   Alignment and padding:");
        System.out.printf("   Left-aligned:  [%-10s]%n", "Hello");
        System.out.printf("   Right-aligned: [%10s]%n", "Hello");
        System.out.printf("   Zero-padded:   [%05d]%n", 42);
        System.out.printf("   Space-padded:  [%5d]%n", 42);
        
        // Number formatting
        System.out.println("   Number formatting:");
        System.out.printf("   With commas:   %,d%n", 1000000);
        System.out.printf("   With sign:     %+d%n", 42);
        System.out.printf("   Negative:      %+d%n", -42);
        System.out.printf("   Two decimals:  %.2f%n", 3.14159);
        System.out.printf("   Scientific:    %e%n", 1234.5);
        
        // Date/time formatting
        System.out.println("   Date/time formatting:");
        LocalDateTime now = LocalDateTime.now();
        System.out.printf("   Full date:     %tF%n", now);
        System.out.printf("   Short date:    %tD%n", now);
        System.out.printf("   Time:          %tT%n", now);
        System.out.printf("   Custom:        %1$tm/%1$td/%1$ty%n", now);
        
        System.out.println();
    }
    
    private static void demonstrateStringParsing() {
        System.out.println("🔸 STRING PARSING DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        // Parsing numbers
        System.out.println("   Parsing numbers:");
        try {
            int intValue = Integer.parseInt("123");
            System.out.println("   Parsed integer: " + intValue);
            
            double doubleValue = Double.parseDouble("3.14");
            System.out.println("   Parsed double: " + doubleValue);
            
            boolean boolValue = Boolean.parseBoolean("true");
            System.out.println("   Parsed boolean: " + boolValue);
        } catch (NumberFormatException e) {
            System.out.println("   Parsing error: " + e.getMessage());
        }
        
        // Splitting strings
        System.out.println("   Splitting strings:");
        String data = "John,25,Engineer,50000";
        String[] parts = data.split(",");
        System.out.println("   Split result:");
        for (int i = 0; i < parts.length; i++) {
            System.out.println("     [" + i + "] " + parts[i]);
        }
        
        // Using Scanner for parsing
        System.out.println("   Using Scanner:");
        String input = "Alice 30 75000.50 true";
        Scanner scanner = new Scanner(input);
        String parsedName = scanner.next();
        int parsedAge = scanner.nextInt();
        double parsedSalary = scanner.nextDouble();
        boolean parsedEmployed = scanner.nextBoolean();
        System.out.printf("   Parsed with Scanner: %s, %d, %.2f, %b%n", 
                         parsedName, parsedAge, parsedSalary, parsedEmployed);
        scanner.close();
        
        System.out.println();
    }
    
    private static void demonstrateErrorHandling() {
        System.out.println("🔸 ERROR HANDLING IN PARSING");
        System.out.println("   ─────────────────────────");
        
        // Handling invalid input
        System.out.println("   Handling invalid input:");
        String[] testInputs = {"123", "abc", "45.67", "true", "false", "invalid"};
        
        for (String input : testInputs) {
            System.out.print("   Input: " + input + " → ");
            
            // Try parsing as integer
            try {
                int result = Integer.parseInt(input);
                System.out.println("Integer: " + result);
            } catch (NumberFormatException e) {
                System.out.print("Not an integer. ");
                
                // Try parsing as double
                try {
                    double result = Double.parseDouble(input);
                    System.out.println("Double: " + result);
                } catch (NumberFormatException e2) {
                    System.out.print("Not a double. ");
                    
                    // Try parsing as boolean
                    boolean result = Boolean.parseBoolean(input);
                    System.out.println("Boolean: " + result);
                }
            }
        }
        
        System.out.println();
    }
    
    private static void demonstrateLocaleFormatting() {
        System.out.println("🔸 LOCALE-SPECIFIC FORMATTING");
        System.out.println("   ───────────────────────────");
        
        double amount = 1234567.89;
        int number = 1234567;
        
        // US locale
        System.out.println("   US Locale:");
        System.out.printf("   Currency: %s%n", 
                         NumberFormat.getCurrencyInstance(Locale.US).format(amount));
        System.out.printf("   Number:   %s%n", 
                         NumberFormat.getNumberInstance(Locale.US).format(number));
        
        // German locale
        System.out.println("   German Locale:");
        System.out.printf("   Currency: %s%n", 
                         NumberFormat.getCurrencyInstance(Locale.GERMANY).format(amount));
        System.out.printf("   Number:   %s%n", 
                         NumberFormat.getNumberInstance(Locale.GERMANY).format(number));
        
        // French locale
        System.out.println("   French Locale:");
        System.out.printf("   Currency: %s%n", 
                         NumberFormat.getCurrencyInstance(Locale.FRANCE).format(amount));
        System.out.printf("   Number:   %s%n", 
                         NumberFormat.getNumberInstance(Locale.FRANCE).format(number));
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • printf and String.format methods                          ║");
        System.out.println("║  • Format specifiers and their components                    ║");
        System.out.println("║  • Advanced formatting techniques                            ║");
        System.out.println("║  • String parsing into different data types                  ║");
        System.out.println("║  • Error handling for parsing operations                     ║");
        System.out.println("║  • Locale-specific formatting                                ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use String.format() for complex formatting                ║");
        System.out.println("║  • Handle NumberFormatException gracefully                   ║");
        System.out.println("║  • Validate input before parsing                             ║");
        System.out.println("║  • Use locale-specific formatting for internationalization   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         STRING FORMATTING & PARSING DEMO                     ║
 * ║         Creating Beautiful Output & Extracting Data          ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 BASIC FORMATTING DEMONSTRATION
 *    ──────────────────────────────
 *    Basic formatting:
 *    Name: Alice, Age: 30, Salary: $75000.50, Employed: true
 *    Formatted string: Alice is 30 years old
 * 
 * 🔸 ADVANCED FORMATTING TECHNIQUES
 *    ──────────────────────────────
 *    Alignment and padding:
 *    Left-aligned:  [Hello     ]
 *    Right-aligned: [     Hello]
 *    Zero-padded:   [00042]
 *    Space-padded:  [   42]
 *    Number formatting:
 *    With commas:   1,000,000
 *    With sign:     +42
 *    Negative:      -42
 *    Two decimals:  3.14
 *    Scientific:    1.234500e+03
 *    Date/time formatting:
 *    Full date:     2024-01-15
 *    Short date:    01/15/24
 *    Time:          14:30:25
 *    Custom:        01/15/24
 * 
 * 🔸 STRING PARSING DEMONSTRATION
 *    ────────────────────────────
 *    Parsing numbers:
 *    Parsed integer: 123
 *    Parsed double: 3.14
 *    Parsed boolean: true
 *    Splitting strings:
 *    Split result:
 *      [0] John
 *      [1] 25
 *      [2] Engineer
 *      [3] 50000
 *    Using Scanner:
 *    Parsed with Scanner: Alice, 30, 75000.50, true
 * 
 * 🔸 ERROR HANDLING IN PARSING
 *    ─────────────────────────
 *    Handling invalid input:
 *    Input: 123 → Integer: 123
 *    Input: abc → Not an integer. Not a double. Boolean: false
 *    Input: 45.67 → Not an integer. Double: 45.67
 *    Input: true → Not an integer. Not a double. Boolean: true
 *    Input: false → Not an integer. Not a double. Boolean: false
 *    Input: invalid → Not an integer. Not a double. Boolean: false
 * 
 * 🔸 LOCALE-SPECIFIC FORMATTING
 *    ───────────────────────────
 *    US Locale:
 *    Currency: $1,234,567.89
 *    Number:   1,234,567
 *    German Locale:
 *    Currency: 1.234.567,89 €
 *    Number:   1.234.567
 *    French Locale:
 *    Currency: 1 234 567,89 €
 *    Number:   1 234 567
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 String Formatting and Parsing Practice Exercise**

      Create comprehensive programs to practice string formatting and parsing techniques.

      **Part 1: Report Generator**
      
      Create a program called \`ReportGenerator.java\` that generates formatted reports:
      
      Requirements:
      - Generate sales reports with proper formatting
      - Create financial statements with currency formatting
      - Implement tabular data presentation
      - Support different report formats (text, CSV, HTML)
      
      Features to implement:
      - Header and footer formatting
      - Column alignment and spacing
      - Currency and percentage formatting
      - Page numbering and section breaks

      **Part 2: Data Parser**
      
      Create a program called \`DataParser.java\` that parses various data formats:
      
      Requirements:
      - Parse CSV files with proper handling of quotes and commas
      - Extract data from fixed-width text files
      - Parse JSON-like strings without using JSON libraries
      - Handle different number formats and locales
      
      Advanced Features:
      - Error recovery for malformed data
      - Data validation and sanitization
      - Support for different encodings
      - Batch processing with progress reporting

      **Part 3: Configuration Manager**
      
      Create a program called \`ConfigManager.java\` that handles configuration files:
      
      Requirements:
      - Parse configuration files with key-value pairs
      - Support different data types (string, int, double, boolean)
      - Handle comments and whitespace
      - Generate formatted configuration files
      
      Features to implement:
      - Default value handling
      - Type conversion with validation
      - Nested configuration sections
      - Export to different formats

      **Part 4: Log Analyzer**
      
      Create a program called \`LogAnalyzer.java\` that processes log files:
      
      Requirements:
      - Parse different log formats (Apache, Nginx, custom)
      - Extract timestamps, IP addresses, and status codes
      - Generate summary statistics and reports
      - Handle large log files efficiently
      
      Advanced Features:
      - Pattern-based parsing with regular expressions
      - Real-time log monitoring
      - Filter and search capabilities
      - Export analysis results

      **Part 5: International Formatter**
      
      Create a program called \`InternationalFormatter.java\` that handles locale-specific formatting:
      
      Requirements:
      - Format numbers, currency, and dates for different locales
      - Parse input according to locale conventions
      - Handle timezone conversions
      - Support custom locale configurations
      
      Features to implement:
      - Locale detection from system settings
      - User preference management
      - Custom format pattern support
      - Comprehensive error handling

      **Deliverables:**
      Submit the following files:
      1. \`ReportGenerator.java\` - Formatted report generation program
      2. \`DataParser.java\` - Multi-format data parsing program
      3. \`ConfigManager.java\` - Configuration file handler
      4. \`LogAnalyzer.java\` - Log file processing program
      5. \`InternationalFormatter.java\` - Locale-specific formatting program
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of string formatting techniques
      - ✅ Robust parsing with proper error handling
      - ✅ Locale-specific formatting and parsing
      - ✅ Efficient processing of large data sets
      - ✅ Clean, readable code with appropriate comments
      - ✅ Industry-standard formatting practices
      - ✅ Comprehensive error handling and validation

      **💡 Bonus Challenges:**
      
      1. Performance Optimization: Implement efficient parsing algorithms
      2. Custom Formats: Create domain-specific formatting solutions
      3. Validation Framework: Design comprehensive input validation
      4. Streaming Processing: Handle continuous data streams
      5. Extensibility: Design programs to easily add new formats
    `
  }
};