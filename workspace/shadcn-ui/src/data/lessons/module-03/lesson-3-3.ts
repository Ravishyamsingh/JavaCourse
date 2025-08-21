import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_3: LessonContent = {
  title: 'Constructors and Methods',
  type: 'coding',
  duration: '40 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Master constructors and methods in Java, essential components for creating and manipulating objects. This lesson covers constructor types, method overloading, parameter passing, return types, and advanced method concepts. You\'ll learn to design flexible classes with multiple constructors, implement overloaded methods for different use cases, and understand how Java handles parameter passing and method invocation.',
    objectives: [
      'Understand constructor types and their usage',
      'Learn constructor overloading and chaining',
      'Master method definition, overloading, and overriding concepts',
      'Work with different parameter types and return values',
      'Understand method signatures and overload resolution',
      'Learn about the static keyword for class-level methods',
      'Practice advanced method concepts like varargs and recursion'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Constructors and Methods in Java
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Creating and manipulating objects with constructors and methods</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Constructors
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Constructors are special methods used to initialize objects when they are created. They have the same name as the class 
            and don't have a return type. Constructors are called automatically when an object is instantiated using the new keyword.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Constructors ensure that objects are properly initialized before use, setting initial values for fields and performing any necessary setup.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Types of Constructors
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🔧 Default Constructor</h4>
              <p class="text-blue-700">Automatically provided by Java if no constructors are defined. Takes no parameters and has an empty body.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public class Student &#123;<br/>
                &nbsp;&nbsp;// Default constructor provided automatically<br/>
                &#125;
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">⚙️ Parameterized Constructor</h4>
              <p class="text-green-700">Accepts parameters to initialize object fields with specific values during creation.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public Student(String name, int age) &#123;<br/>
                &nbsp;&nbsp;this.name = name;<br/>
                &nbsp;&nbsp;this.age = age;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Constructor Overloading
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">A class can have multiple constructors with different parameter lists, allowing objects to be created in various ways.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public class Rectangle &#123;<br/>
                &nbsp;&nbsp;private double width, height;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Default constructor<br/>
                &nbsp;&nbsp;public Rectangle() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this(1.0, 1.0); // Constructor chaining<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Parameterized constructor<br/>
                &nbsp;&nbsp;public Rectangle(double side) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this(side, side);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Full constructor<br/>
                &nbsp;&nbsp;public Rectangle(double width, double height) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.width = width;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.height = height;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Method Fundamentals
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">📝 Method Structure</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                accessModifier returnType methodName(parameterList) &#123;<br/>
                &nbsp;&nbsp;// method body<br/>
                &#125;
              </div>
              <p class="text-red-700 mt-2">Example: public void setName(String name) { this.name = name; }</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🔄 Method Overloading</h4>
              <p class="text-indigo-700">Multiple methods with the same name but different parameter lists in the same class.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public void display() { ... }<br/>
                public void display(String message) { ... }<br/>
                public void display(int number) { ... }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Parameter Passing
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📤 Pass by Value</h4>
              <p class="text-green-700">For primitive types, a copy of the value is passed to the method. Changes inside the method don't affect the original value.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public void modifyValue(int x) &#123;<br/>
                &nbsp;&nbsp;x = 100; // Only affects local copy<br/>
                &#125;
              </div>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">📥 Pass by Reference</h4>
              <p class="text-blue-700">For objects, a copy of the reference is passed. Changes to object state inside the method affect the original object.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public void modifyObject(Student s) &#123;<br/>
                &nbsp;&nbsp;s.setName("New Name"); // Affects original object<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Advanced Method Concepts
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-2">📦 Varargs (Variable Arguments)</h4>
                <p class="text-yellow-700">Methods that accept a variable number of arguments of the same type.</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public void printNumbers(int... numbers) &#123;<br/>
                  &nbsp;&nbsp;for (int num : numbers) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(num);<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;
                </div>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">🔁 Recursion</h4>
                <p class="text-purple-700">Methods that call themselves to solve problems by breaking them into smaller subproblems.</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public int factorial(int n) &#123;<br/>
                  &nbsp;&nbsp;if (n <= 1) return 1;<br/>
                  &nbsp;&nbsp;return n * factorial(n - 1);<br/>
                  &#125;
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">⚡ Static Methods</h4>
                <p class="text-indigo-700">Methods that belong to the class rather than instances, called using the class name.</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public static double calculateArea(double radius) &#123;<br/>
                  &nbsp;&nbsp;return Math.PI * radius * radius;<br/>
                  &#125;
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">🧩 Method Chaining</h4>
                <p class="text-red-700">Calling multiple methods on the same object in a single statement by returning the object instance.</p>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public Student setName(String name) &#123;<br/>
                  &nbsp;&nbsp;this.name = name;<br/>
                  &nbsp;&nbsp;return this;<br/>
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Constructors and Methods</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Initialize all fields in constructors</li>
                <li>• Use constructor overloading for flexibility</li>
                <li>• Validate parameters in constructors and methods</li>
                <li>• Use meaningful parameter names</li>
                <li>• Keep methods focused on a single responsibility</li>
                <li>• Use method overloading appropriately</li>
                <li>• Document methods with clear comments</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't create constructors with too many parameters</li>
                <li>• Don't duplicate code in overloaded constructors</li>
                <li>• Don't ignore parameter validation</li>
                <li>• Don't make methods too long or complex</li>
                <li>• Don't use ambiguous method overloads</li>
                <li>• Don't forget to return appropriate values</li>
                <li>• Don't expose internal state unnecessarily</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ConstructorsAndMethodsDemo.java
 * 
 * This comprehensive example demonstrates constructors and methods in Java:
 * - Different types of constructors and their usage
 * - Constructor overloading and chaining
 * - Method overloading and overriding concepts
 * - Parameter passing mechanisms
 * - Advanced method features like varargs and recursion
 * - Static methods and method chaining
 * - Best practices for constructor and method design
 * 
 * Run this program to see how constructors and methods work in practice.
 */

// Example class demonstrating various constructor concepts
class Person {
    private String name;
    private int age;
    private String email;
    
    // Default constructor
    public Person() {
        this("Unknown", 0, "unknown@example.com");
        System.out.println("Default Person constructor called");
    }
    
    // Parameterized constructor
    public Person(String name) {
        this(name, 0, "unknown@example.com");
        System.out.println("Person constructor with name called");
    }
    
    // Full constructor
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
        System.out.println("Full Person constructor called");
    }
    
    // Copy constructor
    public Person(Person other) {
        this.name = other.name;
        this.age = other.age;
        this.email = other.email;
        System.out.println("Copy Person constructor called");
    }
    
    // Getters
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getEmail() {
        return email;
    }
    
    // Setters
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age: " + age);
        }
    }
    
    // Method overloading examples
    public void displayInfo() {
        System.out.println("Person Info: " + name + ", " + age + " years old, " + email);
    }
    
    public void displayInfo(String prefix) {
        System.out.println(prefix + " Person Info: " + name + ", " + age + " years old, " + email);
    }
    
    public void displayInfo(String prefix, boolean detailed) {
        if (detailed) {
            System.out.println(prefix + " Detailed Person Info:");
            System.out.println("  Name: " + name);
            System.out.println("  Age: " + age);
            System.out.println("  Email: " + email);
        } else {
            displayInfo(prefix);
        }
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
}

