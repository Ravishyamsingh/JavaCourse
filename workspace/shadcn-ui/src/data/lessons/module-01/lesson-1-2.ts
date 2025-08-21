import { LessonContent } from '../../types/LessonTypes';

export const lesson_1_2: LessonContent = {
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
 *    Java Home:    C:\\Program Files\\Eclipse Adoptium\\jdk-17.0.2.8-hotspot
 *    JVM Version:  17.0.2+8
 *    JVM Vendor:   Eclipse Adoptium
 *    JVM Name:     OpenJDK 64-Bit Server VM
 * 
 * 🔸 SYSTEM INFORMATION
 *    ──────────────────
 *    Operating System: Windows 10 10.0
 *    System Architecture: amd64
 *    User Name: Developer
 *    User Home: C:\\Users\\Developer
 *    Working Directory: C:\\Projects\\JavaCourse
 *    File Separator: '\\'
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
};
