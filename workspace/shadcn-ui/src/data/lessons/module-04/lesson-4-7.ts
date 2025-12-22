import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_7: LessonContent = {
  title: 'Advanced Collections (TreeMap, TreeSet, Queue)',
  type: 'lesson',
  duration: '30 min',
  module: 'Arrays and Collections',
  content: {
    overview: 'Learn about advanced collection types including TreeMap, TreeSet, and Queue implementations.',
    objectives: [
      'Understand TreeMap and TreeSet data structures',
      'Learn about sorted collections',
      'Explore Queue implementations',
      'Practice using these advanced collections'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Advanced Collections
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Working with TreeMap, TreeSet, and Queue implementations</p>
      </div>
    `,
    codeExample: `// Advanced Collections examples will be added later`,
    exercise: `
1. Create a TreeMap to store names and ages, then print them in sorted order.
2. Create a TreeSet and add elements to demonstrate automatic sorting.
3. Write a program to use a Queue (LinkedList) for FIFO operations.
4. Create a program to find the first and last elements in a TreeSet.
5. Write a program to iterate through a TreeMap in reverse order.
`
  }
};