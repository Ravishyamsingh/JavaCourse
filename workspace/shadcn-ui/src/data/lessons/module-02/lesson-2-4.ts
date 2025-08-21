import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_4: LessonContent = {
  title: 'While and Do-While Loops',
  type: 'coding',
  duration: '25 min',
  module: 'Control Structures',
  content: {
    overview: 'Master conditional iteration with while and do-while loops in Java. This lesson covers pre-condition and post-condition loops, loop control techniques, sentinel values, and user input validation. You\'ll learn when to use while versus do-while loops, how to avoid infinite loops, and implement robust looping constructs for interactive programs and data processing tasks.',
    objectives: [
      'Master the syntax and structure of while loops',
      'Learn to use do-while loops for guaranteed execution',
      'Understand the difference between while and do-while loops',
      'Practice implementing sentinel-controlled loops',
      'Learn loop control with break and continue statements',
      'Understand infinite loops and how to avoid them',
      'Implement user input validation with loops'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          While and Do-While Loops in Java
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Conditional iteration with pre and post-condition loops</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to While Loops
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            While loops execute a block of code repeatedly as long as a specified condition remains true. 
            They're ideal for situations where the number of iterations isn't known in advance, such as 
            processing user input, reading files, or implementing game loops.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">While loops are pre-condition loops - the condition is checked before each iteration, so the loop body may never execute if the condition is initially false.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            While Loop Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">While loops have a simple structure with just a condition in the header.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                while (condition) &#123;<br/>
                &nbsp;&nbsp;// code to execute repeatedly<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int count = 0;<br/>
                while (count < 5) &#123;<br/>
                &nbsp;&nbsp;System.out.println("Count: " + count);<br/>
                &nbsp;&nbsp;count++;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Do-While Loop Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Do-while loops execute the loop body at least once before checking the condition.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                do &#123;<br/>
                &nbsp;&nbsp;// code to execute at least once<br/>
                &#125; while (condition);
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int number;<br/>
                do &#123;<br/>
                &nbsp;&nbsp;System.out.print("Enter a positive number: ");<br/>
                &nbsp;&nbsp;number = scanner.nextInt();<br/>
                &#125; while (number <= 0);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Sentinel-Controlled Loops
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Sentinel-controlled loops use a special value to signal when to stop processing.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Scanner scanner = new Scanner(System.in);<br/>
                int sum = 0;<br/>
                int number;<br/>
                System.out.println("Enter numbers (0 to stop):");<br/>
                <br/>
                do &#123;<br/>
                &nbsp;&nbsp;number = scanner.nextInt();<br/>
                &nbsp;&nbsp;if (number != 0) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;sum += number;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125; while (number != 0);<br/>
                <br/>
                System.out.println("Sum: " + sum);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Infinite Loops and Prevention
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">Common Causes:</h4>
              <ul class="space-y-2 text-red-700">
                <li>• Forgetting to update loop control variable</li>
                <li>• Condition never becomes false</li>
                <li>• Off-by-one errors in condition</li>
                <li>• Incorrect logical operators</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-3">Prevention Techniques:</h4>
              <ul class="space-y-2 text-yellow-700">
                <li>• Always update loop control variables</li>
                <li>• Test loop conditions carefully</li>
                <li>• Use debugging to trace loop execution</li>
                <li>• Add safety counters for unknown iterations</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            When to Use While vs Do-While
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-3">Use While When:</h4>
              <ul class="space-y-2 text-blue-700">
                <li>• You might not need to execute the loop body at all</li>
                <li>• The condition should be checked before execution</li>
                <li>• Processing data with unknown quantity</li>
                <li>• Implementing game loops or event processing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">Use Do-While When:</h4>
              <ul class="space-y-2 text-green-700">
                <li>• You need to execute the loop body at least once</li>
                <li>• Getting user input that must be validated</li>
                <li>• Displaying menus that should appear at least once</li>
                <li>• Processing data that requires initial setup</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for While and Do-While Loops</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Initialize loop control variables before the loop</li>
                <li>• Update loop control variables within the loop body</li>
                <li>• Use clear, descriptive variable names</li>
                <li>• Add comments for complex loop conditions</li>
                <li>• Test boundary conditions carefully</li>
                <li>• Use braces even for single-statement loops</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't forget to update loop control variables</li>
                <li>• Don't create infinite loops accidentally</li>
                <li>• Don't use while loops when do-while is more appropriate</li>
                <li>• Don't make loop conditions overly complex</li>
                <li>• Don't ignore user input validation</li>
                <li>• Don't use magic numbers in loop conditions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * WhileDoWhileLoopsDemo.java
 * 
 * This comprehensive example demonstrates various while and do-while loop features in Java:
 * - Traditional while loops with different conditions
 * - Do-while loops for guaranteed execution
 * - Sentinel-controlled loops for user input
 * - Loop control with break and continue statements
 * - Common loop patterns and best practices
 * - Infinite loop prevention techniques
 * 
 * Run this program to see how different while loop structures work in practice.
 */

import java.util.Scanner;
import java.util.Random;

public class WhileDoWhileLoopsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate while loops
        demonstrateWhileLoops();
        
        // Demonstrate do-while loops
        demonstrateDoWhileLoops();
        
        // Demonstrate sentinel-controlled loops
        demonstrateSentinelLoops();
        
        // Demonstrate loop control statements
        demonstrateLoopControl();
        
        // Demonstrate common patterns
        demonstrateCommonPatterns();
        
        // Demonstrate infinite loop prevention
        demonstrateInfiniteLoopPrevention();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              WHILE AND DO-WHILE LOOPS DEMO                   ║");
        System.out.println("║      Conditional iteration with pre and post-conditions      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateWhileLoops() {
        System.out.println("🔸 WHILE LOOPS");
        System.out.println("   ───────────");
        
        // Basic counting while loop
        System.out.println("   Counting from 1 to 5:");
        int count = 1;
        while (count <= 5) {
            System.out.println("   Count: " + count);
            count++;
        }
        
        // While loop with condition based on user input simulation
        System.out.println("\n   Processing data until condition met:");
        int data = 100;
        int iterations = 0;
        while (data > 10 && iterations < 5) {
            System.out.println("   Data: " + data + ", Iteration: " + iterations);
            data -= 15;
            iterations++;
        }
        
        System.out.println();
    }
    
    private static void demonstrateDoWhileLoops() {
        System.out.println("🔸 DO-WHILE LOOPS");
        System.out.println("   ──────────────");
        
        // Do-while loop that executes at least once
        System.out.println("   Menu system (executes at least once):");
        Scanner scanner = new Scanner(System.in);
        int choice;
        
        // Simulate a menu choice
        choice = 3; // Simulated user input
        int menuCounter = 0;
        
        do {
            System.out.println("   Menu Option " + choice);
            menuCounter++;
            if (menuCounter >= 3) {
                choice = 0; // Exit condition
            }
        } while (choice != 0);
        
        System.out.println("   Menu loop completed after " + menuCounter + " iterations");
        System.out.println();
    }
    
    private static void demonstrateSentinelLoops() {
        System.out.println("🔸 SENTINEL-CONTROLLED LOOPS");
        System.out.println("   ─────────────────────────");
        
        // Sentinel-controlled loop for data input
        System.out.println("   Processing numbers until sentinel value (-1):");
        int[] testData = {5, 10, 15, 20, -1, 25}; // -1 is sentinel
        int index = 0;
        int sum = 0;
        int number;
        
        System.out.print("   Numbers processed: ");
        do {
            number = testData[index++];
            if (number != -1) {
                sum += number;
                System.out.print(number + " ");
            }
        } while (number != -1);
        
        System.out.println("\n   Sum of numbers: " + sum);
        System.out.println();
    }
    
    private static void demonstrateLoopControl() {
        System.out.println("🔸 LOOP CONTROL STATEMENTS");
        System.out.println("   ───────────────────────");
        
        // While loop with break
        System.out.println("   Using break to exit loop when condition met:");
        int i = 0;
        while (true) {
            if (i >= 5) {
                System.out.println("   Breaking at " + i);
                break;
            }
            System.out.println("   Count: " + i);
            i++;
        }
        
        // While loop with continue
        System.out.println("\n   Using continue to skip certain iterations:");
        int j = 0;
        while (j < 10) {
            j++;
            if (j % 2 == 0) {
                System.out.println("   Skipping even number: " + j);
                continue;
            }
            System.out.println("   Processing odd number: " + j);
        }
        
        System.out.println();
    }
    
    private static void demonstrateCommonPatterns() {
        System.out.println("🔸 COMMON LOOP PATTERNS");
        System.out.println("   ────────────────────");
        
        // Input validation pattern
        System.out.println("   Input validation pattern:");
        int[] userInput = {0, -5, 10}; // Simulated user inputs
        int inputIndex = 0;
        int validInput;
        
        do {
            validInput = userInput[inputIndex++];
            if (validInput <= 0) {
                System.out.println("   Invalid input: " + validInput + " (must be positive)");
            }
        } while (validInput <= 0 && inputIndex < userInput.length);
        
        if (validInput > 0) {
            System.out.println("   Valid input accepted: " + validInput);
        } else {
            System.out.println("   No valid input found after " + inputIndex + " attempts");
        }
        
        // Retry pattern
        System.out.println("\n   Retry pattern with maximum attempts:");
        int attempt = 1;
        boolean success = false;
        Random random = new Random();
        
        while (attempt <= 3 && !success) {
            // Simulate operation that might fail
            boolean operationResult = random.nextBoolean();
            System.out.println("   Attempt " + attempt + ": " + (operationResult ? "Success" : "Failed"));
            
            if (operationResult) {
                success = true;
            } else {
                attempt++;
            }
        }
        
        if (success) {
            System.out.println("   Operation succeeded on attempt " + attempt);
        } else {
            System.out.println("   Operation failed after " + (attempt - 1) + " attempts");
        }
        
        System.out.println();
    }
    
    private static void demonstrateInfiniteLoopPrevention() {
        System.out.println("🔸 INFINITE LOOP PREVENTION");
        System.out.println("   ─────────────────────────");
        
        // Safe counter to prevent infinite loops
        System.out.println("   Using safety counter to prevent infinite loops:");
        int safetyCounter = 0;
        int maxIterations = 10;
        int value = 100;
        
        while (value > 0 && safetyCounter < maxIterations) {
            System.out.println("   Safety counter: " + safetyCounter + ", Value: " + value);
            value -= 15;
            safetyCounter++;
        }
        
        if (safetyCounter >= maxIterations) {
            System.out.println("   Loop terminated by safety counter to prevent infinite execution");
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • While loops with pre-condition evaluation                 ║");
        System.out.println("║  • Do-while loops with guaranteed execution                  ║");
        System.out.println("║  • Sentinel-controlled loops for user input                  ║");
        System.out.println("║  • Loop control with break and continue statements           ║");
        System.out.println("║  • Common patterns for input validation and retries          ║");
        System.out.println("║  • Infinite loop prevention techniques                       ║");
        System.out.println("║  • When to use while vs do-while loops                       ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always update loop control variables                      ║");
        System.out.println("║  • Use clear conditions that will eventually become false    ║");
        System.out.println("║  • Choose while vs do-while based on execution requirements  ║");
        System.out.println("║  • Add safety counters for unknown iteration scenarios       ║");
        System.out.println("║  • Validate user input within loop conditions               ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              WHILE AND DO-WHILE LOOPS DEMO                   ║
 * ║      Conditional iteration with pre and post-conditions      ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 WHILE LOOPS
 *    ───────────
 *    Counting from 1 to 5:
 *    Count: 1
 *    Count: 2
 *    Count: 3
 *    Count: 4
 *    Count: 5
 * 
 *    Processing data until condition met:
 *    Data: 100, Iteration: 0
 *    Data: 85, Iteration: 1
 *    Data: 70, Iteration: 2
 *    Data: 55, Iteration: 3
 *    Data: 40, Iteration: 4
 * 
 * 🔸 DO-WHILE LOOPS
 *    ──────────────
 *    Menu system (executes at least once):
 *    Menu Option 3
 *    Menu Option 3
 *    Menu Option 3
 *    Menu loop completed after 3 iterations
 * 
 * 🔸 SENTINEL-CONTROLLED LOOPS
 *    ─────────────────────────
 *    Processing numbers until sentinel value (-1):
 *    Numbers processed: 5 10 15 20 
 *    Sum of numbers: 50
 * 
 * 🔸 LOOP CONTROL STATEMENTS
 *    ───────────────────────
 *    Using break to exit loop when condition met:
 *    Count: 0
 *    Count: 1
 *    Count: 2
 *    Count: 3
 *    Count: 4
 *    Breaking at 5
 * 
 *    Using continue to skip certain iterations:
 *    Skipping even number: 2
 *    Processing odd number: 1
 *    Processing odd number: 3
 *    Skipping even number: 4
 *    Processing odd number: 5
 *    Skipping even number: 6
 *    Processing odd number: 7
 *    Skipping even number: 8
 *    Processing odd number: 9
 *    Skipping even number: 10
 * 
 * 🔸 COMMON LOOP PATTERNS
 *    ────────────────────
 *    Input validation pattern:
 *    Invalid input: 0 (must be positive)
 *    Invalid input: -5 (must be positive)
 *    Valid input accepted: 10
 * 
 *    Retry pattern with maximum attempts:
 *    Attempt 1: Success
 *    Operation succeeded on attempt 1
 * 
 * 🔸 INFINITE LOOP PREVENTION
 *    ─────────────────────────
 *    Using safety counter to prevent infinite loops:
 *    Safety counter: 0, Value: 100
 *    Safety counter: 1, Value: 85
 *    Safety counter: 2, Value: 70
 *    Safety counter: 3, Value: 55
 *    Safety counter: 4, Value: 40
 *    Safety counter: 5, Value: 25
 *    Safety counter: 6, Value: 10
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 While and Do-While Loops Practice Exercise**
      
      This exercise will help you master while and do-while loops through practical application. Complete all parts to solidify your understanding of conditional iteration in Java.
      
      **Part 1: Menu System (25 minutes)**
      
      Create a program called \`MenuSystem.java\` that implements an interactive menu system:
      
      **Requirements:**
      - Display a main menu with at least 5 options
      - Use do-while loop to ensure menu appears at least once
      - Implement input validation for menu choices
      - Allow users to exit the program gracefully
      - Include sub-menus for complex options
      
      **Features to implement:**
      - Clear menu formatting with numbered options
      - Error handling for invalid menu choices
      - Loop control to return to main menu
      - Exit confirmation to prevent accidental termination
      
      **Part 2: Number Guessing Game (20 minutes)**
      
      Create a program called \`NumberGuessingGame.java\` that implements a number guessing game:
      
      **Requirements:**
      - Generate random numbers within specified ranges
      - Use while loops to continue game until correct guess
      - Provide hints (too high, too low) after each guess
      - Track number of attempts
      - Implement difficulty levels (easy, medium, hard)
      
      **Advanced Features:**
      - Add scoring system based on attempts and difficulty
      - Implement best score tracking
      - Add time limits for guesses
      - Include statistics tracking (games played, win/loss ratio)
      
      **Part 3: User Input Validator (20 minutes)**
      
      Create a program called \`InputValidator.java\` that validates different types of user input:
      
      **Requirements:**
      - Validate integer input within specified ranges
      - Validate floating-point numbers with precision limits
      - Validate string input for specific formats (email, phone numbers)
      - Implement retry mechanisms for invalid input
      - Provide clear error messages for different validation failures
      
      **Features to implement:**
      - Custom validation rules for different data types
      - Maximum retry attempts before program termination
      - Input masking for sensitive data (passwords)
      - Regular expression validation for complex patterns
      
      **Part 4: Data Processor (25 minutes)**
      
      Create a program called \`DataProcessor.java\` that processes data from various sources:
      
      **Requirements:**
      - Read data from arrays or simulated input streams
      - Process data until sentinel value is encountered
      - Calculate statistics (sum, average, min, max)
      - Handle empty or invalid data gracefully
      - Implement batch processing for large datasets
      
      **Features to implement:**
      - Progress indicators for long-running operations
      - Memory usage optimization for large datasets
      - Error recovery for corrupted data entries
      - Output formatting for processed results
      
      **Part 5: Password Validator (15 minutes)**
      
      Create a program called \`PasswordValidator.java\` that validates user passwords:
      
      **Requirements:**
      - Check password length requirements
      - Verify character type requirements (uppercase, lowercase, digits, symbols)
      - Implement strength scoring algorithm
      - Provide feedback for password improvement
      - Allow multiple password attempts
      
      **Advanced Features:**
      - Check against common password dictionaries
      - Implement password entropy calculation
      - Add password confirmation with re-typing
      - Include password strength visualization
      
      **Part 6: File Reader Simulator (25 minutes)**
      
      Create a program called \`FileReaderSimulator.java\` that simulates reading data from a file:
      
      **Requirements:**
      - Simulate file reading with arrays or collections
      - Process data line by line until end of file
      - Handle different data formats (CSV, JSON-like structures)
      - Implement error handling for malformed data
      - Track reading progress and performance
      
      **Features to implement:**
      - Buffer management for efficient reading
      - Line counting and data statistics
      - Error logging for processing failures
      - Memory usage monitoring for large files
      
      **Part 7: Infinite Loop Prevention (10 minutes)**
      
      Create a program called \`LoopSafetyDemo.java\` that demonstrates safe loop implementation:
      
      **Requirements:**
      - Implement safety counters for all loops
      - Add timeout mechanisms for long-running loops
      - Include debugging output for loop tracing
      - Handle unexpected loop termination gracefully
      - Demonstrate recovery from potential infinite loops
      
      **Features to implement:**
      - Performance monitoring for loop execution
      - Automatic loop termination for safety
      - Logging for debugging and analysis
      - User notification for forced terminations
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`MenuSystem.java\` - Interactive menu implementation
      2. \`NumberGuessingGame.java\` - Number guessing game
      3. \`InputValidator.java\` - User input validation system
      4. \`DataProcessor.java\` - Data processing application
      5. \`PasswordValidator.java\` - Password validation tool
      6. \`FileReaderSimulator.java\` - File reading simulation
      7. \`LoopSafetyDemo.java\` - Safe loop implementation demonstration
      8. \`README.md\` - Documentation explaining each program
      9. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of while and do-while loops
      - ✅ Proper use of loop control variables and conditions
      - ✅ Input validation and error handling
      - ✅ Safe loop implementation with infinite loop prevention
      - ✅ Clean, readable code with appropriate comments
      - ✅ Understanding of when to use while vs do-while loops
      - ✅ Application of loops to solve real-world problems
      
      **💡 Bonus Challenges:**
      
      1. **Performance Optimization:** Find ways to optimize loop-based algorithms
      2. **Memory Management:** Implement memory-efficient loop patterns
      3. **Error Recovery:** Add robust error handling to all programs
      4. **User Experience:** Create interactive interfaces with better feedback
      5. **Extensibility:** Design programs to easily add new features
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master while and do-while loop syntax and usage
      - Understand the difference between pre and post-condition loops
      - Learn to implement safe, controlled iteration constructs
      - Practice input validation and user interaction with loops
      - Develop skills in preventing and handling infinite loops
      - Build confidence in using loops for interactive applications
      
      This comprehensive exercise provides hands-on experience with essential looping constructs in Java!
    `
  }
};