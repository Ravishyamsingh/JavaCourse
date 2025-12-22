import { LessonContent } from '../../types/LessonTypes';

export const lesson_3_5: LessonContent = {
  title: 'Polymorphism',
  type: 'lesson',
  duration: '35 min',
  module: 'Object-Oriented Programming',
  content: {
    overview: 'Master polymorphism in Java, a powerful OOP concept that allows objects of different types to be treated as instances of the same type through a common interface. This lesson covers method overriding, dynamic method dispatch, the instanceof operator, and polymorphic collections. You\'ll learn to write flexible, extensible code that can work with objects of multiple types while maintaining type safety.',
    objectives: [
      'Understand the concept and benefits of polymorphism',
      'Learn to implement polymorphism through method overriding',
      'Master dynamic method dispatch and runtime binding',
      'Work with polymorphic collections and arrays',
      'Use the instanceof operator for type checking',
      'Practice designing flexible, extensible code with polymorphism',
      'Understand the relationship between polymorphism and inheritance'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Polymorphism in Java
        </h1>
        <p class="mt-3 text-red-100 text-lg">Flexible code through multiple forms of the same interface</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Understanding Polymorphism
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Polymorphism means "many forms" and is a fundamental concept in Object-Oriented Programming. 
            It allows objects of different types to be treated as instances of the same type through a 
            common interface. In Java, polymorphism is primarily achieved through method overriding and 
            interface implementation, enabling flexible and extensible code.
          </p>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">💡 Key Concept</h4>
            <p class="text-red-700">Polymorphism allows you to write code that can work with objects of multiple types, as long as they share a common interface or inheritance hierarchy.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Types of Polymorphism
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎭 Runtime Polymorphism</h4>
              <p class="text-blue-700">Also known as dynamic method dispatch, occurs when method calls are resolved at runtime based on the actual object type.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                Animal animal = new Dog();<br/>
                animal.makeSound(); // Calls Dog's makeSound()
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">📝 Compile-time Polymorphism</h4>
              <p class="text-green-700">Also known as method overloading, occurs when multiple methods with the same name but different parameters exist in the same class.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                public void display(int x) { ... }<br/>
                public void display(String s) { ... }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Dynamic Method Dispatch
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">In Java, when a method is overridden in subclasses, the JVM determines which method to call at runtime based on the actual object type, not the reference type.</p>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                class Animal &#123;<br/>
                &nbsp;&nbsp;void makeSound() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Animal makes a sound");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;<br/>
                <br/>
                class Dog extends Animal &#123;<br/>
                &nbsp;&nbsp;@Override<br/>
                &nbsp;&nbsp;void makeSound() &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Dog barks");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;<br/>
                <br/>
                // Polymorphic behavior<br/>
                Animal animal = new Dog();<br/>
                animal.makeSound(); // Outputs: "Dog barks"
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Polymorphic Collections
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Collections can hold objects of different types as long as they share a common superclass or interface.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                List<Animal> animals = new ArrayList<>();<br/>
                animals.add(new Dog());<br/>
                animals.add(new Cat());<br/>
                animals.add(new Bird());<br/>
                <br/>
                // Polymorphic iteration<br/>
                for (Animal animal : animals) &#123;<br/>
                &nbsp;&nbsp;animal.makeSound(); // Calls appropriate overridden method<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            The instanceof Operator
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The instanceof operator is used to check the type of an object at runtime, allowing for safe type casting in polymorphic code.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Syntax:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  object instanceof TypeName
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  if (animal instanceof Dog) &#123;<br/>
                  &nbsp;&nbsp;Dog dog = (Dog) animal;<br/>
                  &nbsp;&nbsp;dog.bark();<br/>
                  &#125;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Benefits of Polymorphism
          </h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-indigo-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🔄</div>
              <h4 class="font-bold text-indigo-800 mb-2">Flexibility</h4>
              <p class="text-indigo-700 text-sm">Code can work with objects of multiple types</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🧩</div>
              <h4 class="font-bold text-purple-800 mb-2">Extensibility</h4>
              <p class="text-purple-700 text-sm">New types can be added without changing existing code</p>
            </div>
            <div class="bg-red-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🧹</div>
              <h4 class="font-bold text-red-800 mb-2">Maintainability</h4>
              <p class="text-red-700 text-sm">Reduces code duplication and complexity</p>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Polymorphism</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use polymorphism to write flexible, extensible code</li>
                <li>• Design classes with common interfaces or base classes</li>
                <li>• Use the @Override annotation for overridden methods</li>
                <li>• Check types with instanceof before casting</li>
                <li>• Prefer polymorphic collections over arrays</li>
                <li>• Use abstract classes or interfaces to define contracts</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use instanceof excessively - may indicate poor design</li>
                <li>• Don't break the Liskov Substitution Principle</li>
                <li>• Don't ignore proper method overriding rules</li>
                <li>• Don't create overly complex inheritance hierarchies</li>
                <li>• Don't use polymorphism when simple overloading suffices</li>
                <li>• Don't forget to test polymorphic behavior</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * PolymorphismDemo.java
 * 
 * This comprehensive example demonstrates polymorphism in Java:
 * - Runtime polymorphism with method overriding
 * - Dynamic method dispatch and runtime binding
 * - Polymorphic collections and arrays
 * - The instanceof operator for type checking
 * - Interface-based polymorphism
 * - Best practices for flexible, extensible code
 * 
 * Run this program to see how polymorphism works in practice.
 */

// Base class for polymorphism examples
class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    // Method that can be overridden
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
    
    // Method that can be overridden
    public void move() {
        System.out.println(name + " moves");
    }
    
    // Method that can be overridden
    public void eat() {
        System.out.println(name + " eats food");
    }
    
    // Getter
    public String getName() {
        return name;
    }
}

// Subclass Dog extending Animal
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    // Overriding parent method
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    // Overriding parent method
    @Override
    public void move() {
        System.out.println(name + " runs on four legs");
    }
    
    // Dog-specific method
    public void wagTail() {
        System.out.println(name + " wags tail happily");
    }
}

// Subclass Cat extending Animal
class Cat extends Animal {
    public Cat(String name) {
        super(name);
    }
    
    // Overriding parent method
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow! Meow!");
    }
    
    // Overriding parent method
    @Override
    public void move() {
        System.out.println(name + " sneaks quietly");
    }
    
    // Cat-specific method
    public void purr() {
        System.out.println(name + " purrs contentedly");
    }
}

