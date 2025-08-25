import { LessonContent } from '../../types/LessonTypes';

export const lesson_9_5: LessonContent = {
  title: 'Executor Framework',
  type: 'coding',
  duration: '35 min',
  module: 'Concurrency and Multithreading',
  content: {
    overview: 'Learn the Executor Framework in Java. This lesson covers thread pools, different types of executors, task submission, and best practices for efficient thread management.',
    objectives: [
      'Master the Executor Framework and its components',
      'Understand different types of thread pools',
      'Learn to submit and manage tasks',
      'Practice with Callable and Future interfaces',
      'Implement proper shutdown procedures',
      'Apply best practices for thread pool management'
    ],
    theory: `
      <div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Executor Framework
        </h1>
        <p class="mt-3 text-cyan-100 text-lg">Efficient thread management and task execution</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Executor Framework
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            The Executor Framework, introduced in Java 5, provides a high-level replacement for working directly 
            with threads. It separates thread creation and management from the execution of tasks, allowing for 
            more efficient resource utilization and better application scalability.
          </p>
          <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400 mb-4">
            <h4 class="font-bold text-cyan-800 mb-2">💡 Key Concept</h4>
            <p class="text-cyan-700">The Executor Framework decouples task submission from task execution, enabling flexible and efficient thread management.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            ExecutorService Types
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Different types of ExecutorServices for various use cases:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Fixed Thread Pool</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Fixed number of threads</li>
                  <li>• Reuses threads</li>
                  <li>• Good for stable workloads</li>
                  <li>• Queues excess tasks</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ExecutorService executor = <br/>
                  &nbsp;&nbsp;Executors.newFixedThreadPool(4);
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Cached Thread Pool</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Creates threads as needed</li>
                  <li>• Reuses idle threads</li>
                  <li>• Good for short-lived tasks</li>
                  <li>• Removes unused threads</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ExecutorService executor = <br/>
                  &nbsp;&nbsp;Executors.newCachedThreadPool();
                </div>
              </div>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Single Thread Executor</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Single worker thread</li>
                  <li>• Guarantees sequential execution</li>
                  <li>• Good for single-threaded tasks</li>
                  <li>• Maintains order of execution</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ExecutorService executor = <br/>
                  &nbsp;&nbsp;Executors.newSingleThreadExecutor();
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Scheduled Thread Pool</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Supports delayed execution</li>
                  <li>• Supports periodic execution</li>
                  <li>• Good for scheduled tasks</li>
                  <li>• Extends ScheduledExecutorService</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ScheduledExecutorService executor = <br/>
                  &nbsp;&nbsp;Executors.newScheduledThreadPool(2);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Task Submission and Management
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Different ways to submit and manage tasks:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Runnable tasks (no return value)<br/>
              executor.execute(() -> {<br/>
              &nbsp;&nbsp;// Task code<br/>
              });<br/>
              <br/>
              // Future tasks (with return value)<br/>
              Future<String> future = executor.submit(() -> {<br/>
              &nbsp;&nbsp;// Task code<br/>
              &nbsp;&nbsp;return "Result";<br/>
              });<br/>
              <br/>
              // Callable tasks<br/>
              Callable<Integer> task = () -> {<br/>
              &nbsp;&nbsp;// Task code<br/>
              &nbsp;&nbsp;return 42;<br/>
              };<br/>
              Future<Integer> result = executor.submit(task);
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                    <th class="text-left p-3 font-bold border-b">Returns</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">execute(Runnable)</td>
                    <td class="p-3">Execute task without result</td>
                    <td class="p-3">void</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">submit(Runnable)</td>
                    <td class="p-3">Submit task without result</td>
                    <td class="p-3">Future<?></td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">submit(Callable)</td>
                    <td class="p-3">Submit task with result</td>
                    <td class="p-3">Future<T></td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">invokeAll(Collection)</td>
                    <td class="p-3">Execute all tasks</td>
                    <td class="p-3">List<Future<T>></td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">invokeAny(Collection)</td>
                    <td class="p-3">Execute until one succeeds</td>
                    <td class="p-3">T</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <ul class="space-y-2 text-gray-700">
                  <li>• Runnable - no return value</li>
                  <li>• Callable - returns a result</li>
                  <li>• Both can be submitted to ExecutorService</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Runnable task<br/>
                  Runnable task1 = () -> {<br/>
                  &nbsp;&nbsp;System.out.println("Running");<br/>
                  };<br/>
                  <br/>
                  // Callable task<br/>
                  Callable<String> task2 = () -> {<br/>
                  &nbsp;&nbsp;return "Result";<br/>
                  };
                </div>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Future Operations</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• get() - retrieve result (blocking)</li>
                  <li>• get(timeout) - with timeout</li>
                  <li>• cancel() - cancel task execution</li>
                  <li>• isDone(), isCancelled() - status checks</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  Future<String> future = <br/>
                  &nbsp;&nbsp;executor.submit(callableTask);<br/>
                  try {<br/>
                  &nbsp;&nbsp;String result = future.get(5, <br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;TimeUnit.SECONDS);<br/>
                  } catch (TimeoutException e) {<br/>
                  &nbsp;&nbsp;// Handle timeout<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Advanced Executor Configuration
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Creating custom thread pools with ThreadPoolExecutor:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              // Custom ThreadPoolExecutor<br/>
              ThreadPoolExecutor customExecutor = <br/>
              &nbsp;&nbsp;new ThreadPoolExecutor(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;5,  // corePoolSize<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;10, // maximumPoolSize<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;60L, TimeUnit.SECONDS, // keepAliveTime<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;new LinkedBlockingQueue<Runnable>(100), // workQueue<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;new ThreadFactory() { // threadFactory<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;private int counter = 0;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public Thread newThread(Runnable r) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new Thread(r, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"CustomThread-" + counter++);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;new ThreadPoolExecutor.CallerRunsPolicy() // handler<br/>
              &nbsp;&nbsp;);
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-cyan-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Parameter</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">corePoolSize</td>
                    <td class="p-3">Minimum number of threads to keep alive</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">maximumPoolSize</td>
                    <td class="p-3">Maximum number of threads allowed</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">keepAliveTime</td>
                    <td class="p-3">Time to keep excess threads alive</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">workQueue</td>
                    <td class="p-3">Queue for holding tasks before execution</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">threadFactory</td>
                    <td class="p-3">Factory for creating new threads</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">handler</td>
                    <td class="p-3">Policy for handling rejected tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Executor Framework</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always shut down ExecutorService properly</li>
                <li>• Use appropriate thread pool type for workload</li>
                <li>• Handle exceptions in tasks properly</li>
                <li>• Set reasonable timeouts for get() operations</li>
                <li>• Monitor thread pool metrics</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't forget to call shutdown() or shutdownNow()</li>
                <li>• Don't use unbounded work queues in production</li>
                <li>• Don't ignore InterruptedException</li>
                <li>• Don't create too many thread pools</li>
                <li>• Don't use deprecated thread methods</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ExecutorFrameworkDemo.java
 * 
 * This comprehensive example demonstrates the Executor Framework in Java:
 * - Different types of thread pools
 * - Task submission and management
 * - Future and Callable usage
 * - Scheduled task execution
 * - Proper shutdown procedures
 * 
 * Run this program to see the Executor Framework in action.
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

// Custom ThreadFactory for named threads
class NamedThreadFactory implements ThreadFactory {
    private final String prefix;
    private final AtomicInteger counter = new AtomicInteger(0);
    
    public NamedThreadFactory(String prefix) {
        this.prefix = prefix;
    }
    
    @Override
    public Thread newThread(Runnable r) {
        Thread thread = new Thread(r, prefix + "-" + counter.incrementAndGet());
        thread.setDaemon(false);
        return thread;
    }
}

// Task that simulates work and returns a result
class WorkTask implements Callable<String> {
    private final String taskId;
    private final int workTime;
    
    public WorkTask(String taskId, int workTime) {
        this.taskId = taskId;
        this.workTime = workTime;
    }
    
    @Override
    public String call() throws Exception {
        System.out.println("Task " + taskId + " started on thread " + 
                          Thread.currentThread().getName());
        
        // Simulate work
        Thread.sleep(workTime);
        
        String result = "Task " + taskId + " completed after " + workTime + "ms";
        System.out.println(result + " on thread " + Thread.currentThread().getName());
        return result;
    }
}

// Task that can be cancelled
class CancellableTask implements Callable<String> {
    private final String taskId;
    private volatile boolean cancelled = false;
    
    public CancellableTask(String taskId) {
        this.taskId = taskId;
    }
    
    public void cancel() {
        cancelled = true;
    }
    
    @Override
    public String call() throws Exception {
        System.out.println("Cancellable task " + taskId + " started");
        
        // Simulate long-running work that can be cancelled
        for (int i = 0; i < 10; i++) {
            if (cancelled) {
                System.out.println("Cancellable task " + taskId + " was cancelled");
                return "Task " + taskId + " cancelled";
            }
            Thread.sleep(500);
        }
        
        System.out.println("Cancellable task " + taskId + " completed");
        return "Task " + taskId + " completed successfully";
    }
}

public class ExecutorFrameworkDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate different thread pool types
        demonstrateThreadPoolTypes();
        
        // Demonstrate task management with Future
        demonstrateTaskManagement();
        
        // Demonstrate scheduled execution
        demonstrateScheduledExecution();
        
        // Demonstrate custom thread pool configuration
        demonstrateCustomThreadPool();
        
        // Demonstrate proper shutdown
        demonstrateProperShutdown();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         EXECUTOR FRAMEWORK DEMO                              ║");
        System.out.println("║         Managing thread pools and concurrent task execution  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateThreadPoolTypes() {
        System.out.println("🔸 THREAD POOL TYPES DEMONSTRATION");
        System.out.println("   ─────────────────────────────────");
        
        // 1. Fixed Thread Pool
        System.out.println("   1. Fixed Thread Pool:");
        ExecutorService fixedPool = Executors.newFixedThreadPool(3, 
            new NamedThreadFactory("FixedPool"));
        
        // Submit tasks
        for (int i = 1; i <= 5; i++) {
            fixedPool.submit(new WorkTask("Fixed-" + i, 1000));
        }
        
        // 2. Cached Thread Pool
        System.out.println("   2. Cached Thread Pool:");
        ExecutorService cachedPool = Executors.newCachedThreadPool(
            new NamedThreadFactory("CachedPool"));
        
        // Submit tasks
        for (int i = 1; i <= 3; i++) {
            cachedPool.submit(new WorkTask("Cached-" + i, 800));
        }
        
        // 3. Single Thread Executor
        System.out.println("   3. Single Thread Executor:");
        ExecutorService singleThread = Executors.newSingleThreadExecutor(
            new NamedThreadFactory("SingleThread"));
        
        // Submit tasks (will execute sequentially)
        for (int i = 1; i <= 3; i++) {
            singleThread.submit(new WorkTask("Single-" + i, 500));
        }
        
        // Shutdown and wait for completion
        fixedPool.shutdown();
        cachedPool.shutdown();
        singleThread.shutdown();
        
        try {
            fixedPool.awaitTermination(10, TimeUnit.SECONDS);
            cachedPool.awaitTermination(10, TimeUnit.SECONDS);
            singleThread.awaitTermination(10, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateTaskManagement() {
        System.out.println("🔸 TASK MANAGEMENT WITH FUTURE DEMONSTRATION");
        System.out.println("   ──────────────────────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(2,
            new NamedThreadFactory("TaskManager"));
        
        // Submit Callable tasks
        List<Future<String>> futures = new ArrayList<>();
        for (int i = 1; i <= 3; i++) {
            Future<String> future = executor.submit(new WorkTask("Future-" + i, 1500));
            futures.add(future);
        }
        
        // Retrieve results
        System.out.println("   Retrieving task results:");
        for (int i = 0; i < futures.size(); i++) {
            try {
                String result = futures.get(i).get(3, TimeUnit.SECONDS);
                System.out.println("   Result " + (i + 1) + ": " + result);
            } catch (TimeoutException e) {
                System.out.println("   Task " + (i + 1) + " timed out");
                futures.get(i).cancel(true);
            } catch (InterruptedException | ExecutionException e) {
                System.out.println("   Task " + (i + 1) + " failed: " + e.getMessage());
            }
        }
        
        // Demonstrate cancellable tasks
        System.out.println("   Demonstrating cancellable tasks:");
        CancellableTask cancellableTask = new CancellableTask("Cancellable");
        Future<String> cancellableFuture = executor.submit(cancellableTask);
        
        // Cancel after a short delay
        try {
            Thread.sleep(1000);
            cancellableTask.cancel();
            String result = cancellableFuture.get(2, TimeUnit.SECONDS);
            System.out.println("   Cancellable task result: " + result);
        } catch (TimeoutException e) {
            System.out.println("   Cancellable task timed out");
        } catch (InterruptedException | ExecutionException e) {
            System.out.println("   Cancellable task failed: " + e.getMessage());
        }
        
        executor.shutdown();
        try {
            executor.awaitTermination(5, TimeUnit.SECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateScheduledExecution() {
        System.out.println("🔸 SCHEDULED EXECUTION DEMONSTRATION");
        System.out.println("   ────────────────────────────────────");
        
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(2,
            new NamedThreadFactory("Scheduler"));
        
        // Schedule a task to run once after a delay
        System.out.println("   Scheduling delayed task:");
        ScheduledFuture<?> delayedTask = scheduler.schedule(() -> {
            System.out.println("   Delayed task executed on " + 
                              Thread.currentThread().getName());
        }, 2, TimeUnit.SECONDS);
        
        // Schedule a task to run periodically
        System.out.println("   Scheduling periodic task:");
        ScheduledFuture<?> periodicTask = scheduler.scheduleAtFixedRate(() -> {
            System.out.println("   Periodic task executed on " + 
                              Thread.currentThread().getName() + 
                              " at " + new Date());
        }, 1, 3, TimeUnit.SECONDS);
        
        // Schedule a task with fixed delay
        System.out.println("   Scheduling fixed-delay task:");
        ScheduledFuture<?> fixedDelayTask = scheduler.scheduleWithFixedDelay(() -> {
            System.out.println("   Fixed-delay task executed on " + 
                              Thread.currentThread().getName() + 
                              " at " + new Date());
            // Simulate variable work time
            try {
                Thread.sleep(new Random().nextInt(500));
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }, 1, 2, TimeUnit.SECONDS);
        
        // Let tasks run for a while
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // Cancel periodic tasks
        System.out.println("   Cancelling scheduled tasks:");
        periodicTask.cancel(false);
        fixedDelayTask.cancel(false);
        
        // Check if tasks were cancelled
        System.out.println("   Periodic task cancelled: " + periodicTask.isCancelled());
        System.out.println("   Fixed-delay task cancelled: " + fixedDelayTask.isCancelled());
        
        // Shutdown scheduler
        scheduler.shutdown();
        try {
            if (!scheduler.awaitTermination(5, TimeUnit.SECONDS)) {
                System.out.println("   Forcefully shutting down scheduler");
                scheduler.shutdownNow();
            }
        } catch (InterruptedException e) {
            scheduler.shutdownNow();
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateCustomThreadPool() {
        System.out.println("🔸 CUSTOM THREAD POOL CONFIGURATION DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────────────");
        
        // Create custom ThreadPoolExecutor
        ThreadPoolExecutor customExecutor = new ThreadPoolExecutor(
            2,  // corePoolSize
            4,  // maximumPoolSize
            60L, TimeUnit.SECONDS,  // keepAliveTime
            new LinkedBlockingQueue<>(10),  // workQueue
            new NamedThreadFactory("CustomPool"),  // threadFactory
            new ThreadPoolExecutor.CallerRunsPolicy()  // handler
        );
        
        System.out.println("   Custom thread pool created with:");
        System.out.println("     Core pool size: " + customExecutor.getCorePoolSize());
        System.out.println("     Maximum pool size: " + customExecutor.getMaximumPoolSize());
        System.out.println("     Queue size: " + customExecutor.getQueue().size());
        
        // Submit more tasks than core pool size
        System.out.println("   Submitting tasks to custom pool:");
        List<Future<String>> futures = new ArrayList<>();
        for (int i = 1; i <= 6; i++) {
            Future<String> future = customExecutor.submit(
                new WorkTask("Custom-" + i, 1000));
            futures.add(future);
        }
        
        // Monitor pool metrics
        System.out.println("   Pool metrics during execution:");
        System.out.println("     Active threads: " + customExecutor.getActiveCount());
        System.out.println("     Completed tasks: " + customExecutor.getCompletedTaskCount());
        System.out.println("     Queue size: " + customExecutor.getQueue().size());
        
        // Retrieve results
        System.out.println("   Retrieving task results:");
        for (int i = 0; i < futures.size(); i++) {
            try {
                String result = futures.get(i).get();
                System.out.println("   Result " + (i + 1) + ": " + result);
            } catch (InterruptedException | ExecutionException e) {
                System.out.println("   Task " + (i + 1) + " failed: " + e.getMessage());
            }
        }
        
        // Final pool metrics
        System.out.println("   Final pool metrics:");
        System.out.println("     Active threads: " + customExecutor.getActiveCount());
        System.out.println("     Completed tasks: " + customExecutor.getCompletedTaskCount());
        System.out.println("     Pool size: " + customExecutor.getPoolSize());
        
        // Proper shutdown
        customExecutor.shutdown();
        try {
            if (!customExecutor.awaitTermination(10, TimeUnit.SECONDS)) {
                System.out.println("   Forcefully shutting down custom executor");
                List<Runnable> remaining = customExecutor.shutdownNow();
                System.out.println("   Cancelled " + remaining.size() + " tasks");
            }
        } catch (InterruptedException e) {
            customExecutor.shutdownNow();
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void demonstrateProperShutdown() {
        System.out.println("🔸 PROPER SHUTDOWN DEMONSTRATION");
        System.out.println("   ──────────────────────────────");
        
        ExecutorService executor = Executors.newFixedThreadPool(2,
            new NamedThreadFactory("ShutdownDemo"));
        
        // Submit a long-running task
        Future<?> longTask = executor.submit(() -> {
            try {
                System.out.println("   Long task started");
                Thread.sleep(5000);  // 5 second task
                System.out.println("   Long task completed");
            } catch (InterruptedException e) {
                System.out.println("   Long task was interrupted");
                Thread.currentThread().interrupt();
            }
        });
        
        // Submit some quick tasks
        for (int i = 1; i <= 3; i++) {
            executor.submit(new WorkTask("Quick-" + i, 500));
        }
        
        // Initiate shutdown
        System.out.println("   Initiating graceful shutdown...");
        executor.shutdown();
        
        // Try to wait for termination with timeout
        try {
            if (!executor.awaitTermination(3, TimeUnit.SECONDS)) {
                System.out.println("   Timeout reached, forcing shutdown");
                List<Runnable> remainingTasks = executor.shutdownNow();
                System.out.println("   Cancelled " + remainingTasks.size() + " tasks");
                
                // Wait a bit more for forced shutdown
                if (!executor.awaitTermination(2, TimeUnit.SECONDS)) {
                    System.out.println("   Some tasks may still be running");
                }
            } else {
                System.out.println("   All tasks completed gracefully");
            }
        } catch (InterruptedException e) {
            System.out.println("   Shutdown interrupted");
            executor.shutdownNow();
            Thread.currentThread().interrupt();
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Different types of thread pools                           ║");
        System.out.println("║  • Task submission and management                            ║");
        System.out.println("║  • Future and Callable usage                                 ║");
        System.out.println("║  • Scheduled task execution                                  ║");
        System.out.println("║  • Proper shutdown procedures                                ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always shut down ExecutorService properly                 ║");
        System.out.println("║  • Use appropriate thread pool type for workload             ║");
        System.out.println("║  • Handle exceptions in tasks properly                       ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         EXECUTOR FRAMEWORK DEMO                              ║
 * ║         Managing thread pools and concurrent task execution  ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 THREAD POOL TYPES DEMONSTRATION
 *    ─────────────────────────────────
 *    1. Fixed Thread Pool:
 *    2. Cached Thread Pool:
 *    3. Single Thread Executor:
 *    Task Single-1 completed after 500ms on thread SingleThread-1
 *    Task Single-2 completed after 500ms on thread SingleThread-1
 *    Task Single-3 completed after 500ms on thread SingleThread-1
 *    Task Cached-2 completed after 800ms on thread CachedPool-2
 *    Task Cached-3 completed after 800ms on thread CachedPool-3
 *    Task Cached-1 completed after 800ms on thread CachedPool-1
 *    Task Fixed-1 completed after 1000ms on thread FixedPool-1
 *    Task Fixed-2 completed after 1000ms on thread FixedPool-2
 *    Task Fixed-3 completed after 1000ms on thread FixedPool-3
 *    Task Fixed-4 completed after 1000ms on thread FixedPool-1
 *    Task Fixed-5 completed after 1000ms on thread FixedPool-2
 * 
 * 🔸 TASK MANAGEMENT WITH FUTURE DEMONSTRATION
 *    ──────────────────────────────────────────
 *    Retrieving task results:
 *    Task Future-1 started on thread TaskManager-1
 *    Task Future-2 started on thread TaskManager-2
 *    Task Future-3 started on thread TaskManager-1
 *    Task Future-1 completed after 1500ms on thread TaskManager-1
 *    Result 1: Task Future-1 completed after 1500ms
 *    Task Future-3 completed after 1500ms on thread TaskManager-1
 *    Result 2: Task Future-3 completed after 1500ms
 *    Task Future-2 completed after 1500ms on thread TaskManager-2
 *    Result 3: Task Future-2 completed after 1500ms
 *    Demonstrating cancellable tasks:
 *    Cancellable task Cancellable started
 *    Cancellable task Cancellable was cancelled
 *    Cancellable task result: Task Cancellable cancelled
 * 
 * 🔸 SCHEDULED EXECUTION DEMONSTRATION
 *    ────────────────────────────────────
 *    Scheduling delayed task:
 *    Scheduling periodic task:
 *    Scheduling fixed-delay task:
 *    Delayed task executed on Scheduler-1
 *    Periodic task executed on Scheduler-2 at Fri Jan 01 12:00:05 GMT 2021
 *    Fixed-delay task executed on Scheduler-1 at Fri Jan 01 12:00:05 GMT 2021
 *    Periodic task executed on Scheduler-2 at Fri Jan 01 12:00:08 GMT 2021
 *    Fixed-delay task executed on Scheduler-1 at Fri Jan 01 12:00:08 GMT 2021
 *    Periodic task executed on Scheduler-2 at Fri Jan 01 12:00:11 GMT 2021
 *    Fixed-delay task executed on Scheduler-1 at Fri Jan 01 12:00:11 GMT 2021
 *    Cancelling scheduled tasks:
 *    Periodic task cancelled: true
 *    Fixed-delay task cancelled: true
 * 
 * 🔸 CUSTOM THREAD POOL CONFIGURATION DEMONSTRATION
 *    ───────────────────────────────────────────────
 *    Custom thread pool created with:
 *      Core pool size: 2
 *      Maximum pool size: 4
 *      Queue size: 0
 *    Submitting tasks to custom pool:
 *    Task Custom-1 started on thread CustomPool-1
 *    Task Custom-2 started on thread CustomPool-2
 *    Task Custom-3 started on thread CustomPool-3
 *    Task Custom-4 started on thread CustomPool-4
 *    Pool metrics during execution:
 *      Active threads: 4
 *      Completed tasks: 0
 *      Queue size: 2
 *    Task Custom-5 started on thread CustomPool-1
 *    Task Custom-1 completed after 1000ms on thread CustomPool-1
 *    Task Custom-6 started on thread CustomPool-1
 *    Task Custom-2 completed after 1000ms on thread CustomPool-2
 *    Task Custom-3 completed after 1000ms on thread CustomPool-3
 *    Task Custom-4 completed after 1000ms on thread CustomPool-4
 *    Task Custom-5 completed after 1000ms on thread CustomPool-1
 *    Task Custom-6 completed after 1000ms on thread CustomPool-1
 *    Retrieving task results:
 *      Result 1: Task Custom-1 completed after 1000ms
 *      Result 2: Task Custom-2 completed after 1000ms
 *      Result 3: Task Custom-3 completed after 1000ms
 *      Result 4: Task Custom-4 completed after 1000ms
 *      Result 5: Task Custom-5 completed after 1000ms
 *      Result 6: Task Custom-6 completed after 1000ms
 *    Final pool metrics:
 *      Active threads: 0
 *      Completed tasks: 6
 *      Pool size: 4
 * 
 * 🔸 PROPER SHUTDOWN DEMONSTRATION
 *    ──────────────────────────────
 *    Initiating graceful shutdown...
 *    Long task started
 *    Task Quick-1 completed after 500ms on thread ShutdownDemo-2
 *    Task Quick-2 completed after 500ms on thread ShutdownDemo-1
 *    Task Quick-3 completed after 500ms on thread ShutdownDemo-2
 *    Timeout reached, forcing shutdown
 *    Cancelled 1 tasks
 *    Long task was interrupted
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Executor Framework Practice Exercise**

      Create comprehensive programs to practice the Executor Framework in Java.

      **Part 1: Thread Pool Manager**
      
      Create a program called \`ThreadPoolManager.java\` that implements a thread pool management system:
      
      Requirements:
      - Create different types of thread pools
      - Implement pool monitoring and metrics
      - Add dynamic pool sizing capabilities
      - Include comprehensive pool management features
      
      Features to implement:
      - Pool creation factory
      - Performance monitoring
      - Dynamic resizing
      - Resource usage tracking

      **Part 2: Task Scheduler**
      
      Create a program called \`TaskScheduler.java\` that implements a robust task scheduling system:
      
      Requirements:
      - Create a system for scheduling tasks
      - Implement various scheduling patterns
      - Add task dependency management
      - Include comprehensive scheduling features
      
      Advanced Features:
      - Cron-like scheduling capabilities
      - Task chaining and dependencies
      - Performance analytics
      - Error recovery mechanisms

      **Part 3: Concurrent Task Processor**
      
      Create a program called \`ConcurrentTaskProcessor.java\` that processes tasks concurrently:
      
      Requirements:
      - Create a system that processes multiple tasks concurrently
      - Implement task prioritization
      - Add task result aggregation
      - Include comprehensive error handling
      
      Features to implement:
      - Task prioritization system
      - Result aggregation and reporting
      - Error handling and recovery
      - Performance optimization

      **Part 4: Custom Executor Implementation**
      
      Create a program called \`CustomExecutor.java\` that implements a custom executor service:
      
      Requirements:
      - Create a custom implementation of ExecutorService
      - Implement custom thread management
      - Add specialized features for specific use cases
      - Include comprehensive testing
      
      Advanced Features:
      - Custom thread lifecycle management
      - Specialized queuing mechanisms
      - Performance optimization techniques
      - Integration with existing systems

      **Part 5: Executor Dashboard**
      
      Create a program called \`ExecutorDashboard.java\` that provides a comprehensive executor monitoring interface:
      
      Requirements:
      - Create a dashboard for monitoring all executor activities
      - Implement real-time executor status display
      - Add performance analytics and metrics
      - Include alert and notification system
      
      Features to implement:
      - Real-time monitoring
      - Performance analytics
      - Alert and notification system
      - Resource usage tracking

      **Deliverables:**
      Submit the following files:
      1. \`ThreadPoolManager.java\` - Thread pool management system
      2. \`TaskScheduler.java\` - Task scheduling system
      3. \`ConcurrentTaskProcessor.java\` - Concurrent task processor
      4. \`CustomExecutor.java\` - Custom executor service implementation
      5. \`ExecutorDashboard.java\` - Executor monitoring dashboard
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Mastery of different thread pool types
      - ✅ Understanding of task management with Future
      - ✅ Proper use of scheduled execution
      - ✅ Implementation of custom thread pool configurations
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive executor framework capabilities
      - ✅ Application of best practices for concurrent execution

      **💡 Bonus Challenges:**
      
      1. Advanced Pool Patterns: Implement sophisticated thread pool patterns
      2. Performance Optimization: Add performance tracking to executor operations
      3. Error Handling: Add comprehensive error handling to executor operations
      4. Resource Management: Implement efficient executor resource management
      5. Extensibility: Create frameworks for reusable executor components
    `
  }
};