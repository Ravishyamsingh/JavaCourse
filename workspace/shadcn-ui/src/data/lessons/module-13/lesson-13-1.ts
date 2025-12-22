import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_1: LessonContent = {
  title: 'Introduction to Design Patterns',
  type: 'lesson',
  duration: '45 min',
  module: 'Design Patterns',
  content: {
    overview: 'Discover the fundamental concepts of design patterns in software development. Learn how proven solutions to common programming problems can improve code quality, maintainability, and team communication.',
    objectives: [
      'Understand what design patterns are and why they matter',
      'Learn the history and classification of design patterns',
      'Explore the Gang of Four (GoF) pattern categories',
      'Understand when and how to apply design patterns effectively',
      'Recognize the benefits and potential drawbacks of using patterns',
      'Develop pattern recognition skills for real-world scenarios'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Design Patterns
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Proven solutions to recurring design problems in software development</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What Are Design Patterns?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Design patterns are reusable solutions to commonly occurring problems in software design. 
            They represent best practices evolved over time by experienced developers and provide a common vocabulary for discussing design solutions.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🎯 Key Characteristics</h4>
            <p class="text-purple-700">Design patterns are not code, but rather descriptions of how to solve problems that can be used in many different situations.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">What Patterns Provide</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Common Vocabulary</h5>
                  <p class="text-gray-600 text-sm">Shared language for developers</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Proven Solutions</h5>
                  <p class="text-gray-600 text-sm">Time-tested approaches to common problems</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                  <h5 class="font-bold text-orange-700">Best Practices</h5>
                  <p class="text-gray-600 text-sm">Encapsulated design wisdom</p>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Pattern Elements</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Name:</strong> Identifies the pattern</li>
                <li>• <strong>Problem:</strong> Describes when to apply the pattern</li>
                <li>• <strong>Solution:</strong> Describes the design elements</li>
                <li>• <strong>Consequences:</strong> Results and trade-offs</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Gang of Four (GoF) Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The most influential work on design patterns is "Design Patterns: Elements of Reusable Object-Oriented Software" by the Gang of Four, which categorizes 23 classic patterns into three types.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Creational Patterns</h4>
                <p class="text-gray-600 text-sm mb-3">Deal with object creation mechanisms</p>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• Singleton</li>
                  <li>• Factory Method</li>
                  <li>• Abstract Factory</li>
                  <li>• Builder</li>
                  <li>• Prototype</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Structural Patterns</h4>
                <p class="text-gray-600 text-sm mb-3">Deal with object composition</p>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• Adapter</li>
                  <li>• Bridge</li>
                  <li>• Composite</li>
                  <li>• Decorator</li>
                  <li>• Facade</li>
                  <li>• Flyweight</li>
                  <li>• Proxy</li>
                </ul>
              </div>
              
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Behavioral Patterns</h4>
                <p class="text-gray-600 text-sm mb-3">Deal with communication between objects</p>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li>• Observer</li>
                  <li>• Strategy</li>
                  <li>• Command</li>
                  <li>• State</li>
                  <li>• Template Method</li>
                  <li>• Chain of Responsibility</li>
                  <li>• And more...</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Benefits and Considerations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Design patterns offer significant benefits but should be applied judiciously. Understanding when and how to use them is crucial for effective software design.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Benefits</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">Reusability</h5>
                    <p class="text-gray-600 text-sm">Solutions can be applied to similar problems</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">Communication</h5>
                    <p class="text-gray-600 text-sm">Common vocabulary for design discussions</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">Quality</h5>
                    <p class="text-gray-600 text-sm">Proven solutions improve code quality</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Considerations</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">Complexity</h5>
                    <p class="text-gray-600 text-sm">Can add unnecessary complexity if misused</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-yellow-400">
                    <h5 class="font-bold text-yellow-700">Over-engineering</h5>
                    <p class="text-gray-600 text-sm">Don't force patterns where they don't fit</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-indigo-400">
                    <h5 class="font-bold text-indigo-700">Context</h5>
                    <p class="text-gray-600 text-sm">Consider the specific problem context</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            When to Use Design Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Effective use of design patterns requires understanding when they add value versus when they introduce unnecessary complexity.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Good Indicators</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Recurring design problems</li>
                  <li>• Need for flexible, maintainable code</li>
                  <li>• Complex object relationships</li>
                  <li>• Requirements likely to change</li>
                  <li>• Team needs common design vocabulary</li>
                </ul>
              </div>
              
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Warning Signs</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Simple problems with simple solutions</li>
                  <li>• Forcing patterns for the sake of using them</li>
                  <li>• Adding complexity without clear benefits</li>
                  <li>• Premature optimization</li>
                  <li>• Misunderstanding the pattern's intent</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Design Pattern Example: Simple vs Pattern-Based Approach</div>
        
        <div class="text-gray-400 mb-4">// === Problem: Creating Different Types of Loggers ===</div>
        
        <div class="text-gray-400 mb-4">// Without Pattern (Tightly Coupled)</div>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Application</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">processData</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Hard-coded logger creation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">FileLogger</div> logger = <div class="text-blue-400">new</div> <div class="text-yellow-400">FileLogger</div>(<div class="text-green-300">"app.log"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;logger.log(<div class="text-green-300">"Processing started"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// What if we need ConsoleLogger or DatabaseLogger?</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// We'd need to change this code!</div><br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// With Pattern (Factory Pattern - Flexible)</div>
        <div class="text-gray-400">// Step 1: Define common interface</div><br/>
        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">Logger</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">log</div>(<div class="text-blue-400">String</div> message);<br/>
        }<br/><br/>

        <div class="text-gray-400">// Step 2: Concrete implementations</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">FileLogger</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Logger</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> filename;<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">FileLogger</div>(<div class="text-blue-400">String</div> filename) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.filename = filename;<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">log</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Write to file</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"[FILE] "</div> + message);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ConsoleLogger</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">Logger</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">log</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"[CONSOLE] "</div> + message);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400">// Step 3: Factory to create loggers</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">LoggerFactory</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">Logger</div> <div class="text-yellow-400">createLogger</div>(<div class="text-blue-400">String</div> type) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">switch</div> (type.toLowerCase()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-green-300">"file"</div>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">FileLogger</div>(<div class="text-green-300">"app.log"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">case</div> <div class="text-green-300">"console"</div>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">ConsoleLogger</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">default</div>:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Unknown logger type: "</div> + type);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400">// Step 4: Client code (now flexible!)</div><br/>
        <div class="text-blue-400">public class</div> <div class="text-yellow-400">ImprovedApplication</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">processData</div>(<div class="text-blue-400">String</div> loggerType) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Flexible logger creation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-4">Logger</div> logger = <div class="text-blue-400">LoggerFactory</div>.createLogger(loggerType);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;logger.log(<div class="text-green-300">"Processing started"</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Process data...</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;logger.log(<div class="text-green-300">"Processing completed"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ImprovedApplication</div> app = <div class="text-blue-400">new</div> <div class="text-yellow-400">ImprovedApplication</div>();<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Can easily switch logger types</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;app.processData(<div class="text-green-300">"console"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;app.processData(<div class="text-green-300">"file"</div>);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Benefits Demonstrated ===</div>
        <div class="text-gray-400">// 1. Flexibility: Easy to add new logger types</div><br/>
        <div class="text-gray-400">// 2. Maintainability: Changes isolated to factory</div><br/>
        <div class="text-gray-400">// 3. Testability: Can inject mock loggers</div><br/>
        <div class="text-gray-400">// 4. Reusability: Logger interface can be used anywhere</div><br/>
        <div class="text-gray-400">// 5. Communication: Team understands "Factory Pattern"</div>
      </div>
    `,
    exercise: `
1) Identify the three main categories of design patterns and give an example of each.
2) Explain what makes a good candidate for applying a design pattern.
3) Describe the difference between creational and structural patterns.
4) What are the potential drawbacks of using design patterns?
5) How do design patterns improve team communication and code maintainability?
`
  }
};