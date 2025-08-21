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
    codeExample: `/**
 * HelloWorldProgression.java
 * 
 * This comprehensive example demonstrates the evolution of Java programs
 * from the simplest "Hello World" to more complex applications. It shows:
 * - Basic program structure and syntax
 * - Output formatting and text manipulation
 * - Multiple methods and code organization
 * - Comments and documentation best practices
 * - Real-world programming patterns
 * 
 * Each section builds upon the previous, showing progressive complexity
 * while maintaining clean, professional code standards.
 */

public class HelloWorldProgression {
    
    /**
     * The main method - entry point of the Java application
     * This method demonstrates various ways to output information
     * and showcases fundamental Java programming concepts.
     * 
     * @param args Command line arguments (not used in this example)
     */
    public static void main(String[] args) {
        // Section 1: Basic Output
        displayWelcomeMessage();
        
        // Section 2: Formatted Output
        displayFormattedInformation();
        
        // Section 3: Interactive Content
        displayProgrammingJourney();
        
        // Section 4: System Information
        displaySystemInfo();
        
        // Section 5: Closing Message
        displayMotivationalMessage();
    }
    
    /**
     * Displays a basic welcome message
     * Demonstrates simple string output and basic formatting
     */
    private static void displayWelcomeMessage() {
        System.out.println("╔══════════════════════════════════════╗");
        System.out.println("║          Welcome to Java!           ║");
        System.out.println("║      Your Programming Journey        ║");
        System.out.println("║           Starts Here               ║");
        System.out.println("╚══════════════════════════════════════╝");
        System.out.println(); // Empty line for spacing
    }
    
    /**
     * Demonstrates formatted output and string concatenation
     * Shows how to combine text with dynamic content
     */
    private static void displayFormattedInformation() {
        String programName = "HelloWorldProgression";
        String language = "Java";
        int currentYear = 2024;
        
        System.out.println("📋 Program Information:");
        System.out.println("   Program Name: " + programName);
        System.out.println("   Language: " + language);
        System.out.println("   Year: " + currentYear);
        System.out.println("   Status: ✅ Running Successfully!");
        System.out.println();
    }
    
    /**
     * Shows the programming learning journey
     * Demonstrates multi-line output with structured information
     */
    private static void displayProgrammingJourney() {
        System.out.println("🚀 Your Java Learning Path:");
        System.out.println("┌─────────────────────────────────────┐");
        System.out.println("│ Step 1: ✅ Environment Setup       │");
        System.out.println("│ Step 2: ➡️  First Program (Current) │");
        System.out.println("│ Step 3: ⏳ Variables & Data Types   │");
        System.out.println("│ Step 4: ⏳ Control Structures       │");
        System.out.println("│ Step 5: ⏳ Object-Oriented Programming│");
        System.out.println("└─────────────────────────────────────┘");
        System.out.println();
        
        // Show learning statistics
        System.out.println("📊 Learning Progress:");
        System.out.println("   • Lessons Completed: 2/69");
        System.out.println("   • Current Module: Java Fundamentals");
        System.out.println("   • Next Milestone: Variables & Data Types");
        System.out.println();
    }
    
    /**
     * Displays basic system information
     * Demonstrates accessing system properties in Java
     */
    private static void displaySystemInfo() {
        System.out.println("💻 System Information:");
        System.out.println("   Java Version: " + System.getProperty("java.version"));
        System.out.println("   Operating System: " + System.getProperty("os.name"));
        System.out.println("   User: " + System.getProperty("user.name"));
        System.out.println("   Current Directory: " + System.getProperty("user.dir"));
        System.out.println();
    }
    
    /**
     * Displays an encouraging message for new programmers
     * Shows how to create engaging, motivational output
     */
    private static void displayMotivationalMessage() {
        System.out.println("🌟 Congratulations!");
        System.out.println("You've just created and run your first Java program!");
        System.out.println();
        System.out.println("💡 What you've learned:");
        System.out.println("   ✅ Java program structure (class, main method)");
        System.out.println("   ✅ Output statements (System.out.println)");
        System.out.println("   ✅ String literals and text formatting");
        System.out.println("   ✅ Method organization and documentation");
        System.out.println("   ✅ Professional coding practices");
        System.out.println();
        System.out.println("🎯 Next Steps:");
        System.out.println("   1. Experiment with different text outputs");
        System.out.println("   2. Try modifying the messages");
        System.out.println("   3. Add your own methods");
        System.out.println("   4. Move on to variables and data types!");
        System.out.println();
        System.out.println("Happy Coding! 🚀👨‍💻👩‍💻");
        
        // ASCII Art for fun!
        System.out.println();
        System.out.println("    ☕    ☕    ☕");
        System.out.println("   JAVA  JAVA  JAVA");
    }
}

// ===================================================================
// ADDITIONAL EXAMPLES - Different Program Styles
// ===================================================================

/**
 * SimpleGreeting.java - A basic greeting program
 * Demonstrates the minimal structure of a Java program
 */
class SimpleGreeting {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
    }
}

/**
 * PersonalizedGreeting.java - Interactive-style output
 * Shows how to create more engaging, personalized programs
 */
class PersonalizedGreeting {
    public static void main(String[] args) {
        // Student information (in later lessons, we'll get this from user input)
        String studentName = "Alex Johnson";
        String course = "Java Fundamentals";
        int lessonNumber = 3;
        
        System.out.println("╔══════════════════════════════════════════════════════╗");
        System.out.println("║                 Personal Greeting                    ║");
        System.out.println("╚══════════════════════════════════════════════════════╝");
        System.out.println();
        System.out.println("👋 Hello, " + studentName + "!");
        System.out.println("📚 You're currently studying: " + course);
        System.out.println("📖 This is lesson #" + lessonNumber + " - Your First Java Program");
        System.out.println("⭐ Keep up the great work!");
        System.out.println();
        System.out.println("🎯 Today's Goals:");
        System.out.println("   • Understand Java program structure");
        System.out.println("   • Learn about the main method");
        System.out.println("   • Practice writing and running code");
        System.out.println("   • Build confidence in Java programming");
    }
}

/*
 * EXPECTED PROGRAM OUTPUT:
 * 
 * ╔══════════════════════════════════════╗
 * ║          Welcome to Java!           ║
 * ║      Your Programming Journey        ║
 * ║           Starts Here               ║
 * ╚══════════════════════════════════════╝
 * 
 * 📋 Program Information:
 *    Program Name: HelloWorldProgression
 *    Language: Java
 *    Year: 2024
 *    Status: ✅ Running Successfully!
 * 
 * 🚀 Your Java Learning Path:
 * ┌─────────────────────────────────────┐
 * │ Step 1: ✅ Environment Setup       │
 * │ Step 2: ➡️  First Program (Current) │
 * │ Step 3: ⏳ Variables & Data Types   │
 * │ Step 4: ⏳ Control Structures       │
 * │ Step 5: ⏳ Object-Oriented Programming│
 * └─────────────────────────────────────┘
 * 
 * 📊 Learning Progress:
 *    • Lessons Completed: 2/69
 *    • Current Module: Java Fundamentals
 *    • Next Milestone: Variables & Data Types
 * 
 * 💻 System Information:
 *    Java Version: 17.0.2
 *    Operating System: Windows 10
 *    User: StudentName
 *    Current Directory: C:\JavaProjects
 * 
 * 🌟 Congratulations!
 * You've just created and run your first Java program!
 * 
 * 💡 What you've learned:
 *    ✅ Java program structure (class, main method)
 *    ✅ Output statements (System.out.println)
 *    ✅ String literals and text formatting
 *    ✅ Method organization and documentation
 *    ✅ Professional coding practices
 * 
 * 🎯 Next Steps:
 *    1. Experiment with different text outputs
 *    2. Try modifying the messages
 *    3. Add your own methods
 *    4. Move on to variables and data types!
 * 
 * Happy Coding! 🚀👨‍💻👩‍💻
 * 
 *     ☕    ☕    ☕
 *    JAVA  JAVA  JAVA
 */`,
    exercise: `
      **🏗️ First Java Program Development Challenge**
      
      This hands-on exercise will solidify your understanding of Java program structure and give you practical experience creating professional-quality Java applications.
      
      **Part 1: Recreation and Understanding (25 minutes)**
      
      1. **Recreate the Hello World Program (10 minutes):**
         - Create a new file called \`HelloWorld.java\`
         - Type the basic Hello World program from memory
         - Compile it using: \`javac HelloWorld.java\`
         - Run it using: \`java HelloWorld\`
         - Take a screenshot of the successful output
      
      2. **Program Structure Analysis (15 minutes):**
         - Identify each component: class declaration, main method, statements
         - Explain in your own words what each part does
         - List what happens if you change the class name without changing the filename
         - Document what each keyword means: \`public\`, \`static\`, \`void\`
      
      **Part 2: Personal Information Program (30 minutes)**
      
      Create a program called \`AboutMe.java\` that displays comprehensive information about you:
      
      **Requirements:**
      - Your full name and preferred nickname
      - Your age and location (city/state)
      - Your educational background
      - Your programming experience level (beginner, intermediate, etc.)
      - Your favorite hobby or interest
      - Why you want to learn Java
      - Your career goals in technology
      - A fun fact about yourself
      
      **Technical Requirements:**
      - Use proper Java naming conventions
      - Include comprehensive documentation comments
      - Create at least 3 separate methods (like the examples)
      - Use attractive ASCII art or formatting
      - Include proper spacing and visual organization
      
      **Part 3: Interactive Learning Tracker (35 minutes)**
      
      Create a program called \`LearningTracker.java\` that simulates a learning dashboard:
      
      **Features to implement:**
      - Display current date and time information
      - Show your learning progress (lessons completed, current module)
      - List your learning goals for this week
      - Display study schedule and time commitments
      - Show programming languages you want to learn
      - Include motivational messages and progress indicators
      
      **Advanced Features:**
      - Create methods for different sections of information
      - Use string concatenation to create dynamic content
      - Include system information (like the examples)
      - Add visual elements using ASCII characters
      - Create a professional-looking output format
      
      **Part 4: Creative Programming Challenge (30 minutes)**
      
      Choose ONE of the following creative challenges:
      
      **Option A: ASCII Art Gallery**
      - Create a program that displays multiple ASCII art pieces
      - Include your name in ASCII art
      - Add descriptions for each piece
      - Use methods to organize different artworks
      
      **Option B: Virtual Business Card**
      - Design a program that displays a professional business card
      - Include contact information, skills, and experience
      - Make it visually appealing with borders and formatting
      - Add social media handles and portfolio links
      
      **Option C: Learning Journey Map**
      - Create a visual representation of your programming journey
      - Show where you started, where you are now, and where you're going
      - Include milestones, achievements, and future goals
      - Use creative formatting and visual indicators
      
      **Part 5: Code Review and Documentation (20 minutes)**
      
      1. **Self-Review Process:**
         - Check all programs compile and run without errors
         - Verify proper naming conventions are followed
         - Ensure code is properly formatted and indented
         - Add any missing comments or documentation
      
      2. **Create a Documentation File:**
         - Write a README.md file describing each program
         - Include compilation and execution instructions
         - Document any challenges you faced and how you solved them
         - List what you learned from each exercise
      
      **📋 Deliverables:**
      
      Submit the following files:
      1. \`HelloWorld.java\` - Basic recreation
      2. \`AboutMe.java\` - Personal information program
      3. \`LearningTracker.java\` - Learning dashboard
      4. One creative challenge program
      5. \`README.md\` - Documentation and reflection
      6. Screenshots of all programs running successfully
      
      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct Java syntax and program structure
      - ✅ Proper naming conventions and code formatting
      - ✅ Multiple methods with clear purposes
      - ✅ Professional documentation and comments
      - ✅ Creative problem-solving and personal expression
      - ✅ Successful compilation and execution
      - ✅ Clean, readable, and well-organized code
      
      **💡 Bonus Challenges:**
      
      1. **Error Handling Exploration:** Intentionally make syntax errors and document the error messages you receive
      2. **Method Variations:** Create methods that take parameters (we'll learn this formally later)
      3. **Code Optimization:** Find ways to make your code more concise while maintaining readability
      4. **Version Control:** Initialize a Git repository and commit your programs
      5. **IDE Integration:** Try running your programs in different IDEs and compare the experience
      
      **📚 Learning Outcomes:**
      
      By completing this exercise, you will:
      - Master the fundamental structure of Java programs
      - Gain confidence in writing, compiling, and running Java code
      - Understand the importance of naming conventions and code organization
      - Practice professional documentation and commenting
      - Develop problem-solving skills through hands-on programming
      - Build a portfolio of your first Java programs
      - Establish good programming habits from the beginning
      
      **🚀 Next Steps:**
      
      After completing this exercise:
      - Keep your programs as reference for future lessons
      - Experiment with modifying the code to see different outputs
      - Share your creative programs with fellow students
      - Prepare for the next lesson on Variables and Data Types
      - Continue practicing with additional small programs on your own
      
      Remember: Every expert programmer started with "Hello, World!" - you're now officially on your way to Java mastery!
    `
  }
};