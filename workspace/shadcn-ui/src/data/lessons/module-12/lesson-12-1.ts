import { LessonContent } from '../../types/LessonTypes';

export const lesson_12_1: LessonContent = {
  title: 'Annotations and Reflection',
  type: 'lesson',
  duration: '45 min',
  module: 'Advanced Java Features',
  content: {
    overview: 'Master Java annotations and reflection API for dynamic programming. Learn to create custom annotations, process them at runtime, and use reflection for introspection and dynamic method invocation.',
    objectives: [
      'Understand annotation fundamentals and built-in annotations',
      'Create custom annotations with retention policies',
      'Master reflection API for class introspection',
      'Implement dynamic method and field access',
      'Build annotation processors and frameworks',
      'Apply reflection patterns in real-world scenarios'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Annotations and Reflection
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Dynamic programming with metadata and runtime introspection</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Annotation Fundamentals
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Annotations provide metadata about program elements without affecting program semantics. 
            They enable declarative programming and are extensively used in frameworks like Spring and Hibernate.
          </p>
          
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">🎯 Annotation Purpose</h4>
            <p class="text-purple-700">Annotations add metadata to code elements, enabling tools and frameworks to process them for configuration, validation, and code generation.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Built-in Annotations</h4>
              <div class="space-y-3">
                <div class="bg-white p-3 rounded border-l-4 border-red-400">
                  <h5 class="font-bold text-red-700">@Override</h5>
                  <p class="text-gray-600 text-sm">Indicates method overriding</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                  <h5 class="font-bold text-blue-700">@Deprecated</h5>
                  <p class="text-gray-600 text-sm">Marks deprecated elements</p>
                </div>
                <div class="bg-white p-3 rounded border-l-4 border-green-400">
                  <h5 class="font-bold text-green-700">@SuppressWarnings</h5>
                  <p class="text-gray-600 text-sm">Suppresses compiler warnings</p>
                </div>
              </div>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Annotation Elements</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• <strong>Target:</strong> Where annotation can be applied</li>
                <li>• <strong>Retention:</strong> How long annotation is retained</li>
                <li>• <strong>Elements:</strong> Parameters for configuration</li>
                <li>• <strong>Defaults:</strong> Default values for elements</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Custom Annotations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Creating custom annotations allows you to define your own metadata for specific use cases.</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Retention Policies</h4>
                <div class="space-y-3">
                  <div class="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 class="font-bold text-red-700">SOURCE</h5>
                    <p class="text-gray-600 text-sm">Discarded by compiler</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-blue-400">
                    <h5 class="font-bold text-blue-700">CLASS</h5>
                    <p class="text-gray-600 text-sm">Retained in bytecode</p>
                  </div>
                  <div class="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 class="font-bold text-green-700">RUNTIME</h5>
                    <p class="text-gray-600 text-sm">Available at runtime</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Target Types</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-white p-2 rounded">
                    <strong>TYPE:</strong> Classes, interfaces, enums
                  </div>
                  <div class="bg-white p-2 rounded">
                    <strong>METHOD:</strong> Methods
                  </div>
                  <div class="bg-white p-2 rounded">
                    <strong>FIELD:</strong> Fields and enum constants
                  </div>
                  <div class="bg-white p-2 rounded">
                    <strong>PARAMETER:</strong> Method parameters
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Reflection API
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Reflection allows programs to examine and modify their own structure and behavior at runtime.</p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Core Classes</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Class:</strong> Represents classes and interfaces</li>
                  <li>• <strong>Method:</strong> Represents methods</li>
                  <li>• <strong>Field:</strong> Represents fields</li>
                  <li>• <strong>Constructor:</strong> Represents constructors</li>
                </ul>
              </div>
              
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Common Operations</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Get class information</li>
                  <li>• Invoke methods dynamically</li>
                  <li>• Access and modify fields</li>
                  <li>• Create instances</li>
                </ul>
              </div>
              
              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="font-bold text-teal-800 mb-2">Use Cases</h4>
                <ul class="space-y-2 text-gray-700 text-sm">
                  <li>• Dependency injection</li>
                  <li>• Serialization frameworks</li>
                  <li>• Testing frameworks</li>
                  <li>• Configuration systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
      <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <div class="text-yellow-400 mb-4">// AnnotationReflectionDemo.java</div>
        <div class="text-blue-400">import</div> java.lang.annotation.*;<br/>
        <div class="text-blue-400">import</div> java.lang.reflect.*;<br/>
        <div class="text-blue-400">import</div> java.util.*;<br/><br/>

        <div class="text-gray-400">// Custom annotations</div><br/>
        <div class="text-blue-400">@Retention</div>(<div class="text-blue-400">RetentionPolicy</div>.RUNTIME)<br/>
        <div class="text-blue-400">@Target</div>(<div class="text-blue-400">ElementType</div>.TYPE)<br/>
        <div class="text-blue-400">@interface</div> <div class="text-yellow-400">Component</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">String</div> <div class="text-yellow-400">value</div>() <div class="text-blue-400">default</div> <div class="text-green-300">""</div>;<br/>
        }<br/><br/>

        <div class="text-blue-400">@Retention</div>(<div class="text-blue-400">RetentionPolicy</div>.RUNTIME)<br/>
        <div class="text-blue-400">@Target</div>(<div class="text-blue-400">ElementType</div>.METHOD)<br/>
        <div class="text-blue-400">@interface</div> <div class="text-yellow-400">Benchmark</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">int</div> <div class="text-yellow-400">iterations</div>() <div class="text-blue-400">default</div> <div class="text-purple-400">10</div>;<br/>
        }<br/><br/>

        <div class="text-blue-400">@Component</div>(<div class="text-green-300">"userService"</div>)<br/>
        <div class="text-blue-400">class</div> <div class="text-yellow-400">UserService</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">@Benchmark</div>(iterations = <div class="text-purple-400">5</div>)<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public</div> <div class="text-blue-400">String</div> <div class="text-yellow-400">processUser</div>(<div class="text-blue-400">String</div> name) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">return</div> <div class="text-green-300">"Processed: "</div> + name;<br/>
        &nbsp;&nbsp;}<br/>
        }<br/><br/>

        <div class="text-blue-400">public class</div> <div class="text-yellow-400">AnnotationReflectionDemo</div> {<br/>
        &nbsp;&nbsp;<div class="text-blue-400">public static void</div> <div class="text-yellow-400">main</div>(<div class="text-blue-400">String</div>[] args) <div class="text-blue-400">throws</div> <div class="text-blue-400">Exception</div> {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Class</div>&lt;?&gt; clazz = <div class="text-blue-400">UserService</div>.<div class="text-blue-400">class</div>;<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Process class annotations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (clazz.isAnnotationPresent(<div class="text-blue-400">Component</div>.<div class="text-blue-400">class</div>)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Component</div> component = clazz.getAnnotation(<div class="text-blue-400">Component</div>.<div class="text-blue-400">class</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Component: "</div> + component.value());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/><br/>

        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-gray-400">// Process method annotations</div><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">for</div> (<div class="text-blue-400">Method</div> method : clazz.getDeclaredMethods()) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">if</div> (method.isAnnotationPresent(<div class="text-blue-400">Benchmark</div>.<div class="text-blue-400">class</div>)) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">Benchmark</div> benchmark = method.getAnnotation(<div class="text-blue-400">Benchmark</div>.<div class="text-blue-400">class</div>);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="text-blue-400">System</div>.out.println(<div class="text-green-300">"Benchmark iterations: "</div> + benchmark.iterations());<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        }
      </div>
    `,
    exercise: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center">
          <span class="w-3 h-8 bg-white rounded mr-3"></span>
          Practice Exercise: Annotation-Driven Framework
        </h2>
        <p class="text-purple-100">Build a comprehensive annotation-driven framework with dependency injection and validation</p>
      </div>

      <div class="space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h3 class="text-xl font-bold text-gray-800 mb-4">📋 Requirements</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">1. Custom Annotations</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create @Service, @Repository, @Controller annotations</li>
                <li>• Implement @Inject for dependency injection</li>
                <li>• Add @Validate for input validation</li>
                <li>• Create @Cacheable for method caching</li>
              </ul>
            </div>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">2. Dependency Injection Container</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Implement component scanning and registration</li>
                <li>• Create automatic dependency resolution</li>
                <li>• Add singleton and prototype scope support</li>
                <li>• Handle circular dependency detection</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">3. Validation Framework</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Create @NotNull, @Size, @Email validators</li>
                <li>• Implement method parameter validation</li>
                <li>• Add custom validation annotation support</li>
                <li>• Build validation error reporting system</li>
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
                  <p class="font-semibold text-gray-800">Annotation Framework</p>
                  <p class="text-gray-600 text-sm">Complete set of custom annotations with proper metadata</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                <div>
                  <p class="font-semibold text-gray-800">Dependency Injection</p>
                  <p class="text-gray-600 text-sm">Automatic component scanning and dependency resolution</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                <div>
                  <p class="font-semibold text-gray-800">Validation System</p>
                  <p class="text-gray-600 text-sm">Comprehensive validation with custom validators</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                <div>
                  <p class="font-semibold text-gray-800">Reflection Usage</p>
                  <p class="text-gray-600 text-sm">Efficient and secure reflection implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
};