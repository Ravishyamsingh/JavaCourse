import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_3: LessonContent = {
  title: 'Thread Synchronization',
  type: 'coding',
  duration: '30 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Learn thread synchronization in Java. This lesson covers synchronization mechanisms, the synchronized keyword, locks, and best practices for creating thread-safe code.',
    objectives: [
      'Understand thread synchronization and race conditions',
      'Master the synchronized keyword and its usage',
      'Learn about different types of locks',
      'Practice with volatile variables',
      'Implement thread-safe classes and methods',
      'Apply best practices for thread synchronization'
    ],
    theory: `
      <div class="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Thread Synchronization
        </h1>
        <p class="mt-3 text-red-100 text-lg">Ensuring thread safety and preventing race conditions</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Thread Synchronization
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Thread synchronization is the mechanism that ensures that two or more concurrent threads do not 
            simultaneously execute some particular program segment known as critical section. Critical section 
            refers to the part of the program where the shared resource is accessed.
          </p>
          <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
            <h4 class="font-bold text-red-800 mb-2">💡 Key Concept</h4>
            <p class="text-red-700">Without proper synchronization, concurrent threads can lead to race conditions, data inconsistency, and unpredictable behavior.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            The synchronized Keyword
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java provides the synchronized keyword for method and block-level synchronization:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Method-level Synchronization</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Synchronizes entire method</li>
                  <li>• Uses object's intrinsic lock</li>
                  <li>• Can be applied to static methods</li>
                  <li>• Simple but may be too coarse-grained</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public synchronized void increment() {<br/>
                  &nbsp;&nbsp;count++;<br/>
                  }<br/>
                  <br/>
                  public static synchronized void staticMethod() {<br/>
                  &nbsp;&nbsp;// Static synchronization<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Block-level Synchronization</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Synchronizes specific code block</li>
                  <li>• More fine-grained control</li>
                  <li>• Can specify different lock objects</li>
                  <li>• Better performance in some cases</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public void increment() {<br/>
                  &nbsp;&nbsp;synchronized(this) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;count++;<br/>
                  &nbsp;&nbsp;}<br/>
                  }<br/>
                  <br/>
                  private final Object lock = new Object();<br/>
                  synchronized(lock) {<br/>
                  &nbsp;&nbsp;// Synchronized block<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Volatile Variables
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The volatile keyword ensures visibility of changes across threads:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              public class VolatileExample {<br/>
              &nbsp;&nbsp;// Volatile ensures visibility<br/>
              &nbsp;&nbsp;private volatile boolean running = true;<br/>
              &nbsp;&nbsp;private volatile int counter = 0;<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public void worker() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;while (running) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter++;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Do work<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;public void stop() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;running = false;<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Volatile Property</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Visibility</td>
                    <td class="p-3">Changes are immediately visible to other threads</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Atomicity</td>
                    <td class="p-3">Only guarantees atomic read/write for single variables</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Ordering</td>
                    <td class="p-3">Prevents reordering of instructions</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Use Cases</td>
                    <td class="p-3">Flags, status variables, single assignment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Locks and Explicit Synchronization
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Java's java.util.concurrent.locks package provides more flexible synchronization:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">ReentrantLock</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Explicit lock acquisition and release</li>
                  <li>• Supports fairness policy</li>
                  <li>• Can be acquired with timeout</li>
                  <li>• Provides lock condition variables</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  private final ReentrantLock lock = new ReentrantLock();<br/>
                  <br/>
                  public void doWork() {<br/>
                  &nbsp;&nbsp;lock.lock();<br/>
                  &nbsp;&nbsp;try {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;// Critical section<br/>
                  &nbsp;&nbsp;} finally {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;lock.unlock();<br/>
                  &nbsp;&nbsp;}<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">ReadWriteLock</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Allows concurrent reads</li>
                  <li>• Exclusive writes</li>
                  <li>• Better for read-heavy scenarios</li>
                  <li>• Reduces contention</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  private final ReadWriteLock rwLock = <br/>
                  &nbsp;&nbsp;new ReentrantReadWriteLock();<br/>
                  private final Lock readLock = rwLock.readLock();<br/>
                  private final Lock writeLock = rwLock.writeLock();<br/>
                  <br/>
                  public void read() {<br/>
                  &nbsp;&nbsp;readLock.lock();<br/>
                  &nbsp;&nbsp;try { /* read operations */ }<br/>
                  &nbsp;&nbsp;finally { readLock.unlock(); }<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Common Synchronization Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Established patterns for solving synchronization problems:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Guarded Suspension Pattern<br/>
              synchronized (lock) {<br/>
              &nbsp;&nbsp;while (!condition) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;lock.wait();<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;// Process when condition is met<br/>
              }<br/>
              <br/>
              // Balking Pattern<br/>
              public void service() {<br/>
              &nbsp;&nbsp;if (isShutdown) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return; // Skip if in inappropriate state<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;// Perform service<br/>
              }<br/>
              <br/>
              // Thread-Safe Singleton<br/>
              public class Singleton {<br/>
              &nbsp;&nbsp;private static volatile Singleton instance;<br/>
              &nbsp;&nbsp;public static Singleton getInstance() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (instance == null) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;synchronized (Singleton.class) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (instance == null) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;instance = new Singleton();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return instance;<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Pattern</th>
                    <th class="text-left p-3 font-bold border-b">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Guarded Suspension</td>
                    <td class="p-3">Wait for a condition to be met</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Balking</td>
                    <td class="p-3">Skip action if inappropriate state</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Thread-Safe Singleton</td>
                    <td class="p-3">Ensure single instance in concurrent env</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Producer-Consumer</td>
                    <td class="p-3">Decouple production and consumption</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Thread Synchronization</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use synchronized blocks over synchronized methods</li>
                <li>• Keep synchronized blocks small</li>
                <li>• Always use try-finally with explicit locks</li>
                <li>• Use volatile for simple flag variables</li>
                <li>• Prefer concurrent collections over synchronized ones</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't synchronize on String literals or boxed primitives</li>
                <li>• Don't use wait(), notify() without proper guards</li>
                <li>• Don't forget to unlock explicit locks</li>
                <li>• Don't use busy-waiting loops</li>
                <li>• Don't ignore InterruptedException</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ThreadSynchronizationDemo.java
 * 
 * This comprehensive example demonstrates thread synchronization in Java:
 * - Synchronized methods and blocks
 * - Volatile variables usage
 * - Explicit locks with ReentrantLock
 * - ReadWriteLock for read-heavy scenarios
 * - Common synchronization patterns
 * 
 * Run this program to see thread synchronization in action.
 */

import java.util.concurrent.*;
import java.util.concurrent.locks.*;
import java.util.concurrent.atomic.*;

// Example 1: Race condition demonstration
class Counter {
    private int count = 0;
    
    // Unsynchronized method - prone to race conditions
    public void incrementUnsafe() {
        count++;
    }
    
    // Synchronized method - thread safe
    public synchronized void incrementSafe() {
        count++;
    }
    
    // Synchronized block - thread safe
    public void incrementSafeBlock() {
        synchronized(this) {
            count++;
        }
    }
    
    public int getCount() {
        return count;
    }
    
    public void reset() {
        count = 0;
    }
}

// Example 2: Volatile variables
class VolatileExample {
    private volatile boolean running = true;
    private volatile int counter = 0;
    
    public void worker() {
        System.out.println("Worker thread started");
        while (running) {
            counter++;
            // Simulate some work
            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
        System.out.println("Worker thread stopped, final counter: " + counter);
    }
    
    public void stop() {
        running = false;
        System.out.println("Stop signal sent");
    }
    
    public int getCounter() {
        return counter;
    }
}

// Example 3: ReentrantLock usage
class ReentrantLockExample {
    private final ReentrantLock lock = new ReentrantLock();
    private int count = 0;
    
    public void increment() {
        lock.lock();
        try {
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " acquired lock");
            count++;
            // Simulate some work
            Thread.sleep(100);
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " incremented count to " + count);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            lock.unlock();
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " released lock");
        }
    }
    
    public int getCount() {
        return count;
    }
}

// Example 4: ReadWriteLock usage
class ReadWriteLockExample {
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final Lock readLock = rwLock.readLock();
    private final Lock writeLock = rwLock.writeLock();
    private String data = "Initial Data";
    
    public String readData() {
        readLock.lock();
        try {
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " reading data: " + data);
            // Simulate read operation
            Thread.sleep(50);
            return data;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return null;
        } finally {
            readLock.unlock();
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " finished reading");
        }
    }
    
    public void writeData(String newData) {
        writeLock.lock();
        try {
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " writing data: " + newData);
            data = newData;
            // Simulate write operation
            Thread.sleep(100);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            writeLock.unlock();
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " finished writing");
        }
    }
    
    public String getData() {
        return data;
    }
}

// Example 5: Guarded suspension pattern
class GuardedSuspensionExample {
    private final Object lock = new Object();
    private boolean condition = false;
    private String message = "";
    
    public void waitForCondition() {
        synchronized (lock) {
            while (!condition) {
                try {
                    System.out.println("Thread " + Thread.currentThread().getName() + 
                                     " waiting for condition");
                    lock.wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
            System.out.println("Thread " + Thread.currentThread().getName() + 
                             " received message: " + message);
        }
    }
    
    public void signalCondition(String msg) {
        synchronized (lock) {
            message = msg;
            condition = true;
            System.out.println("Signaling condition with message: " + message);
            lock.notifyAll();
        }
    }
}

// Example 6: Thread-safe singleton
class SingletonExample {
    private static volatile SingletonExample instance;
    
    private SingletonExample() {
        // Private constructor
    }
    
    public static SingletonExample getInstance() {
        if (instance == null) {
            synchronized (SingletonExample.class) {
                if (instance == null) {
                    instance = new SingletonExample();
                }
            }
        }
        return instance;
    }
    
    public void doSomething() {
        System.out.println("Singleton instance doing something in thread " + 
                          Thread.currentThread().getName());
    }
}

public class ThreadSynchronizationDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate race conditions and synchronization
        demonstrateRaceConditions();
        
        // Demonstrate volatile variables
        demonstrateVolatileVariables();
        
        // Demonstrate ReentrantLock
        demonstrateReentrantLock();
        
        // Demonstrate ReadWriteLock
        demonstrateReadWriteLock();
        
        // Demonstrate guarded suspension pattern
        demonstrateGuardedSuspension();
        
        // Demonstrate thread-safe singleton
        demonstrateSingleton();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         THREAD SYNCHRONIZATION DEMO                          ║");
        System.out.println("║         Ensuring thread safety and preventing race conditions║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateRaceConditions() {
        System.out.println("🔸 RACE CONDITIONS AND SYNCHRONIZATION DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────────────");
        
        Counter counter = new Counter();
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        // Demonstrate race condition with unsafe increment
        System.out.println("   Unsafe increment (prone to race conditions):");
        counter.reset();
        for (int i = 0; i < 1000; i++) {
            executor.submit(counter::incrementUnsafe);
        }
        
        // Shutdown executor and wait
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("   Expected count: 1000, Actual count: " + counter.getCount());
        
        // Demonstrate safe increment with synchronized method
        System.out.println("   Safe increment with synchronized method:");
        counter.reset();
        executor = Executors.newFixedThreadPool(5);
        for (int i = 0; i < 1000; i++) {
            executor.submit(counter::incrementSafe);
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("   Expected count: 1000, Actual count: " + counter.getCount());
        
        System.out.println();
    }
    
    private static void demonstrateVolatileVariables() {
        System.out.println("🔸 VOLATILE VARIABLES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        VolatileExample volatileExample = new VolatileExample();
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        // Start worker thread
        Future<?> workerFuture = executor.submit(volatileExample::worker);
        
        // Let worker run for a bit
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Stop worker
        volatileExample.stop();
        
        // Wait for worker to finish
        try {
            workerFuture.get(2, TimeUnit.SECONDS);
        } catch (Exception e) {
            System.out.println("Worker thread did not finish in time");
        }
        
        executor.shutdown();
        System.out.println("Final counter value: " + volatileExample.getCounter());
        System.out.println();
    }
    
    private static void demonstrateReentrantLock() {
        System.out.println("🔸 REENTRANTLOCK DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        ReentrantLockExample lockExample = new ReentrantLockExample();
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Submit multiple tasks that use the same lock
        for (int i = 0; i < 5; i++) {
            executor.submit(lockExample::increment);
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Final count: " + lockExample.getCount());
        System.out.println();
    }
    
    private static void demonstrateReadWriteLock() {
        System.out.println("🔸 READWRITELOCK DEMONSTRATION");
        System.out.println("   ────────────────────────────");
        
        ReadWriteLockExample rwExample = new ReadWriteLockExample();
        ExecutorService executor = Executors.newFixedThreadPool(4);
        
        // Start reader threads
        for (int i = 0; i < 3; i++) {
            final int readerId = i;
            executor.submit(() -> {
                for (int j = 0; j < 2; j++) {
                    rwExample.readData();
                    try {
                        Thread.sleep(50);
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                }
            });
        }
        
        // Start writer thread
        executor.submit(() -> {
            try {
                Thread.sleep(100); // Let readers go first
                rwExample.writeData("Updated Data");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("Final data: " + rwExample.getData());
        System.out.println();
    }
    
    private static void demonstrateGuardedSuspension() {
        System.out.println("🔸 GUARDED SUSPENSION PATTERN DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────────");
        
        GuardedSuspensionExample guardedExample = new GuardedSuspensionExample();
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        // Start waiting thread
        executor.submit(guardedExample::waitForCondition);
        
        // Let the waiting thread start
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Signal the condition
        executor.submit(() -> {
            guardedExample.signalCondition("Hello, World!");
        });
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateSingleton() {
        System.out.println("🔸 THREAD-SAFE SINGLETON DEMONSTRATION");
        System.out.println("   ────────────────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        // Create multiple instances concurrently
        for (int i = 0; i < 10; i++) {
            executor.submit(() -> {
                SingletonExample singleton = SingletonExample.getInstance();
                singleton.doSomething();
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
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
        System.out.println("║  • Race conditions and synchronization                       ║");
        System.out.println("║  • Volatile variables usage                                  ║");
        System.out.println("║  • Explicit locks with ReentrantLock                         ║");
        System.out.println("║  • ReadWriteLock for read-heavy scenarios                    ║");
        System.out.println("║  • Common synchronization patterns                           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Keep synchronized blocks small                           ║");
        System.out.println("║  • Always use try-finally with explicit locks                ║");
        System.out.println("║  • Use volatile for simple flag variables                    ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
exercise: `
1. Create a synchronized method that increments a counter shared between multiple threads.
2. Create a volatile boolean flag that signals one thread to stop when set by another thread.
3. Create a ReentrantLock to protect a critical section and demonstrate proper lock/unlock usage.
4. Create a ReadWriteLock where multiple threads can read simultaneously but only one can write.
5. Create a thread-safe singleton class using double-checked locking.
`
  }
};