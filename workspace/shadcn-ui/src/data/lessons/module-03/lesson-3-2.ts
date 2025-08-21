import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_2: LessonContent = {
  title: 'Classes and Objects',
  type: 'coding',
  duration: '35 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Master the fundamentals of classes and objects in Java, the building blocks of Object-Oriented Programming. This lesson covers class definition, object instantiation, field and method declaration, access modifiers, and the relationship between classes and objects. You\'ll learn to create well-structured classes with proper encapsulation and understand how objects represent real-world entities in code.',
    objectives: [
      'Understand the relationship between classes and objects',
      'Learn to define classes with fields and methods',
      'Master object instantiation and initialization',
      'Work with different access modifiers (public, private, protected, package)',
      'Practice creating and using class instances',
      'Understand instance vs static members',
      'Learn about the this keyword and its usage'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Classes and Objects in Java
        </h1>
        <p class="mt-3 text-green-100 text-lg">The fundamental building blocks of Object-Oriented Programming</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Classes and Objects
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">🏠 Classes</h4>
              <p class="text-green-700">A class is a blueprint or template that defines the properties (fields) and behaviors (methods) that objects of that class will have. It's like a cookie cutter for creating objects.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🍪 Objects</h4>
              <p class="text-blue-700">An object is an instance of a class. It's a concrete entity created from a class blueprint, with actual values for the properties defined in the class.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Class Structure and Syntax
          </h2>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Basic Class Structure:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public class ClassName &#123;<br/>
                &nbsp;&nbsp;// Fields (instance variables)<br/>
                &nbsp;&nbsp;private dataType fieldName;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Constructors<br/>
                &nbsp;&nbsp;public ClassName() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// constructor code<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Methods<br/>
                &nbsp;&nbsp;public returnType methodName(parameters) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// method code<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Fields and Methods
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">📝 Fields (Instance Variables)</h4>
              <p class="text-orange-700">Fields represent the state or data of an object. Each object has its own copy of instance variables.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                private String name;<br/>
                private int age;<br/>
                private double salary;
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚙️ Methods (Behaviors)</h4>
              <p class="text-red-700">Methods define the behaviors or actions that an object can perform. They operate on the object's fields.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public void setName(String name) &#123;<br/>
                &nbsp;&nbsp;this.name = name;<br/>
                &#125;<br/>
                <br/>
                public String getName() &#123;<br/>
                &nbsp;&nbsp;return name;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
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

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Object Instantiation
          </h2>
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Creating Objects:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                // Declaration<br/>
                ClassName objectName;<br/>
                <br/>
                // Instantiation<br/>
                objectName = new ClassName();<br/>
                <br/>
                // Or combined<br/>
                ClassName objectName = new ClassName();
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            The this Keyword
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Usage of this:</h4>
              <ul class="space-y-2 text-red-700">
                <li>• Refer to current object instance</li>
                <li>• Differentiate between fields and parameters</li>
                <li>• Call one constructor from another</li>
                <li>• Return the current object instance</li>
              </ul>
            </div>
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                public class Person &#123;<br/>
                &nbsp;&nbsp;private String name;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public Person(String name) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name; // this.name refers to field<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Classes and Objects</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use meaningful class and field names</li>
                <li>• Encapsulate data with appropriate access modifiers</li>
                <li>• Keep classes focused on a single responsibility</li>
                <li>• Initialize fields properly in constructors</li>
                <li>• Use the this keyword to avoid naming conflicts</li>
                <li>• Document classes and methods with comments</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't make all fields public</li>
                <li>• Don't create classes with too many responsibilities</li>
                <li>• Don't ignore proper initialization of objects</li>
                <li>• Don't use meaningless variable names</li>
                <li>• Don't expose internal implementation details unnecessarily</li>
                <li>• Don't forget to validate input parameters</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ClassesAndObjectsDemo.java
 * 
 * This comprehensive example demonstrates classes and objects in Java:
 * - Class definition with fields and methods
 * - Object instantiation and initialization
 * - Access modifiers and encapsulation
 * - Constructor overloading
 * - The this keyword usage
 * - Instance vs static members
 * - Object interaction and communication
 * 
 * Run this program to see how classes and objects work in practice.
 */

// Example class demonstrating various class concepts
class Student {
    // Instance fields (each object has its own copy)
    private String name;
    private int age;
    private String studentId;
    private double gpa;
    
    // Static field (shared by all instances)
    private static int totalStudents = 0;
    
    // Default constructor
    public Student() {
        this("Unknown", 18, "S0000", 0.0);
        System.out.println("Default constructor called for " + name);
    }
    
    // Parameterized constructor
    public Student(String name, int age, String studentId, double gpa) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        this.gpa = gpa;
        totalStudents++;
        System.out.println("Parameterized constructor called for " + name);
    }
    
    // Overloaded constructor
    public Student(String name, String studentId) {
        this(name, 18, studentId, 0.0);
        System.out.println("Overloaded constructor called for " + name);
    }
    
    // Getter methods (accessors)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public String getStudentId() {
        return studentId;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Setter methods (mutators)
    public void setName(String name) {
        this.name = name;
    }
    
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age: " + age);
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        } else {
            System.out.println("Invalid GPA: " + gpa);
        }
    }
    
    // Instance methods
    public void displayInfo() {
        System.out.println("Student Information:");
        System.out.println("  Name: " + name);
        System.out.println("  Age: " + age);
        System.out.println("  Student ID: " + studentId);
        System.out.println("  GPA: " + gpa);
    }
    
    public void study(String subject) {
        System.out.println(name + " is studying " + subject);
    }
    
    public void takeExam(String subject) {
        System.out.println(name + " is taking an exam in " + subject);
    }
    
    // Static method (belongs to the class, not instances)
    public static int getTotalStudents() {
        return totalStudents;
    }
    
    // Method to demonstrate this keyword
    public Student updateGpa(double newGpa) {
        setGpa(newGpa);
        return this; // Return current object instance
    }
    
    // toString method for string representation
    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + 
               ", studentId='" + studentId + "', gpa=" + gpa + "}";
    }
}

