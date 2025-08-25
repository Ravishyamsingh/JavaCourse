import { LessonContent } from '../../types/LessonTypes';

export const lesson_7_1: LessonContent = {
  title: 'File and Directory Operations',
  type: 'lesson',
  duration: '25 min',
  module: 'File I/O Operations',
  content: {
    overview: 'Learn about file and directory operations in Java. This lesson covers the java.io and java.nio packages, file system navigation, and basic file operations including creating, reading, and writing files.',
    objectives: [
      'Understand Java file I/O packages and classes',
      'Learn file and directory manipulation techniques',
      'Practice file system navigation and path operations',
      'Master basic file operations (create, read, write, delete)',
      'Understand file attributes and permissions',
      'Learn best practices for file handling'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          File and Directory Operations
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Working with files and directories in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to File I/O in Java
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java provides two main packages for file I/O operations: java.io and java.nio (New I/O). 
            The java.io package offers stream-based I/O, while java.nio provides channel-based I/O 
            with better performance and more features.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Java's file I/O system allows you to interact with the file system, manipulate files and directories, and perform various I/O operations efficiently.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Java I/O Packages Overview
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the key packages for file operations:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-green-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Package</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Key Classes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">java.io</td>
                    <td class="p-3">Stream-based I/O operations</td>
                    <td class="p-3">File, FileInputStream, FileOutputStream, FileReader, FileWriter</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">java.nio.file</td>
                    <td class="p-3">Path-based I/O operations (NIO.2)</td>
                    <td class="p-3">Path, Paths, Files, FileSystem</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">java.nio.channels</td>
                    <td class="p-3">Channel-based I/O operations</td>
                    <td class="p-3">FileChannel, SeekableByteChannel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            File Class Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The File class provides basic file and directory manipulation:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">File Creation and Information</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Creating File objects with paths</li>
                  <li>• Checking file/directory existence</li>
                  <li>• Getting file attributes (size, dates)</li>
                  <li>• Listing directory contents</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  File file = new File("example.txt");<br/>
                  boolean exists = file.exists();<br/>
                  long size = file.length();
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">File Manipulation</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Creating new files and directories</li>
                  <li>• Deleting files and directories</li>
                  <li>• Renaming and moving files</li>
                  <li>• Setting file permissions</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  boolean created = file.createNewFile();<br/>
                  boolean deleted = file.delete();<br/>
                  boolean renamed = file.renameTo(new File("newname.txt"));
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Path and NIO.2 Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Modern file operations with java.nio.file package:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Creating paths<br/>
              Path path = Paths.get("documents", "example.txt");<br/>
              Path absolutePath = path.toAbsolutePath();<br/>
              <br/>
              // File operations with Files class<br/>
              boolean exists = Files.exists(path);<br/>
              List<String> lines = Files.readAllLines(path);<br/>
              Files.write(path, "Hello, World!".getBytes());
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Operation</th>
                    <th class="text-left p-3 font-bold border-b">NIO.2 Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3">Check file existence</td>
                    <td class="p-3 font-mono">Files.exists(path)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Create directories</td>
                    <td class="p-3 font-mono">Files.createDirectories(path)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Copy files</td>
                    <td class="p-3 font-mono">Files.copy(source, target)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Delete files</td>
                    <td class="p-3 font-mono">Files.delete(path)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Read file attributes</td>
                    <td class="p-3 font-mono">Files.getAttribute(path, "size")</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Directory Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Working with directories and directory trees:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Directory Creation and Listing</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Creating single and nested directories</li>
                  <li>• Listing directory contents</li>
                  <li>• Filtering files and directories</li>
                  <li>• Walking directory trees</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Directory Navigation</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Getting current working directory</li>
                  <li>• Resolving relative paths</li>
                  <li>• Getting parent and subdirectories</li>
                  <li>• Checking directory permissions</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // List directory contents<br/>
              try (Stream<Path> paths = Files.list(Paths.get("."))) {<br/>
              &nbsp;&nbsp;paths.filter(Files::isRegularFile)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(System.out::println);<br/>
              }<br/>
              <br/>
              // Walk directory tree<br/>
              try (Stream<Path> paths = Files.walk(Paths.get("documents"))) {<br/>
              &nbsp;&nbsp;paths.filter(Files::isRegularFile)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(path -> path.toString().endsWith(".txt"))<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(System.out::println);<br/>
              }
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for File Operations</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always check file/directory existence before operations</li>
                <li>• Use try-with-resources for automatic resource management</li>
                <li>• Handle IOException and related exceptions properly</li>
                <li>• Use NIO.2 (java.nio.file) for modern applications</li>
                <li>• Validate file paths to prevent security issues</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't ignore IOException without justification</li>
                <li>• Don't use deprecated file I/O methods</li>
                <li>• Don't hardcode file paths - use configuration</li>
                <li>• Don't forget to close file resources</li>
                <li>• Don't assume file system behavior across platforms</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * FileAndDirectoryOperationsDemo.java
 * 
 * This comprehensive example demonstrates file and directory operations in Java:
 * - File class operations for basic file manipulation
 * - NIO.2 operations with Path and Files classes
 * - Directory creation and navigation
 * - File system attributes and permissions
 * - Best practices for file handling
 * 
 * Run this program to see file operations in practice.
 */

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;
import java.util.stream.Stream;

public class FileAndDirectoryOperationsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate File class operations
        demonstrateFileClass();
        
        // Demonstrate NIO.2 operations
        demonstrateNIO2Operations();
        
        // Demonstrate directory operations
        demonstrateDirectoryOperations();
        
        // Demonstrate file attributes
        demonstrateFileAttributes();
        
        // Demonstrate best practices
        demonstrateBestPractices();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         FILE AND DIRECTORY OPERATIONS DEMO                   ║");
        System.out.println("║         Working with Files and Directories in Java           ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateFileClass() {
        System.out.println("🔸 FILE CLASS OPERATIONS DEMONSTRATION");
        System.out.println("   ────────────────────────────────────");
        
        try {
            // Create a temporary file for demonstration
            File tempFile = File.createTempFile("demo", ".txt");
            System.out.println("   Created temporary file: " + tempFile.getAbsolutePath());
            
            // File information
            System.out.println("   File exists: " + tempFile.exists());
            System.out.println("   File name: " + tempFile.getName());
            System.out.println("   File path: " + tempFile.getPath());
            System.out.println("   Absolute path: " + tempFile.getAbsolutePath());
            System.out.println("   File size: " + tempFile.length() + " bytes");
            System.out.println("   Is file: " + tempFile.isFile());
            System.out.println("   Is directory: " + tempFile.isDirectory());
            System.out.println("   Can read: " + tempFile.canRead());
            System.out.println("   Can write: " + tempFile.canWrite());
            
            // Write to file using File class
            try (FileWriter writer = new FileWriter(tempFile)) {
                writer.write("Hello, World!\\n");
                writer.write("This is a demonstration of File class operations.\\n");
                System.out.println("   Wrote content to file");
            }
            
            // Read from file using File class
            try (FileReader reader = new FileReader(tempFile);
                 BufferedReader bufferedReader = new BufferedReader(reader)) {
                
                System.out.println("   Reading file contents:");
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    System.out.println("     " + line);
                }
            }
            
            // Delete the temporary file
            if (tempFile.delete()) {
                System.out.println("   Deleted temporary file");
            }
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateNIO2Operations() {
        System.out.println("🔸 NIO.2 OPERATIONS DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        try {
            // Create a temporary directory for demonstration
            Path tempDir = Files.createTempDirectory("nio2_demo");
            System.out.println("   Created temporary directory: " + tempDir);
            
            // Create a file using NIO.2
            Path tempFile = tempDir.resolve("example.txt");
            System.out.println("   Creating file: " + tempFile);
            
            // Write to file using Files class
            List<String> lines = Arrays.asList(
                "Hello, NIO.2!",
                "This demonstrates modern file operations.",
                "NIO.2 provides better performance and features."
            );
            Files.write(tempFile, lines);
            System.out.println("   Wrote content to file using NIO.2");
            
            // Read file using Files class
            System.out.println("   Reading file contents with NIO.2:");
            List<String> readLines = Files.readAllLines(tempFile);
            for (String line : readLines) {
                System.out.println("     " + line);
            }
            
            // Copy file
            Path copyFile = tempDir.resolve("example_copy.txt");
            Files.copy(tempFile, copyFile);
            System.out.println("   Copied file to: " + copyFile);
            
            // Get file information
            System.out.println("   File size: " + Files.size(tempFile) + " bytes");
            System.out.println("   File exists: " + Files.exists(tempFile));
            System.out.println("   Is regular file: " + Files.isRegularFile(tempFile));
            
            // Delete files and directory
            Files.delete(copyFile);
            Files.delete(tempFile);
            Files.delete(tempDir);
            System.out.println("   Cleaned up temporary files and directory");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateDirectoryOperations() {
        System.out.println("🔸 DIRECTORY OPERATIONS DEMONSTRATION");
        System.out.println("   ───────────────────────────────────");
        
        try {
            // Create a temporary directory structure
            Path baseDir = Files.createTempDirectory("dir_demo");
            System.out.println("   Created base directory: " + baseDir);
            
            // Create nested directories
            Path docsDir = baseDir.resolve("documents");
            Path imagesDir = baseDir.resolve("images");
            Path docsSubDir = docsDir.resolve("subfolder");
            
            Files.createDirectories(docsDir);
            Files.createDirectories(imagesDir);
            Files.createDirectories(docsSubDir);
            System.out.println("   Created directory structure");
            
            // Create some files
            Files.write(docsDir.resolve("doc1.txt"), "Document 1 content".getBytes());
            Files.write(docsDir.resolve("doc2.txt"), "Document 2 content".getBytes());
            Files.write(imagesDir.resolve("image1.png"), "PNG image data".getBytes());
            Files.write(docsSubDir.resolve("subdoc.txt"), "Subfolder document".getBytes());
            System.out.println("   Created sample files");
            
            // List directory contents
            System.out.println("   Contents of documents directory:");
            try (Stream<Path> paths = Files.list(docsDir)) {
                paths.forEach(path -> System.out.println("     " + path.getFileName()));
            }
            
            // Walk directory tree
            System.out.println("   Walking directory tree:");
            try (Stream<Path> paths = Files.walk(baseDir)) {
                paths.filter(Files::isRegularFile)
                     .forEach(path -> System.out.println("     File: " + baseDir.relativize(path)));
            }
            
            // Clean up
            Files.walk(baseDir)
                 .sorted(Comparator.reverseOrder())
                 .map(Path::toFile)
                 .forEach(File::delete);
            System.out.println("   Cleaned up directory structure");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateFileAttributes() {
        System.out.println("🔸 FILE ATTRIBUTES DEMONSTRATION");
        System.out.println("   ──────────────────────────────");
        
        try {
            // Create a temporary file
            Path tempFile = Files.createTempFile("attributes", ".txt");
            Files.write(tempFile, "Attribute demonstration".getBytes());
            
            // Get basic file attributes
            BasicFileAttributes attrs = Files.readAttributes(tempFile, BasicFileAttributes.class);
            System.out.println("   File creation time: " + attrs.creationTime());
            System.out.println("   File last modified: " + attrs.lastModifiedTime());
            System.out.println("   File last accessed: " + attrs.lastAccessTime());
            System.out.println("   File size: " + attrs.size() + " bytes");
            System.out.println("   Is directory: " + attrs.isDirectory());
            System.out.println("   Is regular file: " + attrs.isRegularFile());
            System.out.println("   Is symbolic link: " + attrs.isSymbolicLink());
            
            // Get POSIX file permissions (if supported)
            try {
                Set<PosixFilePermission> permissions = Files.getPosixFilePermissions(tempFile);
                System.out.println("   File permissions: " + permissions);
            } catch (UnsupportedOperationException e) {
                System.out.println("   POSIX permissions not supported on this system");
            }
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateBestPractices() {
        System.out.println("🔸 BEST PRACTICES DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        // Example of proper resource management with try-with-resources
        try {
            Path tempFile = Files.createTempFile("best_practices", ".txt");
            
            // Writing with try-with-resources
            try (BufferedWriter writer = Files.newBufferedWriter(tempFile)) {
                writer.write("This demonstrates best practices for file I/O.");
                writer.newLine();
                writer.write("Using try-with-resources ensures proper cleanup.");
            }
            System.out.println("   Successfully wrote file with proper resource management");
            
            // Reading with try-with-resources
            try (BufferedReader reader = Files.newBufferedReader(tempFile)) {
                String line = reader.readLine();
                System.out.println("   Read from file: " + line);
            }
            System.out.println("   Successfully read file with proper resource management");
            
            // Check existence before operations
            Path newPath = Paths.get("example.txt");
            if (!Files.exists(newPath)) {
                System.out.println("   File does not exist, safe to create");
            } else {
                System.out.println("   File exists, consider handling appropriately");
            }
            
            // Clean up
            Files.deleteIfExists(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
            // In real applications, you might want to log this or handle it differently
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • File class operations for basic file manipulation         ║");
        System.out.println("║  • NIO.2 operations with Path and Files classes              ║");
        System.out.println("║  • Directory creation and navigation                         ║");
        System.out.println("║  • File system attributes and permissions                    ║");
        System.out.println("║  • Best practices for file handling                          ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always check file/directory existence before operations    ║");
        System.out.println("║  • Use try-with-resources for automatic resource management   ║");
        System.out.println("║  • Handle IOException and related exceptions properly         ║");
        System.out.println("║  • Use NIO.2 (java.nio.file) for modern applications          ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         FILE AND DIRECTORY OPERATIONS DEMO                   ║
 * ║         Working with Files and Directories in Java           ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 FILE CLASS OPERATIONS DEMONSTRATION
 *    ────────────────────────────────────
 *    Created temporary file: /tmp/demo12345.txt
 *    File exists: true
 *    File name: demo12345.txt
 *    File path: /tmp/demo12345.txt
 *    Absolute path: /tmp/demo12345.txt
 *    File size: 0 bytes
 *    Is file: true
 *    Is directory: false
 *    Can read: true
 *    Can write: true
 *    Wrote content to file
 *    Reading file contents:
 *      Hello, World!
 *      This is a demonstration of File class operations.
 *    Deleted temporary file
 * 
 * 🔸 NIO.2 OPERATIONS DEMONSTRATION
 *    ───────────────────────────────
 *    Created temporary directory: /tmp/nio2_demo12345
 *    Creating file: /tmp/nio2_demo12345/example.txt
 *    Wrote content to file using NIO.2
 *    Reading file contents with NIO.2:
 *      Hello, NIO.2!
 *      This demonstrates modern file operations.
 *      NIO.2 provides better performance and features.
 *    Copied file to: /tmp/nio2_demo12345/example_copy.txt
 *    File size: 70 bytes
 *    File exists: true
 *    Is regular file: true
 *    Cleaned up temporary files and directory
 * 
 * 🔸 DIRECTORY OPERATIONS DEMONSTRATION
 *    ───────────────────────────────────
 *    Created base directory: /tmp/dir_demo12345
 *    Created directory structure
 *    Created sample files
 *    Contents of documents directory:
 *      doc1.txt
 *      doc2.txt
 *      subfolder
 *    Walking directory tree:
 *      File: documents/doc1.txt
 *      File: documents/doc2.txt
 *      File: documents/subfolder/subdoc.txt
 *      File: images/image1.png
 *    Cleaned up directory structure
 * 
 * 🔸 FILE ATTRIBUTES DEMONSTRATION
 *    ──────────────────────────────
 *    File creation time: 2024-01-15T10:30:45.123456Z
 *    File last modified: 2024-01-15T10:30:45.123456Z
 *    File last accessed: 2024-01-15T10:30:45.123456Z
 *    File size: 22 bytes
 *    Is directory: false
 *    Is regular file: true
 *    Is symbolic link: false
 *    POSIX permissions not supported on this system
 *    Cleaned up temporary file
 * 
 * 🔸 BEST PRACTICES DEMONSTRATION
 *    ─────────────────────────────
 *    Successfully wrote file with proper resource management
 *    Read from file: This demonstrates best practices for file I/O.
 *    Successfully read file with proper resource management
 *    File does not exist, safe to create
 *    Cleaned up temporary file
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 File and Directory Operations Practice Exercise**

      Create comprehensive programs to practice file and directory operations in Java.

      **Part 1: File Manager Application**
      
      Create a program called \`FileManager.java\` that implements a file management system:
      
      Requirements:
      - Create, read, update, and delete files
      - List directory contents with filtering options
      - Copy and move files between directories
      - Display file information and attributes
      
      Features to implement:
      - Command-line interface for file operations
      - File search and filtering capabilities
      - Batch operations for multiple files
      - Error handling for file system operations

      **Part 2: Directory Scanner**
      
      Create a program called \`DirectoryScanner.java\` that scans directories and reports on their contents:
      
      Requirements:
      - Recursively scan directory trees
      - Generate detailed reports on file types and sizes
      - Identify duplicate files based on content
      - Export scan results to different formats
      
      Advanced Features:
      - Configurable scan depth and filtering
      - Performance optimization for large directories
      - Progress tracking for long-running scans
      - Integration with file system monitoring

      **Part 3: File Backup System**
      
      Create a program called \`FileBackupSystem.java\` that implements automated file backup functionality:
      
      Requirements:
      - Create backups of specified files and directories
      - Implement incremental backup strategies
      - Schedule automatic backups
      - Verify backup integrity
      
      Features to implement:
      - Backup compression and encryption
      - Backup rotation and retention policies
      - Restore functionality from backups
      - Backup scheduling and automation

      **Part 4: Log File Analyzer**
      
      Create a program called \`LogFileAnalyzer.java\` that processes and analyzes log files:
      
      Requirements:
      - Parse different log file formats
      - Extract and analyze log data
      - Generate statistical reports
      - Identify patterns and anomalies
      
      Advanced Features:
      - Real-time log monitoring
      - Filter and search capabilities
      - Export analysis results
      - Integration with alerting systems

      **Part 5: File Synchronization Tool**
      
      Create a program called \`FileSyncTool.java\` that synchronizes files between directories:
      
      Requirements:
      - Compare file contents and timestamps
      - Synchronize files in both directions
      - Handle conflicts and merge operations
      - Support exclude patterns and filters
      
      Features to implement:
      - Preview synchronization operations
      - Dry-run mode for testing
      - Progress tracking and reporting
      - Configuration file support

      **Deliverables:**
      Submit the following files:
      1. \`FileManager.java\` - File management application
      2. \`DirectoryScanner.java\` - Directory scanning tool
      3. \`FileBackupSystem.java\` - Automated backup system
      4. \`LogFileAnalyzer.java\` - Log file analysis tool
      5. \`FileSyncTool.java\` - File synchronization utility
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of file and directory operations
      - ✅ Understanding of java.io and java.nio.file packages
      - ✅ Proper use of file system APIs
      - ✅ Effective error handling for file operations
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive file management capabilities
      - ✅ Application of best practices for file handling

      **💡 Bonus Challenges:**
      
      1. Advanced File Operations: Implement sophisticated file processing algorithms
      2. Performance Optimization: Add performance tracking to file operations
      3. Cross-Platform Compatibility: Design file operations for multiple platforms
      4. Security Features: Add encryption and security to file operations
      5. Extensibility: Create frameworks for reusable file operation components
    `
  }
};