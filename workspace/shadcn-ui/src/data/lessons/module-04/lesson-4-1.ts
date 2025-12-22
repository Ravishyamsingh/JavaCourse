import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_1: LessonContent = {
  title: 'Introduction to Arrays',
  type: 'lesson',
  duration: '25 min',
  module: 'Arrays and Strings',
  content: {
    overview: 'Learn the fundamentals of arrays in Java, including how to declare, initialize, and access array elements. This lesson covers one-dimensional arrays, array indexing, and basic array operations. You\'ll understand how arrays store multiple values of the same type and how to manipulate array data effectively.',
    objectives: [
      'Understand what arrays are and why they are useful in programming',
      'Learn to declare and initialize arrays with different syntaxes',
      'Master array indexing and accessing array elements',
      'Practice iterating through arrays using loops',
      'Learn about array bounds and how to avoid index out of bounds errors',
      'Understand the difference between array length and indices',
      'Practice basic array operations like finding min/max values'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Arrays
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Storing and managing collections of data efficiently</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Arrays?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            An array is a data structure that stores a fixed-size sequential collection of elements of the same type. 
            An array is used to store a collection of data, but it is often more useful to think of an array as 
            a collection of variables of the same type.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Arrays allow you to store multiple values in a single variable, instead of declaring separate variables for each value.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Array Declaration and Initialization
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Arrays in Java can be declared and initialized in several ways:</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Declaration Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                dataType[] arrayName; // Preferred way<br/>
                dataType arrayName[]; // Also valid but less preferred
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Initialization Examples:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                // Method 1: Declaration and initialization separately<br/>
                int[] numbers;<br/>
                numbers = new int[5]; // Creates array of size 5<br/>
                <br/>
                // Method 2: Declaration and initialization together<br/>
                int[] scores = new int[10];<br/>
                <br/>
                // Method 3: Initialize with values<br/>
                int[] ages = {25, 30, 35, 40, 45};<br/>
                <br/>
                // Method 4: Using new keyword with values<br/>
                int[] grades = new int[]{90, 85, 78, 92, 88};
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Array Indexing and Access
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Array elements are accessed using their index, which starts from 0:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Accessing Elements:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  int[] numbers = {10, 20, 30, 40, 50};<br/>
                  System.out.println(numbers[0]); // Prints 10<br/>
                  System.out.println(numbers[2]); // Prints 30<br/>
                  numbers[1] = 25; // Changes second element to 25
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Array Length:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  int[] array = new int[10];<br/>
                  System.out.println(array.length); // Prints 10<br/>
                  <br/>
                  // Length is fixed and cannot be changed<br/>
                  // But you can access it to iterate properly
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Iterating Through Arrays
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Traditional For Loop:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                int[] numbers = {1, 2, 3, 4, 5};<br/>
                for (int i = 0; i < numbers.length; i++) {<br/>
                &nbsp;&nbsp;System.out.println("Index " + i + ": " + numbers[i]);<br/>
                }
              </div>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Enhanced For Loop:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                int[] numbers = {1, 2, 3, 4, 5};<br/>
                for (int number : numbers) {<br/>
                &nbsp;&nbsp;System.out.println("Number: " + number);<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common Array Operations
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-indigo-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Operation</th>
                  <th class="text-left p-3 font-bold border-b">Description</th>
                  <th class="text-left p-3 font-bold border-b">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-medium">Finding Maximum</td>
                  <td class="p-3">Find the largest element in array</td>
                  <td class="p-3 font-mono">int max = Arrays.stream(arr).max().orElse(0);</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-medium">Finding Minimum</td>
                  <td class="p-3">Find the smallest element in array</td>
                  <td class="p-3 font-mono">int min = Arrays.stream(arr).min().orElse(0);</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-medium">Sum of Elements</td>
                  <td class="p-3">Calculate total of all elements</td>
                  <td class="p-3 font-mono">int sum = Arrays.stream(arr).sum();</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-medium">Searching</td>
                  <td class="p-3">Find if element exists in array</td>
                  <td class="p-3 font-mono">boolean found = Arrays.stream(arr).anyMatch(x -> x == target);</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Arrays</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always check array bounds before accessing elements</li>
                <li>• Use enhanced for loops when you don't need the index</li>
                <li>• Initialize arrays with appropriate sizes</li>
                <li>• Use meaningful variable names for arrays</li>
                <li>• Validate input when working with arrays</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't access elements outside array bounds</li>
                <li>• Don't assume arrays are always initialized</li>
                <li>• Don't use magic numbers for array sizes</li>
                <li>• Don't ignore ArrayIndexOutOfBoundsException</li>
                <li>• Don't modify array length after creation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ArraysIntroductionDemo.java
 * 
 * This comprehensive example demonstrates the fundamentals of arrays in Java:
 * - Array declaration and initialization in multiple ways
 * - Array indexing and element access
 * - Iterating through arrays with different loop types
 * - Common array operations and manipulations
 * - Best practices for array usage
 * 
 * Run this program to see how arrays work in practice.
 */

import java.util.Arrays;

public class ArraysIntroductionDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate array declaration and initialization
        demonstrateArrayDeclaration();
        
        // Demonstrate array indexing and access
        demonstrateArrayAccess();
        
        // Demonstrate array iteration
        demonstrateArrayIteration();
        
        // Demonstrate common array operations
        demonstrateArrayOperations();
        
        // Demonstrate array bounds safety
        demonstrateBoundsSafety();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    ARRAYS INTRODUCTION DEMO                  ║");
        System.out.println("║           Understanding Array Fundamentals in Java           ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateArrayDeclaration() {
        System.out.println("🔸 ARRAY DECLARATION AND INITIALIZATION");
        System.out.println("   ─────────────────────────────────────");
        
        // Method 1: Declaration and initialization separately
        int[] numbers;
        numbers = new int[5];
        System.out.println("   Array declared with size 5: " + Arrays.toString(numbers));
        
        // Method 2: Declaration and initialization together
        String[] names = new String[3];
        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";
        System.out.println("   String array with names: " + Arrays.toString(names));
        
        // Method 3: Initialize with values
        double[] prices = {19.99, 29.99, 39.99, 49.99};
        System.out.println("   Price array: " + Arrays.toString(prices));
        
        // Method 4: Using new keyword with values
        boolean[] flags = new boolean[]{true, false, true, false, true};
        System.out.println("   Boolean flags: " + Arrays.toString(flags));
        
        System.out.println();
    }
    
    private static void demonstrateArrayAccess() {
        System.out.println("🔸 ARRAY INDEXING AND ACCESS");
        System.out.println("   ──────────────────────────");
        
        int[] fibonacci = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34};
        System.out.println("   Fibonacci sequence: " + Arrays.toString(fibonacci));
        System.out.println("   First element (index 0): " + fibonacci[0]);
        System.out.println("   Fifth element (index 4): " + fibonacci[4]);
        System.out.println("   Last element (index 9): " + fibonacci[9]);
        
        // Modifying array elements
        fibonacci[0] = 100;
        System.out.println("   After modifying first element: " + Arrays.toString(fibonacci));
        
        System.out.println();
    }
    
    private static void demonstrateArrayIteration() {
        System.out.println("🔸 ARRAY ITERATION METHODS");
        System.out.println("   ────────────────────────");
        
        String[] colors = {"Red", "Green", "Blue", "Yellow", "Purple"};
        System.out.println("   Colors array: " + Arrays.toString(colors));
        
        // Traditional for loop
        System.out.println("   Using traditional for loop:");
        for (int i = 0; i < colors.length; i++) {
            System.out.println("   Index " + i + ": " + colors[i]);
        }
        
        // Enhanced for loop
        System.out.println("   Using enhanced for loop:");
        for (String color : colors) {
            System.out.println("   Color: " + color);
        }
        
        System.out.println();
    }
    
    private static void demonstrateArrayOperations() {
        System.out.println("🔸 COMMON ARRAY OPERATIONS");
        System.out.println("   ────────────────────────");
        
        int[] numbers = {15, 3, 9, 22, 7, 1, 30, 14};
        System.out.println("   Numbers array: " + Arrays.toString(numbers));
        
        // Finding maximum
        int max = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        System.out.println("   Maximum value: " + max);
        
        // Finding minimum
        int min = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
        }
        System.out.println("   Minimum value: " + min);
        
        // Calculating sum
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        System.out.println("   Sum of all elements: " + sum);
        
        // Calculating average
        double average = (double) sum / numbers.length;
        System.out.println("   Average value: " + String.format("%.2f", average));
        
        System.out.println();
    }
    
    private static void demonstrateBoundsSafety() {
        System.out.println("🔸 ARRAY BOUNDS SAFETY");
        System.out.println("   ───────────────────");
        
        int[] smallArray = {1, 2, 3};
        System.out.println("   Small array: " + Arrays.toString(smallArray));
        System.out.println("   Array length: " + smallArray.length);
        
        // Safe access
        System.out.println("   Accessing valid indices:");
        for (int i = 0; i < smallArray.length; i++) {
            System.out.println("   Index " + i + ": " + smallArray[i]);
        }
        
        // Demonstrating bounds checking
        System.out.println("   Attempting to access invalid indices:");
        try {
            int value = smallArray[5]; // This will throw an exception
            System.out.println("   Value at index 5: " + value);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("   ⚠️  ArrayIndexOutOfBoundsException caught: Index out of bounds");
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Array declaration and initialization methods              ║");
        System.out.println("║  • Array indexing and element access                         ║");
        System.out.println("║  • Different ways to iterate through arrays                  ║");
        System.out.println("║  • Common array operations and manipulations                 ║");
        System.out.println("║  • Array bounds safety and exception handling                ║");
        System.out.println("║  • Best practices for working with arrays                    ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always validate array indices before accessing            ║");
        System.out.println("║  • Use enhanced for loops when index is not needed           ║");
        System.out.println("║  • Initialize arrays with appropriate sizes                  ║");
        System.out.println("║  • Handle ArrayIndexOutOfBoundsException appropriately      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
      1) Create an array of integers and print all elements using a for loop.
      2) Find the maximum value in an array of integers.
      3) Create a String array and print the length of each string.
    `
  }
};