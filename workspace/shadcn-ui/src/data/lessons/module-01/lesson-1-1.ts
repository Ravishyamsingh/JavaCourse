import { LessonContent } from '../../types/LessonTypes';

export const lesson_1_1: LessonContent = {
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
      **🎯 Introduction to Java Exercises**

      **Exercise 1: Real-World Java Applications**
      Research and identify 5 major companies/applications that use Java:
      - For each company, write 2-3 sentences explaining why they chose Java
      - Include specific Java technologies they use
      - Examples: Netflix (microservices), LinkedIn (backend systems)

      **Exercise 2: Java Version Timeline**
      Create a timeline of major Java versions from Java 1.0 to latest:
      - For each major version (8, 11, 17, 21), list 2 key features
      - Research which version is most commonly used in enterprise

      **Exercise 3: Java vs Other Languages**
      Compare Java with 3 other programming languages (e.g., Python, C#, C++):
      - Create a table showing performance, learning curve, use cases, community size

      **Exercise 4: Java Career Research**
      Browse job sites and find 3 Java developer job postings:
      - List common skills and technologies mentioned
      - Note average salary ranges in your area

      **Exercise 5: Hands-On Exploration**
      Visit official Oracle Java documentation:
      - Browse API documentation and identify 5 interesting classes/packages
      - Look at open-source Java projects on GitHub

      **Deliverable:**
      Create a well-organized document with your findings from all exercises.
    `
  }
};
