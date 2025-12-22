import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_5: LessonContent = {
  title: 'ArrayList and LinkedList',
  type: 'lesson',
  duration: '30 min',
  module: 'Collections Framework',
  content: {
    overview: 'Learn about ArrayList and LinkedList classes in Java Collections Framework. This lesson covers the differences between these two list implementations, their performance characteristics, and when to use each. You\'ll understand the methods available in these classes and practice common operations.',
    objectives: [
      'Understand the differences between ArrayList and LinkedList',
      'Learn about the List interface and its implementations',
      'Master common methods for list operations',
      'Understand performance characteristics of different list operations',
      'Practice efficient list manipulation techniques',
      'Learn about memory management with lists',
      'Understand when to use ArrayList vs LinkedList'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          ArrayList and LinkedList
        </h1>
        <p class="mt-3 text-green-100 text-lg">Understanding List implementations in Java Collections Framework</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Lists
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Lists are ordered collections that allow duplicate elements and provide positional access to elements. 
            The List interface extends Collection and declares the behavior of a collection that stores a sequence of elements. 
            Two of the most commonly used List implementations are ArrayList and LinkedList.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">ArrayList provides fast random access but slower insertions/deletions, while LinkedList provides fast insertions/deletions but slower random access.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            ArrayList vs LinkedList
          </h2>
          <div class="space-y-4">
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-blue-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Feature</th>
                    <th class="text-left p-3 font-bold border-b">ArrayList</th>
                    <th class="text-left p-3 font-bold border-b">LinkedList</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Internal Structure</td>
                    <td class="p-3">Dynamic Array</td>
                    <td class="p-3">Doubly Linked List</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Random Access</td>
                    <td class="p-3 text-green-600">O(1) - Fast</td>
                    <td class="p-3 text-red-600">O(n) - Slow</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Insertion at End</td>
                    <td class="p-3 text-green-600">O(1) - Amortized</td>
                    <td class="p-3 text-green-600">O(1) - Fast</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Insertion at Beginning</td>
                    <td class="p-3 text-red-600">O(n) - Slow</td>
                    <td class="p-3 text-green-600">O(1) - Fast</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Insertion in Middle</td>
                    <td class="p-3 text-red-600">O(n) - Slow</td>
                    <td class="p-3 text-green-600">O(1) - Fast (if position known)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Deletion</td>
                    <td class="p-3 text-red-600">O(n) - Slow</td>
                    <td class="p-3 text-green-600">O(1) - Fast (if position known)</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Memory Overhead</td>
                    <td class="p-3 text-green-600">Less</td>
                    <td class="p-3 text-red-600">More (node references)</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Use Case</td>
                    <td class="p-3">Frequent random access</td>
                    <td class="p-3">Frequent insertions/deletions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Common List Methods
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Both ArrayList and LinkedList implement the List interface and provide these methods:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Basic Operations:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  List<String> list = new ArrayList<>();<br/>
                  list.add("Element");<br/>
                  list.add(0, "First");<br/>
                  list.get(0);<br/>
                  list.set(0, "New First");<br/>
                  list.remove(0);<br/>
                  list.size();<br/>
                  list.isEmpty();
                </div>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="font-bold text-indigo-800 mb-2">Search Operations:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  list.contains("Element");<br/>
                  list.indexOf("Element");<br/>
                  list.lastIndexOf("Element");<br/>
                  <br/>
                  // Iteration<br/>
                  for (String item : list) {<br/>
                  &nbsp;&nbsp;System.out.println(item);<br/>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Performance Considerations
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Understanding when to use each List implementation for optimal performance:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">When to Use ArrayList:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Frequent random access to elements</li>
                  <li>• More get() operations than add()/remove()</li>
                  <li>• Fixed or slowly changing size</li>
                  <li>• Memory efficiency is important</li>
                  <li>• Simple iteration through elements</li>
                </ul>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">When to Use LinkedList:</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Frequent insertions and deletions</li>
                  <li>• More add()/remove() operations than get()</li>
                  <li>• Dynamic size with frequent changes</li>
                  <li>• Need to implement queues or deques</li>
                  <li>• Adding/removing from both ends</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Initialization Examples:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // ArrayList with default capacity<br/>
                List<Integer> arrayList = new ArrayList<>();<br/>
                <br/>
                // ArrayList with initial capacity<br/>
                List<Integer> arrayList2 = new ArrayList<>(100);<br/>
                <br/>
                // LinkedList<br/>
                List<Integer> linkedList = new LinkedList<>();<br/>
                <br/>
                // Creating from another collection<br/>
                List<Integer> copy = new ArrayList<>(existingList);
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Practical Applications
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Real-world scenarios where each List implementation is particularly useful:</p>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-bold text-green-800 mb-2">ArrayList Applications:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Storing user preferences<br/>
                List<String> userPreferences = new ArrayList<>();<br/>
                userPreferences.add("Dark Mode");<br/>
                userPreferences.add("Email Notifications");<br/>
                <br/>
                // Processing data from database<br/>
                List<User> users = new ArrayList<>();<br/>
                // Populate from database<br/>
                for (User user : users) {<br/>
                &nbsp;&nbsp;// Process each user<br/>
                }
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">LinkedList Applications:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Implementing a queue<br/>
                Queue<String> taskQueue = new LinkedList<>();<br/>
                taskQueue.add("Task 1");<br/>
                taskQueue.add("Task 2");<br/>
                String nextTask = taskQueue.poll();<br/>
                <br/>
                // Browser history implementation<br/>
                Deque<String> history = new LinkedList<>();<br/>
                history.addFirst("Current Page");<br/>
                history.addFirst("Previous Page");<br/>
                String currentPage = history.removeFirst();
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Lists</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Use ArrayList for frequent random access</li>
                <li>• Use LinkedList for frequent insertions/deletions</li>
                <li>• Specify initial capacity for ArrayList when known</li>
                <li>• Use enhanced for loops for iteration when index not needed</li>
                <li>• Check for empty lists before accessing elements</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't use LinkedList for random access operations</li>
                <li>• Don't ignore the performance characteristics</li>
                <li>• Don't forget to handle IndexOutOfBoundsException</li>
                <li>• Don't use raw types (always use generics)</li>
                <li>• Don't create unnecessary intermediate lists</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ListDemo.java
 * 
 * This comprehensive example demonstrates ArrayList and LinkedList in Java:
 * - Differences between ArrayList and LinkedList implementations
 * - Common methods for list operations
 * - Performance characteristics of different list operations
 * - Practical applications of each list type
 * - Best practices for efficient list usage
 * 
 * Run this program to see how list operations work in practice.
 */

import java.util.*;

public class ListDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate ArrayList basics
        demonstrateArrayListBasics();
        
        // Demonstrate LinkedList basics
        demonstrateLinkedListBasics();
        
        // Demonstrate performance differences
        demonstratePerformance();
        
        // Demonstrate practical applications
        demonstratePracticalApplications();
        
        // Demonstrate List interface methods
        demonstrateListMethods();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    LIST IMPLEMENTATIONS DEMO                 ║");
        System.out.println("║         ArrayList vs LinkedList in Java Collections          ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateArrayListBasics() {
        System.out.println("🔸 ARRAYLIST BASICS");
        System.out.println("   ─────────────────");
        
        // Creating ArrayList with different constructors
        List<String> arrayList1 = new ArrayList<>();
        List<String> arrayList2 = new ArrayList<>(20); // Initial capacity
        List<String> arrayList3 = new ArrayList<>(Arrays.asList("A", "B", "C"));
        
        System.out.println("   Empty ArrayList: " + arrayList1);
        System.out.println("   ArrayList with initial capacity: size=" + arrayList2.size() + ", capacity=" + getArrayListCapacity(arrayList2));
        System.out.println("   ArrayList from another collection: " + arrayList3);
        
        // Basic operations
        arrayList1.add("First");
        arrayList1.add("Second");
        arrayList1.add(1, "Inserted");
        System.out.println("   After add operations: " + arrayList1);
        
        System.out.println("   Element at index 1: " + arrayList1.get(1));
        System.out.println("   Index of 'Second': " + arrayList1.indexOf("Second"));
        
        arrayList1.set(0, "Updated");
        System.out.println("   After set operation: " + arrayList1);
        
        System.out.println();
    }
    
    private static void demonstrateLinkedListBasics() {
        System.out.println("🔸 LINKEDLIST BASICS");
        System.out.println("   ──────────────────");
        
        // Creating LinkedList
        List<String> linkedList = new LinkedList<>();
        
        System.out.println("   Empty LinkedList: " + linkedList);
        
        // Basic operations
        linkedList.add("First");
        linkedList.add("Second");
        linkedList.add(1, "Inserted");
        System.out.println("   After add operations: " + linkedList);
        
        System.out.println("   Element at index 1: " + linkedList.get(1));
        System.out.println("   Index of 'Second': " + linkedList.indexOf("Second"));
        
        linkedList.set(0, "Updated");
        System.out.println("   After set operation: " + linkedList);
        
        // LinkedList-specific operations (as Deque)
        LinkedList<String> deque = new LinkedList<>();
        deque.addFirst("Head");
        deque.addLast("Tail");
        System.out.println("   LinkedList as Deque: " + deque);
        System.out.println("   First element: " + deque.getFirst());
        System.out.println("   Last element: " + deque.getLast());
        
        System.out.println();
    }
    
    private static void demonstratePerformance() {
        System.out.println("🔸 PERFORMANCE COMPARISON");
        System.out.println("   ───────────────────────");
        
        int size = 100000;
        
        // ArrayList performance for random access
        List<Integer> arrayList = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            arrayList.add(i);
        }
        
        long startTime = System.currentTimeMillis();
        // Random access test
        for (int i = 0; i < 10000; i++) {
            int index = (int) (Math.random() * size);
            int value = arrayList.get(index);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("   ArrayList random access (10k operations): " + (endTime - startTime) + " ms");
        
        // LinkedList performance for random access
        List<Integer> linkedList = new LinkedList<>();
        for (int i = 0; i < size; i++) {
            linkedList.add(i);
        }
        
        startTime = System.currentTimeMillis();
        // Random access test
        for (int i = 0; i < 10000; i++) {
            int index = (int) (Math.random() * size);
            int value = linkedList.get(index);
        }
        endTime = System.currentTimeMillis();
        System.out.println("   LinkedList random access (10k operations): " + (endTime - startTime) + " ms");
        
        // Insertion at beginning performance
        startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            arrayList.add(0, i);
        }
        endTime = System.currentTimeMillis();
        System.out.println("   ArrayList insertion at beginning (1k operations): " + (endTime - startTime) + " ms");
        
        startTime = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            linkedList.add(0, i);
        }
        endTime = System.currentTimeMillis();
        System.out.println("   LinkedList insertion at beginning (1k operations): " + (endTime - startTime) + " ms");
        
        System.out.println();
    }
    
    private static void demonstratePracticalApplications() {
        System.out.println("🔸 PRACTICAL APPLICATIONS");
        System.out.println("   ───────────────────────");
        
        // ArrayList for storing user data
        System.out.println("   Using ArrayList for user data:");
        List<String> userPreferences = new ArrayList<>();
        userPreferences.add("Dark Mode");
        userPreferences.add("Email Notifications");
        userPreferences.add("Push Notifications");
        System.out.println("   User preferences: " + userPreferences);
        
        // LinkedList for queue implementation
        System.out.println("   Using LinkedList for queue:");
        Queue<String> taskQueue = new LinkedList<>();
        taskQueue.offer("Task 1");
        taskQueue.offer("Task 2");
        taskQueue.offer("Task 3");
        System.out.println("   Task queue: " + taskQueue);
        System.out.println("   Processing: " + taskQueue.poll());
        System.out.println("   Remaining tasks: " + taskQueue);
        
        // LinkedList for browser history
        System.out.println("   Using LinkedList for browser history:");
        Deque<String> history = new LinkedList<>();
        history.push("Current Page");
        history.push("Previous Page");
        history.push("Earlier Page");
        System.out.println("   Browser history: " + history);
        System.out.println("   Current page: " + history.pop());
        System.out.println("   Back to: " + history.peek());
        
        System.out.println();
    }
    
    private static void demonstrateListMethods() {
        System.out.println("🔸 COMMON LIST METHODS");
        System.out.println("   ────────────────────");
        
        List<String> list = new ArrayList<>(Arrays.asList("Apple", "Banana", "Cherry", "Date", "Elderberry"));
        System.out.println("   Original list: " + list);
        
        // Search operations
        System.out.println("   Contains 'Banana': " + list.contains("Banana"));
        System.out.println("   Index of 'Cherry': " + list.indexOf("Cherry"));
        System.out.println("   Last index of 'Apple': " + list.lastIndexOf("Apple"));
        
        // Sublist operations
        List<String> sublist = list.subList(1, 4);
        System.out.println("   Sublist from index 1 to 4: " + sublist);
        
        // Bulk operations
        List<String> additional = Arrays.asList("Fig", "Grape");
        list.addAll(additional);
        System.out.println("   After adding all: " + list);
        
        list.removeAll(Arrays.asList("Apple", "Date"));
        System.out.println("   After removing Apple and Date: " + list);
        
        // Iteration methods
        System.out.println("   Iteration with enhanced for loop:");
        for (String item : list) {
            System.out.print(item + " ");
        }
        System.out.println();
        
        System.out.println("   Iteration with iterator:");
        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
            // Safe removal during iteration
            if (iterator.next().equals("Cherry")) {
                iterator.remove();
            }
        }
        System.out.println();
        
        System.out.println();
    }
    
    // Helper method to get ArrayList capacity (using reflection)
    private static int getArrayListCapacity(List<?> list) {
        try {
            java.lang.reflect.Field field = ArrayList.class.getDeclaredField("elementData");
            field.setAccessible(true);
            Object[] array = (Object[]) field.get(list);
            return array.length;
        } catch (Exception e) {
            return -1; // Should not happen
        }
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Differences between ArrayList and LinkedList              ║");
        System.out.println("║  • Common methods for list operations                        ║");
        System.out.println("║  • Performance characteristics of different list operations  ║");
        System.out.println("║  • Practical applications of each list type                  ║");
        System.out.println("║  • Best practices for efficient list usage                   ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Use ArrayList for frequent random access operations       ║");
        System.out.println("║  • Use LinkedList for frequent insertions/deletions         ║");
        System.out.println("║  • Specify initial capacity for ArrayList when known         ║");
        System.out.println("║  • Handle IndexOutOfBoundsException appropriately           ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create an ArrayList of strings and add 5 elements to it, then print all elements.
2. Create a LinkedList of integers and add elements at the beginning and end.
3. Write a program to iterate through an ArrayList using different methods.
4. Create a program to remove elements from a LinkedList by value and by index.
5. Write a program to find the index of an element in an ArrayList.
`
  }
};