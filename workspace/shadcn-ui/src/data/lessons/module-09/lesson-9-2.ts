import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_2: LessonContent = {
  title: 'Creating and Managing Threads',
  type: 'coding',
  duration: '25 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Learn how to create and manage threads effectively in Java. This lesson covers thread creation techniques, thread lifecycle management, thread groups, thread local variables, and best practices for thread management.',
    objectives: [
      'Master different thread creation techniques',
      'Learn thread lifecycle management',
      'Understand thread groups and their usage',
      'Practice with ThreadLocal variables',
      'Implement proper thread shutdown procedures',
      'Apply best practices for thread management'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Creating and Managing Threads
        </h1>
        <p class="mt-3 text-green-100 text-lg">Effective thread creation and lifecycle management</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Advanced Thread Creation
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Beyond the basic approaches, Java provides several advanced techniques for creating and configuring threads. 
            Understanding these techniques allows for more flexible and efficient thread management.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">Proper thread creation involves not just starting threads, but also configuring them appropriately for your application's needs.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Thread Lifecycle Management
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding and managing the complete thread lifecycle:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Thread States</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• NEW - Thread created but not started</li>
                  <li>• RUNNABLE - Thread executing or ready to execute</li>
                  <li>• BLOCKED - Thread blocked waiting for monitor</li>
                  <li>• WAITING - Thread waiting indefinitely</li>
                  <li>• TIMED_WAITING - Thread waiting for specified time</li>
                  <li>• TERMINATED - Thread has completed execution</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Lifecycle Methods</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• start() - Begin thread execution</li>
                  <li>• join() - Wait for thread completion</li>
                  <li>• interrupt() - Interrupt thread</li>
                  <li>• isAlive() - Check if thread is running</li>
                  <li>• getState() - Get current thread state</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Thread Groups
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Organizing threads into groups for easier management:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Creating thread groups<br/>
              ThreadGroup group = new ThreadGroup("MyGroup");<br/>
              <br/>
              // Creating threads in a group<br/>
              Thread thread1 = new Thread(group, () -> {<br/>
              &nbsp;&nbsp;// Thread code<br/>
              }, "Thread-1");<br/>
              <br/>
              // Managing thread groups<br/>
              int activeThreads = group.activeCount();<br/>
              Thread[] threads = new Thread[activeThreads];<br/>
              group.enumerate(threads);
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-orange-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">ThreadGroup Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">ThreadGroup(String name)</td>
                    <td class="p-3">Create named thread group</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">activeCount()</td>
                    <td class="p-3">Get number of active threads</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">enumerate(Thread[] list)</td>
                    <td class="p-3">Copy threads to array</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">interrupt()</td>
                    <td class="p-3">Interrupt all threads in group</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">setMaxPriority(int pri)</td>
                    <td class="p-3">Set maximum priority for group</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            ThreadLocal Variables
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Creating thread-specific variables:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">ThreadLocal Basics</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Each thread has its own copy of the variable</li>
                  <li>• Thread-safe without synchronization</li>
                  <li>• Useful for context information</li>
                  <li>• Requires proper cleanup to prevent memory leaks</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ThreadLocal<Integer> threadLocal = <br/>
                  &nbsp;&nbsp;new ThreadLocal<Integer>() {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;protected Integer initialValue() {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
                  &nbsp;&nbsp;};<br/>
                  <br/>
                  threadLocal.set(10);<br/>
                  Integer value = threadLocal.get();
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">ThreadLocal with Cleanup</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Use remove() to prevent memory leaks</li>
                  <li>• Override finalize() for cleanup</li>
                  <li>• Use try-finally blocks</li>
                  <li>• Consider using try-with-resources</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  try {<br/>
                  &nbsp;&nbsp;threadLocal.set(value);<br/>
                  &nbsp;&nbsp;// Use the value<br/>
                  } finally {<br/>
                  &nbsp;&nbsp;threadLocal.remove();<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Thread Shutdown and Interruption
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Properly shutting down threads and handling interruption:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              class ManagedThread extends Thread {<br/>
              &nbsp;&nbsp;private volatile boolean running = true;<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public void run() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;while (running) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Do work<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thread.sleep(1000);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (InterruptedException e) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Restore interrupted status<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thread.currentThread().interrupt();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;running = false;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public void shutdown() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;running = false;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;interrupt();<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Shutdown Method</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Volatile flag</td>
                    <td class="p-3">Use volatile boolean to signal shutdown</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">interrupt()</td>
                    <td class="p-3">Interrupt threads waiting or sleeping</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">join()</td>
                    <td class="p-3">Wait for thread to complete gracefully</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">ExecutorService.shutdown()</td>
                    <td class="p-3">Graceful shutdown of thread pool</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Thread Management</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use ThreadLocal with proper cleanup</li>
                <li>• Handle InterruptedException properly</li>
                <li>• Implement graceful shutdown procedures</li>
                <li>• Use meaningful thread names for debugging</li>
                <li>• Monitor thread lifecycle and states</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use deprecated thread methods</li>
                <li>• Don't ignore thread interruption</li>
                <li>• Don't create threads without proper management</li>
                <li>• Don't forget to clean up ThreadLocal variables</li>
                <li>• Don't use stop(), suspend(), or resume()</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * CreatingAndManagingThreadsDemo.java
 * 
 * This comprehensive example demonstrates creating and managing threads in Java:
 * - Advanced thread creation techniques
 * - Thread lifecycle management
 * - Thread groups usage
 * - ThreadLocal variables
 * - Proper thread shutdown procedures
 * 
 * Run this program to see thread management in action.
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

// Example 1: Advanced thread creation with custom thread factory
class CustomThreadFactory implements ThreadFactory {
    private final String prefix;
    private final AtomicInteger counter = new AtomicInteger(0);
    private final int priority;
    
    public CustomThreadFactory(String prefix, int priority) {
        this.prefix = prefix;
        this.priority = priority;
    }
    
    @Override
    public Thread newThread(Runnable r) {
        Thread thread = new Thread(r, prefix + "-" + counter.incrementAndGet());
        thread.setPriority(priority);
        thread.setDaemon(false);
        return thread;
    }
}

// Example 2: Thread with proper shutdown mechanism
class ManagedThread extends Thread {
    private volatile boolean running = true;
    private final String name;
    
    public ManagedThread(String name) {
        this.name = name;
        setName(name);
    }
    
    @Override
    public void run() {
        System.out.println(name + " started");
        
        while (running) {
            try {
                System.out.println(name + " is working...");
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                System.out.println(name + " was interrupted");
                // Restore interrupted status
                Thread.currentThread().interrupt();
                running = false;
            }
        }
        
        System.out.println(name + " finished gracefully");
    }
    
    public void shutdown() {
        System.out.println("Shutting down " + name);
        running = false;
        interrupt();
    }
}

// Example 3: ThreadLocal usage with proper cleanup
class ThreadLocalExample {
    // ThreadLocal with initial value
    private static final ThreadLocal<Integer> threadLocalCounter = 
        new ThreadLocal<Integer>() {
            @Override
            protected Integer initialValue() {
                return 0;
            }
        };
    
    // ThreadLocal with cleanup
    private static final ThreadLocal<StringBuilder> threadLocalBuffer = 
        new ThreadLocal<StringBuilder>() {
            @Override
            protected StringBuilder initialValue() {
                return new StringBuilder();
            }
        };
    
    public static void doWork(String taskId) {
        try {
            // Use ThreadLocal variables
            int count = threadLocalCounter.get();
            threadLocalCounter.set(count + 1);
            
            StringBuilder buffer = threadLocalBuffer.get();
            buffer.append("Task-").append(taskId).append(":").append(count).append(" ");
            
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " processed " + taskId + ", count: " + count + 
                             ", buffer: " + buffer.toString());
            
            // Simulate work
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
    
    public static void cleanup() {
        // Proper cleanup to prevent memory leaks
        threadLocalCounter.remove();
        threadLocalBuffer.remove();
    }
}

// Example 4: Thread group demonstration
class ThreadGroupExample implements Runnable {
    private final String taskName;
    
    public ThreadGroupExample(String taskName) {
        this.taskName = taskName;
    }
    
    @Override
    public void run() {
        System.out.println("Task " + taskName + " started in thread " + 
                          Thread.currentThread().getName());
        
        try {
            // Simulate work
            for (int i = 1; i <= 3; i++) {
                System.out.println("Task " + taskName + " step " + i);
                Thread.sleep(800);
            }
        } catch (InterruptedException e) {
            System.out.println("Task " + taskName + " was interrupted");
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Task " + taskName + " completed");
    }
}

// Example 5: Thread state monitoring
class ThreadStateMonitor {
    public static void printThreadState(Thread thread) {
        System.out.println("Thread " + thread.getName() + 
                          " state: " + thread.getState());
    }
    
    public static void monitorThread(Thread thread) {
        ScheduledExecutorService scheduler = 
            Executors.newScheduledThreadPool(1);
        
        scheduler.scheduleAtFixedRate(() -> {
            printThreadState(thread);
        }, 0, 500, TimeUnit.MILLISECONDS);
        
        // Stop monitoring after 10 seconds
        scheduler.schedule(() -> {
            scheduler.shutdown();
            System.out.println("Monitoring stopped for " + thread.getName());
        }, 10, TimeUnit.SECONDS);
    }
}

public class CreatingAndManagingThreadsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate custom thread factory
        demonstrateCustomThreadFactory();
        
        // Demonstrate thread shutdown
        demonstrateThreadShutdown();
        
        // Demonstrate ThreadLocal usage
        demonstrateThreadLocal();
        
        // Demonstrate thread groups
        demonstrateThreadGroups();
        
        // Demonstrate thread state monitoring
        demonstrateThreadStateMonitoring();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         CREATING AND MANAGING THREADS DEMO                   ║");
        System.out.println("║         Advanced thread creation and lifecycle management    ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateCustomThreadFactory() {
        System.out.println("🔸 CUSTOM THREAD FACTORY DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────");
        
        // Create custom thread factories
        CustomThreadFactory highPriorityFactory = 
            new CustomThreadFactory("HighPriority", Thread.MAX_PRIORITY);
        CustomThreadFactory lowPriorityFactory = 
            new CustomThreadFactory("LowPriority", Thread.MIN_PRIORITY);
        
        // Create threads using custom factories
        Thread highPriorityThread = highPriorityFactory.newThread(() -> {
            System.out.println("High priority thread running: " + 
                              Thread.currentThread().getName());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("High priority thread finished");
        });
        
        Thread lowPriorityThread = lowPriorityFactory.newThread(() -> {
            System.out.println("Low priority thread running: " + 
                              Thread.currentThread().getName());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            System.out.println("Low priority thread finished");
        });
        
        // Start threads
        highPriorityThread.start();
        lowPriorityThread.start();
        
        // Wait for completion
        try {
            highPriorityThread.join();
            lowPriorityThread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateThreadShutdown() {
        System.out.println("🔸 THREAD SHUTDOWN DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        // Create managed threads
        ManagedThread thread1 = new ManagedThread("Worker-1");
        ManagedThread thread2 = new ManagedThread("Worker-2");
        
        // Start threads
        thread1.start();
        thread2.start();
        
        // Let threads run for a while
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Shutdown threads gracefully
        thread1.shutdown();
        thread2.shutdown();
        
        // Wait for threads to finish
        try {
            thread1.join(2000); // Wait up to 2 seconds
            thread2.join(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("All threads shut down gracefully");
        System.out.println();
    }
    
    private static void demonstrateThreadLocal() {
        System.out.println("🔸 THREADLOCAL DEMONSTRATION");
        System.out.println("   ───────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Submit tasks that use ThreadLocal variables
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                for (int j = 0; j < 3; j++) {
                    ThreadLocalExample.doWork(taskId + "-" + j);
                }
                ThreadLocalExample.cleanup();
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateThreadGroups() {
        System.out.println("🔸 THREAD GROUPS DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        // Create thread groups
        ThreadGroup workerGroup = new ThreadGroup("Workers");
        ThreadGroup serviceGroup = new ThreadGroup("Services");
        
        // Set maximum priority for service group
        serviceGroup.setMaxPriority(Thread.NORM_PRIORITY);
        
        // Create threads in groups
        Thread worker1 = new Thread(workerGroup, 
            new ThreadGroupExample("Worker-1"), "Worker-Thread-1");
        Thread worker2 = new Thread(workerGroup, 
            new ThreadGroupExample("Worker-2"), "Worker-Thread-2");
        Thread service1 = new Thread(serviceGroup, 
            new ThreadGroupExample("Service-1"), "Service-Thread-1");
        
        // Start threads
        worker1.start();
        worker2.start();
        service1.start();
        
        // Display thread group information
        System.out.println("Worker group active threads: " + 
                          workerGroup.activeCount());
        System.out.println("Service group active threads: " + 
                          serviceGroup.activeCount());
        
        // List threads in worker group
        Thread[] workerThreads = new Thread[workerGroup.activeCount()];
        workerGroup.enumerate(workerThreads);
        System.out.println("Worker group threads:");
        for (Thread thread : workerThreads) {
            if (thread != null) {
                System.out.println("  - " + thread.getName());
            }
        }
        
        // Wait for completion
        try {
            worker1.join();
            worker2.join();
            service1.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateThreadStateMonitoring() {
        System.out.println("🔸 THREAD STATE MONITORING DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────");
        
        // Create a thread to monitor
        Thread monitoredThread = new Thread(() -> {
            try {
                System.out.println("Monitored thread started");
                Thread.sleep(2000);
                System.out.println("Monitored thread doing work");
                Thread.sleep(3000);
                System.out.println("Monitored thread finishing");
            } catch (InterruptedException e) {
                System.out.println("Monitored thread interrupted");
                Thread.currentThread().interrupt();
            }
        }, "MonitoredThread");
        
        // Monitor thread state
        ThreadStateMonitor.monitorThread(monitoredThread);
        
        // Start the monitored thread
        monitoredThread.start();
        
        // Wait for completion
        try {
            monitoredThread.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Advanced thread creation techniques                       ║");
        System.out.println("║  • Thread lifecycle management                               ║");
        System.out.println("║  • Thread groups usage                                       ║");
        System.out.println("║  • ThreadLocal variables                                     ║");
        System.out.println("║  • Proper thread shutdown procedures                         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use ThreadLocal with proper cleanup                       ║");
        System.out.println("║  • Handle InterruptedException properly                      ║");
        System.out.println("║  • Implement graceful shutdown procedures                    ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1. Create a ThreadLocal variable that stores an integer counter for each thread.
2. Create a thread group and add multiple threads to it, then interrupt all threads in the group.
3. Create a managed thread class with a proper shutdown() method that uses a volatile boolean flag.
4. Create a custom ThreadFactory that assigns names and priorities to threads.
5. Create a thread that monitors the state of another thread and prints state changes.
`
  }
};