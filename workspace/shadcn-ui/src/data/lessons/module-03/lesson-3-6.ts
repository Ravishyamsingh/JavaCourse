import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_6: LessonContent = {
  title: 'Encapsulation',
  type: 'lesson',
  duration: '30 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Master encapsulation in Java, a fundamental OOP principle that protects object state and ensures data integrity. This lesson covers access modifiers, getter and setter methods, data hiding techniques, and best practices for designing well-encapsulated classes. You\'ll learn to create robust, maintainable code that properly controls access to internal object state while providing clean public interfaces.',
    objectives: [
      'Understand the concept and benefits of encapsulation',
      'Learn to use access modifiers (public, private, protected, package) effectively',
      'Master getter and setter methods for controlled access',
      'Practice data hiding techniques to protect object state',
      'Work with immutable objects and defensive copying',
      'Learn validation techniques in setter methods',
      'Understand the relationship between encapsulation and other OOP principles'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Encapsulation in Java
        </h1>
        <p class="mt-3 text-green-100 text-lg">Protecting object state and ensuring data integrity</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Encapsulation
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Encapsulation is the bundling of data (fields) and methods that operate on that data within a single unit (class), 
            and restricting direct access to the internal state of an object. It's one of the four fundamental OOP principles 
            that helps create robust, maintainable code by hiding implementation details and exposing only what's necessary.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">Encapsulation protects object integrity by controlling how data is accessed and modified, preventing invalid states and ensuring data consistency.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Access Modifiers
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-blue-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Modifier</th>
                  <th class="text-left p-3 font-bold border-b">Within Class</th>
                  <th class="text-left p-3 font-bold border-b">Within Package</th>
                  <th class="text-left p-3 font-bold border-b">Outside Package (Subclass)</th>
                  <th class="text-left p-3 font-bold border-b">Outside Package (Non-subclass)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-mono">private</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✗</td>
                  <td class="p-3">✗</td>
                  <td class="p-3">✗</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">default</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✗</td>
                  <td class="p-3">✗</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">protected</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✗</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">public</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✓</td>
                  <td class="p-3">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Getter and Setter Methods
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Getter and setter methods provide controlled access to private fields, allowing validation and additional logic when accessing or modifying data.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Getters (Accessors):</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  public String getName() &#123;<br/>
                  &nbsp;&nbsp;return name;<br/>
                  &#125;
                </div>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Setters (Mutators):</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  public void setName(String name) &#123;<br/>
                  &nbsp;&nbsp;if (name != null && !name.isEmpty()) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Data Hiding Techniques
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Private Fields:</h4>
              <p class="text-orange-700">Make fields private to prevent direct access and modification.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                private String name;<br/>
                private int age;<br/>
                private double salary;
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Validation in Setters:</h4>
              <p class="text-red-700">Validate data in setter methods to maintain object integrity.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public void setAge(int age) &#123;<br/>
                &nbsp;&nbsp;if (age >= 0 && age <= 150) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.age = age;<br/>
                &nbsp;&nbsp;&#125; else &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;throw new IllegalArgumentException("Invalid age");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Immutable Objects
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Immutable objects cannot be modified after creation, providing thread safety and preventing accidental changes.</p>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Creating Immutable Classes:</h4>
              <ul class="space-y-2 text-teal-700">
                <li>• Make all fields private and final</li>
                <li>• Don't provide setter methods</li>
                <li>• Don't allow mutable objects to be modified</li>
                <li>• Return defensive copies of mutable objects</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public final class Person &#123;<br/>
                &nbsp;&nbsp;private final String name;<br/>
                &nbsp;&nbsp;private final int age;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public Person(String name, int age) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.age = age;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public String getName() &#123; return name; &#125;<br/>
                &nbsp;&nbsp;public int getAge() &#123; return age; &#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Defensive Copying
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Defensive copying protects internal state by returning copies of mutable objects rather than the objects themselves.</p>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public class Student &#123;<br/>
                &nbsp;&nbsp;private List<String> courses;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public Student(List<String> courses) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// Defensive copy<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.courses = new ArrayList<>(courses);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Return defensive copy<br/>
                &nbsp;&nbsp;public List<String> getCourses() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return new ArrayList<>(courses);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Encapsulation</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Make fields private by default</li>
                <li>• Provide public getter methods for access</li>
                <li>• Use setter methods with validation</li>
                <li>• Create immutable objects when possible</li>
                <li>• Use defensive copying for mutable objects</li>
                <li>• Document the purpose of getter/setter methods</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't make fields public unless absolutely necessary</li>
                <li>• Don't skip validation in setter methods</li>
                <li>• Don't expose mutable internal objects directly</li>
                <li>• Don't create getters/setters for every field blindly</li>
                <li>• Don't ignore thread safety in multi-threaded environments</li>
                <li>• Don't break encapsulation for convenience</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * EncapsulationDemo.java
 * 
 * This comprehensive example demonstrates encapsulation in Java:
 * - Access modifiers and their usage
 * - Getter and setter methods with validation
 * - Data hiding techniques to protect object state
 * - Immutable objects and defensive copying
 * - Best practices for designing well-encapsulated classes
 * 
 * Run this program to see how encapsulation works in practice.
 */

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// Example of a well-encapsulated class
class Student {
    // Private fields - hidden from outside access
    private String name;
    private int age;
    private double gpa;
    private List<String> courses;
    
    // Constructor
    public Student(String name, int age, double gpa) {
        setName(name);
        setAge(age);
        setGpa(gpa);
        this.courses = new ArrayList<>();
    }
    
    // Getter methods - controlled access to private fields
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Setter methods with validation - controlled modification
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name.trim();
        } else {
            throw new IllegalArgumentException("Name cannot be null or empty");
        }
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            throw new IllegalArgumentException("GPA must be between 0.0 and 4.0");
        }
    }
    
    // Methods to work with courses list
    public void addCourse(String course) {
        if (course != null && !course.trim().isEmpty()) {
            courses.add(course.trim());
        } else {
            throw new IllegalArgumentException("Course name cannot be null or empty");
        }
    }
    
    public void removeCourse(String course) {
        courses.remove(course);
    }
    
    // Return defensive copy to prevent external modification
    public List<String> getCourses() {
        return new ArrayList<>(courses);
    }
    
    // Method to get course count
    public int getCourseCount() {
        return courses.size();
    }
    
    // Display student information
    public void displayInfo() {
        System.out.println("Student Information:");
        System.out.println("  Name: " + name);
        System.out.println("  Age: " + age);
        System.out.println("  GPA: " + gpa);
        System.out.println("  Courses: " + courses);
    }
}