// Example class demonstrating constructor chaining
class Employee extends Person {
    private String employeeId;
    private double salary;
    
    // Default constructor
    public Employee() {
        this("E0000", 0.0);
        System.out.println("Default Employee constructor called");
    }
    
    // Constructor with employee-specific fields
    public Employee(String employeeId, double salary) {
        super(); // Call parent constructor
        this.employeeId = employeeId;
        this.salary = salary;
        System.out.println("Employee constructor with ID and salary called");
    }
    
    // Full constructor
    public Employee(String name, int age, String email, String employeeId, double salary) {
        super(name, age, email); // Call parent constructor with parameters
        this.employeeId = employeeId;
        this.salary = salary;
        System.out.println("Full Employee constructor called");
    }
    
    // Getters
    public String getEmployeeId() {
        return employeeId;
    }
    
    public double getSalary() {
        return salary;
    }
    
    // Method overriding
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("  Employee ID: " + employeeId);
        System.out.println("  Salary: $" + salary);
    }
    
    @Override
    public String toString() {
        return "Employee{" + super.toString().substring(6) + 
               ", employeeId='" + employeeId + "', salary=" + salary + "}";
    }
}

// Example class demonstrating advanced method concepts
class Calculator {
    // Static methods
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double add(double a, double b) {
        return a + b;
    }
    
