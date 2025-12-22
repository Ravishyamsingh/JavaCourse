import { LessonContent } from '../../types/LessonTypes';

export const lesson_1_4: LessonContent = {
  title: 'Variables and Data Types',
  type: 'lesson',
  duration: '40 min',
  module: 'Java Fundamentals',
  content: {
    overview: 'Master the foundation of all Java programming: variables and data types. This comprehensive lesson explores how Java stores and manipulates different kinds of information, from simple numbers and text to complex objects. You\'ll understand memory allocation, type safety, and the crucial differences between primitive and reference types that every professional Java developer must know.',
    objectives: [
      'Master all eight primitive data types: byte, short, int, long, float, double, boolean, and char',
      'Understand memory allocation, ranges, and default values for each primitive type',
      'Learn variable declaration, initialization, and naming conventions for professional code',
      'Explore reference types and understand the difference between stack and heap memory',
      'Master type conversion, casting, and understand when automatic promotion occurs',
      'Work with String variables and understand string immutability',
      'Learn constants using final keyword and understand their importance in software design',
      'Practice variable scope, lifetime, and best practices for variable management'
    ],
    theory: `
<div class="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
<h1 class="text-3xl font-bold m-0 flex items-center">
<span class="w-3 h-10 bg-white rounded mr-4"></span>
Variables and Data Types
</h1>
<p class="mt-3 text-emerald-100 text-lg">The building blocks of every Java program - storing and manipulating data</p>
</div>

<div class="space-y-8">
<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
What are Variables?
</h2>
<div class="space-y-4">
<p class="text-gray-700 leading-relaxed text-lg">
Variables are named memory locations that store data values. Think of them as labeled containers 
that hold different types of information your program needs to remember and manipulate. Every variable 
in Java has a <strong>type</strong>, a <strong>name</strong>, and a <strong>value</strong>.
</p>
<div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
<h4 class="font-bold text-emerald-800 mb-2">💡 Real-World Analogy</h4>
<p class="text-emerald-700">Variables are like labeled boxes in a warehouse. Each box (variable) has a label (name), can hold specific types of items (data type), and contains actual items (values). The warehouse manager (Java compiler) ensures you only put the right type of items in each box.</p>
</div>
</div>
</section>

<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
Primitive Data Types
</h2>
<div class="space-y-4">
<p class="text-gray-700 leading-relaxed">Java provides eight primitive data types that represent the most basic kinds of data. These are stored directly in memory and have fixed sizes.</p>
<div class="overflow-x-auto">
<table class="w-full text-sm border border-gray-200 rounded-lg">
<thead class="bg-blue-50">
<tr>
<th class="text-left p-3 font-bold text-blue-800">Type</th>
<th class="text-left p-3 font-bold text-blue-800">Size</th>
<th class="text-left p-3 font-bold text-blue-800">Range</th>
<th class="text-left p-3 font-bold text-blue-800">Default</th>
<th class="text-left p-3 font-bold text-blue-800">Example</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr>
<td class="p-3 font-mono text-blue-600">byte</td>
<td class="p-3">8 bits</td>
<td class="p-3">-128 to 127</td>
<td class="p-3">0</td>
<td class="p-3 font-mono">byte age = 25;</td>
</tr>
<tr class="bg-gray-50">
<td class="p-3 font-mono text-blue-600">short</td>
<td class="p-3">16 bits</td>
<td class="p-3">-32,768 to 32,767</td>
<td class="p-3">0</td>
<td class="p-3 font-mono">short year = 2024;</td>
</tr>
<tr>
<td class="p-3 font-mono text-blue-600">int</td>
<td class="p-3">32 bits</td>
<td class="p-3">-2.1B to 2.1B</td>
<td class="p-3">0</td>
<td class="p-3 font-mono">int population = 1000000;</td>
</tr>
<tr class="bg-gray-50">
<td class="p-3 font-mono text-blue-600">long</td>
<td class="p-3">64 bits</td>
<td class="p-3">-9.2E18 to 9.2E18</td>
<td class="p-3">0L</td>
<td class="p-3 font-mono">long distance = 123456789L;</td>
</tr>
<tr>
<td class="p-3 font-mono text-blue-600">float</td>
<td class="p-3">32 bits</td>
<td class="p-3">±3.4E38 (7 digits)</td>
<td class="p-3">0.0f</td>
<td class="p-3 font-mono">float price = 19.99f;</td>
</tr>
<tr class="bg-gray-50">
<td class="p-3 font-mono text-blue-600">double</td>
<td class="p-3">64 bits</td>
<td class="p-3">±1.8E308 (15 digits)</td>
<td class="p-3">0.0</td>
<td class="p-3 font-mono">double pi = 3.14159265;</td>
</tr>
<tr>
<td class="p-3 font-mono text-blue-600">boolean</td>
<td class="p-3">1 bit</td>
<td class="p-3">true or false</td>
<td class="p-3">false</td>
<td class="p-3 font-mono">boolean isActive = true;</td>
</tr>
<tr class="bg-gray-50">
<td class="p-3 font-mono text-blue-600">char</td>
<td class="p-3">16 bits</td>
<td class="p-3">0 to 65,535 (Unicode)</td>
<td class="p-3">'\u0000'</td>
<td class="p-3 font-mono">char grade = 'A';</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
Variable Declaration and Initialization
</h2>
<div class="space-y-4">
<div class="grid md:grid-cols-2 gap-6">
<div class="bg-purple-50 p-4 rounded-lg">
<h4 class="font-bold text-purple-800 mb-3">📝 Declaration Syntax</h4>
<div class="space-y-2">
<div class="bg-white p-2 rounded border font-mono text-sm">
<span class="text-blue-600">dataType</span> <span class="text-green-600">variableName</span>;
</div>
<div class="bg-white p-2 rounded border font-mono text-sm">
<span class="text-blue-600">int</span> <span class="text-green-600">studentAge</span>;
</div>
<div class="bg-white p-2 rounded border font-mono text-sm">
<span class="text-blue-600">String</span> <span class="text-green-600">firstName</span>;
</div>
</div>
</div>
<div class="bg-green-50 p-4 rounded-lg">
<h4 class="font-bold text-green-800 mb-3">🎯 Initialization</h4>
<div class="space-y-2">
<div class="bg-white p-2 rounded border font-mono text-sm">
<span class="text-blue-600">int</span> <span class="text-green-600">count</span> = <span class="text-red-600">10</span>;
</div>
<div class="bg-white p-2 rounded border font-mono text-sm">
<span class="text-blue-600">String</span> <span class="text-green-600">name</span> = <span class="text-red-600">"Alice"</span>;
</div>
<div class="bg-white p-2 rounded border font-mono text-sm">
<span class="text-blue-600">boolean</span> <span class="text-green-600">isReady</span> = <span class="text-red-600">true</span>;
</div>
</div>
</div>
</div>

<div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
<h4 class="font-bold text-yellow-800 mb-2">⚠️ Important Rules</h4>
<ul class="space-y-1 text-yellow-700 text-sm">
<li>• Variables must be declared before use</li>
<li>• Local variables must be initialized before reading</li>
<li>• Variable names are case-sensitive (age ≠ Age)</li>
<li>• Cannot use Java keywords as variable names</li>
<li>• Must start with letter, _, or $ (not numbers)</li>
</ul>
</div>
</div>
</section>

<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
Reference Types vs Primitive Types
</h2>
<div class="grid md:grid-cols-2 gap-6">
<div class="bg-blue-50 p-4 rounded-lg">
<h4 class="font-bold text-blue-800 mb-3">🔢 Primitive Types</h4>
<ul class="space-y-2 text-blue-700 text-sm">
<li>• Stored directly in memory (stack)</li>
<li>• Fixed size and fast access</li>
<li>• Passed by value to methods</li>
<li>• Cannot be null</li>
<li>• Have default values when uninitialized</li>
</ul>
<div class="bg-white p-2 rounded border mt-3 font-mono text-xs">
int x = 42; // x contains 42 directly
</div>
</div>
<div class="bg-green-50 p-4 rounded-lg">
<h4 class="font-bold text-green-800 mb-3">📦 Reference Types</h4>
<ul class="space-y-2 text-green-700 text-sm">
<li>• Store memory addresses (references)</li>
<li>• Objects stored in heap memory</li>
<li>• Passed by reference to methods</li>
<li>• Can be null (no object)</li>
<li>• Default value is null</li>
</ul>
<div class="bg-white p-2 rounded border mt-3 font-mono text-xs">
String s = "Hello"; // s points to object
</div>
</div>
</div>
</section>

<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
Type Conversion and Casting
</h2>
<div class="space-y-4">
<div class="grid md:grid-cols-2 gap-6">
<div class="bg-green-50 p-4 rounded-lg">
<h4 class="font-bold text-green-800 mb-3">✅ Implicit Conversion (Widening)</h4>
<p class="text-green-700 text-sm mb-3">Java automatically converts smaller types to larger types:</p>
<div class="bg-white p-3 rounded border font-mono text-xs space-y-1">
<div>byte → short → int → long</div>
<div>float → double</div>
<div>char → int</div>
</div>
<div class="bg-white p-2 rounded border mt-2 font-mono text-xs">
int i = 100;<br/>
long l = i; // automatic widening
</div>
</div>
<div class="bg-red-50 p-4 rounded-lg">
<h4 class="font-bold text-red-800 mb-3">⚠️ Explicit Casting (Narrowing)</h4>
<p class="text-red-700 text-sm mb-3">Must explicitly cast when converting larger to smaller types:</p>
<div class="bg-white p-3 rounded border font-mono text-xs space-y-1">
<div>double → float → long → int → short → byte</div>
</div>
<div class="bg-white p-2 rounded border mt-2 font-mono text-xs">
double d = 3.14;<br/>
int i = (int) d; // explicit casting
</div>
</div>
</div>
</div>
</section>

<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
Constants and Final Variables
</h2>
<div class="space-y-4">
<p class="text-gray-700 leading-relaxed">Constants are variables whose values cannot be changed after initialization. Use the <code>final</code> keyword to create constants.</p>
<div class="grid md:grid-cols-2 gap-6">
<div class="bg-blue-50 p-4 rounded-lg">
<h4 class="font-bold text-blue-800 mb-3">📌 Local Constants</h4>
<div class="bg-white p-3 rounded border font-mono text-sm">
final int MAX_STUDENTS = 30;<br/>
final double PI = 3.14159;
</div>
</div>
<div class="bg-green-50 p-4 rounded-lg">
<h4 class="font-bold text-green-800 mb-3">🏢 Class Constants</h4>
<div class="bg-white p-3 rounded border font-mono text-sm">
public static final String COMPANY = "TechCorp";<br/>
public static final int VERSION = 1;
</div>
</div>
</div>
</div>
</section>

<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
Variable Naming Conventions
</h2>
<div class="grid md:grid-cols-2 gap-6">
<div class="space-y-3">
<div class="bg-green-50 p-3 rounded-lg">
<h4 class="font-bold text-green-800 text-sm">✅ Good Naming Practices</h4>
<div class="space-y-1 text-xs text-green-700 font-mono">
<div>studentAge (camelCase)</div>
<div>firstName</div>
<div>totalScore</div>
<div>isComplete</div>
<div>MAX_SIZE (constants)</div>
</div>
</div>
</div>
<div class="space-y-3">
<div class="bg-red-50 p-3 rounded-lg">
<h4 class="font-bold text-red-800 text-sm">❌ Poor Naming Practices</h4>
<div class="space-y-1 text-xs text-red-700 font-mono">
<div>a, b, x, temp (unclear)</div>
<div>student_age (not camelCase)</div>
<div>123name (starts with number)</div>
<div>class (reserved keyword)</div>
<div>myvariablename (no separation)</div>
</div>
</div>
</div>
</div>
</section>

<section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
<h2 class="text-2xl font-bold text-gray-800 mb-4">💡 Professional Development Tips</h2>
<div class="grid md:grid-cols-2 gap-6">
<div>
<h4 class="font-bold text-gray-800 mb-3">✅ Best Practices</h4>
<ul class="space-y-2 text-gray-700">
<li>• Choose descriptive variable names that explain their purpose</li>
<li>• Initialize variables when you declare them when possible</li>
<li>• Use the smallest data type that fits your needs</li>
<li>• Use constants for values that won't change</li>
<li>• Group related variable declarations together</li>
<li>• Use meaningful names even for temporary variables</li>
</ul>
</div>
<div>
<h4 class="font-bold text-gray-800 mb-3">🚫 Common Mistakes</h4>
<ul class="space-y-2 text-gray-700">
<li>• Using variables before initialization</li>
<li>• Choosing inappropriate data types (byte when int needed)</li>
<li>• Losing precision in type conversions</li>
<li>• Using single-letter variable names in production code</li>
<li>• Forgetting 'L' suffix for long literals</li>
<li>• Confusing = (assignment) with == (comparison)</li>
</ul>
</div>
</div>
</section>
</div>
`,
    codeExample: `/**
 * DataTypesComprehensive.java
 * 
 * This comprehensive program demonstrates all Java primitive data types,
 * variable declaration patterns, type conversion, and best practices.
 * It shows:
 * - All eight primitive data types with practical examples
 * - Variable declaration, initialization, and naming conventions
 * - Type conversion and casting operations
 * - Constants and final variables
 * - Memory usage and performance considerations
 * - Real-world scenarios for each data type
 * 
 * This example serves as a complete reference for Java data types
 * and demonstrates professional coding practices.
 */

public class DataTypesComprehensive {
  // Class-level constants (accessible throughout the class)
  public static final String COMPANY_NAME = "TechEducation Inc.";
  public static final int CURRENT_YEAR = 2024;
  public static final double PI = 3.14159265359;

  public static void main(String[] args) {
    printProgramHeader();
    demonstratePrimitiveTypes();
    demonstrateTypeConversion();
    demonstrateStringVariables();
    demonstrateConstants();
    demonstrateVariableScope();
    demonstrateMemoryUsage();
    printProgramFooter();
  }

  /**
   * Display program header with title and purpose
   */
  private static void printProgramHeader() {
    System.out.println("╔══════════════════════════════════════════════════════════════╗");
    System.out.println("║                                                              ║");
    System.out.println("║           📊 JAVA DATA TYPES COMPREHENSIVE DEMO             ║");
    System.out.println("║                Variables, Types, and Memory                  ║");
    System.out.println("║                                                              ║");
    System.out.println("║  This program demonstrates:                                  ║");
    System.out.println("║  • All primitive data types and their usage                 ║");
    System.out.println("║  • Variable declaration and initialization                   ║");
    System.out.println("║  • Type conversion and casting                               ║");
    System.out.println("║  • Constants and naming conventions                         ║");
    System.out.println("║  • Memory considerations and best practices                 ║");
    System.out.println("║                                                              ║");
    System.out.println("╚══════════════════════════════════════════════════════════════╝");
    System.out.println();
  }

  /**
   * Demonstrate all primitive data types with practical examples
   */
  private static void demonstratePrimitiveTypes() {
    System.out.println("🔸 PRIMITIVE DATA TYPES DEMONSTRATION");
    System.out.println("   ═══════════════════════════════════");

    // Integer types
    byte studentAge = 20;           // Small numbers (-128 to 127)
    short populationThousands = 1500; // Medium numbers (-32K to 32K)
    int cityPopulation = 1000000;   // Standard integers
    long worldPopulation = 8000000000L; // Large numbers (note the L suffix)

    // Floating-point types
    float itemPrice = 29.99f;       // Single precision (note the f suffix)
    double scientificValue = 6.022e23; // Double precision, scientific notation

    // Character and boolean
    char grade = 'A';               // Single character in quotes
    boolean isPassed = true;        // true or false only

    System.out.println("   Integer Types:");
    System.out.println("   └─ byte studentAge = " + studentAge + " (range: -128 to 127)");
    System.out.println("   └─ short populationThousands = " + populationThousands + " (range: -32K to 32K)");
    System.out.println("   └─ int cityPopulation = " + cityPopulation + " (range: -2.1B to 2.1B)");
    System.out.println("   └─ long worldPopulation = " + worldPopulation + " (range: huge!)");

    System.out.println();
    System.out.println("   Floating-Point Types:");
    System.out.println("   └─ float itemPrice = " + itemPrice + " (7 decimal digits precision)");
    System.out.println("   └─ double scientificValue = " + scientificValue + " (15 decimal digits precision)");

    System.out.println();
    System.out.println("   Other Types:");
    System.out.println("   └─ char grade = '" + grade + "' (single Unicode character)");
    System.out.println("   └─ boolean isPassed = " + isPassed + " (true or false only)");

    // Demonstrate default values
    System.out.println();
    System.out.println("   📋 Default Values (when not initialized):");
    System.out.println("   └─ int default: 0");
    System.out.println("   └─ double default: 0.0");
    System.out.println("   └─ boolean default: false");
    System.out.println("   └─ char default: '\\u0000' (null character)");
    System.out.println();
  }

  /**
   * Demonstrate type conversion and casting with practical examples
   */
  private static void demonstrateTypeConversion() {
    System.out.println("🔄 TYPE CONVERSION AND CASTING");
    System.out.println("   ═══════════════════════════");

    // Implicit conversion (widening)
    byte b = 100;
    short s = b;  // byte to short
    int i = s;    // short to int
    long l = i;   // int to long
    float f = l;  // long to float
    double d = f; // float to double

    System.out.println("   Implicit Conversions (Widening):");
    System.out.println("   └─ byte " + b + " → short " + s);
    System.out.println("   └─ short " + s + " → int " + i);
    System.out.println("   └─ int " + i + " → long " + l);
    System.out.println("   └─ long " + l + " → float " + f);
    System.out.println("   └─ float " + f + " → double " + d);

    // Explicit casting (narrowing)
    double price = 29.99;
    float priceFloat = (float) price;  // double to float
    long priceLong = (long) priceFloat; // float to long
    int priceInt = (int) priceLong;    // long to int
    short priceShort = (short) priceInt; // int to short
    byte priceByte = (byte) priceShort;  // short to byte

    System.out.println();
    System.out.println("   Explicit Casting (Narrowing):");
    System.out.println("   └─ double " + price + " → float " + priceFloat);
    System.out.println("   └─ float " + priceFloat + " → long " + priceLong);
    System.out.println("   └─ long " + priceLong + " → int " + priceInt);
    System.out.println("   └─ int " + priceInt + " → short " + priceShort);
    System.out.println("   └─ short " + priceShort + " → byte " + priceByte);

    // Potential data loss in casting
    System.out.println();
    System.out.println("   ⚠️  Potential Data Loss in Casting:");
    double largeValue = 12345.6789;
    int smallValue = (int) largeValue;
    System.out.println("   └─ double " + largeValue + " → int " + smallValue + " (decimal part lost)");
    
    int largeInt = 1000000;
    byte smallByte = (byte) largeInt;
    System.out.println("   └─ int " + largeInt + " → byte " + smallByte + " (overflow occurred)");
    System.out.println();
  }

  /**
   * Demonstrate String variables and operations
   */
  private static void demonstrateStringVariables() {
    System.out.println("🔤 STRING VARIABLES AND OPERATIONS");
    System.out.println("   ════════════════════════════════");

    // String declaration and initialization
    String firstName = "John";
    String lastName = "Doe";
    String fullName = firstName + " " + lastName; // String concatenation

    System.out.println("   String Operations:");
    System.out.println("   └─ First Name: " + firstName);
    System.out.println("   └─ Last Name: " + lastName);
    System.out.println("   └─ Full Name: " + fullName);
    System.out.println("   └─ Name Length: " + fullName.length() + " characters");
    System.out.println("   └─ Uppercase: " + fullName.toUpperCase());
    System.out.println("   └─ Lowercase: " + fullName.toLowerCase());
    System.out.println("   └─ Contains 'John': " + fullName.contains("John"));
    System.out.println();
  }

  /**
   * Demonstrate constants and final variables
   */
  private static void demonstrateConstants() {
    System.out.println("🔒 CONSTANTS AND FINAL VARIABLES");
    System.out.println("   ══════════════════════════════");

    // Local constants
    final int MAX_STUDENTS = 30;
    final double PI = 3.14159;
    final String UNIVERSITY = "Java University";

    System.out.println("   Local Constants:");
    System.out.println("   └─ MAX_STUDENTS: " + MAX_STUDENTS);
    System.out.println("   └─ PI: " + PI);
    System.out.println("   └─ UNIVERSITY: " + UNIVERSITY);
    System.out.println("   └─ CURRENT_YEAR: " + CURRENT_YEAR + " (class constant)");
    System.out.println();
  }

  /**
   * Demonstrate variable scope
   */
  private static void demonstrateVariableScope() {
    System.out.println("🎯 VARIABLE SCOPE DEMONSTRATION");
    System.out.println("   ═════════════════════════════");

    // Method-level variable
    int methodLevelVar = 100;
    System.out.println("   Method-level variable: " + methodLevelVar);

    // Block-level scope
    {
      int blockLevelVar = 200;
      System.out.println("   Block-level variable: " + blockLevelVar);
      System.out.println("   Method-level variable still accessible: " + methodLevelVar);
    }

    // blockLevelVar is not accessible here
    System.out.println("   Block-level variable out of scope");
    System.out.println("   Method-level variable still accessible: " + methodLevelVar);
    System.out.println();
  }

  /**
   * Demonstrate memory usage considerations
   */
  private static void demonstrateMemoryUsage() {
    System.out.println("💾 MEMORY USAGE CONSIDERATIONS");
    System.out.println("   ════════════════════════════");

    // Choosing appropriate data types
    System.out.println("   Choosing Appropriate Data Types:");
    System.out.println("   └─ Use byte for small numbers (-128 to 127)");
    System.out.println("   └─ Use short for medium numbers (-32,768 to 32,767)");
    System.out.println("   └─ Use int for standard integers (most common)");
    System.out.println("   └─ Use long for large numbers (billions and above)");
    System.out.println("   └─ Use float for single-precision decimal numbers");
    System.out.println("   └─ Use double for double-precision decimal numbers (most common)");
    System.out.println("   └─ Use char for single characters");
    System.out.println("   └─ Use boolean for true/false values");
    System.out.println();
  }

  /**
   * Display program footer with summary
   */
  private static void printProgramFooter() {
    System.out.println("╔══════════════════════════════════════════════════════════════╗");
    System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
    System.out.println("║                                                              ║");
    System.out.println("║  You've seen examples of:                                    ║");
    System.out.println("║  • All 8 primitive data types with practical usage           ║");
    System.out.println("║  • Variable declaration, initialization, and naming          ║");
    System.out.println("║  • Type conversion and casting (implicit and explicit)       ║");
    System.out.println("║  • Constants and final variables                             ║");
    System.out.println("║  • String operations and concatenation                       ║");
    System.out.println("║  • Variable scope and memory considerations                 ║");
    System.out.println("║                                                              ║");
    System.out.println("║  Remember to:                                                ║");
    System.out.println("║  • Choose descriptive variable names                         ║");
    System.out.println("║  • Use the smallest appropriate data type                   ║");
    System.out.println("║  • Initialize variables when declared                        ║");
    System.out.println("║  • Use constants for unchanging values                      ║");
    System.out.println("║  • Follow Java naming conventions                           ║");
    System.out.println("╚══════════════════════════════════════════════════════════════╝");
  }
}`,
    exercise: `
      1) Declare an int variable and assign it a value, then print it.
      2) Create a double variable for pi and print it with 2 decimal places.
      3) Declare a boolean variable and use it in an if statement.
    `
  }
};