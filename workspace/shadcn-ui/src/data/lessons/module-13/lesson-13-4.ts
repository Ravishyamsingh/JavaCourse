import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_4: LessonContent = {
  title: 'Behavioral Patterns (Observer, Strategy, Command)',
  type: 'lesson',
  duration: '60 min',
  module: 'Design Patterns',
  content: {
    overview: 'Master the three essential behavioral design patterns: Observer, Strategy, and Command. Learn how these patterns define communication between objects, encapsulate algorithms, and provide flexible ways to handle requests and operations.',
    objectives: [
      'Understand the purpose and implementation of Observer pattern',
      'Master Strategy pattern for algorithm encapsulation',
      'Learn Command pattern for request encapsulation',
      'Recognize when to use each behavioral pattern',
      'Implement real-world examples of behavioral patterns',
      'Understand the benefits and trade-offs of each pattern'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Behavioral Design Patterns
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Defining object communication with Observer, Strategy, and Command patterns</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Observer Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, 
            all its dependents are notified and updated automatically. It's also known as the Publish-Subscribe pattern.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">👁️ Key Characteristics</h4>
            <ul class="text-purple-700 space-y-1">
              <li>• Defines one-to-many dependency between objects</li>
              <li>• Subject maintains list of observers</li>
              <li>• Observers are notified automatically of state changes</li>
              <li>• Promotes loose coupling between subject and observers</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Model-View architectures</li>
                <li>• Event handling systems</li>
                <li>• Real-time data updates</li>
                <li>• Notification systems</li>
                <li>• Reactive programming scenarios</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Loose coupling between subject and observers</li>
                <li>• Dynamic relationships at runtime</li>
                <li>• Broadcast communication</li>
                <li>• Open/closed principle support</li>
                <li>• Separation of concerns</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Strategy Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. 
            It lets the algorithm vary independently from clients that use it.
          </p>
          
          <div class="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400 mb-4">
            <h4 class="font-bold text-pink-800 mb-2">🎯 Key Characteristics</h4>
            <ul class="text-pink-700 space-y-1">
              <li>• Encapsulates algorithms in separate classes</li>
              <li>• Makes algorithms interchangeable at runtime</li>
              <li>• Eliminates conditional statements for algorithm selection</li>
              <li>• Follows the composition over inheritance principle</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Multiple ways to perform a task</li>
                <li>• Algorithm selection at runtime</li>
                <li>• Avoiding large conditional statements</li>
                <li>• Different implementations of same interface</li>
                <li>• Configurable behavior systems</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🎯 Examples</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Sorting algorithms (QuickSort, MergeSort)</li>
                <li>• Payment processing methods</li>
                <li>• Compression algorithms</li>
                <li>• Validation strategies</li>
                <li>• Pricing calculation methods</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Command Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Command pattern encapsulates a request as an object, thereby letting you parameterize clients with different requests, 
            queue or log requests, and support undoable operations.
          </p>
          
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">⚡ Key Characteristics</h4>
            <ul class="text-indigo-700 space-y-1">
              <li>• Encapsulates requests as objects</li>
              <li>• Decouples sender from receiver</li>
              <li>• Supports undo/redo operations</li>
              <li>• Enables request queuing and logging</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ When to Use</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Undo/redo functionality</li>
                <li>• Queuing operations</li>
                <li>• Logging and auditing</li>
                <li>• Macro recording</li>
                <li>• Remote procedure calls</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">🎯 Components</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Command:</strong> Interface for executing operations</li>
                <li>• <strong>ConcreteCommand:</strong> Implements execute method</li>
                <li>• <strong>Receiver:</strong> Knows how to perform operations</li>
                <li>• <strong>Invoker:</strong> Asks command to carry out request</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
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
                  <td class="border border-gray-300 p-3 font-semibold text-purple-700">Observer</td>
                  <td class="border border-gray-300 p-3">Notify dependents of changes</td>
                  <td class="border border-gray-300 p-3">Loose coupling</td>
                  <td class="border border-gray-300 p-3">Event systems</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold text-pink-700">Strategy</td>
                  <td class="border border-gray-300 p-3">Encapsulate algorithms</td>
                  <td class="border border-gray-300 p-3">Flexibility</td>
                  <td class="border border-gray-300 p-3">Algorithm selection</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold text-indigo-700">Command</td>
                  <td class="border border-gray-300 p-3">Encapsulate requests</td>
                  <td class="border border-gray-300 p-3">Undo/Redo support</td>
                  <td class="border border-gray-300 p-3">Action systems</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Use weak references in Observer to prevent memory leaks</li>
                <li>• Keep strategy interfaces simple and focused</li>
                <li>• Implement undo in commands when needed</li>
                <li>• Consider thread safety in behavioral patterns</li>
                <li>• Document the communication protocols clearly</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Common Pitfalls</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Memory leaks from observer references</li>
                <li>• Over-engineering simple algorithm choices</li>
                <li>• Complex command hierarchies</li>
                <li>• Notification storms in observer pattern</li>
                <li>• Ignoring exception handling in patterns</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Behavioral Patterns Implementation Examples</div>
        
        <div class="text-gray-400 mb-4">// === 1. OBSERVER PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Subject interface</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">Subject</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">attach</div>(<div class="text-blue-400">Observer</div> observer);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">detach</div>(<div class="text-blue-400">Observer</div> observer);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">notifyObservers</div>();<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Observer interface</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">Observer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">update</div>(<div class="text-blue-400">String</div> message);<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Concrete Subject - Stock Price Monitor</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">StockPrice</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Subject</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">Observer</div>&gt; observers = <div class="text-blue-400">new</div> <div class="text-yellow-400">ArrayList</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> symbol;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">double</div> price;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">StockPrice</div>(<div class="text-blue-400">String</div> symbol) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.symbol = symbol;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">attach</div>(<div class="text-blue-400">Observer</div> observer) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;observers.add(observer);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">detach</div>(<div class="text-blue-400">Observer</div> observer) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;observers.remove(observer);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">notifyObservers</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> message = symbol + <div class="text-green-300">" price updated to $"</div> + price;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Observer</div> observer : observers) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;observer.update(message);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setPrice</div>(<div class="text-blue-400">double</div> price) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.price = price;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;notifyObservers();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Concrete Observers</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">StockTrader</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Observer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">StockTrader</div>(<div class="text-blue-400">String</div> name) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">update</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Trader "</div> + name + <div class="text-green-300">": "</div> + message);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">StockAnalyst</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Observer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> firm;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">StockAnalyst</div>(<div class="text-blue-400">String</div> firm) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.firm = firm;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">update</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Analyst from "</div> + firm + <div class="text-green-300">": Analyzing - "</div> + message);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 2. STRATEGY PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Strategy interface</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">PaymentStrategy</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">boolean</div> <div class="text-yellow-400">pay</div>(<div class="text-blue-400">double</div> amount);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getPaymentType</div>();<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Concrete Strategies</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">CreditCardPayment</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">PaymentStrategy</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> cardNumber;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">CreditCardPayment</div>(<div class="text-blue-400">String</div> cardNumber, <div class="text-blue-400">String</div> name) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.cardNumber = cardNumber;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">pay</div>(<div class="text-blue-400">double</div> amount) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Paid $"</div> + amount + <div class="text-green-300">" using Credit Card ending in "</div> + <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cardNumber.substring(cardNumber.length() - <div class="text-green-300">4</div>));<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">true</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getPaymentType</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Credit Card"</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">PayPalPayment</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">PaymentStrategy</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> email;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">PayPalPayment</div>(<div class="text-blue-400">String</div> email) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.email = email;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">pay</div>(<div class="text-blue-400">double</div> amount) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Paid $"</div> + amount + <div class="text-green-300">" using PayPal account: "</div> + email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">true</div>;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getPaymentType</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"PayPal"</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Context class</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">ShoppingCart</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">PaymentStrategy</div> paymentStrategy;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">double</div> totalAmount;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setPaymentStrategy</div>(<div class="text-blue-400">PaymentStrategy</div> strategy) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.paymentStrategy = strategy;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">addItem</div>(<div class="text-blue-400">double</div> price) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;totalAmount += price;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">checkout</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (paymentStrategy == <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Please select a payment method"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-blue-400">false</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> paymentStrategy.pay(totalAmount);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 3. COMMAND PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// Command interface</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">Command</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">execute</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">undo</div>();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>();<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Receiver - Text Editor</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">TextEditor</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">StringBuilder</div> content = <div class="text-blue-400">new</div> <div class="text-yellow-400">StringBuilder</div>();<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">write</div>(<div class="text-blue-400">String</div> text) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;content.append(text);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">delete</div>(<div class="text-blue-400">int</div> length) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (content.length() >= length) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content.delete(content.length() - length, content.length());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getContent</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> content.toString();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Concrete Commands</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">WriteCommand</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Command</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">TextEditor</div> editor;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> text;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">WriteCommand</div>(<div class="text-blue-400">TextEditor</div> editor, <div class="text-blue-400">String</div> text) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.editor = editor;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.text = text;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">execute</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;editor.write(text);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">undo</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;editor.delete(text.length());<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Write: "</div> + text;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">DeleteCommand</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Command</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">TextEditor</div> editor;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">int</div> length;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> deletedText;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">DeleteCommand</div>(<div class="text-blue-400">TextEditor</div> editor, <div class="text-blue-400">int</div> length) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.editor = editor;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.length = length;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">execute</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> content = editor.getContent();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (content.length() >= length) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deletedText = content.substring(content.length() - length);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editor.delete(length);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">undo</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (deletedText != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;editor.write(deletedText);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getDescription</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Delete "</div> + length + <div class="text-green-300">" characters"</div>;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Invoker - Command Manager</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">CommandManager</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Stack</div>&lt;<div class="text-blue-400">Command</div>&gt; history = <div class="text-blue-400">new</div> <div class="text-yellow-400">Stack</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Stack</div>&lt;<div class="text-blue-400">Command</div>&gt; redoStack = <div class="text-blue-400">new</div> <div class="text-yellow-400">Stack</div>&lt;&gt;();<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">executeCommand</div>(<div class="text-blue-400">Command</div> command) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;command.execute();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;history.push(command);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;redoStack.clear(); <div class="text-gray-400">// Clear redo stack after new command</div><br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">undo</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!history.isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Command</div> command = history.pop();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;command.undo();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;redoStack.push(command);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">redo</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!redoStack.isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Command</div> command = redoStack.pop();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;command.execute();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;history.push(command);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === USAGE EXAMPLES ===</div>
        
        <div class="text-gray-400 mb-2">// 1. Observer Pattern Usage</div>
        <div class="text-blue-400">StockPrice</div> appleStock = <div class="text-blue-400">new</div> <div class="text-yellow-400">StockPrice</div>(<div class="text-green-300">"AAPL"</div>);<br/>
        <div class="text-blue-400">StockTrader</div> trader1 = <div class="text-blue-400">new</div> <div class="text-yellow-400">StockTrader</div>(<div class="text-green-300">"John"</div>);<br/>
        <div class="text-blue-400">StockAnalyst</div> analyst = <div class="text-blue-400">new</div> <div class="text-yellow-400">StockAnalyst</div>(<div class="text-green-300">"Goldman Sachs"</div>);<br/><br/>
        
        appleStock.attach(trader1);<br/>
        appleStock.attach(analyst);<br/>
        appleStock.setPrice(<div class="text-green-300">150.25</div>); <div class="text-gray-400">// Notifies all observers</div><br/><br/>
        
        <div class="text-gray-400 mb-2">// 2. Strategy Pattern Usage</div>
        <div class="text-blue-400">ShoppingCart</div> cart = <div class="text-blue-400">new</div> <div class="text-yellow-400">ShoppingCart</div>();<br/>
        cart.addItem(<div class="text-green-300">29.99</div>);<br/>
        cart.addItem(<div class="text-green-300">15.50</div>);<br/><br/>
        
        <div class="text-gray-400">// Pay with credit card</div><br/>
        cart.setPaymentStrategy(<div class="text-blue-400">new</div> <div class="text-yellow-400">CreditCardPayment</div>(<div class="text-green-300">"1234567890123456"</div>, <div class="text-green-300">"John Doe"</div>));<br/>
        cart.checkout();<br/><br/>
        
        <div class="text-gray-400 mb-2">// 3. Command Pattern Usage</div>
        <div class="text-blue-400">TextEditor</div> editor = <div class="text-blue-400">new</div> <div class="text-yellow-400">TextEditor</div>();<br/>
        <div class="text-blue-400">CommandManager</div> commandManager = <div class="text-blue-400">new</div> <div class="text-yellow-400">CommandManager</div>();<br/><br/>
        
        <div class="text-gray-400">// Execute commands</div><br/>
        commandManager.executeCommand(<div class="text-blue-400">new</div> <div class="text-yellow-400">WriteCommand</div>(editor, <div class="text-green-300">"Hello "</div>));<br/>
        commandManager.executeCommand(<div class="text-blue-400">new</div> <div class="text-yellow-400">WriteCommand</div>(editor, <div class="text-green-300">"World!"</div>));<br/>
        <div class="text-blue-400">System</div>.out.println(editor.getContent()); <div class="text-gray-400">// "Hello World!"</div><br/><br/>
        
        <div class="text-gray-400">// Undo and redo</div><br/>
        commandManager.undo(); <div class="text-gray-400">// Removes "World!"</div><br/>
        commandManager.redo(); <div class="text-gray-400">// Adds "World!" back</div><br/><br/>
        
        <div class="text-gray-400">// Benefits demonstrated:</div><br/>
        <div class="text-gray-400">// - Observer: Automatic notification of interested parties</div><br/>
        <div class="text-gray-400">// - Strategy: Flexible algorithm selection at runtime</div><br/>
        <div class="text-gray-400">// - Command: Undo/redo support and request encapsulation</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Build a Smart Home Automation System
        </h2>
        <p class="text-purple-100">Create a comprehensive smart home system that demonstrates all three behavioral patterns working together</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Exercise Overview</h3>
          <p class="text-gray-700 mb-4">
            Build a smart home automation system that can monitor environmental conditions, execute different automation strategies,
            and support programmable commands with undo/redo functionality. This system will demonstrate practical use of
            Observer, Strategy, and Command patterns.
          </p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Observer Pattern</h4>
              <p class="text-gray-700 text-sm">Monitor sensors and notify devices of environmental changes</p>
            </div>
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2">Strategy Pattern</h4>
              <p class="text-gray-700 text-sm">Different automation strategies for energy saving, comfort, and security</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Command Pattern</h4>
              <p class="text-gray-700 text-sm">Programmable device commands with scheduling and undo support</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          
          <div class="space-y-4">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">1. Environmental Monitoring (Observer)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create sensors for temperature, humidity, light, and motion</li>
                <li>• Implement smart devices that respond to sensor changes</li>
                <li>• Support multiple devices observing the same sensor</li>
                <li>• Include notification filtering and thresholds</li>
                <li>• Add logging and alerting capabilities</li>
              </ul>
            </div>
            
            <div class="bg-pink-50 p-4 rounded-lg">
              <h4 class="font-bold text-pink-800 mb-2">2. Automation Strategies (Strategy)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement EcoMode strategy (energy saving)</li>
                <li>• Create ComfortMode strategy (optimal comfort)</li>
                <li>• Add SecurityMode strategy (enhanced security)</li>
                <li>• Support custom user-defined strategies</li>
                <li>• Allow strategy switching based on time or conditions</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">3. Device Commands (Command)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create commands for lights, thermostat, locks, and appliances</li>
                <li>• Support macro commands (multiple actions)</li>
                <li>• Implement scheduling and delayed execution</li>
                <li>• Add undo/redo functionality for all commands</li>
                <li>• Include command history and replay capabilities</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">4. Integration Requirements</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• All patterns should work together seamlessly</li>
                <li>• Support configuration-driven automation rules</li>
                <li>• Include comprehensive error handling and logging</li>
                <li>• Provide unit tests for all components</li>
                <li>• Create a simple CLI or GUI interface</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Success Criteria</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                <div>
                  <p class="font-semibold text-gray-800">Observer Implementation</p>
                  <p class="text-gray-600 text-sm">Sensors notify multiple devices automatically when conditions change</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Strategy Switching</p>
                  <p class="text-gray-600 text-sm">Automation strategies can be changed dynamically at runtime</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Command Execution</p>
                  <p class="text-gray-600 text-sm">All device commands support execution and undo operations</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Macro Commands</p>
                  <p class="text-gray-600 text-sm">Complex sequences of commands can be created and executed</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Integration</p>
                  <p class="text-gray-600 text-sm">All patterns work together in realistic scenarios</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Error Handling</p>
                  <p class="text-gray-600 text-sm">Robust error handling and recovery mechanisms</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">7</div>
                <div>
                  <p class="font-semibold text-gray-800">Testing</p>
                  <p class="text-gray-600 text-sm">Comprehensive unit tests with good coverage</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">8</div>
                <div>
                  <p class="font-semibold text-gray-800">User Interface</p>
                  <p class="text-gray-600 text-sm">Simple interface to interact with the system</p>
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
                <li>• Sensor interface for environmental monitoring</li>
                <li>• SmartDevice interface for controllable devices</li>
                <li>• AutomationStrategy interface for different modes</li>
                <li>• DeviceCommand interface for device operations</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Step 2: Implement Observer Pattern</h4>
              <p class="text-gray-700 text-sm mb-2">Create the sensor-device notification system:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Implement various sensor types with threshold monitoring</li>
                <li>• Create smart devices that respond to sensor changes</li>
                <li>• Add notification filtering and priority handling</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Step 3: Build Strategy Pattern</h4>
              <p class="text-gray-700 text-sm mb-2">Create flexible automation strategies:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Implement different automation modes with distinct behaviors</li>
                <li>• Support strategy switching based on conditions</li>
                <li>• Allow custom user-defined automation rules</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Step 4: Create Command Pattern</h4>
              <p class="text-gray-700 text-sm mb-2">Build a comprehensive command system:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Implement commands for all device types</li>
                <li>• Add macro commands for complex sequences</li>
                <li>• Support scheduling and delayed execution</li>
                <li>• Implement full undo/redo functionality</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Step 5: Integration and Testing</h4>
              <p class="text-gray-700 text-sm mb-2">Bring everything together:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Create realistic home automation scenarios</li>
                <li>• Test pattern interactions and edge cases</li>
                <li>• Build a simple user interface</li>
                <li>• Document usage patterns and examples</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Bonus Challenges</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-teal-50 p-3 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-1">Machine Learning Integration</h4>
                <p class="text-gray-700 text-sm">Add learning capabilities to predict user preferences and optimize strategies</p>
              </div>
              
              <div class="bg-cyan-50 p-3 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-1">Voice Control</h4>
                <p class="text-gray-700 text-sm">Implement voice command recognition and natural language processing</p>
              </div>
              
              <div class="bg-blue-50 p-3 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-1">Mobile App Integration</h4>
                <p class="text-gray-700 text-sm">Create a mobile app interface with real-time monitoring and control</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">Cloud Connectivity</h4>
                <p class="text-gray-700 text-sm">Add cloud integration for remote monitoring and control</p>
              </div>
              
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">Energy Analytics</h4>
                <p class="text-gray-700 text-sm">Implement detailed energy usage tracking and optimization recommendations</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Security Features</h4>
                <p class="text-gray-700 text-sm">Add advanced security features like intrusion detection and emergency protocols</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};