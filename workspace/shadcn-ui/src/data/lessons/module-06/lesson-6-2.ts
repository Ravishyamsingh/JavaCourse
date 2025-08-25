import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_2: LessonContent = {
  title: 'Try-Catch Blocks',
  type: 'coding',
  duration: '30 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Master the try-catch-finally construct for handling exceptions in Java. This lesson covers advanced exception handling techniques, multi-catch blocks, and effective error recovery strategies.',
    objectives: [
      'Master try-catch-finally syntax and semantics',
      'Learn multi-catch blocks and exception filtering',
      'Practice effective error recovery techniques',
      'Understand exception handling best practices',
      'Implement resource management with try-with-resources',
      'Handle nested exceptions and exception chaining'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Try-Catch Blocks
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Advanced exception handling techniques in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Advanced Try-Catch Syntax
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java provides several advanced features for exception handling that go beyond basic try-catch blocks. 
            These features allow for more precise control over exception handling and better resource management.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">The try-catch-finally construct ensures that cleanup code always executes, regardless of whether an exception occurs.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Multi-Catch Blocks
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java 7 introduced multi-catch blocks to handle multiple exception types with the same handler:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              try {<br/>
              &nbsp;&nbsp;// Code that might throw multiple exceptions<br/>
              } catch (IOException | SQLException | ParseException e) {<br/>
              &nbsp;&nbsp;// Handle all three exception types<br/>
              &nbsp;&nbsp;System.out.println("Caught exception: " + e.getMessage());<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Benefits</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Reduces code duplication</li>
                  <li>• Improves readability</li>
                  <li>• Simplifies exception handling</li>
                  <li>• Maintains type safety</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Restrictions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Exception types must be disjoint</li>
                  <li>• Cannot catch related exceptions together</li>
                  <li>• Parameter is implicitly final</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Try-With-Resources
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Try-with-resources automatically closes resources that implement AutoCloseable:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              try (FileInputStream fis = new FileInputStream("file.txt");<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BufferedReader reader = new BufferedReader(new InputStreamReader(fis))) {<br/>
              &nbsp;&nbsp;// Use resources<br/>
              &nbsp;&nbsp;String line = reader.readLine();<br/>
              } catch (IOException e) {<br/>
              &nbsp;&nbsp;// Handle exception<br/>
              } // Resources automatically closed here
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Feature</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Automatic Resource Management</td>
                    <td class="p-3">Resources closed automatically in reverse order</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Suppressed Exceptions</td>
                    <td class="p-3">Primary exception preserved, others suppressed</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Multiple Resources</td>
                    <td class="p-3">Multiple resources separated by semicolons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Exception Filtering
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java allows filtering exceptions based on conditions:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              try {<br/>
              &nbsp;&nbsp;// Code that might throw exceptions<br/>
              } catch (IOException e) {<br/>
              &nbsp;&nbsp;if (e.getMessage().contains("Permission denied")) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// Handle permission errors specifically<br/>
              &nbsp;&nbsp;} else {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// Handle other IO exceptions<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Use Cases</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Different handling for different error conditions</li>
                  <li>• Retry mechanisms for transient failures</li>
                  <li>• Fallback strategies for specific errors</li>
                  <li>• Detailed error categorization</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Keep filtering conditions simple</li>
                  <li>• Avoid complex nested filtering</li>
                  <li>• Log filtered exceptions appropriately</li>
                  <li>• Consider custom exception types</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Exception Chaining
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Exception chaining preserves the original exception context when throwing a new exception:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              try {<br/>
              &nbsp;&nbsp;// Code that might throw SQLException<br/>
              &nbsp;&nbsp;databaseOperation();<br/>
              } catch (SQLException e) {<br/>
              &nbsp;&nbsp;// Chain to a more meaningful application exception<br/>
              &nbsp;&nbsp;throw new DataAccessException("Failed to retrieve data", e);<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Benefits</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Preserves original error information</li>
                  <li>• Provides meaningful application context</li>
                  <li>• Enables better debugging</li>
                  <li>• Maintains exception hierarchy</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Implementation</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use exception constructor with cause parameter</li>
                  <li>• Access chained exceptions with getCause()</li>
                  <li>• Print full chain with printStackTrace()</li>
                  <li>• Handle chained exceptions in catch blocks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Try-Catch Blocks</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Catch specific exceptions rather than generic ones</li>
                <li>• Use try-with-resources for automatic resource management</li>
                <li>• Chain exceptions to preserve context</li>
                <li>• Log exceptions with meaningful information</li>
                <li>• Handle exceptions at the appropriate level</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't catch exceptions you can't handle properly</li>
                <li>• Don't use exceptions for normal program flow</li>
                <li>• Don't ignore or swallow exceptions</li>
                <li>• Don't lose the original exception context</li>
                <li>• Don't throw exceptions from finally blocks</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * TryCatchBlocksDemo.java
 * 
 * This comprehensive example demonstrates advanced try-catch block techniques:
 * - Multi-catch blocks and exception filtering
 * - Try-with-resources for automatic resource management
 * - Exception chaining and context preservation
 * - Advanced error handling strategies
 * - Resource management best practices
 * 
 * Run this program to see advanced exception handling in practice.
 */

import java.io.*;
import java.util.*;
import java.sql.*;

// Custom exception for demonstration
class DataAccessException extends Exception {
    public DataAccessException(String message, Throwable cause) {
        super(message, cause);
    }
}

public class TryCatchBlocksDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate multi-catch blocks
        demonstrateMultiCatch();
        
        // Demonstrate try-with-resources
        demonstrateTryWithResources();
        
        // Demonstrate exception chaining
        demonstrateExceptionChaining();
        
        // Demonstrate exception filtering
        demonstrateExceptionFiltering();
        
        // Demonstrate resource management
        demonstrateResourceManagement();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              TRY-CATCH BLOCKS DEMO                           ║");
        System.out.println("║         Advanced Exception Handling Techniques               ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateMultiCatch() {
        System.out.println("🔸 MULTI-CATCH BLOCKS DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        // Example with multiple related exceptions
        try {
            String input = "abc";
            int number = Integer.parseInt(input);
            int result = 100 / number;
            System.out.println("   Result: " + result);
        } catch (NumberFormatException | ArithmeticException e) {
            System.out.println("   Caught exception: " + e.getClass().getSimpleName() + 
                             " - " + e.getMessage());
        }
        
        // Example with file operations that might throw different exceptions
        try {
            FileReader file = new FileReader("nonexistent.txt");
            BufferedReader reader = new BufferedReader(file);
            String line = reader.readLine();
            System.out.println("   Read line: " + line);
        } catch (FileNotFoundException | IOException e) {
            System.out.println("   File operation exception: " + e.getClass().getSimpleName() + 
                             " - " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateTryWithResources() {
        System.out.println("🔸 TRY-WITH-RESOURCES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        // Create a temporary file for demonstration
        File tempFile = null;
        try {
            tempFile = File.createTempFile("demo", ".txt");
            try (FileWriter writer = new FileWriter(tempFile);
                 BufferedWriter bufferedWriter = new BufferedWriter(writer)) {
                
                // Write some data
                bufferedWriter.write("Hello, World!");
                bufferedWriter.newLine();
                bufferedWriter.write("This is a demo of try-with-resources.");
                
                System.out.println("   Successfully wrote to file: " + tempFile.getAbsolutePath());
            }
            
            // Read the file back
            try (FileReader reader = new FileReader(tempFile);
                 BufferedReader bufferedReader = new BufferedReader(reader)) {
                
                String line;
                System.out.println("   Reading file contents:");
                while ((line = bufferedReader.readLine()) != null) {
                    System.out.println("     " + line);
                }
            }
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        } finally {
            // Clean up temporary file
            if (tempFile != null && tempFile.exists()) {
                tempFile.delete();
            }
        }
        
        System.out.println();
    }
    
    private static void demonstrateExceptionChaining() {
        System.out.println("🔸 EXCEPTION CHAINING DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        try {
            // Simulate a database operation that fails
            performDatabaseOperation();
        } catch (DataAccessException e) {
            System.out.println("   Caught application exception: " + e.getMessage());
            System.out.println("   Original cause: " + e.getCause().getClass().getSimpleName() + 
                             " - " + e.getCause().getMessage());
            
            // Print the full stack trace including chained exceptions
            System.out.println("   Full exception chain:");
            e.printStackTrace(System.out);
        }
        
        System.out.println();
    }
    
    private static void performDatabaseOperation() throws DataAccessException {
        try {
            // Simulate database connection failure
            throw new SQLException("Database connection failed", "08001");
        } catch (SQLException e) {
            // Chain to a more meaningful application exception
            throw new DataAccessException("Failed to perform database operation", e);
        }
    }
    
    private static void demonstrateExceptionFiltering() {
        System.out.println("🔸 EXCEPTION FILTERING DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        // Example with different types of file access errors
        String[] filePaths = {
            "nonexistent.txt",  // FileNotFoundException
            "readonly.txt",     // SecurityException (simulated)
            "corrupted.txt"     // IOException (simulated)
        };
        
        for (String filePath : filePaths) {
            System.out.println("   Processing file: " + filePath);
            try {
                processFile(filePath);
            } catch (IOException e) {
                // Filter based on exception type and message
                if (e instanceof FileNotFoundException) {
                    System.out.println("     File not found - please check the path");
                } else if (e.getMessage().contains("Permission denied")) {
                    System.out.println("     Permission denied - check file permissions");
                } else {
                    System.out.println("     Other IO error: " + e.getMessage());
                }
            } catch (SecurityException e) {
                System.out.println("     Security violation: " + e.getMessage());
            }
        }
        
        System.out.println();
    }
    
    private static void processFile(String filePath) throws IOException, SecurityException {
        // Simulate different error conditions
        switch (filePath) {
            case "nonexistent.txt":
                throw new FileNotFoundException("File not found: " + filePath);
            case "readonly.txt":
                throw new SecurityException("Permission denied: " + filePath);
            case "corrupted.txt":
                throw new IOException("File is corrupted: " + filePath);
            default:
                // Normal processing would happen here
                System.out.println("     File processed successfully");
        }
    }
    
    private static void demonstrateResourceManagement() {
        System.out.println("🔸 RESOURCE MANAGEMENT DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        // Demonstrate proper resource management with multiple resources
        try (Scanner scanner = new Scanner(System.in);
             ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
            
            // Simulate using resources
            String data = "Sample data for processing";
            outputStream.write(data.getBytes());
            
            System.out.println("   Resources managed successfully:");
            System.out.println("     Data written to stream: " + outputStream.toString());
            
            // Simulate potential exception
            if (data.length() > 100) {
                throw new RuntimeException("Data too large");
            }
            
        } catch (IOException e) {
            System.out.println("   IO Exception during resource management: " + e.getMessage());
        } catch (RuntimeException e) {
            System.out.println("   Runtime Exception: " + e.getMessage());
        }
        // Resources automatically closed here, even if exceptions occur
        
        System.out.println("   Resources automatically closed");
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Multi-catch blocks and exception filtering                ║");
        System.out.println("║  • Try-with-resources for automatic resource management      ║");
        System.out.println("║  • Exception chaining and context preservation               ║");
        System.out.println("║  • Advanced error handling strategies                        ║");
        System.out.println("║  • Resource management best practices                        ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Catch specific exceptions rather than generic ones         ║");
        System.out.println("║  • Use try-with-resources for automatic resource management   ║");
        System.out.println("║  • Chain exceptions to preserve context                      ║");
        System.out.println("║  • Log exceptions with meaningful information                ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              TRY-CATCH BLOCKS DEMO                           ║
 * ║         Advanced Exception Handling Techniques               ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 MULTI-CATCH BLOCKS DEMONSTRATION
 *    ─────────────────────────────────
 *    Caught exception: NumberFormatException - For input string: "abc"
 *    File operation exception: FileNotFoundException - nonexistent.txt (The system cannot find the file specified)
 * 
 * 🔸 TRY-WITH-RESOURCES DEMONSTRATION
 *    ─────────────────────────────────
 *    Successfully wrote to file: C:\\Users\\User\\AppData\\Local\\Temp\\demo12345.txt
 *    Reading file contents:
 *      Hello, World!
 *      This is a demo of try-with-resources.
 * 
 * 🔸 EXCEPTION CHAINING DEMONSTRATION
 *    ─────────────────────────────────
 *    Caught application exception: Failed to perform database operation
 *    Original cause: SQLException - Database connection failed
 *    Full exception chain:
 *    DataAccessException: Failed to perform database operation
 *        at TryCatchBlocksDemo.performDatabaseOperation(TryCatchBlocksDemo.java:123)
 *        at TryCatchBlocksDemo.demonstrateExceptionChaining(TryCatchBlocksDemo.java:107)
 *        at TryCatchBlocksDemo.main(TryCatchBlocksDemo.java:25)
 *    Caused by: java.sql.SQLException: Database connection failed
 *        at TryCatchBlocksDemo.performDatabaseOperation(TryCatchBlocksDemo.java:120)
 *        ... 2 more
 * 
 * 🔸 EXCEPTION FILTERING DEMONSTRATION
 *    ──────────────────────────────────
 *    Processing file: nonexistent.txt
 *      File not found - please check the path
 *    Processing file: readonly.txt
 *      Permission denied - check file permissions
 *    Processing file: corrupted.txt
 *      Other IO error: File is corrupted: corrupted.txt
 * 
 * 🔸 RESOURCE MANAGEMENT DEMONSTRATION
 *    ──────────────────────────────────
 *    Resources managed successfully:
 *      Data written to stream: Sample data for processing
 *    Resources automatically closed
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Try-Catch Blocks Practice Exercise**

      Create comprehensive programs to practice advanced exception handling techniques and resource management.

      **Part 1: Database Connection Manager**
      
      Create a program called \`DatabaseConnectionManager.java\` that manages database connections with proper exception handling:
      
      Requirements:
      - Handle connection establishment and closure exceptions
      - Implement connection pooling with error handling
      - Provide detailed error reporting for database operations
      - Support retry mechanisms for transient failures
      
      Features to implement:
      - Custom database exceptions with chaining
      - Connection validation and health checks
      - Resource cleanup with try-with-resources
      - Performance monitoring and logging

      **Part 2: File Processing Pipeline**
      
      Create a program called \`FileProcessingPipeline.java\` that processes files with robust error handling:
      
      Requirements:
      - Handle various file I/O exceptions
      - Implement batch processing with error isolation
      - Provide detailed error reporting for failed operations
      - Support recovery mechanisms for partial failures
      
      Advanced Features:
      - Configurable error handling policies
      - Progress tracking with error reporting
      - Backup and rollback mechanisms
      - Performance optimization for large datasets

      **Part 3: Network Communication Handler**
      
      Create a program called \`NetworkHandler.java\` that manages network communications with proper exception handling:
      
      Requirements:
      - Handle network connectivity and timeout exceptions
      - Implement retry mechanisms for failed connections
      - Provide detailed error reporting for network operations
      - Support graceful degradation for partial failures
      
      Features to implement:
      - Connection pooling with error handling
      - Circuit breaker pattern implementation
      - Fallback mechanisms for failed operations
      - Comprehensive network error logging

      **Part 4: Configuration Manager**
      
      Create a program called \`ConfigurationManager.java\` that handles configuration files with proper error management:
      
      Requirements:
      - Handle configuration file parsing exceptions
      - Validate configuration values and types
      - Provide meaningful error messages for invalid configurations
      - Support default values for missing configurations
      
      Advanced Features:
      - Configuration schema validation
      - Dynamic configuration reloading
      - Configuration encryption and security
      - Performance optimization for frequent access

      **Part 5: Resource Management System**
      
      Create a program called \`ResourceManager.java\` that manages system resources with comprehensive error handling:
      
      Requirements:
      - Handle resource allocation and deallocation exceptions
      - Implement resource pooling with error handling
      - Provide detailed error reporting for resource operations
      - Support graceful shutdown and cleanup
      
      Features to implement:
      - Custom resource exceptions with context
      - Resource monitoring and health checks
      - Automatic resource recovery mechanisms
      - Performance optimization for resource usage

      **Deliverables:**
      Submit the following files:
      1. \`DatabaseConnectionManager.java\` - Database connection management
      2. \`FileProcessingPipeline.java\` - File processing with error handling
      3. \`NetworkHandler.java\` - Network communication handler
      4. \`ConfigurationManager.java\` - Configuration management system
      5. \`ResourceManager.java\` - System resource management
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of advanced try-catch techniques
      - ✅ Understanding of multi-catch blocks and exception filtering
      - ✅ Proper use of try-with-resources for resource management
      - ✅ Effective exception chaining and context preservation
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive error handling and recovery strategies
      - ✅ Application of best practices for resource management

      **💡 Bonus Challenges:**
      
      1. Custom Exception Framework: Design comprehensive custom exception hierarchies
      2. Advanced Error Recovery: Implement sophisticated error recovery mechanisms
      3. Performance Monitoring: Add performance tracking to exception handling
      4. Distributed Error Handling: Design error handling for distributed systems
      5. Extensibility: Create frameworks for reusable exception handling
    `
  }
};