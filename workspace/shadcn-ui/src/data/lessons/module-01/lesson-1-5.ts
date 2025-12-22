/* eslint-disable no-useless-escape */
import { LessonContent } from '../../types/LessonTypes';

export const lesson_1_5: LessonContent = {
  title: 'Operators in Java',
  type: 'lesson',
  duration: '35 min',
  module: 'Java Fundamentals',
  content: {
    overview: 'Master all types of operators in Java including arithmetic, comparison, logical, and assignment operators. This comprehensive lesson explores operator precedence, associativity, and practical applications in real-world programming scenarios. You\'ll understand how operators work at the bit level and learn advanced techniques for efficient computation.',
    objectives: [
      'Master all arithmetic operators: +, -, *, /, % and understand their behavior with different data types',
      'Learn comparison operators and their proper usage with primitives and objects',
      'Understand logical operators: &&, ||, ! and short-circuit evaluation',
      'Master assignment operators and compound assignment shortcuts',
      'Learn unary operators: ++, --, +, - and understand pre/post increment differences',
      'Understand operator precedence and associativity rules for complex expressions',
      'Explore bitwise operators and their applications in system programming'
    ],
    theory: `
      <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Operators in Java
        </h1>
        <p class="mt-3 text-orange-100 text-lg">The building blocks of computation - performing operations on data</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Arithmetic Operators
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed text-lg">
              Arithmetic operators perform mathematical calculations on numeric data types. Java provides five basic 
              arithmetic operators, each with specific behavior for different data types and edge cases.
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200 rounded-lg">
                <thead class="bg-orange-50">
                  <tr>
                    <th class="text-left p-3 font-bold text-orange-800">Operator</th>
                    <th class="text-left p-3 font-bold text-orange-800">Name</th>
                    <th class="text-left p-3 font-bold text-orange-800">Example</th>
                    <th class="text-left p-3 font-bold text-orange-800">Result</th>
                    <th class="text-left p-3 font-bold text-orange-800">Notes</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="p-3 font-mono text-blue-600">+</td>
                    <td class="p-3">Addition</td>
                    <td class="p-3 font-mono">5 + 3</td>
                    <td class="p-3 font-mono">8</td>
                    <td class="p-3">Also used for string concatenation</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3 font-mono text-blue-600">-</td>
                    <td class="p-3">Subtraction</td>
                    <td class="p-3 font-mono">5 - 3</td>
                    <td class="p-3 font-mono">2</td>
                    <td class="p-3">Can be unary (negative sign)</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-mono text-blue-600">*</td>
                    <td class="p-3">Multiplication</td>
                    <td class="p-3 font-mono">5 * 3</td>
                    <td class="p-3 font-mono">15</td>
                    <td class="p-3">Watch for overflow with large numbers</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3 font-mono text-blue-600">/</td>
                    <td class="p-3">Division</td>
                    <td class="p-3 font-mono">7 / 3</td>
                    <td class="p-3 font-mono">2</td>
                    <td class="p-3">Integer division truncates decimal</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-mono text-blue-600">%</td>
                    <td class="p-3">Modulus</td>
                    <td class="p-3 font-mono">7 % 3</td>
                    <td class="p-3 font-mono">1</td>
                    <td class="p-3">Remainder after division</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Comparison and Logical Operators
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-3">🔍 Comparison Operators</h4>
              <div class="space-y-2">
                <div class="bg-white p-2 rounded border font-mono text-sm space-y-1">
                  <div><span class="text-blue-600">==</span> equal to</div>
                  <div><span class="text-blue-600">!=</span> not equal to</div>
                  <div><span class="text-blue-600">></span> greater than</div>
                  <div><span class="text-blue-600"><</span> less than</div>
                  <div><span class="text-blue-600">>=</span> greater than or equal</div>
                  <div><span class="text-blue-600"><=</span> less than or equal</div>
                </div>
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">🧠 Logical Operators</h4>
              <div class="space-y-2">
                <div class="bg-white p-2 rounded border font-mono text-sm space-y-1">
                  <div><span class="text-green-600">&&</span> logical AND</div>
                  <div><span class="text-green-600">||</span> logical OR</div>
                  <div><span class="text-green-600">!</span> logical NOT</div>
                  <div><span class="text-green-600">&</span> bitwise AND</div>
                  <div><span class="text-green-600">|</span> bitwise OR</div>
                  <div><span class="text-green-600">^</span> bitwise XOR</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-4">
            <h4 class="font-bold text-yellow-800 mb-2">⚡ Short-Circuit Evaluation</h4>
            <p class="text-yellow-700 text-sm">Logical operators <code>&&</code> and <code>||</code> use short-circuit evaluation: if the result can be determined from the left operand, the right operand is not evaluated. This is crucial for performance and avoiding errors.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Assignment and Unary Operators
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold text-purple-800 mb-3">📝 Assignment Operators</h4>
              <div class="space-y-2">
                <div class="bg-white p-2 rounded border font-mono text-sm space-y-1">
                  <div><span class="text-purple-600">=</span> simple assignment</div>
                  <div><span class="text-purple-600">+=</span> add and assign</div>
                  <div><span class="text-purple-600">-=</span> subtract and assign</div>
                  <div><span class="text-purple-600">*=</span> multiply and assign</div>
                  <div><span class="text-purple-600">/=</span> divide and assign</div>
                  <div><span class="text-purple-600">%=</span> modulus and assign</div>
                </div>
              </div>
            </div>
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-3">🔄 Unary Operators</h4>
              <div class="space-y-2">
                <div class="bg-white p-2 rounded border font-mono text-sm space-y-1">
                  <div><span class="text-red-600">++</span> increment (pre and post)</div>
                  <div><span class="text-red-600">--</span> decrement (pre and post)</div>
                  <div><span class="text-red-600">+</span> unary plus</div>
                  <div><span class="text-red-600">-</span> unary minus</div>
                  <div><span class="text-red-600">!</span> logical complement</div>
                  <div><span class="text-red-600">~</span> bitwise complement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Operator Precedence and Associativity
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed">Operator precedence determines the order in which operators are evaluated in expressions with multiple operators. Operators with higher precedence are evaluated first. Associativity determines the order in which operators of the same precedence are evaluated.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200 rounded-lg">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold text-indigo-800">Precedence</th>
                    <th class="text-left p-3 font-bold text-indigo-800">Operator</th>
                    <th class="text-left p-3 font-bold text-indigo-800">Associativity</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="p-3">1</td>
                    <td class="p-3 font-mono">[] . ()</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">2</td>
                    <td class="p-3 font-mono">++ -- ! ~ + - (type)</td>
                    <td class="p-3">Right to left</td>
                  </tr>
                  <tr>
                    <td class="p-3">3</td>
                    <td class="p-3 font-mono">* / %</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">4</td>
                    <td class="p-3 font-mono">+ -</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr>
                    <td class="p-3">5</td>
                    <td class="p-3 font-mono"><< >>></td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">6</td>
                    <td class="p-3 font-mono">< > <= >= instanceof</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr>
                    <td class="p-3">7</td>
                    <td class="p-3 font-mono">== !=</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">8</td>
                    <td class="p-3 font-mono">&</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr>
                    <td class="p-3">9</td>
                    <td class="p-3 font-mono">^</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">10</td>
                    <td class="p-3 font-mono">|</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr>
                    <td class="p-3">11</td>
                    <td class="p-3 font-mono">&&</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">12</td>
                    <td class="p-3 font-mono">||</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                  <tr>
                    <td class="p-3">13</td>
                    <td class="p-3 font-mono">?:</td>
                    <td class="p-3">Right to left</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3">14</td>
                    <td class="p-3 font-mono">= += -= *= /= %=</td>
                    <td class="p-3">Right to left</td>
                  </tr>
                  <tr>
                    <td class="p-3">15</td>
                    <td class="p-3 font-mono">,</td>
                    <td class="p-3">Left to right</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Bitwise Operators
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed">Bitwise operators work on bits and perform bit-by-bit operations. These operators are rarely used in general programming but are essential in system programming and cryptography.</p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-3">BitFields and Flags</h4>
                <ul class="space-y-2 text-green-700 text-sm">
                  <li>• Used for efficient storage of boolean flags</li>
                  <li>• Common in system programming and hardware interfaces</li>
                  <li>• Can represent multiple states in a single variable</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-3">Performance Considerations</h4>
                <ul class="space-y-2 text-blue-700 text-sm">
                  <li>• Bitwise operations are extremely fast</li>
                  <li>• Can replace certain arithmetic operations</li>
                  <li>• Should be used judiciously for readability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">💡 Professional Development Tips</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Best Practices</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use parentheses to make operator precedence explicit</li>
                <li>• Prefer compound assignment operators for readability</li>
                <li>• Understand short-circuit evaluation in logical operators</li>
                <li>• Use increment/decrement operators appropriately</li>
                <li>• Be careful with integer division and type casting</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Common Mistakes</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Confusing = (assignment) with == (comparison)</li>
                <li>• Forgetting operator precedence rules</li>
                <li>• Misusing pre-increment vs post-increment</li>
                <li>• Using bitwise operators when logical operators are needed</li>
                <li>• Not handling division by zero errors</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class OperatorsDemo {
    public static void main(String[] args) {
        // Arithmetic operators
        int a = 10, b = 3;
        System.out.println("Addition: " + (a + b));        // 13
        System.out.println("Subtraction: " + (a - b));     // 7
        System.out.println("Multiplication: " + (a * b));  // 30
        System.out.println("Division: " + (a / b));        // 3 (integer division)
        System.out.println("Modulus: " + (a % b));         // 1 (remainder)

        // Comparison operators
        System.out.println("a > b: " + (a > b));           // true
        System.out.println("a == b: " + (a == b));         // false

        // Logical operators
        boolean x = true, y = false;
        System.out.println("x && y: " + (x && y));         // false
        System.out.println("x || y: " + (x || y));         // true

        // Assignment operators
        int value = 5;
        value += 3;  // equivalent to: value = value + 3
        System.out.println("After += 3: " + value);        // 8

        // Unary operators
        int counter = 5;
        System.out.println("Pre-increment: " + (++counter));  // 6
        System.out.println("Post-increment: " + (counter++)); // 6, then counter becomes 7
        System.out.println("Final counter: " + counter);      // 7
    }
}`,
    exercise: `
      1) Write an expression that adds two numbers and multiplies by 3.
      2) Use comparison operators to check if a number is between 10 and 20.
      3) Demonstrate the difference between pre-increment and post-increment.
    `
  }
};

/* eslint-enable no-useless-escape */
