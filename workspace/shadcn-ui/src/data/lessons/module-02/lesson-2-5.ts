import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_5: LessonContent = {
  title: 'Break and Continue Statements',
  type: 'lesson',
  duration: '20 min',
  module: 'Control Structures',
  content: {
    overview: 'Master loop control with break and continue statements in Java. This lesson covers how to alter the normal flow of loops, exit loops prematurely, skip iterations, and implement complex control logic. You\'ll learn advanced techniques for nested loop control, labeled breaks, and best practices for readable loop management.',
    objectives: [
      'Understand break statement usage to exit loops',
      'Master continue statement for skipping iterations',
      'Learn labeled break and continue for nested loop control',
      'Practice implementing complex loop control logic',
      'Understand when to use break vs continue appropriately',
      'Learn best practices for readable loop control',
      'Avoid common pitfalls with break and continue statements'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Break and Continue Statements in Java
        </h1>
        <p class="mt-3 text-red-100 text-lg">Advanced loop control for complex iteration logic</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Loop Control
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Break and continue statements provide powerful mechanisms to alter the normal flow of loops. 
            They allow you to exit loops prematurely or skip specific iterations, enabling more complex 
            control logic than basic loop structures provide.
          </p>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">💡 Key Concept</h4>
            <p class="text-red-700">Break statements immediately exit a loop, while continue statements skip the rest of the current iteration and proceed to the next one.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Break Statement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The break statement terminates the loop immediately and transfers control to the statement following the loop.</p>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i == 5) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break; // Exit loop when i equals 5<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;System.out.println("Count: " + i);<br/>
                &#125;<br/>
                System.out.println("Loop terminated");
              </div>
              <p class="text-blue-700 mt-2">This loop will print numbers 1 through 4, then exit when i equals 5.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Continue Statement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The continue statement skips the remaining code in the current iteration and proceeds to the next iteration.</p>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i % 2 == 0) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;continue; // Skip even numbers<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;System.out.println("Odd number: " + i);<br/>
                &#125;
              </div>
              <p class="text-green-700 mt-2">This loop will print only odd numbers from 1 to 10.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Labeled Break and Continue
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Labeled break and continue statements allow control of nested loops by specifying which loop to affect.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                outerLoop: for (int i = 1; i <= 3; i++) &#123;<br/>
                &nbsp;&nbsp;for (int j = 1; j <= 3; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if (i == 2 && j == 2) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break outerLoop; // Exit outer loop<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("i: " + i + ", j: " + j);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
              <p class="text-orange-700 mt-2">This will print combinations until i=2 and j=2, then exit the outer loop entirely.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common Use Cases
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-3">Break Use Cases:</h4>
              <ul class="space-y-2 text-blue-700">
                <li>• Searching for an element in a collection</li>
                <li>• Validating user input and exiting on correct format</li>
                <li>• Implementing menu systems with exit options</li>
                <li>• Error handling to exit processing early</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">Continue Use Cases:</h4>
              <ul class="space-y-2 text-green-700">
                <li>• Skipping invalid data entries in processing</li>
                <li>• Filtering collections based on criteria</li>
                <li>• Implementing retry mechanisms for failed operations</li>
                <li>• Processing only specific elements in a dataset</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-indigo-700">
                <li>• Use break for early loop termination when necessary</li>
                <li>• Use continue to skip iterations cleanly</li>
                <li>• Label nested loops for clear control flow</li>
                <li>• Add comments explaining why break/continue is used</li>
                <li>• Limit complex control logic for readability</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-red-700">
                <li>• Don't use break/continue excessively in simple loops</li>
                <li>• Don't create confusing control flow with unlabeled breaks</li>
                <li>• Don't use break as a "goto" statement</li>
                <li>• Don't make code hard to follow with complex loop control</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Advanced Loop Control Patterns</h2>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Search and Exit Pattern:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int i = 0; i < array.length; i++) &#123;<br/>
                &nbsp;&nbsp;if (array[i] == target) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Found at index: " + i);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Filter and Process Pattern:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int value : numbers) &#123;<br/>
                &nbsp;&nbsp;if (value < 0) continue; // Skip negative numbers<br/>
                &nbsp;&nbsp;if (value > 100) continue; // Skip large numbers<br/>
                &nbsp;&nbsp;processValidNumber(value);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * BreakContinueDemo.java
 * 
 * This comprehensive example demonstrates various break and continue statement features in Java:
 * - Basic break and continue usage in loops
 * - Labeled break and continue for nested loop control
 * - Common patterns for search and filtering operations
 * - Best practices for readable loop control
 * - Advanced techniques for complex iteration logic
 * 
 * Run this program to see how break and continue statements work in practice.
 */

public class BreakContinueDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic break usage
        demonstrateBreak();
        
        // Demonstrate basic continue usage
        demonstrateContinue();
        
        // Demonstrate labeled break
        demonstrateLabeledBreak();
        
        // Demonstrate labeled continue
        demonstrateLabeledContinue();
        
        // Demonstrate common patterns
        demonstratePatterns();
        
        // Demonstrate best practices
        demonstrateBestPractices();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              BREAK AND CONTINUE STATEMENTS DEMO              ║");
        System.out.println("║        Advanced loop control for complex iteration logic     ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBreak() {
        System.out.println("🔸 BREAK STATEMENT");
        System.out.println("   ───────────────");
        
        System.out.println("   Counting from 1 to 10, but breaking at 5:");
        for (int i = 1; i <= 10; i++) {
            if (i == 6) {
                System.out.println("   Breaking loop at " + i);
                break;
            }
            System.out.println("   Count: " + i);
        }
        
        System.out.println();
    }
    
    private static void demonstrateContinue() {
        System.out.println("🔸 CONTINUE STATEMENT");
        System.out.println("   ──────────────────");
        
        System.out.println("   Printing odd numbers from 1 to 10:");
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.println("   Skipping even number: " + i);
                continue;
            }
            System.out.println("   Odd number: " + i);
        }
        
        System.out.println();
    }
    
    private static void demonstrateLabeledBreak() {
        System.out.println("🔸 LABELED BREAK");
        System.out.println("   ──────────────");
        
        System.out.println("   Nested loops with labeled break:");
        outerLoop: for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    System.out.println("   Breaking outer loop at i=" + i + ", j=" + j);
                    break outerLoop;
                }
                System.out.println("   i: " + i + ", j: " + j);
            }
        }
        
        System.out.println();
    }
    
    private static void demonstrateLabeledContinue() {
        System.out.println("🔸 LABELED CONTINUE");
        System.out.println("   ─────────────────");
        
        System.out.println("   Nested loops with labeled continue:");
        outerLoop: for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    System.out.println("   Continuing outer loop at i=" + i + ", j=" + j);
                    continue outerLoop;
                }
                System.out.println("   i: " + i + ", j: " + j);
            }
        }
        
        System.out.println();
    }
    
    private static void demonstratePatterns() {
        System.out.println("🔸 COMMON PATTERNS");
        System.out.println("   ───────────────");
        
        // Search pattern
        System.out.println("   Search pattern - finding first even number:");
        int[] numbers = {1, 3, 5, 8, 9, 11};
        boolean found = false;
        
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                System.out.println("   First even number " + numbers[i] + " found at index " + i);
                found = true;
                break;
            }
        }
        
        if (!found) {
            System.out.println("   No even numbers found in array");
        }
        
        // Filter pattern
        System.out.println("\n   Filter pattern - processing only positive numbers:");
        int[] values = {-2, 3, -1, 5, 0, 7, -4, 9};
        
        for (int value : values) {
            if (value <= 0) {
                System.out.println("   Skipping non-positive value: " + value);
                continue;
            }
            System.out.println("   Processing positive value: " + value);
        }
        
        System.out.println();
    }
    
    private static void demonstrateBestPractices() {
        System.out.println("🔸 BEST PRACTICES");
        System.out.println("   ──────────────");
        
        System.out.println("   Clear, commented loop control:");
        int[] data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
        
        // Search for target value with clear exit condition
        for (int i = 0; i < data.length; i++) {
            // Skip values that don't match our criteria
            if (data[i] < target) {
                System.out.println("   Value " + data[i] + " is less than target, continuing search");
                continue;
            }
            
            // Exit loop when target is found
            if (data[i] == target) {
                System.out.println("   Target " + target + " found at index " + i + ", breaking loop");
                break;
            }
            
            System.out.println("   Value " + data[i] + " is greater than target");
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Break statements for early loop termination               ║");
        System.out.println("║  • Continue statements for skipping iterations               ║");
        System.out.println("║  • Labeled break and continue for nested loop control        ║");
        System.out.println("║  • Common patterns for search and filtering operations       ║");
        System.out.println("║  • Best practices for readable loop control                  ║");
        System.out.println("║  • Advanced techniques for complex iteration logic           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use break and continue statements judiciously             ║");
        System.out.println("║  • Label nested loops for clear control flow                 ║");
        System.out.println("║  • Add comments explaining why break/continue is used        ║");
        System.out.println("║  • Limit complex control logic for readability               ║");
        System.out.println("║  • Test loop control thoroughly to avoid bugs                ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              BREAK AND CONTINUE STATEMENTS DEMO              ║
 * ║        Advanced loop control for complex iteration logic     ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 BREAK STATEMENT
 *    ───────────────
 *    Counting from 1 to 10, but breaking at 5:
 *    Count: 1
 *    Count: 2
 *    Count: 3
 *    Count: 4
 *    Count: 5
 *    Breaking loop at 6
 * 
 * 🔸 CONTINUE STATEMENT
 *    ──────────────────
 *    Printing odd numbers from 1 to 10:
 *    Odd number: 1
 *    Skipping even number: 2
 *    Odd number: 3
 *    Skipping even number: 4
 *    Odd number: 5
 *    Skipping even number: 6
 *    Odd number: 7
 *    Skipping even number: 8
 *    Odd number: 9
 *    Skipping even number: 10
 * 
 * 🔸 LABELED BREAK
 *    ──────────────
 *    Nested loops with labeled break:
 *    i: 1, j: 1
 *    i: 1, j: 2
 *    i: 1, j: 3
 *    i: 2, j: 1
 *    Breaking outer loop at i=2, j=2
 * 
 * 🔸 LABELED CONTINUE
 *    ─────────────────
 *    Nested loops with labeled continue:
 *    i: 1, j: 1
 *    i: 1, j: 2
 *    i: 1, j: 3
 *    i: 2, j: 1
 *    Continuing outer loop at i=2, j=2
 *    i: 3, j: 1
 *    i: 3, j: 2
 *    i: 3, j: 3
 * 
 * 🔸 COMMON PATTERNS
 *    ───────────────
 *    Search pattern - finding first even number:
 *    First even number 8 found at index 3
 * 
 *    Filter pattern - processing only positive numbers:
 *    Skipping non-positive value: -2
 *    Processing positive value: 3
 *    Skipping non-positive value: -1
 *    Processing positive value: 5
 *    Processing positive value: 7
 *    Skipping non-positive value: -4
 *    Processing positive value: 9
 * 
 * 🔸 BEST PRACTICES
 *    ──────────────
 *    Clear, commented loop control:
 *    Value 1 is less than target, continuing search
 *    Value 2 is less than target, continuing search
 *    Value 3 is less than target, continuing search
 *    Value 4 is less than target, continuing search
 *    Value 5 is less than target, continuing search
 *    Value 6 is less than target, continuing search
 *    Target 7 found at index 6, breaking loop
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Break and Continue Statements Practice Exercise**
      
      This exercise will help you master break and continue statements through practical application. Complete all parts to solidify your understanding of advanced loop control in Java.
      
      **Part 1: Search Algorithms (20 minutes)**
      
      Create a program called \`SearchAlgorithms.java\` that implements various search techniques:
      
      **Requirements:**
      - Implement linear search with break statement
      - Create search with multiple criteria using continue
      - Add labeled break for multi-dimensional array search
      - Implement early termination for sorted arrays
      - Handle cases where elements are not found
      
      **Advanced Features:**
      - Add performance timing for searches
      - Implement binary search with break/continue
      - Create search with custom comparison logic
      - Add search result statistics
      
      **Part 2: Data Filter (15 minutes)**
      
      Create a program called \`DataFilter.java\` that filters datasets using continue statements:
      
      **Requirements:**
      - Filter numeric data based on range criteria
      - Filter string data based on length or content
      - Implement multiple filter conditions
      - Process only valid data entries
      - Generate filtered output reports
      
      **Features to implement:**
      - Custom filter rules for different data types
      - Filter chaining with continue statements
      - Performance optimization for large datasets
      - Memory-efficient filtering techniques
      
      **Part 3: Menu Controller (20 minutes)**
      
      Create a program called \`MenuController.java\` that implements complex menu navigation:
      
      **Requirements:**
      - Use break statements for menu exit options
      - Implement continue for invalid menu choices
      - Create nested menus with labeled break control
      - Add user confirmation for critical operations
      - Handle menu state transitions cleanly
      
      **Advanced Features:**
      - Implement menu history tracking
      - Add keyboard shortcuts for navigation
      - Create dynamic menu generation
      - Include menu animation or visual effects
      
      **Part 4: Validation System (25 minutes)**
      
      Create a program called \`ValidationSystem.java\` that validates complex data structures:
      
      **Requirements:**
      - Validate arrays with break on first error
      - Validate collections with continue on warnings
      - Implement nested validation with labeled breaks
      - Create validation rule engines
      - Generate detailed validation reports
      
      **Features to implement:**
      - Custom validation annotations or markers
      - Validation level settings (strict, lenient)
      - Error recovery mechanisms
      - Validation performance optimization
      
      **Part 5: Game Loop Controller (20 minutes)**
      
      Create a program called \`GameLoopController.java\` that demonstrates game loop management:
      
      **Requirements:**
      - Implement main game loop with break for exit
      - Use continue for frame skipping or special conditions
      - Add pause/resume functionality with loop control
      - Handle game state transitions with break/continue
      - Include performance monitoring
      
      **Advanced Features:**
      - Implement variable frame rate control
      - Add input processing with continue patterns
      - Create level loading with break conditions
      - Include game event handling
      
      **Part 6: Pattern Matching (15 minutes)**
      
      Create a program called \`PatternMatcher.java\` that implements pattern matching algorithms:
      
      **Requirements:**
      - Match patterns in text with break on find
      - Skip non-matching sections with continue
      - Implement wildcard or regex matching
      - Handle case sensitivity options
      - Generate match location reports
      
      **Features to implement:**
      - Multiple pattern matching in single pass
      - Pattern matching optimization
      - Match grouping and categorization
      - Performance comparison of matching algorithms
      
      **Part 7: Loop Control Best Practices (5 minutes)**
      
      Create a program called \`LoopControlDemo.java\` that demonstrates clean loop control:
      
      **Requirements:**
      - Implement loops with clear break conditions
      - Use continue statements with meaningful comments
      - Label nested loops appropriately
      - Follow best practices for readable control flow
      - Include error handling with loop control
      
      **Features to implement:**
      - Loop tracing for debugging
      - Safety counters to prevent infinite execution
      - Performance monitoring for loop operations
      - Documentation of control logic
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`SearchAlgorithms.java\` - Various search implementations
      2. \`DataFilter.java\` - Data filtering system
      3. \`MenuController.java\` - Complex menu navigation
      4. \`ValidationSystem.java\` - Data validation engine
      5. \`GameLoopController.java\` - Game loop management
      6. \`PatternMatcher.java\` - Pattern matching algorithms
      7. \`LoopControlDemo.java\` - Best practices demonstration
      8. \`README.md\` - Documentation explaining each program
      9. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of break statements for loop termination
      - ✅ Proper use of continue statements for iteration skipping
      - ✅ Labeled break and continue for nested loop control
      - ✅ Input validation and error handling with loop control
      - ✅ Clean, readable code with appropriate comments
      - ✅ Understanding of when to use break vs continue
      - ✅ Application of loop control to solve real-world problems
      
      **💡 Bonus Challenges:**
      
      1. **Performance Optimization:** Find ways to optimize search and filter algorithms
      2. **Memory Management:** Implement memory-efficient loop control patterns
      3. **Error Recovery:** Add robust error handling to all programs
      4. **User Experience:** Create interactive interfaces with better feedback
      5. **Extensibility:** Design programs to easily add new control features
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master break and continue statement syntax and usage
      - Understand labeled break and continue for nested loops
      - Learn to implement clean, controlled iteration constructs
      - Practice search and filtering algorithms with loop control
      - Develop skills in complex menu and game loop management
      - Build confidence in using advanced loop control techniques
      
      This comprehensive exercise provides hands-on experience with essential loop control mechanisms in Java!
    `
  }
};