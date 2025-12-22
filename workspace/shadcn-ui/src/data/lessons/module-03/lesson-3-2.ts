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
    codeExample: `
class Person {
    String name;
    Person(String name) { this.name = name; }
    void greet() { System.out.println("Hello, " + name); }
}

public class ClassesObjectsIntro {
    public static void main(String[] args) {
        Person p = new Person("Ava");
        p.greet();
    }
}
`,
    exercise: `
      1) Create a class Book with a title field and a printTitle() method; create and call it.
      2) Create a class Counter with an increment() method; show the updated value.
      3) Bonus: Add a private field with a getter and setter in any class.
    `
  }
};