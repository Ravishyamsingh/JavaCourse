import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_1: LessonContent = {
  title: 'Introduction to Lambda Expressions',
  type: 'lesson',
  duration: '20 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Learn the fundamentals of lambda expressions in Java. This lesson covers the syntax, benefits, and basic usage of lambda expressions as a foundation for functional programming in Java.',
    objectives: [
      'Understand what lambda expressions are and why they are useful',
      'Learn the syntax and structure of lambda expressions',
      'Practice writing simple lambda expressions',
      'Explore the relationship between lambdas and functional interfaces',
      'Compare traditional anonymous classes with lambda expressions',
      'Apply lambda expressions in common programming scenarios'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Lambda Expressions
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Simplifying code with functional programming concepts</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Lambda Expressions?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Lambda expressions are a feature introduced in Java 8 that allow you to write anonymous functions 
            (functions without a name) in a concise and readable way. They enable functional programming 
            paradigms in Java, making code more expressive and reducing boilerplate.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Lambda expressions provide a clear and concise way to represent one method interface using an expression, making code more readable and maintainable.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Lambda Expression Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The basic syntax of a lambda expression consists of:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Syntax Components</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Parameter list (can be empty or have multiple parameters)</li>
                  <li>• Arrow token (->)</li>
                  <li>• Body (single expression or block of statements)</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  (parameters) -> expression<br/>
                  (parameters) -> { statements; }
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Common Examples</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• () -> System.out.println("Hello")</li>
                  <li>• (int x) -> x * x</li>
                  <li>• (x, y) -> x + y</li>
                  <li>• (String s) -> s.length() > 5</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // With type inference<br/>
                  x -> x * x<br/>
                  // With block body<br/>
                  (x, y) -> { return x + y; }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Lambda vs Anonymous Classes
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Comparing traditional anonymous classes with lambda expressions:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Traditional anonymous class<br/>
              Runnable runnable1 = new Runnable() {<br/>
              &nbsp;&nbsp;@Override<br/>
              &nbsp;&nbsp;public void run() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello from anonymous class");<br/>
              &nbsp;&nbsp;}<br/>
              };<br/>
              <br/>
              // Lambda expression equivalent<br/>
              Runnable runnable2 = () -> System.out.println("Hello from lambda");<br/>
              <br/>
              // Comparator with anonymous class<br/>
              Comparator<String> comparator1 = new Comparator<String>() {<br/>
              &nbsp;&nbsp;@Override<br/>
              &nbsp;&nbsp;public int compare(String s1, String s2) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return s1.compareTo(s2);<br/>
              &nbsp;&nbsp;}<br/>
              };<br/>
              <br/>
              // Comparator with lambda<br/>
              Comparator<String> comparator2 = (s1, s2) -> s1.compareTo(s2);
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Aspect</th>
                    <th class="text-left p-3 font-bold border-b">Anonymous Class</th>
                    <th class="text-left p-3 font-bold border-b">Lambda Expression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Boilerplate Code</td>
                    <td class="p-3">High</td>
                    <td class="p-3">Low</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Readability</td>
                    <td class="p-3">Lower</td>
                    <td class="p-3">Higher</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">this Reference</td>
                    <td class="p-3">Refers to anonymous class</td>
                    <td class="p-3">Refers to enclosing context</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Compilation</td>
                    <td class="p-3">Separate class file</td>
                    <td class="p-3">No separate file</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            When to Use Lambda Expressions
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Lambda expressions are particularly useful in these scenarios:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Best Use Cases</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Event handling and callbacks</li>
                  <li>• Collection operations (filter, map, etc.)</li>
                  <li>• Functional interfaces implementation</li>
                  <li>• Simplifying single-method interfaces</li>
                  <li>• Parallel processing with streams</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Not Suitable For</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Complex logic requiring multiple methods</li>
                  <li>• Need to maintain state across method calls</li>
                  <li>• Extending classes with multiple methods</li>
                  <li>• Exception handling that varies by implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Lambda Expressions</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Keep lambda expressions short and focused</li>
                <li>• Use method references when possible</li>
                <li>• Specify parameter types only when necessary</li>
                <li>• Use meaningful parameter names</li>
                <li>• Prefer lambdas over anonymous classes for single-method interfaces</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't write complex business logic in lambdas</li>
                <li>• Don't ignore type inference unnecessarily</li>
                <li>• Don't use lambdas for multi-method interfaces</li>
                <li>• Don't make lambdas longer than 3-4 lines</li>
                <li>• Don't use lambdas when readability suffers</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * LambdaExpressionsDemo.java
 * 
 * This comprehensive example demonstrates lambda expressions in Java:
 * - Basic lambda syntax and variations
 * - Comparison with anonymous classes
 * - Common use cases for lambdas
 * - Best practices for lambda usage
 * 
 * Run this program to see lambda expressions in action.
 */

import java.util.*;
import java.util.function.*;

// Simple functional interface for our examples
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Another functional interface
@FunctionalInterface
interface StringProcessor {
    String process(String input);
}

