import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_2: LessonContent = {
  title: 'Creational Patterns (Singleton, Factory, Builder)',
  type: 'lesson',
  duration: '60 min',
  module: 'Design Patterns',
  content: {
    overview: 'Master the three most important creational design patterns: Singleton, Factory, and Builder. Learn how these patterns solve object creation problems and provide flexible, maintainable solutions for complex object instantiation scenarios.',
    objectives: [
      'Understand the purpose and implementation of Singleton pattern',
      'Master Factory pattern variations (Simple Factory, Factory Method)',
      'Learn Builder pattern for complex object construction',
      'Implement thread-safe versions of creational patterns',
      'Recognize when to use each creational pattern',
      'Understand the trade-offs and best practices for each pattern'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Creational Design Patterns
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Mastering object creation with Singleton, Factory, and Builder patterns</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Singleton Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Singleton pattern ensures a class has only one instance and provides a global point of access to it. 
            It's useful for managing shared resources like database connections, loggers, or configuration managers.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Key Characteristics</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• Only one instance exists throughout the application lifecycle</li>
              <li>• Global access point to the instance</li>
              <li>• Lazy or eager initialization options</li>
              <li>• Thread-safety considerations are crucial</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Database connection managers</li>
                <li>• Logger instances</li>
                <li>• Configuration managers</li>
                <li>• Thread pools</li>
                <li>• Cache implementations</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Considerations</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Can make testing difficult</li>
                <li>• Creates hidden dependencies</li>
                <li>• Thread safety complexity</li>
                <li>• Serialization issues</li>
                <li>• Violates Single Responsibility Principle</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Factory Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Factory patterns create objects without specifying the exact class to create. They provide an interface for creating objects 
            in a superclass, but allow subclasses to alter the type of objects that will be created.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🏭 Factory Pattern Types</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                <h5 class="font-bold text-blue-700">Simple Factory</h5>
                <p class="text-gray-600 text-sm">Creates objects based on parameters</p>
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-green-400">
                <h5 class="font-bold text-green-700">Factory Method</h5>
                <p class="text-gray-600 text-sm">Uses inheritance and polymorphism</p>
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                <h5 class="font-bold text-orange-700">Abstract Factory</h5>
                <p class="text-gray-600 text-sm">Creates families of related objects</p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Loose coupling between creator and products</li>
                <li>• Easy to extend with new product types</li>
                <li>• Centralizes object creation logic</li>
                <li>• Supports polymorphism</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Use Cases</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Creating UI components for different platforms</li>
                <li>• Database driver selection</li>
                <li>• Document processing systems</li>
                <li>• Game object creation</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Builder Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Builder pattern constructs complex objects step by step. It allows you to produce different types and 
            representations of an object using the same construction code, particularly useful for objects with many optional parameters.
          </p>
          
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">🔧 Builder Components</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Product</h5>
                  <p class="text-gray-600 text-sm">The complex object being built</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Builder</h5>
                  <p class="text-gray-600 text-sm">Interface for constructing parts</p>
                </div>
              </div>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                  <h5 class="font-bold text-orange-700">Concrete Builder</h5>
                  <p class="text-gray-600 text-sm">Implements the building steps</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Director</h5>
                  <p class="text-gray-600 text-sm">Controls the construction process</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Objects with many optional parameters</li>
                <li>• Complex object construction process</li>
                <li>• Immutable objects</li>
                <li>• Step-by-step object creation</li>
                <li>• Different representations of the same object</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🎯 Advantages</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Fluent interface for easy use</li>
                <li>• Parameter validation before construction</li>
                <li>• Immutable objects support</li>
                <li>• Clear separation of construction logic</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Pattern Comparison and Best Practices
          </h2>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-3 text-left">Pattern</th>
                  <th class="border border-gray-300 p-3 text-left">Purpose</th>
                  <th class="border border-gray-300 p-3 text-left">Use Case</th>
                  <th class="border border-gray-300 p-3 text-left">Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold text-blue-700">Singleton</td>
                  <td class="border border-gray-300 p-3">One instance</td>
                  <td class="border border-gray-300 p-3">Global access point</td>
                  <td class="border border-gray-300 p-3 text-green-600">Low</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold text-purple-700">Factory</td>
                  <td class="border border-gray-300 p-3">Object creation</td>
                  <td class="border border-gray-300 p-3">Runtime type determination</td>
                  <td class="border border-gray-300 p-3 text-yellow-600">Medium</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold text-indigo-700">Builder</td>
                  <td class="border border-gray-300 p-3">Complex construction</td>
                  <td class="border border-gray-300 p-3">Many optional parameters</td>
                  <td class="border border-gray-300 p-3 text-orange-600">Medium-High</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
            <ul class="space-y-2 text-gray-700">
              <li>• Use enum for Singleton when possible (thread-safe and serialization-safe)</li>
              <li>• Prefer Factory Method over Simple Factory for extensibility</li>
              <li>• Use Builder for objects with 4+ parameters or complex construction</li>
              <li>• Consider using static factory methods for simple object creation</li>
              <li>• Make Builder classes static nested classes</li>
              <li>• Validate parameters in Builder.build() method</li>
            </ul>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Creational Patterns Implementation Examples</div>
        
        <div class="text-gray-400 mb-4">// === 1. SINGLETON PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Thread-safe Singleton using enum (recommended)</div>
        <div class="text-blue-400">public enum</div> <div class="text-yellow-400">DatabaseManager</div> {<br/>
        &nbsp;&nbsp;<div class="text-yellow-400">INSTANCE</div>;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Connection</div> connection;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-yellow-400">DatabaseManager</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.connection = <div class="text-blue-400">DriverManager</div>.getConnection(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"jdbc:mysql://localhost:3306/mydb"</div>,<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-green-300">"user"</div>, <div class="text-green-300">"password"</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">SQLException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">RuntimeException</div>(<div class="text-green-300">"Failed to create connection"</div>, e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Connection</div> <div class="text-yellow-400">getConnection</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> connection;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Usage</div>
        <div class="text-blue-400">DatabaseManager</div> dbManager = <div class="text-blue-400">DatabaseManager</div>.<div class="text-yellow-400">INSTANCE</div>;<br/>
        <div class="text-blue-400">Connection</div> conn = dbManager.getConnection();<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 2. FACTORY PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Product interface</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">Vehicle</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">start</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">stop</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getType</div>();<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Concrete products</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">Car</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Vehicle</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">start</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Car engine started"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">stop</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Car engine stopped"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getType</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Car"</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Simple Factory</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">VehicleFactory</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">Vehicle</div> <div class="text-yellow-400">createVehicle</div>(<div class="text-blue-400">String</div> type) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">switch</div> (type.toLowerCase()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-green-300">"car"</div>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">Car</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-green-300">"motorcycle"</div>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">Motorcycle</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">default</div>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Unknown type: "</div> + type);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Usage</div>
        <div class="text-blue-400">Vehicle</div> car = <div class="text-blue-400">VehicleFactory</div>.createVehicle(<div class="text-green-300">"car"</div>);<br/>
        car.start();<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 3. BUILDER PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Product class</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Computer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> cpu;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> ram;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> storage;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> gpu;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final boolean</div> hasWifi;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-yellow-400">Computer</div>(<div class="text-blue-400">Builder</div> builder) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.cpu = builder.cpu;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.ram = builder.ram;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.storage = builder.storage;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.gpu = builder.gpu;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.hasWifi = builder.hasWifi;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Getters...</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getCpu</div>() { <div class="text-blue-400">return</div> cpu; }<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Static nested Builder class</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static class</div> <div class="text-yellow-400">Builder</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> cpu;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">String</div> ram;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> storage = <div class="text-green-300">"500GB HDD"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> gpu = <div class="text-green-300">"Integrated"</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">private boolean</div> hasWifi = <div class="text-blue-400">false</div>;<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">Builder</div>(<div class="text-blue-400">String</div> cpu, <div class="text-blue-400">String</div> ram) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.cpu = cpu;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.ram = ram;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Builder</div> <div class="text-yellow-400">storage</div>(<div class="text-blue-400">String</div> storage) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.storage = storage;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">this</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Builder</div> <div class="text-yellow-400">gpu</div>(<div class="text-blue-400">String</div> gpu) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.gpu = gpu;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">this</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Builder</div> <div class="text-yellow-400">hasWifi</div>(<div class="text-blue-400">boolean</div> hasWifi) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.hasWifi = hasWifi;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">this</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">Computer</div> <div class="text-yellow-400">build</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">Computer</div>(<div class="text-blue-400">this</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Usage</div>
        <div class="text-blue-400">Computer</div> gaming = <div class="text-blue-400">new</div> <div class="text-blue-400">Computer</div>.<div class="text-yellow-400">Builder</div>(<div class="text-green-300">"Intel i9"</div>, <div class="text-green-300">"32GB"</div>)<br/>
        &nbsp;&nbsp;.storage(<div class="text-green-300">"1TB SSD"</div>)<br/>
        &nbsp;&nbsp;.gpu(<div class="text-green-300">"RTX 4080"</div>)<br/>
        &nbsp;&nbsp;.hasWifi(<div class="text-blue-400">true</div>)<br/>
        &nbsp;&nbsp;.build();<br/><br/>
        
        <div class="text-gray-400">// Clean, readable, and flexible object creation!</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Implement Creational Patterns
        </h2>
        <p class="text-blue-100">Build a comprehensive configuration management system using all three creational patterns</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Exercise Overview</h3>
          <p class="text-gray-700 mb-4">
            Create a configuration management system for a web application that demonstrates the
            practical use of Singleton, Factory, and Builder patterns working together.
          </p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Singleton Pattern</h4>
              <p class="text-gray-700 text-sm">Configuration Manager that ensures only one instance manages all configuration data</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Factory Pattern</h4>
              <p class="text-gray-700 text-sm">Configuration Source Factory that creates different types of configuration readers</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Builder Pattern</h4>
              <p class="text-gray-700 text-sm">Configuration Builder for creating complex configuration objects with validation</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          
          <div class="space-y-4">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">1. Configuration Manager (Singleton)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement thread-safe Singleton pattern</li>
                <li>• Manage multiple configuration sources (file, database, environment)</li>
                <li>• Provide methods to get, set, and reload configurations</li>
                <li>• Support configuration change notifications</li>
                <li>• Handle configuration validation and default values</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">2. Configuration Source Factory</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create factory for different configuration sources</li>
                <li>• Support file-based configurations (properties, JSON, YAML)</li>
                <li>• Support database configuration storage</li>
                <li>• Support environment variable configurations</li>
                <li>• Allow easy addition of new configuration source types</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Configuration Builder</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Build complex configuration objects step by step</li>
                <li>• Support different configuration profiles (dev, test, prod)</li>
                <li>• Validate configuration parameters before building</li>
                <li>• Support nested configuration structures</li>
                <li>• Provide fluent interface for easy configuration setup</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">4. Integration Requirements</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• All patterns should work together seamlessly</li>
                <li>• Demonstrate proper error handling and logging</li>
                <li>• Include comprehensive unit tests</li>
                <li>• Provide usage examples and documentation</li>
                <li>• Consider thread safety and performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Pattern Implementation</p>
                  <p class="text-gray-600 text-sm">Correctly implement all three creational patterns</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Thread Safety</p>
                  <p class="text-gray-600 text-sm">Ensure thread-safe implementation of Singleton</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Extensibility</p>
                  <p class="text-gray-600 text-sm">Factory pattern allows easy addition of new sources</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Validation</p>
                  <p class="text-gray-600 text-sm">Builder validates parameters before object creation</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Integration</p>
                  <p class="text-gray-600 text-sm">All patterns work together cohesively</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Error Handling</p>
                  <p class="text-gray-600 text-sm">Proper exception handling and logging</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">7</div>
                <div>
                  <p class="font-semibold text-gray-800">Testing</p>
                  <p class="text-gray-600 text-sm">Comprehensive unit tests for all components</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">8</div>
                <div>
                  <p class="font-semibold text-gray-800">Documentation</p>
                  <p class="text-gray-600 text-sm">Clear usage examples and API documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Guide</h3>
          
          <div class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Step 1: Design the Interfaces</h4>
              <p class="text-gray-700 text-sm mb-2">Start by defining clean interfaces for your configuration system:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• ConfigurationSource interface for different data sources</li>
                <li>• ConfigurationManager interface for the singleton</li>
                <li>• Configuration class for the built objects</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Step 2: Implement the Singleton</h4>
              <p class="text-gray-700 text-sm mb-2">Create a thread-safe ConfigurationManager:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Use enum or double-checked locking pattern</li>
                <li>• Manage multiple configuration sources</li>
                <li>• Implement configuration caching and refresh mechanisms</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Step 3: Create the Factory</h4>
              <p class="text-gray-700 text-sm mb-2">Build a flexible factory for configuration sources:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Support multiple source types (file, database, environment)</li>
                <li>• Use Factory Method pattern for extensibility</li>
                <li>• Handle source-specific initialization and error handling</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Step 4: Build the Builder</h4>
              <p class="text-gray-700 text-sm mb-2">Create a fluent builder for complex configurations:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Support nested configuration structures</li>
                <li>• Validate parameters during building process</li>
                <li>• Provide sensible defaults and profile support</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Step 5: Integration and Testing</h4>
              <p class="text-gray-700 text-sm mb-2">Bring everything together:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Create comprehensive test suite</li>
                <li>• Test thread safety and concurrent access</li>
                <li>• Verify pattern interactions work correctly</li>
                <li>• Document usage patterns and best practices</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Bonus Challenges</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">Configuration Hot Reload</h4>
                <p class="text-gray-700 text-sm">Implement automatic configuration reloading when source files change</p>
              </div>
              
              <div class="bg-violet-50 p-3 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-1">Configuration Encryption</h4>
                <p class="text-gray-700 text-sm">Add support for encrypted configuration values (passwords, API keys)</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Configuration Profiles</h4>
                <p class="text-gray-700 text-sm">Support environment-specific configuration profiles (dev, staging, prod)</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-rose-50 p-3 rounded-lg">
                <h4 class="font-bold text-rose-800 mb-1">Configuration Validation</h4>
                <p class="text-gray-700 text-sm">Implement schema-based validation for configuration structures</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Configuration Monitoring</h4>
                <p class="text-gray-700 text-sm">Add JMX beans for monitoring configuration usage and performance</p>
              </div>
              
              <div class="bg-amber-50 p-3 rounded-lg">
                <h4 class="font-bold text-amber-800 mb-1">Configuration API</h4>
                <p class="text-gray-700 text-sm">Create REST API endpoints for runtime configuration management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};