import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_3: LessonContent = {
  title: 'Finally Block and Resource Management',
  type: 'lesson',
  duration: '25 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Learn about the finally block for cleanup operations and advanced resource management techniques. This lesson covers try-with-resources, AutoCloseable interface, and best practices for resource cleanup.',
    objectives: [
      'Master the finally block for guaranteed cleanup operations',
      'Learn try-with-resources for automatic resource management',
      'Understand the AutoCloseable interface and its implementations',
      'Practice proper resource cleanup techniques',
      'Implement custom resource management solutions',
      'Handle resource cleanup exceptions effectively'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Finally Block and Resource Management
        </h1>
        <p class="mt-3 text-green-100 text-lg">Guaranteed cleanup and efficient resource handling</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            The Finally Block
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The finally block in Java ensures that specific code executes regardless of whether an exception occurs 
            or is caught. This makes it ideal for cleanup operations that must happen, such as closing files, 
            releasing resources, or rolling back transactions.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">The finally block executes whether or not an exception is thrown, making it perfect for guaranteed cleanup operations.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Finally Block Behavior
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding when and how the finally block executes:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Scenario</th>
                    <th class="text-left p-3 font-bold border-b">Finally Execution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3">No exception in try block</td>
                    <td class="p-3">Executes after try block</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Exception caught by catch block</td>
                    <td class="p-3">Executes after catch block</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Exception not caught</td>
                    <td class="p-3">Executes before exception propagates</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">System.exit() called</td>
                    <td class="p-3">Does NOT execute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">When Finally Executes</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Normal completion of try block</li>
                  <li>• After handling caught exceptions</li>
                  <li>• Before uncaught exceptions propagate</li>
                  <li>• Even with return statements in try/catch</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">When Finally Doesn't Execute</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• System.exit() is called</li>
                  <li>• JVM crashes unexpectedly</li>
                  <li>• Infinite loop in try block</li>
                  <li>• Host system power failure</li>
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
            <p class="text-gray-700">Try-with-resources automatically manages resources that implement AutoCloseable:</p>
            
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
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Close Order</td>
                    <td class="p-3">Resources closed in reverse declaration order</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            AutoCloseable Interface
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Implementing AutoCloseable for custom resource management:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              public class DatabaseConnection implements AutoCloseable {<br/>
              &nbsp;&nbsp;private boolean connected = false;<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public void connect() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;connected = true;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Connected to database");<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public void executeQuery(String sql) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (!connected) throw new IllegalStateException("Not connected");<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Executing: " + sql);<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;@Override<br/>
              &nbsp;&nbsp;public void close() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (connected) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;connected = false;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Disconnected from database");<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">AutoCloseable Requirements</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Single close() method with no parameters</li>
                  <li>• Should be idempotent (safe to call multiple times)</li>
                  <li>• Should not throw exceptions during normal operation</li>
                  <li>• Can suppress exceptions with addSuppressed()</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Make close() methods idempotent</li>
                  <li>• Handle cleanup exceptions appropriately</li>
                  <li>• Document resource cleanup behavior</li>
                  <li>• Use try-with-resources when possible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Resource Management Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Common patterns for effective resource management:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Resource Acquisition Is Initialization (RAII)</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Acquire resources in constructor</li>
                  <li>• Release in finally block or close() method</li>
                  <li>• Ensure proper cleanup on exceptions</li>
                  <li>• Use try-with-resources when available</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Resource Pooling</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Reuse expensive resources</li>
                  <li>• Implement proper lifecycle management</li>
                  <li>• Handle resource validation</li>
                  <li>• Manage concurrent access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Resource Management</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use try-with-resources for AutoCloseable resources</li>
                <li>• Implement proper cleanup in finally blocks when needed</li>
                <li>• Make close() methods idempotent</li>
                <li>• Handle cleanup exceptions gracefully</li>
                <li>• Document resource lifecycle clearly</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't ignore cleanup exceptions without justification</li>
                <li>• Don't perform complex operations in finally blocks</li>
                <li>• Don't throw exceptions from close() methods unnecessarily</li>
                <li>• Don't rely on garbage collection for resource cleanup</li>
                <li>• Don't forget to close resources in legacy code</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * FinallyBlockResourceManagementDemo.java
 * 
 * This comprehensive example demonstrates finally blocks and resource management:
 * - Finally block behavior in different scenarios
 * - Try-with-resources for automatic resource management
 * - Custom AutoCloseable implementations
 * - Resource cleanup best practices
 * - Exception handling during cleanup
 * 
 * Run this program to see resource management techniques in practice.
 */

import java.io.*;
import java.util.*;

// Custom resource class implementing AutoCloseable
class DatabaseConnection implements AutoCloseable {
    private boolean connected = false;
    private String connectionId;
    
    public DatabaseConnection(String connectionId) {
        this.connectionId = connectionId;
    }
    
    public void connect() {
        if (!connected) {
            connected = true;
            System.out.println("   Connected to database: " + connectionId);
        }
    }
    
    public void executeQuery(String sql) {
        if (!connected) {
            throw new IllegalStateException("Not connected to database");
        }
        System.out.println("   Executing query: " + sql);
    }
    
    @Override
    public void close() {
        if (connected) {
            connected = false;
            System.out.println("   Disconnected from database: " + connectionId);
        }
    }
    
    public boolean isConnected() {
        return connected;
    }
}

// Resource that might throw exception during cleanup
class RiskyResource implements AutoCloseable {
    private String name;
    private boolean throwErrorOnClose;
    
    public RiskyResource(String name, boolean throwErrorOnClose) {
        this.name = name;
        this.throwErrorOnClose = throwErrorOnClose;
        System.out.println("   Created resource: " + name);
    }
    
    public void use() {
        System.out.println("   Using resource: " + name);
    }
    
    @Override
    public void close() throws Exception {
        System.out.println("   Closing resource: " + name);
        if (throwErrorOnClose) {
            throw new RuntimeException("Error closing resource: " + name);
        }
    }
}

public class FinallyBlockResourceManagementDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate finally block behavior
        demonstrateFinallyBehavior();
        
        // Demonstrate try-with-resources
        demonstrateTryWithResources();
        
        // Demonstrate custom AutoCloseable
        demonstrateCustomAutoCloseable();
        
        // Demonstrate exception handling during cleanup
        demonstrateCleanupExceptions();
        
        // Demonstrate resource management best practices
        demonstrateBestPractices();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         FINALLY BLOCK & RESOURCE MANAGEMENT DEMO             ║");
        System.out.println("║         Guaranteed Cleanup and Efficient Resource Handling   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateFinallyBehavior() {
        System.out.println("🔸 FINALLY BLOCK BEHAVIOR DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────");
        
        // Case 1: No exception in try block
        System.out.println("   Case 1: Normal execution without exceptions");
        try {
            System.out.println("     In try block - normal execution");
        } finally {
            System.out.println("     In finally block - always executes");
        }
        
        // Case 2: Exception caught by catch block
        System.out.println("   Case 2: Exception caught by catch block");
        try {
            throw new RuntimeException("Test exception");
        } catch (RuntimeException e) {
            System.out.println("     In catch block - handling exception: " + e.getMessage());
        } finally {
            System.out.println("     In finally block - executes after catch");
        }
        
        // Case 3: Exception not caught
        System.out.println("   Case 3: Exception not caught (demonstrated with return)");
        try {
            returnFromFinallyDemo();
        } catch (Exception e) {
            System.out.println("     Exception caught in main: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void returnFromFinallyDemo() throws Exception {
        try {
            System.out.println("     In try block");
            throw new Exception("Test exception");
        } finally {
            System.out.println("     In finally block - executes before exception propagates");
        }
    }
    
    private static void demonstrateTryWithResources() {
        System.out.println("🔸 TRY-WITH-RESOURCES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        // Create temporary file for demonstration
        File tempFile = null;
        try {
            tempFile = File.createTempFile("demo", ".txt");
            
            // Write to file using try-with-resources
            try (FileWriter writer = new FileWriter(tempFile);
                 BufferedWriter bufferedWriter = new BufferedWriter(writer)) {
                
                bufferedWriter.write("Hello, World!");
                bufferedWriter.newLine();
                bufferedWriter.write("This demonstrates try-with-resources.");
                
                System.out.println("   Successfully wrote to file: " + tempFile.getAbsolutePath());
            }
            
            // Read from file using try-with-resources
            try (FileReader reader = new FileReader(tempFile);
                 BufferedReader bufferedReader = new BufferedReader(reader)) {
                
                System.out.println("   Reading file contents:");
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    System.out.println("     " + line);
                }
            }
            
        } catch (IOException e) {
            System.out.println("   IOException: " + e.getMessage());
        } finally {
            // Clean up temporary file
            if (tempFile != null && tempFile.exists()) {
                tempFile.delete();
            }
        }
        
        System.out.println();
    }
    
    private static void demonstrateCustomAutoCloseable() {
        System.out.println("🔸 CUSTOM AUTOCLOSEABLE DEMONSTRATION");
        System.out.println("   ───────────────────────────────────");
        
        // Using custom AutoCloseable with try-with-resources
        try (DatabaseConnection conn = new DatabaseConnection("DB-001")) {
            conn.connect();
            conn.executeQuery("SELECT * FROM users");
            conn.executeQuery("INSERT INTO logs VALUES ('test')");
            System.out.println("   Database operations completed successfully");
        } catch (Exception e) {
            System.out.println("   Exception occurred: " + e.getMessage());
        }
        // Connection automatically closed here
        
        System.out.println();
    }
    
    private static void demonstrateCleanupExceptions() {
        System.out.println("🔸 CLEANUP EXCEPTION HANDLING DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────");
        
        // Demonstrate suppressed exceptions
        try {
            try (RiskyResource resource1 = new RiskyResource("Resource1", false);
                 RiskyResource resource2 = new RiskyResource("Resource2", true)) {
                
                resource1.use();
                resource2.use();
                
                // Simulate primary exception
                throw new RuntimeException("Primary exception during processing");
            }
        } catch (Exception e) {
            System.out.println("   Caught primary exception: " + e.getMessage());
            
            // Check for suppressed exceptions
            Throwable[] suppressed = e.getSuppressed();
            if (suppressed.length > 0) {
                System.out.println("   Suppressed exceptions during cleanup:");
                for (Throwable t : suppressed) {
                    System.out.println("     " + t.getMessage());
                }
            }
        }
        
        System.out.println();
    }
    
    private static void demonstrateBestPractices() {
        System.out.println("🔸 RESOURCE MANAGEMENT BEST PRACTICES");
        System.out.println("   ───────────────────────────────────");
        
        // Example of proper resource management with legacy code
        System.out.println("   Legacy resource management with finally block:");
        FileInputStream fis = null;
        BufferedReader reader = null;
        
        try {
            // Create temporary file
            File tempFile = File.createTempFile("legacy", ".txt");
            try (FileWriter writer = new FileWriter(tempFile)) {
                writer.write("Legacy resource management example");
            }
            
            // Legacy approach with explicit cleanup
            fis = new FileInputStream(tempFile);
            reader = new BufferedReader(new InputStreamReader(fis));
            
            String line = reader.readLine();
            System.out.println("   Read from file: " + line);
            
        } catch (IOException e) {
            System.out.println("   IOException: " + e.getMessage());
        } finally {
            // Explicit cleanup in finally block
            if (reader != null) {
                try {
                    reader.close();
                    System.out.println("   BufferedReader closed");
                } catch (IOException e) {
                    System.out.println("   Error closing BufferedReader: " + e.getMessage());
                }
            }
            if (fis != null) {
                try {
                    fis.close();
                    System.out.println("   FileInputStream closed");
                } catch (IOException e) {
                    System.out.println("   Error closing FileInputStream: " + e.getMessage());
                }
            }
            
            // Clean up temporary file
            File tempFile = new File("legacy.txt");
            if (tempFile.exists()) {
                tempFile.delete();
            }
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Finally block behavior in different scenarios             ║");
        System.out.println("║  • Try-with-resources for automatic resource management      ║");
        System.out.println("║  • Custom AutoCloseable implementations                      ║");
        System.out.println("║  • Resource cleanup best practices                           ║");
        System.out.println("║  • Exception handling during cleanup                         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use try-with-resources for AutoCloseable resources         ║");
        System.out.println("║  • Implement proper cleanup in finally blocks when needed    ║");
        System.out.println("║  • Make close() methods idempotent                           ║");
        System.out.println("║  • Handle cleanup exceptions gracefully                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1) Write a try-finally block to ensure a file is closed even if an exception occurs.
2) Create a custom class that implements AutoCloseable and use it in a try-with-resources block.
3) Demonstrate resource cleanup in a finally block when try-with-resources is not available.
`
  }
};