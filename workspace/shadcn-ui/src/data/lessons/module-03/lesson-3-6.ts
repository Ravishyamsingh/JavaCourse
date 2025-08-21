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

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                  ENCAPSULATION DEMO                         ║
 * ║        Understanding Data Protection and Integrity          ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 BASIC ENCAPSULATION
 *    ─────────────────────
 * Created student:
 * Student Information:
 *   Name: Alice Johnson
 *   Age: 20
 *   GPA: 3.75
 *   Courses: []
 * 
 * Accessing data through getters:
 * Name: Alice Johnson
 * Age: 20
 * GPA: 3.75
 * 
 * Courses: [Mathematics, Physics, Chemistry]
 * Course count: 3
 * 
 * 🔸 SETTER VALIDATION
 *    ──────────────────
 * Original student:
 * Student Information:
 *   Name: Bob Smith
 *   Age: 19
 *   GPA: 3.5
 *   Courses: []
 * 
 * Updating with valid data:
 * Student Information:
 *   Name: Robert Smith
 *   Age: 20
 *   GPA: 3.8
 *   Courses: []
 * 
 * Attempting invalid updates:
 * Caught exception: Age must be between 0 and 150
 * Caught exception: GPA must be between 0.0 and 4.0
 * 
 * 🔸 IMMUTABLE OBJECTS
 *    ──────────────────
 * Created immutable person:
 * ImmutablePerson{name='Charlie Brown', age=25}
 * 
 * Accessing data:
 * Name: Charlie Brown
 * Age: 25
 * 
 * Immutable person object cannot be modified after creation
 * 
 * 🔸 DEFENSIVE COPYING
 *    ──────────────────
 * Initial catalog:
 * Courses: [Biology, History]
 * Course count: 2
 * 
 * After modifying original list:
 * Catalog courses: [Biology, History]
 * Catalog course count: 2
 * Original list: [Biology, History, Geography]
 * 
 * After modifying returned list:
 * Catalog courses: [Biology, History]
 * Catalog course count: 2
 * Returned list: [Biology, History, Art]
 * 
 * 🔸 IMPORTANCE OF ENCAPSULATION
 *    ────────────────────────────
 * Created bank account:
 * Account Information:
 *   Account Number: ACC123456
 *   Owner: David Wilson
 *   Balance: $1000.0
 * 
 * Performing transactions:
 * Deposited $500.0. New balance: $1500.0
 * Withdrew $200.0. New balance: $1300.0
 * 
 * Final account state:
 * Account Information:
 *   Account Number: ACC123456
 *   Owner: David Wilson
 *   Balance: $1300.0
 * 
 * Attempting invalid operations:
 * Insufficient funds
 * Caught exception: Balance cannot be negative
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Encapsulation Practice Exercise**
      
      This exercise will help you master encapsulation through practical application. Complete all parts to solidify your understanding of data protection and integrity in Java.
      
      **Part 1: Library Management System (30 minutes)**
      
      Create a program called \`LibraryEncapsulation.java\` that models a library management system with proper encapsulation:
      
      **Requirements:**
      - Create a Book class with private fields for title, author, ISBN, and availability status
      - Implement getter methods for all fields
      - Create setter methods with validation for ISBN format and title/author length
      - Include methods for checking out and returning books
      - Implement proper encapsulation techniques to protect object state
      
      **Advanced Features:**
      - Add a Patron class with private fields and controlled access
      - Implement a Library class to manage collections of books and patrons
      - Include overdue tracking with calculated fees
      - Add search functionality with controlled access to book information
      - Implement defensive copying for collections
      
      **Part 2: Employee Management System (35 minutes)**
      
      Create a program called \`EmployeeEncapsulation.java\` that models an employee management system:
      
      **Requirements:**
      - Create an Employee class with private fields for name, ID, salary, and department
      - Implement getter methods for all fields
      - Create setter methods with validation for salary range and ID format
      - Include methods for salary adjustments and department changes
      - Implement proper encapsulation techniques to protect sensitive data
      
      **Features to implement:**
      - Validation in setter methods for business rules
      - Immutable objects for employee IDs
      - Defensive copying for mutable objects
      - Controlled access to sensitive information
      - Proper error handling for invalid operations
      
      **Part 3: Banking System with Encapsulation (40 minutes)**
      
      Create a program called \`BankingEncapsulation.java\` that models a banking system:
      
      **Requirements:**
      - Create an Account class with private fields for account number, balance, and owner
      - Implement getter methods for account information
      - Create methods for deposits, withdrawals, and transfers with validation
      - Include transaction history with controlled access
      - Implement proper encapsulation techniques to protect financial data
      
      **Advanced Features:**
      - Add different account types (Savings, Checking) with specific rules
      - Implement interest calculation with controlled access
      - Include overdraft protection with validation
      - Add account statement generation with data protection
      - Implement immutable transaction records
      
      **Part 4: Student Grade Management (25 minutes)**
      
      Create a program called \`GradeEncapsulation.java\` that manages student grades:
      
      **Requirements:**
      - Create a Student class with private fields for name, ID, and grades
      - Implement getter methods for all fields
      - Create methods for adding and removing grades with validation
      - Include GPA calculation with controlled access
      - Implement proper encapsulation techniques to protect academic data
      
      **Features to implement:**
      - Validation in grade setting methods
      - Immutable student IDs
      - Defensive copying for grade collections
      - Controlled access to academic information
      - Proper error handling for invalid grades
      
      **Part 5: Vehicle Fleet Management (30 minutes)**
      
      Create a program called \`VehicleEncapsulation.java\` that manages a vehicle fleet:
      
      **Requirements:**
      - Create a Vehicle class with private fields for make, model, year, and mileage
      - Implement getter methods for all fields
      - Create setter methods with validation for year range and mileage
      - Include methods for maintenance tracking and status updates
      - Implement proper encapsulation techniques to protect vehicle data
      
      **Advanced Features:**
      - Add specific vehicle types (Car, Truck, Motorcycle) with unique fields
      - Implement insurance tracking with controlled access
      - Include rental history with data protection
      - Add fuel efficiency calculation with validation
      - Implement immutable vehicle identification numbers
      
      **Part 6: Advanced Encapsulation Challenge (35 minutes)**
      
      Create a program called \`AdvancedEncapsulationChallenge.java\` that demonstrates advanced encapsulation concepts:
      
      **Requirements:**
      - Design a complex system of your choice with proper encapsulation
      - Implement immutable objects where appropriate
      - Use defensive copying for mutable collections
      - Include comprehensive validation in setter methods
      - Demonstrate best practices for data protection
      
      **Features to implement:**
      - Multiple levels of encapsulation
      - Immutable objects with builder patterns
      - Defensive copying with deep cloning
      - Validation with custom exceptions
      - Controlled access to sensitive information
      - Thread-safe encapsulation techniques
      
      **Part 7: Encapsulation Best Practices (25 minutes)**
      
      Create a program called \`EncapsulationBestPractices.java\` that demonstrates encapsulation best practices:
      
      **Requirements:**
      - Implement proper access modifiers for all fields and methods
      - Use getter and setter methods with appropriate validation
      - Create immutable objects for data that shouldn't change
      - Implement defensive copying for mutable objects
      - Include comprehensive error handling for invalid operations
      
      **Features to implement:**
      - Proper use of private, protected, and public access modifiers
      - Validation in setter methods for business rules
      - Immutable objects with final fields
      - Defensive copying for collections and mutable objects
      - Proper documentation of encapsulation design decisions
      - Testing of encapsulation behavior
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`LibraryEncapsulation.java\` - Library management implementation
      2. \`EmployeeEncapsulation.java\` - Employee management system
      3. \`BankingEncapsulation.java\` - Banking system with encapsulation
      4. \`GradeEncapsulation.java\` - Student grade management
      5. \`VehicleEncapsulation.java\` - Vehicle fleet management
      6. \`AdvancedEncapsulationChallenge.java\` - Custom advanced implementation
      7. \`EncapsulationBestPractices.java\` - Best practices demonstration
      8. \`README.md\` - Documentation explaining each program
      9. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct use of access modifiers to protect object state
      - ✅ Proper getter and setter methods with validation
      - ✅ Data hiding techniques to prevent direct field access
      - ✅ Immutable objects where appropriate
      - ✅ Defensive copying for mutable objects
      - ✅ Comprehensive validation in setter methods
      - ✅ Clean, readable code with appropriate comments
      - ✅ Well-encapsulated class design
      
      **💡 Bonus Challenges:**
      
      1. **Design Patterns:** Implement builder or factory patterns with encapsulation
      2. **Advanced Encapsulation:** Create thread-safe encapsulated objects
      3. **Error Handling:** Add comprehensive exception handling with custom exceptions
      4. **Performance Optimization:** Profile and optimize encapsulation techniques
      5. **Security:** Implement additional security measures for sensitive data
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master access modifiers and their appropriate usage
      - Learn to implement getter and setter methods with validation
      - Practice data hiding techniques to protect object state
      - Develop skills in creating immutable objects
      - Build confidence in using defensive copying
      - Gain experience with comprehensive validation techniques
      - Understand best practices for well-encapsulated class design
      
      This comprehensive exercise provides hands-on experience with one of Java's most important OOP principles!
    `
  }
};