// Example of an immutable class
final class ImmutablePerson {
    private final String name;
    private final int age;
    
    public ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Only getters, no setters
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    @Override
    public String toString() {
        return "ImmutablePerson{name='" + name + "', age=" + age + "}";
    }
}

// Example of a class with defensive copying
class CourseCatalog {
    private List<String> courses;
    
    public CourseCatalog(List<String> courses) {
        // Defensive copy in constructor
        this.courses = new ArrayList<>(courses);
    }
    
    // Defensive copy in getter
    public List<String> getCourses() {
        return new ArrayList<>(courses);
    }
    
    public void addCourse(String course) {
        if (course != null && !course.trim().isEmpty()) {
            courses.add(course.trim());
        }
    }
    
    public int getCourseCount() {
        return courses.size();
    }
}

// Example showing the importance of encapsulation
class BankAccount {
    // Properly encapsulated fields
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    public BankAccount(String accountNumber, String ownerName, double initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        setBalance(initialBalance); // Use setter for validation
    }
    
    // Public getter methods
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public String getOwnerName() {
        return ownerName;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Controlled setter with validation
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            throw new IllegalArgumentException("Balance cannot be negative");
        }
    }
    
    // Business methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited $" + amount + ". New balance: $" + balance);
        } else {
            System.out.println("Deposit amount must be positive");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew $" + amount + ". New balance: $" + balance);
        } else if (amount > balance) {
            System.out.println("Insufficient funds");
        } else {
            System.out.println("Withdrawal amount must be positive");
        }
    }
    
    public void displayAccountInfo() {
        System.out.println("Account Information:");
        System.out.println("  Account Number: " + accountNumber);
        System.out.println("  Owner: " + ownerName);
        System.out.println("  Balance: $" + balance);
    }
}

// Main class to demonstrate encapsulation
public class EncapsulationDemo {
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic encapsulation
        demonstrateBasicEncapsulation();
        
        // Demonstrate validation in setters
        demonstrateSetterValidation();
        
        // Demonstrate immutable objects
        demonstrateImmutableObjects();
        
        // Demonstrate defensive copying
        demonstrateDefensiveCopying();
        
        // Demonstrate encapsulation importance
        demonstrateEncapsulationImportance();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                  ENCAPSULATION DEMO                         ║");
        System.out.println("║        Understanding Data Protection and Integrity          ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicEncapsulation() {
        System.out.println("🔸 BASIC ENCAPSULATION");
        System.out.println("   ─────────────────────");
        
        // Creating a well-encapsulated Student object
        Student student = new Student("Alice Johnson", 20, 3.75);
        
        System.out.println("Created student:");
        student.displayInfo();
        
        // Accessing data through getters
        System.out.println("\nAccessing data through getters:");
        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());
        System.out.println("GPA: " + student.getGpa());
        
