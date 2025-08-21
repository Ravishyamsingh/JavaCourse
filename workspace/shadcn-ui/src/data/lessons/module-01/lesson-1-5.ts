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
    codeExample: `/**
 * OperatorsComprehensive.java
 * 
 * This comprehensive program demonstrates all Java operators with practical examples.
 * It shows:
 * - Arithmetic operators with different data types
 * - Comparison and logical operators with real-world scenarios
 * - Assignment and unary operators in context
 * - Operator precedence and associativity rules
 * - Bitwise operators and their applications
 * 
 * This example serves as a complete reference for Java operators
 * and demonstrates professional coding practices.
 */

public class OperatorsComprehensive {
  public static void main(String[] args) {
    printProgramHeader();
    demonstrateArithmeticOperators();
    demonstrateComparisonOperators();
    demonstrateLogicalOperators();
    demonstrateAssignmentOperators();
    demonstrateUnaryOperators();
    demonstrateOperatorPrecedence();
    demonstrateBitwiseOperators();
    printProgramFooter();
  }

  /**
   * Display program header with title and purpose
   */
  private static void printProgramHeader() {
    System.out.println("╔══════════════════════════════════════════════════════════════╗");
    System.out.println("║                                                              ║");
    System.out.println("║           🔢 JAVA OPERATORS COMPREHENSIVE DEMO              ║");
    System.out.println("║                Mastering Java Operations                     ║");
    System.out.println("║                                                              ║");
    System.out.println("╚══════════════════════════════════════════════════════════════╝");
    System.out.println();
  }

  /**
   * Demonstrate arithmetic operators with practical examples
   */
  private static void demonstrateArithmeticOperators() {
    System.out.println("➕ ARITHMETIC OPERATORS");
    System.out.println("   ════════════════════");

    // Integer arithmetic
    int a = 20, b = 7;
    System.out.println("   Integer Operations:");
    System.out.println("   └─ " + a + " + " + b + " = " + (a + b));
    System.out.println("   └─ " + a + " - " + b + " = " + (a - b));
    System.out.println("   └─ " + a + " * " + b + " = " + (a * b));
    System.out.println("   └─ " + a + " / " + b + " = " + (a / b) + " (integer division)");
    System.out.println("   └─ " + a + " % " + b + " = " + (a % b) + " (remainder)");

    // Floating-point arithmetic
    double x = 20.5, y = 7.2;
    System.out.println();
    System.out.println("   Floating-Point Operations:");
    System.out.println("   └─ " + x + " + " + y + " = " + (x + y));
    System.out.println("   └─ " + x + " - " + y + " = " + (x - y));
    System.out.println("   └─ " + x + " * " + y + " = " + (x * y));
    System.out.println("   └─ " + x + " / " + y + " = " + (x / y));
    System.out.println("   └─ " + x + " % " + y + " = " + (x % y));

    // String concatenation
    String firstName = "John";
    String lastName = "Doe";
    System.out.println();
    System.out.println("   String Concatenation:");
    System.out.println("   └─ \"" + firstName + "\" + \"" + lastName + "\" = \"" + (firstName + lastName) + "\"");
    System.out.println("   └─ \"Hello\" + \" \" + \"World\" = \"" + ("Hello" + " " + "World") + "\"");
    System.out.println();
  }

  /**
   * Demonstrate comparison operators with practical examples
   */
  private static void demonstrateComparisonOperators() {
    System.out.println("🔍 COMPARISON OPERATORS");
    System.out.println("   ═════════════════════");

    int num1 = 10, num2 = 20;
    System.out.println("   Comparing " + num1 + " and " + num2 + ":");
    System.out.println("   └─ " + num1 + " == " + num2 + " : " + (num1 == num2));
    System.out.println("   └─ " + num1 + " != " + num2 + " : " + (num1 != num2));
    System.out.println("   └─ " + num1 + " > " + num2 + " : " + (num1 > num2));
    System.out.println("   └─ " + num1 + " < " + num2 + " : " + (num1 < num2));
    System.out.println("   └─ " + num1 + " >= " + num2 + " : " + (num1 >= num2));
    System.out.println("   └─ " + num1 + " <= " + num2 + " : " + (num1 <= num2));

    // String comparison
    String str1 = "Hello";
    String str2 = "Hello";
    String str3 = new String("Hello");
    System.out.println();
    System.out.println("   String Comparisons:");
    System.out.println("   └─ \"" + str1 + "\" == \"" + str2 + "\" : " + (str1 == str2));
    System.out.println("   └─ \"" + str1 + "\".equals(\"" + str2 + "\") : " + (str1.equals(str2)));
    System.out.println("   └─ \"" + str1 + "\" == \"" + str3 + "\" : " + (str1 == str3));
    System.out.println("   └─ \"" + str1 + "\".equals(\"" + str3 + "\") : " + (str1.equals(str3)));
    System.out.println();
  }

  /**
   * Demonstrate logical operators with practical examples
   */
  private static void demonstrateLogicalOperators() {
    System.out.println("🧠 LOGICAL OPERATORS");
    System.out.println("   ══════════════════");

    boolean isSunny = true;
    boolean isWarm = false;
    boolean hasUmbrella = true;

    System.out.println("   Weather Conditions:");
    System.out.println("   └─ Sunny: " + isSunny);
    System.out.println("   └─ Warm: " + isWarm);
    System.out.println("   └─ Has Umbrella: " + hasUmbrella);
    System.out.println();
    System.out.println("   Logical Operations:");
    System.out.println("   └─ isSunny && isWarm : " + (isSunny && isWarm));
    System.out.println("   └─ isSunny || isWarm : " + (isSunny || isWarm));
    System.out.println("   └─ !isSunny : " + (!isSunny));
    System.out.println("   └─ (isSunny || !isWarm) && hasUmbrella : " + ((isSunny || !isWarm) && hasUmbrella));

    // Short-circuit evaluation demonstration
    System.out.println();
    System.out.println("   ⚡ Short-Circuit Evaluation:");
    System.out.println("   └─ false && (expensiveOperation()) : " + (false && expensiveOperation()));
    System.out.println("   └─ true || (expensiveOperation()) : " + (true || expensiveOperation()));
    System.out.println();
  }

  /**
   * Helper method to demonstrate short-circuit evaluation
   */
  private static boolean expensiveOperation() {
    System.out.println("     → Expensive operation executed!");
    return true;
  }

  /**
   * Demonstrate assignment operators with practical examples
   */
  private static void demonstrateAssignmentOperators() {
    System.out.println("📝 ASSIGNMENT OPERATORS");
    System.out.println("   ════════════════════");

    int value = 100;
    System.out.println("   Initial value: " + value);
    System.out.println("   └─ value += 10 : " + (value += 10) + " (value is now " + value + ")");
    System.out.println("   └─ value -= 5 : " + (value -= 5) + " (value is now " + value + ")");
    System.out.println("   └─ value *= 2 : " + (value *= 2) + " (value is now " + value + ")");
    System.out.println("   └─ value /= 4 : " + (value /= 4) + " (value is now " + value + ")");
    System.out.println("   └─ value %= 3 : " + (value %= 3) + " (value is now " + value + ")");
    System.out.println();
  }

  /**
   * Demonstrate unary operators with practical examples
   */
  private static void demonstrateUnaryOperators() {
    System.out.println("🔄 UNARY OPERATORS");
    System.out.println("   ════════════════");

    int counter = 5;
    System.out.println("   Initial counter: " + counter);
    System.out.println("   └─ Pre-increment (++counter): " + (++counter) + " (counter is now " + counter + ")");
    System.out.println("   └─ Post-increment (counter++): " + (counter++) + " (counter is now " + counter + ")");
    System.out.println("   └─ Pre-decrement (--counter): " + (--counter) + " (counter is now " + counter + ")");
    System.out.println("   └─ Post-decrement (counter--): " + (counter--) + " (counter is now " + counter + ")");
    System.out.println("   └─ Unary minus (-counter): " + (-counter));
    System.out.println("   └─ Logical complement (!true): " + (!true));
    System.out.println();
  }

  /**
   * Demonstrate operator precedence with practical examples
   */
  private static void demonstrateOperatorPrecedence() {
    System.out.println("🎯 OPERATOR PRECEDENCE");
    System.out.println("   ═══════════════════");

    int a = 10, b = 5, c = 2;
    System.out.println("   Expression: " + a + " + " + b + " * " + c);
    System.out.println("   └─ Without parentheses: " + a + " + " + b + " * " + c + " = " + (a + b * c));
    System.out.println("   └─ With parentheses: " + a + " + (" + b + " * " + c + ") = " + (a + (b * c)));
    System.out.println("   └─ With different parentheses: (" + a + " + " + b + ") * " + c + " = " + ((a + b) * c));

    // Complex expression
    int result = a + b * c - a / b;
    System.out.println();
    System.out.println("   Complex Expression:");
    System.out.println("   └─ " + a + " + " + b + " * " + c + " - " + a + " / " + b);
    System.out.println("   └─ Step by step:");
    System.out.println("      • " + b + " * " + c + " = " + (b * c));
    System.out.println("      • " + a + " / " + b + " = " + (a / b));
    System.out.println("      • " + a + " + " + (b * c) + " - " + (a / b) + " = " + result);
    System.out.println();
  }

  /**
   * Demonstrate bitwise operators with practical examples
   */
  private static void demonstrateBitwiseOperators() {
    System.out.println("BitFields AND OPERATORS");
    System.out.println("   ════════════════════");

    int a = 5;  // Binary: 0101
    int b = 3;  // Binary: 0011
    System.out.println("   Binary Operations (a = " + a + ", b = " + b + "):");
    System.out.println("   └─ a & b : " + (a & b) + " (Binary: " + Integer.toBinaryString(a & b) + ")");
    System.out.println("   └─ a | b : " + (a | b) + " (Binary: " + Integer.toBinaryString(a | b) + ")");
    System.out.println("   └─ a ^ b : " + (a ^ b) + " (Binary: " + Integer.toBinaryString(a ^ b) + ")");
    System.out.println("   └─ ~a : " + (~a) + " (Binary: " + Integer.toBinaryString(~a) + ")");
    System.out.println("   └─ a << 1 : " + (a << 1) + " (Binary: " + Integer.toBinaryString(a << 1) + ")");
    System.out.println("   └─ a >> 1 : " + (a >> 1) + " (Binary: " + Integer.toBinaryString(a >> 1) + ")");

    // Practical example: Bit flags
    System.out.println();
    System.out.println("   🏁 Bit Flags Example:");
    final int READ_PERMISSION = 1;    // Binary: 0001
    final int WRITE_PERMISSION = 2;   // Binary: 0010
    final int EXECUTE_PERMISSION = 4; // Binary: 0100
    int userPermissions = READ_PERMISSION | WRITE_PERMISSION; // Binary: 0011
    System.out.println("   └─ Read permission: " + ((userPermissions & READ_PERMISSION) != 0));
    System.out.println("   └─ Write permission: " + ((userPermissions & WRITE_PERMISSION) != 0));
    System.out.println("   └─ Execute permission: " + ((userPermissions & EXECUTE_PERMISSION) != 0));
    System.out.println("   └─ Adding execute permission: " + ((userPermissions |= EXECUTE_PERMISSION) != 0));
    System.out.println();
  }

  /**
   * Display program footer with summary
   */
  private static void printProgramFooter() {
    System.out.println("╔══════════════════════════════════════════════════════════════╗");
    System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
    System.out.println("║                                                              ║");
    System.out.println("║  You've seen examples of:                                    ║");
    System.out.println("║  • Arithmetic operators with integers and floating-point     ║");
    System.out.println("║  • Comparison operators with numbers and strings             ║");
    System.out.println("║  • Logical operators with short-circuit evaluation           ║");
    System.out.println("║  • Assignment operators for concise code                     ║");
    System.out.println("║  • Unary operators for increment/decrement operations        ║");
    System.out.println("║  • Operator precedence with complex expressions              ║");
    System.out.println("║  • Bitwise operators for system programming                  ║");
    System.out.println("║                                                              ║");
    System.out.println("║  Remember to:                                                ║");
    System.out.println("║  • Use parentheses to make precedence explicit               ║");
    System.out.println("║  • Understand short-circuit evaluation                       ║");
    System.out.println("║  • Choose appropriate operators for your needs               ║");
    System.out.println("║  • Follow Java naming conventions                            ║");
    System.out.println("╚══════════════════════════════════════════════════════════════╝");
  }
}`,
    exercise: `
      **🔬 Operators Comprehensive Exercise**

      This exercise will solidify your understanding of Java operators through hands-on practice. You'll create programs that demonstrate real-world usage of different operators, precedence rules, and best practices.

      **Part 1: Calculator Application (30 minutes)**

      Create a program called \`CalculatorApp.java\` that implements a basic calculator:

      **Requirements:**
      - Implement methods for all arithmetic operations (+, -, *, /, %)
      - Handle division by zero errors gracefully
      - Support both integer and floating-point calculations
      - Include exponentiation and square root operations
      - Display results with appropriate formatting

      **Features to implement:**
      - Menu-driven interface for operation selection
      - Input validation for numeric values
      - Error handling for invalid operations
      - History of calculations with timestamps
      - Use proper naming conventions and comments

      **Part 2: Logical Expression Evaluator (25 minutes)**

      Create a program called \`LogicEvaluator.java\` that evaluates complex logical expressions:

      **Requirements:**
      - Accept boolean inputs from the user
      - Evaluate expressions with multiple logical operators
      - Demonstrate short-circuit evaluation behavior
      - Show step-by-step evaluation process
      - Handle nested parentheses in expressions

      **Advanced Features:**
      - Implement a simple expression parser
      - Add support for logical equivalence and implication
      - Display truth tables for complex expressions
      - Include examples of De Morgan's laws

      **Part 3: Bit Manipulation Toolkit (35 minutes)**

      Create a program called \`BitToolkit.java\` that performs bit manipulation operations:

      **Requirements:**
      - Implement methods for setting, clearing, and toggling individual bits
      - Support bit shifting operations (left, right, unsigned right)
      - Include bit masking and extraction operations
      - Demonstrate bit counting and parity checking
      - Show examples of bit flags usage

      **Features to implement:**
      - Convert between decimal, binary, and hexadecimal representations
      - Implement common bit manipulation algorithms
      - Handle signed vs unsigned bit operations
      - Include performance comparisons between bit operations and arithmetic

      **Part 4: Operator Precedence Challenge (30 minutes)**

      Create a program called \`PrecedenceChallenge.java\` that tests understanding of operator precedence:

      **Requirements:**
      - Generate random expressions with multiple operators
      - Ask user to predict the result
      - Show step-by-step evaluation with parentheses
      - Include expressions that demonstrate common precedence mistakes
      - Track user's accuracy and provide feedback

      **Advanced Features:**
      - Implement a scoring system based on difficulty
      - Add time pressure for advanced challenges
      - Include expressions with assignment operators
      - Provide explanations for each precedence rule

      **Part 5: Real-World Application (40 minutes)**

      Create a program called \`RealWorldOperators.java\` that demonstrates operators in practical scenarios:

      **Requirements:**
      - Implement a simple encryption algorithm using XOR
      - Create a checksum calculator using bitwise operations
      - Develop a date calculator using arithmetic operations
      - Build a simple voting system with boolean logic
      - Design a permissions system using bit flags

      **Features to implement:**
      - Combine multiple operator types in each application
      - Handle edge cases and error conditions
      - Optimize for performance where appropriate
      - Include comprehensive testing for each feature

      **📋 Deliverables:**

      Submit the following files:
      1. \`CalculatorApp.java\` - Basic calculator implementation
      2. \`LogicEvaluator.java\` - Logical expression evaluator
      3. \`BitToolkit.java\` - Bit manipulation toolkit
      4. \`PrecedenceChallenge.java\` - Operator precedence tester
      5. \`RealWorldOperators.java\` - Practical applications
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**

      Your programs should demonstrate:
      - ✅ Correct usage of all operator types
      - ✅ Proper handling of operator precedence
      - ✅ Appropriate error handling and validation
      - ✅ Clear naming conventions and comments
      - ✅ Real-world application of operators
      - ✅ Professional formatting and output
      - ✅ Understanding of edge cases and limitations

      **💡 Bonus Challenges:**

      1. **Performance Optimization:** Compare performance of different operator implementations
      2. **Expression Parser:** Create a full expression parser for mathematical expressions
      3. **Advanced Bit Operations:** Implement CRC calculations or other advanced bit algorithms
      4. **Interactive GUI:** Create a graphical interface for the calculator application
      5. **Custom Operators:** Implement custom operator-like methods for domain-specific operations

      **📚 Learning Outcomes:**

      By completing this exercise, you will:
      - Master all Java operators and their appropriate usage
      - Understand operator precedence and associativity rules
      - Practice bitwise operations for system programming
      - Learn to handle edge cases and error conditions
      - Develop skills in creating real-world applications
      - Build confidence in using operators effectively in Java

      This comprehensive exercise provides hands-on experience with one of Java's most fundamental features!
    `
  }
};
