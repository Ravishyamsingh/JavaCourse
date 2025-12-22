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
Question 1: Implement an Adapter pattern to make a legacy Rectangle class compatible with a new Shape interface.
Question 2: Create a Decorator pattern for adding logging functionality to a Calculator class without modifying its code.
Question 3: Implement a Facade pattern that simplifies the process of sending an email with attachments.
Question 4: Explain the difference between Adapter and Decorator patterns.
Question 5: When would you choose to use the Facade pattern over direct API calls?
    `
  }
};