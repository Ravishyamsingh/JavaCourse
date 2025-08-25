import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_4: LessonContent = {
  title: 'Inter-thread Communication',
  type: 'coding',
  duration: '30 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Learn inter-thread communication in Java. This lesson covers wait/notify mechanisms, thread coordination patterns, blocking queues, and best practices for effective thread communication.',
    objectives: [
      'Master wait() and notify() methods for thread coordination',
      'Understand thread communication patterns',
      'Learn to use blocking queues for inter-thread communication',
      'Practice with condition variables and locks',
      'Implement producer-consumer patterns',
      'Apply best practices for inter-thread communication'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Inter-thread Communication
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Coordinating threads and enabling effective communication</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Inter-thread Communication
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Inter-thread communication is the mechanism that allows threads to coordinate their actions and 
            exchange information. Java provides several built-in mechanisms for this purpose, including 
            wait/notify, blocking queues, and condition variables.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">Effective inter-thread communication prevents busy-waiting and enables efficient resource utilization through proper coordination.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Wait and Notify Mechanisms
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The fundamental wait/notify mechanism for thread coordination:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">wait() Method</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Releases the lock and waits for notification</li>
                  <li>• Must be called within synchronized block</li>
                  <li>• Can specify timeout period</li>
                  <li>• Throws InterruptedException</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  synchronized(lock) {<br/>
                  &nbsp;&nbsp;while (!condition) {<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;lock.wait();<br/>
                  &nbsp;&nbsp;}<br/>
                  &nbsp;&nbsp;// Process when condition is met<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">notify() and notifyAll()</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• notify() - Wakes up single waiting thread</li>
                  <li>• notifyAll() - Wakes up all waiting threads</li>
                  <li>• Must be called within synchronized block</li>
                  <li>• Usually called after changing condition</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  synchronized(lock) {<br/>
                  &nbsp;&nbsp;// Change condition<br/>
                  &nbsp;&nbsp;condition = true;<br/>
                  &nbsp;&nbsp;// Notify waiting threads<br/>
                  &nbsp;&nbsp;lock.notifyAll();<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Blocking Queues
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">High-level abstractions for producer-consumer patterns:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Creating different types of blocking queues<br/>
              BlockingQueue<String> arrayQueue = <br/>
              &nbsp;&nbsp;new ArrayBlockingQueue<>(10);<br/>
              BlockingQueue<String> linkedQueue = <br/>
              &nbsp;&nbsp;new LinkedBlockingQueue<>();<br/>
              BlockingQueue<String> syncQueue = <br/>
              &nbsp;&nbsp;new SynchronousQueue<>();<br/>
              <br/>
              // Producer<br/>
              arrayQueue.put("Item");<br/>
              <br/>
              // Consumer<br/>
              String item = arrayQueue.take();
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Queue Type</th>
                    <th class="text-left p-3 font-bold border-b">Characteristics</th>
                    <th class="text-left p-3 font-bold border-b">Use Cases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">ArrayBlockingQueue</td>
                    <td class="p-3">Bounded, FIFO</td>
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
                    <td class="p-3 font-mono">PriorityBlockingQueue</td>
                    <td class="p-3">Priority-based ordering</td>
                    <td class="p-3">Priority-based processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Condition Variables
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Advanced coordination with explicit locks:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Condition Basics</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Associated with ReentrantLock</li>
                  <li>• Multiple conditions per lock</li>
                  <li>• More flexible than wait/notify</li>
                  <li>• Better performance in some cases</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  private final ReentrantLock lock = new ReentrantLock();<br/>
                  private final Condition condition = lock.newCondition();<br/>
                  <br/>
                  // Waiting<br/>
                  lock.lock();<br/>
                  try {<br/>
                  &nbsp;&nbsp;while (!ready) condition.await();<br/>
                  } finally {<br/>
                  &nbsp;&nbsp;lock.unlock();<br/>
                  }<br/>
                  <br/>
                  // Signaling<br/>
                  lock.lock();<br/>
                  try {<br/>
                  &nbsp;&nbsp;ready = true;<br/>
                  &nbsp;&nbsp;condition.signalAll();<br/>
                  } finally {<br/>
                  &nbsp;&nbsp;lock.unlock();<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Multiple Conditions</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Different conditions for different events</li>
                  <li>• More precise thread coordination</li>
                  <li>• Reduced unnecessary wakeups</li>
                  <li>• Better resource utilization</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  private final Condition notFull = lock.newCondition();<br/>
                  private final Condition notEmpty = lock.newCondition();<br/>
                  <br/>
                  // Producer waits when full<br/>
                  while (isFull()) notFull.await();<br/>
                  <br/>
                  // Consumer waits when empty<br/>
                  while (isEmpty()) notEmpty.await();
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Producer-Consumer Pattern
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Classic pattern for inter-thread communication:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              public class ProducerConsumerExample {<br/>
              &nbsp;&nbsp;private final BlockingQueue<String> queue = <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;new ArrayBlockingQueue<>(10);<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;// Producer<br/>
              &nbsp;&nbsp;class Producer implements Runnable {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;public void run() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 0; i < 100; i++) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;queue.put("Item-" + i);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Produced: Item-" + i);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (InterruptedException e) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thread.currentThread().interrupt();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;// Consumer<br/>
              &nbsp;&nbsp;class Consumer implements Runnable {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;public void run() {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while (true) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String item = queue.take();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Consumed: " + item);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} catch (InterruptedException e) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thread.currentThread().interrupt();<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-cyan-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Component</th>
                    <th class="text-left p-3 font-bold border-b">Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Producer</td>
                    <td class="p-3">Creates and adds items to shared buffer</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Consumer</td>
                    <td class="p-3">Removes and processes items from shared buffer</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Buffer/Queue</td>
                    <td class="p-3">Shared data structure for item exchange</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Synchronization</td>
                    <td class="p-3">Ensures thread-safe access to shared buffer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Inter-thread Communication</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always use while loops with wait() to check conditions</li>
                <li>• Prefer blocking queues over low-level wait/notify</li>
                <li>• Use condition variables with explicit locks for complex scenarios</li>
                <li>• Handle InterruptedException properly</li>
                <li>• Use notifyAll() instead of notify() unless you're certain</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use wait() without proper synchronization</li>
                <li>• Don't forget to check conditions after wait() returns</li>
                <li>• Don't use busy-waiting loops</li>
                <li>• Don't ignore InterruptedException</li>
                <li>• Don't use deprecated thread methods</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * InterThreadCommunicationDemo.java
 * 
 * This comprehensive example demonstrates inter-thread communication in Java:
 * - Wait and notify mechanisms
 * - Blocking queues for producer-consumer patterns
 * - Condition variables with explicit locks
 * - Producer-consumer implementations
 * - Best practices for thread coordination
 * 
 * Run this program to see inter-thread communication in action.
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.locks.*;

// Example 1: Basic wait/notify mechanism
class BasicWaitNotifyExample {
    private final Object lock = new Object();
    private boolean ready = false;
    private String message = "";
    
    public void waitForMessage() {
        synchronized (lock) {
            while (!ready) {
                try {
                    System.out.println("Thread " + Thread.currentThread().getName() + 
                                     " waiting for message");
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
    
    public void sendMessage(String msg) {
        synchronized (lock) {
            message = msg;
            ready = true;
            System.out.println("Sending message: " + message);
            lock.notifyAll();
        }
    }
}

// Example 2: Producer-Consumer with BlockingQueue
class BlockingQueueExample {
    private final BlockingQueue<String> queue;
    private final int itemsToProcess;
    
    public BlockingQueueExample(int queueSize, int itemsToProcess) {
        this.queue = new ArrayBlockingQueue<>(queueSize);
        this.itemsToProcess = itemsToProcess;
    }
    
    class Producer implements Runnable {
        @Override
        public void run() {
            try {
                for (int i = 1; i <= itemsToProcess; i++) {
                    String item = "Item-" + i;
                    queue.put(item);
                    System.out.println("Produced: " + item + 
                                     " (Queue size: " + queue.size() + ")");
                    Thread.sleep(100); // Simulate production time
                }
                // Send poison pill to signal end
                queue.put("DONE");
                System.out.println("Producer finished");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    class Consumer implements Runnable {
        private final String name;
        
        public Consumer(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            try {
                while (true) {
                    String item = queue.take();
                    if ("DONE".equals(item)) {
                        // Put the poison pill back for other consumers
                        queue.put("DONE");
                        System.out.println(name + " finished");
                        break;
                    }
                    System.out.println(name + " consumed: " + item + 
                                     " (Queue size: " + queue.size() + ")");
                    Thread.sleep(150); // Simulate consumption time
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    public void demonstrate() {
        System.out.println("🔸 BLOCKING QUEUE DEMONSTRATION");
        System.out.println("   ─────────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(4);
        
        // Start producer
        executor.submit(new Producer());
        
        // Start consumers
        executor.submit(new Consumer("Consumer-1"));
        executor.submit(new Consumer("Consumer-2"));
        
        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
}

// Example 3: Condition variables with ReentrantLock
class ConditionVariableExample {
    private final ReentrantLock lock = new ReentrantLock();
    private final Condition notFull = lock.newCondition();
    private final Condition notEmpty = lock.newCondition();
    private final String[] buffer = new String[5];
    private int count = 0;
    private int in = 0;
    private int out = 0;
    
    class Producer implements Runnable {
        private final String name;
        private final int itemsToProduce;
        
        public Producer(String name, int itemsToProduce) {
            this.name = name;
            this.itemsToProduce = itemsToProduce;
        }
        
        @Override
        public void run() {
            try {
                for (int i = 1; i <= itemsToProduce; i++) {
                    lock.lock();
                    try {
                        // Wait while buffer is full
                        while (count == buffer.length) {
                            System.out.println(name + " waiting - buffer full");
                            notFull.await();
                        }
                        
                        // Add item to buffer
                        String item = name + "-Item-" + i;
                        buffer[in] = item;
                        in = (in + 1) % buffer.length;
                        count++;
                        
                        System.out.println(name + " produced: " + item + 
                                         " (Buffer count: " + count + ")");
                        
                        // Signal that buffer is not empty
                        notEmpty.signalAll();
                    } finally {
                        lock.unlock();
                    }
                    
                    Thread.sleep(200); // Simulate production time
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    class Consumer implements Runnable {
        private final String name;
        
        public Consumer(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            try {
                while (true) {
                    lock.lock();
                    try {
                        // Wait while buffer is empty
                        while (count == 0) {
                            System.out.println(name + " waiting - buffer empty");
                            notEmpty.await();
                        }
                        
                        // Remove item from buffer
                        String item = buffer[out];
                        buffer[out] = null;
                        out = (out + 1) % buffer.length;
                        count--;
                        
                        System.out.println(name + " consumed: " + item + 
                                         " (Buffer count: " + count + ")");
                        
                        // Check for poison pill
                        if ("END".equals(item)) {
                            System.out.println(name + " received END signal");
                            notFull.signalAll(); // Wake up any waiting producers
                            break;
                        }
                        
                        // Signal that buffer is not full
                        notFull.signalAll();
                    } finally {
                        lock.unlock();
                    }
                    
                    Thread.sleep(300); // Simulate consumption time
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    public void demonstrate() {
        System.out.println("🔸 CONDITION VARIABLES DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(4);
        
        // Start producers
        executor.submit(new Producer("Producer-1", 3));
        executor.submit(new Producer("Producer-2", 3));
        
        // Start consumers
        executor.submit(new Consumer("Consumer-1"));
        executor.submit(new Consumer("Consumer-2"));
        
        // Send END signal after some time
        executor.submit(() -> {
            try {
                Thread.sleep(3000);
                lock.lock();
                try {
                    // Add poison pill
                    while (count == buffer.length) {
                        notFull.await();
                    }
                    buffer[in] = "END";
                    in = (in + 1) % buffer.length;
                    count++;
                    System.out.println("END signal added to buffer");
                    notEmpty.signalAll();
                } finally {
                    lock.unlock();
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });
        
        executor.shutdown();
        try {
            executor.awaitTermination(15, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
}

// Example 4: SynchronousQueue example
class SynchronousQueueExample {
    private final SynchronousQueue<String> queue = new SynchronousQueue<>();
    
    class Sender implements Runnable {
        @Override
        public void run() {
            try {
                for (int i = 1; i <= 3; i++) {
                    String message = "Message-" + i;
                    System.out.println("Sender sending: " + message);
                    queue.put(message); // Blocks until receiver takes
                    System.out.println("Sender sent: " + message);
                    Thread.sleep(500);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    class Receiver implements Runnable {
        private final String name;
        
        public Receiver(String name) {
            this.name = name;
        }
        
        @Override
        public void run() {
            try {
                for (int i = 0; i < 3; i++) {
                    String message = queue.take(); // Blocks until sender puts
                    System.out.println(name + " received: " + message);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    public void demonstrate() {
        System.out.println("🔸 SYNCHRONOUS QUEUE DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        // Start sender and receiver
        executor.submit(new Sender());
        executor.submit(new Receiver("Receiver"));
        
        executor.shutdown();
        try {
            executor.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
}

// Example 5: Custom blocking buffer with wait/notify
class CustomBlockingBuffer<T> {
    private final Object lock = new Object();
    private final Queue<T> queue = new LinkedList<>();
    private final int capacity;
    
    public CustomBlockingBuffer(int capacity) {
        this.capacity = capacity;
    }
    
    public void put(T item) throws InterruptedException {
        synchronized (lock) {
            while (queue.size() == capacity) {
                System.out.println("Buffer full, waiting to put " + item);
                lock.wait();
            }
            queue.add(item);
            System.out.println("Put " + item + " (Buffer size: " + queue.size() + ")");
            lock.notifyAll();
        }
    }
    
    public T take() throws InterruptedException {
        synchronized (lock) {
            while (queue.isEmpty()) {
                System.out.println("Buffer empty, waiting to take");
                lock.wait();
            }
            T item = queue.poll();
            System.out.println("Took " + item + " (Buffer size: " + queue.size() + ")");
            lock.notifyAll();
            return item;
        }
    }
}

public class InterThreadCommunicationDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic wait/notify
        demonstrateBasicWaitNotify();
        
        // Demonstrate blocking queue
        BlockingQueueExample blockingQueueExample = 
            new BlockingQueueExample(3, 6);
        blockingQueueExample.demonstrate();
        
        // Demonstrate condition variables
        ConditionVariableExample conditionExample = 
            new ConditionVariableExample();
        conditionExample.demonstrate();
        
        // Demonstrate synchronous queue
        SynchronousQueueExample syncQueueExample = 
            new SynchronousQueueExample();
        syncQueueExample.demonstrate();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         INTER-THREAD COMMUNICATION DEMO                      ║");
        System.out.println("║         Coordinating threads and enabling communication      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicWaitNotify() {
        System.out.println("🔸 BASIC WAIT/NOTIFY DEMONSTRATION");
        System.out.println("   ────────────────────────────────");
        
        BasicWaitNotifyExample example = new BasicWaitNotifyExample();
        ExecutorService executor = Executors.newFixedThreadPool(2);
        
        // Start waiting thread
        executor.submit(example::waitForMessage);
        
        // Let the waiting thread start
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Send message
        executor.submit(() -> {
            example.sendMessage("Hello, World!");
        });
        
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
        System.out.println("║  • Wait and notify mechanisms                                ║");
        System.out.println("║  • Blocking queues for producer-consumer patterns            ║");
        System.out.println("║  • Condition variables with explicit locks                   ║");
        System.out.println("║  • Producer-consumer implementations                         ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always use while loops with wait() to check conditions    ║");
        System.out.println("║  • Prefer blocking queues over low-level wait/notify         ║");
        System.out.println("║  • Handle InterruptedException properly                      ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         INTER-THREAD COMMUNICATION DEMO                      ║
 * ║         Coordinating threads and enabling communication      ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 BASIC WAIT/NOTIFY DEMONSTRATION
 *    ────────────────────────────────
 *    Thread pool-1-thread-1 waiting for message
 *    Sending message: Hello, World!
 *    Thread pool-1-thread-1 received message: Hello, World!
 * 
 * 🔸 BLOCKING QUEUE DEMONSTRATION
 *    ─────────────────────────────
 *    Produced: Item-1 (Queue size: 1)
 *    Consumer-1 consumed: Item-1 (Queue size: 0)
 *    Produced: Item-2 (Queue size: 1)
 *    Consumer-2 consumed: Item-2 (Queue size: 0)
 *    Produced: Item-3 (Queue size: 1)
 *    Consumer-1 consumed: Item-3 (Queue size: 0)
 *    Produced: Item-4 (Queue size: 1)
 *    Consumer-2 consumed: Item-4 (Queue size: 0)
 *    Produced: Item-5 (Queue size: 1)
 *    Consumer-1 consumed: Item-5 (Queue size: 0)
 *    Produced: Item-6 (Queue size: 1)
 *    Consumer-2 consumed: Item-6 (Queue size: 0)
 *    Producer finished
 *    Consumer-1 finished
 *    Consumer-2 finished
 * 
 * 🔸 CONDITION VARIABLES DEMONSTRATION
 *    ──────────────────────────────────
 *    Producer-1 produced: Producer-1-Item-1 (Buffer count: 1)
 *    Consumer-1 consumed: Producer-1-Item-1 (Buffer count: 0)
 *    Producer-2 produced: Producer-2-Item-1 (Buffer count: 1)
 *    Consumer-2 consumed: Producer-2-Item-1 (Buffer count: 0)
 *    Producer-1 produced: Producer-1-Item-2 (Buffer count: 1)
 *    Producer-2 produced: Producer-2-Item-2 (Buffer count: 2)
 *    Consumer-1 consumed: Producer-1-Item-2 (Buffer count: 1)
 *    Producer-1 produced: Producer-1-Item-3 (Buffer count: 2)
 *    Consumer-2 consumed: Producer-2-Item-2 (Buffer count: 1)
 *    Producer-2 produced: Producer-2-Item-3 (Buffer count: 2)
 *    Consumer-1 consumed: Producer-1-Item-3 (Buffer count: 1)
 *    Consumer-2 consumed: Producer-2-Item-3 (Buffer count: 0)
 *    END signal added to buffer
 *    Consumer-1 consumed: END (Buffer count: 0)
 *    Consumer-1 received END signal
 *    Consumer-2 waiting - buffer empty
 * 
 * 🔸 SYNCHRONOUS QUEUE DEMONSTRATION
 *    ─────────────────────────────────
 *    Sender sending: Message-1
 *    Receiver received: Message-1
 *    Sender sent: Message-1
 *    Sender sending: Message-2
 *    Receiver received: Message-2
 *    Sender sent: Message-2
 *    Sender sending: Message-3
 *    Receiver received: Message-3
 *    Sender sent: Message-3
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Inter-thread Communication Practice Exercise**

      Create comprehensive programs to practice inter-thread communication in Java.

      **Part 1: Wait/Notify Coordinator**
      
      Create a program called \`WaitNotifyCoordinator.java\` that implements coordination using wait/notify:
      
      Requirements:
      - Create a system that coordinates multiple threads using wait/notify
      - Implement complex coordination patterns
      - Add timeout-based coordination
      - Include comprehensive error handling
      
      Features to implement:
      - Custom coordination mechanisms
      - Timeout handling
      - Error recovery
      - Performance monitoring

      **Part 2: Blocking Queue Manager**
      
      Create a program called \`BlockingQueueManager.java\` that manages blocking queues:
      
      Requirements:
      - Create a system that manages different types of blocking queues
      - Implement queue monitoring and metrics
      - Add dynamic queue sizing capabilities
      - Include comprehensive queue management features
      
      Advanced Features:
      - Queue creation factory
      - Performance monitoring
      - Dynamic resizing
      - Resource usage tracking

      **Part 3: Condition Variable Controller**
      
      Create a program called \`ConditionVariableController.java\` that controls thread coordination with condition variables:
      
      Requirements:
      - Create a system that uses condition variables for coordination
      - Implement multiple condition handling
      - Add timeout-based coordination
      - Include comprehensive condition management
      
      Features to implement:
      - Condition creation and management
      - Timeout handling
      - Performance optimization
      - Error recovery mechanisms

      **Part 4: Producer-Consumer Framework**
      
      Create a program called \`ProducerConsumerFramework.java\` that implements a robust producer-consumer system:
      
      Requirements:
      - Create a framework for producer-consumer patterns
      - Implement various production and consumption strategies
      - Add task prioritization and scheduling
      - Include comprehensive error handling
      
      Advanced Features:
      - Priority-based processing
      - Performance analytics
      - Resource usage optimization
      - Scalability features

      **Part 5: Communication Dashboard**
      
      Create a program called \`CommunicationDashboard.java\` that provides a comprehensive monitoring interface:
      
      Requirements:
      - Create a dashboard for monitoring all communication activities
      - Implement real-time communication status display
      - Add performance analytics and metrics
      - Include alert and notification system
      
      Features to implement:
      - Real-time monitoring
      - Performance analytics
      - Alert and notification system
      - Resource usage tracking

      **Deliverables:**
      Submit the following files:
      1. \`WaitNotifyCoordinator.java\` - Wait/notify coordination system
      2. \`BlockingQueueManager.java\` - Blocking queue management system
      3. \`ConditionVariableController.java\` - Condition variable controller
      4. \`ProducerConsumerFramework.java\` - Producer-consumer framework
      5. \`CommunicationDashboard.java\` - Communication monitoring dashboard
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Mastery of wait/notify mechanisms
      - ✅ Understanding of blocking queues
      - ✅ Proper use of condition variables
      - ✅ Implementation of producer-consumer patterns
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive communication capabilities
      - ✅ Application of best practices for threading

      **💡 Bonus Challenges:**
      
      1. Advanced Communication: Implement sophisticated communication mechanisms
      2. Performance Optimization: Add performance tracking to communication operations
      3. Error Handling: Add comprehensive error handling to communication operations
      4. Resource Management: Implement efficient communication resource management
      5. Extensibility: Create frameworks for reusable communication components
    `
  }
};