import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_7: LessonContent = {
  title: 'Abstract Classes and Interfaces',
  type: 'coding',
  duration: '40 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Master abstract classes and interfaces in Java, essential tools for creating flexible, extensible code architectures. This lesson covers abstract class declaration, abstract methods, interface definition, default and static methods in interfaces, and the differences between abstract classes and interfaces. You\'ll learn to design robust class hierarchies that enforce contracts while allowing implementation flexibility.',
    objectives: [
      'Understand the concept and benefits of abstract classes',
      'Learn to define and implement abstract methods',
      'Master interface definition and implementation',
      'Work with default and static methods in interfaces',
      'Understand the differences between abstract classes and interfaces',
      'Practice implementing multiple interfaces',
      'Learn to design flexible, extensible code architectures'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Abstract Classes and Interfaces
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Creating flexible contracts and extensible code architectures</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Abstract Classes
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Abstract classes are classes that cannot be instantiated directly and are designed to be extended by subclasses. 
            They can contain both abstract methods (without implementation) and concrete methods (with implementation). 
            Abstract classes are used to provide a common definition of a base class that multiple derived classes can share.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Abstract classes define a template for subclasses, enforcing a common structure while allowing implementation flexibility.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Abstract Class Syntax
          </h2>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Declaration:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public abstract class AbstractClassName &#123;<br/>
                &nbsp;&nbsp;// Abstract method (no implementation)<br/>
                &nbsp;&nbsp;public abstract void abstractMethod();<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Concrete method (with implementation)<br/>
                &nbsp;&nbsp;public void concreteMethod() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// Implementation here<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public abstract class Animal &#123;<br/>
                &nbsp;&nbsp;protected String name;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Constructor<br/>
                &nbsp;&nbsp;public Animal(String name) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Abstract method - must be implemented by subclasses<br/>
                &nbsp;&nbsp;public abstract void makeSound();<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Concrete method - can be used as-is or overridden<br/>
                &nbsp;&nbsp;public void sleep() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(name + " is sleeping");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Interfaces
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Interfaces define a contract that implementing classes must follow. They contain only abstract methods (by default) and constants. Since Java 8, interfaces can also contain default and static methods.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Interface Declaration:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public interface InterfaceName &#123;<br/>
                &nbsp;&nbsp;// Public static final constants (by default)<br/>
                &nbsp;&nbsp;int CONSTANT = 100;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Abstract methods (by default)<br/>
                &nbsp;&nbsp;void abstractMethod();<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Default method (Java 8+)<br/>
                &nbsp;&nbsp;default void defaultMethod() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// Default implementation<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;// Static method (Java 8+)<br/>
                &nbsp;&nbsp;static void staticMethod() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// Static implementation<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Interface Implementation
          </h2>
          <div class="space-y-4">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Implementing an Interface:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                public class Dog implements Animal, Pet &#123;<br/>
                &nbsp;&nbsp;// Must implement all abstract methods from interfaces<br/>
                &nbsp;&nbsp;@Override<br/>
                &nbsp;&nbsp;public void makeSound() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Woof!");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;<br/>
                &nbsp;&nbsp;@Override<br/>
                &nbsp;&nbsp;public void play() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Dog is playing");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Abstract Classes vs Interfaces
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-red-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Feature</th>
                  <th class="text-left p-3 font-bold border-b">Abstract Class</th>
                  <th class="text-left p-3 font-bold border-b">Interface</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-bold">Inheritance</td>
                  <td class="p-3">Single inheritance</td>
                  <td class="p-3">Multiple inheritance</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-bold">Methods</td>
                  <td class="p-3">Abstract + concrete</td>
                  <td class="p-3">Abstract, default, static</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-bold">Variables</td>
                  <td class="p-3">All access modifiers</td>
                  <td class="p-3">Public static final only</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-bold">Constructors</td>
                  <td class="p-3">Can have constructors</td>
                  <td class="p-3">Cannot have constructors</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-bold">Access Modifiers</td>
                  <td class="p-3">All access modifiers</td>
                  <td class="p-3">Public by default</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            When to Use What?
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Use Abstract Classes When:</h4>
              <ul class="space-y-2 text-indigo-700">
                <li>• You want to share code among related classes</li>
                <li>• You need to declare non-public fields or methods</li>
                <li>• You want to provide a common base with some implementation</li>
                <li>• You need constructors or initializers</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Use Interfaces When:</h4>
              <ul class="space-y-2 text-purple-700">
                <li>• You want to specify a contract for unrelated classes</li>
                <li>• You need multiple inheritance of type</li>
                <li>• You want to define capabilities rather than identity</li>
                <li>• You're designing a plugin architecture</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Abstract Classes and Interfaces</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use abstract classes for "is-a" relationships</li>
                <li>• Use interfaces for "can-do" capabilities</li>
                <li>• Favor composition over inheritance when appropriate</li>
                <li>• Keep interfaces focused and cohesive</li>
                <li>• Use default methods sparingly and carefully</li>
                <li>• Document the purpose of abstract classes and interfaces</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use abstract classes when interfaces suffice</li>
                <li>• Don't create "fat" interfaces with too many methods</li>
                <li>• Don't ignore the single inheritance limitation of classes</li>
                <li>• Don't overuse default methods in interfaces</li>
                <li>• Don't break the contract defined by interfaces</li>
                <li>• Don't mix unrelated capabilities in a single interface</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * AbstractClassesAndInterfacesDemo.java
 * 
 * This comprehensive example demonstrates abstract classes and interfaces in Java:
 * - Abstract class declaration and implementation
 * - Abstract method definition and overriding
 * - Interface definition and implementation
 * - Default and static methods in interfaces
 * - Differences between abstract classes and interfaces
 * - Multiple interface implementation
 * - Best practices for flexible, extensible code
 * 
 * Run this program to see how abstract classes and interfaces work in practice.
 */

// Abstract class example
abstract class Animal {
    protected String name;
    protected int age;
    
    // Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Concrete method (with implementation)
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    // Concrete method that can be overridden
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    // Abstract method (must be implemented by subclasses)
    public abstract void makeSound();
    
    // Abstract method for movement
    public abstract void move();
    
    // Getters
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
}

// Concrete class extending abstract class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    // Implementing abstract method
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    // Implementing abstract method
    @Override
    public void move() {
        System.out.println(name + " runs on four legs");
    }
    
    // Overriding concrete method
    @Override
    public void eat() {
        System.out.println(name + " eats dog food");
    }
    
    public void wagTail() {
        System.out.println(name + " wags tail happily");
    }
    
    public String getBreed() {
        return breed;
    }
}

// Another concrete class extending abstract class
class Bird extends Animal {
    private double wingspan;
    
    public Bird(String name, int age, double wingspan) {
        super(name, age);
        this.wingspan = wingspan;
    }
    
    // Implementing abstract method
    @Override
    public void makeSound() {
        System.out.println(name + " chirps: Tweet! Tweet!");
    }
    
    // Implementing abstract method
    @Override
    public void move() {
        System.out.println(name + " flies with wingspan of " + wingspan + " meters");
    }
    
    public void fly() {
        System.out.println(name + " is flying in the sky");
    }
}

// Interface example
interface Flyable {
    void fly();
    default void glide() {
        System.out.println("Gliding smoothly through the air");
    }
}

// Another interface
interface Swimmable {
    void swim();
}

// Class implementing multiple interfaces
class Duck extends Bird implements Flyable, Swimmable {
    public Duck(String name, int age, double wingspan) {
        super(name, age, wingspan);
    }
    
    // Must implement fly() from Flyable interface
    @Override
    public void fly() {
        System.out.println(name + " flaps wings and flies");
    }
    
    // Must implement swim() from Swimmable interface
    @Override
    public void swim() {
        System.out.println(name + " paddles in the water");
    }
    
    // Override makeSound() from Animal
    @Override
    public void makeSound() {
        System.out.println(name + " quacks: Quack! Quack!");
    }
}

// Main class to demonstrate the concepts
public class AbstractClassesAndInterfacesDemo {
    public static void main(String[] args) {
        System.out.println("=== Abstract Classes and Interfaces Demo ===\\n");
        
        // Create instances of concrete classes
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        Bird bird = new Bird("Tweety", 2, 0.5);
        Duck duck = new Duck("Donald", 4, 0.8);
        
        // Demonstrate abstract class features
        System.out.println("1. Abstract Class Features:");
        System.out.println("---------------------------");
        dog.makeSound();  // Abstract method implementation
        dog.move();       // Abstract method implementation
        dog.eat();       // Overridden concrete method
        dog.sleep();     // Inherited concrete method
        dog.wagTail();   // Class-specific method
        System.out.println("Dog breed: " + dog.getBreed());
        
        System.out.println();
        bird.makeSound();  // Abstract method implementation
        bird.move();       // Abstract method implementation
        bird.eat();       // Inherited concrete method
        System.out.println("Bird wingspan: " + bird.wingspan + " meters");
        
        System.out.println("\\n2. Interface Implementation:");
        System.out.println("-----------------------------");
        duck.makeSound();  // Overridden method
        duck.move();       // Inherited from Bird
        duck.fly();        // From Flyable interface
        duck.swim();       // From Swimmable interface
        duck.glide();      // Default method from Flyable interface
        
        System.out.println("\\n3. Polymorphism with Abstract Classes:");
        System.out.println("------------------------------------------");
        Animal[] animals = {dog, bird, duck};
        for (Animal animal : animals) {
            System.out.println("\\nProcessing " + animal.getName() + ":");
            animal.makeSound();  // Polymorphic call
            animal.move();       // Polymorphic call
        }
        
        System.out.println("\\n4. Polymorphism with Interfaces:");
        System.out.println("----------------------------------");
        Flyable[] flyers = {bird, duck};
        for (Flyable flyer : flyers) {
            flyer.fly();    // Polymorphic call
            flyer.glide();  // Default method call
        }
        
        System.out.println("\\n=== Demo Complete ===");
    }
}`,
    exercise: `
      **🏗️ Abstract Classes and Interfaces Implementation Challenge**
      
      This comprehensive exercise will help you master abstract classes and interfaces in Java. You'll design and implement a complete system that demonstrates the power of these OOP concepts.
      
      **Part 1: Abstract Class Implementation (30 minutes)**
      
      1. **Create a Vehicle Abstract Class:**
         - Define abstract methods: startEngine(), stopEngine(), accelerate()
         - Implement concrete methods: getFuelLevel(), refuel()
         - Add protected fields: brand, model, fuelLevel
         - Create appropriate constructors and getters
      
      2. **Implement Concrete Vehicle Classes:**
         - Create Car class extending Vehicle
         - Create Motorcycle class extending Vehicle
         - Implement all abstract methods with appropriate behavior
         - Add class-specific methods (e.g., openTrunk() for Car)
      
      **Part 2: Interface Design (25 minutes)**
      
      1. **Create Multiple Interfaces:**
         - Drivable: with methods drive() and park()
         - Maintainable: with methods performMaintenance() and checkStatus()
         - Loadable: with methods loadCargo() and unloadCargo()
      
      2. **Implement Interface Methods:**
         - Add default methods where appropriate
         - Ensure all interface contracts are fulfilled
      
      **Part 3: System Integration (35 minutes)**
      
      1. **Create Complex Vehicle Classes:**
         - Truck class that extends Vehicle and implements Loadable, Maintainable
         - ElectricCar class that extends Vehicle and implements Drivable, Maintainable
      
      2. **Demonstrate Polymorphism:**
         - Create arrays of abstract types and interface types
         - Show how different objects respond to the same method calls
         - Use instanceof to check types and cast appropriately
      
      **Part 4: Advanced Features (20 minutes)**
      
      1. **Implement Default Methods:**
         - Add default implementations in interfaces
         - Override default methods in implementing classes
      
      2. **Create Static Helper Methods:**
         - Add static methods to interfaces for utility functions
      
      **📋 Deliverables:**
      
      Create a complete Java program with:
      1. Vehicle abstract class with all required methods
      2. Car, Motorcycle, Truck, and ElectricCar implementations
      3. All required interfaces with appropriate methods
      4. Main class demonstrating all features
      5. Output showing polymorphic behavior
      
      **🎯 Success Criteria:**
      
      Your implementation should demonstrate:
      - ✅ Proper abstract class design with abstract and concrete methods
      - ✅ Correct interface implementation with all required methods
      - ✅ Multiple interface implementation on single classes
      - ✅ Polymorphic behavior with abstract classes and interfaces
      - ✅ Default and static methods in interfaces
      - ✅ Proper encapsulation and inheritance
      
      **💡 Bonus Challenges:**
      
      1. **Nested Interfaces:** Create interfaces within classes
      2. **Marker Interfaces:** Implement empty interfaces for tagging
      3. **Functional Interfaces:** Create interfaces for lambda expressions
      4. **Interface Inheritance:** Extend interfaces from other interfaces
      
      This exercise will solidify your understanding of abstract classes and interfaces, preparing you for complex OOP designs in real-world applications!
    `
  }
};
