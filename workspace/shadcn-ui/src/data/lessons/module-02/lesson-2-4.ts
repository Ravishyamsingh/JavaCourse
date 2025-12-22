import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_4: LessonContent = {
  title: 'While and Do-While Loops',
  type: 'coding',
  duration: '25 min',
  module: 'Control Structures',
  content: {
    overview: 'Master conditional iteration with while and do-while loops in Java. This lesson covers pre-condition and post-condition loops, loop control techniques, sentinel values, and user input validation. You\'ll learn when to use while versus do-while loops, how to avoid infinite loops, and implement robust looping constructs for interactive programs and data processing tasks.',
    objectives: [
      'Master the syntax and structure of while loops',
      'Learn to use do-while loops for guaranteed execution',
      'Understand the difference between while and do-while loops',
      'Practice implementing sentinel-controlled loops',
      'Learn loop control with break and continue statements',
      'Understand infinite loops and how to avoid them',
      'Implement user input validation with loops'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          While and Do-While Loops in Java
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Conditional iteration with pre and post-condition loops</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to While Loops
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            While loops execute a block of code repeatedly as long as a specified condition remains true. 
            They're ideal for situations where the number of iterations isn't known in advance, such as 
            processing user input, reading files, or implementing game loops.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">While loops are pre-condition loops - the condition is checked before each iteration, so the loop body may never execute if the condition is initially false.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            While Loop Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">While loops have a simple structure with just a condition in the header.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                while (condition) &#123;<br/>
                &nbsp;&nbsp;// code to execute repeatedly<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int count = 0;<br/>
                while (count < 5) &#123;<br/>
                &nbsp;&nbsp;System.out.println("Count: " + count);<br/>
                &nbsp;&nbsp;count++;<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Do-While Loop Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Do-while loops execute the loop body at least once before checking the condition.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                do &#123;<br/>
                &nbsp;&nbsp;// code to execute at least once<br/>
                &#125; while (condition);
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int number;<br/>
                do &#123;<br/>
                &nbsp;&nbsp;System.out.print("Enter a positive number: ");<br/>
                &nbsp;&nbsp;number = scanner.nextInt();<br/>
                &#125; while (number <= 0);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Sentinel-Controlled Loops
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Sentinel-controlled loops use a special value to signal when to stop processing.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                Scanner scanner = new Scanner(System.in);<br/>
                int sum = 0;<br/>
                int number;<br/>
                System.out.println("Enter numbers (0 to stop):");<br/>
                <br/>
                do &#123;<br/>
                &nbsp;&nbsp;number = scanner.nextInt();<br/>
                &nbsp;&nbsp;if (number != 0) &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;sum += number;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125; while (number != 0);<br/>
                <br/>
                System.out.println("Sum: " + sum);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Infinite Loops and Prevention
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">Common Causes:</h4>
              <ul class="space-y-2 text-red-700">
                <li>• Forgetting to update loop control variable</li>
                <li>• Condition never becomes false</li>
                <li>• Off-by-one errors in condition</li>
                <li>• Incorrect logical operators</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h4 class="font-bold text-yellow-800 mb-3">Prevention Techniques:</h4>
              <ul class="space-y-2 text-yellow-700">
                <li>• Always update loop control variables</li>
                <li>• Test loop conditions carefully</li>
                <li>• Use debugging to trace loop execution</li>
                <li>• Add safety counters for unknown iterations</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            When to Use While vs Do-While
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-3">Use While When:</h4>
              <ul class="space-y-2 text-blue-700">
                <li>• You might not need to execute the loop body at all</li>
                <li>• The condition should be checked before execution</li>
                <li>• Processing data with unknown quantity</li>
                <li>• Implementing game loops or event processing</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">Use Do-While When:</h4>
              <ul class="space-y-2 text-green-700">
                <li>• You need to execute the loop body at least once</li>
                <li>• Getting user input that must be validated</li>
                <li>• Displaying menus that should appear at least once</li>
                <li>• Processing data that requires initial setup</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for While and Do-While Loops</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Initialize loop control variables before the loop</li>
                <li>• Update loop control variables within the loop body</li>
                <li>• Use clear, descriptive variable names</li>
                <li>• Add comments for complex loop conditions</li>
                <li>• Test boundary conditions carefully</li>
                <li>• Use braces even for single-statement loops</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't forget to update loop control variables</li>
                <li>• Don't create infinite loops accidentally</li>
                <li>• Don't use while loops when do-while is more appropriate</li>
                <li>• Don't make loop conditions overly complex</li>
                <li>• Don't ignore user input validation</li>
                <li>• Don't use magic numbers in loop conditions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class WhileDoWhileDemo {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 3) {
            System.out.println(i);
            i++;
        }

        int j = 0;
        do {
            System.out.println("Runs at least once");
        } while (j != 0);
    }
}`,
    exercise: `
      1) Write a while loop that prints numbers from 1 to 5.
      2) Create a do-while loop that asks for user input until they enter "quit".
      3) Use a while loop to find the sum of even numbers from 1 to 20.
    `
  }
};