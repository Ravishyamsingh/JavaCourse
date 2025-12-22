import { LessonContent } from '../../types/LessonTypes';

export const lesson_7_2: LessonContent = {
  title: 'Reading Files',
  type: 'coding',
  duration: '30 min',
  module: 'File I/O Operations',
  content: {
    overview: 'Master file reading techniques in Java. This lesson covers different approaches to reading files including byte streams, character streams, buffered reading, and NIO.2 operations for efficient file reading.',
    objectives: [
      'Learn different file reading approaches in Java',
      'Master byte streams and character streams for file reading',
      'Practice buffered reading for improved performance',
      'Understand NIO.2 file reading operations',
      'Handle file reading exceptions effectively',
      'Implement efficient file reading strategies'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Reading Files
        </h1>
        <p class="mt-3 text-green-100 text-lg">Efficient file reading techniques in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            File Reading Approaches
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java provides multiple approaches for reading files, each with its own advantages and use cases. 
            Choosing the right approach depends on factors like file size, performance requirements, and 
            the type of data being read.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">Efficient file reading requires choosing the appropriate approach based on file characteristics and performance requirements.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Byte Streams vs Character Streams
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the difference between byte and character streams:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Byte Streams</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Read raw bytes from files</li>
                  <li>• Suitable for binary files</li>
                  <li>• Classes: FileInputStream, FileOutputStream</li>
                  <li>• No character encoding handling</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  FileInputStream fis = new FileInputStream("file.bin");<br/>
                  int byte = fis.read();
                </div>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Character Streams</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Read characters with encoding support</li>
                  <li>• Suitable for text files</li>
                  <li>• Classes: FileReader, FileWriter</li>
                  <li>• Handle character encoding automatically</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  FileReader fr = new FileReader("file.txt");<br/>
                  int char = fr.read();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Buffered Reading
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Buffered streams improve reading performance by reducing system calls:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Buffered byte stream<br/>
              try (BufferedInputStream bis = new BufferedInputStream(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;new FileInputStream("large-file.bin"))) {<br/>
              &nbsp;&nbsp;int byte;<br/>
              &nbsp;&nbsp;while ((byte = bis.read()) != -1) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// Process byte<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Buffered character stream<br/>
              try (BufferedReader br = new BufferedReader(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;new FileReader("large-file.txt"))) {<br/>
              &nbsp;&nbsp;String line;<br/>
              &nbsp;&nbsp;while ((line = br.readLine()) != null) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// Process line<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-orange-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Buffered Class</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Buffer Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">BufferedInputStream</td>
                    <td class="p-3">Buffered byte input</td>
                    <td class="p-3">8192 bytes (default)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">BufferedReader</td>
                    <td class="p-3">Buffered character input</td>
                    <td class="p-3">8192 characters (default)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">BufferedOutputStream</td>
                    <td class="p-3">Buffered byte output</td>
                    <td class="p-3">8192 bytes (default)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">BufferedWriter</td>
                    <td class="p-3">Buffered character output</td>
                    <td class="p-3">8192 characters (default)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            NIO.2 Reading Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Modern file reading with java.nio.file package:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Read all bytes<br/>
              byte[] bytes = Files.readAllBytes(Paths.get("file.bin"));<br/>
              <br/>
              // Read all lines<br/>
              List<String> lines = Files.readAllLines(Paths.get("file.txt"));<br/>
              <br/>
              // Read with streams (for large files)<br/>
              try (Stream<String> lines = Files.lines(Paths.get("large-file.txt"))) {<br/>
              &nbsp;&nbsp;lines.filter(line -> line.contains("keyword"))<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.forEach(System.out::println);<br/>
              }
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Simple Reading Methods</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Files.readAllBytes() - Read entire file as bytes</li>
                  <li>• Files.readAllLines() - Read entire file as lines</li>
                  <li>• Files.readString() - Read entire file as string (Java 11+)</li>
                  <li>• Best for small to medium files</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Stream-Based Reading</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Files.lines() - Stream of lines</li>
                  <li>• Files.walk() - Stream of paths</li>
                  <li>• Memory efficient for large files</li>
                  <li>• Supports filtering and processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Reading Strategies for Different Scenarios
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Choosing the right reading strategy based on requirements:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-red-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Scenario</th>
                    <th class="text-left p-3 font-bold border-b">Recommended Approach</th>
                    <th class="text-left p-3 font-bold border-b">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3">Small text files</td>
                    <td class="p-3">Files.readAllLines()</td>
                    <td class="p-3">Simple and efficient</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Large text files</td>
                    <td class="p-3">BufferedReader with Files.newBufferedReader()</td>
                    <td class="p-3">Memory efficient line-by-line processing</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Binary files</td>
                    <td class="p-3">BufferedInputStream</td>
                    <td class="p-3">Efficient byte-level reading</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Configuration files</td>
                    <td class="p-3">Files.readString() (Java 11+)</td>
                    <td class="p-3">Simple string reading</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Log file analysis</td>
                    <td class="p-3">Files.lines() with streams</td>
                    <td class="p-3">Filtering and processing capabilities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for File Reading</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use try-with-resources for automatic resource management</li>
                <li>• Choose appropriate buffer sizes for performance</li>
                <li>• Handle character encoding explicitly when needed</li>
                <li>• Use NIO.2 for modern applications</li>
                <li>• Consider memory usage for large files</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't read entire large files into memory</li>
                <li>• Don't forget to close file resources</li>
                <li>• Don't ignore IOException without justification</li>
                <li>• Don't use deprecated I/O methods</li>
                <li>• Don't assume default character encoding</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ReadingFilesDemo.java
 * 
 * This comprehensive example demonstrates different file reading techniques in Java:
 * - Byte streams and character streams
 * - Buffered reading for improved performance
 * - NIO.2 reading operations
 * - Reading strategies for different scenarios
 * - Best practices for file reading
 * 
 * Run this program to see file reading techniques in practice.
 */

import java.io.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Stream;

public class ReadingFilesDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate byte stream reading
        demonstrateByteStreamReading();
        
        // Demonstrate character stream reading
        demonstrateCharacterStreamReading();
        
        // Demonstrate buffered reading
        demonstrateBufferedReading();
        
        // Demonstrate NIO.2 reading
        demonstrateNIO2Reading();
        
        // Demonstrate reading strategies
        demonstrateReadingStrategies();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              READING FILES DEMO                              ║");
        System.out.println("║         Efficient File Reading Techniques in Java            ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateByteStreamReading() {
        System.out.println("🔸 BYTE STREAM READING DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        try {
            // Create a temporary file with binary data
            Path tempFile = Files.createTempFile("byte_demo", ".bin");
            byte[] data = {0x48, 0x65, 0x6C, 0x6C, 0x6F, 0x20, 0x57, 0x6F, 0x72, 0x6C, 0x64}; // "Hello World"
            Files.write(tempFile, data);
            
            System.out.println("   Reading binary file with FileInputStream:");
            
            // Read using FileInputStream
            try (FileInputStream fis = new FileInputStream(tempFile.toFile())) {
                int byteValue;
                System.out.print("   Bytes read: ");
                while ((byteValue = fis.read()) != -1) {
                    System.out.print(String.format("0x%02X ", byteValue));
                }
                System.out.println();
            }
            
            // Read all bytes at once
            byte[] allBytes = Files.readAllBytes(tempFile);
            System.out.println("   All bytes as string: " + new String(allBytes, StandardCharsets.UTF_8));
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateCharacterStreamReading() {
        System.out.println("🔸 CHARACTER STREAM READING DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────");
        
        try {
            // Create a temporary text file
            Path tempFile = Files.createTempFile("char_demo", ".txt");
            List<String> lines = Arrays.asList(
                "Line 1: Hello, World!",
                "Line 2: This is a character stream demo.",
                "Line 3: Java file reading techniques.",
                "Line 4: End of file."
            );
            Files.write(tempFile, lines, StandardCharsets.UTF_8);
            
            System.out.println("   Reading text file with FileReader:");
            
            // Read using FileReader
            try (FileReader fr = new FileReader(tempFile.toFile());
                 BufferedReader br = new BufferedReader(fr)) {
                
                System.out.println("   Reading line by line:");
                String line;
                int lineNumber = 1;
                while ((line = br.readLine()) != null) {
                    System.out.println("     " + lineNumber + ": " + line);
                    lineNumber++;
                }
            }
            
            // Read all lines at once
            System.out.println("   Reading all lines at once:");
            List<String> allLines = Files.readAllLines(tempFile);
            for (int i = 0; i < allLines.size(); i++) {
                System.out.println("     " + (i + 1) + ": " + allLines.get(i));
            }
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateBufferedReading() {
        System.out.println("🔸 BUFFERED READING DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        try {
            // Create a larger temporary file for buffered reading
            Path tempFile = Files.createTempFile("buffered_demo", ".txt");
            
            // Write a larger amount of data
            List<String> lines = new ArrayList<>();
            for (int i = 1; i <= 100; i++) {
                lines.add("This is line number " + i + " in our buffered reading demonstration.");
            }
            Files.write(tempFile, lines, StandardCharsets.UTF_8);
            
            System.out.println("   Reading large file with BufferedReader:");
            System.out.println("   File size: " + Files.size(tempFile) + " bytes");
            
            // Read with BufferedReader
            long startTime = System.currentTimeMillis();
            int lineCount = 0;
            
            try (BufferedReader br = Files.newBufferedReader(tempFile, StandardCharsets.UTF_8)) {
                String line;
                while ((line = br.readLine()) != null) {
                    lineCount++;
                    // Process line (in real application)
                    if (lineCount <= 3) {
                        System.out.println("     " + lineCount + ": " + line);
                    }
                }
            }
            
            long endTime = System.currentTimeMillis();
            System.out.println("   Read " + lineCount + " lines in " + (endTime - startTime) + " ms");
            
            // Compare with reading all lines at once
            startTime = System.currentTimeMillis();
            List<String> allLines = Files.readAllLines(tempFile);
            endTime = System.currentTimeMillis();
            
            System.out.println("   Reading all lines at once took " + (endTime - startTime) + " ms");
            System.out.println("   First line: " + allLines.get(0));
            System.out.println("   Last line: " + allLines.get(allLines.size() - 1));
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateNIO2Reading() {
        System.out.println("🔸 NIO.2 READING DEMONSTRATION");
        System.out.println("   ───────────────────────────");
        
        try {
            // Create a temporary file
            Path tempFile = Files.createTempFile("nio2_demo", ".txt");
            List<String> content = Arrays.asList(
                "NIO.2 File Reading Demo",
                "This demonstrates modern file reading techniques.",
                "Java NIO.2 provides better performance and features.",
                "Files class offers convenient reading methods.",
                "Stream-based reading for large files.",
                "End of NIO.2 demo."
            );
            Files.write(tempFile, content, StandardCharsets.UTF_8);
            
            System.out.println("   Using Files.readAllLines():");
            List<String> lines = Files.readAllLines(tempFile);
            lines.forEach(line -> System.out.println("     " + line));
            
            // Java 11+ method
            System.out.println("   Using Files.readString() (Java 11+):");
            try {
                String contentString = Files.readString(tempFile);
                System.out.println("     Content length: " + contentString.length() + " characters");
                System.out.println("     First 50 characters: " + contentString.substring(0, Math.min(50, contentString.length())));
            } catch (NoSuchMethodError e) {
                System.out.println("     Files.readString() not available in this Java version");
            }
            
            System.out.println("   Using Files.lines() with streams:");
            try (Stream<String> lineStream = Files.lines(tempFile)) {
                long count = lineStream
                    .filter(line -> line.contains("NIO.2") || line.contains("Java"))
                    .peek(line -> System.out.println("     Matched: " + line))
                    .count();
                System.out.println("     Found " + count + " matching lines");
            }
            
            // Reading with specific charset
            System.out.println("   Reading with specific charset:");
            List<String> utf8Lines = Files.readAllLines(tempFile, StandardCharsets.UTF_8);
            System.out.println("     Read " + utf8Lines.size() + " lines with UTF-8 encoding");
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateReadingStrategies() {
        System.out.println("🔸 READING STRATEGIES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        try {
            // Create different types of files for strategy demonstration
            Path smallTextFile = Files.createTempFile("small_text", ".txt");
            Path largeTextFile = Files.createTempFile("large_text", ".txt");
            Path binaryFile = Files.createTempFile("binary", ".dat");
            
            // Small text file
            Files.write(smallTextFile, Arrays.asList(
                "Small file content",
                "Just a few lines",
                "Easy to read entirely"
            ));
            
            // Large text file (simulate with many lines)
            List<String> largeContent = new ArrayList<>();
            for (int i = 1; i <= 1000; i++) {
                largeContent.add("Line " + i + ": This is content for a large file demonstration.");
            }
            Files.write(largeTextFile, largeContent);
            
            // Binary file
            byte[] binaryData = new byte[1024];
            new Random().nextBytes(binaryData);
            Files.write(binaryFile, binaryData);
            
            System.out.println("   Strategy 1: Small text file - Read all at once");
            List<String> smallLines = Files.readAllLines(smallTextFile);
            System.out.println("     Read " + smallLines.size() + " lines from small file");
            
            System.out.println("   Strategy 2: Large text file - Buffered line-by-line");
            long startTime = System.currentTimeMillis();
            long lineCount = 0;
            try (BufferedReader br = Files.newBufferedReader(largeTextFile)) {
                String line;
                while ((line = br.readLine()) != null) {
                    lineCount++;
                    // Process line (example: count words)
                    if (lineCount <= 2) {
                        String[] words = line.split("\\\\s+");
                        System.out.println("     Line " + lineCount + " has " + words.length + " words");
                    }
                }
            }
            long endTime = System.currentTimeMillis();
            System.out.println("     Processed " + lineCount + " lines in " + (endTime - startTime) + " ms");
            
            System.out.println("   Strategy 3: Binary file - Buffered byte reading");
            startTime = System.currentTimeMillis();
            long byteCount = 0;
            try (BufferedInputStream bis = new BufferedInputStream(Files.newInputStream(binaryFile))) {
                int byteValue;
                while ((byteValue = bis.read()) != -1) {
                    byteCount++;
                    // Process byte (example: count non-zero bytes)
                }
            }
            endTime = System.currentTimeMillis();
            System.out.println("     Read " + byteCount + " bytes in " + (endTime - startTime) + " ms");
            
            System.out.println("   Strategy 4: Log analysis - Stream processing");
            try (Stream<String> lines = Files.lines(largeTextFile)) {
                long keywordCount = lines
                    .filter(line -> line.contains("file"))
                    .count();
                System.out.println("     Found " + keywordCount + " lines containing 'file'");
            }
            
            // Clean up
            Files.delete(smallTextFile);
            Files.delete(largeTextFile);
            Files.delete(binaryFile);
            System.out.println("   Cleaned up temporary files");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Byte streams and character streams                        ║");
        System.out.println("║  • Buffered reading for improved performance                 ║");
        System.out.println("║  • NIO.2 reading operations                                  ║");
        System.out.println("║  • Reading strategies for different scenarios                ║");
        System.out.println("║  • Best practices for file reading                           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use try-with-resources for automatic resource management   ║");
        System.out.println("║  • Choose appropriate buffer sizes for performance            ║");
        System.out.println("║  • Handle character encoding explicitly when needed           ║");
        System.out.println("║  • Use NIO.2 for modern applications                          ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1) Write a method that reads all lines from a text file using BufferedReader and prints them.
2) Create a program that reads a binary file using FileInputStream and counts the number of bytes.
3) Use Files.lines() to read a large file and filter lines containing a specific keyword.
`
  }
};