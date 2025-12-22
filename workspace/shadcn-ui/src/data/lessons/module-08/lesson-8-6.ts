import { LessonContent } from '../../types/LessonTypes';

export const lesson_8_6: LessonContent = {
  title: 'Best Practices with Generics',
  type: 'coding',
  duration: '30 min',
  module: 'Generics and Type Safety',
  content: {
    overview: 'Learn best practices for using generics in Java. This lesson covers coding standards, design patterns, performance considerations, and common pitfalls to avoid when working with generics.',
    objectives: [
      'Master best practices for generic class and method design',
      'Learn effective use of wildcards and bounded types',
      'Understand performance considerations with generics',
      'Apply design patterns that leverage generics',
      'Avoid common pitfalls and anti-patterns',
      'Implement robust, maintainable generic code'
    ],
    theory: `
      <div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Best Practices with Generics
        </h1>
        <p class="mt-3 text-cyan-100 text-lg">Effective, robust generic code design</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Generic Class and Method Design
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Well-designed generic classes and methods are fundamental to creating reusable, type-safe code. 
            Following established patterns and conventions ensures your generics are both powerful and easy to use.
          </p>
          <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mb-4">
            <h4 class="font-bold text-cyan-800 mb-2">💡 Key Concept</h4>
            <p class="text-cyan-700">Effective generic design balances flexibility with type safety, making APIs intuitive while preventing runtime errors.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Naming Conventions and Documentation
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Following established naming conventions and providing clear documentation:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Standard Type Parameter Names</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• E - Element (used extensively by Java Collections Framework)</li>
                  <li>• K - Key (used in maps)</li>
                  <li>• N - Number (used for numbers)</li>
                  <li>• T - Type (general purpose)</li>
                  <li>• V - Value (used in maps)</li>
                  <li>• S,U,V etc. - 2nd, 3rd, 4th types</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public class Container<T> {<br/>
                  &nbsp;&nbsp;// Implementation<br/>
                  }<br/>
                  <br/>
                  public class Map<K, V> {<br/>
                  &nbsp;&nbsp;// Implementation<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Documentation Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Document type parameter constraints</li>
                  <li>• Explain generic method behavior</li>
                  <li>• Specify nullability expectations</li>
                  <li>• Describe thread-safety characteristics</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  /**<br/>
                  &nbsp;* A container that holds elements of type T.<br/>
                  &nbsp;* @param <T> the type of elements held in this container<br/>
                  &nbsp;* @implNote This implementation is not thread-safe<br/>
                  &nbsp;*/<br/>
                  public class Container<T> { }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Wildcard Usage Guidelines
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Effective use of wildcards with the PECS principle:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // PECS: Producer Extends, Consumer Super<br/>
              <br/>
              // Producer - use extends<br/>
              public void printList(List<? extends Number> list) {<br/>
              &nbsp;&nbsp;for (Number n : list) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(n);<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Consumer - use super<br/>
              public void addNumbers(List<? super Integer> list) {<br/>
              &nbsp;&nbsp;list.add(42);<br/>
              }<br/>
              <br/>
              // Unbounded wildcard for type-agnostic operations<br/>
              public void printSize(List<?> list) {<br/>
              &nbsp;&nbsp;System.out.println(list.size());<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Use Case</th>
                    <th class="text-left p-3 font-bold border-b">Wildcard</th>
                    <th class="text-left p-3 font-bold border-b">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3">Reading from collection</td>
                    <td class="p-3 font-mono">? extends T</td>
                    <td class="p-3">List<? extends Number></td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3">Writing to collection</td>
                    <td class="p-3 font-mono">? super T</td>
                    <td class="p-3">List<? super Integer></td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3">Type-agnostic operations</td>
                    <td class="p-3 font-mono">?</td>
                    <td class="p-3">List<?></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Performance Considerations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Optimizing generic code for performance:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Boxing/Unboxing Overhead</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Primitive types cause boxing/unboxing</li>
                  <li>• Use specialized collections when possible</li>
                  <li>• Consider primitive specializations</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Inefficient - boxing/unboxing<br/>
                  List<Integer> list = new ArrayList<>();<br/>
                  list.add(42); // Boxing<br/>
                  int value = list.get(0); // Unboxing<br/>
                  <br/>
                  // More efficient - specialized collection<br/>
                  // TIntList intList = new TIntArrayList();<br/>
                  // intList.add(42); // No boxing
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Memory and Allocation</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Generic collections create wrapper objects</li>
                  <li>• Consider memory footprint in large collections</li>
                  <li>• Use arrays for performance-critical code</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Memory-efficient for primitives<br/>
                  int[] array = new int[1000];<br/>
                  <br/>
                  // Higher memory overhead<br/>
                  List<Integer> list = new ArrayList<>(1000);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common Pitfalls and Anti-patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Avoiding common mistakes with generics:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Raw Types</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Never use raw types in new code</li>
                  <li>• They bypass type safety</li>
                  <li>• Cause compiler warnings</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // DON'T do this<br/>
                  List list = new ArrayList();<br/>
                  list.add("Hello");<br/>
                  String str = (String) list.get(0); // Cast required<br/>
                  <br/>
                  // DO this instead<br/>
                  List<String> list = new ArrayList<>();<br/>
                  list.add("Hello");<br/>
                  String str = list.get(0); // No cast needed
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Unchecked Warnings</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Don't ignore unchecked warnings</li>
                  <li>• Use @SuppressWarnings judiciously</li>
                  <li>• Validate assumptions with tests</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Suppress warnings only when safe<br/>
                  @SuppressWarnings("unchecked")<br/>
                  public <T> T[] toArray(T[] a) {<br/>
                  &nbsp;&nbsp;// Implementation validated to be safe<br/>
                  &nbsp;&nbsp;return (T[]) Arrays.copyOf(elements, size, a.getClass());<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices Summary</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use descriptive type parameter names</li>
                <li>• Apply appropriate bounds for type safety</li>
                <li>• Follow PECS for wildcard usage</li>
                <li>• Document generic APIs clearly</li>
                <li>• Use diamond operator when possible</li>
                <li>• Prefer generic types over raw types</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use raw types in new code</li>
                <li>• Don't ignore compiler warnings</li>
                <li>• Don't create arrays of parameterized types</li>
                <li>• Don't use generic type information at runtime</li>
                <li>• Don't suppress warnings unnecessarily</li>
                <li>• Don't overcomplicate generic designs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * GenericsBestPracticesDemo.java
 * 
 * This comprehensive example demonstrates best practices for using generics in Java:
 * - Proper generic class and method design
 * - Effective wildcard usage with PECS principle
 * - Performance considerations with generics
 * - Common pitfalls and how to avoid them
 * - Documentation and naming conventions
 * 
 * Run this program to see best practices in action.
 */

import java.util.*;
import java.util.function.*;

// Generic class with proper naming and documentation
/**
 * A container that holds a single element of type T.
 * 
 * @param <T> the type of element held in this container
 * @implNote This implementation is not thread-safe
 */
class Container<T> {
    private T element;
    private boolean empty = true;
    
    /**
     * Sets the element in this container.
     * 
     * @param element the element to set
     * @throws NullPointerException if element is null
     */
    public void set(T element) {
        if (element == null) {
            throw new NullPointerException("Element cannot be null");
        }
        this.element = element;
        this.empty = false;
    }
    
    /**
     * Gets the element from this container.
     * 
     * @return the element
     * @throws IllegalStateException if container is empty
     */
    public T get() {
        if (empty) {
            throw new IllegalStateException("Container is empty");
        }
        return element;
    }
    
    /**
     * Checks if this container is empty.
     * 
     * @return true if container is empty, false otherwise
     */
    public boolean isEmpty() {
        return empty;
    }
    
    @Override
    public String toString() {
        return "Container(" + (empty ? "empty" : element) + ")";
    }
}

// Generic utility class demonstrating best practices
class GenericUtils {
    // Producer Extends - reading from collection
    public static void printNumbers(List<? extends Number> numbers) {
        for (Number number : numbers) {
            System.out.println(number);
        }
    }
    
    // Consumer Super - writing to collection
    public static void addIntegers(List<? super Integer> integers) {
        integers.add(1);
        integers.add(2);
        integers.add(3);
    }
    
    // Unbounded wildcard for type-agnostic operations
    public static void printSize(List<?> list) {
        System.out.println("List size: " + list.size());
    }
    
    // Generic method with bounded type parameter
    public static <T extends Comparable<T>> T findMax(Collection<T> collection) {
        if (collection.isEmpty()) {
            throw new IllegalArgumentException("Collection is empty");
        }
        
        Iterator<T> iterator = collection.iterator();
        T max = iterator.next();
        
        while (iterator.hasNext()) {
            T current = iterator.next();
            if (current.compareTo(max) > 0) {
                max = current;
            }
        }
        
        return max;
    }
    
    // Generic method with multiple bounds
    public static <T extends Number & Comparable<T>> double calculateAverage(Collection<T> numbers) {
        if (numbers.isEmpty()) {
            return 0.0;
        }
        
        double sum = 0;
        for (T number : numbers) {
            sum += number.doubleValue();
        }
        
        return sum / numbers.size();
    }
}

// Generic class demonstrating proper design
class Pair<T, U> {
    private final T first;
    private final U second;
    
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
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        Pair<?, ?> pair = (Pair<?, ?>) obj;
        return Objects.equals(first, pair.first) && 
               Objects.equals(second, pair.second);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(first, second);
    }
    
    @Override
    public String toString() {
        return "Pair(" + first + ", " + second + ")";
    }
}

public class GenericsBestPracticesDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate proper generic class usage
        demonstrateGenericClasses();
        
        // Demonstrate wildcard usage with PECS
        demonstrateWildcards();
        
        // Demonstrate performance considerations
        demonstratePerformance();
        
        // Demonstrate common pitfalls and solutions
        demonstratePitfalls();
        
        // Demonstrate utility methods
        demonstrateUtilities();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         GENERICS BEST PRACTICES DEMO                         ║");
        System.out.println("║         Effective, robust generic code design                ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateGenericClasses() {
        System.out.println("🔸 GENERIC CLASS BEST PRACTICES DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────────");
        
        // Properly typed container
        Container<String> stringContainer = new Container<>();
        stringContainer.set("Hello Generics!");
        System.out.println("   String container: " + stringContainer);
        
        Container<Integer> intContainer = new Container<>();
        intContainer.set(42);
        System.out.println("   Integer container: " + intContainer);
        
        // Check empty state
        Container<Double> doubleContainer = new Container<>();
        System.out.println("   Empty double container: " + doubleContainer);
        System.out.println("   Is empty: " + doubleContainer.isEmpty());
        
        System.out.println();
    }
    
    private static void demonstrateWildcards() {
        System.out.println("🔸 WILDCARD USAGE DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        // Producer Extends - reading from collections
        System.out.println("   Producer Extends (reading):");
        List<Integer> intList = Arrays.asList(1, 2, 3, 4, 5);
        List<Double> doubleList = Arrays.asList(1.1, 2.2, 3.3);
        
        System.out.print("     Integer list: ");
        GenericUtils.printNumbers(intList);
        
        System.out.print("     Double list: ");
        GenericUtils.printNumbers(doubleList);
        
        // Consumer Super - writing to collections
        System.out.println("   Consumer Super (writing):");
        List<Number> numberList = new ArrayList<>();
        List<Object> objectList = new ArrayList<>();
        
        GenericUtils.addIntegers(numberList);
        GenericUtils.addIntegers(objectList);
        
        System.out.println("     Numbers list: " + numberList);
        System.out.println("     Objects list: " + objectList);
        
        // Unbounded wildcard for type-agnostic operations
        System.out.println("   Unbounded wildcard (type-agnostic):");
        GenericUtils.printSize(intList);
        GenericUtils.printSize(doubleList);
        GenericUtils.printSize(numberList);
        
        System.out.println();
    }
    
    private static void demonstratePerformance() {
        System.out.println("🔸 PERFORMANCE CONSIDERATIONS DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────");
        
        // Demonstrate boxing/unboxing overhead
        System.out.println("   Boxing/Unboxing overhead:");
        
        // Using Integer wrapper (boxing/unboxing)
        List<Integer> integerList = new ArrayList<>();
        long startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            integerList.add(i); // Boxing
        }
        long endTime = System.nanoTime();
        System.out.println("     Time to add 100000 Integers: " + 
                          (endTime - startTime) / 1_000_000 + " ms");
        
        // Using primitive array (no boxing)
        int[] intArray = new int[100000];
        startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            intArray[i] = i; // No boxing
        }
        endTime = System.nanoTime();
        System.out.println("     Time to fill 100000 int array: " + 
                          (endTime - startTime) / 1_000_000 + " ms");
        
        System.out.println();
    }
    
    private static void demonstratePitfalls() {
        System.out.println("🔸 COMMON PITFALLS DEMONSTRATION");
        System.out.println("   ──────────────────────────────");
        
        // Demonstrate raw types (DON'T do this)
        System.out.println("   Raw types (avoid these):");
        List rawList = new ArrayList(); // Raw type
        rawList.add("Hello");
        rawList.add(123);
        String str = (String) rawList.get(0); // Cast required
        System.out.println("     Retrieved from raw list: " + str);
        
        // Proper generic types (DO this)
        System.out.println("   Generic types (preferred):");
        List<String> stringList = new ArrayList<>(); // Generic type
        stringList.add("Hello");
        // stringList.add(123); // Compile error - type safety!
        String str2 = stringList.get(0); // No cast needed
        System.out.println("     Retrieved from generic list: " + str2);
        
        // Demonstrate unchecked warnings
        System.out.println("   Unchecked warnings:");
        List<String> list = new ArrayList<>();
        // @SuppressWarnings("unchecked") // Use only when safe
        // List<String> unsafeList = (List<String>) (List) list;
        
        System.out.println();
    }
    
    private static void demonstrateUtilities() {
        System.out.println("🔸 GENERIC UTILITY METHODS DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────");
        
        // Create pairs with different types
        Pair<String, Integer> nameAge = new Pair<>("Alice", 30);
        Pair<Double, Boolean> scorePassed = new Pair<>(95.5, true);
        
        System.out.println("   Name-Age pair: " + nameAge);
        System.out.println("   Score-Passed pair: " + scorePassed);
        
        // Use utility methods
        List<Integer> numbers = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3);
        System.out.println("   Numbers list: " + numbers);
        
        // Find maximum
        Integer max = GenericUtils.findMax(numbers);
        System.out.println("   Maximum number: " + max);
        
        // Calculate average
        double average = GenericUtils.calculateAverage(numbers);
        System.out.println("   Average: " + String.format("%.2f", average));
        
        // Create a list of pairs
        List<Pair<String, Integer>> pairs = new ArrayList<>();
        pairs.add(new Pair<>("Alice", 30));
        pairs.add(new Pair<>("Bob", 25));
        pairs.add(new Pair<>("Charlie", 35));
        
        System.out.println("   Pairs list:");
        for (Pair<String, Integer> pair : pairs) {
            System.out.println("     " + pair);
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Proper generic class and method design                    ║");
        System.out.println("║  • Effective wildcard usage with PECS principle              ║");
        System.out.println("║  • Performance considerations with generics                  ║");
        System.out.println("║  • Common pitfalls and how to avoid them                     ║");
        System.out.println("║  • Documentation and naming conventions                      ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use descriptive type parameter names                      ║");
        System.out.println("║  • Apply appropriate bounds for type safety                  ║");
        System.out.println("║  • Follow PECS for wildcard usage                            ║");
        System.out.println("║  • Document generic APIs clearly                             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1. Create a generic method that follows proper naming conventions and includes comprehensive documentation.
2. Implement a method using the PECS principle with extends wildcard for reading from a collection.
3. Create a method using the PECS principle with super wildcard for writing to a collection.
4. Write a generic method that finds the maximum element in a collection of comparable objects.
5. Create a generic class with proper bounds and documentation that demonstrates best practices.
`
  }
};