// Subclass Bird extending Animal
class Bird extends Animal {
    public Bird(String name) {
        super(name);
    }
    
    // Overriding parent method
    @Override
    public void makeSound() {
        System.out.println(name + " chirps: Tweet! Tweet!");
    }
    
    // Overriding parent method
    @Override
    public void move() {
        System.out.println(name + " flies in the sky");
    }
    
    // Bird-specific method
    public void flapWings() {
        System.out.println(name + " flaps wings energetically");
    }
}

// Interface for animals that can be trained
interface Trainable {
    void performTrick();
}

// Dog implementing Trainable interface
class TrainedDog extends Dog implements Trainable {
    public TrainedDog(String name) {
        super(name);
    }
    
    // Overriding parent method
    @Override
    public void makeSound() {
        System.out.println(name + " barks loudly: Woof! Woof! Woof!");
    }
    
    // Implementing interface method
    @Override
    public void performTrick() {
        System.out.println(name + " performs a trick: Rolls over and gives paw");
    }
}

// Main class to demonstrate polymorphism
public class PolymorphismDemo {
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic polymorphism
        demonstrateBasicPolymorphism();
        
        // Demonstrate polymorphic collections
        demonstratePolymorphicCollections();
        
        // Demonstrate dynamic method dispatch
        demonstrateDynamicMethodDispatch();
        
        // Demonstrate instanceof operator
        demonstrateInstanceofOperator();
        
        // Demonstrate interface-based polymorphism
        demonstrateInterfacePolymorphism();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                  POLYMORPHISM DEMO                          ║");
        System.out.println("║        Understanding Flexible Code Through Polymorphism     ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicPolymorphism() {
        System.out.println("🔸 BASIC POLYMORPHISM");
        System.out.println("   ────────────────────");
        
        // Polymorphism - treating different objects as instances of the same type
        Animal animal1 = new Dog("Buddy");
        Animal animal2 = new Cat("Whiskers");
        Animal animal3 = new Bird("Tweety");
        
        System.out.println("Creating animals polymorphically:");
        System.out.println("Animal 1: " + animal1.getName());
        System.out.println("Animal 2: " + animal2.getName());
        System.out.println("Animal 3: " + animal3.getName());
        
        System.out.println("\nCalling makeSound() on all animals:");
        animal1.makeSound();
        animal2.makeSound();
        animal3.makeSound();
        
        System.out.println("\nCalling move() on all animals:");
        animal1.move();
        animal2.move();
        animal3.move();
        System.out.println();
    }
    
