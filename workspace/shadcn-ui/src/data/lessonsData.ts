export interface LessonContent {
  title: string;
  type: string;
  duration: string;
  module: string;
  content: {
    overview: string;
    objectives: string[];
    theory: string;
    codeExample: string;
    exercise: string;
  };
}

export const lessonsDatabase: Record<string, LessonContent> = {
  // Module 1: Java Fundamentals
  'lesson-1-1': {
    title: 'Introduction to Java',
    type: 'lesson',
    duration: '25 min',
    module: 'Java Fundamentals',
    content: {
      overview: 'Welcome to the exciting world of Java programming! This comprehensive introduction will take you through the history, philosophy, and core features of Java. You\'ll understand why Java has become one of the most popular and widely-used programming languages in the world, powering everything from mobile applications to enterprise systems.',
      objectives: [
        'Understand Java\'s history and evolution from its creation to modern versions',
        'Master the "Write Once, Run Anywhere" (WORA) philosophy and platform independence',
        'Explore Java\'s key features: simplicity, security, portability, and robustness',
        'Discover real-world applications and the Java ecosystem',
        'Learn about different Java editions: SE, EE, ME, and their use cases',
        'Understand the Java Virtual Machine (JVM) architecture and bytecode compilation',
        'Compare Java with other programming languages and understand its advantages'
      ],
      theory: `
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
          <h1 class="text-3xl font-bold m-0 flex items-center">
            <span class="w-3 h-10 bg-white rounded mr-4"></span>
            Introduction to Java Programming
          </h1>
          <p class="mt-3 text-blue-100 text-lg">Your journey into the world's most versatile programming language begins here</p>
        </div>

        <div class="space-y-8">
          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
              What is Java?
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed text-lg">
              Java is a high-level, object-oriented programming language that was originally developed by <strong>James Gosling</strong> 
              at Sun Microsystems in 1995. Initially called "Oak," Java was designed with the vision of creating a language that 
              could run on any platform without modification - a revolutionary concept at the time.
            </p>
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
              <h4 class="font-bold text-blue-800 mb-2">💡 Key Insight</h4>
              <p class="text-blue-700">Java's motto is <em>"Write Once, Run Anywhere"</em> (WORA), meaning code written in Java can run on any device that has a Java Virtual Machine (JVM) installed.</p>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
              Java's Key Features
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="bg-green-50 p-4 rounded-lg">
                  <h4 class="font-bold text-green-800 mb-2">🔧 Simple and Familiar</h4>
                  <p class="text-green-700">Java syntax is clean and easy to understand, drawing inspiration from C++ while removing complex features like pointers and multiple inheritance.</p>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg">
                  <h4 class="font-bold text-blue-800 mb-2">🌐 Platform Independent</h4>
                  <p class="text-blue-700">Java code compiles to bytecode that runs on the JVM, making it platform-neutral and portable across different operating systems.</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                  <h4 class="font-bold text-purple-800 mb-2">🔒 Secure</h4>
                  <p class="text-purple-700">Built-in security features including bytecode verification, secure class loading, and runtime security management.</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-orange-50 p-4 rounded-lg">
                  <h4 class="font-bold text-orange-800 mb-2">💪 Robust</h4>
                  <p class="text-orange-700">Strong memory management, exception handling, and type checking help create reliable applications.</p>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <h4 class="font-bold text-red-800 mb-2">📱 Object-Oriented</h4>
                  <p class="text-red-700">Everything in Java is an object (except primitives), promoting code reusability, modularity, and maintainability.</p>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg">
                  <h4 class="font-bold text-indigo-800 mb-2">⚡ High Performance</h4>
                  <p class="text-indigo-700">Just-In-Time (JIT) compilation and optimized bytecode execution provide excellent performance.</p>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
              Java Editions and Ecosystem
            </h2>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div class="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg text-center">
                <h4 class="font-bold text-blue-800 mb-2">Java SE</h4>
                <p class="text-blue-700 text-sm">Standard Edition - Core Java platform for desktop and server applications</p>
              </div>
              <div class="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg text-center">
                <h4 class="font-bold text-green-800 mb-2">Java EE</h4>
                <p class="text-green-700 text-sm">Enterprise Edition - For large-scale, distributed, web-based applications</p>
              </div>
              <div class="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-lg text-center">
                <h4 class="font-bold text-orange-800 mb-2">Java ME</h4>
                <p class="text-orange-700 text-sm">Micro Edition - For mobile devices and embedded systems</p>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
              Real-World Applications
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-gray-800 mb-3">🏢 Enterprise Applications</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Banking systems (Goldman Sachs, Barclays)</li>
                  <li>• E-commerce platforms (eBay, Amazon)</li>
                  <li>• Customer relationship management</li>
                  <li>• Enterprise resource planning (ERP)</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-3">📱 Mobile & Web Development</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Android applications (Spotify, LinkedIn)</li>
                  <li>• Web applications (Netflix, Uber)</li>
                  <li>• Microservices architecture</li>
                  <li>• API development and integration</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Why Choose Java?</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center">
                <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">💼</div>
                <h4 class="font-bold mb-2">Career Opportunities</h4>
                <p class="text-sm text-gray-600">Java consistently ranks as one of the most in-demand programming languages in the job market.</p>
              </div>
              <div class="text-center">
                <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">🌍</div>
                <h4 class="font-bold mb-2">Large Community</h4>
                <p class="text-sm text-gray-600">Millions of developers worldwide contribute to Java's extensive ecosystem and support.</p>
              </div>
              <div class="text-center">
                <div class="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">🔧</div>
                <h4 class="font-bold mb-2">Rich Ecosystem</h4>
                <p class="text-sm text-gray-600">Vast libraries, frameworks (Spring, Hibernate), and tools for every development need.</p>
              </div>
            </div>
          </section>
        </div>
      `,
      codeExample: `/**
 * JavaIntroduction.java
 * 
 * This program demonstrates the basic structure of a Java application
 * and showcases fundamental Java concepts including:
 * - Class declaration
 * - Main method (entry point)
 * - Output statements
 * - Comments and documentation
 * 
 * Every Java application must have at least one class with a main method
 * to serve as the entry point for program execution.
 */

public class JavaIntroduction {
    
    /**
     * The main method - the entry point of every Java application
     * 
     * @param args Command line arguments passed to the program
     *             (we'll learn about these in later lessons)
     */
    public static void main(String[] args) {
        // Welcome message demonstrating System.out.println()
        System.out.println("=================================");
        System.out.println("   Welcome to Java Programming!  ");
        System.out.println("=================================");
        
        // Display Java's history and creator
        System.out.println();
        System.out.println("🏛️  History:");
        System.out.println("   Java was created in 1995 by James Gosling");
        System.out.println("   Originally developed at Sun Microsystems");
        System.out.println("   Now maintained by Oracle Corporation");
        
        // Demonstrate Java's key principles
        System.out.println();
        System.out.println("🌟 Key Features:");
        System.out.println("   ✅ Platform Independent - Write Once, Run Anywhere!");
        System.out.println("   ✅ Object-Oriented Programming");
        System.out.println("   ✅ Secure and Robust");
        System.out.println("   ✅ Large Community and Ecosystem");
        
        // Show Java's versatility
        System.out.println();
        System.out.println("🚀 Used For:");
        System.out.println("   • Enterprise Applications");
        System.out.println("   • Android Mobile Apps");
        System.out.println("   • Web Development");
        System.out.println("   • Desktop Applications");
        System.out.println("   • Scientific Applications");
        
        // Motivational message
        System.out.println();
        System.out.println("🎉 You're about to embark on an amazing journey!");
        System.out.println("   Java will open doors to countless opportunities");
        System.out.println("   in software development and technology.");
        System.out.println();
        System.out.println("=================================");
        System.out.println("    Let's start coding in Java!   ");
        System.out.println("=================================");
    }
}

/*
 * PROGRAM OUTPUT:
 * =================================
 *    Welcome to Java Programming!  
 * =================================
 * 
 * 🏛️  History:
 *    Java was created in 1995 by James Gosling
 *    Originally developed at Sun Microsystems
 *    Now maintained by Oracle Corporation
 * 
 * 🌟 Key Features:
 *    ✅ Platform Independent - Write Once, Run Anywhere!
 *    ✅ Object-Oriented Programming
 *    ✅ Secure and Robust
 *    ✅ Large Community and Ecosystem
 * 
 * 🚀 Used For:
 *    • Enterprise Applications
 *    • Android Mobile Apps
 *    • Web Development
 *    • Desktop Applications
 *    • Scientific Applications
 * 
 * 🎉 You're about to embark on an amazing journey!
 *    Java will open doors to countless opportunities
 *    in software development and technology.
 * 
 * =================================
 *     Let's start coding in Java!   
 * =================================
 */`,
      exercise: `
        **🎯 Research and Discovery Exercise**
        
        Complete the following comprehensive research tasks to deepen your understanding of Java:
        
        **Part 1: Real-World Java Applications (30 minutes)**
        1. Research and identify 5 major companies/applications that use Java as their primary technology:
           - For each company, write 2-3 sentences explaining why they chose Java
           - Include the specific Java technologies they use (e.g., Spring Framework, Android SDK)
           - Examples to get you started: Netflix (microservices), LinkedIn (backend systems), Spotify (Android app)
        
        **Part 2: Java Version Timeline (20 minutes)**
        1. Create a timeline of major Java versions from Java 1.0 to the latest version
        2. For each major version (8, 11, 17, 21), list 2 key features introduced
        3. Research which version is most commonly used in enterprise environments today
        
        **Part 3: Java vs Other Languages (25 minutes)**
        1. Compare Java with 3 other programming languages (e.g., Python, C#, C++)
        2. Create a simple table showing:
           - Performance characteristics
           - Learning curve
           - Primary use cases
           - Community size
        
        **Part 4: Java Career Research (15 minutes)**
        1. Browse job sites (LinkedIn, Indeed, etc.) and find 3 Java developer job postings
        2. List the common skills and technologies mentioned (Spring, Hibernate, etc.)
        3. Note the average salary ranges in your area or desired location
        
        **Part 5: Hands-On Exploration (30 minutes)**
        1. Visit the official Oracle Java documentation (docs.oracle.com/javase/)
        2. Browse the Java API documentation and identify 5 interesting classes/packages
        3. Look at some open-source Java projects on GitHub and note what they do
        
        **📝 Deliverable:**
        Create a well-organized document (digital or handwritten) with your findings from all parts. This will serve as your Java reference guide throughout the course.
        
        **💡 Bonus Challenge:**
        Install Java on your computer and run the example program from this lesson. Take a screenshot of the output and include it in your research document.
      `
    }
  },

  'lesson-1-2': {
    title: 'Setting up Development Environment',
    type: 'tutorial',
    duration: '35 min',
    module: 'Java Fundamentals',
    content: {
      overview: 'Master the complete setup of your Java development environment from scratch. This comprehensive tutorial will guide you through installing the JDK, choosing the right IDE, configuring your system, and creating your first project. You\'ll learn about different Java versions, development tools, and best practices for setting up a professional development workspace.',
      objectives: [
        'Download and install the Java Development Kit (JDK) for your operating system',
        'Understand the difference between JDK, JRE, and JVM',
        'Configure system environment variables (JAVA_HOME, PATH)',
        'Choose and install an Integrated Development Environment (IDE)',
        'Create and configure your first Java project',
        'Verify your installation with command line tools',
        'Learn about different Java IDEs and their features',
        'Understand project structure and best practices'
      ],
      theory: `
        <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
          <h1 class="text-3xl font-bold m-0 flex items-center">
            <span class="w-3 h-10 bg-white rounded mr-4"></span>
            Setting up Java Development Environment
          </h1>
          <p class="mt-3 text-green-100 text-lg">Your professional Java development workspace starts here</p>
        </div>

        <div class="space-y-8">
          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
              Understanding Java Components
            </h2>
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div class="bg-blue-50 p-4 rounded-lg text-center">
                <h4 class="font-bold text-blue-800 mb-2">🔧 JDK</h4>
                <p class="text-blue-700 text-sm">Java Development Kit - Complete development toolkit including compiler, debugger, and tools</p>
              </div>
              <div class="bg-green-50 p-4 rounded-lg text-center">
                <h4 class="font-bold text-green-800 mb-2">🏃 JRE</h4>
                <p class="text-green-700 text-sm">Java Runtime Environment - Minimum requirement to run Java applications</p>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg text-center">
                <h4 class="font-bold text-purple-800 mb-2">⚙️ JVM</h4>
                <p class="text-purple-700 text-sm">Java Virtual Machine - Executes Java bytecode on your platform</p>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
              Step-by-Step Installation Guide
            </h2>
            
            <div class="space-y-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-3">💻 Windows Installation</h4>
                <ol class="list-decimal list-inside space-y-2 text-blue-700">
                  <li>Visit Oracle's official website: oracle.com/java/technologies/downloads/</li>
                  <li>Download the latest JDK version for Windows (x64 Installer)</li>
                  <li>Run the installer as Administrator</li>
                  <li>Follow the installation wizard (note the installation path)</li>
                  <li>Set JAVA_HOME environment variable to JDK installation directory</li>
                  <li>Add JDK's bin directory to your PATH variable</li>
                  <li>Verify installation by opening Command Prompt and typing: java -version</li>
                </ol>
              </div>

              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-3">🍎 macOS Installation</h4>
                <ol class="list-decimal list-inside space-y-2 text-green-700">
                  <li>Download JDK .dmg file from Oracle's website</li>
                  <li>Double-click the .dmg file and run the installer</li>
                  <li>Follow the installation prompts</li>
                  <li>Open Terminal and verify: java -version</li>
                  <li>Alternative: Use Homebrew - brew install openjdk@17</li>
                </ol>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-3">🐧 Linux Installation</h4>
                <ol class="list-decimal list-inside space-y-2 text-purple-700">
                  <li>Ubuntu/Debian: sudo apt update && sudo apt install openjdk-17-jdk</li>
                  <li>CentOS/RHEL: sudo yum install java-17-openjdk-devel</li>
                  <li>Or download .tar.gz from Oracle and extract to /opt/</li>
                  <li>Set JAVA_HOME in ~/.bashrc or ~/.profile</li>
                  <li>Verify with: java -version && javac -version</li>
                </ol>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
              Choosing Your IDE
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-gray-800 mb-3">🥇 Recommended IDEs</h4>
                <div class="space-y-3">
                  <div class="bg-blue-50 p-3 rounded-lg">
                    <h5 class="font-bold text-blue-800">IntelliJ IDEA</h5>
                    <p class="text-sm text-blue-700">Industry-standard, excellent features, free Community Edition</p>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg">
                    <h5 class="font-bold text-green-800">Visual Studio Code</h5>
                    <p class="text-sm text-green-700">Lightweight, great Java extensions, completely free</p>
                  </div>
                  <div class="bg-orange-50 p-3 rounded-lg">
                    <h5 class="font-bold text-orange-800">Eclipse</h5>
                    <p class="text-sm text-orange-700">Open-source, traditional Java IDE, large community</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-3">⚡ IDE Features to Look For</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Syntax highlighting and code completion</li>
                  <li>• Built-in debugger and profiler</li>
                  <li>• Project management and build tools</li>
                  <li>• Version control integration (Git)</li>
                  <li>• Plugin ecosystem and extensions</li>
                  <li>• Code refactoring tools</li>
                  <li>• Unit testing support</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
              Essential Command Line Tools
            </h2>
            <div class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm space-y-2">
              <div><span class="text-yellow-400">$</span> java -version    <span class="text-gray-500"># Check Java runtime version</span></div>
              <div><span class="text-yellow-400">$</span> javac -version   <span class="text-gray-500"># Check Java compiler version</span></div>
              <div><span class="text-yellow-400">$</span> which java       <span class="text-gray-500"># Find Java installation path</span></div>
              <div><span class="text-yellow-400">$</span> echo $JAVA_HOME  <span class="text-gray-500"># Check JAVA_HOME variable</span></div>
              <div><span class="text-yellow-400">$</span> javac HelloWorld.java  <span class="text-gray-500"># Compile Java source</span></div>
              <div><span class="text-yellow-400">$</span> java HelloWorld  <span class="text-gray-500"># Run compiled Java program</span></div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Professional Setup Tips</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-gray-800 mb-3">💡 Best Practices</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Always use the latest LTS (Long Term Support) Java version</li>
                  <li>• Keep your development tools updated</li>
                  <li>• Use consistent coding style and formatting</li>
                  <li>• Set up version control (Git) from the beginning</li>
                  <li>• Create a dedicated workspace/projects folder</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-3">🔧 Troubleshooting Common Issues</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• "java: command not found" → Check PATH variable</li>
                  <li>• "JAVA_HOME not set" → Configure environment variable</li>
                  <li>• Version conflicts → Use single JDK installation</li>
                  <li>• Permission errors → Run as administrator/sudo</li>
                  <li>• IDE not recognizing JDK → Configure project SDK</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      `,
      codeExample: `/**
 * EnvironmentTest.java
 * 
 * This comprehensive test program verifies your Java development environment
 * and displays detailed system information. It demonstrates:
 * - System property access
 * - Environment variable reading
 * - Runtime information
 * - Memory management details
 * - File system properties
 * 
 * Run this program to ensure your Java setup is working correctly!
 */

import java.io.File;
import java.util.Properties;

public class EnvironmentTest {
    
    public static void main(String[] args) {
        printWelcomeHeader();
        printJavaVersionInfo();
        printSystemProperties();
        printEnvironmentInfo();
        printMemoryInfo();
        printFileSystemInfo();
        printSuccessMessage();
    }
    
    /**
     * Print a welcome header with formatting
     */
    private static void printWelcomeHeader() {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║               Java Environment Test Program                ║");
        System.out.println("║                  Verifying Your Setup                     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    /**
     * Display comprehensive Java version information
     */
    private static void printJavaVersionInfo() {
        System.out.println("🔸 JAVA VERSION INFORMATION");
        System.out.println("   ─────────────────────────");
        System.out.println("   Java Version: " + System.getProperty("java.version"));
        System.out.println("   Java Vendor:  " + System.getProperty("java.vendor"));
        System.out.println("   Java Home:    " + System.getProperty("java.home"));
        System.out.println("   JVM Version:  " + System.getProperty("java.vm.version"));
        System.out.println("   JVM Vendor:   " + System.getProperty("java.vm.vendor"));
        System.out.println("   JVM Name:     " + System.getProperty("java.vm.name"));
        System.out.println();
    }
    
    /**
     * Show operating system and runtime properties
     */
    private static void printSystemProperties() {
        System.out.println("🔸 SYSTEM INFORMATION");
        System.out.println("   ──────────────────");
        System.out.println("   Operating System: " + System.getProperty("os.name") + 
                          " " + System.getProperty("os.version"));
        System.out.println("   System Architecture: " + System.getProperty("os.arch"));
        System.out.println("   User Name: " + System.getProperty("user.name"));
        System.out.println("   User Home: " + System.getProperty("user.dir"));
        System.out.println("   Working Directory: " + System.getProperty("user.dir"));
        System.out.println("   File Separator: '" + System.getProperty("file.separator") + "'");
        System.out.println("   Path Separator: '" + System.getProperty("path.separator") + "'");
        System.out.println();
    }
    
    /**
     * Display environment variables relevant to Java development
     */
    private static void printEnvironmentInfo() {
        System.out.println("🔸 ENVIRONMENT VARIABLES");
        System.out.println("   ─────────────────────");
        
        String javaHome = System.getenv("JAVA_HOME");
        if (javaHome != null) {
            System.out.println("   JAVA_HOME: " + javaHome + " ✅");
        } else {
            System.out.println("   JAVA_HOME: Not set ⚠️  (Recommended to set this)");
        }
        
        String path = System.getenv("PATH");
        if (path != null && path.contains("java")) {
            System.out.println("   PATH: Contains Java ✅");
        } else {
            System.out.println("   PATH: Java may not be in PATH ⚠️");
        }
        System.out.println();
    }
    
    /**
     * Show JVM memory information
     */
    private static void printMemoryInfo() {
        Runtime runtime = Runtime.getRuntime();
        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        long maxMemory = runtime.maxMemory();
        
        System.out.println("🔸 JVM MEMORY INFORMATION");
        System.out.println("   ──────────────────────");
        System.out.println("   Total Memory:     " + formatBytes(totalMemory));
        System.out.println("   Free Memory:      " + formatBytes(freeMemory));
        System.out.println("   Used Memory:      " + formatBytes(totalMemory - freeMemory));
        System.out.println("   Max Memory:       " + formatBytes(maxMemory));
        System.out.println("   Available Processors: " + runtime.availableProcessors());
        System.out.println();
    }
    
    /**
     * Display file system information and test file operations
     */
    private static void printFileSystemInfo() {
        System.out.println("🔸 FILE SYSTEM TEST");
        System.out.println("   ────────────────");
        
        File currentDir = new File(".");
        System.out.println("   Current Directory: " + currentDir.getAbsolutePath());
        System.out.println("   Directory is readable: " + currentDir.canRead());
        System.out.println("   Directory is writable: " + currentDir.canWrite());
        
        // Test creating a temporary file
        try {
            File tempFile = File.createTempFile("java_test_", ".tmp");
            System.out.println("   Temp file creation: ✅ Success");
            tempFile.delete(); // Clean up
        } catch (Exception e) {
            System.out.println("   Temp file creation: ❌ Failed - " + e.getMessage());
        }
        System.out.println();
    }
    
    /**
     * Display success message and next steps
     */
    private static void printSuccessMessage() {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 SETUP VERIFICATION COMPLETE! 🎉     ║");
        System.out.println("║                                                            ║");
        System.out.println("║   Your Java development environment is properly configured ║");
        System.out.println("║   and ready for Java programming!                         ║");
        System.out.println("║                                                            ║");
        System.out.println("║   Next Steps:                                              ║");
        System.out.println("║   • Install your preferred IDE                            ║");
        System.out.println("║   • Create your first Java project                        ║");
        System.out.println("║   • Start coding amazing Java applications!               ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
    
    /**
     * Helper method to format byte values in human-readable format
     */
    private static String formatBytes(long bytes) {
        long kb = 1024;
        long mb = kb * 1024;
        long gb = mb * 1024;
        
        if (bytes >= gb) {
            return String.format("%.2f GB", (double) bytes / gb);
        } else if (bytes >= mb) {
            return String.format("%.2f MB", (double) bytes / mb);
        } else if (bytes >= kb) {
            return String.format("%.2f KB", (double) bytes / kb);
        } else {
            return bytes + " bytes";
        }
    }
}

/*
 * EXPECTED OUTPUT SAMPLE:
 * 
 * ╔════════════════════════════════════════════════════════════╗
 * ║               Java Environment Test Program                ║
 * ║                  Verifying Your Setup                     ║
 * ╚════════════════════════════════════════════════════════════╝
 * 
 * 🔸 JAVA VERSION INFORMATION
 *    ─────────────────────────
 *    Java Version: 17.0.2
 *    Java Vendor:  Eclipse Adoptium
 *    Java Home:    C:\Program Files\Eclipse Adoptium\jdk-17.0.2.8-hotspot
 *    JVM Version:  17.0.2+8
 *    JVM Vendor:   Eclipse Adoptium
 *    JVM Name:     OpenJDK 64-Bit Server VM
 * 
 * 🔸 SYSTEM INFORMATION
 *    ──────────────────
 *    Operating System: Windows 10 10.0
 *    System Architecture: amd64
 *    User Name: Developer
 *    User Home: C:\Users\Developer
 *    Working Directory: C:\Projects\JavaCourse
 *    File Separator: '\'
 *    Path Separator: ';'
 * 
 * ... (additional output sections) ...
 */`,
      exercise: `
        **🛠️ Complete Development Environment Setup Challenge**
        
        This comprehensive exercise will guide you through setting up a complete, professional Java development environment. Complete all parts to ensure you're ready for serious Java development.
        
        **Part 1: JDK Installation and Verification (45 minutes)**
        
        1. **Download and Install JDK:**
           - Visit Oracle's official Java download page
           - Choose the appropriate JDK version for your OS (recommend JDK 17 or 21 LTS)
           - Download and install following the platform-specific instructions above
           - Document any issues you encounter and how you resolved them
        
        2. **Configure Environment Variables:**
           - Set JAVA_HOME to your JDK installation directory
           - Add JDK's bin directory to your PATH variable
           - Verify by opening terminal/command prompt and running:
             * java -version
             * javac -version
           - Take screenshots of successful output
        
        3. **Run the Environment Test Program:**
           - Copy the EnvironmentTest.java code provided above
           - Save it as EnvironmentTest.java
           - Compile it: javac EnvironmentTest.java
           - Run it: java EnvironmentTest
           - Save the complete output to a text file
        
        **Part 2: IDE Installation and Configuration (30 minutes)**
        
        1. **Choose Your IDE:**
           - Research and choose between IntelliJ IDEA, VS Code, or Eclipse
           - List 3 reasons why you chose your specific IDE
           - Download and install your chosen IDE
        
        2. **IDE Configuration:**
           - Configure the IDE to use your installed JDK
           - Set up code formatting preferences (indentation, line length, etc.)
           - Install any recommended Java extensions/plugins
           - Create a new Java project called "JavaLearning"
        
        3. **Create Your First Project:**
           - Create a new Java class called "MyFirstProgram"
           - Write a program that prints your name, favorite programming language, and today's date
           - Add proper comments and documentation
           - Compile and run the program successfully
        
        **Part 3: Command Line Mastery (20 minutes)**
        
        1. **Practice Command Line Compilation:**
           - Create a simple Java program using only a text editor (Notepad, nano, etc.)
           - Compile it using javac from the command line
           - Run it using java from the command line
           - Practice navigating directories and managing Java files
        
        2. **Explore JDK Tools:**
           - Try using 'javadoc' to generate documentation for a simple class
           - Use 'jar' command to create a JAR file from your compiled classes
           - Explore other JDK tools: jdb (debugger), jmap, jstat
        
        **Part 4: Advanced Configuration (25 minutes)**
        
        1. **Version Control Setup:**
           - Install Git if not already installed
           - Initialize a Git repository in your Java project folder
           - Create a .gitignore file appropriate for Java projects
           - Make your first commit with your test programs
        
        2. **Build Tool Exploration:**
           - Research Maven and Gradle build tools
           - Choose one and install it
           - Create a simple Maven or Gradle project
           - Add a dependency (like JUnit for testing) to your project
        
        **Part 5: Troubleshooting and Documentation (20 minutes)**
        
        1. **Create a Setup Guide:**
           - Document your complete setup process step-by-step
           - Include screenshots of key configuration screens
           - Note any problems encountered and their solutions
           - Create a "quick start" checklist for future reference
        
        2. **Test Different Scenarios:**
           - Try running Java programs from different directories
           - Test your setup with programs that have multiple classes
           - Verify that your IDE can debug Java programs (set breakpoints, inspect variables)
        
        **📋 Deliverables:**
        
        Create a comprehensive report including:
        1. Screenshots of successful java -version and javac -version commands
        2. Complete output from the EnvironmentTest program
        3. Screenshots of your IDE with a working Java project
        4. Your setup documentation/guide
        5. Evidence of version control setup (Git repository screenshot)
        6. At least 3 working Java programs (including the ones you wrote)
        
        **🎯 Success Criteria:**
        
        You've successfully completed this exercise when:
        - ✅ You can compile and run Java programs from command line
        - ✅ Your IDE can create, edit, compile, and debug Java programs
        - ✅ Environment variables are properly configured
        - ✅ You have a version-controlled Java project
        - ✅ You can create and manage Java projects efficiently
        - ✅ You understand the Java development workflow
        
        **💡 Bonus Challenges:**
        
        1. Set up multiple JDK versions and learn to switch between them
        2. Configure your IDE with useful plugins (code analysis, formatting, Git integration)
        3. Create a simple build script using your chosen build tool
        4. Set up automated code formatting and linting
        5. Explore IDE shortcuts and productivity features
        
        This comprehensive setup will serve as your foundation for the entire Java course and your future development career!
      `
    }
  },

  'lesson-1-3': {
    title: 'Your First Java Program',
    type: 'coding',
    duration: '25 min',
    module: 'Java Fundamentals',
    content: {
      overview: 'Write, understand, and execute your first Java program. Learn the anatomy of Java applications and the compilation process.',
      objectives: [
        'Create and understand the classic Hello World program',
        'Learn the essential components of Java program structure',
        'Master the main method signature and its purpose',
        'Understand the compilation and execution workflow'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Your First Java Program</h1></div><p class="text-gray-700 mb-4">Every Java program follows a specific structure with class declaration, main method, and statements.</p>',
      codeExample: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        System.out.println("Welcome to Java Programming!");\n        System.out.println("This is my first Java program");\n    }\n}',
      exercise: 'Create a Java program called "AboutMe" that prints your name, age, favorite programming language, and a fun fact about yourself.'
    }
  },

  'lesson-1-4': {
    title: 'Variables and Data Types',
    type: 'lesson',
    duration: '30 min',
    module: 'Java Fundamentals',
    content: {
      overview: 'Learn about Java data types, variable declaration, initialization, and understand how to work with different types of data in your programs.',
      objectives: [
        'Understand primitive data types and their ranges',
        'Learn variable declaration and initialization',
        'Work with different data types effectively',
        'Understand type conversion and casting'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Variables and Data Types</h1></div><p class="text-gray-700 mb-4">Variables are containers that store data values. Java has primitive types like int, double, boolean, char and reference types like String.</p>',
      codeExample: 'public class Variables {\n    public static void main(String[] args) {\n        int age = 25;\n        double price = 19.99;\n        boolean isStudent = true;\n        char grade = \'A\';\n        String name = "John Doe";\n        \n        System.out.println("Name: " + name);\n        System.out.println("Age: " + age);\n        System.out.println("Grade: " + grade);\n        System.out.println("Price: $" + price);\n        System.out.println("Is Student: " + isStudent);\n    }\n}',
      exercise: 'Create a program called "BookInfo" that declares variables for book title, author, price, pages, isAvailable, and rating. Display them in a formatted way.'
    }
  },

  'lesson-1-5': {
    title: 'Operators in Java',
    type: 'lesson',
    duration: '25 min',
    module: 'Java Fundamentals',
    content: {
      overview: 'Master all types of operators in Java including arithmetic, comparison, logical, and assignment operators.',
      objectives: [
        'Understand arithmetic operators and their usage',
        'Learn comparison and logical operators',
        'Master assignment and unary operators',
        'Understand operator precedence rules'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Operators in Java</h1></div><p class="text-gray-700 mb-4">Java provides various operators for arithmetic (+, -, *, /, %), comparison (==, !=, <, >), logical (&&, ||, !), and assignment (=, +=, -=).</p>',
      codeExample: 'public class Operators {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        \n        // Arithmetic operators\n        System.out.println("Addition: " + (a + b));\n        System.out.println("Subtraction: " + (a - b));\n        System.out.println("Multiplication: " + (a * b));\n        System.out.println("Division: " + (a / b));\n        System.out.println("Modulus: " + (a % b));\n        \n        // Comparison operators\n        System.out.println("a > b: " + (a > b));\n        System.out.println("a == b: " + (a == b));\n        \n        // Logical operators\n        boolean x = true, y = false;\n        System.out.println("x && y: " + (x && y));\n        System.out.println("x || y: " + (x || y));\n    }\n}',
      exercise: 'Create a calculator program that performs basic arithmetic operations on two numbers and displays the results with proper formatting.'
    }
  },

  // Module 2: Control Structures  
  'lesson-2-1': {
    title: 'Conditional Statements - if, else if, else',
    type: 'lesson',
    duration: '30 min',
    module: 'Control Structures',
    content: {
      overview: 'Learn to control program flow using conditional statements. Master if, else if, and else statements for decision making.',
      objectives: [
        'Understand conditional statement syntax and logic',
        'Learn to write complex conditional expressions',
        'Master nested if statements',
        'Practice real-world conditional scenarios'
      ],
      theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Conditional Statements</h1></div><p class="text-gray-700 mb-4">Conditional statements allow your program to make decisions based on different conditions using if, else if, and else keywords.</p>',
      codeExample: 'public class ConditionalStatements {\n    public static void main(String[] args) {\n        int score = 85;\n        \n        if (score >= 90) {\n            System.out.println("Grade: A");\n        } else if (score >= 80) {\n            System.out.println("Grade: B");\n        } else if (score >= 70) {\n            System.out.println("Grade: C");\n        } else if (score >= 60) {\n            System.out.println("Grade: D");\n        } else {\n            System.out.println("Grade: F");\n        }\n        \n        // Multiple conditions\n        int age = 20;\n        boolean hasLicense = true;\n        \n        if (age >= 18 && hasLicense) {\n            System.out.println("Can drive a car");\n        } else {\n            System.out.println("Cannot drive a car");\n        }\n    }\n}',
      exercise: 'Create a program that determines if a year is a leap year. A leap year is divisible by 4, but not by 100, unless it is also divisible by 400.'
    }
  },

  'lesson-2-2': {
    title: 'Switch Statement',
    type: 'lesson',
    duration: '25 min',
    module: 'Control Structures',
    content: {
      overview: 'Learn to use switch statements for multiple condition checking. Understand when to use switch vs if-else statements.',
      objectives: [
        'Understand switch statement syntax',
        'Learn about case labels and break statements',
        'Master default case handling',
        'Compare switch vs if-else performance'
      ],
      theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Switch Statement</h1></div><p class="text-gray-700 mb-4">Switch statements provide an efficient way to test a variable against multiple values, especially useful for menu systems and categorical data.</p>',
      codeExample: 'public class SwitchExample {\n    public static void main(String[] args) {\n        int dayOfWeek = 3;\n        \n        switch (dayOfWeek) {\n            case 1:\n                System.out.println("Monday");\n                break;\n            case 2:\n                System.out.println("Tuesday");\n                break;\n            case 3:\n                System.out.println("Wednesday");\n                break;\n            case 4:\n                System.out.println("Thursday");\n                break;\n            case 5:\n                System.out.println("Friday");\n                break;\n            case 6:\n                System.out.println("Saturday");\n                break;\n            case 7:\n                System.out.println("Sunday");\n                break;\n            default:\n                System.out.println("Invalid day");\n        }\n    }\n}',
      exercise: 'Create a calculator program using switch statement that performs addition, subtraction, multiplication, and division based on user choice.'
    }
  },

  'lesson-2-3': {
    title: 'Loops - for, while, do-while',
    type: 'lesson',
    duration: '35 min',
    module: 'Control Structures',
    content: {
      overview: 'Master all types of loops in Java: for, while, and do-while loops. Learn when to use each type and how to control loop execution.',
      objectives: [
        'Understand for loop syntax and applications',
        'Learn while and do-while loop differences',
        'Master loop control with break and continue',
        'Practice nested loops and common patterns'
      ],
      theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Loops in Java</h1></div><p class="text-gray-700 mb-4">Loops allow you to execute code repeatedly. Java provides for loops (when you know iterations), while loops (condition-based), and do-while loops (execute at least once).</p>',
      codeExample: 'public class Loops {\n    public static void main(String[] args) {\n        // For loop\n        System.out.println("For loop:");\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Count: " + i);\n        }\n        \n        // While loop\n        System.out.println("\\nWhile loop:");\n        int count = 1;\n        while (count <= 3) {\n            System.out.println("While count: " + count);\n            count++;\n        }\n        \n        // Do-while loop\n        System.out.println("\\nDo-while loop:");\n        int num = 1;\n        do {\n            System.out.println("Do-while: " + num);\n            num++;\n        } while (num <= 2);\n    }\n}',
      exercise: 'Create a program that prints the multiplication table of 5 using a for loop, and another program that finds the sum of numbers from 1 to 10 using a while loop.'
    }
  },

  'lesson-2-4': {
    title: 'Enhanced for Loop (for-each)',
    type: 'lesson',
    duration: '20 min',
    module: 'Control Structures',
    content: {
      overview: 'Learn the enhanced for loop (for-each) for iterating over collections and arrays in a more readable way.',
      objectives: [
        'Understand enhanced for loop syntax',
        'Learn when to use for-each vs traditional for loop',
        'Practice iterating over arrays and collections',
        'Understand limitations of enhanced for loop'
      ],
      theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Enhanced for Loop</h1></div><p class="text-gray-700 mb-4">The enhanced for loop (for-each) provides a cleaner syntax for iterating over arrays and collections without worrying about indices.</p>',
      codeExample: 'public class EnhancedForLoop {\n    public static void main(String[] args) {\n        int[] numbers = {1, 2, 3, 4, 5};\n        for (int n : numbers) {\n            System.out.println(n);\n        }\n    }\n}',
      exercise: 'Create an array of 10 integers and print only the even numbers using the enhanced for loop.'
    }
  },

  'lesson-2-5': {
    title: 'Break and Continue',
    type: 'lesson',
    duration: '15 min',
    module: 'Control Structures',
    content: {
      overview: 'Learn how to control loop flow using break and continue, including labeled breaks for nested loops.',
      objectives: [
        'Understand break and continue semantics',
        'Use break to exit loops early',
        'Use continue to skip iterations',
        'Apply loop control in real scenarios'
      ],
      theory: '<div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Break and Continue</h1></div><p class="text-gray-700 mb-4">Break terminates the loop entirely, while continue skips the current iteration and moves to the next one. Both are essential for controlling loop execution flow.</p>',
      codeExample: 'public class BreakContinue {\n    public static void main(String[] args) {\n        // Break example\n        System.out.println("Break example:");\n        for (int i = 1; i <= 10; i++) {\n            if (i == 6) {\n                break; // Exit loop when i equals 6\n            }\n            System.out.println("i = " + i);\n        }\n        \n        // Continue example\n        System.out.println("\\nContinue example:");\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 == 0) {\n                continue; // Skip even numbers\n            }\n            System.out.println("Odd number: " + i);\n        }\n        \n        // Nested loops with labeled break\n        System.out.println("\\nNested loops with labeled break:");\n        outer: for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i == 2 && j == 2) {\n                    break outer; // Break out of both loops\n                }\n                System.out.println("i=" + i + ", j=" + j);\n            }\n        }\n    }\n}',
      exercise: 'Create a number guessing game where the user has to guess a number between 1-100. Use break to exit when correct, and continue to keep asking for invalid inputs.'
    }
  },

  // Module 3: Object-Oriented Programming (7 lessons)
  // 3-1 Introduction to OOP (lesson, 20 min)
  // 3-2 Classes and Objects (coding, 35 min)
  // 3-3 Constructors and Methods (coding, 40 min)
  // 3-4 Inheritance (lesson, 45 min)
  // 3-5 Polymorphism (lesson, 35 min)
  // 3-6 Encapsulation (lesson, 30 min)
  // 3-7 Abstract Classes and Interfaces (coding, 40 min)

  'lesson-3-1': {
    title: 'Introduction to OOP',
    type: 'lesson',
    duration: '30 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Embark on your journey into Object-Oriented Programming, the cornerstone of modern software development. This comprehensive introduction will transform your understanding of programming from simple procedural code to sophisticated, modular, and maintainable software systems. You\'ll discover why OOP has become the dominant programming paradigm for building everything from mobile apps to enterprise systems.',
      objectives: [
        'Master the four fundamental pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction',
        'Understand the relationship between classes, objects, attributes, and methods',
        'Learn how OOP models real-world entities and relationships in code',
        'Discover the advantages of OOP over procedural programming approaches',
        'Explore how major software systems leverage OOP principles',
        'Understand design principles: cohesion, coupling, and SOLID fundamentals',
        'Learn to think in objects and identify OOP opportunities in problem-solving'
      ],
      theory: `
        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
          <h1 class="text-3xl font-bold m-0 flex items-center">
            <span class="w-3 h-10 bg-white rounded mr-4"></span>
            Introduction to Object-Oriented Programming
          </h1>
          <p class="mt-3 text-indigo-100 text-lg">Discover the programming paradigm that powers modern software development</p>
        </div>

        <div class="space-y-8">
          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
              What is Object-Oriented Programming?
            </h2>
            <div class="space-y-4">
              <p class="text-gray-700 leading-relaxed text-lg">
                Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around 
                <strong>objects</strong> rather than functions and procedures. Think of objects as digital representations 
                of real-world entities - they contain both <em>data</em> (attributes) and <em>behavior</em> (methods) that work together.
              </p>
              <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                <h4 class="font-bold text-indigo-800 mb-2">💡 Real-World Analogy</h4>
                <p class="text-indigo-700">Consider a car: it has attributes (color, model, fuel level) and behaviors (start, accelerate, brake). In OOP, we create a Car class that captures these attributes and behaviors, then create car objects (instances) from this blueprint.</p>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
              The Four Pillars of OOP
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 class="font-bold text-blue-800 mb-2 flex items-center">
                    <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">🏛️</span>
                    Encapsulation
                  </h4>
                  <p class="text-blue-700 text-sm mb-2">Bundle data and methods together while controlling access</p>
                  <ul class="text-xs text-blue-600 space-y-1">
                    <li>• Hide internal implementation details</li>
                    <li>• Provide controlled access through methods</li>
                    <li>• Protect data integrity and consistency</li>
                  </ul>
                </div>
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 class="font-bold text-green-800 mb-2 flex items-center">
                    <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">🧬</span>
                    Inheritance
                  </h4>
                  <p class="text-green-700 text-sm mb-2">Create new classes based on existing ones</p>
                  <ul class="text-xs text-green-600 space-y-1">
                    <li>• Reuse existing code and functionality</li>
                    <li>• Establish "is-a" relationships</li>
                    <li>• Enable code specialization and extension</li>
                  </ul>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 class="font-bold text-orange-800 mb-2 flex items-center">
                    <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">🎭</span>
                    Polymorphism
                  </h4>
                  <p class="text-orange-700 text-sm mb-2">One interface, multiple implementations</p>
                  <ul class="text-xs text-orange-600 space-y-1">
                    <li>• Use same method names for different behaviors</li>
                    <li>• Enable flexible and extensible code</li>
                    <li>• Support runtime method resolution</li>
                  </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 class="font-bold text-red-800 mb-2 flex items-center">
                    <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">🎨</span>
                    Abstraction
                  </h4>
                  <p class="text-red-700 text-sm mb-2">Focus on essential features, hide complexity</p>
                  <ul class="text-xs text-red-600 space-y-1">
                    <li>• Define what an object does, not how</li>
                    <li>• Create clear, simple interfaces</li>
                    <li>• Reduce cognitive load and complexity</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
              OOP vs Procedural Programming
            </h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="text-left p-3 font-bold text-gray-800">Aspect</th>
                    <th class="text-left p-3 font-bold text-blue-600">Procedural Programming</th>
                    <th class="text-left p-3 font-bold text-green-600">Object-Oriented Programming</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="p-3 font-medium">Code Organization</td>
                    <td class="p-3 text-blue-700">Functions and procedures</td>
                    <td class="p-3 text-green-700">Classes and objects</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3 font-medium">Data Handling</td>
                    <td class="p-3 text-blue-700">Global variables, passed parameters</td>
                    <td class="p-3 text-green-700">Encapsulated within objects</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-medium">Problem Solving</td>
                    <td class="p-3 text-blue-700">Top-down approach</td>
                    <td class="p-3 text-green-700">Bottom-up, modular approach</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="p-3 font-medium">Reusability</td>
                    <td class="p-3 text-blue-700">Limited, through function calls</td>
                    <td class="p-3 text-green-700">High, through inheritance and composition</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-medium">Maintenance</td>
                    <td class="p-3 text-blue-700">Difficult for large systems</td>
                    <td class="p-3 text-green-700">Easier, modular structure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span class="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
              OOP in Action: Real-World Examples
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-gray-800 mb-3">🏦 Banking System</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-blue-50 p-3 rounded border border-blue-200">
                    <strong class="text-blue-800">Classes:</strong> Account, Customer, Transaction, ATM
                  </div>
                  <div class="bg-green-50 p-3 rounded border border-green-200">
                    <strong class="text-green-800">Inheritance:</strong> SavingsAccount, CheckingAccount extend Account
                  </div>
                  <div class="bg-purple-50 p-3 rounded border border-purple-200">
                    <strong class="text-purple-800">Polymorphism:</strong> Different account types calculate interest differently
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-bold text-gray-800 mb-3">🎮 Game Development</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-orange-50 p-3 rounded border border-orange-200">
                    <strong class="text-orange-800">Classes:</strong> Player, Enemy, Weapon, Level, GameEngine
                  </div>
                  <div class="bg-red-50 p-3 rounded border border-red-200">
                    <strong class="text-red-800">Inheritance:</strong> Warrior, Mage, Archer extend Player
                  </div>
                  <div class="bg-indigo-50 p-3 rounded border border-indigo-200">
                    <strong class="text-indigo-800">Encapsulation:</strong> Health, experience hidden in Player
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Design Principles</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center">
                <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">🔗</div>
                <h4 class="font-bold mb-2">High Cohesion</h4>
                <p class="text-sm text-gray-600">Each class should have a single, well-defined responsibility</p>
              </div>
              <div class="text-center">
                <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">🔀</div>
                <h4 class="font-bold mb-2">Low Coupling</h4>
                <p class="text-sm text-gray-600">Minimize dependencies between different classes</p>
              </div>
              <div class="text-center">
                <div class="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 text-xl">🎯</div>
                <h4 class="font-bold mb-2">Clear Interfaces</h4>
                <p class="text-sm text-gray-600">Design simple, intuitive ways for objects to interact</p>
              </div>
            </div>
          </section>
        </div>
      `,
      codeExample: `/**
 * OOPDemonstration.java
 * 
 * This comprehensive example demonstrates core OOP concepts through
 * a practical library management system. It shows:
 * - Class definition and object creation
 * - Encapsulation with private fields and public methods
 * - Method implementation and object interaction
 * - Real-world modeling through objects
 * 
 * The example progresses from simple concepts to more complex interactions,
 * providing a foundation for advanced OOP topics in future lessons.
 */

// Define a Book class that encapsulates book information and behavior
class Book {
    // Private attributes (encapsulation) - data is hidden from direct access
    private String title;
    private String author;
    private int pages;
    private boolean isAvailable;
    private int timesRead;
    
    // Constructor - initializes a new Book object with required information
    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = true;  // New books are available by default
        this.timesRead = 0;       // New books haven't been read yet
    }
    
    // Public methods (interface) - controlled way to interact with the object
    
    /**
     * Gets the book's title
     * @return the title of the book
     */
    public String getTitle() {
        return title;
    }
    
    /**
     * Gets the book's author
     * @return the author of the book
     */
    public String getAuthor() {
        return author;
    }
    
    /**
     * Gets the number of pages
     * @return the page count
     */
    public int getPages() {
        return pages;
    }
    
    /**
     * Checks if the book is currently available
     * @return true if available, false if checked out
     */
    public boolean isAvailable() {
        return isAvailable;
    }
    
    /**
     * Gets the number of times this book has been read
     * @return the read count
     */
    public int getTimesRead() {
        return timesRead;
    }
    
    /**
     * Borrow this book (if available)
     * @return true if successfully borrowed, false if not available
     */
    public boolean borrowBook() {
        if (isAvailable) {
            isAvailable = false;
            timesRead++;
            System.out.println("📚 You've borrowed: " + title);
            return true;
        } else {
            System.out.println("❌ Sorry, '" + title + "' is currently checked out.");
            return false;
        }
    }
    
    /**
     * Return this book to the library
     */
    public void returnBook() {
        if (!isAvailable) {
            isAvailable = true;
            System.out.println("📚 Thank you for returning: " + title);
        } else {
            System.out.println("❌ This book is already in the library.");
        }
    }
    
    /**
     * Display detailed information about this book
     */
    public void displayInfo() {
        String status = isAvailable ? "✅ Available" : "❌ Checked out";
        System.out.println("====================================");
        System.out.println("📖 Title: " + title);
        System.out.println("✍️  Author: " + author);
        System.out.println("📄 Pages: " + pages);
        System.out.println("📊 Status: " + status);
        System.out.println("📈 Times Read: " + timesRead);
        System.out.println("====================================");
    }
    
    /**
     * Get a brief summary of the book
     * @return formatted string with key book information
     */
    public String getSummary() {
        return String.format("'%s' by %s (%d pages) - %s", 
                           title, author, pages, 
                           isAvailable ? "Available" : "Checked out");
    }
}

// Define a LibraryMember class to represent people who use the library
class LibraryMember {
    private String name;
    private int memberId;
    private int booksRead;
    
    // Constructor
    public LibraryMember(String name, int memberId) {
        this.name = name;
        this.memberId = memberId;
        this.booksRead = 0;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getMemberId() {
        return memberId;
    }
    
    public int getBooksRead() {
        return booksRead;
    }
    
    /**
     * Member borrows a book
     * @param book the book to borrow
     */
    public void borrowBook(Book book) {
        System.out.println("\n👤 " + name + " is trying to borrow a book...");
        if (book.borrowBook()) {
            booksRead++;
            System.out.println("🎉 Success! " + name + " now has " + booksRead + " books read.");
        }
    }
    
    /**
     * Member returns a book
     * @param book the book to return
     */
    public void returnBook(Book book) {
        System.out.println("\n👤 " + name + " is returning a book...");
        book.returnBook();
    }
    
    /**
     * Display member information
     */
    public void displayMemberInfo() {
        System.out.println("👤 Library Member Information");
        System.out.println("   ─────────────────────────");
        System.out.println("   Name: " + name);
        System.out.println("   Member ID: " + memberId);
        System.out.println("   Books Read: " + booksRead);
        System.out.println("   Status: " + (booksRead >= 10 ? "Premium Reader 🌟" : "Regular Member"));
    }
}

// Main demonstration class showing OOP concepts in action
public class OOPDemonstration {
    
    public static void main(String[] args) {
        // Display program header
        printProgramHeader();
        
        // Create book objects (demonstrating object instantiation)
        Book book1 = new Book("The Java Programming Language", "James Gosling", 928);
        Book book2 = new Book("Clean Code", "Robert C. Martin", 464);
        Book book3 = new Book("Design Patterns", "Gang of Four", 395);
        
        // Create library members (more objects)
        LibraryMember alice = new LibraryMember("Alice Johnson", 1001);
        LibraryMember bob = new LibraryMember("Bob Smith", 1002);
        
        System.out.println("\n📚 LIBRARY CATALOG");
        System.out.println("═══════════════════");
        
        // Display initial book information
        book1.displayInfo();
        book2.displayInfo();
        book3.displayInfo();
        
        System.out.println("\n👥 LIBRARY MEMBERS");
        System.out.println("═══════════════════");
        
        // Display member information
        alice.displayMemberInfo();
        bob.displayMemberInfo();
        
        System.out.println("\n📖 BORROWING SIMULATION");
        System.out.println("═══════════════════════");
        
        // Demonstrate object interaction and method calls
        alice.borrowBook(book1);  // Alice borrows Java book
        bob.borrowBook(book2);    // Bob borrows Clean Code
        alice.borrowBook(book2);  // Alice tries to borrow already borrowed book
        
        System.out.println("\n📊 UPDATED BOOK STATUS");
        System.out.println("═══════════════════════");
        
        // Show updated book states
        System.out.println(book1.getSummary());
        System.out.println(book2.getSummary());
        System.out.println(book3.getSummary());
        
        System.out.println("\n📚 RETURNING BOOKS");
        System.out.println("═══════════════════");
        
        // Demonstrate returning books
        alice.returnBook(book1);
        bob.returnBook(book2);
        
        System.out.println("\n👥 FINAL MEMBER STATUS");
        System.out.println("═══════════════════════");
        
        // Show final member statistics
        alice.displayMemberInfo();
        bob.displayMemberInfo();
        
        // Demonstrate multiple borrowing for premium status
        System.out.println("\n🌟 DEMONSTRATING PREMIUM STATUS");
        System.out.println("══════════════════════════════");
        
        // Alice reads multiple books to become premium member
        for (int i = 0; i < 9; i++) {
            alice.borrowBook(book1);
            alice.returnBook(book1);
        }
        
        alice.displayMemberInfo(); // Now Alice should be a premium reader
        
        printProgramFooter();
    }
    
    /**
     * Print welcome header for the demonstration program
     */
    private static void printProgramHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                                                              ║");
        System.out.println("║           📚 OBJECT-ORIENTED PROGRAMMING DEMONSTRATION      ║");
        System.out.println("║                    Library Management System                 ║");
        System.out.println("║                                                              ║");
        System.out.println("║  This program demonstrates core OOP concepts:               ║");
        System.out.println("║  • Classes and Objects                                      ║");
        System.out.println("║  • Encapsulation (private fields, public methods)          ║");
        System.out.println("║  • Object Interaction and Method Calling                   ║");
        System.out.println("║  • State Management and Data Integrity                     ║");
        System.out.println("║                                                              ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
    
    /**
     * Print closing footer for the demonstration program
     */
    private static void printProgramFooter() {
        System.out.println("\n╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                                                              ║");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉            ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've seen OOP fundamentals in action:                    ║");
        System.out.println("║                                                              ║");
        System.out.println("║  ✅ Objects encapsulate data and behavior                    ║");
        System.out.println("║  ✅ Methods provide controlled access to object state       ║");
        System.out.println("║  ✅ Objects interact through well-defined interfaces        ║");
        System.out.println("║  ✅ Data integrity is maintained through validation         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Next: Learn inheritance, polymorphism, and abstraction!    ║");
        System.out.println("║                                                              ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * EXPECTED PROGRAM OUTPUT (ABBREVIATED):
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           📚 OBJECT-ORIENTED PROGRAMMING DEMONSTRATION      ║
 * ║                    Library Management System                 ║
 * ║  This program demonstrates core OOP concepts:               ║
 * ║  • Classes and Objects                                      ║
 * ║  • Encapsulation (private fields, public methods)          ║
 * ║  • Object Interaction and Method Calling                   ║
 * ║  • State Management and Data Integrity                     ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 📚 LIBRARY CATALOG
 * ═══════════════════
 * ====================================
 * 📖 Title: The Java Programming Language
 * ✍️  Author: James Gosling
 * 📄 Pages: 928
 * 📊 Status: ✅ Available
 * 📈 Times Read: 0
 * ====================================
 * 
 * ... (additional output showing borrowing, returning, and final status)
 * 
 * 🌟 DEMONSTRATING PREMIUM STATUS
 * ══════════════════════════════════
 * 👤 Library Member Information
 *    ─────────────────────────
 *    Name: Alice Johnson
 *    Member ID: 1001
 *    Books Read: 10
 *    Status: Premium Reader 🌟
 */`,
      exercise: `
        **🏗️ OOP Design and Implementation Challenge**
        
        This comprehensive exercise will help you apply OOP concepts to design and implement a complete system from scratch. You'll practice class design, object interaction, and the fundamental principles of object-oriented programming.
        
        **Part 1: System Design (45 minutes)**
        
        **Design Challenge: University Course Management System**
        
        You need to design a system to manage university courses, students, and instructors. Think about the real-world entities and their relationships:
        
        1. **Identify the Classes (15 minutes):**
           - List at least 5 classes you would need for this system
           - For each class, identify 4-5 attributes (properties) it should have
           - For each class, identify 4-5 behaviors (methods) it should provide
           - Think about how these classes relate to each other
        
        2. **Design Class Relationships (15 minutes):**
           - Which classes need to interact with each other?
           - What information needs to be shared between classes?
           - How would a student enroll in a course?
           - How would an instructor be assigned to a course?
           - Draw or describe the relationships between your classes
        
        3. **Apply OOP Principles (15 minutes):**
           - **Encapsulation:** Which attributes should be private? Why?
           - **Data Validation:** What rules should be enforced? (e.g., valid email format)
           - **Method Design:** What methods need parameters? What should they return?
           - **Object Interaction:** How do objects collaborate to accomplish tasks?
        
        **Part 2: Implementation (60 minutes)**
        
        Implement your design using the following requirements:
        
        1. **Student Class (20 minutes):**
           - Attributes: student ID, name, email, year level, GPA, enrolled courses
           - Methods: enroll in course, drop course, calculate GPA, display transcript
           - Validation: email format, GPA range (0.0-4.0), year level (1-4)
           - Encapsulation: private attributes with appropriate getters/setters
        
        2. **Course Class (20 minutes):**
           - Attributes: course code, title, credits, instructor, enrolled students, max capacity
           - Methods: add student, remove student, check capacity, display roster
           - Validation: credits must be positive, capacity limits
           - Business logic: prevent over-enrollment, maintain waiting list
        
        3. **Instructor Class (20 minutes):**
           - Attributes: instructor ID, name, department, courses taught, office hours
           - Methods: assign to course, set office hours, view teaching schedule
           - Interaction: ability to view enrolled students in their courses
        
        **Part 3: System Integration and Testing (45 minutes)**
        
        1. **Create a Demo Program (25 minutes):**
           - Create 3 students, 2 instructors, and 4 courses
           - Demonstrate student enrollment in multiple courses
           - Show course capacity limits working
           - Display student transcripts and course rosters
           - Implement and demonstrate a course search feature
        
        2. **Advanced Features (20 minutes):**
           - Add a method to find all courses a student is enrolled in
           - Implement a feature to find students with GPA above a certain threshold
           - Create a method to show an instructor's complete teaching load
           - Add functionality to handle prerequisite courses
        
        **Part 4: Real-World Extensions (30 minutes)**
        
        1. **Data Persistence Simulation (15 minutes):**
           - Add methods to export student data to a formatted string
           - Create a "saveToFile" simulation that prints what would be saved
           - Design a simple format for storing course information
        
        2. **Error Handling and Edge Cases (15 minutes):**
           - What happens if a student tries to enroll in a full course?
           - How do you handle invalid student IDs or course codes?
           - What validation is needed for instructor assignments?
           - Add appropriate error messages and handling
        
        **📋 Deliverables:**
        
        Create a complete Java program with the following:
        
        1. **Design Documentation:**
           - Class diagram or detailed written description of your design
           - List of attributes and methods for each class
           - Explanation of how classes interact
        
        2. **Source Code:**
           - Complete implementation of all classes
           - Comprehensive demo program showing all features
           - Proper commenting and documentation
           - Examples of encapsulation, validation, and object interaction
        
        3. **Test Results:**
           - Output showing your program working correctly
           - Demonstration of error handling and edge cases
           - Evidence that OOP principles are properly applied
        
        **🎯 Success Criteria:**
        
        Your solution demonstrates mastery when:
        - ✅ Classes are well-designed with appropriate attributes and methods
        - ✅ Proper encapsulation with private attributes and public interfaces
        - ✅ Objects interact naturally and maintain data integrity
        - ✅ Business rules are enforced through validation
        - ✅ Code is readable, well-commented, and follows good practices
        - ✅ The system handles edge cases gracefully
        - ✅ Demonstrates clear understanding of OOP concepts
        
        **💡 Bonus Challenges:**
        
        1. **Advanced OOP:** Add a base Person class that Student and Instructor can extend
        2. **Collections:** Use arrays or ArrayList to manage collections of objects
        3. **Search and Sort:** Implement methods to search students by name or sort courses by enrollment
        4. **Business Logic:** Add course prerequisites and graduation requirements checking
        5. **Interface Design:** Create interfaces for common behaviors (e.g., Searchable, Displayable)
        
        **📚 Learning Outcomes:**
        
        By completing this exercise, you will:
        - Master the process of designing OOP systems from requirements
        - Understand how to model real-world entities as classes
        - Practice implementing encapsulation and data validation
        - Learn to design object interactions and method interfaces
        - Gain experience with business logic implementation
        - Develop skills in testing and validating OOP designs
        
        This comprehensive exercise bridges the gap between learning OOP concepts and applying them to solve real-world problems!
      `
    }
  },

  'lesson-3-2': {
    title: 'Classes and Objects',
    type: 'coding',
    duration: '35 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Create your own classes and instantiate objects. Learn fields, methods, and object interaction.',
      objectives: [
        'Define a class with fields and methods',
        'Instantiate objects and set/read fields',
        'Call instance methods that operate on state',
        'Understand reference vs value semantics for objects',
        'Use this to disambiguate fields and parameters'
      ],
      theory: '<div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Classes and Objects</h1></div><p class="text-gray-700 mb-4">A class is a blueprint; an object is an instance of that blueprint. Methods define behavior using the object\'s state.</p><p class="text-gray-700">Use constructors and methods to establish valid state and provide operations.</p>',
      codeExample: 'public class Person {\n    String name;\n    int age;\n    void birthday() {\n        age++;\n        System.out.println(name + " just turned " + age + "!");\n    }\n    void rename(String name) {\n        this.name = name;\n    }\n}\n\nclass PersonDemo {\n    public static void main(String[] args) {\n        Person a = new Person();\n        a.rename("Alice");\n        a.age = 20;\n        a.birthday();\n        \n        Person b = new Person();\n        b.rename("Bob");\n        b.age = 25;\n        b.birthday();\n    }\n}',
      exercise: 'Create a Car class with brand, model, and mileage fields, plus drive(km) and showInfo() methods. Instantiate two cars and simulate a few drives.'
    }
  },

  'lesson-3-3': {
    title: 'Constructors and Methods',
    type: 'coding',
    duration: '40 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Master constructors for object initialization and advanced method concepts. Learn constructor overloading and the this keyword.',
      objectives: [
        'Understand constructor purpose and syntax',
        'Learn constructor overloading',
        'Master the this keyword usage',
        'Practice method chaining and fluent interfaces',
        'Create static factory methods as alternatives to constructors'
      ],
      theory: '<div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Constructors and Methods</h1></div><p class="text-gray-700 mb-4">Constructors initialize objects to a valid state. Overload constructors to support different initialization pathways, and provide clear, well-named methods.</p>',
      codeExample: 'public class Person {\n    private String name;\n    private int age;\n    private String email;\n    \n    private Person(String name, int age, String email) {\n        this.name = name;\n        this.age = age;\n        this.email = email;\n    }\n    // Static factories\n    public static Person of(String name, int age) {\n        return new Person(name, age, "not-provided@example.com");\n    }\n    public static Person withEmail(String name, int age, String email) {\n        return new Person(name, age, email);\n    }\n    // Chainable mutators\n    public Person setName(String name) { this.name = name; return this; }\n    public Person setAge(int age) { this.age = age; return this; }\n    public Person setEmail(String email) { this.email = email; return this; }\n    public void displayInfo() {\n        System.out.println("Name: " + name + ", Age: " + age + ", Email: " + email);\n    }\n}\n\nclass PersonDemo {\n    public static void main(String[] args) {\n        Person p1 = Person.of("Alice", 25);\n        Person p2 = Person.withEmail("Bob", 30, "bob@email.com");\n        Person p3 = Person.of("Charlie", 22).setEmail("charlie@email.com");\n        p1.displayInfo();\n        p2.displayInfo();\n        p3.displayInfo();\n    }\n}',
      exercise: 'Create a Rectangle class with factories: square(side) and of(width, height). Include methods: area(), perimeter(), and displayInfo(). Demonstrate both factories.'
    }
  },

  'lesson-3-4': {
    title: 'Inheritance',
    type: 'lesson',
    duration: '45 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Learn how classes can inherit fields and methods from other classes, reuse code, and extend behavior.',
      objectives: [
        'Understand extends keyword and class hierarchy',
        'Use super to access parent constructors/methods',
        'Override methods in subclasses',
        'Design reusable class structures',
        'Know final, protected, and visibility implications'
      ],
      theory: '<div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Inheritance</h1></div><p class="text-gray-700 mb-4">Inheritance allows a class (subclass) to acquire properties and behavior of another class (superclass). It promotes reuse and specialization.</p><ul class="list-disc pl-6 text-gray-700"><li>Use <code>extends</code> to create subtype relationships.</li><li>Call <code>super(...)</code> to invoke superclass constructors.</li><li>Annotate overrides with <code>@Override</code> to catch errors.</li><li>Use <code>final</code> to prevent overriding or inheritance.</li></ul>',
      codeExample: 'class Vehicle {\n    protected String brand;\n    protected int year;\n    Vehicle(String brand, int year) { this.brand = brand; this.year = year; }\n    void start() { System.out.println(brand + " starting..."); }\n}\nclass Car extends Vehicle {\n    String model;\n    Car(String brand, int year, String model) { super(brand, year); this.model = model; }\n    @Override void start() { super.start(); System.out.println("Car " + brand + " " + model + " ready!"); }\n}\nclass Truck extends Vehicle {\n    int capacityKg;\n    Truck(String brand, int year, int capacityKg) { super(brand, year); this.capacityKg = capacityKg; }\n    @Override void start() { System.out.println("Truck " + brand + " capacity=" + capacityKg + "kg"); }\n}\nclass InheritanceDemo {\n    public static void main(String[] args) {\n        Vehicle v = new Vehicle("Generic", 2000);\n        Car c = new Car("Toyota", 2022, "Camry");\n        Truck t = new Truck("Volvo", 2021, 5000);\n        v.start(); c.start(); t.start();\n    }\n}',
      exercise: 'Create a base class Appliance with power and brand. Derive classes Fan and AirConditioner that override turnOn() method and add their own properties. Demonstrate super() and overriding.'
    }
  },

  'lesson-3-5': {
    title: 'Polymorphism',
    type: 'lesson',
    duration: '35 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Use a common type to refer to multiple subclass objects and invoke overridden behavior dynamically.',
      objectives: [
        'Understand method overriding and dynamic dispatch',
        'Use base-class references to call subclass implementations',
        'Design APIs that depend on abstractions rather than concretes',
        'Recognize compile-time vs run-time polymorphism',
        'Know when to downcast carefully'
      ],
      theory: '<div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Polymorphism</h1></div><p class="text-gray-700 mb-4">Polymorphism lets you treat objects of different subclasses uniformly through a common superclass or interface, and execute the appropriate overridden method at runtime.</p><p class="text-gray-700">Prefer programming to interfaces to maximize flexibility.</p>',
      codeExample: 'class Animal { void speak() { System.out.println("Animal speaks"); } }\nclass Dog extends Animal { @Override void speak() { System.out.println("Woof"); } }\nclass Cat extends Animal { @Override void speak() { System.out.println("Meow"); } }\nclass PolyDemo {\n    static void makeItSpeak(Animal a) { a.speak(); }\n    public static void main(String[] args) {\n        Animal[] animals = { new Dog(), new Cat(), new Dog() };\n        for (Animal a : animals) makeItSpeak(a);\n        // Downcast (use instanceof)\n        Animal a = new Dog();\n        if (a instanceof Dog) { Dog d = (Dog) a; d.speak(); }\n    }\n}',
      exercise: 'Create a Shape hierarchy with a base class having area() method. Implement Circle and Rectangle, override area(), and pass them to a function that prints area polymorphically.'
    }
  },

  'lesson-3-6': {
    title: 'Encapsulation',
    type: 'lesson',
    duration: '30 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Protect internal object state with access modifiers and expose well-defined methods for interaction.',
      objectives: [
        'Use private fields with public getters/setters',
        'Validate and guard state changes',
        'Hide implementation details',
        'Design robust, maintainable classes',
        'Understand immutability and defensive copies briefly'
      ],
      theory: '<div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Encapsulation</h1></div><p class="text-gray-700 mb-4">Encapsulation bundles data and methods while restricting direct access to internal state. Use access modifiers (private, protected, public, package-private) and provide controlled methods.</p><p class="text-gray-700">Consider making classes immutable when possible and use defensive copies for mutable fields.</p>',
      codeExample: 'public class Employee {\n    // Private instance variables - encapsulated data\n    private String name;\n    private int employeeId;\n    private double salary;\n    private String department;\n    private boolean active;\n\n    // Constructor\n    public Employee(String name, int employeeId, double salary, String department) {\n        setName(name);\n        this.employeeId = employeeId;\n        updateSalary(salary);\n        setDepartment(department);\n        this.active = true;\n    }\n\n    // Public getter methods - controlled access\n    public String getName() { return name; }\n    public int getEmployeeId() { return employeeId; }\n    public String getDepartment() { return department; }\n    public boolean isActive() { return active; }\n    public double getSalary() { return active ? salary : 0.0; }\n\n    // Controlled mutators with validation\n    public void setName(String name) { if (name != null && !name.trim().isEmpty()) this.name = name.trim(); }\n    public void setDepartment(String department) { if (department != null && !department.trim().isEmpty()) this.department = department.trim(); }\n    public void updateSalary(double newSalary) { if (newSalary >= 0) this.salary = newSalary; }\n    public void changeSalaryBy(double delta) { double s = this.salary + delta; if (s >= 0) this.salary = s; }\n    public void deactivate() { this.active = false; }\n    public void activate() { this.active = true; }\n    public void display() { System.out.println("Employee(" + employeeId + ") " + name + ", dept=" + department + ", salary=" + salary + ", active=" + active); }\n}\n\nclass EncapsulationDemo {\n    public static void main(String[] args) {\n        Employee e = new Employee("Alice", 1001, 75000, "Engineering");\n        e.display();\n        e.changeSalaryBy(2500);\n        e.setDepartment("R&D");\n        e.display();\n        e.deactivate();\n        System.out.println("Visible salary when inactive: " + e.getSalary());\n    }\n}',
      exercise: 'Refactor a Student class to keep all fields private. Add validation in setters (e.g., non-empty name, age >= 0), and provide a method to print a masked ID.'
    }
  },

  'lesson-3-7': {
    title: 'Abstract Classes and Interfaces',
    type: 'coding',
    duration: '40 min',
    module: 'Object-Oriented Programming',
    content: {
      overview: 'Define abstract contracts and implement them with concrete classes. Learn when to use abstract classes vs interfaces.',
      objectives: [
        'Declare abstract classes with abstract methods',
        'Define and implement interfaces',
        'Use polymorphism with abstract types',
        'Understand multiple interface implementation',
        'Use default methods in interfaces (Java 8+)'
      ],
      theory: '<div class="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Abstract Classes and Interfaces</h1></div><p class="text-gray-700 mb-4">Abstract classes can contain implemented and abstract methods; interfaces define a pure contract. Choose abstract classes for shared base state/behavior and interfaces for roles/capabilities.</p>',
      codeExample: 'abstract class Shape { abstract double area(); }\ninterface Drawable { void draw(); default void info() { System.out.println("Drawable"); } }\nclass Circle extends Shape implements Drawable {\n    double r; Circle(double r) { this.r = r; }\n    @Override double area() { return Math.PI * r * r; }\n    @Override public void draw() { System.out.println("Drawing Circle with r=" + r); }\n}\nclass Rectangle extends Shape implements Drawable {\n    double w, h; Rectangle(double w, double h) { this.w = w; this.h = h; }\n    @Override double area() { return w * h; }\n    @Override public void draw() { System.out.println("Drawing Rectangle " + w + "x" + h); }\n}\nclass AbstractDemo {\n    public static void main(String[] args) {\n        Shape s1 = new Circle(3);\n        Shape s2 = new Rectangle(4, 5);\n        System.out.println("Areas:");\n        System.out.println(s1.area());\n        System.out.println(s2.area());\n        Drawable[] ds = { (Drawable) s1, (Drawable) s2 };\n        for (Drawable d : ds) { d.info(); d.draw(); }\n    }\n}',
      exercise: 'Create an abstract class Account with abstract method calculateInterest(). Implement SavingsAccount and CurrentAccount with distinct interest calculations. Demonstrate polymorphic calls.'
    }
  },

  // Module 4: Arrays and Strings (5 lessons)
  // 4-1 Introduction to Arrays (lesson, 25 min)
  // 4-2 Multidimensional Arrays (coding, 30 min)
  // 4-3 String Class and Methods (lesson, 35 min)
  // 4-4 StringBuilder and StringBuffer (lesson, 25 min)
  // 4-5 Array and String Algorithms (coding, 40 min)

  'lesson-4-1': {
    title: 'Introduction to Arrays',
    type: 'lesson',
    duration: '25 min',
    module: 'Arrays and Strings',
    content: {
      overview: 'Learn how to declare, initialize, and use arrays to store multiple values of the same type efficiently.',
      objectives: [
        'Declare and initialize arrays',
        'Understand indexing and default values',
        'Iterate with for and for-each loops',
        'Use common utility methods (java.util.Arrays)'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Introduction to Arrays</h1></div><p class="text-gray-700 mb-4">Arrays store fixed-size sequences of elements of the same type. Indexing starts at 0.</p><ul class="list-disc pl-6 text-gray-700"><li>Declaration: <code>int[] a;</code> Initialization: <code>int[] a = new int[5];</code></li><li>Default values: numeric types -> 0, boolean -> false, object refs -> null</li><li>Iteration: traditional for, enhanced for-each</li><li>Utilities: <code>Arrays.toString</code>, <code>Arrays.sort</code>, <code>Arrays.copyOf</code></li></ul>',
      codeExample: 'import java.util.Arrays;\npublic class ArraysIntro {\n    public static void main(String[] args) {\n        int[] a = new int[5]; // {0,0,0,0,0}\n        for (int i = 0; i < a.length; i++) a[i] = i * i;\n        System.out.println(Arrays.toString(a));\n        int[] b = {5,3,1,4,2};\n        Arrays.sort(b);\n        System.out.println("Sorted: " + Arrays.toString(b));\n        for (int v : b) System.out.print(v + " ");\n    }\n}',
      exercise: 'Create an array of 10 integers, fill it with the first 10 even numbers, print them, and then print the sum and average.'
    }
  },

  'lesson-4-2': {
    title: 'Multidimensional Arrays',
    type: 'coding',
    duration: '30 min',
    module: 'Arrays and Strings',
    content: {
      overview: 'Work with 2D arrays (matrices) and jagged arrays. Learn initialization, traversal, and common operations.',
      objectives: [
        'Declare and initialize 2D arrays',
        'Traverse rows and columns',
        'Compute row/column sums',
        'Understand jagged (ragged) arrays'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Multidimensional Arrays</h1></div><p class="text-gray-700 mb-4">A 2D array is an array of arrays. Dimensions can be rectangular or jagged.</p>',
      codeExample: 'public class MatrixOps {\n    public static void main(String[] args) {\n        int[][] m = { {1,2,3}, {4,5,6}, {7,8,9} };\n        // Print\n        for (int i = 0; i < m.length; i++) {\n            for (int j = 0; j < m[i].length; j++) {\n                System.out.print(m[i][j] + " ");\n            }\n            System.out.println();\n        }\n        // Row sums\n        for (int i = 0; i < m.length; i++) {\n            int sum = 0; for (int v : m[i]) sum += v;\n            System.out.println("Row " + i + " sum = " + sum);\n        }\n        // Jagged array\n        int[][] j = new int[3][];\n        j[0] = new int[]{1,2}; j[1] = new int[]{3,4,5}; j[2] = new int[]{6};\n        System.out.println("Jagged length[1]=" + j[1].length);\n    }\n}',
      exercise: 'Write code to compute the transpose of a 3x3 matrix and print the result. Then extend to check if a matrix is symmetric.'
    }
  },

  'lesson-4-3': {
    title: 'String Class and Methods',
    type: 'lesson',
    duration: '35 min',
    module: 'Arrays and Strings',
    content: {
      overview: 'Master Java String basics: immutability, creation, and common methods for searching and manipulation.',
      objectives: [
        'Understand String immutability',
        'Use key methods: length, charAt, substring, indexOf, equals',
        'Compare Strings correctly',
        'Split and join strings'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">String Class and Methods</h1></div><p class="text-gray-700 mb-4">Strings are immutable sequences of characters. Methods return new String instances.</p><ul class="list-disc pl-6 text-gray-700"><li><code>length()</code>, <code>charAt()</code>, <code>substring()</code>, <code>indexOf()</code></li><li><code>equals()</code> vs <code>==</code></li><li><code>toLowerCase()</code>, <code>toUpperCase()</code>, <code>trim()</code></li><li><code>split()</code> and <code>String.join()</code></li></ul>',
      codeExample: 'public class StringBasics {\n    public static void main(String[] args) {\n        String s = "  Hello, Java!  ";\n        System.out.println(s.trim().toUpperCase());\n        System.out.println("Length=" + s.length());\n        System.out.println("Index of Java=" + s.indexOf("Java"));\n        String sub = s.substring(2, 7);\n        System.out.println("Sub=" + sub);\n        String[] parts = "a,b,c".split(",");\n        System.out.println(String.join("|", parts));\n        System.out.println("equals? " + "abc".equals(new String("abc")));\n    }\n}',
      exercise: 'Given an input sentence, print each word on a new line, count words, and find the longest word.'
    }
  },

  'lesson-4-4': {
    title: 'StringBuilder and StringBuffer',
    type: 'lesson',
    duration: '25 min',
    module: 'Arrays and Strings',
    content: {
      overview: 'Use mutable string types for efficient concatenation and in-place edits. Know when to use StringBuilder vs StringBuffer.',
      objectives: [
        'Understand mutability and performance benefits',
        'Use common methods: append, insert, delete, reverse',
        'Know thread-safety difference (StringBuffer is synchronized)',
        'Choose appropriately for single-threaded vs multi-threaded'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">StringBuilder & StringBuffer</h1></div><p class="text-gray-700 mb-4">Use StringBuilder (faster, not thread-safe) by default; StringBuffer (thread-safe) when needed across threads.</p>',
      codeExample: 'public class BuilderDemo {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("Hello").append(", ").append("World");\n        sb.insert(5, " Java");\n        sb.delete(0, 1);\n        sb.reverse().reverse(); // demo\n        System.out.println(sb.toString());\n        // Buffer\n        StringBuffer buf = new StringBuffer("Count:");\n        for (int i = 1; i <= 5; i++) buf.append(" ").append(i);\n        System.out.println(buf.toString());\n    }\n}',
      exercise: 'Build a comma-separated string of the first 50 integers using StringBuilder, then reverse it and print both versions.'
    }
  },

  'lesson-4-5': {
    title: 'Array and String Algorithms',
    type: 'coding',
    duration: '40 min',
    module: 'Arrays and Strings',
    content: {
      overview: 'Practice core algorithms like reversing arrays, binary search, palindrome checks, and anagram detection.',
      objectives: [
        'Implement array reverse and binary search',
        'Check string palindrome',
        'Detect anagrams using counting or sorting',
        'Apply time complexity thinking'
      ],
      theory: '<div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg mb-6 shadow-lg"><h1 class="text-2xl font-bold m-0">Array & String Algorithms</h1></div><p class="text-gray-700 mb-4">Algorithmic thinking with arrays and strings is foundational. Aim for clarity first, then efficiency.</p>',
      codeExample: 'import java.util.Arrays;\npublic class AlgoBasics {\n    static void reverse(int[] a) { int i=0,j=a.length-1; while(i<j){ int t=a[i]; a[i]=a[j]; a[j]=t; i++; j--; } }\n    static int binarySearch(int[] a, int key){ int l=0,r=a.length-1; while(l<=r){ int m=(l+r)/2; if(a[m]==key) return m; if(a[m]<key) l=m+1; else r=m-1; } return -1; }\n    static boolean isPalindrome(String s){ int i=0,j=s.length()-1; while(i<j){ if(s.charAt(i)!=s.charAt(j)) return false; i++; j--; } return true; }\n    static boolean isAnagram(String a, String b){ if(a.length()!=b.length()) return false; char[] x=a.toCharArray(), y=b.toCharArray(); Arrays.sort(x); Arrays.sort(y); return Arrays.equals(x,y); }\n    public static void main(String[] args){ int[] a={1,2,3,4,5}; reverse(a); System.out.println("rev="+Arrays.toString(a)); int[] b={1,3,5,7,9,11}; System.out.println("idx="+binarySearch(b,7)); System.out.println(isPalindrome("level")); System.out.println(isAnagram("listen","silent")); }\n}',
      exercise: 'Given an array of integers, remove duplicates and print the result (order can be changed). Then, write a function to rotate an array by k positions to the right.'
    }
  }
};