    // Method overloading with different parameter types
    public int multiply(int a, int b) {
        return a * b;
    }
    
    public double multiply(double a, double b) {
        return a * b;
    }
    
    public int multiply(int a, int b, int c) {
        return a * b * c;
    }
    
    // Varargs method
    public int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Recursion example
    public int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    
    // Method chaining example
    public Calculator printValue(String label, int value) {
        System.out.println(label + ": " + value);
        return this;
    }
    
    public Calculator printValue(String label, double value) {
        System.out.println(label + ": " + value);
        return this;
    }
}

// Main class to demonstrate constructors and methods
public class ConstructorsAndMethodsDemo {
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate constructor types
        demonstrateConstructors();
        
        // Demonstrate constructor chaining
        demonstrateConstructorChaining();
        
        // Demonstrate method overloading
        demonstrateMethodOverloading();
        
        // Demonstrate parameter passing
        demonstrateParameterPassing();
        
        // Demonstrate advanced method concepts
        demonstrateAdvancedMethods();
        
        // Demonstrate static methods
        demonstrateStaticMethods();
        
        // Demonstrate method chaining
        demonstrateMethodChaining();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              CONSTRUCTORS AND METHODS DEMO                   ║");
        System.out.println("║        Understanding Object Initialization and Behavior      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateConstructors() {
        System.out.println("🔸 CONSTRUCTOR TYPES AND OVERLOADING");
        System.out.println("   ──────────────────────────────────");
        
        // Different ways to create Person objects
        System.out.println("Creating Person with default constructor:");
        Person person1 = new Person();
        
        System.out.println("\nCreating Person with name constructor:");
        Person person2 = new Person("Alice Johnson");
        
        System.out.println("\nCreating Person with full constructor:");
        Person person3 = new Person("Bob Smith", 30, "bob@example.com");
        
        System.out.println("\nCreating Person with copy constructor:");
        Person person4 = new Person(person3);
        
        System.out.println("\nDisplaying all persons:");
        person1.displayInfo();
        person2.displayInfo();
        person3.displayInfo();
        person4.displayInfo();
        System.out.println();
    }
    
    private static void demonstrateConstructorChaining() {
        System.out.println("🔸 CONSTRUCTOR CHAINING");
        System.out.println("   ─────────────────────");
        
        // Creating Employee objects to demonstrate constructor chaining
        System.out.println("Creating Employee with default constructor:");
        Employee emp1 = new Employee();
        
        System.out.println("\nCreating Employee with partial constructor:");
        Employee emp2 = new Employee("E12345", 50000.0);
        
        System.out.println("\nCreating Employee with full constructor:");
        Employee emp3 = new Employee("Charlie Brown", 35, "charlie@example.com", "E67890", 75000.0);
        
        System.out.println("\nDisplaying employee information:");
        emp1.displayInfo();
        System.out.println();
        emp2.displayInfo();
        System.out.println();
        emp3.displayInfo();
        System.out.println();
    }
    
    private static void demonstrateMethodOverloading() {
        System.out.println("🔸 METHOD OVERLOADING");
        System.out.println("   ───────────────────");
        
        Person person = new Person("Diana Prince", 25, "diana@example.com");
        
        // Calling overloaded methods
        person.displayInfo();
        System.out.println();
        person.displayInfo("INFO");
        System.out.println();
        person.displayInfo("DETAILED INFO", true);
        System.out.println();
    }
    
