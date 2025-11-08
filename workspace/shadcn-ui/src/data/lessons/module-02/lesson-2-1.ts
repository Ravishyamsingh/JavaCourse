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

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Conditional Statements</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use descriptive variable names in conditions</li>
                <li>• Keep conditions simple and readable</li>
                <li>• Use parentheses to clarify complex conditions</li>
                <li>• Consider using early returns to reduce nesting</li>
                <li>• Comment complex conditional logic</li>
                <li>• Use consistent formatting for all conditional statements</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use assignment (=) instead of comparison (==)</li>
                <li>• Don't create deeply nested conditions</li>
                <li>• Don't repeat the same condition multiple times</li>
                <li>• Don't use complex expressions directly in conditions</li>
                <li>• Don't forget to handle all possible cases</li>
                <li>• Don't mix different data types in comparisons without care</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class ConditionalStatements {
    public static void main(String[] args) {
        // Simple if statement
        int age = 20;
        if (age >= 18) {
            System.out.println("You are an adult");
        }

        // if-else statement
        int score = 85;
        if (score >= 60) {
            System.out.println("You passed!");
        } else {
            System.out.println("You failed");
        }

        // if-else-if ladder
        int marks = 75;
        if (marks >= 90) {
            System.out.println("Grade: A");
        } else if (marks >= 80) {
            System.out.println("Grade: B");
        } else if (marks >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: D");
        }

        // Nested if statements
        boolean isStudent = true;
        int studentAge = 16;
        if (isStudent) {
            if (studentAge >= 18) {
                System.out.println("Adult student");
            } else {
                System.out.println("Young student");
            }
        }
    }
}`,
    exercise: `
      **🎯 Conditional Statements Practice Exercise**

      **Part 1: Grade Calculator**
      Create a program called \`GradeCalculator.java\` that determines letter grades based on numerical scores:
      - Accept a numerical score between 0 and 100
      - Use if-else-if statements to determine the letter grade:
        * 90-100: A
        * 80-89: B
        * 70-79: C
        * 60-69: D
        * 0-59: F
      - Handle invalid input (scores outside 0-100 range)
      - Display both the numerical score and letter grade

      **Part 2: Weather Advisor**
      Create a program called \`WeatherAdvisor.java\` that gives clothing recommendations based on weather conditions:
      - Accept temperature (in Celsius) and weather condition (sunny, rainy, cloudy, snowy)
      - Provide clothing recommendations based on:
        * Temperature ranges (hot, warm, cool, cold, freezing)
        * Weather conditions (rain protection, sun protection, etc.)
      - Use nested conditionals for complex recommendations
      - Include special recommendations for extreme conditions

      **Part 3: Authentication System**
      Create a program called \`AuthenticationSystem.java\` that simulates a simple login system:
      - Store valid username and password combinations
      - Implement login validation with appropriate error messages
      - Include account lockout after multiple failed attempts
      - Add password strength validation (length, character types)
      - Implement role-based access control (admin, user)

      **Part 4: Discount Calculator**
      Create a program called \`DiscountCalculator.java\` that calculates discounts for an online store:
      - Apply different discount rules based on:
        * Customer membership status (regular, premium, VIP)
        * Purchase amount thresholds
        * Special promotional codes
        * Seasonal discounts
      - Use complex boolean expressions to determine final discount
      - Display original price, discount amount, and final price

      **Part 5: Decision Tree Challenge**
      Create a program called \`DecisionTree.java\` that implements a simple decision tree for a real-world scenario:
      
      Choose ONE of these scenarios:
      
      Option A: Medical Symptom Checker
      - Ask user about symptoms (fever, cough, headache, etc.)
      - Provide possible conditions based on symptom combinations
      - Recommend actions (rest, see doctor, emergency care)
      
      Option B: Car Diagnostic System
      - Ask about car problems (won't start, strange noise, warning lights)
      - Diagnose potential issues based on user responses
      - Recommend solutions or professional help
      
      Option C: Fitness Program Selector
      - Ask about fitness goals, experience level, available equipment
      - Recommend workout programs based on user profile
      - Provide customized weekly plans

      **Deliverables:**
      Submit the following files:
      1. \`GradeCalculator.java\` - Grade determination program
      2. \`WeatherAdvisor.java\` - Weather-based recommendations
      3. \`AuthenticationSystem.java\` - Login simulation
      4. \`DiscountCalculator.java\` - Discount calculation program
      5. \`DecisionTree.java\` - Your chosen decision tree implementation
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully
    `
  }
};