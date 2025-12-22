import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_3: LessonContent = {
  title: 'Method References',
  type: 'lesson',
  duration: '20 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Learn about method references in Java, which provide a concise way to refer to methods without executing them. This lesson covers the different types of method references and when to use them instead of lambda expressions.',
    objectives: [
      'Understand what method references are and their advantages',
      'Learn the different types of method references',
      'Practice using method references in place of lambda expressions',
      'Compare method references with lambda expressions',
      'Apply method references in collection operations',
      'Implement best practices for method reference usage'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Method References
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Concise way to refer to methods without executing them</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Method References?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Method references are a shorthand syntax for lambda expressions that already have a name. 
            They allow you to refer to a method without actually invoking it. Method references are 
            often more readable and concise than lambda expressions, especially when the lambda 
            expression is simply calling an existing method.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Method references use the :: token to separate the class or object reference from the method name, making code more readable and concise.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Types of Method References
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">There are four main types of method references in Java:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Static Method Reference</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Syntax: ClassName::staticMethodName</li>
                  <li>• Refers to static methods</li>
                  <li>• No instance required</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Lambda<br/>
                  Function<String, Integer> parseInt = s -> Integer.parseInt(s);<br/>
                  <br/>
                  // Method reference<br/>
                  Function<String, Integer> parseIntRef = Integer::parseInt;
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Instance Method Reference (Object)</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Syntax: object::instanceMethodName</li>
                  <li>• Refers to instance methods of a particular object</li>
                  <li>• Object instance is already available</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  String str = "Hello";<br/>
                  // Lambda<br/>
                  Predicate<String> contains = s -> str.contains(s);<br/>
                  <br/>
                  // Method reference<br/>
                  Predicate<String> containsRef = str::contains;
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Instance Method Reference (Class)</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Syntax: ClassName::instanceMethodName</li>
                  <li>• Refers to instance methods of an arbitrary object</li>
                  <li>• First parameter becomes the target object</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Lambda<br/>
                  Function<String, String> toUpperCase = s -> s.toUpperCase();<br/>
                  <br/>
                  // Method reference<br/>
                  Function<String, String> toUpperCaseRef = String::toUpperCase;
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Constructor Reference</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Syntax: ClassName::new</li>
                  <li>• Refers to constructors</li>
                  <li>• Used for object creation</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Lambda<br/>
                  Supplier<List<String>> listSupplier = () -> new ArrayList<>();<br/>
                  <br/>
                  // Method reference<br/>
                  Supplier<List<String>> listSupplierRef = ArrayList::new;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Method References vs Lambda Expressions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Comparing method references with lambda expressions:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              List<String> names = Arrays.asList("Alice", "Bob", "Charlie");<br/>
              <br/>
              // Lambda expressions<br/>
              names.forEach(name -> System.out.println(name));<br/>
              List<Integer> nameLengths = names.stream()<br/>
              &nbsp;&nbsp;.map(name -> name.length())<br/>
              &nbsp;&nbsp;.collect(Collectors.toList());<br/>
              <br/>
              // Method references (more concise)<br/>
              names.forEach(System.out::println);<br/>
              List<Integer> nameLengthsRef = names.stream()<br/>
              &nbsp;&nbsp;.map(String::length)<br/>
              &nbsp;&nbsp;.collect(Collectors.toList());
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Aspect</th>
                    <th class="text-left p-3 font-bold border-b">Lambda Expression</th>
                    <th class="text-left p-3 font-bold border-b">Method Reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Readability</td>
                    <td class="p-3">Good for complex logic</td>
                    <td class="p-3">Better for simple method calls</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Conciseness</td>
                    <td class="p-3">More verbose</td>
                    <td class="p-3">More concise</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Flexibility</td>
                    <td class="p-3">Can contain any logic</td>
                    <td class="p-3">Limited to existing methods</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Performance</td>
                    <td class="p-3">Slight overhead</td>
                    <td class="p-3">Equivalent performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            When to Use Method References
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Method references are ideal in these scenarios:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Best Use Cases</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Calling existing methods without modification</li>
                  <li>• Simple transformations and operations</li>
                  <li>• Object creation with constructors</li>
                  <li>• Improving code readability</li>
                  <li>• Reducing boilerplate code</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Not Suitable For</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Complex business logic</li>
                  <li>• Multiple method calls</li>
                  <li>• Conditional operations</li>
                  <li>• Exception handling variations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Method References</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use method references for simple method calls</li>
                <li>• Prefer method references over equivalent lambdas</li>
                <li>• Use constructor references for object creation</li>
                <li>• Combine with streams for readable code</li>
                <li>• Use descriptive method names for clarity</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't force method references where lambdas are clearer</li>
                <li>• Don't use method references for complex logic</li>
                <li>• Don't ignore parameter compatibility</li>
                <li>• Don't make code less readable with method references</li>
                <li>• Don't use method references with side effects</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * MethodReferencesDemo.java
 * 
 * This comprehensive example demonstrates method references in Java:
 * - Different types of method references
 * - Comparison with lambda expressions
 * - Common use cases for method references
 * - Best practices for method reference usage
 * 
 * Run this program to see method references in action.
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

// Person class for examples
class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Instance methods
    public String getName() { return name; }
    public int getAge() { return age; }
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
    
    // Static method
    public static boolean isAdult(Person p) {
        return p.age >= 18;
    }
    
    // Method for instance method reference example
    public boolean isAdultInstance() {
        return this.age >= 18;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

// Utility class with static methods
class StringUtils {
    public static String toUpperCase(String s) {
        return s.toUpperCase();
    }
    
    public static String toLowerCase(String s) {
        return s.toLowerCase();
    }
    
    public static boolean isLong(String s) {
        return s.length() > 5;
    }
}

public class MethodReferencesDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate different types of method references
        demonstrateMethodReferenceTypes();
        
        // Compare with lambda expressions
        compareWithLambdas();
        
        // Show common use cases
        demonstrateCommonUseCases();
        
        // Demonstrate constructor references
        demonstrateConstructorReferences();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         METHOD REFERENCES DEMO                               ║");
        System.out.println("║         Concise way to refer to methods                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateMethodReferenceTypes() {
        System.out.println("🔸 METHOD REFERENCE TYPES DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────");
        
        List<String> words = Arrays.asList("java", "lambda", "method", "reference");
        List<Person> people = Arrays.asList(
            new Person("Alice", 25),
            new Person("Bob", 17),
            new Person("Charlie", 30)
        );
        
        // 1. Static method reference
        System.out.println("   1. Static method reference:");
        List<String> upperCaseWords = words.stream()
            .map(StringUtils::toUpperCase)
            .collect(Collectors.toList());
        System.out.println("      Original: " + words);
        System.out.println("      Upper case: " + upperCaseWords);
        
        // With lambda equivalent
        List<String> upperCaseLambda = words.stream()
            .map(s -> StringUtils.toUpperCase(s))
            .collect(Collectors.toList());
        System.out.println("      Lambda equivalent: " + upperCaseLambda);
        
        // 2. Instance method reference of a particular object
        System.out.println("   2. Instance method reference (particular object):");
        String prefix = "Hello ";
        List<String> prefixedWords = words.stream()
            .map(prefix::concat)
            .collect(Collectors.toList());
        System.out.println("      Prefix: " + prefix);
        System.out.println("      Prefixed: " + prefixedWords);
        
        // 3. Instance method reference of an arbitrary object
        System.out.println("   3. Instance method reference (arbitrary object):");
        List<Integer> wordLengths = words.stream()
            .map(String::length)
            .collect(Collectors.toList());
        System.out.println("      Words: " + words);
        System.out.println("      Lengths: " + wordLengths);
        
        // 4. Static method reference for filtering
        System.out.println("   4. Static method reference for filtering:");
        List<Person> adults = people.stream()
            .filter(Person::isAdult)
            .collect(Collectors.toList());
        System.out.println("      All people: " + people);
        System.out.println("      Adults only: " + adults);
        
        System.out.println();
    }
    
    private static void compareWithLambdas() {
        System.out.println("🔸 METHOD REFERENCES VS LAMBDA EXPRESSIONS");
        System.out.println("   ─────────────────────────────────────────");
        
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        
        // forEach with method reference
        System.out.println("   forEach with method reference:");
        names.forEach(System.out::println);
        
        // forEach with lambda
        System.out.println("   forEach with lambda:");
        names.forEach(name -> System.out.println(name));
        
        // map with method reference
        System.out.println("   map with method reference:");
        List<String> upperNames = names.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        System.out.println("      Upper case: " + upperNames);
        
        // map with lambda
        System.out.println("   map with lambda:");
        List<String> upperNamesLambda = names.stream()
            .map(name -> name.toUpperCase())
            .collect(Collectors.toList());
        System.out.println("      Upper case: " + upperNamesLambda);
        
        // filter with method reference (using a utility method)
        System.out.println("   filter with method reference:");
        List<String> longNames = names.stream()
            .filter(StringUtils::isLong)
            .collect(Collectors.toList());
        System.out.println("      Long names: " + longNames);
        
        // filter with lambda
        System.out.println("   filter with lambda:");
        List<String> longNamesLambda = names.stream()
            .filter(name -> name.length() > 5)
            .collect(Collectors.toList());
        System.out.println("      Long names: " + longNamesLambda);
        
        System.out.println();
    }
    
    private static void demonstrateCommonUseCases() {
        System.out.println("🔸 COMMON USE CASES FOR METHOD REFERENCES");
        System.out.println("   ────────────────────────────────────────");
        
        List<String> words = Arrays.asList("java", "lambda", "functional", "programming");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Sorting with method reference
        System.out.println("   Sorting with method reference:");
        List<String> sortedWords = words.stream()
            .sorted(String::compareToIgnoreCase)
            .collect(Collectors.toList());
        System.out.println("      Original: " + words);
        System.out.println("      Sorted: " + sortedWords);
        
        // Collecting to different collections
        System.out.println("   Collecting to different collections:");
        Set<String> wordSet = words.stream()
            .collect(Collectors.toSet());
        System.out.println("      As Set: " + wordSet);
        
        // Creating maps with method references
        System.out.println("   Creating maps with method references:");
        Map<String, Integer> wordLengthMap = words.stream()
            .collect(Collectors.toMap(
                Function.identity(), // key mapper
                String::length       // value mapper
            ));
        System.out.println("      Word length map: " + wordLengthMap);
        
        // Chaining method references
        System.out.println("   Chaining method references:");
        String result = words.stream()
            .filter(StringUtils::isLong)
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.joining(", "));
        System.out.println("      Long words in uppercase: " + result);
        
        System.out.println();
    }
    
    private static void demonstrateConstructorReferences() {
        System.out.println("🔸 CONSTRUCTOR REFERENCES DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────");
        
        // Simple constructor reference
        System.out.println("   Simple constructor reference:");
        Supplier<ArrayList<String>> listSupplier = ArrayList::new;
        List<String> newList = listSupplier.get();
        newList.add("Hello");
        newList.add("World");
        System.out.println("      Created list: " + newList);
        
        // Constructor reference with parameters
        System.out.println("   Constructor reference with parameters:");
        Function<Integer, ArrayList<String>> sizedListSupplier = ArrayList::new;
        List<String> sizedList = sizedListSupplier.apply(5);
        System.out.println("      Created list with initial capacity: " + sizedList.size() + " (capacity)");
        
        // Creating objects from streams
        System.out.println("   Creating objects from streams:");
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        List<Person> people = names.stream()
            .map(name -> new Person(name, 25)) // Can't use constructor reference directly here
            .collect(Collectors.toList());
        System.out.println("      Created people: " + people);
        
        // Using BiFunction for two-parameter constructors
        BiFunction<String, Integer, Person> personCreator = Person::new;
        Person john = personCreator.apply("John", 30);
        System.out.println("      Created person with BiFunction: " + john);
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Different types of method references                      ║");
        System.out.println("║  • Comparison with lambda expressions                        ║");
        System.out.println("║  • Common use cases for method references                    ║");
        System.out.println("║  • Constructor references                                    ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use method references for simple method calls             ║");
        System.out.println("║  • Prefer method references over equivalent lambdas          ║");
        System.out.println("║  • Use constructor references for object creation            ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1. Create a static method reference to Integer.parseInt and use it to convert strings to integers.
2. Create an instance method reference to String.length and use it to get string lengths.
3. Create a constructor reference to ArrayList::new and use it to create new lists.
4. Replace a lambda expression with a method reference in a stream operation.
5. Create a method reference to System.out.println and use it with forEach.
`
  }
};