    private static void demonstratePolymorphicCollections() {
        System.out.println("🔸 POLYMORPHIC COLLECTIONS");
        System.out.println("   ────────────────────────");
        
        // Array of Animals - can hold any subclass of Animal
        Animal[] animals = new Animal[4];
        animals[0] = new Dog("Rex");
        animals[1] = new Cat("Fluffy");
        animals[2] = new Bird("Robin");
        animals[3] = new TrainedDog("Spot");
        
        System.out.println("Processing animals polymorphically:");
        for (Animal animal : animals) {
            System.out.println("\nProcessing: " + animal.getName());
            animal.makeSound();
            animal.move();
            
            // This demonstrates polymorphic behavior - same code, different results
            animal.eat();
        }
        System.out.println();
    }
    
    private static void demonstrateDynamicMethodDispatch() {
        System.out.println("🔸 DYNAMIC METHOD DISPATCH");
        System.out.println("   ─────────────────────────");
        
        // Dynamic method dispatch - method called is determined at runtime
        System.out.println("Creating animals and calling methods:");
        
        Animal[] animals = {
            new Dog("Max"),
            new Cat("Luna"),
            new Bird("Charlie")
        };
        
        for (Animal animal : animals) {
            System.out.println("\n" + animal.getName() + ":");
            // The specific overridden method is called based on actual object type
            animal.makeSound();
            animal.move();
        }
        System.out.println();
    }
    
    private static void demonstrateInstanceofOperator() {
        System.out.println("🔸 INSTANCEOF OPERATOR");
        System.out.println("   ────────────────────");
        
        // Using instanceof to check types
        Animal[] animals = {
            new Dog("Buster"),
            new Cat("Mittens"),
            new Bird("Sky"),
            new TrainedDog("Rover")
        };
        
        System.out.println("Processing animals with type checking:");
        for (Animal animal : animals) {
            System.out.println("\nProcessing: " + animal.getName());
            
            // Using instanceof to check specific types
            if (animal instanceof Dog) {
                System.out.println("  This is a dog");
                Dog dog = (Dog) animal;
                dog.wagTail();
            } else if (animal instanceof Cat) {
                System.out.println("  This is a cat");
                Cat cat = (Cat) animal;
                cat.purr();
            } else if (animal instanceof Bird) {
                System.out.println("  This is a bird");
                Bird bird = (Bird) animal;
                bird.flapWings();
            }
            
            // Check if animal is trainable
            if (animal instanceof Trainable) {
                System.out.println("  This animal can be trained");
                Trainable trainable = (Trainable) animal;
                trainable.performTrick();
            }
            
            // Call common methods
            animal.makeSound();
        }
        System.out.println();
    }
    
    private static void demonstrateInterfacePolymorphism() {
        System.out.println("🔸 INTERFACE-BASED POLYMORPHISM");
        System.out.println("   ─────────────────────────────");
        
        // Polymorphism with interfaces
        Trainable[] trainableAnimals = {
            new TrainedDog("Fido")
        };
        
        System.out.println("Processing trainable animals:");
        for (Trainable trainable : trainableAnimals) {
            if (trainable instanceof Animal) {
                Animal animal = (Animal) trainable;
                System.out.println("Trainable animal: " + animal.getName());
            }
            trainable.performTrick();
        }
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Runtime polymorphism with method overriding              ║");
        System.out.println("║  • Dynamic method dispatch and runtime binding               ║");
        System.out.println("║  • Polymorphic collections and arrays                        ║");
        System.out.println("║  • The instanceof operator for type checking                ║");
        System.out.println("║  • Interface-based polymorphism                              ║");
        System.out.println("║  • Best practices for flexible, extensible code             ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use polymorphism to write flexible, extensible code      ║");
        System.out.println("║  • Design classes with common interfaces or base classes    ║");
        System.out.println("║  • Use the @Override annotation for overridden methods      ║");
        System.out.println("║  • Check types with instanceof before casting               ║");
        System.out.println("║  • Prefer polymorphic collections over arrays                ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create an Animal class and Dog/Cat classes that extend it. Override the makeSound() method.
2. Use polymorphism to store different animal types in an array and call makeSound().
3. Use the instanceof operator to check object types.
`
  }
};