public class LambdaExpressionsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic lambda syntax
        demonstrateBasicSyntax();
        
        // Compare with anonymous classes
        compareWithAnonymousClasses();
        
        // Show common use cases
        demonstrateCommonUseCases();
        
        // Demonstrate variable capture
        demonstrateVariableCapture();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         LAMBDA EXPRESSIONS DEMO                              ║");
        System.out.println("║         Exploring functional programming in Java             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicSyntax() {
        System.out.println("🔸 BASIC LAMBDA SYNTAX DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        // Zero parameter lambda
        Runnable helloLambda = () -> System.out.println("   Hello from lambda!");
        helloLambda.run();
        
        // Single parameter lambda (with and without type)
        Function<Integer, Integer> square1 = (Integer x) -> x * x;
        Function<Integer, Integer> square2 = x -> x * x;
        
        System.out.println("   Square of 5 (with type): " + square1.apply(5));
        System.out.println("   Square of 5 (without type): " + square2.apply(5));
        
        // Multiple parameter lambda (with and without types)
        Calculator add1 = (int a, int b) -> a + b;
        Calculator add2 = (a, b) -> a + b;
        
        System.out.println("   3 + 4 (with types): " + add1.calculate(3, 4));
        System.out.println("   3 + 4 (without types): " + add2.calculate(3, 4));
        
        // Lambda with block body
        Calculator multiply = (a, b) -> {
            int result = a * b;
            System.out.println("   Multiplying " + a + " and " + b);
            return result;
        };
        System.out.println("   6 * 7: " + multiply.calculate(6, 7));
        
        System.out.println();
    }
    
    private static void compareWithAnonymousClasses() {
        System.out.println("🔸 LAMBDA VS ANONYMOUS CLASS COMPARISON");
        System.out.println("   ─────────────────────────────────────");
        
        // Traditional anonymous class
        Runnable anonymousRunnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("   Running from anonymous class");
            }
        };
        
        // Lambda equivalent
        Runnable lambdaRunnable = () -> System.out.println("   Running from lambda");
        
        System.out.println("   Executing anonymous class:");
        anonymousRunnable.run();
        
        System.out.println("   Executing lambda:");
        lambdaRunnable.run();
        
        // Comparator with anonymous class
        List<String> words = Arrays.asList("Java", "Lambda", "Expressions", "Functional");
        
        Comparator<String> anonymousComparator = new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return Integer.compare(s1.length(), s2.length());
            }
        };
        
        // Comparator with lambda
        Comparator<String> lambdaComparator = (s1, s2) -> Integer.compare(s1.length(), s2.length());
        
        List<String> words1 = new ArrayList<>(words);
        List<String> words2 = new ArrayList<>(words);
        
        Collections.sort(words1, anonymousComparator);
        Collections.sort(words2, lambdaComparator);
        
        System.out.println("   Sorted with anonymous class: " + words1);
        System.out.println("   Sorted with lambda: " + words2);
        
        System.out.println();
    }
    
    private static void demonstrateCommonUseCases() {
        System.out.println("🔸 COMMON USE CASES FOR LAMBDAS");
        System.out.println("   ─────────────────────────────");
        
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eve");
        
        // Filtering with Predicate
        System.out.println("   Numbers greater than 5:");
        numbers.stream()
               .filter(n -> n > 5)
               .forEach(n -> System.out.print("   " + n + " "));
        System.out.println();
        
        // Mapping with Function
        System.out.println("   Names to uppercase:");
        names.stream()
             .map(name -> name.toUpperCase())
             .forEach(name -> System.out.print("   " + name + " "));
        System.out.println();
        
        // Combining operations
        System.out.println("   Even numbers squared:");
        numbers.stream()
               .filter(n -> n % 2 == 0)
               .map(n -> n * n)
               .forEach(n -> System.out.print("   " + n + " "));
        System.out.println();
        
        // Consumer for side effects
        System.out.println("   Processing names with Consumer:");
        names.forEach(name -> System.out.println("   Processing: " + name));
        
        System.out.println();
    }
    
    private static void demonstrateVariableCapture() {
        System.out.println("🔸 VARIABLE CAPTURE IN LAMBDAS");
        System.out.println("   ─────────────────────────────");
        
        final int multiplier = 10;
        int baseValue = 5; // Effectively final
        
        // Lambda capturing variables from enclosing scope
        Function<Integer, Integer> multiplyByMultiplier = x -> x * multiplier;
        Function<Integer, Integer> addBaseValue = x -> x + baseValue;
        
        System.out.println("   3 * " + multiplier + " = " + multiplyByMultiplier.apply(3));
        System.out.println("   7 + " + baseValue + " = " + addBaseValue.apply(7));
        
        // This would cause a compilation error:
        // baseValue = 10; // Uncommenting this would make baseValue not effectively final
        // Function<Integer, Integer> errorLambda = x -> x + baseValue;
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Basic lambda expression syntax                            ║");
        System.out.println("║  • Comparison with anonymous classes                         ║");
        System.out.println("║  • Common use cases for lambdas                              ║");
        System.out.println("║  • Variable capture in lambda expressions                    ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Keep lambda expressions short and focused                 ║");
        System.out.println("║  • Use method references when possible                       ║");
        System.out.println("║  • Specify parameter types only when necessary               ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1) Create a lambda expression that takes two integers and returns their sum.
2) Write a lambda expression that checks if a string length is greater than 5.
3) Create a lambda expression that converts a string to uppercase and removes spaces.
4) Implement a lambda expression that squares an integer.
5) Write a lambda expression that concatenates two strings with a space between them.
`
  }
};