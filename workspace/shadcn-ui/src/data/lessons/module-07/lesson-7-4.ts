import { LessonContent } from '../../types/LessonTypes';

export const lesson_7_4: LessonContent = {
  title: 'Working with Directories',
  type: 'lesson',
  duration: '25 min',
  module: 'File I/O and Serialization',
  content: {
    overview: 'Learn how to work with directories in Java. This lesson covers directory creation, listing, traversal, and manipulation using both traditional I/O and NIO.2 APIs.',
    objectives: [
      'Master directory operations in Java',
      'Learn to create and manipulate directories',
      'Practice directory listing and filtering',
      'Understand directory traversal techniques',
      'Work with symbolic links and permissions',
      'Implement efficient directory management strategies'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Working with Directories
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Directory management and manipulation in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Directory Operations
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Directory operations are fundamental to file system management in Java applications. Whether you're building 
            a file manager, processing large datasets, or organizing application resources, understanding how to work 
            with directories efficiently is crucial.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Java provides two main approaches for directory operations: traditional java.io.File API and modern java.nio.file API, each with its own advantages.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Traditional Directory Operations (java.io.File)
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The File class provides basic directory operations:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Directory Creation</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• mkdir() - Create single directory</li>
                  <li>• mkdirs() - Create directory path</li>
                  <li>• Handle creation failures</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  File dir = new File("path/to/directory");<br/>
                  boolean created = dir.mkdirs();
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Directory Listing</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• list() - Get file names</li>
                  <li>• listFiles() - Get File objects</li>
                  <li>• listFiles(filter) - Filtered listing</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  File[] files = dir.listFiles();<br/>
                  for (File file : files) {<br/>
                  &nbsp;&nbsp;System.out.println(file.getName());<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Modern Directory Operations (NIO.2)
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">NIO.2 provides more powerful and flexible directory operations:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Directory creation<br/>
              Path dirPath = Paths.get("new/directory/path");<br/>
              Files.createDirectories(dirPath);<br/>
              <br/>
              // Directory listing with streams<br/>
              try (Stream<Path> paths = Files.list(dirPath)) {<br/>
              &nbsp;&nbsp;paths.filter(Files::isRegularFile)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(System.out::println);<br/>
              }<br/>
              <br/>
              // Directory walking<br/>
              try (Stream<Path> paths = Files.walk(dirPath)) {<br/>
              &nbsp;&nbsp;paths.filter(path -> path.toString().endsWith(".txt"))<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(System.out::println);<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">NIO.2 Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Files.createDirectory()</td>
                    <td class="p-3">Create single directory</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Files.createDirectories()</td>
                    <td class="p-3">Create directory path</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Files.list()</td>
                    <td class="p-3">List directory contents</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Files.walk()</td>
                    <td class="p-3">Walk directory tree</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Files.walkFileTree()</td>
                    <td class="p-3">Advanced directory traversal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Directory Traversal Techniques
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Different approaches for traversing directory structures:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Recursive Traversal</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Manual recursion with File API</li>
                  <li>• Depth-first search approach</li>
                  <li>• Control over traversal depth</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public void traverse(File dir) {<br/>
                  &nbsp;&nbsp;for (File file : dir.listFiles()) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;if (file.isDirectory()) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;traverse(file);<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">NIO.2 Traversal</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Files.walk() for streaming</li>
                  <li>• Files.walkFileTree() for visitor pattern</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Files.walkFileTree(startPath, new SimpleFileVisitor<Path>() {<br/>
                  &nbsp;&nbsp;@Override<br/>
                  &nbsp;&nbsp;public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;// Process file<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return FileVisitResult.CONTINUE;<br/>
                  &nbsp;&nbsp;}<br/>
                  });<br/>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm mt-4">
              // Complete directory traversal example<br/>
              try {<br/>
              &nbsp;&nbsp;Path startDir = Paths.get("src");<br/>
              &nbsp;&nbsp;Files.walkFileTree(startDir, new SimpleFileVisitor<Path>() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;@Override<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throws IOException {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (file.toString().endsWith(".java")) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Found Java file: " + file);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return FileVisitResult.CONTINUE;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;});<br/>
              } catch (IOException e) {<br/>
              &nbsp;&nbsp;System.err.println("Error walking directory tree: " + e.getMessage());<br/>
              }
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Symbolic Links and Permissions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Working with symbolic links and file permissions:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Symbolic Links</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Creating symbolic links</li>
                  <li>• Detecting symbolic links</li>
                  <li>• Controlling link following behavior</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Create symbolic link<br/>
                  Path link = Paths.get("link.txt");<br/>
                  Path target = Paths.get("target.txt");<br/>
                  Files.createSymbolicLink(link, target);<br/>
                  <br/>
                  // Check if path is symbolic link<br/>
                  boolean isLink = Files.isSymbolicLink(link);
                </div>
              </div>
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">File Permissions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Reading file permissions</li>
                  <li>• Setting file permissions</li>
                  <li>• POSIX file permissions (Unix/Linux)</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Read POSIX permissions<br/>
                  Set<PosixFilePermission> perms = Files.getPosixFilePermissions(path);<br/>
                  <br/>
                  // Set POSIX permissions<br/>
                  Set<PosixFilePermission> newPerms = PosixFilePermissions.fromString("rw-r--r--");<br/>
                  Files.setPosixFilePermissions(path, newPerms);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Directory Operations</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use NIO.2 for modern applications</li>
                <li>• Handle IOException properly</li>
                <li>• Check file/directory existence before operations</li>
                <li>• Use try-with-resources for automatic cleanup</li>
                <li>• Validate paths to prevent security issues</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't ignore IOException without justification</li>
                <li>• Don't use deprecated File methods unnecessarily</li>
                <li>• Don't hardcode file paths</li>
                <li>• Don't assume file system behavior across platforms</li>
                <li>• Don't forget to handle symbolic links properly</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * DirectoryOperationsDemo.java
 * 
 * This comprehensive example demonstrates directory operations in Java:
 * - Traditional File API directory operations
 * - Modern NIO.2 directory operations
 * - Directory traversal techniques
 * - Symbolic links and permissions
 * - Best practices for directory management
 * 
 * Run this program to see directory operations in practice.
 */

import java.io.*;
import java.nio.file.*;
import java.nio.file.attribute.*;
import java.util.*;
import java.util.stream.Stream;

public class DirectoryOperationsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate traditional directory operations
        demonstrateTraditionalOperations();
        
        // Demonstrate NIO.2 directory operations
        demonstrateNIO2Operations();
        
        // Demonstrate directory traversal
        demonstrateDirectoryTraversal();
        
        // Demonstrate symbolic links and permissions
        demonstrateLinksAndPermissions();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         DIRECTORY OPERATIONS DEMO                            ║");
        System.out.println("║         Working with Directories in Java                     ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateTraditionalOperations() {
        System.out.println("🔸 TRADITIONAL DIRECTORY OPERATIONS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────────────");
        
        try {
            // Create directories using File API
            File baseDir = new File("traditional_demo");
            if (baseDir.mkdir()) {
                System.out.println("   Created base directory: " + baseDir.getAbsolutePath());
            }
            
            // Create nested directories
            File nestedDir = new File(baseDir, "nested/subdir");
            if (nestedDir.mkdirs()) {
                System.out.println("   Created nested directories: " + nestedDir.getAbsolutePath());
            }
            
            // Create some files
            File file1 = new File(baseDir, "file1.txt");
            File file2 = new File(nestedDir, "file2.txt");
            file1.createNewFile();
            file2.createNewFile();
            System.out.println("   Created sample files");
            
            // List directory contents
            System.out.println("   Contents of base directory:");
            File[] files = baseDir.listFiles();
            if (files != null) {
                for (File file : files) {
                    System.out.println("     " + file.getName() + (file.isDirectory() ? "/" : ""));
                }
            }
            
            // Filter directory contents
            System.out.println("   Text files in base directory:");
            File[] textFiles = baseDir.listFiles((dir, name) -> name.endsWith(".txt"));
            if (textFiles != null) {
                for (File file : textFiles) {
                    System.out.println("     " + file.getName());
                }
            }
            
            // Clean up
            file2.delete();
            file1.delete();
            new File(nestedDir, "subdir").delete();
            nestedDir.delete();
            baseDir.delete();
            System.out.println("   Cleaned up traditional demo directory");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateNIO2Operations() {
        System.out.println("🔸 NIO.2 DIRECTORY OPERATIONS DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────");
        
        try {
            // Create directories using NIO.2
            Path baseDir = Files.createTempDirectory("nio2_demo");
            System.out.println("   Created base directory: " + baseDir);
            
            // Create nested directories
            Path nestedDir = baseDir.resolve("nested/subdir");
            Files.createDirectories(nestedDir);
            System.out.println("   Created nested directories: " + nestedDir);
            
            // Create some files
            Path file1 = baseDir.resolve("file1.txt");
            Path file2 = nestedDir.resolve("file2.txt");
            Files.createFile(file1);
            Files.createFile(file2);
            System.out.println("   Created sample files");
            
            // List directory contents with Files.list()
            System.out.println("   Contents of base directory:");
            try (Stream<Path> paths = Files.list(baseDir)) {
                paths.forEach(path -> System.out.println("     " + path.getFileName() + 
                                         (Files.isDirectory(path) ? "/" : "")));
            }
            
            // Filter directory contents
            System.out.println("   Text files in base directory:");
            try (Stream<Path> paths = Files.list(baseDir)) {
                paths.filter(path -> path.toString().endsWith(".txt"))
                     .forEach(path -> System.out.println("     " + path.getFileName()));
            }
            
            // Get directory information
            System.out.println("   Directory information:");
            System.out.println("     Exists: " + Files.exists(baseDir));
            System.out.println("     Is directory: " + Files.isDirectory(baseDir));
            System.out.println("     Directory size: " + Files.size(baseDir) + " bytes");
            
            // Clean up
            Files.delete(file2);
            Files.delete(file1);
            Files.delete(nestedDir.resolve("subdir"));
            Files.delete(nestedDir);
            Files.delete(baseDir);
            System.out.println("   Cleaned up NIO.2 demo directory");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateDirectoryTraversal() {
        System.out.println("🔸 DIRECTORY TRAVERSAL DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        try {
            // Create a directory structure for traversal
            Path baseDir = Files.createTempDirectory("traversal_demo");
            Path dir1 = baseDir.resolve("dir1");
            Path dir2 = baseDir.resolve("dir2");
            Path subdir = dir1.resolve("subdir");
            
            Files.createDirectories(subdir);
            Files.createDirectories(dir2);
            
            // Create some files
            Files.createFile(baseDir.resolve("root.txt"));
            Files.createFile(dir1.resolve("file1.txt"));
            Files.createFile(dir1.resolve("file2.java"));
            Files.createFile(subdir.resolve("subfile.txt"));
            Files.createFile(dir2.resolve("file3.txt"));
            
            System.out.println("   Directory structure created for traversal demo");
            
            // Walk directory tree with Files.walk()
            System.out.println("   Walking directory tree with Files.walk():");
            try (Stream<Path> paths = Files.walk(baseDir)) {
                paths.filter(Files::isRegularFile)
                     .forEach(path -> System.out.println("     " + baseDir.relativize(path)));
            }
            
            // Find specific files with Files.walk()
            System.out.println("   Finding .java files with Files.walk():");
            try (Stream<Path> paths = Files.walk(baseDir)) {
                paths.filter(path -> path.toString().endsWith(".java"))
                     .forEach(path -> System.out.println("     " + baseDir.relativize(path)));
            }
            
            // Walk directory tree with Files.walkFileTree()
            System.out.println("   Walking directory tree with Files.walkFileTree():");
            Files.walkFileTree(baseDir, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) 
                        throws IOException {
                    if (Files.isRegularFile(file)) {
                        System.out.println("     File: " + baseDir.relativize(file) + 
                                         " (" + attrs.size() + " bytes)");
                    }
                    return FileVisitResult.CONTINUE;
                }
                
                @Override
                public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) 
                        throws IOException {
                    System.out.println("     Directory: " + baseDir.relativize(dir));
                    return FileVisitResult.CONTINUE;
                }
            });
            
            // Clean up
            Files.walk(baseDir)
                 .sorted(Comparator.reverseOrder())
                 .map(Path::toFile)
                 .forEach(File::delete);
            System.out.println("   Cleaned up traversal demo directory");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateLinksAndPermissions() {
        System.out.println("🔸 SYMBOLIC LINKS AND PERMISSIONS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────────────");
        
        try {
            // Create a temporary directory for link demo
            Path baseDir = Files.createTempDirectory("links_demo");
            System.out.println("   Created demo directory: " + baseDir);
            
            // Create a target file
            Path targetFile = baseDir.resolve("target.txt");
            Files.write(targetFile, Arrays.asList("This is the target file content."));
            System.out.println("   Created target file: " + targetFile);
            
            // Create a symbolic link
            Path linkFile = baseDir.resolve("link.txt");
            Files.createSymbolicLink(linkFile, targetFile.getFileName());
            System.out.println("   Created symbolic link: " + linkFile);
            
            // Check if path is symbolic link
            System.out.println("   Is link file a symbolic link: " + Files.isSymbolicLink(linkFile));
            System.out.println("   Is target file a symbolic link: " + Files.isSymbolicLink(targetFile));
            
            // Read file through symbolic link
            System.out.println("   Content read through symbolic link:");
            List<String> lines = Files.readAllLines(linkFile);
            lines.forEach(line -> System.out.println("     " + line));
            
            // Get file permissions (POSIX systems)
            try {
                Set<PosixFilePermission> perms = Files.getPosixFilePermissions(targetFile);
                System.out.println("   File permissions: " + PosixFilePermissions.toString(perms));
                
                // Set new permissions
                Set<PosixFilePermission> newPerms = new HashSet<>(perms);
                newPerms.remove(PosixFilePermission.OTHERS_WRITE);
                Files.setPosixFilePermissions(targetFile, newPerms);
                System.out.println("   Updated permissions to remove others write access");
                
                // Verify new permissions
                Set<PosixFilePermission> updatedPerms = Files.getPosixFilePermissions(targetFile);
                System.out.println("   Updated permissions: " + PosixFilePermissions.toString(updatedPerms));
            } catch (UnsupportedOperationException e) {
                System.out.println("   POSIX permissions not supported on this system");
            }
            
            // Clean up
            Files.delete(linkFile);
            Files.delete(targetFile);
            Files.delete(baseDir);
            System.out.println("   Cleaned up links demo directory");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
            System.out.println("   Note: Creating symbolic links may require special permissions on some systems");
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Traditional directory operations with File API            ║");
        System.out.println("║  • Modern directory operations with NIO.2                    ║");
        System.out.println("║  • Directory traversal techniques                            ║");
        System.out.println("║  • Symbolic links and file permissions                       ║");
        System.out.println("║  • Best practices for directory management                   ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use NIO.2 for modern applications                         ║");
        System.out.println("║  • Handle IOException properly                               ║");
        System.out.println("║  • Check file/directory existence before operations          ║");
        System.out.println("║  • Validate paths to prevent security issues                 ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1) Create a directory structure with nested folders using Files.createDirectories().
2) Write a program that lists all files in a directory and filters only .txt files.
3) Implement a method that walks through a directory tree and counts all files.
`
  }
};
