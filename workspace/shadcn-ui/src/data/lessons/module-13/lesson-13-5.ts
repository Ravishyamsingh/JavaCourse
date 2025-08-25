import { LessonContent } from '../../types/LessonTypes';

export const lesson_13_5: LessonContent = {
  title: 'MVC and MVP Patterns',
  type: 'lesson',
  duration: '55 min',
  module: 'Design Patterns',
  content: {
    overview: 'Master the Model-View-Controller (MVC) and Model-View-Presenter (MVP) architectural patterns. Learn how these patterns separate concerns, improve testability, and create maintainable applications with clear separation between business logic, presentation, and user interaction.',
    objectives: [
      'Understand the purpose and components of MVC pattern',
      'Master MVP pattern and its differences from MVC',
      'Learn when to use MVC vs MVP patterns',
      'Implement real-world examples of both patterns',
      'Understand the benefits and trade-offs of each pattern',
      'Apply these patterns in different application contexts'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          MVC and MVP Architectural Patterns
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Separating concerns with Model-View-Controller and Model-View-Presenter patterns</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Model-View-Controller (MVC) Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            MVC is an architectural pattern that separates an application into three interconnected components: Model (data and business logic), 
            View (user interface), and Controller (handles user input and coordinates between Model and View).
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🏗️ MVC Components</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border-l-4 border-green-400">
                <h5 class="font-bold text-green-700">Model</h5>
                <p class="text-gray-600 text-sm">Data, business logic, and rules</p>
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                <h5 class="font-bold text-purple-700">View</h5>
                <p class="text-gray-600 text-sm">User interface and presentation</p>
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                <h5 class="font-bold text-orange-700">Controller</h5>
                <p class="text-gray-600 text-sm">User input handling and coordination</p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Clear separation of concerns</li>
                <li>• Improved maintainability</li>
                <li>• Better testability</li>
                <li>• Parallel development possible</li>
                <li>• Reusable components</li>
                <li>• Multiple views for same model</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">🎯 Use Cases</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Web applications (Spring MVC, ASP.NET MVC)</li>
                <li>• Desktop applications</li>
                <li>• Mobile applications</li>
                <li>• RESTful APIs</li>
                <li>• Enterprise applications</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Model-View-Presenter (MVP) Pattern
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            MVP is a derivative of MVC where the Presenter handles all the UI logic and acts as an intermediary between View and Model. 
            The View is more passive compared to MVC, with the Presenter controlling the View's behavior.
          </p>
          
          <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mb-4">
            <h4 class="font-bold text-cyan-800 mb-2">🎭 MVP Components</h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white p-3 rounded border-l-4 border-green-400">
                <h5 class="font-bold text-green-700">Model</h5>
                <p class="text-gray-600 text-sm">Data and business logic (same as MVC)</p>
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                <h5 class="font-bold text-blue-700">View</h5>
                <p class="text-gray-600 text-sm">Passive UI that delegates to Presenter</p>
              </div>
              <div class="bg-white p-3 rounded border-l-4 border-red-400">
                <h5 class="font-bold text-red-700">Presenter</h5>
                <p class="text-gray-600 text-sm">Contains UI logic and coordinates Model/View</p>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Benefits</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Better testability (passive view)</li>
                <li>• Clear separation of UI logic</li>
                <li>• Easier unit testing</li>
                <li>• Reduced view complexity</li>
                <li>• Better for complex UI logic</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">🎯 Use Cases</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Android applications</li>
                <li>• Windows Forms applications</li>
                <li>• Complex desktop applications</li>
                <li>• Applications requiring extensive testing</li>
                <li>• UI-heavy applications</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            MVC vs MVP Comparison
          </h2>
          
          <div class="overflow-x-auto mb-6">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-3 text-left">Aspect</th>
                  <th class="border border-gray-300 p-3 text-left">MVC</th>
                  <th class="border border-gray-300 p-3 text-left">MVP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">View Role</td>
                  <td class="border border-gray-300 p-3">Active - can directly observe Model</td>
                  <td class="border border-gray-300 p-3">Passive - delegates everything to Presenter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Controller/Presenter</td>
                  <td class="border border-gray-300 p-3">Handles input, updates Model</td>
                  <td class="border border-gray-300 p-3">Contains UI logic, controls View</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Model-View Coupling</td>
                  <td class="border border-gray-300 p-3">View can observe Model directly</td>
                  <td class="border border-gray-300 p-3">No direct coupling - through Presenter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Testability</td>
                  <td class="border border-gray-300 p-3">Good - but View-Model coupling</td>
                  <td class="border border-gray-300 p-3">Excellent - passive View easy to mock</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Complexity</td>
                  <td class="border border-gray-300 p-3">Lower - simpler relationships</td>
                  <td class="border border-gray-300 p-3">Higher - more abstraction</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800 mb-2">🤔 When to Choose Which?</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-blue-700 mb-2">Choose MVC When:</h5>
                <ul class="text-gray-700 text-sm space-y-1">
                  <li>• Building web applications</li>
                  <li>• Simple UI logic</li>
                  <li>• Framework support available</li>
                  <li>• Rapid development needed</li>
                </ul>
              </div>
              <div class="bg-white p-3 rounded">
                <h5 class="font-bold text-cyan-700 mb-2">Choose MVP When:</h5>
                <ul class="text-gray-700 text-sm space-y-1">
                  <li>• Complex UI logic</li>
                  <li>• Extensive testing required</li>
                  <li>• Desktop/mobile applications</li>
                  <li>• Need maximum testability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Implementation Best Practices
          </h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">✅ Best Practices</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Keep Models independent of UI frameworks</li>
                <li>• Use interfaces for View contracts in MVP</li>
                <li>• Implement proper error handling in all layers</li>
                <li>• Use dependency injection for loose coupling</li>
                <li>• Keep Controllers/Presenters thin</li>
                <li>• Implement proper validation in Models</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Common Pitfalls</h4>
              <ul class="space-y-2 text-gray-700 text-sm">
                <li>• Fat Controllers/Presenters with too much logic</li>
                <li>• Tight coupling between components</li>
                <li>• Business logic in Views</li>
                <li>• Not using interfaces for testability</li>
                <li>• Ignoring proper error handling</li>
                <li>• Over-engineering simple applications</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// MVC and MVP Pattern Implementation Examples</div>
        
        <div class="text-gray-400 mb-4">// === 1. MVC PATTERN EXAMPLE ===</div>
        
        <div class="text-gray-400 mb-2">// Model - User data and business logic</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">User</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> id;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> name;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">String</div> email;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">List</div>&lt;<div class="text-blue-400">UserObserver</div>&gt; observers = <div class="text-blue-400">new</div> <div class="text-yellow-400">ArrayList</div>&lt;&gt;();<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">User</div>(<div class="text-blue-400">String</div> id, <div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.id = id;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.email = email;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Business logic methods</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public boolean</div> <div class="text-yellow-400">isValidEmail</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> email != <div class="text-blue-400">null</div> && email.contains(<div class="text-green-300">"@"</div>) && email.contains(<div class="text-green-300">"."</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">updateProfile</div>(<div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (name == <div class="text-blue-400">null</div> || name.trim().isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">throw new</div> <div class="text-yellow-400">IllegalArgumentException</div>(<div class="text-green-300">"Name cannot be empty"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.name = name;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.email = email;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;notifyObservers();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">addObserver</div>(<div class="text-blue-400">UserObserver</div> observer) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;observers.add(observer);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">private void</div> <div class="text-yellow-400">notifyObservers</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">UserObserver</div> observer : observers) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;observer.onUserUpdated(<div class="text-blue-400">this</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Getters...</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getName</div>() { <div class="text-blue-400">return</div> name; }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getEmail</div>() { <div class="text-blue-400">return</div> email; }<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getId</div>() { <div class="text-blue-400">return</div> id; }<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Observer interface for MVC</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">UserObserver</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">onUserUpdated</div>(<div class="text-blue-400">User</div> user);<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// View - User interface (MVC)</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserView</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">UserObserver</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">User</div> user;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Scanner</div> scanner = <div class="text-blue-400">new</div> <div class="text-yellow-400">Scanner</div>(<div class="text-blue-400">System</div>.in);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">UserView</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.user = user;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;user.addObserver(<div class="text-blue-400">this</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">displayUser</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== User Profile ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"ID: "</div> + user.getId());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Name: "</div> + user.getName());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Email: "</div> + user.getEmail());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Valid Email: "</div> + user.isValidEmail());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getUserInput</div>(<div class="text-blue-400">String</div> prompt) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.print(prompt + <div class="text-green-300">": "</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> scanner.nextLine();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">showError</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Error: "</div> + message);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">onUserUpdated</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"User profile updated!"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;displayUser();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Controller - Handles user input and coordinates Model/View</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserController</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">User</div> model;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">UserView</div> view;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">UserController</div>(<div class="text-blue-400">User</div> model, <div class="text-blue-400">UserView</div> view) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.model = model;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.view = view;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">updateUser</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = view.getUserInput(<div class="text-green-300">"Enter new name"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = view.getUserInput(<div class="text-green-300">"Enter new email"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.updateProfile(name, email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">IllegalArgumentException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view.showError(e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">showUser</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;view.displayUser();<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === 2. MVP PATTERN EXAMPLE ===</div>
        
        <div class="text-gray-400 mb-2">// View interface for MVP (contract)</div>
        <div class="text-blue-400">interface</div> <div class="text-yellow-400">UserViewContract</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">showUser</div>(<div class="text-blue-400">String</div> id, <div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email, <div class="text-blue-400">boolean</div> isValidEmail);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">showError</div>(<div class="text-blue-400">String</div> message);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">showSuccess</div>(<div class="text-blue-400">String</div> message);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">getUserInput</div>(<div class="text-blue-400">String</div> prompt);<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Passive View implementation (MVP)</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserViewMVP</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">UserViewContract</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">UserPresenter</div> presenter;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">Scanner</div> scanner = <div class="text-blue-400">new</div> <div class="text-yellow-400">Scanner</div>(<div class="text-blue-400">System</div>.in);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">setPresenter</div>(<div class="text-blue-400">UserPresenter</div> presenter) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.presenter = presenter;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">showUser</div>(<div class="text-blue-400">String</div> id, <div class="text-blue-400">String</div> name, <div class="text-blue-400">String</div> email, <div class="text-blue-400">boolean</div> isValidEmail) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== User Profile (MVP) ==="</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"ID: "</div> + id);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Name: "</div> + name);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Email: "</div> + email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Valid Email: "</div> + isValidEmail);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">showError</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.err.println(<div class="text-green-300">"Error: "</div> + message);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">showSuccess</div>(<div class="text-blue-400">String</div> message) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Success: "</div> + message);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">getUserInput</div>(<div class="text-blue-400">String</div> prompt) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.print(prompt + <div class="text-green-300">": "</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> scanner.nextLine();<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// View delegates user actions to presenter</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">onUpdateButtonClicked</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (presenter != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;presenter.onUpdateUserRequested();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">onShowButtonClicked</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (presenter != <div class="text-blue-400">null</div>) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;presenter.onShowUserRequested();<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// Presenter - Contains UI logic and coordinates Model/View</div>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserPresenter</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">User</div> model;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">private</div> <div class="text-blue-400">UserViewContract</div> view;<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-yellow-400">UserPresenter</div>(<div class="text-blue-400">User</div> model, <div class="text-blue-400">UserViewContract</div> view) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.model = model;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">this</div>.view = view;<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">onShowUserRequested</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Presenter controls what data to show and how</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;view.showUser(<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.getId(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.getName(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.getEmail(),<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.isValidEmail()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
        &nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">onUpdateUserRequested</div>() {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">try</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Presenter handles UI logic</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> name = view.getUserInput(<div class="text-green-300">"Enter new name"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">String</div> email = view.getUserInput(<div class="text-green-300">"Enter new email"</div>);<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Validate input in presenter</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (name.trim().isEmpty()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view.showError(<div class="text-green-300">"Name cannot be empty"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div>;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Update model</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model.updateProfile(name, email);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view.showSuccess(<div class="text-green-300">"User profile updated successfully"</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onShowUserRequested(); <div class="text-gray-400">// Refresh display</div><br/><br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;} <div class="text-blue-400">catch</div> (<div class="text-blue-400">IllegalArgumentException</div> e) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;view.showError(e.getMessage());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-4">// === USAGE EXAMPLES ===</div>
        
        <div class="text-gray-400 mb-2">// 1. MVC Pattern Usage</div>
        <div class="text-blue-400">public static void</div> <div class="text-yellow-400">demonstrateMVC</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== MVC Pattern Demo ==="</div>);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Create Model</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">User</div> user = <div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"1"</div>, <div class="text-green-300">"John Doe"</div>, <div class="text-green-300">"john@example.com"</div>);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Create View (observes Model)</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">UserView</div> view = <div class="text-blue-400">new</div> <div class="text-yellow-400">UserView</div>(user);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Create Controller</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">UserController</div> controller = <div class="text-blue-400">new</div> <div class="text-yellow-400">UserController</div>(user, view);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Use the application</div><br/>
        &nbsp;&nbsp;controller.showUser();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// controller.updateUser(); // Would prompt for input</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400 mb-2">// 2. MVP Pattern Usage</div>
        <div class="text-blue-400">public static void</div> <div class="text-yellow-400">demonstrateMVP</div>() {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"=== MVP Pattern Demo ==="</div>);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Create Model</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">User</div> user = <div class="text-blue-400">new</div> <div class="text-yellow-400">User</div>(<div class="text-green-300">"2"</div>, <div class="text-green-300">"Jane Smith"</div>, <div class="text-green-300">"jane@example.com"</div>);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Create View</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">UserViewMVP</div> view = <div class="text-blue-400">new</div> <div class="text-yellow-400">UserViewMVP</div>();<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Create Presenter</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">UserPresenter</div> presenter = <div class="text-blue-400">new</div> <div class="text-yellow-400">UserPresenter</div>(user, view);<br/>
        &nbsp;&nbsp;view.setPresenter(presenter);<br/><br/>
        
        &nbsp;&nbsp;<div class="text-gray-400">// Use the application</div><br/>
        &nbsp;&nbsp;view.onShowButtonClicked();<br/>
        &nbsp;&nbsp;<div class="text-gray-400">// view.onUpdateButtonClicked(); // Would prompt for input</div><br/>
        }<br/><br/>
        
        <div class="text-gray-400">// Key Differences Demonstrated:</div><br/>
        <div class="text-gray-400">// MVC: View observes Model directly, Controller handles input</div><br/>
        <div class="text-gray-400">// MVP: View is passive, Presenter controls everything</div><br/>
        <div class="text-gray-400">// MVP: Better testability due to passive View and interface contracts</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Build a Task Management Application
        </h2>
        <p class="text-blue-100">Create a comprehensive task management system using both MVC and MVP patterns to compare their approaches</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Exercise Overview</h3>
          <p class="text-gray-700 mb-4">
            Build a task management application that allows users to create, update, delete, and view tasks.
            You'll implement the same functionality using both MVC and MVP patterns to understand their differences,
            benefits, and trade-offs in a practical context.
          </p>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">MVC Implementation</h4>
              <p class="text-gray-700 text-sm">Traditional MVC with active views that can observe the model directly</p>
            </div>
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">MVP Implementation</h4>
              <p class="text-gray-700 text-sm">MVP with passive views and presenters containing all UI logic</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">1. Core Functionality</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create new tasks with title, description, priority, and due date</li>
                <li>• Update existing tasks (mark as complete, edit details)</li>
                <li>• Delete tasks</li>
                <li>• View tasks with filtering (all, pending, completed)</li>
                <li>• Search tasks by title or description</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">2. MVC Implementation</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Task model with business logic and observer pattern</li>
                <li>• TaskList model managing collection of tasks</li>
                <li>• Views that observe models and update automatically</li>
                <li>• Controllers handling user input and coordinating Model/View</li>
                <li>• Support for multiple views of the same data</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">3. MVP Implementation</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Same Task model (business logic only)</li>
                <li>• View interfaces defining contracts</li>
                <li>• Passive view implementations</li>
                <li>• Presenters containing all UI logic</li>
                <li>• Complete separation between View and Model</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">4. Comparison and Testing</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Unit tests for both implementations</li>
                <li>• Performance comparison</li>
                <li>• Code complexity analysis</li>
                <li>• Testability comparison</li>
                <li>• Documentation of trade-offs</li>
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
                  <p class="font-semibold text-gray-800">Complete Functionality</p>
                  <p class="text-gray-600 text-sm">All CRUD operations work correctly in both patterns</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Pattern Implementation</p>
                  <p class="text-gray-600 text-sm">Both MVC and MVP patterns correctly implemented</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Separation of Concerns</p>
                  <p class="text-gray-600 text-sm">Clear separation between Model, View, and Controller/Presenter</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Observer Pattern</p>
                  <p class="text-gray-600 text-sm">MVC implementation uses observer pattern correctly</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Interface Contracts</p>
                  <p class="text-gray-600 text-sm">MVP implementation uses proper view interfaces</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Unit Testing</p>
                  <p class="text-gray-600 text-sm">Comprehensive tests demonstrating testability differences</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">7</div>
                <div>
                  <p class="font-semibold text-gray-800">Error Handling</p>
                  <p class="text-gray-600 text-sm">Proper error handling and validation in both patterns</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">8</div>
                <div>
                  <p class="font-semibold text-gray-800">Documentation</p>
                  <p class="text-gray-600 text-sm">Clear comparison and analysis of both approaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">🎯 Implementation Guide</h3>
          
          <div class="space-y-4">
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-2">Step 1: Design the Model</h4>
              <p class="text-gray-700 text-sm mb-2">Create a robust task model that works for both patterns:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Task class with properties (id, title, description, priority, dueDate, completed)</li>
                <li>• TaskList class managing collection with business logic</li>
                <li>• Observer pattern support for MVC</li>
                <li>• Validation and business rules</li>
              </ul>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Step 2: Implement MVC Version</h4>
              <p class="text-gray-700 text-sm mb-2">Build the MVC implementation first:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Create views that observe the TaskList model</li>
                <li>• Implement controllers for different operations</li>
                <li>• Support multiple views (list view, detail view, summary view)</li>
                <li>• Handle user input through controllers</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Step 3: Implement MVP Version</h4>
              <p class="text-gray-700 text-sm mb-2">Build the MVP implementation:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Define view interfaces (contracts)</li>
                <li>• Create passive view implementations</li>
                <li>• Implement presenters with all UI logic</li>
                <li>• Ensure complete separation between View and Model</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Step 4: Add Advanced Features</h4>
              <p class="text-gray-700 text-sm mb-2">Enhance both implementations:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Task filtering and searching</li>
                <li>• Data persistence (file or database)</li>
                <li>• Task categories and tags</li>
                <li>• Due date notifications</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Step 5: Testing and Comparison</h4>
              <p class="text-gray-700 text-sm mb-2">Comprehensive testing and analysis:</p>
              <ul class="text-gray-700 text-sm space-y-1">
                <li>• Unit tests for both implementations</li>
                <li>• Mock objects for testing (easier in MVP)</li>
                <li>• Performance benchmarking</li>
                <li>• Code complexity metrics</li>
                <li>• Document findings and recommendations</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Bonus Challenges</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-indigo-50 p-3 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-1">MVVM Implementation</h4>
                <p class="text-gray-700 text-sm">Implement a third version using Model-View-ViewModel pattern</p>
              </div>
              
              <div class="bg-violet-50 p-3 rounded-lg">
                <h4 class="font-bold text-violet-800 mb-1">GUI Implementation</h4>
                <p class="text-gray-700 text-sm">Create Swing or JavaFX versions of both patterns</p>
              </div>
              
              <div class="bg-pink-50 p-3 rounded-lg">
                <h4 class="font-bold text-pink-800 mb-1">Web Interface</h4>
                <p class="text-gray-700 text-sm">Build web-based versions using servlets or Spring MVC</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-rose-50 p-3 rounded-lg">
                <h4 class="font-bold text-rose-800 mb-1">Real-time Updates</h4>
                <p class="text-gray-700 text-sm">Add real-time synchronization between multiple clients</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Mobile App</h4>
                <p class="text-gray-700 text-sm">Create Android version demonstrating MVP pattern benefits</p>
              </div>
              
              <div class="bg-amber-50 p-3 rounded-lg">
                <h4 class="font-bold text-amber-800 mb-1">Microservices</h4>
                <p class="text-gray-700 text-sm">Split into microservices architecture with API integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};