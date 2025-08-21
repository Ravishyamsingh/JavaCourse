import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_3: LessonContent = {
  title: 'For Loops',
  type: 'coding',
  duration: '25 min',
  module: 'Control Structures',
  content: {
    overview: 'Master repetitive tasks with for loops in Java. This lesson covers traditional for loops, enhanced for-each loops, and nested loops for complex iterations. You\'ll learn loop control, optimization techniques, and best practices for writing efficient, readable loop code. Understanding loops is essential for processing collections, implementing algorithms, and automating repetitive operations.',
    objectives: [
      'Master the syntax and structure of traditional for loops',
      'Learn to use enhanced for-each loops with arrays and collections',
      'Understand loop control with break and continue statements',
      'Practice writing nested loops for complex iterations',
      'Learn loop optimization techniques and performance considerations',
      'Understand infinite loops and how to avoid them',
      'Practice debugging and tracing loop execution'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          For Loops in Java
        </h1>
        <p class="mt-3 text-green-100 text-lg">Repeating actions efficiently with controlled iteration</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to For Loops
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            For loops provide a concise way to execute code repeatedly for a specific number of iterations. 
            They're particularly useful when you know in advance how many times you want to repeat an action, 
            making them ideal for processing arrays, collections, and implementing counting algorithms.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">For loops consist of three parts: initialization, condition, and increment/decrement, all defined in the loop header.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Traditional For Loop Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The traditional for loop has three components in its header: initialization, condition, and update.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (initialization; condition; update) &#123;<br/>
                &nbsp;&nbsp;// code to execute repeatedly<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 0; i < 5; i++) &#123;<br/>
                &nbsp;&nbsp;System.out.println("Iteration: " + i);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Enhanced For-Each Loop
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The enhanced for loop (for-each) simplifies iteration over arrays and collections without managing an index.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (type element : arrayOrCollection) &#123;<br/>
                &nbsp;&nbsp;// code to execute for each element<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int[] numbers = &#123;1, 2, 3, 4, 5&#125;;<br/>
                for (int num : numbers) &#123;<br/>
                &nbsp;&nbsp;System.out.println("Number: " + num);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Nested For Loops
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">For loops can be nested inside other for loops to handle multi-dimensional data structures or complex iterations.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example - Multiplication Table:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;for (int j = 1; j <= 10; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i * j + "\t");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;System.out.println();<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Loop Control Statements
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">Break Statement</h4>
              <p class="text-red-700 mb-2">Immediately exits the loop when encountered.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int i = 0; i < 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i == 5) break;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-3">Continue Statement</h4>
              <p class="text-yellow-700 mb-2">Skips the rest of the current iteration and moves to the next.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int i = 0; i < 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i % 2 == 0) continue;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Common Loop Patterns
          </h2>
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Counting Loops</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Count from 1 to 10<br/>
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Counting Down</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Count from 10 down to 1<br/>
                for (int i = 10; i >= 1; i--) &#123;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Skipping Values</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Print even numbers from 0 to 20<br/>
                for (int i = 0; i <= 20; i += 2) &#123;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for For Loops</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use meaningful variable names for loop counters</li>
                <li>• Keep loop bodies simple and focused</li>
                <li>• Use enhanced for-each loops when possible</li>
                <li>• Initialize loop variables close to their usage</li>
                <li>• Avoid modifying loop control variables inside the loop</li>
                <li>• Use braces even for single-statement loops</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't create infinite loops accidentally</li>
                <li>• Don't use magic numbers in loop conditions</li>
                <li>• Don't duplicate loop logic unnecessarily</li>
                <li>• Don't make loop conditions overly complex</li>
                <li>• Don't forget to update loop control variables</li>
                <li>• Don't use for loops when while loops are more appropriate</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ForLoopsDemo.java
 * 
 * This comprehensive example demonstrates various for loop features in Java:
 * - Traditional for loops with different patterns
 * - Enhanced for-each loops with arrays and collections
 * - Nested loops for multi-dimensional processing
 * - Loop control with break and continue statements
 * - Common loop patterns and best practices
 * - Performance considerations and optimization techniques
 * 
 * Run this program to see how different for loop structures work in practice.
 */

import java.util.ArrayList;
import java.util.List;

public class ForLoopsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate traditional for loops
        demonstrateTraditionalForLoops();
        
        // Demonstrate enhanced for-each loops
        demonstrateEnhancedForLoops();
        
        // Demonstrate nested loops
        demonstrateNestedLoops();
        
        // Demonstrate loop control statements
        demonstrateLoopControl();
        
        // Demonstrate common loop patterns
        demonstrateLoopPatterns();
        
        // Demonstrate performance considerations
        demonstratePerformance();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                     FOR LOOPS DEMO                           ║");
        System.out.println("║         Repeating actions efficiently with loops             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateTraditionalForLoops() {
        System.out.println("🔸 TRADITIONAL FOR LOOPS");
        System.out.println("   ─────────────────────");
        
        // Basic counting loop
        System.out.println("   Counting from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("   Iteration " + i);
        }
        
        // Loop with different increment
        System.out.println("\n   Counting by 2s from 0 to 10:");
        for (int i = 0; i <= 10; i += 2) {
            System.out.println("   Number: " + i);
        }
        
        // Counting down
        System.out.println("\n   Countdown from 5 to 1:");
        for (int i = 5; i >= 1; i--) {
            System.out.println("   T-minus " + i);
        }
        
        System.out.println();
    }
    
    private static void demonstrateEnhancedForLoops() {
        System.out.println("🔸 ENHANCED FOR-EACH LOOPS");
        System.out.println("   ───────────────────────");
        
        // With arrays
        System.out.println("   Processing array elements:");
        String[] fruits = {"Apple", "Banana", "Orange", "Mango", "Grapes"};
        for (String fruit : fruits) {
            System.out.println("   Fruit: " + fruit);
        }
        
        // With collections
        System.out.println("\n   Processing list elements:");
        List<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        
        int sum = 0;
        for (int number : numbers) {
            System.out.println("   Number: " + number);
            sum += number;
        }
        System.out.println("   Sum of numbers: " + sum);
        
        System.out.println();
    }
    
    private static void demonstrateNestedLoops() {
        System.out.println("🔸 NESTED LOOPS");
        System.out.println("   ────────────");
        
        // Multiplication table
        System.out.println("   5x5 Multiplication Table:");
        System.out.print("     ");
        for (int i = 1; i <= 5; i++) {
            System.out.printf("%4d", i);
        }
        System.out.println();
        
        for (int i = 1; i <= 5; i++) {
            System.out.printf("%2d |", i);
            for (int j = 1; j <= 5; j++) {
                System.out.printf("%4d", i * j);
            }
            System.out.println();
        }
        
        // Pattern printing
        System.out.println("\n   Triangle pattern:");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        
        System.out.println();
    }
    
    private static void demonstrateLoopControl() {
        System.out.println("🔸 LOOP CONTROL STATEMENTS");
        System.out.println("   ───────────────────────");
        
        // Break statement
        System.out.println("   Using break to exit loop at 5:");
        for (int i = 1; i <= 10; i++) {
            if (i == 6) {
                System.out.println("   Breaking at " + i);
                break;
            }
            System.out.println("   Count: " + i);
        }
        
        // Continue statement
        System.out.println("\n   Using continue to skip even numbers:");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.println("   Skipping " + i);
                continue;
            }
            System.out.println("   Odd number: " + i);
        }
        
        System.out.println();
    }
    
    private static void demonstrateLoopPatterns() {
        System.out.println("🔸 COMMON LOOP PATTERNS");
        System.out.println("   ────────────────────");
        
        // Sum of numbers
        System.out.println("   Calculating sum of numbers 1 to 10:");
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
            System.out.println("   Added " + i + ", running sum: " + sum);
        }
        System.out.println("   Final sum: " + sum);
        
        // Finding maximum value
        System.out.println("\n   Finding maximum in array:");
        int[] values = {3, 7, 2, 9, 1, 8, 4};
        int max = values[0];
        System.out.print("   Array: ");
        for (int value : values) {
            System.out.print(value + " ");
        }
        System.out.println();
        
        for (int i = 1; i < values.length; i++) {
            if (values[i] > max) {
                max = values[i];
                System.out.println("   New maximum found: " + max);
            }
        }
        System.out.println("   Maximum value: " + max);
        
        System.out.println();
    }
    
    private static void demonstratePerformance() {
        System.out.println("🔸 PERFORMANCE CONSIDERATIONS");
        System.out.println("   ─────────────────────────");
        
        // Efficient loop - calculate outside loop
        System.out.println("   Efficient loop (calculation outside):");
        int[] data = {1, 2, 3, 4, 5};
        int length = data.length; // Calculate once
        for (int i = 0; i < length; i++) {
            System.out.println("   Element " + i + ": " + data[i]);
        }
        
        // Less efficient - recalculating length each time
        System.out.println("\n   Less efficient (recalculating length):");
        for (int i = 0; i < data.length; i++) { // data.length called each iteration
            System.out.println("   Element " + i + ": " + data[i]);
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Traditional for loops with initialization, condition, update ║");
        System.out.println("║  • Enhanced for-each loops for arrays and collections        ║");
        System.out.println("║  • Nested loops for multi-dimensional processing             ║");
        System.out.println("║  • Loop control with break and continue statements           ║");
        System.out.println("║  • Common loop patterns for various tasks                    ║");
        System.out.println("║  • Performance considerations and optimization techniques    ║");
        System.out.println("║  • Best practices for writing clean, efficient loops         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use meaningful variable names for loop counters           ║");
        System.out.println("║  • Choose enhanced for-each loops when possible              ║");
        System.out.println("║  • Keep loop bodies simple and focused                       ║");
        System.out.println("║  • Avoid infinite loops and off-by-one errors                ║");
        System.out.println("║  • Consider performance implications of loop operations      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                     FOR LOOPS DEMO                           ║
 * ║         Repeating actions efficiently with loops             ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 TRADITIONAL FOR LOOPS
 *    ─────────────────────
 *    Counting from 1 to 5:
 *    Iteration 1
 *    Iteration 2
 *    Iteration 3
 *    Iteration 4
 *    Iteration 5
 * 
 *    Counting by 2s from 0 to 10:
 *    Number: 0
 *    Number: 2
 *    Number: 4
 *    Number: 6
 *    Number: 8
 *    Number: 10
 * 
 *    Countdown from 5 to 1:
 *    T-minus 5
 *    T-minus 4
 *    T-minus 3
 *    T-minus 2
 *    T-minus 1
 * 
 * 🔸 ENHANCED FOR-EACH LOOPS
 *    ───────────────────────
 *    Processing array elements:
 *    Fruit: Apple
 *    Fruit: Banana
 *    Fruit: Orange
 *    Fruit: Mango
 *    Fruit: Grapes
 * 
 *    Processing list elements:
 *    Number: 10
 *    Number: 20
 *    Number: 30
 *    Number: 40
 *    Number: 50
 *    Sum of numbers: 150
 * 
 * 🔸 NESTED LOOPS
 *    ────────────
 *    5x5 Multiplication Table:
 *         1   2   3   4   5
 *     1 |   1   2   3   4   5
 *     2 |   2   4   6   8  10
 *     3 |   3   6   9  12  15
 *     4 |   4   8  12  16  20
 *     5 |   5  10  15  20  25
 * 
 *    Triangle pattern:
 *    * 
 *    * * 
 *    * * * 
 *    * * * * 
 *    * * * * * 
 * 
 * 🔸 LOOP CONTROL STATEMENTS
 *    ───────────────────────
 *    Using break to exit loop at 5:
 *    Count: 1
 *    Count: 2
 *    Count: 3
 *    Count: 4
 *    Count: 5
 *    Breaking at 6
 * 
 *    Using continue to skip even numbers:
 *    Skipping 2
 *    Odd number: 1
 *    Odd number: 3
 *    Skipping 4
 *    Odd number: 5
 *    Skipping 6
 *    Odd number: 7
 *    Skipping 8
 *    Odd number: 9
 *    Skipping 10
 *    Odd number: 11
 * 
 * 🔸 COMMON LOOP PATTERNS
 *    ────────────────────
 *    Calculating sum of numbers 1 to 10:
 *    Added 1, running sum: 1
 *    Added 2, running sum: 3
 *    Added 3, running sum: 6
 *    Added 4, running sum: 10
 *    Added 5, running sum: 15
 *    Added 6, running sum: 21
 *    Added 7, running sum: 28
 *    Added 8, running sum: 36
 *    Added 9, running sum: 45
 *    Added 10, running sum: 55
 *    Final sum: 55
 * 
 *    Finding maximum in array:
 *    Array: 3 7 2 9 1 8 4 
 *    New maximum found: 7
 *    New maximum found: 9
 *    Maximum value: 9
 * 
 * 🔸 PERFORMANCE CONSIDERATIONS
 *    ─────────────────────────
 *    Efficient loop (calculation outside):
 *    Element 0: 1
 *    Element 1: 2
 *    Element 2: 3
 *    Element 3: 4
 *    Element 4: 5
 * 
 *    Less efficient (recalculating length):
 *    Element 0: 1
 *    Element 1: 2
 *    Element 2: 3
 *    Element 3: 4
 *    Element 4: 5
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 For Loops Practice Exercise**
      
      This exercise will help you master for loops through practical application. Complete all parts to solidify your understanding of iteration in Java.
      
      **Part 1: Number Patterns (20 minutes)**
      
      Create a program called \`NumberPatterns.java\` that generates various number patterns:
      
      **Requirements:**
      - Generate at least 5 different number patterns (pyramid, diamond, Floyd's triangle, etc.)
      - Use nested for loops for pattern generation
      - Allow user to choose which pattern to display
      - Implement input validation for pattern size
      - Display patterns with proper formatting and alignment
      
      **Patterns to implement:**
      1. Right-angled triangle of numbers
      2. Pyramid of numbers
      3. Diamond pattern
      4. Floyd's triangle
      5. Pascal's triangle (simplified version)
      
      **Advanced Features:**
      - Add color coding to patterns using ANSI escape codes
      - Implement animation for pattern drawing
      - Allow customization of pattern characters
      
      **Part 2: Array Processing (25 minutes)**
      
      Create a program called \`ArrayProcessor.java\` that performs various operations on arrays:
      
      **Requirements:**
      - Create arrays of different data types (int, double, String)
      - Implement methods to find min, max, sum, average
      - Sort arrays using bubble sort or selection sort
      - Search for elements using linear search
      - Reverse array elements
      - Remove duplicates from arrays
      
      **Features to implement:**
      - Use enhanced for-each loops where appropriate
      - Implement error handling for empty arrays
      - Add performance timing for operations
      - Include memory usage optimization techniques
      
      **Part 3: Matrix Operations (30 minutes)**
      
      Create a program called \`MatrixOperations.java\` that performs matrix calculations:
      
      **Requirements:**
      - Implement 2D arrays for matrix representation
      - Perform matrix addition, subtraction, and multiplication
      - Calculate matrix transpose and determinant (2x2 and 3x3)
      - Find row and column sums
      - Implement matrix rotation (90, 180, 270 degrees)
      
      **Advanced Features:**
      - Validate matrix dimensions for operations
      - Handle special matrices (identity, zero, diagonal)
      - Implement sparse matrix representation
      - Add matrix input from user or file
      
      **Part 4: Statistical Analysis (25 minutes)**
      
      Create a program called \`StatisticalAnalyzer.java\` that performs statistical calculations:
      
      **Requirements:**
      - Accept a dataset of numbers (array or list)
      - Calculate mean, median, mode, range, and standard deviation
      - Generate frequency distribution tables
      - Identify outliers in the dataset
      - Create simple histograms using text-based representation
      
      **Features to implement:**
      - Handle different data types (int, double)
      - Implement data validation and cleaning
      - Add support for weighted averages
      - Include correlation calculation for 2D datasets
      
      **Part 5: Prime Number Generator (20 minutes)**
      
      Create a program called \`PrimeGenerator.java\` that finds and displays prime numbers:
      
      **Requirements:**
      - Generate prime numbers up to a specified limit
      - Implement the Sieve of Eratosthenes algorithm
      - Check if a specific number is prime
      - Find prime factors of a number
      - Display twin primes within a range
      
      **Advanced Features:**
      - Optimize prime checking algorithms
      - Implement segmented sieve for large ranges
      - Add prime counting functions
      - Include primality testing for large numbers
      
      **Part 6: Performance Comparison (20 minutes)**
      
      Create a program called \`LoopPerformanceTest.java\` that compares different loop implementations:
      
      **Requirements:**
      - Compare traditional for loops with enhanced for-each loops
      - Test performance with different data sizes
      - Measure execution time for various operations
      - Analyze memory usage patterns
      - Document findings with charts or tables
      
      **Features to implement:**
      - Use System.nanoTime() for precise timing
      - Implement multiple test scenarios
      - Add warm-up runs for accurate measurements
      - Generate performance reports
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`NumberPatterns.java\` - Number pattern generator
      2. \`ArrayProcessor.java\` - Array processing utilities
      3. \`MatrixOperations.java\` - Matrix calculation program
      4. \`StatisticalAnalyzer.java\` - Statistical analysis tool
      5. \`PrimeGenerator.java\` - Prime number generator
      6. \`LoopPerformanceTest.java\` - Loop performance comparison
      7. \`README.md\` - Documentation explaining each program
      8. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of traditional and enhanced for loops
      - ✅ Proper use of nested loops for complex iterations
      - ✅ Loop control with break and continue statements
      - ✅ Input validation and error handling
      - ✅ Clean, readable code with appropriate comments
      - ✅ Understanding of loop performance considerations
      - ✅ Application of loops to solve real-world problems
      
      **💡 Bonus Challenges:**
      
      1. **Algorithm Optimization:** Find ways to optimize loop-based algorithms
      2. **Memory Management:** Implement memory-efficient loop patterns
      3. **Error Recovery:** Add robust error handling to all programs
      4. **User Experience:** Create interactive menus and better user feedback
      5. **Extensibility:** Design programs to easily add new features
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master traditional and enhanced for loop syntax
      - Understand nested loops and their applications
      - Learn loop control techniques with break and continue
      - Practice implementing algorithms with loops
      - Develop skills in performance analysis and optimization
      - Build confidence in using loops for complex data processing
      
      This comprehensive exercise provides hands-on experience with one of Java's most essential programming constructs!
    `
  }
};