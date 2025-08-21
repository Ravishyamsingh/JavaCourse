import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_1: LessonContent = {
  title: 'Introduction to OOP',
  type: 'lesson',
  duration: '30 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Discover the fundamental concepts of Object-Oriented Programming (OOP) in Java. This lesson introduces the core principles that make Java a powerful language for building complex, maintainable applications. You\'ll learn about classes, objects, encapsulation, inheritance, and polymorphism - the pillars of OOP that enable code reusability, modularity, and extensibility.',
    objectives: [
      'Understand the fundamental concepts of Object-Oriented Programming',
      'Learn about classes and objects as the building blocks of OOP',
      'Master the four pillars of OOP: encapsulation, inheritance, polymorphism, and abstraction',
      'Explore the benefits of OOP over procedural programming',
      'Understand real-world applications of OOP principles',
      'Learn about the relationship between classes and objects',
      'Practice identifying OOP concepts in everyday scenarios'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Object-Oriented Programming
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Building modular, reusable code with OOP principles</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Object-Oriented Programming?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", 
            which contain data in the form of fields (often known as attributes or properties) and code 
            in the form of procedures (often known as methods). OOP aims to implement real-world entities 
            like inheritance, hiding, polymorphism, etc. in programming.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">OOP organizes code around objects rather than functions, making it easier to manage complex programs and promoting code reusability.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Classes and Objects
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📦 Classes</h4>
              <p class="text-green-700">A class is a blueprint or template for creating objects. It defines the properties (fields) and behaviors (methods) that objects of that class will have.</p>
              <div class="bg-gray-800 text-green-400 p-2 rounded mt-2 font-mono text-sm">
                public class Car &#123;<br/>
                &nbsp;&nbsp;String color;<br/>
                &nbsp;&nbsp;String model;<br/>
                &nbsp;&nbsp;void start() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// method implementation<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🚗 Objects</h4>
              <p class="text-purple-700">An object is an instance of a class. It's a concrete entity based on a class, with actual values for the properties defined in the class.</p>
              <div class="bg-gray-800 text-green-400 p-2 rounded mt-2 font-mono text-sm">
                Car myCar = new Car();<br/>
                myCar.color = "Red";<br/>
                myCar.model = "Tesla";
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            The Four Pillars of OOP
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">🔒 Encapsulation</h4>
                <p class="text-blue-700">Bundling data and methods that operate on that data within a single unit (class), and controlling access to that data.</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">🔄 Inheritance</h4>
                <p class="text-green-700">Allowing a class to inherit properties and methods from another class, promoting code reusability.</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">🎭 Polymorphism</h4>
                <p class="text-purple-700">Allowing objects of different types to be treated as instances of the same type through a common interface.</p>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">🧩 Abstraction</h4>
                <p class="text-orange-700">Hiding complex implementation details and showing only the essential features of an object.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Benefits of OOP
          </h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-red-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🔄</div>
              <h4 class="font-bold text-red-800 mb-2">Reusability</h4>
              <p class="text-red-700 text-sm">Code can be reused through inheritance, reducing development time</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🛡️</div>
              <h4 class="font-bold text-blue-800 mb-2">Maintainability</h4>
              <p class="text-blue-700 text-sm">Easier to maintain and modify existing code</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🧩</div>
              <h4 class="font-bold text-green-800 mb-2">Modularity</h4>
              <p class="text-green-700 text-sm">Code is organized in discrete, manageable sections</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Real-World OOP Examples
          </h2>
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🚗 Vehicle System</h4>
              <p class="text-indigo-700">A Vehicle class can be the parent of Car, Truck, and Motorcycle classes, each inheriting common properties but having unique behaviors.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🏦 Banking System</h4>
              <p class="text-purple-700">An Account class can have different types like SavingsAccount and CheckingAccount, each with specific methods and properties.</p>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 OOP Best Practices</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Design classes with a single responsibility</li>
                <li>• Use meaningful class and method names</li>
                <li>• Encapsulate data appropriately</li>
                <li>• Favor composition over inheritance when possible</li>
                <li>• Keep classes small and focused</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't expose internal data unnecessarily</li>
                <li>• Don't create classes with too many responsibilities</li>
                <li>• Don't use inheritance just for code reuse</li>
                <li>• Don't ignore the principles of OOP</li>
                <li>• Don't make everything public</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * OOPIntroductionDemo.java
 * 
 * This comprehensive example demonstrates the fundamental concepts of Object-Oriented Programming:
 * - Class and object creation
 * - Basic encapsulation with getters and setters
 * - Simple inheritance
 * - Method implementation
 * - Object interaction and communication
 * 
 * Run this program to see how OOP concepts work together in practice.
 */

// Base class representing a generic Vehicle
class Vehicle {
    // Protected fields - accessible by subclasses
    protected String brand;
    protected String model;
    protected int year;
    protected boolean isRunning;
    
    // Constructor to initialize vehicle properties
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }
    
    // Method to start the vehicle
    public void start() {
        if (!isRunning) {
            isRunning = true;
            System.out.println(brand + " " + model + " is now running");
        } else {
            System.out.println(brand + " " + model + " is already running");
        }
    }
    
    // Method to stop the vehicle
    public void stop() {
        if (isRunning) {
            isRunning = false;
            System.out.println(brand + " " + model + " has stopped");
        } else {
            System.out.println(brand + " " + model + " is already stopped");
        }
    }
    
    // Getter methods for accessing private/protected data
    public String getBrand() {
        return brand;
    }
    
    public String getModel() {
        return model;
    }
    
    public int getYear() {
        return year;
    }
    
    public boolean isRunning() {
        return isRunning;
    }
    
    // Method to display vehicle information
    public void displayInfo() {
        System.out.println("Vehicle: " + year + " " + brand + " " + model);
        System.out.println("Status: " + (isRunning ? "Running" : "Stopped"));
    }
}

// Car class inheriting from Vehicle
class Car extends Vehicle {
    private int numberOfDoors;
    private String fuelType;
    
    // Constructor for Car
    public Car(String brand, String model, int year, int numberOfDoors, String fuelType) {
        // Call parent constructor
        super(brand, model, year);
        this.numberOfDoors = numberOfDoors;
        this.fuelType = fuelType;
    }
    
    // Method specific to Car
    public void honk() {
        System.out.println("Beep beep! " + brand + " " + model + " is honking");
    }
    
    // Override displayInfo to include car-specific information
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Fuel Type: " + fuelType);
    }
}

