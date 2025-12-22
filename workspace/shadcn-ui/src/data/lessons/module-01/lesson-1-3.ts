import { LessonContent } from '../../types/LessonTypes';

export const lesson_1_3: LessonContent = {
  title: 'Your First Java Program',
  type: 'coding',
  duration: '35 min',
  module: 'Java Fundamentals',
  content: {
    overview: 'Dive into hands-on Java programming by creating, understanding, and executing your first Java programs. This lesson demystifies the anatomy of Java applications, explores the compilation and execution process, and establishes the foundation for all future Java development. You\'ll learn the essential program structure, understand key components, and master the development workflow that professional Java developers use every day.',
    objectives: [
      'Create and understand the classic Hello World program and its significance in programming',
      'Master the essential components of Java program structure: classes, methods, and statements',
      'Understand the main method signature, its parameters, and its role as the program entry point',
      'Learn the complete compilation and execution workflow from source code to running application',
      'Explore Java naming conventions and best practices for professional code',
      'Understand the relationship between source files, class files, and the JVM',
      'Practice writing, compiling, and running multiple Java programs with increasing complexity'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Your First Java Program
        </h1>
        <p class="mt-3 text-blue-100 text-lg">From source code to running application - understanding the Java development lifecycle</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Anatomy of a Java Program
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed text-lg">
              Every Java program follows a specific, structured format that enables the JVM to understand and execute your code. 
              Understanding this structure is crucial for becoming a proficient Java developer.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg font-mono text-sm border">
              <div class="text-blue-600">// File: HelloWorld.java</div>
              <div><span class="text-purple-600">public class</span> HelloWorld {</div>
              <div class="ml-4">
                <span class="text-purple-600">public static void</span> main(<span class="text-green-600">String[] args</span>) {
              </div>
              <div class="ml-8">
                <span class="text-orange-600">System.out.println</span>(<span class="text-red-600">"Hello, World!"</span>);
              </div>
              <div class="ml-4">}</div>
              <div>}</div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Program Components Explained
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">📦 Class Declaration</h4>
                <p class="text-blue-700 text-sm mb-2"><code>public class HelloWorld</code></p>
                <ul class="text-xs text-blue-600 space-y-1">
                  <li>• Every Java program needs at least one class</li>
                  <li>• Class name must match filename exactly</li>
                  <li>• <code>public</code> means accessible from anywhere</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">🚀 Main Method</h4>
                <p class="text-green-700 text-sm mb-2"><code>public static void main(String[] args)</code></p>
                <ul class="text-xs text-green-600 space-y-1">
                  <li>• Entry point of every Java application</li>
                  <li>• <code>static</code> - can be called without creating an object</li>
                  <li>• <code>void</code> - doesn't return any value</li>
                </ul>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">💬 Statements</h4>
                <p class="text-purple-700 text-sm mb-2"><code>System.out.println("Hello, World!");</code></p>
                <ul class="text-xs text-purple-600 space-y-1">
                  <li>• Instructions that perform actions</li>
                  <li>• Must end with semicolon (;)</li>
                  <li>• <code>System.out.println</code> displays text</li>
                </ul>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">🔤 String Literals</h4>
                <p class="text-orange-700 text-sm mb-2"><code>"Hello, World!"</code></p>
                <ul class="text-xs text-orange-600 space-y-1">
                  <li>• Text enclosed in double quotes</li>
                  <li>• Exactly as written, character by character</li>
                  <li>• Can contain letters, numbers, symbols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            The Compilation Process
          </h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div class="text-center">
                <div class="bg-blue-500 text-white rounded-lg p-3 mb-2">📝</div>
                <h4 class="font-bold text-gray-800">Source Code</h4>
                <p class="text-gray-600 text-sm">HelloWorld.java</p>
              </div>
              <div class="text-2xl text-gray-400">→</div>
              <div class="text-center">
                <div class="bg-green-500 text-white rounded-lg p-3 mb-2">⚙️</div>
                <h4 class="font-bold text-gray-800">Java Compiler</h4>
                <p class="text-gray-600 text-sm">javac command</p>
              </div>
              <div class="text-2xl text-gray-400">→</div>
              <div class="text-center">
                <div class="bg-purple-500 text-white rounded-lg p-3 mb-2">📦</div>
                <h4 class="font-bold text-gray-800">Bytecode</h4>
                <p class="text-gray-600 text-sm">HelloWorld.class</p>
              </div>
              <div class="text-2xl text-gray-400">→</div>
              <div class="text-center">
                <div class="bg-red-500 text-white rounded-lg p-3 mb-2">▶️</div>
                <h4 class="font-bold text-gray-800">JVM Execution</h4>
                <p class="text-gray-600 text-sm">java command</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Java Naming Conventions
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Element</th>
                  <th class="text-left p-3 font-bold border-b">Convention</th>
                  <th class="text-left p-3 font-bold border-b">Example</th>
                  <th class="text-left p-3 font-bold border-b">Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3">Class Names</td>
                  <td class="p-3">PascalCase</td>
                  <td class="p-3 font-mono">HelloWorld, Calculator</td>
                  <td class="p-3">Start with uppercase, capitalize each word</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3">Method Names</td>
                  <td class="p-3">camelCase</td>
                  <td class="p-3 font-mono">main, calculateArea</td>
                  <td class="p-3">Start lowercase, capitalize subsequent words</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3">File Names</td>
                  <td class="p-3">Match Class</td>
                  <td class="p-3 font-mono">HelloWorld.java</td>
                  <td class="p-3">Exactly same as public class name</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">💡 Professional Development Tips</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Best Practices</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always use meaningful class and method names</li>
                <li>• Add comments to explain complex logic</li>
                <li>• Follow Java naming conventions consistently</li>
                <li>• Keep your code properly indented and formatted</li>
                <li>• Test your programs with different inputs</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Common Mistakes</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Forgetting semicolons at end of statements</li>
                <li>• Mismatching class name with filename</li>
                <li>• Incorrect main method signature</li>
                <li>• Missing or mismatched braces { }</li>
                <li>• Case sensitivity errors in class/method names</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,
    exercise: `
      1) Create a HelloWorld.java program and compile/run it.
      2) Modify the program to print your name instead of "Hello, World!".
      3) Add another System.out.println statement to print a second message.
    `
  }
};