    private static void demonstrateParameterPassing() {
        System.out.println("🔸 PARAMETER PASSING MECHANISMS");
        System.out.println("   ─────────────────────────────");
        
        // Pass by value for primitives
        int number = 5;
        System.out.println("Original number: " + number);
        modifyPrimitive(number);
        System.out.println("Number after method call: " + number);
        
        // Pass by reference for objects
        Person person = new Person("Edward Norton", 40, "edward@example.com");
        System.out.println("\nOriginal person: " + person.getName());
        modifyObject(person);
        System.out.println("Person name after method call: " + person.getName());
        System.out.println();
    }
    
    private static void modifyPrimitive(int x) {
        x = 100;
        System.out.println("Modified value inside method: " + x);
    }
    
    private static void modifyObject(Person p) {
        p.setName("Bruce Banner");
        System.out.println("Modified name inside method: " + p.getName());
    }
    
    private static void demonstrateAdvancedMethods() {
        System.out.println("🔸 ADVANCED METHOD CONCEPTS");
        System.out.println("   ─────────────────────────");
        
        Calculator calc = new Calculator();
        
        // Varargs method
        System.out.println("Sum of 1, 2, 3, 4, 5: " + calc.sum(1, 2, 3, 4, 5));
        System.out.println("Sum of 10, 20, 30: " + calc.sum(10, 20, 30));
        
        // Recursion example
        System.out.println("\nFactorial of 5: " + calc.factorial(5));
        System.out.println("Factorial of 0: " + calc.factorial(0));
        System.out.println();
    }
    
    private static void demonstrateStaticMethods() {
        System.out.println("🔸 STATIC METHODS");
        System.out.println("   ───────────────");
        
        // Calling static methods without creating an instance
        System.out.println("Static method add(5, 3): " + Calculator.add(5, 3));
        System.out.println("Static method add(2.5, 3.7): " + Calculator.add(2.5, 3.7));
        System.out.println();
    }
    
