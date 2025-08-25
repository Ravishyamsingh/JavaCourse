import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_1: LessonContent = {
  title: 'Understanding Exceptions',
  type: 'lesson',
  duration: '25 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Learn about exceptions and error handling in Java. This lesson covers the exception hierarchy, types of exceptions, and fundamental concepts of exception handling in Java applications.',
    objectives: [
      'Understand exception hierarchy in Java',
      'Learn about checked and unchecked exceptions',
      'Practice identifying common exceptions',
      'Master try-catch-finally blocks',
      'Understand exception propagation',
      'Learn best practices for exception handling'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Understanding Exceptions
        </h1>
        <p class="mt-3 text-red-100 text-lg">Error handling and exception management in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Exceptions
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Exceptions in Java are events that disrupt the normal flow of program execution. They represent error conditions 
            that occur during program execution, such as attempting to divide by zero or accessing an array element that 
            doesn't exist.
          </p>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">💡 Key Concept</h4>
            <p class="text-red-700">Exceptions are objects that inherit from the Throwable class, allowing for structured error handling and recovery.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Java Exception Hierarchy
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the exception hierarchy is crucial for effective error handling:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Class</th>
                    <th class="text-left p-3 font-bold border-b">Type</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Throwable</td>
                    <td class="p-3">Root</td>
                    <td class="p-3">Base class for all errors and exceptions</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Error</td>
                    <td class="p-3">Unchecked</td>
                    <td class="p-3">Serious problems not meant to be caught (e.g., OutOfMemoryError)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Exception</td>
                    <td class="p-3">Base</td>
                    <td class="p-3">Conditions that reasonable applications might want to catch</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">RuntimeException</td>
                    <td class="p-3">Unchecked</td>
                    <td class="p-3">Exceptions that can be prevented programmatically</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Checked Exceptions</td>
                    <td class="p-3">Checked</td>
                    <td class="p-3">Exceptions that must be declared or caught</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Types of Exceptions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java has two main types of exceptions:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Checked Exceptions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Must be declared or caught</li>
                  <li>• Checked at compile-time</li>
                  <li>• Examples: IOException, SQLException</li>
                  <li>• Represent recoverable conditions</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public void readFile() throws IOException {<br/>
                  &nbsp;&nbsp;// Code that might throw IOException<br/>
                  }
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Unchecked Exceptions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Not required to be declared or caught</li>
                  <li>• Checked at runtime</li>
                  <li>• Examples: NullPointerException, ArrayIndexOutOfBoundsException</li>
                  <li>• Often result from programming errors</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  int[] arr = new int[5];<br/>
                  arr[10] = 5; // ArrayIndexOutOfBoundsException
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Common Java Exceptions
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-purple-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Exception</th>
                  <th class="text-left p-3 font-bold border-b">Type</th>
                  <th class="text-left p-3 font-bold border-b">Cause</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-mono">ArithmeticException</td>
                  <td class="p-3">Unchecked</td>
                  <td class="p-3">Mathematical errors (e.g., division by zero)</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">NullPointerException</td>
                  <td class="p-3">Unchecked</td>
                  <td class="p-3">Attempting to use a null reference</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">ArrayIndexOutOfBoundsException</td>
                  <td class="p-3">Unchecked</td>
                  <td class="p-3">Accessing invalid array index</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">IllegalArgumentException</td>
                  <td class="p-3">Unchecked</td>
                  <td class="p-3">Invalid argument passed to method</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">IOException</td>
                  <td class="p-3">Checked</td>
                  <td class="p-3">Input/output operation failures</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">ClassNotFoundException</td>
                  <td class="p-3">Checked</td>
                  <td class="p-3">Class not found during dynamic loading</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Exception Handling Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The basic syntax for handling exceptions:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              try {<br/>
              &nbsp;&nbsp;// Code that might throw an exception<br/>
              } catch (ExceptionType1 e) {<br/>
              &nbsp;&nbsp;// Handle ExceptionType1<br/>
              } catch (ExceptionType2 e) {<br/>
              &nbsp;&nbsp;// Handle ExceptionType2<br/>
              } finally {<br/>
              &nbsp;&nbsp;// Code that always executes<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800">try</h4>
                <p class="text-sm text-gray-700">Contains code that might throw exceptions</p>
              </div>
              <div class="bg-green-50 p-3 rounded-lg">
                <h4 class="font-bold text-green-800">catch</h4>
                <p class="text-sm text-gray-700">Handles specific exception types</p>
              </div>
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800">finally</h4>
                <p class="text-sm text-gray-700">Executes regardless of exceptions</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Exception Handling</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Catch specific exceptions rather than generic ones</li>
                <li>• Log exceptions with meaningful context</li>
                <li>• Don't ignore exceptions (empty catch blocks)</li>
                <li>• Use finally blocks for cleanup operations</li>
                <li>• Create custom exceptions for application-specific errors</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't catch exceptions you can't handle properly</li>
                <li>• Don't use exceptions for normal program flow</li>
                <li>• Don't lose the original exception context</li>
                <li>• Don't throw exceptions from finally blocks</li>
                <li>• Don't swallow exceptions without justification</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * UnderstandingExceptionsDemo.java
 * 
 * This comprehensive example demonstrates exception handling in Java:
 * - Exception hierarchy and types
 * - Try-catch-finally blocks
 * - Checked vs unchecked exceptions
 * - Exception propagation
 * - Best practices for error handling
 * 
 * Run this program to see how exception handling works in practice.
 */

import java.io.*;
import java.util.*;

public class UnderstandingExceptionsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate exception hierarchy
        demonstrateExceptionHierarchy();
        
        // Demonstrate try-catch-finally
        demonstrateTryCatchFinally();
        
        // Demonstrate checked vs unchecked exceptions
        demonstrateCheckedVsUnchecked();
        
        // Demonstrate exception propagation
        demonstrateExceptionPropagation();
        
        // Demonstrate best practices
        demonstrateBestPractices();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              UNDERSTANDING EXCEPTIONS DEMO                   ║");
        System.out.println("║         Error Handling and Exception Management              ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateExceptionHierarchy() {
        System.out.println("🔸 EXCEPTION HIERARCHY DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        System.out.println("   Throwable (Root)");
        System.out.println("   ├── Error (Unchecked)");
        System.out.println("   │   ├── OutOfMemoryError");
        System.out.println("   │   └── StackOverflowError");
        System.out.println("   └── Exception (Base)");
        System.out.println("       ├── RuntimeException (Unchecked)");
        System.out.println("       │   ├── NullPointerException");
        System.out.println("       │   ├── ArrayIndexOutOfBoundsException");
        System.out.println("       │   └── IllegalArgumentException");
        System.out.println("       └── Checked Exceptions");
        System.out.println("           ├── IOException");
        System.out.println("           └── SQLException");
        
        System.out.println();
    }
    
    private static void demonstrateTryCatchFinally() {
        System.out.println("🔸 TRY-CATCH-FINALLY DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        // Normal execution
        System.out.println("   Normal execution:");
        try {
            int result = 10 / 2;
            System.out.println("   Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("   Caught exception: " + e.getMessage());
        } finally {
            System.out.println("   Finally block executed");
        }
        
        // Exception handling
        System.out.println("   Exception handling:");
        try {
            int result = 10 / 0; // This will throw ArithmeticException
            System.out.println("   Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("   Caught exception: " + e.getMessage());
        } finally {
            System.out.println("   Finally block executed");
        }
        
        System.out.println();
    }
    
    private static void demonstrateCheckedVsUnchecked() {
        System.out.println("🔸 CHECKED VS UNCHECKED EXCEPTIONS");
        System.out.println("   ───────────────────────────────");
        
        // Unchecked exception - no need to declare or catch
        System.out.println("   Unchecked exception example:");
        try {
            String str = null;
            int length = str.length(); // NullPointerException
            System.out.println("   Length: " + length);
        } catch (NullPointerException e) {
            System.out.println("   Caught NullPointerException: " + e.getMessage());
        }
        
        // Checked exception - must declare or catch
        System.out.println("   Checked exception example:");
        try {
            FileReader file = new FileReader("nonexistent.txt"); // FileNotFoundException
            System.out.println("   File opened successfully");
        } catch (FileNotFoundException e) {
            System.out.println("   Caught FileNotFoundException: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateExceptionPropagation() {
        System.out.println("🔸 EXCEPTION PROPAGATION");
        System.out.println("   ─────────────────────");
        
        try {
            method1();
        } catch (Exception e) {
            System.out.println("   Exception caught in main: " + e.getMessage());
            System.out.println("   Stack trace:");
            e.printStackTrace(System.out);
        }
        
        System.out.println();
    }
    
    private static void method1() throws Exception {
        System.out.println("   In method1()");
        method2();
    }
    
    private static void method2() throws Exception {
        System.out.println("   In method2()");
        method3();
    }
    
    private static void method3() throws Exception {
        System.out.println("   In method3()");
        throw new Exception("Exception thrown in method3");
    }
    
    private static void demonstrateBestPractices() {
        System.out.println("🔸 BEST PRACTICES DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        // Catch specific exceptions
        try {
            int[] arr = {1, 2, 3};
            System.out.println("   Array element: " + arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("   Caught specific exception: " + e.getMessage());
        }
        
        // Log exceptions with context
        List<String> list = null;
        try {
            int size = list.size(); // NullPointerException
        } catch (NullPointerException e) {
            System.out.println("   Logging exception with context:");
            System.out.println("   Attempted to get size of null list at: " + 
                             java.time.LocalDateTime.now());
            System.out.println("   Exception: " + e.getClass().getSimpleName() + 
                             " - " + e.getMessage());
        }
        
        // Don't ignore exceptions
        try {
            // Simulate file operation
            throw new IOException("File not found");
        } catch (IOException e) {
            System.out.println("   Properly handling IOException: " + e.getMessage());
            // In real application, we might log this or retry
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Exception hierarchy and types                             ║");
        System.out.println("║  • Try-catch-finally blocks                                  ║");
        System.out.println("║  • Checked vs unchecked exceptions                           ║");
        System.out.println("║  • Exception propagation                                     ║");
        System.out.println("║  • Best practices for error handling                         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Catch specific exceptions rather than generic ones         ║");
        System.out.println("║  • Log exceptions with meaningful context                    ║");
        System.out.println("║  • Don't ignore exceptions (empty catch blocks)              ║");
        System.out.println("║  • Use finally blocks for cleanup operations                 ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              UNDERSTANDING EXCEPTIONS DEMO                   ║
 * ║         Error Handling and Exception Management              ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 EXCEPTION HIERARCHY DEMONSTRATION
 *    ─────────────────────────────────
 *    Throwable (Root)
 *    ├── Error (Unchecked)
 *    │   ├── OutOfMemoryError
 *    │   └── StackOverflowError
 *    └── Exception (Base)
 *        ├── RuntimeException (Unchecked)
 *        │   ├── NullPointerException
 *        │   ├── ArrayIndexOutOfBoundsException
 *        │   └── IllegalArgumentException
 *        └── Checked Exceptions
 *            ├── IOException
 *            └── SQLException
 * 
 * 🔸 TRY-CATCH-FINALLY DEMONSTRATION
 *    ───────────────────────────────
 *    Normal execution:
 *    Result: 5
 *    Finally block executed
 *    Exception handling:
 *    Caught exception: / by zero
 *    Finally block executed
 * 
 * 🔸 CHECKED VS UNCHECKED EXCEPTIONS
 *    ───────────────────────────────
 *    Unchecked exception example:
 *    Caught NullPointerException: Cannot invoke "String.length()" because "str" is null
 *    Checked exception example:
 *    Caught FileNotFoundException: nonexistent.txt (The system cannot find the file specified)
 * 
 * 🔸 EXCEPTION PROPAGATION
 *    ─────────────────────
 *    In method1()
 *    In method2()
 *    In method3()
 *    Exception caught in main: Exception thrown in method3
 *    Stack trace:
 *    java.lang.Exception: Exception thrown in method3
 *        at UnderstandingExceptionsDemo.method3(UnderstandingExceptionsDemo.java:123)
 *        at UnderstandingExceptionsDemo.method2(UnderstandingExceptionsDemo.java:118)
 *        at UnderstandingExceptionsDemo.method1(UnderstandingExceptionsDemo.java:114)
 *        at UnderstandingExceptionsDemo.demonstrateExceptionPropagation(UnderstandingExceptionsDemo.java:107)
 *        at UnderstandingExceptionsDemo.main(UnderstandingExceptionsDemo.java:25)
 * 
 * 🔸 BEST PRACTICES DEMONSTRATION
 *    ────────────────────────────
 *    Caught specific exception: Index 5 out of bounds for length 3
 *    Logging exception with context:
 *    Attempted to get size of null list at: 2024-01-15T14:30:25.123
 *    Exception: NullPointerException - Cannot invoke "java.util.List.size()" because "list" is null
 *    Properly handling IOException: File not found
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Understanding Exceptions Practice Exercise**

      Create comprehensive programs to practice exception handling techniques and error management.

      **Part 1: Calculator with Exception Handling**
      
      Create a program called \`SafeCalculator.java\` that implements a calculator with robust exception handling:
      
      Requirements:
      - Handle arithmetic exceptions (division by zero, overflow)
      - Validate input parameters
      - Provide meaningful error messages
      - Log calculation errors for debugging
      
      Features to implement:
      - Custom exception classes for calculator-specific errors
      - Input validation with appropriate exceptions
      - Graceful error recovery and user feedback
      - Comprehensive test cases for edge conditions

      **Part 2: File Processor**
      
      Create a program called \`FileProcessor.java\` that processes files with proper error handling:
      
      Requirements:
      - Handle file not found and I/O exceptions
      - Validate file formats and permissions
      - Implement retry mechanisms for transient errors
      - Provide detailed error reporting
      
      Advanced Features:
      - Configurable error handling policies
      - Backup and recovery mechanisms
      - Progress tracking with error reporting
      - Batch processing with error isolation

      **Part 3: Data Validator**
      
      Create a program called \`DataValidator.java\` that validates data with comprehensive exception handling:
      
      Requirements:
      - Validate different data types (strings, numbers, dates)
      - Handle validation errors gracefully
      - Provide detailed validation feedback
      - Support custom validation rules
      
      Features to implement:
      - Validation exception hierarchy
      - Batch validation with error collection
      - Validation rule configuration
      - Performance optimization for large datasets

      **Part 4: Network Client**
      
      Create a program called \`NetworkClient.java\` that handles network operations with proper error management:
      
      Requirements:
      - Handle network connectivity issues
      - Manage timeouts and retries
      - Handle protocol-specific exceptions
      - Provide user-friendly error messages
      
      Advanced Features:
      - Connection pooling with error handling
      - Circuit breaker pattern implementation
      - Fallback mechanisms for failed operations
      - Detailed network error logging

      **Part 5: Exception Logger**
      
      Create a program called \`ExceptionLogger.java\` that provides comprehensive exception logging:
      
      Requirements:
      - Log exceptions with context information
      - Support different log levels and formats
      - Handle logging errors gracefully
      - Provide log analysis capabilities
      
      Features to implement:
      - Configurable logging policies
      - Log rotation and archiving
      - Performance monitoring integration
      - Export and reporting features

      **Deliverables:**
      Submit the following files:
      1. \`SafeCalculator.java\` - Calculator with exception handling
      2. \`FileProcessor.java\` - File processing program
      3. \`DataValidator.java\` - Data validation program
      4. \`NetworkClient.java\` - Network operations handler
      5. \`ExceptionLogger.java\` - Exception logging system
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of exception handling techniques
      - ✅ Understanding of checked vs unchecked exceptions
      - ✅ Proper use of try-catch-finally blocks
      - ✅ Effective exception propagation
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive error handling and validation
      - ✅ Application of best practices for error management

      **💡 Bonus Challenges:**
      
      1. Custom Exceptions: Design comprehensive custom exception hierarchies
      2. Error Recovery: Implement advanced error recovery mechanisms
      3. Performance Monitoring: Add performance tracking to exception handling
      4. Distributed Error Handling: Design error handling for distributed systems
      5. Extensibility: Create frameworks for reusable exception handling
    `
  }
};