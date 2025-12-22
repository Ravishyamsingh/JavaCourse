import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_5: LessonContent = {
  title: 'Break and Continue Statements',
  type: 'lesson',
  duration: '20 min',
  module: 'Control Structures',
  content: {
    overview: 'Master loop control with break and continue statements in Java. This lesson covers how to alter the normal flow of loops, exit loops prematurely, skip iterations, and implement complex control logic. You\'ll learn advanced techniques for nested loop control, labeled breaks, and best practices for readable loop management.',
    objectives: [
      'Understand break statement usage to exit loops',
      'Master continue statement for skipping iterations',
      'Learn labeled break and continue for nested loop control',
      'Practice implementing complex loop control logic',
      'Understand when to use break vs continue appropriately',
      'Learn best practices for readable loop control',
      'Avoid common pitfalls with break and continue statements'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Break and Continue Statements in Java
        </h1>
        <p class="mt-3 text-red-100 text-lg">Advanced loop control for complex iteration logic</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Loop Control
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Break and continue statements provide powerful mechanisms to alter the normal flow of loops. 
            They allow you to exit loops prematurely or skip specific iterations, enabling more complex 
            control logic than basic loop structures provide.
          </p>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">💡 Key Concept</h4>
            <p class="text-red-700">Break statements immediately exit a loop, while continue statements skip the rest of the current iteration and proceed to the next one.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Break Statement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The break statement terminates the loop immediately and transfers control to the statement following the loop.</p>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i == 5) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break; // Exit loop when i equals 5<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;System.out.println("Count: " + i);<br/>
                &#125;<br/>
                System.out.println("Loop terminated");
              </div>
              <p class="text-blue-700 mt-2">This loop will print numbers 1 through 4, then exit when i equals 5.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Continue Statement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The continue statement skips the remaining code in the current iteration and proceeds to the next iteration.</p>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i % 2 == 0) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;continue; // Skip even numbers<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;System.out.println("Odd number: " + i);<br/>
                &#125;
              </div>
              <p class="text-green-700 mt-2">This loop will print only odd numbers from 1 to 10.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Labeled Break and Continue
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Labeled break and continue statements allow control of nested loops by specifying which loop to affect.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                outerLoop: for (int i = 1; i <= 3; i++) &#123;<br/>
                &nbsp;&nbsp;for (int j = 1; j <= 3; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if (i == 2 && j == 2) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break outerLoop; // Exit outer loop<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("i: " + i + ", j: " + j);<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
              <p class="text-orange-700 mt-2">This will print combinations until i=2 and j=2, then exit the outer loop entirely.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common Use Cases
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-3">Break Use Cases:</h4>
              <ul class="space-y-2 text-blue-700">
                <li>• Searching for an element in a collection</li>
                <li>• Validating user input and exiting on correct format</li>
                <li>• Implementing menu systems with exit options</li>
                <li>• Error handling to exit processing early</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">Continue Use Cases:</h4>
              <ul class="space-y-2 text-green-700">
                <li>• Skipping invalid data entries in processing</li>
                <li>• Filtering collections based on criteria</li>
                <li>• Implementing retry mechanisms for failed operations</li>
                <li>• Processing only specific elements in a dataset</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Best Practices
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-indigo-700">
                <li>• Use break for early loop termination when necessary</li>
                <li>• Use continue to skip iterations cleanly</li>
                <li>• Label nested loops for clear control flow</li>
                <li>• Add comments explaining why break/continue is used</li>
                <li>• Limit complex control logic for readability</li>
              </ul>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-red-700">
                <li>• Don't use break/continue excessively in simple loops</li>
                <li>• Don't create confusing control flow with unlabeled breaks</li>
                <li>• Don't use break as a "goto" statement</li>
                <li>• Don't make code hard to follow with complex loop control</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Advanced Loop Control Patterns</h2>
          <div class="space-y-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Search and Exit Pattern:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int i = 0; i < array.length; i++) &#123;<br/>
                &nbsp;&nbsp;if (array[i] == target) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Found at index: " + i);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Filter and Process Pattern:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int value : numbers) &#123;<br/>
                &nbsp;&nbsp;if (value < 0) continue; // Skip negative numbers<br/>
                &nbsp;&nbsp;if (value > 100) continue; // Skip large numbers<br/>
                &nbsp;&nbsp;processValidNumber(value);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class BreakContinueDemo {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) break;
            System.out.println(i);
        }
        for (int j = 1; j <= 5; j++) {
            if (j == 2) continue;
            System.out.println(j);
        }
    }
}`,
    exercise: `
      1) Write a loop that prints numbers 1 to 10 but stops when the number is 4 using break.
      2) Print numbers 1 to 5 and skip 3 using continue.
      3) Use a labeled break to exit an outer loop when i * j equals 6.
    `
  }
};