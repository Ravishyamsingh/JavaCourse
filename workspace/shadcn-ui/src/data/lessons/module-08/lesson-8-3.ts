import { LessonContent } from '../../types/LessonTypes';

export const lesson_8_3: LessonContent = {
  title: 'Wildcards and Bounded Type Parameters',
  type: 'coding',
  duration: '30 min',
  module: 'Generics and Type Safety',
  content: {
    overview: 'Master wildcards and bounded type parameters in Java generics. This lesson covers upper and lower bounded wildcards, unbounded wildcards, and advanced techniques for creating flexible, type-safe APIs.',
    objectives: [
      'Understand wildcards and their use cases',
      'Master upper and lower bounded wildcards',
      'Learn about unbounded wildcards',
      'Apply bounded type parameters effectively',
      'Create flexible APIs with wildcards',
      'Handle wildcard capture and limitations'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Wildcards and Bounded Type Parameters
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Flexible, type-safe APIs with Java wildcards</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Wildcards
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Wildcards in Java generics provide a way to make APIs more flexible while maintaining type safety. They allow you to 
            write methods that can work with collections of different types, making your code more reusable and expressive.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">Wildcards enable you to create flexible APIs that work with different type hierarchies while preserving type safety through bounded constraints.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Upper Bounded Wildcards
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Upper bounded wildcards restrict the unknown type to be a specific type or its subtype:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Syntax and Usage</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use extends keyword with wildcard (?)</li>
                  <li>• Restricts type to specified class or its subclasses</li>
                  <li>• Enables read operations but not write operations</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Upper bounded wildcard<br/>
                  public static void printList(List<? extends Number> list) {<br/>
                  &nbsp;&nbsp;for (Number n : list) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(n + " ");<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Common Use Cases</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Reading from collections of related types</li>
                  <li>• Implementing generic utility methods</li>
                  <li>• Working with inheritance hierarchies</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Works with List<Integer>, List<Double>, etc.<br/>
                  List<Integer> intList = Arrays.asList(1, 2, 3);<br/>
                  List<Double> doubleList = Arrays.asList(1.1, 2.2, 3.3);<br/>
                  printList(intList);<br/>
                  printList(doubleList);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Lower Bounded Wildcards
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Lower bounded wildcards restrict the unknown type to be a specific type or its supertype:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Lower bounded wildcard<br/>
              public static void addNumbers(List<? super Integer> list) {<br/>
              &nbsp;&nbsp;for (int i = 1; i <= 10; i++) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;list.add(i);<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Usage examples<br/>
              List<Integer> intList = new ArrayList<>();<br/>
              List<Number> numberList = new ArrayList<>();<br/>
              List<Object> objectList = new ArrayList<>();<br/>
              <br/>
              addNumbers(intList);    // Works<br/>
              addNumbers(numberList); // Works<br/>
              addNumbers(objectList); // Works
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Wildcard Type</th>
                    <th class="text-left p-3 font-bold border-b">Syntax</th>
                    <th class="text-left p-3 font-bold border-b">Operations</th>
                    <th class="text-left p-3 font-bold border-b">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3">Upper Bounded</td>
                    <td class="p-3 font-mono">? extends Type</td>
                    <td class="p-3">Read-only</td>
                    <td class="p-3">Reading from collections</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Lower Bounded</td>
                    <td class="p-3 font-mono">? super Type</td>
                    <td class="p-3">Write-only</td>
                    <td class="p-3">Writing to collections</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Unbounded</td>
                    <td class="p-3 font-mono">?</td>
                    <td class="p-3">Limited operations</td>
                    <td class="p-3">Type-agnostic methods</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Bounded Type Parameters
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Using bounded type parameters to constrain generic types:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Single Bound</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Restrict type parameter to specific class or interface</li>
                  <li>• Enable access to methods of the bound type</li>
                  <li>• Provide compile-time type safety</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public class Container<T extends Number> {<br/>
                  &nbsp;&nbsp;private T value;<br/>
                  &nbsp;&nbsp;public double getDoubleValue() {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return value.doubleValue(); // Available because of bound<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Multiple Bounds</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Combine class and interface bounds</li>
                  <li>• Enable access to methods from multiple types</li>
                  <li>• Create more specific type constraints</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public class ComparableContainer<T extends Number & Comparable<T>> {<br/>
                  &nbsp;&nbsp;private T value;<br/>
                  &nbsp;&nbsp;public int compare(T other) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return value.compareTo(other);<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Wildcard Capture and Limitations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding wildcard capture and its limitations:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Wildcard Capture</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Compiler technique to handle wildcards</li>
                  <li>• Enables type inference in generic methods</li>
                  <li>• Requires helper methods for complex cases</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Helper method for wildcard capture<br/>
                  public static <T> void swapHelper(List<T> list, int i, int j) {<br/>
                  &nbsp;&nbsp;T temp = list.get(i);<br/>
                  &nbsp;&nbsp;list.set(i, list.get(j));<br/>
                  &nbsp;&nbsp;list.set(j, temp);<br/>
                  }<br/>
                  <br/>
                  public static void swap(List<?> list, int i, int j) {<br/>
                  &nbsp;&nbsp;swapHelper(list, i, j); // Capture wildcard<br/>
                  }
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Limitations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Cannot create instances of wildcard types</li>
                  <li>• Cannot use wildcards in type casts</li>
                  <li>• Cannot use as return types in most cases</li>
                  <li>• Cannot create arrays of parameterized types</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // These are NOT allowed:<br/>
                  // List<?> list = new ArrayList<?>(); // Error<br/>
                  // ? wildcard = list.get(0); // Error<br/>
                  // List<? extends Number>[] array = new List<? extends Number>[10]; // Error
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Wildcards and Bounded Types</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use PECS (Producer Extends, Consumer Super)</li>
                <li>• Apply appropriate bounds for type safety</li>
                <li>• Use unbounded wildcards for type-agnostic operations</li>
                <li>• Create helper methods for wildcard capture</li>
                <li>• Prefer bounded wildcards over bounded type parameters when appropriate</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use raw types instead of wildcards</li>
                <li>• Don't ignore wildcard limitations</li>
                <li>• Don't overuse bounded wildcards</li>
                <li>• Don't create arrays of parameterized types</li>
                <li>• Don't use wildcards in return types unnecessarily</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * WildcardsAndBoundedTypesDemo.java
 * 
 * This comprehensive example demonstrates wildcards and bounded type parameters in Java:
 * - Upper and lower bounded wildcards
 * - Unbounded wildcards
 * - Bounded type parameters
 * - Wildcard capture techniques
 * - Best practices for flexible, type-safe APIs
 * 
 * Run this program to see wildcards and bounded types in action.
 */

import java.util.*;

// Generic class with bounded type parameter
class NumberContainer<T extends Number> {
    private T value;
    
    public NumberContainer(T value) {
        this.value = value;
    }
    
    public T getValue() {
        return value;
    }
    
    public double getDoubleValue() {
        return value.doubleValue(); // Available because of Number bound
    }
    
    @Override
    public String toString() {
        return "NumberContainer(" + value + ")";
    }
}

// Generic class with multiple bounds
class ComparableNumberContainer<T extends Number & Comparable<T>> {
    private T value;
    
    public ComparableNumberContainer(T value) {
        this.value = value;
    }
    
    public T getValue() {
        return value;
    }
    
    public int compare(T other) {
        return value.compareTo(other);
    }
    
    @Override
    public String toString() {
        return "ComparableNumberContainer(" + value + ")";
    }
}

public class WildcardsAndBoundedTypesDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate upper bounded wildcards
        demonstrateUpperBoundedWildcards();
        
        // Demonstrate lower bounded wildcards
        demonstrateLowerBoundedWildcards();
        
        // Demonstrate unbounded wildcards
        demonstrateUnboundedWildcards();
        
        // Demonstrate bounded type parameters
        demonstrateBoundedTypeParameters();
        
        // Demonstrate wildcard capture
        demonstrateWildcardCapture();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         WILDCARDS AND BOUNDED TYPES DEMO                     ║");
        System.out.println("║         Flexible, type-safe APIs with Java wildcards         ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateUpperBoundedWildcards() {
        System.out.println("🔸 UPPER BOUNDED WILDCARDS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────");
        
        // Create lists of different Number subtypes
        List<Integer> intList = Arrays.asList(1, 2, 3, 4, 5);
        List<Double> doubleList = Arrays.asList(1.1, 2.2, 3.3, 4.4, 5.5);
        List<Float> floatList = Arrays.asList(1.0f, 2.0f, 3.0f, 4.0f, 5.0f);
        
        System.out.println("   Integer list: " + intList);
        System.out.println("   Double list: " + doubleList);
        System.out.println("   Float list: " + floatList);
        
        // Use upper bounded wildcard method
        System.out.print("   Sum of integers: ");
        printSum(intList);
        
        System.out.print("   Sum of doubles: ");
        printSum(doubleList);
        
        System.out.print("   Sum of floats: ");
        printSum(floatList);
        
        // Print lists using upper bounded wildcard
        System.out.print("   Integer list contents: ");
        printList(intList);
        
        System.out.print("   Double list contents: ");
        printList(doubleList);
        
        System.out.println();
    }
    
    // Method with upper bounded wildcard
    public static void printSum(List<? extends Number> list) {
        double sum = 0;
        for (Number n : list) {
            sum += n.doubleValue();
        }
        System.out.println(sum);
    }
    
    // Method with upper bounded wildcard for printing
    public static void printList(List<? extends Number> list) {
        for (Number n : list) {
            System.out.print(n + " ");
        }
        System.out.println();
    }
    
    private static void demonstrateLowerBoundedWildcards() {
        System.out.println("🔸 LOWER BOUNDED WILDCARDS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────");
        
        // Create lists of different types
        List<Integer> intList = new ArrayList<>();
        List<Number> numberList = new ArrayList<>();
        List<Object> objectList = new ArrayList<>();
        
        System.out.println("   Before adding numbers:");
        System.out.println("     Integer list: " + intList);
        System.out.println("     Number list: " + numberList);
        System.out.println("     Object list: " + objectList);
        
        // Add numbers using lower bounded wildcard method
        addNumbers(intList);
        addNumbers(numberList);
        addNumbers(objectList);
        
        System.out.println("   After adding numbers:");
        System.out.println("     Integer list: " + intList);
        System.out.println("     Number list: " + numberList);
        System.out.println("     Object list: " + objectList);
        
        System.out.println();
    }
    
    // Method with lower bounded wildcard
    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 5; i++) {
            list.add(i);
        }
    }
    
    private static void demonstrateUnboundedWildcards() {
        System.out.println("🔸 UNBOUNDED WILDCARDS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        // Create lists of different types
        List<String> stringList = Arrays.asList("Hello", "World", "Java");
        List<Integer> intList = Arrays.asList(1, 2, 3, 4, 5);
        List<Object> objectList = Arrays.asList("String", 123, new Date());
        
        System.out.println("   String list: " + stringList);
        System.out.println("   Integer list: " + intList);
        System.out.println("   Object list: " + objectList);
        
        // Use unbounded wildcard method
        System.out.print("   String list size: ");
        printSize(stringList);
        
        System.out.print("   Integer list size: ");
        printSize(intList);
        
        System.out.print("   Object list size: ");
        printSize(objectList);
        
        // Print lists using unbounded wildcard
        System.out.print("   String list contents: ");
        printAnyList(stringList);
        
        System.out.print("   Integer list contents: ");
        printAnyList(intList);
        
        System.out.println();
    }
    
    // Method with unbounded wildcard
    public static void printSize(List<?> list) {
        System.out.println(list.size());
    }
    
    // Method with unbounded wildcard for printing
    public static void printAnyList(List<?> list) {
        for (Object obj : list) {
            System.out.print(obj + " ");
        }
        System.out.println();
    }
    
    private static void demonstrateBoundedTypeParameters() {
        System.out.println("🔸 BOUNDED TYPE PARAMETERS DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────");
        
        // Create containers with bounded type parameters
        NumberContainer<Integer> intContainer = new NumberContainer<>(42);
        NumberContainer<Double> doubleContainer = new NumberContainer<>(3.14);
        
        System.out.println("   Integer container: " + intContainer);
        System.out.println("   Double container: " + doubleContainer);
        
        // Use methods available due to Number bound
        System.out.println("   Integer double value: " + intContainer.getDoubleValue());
        System.out.println("   Double double value: " + doubleContainer.getDoubleValue());
        
        // Create containers with multiple bounds
        ComparableNumberContainer<Integer> comparableInt = new ComparableNumberContainer<>(100);
        ComparableNumberContainer<Double> comparableDouble = new ComparableNumberContainer<>(2.71);
        
        System.out.println("   Comparable integer container: " + comparableInt);
        System.out.println("   Comparable double container: " + comparableDouble);
        
        // Use methods available due to multiple bounds
        int comparison = comparableInt.compare(50);
        System.out.println("   Comparing 100 with 50: " + comparison);
        
        System.out.println();
    }
    
    private static void demonstrateWildcardCapture() {
        System.out.println("🔸 WILDCARD CAPTURE DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        // Create lists for swapping
        List<String> stringList = new ArrayList<>(Arrays.asList("First", "Second", "Third"));
        List<Integer> intList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        
        System.out.println("   Before swapping:");
        System.out.println("     String list: " + stringList);
        System.out.println("     Integer list: " + intList);
        
        // Use wildcard capture method
        swap(stringList, 0, 2);
        swap(intList, 1, 3);
        
        System.out.println("   After swapping:");
        System.out.println("     String list: " + stringList);
        System.out.println("     Integer list: " + intList);
        
        System.out.println();
    }
    
    // Method demonstrating wildcard capture
    public static void swap(List<?> list, int i, int j) {
        swapHelper(list, i, j); // Capture wildcard in helper method
    }
    
    // Helper method for wildcard capture
    private static <T> void swapHelper(List<T> list, int i, int j) {
        T temp = list.get(i);
        list.set(i, list.get(j));
        list.set(j, temp);
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Upper and lower bounded wildcards                         ║");
        System.out.println("║  • Unbounded wildcards                                       ║");
        System.out.println("║  • Bounded type parameters                                   ║");
        System.out.println("║  • Wildcard capture techniques                               ║");
        System.out.println("║  • Best practices for flexible, type-safe APIs               ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use PECS (Producer Extends, Consumer Super)               ║");
        System.out.println("║  • Apply appropriate bounds for type safety                  ║");
        System.out.println("║  • Create helper methods for wildcard capture                ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         WILDCARDS AND BOUNDED TYPES DEMO                     ║
 * ║         Flexible, type-safe APIs with Java wildcards         ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 UPPER BOUNDED WILDCARDS DEMONSTRATION
 *    ──────────────────────────────────────
 *    Integer list: [1, 2, 3, 4, 5]
 *    Double list: [1.1, 2.2, 3.3, 4.4, 5.5]
 *    Float list: [1.0, 2.0, 3.0, 4.0, 5.0]
 *    Sum of integers: 15.0
 *    Sum of doubles: 16.5
 *    Sum of floats: 15.0
 *    Integer list contents: 1 2 3 4 5 
 *    Double list contents: 1.1 2.2 3.3 4.4 5.5 
 * 
 * 🔸 LOWER BOUNDED WILDCARDS DEMONSTRATION
 *    ──────────────────────────────────────
 *    Before adding numbers:
 *      Integer list: []
 *      Number list: []
 *      Object list: []
 *    After adding numbers:
 *      Integer list: [1, 2, 3, 4, 5]
 *      Number list: [1, 2, 3, 4, 5]
 *      Object list: [1, 2, 3, 4, 5]
 * 
 * 🔸 UNBOUNDED WILDCARDS DEMONSTRATION
 *    ──────────────────────────────────
 *    String list: [Hello, World, Java]
 *    Integer list: [1, 2, 3, 4, 5]
 *    Object list: [String, 123, Fri Jan 01 12:00:00 GMT 2021]
 *    String list size: 3
 *    Integer list size: 5
 *    Object list size: 3
 *    String list contents: Hello World Java 
 *    Integer list contents: 1 2 3 4 5 
 * 
 * 🔸 BOUNDED TYPE PARAMETERS DEMONSTRATION
 *    ─────────────────────────────────────
 *    Integer container: NumberContainer(42)
 *    Double container: NumberContainer(3.14)
 *    Integer double value: 42.0
 *    Double double value: 3.14
 *    Comparable integer container: ComparableNumberContainer(100)
 *    Comparable double container: ComparableNumberContainer(2.71)
 *    Comparing 100 with 50: 1
 * 
 * 🔸 WILDCARD CAPTURE DEMONSTRATION
 *    ───────────────────────────────
 *    Before swapping:
 *      String list: [First, Second, Third]
 *      Integer list: [1, 2, 3, 4, 5]
 *    After swapping:
 *      String list: [Third, Second, First]
 *      Integer list: [1, 4, 3, 2, 5]
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Wildcards and Bounded Type Parameters Practice Exercise**

      Create comprehensive programs to practice wildcards and bounded type parameters in Java.

      **Part 1: Generic Collection Processor**
      
      Create a program called \`GenericCollectionProcessor.java\` that implements a processor for collections using wildcards:
      
      Requirements:
      - Create methods that work with upper bounded wildcards
      - Implement methods that work with lower bounded wildcards
      - Develop methods that work with unbounded wildcards
      - Add proper error handling and validation
      
      Features to implement:
      - Collection transformation utilities
      - Filtering and searching capabilities
      - Performance optimization techniques
      - Comprehensive test cases

      **Part 2: Bounded Type Framework**
      
      Create a program called \`BoundedTypeFramework.java\` that implements a framework using bounded type parameters:
      
      Requirements:
      - Create generic classes with single and multiple bounds
      - Implement generic methods with bounded type parameters
      - Develop utility methods that leverage type bounds
      - Add comprehensive error handling
      
      Advanced Features:
      - Performance benchmarking for different bounds
      - Custom bound implementations
      - Memory usage optimization
      - Integration with existing Java APIs

      **Part 3: Wildcard Utility Library**
      
      Create a program called \`WildcardUtilityLibrary.java\` that implements a library of utility methods using wildcards:
      
      Requirements:
      - Implement collection copying methods with wildcards
      - Create sorting and searching utilities
      - Develop data transformation functions
      - Add comprehensive validation methods
      
      Features to implement:
      - PECS principle implementation
      - Wildcard capture techniques
      - Performance optimization
      - Memory-efficient implementations

      **Part 4: Generic Data Aggregator**
      
      Create a program called \`GenericDataAggregator.java\` that implements a data aggregator using wildcards and bounded types:
      
      Requirements:
      - Create aggregators for different data types
      - Implement statistical calculation methods
      - Develop data grouping and filtering capabilities
      - Add proper type safety with wildcards
      
      Advanced Features:
      - Real-time data aggregation
      - Custom aggregation functions
      - Performance monitoring
      - Integration with streaming data sources

      **Part 5: Wildcard Design Patterns**
      
      Create a program called \`WildcardDesignPatterns.java\` that implements common design patterns using wildcards:
      
      Requirements:
      - Implement Factory pattern with wildcards
      - Create Observer pattern with bounded types
      - Develop Strategy pattern using wildcards
      - Add Builder pattern with generic bounds
      
      Features to implement:
      - Type-safe pattern implementations
      - Performance optimization
      - Memory usage monitoring
      - Comprehensive pattern testing

      **Deliverables:**
      Submit the following files:
      1. \`GenericCollectionProcessor.java\` - Generic collection processor
      2. \`BoundedTypeFramework.java\` - Bounded type framework
      3. \`WildcardUtilityLibrary.java\` - Wildcard utility library
      4. \`GenericDataAggregator.java\` - Generic data aggregator
      5. \`WildcardDesignPatterns.java\` - Wildcard design patterns implementation
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of upper and lower bounded wildcards
      - ✅ Proper use of unbounded wildcards
      - ✅ Effective bounded type parameters
      - ✅ Understanding of wildcard capture techniques
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive wildcard and bounded type capabilities
      - ✅ Application of best practices for wildcards

      **💡 Bonus Challenges:**
      
      1. Advanced Wildcard Patterns: Implement sophisticated wildcard design patterns
      2. Performance Optimization: Add performance tracking to wildcard operations
      3. Cross-Type Compatibility: Design wildcards that work with multiple type hierarchies
      4. Error Handling: Add comprehensive error handling to wildcard operations
      5. Extensibility: Create frameworks for reusable wildcard components
    `
  }
};