    private static void demonstrateMethodChaining() {
        System.out.println("🔸 METHOD CHAINING");
        System.out.println("   ────────────────");
        
        Calculator calc = new Calculator();
        
        // Method chaining example
        calc.printValue("First value", 10)
            .printValue("Second value", 20)
            .printValue("Sum", calc.add(10, 20))
            .printValue("Product", calc.multiply(5, 6));
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Different types of constructors and their usage           ║");
        System.out.println("║  • Constructor overloading and chaining                      ║");
        System.out.println("║  • Method overloading with different parameter lists         ║");
        System.out.println("║  • Parameter passing mechanisms (value vs reference)         ║");
        System.out.println("║  • Advanced method concepts (varargs, recursion)             ║");
        System.out.println("║  • Static methods and method chaining                        ║");
        System.out.println("║  • Best practices for constructor and method design          ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Initialize all fields properly in constructors            ║");
        System.out.println("║  • Use constructor overloading for flexibility               ║");
        System.out.println("║  • Validate parameters in constructors and methods           ║");
        System.out.println("║  • Keep methods focused on single responsibilities           ║");
        System.out.println("║  • Use method overloading appropriately                      ║");
        System.out.println("║  • Document methods with clear comments                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              CONSTRUCTORS AND METHODS DEMO                   ║
 * ║        Understanding Object Initialization and Behavior      ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 CONSTRUCTOR TYPES AND OVERLOADING
 *    ──────────────────────────────────
 * Full Person constructor called
 * Default Person constructor called
 * 
 * Creating Person with name constructor:
 * Full Person constructor called
 * Person constructor with name called
 * 
 * Creating Person with full constructor:
 * Full Person constructor called
 * 
 * Creating Person with copy constructor:
 * Copy Person constructor called
 * 
 * Displaying all persons:
 * Person Info: Unknown, 0 years old, unknown@example.com
 * Person Info: Alice Johnson, 0 years old, unknown@example.com
 * Person Info: Bob Smith, 30 years old, bob@example.com
 * Person Info: Bob Smith, 30 years old, bob@example.com
 * 
 * 🔸 CONSTRUCTOR CHAINING
 *    ─────────────────────
 * Full Person constructor called
 * Default Person constructor called
 * Employee constructor with ID and salary called
 * Default Employee constructor called
 * 
 * Creating Employee with partial constructor:
 * Full Person constructor called
 * Default Person constructor called
 * Employee constructor with ID and salary called
 * 
 * Creating Employee with full constructor:
 * Full Person constructor called
 * 
 * Displaying employee information:
 * Person Info: Unknown, 0 years old, unknown@example.com
 *   Employee ID: E0000
 *   Salary: $0.0
 * 
 * Person Info: Unknown, 0 years old, unknown@example.com
 *   Employee ID: E12345
 *   Salary: $50000.0
 * 
 * Person Info: Charlie Brown, 35 years old, charlie@example.com
 *   Employee ID: E67890
 *   Salary: $75000.0
 * 
 * 🔸 METHOD OVERLOADING
 *    ───────────────────
 * Person Info: Diana Prince, 25 years old, diana@example.com
 * 
 * INFO Person Info: Diana Prince, 25 years old, diana@example.com
 * 
 * DETAILED INFO Detailed Person Info:
 *   Name: Diana Prince
 *   Age: 25
 *   Email: diana@example.com
 * 
 * 🔸 PARAMETER PASSING MECHANISMS
 *    ─────────────────────────────
 * Original number: 5
 * Modified value inside method: 100
 * Number after method call: 5
 * 
 * Original person: Edward Norton
 * Modified name inside method: Bruce Banner
 * Person name after method call: Bruce Banner
 * 
 * 🔸 ADVANCED METHOD CONCEPTS
 *    ─────────────────────────
 * Sum of 1, 2, 3, 4, 5: 15
 * Sum of 10, 20, 30: 60
 * 
 * Factorial of 5: 120
 * Factorial of 0: 1
 * 
 * 🔸 STATIC METHODS
 *    ───────────────
 * Static method add(5, 3): 8
 * Static method add(2.5, 3.7): 6.2
 * 
 * 🔸 METHOD CHAINING
 *    ────────────────
 * First value: 10
 * Second value: 20
 * Sum: 30
 * Product: 30
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Constructors and Methods Practice Exercise**
      
      This exercise will help you master constructors and methods through practical application. Complete all parts to solidify your understanding of object initialization and behavior in Java.
      
      **Part 1: University Management System (35 minutes)**
      
      Create a program called \`UniversitySystem.java\` that models a university management system:
      
      **Requirements:**
      - Create a Student class with multiple constructors (default, name-only, full)
      - Implement a Course class with overloaded constructors
      - Add Professor class with constructor chaining
      - Include methods for enrollment, grading, and course management
      - Implement proper validation in constructors and methods
      
      **Advanced Features:**
      - Add department management with a Department class
      - Implement student transcript generation
      - Create course scheduling with time and location
      - Add prerequisite checking for course enrollment
      - Include GPA calculation and academic standing
      
      **Part 2: Geometry Calculator (30 minutes)**
      
      Create a program called \`GeometryCalculator.java\` that calculates properties of geometric shapes:
      
      **Requirements:**
      - Create Shape base class with constructor overloading
      - Implement specific shape classes (Circle, Rectangle, Triangle, Polygon)
      - Add overloaded methods for different calculation types
      - Include static factory methods for object creation
      - Implement method chaining for complex calculations
      
      **Features to implement:**
      - Constructor validation for geometric constraints
      - Overloaded methods for different parameter combinations
      - Static utility methods for common calculations
      - Varargs methods for polygon calculations
      - Recursion for fractal-like shape calculations
      
      **Part 3: Banking Operations (40 minutes)**
      
      Create a program called \`BankingOperations.java\` that models banking transactions:
      
      **Requirements:**
      - Create Account class with multiple constructors
      - Implement Transaction class with overloaded constructors
      - Add Customer class with copy constructor
      - Include methods for deposits, withdrawals, and transfers
      - Implement interest calculation with different compounding methods
      
      **Advanced Features:**
      - Add transaction history with method overloading
      - Implement currency conversion with static methods
      - Create loan calculation with recursive payment schedules
      - Add account statement generation with method chaining
      - Include fraud detection with parameter validation
      
      **Part 4: Game Character System (35 minutes)**
      
      Create a program called \`GameCharacterSystem.java\` that manages game characters:
      
      **Requirements:**
      - Create Character base class with constructor overloading
      - Implement specific character types (Warrior, Mage, Archer)
      - Add Inventory class with overloaded methods
      - Include combat methods with different parameter types
      - Implement level-up system with method chaining
      
      **Features to implement:**
      - Constructor validation for character attributes
      - Overloaded methods for different combat scenarios
      - Static methods for game balance calculations
      - Varargs methods for multi-target abilities
      - Recursion for skill tree progression
      
      **Part 5: E-Commerce Order Processing (40 minutes)**
      
      Create a program called \`OrderProcessing.java\` that handles e-commerce orders:
      
      **Requirements:**
      - Create Order class with multiple constructors
      - Implement Product class with overloaded constructors
      - Add Customer class with copy constructor
      - Include methods for order processing, cancellation, and modification
      - Implement pricing calculation with discounts and taxes
      
      **Advanced Features:**
      - Add order tracking with method overloading
      - Implement shipping calculation with static methods
      - Create inventory management with parameter validation
      - Add payment processing with method chaining
      - Include order history with varargs methods
      
      **Part 6: Scientific Calculator (30 minutes)**
      
      Create a program called \`ScientificCalculator.java\` that performs advanced mathematical operations:
      
      **Requirements:**
      - Create Calculator class with constructor overloading
      - Implement overloaded methods for different mathematical operations
      - Add statistical methods with varargs parameters
      - Include trigonometric functions with method overloading
      - Implement complex number operations
      
      **Features to implement:**
      - Constructor validation for mathematical constraints
      - Static methods for common mathematical constants
      - Recursive methods for series calculations
      - Method chaining for complex expressions
      - Overloaded methods for different data types
      
      **Part 7: Advanced Constructor and Method Challenge (30 minutes)**
      
      Create a program called \`AdvancedConstructorsMethods.java\` that demonstrates advanced concepts:
      
      **Requirements:**
      - Design a complex system of your choice
      - Implement constructor chaining with super() calls
      - Create overloaded methods with complex parameter combinations
      - Include static factory methods for object creation
      - Implement method chaining for fluent interfaces
      
      **Features to implement:**
      - Private constructors with factory methods
      - Constructor delegation with this() calls
      - Generic methods with type parameters
      - Varargs methods with complex data structures
      - Recursion with memoization for performance
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`UniversitySystem.java\` - University management implementation
      2. \`GeometryCalculator.java\` - Geometric shape calculations
      3. \`BankingOperations.java\` - Banking transaction system
      4. \`GameCharacterSystem.java\` - Game character management
      5. \`OrderProcessing.java\` - E-commerce order processing
      6. \`ScientificCalculator.java\` - Advanced mathematical operations
      7. \`AdvancedConstructorsMethods.java\` - Custom advanced implementation
      8. \`README.md\` - Documentation explaining each program
      9. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of different constructor types
      - ✅ Proper constructor overloading and chaining
      - ✅ Effective method overloading with different signatures
      - ✅ Understanding of parameter passing mechanisms
      - ✅ Use of advanced method concepts (varargs, recursion)
      - ✅ Proper validation in constructors and methods
      - ✅ Clean, readable code with appropriate comments
      - ✅ Method chaining for fluent interfaces
      
      **💡 Bonus Challenges:**
      
      1. **Design Patterns:** Implement builder or factory patterns
      2. **Performance Optimization:** Profile and optimize constructor/method performance
      3. **Error Handling:** Add comprehensive exception handling
      4. **Memory Management:** Optimize object creation and usage
      5. **Advanced Features:** Implement generics or annotations
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master different types of constructors and their usage
      - Understand constructor overloading and chaining techniques
      - Learn to implement method overloading effectively
      - Practice parameter passing mechanisms in Java
      - Develop skills in advanced method concepts
      - Build confidence in designing flexible class interfaces
      - Gain experience with object initialization best practices
      
      This comprehensive exercise provides hands-on experience with essential Java object creation and manipulation techniques!
    `
  }
};