// Motorcycle class inheriting from Vehicle
class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    // Constructor for Motorcycle
    public Motorcycle(String brand, String model, int year, boolean hasSidecar) {
        super(brand, model, year);
        this.hasSidecar = hasSidecar;
    }
    
    // Method specific to Motorcycle
    public void wheelie() {
        if (isRunning) {
            System.out.println(brand + " " + model + " is doing a wheelie!");
        } else {
            System.out.println("Start the motorcycle first to do a wheelie");
        }
    }
    
    // Override displayInfo to include motorcycle-specific information
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Sidecar: " + (hasSidecar ? "Yes" : "No"));
    }
}

// Main class to demonstrate OOP concepts
public class OOPIntroductionDemo {
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate class and object creation
        demonstrateClassAndObject();
        
        // Demonstrate inheritance
        demonstrateInheritance();
        
        // Demonstrate polymorphism
        demonstratePolymorphism();
        
        // Demonstrate encapsulation
        demonstrateEncapsulation();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              OBJECT-ORIENTED PROGRAMMING DEMO                ║");
        System.out.println("║        Understanding Classes, Objects, and Inheritance       ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateClassAndObject() {
        System.out.println("🔸 CLASS AND OBJECT CREATION");
        System.out.println("   ──────────────────────────");
        
        // Creating objects (instances) of the Vehicle class
        Vehicle vehicle1 = new Vehicle("Generic", "Vehicle", 2020);
        Vehicle vehicle2 = new Vehicle("Another", "Vehicle", 2021);
        
        System.out.println("Created two Vehicle objects:");
        vehicle1.displayInfo();
        System.out.println();
        vehicle2.displayInfo();
        System.out.println();
    }
    
    private static void demonstrateInheritance() {
        System.out.println("🔸 INHERITANCE DEMONSTRATION");
        System.out.println("   ─────────────────────────");
        
        // Creating objects of subclasses
        Car car = new Car("Toyota", "Camry", 2022, 4, "Gasoline");
        Motorcycle motorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2021, false);
        
        System.out.println("Car object (inherits from Vehicle):");
        car.displayInfo();
        System.out.println();
        
