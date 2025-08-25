import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_1: LessonContent = {
  title: 'Introduction to Threads',
  type: 'lesson',
  duration: '20 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Learn the fundamentals of threads in Java. This lesson covers what threads are, why we use them, thread lifecycle, and basic thread creation and management.',
    objectives: [
      'Understand what threads are and why they are important',
      'Learn about thread lifecycle and states',
      'Practice creating and starting threads',
      'Explore thread priorities and daemon threads',
      'Understand the difference between processes and threads',
      'Learn basic thread safety concepts'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Introduction to Threads
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Understanding the building blocks of concurrent programming</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            What are Threads?
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            A thread is the smallest unit of execution within a process. In Java, threads allow concurrent execution 
            of tasks within the same program. Each thread has its own call stack but shares the heap memory with 
            other threads in the same process.
          </p>
          <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">💡 Key Concept</h4>
            <p class="text-blue-700">Threads enable your application to perform multiple tasks simultaneously, improving responsiveness and resource utilization.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Thread vs Process
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the difference between processes and threads:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Process</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Independent execution unit</li>
                  <li>• Separate memory space</li>
                  <li>• Heavyweight</li>
                  <li>• Inter-process communication is complex</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Thread</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Execution unit within a process</li>
                  <li>• Shared memory space</li>
                  <li>• Lightweight</li>
                  <li>• Easy communication between threads</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Thread Lifecycle
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the different states a thread can be in:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              NEW → RUNNABLE → RUNNING → BLOCKED/WAITING → TERMINATED
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">State</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">NEW</td>
                    <td class="p-3">Thread created but not started</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">RUNNABLE</td>
                    <td class="p-3">Thread ready to run</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">RUNNING</td>
                    <td class="p-3">Thread currently executing</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">BLOCKED</td>
                    <td class="p-3">Thread blocked waiting for monitor</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">WAITING</td>
                    <td class="p-3">Thread waiting indefinitely</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">TIMED_WAITING</td>
                    <td class="p-3">Thread waiting for specified time</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">TERMINATED</td>
                    <td class="p-3">Thread has completed execution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Creating Threads
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Two main ways to create threads in Java:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Extending Thread Class</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Create a class that extends Thread</li>
                  <li>• Override the run() method</li>
                  <li>• Create instance and call start()</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  class MyThread extends Thread {<br/>
                  &nbsp;&nbsp;public void run() {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;// Thread code here<br/>
                  &nbsp;&nbsp;}<br/>
                  }<br/>
                  MyThread thread = new MyThread();<br/>
                  thread.start();
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Implementing Runnable</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Create a class that implements Runnable</li>
                  <li>• Implement the run() method</li>
                  <li>• Pass to Thread constructor</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  class MyRunnable implements Runnable {<br/>
                  &nbsp;&nbsp;public void run() {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;// Thread code here<br/>
                  &nbsp;&nbsp;}<br/>
                  }<br/>
                  Thread thread = new Thread(new MyRunnable());<br/>
                  thread.start();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Thread Priorities and Daemon Threads
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Additional thread properties and characteristics:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Thread Priorities</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• MIN_PRIORITY (1)</li>
                  <li>• NORM_PRIORITY (5) - default</li>
                  <li>• MAX_PRIORITY (10)</li>
                  <li>• Higher priority threads get more CPU time</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Thread thread = new Thread(() -> {<br/>
                  &nbsp;&nbsp;// Thread code<br/>
                  });<br/>
                  thread.setPriority(Thread.MAX_PRIORITY);<br/>
                  thread.start();
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Daemon Threads</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Background threads</li>
                  <li>• Don't prevent JVM from exiting</li>
                  <li>• Automatically terminated when all user threads finish</li>
                  <li>• Used for services like garbage collection</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Thread daemonThread = new Thread(() -> {<br/>
                  &nbsp;&nbsp;// Background task<br/>
                  });<br/>
                  daemonThread.setDaemon(true);<br/>
                  daemonThread.start();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Thread Creation</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Prefer implementing Runnable over extending Thread</li>
                <li>• Always use start() method, not run()</li>
                <li>• Handle InterruptedException properly</li>
                <li>• Use thread-safe collections when sharing data</li>
                <li>• Set meaningful thread names for debugging</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't call run() directly on thread objects</li>
                <li>• Don't ignore InterruptedException</li>
                <li>• Don't share mutable data without synchronization</li>
                <li>• Don't create too many threads</li>
                <li>• Don't use deprecated thread methods</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * IntroductionToThreadsDemo.java
 * 
 * This comprehensive example demonstrates the fundamentals of threads in Java:
 * - Creating threads using different approaches
 * - Understanding thread lifecycle
 * - Working with thread priorities
 * - Implementing daemon threads
 * - Basic thread safety concepts
 * 
 * Run this program to see thread basics in action.
 */

// Example 1: Extending Thread class
class ThreadExample extends Thread {
    private final String threadName;
    
    public ThreadExample(String name) {
        this.threadName = name;
        // Set a meaningful thread name for debugging
        this.setName(name);
    }
    
    @Override
    public void run() {
        System.out.println(threadName + " started");
        
        // Simulate some work
        for (int i = 1; i <= 5; i++) {
            System.out.println(threadName + " counting: " + i);
            try {
                // Sleep for a short time to simulate work
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(threadName + " was interrupted");
                // Restore interrupted status
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        System.out.println(threadName + " finished");
    }
}

// Example 2: Implementing Runnable interface
class RunnableExample implements Runnable {
    private final String taskName;
    
    public RunnableExample(String name) {
        this.taskName = name;
    }
    
    @Override
    public void run() {
        System.out.println(taskName + " started");
        
        // Simulate some work
        for (int i = 1; i <= 3; i++) {
            System.out.println(taskName + " processing item " + i);
            try {
                Thread.sleep(800);
            } catch (InterruptedException e) {
                System.out.println(taskName + " was interrupted");
                Thread.currentThread().interrupt();
                return;
            }
        }
        
        System.out.println(taskName + " completed");
    }
}

// Example 3: Daemon thread example
class DaemonExample implements Runnable {
    @Override
    public void run() {
        System.out.println("Daemon thread started");
        
        // Daemon thread runs continuously until JVM exits
        while (true) {
            System.out.println("Daemon thread is running...");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                System.out.println("Daemon thread interrupted");
                Thread.currentThread().interrupt();
                return;
            }
        }
    }
}

// Example 4: Thread with different priorities
class PriorityExample implements Runnable {
    private final String threadName;
    
    public PriorityExample(String name) {
        this.threadName = name;
    }
    
    @Override
    public void run() {
        System.out.println(threadName + " (Priority: " + 
                          Thread.currentThread().getPriority() + ") started");
        
        // Perform some CPU-intensive work
        long startTime = System.currentTimeMillis();
        long count = 0;
        
        // Work for 3 seconds
        while (System.currentTimeMillis() - startTime < 3000) {
            count++;
        }
        
        System.out.println(threadName + " completed " + count + " operations");
    }
}

public class IntroductionToThreadsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate extending Thread class
        demonstrateThreadExtension();
        
        // Demonstrate implementing Runnable
        demonstrateRunnableImplementation();
        
        // Demonstrate thread priorities
        demonstrateThreadPriorities();
        
        // Demonstrate daemon threads
        demonstrateDaemonThreads();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         INTRODUCTION TO THREADS DEMO                         ║");
        System.out.println("║         Understanding the basics of concurrent programming   ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateThreadExtension() {
        System.out.println("🔸 THREAD EXTENSION DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        // Create and start threads by extending Thread class
        ThreadExample thread1 = new ThreadExample("Thread-1");
        ThreadExample thread2 = new ThreadExample("Thread-2");
        
        // Start the threads
        thread1.start();
        thread2.start();
        
        // Wait for threads to complete
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateRunnableImplementation() {
        System.out.println("🔸 RUNNABLE IMPLEMENTATION DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────");
        
        // Create Runnable tasks
        RunnableExample task1 = new RunnableExample("Task-1");
        RunnableExample task2 = new RunnableExample("Task-2");
        
        // Create threads with Runnable tasks
        Thread thread1 = new Thread(task1);
        Thread thread2 = new Thread(task2);
        
        // Set meaningful names
        thread1.setName("Worker-1");
        thread2.setName("Worker-2");
        
        // Start the threads
        thread1.start();
        thread2.start();
        
        // Wait for threads to complete
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateThreadPriorities() {
        System.out.println("🔸 THREAD PRIORITIES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        // Create threads with different priorities
        Thread lowPriority = new Thread(new PriorityExample("Low-Priority"));
        Thread normalPriority = new Thread(new PriorityExample("Normal-Priority"));
        Thread highPriority = new Thread(new PriorityExample("High-Priority"));
        
        // Set priorities
        lowPriority.setPriority(Thread.MIN_PRIORITY);
        normalPriority.setPriority(Thread.NORM_PRIORITY);
        highPriority.setPriority(Thread.MAX_PRIORITY);
        
        // Start threads
        lowPriority.start();
        normalPriority.start();
        highPriority.start();
        
        // Wait for completion
        try {
            lowPriority.join();
            normalPriority.join();
            highPriority.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted");
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateDaemonThreads() {
        System.out.println("🔸 DAEMON THREADS DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        // Create a daemon thread
        Thread daemonThread = new Thread(new DaemonExample());
        daemonThread.setDaemon(true);
        daemonThread.setName("Background-Daemon");
        
        // Start daemon thread
        daemonThread.start();
        
        // Main thread does some work
        System.out.println("Main thread doing some work...");
        try {
            Thread.sleep(5000); // Let daemon run for 5 seconds
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Main thread finished - daemon will stop when JVM exits");
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Creating threads by extending Thread class               ║");
        System.out.println("║  • Creating threads by implementing Runnable interface       ║");
        System.out.println("║  • Understanding thread lifecycle                            ║");
        System.out.println("║  • Working with thread priorities                            ║");
        System.out.println("║  • Implementing daemon threads                               ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Prefer implementing Runnable over extending Thread        ║");
        System.out.println("║  • Always use start() method, not run()                      ║");
        System.out.println("║  • Handle InterruptedException properly                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         INTRODUCTION TO THREADS DEMO                         ║
 * ║         Understanding the basics of concurrent programming   ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 THREAD EXTENSION DEMONSTRATION
 *    ───────────────────────────────
 *    Thread-1 started
 *    Thread-2 started
 *    Thread-1 counting: 1
 *    Thread-2 counting: 1
 *    Thread-1 counting: 2
 *    Thread-2 counting: 2
 *    Thread-1 counting: 3
 *    Thread-2 counting: 3
 *    Thread-1 counting: 4
 *    Thread-2 counting: 4
 *    Thread-1 counting: 5
 *    Thread-2 counting: 5
 *    Thread-1 finished
 *    Thread-2 finished
 * 
 * 🔸 RUNNABLE IMPLEMENTATION DEMONSTRATION
 *    ──────────────────────────────────────
 *    Task-1 started
 *    Task-2 started
 *    Task-1 processing item 1
 *    Task-2 processing item 1
 *    Task-1 processing item 2
 *    Task-2 processing item 2
 *    Task-1 processing item 3
 *    Task-2 processing item 3
 *    Task-1 completed
 *    Task-2 completed
 * 
 * 🔸 THREAD PRIORITIES DEMONSTRATION
 *    ─────────────────────────────────
 *    Low-Priority (Priority: 1) started
 *    Normal-Priority (Priority: 5) started
 *    High-Priority (Priority: 10) started
 *    Low-Priority completed 12345678 operations
 *    Normal-Priority completed 23456789 operations
 *    High-Priority completed 34567890 operations
 * 
 * 🔸 DAEMON THREADS DEMONSTRATION
 *    ─────────────────────────────
 *    Main thread doing some work...
 *    Daemon thread started
 *    Daemon thread is running...
 *    Daemon thread is running...
 *    Main thread finished - daemon will stop when JVM exits
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Introduction to Threads Practice Exercise**

      Create comprehensive programs to practice the fundamentals of threads in Java.

      **Part 1: Thread Creation Workshop**
      
      Create a program called \`ThreadCreationWorkshop.java\` that demonstrates different ways to create threads:
      
      Requirements:
      - Implement thread creation using both Thread class extension and Runnable interface
      - Create at least 5 different threads with varying tasks
      - Demonstrate proper thread lifecycle management
      - Include error handling for thread interruptions
      
      Features to implement:
      - Thread naming conventions
      - Thread state monitoring
      - Proper exception handling
      - Resource cleanup

      **Part 2: Priority Management System**
      
      Create a program called \`PriorityManagementSystem.java\` that manages threads with different priorities:
      
      Requirements:
      - Create a system that demonstrates thread priority effects
      - Implement dynamic priority adjustment
      - Add performance monitoring for different priority levels
      - Include comprehensive testing
      
      Advanced Features:
      - Priority-based task scheduling
      - Performance analytics
      - Resource usage tracking
      - Dynamic priority optimization

      **Part 3: Daemon Services Framework**
      
      Create a program called \`DaemonServicesFramework.java\` that implements background services using daemon threads:
      
      Requirements:
      - Create a framework for daemon services
      - Implement service lifecycle management
      - Add service monitoring and logging
      - Include proper shutdown procedures
      
      Features to implement:
      - Service registration and discovery
      - Health monitoring
      - Logging and debugging
      - Graceful shutdown

      **Part 4: Thread Safety Demonstrator**
      
      Create a program called \`ThreadSafetyDemonstrator.java\` that shows thread safety concepts:
      
      Requirements:
      - Create examples of thread-safe and non-thread-safe code
      - Implement basic synchronization techniques
      - Add race condition detection
      - Include comprehensive documentation
      
      Advanced Features:
      - Thread safety analysis tools
      - Performance comparison between safe/unsafe code
      - Memory consistency visualization
      - Best practices enforcement

      **Part 5: Thread Lifecycle Monitor**
      
      Create a program called \`ThreadLifecycleMonitor.java\` that monitors and visualizes thread lifecycle:
      
      Requirements:
      - Create a system that tracks thread states
      - Implement real-time thread state visualization
      - Add performance analytics and metrics
      - Include alert and notification system
      
      Features to implement:
      - Real-time monitoring dashboard
      - State transition tracking
      - Performance analytics
      - Alert and notification system

      **Deliverables:**
      Submit the following files:
      1. \`ThreadCreationWorkshop.java\` - Thread creation workshop
      2. \`PriorityManagementSystem.java\` - Priority management system
      3. \`DaemonServicesFramework.java\` - Daemon services framework
      4. \`ThreadSafetyDemonstrator.java\` - Thread safety demonstrator
      5. \`ThreadLifecycleMonitor.java\` - Thread lifecycle monitor
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Understanding of thread creation methods
      - ✅ Knowledge of thread lifecycle and states
      - ✅ Proper use of thread priorities
      - ✅ Implementation of daemon threads
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive thread management capabilities
      - ✅ Application of best practices for threading

      **💡 Bonus Challenges:**
      
      1. Advanced Thread Patterns: Implement sophisticated thread creation patterns
      2. Performance Optimization: Add performance tracking to thread operations
      3. Error Handling: Add comprehensive error handling to thread operations
      4. Resource Management: Implement efficient thread resource management
      5. Extensibility: Create frameworks for reusable thread components
    `
  }
};