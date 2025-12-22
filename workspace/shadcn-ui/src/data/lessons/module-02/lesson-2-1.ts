import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_1: LessonContent = {
  title: 'Conditional Statements (if, else)',
  type: 'lesson',
  duration: '30 min',
  module: 'Control Structures',
  content: {
    overview: 'Master decision-making in Java with conditional statements. This lesson covers if, if-else, and if-else-if ladder structures, enabling your programs to make decisions based on different conditions. You\'ll learn how to control program flow and execute different code paths based on boolean expressions.',
    objectives: [
      'Understand the syntax and usage of if statements',
      'Master if-else statements for binary decision making',
      'Learn to create complex decision trees with if-else-if ladders',
      'Explore nested conditional statements for complex logic',
      'Practice writing clean, readable conditional code',
      'Understand boolean expressions and comparison operators',
      'Learn best practices for conditional statement organization'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Conditional Statements in Java
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Controlling program flow with decision-making structures</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Conditional Statements
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Conditional statements allow programs to make decisions and execute different code paths based on whether certain conditions are true or false. 
            This fundamental concept enables programs to respond differently to various inputs and situations.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Every conditional statement evaluates a boolean expression that results in either true or false, determining which code block to execute.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            The if Statement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The simplest form of conditional statement executes a block of code only if a condition is true.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                if (condition) {<br/>
                &nbsp;&nbsp;// code to execute if condition is true<br/>
                }
              </div>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int age = 18;<br/>
                if (age >= 18) {<br/>
                &nbsp;&nbsp;System.out.println("You are eligible to vote!");<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            The if-else Statement
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">This structure provides two alternative paths - one when the condition is true, and another when it's false.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                if (condition) {<br/>
                &nbsp;&nbsp;// code if true<br/>
                } else {<br/>
                &nbsp;&nbsp;// code if false<br/>
                }
              </div>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int score = 75;<br/>
                if (score >= 60) {<br/>
                &nbsp;&nbsp;System.out.println("You passed the exam!");<br/>
                } else {<br/>
                &nbsp;&nbsp;System.out.println("You need to study more.");<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            The if-else-if Ladder
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Multiple conditions can be checked in sequence using if-else-if chains.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                if (condition1) {<br/>
                &nbsp;&nbsp;// code if condition1 is true<br/>
                } else if (condition2) {<br/>
                &nbsp;&nbsp;// code if condition2 is true<br/>
                } else if (condition3) {<br/>
                &nbsp;&nbsp;// code if condition3 is true<br/>
                } else {<br/>
                &nbsp;&nbsp;// code if none of the above<br/>
                }
              </div>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int grade = 85;<br/>
                if (grade >= 90) {<br/>
                &nbsp;&nbsp;System.out.println("Grade: A");<br/>
                } else if (grade >= 80) {<br/>
                &nbsp;&nbsp;System.out.println("Grade: B");<br/>
                } else if (grade >= 70) {<br/>
                &nbsp;&nbsp;System.out.println("Grade: C");<br/>
                } else {<br/>
                &nbsp;&nbsp;System.out.println("Grade: D");<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Nested Conditional Statements
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Conditional statements can be nested inside other conditional statements for complex decision-making.</p>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int age = 25;<br/>
                boolean hasLicense = true;<br/>
                <br/>
                if (age >= 18) {<br/>
                &nbsp;&nbsp;if (hasLicense) {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("You can drive legally.");<br/>
                &nbsp;&nbsp;} else {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("You need to get a license.");<br/>
                &nbsp;&nbsp;}<br/>
                } else {<br/>
                &nbsp;&nbsp;System.out.println("You are not old enough to drive.");<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Comparison and Logical Operators
          </h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-gray-200">
              <thead class="bg-indigo-50">
                <tr>
                  <th class="text-left p-3 font-bold border-b">Operator</th>
                  <th class="text-left p-3 font-bold border-b">Description</th>
                  <th class="text-left p-3 font-bold border-b">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="p-3 font-mono">==</td>
                  <td class="p-3">Equal to</td>
                  <td class="p-3 font-mono">x == 5</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">!=</td>
                  <td class="p-3">Not equal to</td>
                  <td class="p-3 font-mono">x != 5</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">></td>
                  <td class="p-3">Greater than</td>
                  <td class="p-3 font-mono">x > 5</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono"><</td>
                  <td class="p-3">Less than</td>
                  <td class="p-3 font-mono">x < 5</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">>=</td>
                  <td class="p-3">Greater than or equal to</td>
                  <td class="p-3 font-mono">x >= 5</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono"><=</td>
                  <td class="p-3">Less than or equal to</td>
                  <td class="p-3 font-mono">x <= 5</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">&&</td>
                  <td class="p-3">Logical AND</td>
                  <td class="p-3 font-mono">x > 5 && y < 10</td>
                </tr>
                <tr class="border-b bg-gray-50">
                  <td class="p-3 font-mono">||</td>
                  <td class="p-3">Logical OR</td>
                  <td class="p-3 font-mono">x > 5 || y < 10</td>
                </tr>
                <tr class="border-b">
                  <td class="p-3 font-mono">!</td>
                  <td class="p-3">Logical NOT</td>
                  <td class="p-3 font-mono">!(x > 5)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class CheckAge {
    public static void main(String[] args) {
        int age = 18;
        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }
    }
}`,
    exercise: `
      1) Write an if statement that checks if a number is positive and prints "Positive".
      2) Create an if-else statement that determines if a number is even or odd.
      3) Use if-else-if to categorize a person's age into child, teen, adult, or senior.
    `
  }
};