import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_7: LessonContent = {
  title: 'Anti-patterns and Common Mistakes',
  type: 'lesson',
  duration: '45 min',
  module: 'Design Patterns',
  content: {
    overview: 'Learn to identify and avoid common anti-patterns and mistakes in design pattern usage. Understand when patterns become harmful, recognize code smells, and master the art of knowing when NOT to use design patterns. This lesson will help you become a more discerning developer.',
    objectives: [
      'Identify common anti-patterns and their negative impacts',
      'Understand when design patterns become harmful',
      'Recognize code smells that indicate pattern misuse',
      'Learn when NOT to use design patterns',
      'Master techniques for refactoring anti-patterns',
      'Develop judgment for appropriate pattern application'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Anti-patterns and Common Mistakes
        </h1>
        <p class="mt-3 text-red-100 text-lg">Learning what NOT to do: avoiding harmful patterns and design mistakes</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Anti-patterns?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Anti-patterns are common responses to recurring problems that are usually ineffective and counterproductive. 
            They appear to be solutions but actually create more problems than they solve. Understanding anti-patterns 
            is crucial for writing maintainable, scalable code.
          </p>
          
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">⚠️ Characteristics of Anti-patterns</h4>
            <ul class="text-red-700 space-y-1">
              <li>• <strong>Appear to solve problems</strong> but create more issues</li>
              <li>• <strong>Reduce code quality</strong> and maintainability</li>
              <li>• <strong>Increase complexity</strong> without proportional benefits</li>
              <li>• <strong>Make testing difficult</strong> or impossible</li>
              <li>• <strong>Violate SOLID principles</strong> and good design practices</li>
            </ul>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🚨 Warning Signs</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Code becomes harder to understand</li>
                <li>• Testing becomes increasingly difficult</li>
                <li>• Changes require modifications in multiple places</li>
                <li>• Performance degrades without clear benefits</li>
                <li>• Team velocity decreases over time</li>
                <li>• Bug reports increase in frequency</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">🎯 Root Causes</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Misunderstanding pattern intent</li>
                <li>• Over-engineering simple solutions</li>
                <li>• Cargo cult programming</li>
                <li>• Premature optimization</li>
                <li>• Lack of design experience</li>
                <li>• Pressure to use "best practices"</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Common Design Anti-patterns
          </h2>
          
          <div class="space-y-6">
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 class="font-bold text-red-800 mb-2">1. God Object (God Class)</h4>
              <p class="text-gray-700 mb-2">A class that knows too much or does too much, violating the Single Responsibility Principle.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-red-700 mb-1">Problems:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Difficult to understand and maintain</li>
                  <li>• Hard to test in isolation</li>
                  <li>• Changes affect multiple functionalities</li>
                  <li>• Violates Single Responsibility Principle</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 class="font-bold text-orange-800 mb-2">2. Spaghetti Code</h4>
              <p class="text-gray-700 mb-2">Code with complex and tangled control structures, making it difficult to follow the program flow.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-orange-700 mb-1">Problems:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Difficult to debug and modify</li>
                  <li>• Poor readability and maintainability</li>
                  <li>• High coupling between components</li>
                  <li>• Prone to bugs and side effects</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 class="font-bold text-yellow-800 mb-2">3. Copy-Paste Programming</h4>
              <p class="text-gray-700 mb-2">Duplicating code instead of creating reusable abstractions, leading to maintenance nightmares.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-yellow-700 mb-1">Problems:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Code duplication increases maintenance cost</li>
                  <li>• Bug fixes must be applied in multiple places</li>
                  <li>• Inconsistent behavior across similar code</li>
                  <li>• Violates DRY (Don't Repeat Yourself) principle</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 class="font-bold text-purple-800 mb-2">4. Golden Hammer</h4>
              <p class="text-gray-700 mb-2">Over-relying on a familiar pattern or technology for every problem, regardless of appropriateness.</p>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-purple-700 mb-1">Problems:</h5>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Inappropriate solutions for specific problems</li>
                  <li>• Missed opportunities for better approaches</li>
                  <li>• Over-engineered simple solutions</li>
                  <li>• Reduced learning and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Pattern-Specific Anti-patterns
          </h2>
          
          <div class="space-y-6">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 class="font-bold text-blue-800 mb-2">Singleton Abuse</h4>
              <p class="text-gray-700 mb-2">Overusing Singleton pattern, creating global state and hidden dependencies.</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded">
                  <h5 class="font-bold text-red-700 mb-1">Problems:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Global state makes testing difficult</li>
                    <li>• Hidden dependencies</li>
                    <li>• Thread safety issues</li>
                    <li>• Violates Single Responsibility</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-bold text-green-700 mb-1">Solutions:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Use dependency injection</li>
                    <li>• Consider if singleton is really needed</li>
                    <li>• Use factory or service locator</li>
                    <li>• Make dependencies explicit</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h4 class="font-bold text-green-800 mb-2">Factory Overuse</h4>
              <p class="text-gray-700 mb-2">Creating factories for simple object creation, adding unnecessary complexity.</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded">
                  <h5 class="font-bold text-red-700 mb-1">Problems:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Unnecessary abstraction layers</li>
                    <li>• Increased code complexity</li>
                    <li>• Harder to understand simple operations</li>
                    <li>• Over-engineering</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-bold text-green-700 mb-1">Solutions:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Use direct instantiation for simple cases</li>
                    <li>• Apply factories only when needed</li>
                    <li>• Consider static factory methods</li>
                    <li>• Evaluate complexity vs. benefits</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h4 class="font-bold text-purple-800 mb-2">Observer Pattern Overuse</h4>
              <p class="text-gray-700 mb-2">Creating complex observer chains that are difficult to debug and understand.</p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-3 rounded">
                  <h5 class="font-bold text-red-700 mb-1">Problems:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Difficult to trace execution flow</li>
                    <li>• Memory leaks from retained references</li>
                    <li>• Unexpected side effects</li>
                    <li>• Hard to debug cascading updates</li>
                  </ul>
                </div>
                <div class="bg-white p-3 rounded">
                  <h5 class="font-bold text-green-700 mb-1">Solutions:</h5>
                  <ul class="text-gray-600 text-sm space-y-1">
                    <li>• Use weak references</li>
                    <li>• Limit observer chains</li>
                    <li>• Consider event buses</li>
                    <li>• Document observer relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            When NOT to Use Design Patterns
          </h2>
          
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🎯 Key Principle: YAGNI (You Aren't Gonna Need It)</h4>
            <p class="text-green-700">Don't implement patterns based on speculation about future needs. Implement them when you actually need them.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">❌ Don't Use Patterns When:</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• The problem is simple and straightforward</li>
                <li>• The pattern adds more complexity than value</li>
                <li>• You're not sure which pattern to use</li>
                <li>• The team doesn't understand the pattern</li>
                <li>• Performance is critical and patterns add overhead</li>
                <li>• The codebase is small and unlikely to grow</li>
                <li>• You're using patterns just to show off</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Use Patterns When:</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• You have a recurring design problem</li>
                <li>• The pattern clearly improves code quality</li>
                <li>• The benefits outweigh the complexity</li>
                <li>• The team understands the pattern</li>
                <li>• You need flexibility for future changes</li>
                <li>• The pattern solves a real, current problem</li>
                <li>• It improves testability or maintainability</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Refactoring Anti-patterns
          </h2>
          
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">🔧 Refactoring Strategy</h4>
              <ol class="text-gray-700 space-y-2">
                <li><strong>1. Identify the anti-pattern:</strong> Recognize code smells and problematic structures</li>
                <li><strong>2. Understand the root cause:</strong> Why did this anti-pattern emerge?</li>
                <li><strong>3. Plan the refactoring:</strong> Design a better solution step by step</li>
                <li><strong>4. Refactor incrementally:</strong> Make small, safe changes with tests</li>
                <li><strong>5. Validate improvements:</strong> Ensure the refactoring actually improves the code</li>
              </ol>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">⚡ Common Refactoring Techniques</h4>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Extract Method:</strong> Break down large methods into smaller, focused ones</li>
                <li>• <strong>Extract Class:</strong> Split God objects into cohesive classes</li>
                <li>• <strong>Introduce Parameter Object:</strong> Group related parameters</li>
                <li>• <strong>Replace Conditional with Polymorphism:</strong> Use strategy pattern</li>
                <li>• <strong>Move Method:</strong> Place methods in appropriate classes</li>
                <li>• <strong>Introduce Interface:</strong> Abstract dependencies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Anti-patterns and Common Mistakes Examples</div>
        
        <div class="text-gray-400 mb-4">// === 1. GOD OBJECT ANTI-PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// BAD: God object that does everything</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserManager</div> {<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// Database operations</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">saveUser</div>(<div class="text-blue-400">User</div> user) { <div class="text-gray-400">/* database code */</div> }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">User</div> <div class="text-yellow-400">findUser</div>(<div class="text-blue-400">String</div> id) { <div class="text-gray-400">/* database code */</div> }<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Email operations</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">sendWelcomeEmail</div>(<div class="text-blue-400">User</div> user) { <div class="text-gray-400">/* email code */</div> }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">sendPasswordReset</div>(<div class="text-blue-400">User</div> user) { <div class="text-gray-400">/* email code */</div> }<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Validation</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">validateEmail</div>(<div class="text-blue-400">String</div> email) { <div class="text-gray-400">/* validation code */</div> }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">validatePassword</div>(<div class="text-blue-400">String</div> password) { <div class="text-gray-400">/* validation code */</div> }<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Business logic</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">registerUser</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Validation, saving, email sending all mixed together</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!validateEmail(user.getEmail())) <div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;saveUser(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;sendWelcomeEmail(user);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// GOOD: Separated responsibilities</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserRepository</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">save</div>(<div class="text-blue-400">User</div> user) { <div class="text-gray-400">/* database operations only */</div> }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">User</div> <div class="text-yellow-400">findById</div>(<div class="text-blue-400">String</div> id) { <div class="text-gray-400">/* database operations only */</div> }<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">EmailService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">sendWelcomeEmail</div>(<div class="text-blue-400">User</div> user) { <div class="text-gray-400">/* email operations only */</div> }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">sendPasswordReset</div>(<div class="text-blue-400">User</div> user) { <div class="text-gray-400">/* email operations only */</div> }<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserValidator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">isValidEmail</div>(<div class="text-blue-400">String</div> email) { <div class="text-gray-400">/* validation only */</div> }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">isValidPassword</div>(<div class="text-blue-400">String</div> password) { <div class="text-gray-400">/* validation only */</div> }<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">UserRepository</div> repository;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">EmailService</div> emailService;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">UserValidator</div> validator;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">registerUser</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (!validator.isValidEmail(user.getEmail())) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Invalid email"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;repository.save(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;emailService.sendWelcomeEmail(user);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 2. SINGLETON ABUSE ANTI-PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// BAD: Everything is a singleton</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">ConfigurationManager</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private static</div> <div class="text-blue-400">ConfigurationManager</div> instance;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">DatabaseConnection</div> dbConnection; <div class="text-gray-400">// Singleton managing another singleton!</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Logger</div> logger; <div class="text-gray-400">// And another one!</div><br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-yellow-400">ConfigurationManager</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.dbConnection = <div class="text-blue-400">DatabaseConnection</div>.getInstance(); <div class="text-gray-400">// Hidden dependency!</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.logger = <div class="text-blue-400">Logger</div>.getInstance(); <div class="text-gray-400">// Another hidden dependency!</div><br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">ConfigurationManager</div> <div class="text-yellow-400">getInstance</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (instance == <div class="text-blue-400">null</div>) instance = <div class="text-blue-400">new</div> <div class="text-yellow-400">ConfigurationManager</div>();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> instance;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// GOOD: Dependency injection instead of singletons</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">ConfigurationService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">DatabaseConnection</div> dbConnection;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private final</div> <div class="text-blue-400">Logger</div> logger;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Dependencies are explicit and injected</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">ConfigurationService</div>(<div class="text-blue-400">DatabaseConnection</div> dbConnection, <div class="text-blue-400">Logger</div> logger) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.dbConnection = dbConnection;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.logger = logger;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getConfiguration</div>(<div class="text-blue-400">String</div> key) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;logger.info(<div class="text-green-300">"Getting configuration for: "</div> + key);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> dbConnection.query(<div class="text-green-300">"SELECT value FROM config WHERE key = ?"</div>, key);<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 3. FACTORY OVERUSE ANTI-PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// BAD: Factory for everything, even simple objects</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">StringFactory</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">createString</div>(<div class="text-blue-400">String</div> value) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-blue-400">String</div>(value); <div class="text-gray-400">// Unnecessary factory!</div><br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// GOOD: Simple and direct</div>
        <div class="text-blue-400">String</div> name = <div class="text-green-300">"John"</div>; <div class="text-gray-400">// Just use the literal!</div><br/><br/>
        
        <div class="text-gray-400 mb-4">// === 4. COPY-PASTE PROGRAMMING ANTI-PATTERN ===</div>
        
        <div class="text-gray-400 mb-2">// BAD: Duplicated validation code</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserController</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">createUser</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (user.getName() == <div class="text-blue-400">null</div> || user.getName().trim().isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Name required"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Save user...</div><br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">updateUser</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (user.getName() == <div class="text-blue-400">null</div> || user.getName().trim().isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Name required"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Update user...</div><br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// GOOD: Extract common functionality</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserValidator</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">validate</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (user.getName() == <div class="text-blue-400">null</div> || user.getName().trim().isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Name required"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-blue-400">class</div> <div class="text-yellow-400">ImprovedUserController</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">createUser</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">UserValidator</div>.validate(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Save user...</div><br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">updateUser</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">UserValidator</div>.validate(user);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Update user...</div><br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Key lessons:</div><br/>
        <div class="text-gray-400">// 1. Don't use patterns just because you can</div><br/>
        <div class="text-gray-400">// 2. Simple problems need simple solutions</div><br/>
        <div class="text-gray-400">// 3. Patterns should improve code, not complicate it</div><br/>
        <div class="text-gray-400">// 4. Refactor anti-patterns incrementally</div><br/>
        <div class="text-gray-400">// 5. Focus on solving real problems, not imaginary ones</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Anti-pattern Detection and Refactoring
        </h2>
        <p class="text-red-100">Analyze problematic code examples, identify anti-patterns, and refactor them into clean, maintainable solutions</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Exercise Overview</h3>
          <p class="text-gray-700 mb-4">
            You'll be presented with several code examples containing common anti-patterns and design mistakes.
            Your task is to identify the problems, understand why they're harmful, and refactor the code into
            better solutions using appropriate design patterns and principles.
          </p>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Identify Anti-patterns</h4>
              <p class="text-gray-700 text-sm">Recognize common anti-patterns and code smells in the provided examples</p>
            </div>
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Analyze Problems</h4>
              <p class="text-gray-700 text-sm">Understand why these patterns are harmful and what problems they cause</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Refactor Solutions</h4>
              <p class="text-gray-700 text-sm">Apply proper design patterns and principles to create better solutions</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Code Examples to Analyze</h3>
          
          <div class="space-y-4">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">1. The Mega Service Class</h4>
              <p class="text-gray-700 text-sm mb-2">Analyze a service class that handles user management, email sending, file operations, logging, and database access all in one class.</p>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Identify violations of Single Responsibility Principle</li>
                <li>• Find tight coupling and hidden dependencies</li>
                <li>• Recognize testing difficulties</li>
                <li>• Refactor into properly separated concerns</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">2. The Singleton Nightmare</h4>
              <p class="text-gray-700 text-sm mb-2">Examine a system where everything is implemented as a singleton, creating a web of global dependencies.</p>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Identify inappropriate singleton usage</li>
                <li>• Find hidden dependencies and global state issues</li>
                <li>• Recognize testing and concurrency problems</li>
                <li>• Refactor using dependency injection</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">3. The Factory Explosion</h4>
              <p class="text-gray-700 text-sm mb-2">Review a codebase where factories are created for every single object, including simple value objects.</p>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Identify unnecessary abstraction layers</li>
                <li>• Find over-engineered simple operations</li>
                <li>• Recognize when factories add no value</li>
                <li>• Simplify by removing unnecessary patterns</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">4. The Copy-Paste Catastrophe</h4>
              <p class="text-gray-700 text-sm mb-2">Analyze code with extensive duplication across multiple classes and methods.</p>
              <ul class="space-y-1 text-gray-700 text-sm">
                <li>• Identify code duplication patterns</li>
                <li>• Find inconsistent implementations</li>
                <li>• Recognize maintenance nightmares</li>
                <li>• Extract common functionality and create reusable components</li>
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
                  <p class="font-semibold text-gray-800">Anti-pattern Recognition</p>
                  <p class="text-gray-600 text-sm">Correctly identify all anti-patterns in the provided examples</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Problem Analysis</p>
                  <p class="text-gray-600 text-sm">Explain why each anti-pattern is harmful and what problems it causes</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Refactoring Solutions</p>
                  <p class="text-gray-600 text-sm">Provide clean, well-designed alternatives to the problematic code</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Design Principles</p>
                  <p class="text-gray-600 text-sm">Apply SOLID principles and other design best practices</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Pattern Appropriateness</p>
                  <p class="text-gray-600 text-sm">Demonstrate when to use patterns and when to avoid them</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Code Quality</p>
                  <p class="text-gray-600 text-sm">Refactored code is clean, testable, and maintainable</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">7</div>
                <div>
                  <p class="font-semibold text-gray-800">Documentation</p>
                  <p class="text-gray-600 text-sm">Clear explanations of problems found and solutions applied</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">8</div>
                <div>
                  <p class="font-semibold text-gray-800">Testing Strategy</p>
                  <p class="text-gray-600 text-sm">Demonstrate how refactored code is easier to test</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🛠️ Implementation Guide</h3>
          
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Step 1: Code Smell Detection</h4>
              <p class="text-gray-700 text-sm mb-2">Look for these warning signs:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Large classes with multiple responsibilities</li>
                <li>• Long parameter lists and complex constructors</li>
                <li>• Duplicated code across multiple locations</li>
                <li>• Global state and hidden dependencies</li>
                <li>• Difficult-to-test code structures</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Step 2: Impact Assessment</h4>
              <p class="text-gray-700 text-sm mb-2">Evaluate the consequences:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• How does this affect maintainability?</li>
                <li>• What testing challenges does it create?</li>
                <li>• How does it impact code reusability?</li>
                <li>• What performance implications exist?</li>
                <li>• How does it affect team productivity?</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Step 3: Refactoring Plan</h4>
              <p class="text-gray-700 text-sm mb-2">Create a systematic approach:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Identify the core responsibilities</li>
                <li>• Plan the separation of concerns</li>
                <li>• Choose appropriate design patterns</li>
                <li>• Design the new class structure</li>
                <li>• Plan the migration strategy</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-4">🎯 Deliverables</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-bold mb-2">Analysis Report</h4>
              <ul class="text-blue-100 text-sm space-y-1">
                <li>• Anti-pattern identification for each example</li>
                <li>• Problem analysis and impact assessment</li>
                <li>• Root cause analysis</li>
                <li>• Refactoring recommendations</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-2">Refactored Code</h4>
              <ul class="text-blue-100 text-sm space-y-1">
                <li>• Clean, well-structured implementations</li>
                <li>• Proper separation of concerns</li>
                <li>• Appropriate use of design patterns</li>
                <li>• Unit tests demonstrating testability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  }
};