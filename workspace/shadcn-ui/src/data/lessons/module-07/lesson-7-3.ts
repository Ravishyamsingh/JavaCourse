import { LessonContent } from '../../types/LessonTypes';

export const lesson_7_3: LessonContent = {
  title: 'Binary File Operations',
  type: 'coding',
  duration: '30 min',
  module: 'File I/O and Serialization',
  content: {
    overview: 'Learn how to work with binary files in Java. This lesson covers reading and writing binary data, handling different data types, and working with file channels for efficient binary file operations.',
    objectives: [
      'Understand binary file operations in Java',
      'Learn to read and write binary data using streams',
      'Master DataInputStream and DataOutputStream classes',
      'Practice working with file channels for efficient I/O',
      'Handle different binary data types correctly',
      'Implement proper error handling for binary operations'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Binary File Operations
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Working with binary data in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Binary Files
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Binary files store data in its raw binary format, which is more compact and efficient than text representations. 
            They're commonly used for images, audio, video, executables, and structured data files. Working with binary 
            files requires understanding data types, byte ordering, and proper serialization techniques.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Binary files preserve the exact bit representation of data, making them ideal for storing structured data and media files efficiently.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            DataInputStream and DataOutputStream
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">These classes provide methods for reading and writing primitive data types in a machine-independent way:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">DataOutputStream</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• writeInt(int v) - Writes an int value</li>
                  <li>• writeDouble(double v) - Writes a double value</li>
                  <li>• writeUTF(String str) - Writes a string in UTF format</li>
                  <li>• writeByte(int v) - Writes a byte value</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  DataOutputStream dos = new DataOutputStream(<br/>
                  &nbsp;&nbsp;new FileOutputStream("data.bin"));<br/>
                  dos.writeInt(123);<br/>
                  dos.writeDouble(45.67);
                </div>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">DataInputStream</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• readInt() - Reads an int value</li>
                  <li>• readDouble() - Reads a double value</li>
                  <li>• readUTF() - Reads a UTF string</li>
                  <li>• readByte() - Reads a byte value</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  DataInputStream dis = new DataInputStream(<br/>
                  &nbsp;&nbsp;new FileInputStream("data.bin"));<br/>
                  int value = dis.readInt();<br/>
                  double d = dis.readDouble();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            File Channels and ByteBuffer
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">NIO provides more efficient ways to work with binary data using channels and buffers:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Writing binary data with FileChannel<br/>
              try (FileChannel channel = FileChannel.open(<br/>
              &nbsp;&nbsp;Paths.get("binary.dat"),<br/>
              &nbsp;&nbsp;StandardOpenOption.CREATE,<br/>
              &nbsp;&nbsp;StandardOpenOption.WRITE)) {<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;ByteBuffer buffer = ByteBuffer.allocate(1024);<br/>
              &nbsp;&nbsp;buffer.putInt(12345);<br/>
              &nbsp;&nbsp;buffer.putDouble(3.14159);<br/>
              &nbsp;&nbsp;buffer.flip(); // Prepare for writing<br/>
              &nbsp;&nbsp;channel.write(buffer);<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-green-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">ByteBuffer Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">putInt(int value)</td>
                    <td class="p-3">Write an integer to buffer</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">putDouble(double value)</td>
                    <td class="p-3">Write a double to buffer</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">put(byte[] src)</td>
                    <td class="p-3">Write byte array to buffer</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">flip()</td>
                    <td class="p-3">Prepare buffer for reading/writing</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">clear()</td>
                    <td class="p-3">Clear buffer for writing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Working with Different Data Types
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Handling various binary data types requires understanding their representation:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Numeric Types</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Byte: 8 bits, signed (-128 to 127)</li>
                  <li>• Short: 16 bits, signed (-32,768 to 32,767)</li>
                  <li>• Integer: 32 bits, signed</li>
                  <li>• Long: 64 bits, signed</li>
                  <li>• Float: 32 bits, IEEE 754</li>
                  <li>• Double: 64 bits, IEEE 754</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Special Considerations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Endianness (byte order) matters for cross-platform compatibility</li>
                  <li>• Text encoding affects string storage</li>
                  <li>• Padding and alignment in structures</li>
                  <li>• Version compatibility for file formats</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Example of handling endianness<br/>
              ByteBuffer buffer = ByteBuffer.allocate(8).order(ByteOrder.LITTLE_ENDIAN);<br/>
              buffer.putInt(0x12345678);<br/>
              byte[] bytes = buffer.array();<br/>
              // Bytes will be in little-endian order
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Error Handling and Best Practices
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Proper error handling and best practices for binary file operations:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Error Handling</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Handle EOFException when reading</li>
                  <li>• Check file permissions and existence</li>
                  <li>• Validate data integrity with checksums</li>
                  <li>• Implement proper resource cleanup</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use try-with-resources for automatic cleanup</li>
                  <li>• Define file format specifications clearly</li>
                  <li>• Handle different platform byte orders</li>
                  <li>• Test with various file sizes and types</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Binary File Operations</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always use try-with-resources for file operations</li>
                <li>• Define clear file format specifications</li>
                <li>• Handle endianness explicitly for cross-platform files</li>
                <li>• Validate data integrity with checksums</li>
                <li>• Use appropriate buffer sizes for performance</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't assume default byte order across platforms</li>
                <li>• Don't ignore EOFException when reading</li>
                <li>• Don't forget to flip buffers before writing</li>
                <li>• Don't use text-based methods for binary data</li>
                <li>• Don't hardcode file format assumptions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * BinaryFileOperationsDemo.java
 * 
 * This comprehensive example demonstrates binary file operations in Java:
 * - Reading and writing binary data with DataInputStream/DataOutputStream
 * - Working with FileChannel and ByteBuffer for efficient I/O
 * - Handling different binary data types
 * - Proper error handling and resource management
 * 
 * Run this program to see binary file operations in practice.
 */

import java.io.*;
import java.nio.*;
import java.nio.channels.*;
import java.nio.file.*;
import java.nio.file.StandardOpenOption;
import java.util.*;

// Simple class to demonstrate object serialization in binary files
class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
    private double salary;
    
    public Person(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", salary=" + salary + "}";
    }
}

public class BinaryFileOperationsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate DataInputStream/DataOutputStream
        demonstrateDataStreams();
        
        // Demonstrate FileChannel operations
        demonstrateFileChannel();
        
        // Demonstrate mixed data types
        demonstrateMixedDataTypes();
        
        // Demonstrate error handling
        demonstrateErrorHandling();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         BINARY FILE OPERATIONS DEMO                          ║");
        System.out.println("║         Working with Binary Data in Java                     ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateDataStreams() {
        System.out.println("🔸 DATA INPUT/OUTPUT STREAM DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────");
        
        Path binaryFile = Paths.get("data_streams_demo.bin");
        
        try {
            // Writing binary data using DataOutputStream
            System.out.println("   Writing binary data with DataOutputStream:");
            try (DataOutputStream dos = new DataOutputStream(
                    new BufferedOutputStream(Files.newOutputStream(binaryFile)))) {
                
                // Write different data types
                dos.writeUTF("Hello, Binary World!");  // UTF string
                dos.writeInt(12345);                  // 32-bit integer
                dos.writeDouble(3.14159);             // 64-bit double
                dos.writeBoolean(true);               // Boolean value
                dos.writeByte(0x7F);                  // Byte value
                dos.writeShort((short) 1000);         // 16-bit short
                dos.writeLong(9876543210L);           // 64-bit long
                dos.writeFloat(2.718f);               // 32-bit float
                
                System.out.println("     Wrote various data types to binary file");
            }
            
            // Reading binary data using DataInputStream
            System.out.println("   Reading binary data with DataInputStream:");
            try (DataInputStream dis = new DataInputStream(
                    new BufferedInputStream(Files.newInputStream(binaryFile)))) {
                
                // Read data in the same order it was written
                String utfString = dis.readUTF();
                int intValue = dis.readInt();
                double doubleValue = dis.readDouble();
                boolean boolValue = dis.readBoolean();
                byte byteValue = dis.readByte();
                short shortValue = dis.readShort();
                long longValue = dis.readLong();
                float floatValue = dis.readFloat();
                
                System.out.println("     UTF String: " + utfString);
                System.out.println("     Integer: " + intValue);
                System.out.println("     Double: " + doubleValue);
                System.out.println("     Boolean: " + boolValue);
                System.out.println("     Byte: " + byteValue);
                System.out.println("     Short: " + shortValue);
                System.out.println("     Long: " + longValue);
                System.out.println("     Float: " + floatValue);
            }
            
            // Clean up
            Files.deleteIfExists(binaryFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateFileChannel() {
        System.out.println("🔸 FILE CHANNEL DEMONSTRATION");
        System.out.println("   ───────────────────────────");
        
        Path binaryFile = Paths.get("file_channel_demo.bin");
        
        try {
            // Writing binary data using FileChannel
            System.out.println("   Writing binary data with FileChannel:");
            try (FileChannel channel = FileChannel.open(binaryFile, 
                    StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {
                
                // Create a ByteBuffer and put data into it
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                buffer.putInt(0x12345678);           // Write integer
                buffer.putDouble(1.41421356);        // Write double
                buffer.put((byte) 0xFF);             // Write byte
                buffer.putShort((short) 0x7FFF);     // Write short
                buffer.putLong(0x1234567890ABCDEFL); // Write long
                
                // Add some text as bytes
                String text = "FileChannel Demo";
                buffer.put(text.getBytes());
                
                // Prepare buffer for writing (flip)
                buffer.flip();
                
                // Write buffer to file
                channel.write(buffer);
                System.out.println("     Wrote structured binary data to file");
            }
            
            // Reading binary data using FileChannel
            System.out.println("   Reading binary data with FileChannel:");
            try (FileChannel channel = FileChannel.open(binaryFile, StandardOpenOption.READ)) {
                
                // Create a ByteBuffer to read data
                ByteBuffer buffer = ByteBuffer.allocate(1024);
                
                // Read data from file into buffer
                channel.read(buffer);
                
                // Prepare buffer for reading (flip)
                buffer.flip();
                
                // Read data from buffer
                int intVal = buffer.getInt();
                double doubleVal = buffer.getDouble();
                byte byteVal = buffer.get();
                short shortVal = buffer.getShort();
                long longVal = buffer.getLong();
                
                System.out.println("     Integer: 0x" + Integer.toHexString(intVal));
                System.out.println("     Double: " + doubleVal);
                System.out.println("     Byte: 0x" + Integer.toHexString(byteVal & 0xFF));
                System.out.println("     Short: " + shortVal);
                System.out.println("     Long: 0x" + Long.toHexString(longVal));
                
                // Read remaining text
                byte[] textBytes = new byte[buffer.remaining()];
                buffer.get(textBytes);
                String text = new String(textBytes);
                System.out.println("     Text: " + text);
            }
            
            // Demonstrate direct buffer (more efficient for large data)
            System.out.println("   Using direct buffer for efficiency:");
            ByteBuffer directBuffer = ByteBuffer.allocateDirect(1024);
            directBuffer.putLong(System.currentTimeMillis());
            directBuffer.flip();
            System.out.println("     Direct buffer capacity: " + directBuffer.capacity());
            System.out.println("     Direct buffer position: " + directBuffer.position());
            
            // Clean up
            Files.deleteIfExists(binaryFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateMixedDataTypes() {
        System.out.println("🔸 MIXED DATA TYPES DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        Path mixedFile = Paths.get("mixed_data_demo.bin");
        
        try {
            // Create a more complex binary file with mixed data
            System.out.println("   Creating complex binary file structure:");
            
            // Write header information
            try (DataOutputStream dos = new DataOutputStream(
                    new BufferedOutputStream(Files.newOutputStream(mixedFile)))) {
                
                // Header: Magic number, version, and record count
                dos.writeInt(0xCAFEBABE);  // Magic number
                dos.writeShort(1);         // Version
                dos.writeInt(3);           // 3 records
                
                // Record 1: Person data
                dos.writeUTF("Alice");     // Name
                dos.writeInt(30);          // Age
                dos.writeDouble(75000.0);  // Salary
                
                // Record 2: Product data
                dos.writeUTF("Laptop");    // Product name
                dos.writeInt(1500);        // Price in cents
                dos.writeBoolean(true);    // In stock
                
                // Record 3: Measurement data
                dos.writeUTF("Temperature"); // Sensor type
                dos.writeDouble(23.5);       // Value
                dos.writeLong(System.currentTimeMillis()); // Timestamp
                
                System.out.println("     Wrote structured data with mixed types");
            }
            
            // Read the complex binary file
            System.out.println("   Reading complex binary file structure:");
            try (DataInputStream dis = new DataInputStream(
                    new BufferedInputStream(Files.newInputStream(mixedFile)))) {
                
                // Read header
                int magic = dis.readInt();
                short version = dis.readShort();
                int recordCount = dis.readInt();
                
                System.out.println("     Magic number: 0x" + Integer.toHexString(magic));
                System.out.println("     Version: " + version);
                System.out.println("     Record count: " + recordCount);
                
                // Read records
                for (int i = 0; i < recordCount; i++) {
                    System.out.println("     Record " + (i + 1) + ":");
                    
                    // In a real application, you would know the record type
                    // For this demo, we'll just read what we know is there
                    switch (i) {
                        case 0: // Person record
                            String personName = dis.readUTF();
                            int personAge = dis.readInt();
                            double personSalary = dis.readDouble();
                            System.out.println("       Person: " + personName + 
                                             ", Age: " + personAge + 
                                             ", Salary: $" + personSalary);
                            break;
                            
                        case 1: // Product record
                            String productName = dis.readUTF();
                            int productPrice = dis.readInt();
                            boolean inStock = dis.readBoolean();
                            System.out.println("       Product: " + productName + 
                                             ", Price: $" + (productPrice / 100.0) + 
                                             ", In stock: " + inStock);
                            break;
                            
                        case 2: // Measurement record
                            String sensorType = dis.readUTF();
                            double value = dis.readDouble();
                            long timestamp = dis.readLong();
                            System.out.println("       Measurement: " + sensorType + 
                                             ", Value: " + value + 
                                             ", Time: " + new Date(timestamp));
                            break;
                    }
                }
            }
            
            // Clean up
            Files.deleteIfExists(mixedFile);
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException e) {
            System.out.println("   IOException occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateErrorHandling() {
        System.out.println("🔸 ERROR HANDLING DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        Path errorFile = Paths.get("error_handling_demo.bin");
        
        try {
            // Demonstrate proper error handling
            System.out.println("   Handling common binary file errors:");
            
            // Write some data first
            try (DataOutputStream dos = new DataOutputStream(
                    new BufferedOutputStream(Files.newOutputStream(errorFile)))) {
                dos.writeUTF("Error Handling Demo");
                dos.writeInt(42);
                dos.writeDouble(1.23);
            }
            
            // Try to read more data than exists (EOFException)
            System.out.println("   Attempting to read beyond end of file:");
            try (DataInputStream dis = new DataInputStream(
                    new BufferedInputStream(Files.newInputStream(errorFile)))) {
                
                // Read what's actually there
                String text = dis.readUTF();
                int number = dis.readInt();
                double value = dis.readDouble();
                
                System.out.println("     Successfully read: " + text + ", " + number + ", " + value);
                
                // This will throw EOFException
                int extra = dis.readInt();
                System.out.println("     Extra integer: " + extra);
                
            } catch (EOFException e) {
                System.out.println("     Caught EOFException: " + e.getMessage());
                System.out.println("     This is expected when reading beyond file end");
            }
            
            // Demonstrate file not found handling
            System.out.println("   Handling file not found:");
            try {
                Files.newInputStream(Paths.get("nonexistent_file.bin"));
            } catch (NoSuchFileException e) {
                System.out.println("     Caught NoSuchFileException: " + e.getMessage());
            }
            
            // Demonstrate permission error handling
            System.out.println("   Handling permission errors:");
            try {
                // This might not work on all systems, but shows the concept
                Files.newOutputStream(
                    Paths.get("readonly_directory", "test.bin"), 
                    StandardOpenOption.CREATE
                );
            } catch (AccessDeniedException e) {
                System.out.println("     Caught AccessDeniedException: " + e.getMessage());
                System.out.println("     This happens when lacking write permissions");
            } catch (IOException e) {
                // On systems where we can't create the directory, we'll get a different error
                System.out.println("     Permission check not applicable on this system");
            }
            
            // Clean up
            Files.deleteIfExists(errorFile);
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
        System.out.println("║  • DataInputStream and DataOutputStream for binary I/O      ║");
        System.out.println("║  • FileChannel and ByteBuffer for efficient operations       ║");
        System.out.println("║  • Handling different binary data types                      ║");
        System.out.println("║  • Proper error handling for binary file operations          ║");
        System.out.println("║  • Best practices for binary file processing                 ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always use try-with-resources for automatic cleanup        ║");
        System.out.println("║  • Define clear file format specifications                   ║");
        System.out.println("║  • Handle endianness explicitly for cross-platform files      ║");
        System.out.println("║  • Validate data integrity with checksums                     ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         BINARY FILE OPERATIONS DEMO                          ║
 * ║         Working with Binary Data in Java                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 DATA INPUT/OUTPUT STREAM DEMONSTRATION
 *    ───────────────────────────────────────
 *    Writing binary data with DataOutputStream:
 *      Wrote various data types to binary file
 *    Reading binary data with DataInputStream:
 *      UTF String: Hello, Binary World!
 *      Integer: 12345
 *      Double: 3.14159
 *      Boolean: true
 *      Byte: 127
 *      Short: 1000
 *      Long: 9876543210
 *      Float: 2.718
 *    Cleaned up temporary file
 * 
 * 🔸 FILE CHANNEL DEMONSTRATION
 *    ───────────────────────────
 *    Writing binary data with FileChannel:
 *      Wrote structured binary data to file
 *    Reading binary data with FileChannel:
 *      Integer: 0x12345678
 *      Double: 1.41421356
 *      Byte: 0xff
 *      Short: 32767
 *      Long: 0x1234567890abcdef
 *      Text: FileChannel Demo
 *    Using direct buffer for efficiency:
 *      Direct buffer capacity: 1024
 *      Direct buffer position: 8
 *    Cleaned up temporary file
 * 
 * 🔸 MIXED DATA TYPES DEMONSTRATION
 *    ───────────────────────────────
 *    Creating complex binary file structure:
 *      Wrote structured data with mixed types
 *    Reading complex binary file structure:
 *      Magic number: 0xcafebabe
 *      Version: 1
 *      Record count: 3
 *      Record 1:
 *        Person: Alice, Age: 30, Salary: $75000.0
 *      Record 2:
 *        Product: Laptop, Price: $15.0, In stock: true
 *      Record 3:
 *        Measurement: Temperature, Value: 23.5, Time: Fri Jan 01 12:00:00 GMT 2021
 *    Cleaned up temporary file
 * 
 * 🔸 ERROR HANDLING DEMONSTRATION
 *    ─────────────────────────────
 *    Handling common binary file errors:
 *      Attempting to read beyond end of file:
 *        Successfully read: Error Handling Demo, 42, 1.23
 *        Caught EOFException: null
 *        This is expected when reading beyond file end
 *      Handling file not found:
 *        Caught NoSuchFileException: nonexistent_file.bin
 *      Handling permission errors:
 *        Permission check not applicable on this system
 *      Cleaned up temporary file
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Binary File Operations Practice Exercise**

      Create comprehensive programs to practice binary file operations in Java.

      **Part 1: Image File Processor**
      
      Create a program called \`ImageFileProcessor.java\` that processes image file headers:
      
      Requirements:
      - Read and parse common image file headers (PNG, JPEG, GIF)
      - Extract metadata from image files
      - Validate image file integrity
      - Convert between different image formats
      
      Features to implement:
      - Header signature verification
      - Dimension extraction from headers
      - Color depth and format detection
      - Error handling for corrupted files

      **Part 2: Audio File Analyzer**
      
      Create a program called \`AudioFileAnalyzer.java\` that reads audio file formats:
      
      Requirements:
      - Parse WAV, MP3, and FLAC file headers
      - Extract audio metadata (sample rate, bit depth, duration)
      - Validate audio file integrity
      - Generate audio file reports
      
      Advanced Features:
      - Support for multiple audio formats
      - Peak level analysis from audio data
      - Bitrate calculation and verification
      - Integration with audio processing libraries

      **Part 3: Data Archive Manager**
      
      Create a program called \`DataArchiveManager.java\` that creates and manages binary archives:
      
      Requirements:
      - Create custom binary archive format
      - Compress and decompress archived data
      - Store metadata with archived files
      - Implement archive integrity checking
      
      Features to implement:
      - Archive format specification
      - File compression with binary data
      - Index-based file retrieval
      - Archive splitting for large collections

      **Part 4: Game Save File Handler**
      
      Create a program called \`GameSaveHandler.java\` that manages game save files:
      
      Requirements:
      - Read and write game save file structures
      - Implement save file encryption
      - Handle different game save versions
      - Validate save file integrity
      
      Advanced Features:
      - Save file backup and restore
      - Cross-platform save file compatibility
      - Save file diff and merge operations
      - Cloud save synchronization

      **Part 5: Binary Data Visualization**
      
      Create a program called \`BinaryDataVisualizer.java\` that visualizes binary file contents:
      
      Requirements:
      - Display binary data in hexadecimal format
      - Provide statistical analysis of byte values
      - Identify patterns in binary data
      - Generate visual representations of data
      
      Features to implement:
      - Hex dump with ASCII representation
      - Entropy analysis for compression potential
      - Pattern recognition in binary data
      - Export visualization results

      **Deliverables:**
      Submit the following files:
      1. \`ImageFileProcessor.java\` - Image file processing tool
      2. \`AudioFileAnalyzer.java\` - Audio file analysis application
      3. \`DataArchiveManager.java\` - Binary archive management system
      4. \`GameSaveHandler.java\` - Game save file handler
      5. \`BinaryDataVisualizer.java\` - Binary data visualization tool
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of binary file operations
      - ✅ Understanding of DataInputStream and DataOutputStream
      - ✅ Proper use of FileChannel and ByteBuffer
      - ✅ Effective handling of different binary data types
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive binary file processing capabilities
      - ✅ Application of best practices for binary operations

      **💡 Bonus Challenges:**
      
      1. Advanced Binary Formats: Implement support for complex binary formats
      2. Performance Optimization: Add performance tracking to binary operations
      3. Cross-Platform Compatibility: Design binary operations for multiple platforms
      4. Security Features: Add encryption and validation to binary operations
      5. Extensibility: Create frameworks for reusable binary operation components
    `
  }
};