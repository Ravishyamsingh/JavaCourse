import { LessonContent } from '../../types/LessonTypes';

export const lesson_10_2: LessonContent = {
  title: 'Functional Interfaces',
  type: 'lesson',
  duration: '25 min',
  module: 'Lambda Expressions and Functional Programming',
  content: {
    overview: 'Learn about functional interfaces in Java, which are the foundation for lambda expressions. This lesson covers built-in functional interfaces, creating custom functional interfaces, and using them effectively in functional programming.',
    objectives: [
      'Understand what functional interfaces are and their role in lambda expressions',
      'Learn about built-in functional interfaces in java.util.function package',
      'Practice creating custom functional interfaces',
      'Master the use of Predicate, Function, Consumer, and Supplier interfaces',
      'Apply functional interfaces in real-world scenarios',
      'Implement best practices for functional interface design'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Functional Interfaces
        </h1>
        <p class="mt-3 text-green-100 text-lg">The foundation of lambda expressions in Java</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Functional Interfaces?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            A functional interface is an interface that contains exactly one abstract method. 
            It may contain multiple default methods or static methods, but only one abstract method. 
            Functional interfaces are the foundation for lambda expressions in Java 8+.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">The @FunctionalInterface annotation is used to indicate that an interface is intended to be a functional interface, providing compile-time checking.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Valid Functional Interfaces</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Single abstract method</li>
                <li>• Multiple default methods</li>
                <li>• Multiple static methods</li>
                <li>• Methods from Object class</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                @FunctionalInterface<br/>
                interface Calculator {<br/>
                &nbsp;&nbsp;int calculate(int a, int b);<br/>
                &nbsp;&nbsp;default void printResult(int result) {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Result: " + result);<br/>
                &nbsp;&nbsp;}<br/>
                }
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Invalid Functional Interfaces</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Multiple abstract methods</li>
                <li>• No abstract methods</li>
                <li>• Extends another interface with abstract methods</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                // This will cause compilation error<br/>
                @FunctionalInterface<br/>
                interface Invalid {<br/>
                &nbsp;&nbsp;void method1();<br/>
                &nbsp;&nbsp;void method2(); // Error!<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Built-in Functional Interfaces
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java provides several built-in functional interfaces in the java.util.function package:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Interface</th>
                    <th class="text-left p-3 font-bold border-b">Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Predicate<T></td>
                    <td class="p-3">boolean test(T t)</td>
                    <td class="p-3">Test a condition</td>
                    <td class="p-3">x -> x > 5</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Function<T,R></td>
                    <td class="p-3">R apply(T t)</td>
                    <td class="p-3">Transform input to output</td>
                    <td class="p-3">x -> x * x</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Consumer<T></td>
                    <td class="p-3">void accept(T t)</td>
                    <td class="p-3">Consume input, no output</td>
                    <td class="p-3">x -> System.out.println(x)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Supplier<T></td>
                    <td class="p-3">T get()</td>
                    <td class="p-3">Provide a value</td>
                    <td class="p-3">() -> Math.random()</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">UnaryOperator<T></td>
                    <td class="p-3">T apply(T t)</td>
                    <td class="p-3">Transform T to T</td>
                    <td class="p-3">x -> x.toUpperCase()</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">BinaryOperator<T></td>
                    <td class="p-3">T apply(T t1, T t2)</td>
                    <td class="p-3">Combine two T values</td>
                    <td class="p-3">(x, y) -> x + y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Specialized Functional Interfaces
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java also provides primitive specializations to avoid autoboxing overhead:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Primitive Specializations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• IntPredicate, LongPredicate, DoublePredicate</li>
                  <li>• IntFunction, LongFunction, DoubleFunction</li>
                  <li>• IntConsumer, LongConsumer, DoubleConsumer</li>
                  <li>• IntSupplier, LongSupplier, DoubleSupplier</li>
                  <li>• IntUnaryOperator, LongUnaryOperator, DoubleUnaryOperator</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  IntPredicate evenCheck = x -> x % 2 == 0;<br/>
                  IntFunction<String> intToString = x -> "Number: " + x;<br/>
                  DoubleConsumer printDouble = d -> System.out.println(d);
                </div>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Two-Arity Specializations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• BiPredicate<T,U> - Two inputs, boolean output</li>
                  <li>• BiFunction<T,U,R> - Two inputs, one output</li>
                  <li>• BiConsumer<T,U> - Two inputs, no output</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  BiPredicate<String, Integer> lengthCheck = <br/>
                  &nbsp;&nbsp;(str, len) -> str.length() == len;<br/>
                  BiFunction<String, String, String> concat = <br/>
                  &nbsp;&nbsp;(s1, s2) -> s1 + " " + s2;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Creating Custom Functional Interfaces
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">When built-in interfaces don't meet your needs, create custom functional interfaces:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Custom functional interface for exception handling<br/>
              @FunctionalInterface<br/>
              interface ThrowableFunction<T, R> {<br/>
              &nbsp;&nbsp;R apply(T t) throws Exception;<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;static <T, R> Function<T, R> wrap(ThrowableFunction<T, R> f) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return t -> {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f.apply(t);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (Exception e) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw new RuntimeException(e);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;};<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              <br/>
              // Usage<br/>
              Function<String, Integer> safeParse = <br/>
              &nbsp;&nbsp;ThrowableFunction.wrap(Integer::parseInt);<br/>
              <br/>
              // Custom interface for validation<br/>
              @FunctionalInterface<br/>
              interface Validator<T> {<br/>
              &nbsp;&nbsp;ValidationResult validate(T t);<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;default Validator<T> and(Validator<T> other) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return t -> {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidationResult result1 = this.validate(t);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidationResult result2 = other.validate(t);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return result1.isValid() && result2.isValid() ?<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidationResult.valid() :<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ValidationResult.invalid(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result1.getMessage() + "; " + result2.getMessage());<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;};<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Functional Interfaces</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use @FunctionalInterface annotation</li>
                <li>• Prefer built-in interfaces when possible</li>
                <li>• Use primitive specializations to avoid boxing</li>
                <li>• Create descriptive interface names</li>
                <li>• Provide default methods for common operations</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't create redundant custom interfaces</li>
                <li>• Don't use generic exceptions in functional interfaces</li>
                <li>• Don't overload abstract methods</li>
                <li>• Don't ignore the single abstract method rule</li>
                <li>• Don't forget to document interface purpose</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * FunctionalInterfacesDemo.java
 * 
 * This comprehensive example demonstrates functional interfaces in Java:
 * - Built-in functional interfaces usage
 * - Custom functional interface creation
 * - Primitive specializations
 * - Best practices for functional interfaces
 * 
 * Run this program to see functional interfaces in action.
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;

// Custom functional interface for exception handling
@FunctionalInterface
interface ThrowableFunction<T, R> {
    R apply(T t) throws Exception;
    
    static <T, R> Function<T, R> wrap(ThrowableFunction<T, R> f) {
        return t -> {
            try {
                return f.apply(t);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        };
    }
}

// Custom functional interface for validation
@FunctionalInterface
interface Validator<T> {
    ValidationResult validate(T t);
    
    default Validator<T> and(Validator<T> other) {
        return t -> {
            ValidationResult result1 = this.validate(t);
            ValidationResult result2 = other.validate(t);
            return result1.isValid() && result2.isValid() ?
                ValidationResult.valid() :
                ValidationResult.invalid(
                    result1.getMessage() + "; " + result2.getMessage());
        };
    }
}

// Validation result class
class ValidationResult {
    private final boolean valid;
    private final String message;
    
    private ValidationResult(boolean valid, String message) {
        this.valid = valid;
        this.message = message;
    }
    
    public static ValidationResult valid() {
        return new ValidationResult(true, "Valid");
    }
    
    public static ValidationResult invalid(String message) {
        return new ValidationResult(false, message);
    }
    
    public boolean isValid() { return valid; }
    public String getMessage() { return message; }
}

// Person class for examples
class Person {
    private String name;
    private int age;
    private String email;
    
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getEmail() { return email; }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}

public class FunctionalInterfacesDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate built-in functional interfaces
        demonstrateBuiltInInterfaces();
        
        // Demonstrate primitive specializations
        demonstratePrimitiveSpecializations();
        
        // Demonstrate custom functional interfaces
        demonstrateCustomInterfaces();
        
        // Show composition and chaining
        demonstrateComposition();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         FUNCTIONAL INTERFACES DEMO                           ║");
        System.out.println("║         Mastering functional programming in Java             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBuiltInInterfaces() {
        System.out.println("🔸 BUILT-IN FUNCTIONAL INTERFACES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────────");
        
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<String> words = Arrays.asList("java", "lambda", "functional", "programming");
        
        // Predicate - filtering
        System.out.println("   Numbers greater than 5:");
        numbers.stream()
               .filter(x -> x > 5)
               .forEach(x -> System.out.print("   " + x + " "));
        System.out.println();
        
        // Function - transformation
        System.out.println("   Numbers squared:");
        numbers.stream()
               .map(x -> x * x)
               .forEach(x -> System.out.print("   " + x + " "));
        System.out.println();
        
        // Consumer - side effects
        System.out.println("   Processing words:");
        words.forEach(word -> System.out.println("   Processing: " + word));
        
        // Supplier - providing values
        System.out.println("   Random numbers from supplier:");
        Supplier<Integer> randomSupplier = () -> (int) (Math.random() * 100);
        for (int i = 0; i < 5; i++) {
            System.out.print("   " + randomSupplier.get() + " ");
        }
        System.out.println();
        
        // BiFunction - two arguments
        BiFunction<String, String, String> concat = (s1, s2) -> s1 + " " + s2;
        System.out.println("   BiFunction concatenation: " + concat.apply("Hello", "World"));
        
        System.out.println();
    }
    
    private static void demonstratePrimitiveSpecializations() {
        System.out.println("🔸 PRIMITIVE SPECIALIZATIONS DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────");
        
        int[] intArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        double[] doubleArray = {1.1, 2.2, 3.3, 4.4, 5.5};
        
        // IntPredicate
        IntPredicate evenPredicate = x -> x % 2 == 0;
        System.out.println("   Even numbers from int array:");
        Arrays.stream(intArray)
              .filter(evenPredicate)
              .forEach(x -> System.out.print("   " + x + " "));
        System.out.println();
        
        // IntFunction
        IntFunction<String> intToString = x -> "Number: " + x;
        System.out.println("   IntFunction transformation:");
        Arrays.stream(intArray)
              .limit(3)
              .mapToObj(intToString)
              .forEach(s -> System.out.print("   " + s + " "));
        System.out.println();
        
        // DoubleConsumer
        DoubleConsumer printDouble = d -> System.out.printf("   %.1f ", d);
        System.out.println("   DoubleConsumer output:");
        Arrays.stream(doubleArray)
              .forEach(printDouble);
        System.out.println();
        
        // IntSupplier
        IntSupplier intSupplier = () -> (int) (Math.random() * 100);
        System.out.println("   IntSupplier random numbers:");
        for (int i = 0; i < 5; i++) {
            System.out.print("   " + intSupplier.getAsInt() + " ");
        }
        System.out.println();
        
        System.out.println();
    }
    
    private static void demonstrateCustomInterfaces() {
        System.out.println("🔸 CUSTOM FUNCTIONAL INTERFACES DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────────");
        
        // ThrowableFunction example
        Function<String, Integer> safeParse = 
            ThrowableFunction.wrap(Integer::parseInt);
        
        List<String> stringNumbers = Arrays.asList("1", "2", "invalid", "4", "5");
        System.out.println("   Safe parsing with ThrowableFunction:");
        stringNumbers.stream()
            .map(s -> {
                try {
                    return safeParse.apply(s).toString();
                } catch (Exception e) {
                    return "Error: " + s;
                }
            })
            .forEach(s -> System.out.print("   " + s + " "));
        System.out.println();
        
        // Validator example
        Validator<Person> ageValidator = p -> 
            p.getAge() >= 18 ? 
            ValidationResult.valid() : 
            ValidationResult.invalid("Age must be >= 18");
            
        Validator<Person> emailValidator = p -> 
            p.getEmail().contains("@") ? 
            ValidationResult.valid() : 
            ValidationResult.invalid("Email must contain @");
            
        Validator<Person> compositeValidator = ageValidator.and(emailValidator);
        
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "alice@example.com"),
            new Person("Bob", 15, "bob@example.com"),
            new Person("Charlie", 30, "invalid-email")
        );
        
        System.out.println("   Person validation results:");
        people.forEach(person -> {
            ValidationResult result = compositeValidator.validate(person);
            System.out.println("   " + person.getName() + ": " + 
                (result.isValid() ? "Valid" : "Invalid - " + result.getMessage()));
        });
        
        System.out.println();
    }
    
    private static void demonstrateComposition() {
        System.out.println("🔸 FUNCTION COMPOSITION DEMONSTRATION");
        System.out.println("   ───────────────────────────────────");
        
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Function composition
        Function<Integer, Integer> multiplyByTwo = x -> x * 2;
        Function<Integer, Integer> addTen = x -> x + 10;
        
        System.out.println("   Function composition examples:");
        numbers.stream()
               .limit(3)
               .forEach(x -> {
                   int result1 = multiplyByTwo.andThen(addTen).apply(x);
                   int result2 = addTen.compose(multiplyByTwo).apply(x);
                   System.out.println("   Input: " + x + 
                                    " | multiplyThenAdd: " + result1 + 
                                    " | addThenMultiply: " + result2);
               });
        
        // Predicate composition
        Predicate<Integer> isEven = x -> x % 2 == 0;
        Predicate<Integer> isGreaterThanFive = x -> x > 5;
        
        System.out.println("   Predicate composition examples:");
        numbers.stream()
               .filter(isEven.and(isGreaterThanFive))
               .forEach(x -> System.out.print("   " + x + " "));
        System.out.println("- Even numbers greater than 5");
        
        numbers.stream()
               .filter(isEven.or(isGreaterThanFive))
               .forEach(x -> System.out.print("   " + x + " "));
        System.out.println("- Even numbers OR greater than 5");
        
        numbers.stream()
               .filter(isEven.negate())
               .forEach(x -> System.out.print("   " + x + " "));
        System.out.println("- Odd numbers (negated even)");
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Built-in functional interfaces                            ║");
        System.out.println("║  • Primitive specializations                                 ║");
        System.out.println("║  • Custom functional interface creation                      ║");
        System.out.println("║  • Function composition and chaining                         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use @FunctionalInterface annotation                       ║");
        System.out.println("║  • Prefer built-in interfaces when possible                  ║");
        System.out.println("║  • Use primitive specializations to avoid boxing              ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1. Create a Predicate that checks if a string starts with "A".
2. Create a Function that converts a string to uppercase.
3. Create a Consumer that prints integers to the console.
4. Create a Supplier that returns a random integer between 1 and 100.
5. Create a custom functional interface with a single abstract method.
`
  }
};