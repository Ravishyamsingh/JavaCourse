import { LessonContent } from '../../types/LessonTypes';

export const lesson_2_2: LessonContent = {
  title: 'Switch Statements',
  type: 'lesson',
  duration: '25 min',
  module: 'Control Structures',
  content: {
    overview: 'Learn to use switch statements for multi-way branching based on discrete values. This lesson covers the syntax, best practices, and advanced features of switch statements in Java, including the newer switch expressions introduced in recent Java versions. You\'ll understand when to use switch over if-else-if chains and how to write clean, efficient branching code.',
    objectives: [
      'Master the syntax and structure of switch statements',
      'Understand the difference between switch statements and switch expressions',
      'Learn about break statements and fall-through behavior',
      'Explore the default case and its proper usage',
      'Practice writing clean switch-based code',
      'Understand when to use switch versus if-else chains',
      'Learn about enhanced switch features in modern Java'
    ],
    theory: `
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Switch Statements in Java
        </h1>
        <p class="mt-3 text-purple-100 text-lg">Multi-way branching with clean, readable code</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Switch Statements
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Switch statements provide a clean way to execute different code blocks based on the value of a single expression. 
            They're particularly useful when you have multiple discrete values to check against, offering better readability 
            than long if-else-if chains in these scenarios.
          </p>
          <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 mb-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Key Concept</h4>
            <p class="text-purple-700">Switch statements work with byte, short, int, char, String, and enum types, comparing the expression value against case labels.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Traditional Switch Statement Syntax
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The traditional switch statement uses case labels and break statements to control execution flow.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                switch (expression) &#123;<br/>
                &nbsp;&nbsp;case value1:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// code for value1<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;case value2:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// code for value2<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;default:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// code when no case matches<br/>
                &#125;
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                int day = 3;<br/>
                switch (day) &#123;<br/>
                &nbsp;&nbsp;case 1:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Monday");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;case 2:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Tuesday");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;case 3:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Wednesday");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;default:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Invalid day");<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Fall-through Behavior
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">One of the most important concepts in switch statements is fall-through, which occurs when break statements are omitted.</p>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">Example with Fall-through:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                char grade = 'B';<br/>
                switch (grade) &#123;<br/>
                &nbsp;&nbsp;case 'A':<br/>
                &nbsp;&nbsp;case 'B':<br/>
                &nbsp;&nbsp;case 'C':<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Pass");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;case 'D':<br/>
                &nbsp;&nbsp;case 'F':<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Fail");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;default:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Invalid grade");<br/>
                &#125;
              </div>
              <p class="text-green-700 mt-2">In this example, grades A, B, and C all result in "Pass" because of fall-through behavior.</p>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Switch with Strings
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Since Java 7, switch statements can work with String values, making them even more versatile.</p>
            
            <div class="bg-orange-50 p-4 rounded-lg">
              <h4 class="font-bold text-orange-800 mb-2">Example:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                String day = "Monday";<br/>
                switch (day) &#123;<br/>
                &nbsp;&nbsp;case "Monday":<br/>
                &nbsp;&nbsp;case "Tuesday":<br/>
                &nbsp;&nbsp;case "Wednesday":<br/>
                &nbsp;&nbsp;case "Thursday":<br/>
                &nbsp;&nbsp;case "Friday":<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Weekday");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;case "Saturday":<br/>
                &nbsp;&nbsp;case "Sunday":<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Weekend");<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                &nbsp;&nbsp;default:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Invalid day");<br/>
                &#125;
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Modern Switch Expressions (Java 14+)
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java 14 introduced switch expressions with arrow syntax and yield for more concise code.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Traditional vs Modern:</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-bold text-gray-700 mb-2">Traditional Switch:</h5>
                  <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    int numLetters;<br/>
                    switch (day) &#123;<br/>
                    &nbsp;&nbsp;case MONDAY:<br/>
                    &nbsp;&nbsp;case FRIDAY:<br/>
                    &nbsp;&nbsp;case SUNDAY:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;numLetters = 6;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                    &nbsp;&nbsp;case TUESDAY:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;numLetters = 7;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
                    &#125;
                  </div>
                </div>
                <div>
                  <h5 class="font-bold text-gray-700 mb-2">Modern Switch Expression:</h5>
                  <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                    int numLetters = switch (day) &#123;<br/>
                    &nbsp;&nbsp;case MONDAY, FRIDAY, SUNDAY -> 6;<br/>
                    &nbsp;&nbsp;case TUESDAY -> 7;<br/>
                    &nbsp;&nbsp;default -> &#123;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Invalid day");<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;yield -1;<br/>
                    &nbsp;&nbsp;&#125;;<br/>
                    &#125;;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            When to Use Switch vs If-Else
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-3">Use Switch When:</h4>
              <ul class="space-y-2 text-blue-700">
                <li>• Comparing a single variable against multiple constant values</li>
                <li>• Working with discrete, known values (enums, menu options)</li>
                <li>• Need better performance for many cases</li>
                <li>• Code is more readable with switch structure</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-3">Use If-Else When:</h4>
              <ul class="space-y-2 text-green-700">
                <li>• Comparing ranges of values</li>
                <li>• Using complex boolean expressions</li>
                <li>• Comparing different variables</li>
                <li>• Need short-circuit evaluation</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Switch Statements</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always include a default case for safety</li>
                <li>• Use break statements to prevent fall-through unless intentional</li>
                <li>• Group related cases together for readability</li>
                <li>• Use meaningful constant names for case values</li>
                <li>• Consider using enums with switch for type safety</li>
                <li>• Comment intentional fall-through behavior</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't forget break statements (causes fall-through bugs)</li>
                <li>• Don't use switch for complex boolean expressions</li>
                <li>• Don't duplicate the same code in multiple cases</li>
                <li>• Don't use magic numbers as case values</li>
                <li>• Don't create overly complex switch statements</li>
                <li>• Don't ignore the default case</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `public class SwitchStatements {
    public static void main(String[] args) {
        // Switch with int
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            default:
                System.out.println("Weekend");
                break;
        }

        // Switch with String
        String fruit = "Apple";
        switch (fruit) {
            case "Apple":
                System.out.println("Red fruit");
                break;
            case "Banana":
                System.out.println("Yellow fruit");
                break;
            case "Orange":
                System.out.println("Orange fruit");
                break;
            default:
                System.out.println("Unknown fruit");
                break;
        }

        // Switch with char
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("Excellent");
                break;
            case 'B':
                System.out.println("Good");
                break;
            case 'C':
                System.out.println("Average");
                break;
            default:
                System.out.println("Needs improvement");
                break;
        }
    }
}`,
    exercise: `
      **🎯 Switch Statements Practice Exercise**

      Create programs to practice working with switch statements in Java.

      **Part 1: Calculator with Switch**
      
      Create a program called \`CalculatorSwitch.java\` that implements a basic calculator using switch statements:
      
      Requirements:
      - Accept two numbers and an operator (+, -, *, /, %)
      - Use switch statement to perform the appropriate operation
      - Handle division by zero error
      - Include a default case for invalid operators
      - Display the result with proper formatting
      
      Advanced Features:
      - Add exponentiation (^) and square root (sqrt) operations
      - Implement memory functions (store, recall, clear)
      - Add input validation for numbers and operators

      **Part 2: Menu System**
      
      Create a program called \`MenuSystem.java\` that simulates a restaurant ordering system:
      
      Requirements:
      - Display a menu with at least 10 items categorized by type (appetizers, mains, desserts)
      - Use switch statements to process user selections
      - Calculate total order cost with tax
      - Allow users to add multiple items to their order
      - Implement an exit option
      
      Features to implement:
      - Menu categories with sub-switches
      - Order summary with itemized list
      - Special offers based on order combinations
      - Input validation for menu choices

      **Part 3: Grade Converter**
      
      Create a program called \`GradeConverter.java\` that converts between different grading systems:
      
      Requirements:
      - Convert letter grades (A-F) to GPA values (4.0 scale)
      - Convert numerical scores to letter grades
      - Convert between different grading scales (percentage, letter, GPA)
      - Use switch statements for the conversion logic
      - Handle invalid input gracefully
      
      Advanced Features:
      - Add support for + and - grade modifiers
      - Implement conversion between international grading systems
      - Calculate cumulative GPA for multiple courses

      **Part 4: Traffic Light Simulator**
      
      Create a program called \`TrafficLightSimulator.java\` that simulates traffic light behavior:
      
      Requirements:
      - Implement a traffic light with states: RED, YELLOW, GREEN
      - Use switch statements to determine behavior for each state
      - Include timing for each light state
      - Add pedestrian crossing functionality
      - Handle emergency vehicle priority
      
      Features to implement:
      - State transitions with switch logic
      - Timing controls for each state
      - Special modes (night mode, emergency override)
      - Visual representation of current state

      **Part 5: Game State Manager**
      
      Create a program called \`GameStateManager.java\` that manages different states in a game:
      
      Requirements:
      - Implement game states: MENU, PLAYING, PAUSED, GAME_OVER, SETTINGS
      - Use switch statements to handle transitions between states
      - Implement state-specific behaviors and actions
      - Add input handling for state changes
      - Include save/load functionality for game progress
      
      Choose ONE of these implementations:
      
      Option A: Text-based Adventure Game
      - Different game states affect player options
      - State transitions based on player choices
      - Save game state to file
      
      Option B: Simple Puzzle Game
      - States for different puzzle screens
      - Timer functionality in PLAYING state
      - Score tracking across states
      
      Option C: Quiz Application
      - States for different quiz phases (start, question, result)
      - Score calculation in GAME_OVER state
      - Category selection in MENU state
      
      Technical Requirements:
      - Use enums for game states
      - Implement proper state transition logic with switch
      - Handle invalid state transitions gracefully
      - Include user feedback for state changes

      **Part 6: Modern Switch Challenge**
      
      Create a program called \`ModernSwitchDemo.java\` that demonstrates modern switch features:
      
      Requirements:
      - Use switch expressions with arrow syntax
      - Implement switch with code blocks and yield statements
      - Compare traditional switch with modern switch expressions
      - Demonstrate switch with pattern matching (if using Java 17+)
      
      Features to implement:
      - Performance comparison between switch styles
      - Code readability improvements
      - Error handling in modern switch expressions

      **📋 Deliverables:**
      
      Submit the following files:
      1. \`CalculatorSwitch.java\` - Switch-based calculator
      2. \`MenuSystem.java\` - Restaurant menu system
      3. \`GradeConverter.java\` - Grade conversion program
      4. \`TrafficLightSimulator.java\` - Traffic light simulation
      5. \`GameStateManager.java\` - Game state management system
      6. \`ModernSwitchDemo.java\` - Modern switch features demonstration
      7. \`README.md\` - Documentation explaining each program
      8. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of switch statements
      - ✅ Proper use of break statements and fall-through behavior
      - ✅ Switch with different data types (int, char, String, enum)
      - ✅ Modern switch expressions (if Java version supports it)
      - ✅ Input validation and error handling
      - ✅ Clean, readable code with appropriate comments
      - ✅ Understanding of when to use switch vs if-else

      **💡 Bonus Challenges:**
      
      1. Performance Testing: Compare performance of switch vs if-else for large numbers of cases
      2. Code Optimization: Find ways to minimize code duplication in switch cases
      3. Error Recovery: Implement graceful recovery from invalid inputs
      4. User Experience: Add interactive menus and better user feedback
      5. Extensibility: Design your programs to easily add new cases
    `
  }
};