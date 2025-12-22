import { LessonContent } from '../../types/LessonTypes';

export const lesson_6_5: LessonContent = {
  title: 'Debugging Techniques',
  type: 'lesson',
  duration: '30 min',
  module: 'Exception Handling and Debugging',
  content: {
    overview: 'Master essential debugging techniques and tools to identify, analyze, and resolve issues in Java applications efficiently.',
    objectives: [
      'Understand different types of debugging approaches',
      'Learn to use IDE debugging tools effectively',
      'Master breakpoint management and step-through debugging',
      'Analyze stack traces and error messages',
      'Apply systematic debugging methodologies',
      'Use logging strategically for debugging',
      'Implement defensive programming practices'
    ],
    theory: '<div class="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Debugging Techniques' +
      '</h1>' +
      '<p class="mt-3 text-red-100 text-lg">Master the art of finding and fixing bugs</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Types of Debugging' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Debugging is the process of finding and resolving defects or problems within a computer program. ' +
      'Different debugging approaches are suitable for different types of issues.' +
      '</p>' +
      '<div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">' +
      '<h4 class="font-bold text-red-800 mb-2">🔍 Debugging Approaches</h4>' +
      '<ul class="text-red-700 space-y-1">' +
      '<li>• <strong>Interactive Debugging:</strong> Using IDE debugger with breakpoints</li>' +
      '<li>• <strong>Print Debugging:</strong> Adding output statements to trace execution</li>' +
      '<li>• <strong>Log-based Debugging:</strong> Using logging frameworks for analysis</li>' +
      '<li>• <strong>Unit Test Debugging:</strong> Isolating issues through targeted tests</li>' +
      '<li>• <strong>Remote Debugging:</strong> Debugging applications running on different machines</li>' +
      '</ul>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Debugging Techniques Demonstration\n\n' +
      'public class DebugExample {\n' +
      '    public static void main(String[] args) {\n' +
      '        System.out.println("=== Debug Session Started ===");\n' +
      '        int[] numbers = {1, 2, 3, 4, 5};\n' +
      '        int target = 10;\n' +
      '        System.out.println("Input array: " + java.util.Arrays.toString(numbers));\n' +
      '        System.out.println("Target sum: " + target);\n' +
      '        int result = findPairSum(numbers, target);\n' +
      '        System.out.println("Result: " + result);\n' +
      '    }\n' +
      '    \n' +
      '    public static int findPairSum(int[] arr, int target) {\n' +
      '        for (int i = 0; i < arr.length; i++) {\n' +
      '            System.out.println("Checking i=" + i + ", value=" + arr[i]);\n' +
      '            for (int j = i + 1; j < arr.length; j++) {\n' +
      '                int sum = arr[i] + arr[j];\n' +
      '                System.out.println("  Sum: " + arr[i] + " + " + arr[j] + " = " + sum);\n' +
      '                if (sum == target) {\n' +
      '                    System.out.println("  *** FOUND MATCH! ***");\n' +
      '                    return i;\n' +
      '                }\n' +
      '            }\n' +
      '        }\n' +
      '        return -1;\n' +
      '    }\n' +
      '}',
    exercise: `
1) Add print statements to debug a method that calculates the sum of an array and identify where the logic fails.
2) Use breakpoints to step through a loop that finds the maximum value in an array.
3) Analyze a stack trace to identify the line number where a NullPointerException occurred.
`
  }
};
