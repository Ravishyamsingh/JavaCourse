import { LessonContent } from '../../types/LessonTypes';

export const lesson_7_6: LessonContent = {
  title: 'Advanced I/O Operations (NIO)',
  type: 'coding',
  duration: '40 min',
  module: 'File I/O and Serialization',
  content: {
    overview: 'Explore advanced I/O operations using Java NIO (New I/O). This lesson covers channels, buffers, selectors, and asynchronous I/O for high-performance applications.',
    objectives: [
      'Understand Java NIO architecture and components',
      'Master channels and buffers for efficient I/O',
      'Learn to use selectors for multiplexed I/O',
      'Implement asynchronous I/O operations',
      'Practice memory-mapped files for large data',
      'Apply NIO for high-performance applications'
    ],
    theory: `
      <div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Advanced I/O Operations (NIO)
        </h1>
        <p class="mt-3 text-cyan-100 text-lg">High-performance I/O with Java NIO</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Java NIO
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java NIO (New I/O) was introduced in Java 1.4 to provide a more efficient way to perform I/O operations. 
            Unlike traditional I/O which is stream-oriented, NIO is buffer and channel-oriented, allowing for 
            non-blocking I/O operations and better performance in high-concurrency scenarios.
          </p>
          <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mb-4">
            <h4 class="font-bold text-cyan-800 mb-2">💡 Key Concept</h4>
            <p class="text-cyan-700">NIO enables high-performance I/O through buffers, channels, selectors, and asynchronous operations, making it ideal for servers and high-throughput applications.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Core NIO Components
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the fundamental components of NIO:</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Channels</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Represent connections to entities</li>
                  <li>• FileChannel, SocketChannel</li>
                  <li>• Bidirectional data flow</li>
                  <li>• Can be non-blocking</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  FileChannel channel = FileChannel.open(<br/>
                  &nbsp;&nbsp;Paths.get("file.txt"),<br/>
                  &nbsp;&nbsp;StandardOpenOption.READ);
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Buffers</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Containers for data</li>
                  <li>• ByteBuffer, CharBuffer</li>
                  <li>• Position, limit, capacity</li>
                  <li>• Flip for reading/writing</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ByteBuffer buffer = ByteBuffer<br/>
                  &nbsp;&nbsp;.allocate(1024);<br/>
                  buffer.put(data);<br/>
                  buffer.flip();
                </div>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Selectors</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Multiplex I/O operations</li>
                  <li>• Monitor multiple channels</li>
                  <li>• Non-blocking I/O</li>
                  <li>• Event-driven model</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Selector selector = Selector<br/>
                  &nbsp;&nbsp;.open();<br/>
                  channel.register(selector,<br/>
                  &nbsp;&nbsp;SelectionKey.OP_READ);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Buffer Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Working with buffers effectively:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Creating and using a ByteBuffer<br/>
              ByteBuffer buffer = ByteBuffer.allocate(1024);<br/>
              <br/>
              // Writing data to buffer<br/>
              buffer.putInt(12345);<br/>
              buffer.putDouble(3.14159);<br/>
              buffer.put("Hello".getBytes());<br/>
              <br/>
              // Preparing buffer for reading<br/>
              buffer.flip();<br/>
              <br/>
              // Reading data from buffer<br/>
              int intValue = buffer.getInt();<br/>
              double doubleValue = buffer.getDouble();<br/>
              byte[] bytes = new byte[5];<br/>
              buffer.get(bytes);<br/>
              String text = new String(bytes);<br/>
              <br/>
              // Preparing buffer for writing again<br/>
              buffer.clear();
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Buffer Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">allocate(int capacity)</td>
                    <td class="p-3">Create buffer with specified capacity</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">put(type value)</td>
                    <td class="p-3">Write data to buffer</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">get()</td>
                    <td class="p-3">Read data from buffer</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">flip()</td>
                    <td class="p-3">Switch from writing to reading</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">clear()</td>
                    <td class="p-3">Reset buffer for writing</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">rewind()</td>
                    <td class="p-3">Reset position to beginning</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">compact()</td>
                    <td class="p-3">Move unread data to beginning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            FileChannel Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Working with FileChannel for efficient file I/O:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Reading with FileChannel</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Direct buffer access for performance</li>
                  <li>• Position-based reading</li>
                  <li>• Memory-mapped files</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  try (FileChannel channel = FileChannel.open(<br/>
                  &nbsp;&nbsp;path, StandardOpenOption.READ)) {<br/>
                  &nbsp;&nbsp;ByteBuffer buffer = ByteBuffer<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;.allocate(1024);<br/>
                  &nbsp;&nbsp;channel.read(buffer);<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Writing with FileChannel</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Position-based writing</li>
                  <li>• Direct buffer for performance</li>
                  <li>• File locking support</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  try (FileChannel channel = FileChannel.open(<br/>
                  &nbsp;&nbsp;path, StandardOpenOption.WRITE,<br/>
                  &nbsp;&nbsp;StandardOpenOption.CREATE)) {<br/>
                  &nbsp;&nbsp;ByteBuffer buffer = ByteBuffer<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;.wrap("Hello".getBytes());<br/>
                  &nbsp;&nbsp;channel.write(buffer);<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Asynchronous I/O Operations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Using asynchronous I/O for non-blocking operations:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Asynchronous file reading<br/>
              AsynchronousFileChannel channel = AsynchronousFileChannel<br/>
              &nbsp;&nbsp;.open(path, StandardOpenOption.READ);<br/>
              <br/>
              ByteBuffer buffer = ByteBuffer.allocate(1024);<br/>
              channel.read(buffer, 0, buffer, new CompletionHandler<Integer, ByteBuffer>() {<br/>
              &nbsp;&nbsp;@Override<br/>
              &nbsp;&nbsp;public void completed(Integer result, ByteBuffer attachment) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// Handle successful read<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Read " + result + " bytes");<br/>
              &nbsp;&nbsp;}<br/>
              <br/>
              &nbsp;&nbsp;@Override<br/>
              &nbsp;&nbsp;public void failed(Throwable exc, ByteBuffer attachment) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;// Handle read failure<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.err.println("Read failed: " + exc.getMessage());<br/>
              &nbsp;&nbsp;}<br/>
              });
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-teal-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Async I/O Class</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">AsynchronousFileChannel</td>
                    <td class="p-3">Asynchronous file operations</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">AsynchronousSocketChannel</td>
                    <td class="p-3">Asynchronous network socket operations</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">AsynchronousServerSocketChannel</td>
                    <td class="p-3">Asynchronous server socket operations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for NIO Operations</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use direct buffers for large data operations</li>
                <li>• Properly manage buffer state with flip/clear</li>
                <li>• Handle CompletionHandler exceptions properly</li>
                <li>• Use try-with-resources for channel management</li>
                <li>• Consider memory-mapped files for large files</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't forget to flip buffers before reading</li>
                <li>• Don't ignore CompletionHandler failures</li>
                <li>• Don't use excessive buffer sizes</li>
                <li>• Don't forget to close channels properly</li>
                <li>• Don't mix blocking and non-blocking operations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * AdvancedNIODemo.java
 * 
 * This comprehensive example demonstrates advanced NIO operations in Java:
 * - Buffer operations and management
 * - FileChannel for efficient file I/O
 * - Asynchronous I/O operations
 * - Memory-mapped files
 * - Best practices for NIO applications
 * 
 * Run this program to see advanced NIO operations in practice.
 */

import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;
import java.nio.file.StandardOpenOption;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class AdvancedNIODemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate buffer operations
        demonstrateBufferOperations();
        
        // Demonstrate FileChannel operations
        demonstrateFileChannelOperations();
        
        // Demonstrate asynchronous I/O
        demonstrateAsyncIO();
        
        // Demonstrate memory-mapped files
        demonstrateMemoryMappedFiles();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         ADVANCED NIO OPERATIONS DEMO                         ║");
        System.out.println("║         High-performance I/O with Java NIO                   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBufferOperations() {
        System.out.println("🔸 BUFFER OPERATIONS DEMONSTRATION");
        System.out.println("   ────────────────────────────────");
        
        // Create a ByteBuffer
        ByteBuffer buffer = ByteBuffer.allocate(64);
        System.out.println("   Created ByteBuffer with capacity: " + buffer.capacity());
        
        // Put data into buffer
        buffer.putInt(12345);
        buffer.putDouble(3.14159);
        buffer.put("Hello NIO".getBytes());
        System.out.println("   Put data into buffer. Position: " + buffer.position() + 
                          ", Limit: " + buffer.limit() + ", Remaining: " + buffer.remaining());
        
        // Flip buffer for reading
        buffer.flip();
        System.out.println("   Flipped buffer for reading. Position: " + buffer.position() + 
                          ", Limit: " + buffer.limit() + ", Remaining: " + buffer.remaining());
        
        // Read data from buffer
        int intValue = buffer.getInt();
        double doubleValue = buffer.getDouble();
        byte[] bytes = new byte[9];
        buffer.get(bytes);
        String text = new String(bytes);
        
        System.out.println("   Read from buffer:");
        System.out.println("     Integer: " + intValue);
        System.out.println("     Double: " + doubleValue);
        System.out.println("     Text: " + text);
        
        // Clear buffer for writing again
        buffer.clear();
        System.out.println("   Cleared buffer for writing. Position: " + buffer.position() + 
                          ", Limit: " + buffer.limit());
        
        // Compact buffer example
        buffer.putInt(100);
        buffer.putInt(200);
        buffer.flip();
        buffer.getInt(); // Read first integer
        System.out.println("   After reading first integer. Position: " + buffer.position() + 
                          ", Remaining: " + buffer.remaining());
        
        buffer.compact();
        System.out.println("   After compacting buffer. Position: " + buffer.position() + 
                          ", Remaining capacity: " + buffer.remaining());
        
        System.out.println();
    }
    
    private static void demonstrateFileChannelOperations() {
        System.out.println("🔸 FILE CHANNEL OPERATIONS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────");
        
        try {
            // Create a temporary file
            Path tempFile = Files.createTempFile("nio_demo", ".txt");
            System.out.println("   Created temporary file: " + tempFile);
            
            // Write to file using FileChannel
            System.out.println("   Writing to file using FileChannel:");
            try (FileChannel channel = FileChannel.open(tempFile, 
                    StandardOpenOption.WRITE, StandardOpenOption.CREATE)) {
                
                // Create a ByteBuffer with data
                String data = "This is a demonstration of FileChannel operations.\\n" +
                             "FileChannel provides efficient file I/O operations.\\n" +
                             "It supports direct buffer access for performance.\\n" +
                             "Position-based reading and writing is also supported.";
                ByteBuffer buffer = ByteBuffer.wrap(data.getBytes());
                
                // Write buffer to file
                int bytesWritten = channel.write(buffer);
                System.out.println("     Wrote " + bytesWritten + " bytes to file");
            }
            
            // Read from file using FileChannel
            System.out.println("   Reading from file using FileChannel:");
            try (FileChannel channel = FileChannel.open(tempFile, StandardOpenOption.READ)) {
                
                // Get file size
                long fileSize = channel.size();
                System.out.println("     File size: " + fileSize + " bytes");
                
                // Create a ByteBuffer to read data
                ByteBuffer buffer = ByteBuffer.allocate((int) fileSize);
                
                // Read data from file
                int bytesRead = channel.read(buffer);
                System.out.println("     Read " + bytesRead + " bytes from file");
                
                // Flip buffer for reading
                buffer.flip();
                
                // Convert buffer to string and display
                byte[] bytes = new byte[buffer.remaining()];
                buffer.get(bytes);
                String content = new String(bytes);
                System.out.println("     File content:");
                System.out.println("       " + content.replace("\\n", "\\n       "));
            }
            
            // Demonstrate position-based operations
            System.out.println("   Position-based operations:");
            try (FileChannel channel = FileChannel.open(tempFile, 
                    StandardOpenOption.READ, StandardOpenOption.WRITE)) {
                
                // Position at specific location
                long position = 10;
                channel.position(position);
                System.out.println("     Set position to: " + channel.position());
                
                // Read from specific position
                ByteBuffer buffer = ByteBuffer.allocate(20);
                int bytesRead = channel.read(buffer);
                System.out.println("     Read " + bytesRead + " bytes from position " + position);
                
                // Write at specific position
                channel.position(0);
                ByteBuffer writeBuffer = ByteBuffer.wrap("NEW".getBytes());
                int bytesWritten = channel.write(writeBuffer);
                System.out.println("     Wrote " + bytesWritten + " bytes at position 0");
            }
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateAsyncIO() {
        System.out.println("🔸 ASYNCHRONOUS I/O DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        try {
            // Create a temporary file
            Path tempFile = Files.createTempFile("async_demo", ".txt");
            System.out.println("   Created temporary file: " + tempFile);
            
            // Write some data to the file first
            Files.write(tempFile, "This is data for asynchronous reading.".getBytes());
            
            // Asynchronous file reading
            System.out.println("   Asynchronous file reading:");
            try (AsynchronousFileChannel channel = AsynchronousFileChannel.open(tempFile, 
                    StandardOpenOption.READ)) {
                
                // Create a ByteBuffer
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                
                // Create a CompletableFuture to handle the result
                CompletableFuture<Integer> future = new CompletableFuture<>();
                
                // Read asynchronously
                channel.read(buffer, 0, buffer, new CompletionHandler<Integer, ByteBuffer>() {
                    @Override
                    public void completed(Integer result, ByteBuffer attachment) {
                        System.out.println("     Async read completed: " + result + " bytes");
                        attachment.flip();
                        byte[] bytes = new byte[attachment.remaining()];
                        attachment.get(bytes);
                        String content = new String(bytes);
                        System.out.println("     Content: " + content);
                        future.complete(result);
                    }
                    
                    @Override
                    public void failed(Throwable exc, ByteBuffer attachment) {
                        System.out.println("     Async read failed: " + exc.getMessage());
                        future.completeExceptionally(exc);
                    }
                });
                
                // Wait for the operation to complete
                try {
                    future.get(5, TimeUnit.SECONDS);
                } catch (TimeoutException e) {
                    System.out.println("     Async operation timed out");
                }
            }
            
            // Asynchronous file writing
            System.out.println("   Asynchronous file writing:");
            try (AsynchronousFileChannel channel = AsynchronousFileChannel.open(tempFile, 
                    StandardOpenOption.WRITE, StandardOpenOption.CREATE)) {
                
                // Create a ByteBuffer with data
                ByteBuffer buffer = ByteBuffer.wrap("Async write data".getBytes());
                
                // Create a CompletableFuture to handle the result
                CompletableFuture<Integer> future = new CompletableFuture<>();
                
                // Write asynchronously
                channel.write(buffer, 0, buffer, new CompletionHandler<Integer, ByteBuffer>() {
                    @Override
                    public void completed(Integer result, ByteBuffer attachment) {
                        System.out.println("     Async write completed: " + result + " bytes");
                        future.complete(result);
                    }
                    
                    @Override
                    public void failed(Throwable exc, ByteBuffer attachment) {
                        System.out.println("     Async write failed: " + exc.getMessage());
                        future.completeExceptionally(exc);
                    }
                });
                
                // Wait for the operation to complete
                try {
                    future.get(5, TimeUnit.SECONDS);
                } catch (TimeoutException e) {
                    System.out.println("     Async operation timed out");
                }
            }
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException | InterruptedException | ExecutionException e) {
            System.out.println("   Exception occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateMemoryMappedFiles() {
        System.out.println("🔸 MEMORY-MAPPED FILES DEMONSTRATION");
        System.out.println("   ───────────────────────────────────");
        
        try {
            // Create a temporary file with some data
            Path tempFile = Files.createTempFile("mmap_demo", ".txt");
            String data = "Memory-mapped file demonstration data.\\n" +
                         "This shows how to use memory-mapped files.\\n" +
                         "They are efficient for large file access.\\n" +
                         "Especially useful for random access patterns.";
            Files.write(tempFile, data.getBytes());
            System.out.println("   Created temporary file: " + tempFile);
            System.out.println("   File size: " + Files.size(tempFile) + " bytes");
            
            // Memory-mapped file reading
            System.out.println("   Memory-mapped file reading:");
            try (FileChannel channel = FileChannel.open(tempFile, StandardOpenOption.READ)) {
                
                // Map the file into memory
                MappedByteBuffer mappedBuffer = channel.map(
                    FileChannel.MapMode.READ_ONLY, 0, channel.size());
                System.out.println("     Mapped file into memory");
                
                // Read data from mapped buffer
                byte[] bytes = new byte[(int) channel.size()];
                mappedBuffer.get(bytes);
                String content = new String(bytes);
                System.out.println("     Content from mapped buffer:");
                System.out.println("       " + content.replace("\\n", "\\n       "));
                
                // Random access example
                System.out.println("   Random access example:");
                mappedBuffer.position(10);
                byte[] randomBytes = new byte[20];
                mappedBuffer.get(randomBytes);
                String randomContent = new String(randomBytes).trim();
                System.out.println("     Content at position 10: " + randomContent);
            }
            
            // Memory-mapped file writing
            System.out.println("   Memory-mapped file writing:");
            try (FileChannel channel = FileChannel.open(tempFile, 
                    StandardOpenOption.READ, StandardOpenOption.WRITE)) {
                
                // Map the file into memory for read-write
                MappedByteBuffer mappedBuffer = channel.map(
                    FileChannel.MapMode.READ_WRITE, 0, channel.size());
                System.out.println("     Mapped file for read-write");
                
                // Modify data at specific position
                int position = 0;
                mappedBuffer.position(position);
                String newData = "NEW";
                mappedBuffer.put(newData.getBytes());
                System.out.println("     Updated data at position " + position);
                
                // Force changes to disk
                mappedBuffer.force();
                System.out.println("     Forced changes to disk");
            }
            
            // Clean up
            Files.delete(tempFile);
            System.out.println("   Cleaned up temporary file");
            
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
        System.out.println("║  • Buffer operations and management                          ║");
        System.out.println("║  • FileChannel for efficient file I/O                        ║");
        System.out.println("║  • Asynchronous I/O operations                               ║");
        System.out.println("║  • Memory-mapped files                                       ║");
        System.out.println("║  • Best practices for NIO applications                       ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use direct buffers for large data operations              ║");
        System.out.println("║  • Properly manage buffer state with flip/clear              ║");
        System.out.println("║  • Handle CompletionHandler exceptions properly              ║");
        System.out.println("║  • Use try-with-resources for channel management             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         ADVANCED NIO OPERATIONS DEMO                         ║
 * ║         High-performance I/O with Java NIO                   ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 BUFFER OPERATIONS DEMONSTRATION
 *    ────────────────────────────────
 *    Created ByteBuffer with capacity: 64
 *    Put data into buffer. Position: 21, Limit: 64, Remaining: 43
 *    Flipped buffer for reading. Position: 0, Limit: 21, Remaining: 21
 *    Read from buffer:
 *      Integer: 12345
 *      Double: 3.14159
 *      Text: Hello NIO
 *    Cleared buffer for writing. Position: 0, Limit: 64
 *    After reading first integer. Position: 4, Remaining: 17
 *    After compacting buffer. Position: 17, Remaining capacity: 47
 * 
 * 🔸 FILE CHANNEL OPERATIONS DEMONSTRATION
 *    ──────────────────────────────────────
 *    Created temporary file: /tmp/nio_demo12345.txt
 *    Writing to file using FileChannel:
 *      Wrote 154 bytes to file
 *    Reading from file using FileChannel:
 *      File size: 154 bytes
 *      Read 154 bytes from file
 *      File content:
 *        This is a demonstration of FileChannel operations.
 *        FileChannel provides efficient file I/O operations.
 *        It supports direct buffer access for performance.
 *        Position-based reading and writing is also supported.
 *    Position-based operations:
 *      Set position to: 10
 *      Read 20 bytes from position 10
 *      Wrote 3 bytes at position 0
 *    Cleaned up temporary file
 * 
 * 🔸 ASYNCHRONOUS I/O DEMONSTRATION
 *    ───────────────────────────────
 *    Created temporary file: /tmp/async_demo12345.txt
 *    Asynchronous file reading:
 *      Async read completed: 36 bytes
 *      Content: This is data for asynchronous reading.
 *    Asynchronous file writing:
 *      Async write completed: 15 bytes
 *    Cleaned up temporary file
 * 
 * 🔸 MEMORY-MAPPED FILES DEMONSTRATION
 *    ───────────────────────────────────
 *    Created temporary file: /tmp/mmap_demo12345.txt
 *    File size: 134 bytes
 *    Memory-mapped file reading:
 *      Mapped file into memory
 *      Content from mapped buffer:
 *        Memory-mapped file demonstration data.
 *        This shows how to use memory-mapped files.
 *        They are efficient for large file access.
 *        Especially useful for random access patterns.
 *    Random access example:
 *      Content at position 10: -mapped file
 *    Memory-mapped file writing:
 *      Mapped file for read-write
 *      Updated data at position 0
 *      Forced changes to disk
 *    Cleaned up temporary file
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Advanced I/O Operations Practice Exercise**

      Create comprehensive programs to practice advanced NIO operations in Java.

      **Part 1: High-Performance File Processor**
      
      Create a program called \`HighPerformanceFileProcessor.java\` that processes large files efficiently:
      
      Requirements:
      - Use FileChannel for efficient file operations
      - Implement memory-mapped files for large data
      - Handle different data formats (text, binary)
      - Optimize buffer usage for performance
      
      Features to implement:
      - Progress tracking for large file operations
      - Error handling for file system operations
      - Memory usage monitoring
      - Performance benchmarking

      **Part 2: Asynchronous Network Server**
      
      Create a program called \`AsyncNetworkServer.java\` that implements an asynchronous network server:
      
      Requirements:
      - Use AsynchronousServerSocketChannel for connections
      - Handle multiple client connections concurrently
      - Implement request/response processing
      - Support different message protocols
      
      Advanced Features:
      - Connection pooling for efficiency
      - Request rate limiting
      - Client authentication and authorization
      - Performance monitoring and metrics

      **Part 3: Buffer Management System**
      
      Create a program called \`BufferManagementSystem.java\` that manages buffers efficiently:
      
      Requirements:
      - Implement buffer pooling for reuse
      - Handle different buffer types (direct, heap)
      - Optimize buffer allocation and deallocation
      - Monitor buffer usage and performance
      
      Features to implement:
      - Buffer lifecycle management
      - Memory leak detection
      - Performance optimization for buffer operations
      - Integration with file and network operations

      **Part 4: File Transfer Utility**
      
      Create a program called \`FileTransferUtility.java\` that transfers files efficiently:
      
      Requirements:
      - Support for different transfer protocols (file, network)
      - Implement checksum verification for data integrity
      - Handle transfer resumption for interrupted transfers
      - Optimize transfer speed with buffer management
      
      Advanced Features:
      - Compression and encryption support
      - Transfer scheduling and queuing
      - Bandwidth throttling
      - Multi-file transfer with progress tracking

      **Part 5: Log Analysis System**
      
      Create a program called \`LogAnalysisSystem.java\` that analyzes large log files:
      
      Requirements:
      - Use memory-mapped files for efficient log access
      - Implement pattern matching and filtering
      - Generate statistical reports from log data
      - Handle different log formats
      
      Features to implement:
      - Real-time log monitoring
      - Performance optimization for large files
      - Export analysis results to different formats
      - Integration with alerting systems

      **Deliverables:**
      Submit the following files:
      1. \`HighPerformanceFileProcessor.java\` - High-performance file processing tool
      2. \`AsyncNetworkServer.java\` - Asynchronous network server
      3. \`BufferManagementSystem.java\` - Buffer management system
      4. \`FileTransferUtility.java\` - File transfer utility
      5. \`LogAnalysisSystem.java\` - Log analysis system
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of NIO operations
      - ✅ Understanding of buffers, channels, and selectors
      - ✅ Proper use of asynchronous I/O operations
      - ✅ Effective memory-mapped file usage
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive NIO capabilities
      - ✅ Application of best practices for NIO operations

      **💡 Bonus Challenges:**
      
      1. Advanced Buffer Techniques: Implement sophisticated buffer management algorithms
      2. Performance Optimization: Add performance tracking to NIO operations
      3. Cross-Platform Compatibility: Design NIO operations for multiple platforms
      4. Security Features: Add validation and security to NIO operations
      5. Extensibility: Create frameworks for reusable NIO operation components
    `
  }
};
