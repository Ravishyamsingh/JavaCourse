import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_2: LessonContent = {
  title: 'Java Modules (JPMS)',
  type: 'lesson',
  duration: '50 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Master the Java Platform Module System (JPMS) introduced in Java 9. Learn to create modular applications, manage dependencies, and build scalable, maintainable software architectures.',
    objectives: [
      'Understand the Java Platform Module System fundamentals',
      'Create and configure module descriptors (module-info.java)',
      'Implement module exports, requires, and provides directives',
      'Build multi-module applications with proper encapsulation',
      'Use jlink to create custom runtime images',
      'Apply modular design patterns and best practices'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Java Platform Module System (JPMS)
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Building modular, scalable Java applications with strong encapsulation</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Module System Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            JPMS provides strong encapsulation, reliable configuration, and scalable systems by organizing code into modules 
            with explicit dependencies and well-defined APIs.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">🎯 Module Benefits</h4>
            <p class="text-blue-700">Modules provide strong encapsulation, reliable configuration, better security, and improved performance through reduced memory footprint.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Key Concepts</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">Module</h5>
                  <p class="text-gray-600 text-sm">Named collection of packages and resources</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">Module Path</h5>
                  <p class="text-gray-600 text-sm">Location where modules are found</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                  <h5 class="font-bold text-purple-700">Module Descriptor</h5>
                  <p class="text-gray-600 text-sm">module-info.java configuration file</p>
                </div>
              </div>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">Module Types</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Named Modules:</strong> Explicit module-info.java</li>
                <li>• <strong>Automatic Modules:</strong> JAR on module path</li>
                <li>• <strong>Unnamed Module:</strong> Classpath compatibility</li>
                <li>• <strong>System Modules:</strong> JDK platform modules</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Module Descriptor Directives
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The module-info.java file defines module metadata and dependencies using specific directives.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Core Directives</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">requires</h5>
                    <p class="text-gray-600 text-sm">Declares module dependencies</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">exports</h5>
                    <p class="text-gray-600 text-sm">Makes packages available to other modules</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 class="font-bold text-purple-700">opens</h5>
                    <p class="text-gray-600 text-sm">Allows reflective access to packages</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Service Directives</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-orange-400">
                    <h5 class="font-bold text-orange-700">provides</h5>
                    <p class="text-gray-600 text-sm">Declares service implementations</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">uses</h5>
                    <p class="text-gray-600 text-sm">Declares service dependencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Module Resolution and Accessibility
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding how modules are resolved and how accessibility rules work in the module system.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Resolution Process</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Root module identification</li>
                  <li>• Dependency graph construction</li>
                  <li>• Readability establishment</li>
                  <li>• Package conflict resolution</li>
                </ul>
              </div>
              
              <div class="bg-emerald-50 p-4 rounded-lg">
                <h4 class="font-bold text-emerald-800 mb-2">Accessibility Rules</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Public types in exported packages</li>
                  <li>• Module readability requirements</li>
                  <li>• Reflection access controls</li>
                  <li>• Deep reflection restrictions</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Migration Strategies</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Bottom-up modularization</li>
                  <li>• Automatic module usage</li>
                  <li>• Split package handling</li>
                  <li>• Gradual migration approach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Custom Runtime Images with jlink
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Create optimized, custom runtime images containing only the modules your application needs.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">jlink Benefits</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Reduced memory footprint</li>
                  <li>• Faster startup times</li>
                  <li>• Self-contained applications</li>
                  <li>• Optimized for deployment</li>
                </ul>
              </div>
              
              <div class="bg-lime-50 p-4 rounded-lg">
                <h4 class="font-bold text-lime-800 mb-2">Image Components</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• JVM runtime</li>
                  <li>• Required modules only</li>
                  <li>• Native libraries</li>
                  <li>• Configuration files</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// Multi-Module Application Example</div>
        
        <div class="text-gray-400 mb-4">// === Module 1: com.example.api ===</div>
        <div class="text-gray-400">// module-info.java</div><br/>
        <div class="text-blue-400">module</div> com.example.api {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">exports</div> com.example.api.service;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">exports</div> com.example.api.model;<br/>
        }<br/><br/>

        <div class="text-gray-400">// UserService.java</div><br/>
        <div class="text-blue-400">package</div> com.example.api.service;<br/>
        <div class="text-blue-400">import</div> com.example.api.model.User;<br/><br/>

        <div class="text-blue-400">public interface</div> <div class="text-yellow-400">UserService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">User</div> <div class="text-yellow-400">findById</div>(<div class="text-blue-400">Long</div> id);<br/>
        &nbsp;&nbsp;<div class="text-blue-400">void</div> <div class="text-yellow-400">save</div>(<div class="text-blue-400">User</div> user);<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Module 2: com.example.impl ===</div>
        <div class="text-gray-400">// module-info.java</div><br/>
        <div class="text-blue-400">module</div> com.example.impl {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">requires</div> com.example.api;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">requires</div> java.sql;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">provides</div> com.example.api.service.UserService<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">with</div> com.example.impl.DatabaseUserService;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">opens</div> com.example.impl <div class="text-blue-400">to</div> java.base;<br/>
        }<br/><br/>

        <div class="text-gray-400">// DatabaseUserService.java</div><br/>
        <div class="text-blue-400">package</div> com.example.impl;<br/>
        <div class="text-blue-400">import</div> com.example.api.service.UserService;<br/>
        <div class="text-blue-400">import</div> com.example.api.model.User;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">DatabaseUserService</div> <div class="text-blue-400">implements</div> <div class="text-blue-400">UserService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">User</div> <div class="text-yellow-400">findById</div>(<div class="text-blue-400">Long</div> id) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Database implementation</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return new</div> <div class="text-yellow-400">User</div>(id, <div class="text-green-300">"John Doe"</div>);<br/>
        &nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;<div class="text-blue-400">@Override</div><br/>
        &nbsp;&nbsp;<div class="text-blue-400">public void</div> <div class="text-yellow-400">save</div>(<div class="text-blue-400">User</div> user) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Save to database</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Saving user: "</div> + user.getName());<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Module 3: com.example.app ===</div>
        <div class="text-gray-400">// module-info.java</div><br/>
        <div class="text-blue-400">module</div> com.example.app {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">requires</div> com.example.api;<br/>
        &nbsp;&nbsp;<div class="text-blue-400">uses</div> com.example.api.service.UserService;<br/>
        }<br/><br/>

        <div class="text-gray-400">// Application.java</div><br/>
        <div class="text-blue-400">package</div> com.example.app;<br/>
        <div class="text-blue-400">import</div> com.example.api.service.UserService;<br/>
        <div class="text-blue-400">import</div> java.util.ServiceLoader;<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">Application</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ServiceLoader</div>&lt;<div class="text-blue-400">UserService</div>&gt; loader = <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">ServiceLoader</div>.load(<div class="text-blue-400">UserService</div>.<div class="text-blue-400">class</div>);<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">UserService</div> userService = loader.findFirst()<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.orElseThrow(() -> <div class="text-blue-400">new</div> <div class="text-yellow-400">RuntimeException</div>(<div class="text-green-300">"No UserService found"</div>));<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">var</div> user = userService.findById(<div class="text-purple-400">1L</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Found user: "</div> + user.getName());<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-gray-400 mb-4">// === Build and Run Commands ===</div>
        <div class="text-gray-400">// Compile modules</div><br/>
        <div class="text-green-300">javac --module-path mods -d mods/com.example.api src/com.example.api/module-info.java src/com.example.api/com/example/api/**/*.java</div><br/>
        <div class="text-green-300">javac --module-path mods -d mods/com.example.impl src/com.example.impl/module-info.java src/com.example.impl/com/example/impl/**/*.java</div><br/>
        <div class="text-green-300">javac --module-path mods -d mods/com.example.app src/com.example.app/module-info.java src/com.example.app/com/example/app/**/*.java</div><br/><br/>

        <div class="text-gray-400">// Run application</div><br/>
        <div class="text-green-300">java --module-path mods -m com.example.app/com.example.app.Application</div><br/><br/>

        <div class="text-gray-400">// Create custom runtime image</div><br/>
        <div class="text-green-300">jlink --module-path mods:$JAVA_HOME/jmods --add-modules com.example.app --output myapp-runtime</div><br/>
        <div class="text-green-300">./myapp-runtime/bin/java -m com.example.app/com.example.app.Application</div>
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Modular E-commerce System
        </h2>
        <p class="text-blue-100">Build a complete modular e-commerce system with proper module separation and service loading</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">1. Core API Module (com.ecommerce.api)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Define Product, Order, Customer interfaces</li>
                <li>• Create ProductService, OrderService, CustomerService interfaces</li>
                <li>• Export only public API packages</li>
                <li>• Include validation annotations</li>
              </ul>
            </div>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="font-bold text-cyan-800 mb-2">2. Database Implementation Module (com.ecommerce.db)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement all service interfaces with database logic</li>
                <li>• Provide services using ServiceLoader pattern</li>
                <li>• Require java.sql and com.ecommerce.api modules</li>
                <li>• Open packages for reflection if needed</li>
              </ul>
            </div>
            
            <div class="bg-teal-50 p-4 rounded-lg">
              <h4 class="font-bold text-teal-800 mb-2">3. Web Module (com.ecommerce.web)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create REST API endpoints using services</li>
                <li>• Use ServiceLoader to discover implementations</li>
                <li>• Handle HTTP requests and responses</li>
                <li>• Implement proper error handling</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">4. Application Module (com.ecommerce.app)</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Main application entry point</li>
                <li>• Bootstrap web server and services</li>
                <li>• Configuration management</li>
                <li>• Graceful shutdown handling</li>
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
                  <p class="font-semibold text-gray-800">Proper Module Structure</p>
                  <p class="text-gray-600 text-sm">Well-defined module boundaries with appropriate exports</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Service Loading</p>
                  <p class="text-gray-600 text-sm">Dynamic service discovery and loading implementation</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Strong Encapsulation</p>
                  <p class="text-gray-600 text-sm">Internal packages properly hidden from other modules</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Custom Runtime Image</p>
                  <p class="text-gray-600 text-sm">Working jlink-generated runtime with minimal footprint</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</div>
                <div>
                  <p class="font-semibold text-gray-800">Functional Application</p>
                  <p class="text-gray-600 text-sm">Complete e-commerce system with working endpoints</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</div>
                <div>
                  <p class="font-semibold text-gray-800">Build Scripts</p>
                  <p class="text-gray-600 text-sm">Automated compilation and packaging scripts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">💡 Implementation Tips</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="bg-yellow-50 p-3 rounded-lg">
                <h4 class="font-bold text-yellow-800 mb-1">Module Design</h4>
                <p class="text-gray-700 text-sm">Start with API module, then implementations. Keep interfaces separate from implementations.</p>
              </div>
              
              <div class="bg-orange-50 p-3 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-1">Service Loading</h4>
                <p class="text-gray-700 text-sm">Use META-INF/services for automatic modules, provides/uses for named modules.</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-red-50 p-3 rounded-lg">
                <h4 class="font-bold text-red-800 mb-1">Testing Strategy</h4>
                <p class="text-gray-700 text-sm">Create separate test modules or use --patch-module for testing internal packages.</p>
              </div>
              
              <div class="bg-purple-50 p-3 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-1">Migration Path</h4>
                <p class="text-gray-700 text-sm">Start with automatic modules for third-party dependencies, gradually modularize your code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};