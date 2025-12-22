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

`,
exercise: `
1. Create a ConcurrentHashMap and perform concurrent put and get operations from multiple threads.
2. Use an AtomicInteger to implement a thread-safe counter that multiple threads increment.
3. Create a ReentrantLock and demonstrate proper lock/unlock usage in a critical section.
4. Implement a producer-consumer pattern using ArrayBlockingQueue.
5. Use a CountDownLatch to coordinate multiple threads waiting for a signal.
`
  }
};