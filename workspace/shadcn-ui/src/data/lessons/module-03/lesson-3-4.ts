import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_4: LessonContent = {
  title: 'Inheritance',
  type: 'lesson',
  duration: '45 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Master inheritance in Java, a fundamental OOP concept that enables code reusability and hierarchical relationships between classes. This lesson covers class inheritance, method overriding, the super keyword, access modifiers in inheritance, and advanced inheritance concepts. You\'ll learn to design class hierarchies that promote code reuse while maintaining flexibility and extensibility.',
    objectives: [
      'Understand the concept and benefits of inheritance',
      'Learn to implement class inheritance with the extends keyword',
      'Master method overriding and the @Override annotation',
      'Work with the super keyword for parent class access',
      'Understand access modifiers and their behavior in inheritance',
      'Learn about constructor chaining in inheritance hierarchies',
      'Practice designing effective class hierarchies'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Inheritance in Java
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Creating class hierarchies for code reuse and extensibility</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Inheritance
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Inheritance is a mechanism in which one class acquires the properties (fields) and behaviors (methods) 
            of another class. The class that inherits is called the subclass (or child class), and the class being 
            inherited from is called the superclass (or parent class). Inheritance promotes code reusability and 
            establishes "is-a" relationships between classes.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">Inheritance allows you to create new classes based on existing classes, inheriting their fields and methods while adding or overriding functionality as needed.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Implementing Inheritance
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">In Java, inheritance is implemented using the extends keyword. A class can only extend one superclass (single inheritance).</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                class SubclassName extends SuperclassName &#123;<br/>
                &nbsp;&nbsp;// Additional fields and methods<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                // Superclass<br/>
                public class Animal &#123;<br/>
                &nbsp;&nbsp;protected String name;<br/>
                &nbsp;&nbsp;protected int age;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public Animal(String name, int age) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.age = age;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public void eat() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(name + " is eating");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;<br/>
                <br/>
                // Subclass<br/>
                public class Dog extends Animal &#123;<br/>
                &nbsp;&nbsp;private String breed;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public Dog(String name, int age, String breed) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;super(name, age); // Call parent constructor<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.breed = breed;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public void bark() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(name + " is barking");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Method Overriding
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Method overriding allows a subclass to provide a specific implementation of a method already defined in its superclass.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Rules for Overriding:</h4>
                <ul class="space-y-2 text-green-700">
                  <li>• Method signature must be identical</li>
                  <li>• Return type must be same or covariant</li>
                  <li>• Access modifier cannot be more restrictive</li>
                  <li>• Cannot override static or final methods</li>
                  <li>• Use @Override annotation for safety</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  // In superclass<br/>
                  public void makeSound() &#123;<br/>
                  &nbsp;&nbsp;System.out.println("Animal makes a sound");<br/>
                  &#125;<br/>
                  <br/>
                  // In subclass<br/>
                  @Override<br/>
                  public void makeSound() &#123;<br/>
                  &nbsp;&nbsp;System.out.println("Dog barks");<br/>
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            The super Keyword
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Uses of super:</h4>
              <ul class="space-y-2 text-orange-700">
                <li>• Call parent class constructors</li>
                <li>• Access parent class methods</li>
                <li>• Access parent class fields</li>
                <li>• Differentiate between parent and child members</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                public class Cat extends Animal &#123;<br/>
                &nbsp;&nbsp;private String color;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;public Cat(String name, int age, String color) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;super(name, age); // Call parent constructor<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.color = color;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;@Override<br/>
                &nbsp;&nbsp;public void eat() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;super.eat(); // Call parent method<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Cat eats fish");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Access Modifiers in Inheritance
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-purple-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Modifier</th>
                  <th class="text-left p-3 font-bold border-b">Same Class</th>
                  <th class="text-left p-3 font-bold border-b">Same Package</th>
                  <th class="text-left p-3 font-bold border-b">Subclass</th>
                  <th class="text-left p-3 font-bold border-b">Different Package</th>
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
                  <td class="p-3">✓</td>
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

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Constructor Chaining in Inheritance
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">In inheritance, constructors are called in a chain from the superclass to the subclass.</p>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Constructor Call Order:</h4>
              <ol class="list-decimal list-inside space-y-2 text-red-700">
                <li>Superclass constructor is called first</li>
                <li>Subclass constructor is called second</li>
                <li>If no explicit super() call, default super() is called</li>
                <li>Constructor chaining continues up the hierarchy</li>
              </ol>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Inheritance</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use inheritance for "is-a" relationships</li>
                <li>• Keep inheritance hierarchies shallow when possible</li>
                <li>• Use the @Override annotation for overridden methods</li>
                <li>• Make fields private and provide protected accessors</li>
                <li>• Design for extension by making methods overridable</li>
                <li>• Use composition over inheritance when appropriate</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use inheritance just for code reuse</li>
                <li>• Don't create deep inheritance hierarchies</li>
                <li>• Don't override final methods</li>
                <li>• Don't expose internal implementation details</li>
                <li>• Don't break the Liskov Substitution Principle</li>
                <li>• Don't ignore proper constructor chaining</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * InheritanceDemo.java
 * 
 * This comprehensive example demonstrates inheritance in Java:
 * - Class inheritance with the extends keyword
 * - Method overriding and the @Override annotation
 * - The super keyword for parent class access
 * - Access modifiers and their behavior in inheritance
 * - Constructor chaining in inheritance hierarchies
 * - Polymorphism with inheritance
 * - Best practices for inheritance design
 * 
 * Run this program to see how inheritance works in practice.
 */

// Superclass representing a generic Vehicle
class Vehicle {
    // Protected fields - accessible by subclasses
    protected String brand;
    protected String model;
    protected int year;
    protected double price;
    
    // Private field - not accessible by subclasses directly
    private boolean isRunning;
    
    // Constructor
    public Vehicle(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.isRunning = false;
        System.out.println("Vehicle constructor called");
    }
    
    // Methods that can be overridden
    public void start() {
        isRunning = true;
        System.out.println(brand + " " + model + " started");
    }
    
    public void stop() {
        isRunning = false;
        System.out.println(brand + " " + model + " stopped");
    }
    
    public void displayInfo() {
        System.out.println("Vehicle: " + year + " " + brand + " " + model);
        System.out.println("Price: $" + price);
        System.out.println("Status: " + (isRunning ? "Running" : "Stopped"));
    }
    
    // Getter methods
    public String getBrand() {
        return brand;
    }
    
    public String getModel() {
        return model;
    }
    
    public int getYear() {
        return year;
    }
    
    public double getPrice() {
        return price;
    }
    
    public boolean isRunning() {
        return isRunning;
    }
}

// Subclass Car extending Vehicle
class Car extends Vehicle {
    private int numberOfDoors;
    private String fuelType;
    private double fuelEfficiency; // miles per gallon
    
    // Constructor
    public Car(String brand, String model, int year, double price, 
               int numberOfDoors, String fuelType, double fuelEfficiency) {
        // Call parent constructor
        super(brand, model, year, price);
        this.numberOfDoors = numberOfDoors;
        this.fuelType = fuelType;
        this.fuelEfficiency = fuelEfficiency;
        System.out.println("Car constructor called");
    }
    
    // Overriding parent method
    @Override
    public void start() {
        // Call parent method first
        super.start();
        System.out.println("Car engine is now running");
    }
    
    // Overriding parent method with additional functionality
    @Override
    public void displayInfo() {
        // Call parent method
        super.displayInfo();
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Fuel Type: " + fuelType);
        System.out.println("Fuel Efficiency: " + fuelEfficiency + " MPG");
    }
    
    // Car-specific methods
    public void honk() {
        System.out.println(brand + " " + model + " is honking");
    }
    
    public void calculateFuelCost(double miles, double pricePerGallon) {
        double gallonsNeeded = miles / fuelEfficiency;
        double cost = gallonsNeeded * pricePerGallon;
        System.out.println("Cost to drive " + miles + " miles: $" + String.format("%.2f", cost));
    }
    
    // Getters
    public int getNumberOfDoors() {
        return numberOfDoors;
    }
    
    public String getFuelType() {
        return fuelType;
    }
    
    public double getFuelEfficiency() {
        return fuelEfficiency;
    }
}

// Subclass Motorcycle extending Vehicle
class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    private int engineSize; // in cc
    
    // Constructor
    public Motorcycle(String brand, String model, int year, double price, 
                      boolean hasSidecar, int engineSize) {
        // Call parent constructor
        super(brand, model, year, price);
        this.hasSidecar = hasSidecar;
        this.engineSize = engineSize;
        System.out.println("Motorcycle constructor called");
    }
    
    // Overriding parent method
    @Override
    public void start() {
        // Call parent method first
        super.start();
        System.out.println("Motorcycle engine is now running");
    }
    
    // Overriding parent method with additional functionality
    @Override
    public void displayInfo() {
        // Call parent method
        super.displayInfo();
        System.out.println("Sidecar: " + (hasSidecar ? "Yes" : "No"));
        System.out.println("Engine Size: " + engineSize + "cc");
    }
    
    // Motorcycle-specific methods
    public void wheelie() {
        if (isRunning()) {
            System.out.println(brand + " " + model + " is doing a wheelie!");
        } else {
            System.out.println("Start the motorcycle first to do a wheelie");
        }
    }
    
    public void calculateInsurance(double baseRate) {
        double insurance = baseRate * (engineSize / 1000.0);
        System.out.println("Annual insurance cost: $" + String.format("%.2f", insurance));
    }
    
    // Getters
    public boolean hasSidecar() {
        return hasSidecar;
    }
    
    public int getEngineSize() {
        return engineSize;
    }
}

// Subclass Truck extending Vehicle
class Truck extends Vehicle {
    private double cargoCapacity; // in tons
    private boolean is4WD;
    
    // Constructor
    public Truck(String brand, String model, int year, double price, 
                 double cargoCapacity, boolean is4WD) {
        // Call parent constructor
        super(brand, model, year, price);
        this.cargoCapacity = cargoCapacity;
        this.is4WD = is4WD;
        System.out.println("Truck constructor called");
    }
    
    // Overriding parent method
    @Override
    public void start() {
        // Call parent method first
        super.start();
        System.out.println("Truck engine is now running");
    }
    
    // Overriding parent method with additional functionality
    @Override
    public void displayInfo() {
        // Call parent method
        super.displayInfo();
        System.out.println("Cargo Capacity: " + cargoCapacity + " tons");
        System.out.println("4WD: " + (is4WD ? "Yes" : "No"));
    }
    
    // Truck-specific methods
    public void loadCargo(double weight) {
        if (weight <= cargoCapacity) {
            System.out.println("Loaded " + weight + " tons of cargo");
        } else {
            System.out.println("Cannot load " + weight + " tons. Exceeds capacity of " + cargoCapacity + " tons");
        }
    }
    
    public void calculateDepreciation(double years) {
        double depreciationRate = 0.15; // 15% per year
        double depreciatedValue = price * Math.pow(1 - depreciationRate, years);
        System.out.println("Value after " + years + " years: $" + String.format("%.2f", depreciatedValue));
    }
    
    // Getters
    public double getCargoCapacity() {
        return cargoCapacity;
    }
    
    public boolean is4WD() {
        return is4WD;
    }
}

// Main class to demonstrate inheritance
public class InheritanceDemo {
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic inheritance
        demonstrateBasicInheritance();
        
        // Demonstrate method overriding
        demonstrateMethodOverriding();
        
        // Demonstrate the super keyword
        demonstrateSuperKeyword();
        
        // Demonstrate polymorphism with inheritance
        demonstratePolymorphism();
        
        // Demonstrate access modifiers
        demonstrateAccessModifiers();
        
        // Demonstrate constructor chaining
        demonstrateConstructorChaining();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                  INHERITANCE DEMO                           ║");
        System.out.println("║        Understanding Class Hierarchies and Code Reuse       ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicInheritance() {
        System.out.println("🔸 BASIC INHERITANCE");
        System.out.println("   ─────────────────");
        
        // Creating objects of subclasses
        Car car = new Car("Toyota", "Camry", 2022, 25000, 4, "Gasoline", 30.5);
        Motorcycle motorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2021, 8000, false, 749);
        Truck truck = new Truck("Ford", "F-150", 2023, 35000, 1.5, true);
        
        System.out.println("\nCar object created:");
        car.displayInfo();
        
        System.out.println("\nMotorcycle object created:");
        motorcycle.displayInfo();
        
        System.out.println("\nTruck object created:");
        truck.displayInfo();
        System.out.println();
    }
    
    private static void demonstrateMethodOverriding() {
        System.out.println("🔸 METHOD OVERRIDING");
        System.out.println("   ──────────────────");
        
        // Creating objects of subclasses
        Car car = new Car("Honda", "Civic", 2022, 22000, 4, "Gasoline", 32.0);
        Motorcycle motorcycle = new Motorcycle("Yamaha", "MT-07", 2021, 7500, false, 689);
        Truck truck = new Truck("Chevrolet", "Silverado", 2023, 40000, 2.0, true);
        
        System.out.println("Starting vehicles (demonstrating method overriding):");
        car.start();
        motorcycle.start();
        truck.start();
        System.out.println();
    }
    
    private static void demonstrateSuperKeyword() {
        System.out.println("🔸 SUPER KEYWORD");
        System.out.println("   ──────────────");
        
        // Creating objects to demonstrate super keyword
        Car car = new Car("BMW", "3 Series", 2022, 40000, 4, "Gasoline", 28.0);
        Motorcycle motorcycle = new Motorcycle("Ducati", "Panigale", 2021, 18000, false, 1103);
        
        System.out.println("Calling overridden methods that use super:");
        car.displayInfo();
        System.out.println();
        motorcycle.displayInfo();
        System.out.println();
    }
    
    private static void demonstratePolymorphism() {
        System.out.println("🔸 POLYMORPHISM WITH INHERITANCE");
        System.out.println("   ──────────────────────────────");
        
        // Polymorphism - treating different objects as instances of the same type
        Vehicle[] vehicles = new Vehicle[3];
        vehicles[0] = new Car("Tesla", "Model 3", 2022, 45000, 4, "Electric", 0);
        vehicles[1] = new Motorcycle("Kawasaki", "Ninja", 2021, 12000, false, 1043);
        vehicles[2] = new Truck("Ram", "1500", 2023, 42000, 1.8, true);
        
        System.out.println("Processing vehicles polymorphically:");
        for (Vehicle v : vehicles) {
            v.displayInfo();
            v.start();
            System.out.println();
        }
    }
    
    private static void demonstrateAccessModifiers() {
        System.out.println("🔸 ACCESS MODIFIERS IN INHERITANCE");
        System.out.println("   ────────────────────────────────");
        
        Car car = new Car("Audi", "A4", 2022, 38000, 4, "Gasoline", 29.5);
        
        System.out.println("Accessing inherited fields through methods:");
        System.out.println("Brand: " + car.getBrand());
        System.out.println("Model: " + car.getModel());
        System.out.println("Year: " + car.getYear());
        System.out.println("Price: $" + car.getPrice());
        
        System.out.println("\nAccessing subclass-specific fields:");
        System.out.println("Doors: " + car.getNumberOfDoors());
        System.out.println("Fuel Type: " + car.getFuelType());
        System.out.println("Fuel Efficiency: " + car.getFuelEfficiency() + " MPG");
        System.out.println();
    }
    
    private static void demonstrateConstructorChaining() {
        System.out.println("🔸 CONSTRUCTOR CHAINING");
        System.out.println("   ─────────────────────");
        
        System.out.println("Creating a Car object to demonstrate constructor chaining:");
        System.out.println("Notice the order of constructor calls:");
        
        Car car = new Car("Mercedes", "C-Class", 2022, 42000, 4, "Gasoline", 30.0);
        
        System.out.println("\nCar created successfully with proper constructor chaining");
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Class inheritance with the extends keyword                ║");
        System.out.println("║  • Method overriding and the @Override annotation            ║");
        System.out.println("║  • The super keyword for parent class access                 ║");
        System.out.println("║  • Access modifiers and their behavior in inheritance        ║");
        System.out.println("║  • Constructor chaining in inheritance hierarchies           ║");
        System.out.println("║  • Polymorphism with inheritance                             ║");
        System.out.println("║  • Best practices for inheritance design                     ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use inheritance for "is-a" relationships                  ║");
        System.out.println("║  • Keep inheritance hierarchies shallow when possible        ║");
        System.out.println("║  • Use the @Override annotation for overridden methods       ║");
        System.out.println("║  • Make fields private and provide protected accessors       ║");
        System.out.println("║  • Design for extension by making methods overridable        ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create a Vehicle class and a Car class that extends Vehicle.
2. Override the toString() method in the Car class.
3. Use the super keyword to call the parent constructor.
`
  }
};