        System.out.println("Motorcycle object (inherits from Vehicle):");
        motorcycle.displayInfo();
        System.out.println();
    }
    
    private static void demonstratePolymorphism() {
        System.out.println("🔸 POLYMORPHISM DEMONSTRATION");
        System.out.println("   ──────────────────────────");
        
        // Polymorphism - treating different objects as instances of the same type
        Vehicle[] vehicles = new Vehicle[3];
        vehicles[0] = new Vehicle("Generic", "Vehicle", 2020);
        vehicles[1] = new Car("Honda", "Civic", 2022, 4, "Gasoline");
        vehicles[2] = new Motorcycle("Yamaha", "MT-07", 2021, false);
        
        System.out.println("Processing vehicles polymorphically:");
        for (Vehicle v : vehicles) {
            v.displayInfo();
            v.start();
            System.out.println();
        }
    }
    
    private static void demonstrateEncapsulation() {
        System.out.println("🔸 ENCAPSULATION DEMONSTRATION");
        System.out.println("   ───────────────────────────");
        
        Car car = new Car("Ford", "Mustang", 2022, 2, "Gasoline");
        
        System.out.println("Accessing data through getter methods (encapsulation):");
        System.out.println("Brand: " + car.getBrand());
        System.out.println("Model: " + car.getModel());
        System.out.println("Year: " + car.getYear());
        
        System.out.println("\nUsing methods to interact with the object:");
        car.start();
        car.honk();
        car.stop();
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Classes and objects as fundamental OOP building blocks    ║");
        System.out.println("║  • Inheritance for code reusability                          ║");
        System.out.println("║  • Polymorphism for flexible object handling                 ║");
        System.out.println("║  • Encapsulation for data protection                         ║");
        System.out.println("║  • Basic class design and implementation                     ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Design classes with clear responsibilities                ║");
        System.out.println("║  • Use inheritance appropriately for code reuse              ║");
        System.out.println("║  • Encapsulate data to protect object integrity              ║");
        System.out.println("║  • Apply polymorphism for flexible designs                   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              OBJECT-ORIENTED PROGRAMMING DEMO                ║
 * ║        Understanding Classes, Objects, and Inheritance       ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 CLASS AND OBJECT CREATION
 *    ──────────────────────────
 * Created two Vehicle objects:
 * Vehicle: 2020 Generic Vehicle
 * Status: Stopped
 * 
 * Vehicle: 2021 Another Vehicle
 * Status: Stopped
 * 
 * 🔸 INHERITANCE DEMONSTRATION
 *    ─────────────────────────
 * Car object (inherits from Vehicle):
 * Vehicle: 2022 Toyota Camry
 * Status: Stopped
 * Doors: 4
 * Fuel Type: Gasoline
 * 
 * Motorcycle object (inherits from Vehicle):
 * Vehicle: 2021 Harley-Davidson Street 750
 * Status: Stopped
 * Sidecar: No
 * 
 * 🔸 POLYMORPHISM DEMONSTRATION
 *    ──────────────────────────
 * Processing vehicles polymorphically:
 * Vehicle: 2020 Generic Vehicle
 * Status: Stopped
 * Generic Vehicle is now running
 * 
 * Vehicle: 2022 Honda Civic
 * Status: Stopped
 * Honda Civic is now running
 * 
 * Vehicle: 2021 Yamaha MT-07
 * Status: Stopped
 * Yamaha MT-07 is now running
 * 
 * 🔸 ENCAPSULATION DEMONSTRATION
 *    ───────────────────────────
 * Accessing data through getter methods (encapsulation):
 * Brand: Ford
 * Model: Mustang
 * Year: 2022
 * 
 * Using methods to interact with the object:
 * Ford Mustang is now running
 * Beep beep! Ford Mustang is honking
 * Ford Mustang has stopped
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Object-Oriented Programming Practice Exercise**
      
      This exercise will help you master the fundamentals of OOP through practical application. Complete all parts to solidify your understanding of classes, objects, and OOP principles.
      
      **Part 1: Animal Kingdom (25 minutes)**
      
      Create a program called \`AnimalKingdom.java\` that models different animals using OOP principles:
      
      **Requirements:**
      - Create a base Animal class with common properties (name, age, species)
      - Implement specific animal classes (Dog, Cat, Bird) that inherit from Animal
      - Add unique methods for each animal type (bark, meow, fly)
      - Include constructors, getters, and setters
      - Demonstrate polymorphism with an array of Animal objects
      
      **Advanced Features:**
      - Add abstract methods in the base class
      - Implement interfaces for special behaviors (Swimmable, Flyable)
      - Create a Zoo class to manage collections of animals
      - Add animal feeding and care functionality
      
      **Part 2: Shape Calculator (30 minutes)**
      
      Create a program called \`ShapeCalculator.java\` that calculates properties of different shapes:
      
      **Requirements:**
      - Create a base Shape class with abstract methods for area and perimeter
      - Implement specific shape classes (Circle, Rectangle, Triangle)
      - Override methods to calculate shape-specific properties
      - Include constructors with appropriate parameters
      - Demonstrate polymorphism with shape collections
      
      **Features to implement:**
      - Encapsulation with private fields and public methods
      - Method overriding for specialized calculations
      - Shape comparison functionality
      - Collection processing with polymorphic behavior
      
      **Part 3: Banking System (35 minutes)**
      
      Create a program called \`BankingSystem.java\` that models a simple banking system:
      
      **Requirements:**
      - Create a base Account class with balance, account number, and owner
      - Implement specific account types (Savings, Checking, Credit)
      - Add account-specific methods (withdraw, deposit, calculate interest)
      - Include transaction history tracking
      - Implement proper validation and error handling
      
      **Advanced Features:**
      - Add inheritance hierarchy for account types
      - Implement interfaces for special account features
      - Create a Bank class to manage multiple accounts
      - Add account statement generation
      - Include overdraft protection logic
      
      **Part 4: Vehicle Fleet (25 minutes)**
      
      Create a program called \`VehicleFleet.java\` that manages a fleet of vehicles:
      
      **Requirements:**
      - Create a base Vehicle class with common properties
      - Implement specific vehicle types (Car, Truck, Motorcycle, Bus)
      - Add vehicle-specific methods (load cargo, carry passengers)
      - Include maintenance tracking functionality
      - Demonstrate polymorphism with vehicle operations
      
      **Features to implement:**
      - Encapsulation with proper access control
      - Inheritance for code reuse
      - Interface implementation for special capabilities
      - Fleet management with collections
      - Vehicle status reporting
      
      **Part 5: Media Library (30 minutes)**
      
      Create a program called \`MediaLibrary.java\` that manages different types of media:
      
      **Requirements:**
      - Create a base Media class with common properties (title, duration, genre)
      - Implement specific media types (Book, Movie, Music, Podcast)
      - Add media-specific methods (read, play, pause)
      - Include rating and review functionality
      - Demonstrate polymorphism with media collections
      
      **Advanced Features:**
      - Add abstract methods in the base class
      - Implement interfaces for special behaviors (Searchable, Playable)
      - Create a Library class to manage media collections
      - Add media recommendation engine
      - Include user preference tracking
      
      **Part 6: OOP Design Challenge (25 minutes)**
      
      Create a program called \`OOPDesignChallenge.java\` that demonstrates advanced OOP concepts:
      
      **Requirements:**
      - Choose a complex real-world system (school, hospital, restaurant)
      - Design a complete class hierarchy with proper relationships
      - Implement all four pillars of OOP (encapsulation, inheritance, polymorphism, abstraction)
      - Include at least one abstract class and one interface
      - Demonstrate composition over inheritance where appropriate
      
      **Features to implement:**
      - Proper class design with single responsibility
      - Appropriate use of access modifiers
      - Method overriding and overloading
      - Exception handling with custom exceptions
      - Documentation with meaningful comments
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`AnimalKingdom.java\` - Animal modeling system
      2. \`ShapeCalculator.java\` - Shape calculation program
      3. \`BankingSystem.java\` - Banking system simulation
      4. \`VehicleFleet.java\` - Vehicle fleet management
      5. \`MediaLibrary.java\` - Media library system
      6. \`OOPDesignChallenge.java\` - Custom OOP design
      7. \`README.md\` - Documentation explaining each program
      8. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of classes and objects
      - ✅ Proper use of inheritance for code reusability
      - ✅ Encapsulation with appropriate access control
      - ✅ Polymorphism with method overriding
      - ✅ Abstract classes and interfaces where appropriate
      - ✅ Clean, readable code with proper naming conventions
      - ✅ Understanding of OOP principles and best practices
      
      **💡 Bonus Challenges:**
      
      1. **Design Patterns:** Implement common design patterns (Singleton, Factory, Observer)
      2. **Advanced Inheritance:** Create complex inheritance hierarchies
      3. **Error Handling:** Add comprehensive exception handling
      4. **User Interface:** Create simple text-based interfaces
      5. **Performance Optimization:** Optimize object creation and method calls
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master the fundamentals of Object-Oriented Programming
      - Understand how to design and implement class hierarchies
      - Learn to apply encapsulation, inheritance, and polymorphism
      - Practice creating abstract classes and interfaces
      - Develop skills in modeling real-world systems with code
      - Build confidence in using OOP principles for complex applications
      
      This comprehensive exercise provides hands-on experience with the foundation of modern Java development!
    `
  }
};