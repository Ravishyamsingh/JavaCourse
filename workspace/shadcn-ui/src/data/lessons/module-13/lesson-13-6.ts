import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_6: LessonContent = {
  title: 'Dependency Injection Patterns',
  type: 'lesson',
  duration: '50 min',
  module: 'Design Patterns',
  content: {
    overview: 'Master Dependency Injection (DI) patterns and understand how they promote loose coupling, improve testability, and enhance maintainability. Learn different DI techniques including constructor injection, setter injection, and interface injection, along with DI containers and frameworks.',
    objectives: [
      'Understand the principles and benefits of Dependency Injection',
      'Learn different types of dependency injection patterns',
      'Master constructor, setter, and interface injection techniques',
      'Understand Inversion of Control (IoC) containers',
      'Implement custom DI containers and use existing frameworks',
      'Apply DI patterns to improve code testability and maintainability'
    ],
    theory: `
      <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Dependency Injection Patterns
        </h1>
        <p class="mt-3 text-emerald-100 text-lg">Achieving loose coupling and better testability through dependency injection</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What is Dependency Injection?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Dependency Injection is a design pattern that implements Inversion of Control (IoC) for resolving dependencies. 
            Instead of objects creating their own dependencies, dependencies are provided (injected) from external sources, 
            promoting loose coupling and better testability.
          </p>
          
          <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400 mb-4">
            <h4 class="font-bold text-emerald-800 mb-2">🎯 Core Principles</h4>
            <ul class="text-emerald-700 space-y-1">
              <li>• <strong>Inversion of Control:</strong> Dependencies are provided rather than created</li>
              <li>• <strong>Loose Coupling:</strong> Classes depend on abstractions, not concrete implementations</li>
              <li>• <strong>Single Responsibility:</strong> Classes focus on their core logic, not dependency management</li>
              <li>• <strong>Open/Closed Principle:</strong> Easy to extend with new implementations</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Improved testability (easy mocking)</li>
                <li>• Loose coupling between components</li>
                <li>• Better code maintainability</li>
                <li>• Enhanced flexibility and extensibility</li>
                <li>• Easier configuration management</li>
                <li>• Support for different implementations</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🎯 Use Cases</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Service layer implementations</li>
                <li>• Database access objects</li>
                <li>• External API clients</li>
                <li>• Configuration providers</li>
                <li>• Logging and monitoring services</li>
                <li>• Business rule engines</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Types of Dependency Injection
          </h2>
          
          <div class="space-y-6">
            <div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
              <h4 class="font-bold text-teal-800 mb-2">1. Constructor Injection</h4>
              <p class="text-gray-700 mb-2">Dependencies are provided through the class constructor. This is the most common and recommended approach.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-green-700 mb-1">Advantages:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Ensures dependencies are available at object creation</li>
                  <li>• Makes dependencies explicit and required</li>
                  <li>• Supports immutable objects</li>
                  <li>• Fails fast if dependencies are missing</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 class="font-bold text-blue-800 mb-2">2. Setter Injection</h4>
              <p class="text-gray-700 mb-2">Dependencies are provided through setter methods after object construction.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-orange-700 mb-1">Advantages:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Allows optional dependencies</li>
                  <li>• Supports reconfiguration at runtime</li>
                  <li>• Works with legacy code</li>
                  <li>• Flexible dependency management</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 class="font-bold text-purple-800 mb-2">3. Interface Injection</h4>
              <p class="text-gray-700 mb-2">Dependencies are provided through interface methods that the class implements.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-purple-700 mb-1">Characteristics:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Less common in modern applications</li>
                  <li>• Requires implementing injection interfaces</li>
                  <li>• More complex but very explicit</li>
                  <li>• Used in some enterprise frameworks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Best Practices and Anti-patterns
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Prefer constructor injection for required dependencies</li>
                <li>• Use interfaces for dependency contracts</li>
                <li>• Keep constructors simple and fast</li>
                <li>• Avoid circular dependencies</li>
                <li>• Use meaningful names for dependencies</li>
                <li>• Configure dependencies at application startup</li>
                <li>• Use scoped instances appropriately</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Anti-patterns to Avoid</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Service Locator:</strong> Hidden dependencies</li>
                <li>• <strong>God Object:</strong> Too many dependencies</li>
                <li>• <strong>Circular Dependencies:</strong> Design smell</li>
                <li>• <strong>Container Coupling:</strong> Direct container usage</li>
                <li>• <strong>Over-injection:</strong> Injecting everything</li>
                <li>• <strong>Temporal Coupling:</strong> Order-dependent injection</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Dependency Injection Pattern Examples</div>
        
        <div class="text-gray-400 mb-4">// === PROBLEM: TIGHT COUPLING (WITHOUT DI) ===</div>
        
        <div class="text-gray-400 mb-2">// Tightly coupled code - hard to test and maintain</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">OrderService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">EmailService</div> emailService;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">DatabaseService</div> databaseService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">OrderService</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Hard-coded dependencies - tight coupling!</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.emailService = <div class="text-blue-400">new</div> <div class="text-yellow-400">EmailService</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.databaseService = <div class="text-blue-400">new</div> <div class="text-yellow-400">DatabaseService</div>();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === SOLUTION: DEPENDENCY INJECTION ===</div>
        
        <div class="text-gray-400 mb-2">// 1. Define interfaces for dependencies</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">EmailService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">sendConfirmation</div>(<div class="text-blue-400">String</div> email);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">sendNotification</div>(<div class="text-blue-400">String</div> email, <div class="text-blue-400">String</div> message);<br/>
        }<br/><br/>
        
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">DatabaseService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">save</div>(<div class="text-blue-400">Order</div> order);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">Order</div> <div class="text-yellow-400">findById</div>(<div class="text-blue-400">String</div> id);<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// 2. Constructor injection implementation</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">OrderService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">EmailService</div> emailService;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">DatabaseService</div> databaseService;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Constructor injection - dependencies provided externally</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">OrderService</div>(<div class="text-blue-400">EmailService</div> emailService, <div class="text-blue-400">DatabaseService</div> databaseService) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.emailService = <div class="text-blue-400">Objects</div>.requireNonNull(emailService);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.databaseService = <div class="text-blue-400">Objects</div>.requireNonNull(databaseService);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">processOrder</div>(<div class="text-blue-400">Order</div> order) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;databaseService.save(order);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;emailService.sendConfirmation(order.getCustomerEmail());<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === SETTER INJECTION EXAMPLE ===</div>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">NotificationService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">EmailService</div> emailService;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">SMSService</div> smsService; <div class="text-gray-400">// Optional</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Required dependency</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setEmailService</div>(<div class="text-blue-400">EmailService</div> emailService) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.emailService = emailService;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Optional dependency</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setSMSService</div>(<div class="text-blue-400">SMSService</div> smsService) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.smsService = smsService;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">sendNotification</div>(<div class="text-blue-400">String</div> message, <div class="text-blue-400">String</div> recipient) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (emailService == <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalStateException</div>(<div class="text-green-300">"EmailService not injected"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;emailService.sendNotification(recipient, message);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Use optional dependency if available</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (smsService != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;smsService.sendSMS(recipient, message);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === SIMPLE DI CONTAINER ===</div>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">SimpleDIContainer</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">Class</div>&lt;?&gt;, <div class="text-blue-400">Object</div>&gt; singletons = <div class="text-blue-400">new</div> <div class="text-yellow-400">HashMap</div>&lt;&gt;();<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Map</div>&lt;<div class="text-blue-400">Class</div>&lt;?&gt;, <div class="text-blue-400">Class</div>&lt;?&gt;&gt; bindings = <div class="text-blue-400">new</div> <div class="text-yellow-400">HashMap</div>&lt;&gt;();<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> &lt;<div class="text-blue-400">T</div>&gt; <div class="text-blue-400">void</div> <div class="text-yellow-400">registerSingleton</div>(<div class="text-blue-400">Class</div>&lt;<div class="text-blue-400">T</div>&gt; type, <div class="text-blue-400">T</div> instance) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;singletons.put(type, instance);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> &lt;<div class="text-blue-400">T</div>&gt; <div class="text-blue-400">void</div> <div class="text-yellow-400">bind</div>(<div class="text-blue-400">Class</div>&lt;<div class="text-blue-400">T</div>&gt; interfaceType, <div class="text-blue-400">Class</div>&lt;? <div class="text-blue-400">extends</div> <div class="text-blue-400">T</div>&gt; implType) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;bindings.put(interfaceType, implType);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@SuppressWarnings</div>(<div class="text-green-300">"unchecked"</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> &lt;<div class="text-blue-400">T</div>&gt; <div class="text-blue-400">T</div> <div class="text-yellow-400">getInstance</div>(<div class="text-blue-400">Class</div>&lt;<div class="text-blue-400">T</div>&gt; type) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (singletons.containsKey(type)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> (<div class="text-blue-400">T</div>) singletons.get(type);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Class</div>&lt;?&gt; implType = bindings.get(type);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (implType != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> createInstance((<div class="text-blue-400">Class</div>&lt;<div class="text-blue-400">T</div>&gt;) implType);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> createInstance(type);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> &lt;<div class="text-blue-400">T</div>&gt; <div class="text-blue-400">T</div> <div class="text-yellow-400">createInstance</div>(<div class="text-blue-400">Class</div>&lt;<div class="text-blue-400">T</div>&gt; type) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Constructor</div>&lt;<div class="text-blue-400">T</div>&gt; constructor = type.getDeclaredConstructor();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> constructor.newInstance();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">Exception</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">RuntimeException</div>(<div class="text-green-300">"Failed to create instance"</div>, e);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === USAGE EXAMPLE ===</div>
        
        <div class="text-gray-400 mb-2">// Manual dependency injection</div>
        <div class="text-blue-400">EmailService</div> emailService = <div class="text-blue-400">new</div> <div class="text-yellow-400">SMTPEmailService</div>();<br/>
        <div class="text-blue-400">DatabaseService</div> dbService = <div class="text-blue-400">new</div> <div class="text-yellow-400">MySQLDatabaseService</div>();<br/>
        <div class="text-blue-400">OrderService</div> orderService = <div class="text-blue-400">new</div> <div class="text-yellow-400">OrderService</div>(emailService, dbService);<br/><br/>
        
        <div class="text-gray-400 mb-2">// Using DI container</div>
        <div class="text-blue-400">SimpleDIContainer</div> container = <div class="text-blue-400">new</div> <div class="text-yellow-400">SimpleDIContainer</div>();<br/>
        container.bind(<div class="text-blue-400">EmailService</div>.<div class="text-blue-400">class</div>, <div class="text-blue-400">SMTPEmailService</div>.<div class="text-blue-400">class</div>);<br/>
        container.bind(<div class="text-blue-400">DatabaseService</div>.<div class="text-blue-400">class</div>, <div class="text-blue-400">MySQLDatabaseService</div>.<div class="text-blue-400">class</div>);<br/><br/>
        
        <div class="text-blue-400">OrderService</div> service = container.getInstance(<div class="text-blue-400">OrderService</div>.<div class="text-blue-400">class</div>);<br/><br/>
        
        <div class="text-gray-400">// Benefits: Loose coupling, easy testing, flexible configuration</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Build a Notification System with DI
        </h2>
        <p class="text-emerald-100">Create a comprehensive notification system using dependency injection patterns to achieve loose coupling and high testability</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Exercise Overview</h3>
          <p class="text-gray-700 mb-4">
            Build a notification system that can send notifications through multiple channels (email, SMS, push notifications, Slack). 
            The system should use dependency injection to achieve loose coupling, support different notification strategies, 
            and be easily testable with mock implementations.
          </p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-emerald-50 p-4 rounded-lg">
              <h4 class="font-bold text-emerald-800 mb-2">Constructor Injection</h4>
              <p class="text-gray-700 text-sm">Use constructor injection for required dependencies</p>
            </div>
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">Setter Injection</h4>
              <p class="text-gray-700 text-sm">Use setter injection for optional dependencies and configuration</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">DI Container</h4>
              <p class="text-gray-700 text-sm">Implement a custom DI container for automatic dependency resolution</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          
          <div class="space-y-4">
            <div class="bg-emerald-50 p-4 rounded-lg">
              <h4 class="font-bold text-emerald-800 mb-2">1. Core Components</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• NotificationService interface and implementation</li>
                <li>• Multiple notification channels (Email, SMS, Push, Slack)</li>
                <li>• Message formatting and templating system</li>
                <li>• User preference management</li>
                <li>• Notification history and tracking</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">2. Dependency Injection Implementation</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use constructor injection for required dependencies</li>
                <li>• Use setter injection for optional configuration</li>
                <li>• Implement interface-based dependency contracts</li>
                <li>• Support multiple implementations of same interface</li>
                <li>• Handle circular dependency detection</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Custom DI Container</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Automatic dependency resolution</li>
                <li>• Singleton and prototype scopes</li>
                <li>• Configuration through annotations or configuration files</li>
                <li>• Lifecycle management (initialization/cleanup)</li>
                <li>• Error handling and validation</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">4. Testing and Validation</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Unit tests with mock dependencies</li>
                <li>• Integration tests with real implementations</li>
                <li>• Performance testing of DI container</li>
                <li>• Configuration validation tests</li>
                <li>• Error handling and edge case testing</li>
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
                  <p class="font-semibold text-gray-800">Loose Coupling</p>
                  <p class="text-gray-600 text-sm">Components depend on interfaces, not concrete implementations</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Dependency Injection</p>
                  <p class="text-gray-600 text-sm">All three types of DI (constructor, setter, interface) implemented</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Container Implementation</p>
                  <p class="text-gray-600 text-sm">Custom DI container with automatic dependency resolution</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Multiple Channels</p>
                  <p class="text-gray-600 text-sm">Support for email, SMS, push, and Slack notifications</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Testability</p>
                  <p class="text-gray-600 text-sm">Easy to test with mock dependencies and comprehensive test coverage</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Configuration</p>
                  <p class="text-gray-600 text-sm">Flexible configuration through multiple approaches</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">7</div>
                <div>
                  <p class="font-semibold text-gray-800">Error Handling</p>
                  <p class="text-gray-600 text-sm">Robust error handling and validation throughout the system</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">8</div>
                <div>
                  <p class="font-semibold text-gray-800">Documentation</p>
                  <p class="text-gray-600 text-sm">Clear documentation and usage examples</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Guide</h3>
          
          <div class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Step 1: Design Interfaces</h4>
              <p class="text-gray-700 text-sm mb-2">Create clean interfaces for all components:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• NotificationChannel interface for different delivery methods</li>
                <li>• MessageFormatter interface for message templating</li>
                <li>• UserPreferenceService interface for user settings</li>
                <li>• NotificationHistoryService interface for tracking</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Step 2: Implement Core Services</h4>
              <p class="text-gray-700 text-sm mb-2">Build the notification system components:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Create concrete implementations for each notification channel</li>
                <li>• Implement message formatting with template support</li>
                <li>• Build user preference management system</li>
                <li>• Add notification history tracking</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Step 3: Apply Dependency Injection</h4>
              <p class="text-gray-700 text-sm mb-2">Implement all three DI patterns:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Use constructor injection for required dependencies</li>
                <li>• Use setter injection for optional configuration</li>
                <li>• Implement interface injection where appropriate</li>
                <li>• Ensure all dependencies are injected, not created</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Step 4: Build DI Container</h4>
              <p class="text-gray-700 text-sm mb-2">Create a comprehensive DI container:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Implement automatic dependency resolution</li>
                <li>• Support singleton and prototype scopes</li>
                <li>• Add configuration through annotations or files</li>
                <li>• Include lifecycle management and error handling</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Step 5: Testing and Validation</h4>
              <p class="text-gray-700 text-sm mb-2">Comprehensive testing approach:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Create unit tests with mock dependencies</li>
                <li>• Build integration tests with real implementations</li>
                <li>• Test DI container performance and edge cases</li>
                <li>• Validate configuration and error scenarios</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Bonus Challenges</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">Annotation-based Configuration</h4>
                <p class="text-gray-700 text-sm">Add support for @Inject, @Singleton, and @Component annotations</p>
              </div>
              
              <div class="bg-violet-50 p-3 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-1">AOP Integration</h4>
                <p class="text-gray-700 text-sm">Implement aspect-oriented programming for cross-cutting concerns</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Configuration Profiles</h4>
                <p class="text-gray-700 text-sm">Support different configurations for dev, test, and production environments</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-rose-50 p-3 rounded-lg">
                <h4 class="font-bold text-rose-800 mb-1">Spring Integration</h4>
                <p class="text-gray-700 text-sm">Compare your implementation with Spring Framework's DI container</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Performance Optimization</h4>
                <p class="text-gray-700 text-sm">Optimize container performance with caching and lazy initialization</p>
              </div>
              
              <div class="bg-amber-50 p-3 rounded-lg">
                <h4 class="font-bold text-amber-800 mb-1">Microservices Support</h4>
                <p class="text-gray-700 text-sm">Extend the system to work in a distributed microservices architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};