// Another example class to demonstrate object interaction
class Course {
    private String courseName;
    private String courseCode;
    private Student[] enrolledStudents;
    private int studentCount;
    
    public Course(String courseName, String courseCode, int maxStudents) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.enrolledStudents = new Student[maxStudents];
        this.studentCount = 0;
    }
    
    public boolean enrollStudent(Student student) {
        if (studentCount < enrolledStudents.length) {
            enrolledStudents[studentCount] = student;
            studentCount++;
            System.out.println(student.getName() + " enrolled in " + courseName);
            return true;
        } else {
            System.out.println("Course is full. Cannot enroll " + student.getName());
            return false;
        }
    }
    
    public void displayEnrolledStudents() {
        System.out.println("\nEnrolled Students in " + courseName + " (" + courseCode + "):");
        for (int i = 0; i < studentCount; i++) {
            System.out.println("  " + (i + 1) + ". " + enrolledStudents[i].getName());
        }
    }
    
    public int getStudentCount() {
        return studentCount;
    }
}

// Main class to demonstrate classes and objects
public class ClassesAndObjectsDemo {
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate object creation and initialization
        demonstrateObjectCreation();
        
        // Demonstrate constructor overloading
        demonstrateConstructors();
        
        // Demonstrate method usage and object interaction
        demonstrateMethods();
        
        // Demonstrate encapsulation
        demonstrateEncapsulation();
        
        // Demonstrate static members
        demonstrateStaticMembers();
        
        // Demonstrate object relationships
        demonstrateObjectRelationships();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              CLASSES AND OBJECTS DEMO                        ║");
        System.out.println("║        Understanding Java Classes and Object Creation        ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateObjectCreation() {
        System.out.println("🔸 OBJECT CREATION AND INITIALIZATION");
        System.out.println("   ───────────────────────────────────");
        
        // Creating objects using different constructors
        Student student1 = new Student(); // Default constructor
        Student student2 = new Student("Alice Johnson", 20, "S12345", 3.75); // Parameterized constructor
        Student student3 = new Student("Bob Smith", "S67890"); // Overloaded constructor
        
        System.out.println();
        student1.displayInfo();
        System.out.println();
        student2.displayInfo();
        System.out.println();
        student3.displayInfo();
        System.out.println();
    }
    
    private static void demonstrateConstructors() {
        System.out.println("🔸 CONSTRUCTOR OVERLOADING");
        System.out.println("   ────────────────────────");
        
        // Different ways to create Student objects
        Student student1 = new Student();
        Student student2 = new Student("Charlie Brown", 19, "S11111", 3.85);
        Student student3 = new Student("Diana Prince", "S22222");
        
        System.out.println("All students created successfully!");
        System.out.println();
    }
    
