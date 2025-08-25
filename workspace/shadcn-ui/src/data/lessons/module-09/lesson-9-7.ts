import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_7: LessonContent = {
  title: 'Advanced Concurrency Patterns',
  type: 'coding',
  duration: '45 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Explore advanced concurrency patterns and techniques in Java. This lesson covers the Fork/Join framework, CompletableFuture, reactive programming concepts, and advanced synchronization patterns for building highly concurrent applications.',
    objectives: [
      'Master the Fork/Join framework for parallel processing',
      'Learn to use CompletableFuture for asynchronous programming',
      'Understand reactive programming concepts',
      'Practice advanced synchronization patterns',
      'Implement efficient concurrent algorithms',
      'Apply best practices for advanced concurrency'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Advanced Concurrency Patterns
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Building highly concurrent applications with advanced patterns</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Fork/Join Framework
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Fork/Join framework is designed for parallel processing of tasks that can be recursively divided 
            into smaller subtasks. It uses a work-stealing algorithm to efficiently distribute work among threads.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">The Fork/Join framework excels at divide-and-conquer algorithms where large problems are broken down into smaller, similar subproblems.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">RecursiveTask</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Computes a result and returns it</li>
                <li>• Extends RecursiveTask<T></li>
                <li>• Must implement compute() method</li>
                <li>• Uses fork() and join() for parallelism</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                class FibonacciTask extends RecursiveTask<Long> {<br/>
                &nbsp;&nbsp;private final int n;<br/>
                &nbsp;&nbsp;protected Long compute() {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;if (n <= 1) return (long) n;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;FibonacciTask left = new FibonacciTask(n-1);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;FibonacciTask right = new FibonacciTask(n-2);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;left.fork();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;return right.compute() + left.join();<br/>
                &nbsp;&nbsp;}<br/>
                }
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">RecursiveAction</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Performs an action without returning a result</li>
                <li>• Extends RecursiveAction</li>
                <li>• Must implement compute() method</li>
                <li>• Useful for parallel processing without results</li>
              </ul>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                class PrintArrayAction extends RecursiveAction {<br/>
                &nbsp;&nbsp;private final int[] array;<br/>
                &nbsp;&nbsp;protected void compute() {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;// Process array elements in parallel<br/>
                &nbsp;&nbsp;}<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            CompletableFuture
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">CompletableFuture enables asynchronous programming with a fluent API for composing asynchronous operations:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Creating and chaining CompletableFutures<br/>
              CompletableFuture<String> future = CompletableFuture<br/>
              &nbsp;&nbsp;.supplyAsync(() -> "Hello")<br/>
              &nbsp;&nbsp;.thenApply(String::toUpperCase)<br/>
              &nbsp;&nbsp;.thenCompose(s -> CompletableFuture<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;.supplyAsync(() -> s + " World"))<br/>
              &nbsp;&nbsp;.thenAccept(System.out::println);<br/>
              <br/>
              // Combining multiple futures<br/>
              CompletableFuture<String> future1 = <br/>
              &nbsp;&nbsp;CompletableFuture.supplyAsync(() -> "First");<br/>
              CompletableFuture<String> future2 = <br/>
              &nbsp;&nbsp;CompletableFuture.supplyAsync(() -> "Second");<br/>
              <br/>
              CompletableFuture<String> combined = <br/>
              &nbsp;&nbsp;future1.thenCombine(future2, (s1, s2) -> s1 + " " + s2);
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">supplyAsync()</td>
                    <td class="p-3">Create CompletableFuture with Supplier</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">thenApply()</td>
                    <td class="p-3">Transform result with Function</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">thenCompose()</td>
                    <td class="p-3">Chain dependent futures</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">thenCombine()</td>
                    <td class="p-3">Combine two futures</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">handle()/exceptionally()</td>
                    <td class="p-3">Error handling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Reactive Programming Concepts
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Reactive programming focuses on asynchronous data streams and propagation of change:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="font-bold text-cyan-800 mb-2">Core Principles</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Event-driven architecture</li>
                  <li>• Backpressure handling</li>
                  <li>• Non-blocking operations</li>
                  <li>• Composability and elasticity</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Reactive streams concepts<br/>
                  Publisher<String> publisher;<br/>
                  Subscriber<String> subscriber;<br/>
                  publisher.subscribe(subscriber);
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Benefits</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Improved responsiveness</li>
                  <li>• Better resource utilization</li>
                  <li>• Enhanced scalability</li>
                  <li>• Resilient to failures</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Backpressure handling<br/>
                  Flow.Publisher<Data> publisher;<br/>
                  Flow.Subscriber<Data> subscriber;<br/>
                  publisher.subscribe(subscriber);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Advanced Synchronization Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Advanced patterns for coordinating complex concurrent operations:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">ReadWriteLock</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Allows multiple readers or single writer</li>
                  <li>• Better performance for read-heavy scenarios</li>
                  <li>• Prevents reader-writer conflicts</li>
                  <li>• Supports fairness policies</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ReadWriteLock rwLock = new ReentrantReadWriteLock();<br/>
                  Lock readLock = rwLock.readLock();<br/>
                  Lock writeLock = rwLock.writeLock();<br/>
                  <br/>
                  // Multiple threads can read simultaneously<br/>
                  readLock.lock();<br/>
                  try { /* read operations */ }<br/>
                  finally { readLock.unlock(); }<br/>
                  <br/>
                  // Only one thread can write<br/>
                  writeLock.lock();<br/>
                  try { /* write operations */ }<br/>
                  finally { writeLock.unlock(); }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">StampedLock</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Optimistic reading capability</li>
                  <li>• Three lock modes: read, write, optimistic</li>
                  <li>• Better performance than ReadWriteLock</li>
                  <li>• Requires careful validation</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  StampedLock stampedLock = new StampedLock();<br/>
                  <br/>
                  // Optimistic read<br/>
                  long stamp = stampedLock.tryOptimisticRead();<br/>
                  // Read data<br/>
                  if (!stampedLock.validate(stamp)) {<br/>
                  &nbsp;&nbsp;// Fallback to regular read lock<br/>
                  &nbsp;&nbsp;stamp = stampedLock.readLock();<br/>
                  &nbsp;&nbsp;try { /* read data */ }<br/>
                  &nbsp;&nbsp;finally { stampedLock.unlockRead(stamp); }<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Concurrency Design Patterns
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Established patterns for solving common concurrency problems:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-teal-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Pattern</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                    <th class="text-left p-3 font-bold border-b">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Producer-Consumer</td>
                    <td class="p-3">Decouples producers and consumers</td>
                    <td class="p-3">Data processing pipelines</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Thread Pool</td>
                    <td class="p-3">Reuses threads for task execution</td>
                    <td class="p-3">Server applications</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Future</td>
                    <td class="p-3">Represents result of async computation</td>
                    <td class="p-3">Asynchronous operations</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">Active Object</td>
                    <td class="p-3">Decouples method execution from invocation</td>
                    <td class="p-3">Concurrent object access</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">Monitor Object</td>
                    <td class="p-3">Synchronizes concurrent method access</td>
                    <td class="p-3">Thread-safe objects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Advanced Concurrency</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use Fork/Join for divide-and-conquer problems</li>
                <li>• Prefer CompletableFuture for async composition</li>
                <li>• Use appropriate lock types for your use case</li>
                <li>• Handle backpressure in reactive systems</li>
                <li>• Monitor thread pool metrics</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't create too many threads</li>
                <li>• Don't use blocking operations in reactive streams</li>
                <li>• Don't ignore InterruptedException</li>
                <li>• Don't use busy-waiting loops</li>
                <li>• Don't forget to handle timeouts</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * AdvancedConcurrencyDemo.java
 * 
 * This comprehensive example demonstrates advanced concurrency patterns in Java:
 * - Fork/Join framework for parallel processing
 * - CompletableFuture for asynchronous programming
 * - Reactive programming concepts
 * - Advanced synchronization patterns
 * - Concurrency design patterns
 * 
 * Run this program to see advanced concurrency in action.
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.locks.*;
import java.util.stream.IntStream;

// Fork/Join Framework Demo
class ForkJoinDemo extends RecursiveTask<Long> {
    private final int start;
    private final int end;
    private final int[] array;
    private static final int THRESHOLD = 1000;

    public ForkJoinDemo(int[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    @Override
    protected Long compute() {
        if (end - start <= THRESHOLD) {
            // Direct computation for small arrays
            long sum = 0;
            for (int i = start; i < end; i++) {
                sum += array[i];
            }
            return sum;
        } else {
            // Split task into subtasks
            int mid = (start + end) / 2;
            ForkJoinDemo leftTask = new ForkJoinDemo(array, start, mid);
            ForkJoinDemo rightTask = new ForkJoinDemo(array, mid, end);

            // Fork one task and compute the other
            leftTask.fork();
            long rightResult = rightTask.compute();
            long leftResult = leftTask.join();

            return leftResult + rightResult;
        }
    }

    public static void demonstrateForkJoin() {
        System.out.println("🔸 FORK/JOIN FRAMEWORK DEMONSTRATION");
        System.out.println("   ────────────────────────────────────");

        // Create large array
        int[] array = IntStream.range(1, 1000000).toArray();

        // Sequential computation
        long startTime = System.currentTimeMillis();
        long sequentialSum = Arrays.stream(array).asLongStream().sum();
        long sequentialTime = System.currentTimeMillis() - startTime;

        // Parallel computation with Fork/Join
        startTime = System.currentTimeMillis();
        ForkJoinPool pool = new ForkJoinPool();
        ForkJoinDemo task = new ForkJoinDemo(array, 0, array.length);
        long parallelSum = pool.invoke(task);
        long parallelTime = System.currentTimeMillis() - startTime;

        System.out.println("   Sequential sum: " + sequentialSum + " (Time: " + sequentialTime + "ms)");
        System.out.println("   Parallel sum: " + parallelSum + " (Time: " + parallelTime + "ms)");
        System.out.println("   Results match: " + (sequentialSum == parallelSum));
        System.out.println();
    }
}

// CompletableFuture Demo
class CompletableFutureDemo {
    public static void demonstrateCompletableFuture() {
        System.out.println("🔸 COMPLETABLE FUTURE DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");

        // Simple async computation
        CompletableFuture<String> future1 = CompletableFuture
            .supplyAsync(() -> {
                System.out.println("   Task 1 executing on " + Thread.currentThread().getName());
                try { Thread.sleep(1000); } catch (InterruptedException e) {}
                return "Hello";
            });

        // Chain transformations
        CompletableFuture<String> future2 = future1
            .thenApply(String::toUpperCase)
            .thenApply(s -> s + " World")
            .thenApply(s -> s + "!");

        // Combine multiple futures
        CompletableFuture<String> future3 = CompletableFuture
            .supplyAsync(() -> {
                System.out.println("   Task 2 executing on " + Thread.currentThread().getName());
                try { Thread.sleep(500); } catch (InterruptedException e) {}
                return "Java";
            });

        CompletableFuture<String> combinedFuture = future2.thenCombine(future3, 
            (s1, s2) -> s1 + " Welcome to " + s2 + "!");

        // Handle result
        combinedFuture.thenAccept(result -> 
            System.out.println("   Combined result: " + result));

        // Exception handling
        CompletableFuture<String> futureWithError = CompletableFuture
            .supplyAsync(() -> {
                if (Math.random() > 0.5) {
                    throw new RuntimeException("Random error occurred");
                }
                return "Success";
            })
            .exceptionally(throwable -> {
                System.out.println("   Error handled: " + throwable.getMessage());
                return "Default value";
            });

        // Wait for completion
        try {
            System.out.println("   Future with error handling: " + futureWithError.get(3, TimeUnit.SECONDS));
        } catch (Exception e) {
            System.out.println("   Exception in future: " + e.getMessage());
        }

        System.out.println();
    }

    public static void demonstrateAsyncComposition() {
        System.out.println("🔸 ASYNC COMPOSITION DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");

        // Create a chain of dependent async operations
        CompletableFuture<String> chain = CompletableFuture
            .supplyAsync(() -> {
                System.out.println("   Step 1: Fetching user data");
                try { Thread.sleep(300); } catch (InterruptedException e) {}
                return "User-123";
            })
            .thenCompose(user -> {
                System.out.println("   Step 2: Fetching user preferences for " + user);
                return CompletableFuture.supplyAsync(() -> {
                    try { Thread.sleep(200); } catch (InterruptedException e) {}
                    return "EN,USD";
                });
            })
            .thenApply(prefs -> {
                System.out.println("   Step 3: Processing preferences: " + prefs);
                return "Processed: " + prefs;
            })
            .thenApply(result -> {
                System.out.println("   Step 4: Finalizing result");
                return result.toUpperCase();
            });

        try {
            String finalResult = chain.get(5, TimeUnit.SECONDS);
            System.out.println("   Final result: " + finalResult);
        } catch (Exception e) {
            System.out.println("   Error in chain: " + e.getMessage());
        }

        System.out.println();
    }
}

// ReadWriteLock Demo
class ReadWriteLockDemo {
    private final Map<String, String> cache = new HashMap<>();
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final Lock readLock = rwLock.readLock();
    private final Lock writeLock = rwLock.writeLock();

    public String get(String key) {
        readLock.lock();
        try {
            System.out.println("   Reading " + key + " on " + Thread.currentThread().getName());
            return cache.get(key);
        } finally {
            readLock.unlock();
        }
    }

    public void put(String key, String value) {
        writeLock.lock();
        try {
            System.out.println("   Writing " + key + " = " + value + " on " + Thread.currentThread().getName());
            cache.put(key, value);
        } finally {
            writeLock.unlock();
        }
    }

    public static void demonstrateReadWriteLock() {
        System.out.println("🔸 READ WRITE LOCK DEMONSTRATION");
        System.out.println("   ──────────────────────────────");

        ReadWriteLockDemo demo = new ReadWriteLockDemo();
        ExecutorService executor = Executors.newFixedThreadPool(5);

        // Add initial data
        demo.put("key1", "value1");
        demo.put("key2", "value2");

        // Multiple reader threads
        for (int i = 1; i <= 3; i++) {
            final int readerId = i;
            executor.submit(() -> {
                for (int j = 0; j < 3; j++) {
                    String value = demo.get("key" + (j % 2 + 1));
                    System.out.println("   Reader-" + readerId + " got: " + value);
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
                }
            });
        }

        // Writer thread
        executor.submit(() -> {
            for (int i = 1; i <= 3; i++) {
                demo.put("key" + i, "updated-value" + i);
                try { Thread.sleep(200); } catch (InterruptedException e) {}
            }
        });

        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        System.out.println();
    }
}

// StampedLock Demo
class StampedLockDemo {
    private final double[] points = new double[1000];
    private final StampedLock stampedLock = new StampedLock();
    private int index = 0;

    public double readDistance() {
        // Optimistic read
        long stamp = stampedLock.tryOptimisticRead();
        double sum = 0.0;
        for (int i = 0; i < index; i++) {
            sum += points[i];
        }

        // Validate the read
        if (!stampedLock.validate(stamp)) {
            // Fallback to regular read lock
            stamp = stampedLock.readLock();
            try {
                sum = 0.0;
                for (int i = 0; i < index; i++) {
                    sum += points[i];
                }
            } finally {
                stampedLock.unlockRead(stamp);
            }
        }

        return sum;
    }

    public void writePoint(double point) {
        long stamp = stampedLock.writeLock();
        try {
            if (index < points.length) {
                points[index++] = point;
            }
        } finally {
            stampedLock.unlockWrite(stamp);
        }
    }

    public static void demonstrateStampedLock() {
        System.out.println("🔸 STAMPED LOCK DEMONSTRATION");
        System.out.println("   ───────────────────────────");

        StampedLockDemo demo = new StampedLockDemo();
        ExecutorService executor = Executors.newFixedThreadPool(4);

        // Writer threads
        for (int i = 1; i <= 2; i++) {
            final int writerId = i;
            executor.submit(() -> {
                for (int j = 1; j <= 5; j++) {
                    demo.writePoint(writerId * 10 + j);
                    System.out.println("   Writer-" + writerId + " added point: " + (writerId * 10 + j));
                    try { Thread.sleep(50); } catch (InterruptedException e) {}
                }
            });
        }

        // Reader threads
        for (int i = 1; i <= 2; i++) {
            final int readerId = i;
            executor.submit(() -> {
                for (int j = 0; j < 5; j++) {
                    double distance = demo.readDistance();
                    System.out.println("   Reader-" + readerId + " read distance: " + distance);
                    try { Thread.sleep(100); } catch (InterruptedException e) {}
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

// Producer-Consumer Pattern Demo
class ProducerConsumerDemo {
    private final BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);

    public void demonstrateProducerConsumer() {
        System.out.println("🔸 PRODUCER-CONSUMER PATTERN DEMONSTRATION");
        System.out.println("   ─────────────────────────────────────────");

        ExecutorService executor = Executors.newFixedThreadPool(4);

        // Producer tasks
        for (int i = 1; i <= 2; i++) {
            final int producerId = i;
            executor.submit(() -> {
                try {
                    for (int j = 1; j <= 5; j++) {
                        int item = producerId * 10 + j;
                        queue.put(item);
                        System.out.println("   Producer-" + producerId + " produced: " + item);
                        Thread.sleep(200);
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        // Consumer tasks
        for (int i = 1; i <= 2; i++) {
            final int consumerId = i;
            executor.submit(() -> {
                try {
                    for (int j = 0; j < 5; j++) {
                        Integer item = queue.take();
                        System.out.println("   Consumer-" + consumerId + " consumed: " + item);
                        Thread.sleep(300);
                    }
                } catch (InterruptedException e) {
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
}

public class AdvancedConcurrencyDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate Fork/Join Framework
        ForkJoinDemo.demonstrateForkJoin();
        
        // Demonstrate CompletableFuture
        CompletableFutureDemo.demonstrateCompletableFuture();
        CompletableFutureDemo.demonstrateAsyncComposition();
        
        // Demonstrate ReadWriteLock
        ReadWriteLockDemo.demonstrateReadWriteLock();
        
        // Demonstrate StampedLock
        StampedLockDemo.demonstrateStampedLock();
        
        // Demonstrate Producer-Consumer Pattern
        ProducerConsumerDemo demo = new ProducerConsumerDemo();
        demo.demonstrateProducerConsumer();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         ADVANCED CONCURRENCY PATTERNS DEMO                   ║");
        System.out.println("║         Building highly concurrent applications              ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Fork/Join framework for parallel processing               ║");
        System.out.println("║  • CompletableFuture for asynchronous programming            ║");
        System.out.println("║  • Reactive programming concepts                             ║");
        System.out.println("║  • Advanced synchronization patterns                         ║");
        System.out.println("║  • Concurrency design patterns                               ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use Fork/Join for divide-and-conquer problems             ║");
        System.out.println("║  • Prefer CompletableFuture for async composition            ║");
        System.out.println("║  • Use appropriate lock types for your use case              ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         ADVANCED CONCURRENCY PATTERNS DEMO                   ║
 * ║         Building highly concurrent applications              ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 FORK/JOIN FRAMEWORK DEMONSTRATION
 *    ────────────────────────────────────
 *    Sequential sum: 499999500000 (Time: 50ms)
 *    Parallel sum: 499999500000 (Time: 25ms)
 *    Results match: true
 * 
 * 🔸 COMPLETABLE FUTURE DEMONSTRATION
 *    ──────────────────────────────────
 *    Task 1 executing on ForkJoinPool.commonPool-worker-1
 *    Task 2 executing on ForkJoinPool.commonPool-worker-2
 *    Combined result: HELLO WORLD! Welcome to Java!
 *    Error handled: java.lang.RuntimeException: Random error occurred
 *    Future with error handling: Default value
 * 
 * 🔸 ASYNC COMPOSITION DEMONSTRATION
 *    ─────────────────────────────────
 *    Step 1: Fetching user data
 *    Step 2: Fetching user preferences for User-123
 *    Step 3: Processing preferences: EN,USD
 *    Step 4: Finalizing result
 *    Final result: PROCESSED: EN,USD
 * 
 * 🔸 READ WRITE LOCK DEMONSTRATION
 *    ──────────────────────────────
 *    Reading key1 on pool-1-thread-1
 *    Reading key2 on pool-1-thread-2
 *    Reader-1 got: value1
 *    Reader-2 got: value2
 *    Writing key1 = updated-value1 on pool-1-thread-3
 *    Reading key1 on pool-1-thread-1
 *    Reader-1 got: updated-value1
 *    Writing key2 = updated-value2 on pool-1-thread-3
 *    Reading key2 on pool-1-thread-2
 *    Reader-2 got: updated-value2
 * 
 * 🔸 STAMPED LOCK DEMONSTRATION
 *    ───────────────────────────
 *    Writer-1 added point: 11
 *    Reader-1 read distance: 11.0
 *    Writer-2 added point: 21
 *    Reader-2 read distance: 32.0
 *    Writer-1 added point: 12
 *    Reader-1 read distance: 44.0
 *    Writer-2 added point: 22
 *    Reader-2 read distance: 66.0
 *    Writer-1 added point: 13
 *    Reader-1 read distance: 79.0
 *    Writer-2 added point: 23
 *    Reader-2 read distance: 102.0
 *    Writer-1 added point: 14
 *    Reader-1 read distance: 116.0
 *    Writer-2 added point: 24
 *    Reader-2 read distance: 140.0
 *    Writer-1 added point: 15
 *    Reader-1 read distance: 155.0
 *    Writer-2 added point: 25
 *    Reader-2 read distance: 180.0
 * 
 * 🔸 PRODUCER-CONSUMER PATTERN DEMONSTRATION
 *    ─────────────────────────────────────────
 *    Producer-1 produced: 11
 *    Producer-2 produced: 21
 *    Consumer-1 consumed: 11
 *    Consumer-2 consumed: 21
 *    Producer-1 produced: 12
 *    Producer-2 produced: 22
 *    Consumer-1 consumed: 12
 *    Consumer-2 consumed: 22
 *    Producer-1 produced: 13
 *    Producer-2 produced: 23
 *    Consumer-1 consumed: 13
 *    Consumer-2 consumed: 23
 *    Producer-1 produced: 14
 *    Producer-2 produced: 24
 *    Consumer-1 consumed: 14
 *    Consumer-2 consumed: 24
 *    Producer-1 produced: 15
 *    Producer-2 produced: 25
 *    Consumer-1 consumed: 15
 *    Consumer-2 consumed: 25
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Advanced Concurrency Patterns Practice Exercise**

      Create comprehensive programs to practice advanced concurrency patterns in Java.

      **Part 1: Parallel Data Processor**
      
      Create a program called \`ParallelDataProcessor.java\` that implements parallel data processing using Fork/Join:
      
      Requirements:
      - Create a system that processes large datasets in parallel
      - Implement custom RecursiveTask and RecursiveAction classes
      - Add performance monitoring and metrics
      - Include comprehensive error handling
      
      Features to implement:
      - Data partitioning strategies
      - Performance benchmarking
      - Memory usage tracking
      - Error recovery mechanisms

      **Part 2: Async Service Coordinator**
      
      Create a program called \`AsyncServiceCoordinator.java\` that coordinates asynchronous services using CompletableFuture:
      
      Requirements:
      - Create a system that orchestrates multiple async services
      - Implement complex async workflows
      - Add timeout-based service coordination
      - Include comprehensive service monitoring
      
      Advanced Features:
      - Service dependency management
      - Performance optimization
      - Circuit breaker patterns
      - Retry mechanisms

      **Part 3: Reactive Data Stream Processor**
      
      Create a program called \`ReactiveDataStreamProcessor.java\` that processes data streams reactively:
      
      Requirements:
      - Create a system that processes continuous data streams
      - Implement backpressure handling
      - Add stream transformation capabilities
      - Include comprehensive stream monitoring
      
      Features to implement:
      - Publisher-Subscriber patterns
      - Backpressure strategies
      - Stream filtering and mapping
      - Error handling in streams

      **Part 4: Advanced Lock Manager**
      
      Create a program called \`AdvancedLockManager.java\` that manages resources using advanced locking:
      
      Requirements:
      - Create a system that uses ReadWriteLock and StampedLock
      - Implement different locking strategies
      - Add performance optimization techniques
      - Include comprehensive lock monitoring
      
      Advanced Features:
      - Lock fairness policies
      - Optimistic vs pessimistic locking
      - Lock timeout handling
      - Deadlock detection

      **Part 5: Concurrency Patterns Dashboard**
      
      Create a program called \`ConcurrencyPatternsDashboard.java\` that provides a comprehensive monitoring interface:
      
      Requirements:
      - Create a dashboard for monitoring all concurrency patterns
      - Implement real-time pattern status display
      - Add performance analytics and metrics
      - Include alert and notification system
      
      Features to implement:
      - Real-time monitoring
      - Performance analytics
      - Alert and notification system
      - Resource usage tracking

      **Deliverables:**
      Submit the following files:
      1. \`ParallelDataProcessor.java\` - Parallel data processing system
      2. \`AsyncServiceCoordinator.java\` - Async service coordinator
      3. \`ReactiveDataStreamProcessor.java\` - Reactive data stream processor
      4. \`AdvancedLockManager.java\` - Advanced lock manager
      5. \`ConcurrencyPatternsDashboard.java\` - Concurrency patterns monitoring dashboard
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Mastery of Fork/Join framework
      - ✅ Understanding of CompletableFuture
      - ✅ Proper use of reactive programming concepts
      - ✅ Implementation of advanced synchronization patterns
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive advanced concurrency capabilities
      - ✅ Application of best practices for advanced concurrency

      **💡 Bonus Challenges:**
      
      1. Advanced Pattern Implementations: Implement sophisticated concurrency patterns
      2. Performance Optimization: Add performance tracking to concurrent operations
      3. Error Handling: Add comprehensive error handling to concurrent operations
      4. Resource Management: Implement efficient concurrent resource management
      5. Extensibility: Create frameworks for reusable concurrent components
    `
  }
};