        // Adding courses through controlled methods
        student.addCourse("Mathematics");
        student.addCourse("Physics");
        student.addCourse("Chemistry");
        
        System.out.println("\nCourses: " + student.getCourses());
        System.out.println("Course count: " + student.getCourseCount());
        System.out.println();
    }
    
    private static void demonstrateSetterValidation() {
        System.out.println("🔸 SETTER VALIDATION");
        System.out.println("   ──────────────────");
        
        Student student = new Student("Bob Smith", 19, 3.5);
        
        System.out.println("Original student:");
        student.displayInfo();
        
        // Valid updates
        System.out.println("\nUpdating with valid data:");
        student.setName("Robert Smith");
        student.setAge(20);
        student.setGpa(3.8);
        student.displayInfo();
        
        // Invalid updates that will throw exceptions
        System.out.println("\nAttempting invalid updates:");
        try {
            student.setAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
        
        try {
            student.setGpa(5.0);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateImmutableObjects() {
        System.out.println("🔸 IMMUTABLE OBJECTS");
        System.out.println("   ──────────────────");
        
        // Creating an immutable object
        ImmutablePerson person = new ImmutablePerson("Charlie Brown", 25);
        
        System.out.println("Created immutable person:");
        System.out.println(person);
        
        // We can access data but cannot modify it
        System.out.println("\nAccessing data:");
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        
        // No setter methods available, so object state cannot change
        System.out.println("\nImmutable person object cannot be modified after creation");
        System.out.println();
    }
    
    private static void demonstrateDefensiveCopying() {
        System.out.println("🔸 DEFENSIVE COPYING");
        System.out.println("   ──────────────────");
        
        // Create initial list of courses
        List<String> initialCourses = new ArrayList<>();
        initialCourses.add("Biology");
        initialCourses.add("History");
        
        // Create CourseCatalog with the list
        CourseCatalog catalog = new CourseCatalog(initialCourses);
        
        System.out.println("Initial catalog:");
        System.out.println("Courses: " + catalog.getCourses());
        System.out.println("Course count: " + catalog.getCourseCount());
        
        // Modify the original list - should not affect catalog
        initialCourses.add("Geography");
        System.out.println("\nAfter modifying original list:");
        System.out.println("Catalog courses: " + catalog.getCourses());
        System.out.println("Catalog course count: " + catalog.getCourseCount());
        System.out.println("Original list: " + initialCourses);
        
        // Get courses from catalog and try to modify - should not affect catalog
        List<String> catalogCourses = catalog.getCourses();
        catalogCourses.add("Art");
        System.out.println("\nAfter modifying returned list:");
        System.out.println("Catalog courses: " + catalog.getCourses());
        System.out.println("Catalog course count: " + catalog.getCourseCount());
        System.out.println("Returned list: " + catalogCourses);
        System.out.println();
    }
    
    private static void demonstrateEncapsulationImportance() {
        System.out.println("🔸 IMPORTANCE OF ENCAPSULATION");
        System.out.println("   ────────────────────────────");
        
        // Creating a bank account
        BankAccount account = new BankAccount("ACC123456", "David Wilson", 1000.0);
        
        System.out.println("Created bank account:");
        account.displayAccountInfo();
        
        // Performing valid transactions
        System.out.println("\nPerforming transactions:");
        account.deposit(500.0);
        account.withdraw(200.0);
        
        System.out.println("\nFinal account state:");
        account.displayAccountInfo();
        
        // Trying invalid operations
        System.out.println("\nAttempting invalid operations:");
        account.withdraw(2000.0); // Insufficient funds
        
        try {
            account.setBalance(-500.0); // Negative balance
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Access modifiers and their usage                          ║");
        System.out.println("║  • Getter and setter methods with validation                 ║");
        System.out.println("║  • Data hiding techniques to protect object state           ║");
        System.out.println("║  • Immutable objects and defensive copying                   ║");
        System.out.println("║  • Best practices for designing well-encapsulated classes    ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Make fields private by default                            ║");
        System.out.println("║  • Provide public getter methods for access                  ║");
        System.out.println("║  • Use setter methods with validation                        ║");
        System.out.println("║  • Create immutable objects when possible                    ║");
        System.out.println("║  • Use defensive copying for mutable objects                 ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create a class with private fields and public getter/setter methods.
2. Implement validation in a setter method.
3. Create an immutable class with final fields.
`
  }
};