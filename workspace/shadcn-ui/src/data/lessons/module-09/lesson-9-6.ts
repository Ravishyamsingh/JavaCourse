import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_6: LessonContent = {
  title: 'Concurrent Collections and Utilities',
  type: 'coding',
  duration: '40 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Learn about concurrent collections and utilities in Java. This lesson covers thread-safe collections, atomic variables, locks, and other concurrency utilities for building robust concurrent applications.',
    objectives: [
      'Master concurrent collections and their usage',
      'Understand atomic variables and operations',
      'Learn about different types of locks and their applications',
      'Practice using semaphores, countdown latches, and barriers',
      'Implement thread-safe data structures',
      'Apply best practices for concurrent programming'
    ],
    theory: `
      <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Concurrent Collections and Utilities
        </h1>
        <p class="mt-3 text-teal-100 text-lg">Building robust concurrent applications with thread-safe components</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Concurrent Collections
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Java's java.util.concurrent package provides thread-safe alternatives to the traditional collections. 
            These collections are designed for concurrent access and provide better performance than simply 
            synchronizing traditional collections.
          </p>
          <div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400 mb-4">
            <h4 class="font-bold text-teal-800 mb-2">💡 Key Concept</h4>
            <p class="text-teal-700">Concurrent collections use sophisticated algorithms that allow multiple threads to access them simultaneously while maintaining thread safety and performance.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Core Concurrent Collections
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding the fundamental concurrent collections:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">ConcurrentHashMap</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Thread-safe implementation of Map</li>
                  <li>• Supports concurrent reads and writes</li>
                  <li>• Better performance than Hashtable</li>
                  <li>• Provides atomic operations</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ConcurrentHashMap<String, Integer> map = <br/>
                  &nbsp;&nbsp;new ConcurrentHashMap<>();<br/>
                  map.putIfAbsent("key", 1);<br/>
                  map.computeIfPresent("key", (k, v) -> v + 1);
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">CopyOnWriteArrayList</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Thread-safe List implementation</li>
                  <li>• Safe for traversal during modifications</li>
                  <li>• Best for read-heavy scenarios</li>
                  <li>• Modifications create new copy</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  CopyOnWriteArrayList<String> list = <br/>
                  &nbsp;&nbsp;new CopyOnWriteArrayList<>();<br/>
                  list.add("item");<br/>
                  for (String item : list) {<br/>
                  &nbsp;&nbsp;// Safe iteration even if list is modified<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Atomic Variables
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Using atomic variables for lock-free programming:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              import java.util.concurrent.atomic.*;<br/>
              <br/>
              // Atomic integer operations<br/>
              AtomicInteger atomicInt = new AtomicInteger(0);<br/>
              int newValue = atomicInt.incrementAndGet();<br/>
              boolean success = atomicInt.compareAndSet(1, 5);<br/>
              <br/>
              // Atomic reference operations<br/>
              AtomicReference<String> atomicRef = <br/>
              &nbsp;&nbsp;new AtomicReference<>("initial");<br/>
              String oldValue = atomicRef.getAndSet("new");<br/>
              <br/>
              // Atomic array operations<br/>
              AtomicIntegerArray array = <br/>
              &nbsp;&nbsp;new AtomicIntegerArray(10);<br/>
              array.incrementAndGet(0);
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Atomic Class</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Key Methods</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">AtomicInteger</td>
                    <td class="p-3">Atomic integer operations</td>
                    <td class="p-3">incrementAndGet, compareAndSet</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">AtomicLong</td>
                    <td class="p-3">Atomic long operations</td>
                    <td class="p-3">getAndAdd, compareAndSet</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">AtomicReference</td>
                    <td class="p-3">Atomic reference operations</td>
                    <td class="p-3">getAndSet, compareAndSet</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">AtomicBoolean</td>
                    <td class="p-3">Atomic boolean operations</td>
                    <td class="p-3">getAndSet, compareAndSet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Locks and Synchronization Utilities
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Advanced synchronization mechanisms beyond synchronized:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">ReentrantLock</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Explicit locking mechanism</li>
                  <li>• Supports fairness policy</li>
                  <li>• Can be acquired with timeout</li>
                  <li>• Provides lock condition variables</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ReentrantLock lock = new ReentrantLock();<br/>
                  lock.lock();<br/>
                  try {<br/>
                  &nbsp;&nbsp;// Critical section<br/>
                  } finally {<br/>
                  &nbsp;&nbsp;lock.unlock();<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Synchronization Utilities</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Semaphore - Controls access to resources</li>
                  <li>• CountDownLatch - Allows threads to wait</li>
                  <li>• CyclicBarrier - Coordinates multiple threads</li>
                  <li>• Phaser - More flexible barrier</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Semaphore semaphore = new Semaphore(3);<br/>
                  CountDownLatch latch = new CountDownLatch(5);<br/>
                  CyclicBarrier barrier = new CyclicBarrier(3);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Blocking Queues and Thread-Safe Collections
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Collections designed for producer-consumer patterns:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Different types of blocking queues<br/>
              BlockingQueue<String> arrayQueue = <br/>
              &nbsp;&nbsp;new ArrayBlockingQueue<>(10);<br/>
              BlockingQueue<String> linkedQueue = <br/>
              &nbsp;&nbsp;new LinkedBlockingQueue<>(100);<br/>
              BlockingQueue<String> synchronousQueue = <br/>
              &nbsp;&nbsp;new SynchronousQueue<>();<br/>
              <br/>
              // Thread-safe collections<br/>
              ConcurrentLinkedQueue<String> queue = <br/>
              &nbsp;&nbsp;new ConcurrentLinkedQueue<>();<br/>
              ConcurrentSkipListMap<String, Integer> skipListMap = <br/>
              &nbsp;&nbsp;new ConcurrentSkipListMap<>();
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-indigo-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Collection</th>
                    <th class="text-left p-3 font-bold border-b">Characteristics</th>
                    <th class="text-left p-3 font-bold border-b">Use Cases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">ArrayBlockingQueue</td>
                    <td class="p-3">Bounded, FIFO queue</td>
                    <td class="p-3">Fixed-size buffer</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">LinkedBlockingQueue</td>
                    <td class="p-3">Optionally bounded, FIFO</td>
                    <td class="p-3">Variable-size buffer</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">SynchronousQueue</td>
                    <td class="p-3">Direct handoff</td>
                    <td class="p-3">Direct thread-to-thread</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">ConcurrentLinkedQueue</td>
                    <td class="p-3">Unbounded, non-blocking</td>
                    <td class="p-3">High-performance queue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Concurrent Collections</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Prefer concurrent collections over synchronized ones</li>
                <li>• Use atomic variables for simple shared state</li>
                <li>• Choose the right collection for your use case</li>
                <li>• Use blocking queues for producer-consumer patterns</li>
                <li>• Handle InterruptedException properly</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use Collections.synchronized* unnecessarily</li>
                <li>• Don't ignore the performance characteristics</li>
                <li>• Don't use blocking operations without timeouts</li>
                <li>• Don't assume iteration is atomic</li>
                <li>• Don't use deprecated synchronization methods</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ConcurrentCollectionsDemo.java
 * 
 * This comprehensive example demonstrates concurrent collections and utilities in Java:
 * - Thread-safe collections usage
 * - Atomic variables for lock-free programming
 * - Advanced locking mechanisms
 * - Synchronization utilities
 * - Producer-consumer patterns
 * 
 * Run this program to see concurrent collections in action.
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.concurrent.locks.*;

// Thread-safe counter using different approaches
class CounterDemo {
    private int synchronizedCounter = 0;
    private final AtomicInteger atomicCounter = new AtomicInteger(0);
    private final LongAdder adderCounter = new LongAdder();
    
    // Synchronized approach
    public synchronized void incrementSync() {
        synchronizedCounter++;
    }
    
    public synchronized int getSyncCount() {
        return synchronizedCounter;
    }
    
    // Atomic approach
    public void incrementAtomic() {
        atomicCounter.incrementAndGet();
    }
    
    public int getAtomicCount() {
        return atomicCounter.get();
    }
    
    // LongAdder approach
    public void incrementAdder() {
        adderCounter.increment();
    }
    
    public long getAdderCount() {
        return adderCounter.sum();
    }
}

// Producer-Consumer with different queue types
class QueueDemo {
    private final BlockingQueue<String> arrayQueue = new ArrayBlockingQueue<>(5);
    private final BlockingQueue<String> linkedQueue = new LinkedBlockingQueue<>(10);
    private final SynchronousQueue<String> syncQueue = new SynchronousQueue<>();
    
    public void demonstrateArrayQueue() {
        System.out.println("🔸 ArrayBlockingQueue Demo:");
        
        // Producer
        Thread producer = new Thread(() -> {
            try {
                for (int i = 1; i <= 7; i++) {
                    arrayQueue.put("Item-" + i);
                    System.out.println("   Produced: Item-" + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        // Consumer
        Thread consumer = new Thread(() -> {
            try {
                for (int i = 1; i <= 7; i++) {
                    String item = arrayQueue.take();
                    System.out.println("   Consumed: " + item);
                    Thread.sleep(150);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        producer.start();
        consumer.start();
        
        try {
            producer.join();
            consumer.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    public void demonstrateLinkedQueue() {
        System.out.println("🔸 LinkedBlockingQueue Demo:");
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Producer tasks
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                try {
                    linkedQueue.put("Task-" + taskId);
                    System.out.println("   Producer submitted: Task-" + taskId);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        // Consumer tasks
        for (int i = 1; i <= 5; i++) {
            executor.submit(() -> {
                try {
                    String task = linkedQueue.take();
                    System.out.println("   Consumer processed: " + task);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
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
}

// ConcurrentHashMap demo
class ConcurrentHashMapDemo {
    private final ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
    
    public void demonstrateConcurrentHashMap() {
        System.out.println("🔸 ConcurrentHashMap Demo:");
        
        // Multiple threads updating the map
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        // Populate map with initial values
        for (int i = 1; i <= 5; i++) {
            map.put("Key-" + i, i * 10);
        }
        
        // Concurrent updates
        for (int i = 1; i <= 10; i++) {
            final int taskId = i;
            executor.submit(() -> {
                // Atomic operations
                map.computeIfAbsent("Thread-" + taskId, k -> taskId);
                map.computeIfPresent("Key-" + (taskId % 5 + 1), (k, v) -> v + taskId);
                
                // putIfAbsent
                map.putIfAbsent("NewKey-" + taskId, taskId * 2);
                
                System.out.println("   Thread-" + taskId + " updated map");
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Display final state
        System.out.println("   Final map contents:");
        map.forEach((key, value) -> 
            System.out.println("     " + key + " = " + value));
        
        System.out.println();
    }
}

// ReentrantLock demo
class ReentrantLockDemo {
    private final ReentrantLock lock = new ReentrantLock();
    private int sharedResource = 0;
    
    public void demonstrateReentrantLock() {
        System.out.println("🔸 ReentrantLock Demo:");
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Tasks that use the lock
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                lock.lock();
                try {
                    System.out.println("   Thread-" + taskId + " acquired lock");
                    sharedResource += taskId;
                    Thread.sleep(500); // Simulate work
                    System.out.println("   Thread-" + taskId + " releasing lock");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    lock.unlock();
                }
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("   Final shared resource value: " + sharedResource);
        System.out.println();
    }
}

// Synchronization utilities demo
class SyncUtilitiesDemo {
    public void demonstrateCountDownLatch() {
        System.out.println("🔸 CountDownLatch Demo:");
        
        CountDownLatch latch = new CountDownLatch(3);
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Worker threads
        for (int i = 1; i <= 3; i++) {
            final int workerId = i;
            executor.submit(() -> {
                try {
                    System.out.println("   Worker-" + workerId + " starting work");
                    Thread.sleep(1000 * workerId); // Different work times
                    System.out.println("   Worker-" + workerId + " finished");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    latch.countDown();
                }
            });
        }
        
        // Main thread waits for workers
        try {
            System.out.println("   Main thread waiting for workers...");
            latch.await();
            System.out.println("   All workers completed!");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        executor.shutdown();
        System.out.println();
    }
    
    public void demonstrateCyclicBarrier() {
        System.out.println("🔸 CyclicBarrier Demo:");
        
        CyclicBarrier barrier = new CyclicBarrier(3, () -> {
            System.out.println("   All threads reached barrier - executing barrier action");
        });
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Threads that wait at barrier
        for (int i = 1; i <= 3; i++) {
            final int threadId = i;
            executor.submit(() -> {
                try {
                    System.out.println("   Thread-" + threadId + " doing first phase work");
                    Thread.sleep(1000 * threadId);
                    System.out.println("   Thread-" + threadId + " waiting at barrier");
                    barrier.await();
                    
                    System.out.println("   Thread-" + threadId + " doing second phase work");
                    Thread.sleep(500);
                    System.out.println("   Thread-" + threadId + " completed second phase");
                } catch (InterruptedException | BrokenBarrierException e) {
                    Thread.currentThread().interrupt();
                }
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
    
    public void demonstrateSemaphore() {
        System.out.println("🔸 Semaphore Demo:");
        
        Semaphore semaphore = new Semaphore(2); // Allow 2 permits
        
        ExecutorService executor = Executors.newFixedThreadPool(5);
        
        // Tasks that need to acquire semaphore
        for (int i = 1; i <= 5; i++) {
            final int taskId = i;
            executor.submit(() -> {
                try {
                    System.out.println("   Task-" + taskId + " waiting for permit");
                    semaphore.acquire();
                    System.out.println("   Task-" + taskId + " acquired permit");
                    
                    // Simulate work that needs limited resources
                    Thread.sleep(2000);
                    
                    System.out.println("   Task-" + taskId + " releasing permit");
                    semaphore.release();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(15, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
}

// CopyOnWriteArrayList demo
class CopyOnWriteDemo {
    private final CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
    
    public void demonstrateCopyOnWrite() {
        System.out.println("🔸 CopyOnWriteArrayList Demo:");
        
        // Add initial items
        list.add("Initial-1");
        list.add("Initial-2");
        
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Reader thread - safe iteration
        executor.submit(() -> {
            System.out.println("   Reader thread started iteration");
            for (String item : list) {
                System.out.println("   Reader found: " + item);
                try {
                    Thread.sleep(100); // Simulate processing time
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
            System.out.println("   Reader thread finished iteration");
        });
        
        // Writer threads - modify while reading
        for (int i = 1; i <= 3; i++) {
            final int writerId = i;
            executor.submit(() -> {
                try {
                    Thread.sleep(200 * writerId); // Stagger writes
                    list.add("Writer-" + writerId + "-Item");
                    System.out.println("   Writer-" + writerId + " added item");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("   Final list contents: " + list);
        System.out.println();
    }
}

public class ConcurrentCollectionsDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate different counter implementations
        demonstrateCounters();
        
        // Demonstrate queue implementations
        demonstrateQueues();
        
        // Demonstrate ConcurrentHashMap
        demonstrateConcurrentHashMap();
        
        // Demonstrate ReentrantLock
        demonstrateReentrantLock();
        
        // Demonstrate synchronization utilities
        demonstrateSyncUtilities();
        
        // Demonstrate CopyOnWriteArrayList
        demonstrateCopyOnWrite();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         CONCURRENT COLLECTIONS DEMO                          ║");
        System.out.println("║         Thread-safe collections and concurrency utilities    ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateCounters() {
        System.out.println("🔸 COUNTER IMPLEMENTATIONS COMPARISON");
        System.out.println("   ──────────────────────────────────");
        
        CounterDemo counter = new CounterDemo();
        ExecutorService executor = Executors.newFixedThreadPool(10);
        
        // Test synchronized counter
        System.out.println("   Testing synchronized counter:");
        for (int i = 0; i < 1000; i++) {
            executor.submit(counter::incrementSync);
        }
        
        // Test atomic counter
        System.out.println("   Testing atomic counter:");
        for (int i = 0; i < 1000; i++) {
            executor.submit(counter::incrementAtomic);
        }
        
        // Test LongAdder counter
        System.out.println("   Testing LongAdder counter:");
        for (int i = 0; i < 1000; i++) {
            executor.submit(counter::incrementAdder);
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("   Synchronized counter result: " + counter.getSyncCount());
        System.out.println("   Atomic counter result: " + counter.getAtomicCount());
        System.out.println("   LongAdder counter result: " + counter.getAdderCount());
        System.out.println();
    }
    
    private static void demonstrateQueues() {
        QueueDemo queueDemo = new QueueDemo();
        queueDemo.demonstrateArrayQueue();
        queueDemo.demonstrateLinkedQueue();
    }
    
    private static void demonstrateConcurrentHashMap() {
        ConcurrentHashMapDemo mapDemo = new ConcurrentHashMapDemo();
        mapDemo.demonstrateConcurrentHashMap();
    }
    
    private static void demonstrateReentrantLock() {
        ReentrantLockDemo lockDemo = new ReentrantLockDemo();
        lockDemo.demonstrateReentrantLock();
    }
    
    private static void demonstrateSyncUtilities() {
        SyncUtilitiesDemo syncDemo = new SyncUtilitiesDemo();
        syncDemo.demonstrateCountDownLatch();
        syncDemo.demonstrateCyclicBarrier();
        syncDemo.demonstrateSemaphore();
    }
    
    private static void demonstrateCopyOnWrite() {
        CopyOnWriteDemo copyDemo = new CopyOnWriteDemo();
        copyDemo.demonstrateCopyOnWrite();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Thread-safe collections usage                             ║");
        System.out.println("║  • Atomic variables for lock-free programming                ║");
        System.out.println("║  • Advanced locking mechanisms                               ║");
        System.out.println("║  • Synchronization utilities                                 ║");
        System.out.println("║  • Producer-consumer patterns                                ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Prefer concurrent collections over synchronized ones      ║");
        System.out.println("║  • Use atomic variables for simple shared state              ║");
        System.out.println("║  • Choose the right collection for your use case             ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         CONCURRENT COLLECTIONS DEMO                          ║
 * ║         Thread-safe collections and concurrency utilities    ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 COUNTER IMPLEMENTATIONS COMPARISON
 *    ──────────────────────────────────
 *    Testing synchronized counter:
 *    Testing atomic counter:
 *    Testing LongAdder counter:
 *    Synchronized counter result: 1000
 *    Atomic counter result: 1000
 *    LongAdder counter result: 1000
 * 
 * 🔸 ArrayBlockingQueue Demo:
 *    Produced: Item-1
 *    Consumed: Item-1
 *    Produced: Item-2
 *    Consumed: Item-2
 *    Produced: Item-3
 *    Consumed: Item-3
 *    Produced: Item-4
 *    Consumed: Item-4
 *    Produced: Item-5
 *    Consumed: Item-5
 *    Produced: Item-6
 *    Consumed: Item-6
 *    Produced: Item-7
 *    Consumed: Item-7
 * 
 * 🔸 LinkedBlockingQueue Demo:
 *    Producer submitted: Task-1
 *    Consumer processed: Task-1
 *    Producer submitted: Task-2
 *    Consumer processed: Task-2
 *    Producer submitted: Task-3
 *    Consumer processed: Task-3
 *    Producer submitted: Task-4
 *    Consumer processed: Task-4
 *    Producer submitted: Task-5
 *    Consumer processed: Task-5
 * 
 * 🔸 ConcurrentHashMap Demo:
 *    Thread-1 updated map
 *    Thread-2 updated map
 *    Thread-3 updated map
 *    Thread-4 updated map
 *    Thread-5 updated map
 *    Thread-6 updated map
 *    Thread-7 updated map
 *    Thread-8 updated map
 *    Thread-9 updated map
 *    Thread-10 updated map
 *    Final map contents:
 *      Key-1 = 37
 *      Key-2 = 40
 *      Key-3 = 43
 *      Key-4 = 46
 *      Key-5 = 50
 *      Thread-1 = 1
 *      Thread-2 = 2
 *      Thread-3 = 3
 *      Thread-4 = 4
 *      Thread-5 = 5
 *      NewKey-1 = 2
 *      NewKey-2 = 4
 *      NewKey-3 = 6
 *      NewKey-4 = 8
 *      NewKey-5 = 10
 * 
 * 🔸 ReentrantLock Demo:
 *    Thread-1 acquired lock
 *    Thread-1 releasing lock
 *    Thread-2 acquired lock
 *    Thread-2 releasing lock
 *    Thread-3 acquired lock
 *    Thread-3 releasing lock
 *    Final shared resource value: 15
 * 
 * 🔸 CountDownLatch Demo:
 *    Main thread waiting for workers...
 *    Worker-1 starting work
 *    Worker-2 starting work
 *    Worker-3 starting work
 *    Worker-1 finished
 *    Worker-2 finished
 *    Worker-3 finished
 *    All workers completed!
 * 
 * 🔸 CyclicBarrier Demo:
 *    Thread-1 doing first phase work
 *    Thread-2 doing first phase work
 *    Thread-3 doing first phase work
 *    Thread-1 waiting at barrier
 *    Thread-2 waiting at barrier
 *    Thread-3 waiting at barrier
 *    All threads reached barrier - executing barrier action
 *    Thread-3 doing second phase work
 *    Thread-1 doing second phase work
 *    Thread-2 doing second phase work
 *    Thread-3 completed second phase
 *    Thread-1 completed second phase
 *    Thread-2 completed second phase
 * 
 * 🔸 Semaphore Demo:
 *    Task-1 waiting for permit
 *    Task-2 waiting for permit
 *    Task-1 acquired permit
 *    Task-2 acquired permit
 *    Task-3 waiting for permit
 *    Task-4 waiting for permit
 *    Task-5 waiting for permit
 *    Task-1 releasing permit
 *    Task-2 releasing permit
 *    Task-3 acquired permit
 *    Task-4 acquired permit
 *    Task-3 releasing permit
 *    Task-4 releasing permit
 *    Task-5 acquired permit
 *    Task-5 releasing permit
 * 
 * 🔸 CopyOnWriteArrayList Demo:
 *    Reader thread started iteration
 *    Reader found: Initial-1
 *    Writer-1 added item
 *    Reader found: Initial-2
 *    Writer-2 added item
 *    Reader found: Writer-1-Item
 *    Writer-3 added item
 *    Reader thread finished iteration
 *    Final list contents: [Initial-1, Initial-2, Writer-1-Item, Writer-2-Item, Writer-3-Item]
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Concurrent Collections Practice Exercise**

      Create comprehensive programs to practice concurrent collections and utilities in Java.

      **Part 1: Thread-Safe Data Structure Library**
      
      Create a program called \`ThreadSafeDataStructures.java\` that implements a library of thread-safe data structures:
      
      Requirements:
      - Implement thread-safe versions of common data structures
      - Use appropriate concurrent collections for each use case
      - Add performance monitoring and metrics
      - Include comprehensive testing
      
      Features to implement:
      - Thread-safe List, Map, Set implementations
      - Performance benchmarking
      - Memory usage tracking
      - Error handling and recovery

      **Part 2: Atomic Operations Manager**
      
      Create a program called \`AtomicOperationsManager.java\` that manages atomic operations:
      
      Requirements:
      - Create a system for managing atomic variables
      - Implement various atomic operations patterns
      - Add performance optimization techniques
      - Include comprehensive documentation
      
      Advanced Features:
      - Atomic reference management
      - Performance comparison tools
      - Memory usage optimization
      - Scalability testing

      **Part 3: Lock-Based Resource Manager**
      
      Create a program called \`LockBasedResourceManager.java\` that manages resources using locks:
      
      Requirements:
      - Create a system that manages resources with different lock types
      - Implement fair and unfair locking strategies
      - Add timeout-based lock acquisition
      - Include resource monitoring
      
      Features to implement:
      - ReentrantLock management
      - ReadWriteLock implementation
      - StampedLock usage
      - Performance optimization

      **Part 4: Synchronization Utilities Coordinator**
      
      Create a program called \`SyncUtilitiesCoordinator.java\` that coordinates threads using synchronization utilities:
      
      Requirements:
      - Create a system that uses various synchronization utilities
      - Implement different coordination patterns
      - Add timeout-based coordination
      - Include coordination monitoring
      
      Advanced Features:
      - CountDownLatch coordination
      - CyclicBarrier management
      - Semaphore control
      - Phaser implementation

      **Part 5: Concurrent Collections Dashboard**
      
      Create a program called \`ConcurrentCollectionsDashboard.java\` that provides a comprehensive monitoring interface:
      
      Requirements:
      - Create a dashboard for monitoring all concurrent collections
      - Implement real-time collection status display
      - Add performance analytics and metrics
      - Include alert and notification system
      
      Features to implement:
      - Real-time monitoring
      - Performance analytics
      - Alert and notification system
      - Resource usage tracking

      **Deliverables:**
      Submit the following files:
      1. \`ThreadSafeDataStructures.java\` - Thread-safe data structures library
      2. \`AtomicOperationsManager.java\` - Atomic operations manager
      3. \`LockBasedResourceManager.java\` - Lock-based resource manager
      4. \`SyncUtilitiesCoordinator.java\` - Synchronization utilities coordinator
      5. \`ConcurrentCollectionsDashboard.java\` - Concurrent collections monitoring dashboard
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Mastery of concurrent collections
      - ✅ Understanding of atomic variables
      - ✅ Proper use of locks and synchronization utilities
      - ✅ Implementation of thread-safe data structures
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive concurrent programming capabilities
      - ✅ Application of best practices for concurrency

      **💡 Bonus Challenges:**
      
      1. Advanced Collection Patterns: Implement sophisticated concurrent collection patterns
      2. Performance Optimization: Add performance tracking to concurrent operations
      3. Error Handling: Add comprehensive error handling to concurrent operations
      4. Resource Management: Implement efficient concurrent resource management
      5. Extensibility: Create frameworks for reusable concurrent components
    `
  }
};