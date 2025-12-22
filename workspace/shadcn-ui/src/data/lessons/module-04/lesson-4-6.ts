import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_6: LessonContent = {
  title: 'HashMap and HashSet',
  type: 'coding',
  duration: '35 min',
  module: 'Arrays and Collections',
  content: {
    overview: 'Learn about HashMap and HashSet collections in Java.',
    objectives: [
      'Understand HashMap and HashSet data structures',
      'Learn to use HashMap for key-value pairs',
      'Learn to use HashSet for unique elements',
      'Practice common operations with these collections'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          HashMap and HashSet
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Working with key-value pairs and unique elements</p>
      </div>
    `,
    codeExample: `// HashMap and HashSet examples will be added later`,
    exercise: `
1. Create a HashMap to store student names and their grades, then print all entries.
2. Create a HashSet and add duplicate elements to demonstrate uniqueness.
3. Write a program to check if a key exists in a HashMap.
4. Create a program to iterate through a HashSet using different methods.
5. Write a program to remove elements from a HashMap by key.
`
  }
};