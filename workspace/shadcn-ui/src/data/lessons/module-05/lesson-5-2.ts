import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_2: LessonContent = {
  title: 'StringBuilder and StringBuffer',
  type: 'lesson',
  duration: '25 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Learn about StringBuilder and StringBuffer for efficient string manipulation.',
    objectives: [
      'Understand mutable string classes',
      'Learn when to use StringBuilder vs StringBuffer',
      'Practice efficient string building techniques'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          StringBuilder and StringBuffer
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Efficient mutable string operations</p>
      </div>
    `,
    codeExample: `// StringBuilder and StringBuffer examples will be added later`,
    exercise: `
      **🎯 StringBuilder and StringBuffer Practice Exercise**
      
      Create programs to practice mutable string operations.
    `
  }
};