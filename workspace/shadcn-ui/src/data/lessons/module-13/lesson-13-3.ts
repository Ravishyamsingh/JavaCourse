import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_3: LessonContent = {
  title: 'Structural Patterns (Adapter, Decorator, Facade)',
  type: 'lesson',
  duration: '60 min',
  module: 'Design Patterns',
  content: {
    overview: 'Master the three essential structural design patterns: Adapter, Decorator, and Facade. Learn how these patterns help organize object composition, provide flexible interfaces, and simplify complex subsystems while maintaining clean, maintainable code.',
    objectives: [
      'Understand the purpose and implementation of Adapter pattern',
      'Master Decorator pattern for adding behavior dynamically',
      'Learn Facade pattern for simplifying complex interfaces',
      'Recognize when to use each structural pattern',
      'Implement real-world examples of structural patterns',
      'Understand the benefits and trade-offs of each pattern'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Structural Design Patterns
        </h1>
        <p class="mt-3 text-green-100 text-lg">Organizing object composition with Adapter, Decorator, and Facade patterns</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Adapter Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Adapter pattern allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces, 
            converting the interface of a class into another interface that clients expect.
          </p>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🔌 Key Characteristics</h4>
            <ul class="text-green-700 space-y-1">
              <li>• Converts one interface to another</li>
              <li>• Allows incompatible classes to work together</li>
              <li>• Can be implemented using composition or inheritance</li>
              <li>• Doesn't change the functionality, only the interface</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Integrating third-party libraries</li>
                <li>• Legacy system integration</li>
                <li>• Making incompatible interfaces compatible</li>
                <li>• Wrapping existing classes with new interfaces</li>
                <li>• Data format conversions</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🎯 Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Enables code reuse</li>
                <li>• Separates interface from implementation</li>
                <li>• Supports multiple data sources</li>
                <li>• Maintains existing code stability</li>
                <li>• Provides clean abstraction layer</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Decorator Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Decorator pattern allows behavior to be added to objects dynamically without altering their structure. 
            It provides a flexible alternative to subclassing for extending functionality.
          </p>
          
          <div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400 mb-4">
            <h4 class="font-bold text-teal-800 mb-2">🎨 Key Characteristics</h4>
            <ul class="text-teal-700 space-y-1">
              <li>• Adds new functionality to objects dynamically</li>
              <li>• Maintains the same interface as the original object</li>
              <li>• Can be stacked (multiple decorators)</li>
              <li>• Follows the composition over inheritance principle</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Adding features to objects at runtime</li>
                <li>• Avoiding class explosion from subclassing</li>
                <li>• Creating flexible combinations of behaviors</li>
                <li>• Implementing middleware or filters</li>
                <li>• Adding optional features to core functionality</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🎯 Examples</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Java I/O streams (BufferedReader, etc.)</li>
                <li>• GUI component decorations</li>
                <li>• Middleware in web frameworks</li>
                <li>• Caching layers</li>
                <li>• Logging and monitoring wrappers</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Facade Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Facade pattern provides a simplified interface to a complex subsystem. It defines a higher-level interface 
            that makes the subsystem easier to use by hiding its complexity from clients.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🏢 Key Characteristics</h4>
            <ul class="text-blue-700 space-y-1">
              <li>• Provides a unified interface to a set of interfaces</li>
              <li>• Hides the complexity of the subsystem</li>
              <li>• Promotes loose coupling between clients and subsystems</li>
              <li>• Can provide additional functionality beyond simple delegation</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Simplifying complex APIs</li>
                <li>• Providing a clean interface to legacy systems</li>
                <li>• Reducing dependencies on external systems</li>
                <li>• Creating service layers in applications</li>
                <li>• Abstracting third-party library complexity</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">🎯 Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Reduces complexity for clients</li>
                <li>• Promotes loose coupling</li>
                <li>• Easier to test and maintain</li>
                <li>• Provides a stable interface</li>
                <li>• Centralizes common operations</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Pattern Comparison and Best Practices
          </h2>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-3 text-left">Pattern</th>
                  <th class="border border-gray-300 p-3 text-left">Purpose</th>
                  <th class="border border-gray-300 p-3 text-left">Key Benefit</th>
                  <th class="border border-gray-300 p-3 text-left">Common Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold text-green-700">Adapter</td>
                  <td class="border border-gray-300 p-3">Interface conversion</td>
                  <td class="border border-gray-300 p-3">Compatibility</td>
                  <td class="border border-gray-300 p-3">Third-party integration</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold text-teal-700">Decorator</td>
                  <td class="border border-gray-300 p-3">Add behavior dynamically</td>
                  <td class="border border-gray-300 p-3">Flexibility</td>
                  <td class="border border-gray-300 p-3">Feature enhancement</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold text-blue-700">Facade</td>
                  <td class="border border-gray-300 p-3">Simplify interface</td>
                  <td class="border border-gray-300 p-3">Simplicity</td>
                  <td class="border border-gray-300 p-3">API simplification</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Keep adapters simple and focused</li>
                <li>• Use composition over inheritance in decorators</li>
                <li>• Make facades stateless when possible</li>
                <li>• Document the simplified interface clearly</li>
                <li>• Consider performance implications of layering</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">⚠️ Common Pitfalls</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Over-adapting simple interfaces</li>
                <li>• Creating too many decorator layers</li>
                <li>• Making facades too complex</li>
                <li>• Ignoring performance overhead</li>
                <li>• Breaking the Liskov Substitution Principle</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Structural Patterns Implementation Examples</div>
        
        <div class="text-gray-400 mb-4">// === 1. ADAPTER PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Legacy payment system (third-party)</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">LegacyPaymentGateway</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">boolean</div> <div class="text-yellow-400">makePayment</div>(<div class="text-blue-400">String</div> account, <div class="text-blue-400">double</div> amount) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Legacy implementation with different interface</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Legacy payment: $"</div> + amount + <div class="text-green-300">" from "</div> + account);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">true</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Modern payment interface expected by our system</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">PaymentProcessor</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">boolean</div> <div class="text-yellow-400">processPayment</div>(<div class="text-blue-400">PaymentRequest</div> request);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getTransactionId</div>();<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Payment request class</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">PaymentRequest</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> customerAccount;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">double</div> amount;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> currency;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Constructor and getters...</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">PaymentRequest</div>(<div class="text-blue-400">String</div> account, <div class="text-blue-400">double</div> amount, <div class="text-blue-400">String</div> currency) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.customerAccount = account;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.amount = amount;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.currency = currency;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getCustomerAccount</div>() { <div class="text-blue-400">return</div> customerAccount; }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getAmount</div>() { <div class="text-blue-400">return</div> amount; }<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Adapter to make legacy system compatible</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">LegacyPaymentAdapter</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">PaymentProcessor</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">LegacyPaymentGateway</div> legacyGateway;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> transactionId;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">LegacyPaymentAdapter</div>(<div class="text-blue-400">LegacyPaymentGateway</div> gateway) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.legacyGateway = gateway;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">processPayment</div>(<div class="text-blue-400">PaymentRequest</div> request) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Adapt the interface - convert new format to legacy format</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">boolean</div> result = legacyGateway.makePayment(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;request.getCustomerAccount(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;request.getAmount()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.transactionId = <div class="text-green-300">"TXN-"</div> + <div class="text-blue-400">System</div>.currentTimeMillis();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> result;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getTransactionId</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> transactionId;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 2. DECORATOR PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Base coffee interface</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">Coffee</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">double</div> <div class="text-yellow-400">getCost</div>();<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Basic coffee implementation</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">SimpleCoffee</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Coffee</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Simple Coffee"</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getCost</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">2.00</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Abstract decorator</div>
        <div class="text-blue-400">abstract class</div> <div class="text-yellow-400">CoffeeDecorator</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Coffee</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">protected</div> <div class="text-blue-400">Coffee</div> coffee;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">CoffeeDecorator</div>(<div class="text-blue-400">Coffee</div> coffee) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.coffee = coffee;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> coffee.getDescription();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getCost</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> coffee.getCost();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Concrete decorators</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">MilkDecorator</div> <div class="text-blue-400">extends</div> <div class="text-blue-400">CoffeeDecorator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">MilkDecorator</div>(<div class="text-blue-400">Coffee</div> coffee) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">super</div>(coffee);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> coffee.getDescription() + <div class="text-green-300">", Milk"</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getCost</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> coffee.getCost() + <div class="text-green-300">0.50</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">SugarDecorator</div> <div class="text-blue-400">extends</div> <div class="text-blue-400">CoffeeDecorator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">SugarDecorator</div>(<div class="text-blue-400">Coffee</div> coffee) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">super</div>(coffee);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> coffee.getDescription() + <div class="text-green-300">", Sugar"</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">double</div> <div class="text-yellow-400">getCost</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> coffee.getCost() + <div class="text-green-300">0.25</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 3. FACADE PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Complex subsystem classes</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">AudioSystem</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">turnOn</div>() { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Audio system on"</div>); }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setVolume</div>(<div class="text-blue-400">int</div> level) { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Volume set to "</div> + level); }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">turnOff</div>() { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Audio system off"</div>); }<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">VideoSystem</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">turnOn</div>() { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Video system on"</div>); }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setResolution</div>(<div class="text-blue-400">String</div> resolution) { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Resolution: "</div> + resolution); }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">turnOff</div>() { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Video system off"</div>); }<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">LightingSystem</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">turnOn</div>() { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Lights on"</div>); }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setBrightness</div>(<div class="text-blue-400">int</div> level) { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Brightness: "</div> + level); }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">turnOff</div>() { <div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Lights off"</div>); }<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Facade - Simple interface to complex subsystem</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">HomeTheaterFacade</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">AudioSystem</div> audioSystem;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">VideoSystem</div> videoSystem;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">LightingSystem</div> lightingSystem;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">HomeTheaterFacade</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.audioSystem = <div class="text-blue-400">new</div> <div class="text-yellow-400">AudioSystem</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.videoSystem = <div class="text-blue-400">new</div> <div class="text-yellow-400">VideoSystem</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.lightingSystem = <div class="text-blue-400">new</div> <div class="text-yellow-400">LightingSystem</div>();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">watchMovie</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Starting movie mode..."</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;lightingSystem.turnOn();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;lightingSystem.setBrightness(<div class="text-green-300">20</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;audioSystem.turnOn();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;audioSystem.setVolume(<div class="text-green-300">75</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;videoSystem.turnOn();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;videoSystem.setResolution(<div class="text-green-300">"4K"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Movie ready!"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">endMovie</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Ending movie mode..."</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;audioSystem.turnOff();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;videoSystem.turnOff();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;lightingSystem.setBrightness(<div class="text-green-300">100</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Systems shut down"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === USAGE EXAMPLES ===</div>
        
        <div class="text-gray-400 mb-2">// 1. Adapter Pattern Usage</div>
        <div class="text-blue-400">PaymentProcessor</div> processor = <div class="text-blue-400">new</div> <div class="text-yellow-400">LegacyPaymentAdapter</div>(<br/>
        &nbsp;&nbsp;<div class="text-blue-400">new</div> <div class="text-yellow-400">LegacyPaymentGateway</div>()<br/>
        );<br/>
        <div class="text-blue-400">PaymentRequest</div> request = <div class="text-blue-400">new</div> <div class="text-yellow-400">PaymentRequest</div>(<div class="text-green-300">"ACC123"</div>, <div class="text-green-300">100.0</div>, <div class="text-green-300">"USD"</div>);<br/>
        processor.processPayment(request);<br/><br/>
        
        <div class="text-gray-400 mb-2">// 2. Decorator Pattern Usage</div>
        <div class="text-blue-400">Coffee</div> coffee = <div class="text-blue-400">new</div> <div class="text-yellow-400">SimpleCoffee</div>();<br/>
        coffee = <div class="text-blue-400">new</div> <div class="text-yellow-400">MilkDecorator</div>(coffee);<br/>
        coffee = <div class="text-blue-400">new</div> <div class="text-yellow-400">SugarDecorator</div>(coffee);<br/>
        <div class="text-blue-400">System</div>.out.println(coffee.getDescription() + <div class="text-green-300">" - $"</div> + coffee.getCost());<br/>
        <div class="text-gray-400">// Output: Simple Coffee, Milk, Sugar - $2.75</div><br/><br/>
        
        <div class="text-gray-400 mb-2">// 3. Facade Pattern Usage</div>
        <div class="text-blue-400">HomeTheaterFacade</div> homeTheater = <div class="text-blue-400">new</div> <div class="text-yellow-400">HomeTheaterFacade</div>();<br/>
        homeTheater.watchMovie();<br/>
        <div class="text-gray-400">// ... enjoy the movie ...</div><br/>
        homeTheater.endMovie();<br/><br/>
        
        <div class="text-gray-400">// Benefits demonstrated:</div><br/>
        <div class="text-gray-400">// - Adapter: Legacy system integration without changing existing code</div><br/>
        <div class="text-gray-400">// - Decorator: Flexible feature combinations at runtime</div><br/>
        <div class="text-gray-400">// - Facade: Simple interface hiding complex subsystem interactions</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Build a File Processing System
        </h2>
        <p class="text-green-100">Create a comprehensive file processing system that demonstrates all three structural patterns working together</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Exercise Overview</h3>
          <p class="text-gray-700 mb-4">
            Build a file processing system that can handle different file formats, add processing features dynamically,
            and provide a simple interface for complex operations. This system will demonstrate practical use of
            Adapter, Decorator, and Facade patterns.
          </p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Adapter Pattern</h4>
              <p class="text-gray-700 text-sm">Integrate different file format processors with a unified interface</p>
            </div>
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Decorator Pattern</h4>
              <p class="text-gray-700 text-sm">Add processing features like compression, encryption, and validation dynamically</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Facade Pattern</h4>
              <p class="text-gray-700 text-sm">Provide a simple interface for complex file processing workflows</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          
          <div class="space-y-4">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">1. File Format Adapters</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create adapters for different file formats (CSV, JSON, XML)</li>
                <li>• Each format has its own third-party library with different interfaces</li>
                <li>• Provide a unified FileProcessor interface</li>
                <li>• Support reading, writing, and validation operations</li>
                <li>• Handle format-specific error conditions</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">2. Processing Decorators</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement compression decorator (ZIP/GZIP)</li>
                <li>• Create encryption decorator (AES encryption)</li>
                <li>• Add validation decorator (schema validation)</li>
                <li>• Implement logging decorator (operation tracking)</li>
                <li>• Support chaining multiple decorators</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Processing Facade</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create FileProcessingFacade for common workflows</li>
                <li>• Support batch processing operations</li>
                <li>• Provide data transformation pipelines</li>
                <li>• Handle error recovery and rollback</li>
                <li>• Include progress monitoring and reporting</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Integration Requirements</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• All patterns should work together seamlessly</li>
                <li>• Support configuration-driven processing pipelines</li>
                <li>• Include comprehensive error handling and logging</li>
                <li>• Provide unit tests for all components</li>
                <li>• Create usage examples and documentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Adapter Implementation</p>
                  <p class="text-gray-600 text-sm">Successfully adapt different file format libraries to unified interface</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Decorator Chaining</p>
                  <p class="text-gray-600 text-sm">Multiple decorators can be chained in any order</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Facade Simplification</p>
                  <p class="text-gray-600 text-sm">Complex operations exposed through simple facade methods</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Error Handling</p>
                  <p class="text-gray-600 text-sm">Robust error handling at all pattern levels</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Performance</p>
                  <p class="text-gray-600 text-sm">Efficient processing with minimal overhead from patterns</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Extensibility</p>
                  <p class="text-gray-600 text-sm">Easy to add new file formats and processing features</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">7</div>
                <div>
                  <p class="font-semibold text-gray-800">Testing</p>
                  <p class="text-gray-600 text-sm">Comprehensive unit tests with good coverage</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">8</div>
                <div>
                  <p class="font-semibold text-gray-800">Documentation</p>
                  <p class="text-gray-600 text-sm">Clear examples showing pattern usage and benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Guide</h3>
          
          <div class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Step 1: Design Core Interfaces</h4>
              <p class="text-gray-700 text-sm mb-2">Start with clean, focused interfaces:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• FileProcessor interface for unified file operations</li>
                <li>• ProcessingResult class for operation outcomes</li>
                <li>• FileMetadata class for file information</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Step 2: Implement Adapters</h4>
              <p class="text-gray-700 text-sm mb-2">Create adapters for different file formats:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Mock third-party libraries with different interfaces</li>
                <li>• Implement adapters that convert to FileProcessor interface</li>
                <li>• Handle format-specific exceptions and edge cases</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Step 3: Build Decorators</h4>
              <p class="text-gray-700 text-sm mb-2">Create flexible processing decorators:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Abstract base decorator implementing FileProcessor</li>
                <li>• Concrete decorators for compression, encryption, validation</li>
                <li>• Ensure decorators can be combined in any order</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Step 4: Create Facade</h4>
              <p class="text-gray-700 text-sm mb-2">Build a comprehensive facade:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• High-level methods for common workflows</li>
                <li>• Configuration-driven processing pipelines</li>
                <li>• Batch processing and error recovery</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Step 5: Integration and Testing</h4>
              <p class="text-gray-700 text-sm mb-2">Bring everything together:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Create end-to-end processing examples</li>
                <li>• Test all pattern combinations</li>
                <li>• Measure performance impact of pattern layers</li>
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
                <h4 class="font-bold text-indigo-800 mb-1">Streaming Processing</h4>
                <p class="text-gray-700 text-sm">Implement streaming file processing for large files</p>
              </div>
              
              <div class="bg-violet-50 p-3 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-1">Plugin Architecture</h4>
                <p class="text-gray-700 text-sm">Create a plugin system for dynamically loading new adapters</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Configuration DSL</h4>
                <p class="text-gray-700 text-sm">Design a domain-specific language for processing pipelines</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-rose-50 p-3 rounded-lg">
                <h4 class="font-bold text-rose-800 mb-1">Async Processing</h4>
                <p class="text-gray-700 text-sm">Add asynchronous processing capabilities with CompletableFuture</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Metrics Collection</h4>
                <p class="text-gray-700 text-sm">Implement detailed metrics and monitoring for processing operations</p>
              </div>
              
              <div class="bg-amber-50 p-3 rounded-lg">
                <h4 class="font-bold text-amber-800 mb-1">Cloud Integration</h4>
                <p class="text-gray-700 text-sm">Add adapters for cloud storage services (S3, Azure Blob, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};