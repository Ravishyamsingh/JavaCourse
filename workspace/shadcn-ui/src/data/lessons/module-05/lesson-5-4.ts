import { LessonContent } from '../../types/LessonTypes';

export const lesson_5_4: LessonContent = {
  title: 'Regular Expressions Basics',
  type: 'lesson',
  duration: '30 min',
  module: 'String Manipulation and Regular Expressions',
  content: {
    overview: 'Learn the basics of regular expressions for pattern matching.',
    objectives: [
      'Understand regular expression syntax',
      'Learn common regex patterns and quantifiers',
      'Practice using regex for validation and extraction'
    ],
    theory: `
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Regular Expressions Basics
        </h1>
        <p class="mt-3 text-blue-100 text-lg">Pattern matching with regular expressions</p>
      </div>
    `,
    codeExample: `// Regular Expressions examples will be added later`,
    exercise: `
      **🎯 Regular Expressions Practice Exercise**
      
      Create programs to practice regular expressions.
    `
  }
};