    private static void demonstrateMethods() {
        System.out.println("🔸 METHOD USAGE AND OBJECT INTERACTION");
        System.out.println("   ────────────────────────────────────");
        
        Student student = new Student("Emma Watson", 21, "S33333", 3.9);
        
        // Using getter methods
        System.out.println("Student name: " + student.getName());
        System.out.println("Student age: " + student.getAge());
        
        // Using setter methods
        student.setAge(22);
        System.out.println("Updated age: " + student.getAge());
        
        // Using behavior methods
        student.study("Computer Science");
        student.takeExam("Java Programming");
        System.out.println();
    }
    
    private static void demonstrateEncapsulation() {
        System.out.println("🔸 ENCAPSULATION DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        Student student = new Student("Frank Castle", 25, "S44444", 3.5);
        
        System.out.println("Initial student info:");
        student.displayInfo();
        
        // Attempting to set invalid values (encapsulation protects data)
        System.out.println("\nAttempting to set invalid values:");
        student.setAge(-5); // Invalid age
        student.setGpa(5.0); // Invalid GPA
        
        System.out.println("\nStudent info after invalid attempts:");
        student.displayInfo();
        
        // Setting valid values
        student.setAge(26);
        student.setGpa(3.8);
        
        System.out.println("\nStudent info after valid updates:");
        student.displayInfo();
        System.out.println();
    }
    
    private static void demonstrateStaticMembers() {
        System.out.println("🔸 STATIC MEMBERS DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        System.out.println("Total students created: " + Student.getTotalStudents());
        
        // Create more students
        Student student1 = new Student("Grace Hopper", 23, "S55555", 4.0);
        Student student2 = new Student("Alan Turing", 24, "S66666", 3.95);
        
        System.out.println("Total students after creating more: " + Student.getTotalStudents());
        System.out.println();
    }
    
    private static void demonstrateObjectRelationships() {
        System.out.println("🔸 OBJECT RELATIONSHIPS DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        // Create course and students
        Course javaCourse = new Course("Java Programming", "CS101", 3);
        Student student1 = new Student("John Doe", 20, "S77777", 3.2);
        Student student2 = new Student("Jane Smith", 19, "S88888", 3.8);
        Student student3 = new Student("Mike Johnson", 21, "S99999", 3.5);
        Student student4 = new Student("Sarah Wilson", 20, "S00000", 3.9);
        
        // Enroll students in course
        javaCourse.enrollStudent(student1);
        javaCourse.enrollStudent(student2);
        javaCourse.enrollStudent(student3);
        javaCourse.enrollStudent(student4); // This should fail as course is full
        
        // Display enrolled students
        javaCourse.displayEnrolledStudents();
        
        System.out.println("Total enrolled students: " + javaCourse.getStudentCount());
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Class definition with fields and methods                  ║");
        System.out.println("║  • Object instantiation with different constructors          ║");
        System.out.println("║  • Access modifiers and encapsulation                        ║");
        System.out.println("║  • The this keyword for object reference                     ║");
        System.out.println("║  • Instance vs static members                                ║");
        System.out.println("║  • Object interaction and relationships                      ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Design classes with clear responsibilities                ║");
        System.out.println("║  • Use appropriate access modifiers for encapsulation        ║");
        System.out.println("║  • Initialize objects properly in constructors               ║");
        System.out.println("║  • Validate input data in setter methods                     ║");
        System.out.println("║  • Keep classes focused and well-organized                   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              CLASSES AND OBJECTS DEMO                        ║
 * ║        Understanding Java Classes and Object Creation        ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 OBJECT CREATION AND INITIALIZATION
 *    ───────────────────────────────────
 * Parameterized constructor called for Unknown
 * Default constructor called for Unknown
 * Parameterized constructor called for Alice Johnson
 * Overloaded constructor called for Bob Smith
 * Parameterized constructor called for Bob Smith
 * 
 * Student Information:
 *   Name: Unknown
 *   Age: 18
 *   Student ID: S0000
 *   GPA: 0.0
 * 
 * Student Information:
 *   Name: Alice Johnson
 *   Age: 20
 *   Student ID: S12345
 *   GPA: 3.75
 * 
 * Student Information:
 *   Name: Bob Smith
 *   Age: 18
 *   Student ID: S67890
 *   GPA: 0.0
 * 
 * 🔸 CONSTRUCTOR OVERLOADING
 *    ────────────────────────
 * Parameterized constructor called for Unknown
 * Default constructor called for Unknown
 * Parameterized constructor called for Charlie Brown
 * Overloaded constructor called for Diana Prince
 * Parameterized constructor called for Diana Prince
 * All students created successfully!
 * 
 * 🔸 METHOD USAGE AND OBJECT INTERACTION
 *    ────────────────────────────────────
 * Parameterized constructor called for Emma Watson
 * Student name: Emma Watson
 * Student age: 21
 * Updated age: 22
 * Emma Watson is studying Computer Science
 * Emma Watson is taking an exam in Java Programming
 * 
 * 🔸 ENCAPSULATION DEMONSTRATION
 *    ────────────────────────────
 * Parameterized constructor called for Frank Castle
 * Initial student info:
 * Student Information:
 *   Name: Frank Castle
 *   Age: 25
 *   Student ID: S44444
 *   GPA: 3.5
 * 
 * Attempting to set invalid values:
 * Invalid age: -5
 * Invalid GPA: 5.0
 * 
 * Student info after invalid attempts:
 * Student Information:
 *   Name: Frank Castle
 *   Age: 25
 *   Student ID: S44444
 *   GPA: 3.5
 * 
 * Student info after valid updates:
 * Student Information:
 *   Name: Frank Castle
 *   Age: 26
 *   Student ID: S44444
 *   GPA: 3.8
 * 
 * 🔸 STATIC MEMBERS DEMONSTRATION
 *    ────────────────────────────
 * Total students created: 7
 * Parameterized constructor called for Grace Hopper
 * Parameterized constructor called for Alan Turing
 * Total students after creating more: 9
 * 
 * 🔸 OBJECT RELATIONSHIPS DEMONSTRATION
 *    ──────────────────────────────────
 * Parameterized constructor called for John Doe
 * Parameterized constructor called for Jane Smith
 * Parameterized constructor called for Mike Johnson
 * Parameterized constructor called for Sarah Wilson
 * John Doe enrolled in Java Programming
 * Jane Smith enrolled in Java Programming
 * Mike Johnson enrolled in Java Programming
 * Course is full. Cannot enroll Sarah Wilson
 * 
 * Enrolled Students in Java Programming (CS101):
 *   1. John Doe
 *   2. Jane Smith
 *   3. Mike Johnson
 * Total enrolled students: 3
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Classes and Objects Practice Exercise**
      
      This exercise will help you master classes and objects through practical application. Complete all parts to solidify your understanding of Java class design and object creation.
      
      **Part 1: Library Management System (30 minutes)**
      
      Create a program called \`LibrarySystem.java\` that models a library management system:
      
      **Requirements:**
      - Create a Book class with fields for title, author, ISBN, and availability status
      - Implement a Library class to manage a collection of books
      - Add methods for adding books, checking out books, and returning books
      - Include search functionality by title, author, or ISBN
      - Implement proper encapsulation with getters and setters
      
      **Advanced Features:**
      - Add due dates for borrowed books
      - Implement late fee calculation
      - Create a Patron class to represent library users
      - Add reservation system for checked-out books
      - Include book categories and filtering
      
      **Part 2: Bank Account Management (35 minutes)**
      
      Create a program called \`BankAccountSystem.java\` that models different types of bank accounts:
      
      **Requirements:**
      - Create a base Account class with common fields and methods
      - Implement specific account types (Savings, Checking, Credit)
      - Add account-specific features (interest calculation, overdraft protection)
      - Include transaction history tracking
      - Implement proper validation for deposits and withdrawals
      
      **Features to implement:**
      - Encapsulation with private fields and public methods
      - Constructor overloading for different initialization scenarios
      - Method overriding for account-specific behaviors
      - Static fields for bank-wide settings (interest rates, fees)
      - Input validation with appropriate error handling
      
      **Part 3: Vehicle Rental System (40 minutes)**
      
      Create a program called \`VehicleRentalSystem.java\` that manages vehicle rentals:
      
      **Requirements:**
      - Create a Vehicle class hierarchy with Car, Truck, Motorcycle subclasses
      - Implement a Rental class to track rental agreements
      - Add customer management with a Customer class
      - Include pricing calculation based on vehicle type and rental duration
      - Implement availability checking and reservation system
      
      **Advanced Features:**
      - Add insurance options and pricing tiers
      - Implement late return penalties
      - Create a Fleet class to manage vehicle inventory
      - Add maintenance scheduling and tracking
      - Include payment processing simulation
      
      **Part 4: Student Grade Tracker (25 minutes)**
      
      Create a program called \`GradeTracker.java\` that tracks student grades:
      
      **Requirements:**
      - Create a Student class with fields for name, ID, and grades
      - Implement a Course class to represent academic courses
      - Add grade calculation methods (GPA, letter grades)
      - Include assignment and exam tracking
      - Implement grade report generation
      
      **Features to implement:**
      - Encapsulation with appropriate access modifiers
      - Collection management for multiple grades per course
      - Grade validation and error handling
      - Statistical analysis (average, highest, lowest grades)
      - Report formatting and display options
      
      **Part 5: Employee Management System (35 minutes)**
      
      Create a program called \`EmployeeManagement.java\` that models an employee management system:
      
      **Requirements:**
      - Create an Employee base class with common fields and methods
      - Implement specific employee types (Manager, Developer, Designer)
      - Add payroll calculation with different salary structures
      - Include benefits tracking (health insurance, vacation days)
      - Implement performance review functionality
      
      **Advanced Features:**
      - Add department management with a Department class
      - Implement hierarchical relationships (manager-subordinate)
      - Create a Company class to manage multiple departments
      - Add employee search and filtering capabilities
      - Include promotion and role change functionality
      
      **Part 6: E-Commerce Product Catalog (30 minutes)**
      
      Create a program called \`ProductCatalog.java\` that manages an e-commerce product catalog:
      
      **Requirements:**
      - Create a Product base class with common fields and methods
      - Implement specific product types (Electronics, Clothing, Books)
      - Add inventory management with stock tracking
      - Include pricing with discounts and promotions
      - Implement product search and filtering
      
      **Features to implement:**
      - Encapsulation with proper data hiding
      - Constructor overloading for different product types
      - Method overriding for product-specific behaviors
      - Collection management for product categories
      - Input validation for product information
      
      **Part 7: Advanced Class Design Challenge (25 minutes)**
      
      Create a program called \`AdvancedClassDesign.java\` that demonstrates advanced class concepts:
      
      **Requirements:**
      - Design a complex system of your choice (hospital, university, etc.)
      - Implement proper class hierarchies with inheritance
      - Use the this keyword appropriately for object references
      - Include both instance and static members
      - Demonstrate object relationships and interactions
      
      **Features to implement:**
      - Proper encapsulation with access modifiers
      - Constructor chaining with this() calls
      - Static factory methods for object creation
      - Object composition for complex relationships
      - Comprehensive error handling and validation
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`LibrarySystem.java\` - Library management implementation
      2. \`BankAccountSystem.java\` - Bank account management
      3. \`VehicleRentalSystem.java\` - Vehicle rental system
      4. \`GradeTracker.java\` - Student grade tracking
      5. \`EmployeeManagement.java\` - Employee management system
      6. \`ProductCatalog.java\` - E-commerce product catalog
      7. \`AdvancedClassDesign.java\` - Custom advanced class design
      8. \`README.md\` - Documentation explaining each program
      9. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of classes with fields and methods
      - ✅ Proper object instantiation with different constructors
      - ✅ Appropriate use of access modifiers for encapsulation
      - ✅ Effective use of the this keyword
      - ✅ Understanding of instance vs static members
      - ✅ Clean, readable code with proper naming conventions
      - ✅ Input validation and error handling
      - ✅ Object interaction and relationship management
      
      **💡 Bonus Challenges:**
      
      1. **Design Patterns:** Implement singleton or factory patterns
      2. **Advanced Inheritance:** Create complex inheritance hierarchies
      3. **Memory Management:** Optimize object creation and usage
      4. **User Interface:** Create simple text-based interfaces
      5. **Performance Optimization:** Profile and optimize class methods
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master class definition with fields and methods
      - Understand object instantiation and initialization
      - Learn to apply encapsulation with access modifiers
      - Practice using the this keyword effectively
      - Develop skills in class hierarchy design
      - Build confidence in creating robust class implementations
      - Gain experience with object interaction and relationships
      
      This comprehensive exercise provides hands-on experience with the fundamental building blocks of Java OOP!
    `
  }
};