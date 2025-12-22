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
    codeExample: `
class Car {
    String model;
    Car(String model) { this.model = model; }
    void start() { System.out.println(model + " started"); }
}

public class OOPIntro {
    public static void main(String[] args) {
        Car car = new Car("Tesla");
        car.start();
    }
}
`,
    exercise: `
      1) Create a class Person with a name field and a greet() method; print a greeting.
      2) Create a base class Animal with sound(); extend Dog to override it; call both.
      3) Bonus: Add a private field with getter and setter in any class.
    `
  }
};