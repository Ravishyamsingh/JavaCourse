import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_1: LessonContent = {
  title: 'Understanding Exceptions',
  type: 'lesson',
  duration: '25 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Learn about exceptions and error handling in Java.',
    objectives: [
      'Understand exception hierarchy in Java',
      'Learn about checked and unchecked exceptions',
      'Practice identifying common exceptions'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Understanding Exceptions
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Error handling in Java applications</p>
      </div>
    `,
    codeExample: `// Exception examples will be added later`,
    exercise: `
      **🎯 Exception Handling Practice Exercise**
      
      Create programs to practice exception handling.
    `
  }
};