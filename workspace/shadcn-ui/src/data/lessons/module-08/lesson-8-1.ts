import { LessonContent } from '../../types/LessonTypes';

export const lesson_8_1: LessonContent = {
  title: 'Introduction to Generics',
  type: 'lesson',
  duration: '20 min',
  module: 'Generics and Type Safety',
  content: {
    overview: 'Learn the fundamentals of generics in Java. This lesson covers the basic concepts, syntax, and benefits of using generics to create type-safe, reusable code.',
    objectives: [
      'Understand the concept and benefits of generics',
      'Learn generic syntax and type parameters',
      'Create simple generic classes and methods',
      'Apply generics to improve type safety',
      'Practice using generics in collections',
      'Avoid common pitfalls with raw types'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Generics
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Type-safe, reusable code with Java generics</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Generics?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Generics in Java enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods. 
            Much like formal parameters used in method declarations, type parameters provide a way for you to reuse the same code 
            with different inputs. The difference is that the inputs to formal parameters are values, while the inputs to type 
            parameters are types.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Generics add compile-time type safety to Java collections and eliminate the need for casting, making code more robust and readable.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Generic Syntax and Type Parameters
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding generic syntax and type parameters:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Type Parameter Naming</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• E - Element (used extensively by Java Collections Framework)</li>
                  <li>• K - Key (used in maps)</li>
                  <li>• N - Number (used for numbers)</li>
                  <li>• T - Type (general purpose)</li>
                  <li>• V - Value (used in maps)</li>
                  <li>• S,U,V etc. - 2nd, 3rd, 4th types</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public class Box<T> {<br/>
                  &nbsp;&nbsp;private T t;<br/>
                  &nbsp;&nbsp;public void set(T t) { this.t = t; }<br/>
                  &nbsp;&nbsp;public T get() { return t; }<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Generic Method Syntax</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Type parameters before return type</li>
                  <li>• Can be used with or without generic class</li>
                  <li>• Type inference with diamond operator</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public static <T> void swap(T[] array, int i, int j) {<br/>
                  &nbsp;&nbsp;T temp = array[i];<br/>
                  &nbsp;&nbsp;array[i] = array[j];<br/>
                  &nbsp;&nbsp;array[j] = temp;<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Benefits of Generics
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The advantages of using generics in Java:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Without generics - requires casting<br/>
              List list = new ArrayList();<br/>
              list.add("Hello");<br/>
              String str = (String) list.get(0); // Cast required<br/>
              <br/>
              // With generics - type safety and no casting<br/>
              List<String> list = new ArrayList<>();<br/>
              list.add("Hello");<br/>
              String str = list.get(0); // No cast needed
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Type Safety</h4>
                <p class="text-gray-700">Compile-time checking prevents ClassCastException at runtime.</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Elimination of Casts</h4>
                <p class="text-gray-700">No need to cast objects when retrieving from collections.</p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Code Reusability</h4>
                <p class="text-gray-700">Single implementation can work with different types.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Raw Types and Their Pitfalls
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding raw types and why they should be avoided:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Raw Types</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Generic class without type parameters</li>
                  <li>• Retained for backward compatibility</li>
                  <li>• Lose type safety benefits</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Raw type - avoid this<br/>
                  List list = new ArrayList();<br/>
                  list.add("Hello");<br/>
                  list.add(123); // No compile error!
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Generic Types</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Generic class with type parameters</li>
                  <li>• Provides compile-time type safety</li>
                  <li>• Eliminates ClassCastException</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Generic type - preferred<br/>
                  List<String> list = new ArrayList<>();<br/>
                  list.add("Hello");<br/>
                  list.add(123); // Compile error!
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Generics</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use generics for type safety</li>
                <li>• Follow standard naming conventions</li>
                <li>• Use diamond operator when possible</li>
                <li>• Prefer generic types over raw types</li>
                <li>• Use bounded type parameters when appropriate</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use raw types in new code</li>
                <li>• Don't ignore compiler warnings</li>
                <li>• Don't use generic type information at runtime</li>
                <li>• Don't create arrays of parameterized types</li>
                <li>• Don't use unchecked casts</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * GenericsIntroductionDemo.java
 * 
 * This comprehensive example demonstrates the fundamentals of generics in Java:
 * - Basic generic class implementation
 * - Generic methods
 * - Benefits of type safety
 * - Raw types vs. generic types
 * - Best practices for using generics
 * 
 * Run this program to see generics in action.
 */

import java.util.*;

// Generic Box class
class Box<T> {
    private T item;
    
    public void set(T item) {
        this.item = item;
    }
    
    public T get() {
        return item;
    }
    
    @Override
    public String toString() {
        return "Box containing: " + item;
    }
}

// Generic Pair class with two type parameters
class Pair<T, U> {
    private T first;
    private U second;
    
    public Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }
    
    public T getFirst() {
        return first;
    }
    
    public U getSecond() {
        return second;
    }
    
    @Override
    public String toString() {
        return "Pair(" + first + ", " + second + ")";
    }
}

public class GenericsIntroductionDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic generic class
        demonstrateGenericClass();
        
        // Demonstrate generic methods
        demonstrateGenericMethods();
        
        // Demonstrate type safety benefits
        demonstrateTypeSafety();
        
        // Demonstrate raw types vs. generic types
        demonstrateRawVsGeneric();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         GENERICS INTRODUCTION DEMO                           ║");
        System.out.println("║         Fundamentals of Java Generics                        ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateGenericClass() {
        System.out.println("🔸 GENERIC CLASS DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        // Create Box with String
        Box<String> stringBox = new Box<>();
        stringBox.set("Hello Generics!");
        System.out.println("   String Box: " + stringBox.get());
        
        // Create Box with Integer
        Box<Integer> intBox = new Box<>();
        intBox.set(42);
        System.out.println("   Integer Box: " + intBox.get());
        
        // Create Box with custom object
        Box<Pair<String, Integer>> pairBox = new Box<>();
        Pair<String, Integer> pair = new Pair<>("Age", 25);
        pairBox.set(pair);
        System.out.println("   Pair Box: " + pairBox.get());
        
        System.out.println();
    }
    
    private static void demonstrateGenericMethods() {
        System.out.println("🔸 GENERIC METHODS DEMONSTRATION");
        System.out.println("   ──────────────────────────────");
        
        // Generic method to swap array elements
        String[] stringArray = {"First", "Second", "Third"};
        System.out.println("   Before swap: " + Arrays.toString(stringArray));
        swap(stringArray, 0, 2);
        System.out.println("   After swap: " + Arrays.toString(stringArray));
        
        // Generic method to find maximum
        Integer[] intArray = {3, 7, 2, 9, 1};
        System.out.println("   Integer array: " + Arrays.toString(intArray));
        Integer max = findMax(intArray);
        System.out.println("   Maximum value: " + max);
        
        // Generic method to print array
        System.out.print("   Printing array: ");
        printArray(intArray);
        
        System.out.println();
    }
    
    // Generic method to swap array elements
    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    // Generic method to find maximum element
    public static <T extends Comparable<T>> T findMax(T[] array) {
        if (array == null || array.length == 0) {
            return null;
        }
        
        T max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i].compareTo(max) > 0) {
                max = array[i];
            }
        }
        return max;
    }
    
    // Generic method to print array
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    private static void demonstrateTypeSafety() {
        System.out.println("🔸 TYPE SAFETY DEMONSTRATION");
        System.out.println("   ──────────────────────────");
        
        // Without generics - requires casting and can cause runtime errors
        System.out.println("   Without generics (raw types):");
        List rawList = new ArrayList();
        rawList.add("Hello");
        rawList.add(123); // This is allowed but can cause problems
        String str1 = (String) rawList.get(0); // Cast required
        System.out.println("     Retrieved: " + str1);
        
        try {
            String str2 = (String) rawList.get(1); // Runtime error!
        } catch (ClassCastException e) {
            System.out.println("     Error: " + e.getMessage());
        }
        
        // With generics - compile-time type safety
        System.out.println("   With generics:");
        List<String> genericList = new ArrayList<>();
        genericList.add("Hello");
        // genericList.add(123); // Compile error - type safety!
        String str3 = genericList.get(0); // No cast needed
        System.out.println("     Retrieved: " + str3);
        
        System.out.println();
    }
    
    private static void demonstrateRawVsGeneric() {
        System.out.println("🔸 RAW VS GENERIC TYPES DEMONSTRATION");
        System.out.println("   ────────────────────────────────────");
        
        // Raw type - not recommended
        System.out.println("   Raw type usage (not recommended):");
        List rawList = new ArrayList();
        rawList.add("String");
        rawList.add(123); // No compile-time check
        rawList.add(new Date()); // Any type allowed
        
        // Need to cast when retrieving
        String str = (String) rawList.get(0); // Cast required
        System.out.println("     Retrieved string: " + str);
        
        // Generic type - preferred
        System.out.println("   Generic type usage (preferred):");
        List<String> stringList = new ArrayList<>();
        stringList.add("First");
        stringList.add("Second");
        // stringList.add(123); // Compile error - type safety!
        
        // No cast needed when retrieving
        String str1 = stringList.get(0); // Type safety guaranteed
        System.out.println("     Retrieved string: " + str1);
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Basic generic class implementation                        ║");
        System.out.println("║  • Generic methods                                            ║");
        System.out.println("║  • Benefits of type safety                                   ║");
        System.out.println("║  • Raw types vs. generic types                               ║");
        System.out.println("║  • Best practices for using generics                         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use generics for type safety                              ║");
        System.out.println("║  • Follow standard naming conventions                        ║");
        System.out.println("║  • Prefer generic types over raw types                       ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1) Create a generic class called Box that can store any type of object with set and get methods.
2) Implement a generic method that swaps two elements in an array of any type.
3) Create a generic method that finds the maximum element in an array of comparable objects.
4) Write a program that demonstrates the difference between raw types and generic types.
5) Create a generic Pair class that holds two values of potentially different types.
`
  }
};