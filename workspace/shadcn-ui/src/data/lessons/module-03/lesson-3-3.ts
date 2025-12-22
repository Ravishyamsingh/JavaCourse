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
                <li>��� Use meaningful parameter names</li>
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
    codeExample: `
class Box {
    int width;
    Box(int w) { width = w; }
    int doubleWidth() { return width * 2; }
}

public class ConstructorsMethodsIntro {
    public static void main(String[] args) {
        Box b = new Box(3);
        System.out.println(b.doubleWidth());
    }
}
`,
    exercise: `
      1) Create a class Point with two constructors: default (0,0) and (x, y); print the coordinates.
      2) Create a class Rectangle with width and height and an area() method; print the result.
      3) Bonus: Overload area() to accept one side for a square.
    `
  }
};