import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_3: LessonContent = {
  title: 'For Loops',
  type: 'coding',
  duration: '25 min',
  module: 'Control Structures',
  content: {
    overview: 'Master repetitive tasks with for loops in Java. This lesson covers traditional for loops, enhanced for-each loops, and nested loops for complex iterations. You\'ll learn loop control, optimization techniques, and best practices for writing efficient, readable loop code. Understanding loops is essential for processing collections, implementing algorithms, and automating repetitive operations.',
    objectives: [
      'Master the syntax and structure of traditional for loops',
      'Learn to use enhanced for-each loops with arrays and collections',
      'Understand loop control with break and continue statements',
      'Practice writing nested loops for complex iterations',
      'Learn loop optimization techniques and performance considerations',
      'Understand infinite loops and how to avoid them',
      'Practice debugging and tracing loop execution'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          For Loops in Java
        </h1>
        <p class="mt-3 text-green-100 text-lg">Repeating actions efficiently with controlled iteration</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to For Loops
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            For loops provide a concise way to execute code repeatedly for a specific number of iterations. 
            They're particularly useful when you know in advance how many times you want to repeat an action, 
            making them ideal for processing arrays, collections, and implementing counting algorithms.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">For loops consist of three parts: initialization, condition, and increment/decrement, all defined in the loop header.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Traditional For Loop Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The traditional for loop has three components in its header: initialization, condition, and update.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (initialization; condition; update) &#123;<br/>
                &nbsp;&nbsp;// code to execute repeatedly<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 0; i < 5; i++) &#123;<br/>
                &nbsp;&nbsp;System.out.println("Iteration: " + i);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Enhanced For-Each Loop
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The enhanced for loop (for-each) simplifies iteration over arrays and collections without managing an index.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (type element : arrayOrCollection) &#123;<br/>
                &nbsp;&nbsp;// code to execute for each element<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int[] numbers = &#123;1, 2, 3, 4, 5&#125;;<br/>
                for (int num : numbers) &#123;<br/>
                &nbsp;&nbsp;System.out.println("Number: " + num);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Nested For Loops
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">For loops can be nested inside other for loops to handle multi-dimensional data structures or complex iterations.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example - Multiplication Table:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;for (int j = 1; j <= 10; j++) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i * j + "\t");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &nbsp;&nbsp;System.out.println();<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Loop Control Statements
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">Break Statement</h4>
              <p class="text-red-700 mb-2">Immediately exits the loop when encountered.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int i = 0; i < 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i == 5) break;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-3">Continue Statement</h4>
              <p class="text-yellow-700 mb-2">Skips the rest of the current iteration and moves to the next.</p>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                for (int i = 0; i < 10; i++) &#123;<br/>
                &nbsp;&nbsp;if (i % 2 == 0) continue;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Common Loop Patterns
          </h2>
          <div class="space-y-4">
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Counting Loops</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Count from 1 to 10<br/>
                for (int i = 1; i <= 10; i++) &#123;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Counting Down</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Count from 10 down to 1<br/>
                for (int i = 10; i >= 1; i--) &#123;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Skipping Values</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Print even numbers from 0 to 20<br/>
                for (int i = 0; i <= 20; i += 2) &#123;<br/>
                &nbsp;&nbsp;System.out.println(i);<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for For Loops</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use meaningful variable names for loop counters</li>
                <li>• Keep loop bodies simple and focused</li>
                <li>• Use enhanced for-each loops when possible</li>
                <li>• Initialize loop variables close to their usage</li>
                <li>• Avoid modifying loop control variables inside the loop</li>
                <li>• Use braces even for single-statement loops</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't create infinite loops accidentally</li>
                <li>• Don't use magic numbers in loop conditions</li>
                <li>• Don't duplicate loop logic unnecessarily</li>
                <li>• Don't make loop conditions overly complex</li>
                <li>• Don't forget to update loop control variables</li>
                <li>• Don't use for loops when while loops are more appropriate</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class CountToFive {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
    }
}`,
    exercise: `
      1) Write a for loop that prints numbers from 1 to 10.
      2) Create a for loop that calculates the sum of numbers from 1 to 100.
      3) Use nested for loops to print a 3x3 grid of asterisks.
    `
  }
};