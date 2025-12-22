import { LessonContent } from '../../types/LessonTypes';

export const lesson_4_2: LessonContent = {
  title: 'Multidimensional Arrays',
  type: 'coding',
  duration: '30 min',
  module: 'Arrays and Strings',
  content: {
    overview: 'Master multidimensional arrays in Java, including 2D and 3D arrays. This lesson covers array initialization, accessing elements, and common operations on multidimensional arrays. You\'ll learn matrix operations, array traversal techniques, and practical applications of multidimensional arrays in real-world scenarios.',
    objectives: [
      'Understand the concept of multidimensional arrays and their structure',
      'Learn to declare, initialize, and access 2D and 3D arrays',
      'Master array traversal techniques for multidimensional arrays',
      'Practice matrix operations like addition, multiplication, and transposition',
      'Learn about jagged arrays and their applications',
      'Understand memory representation of multidimensional arrays',
      'Practice solving problems using multidimensional arrays'
    ],
    theory: `
      <div class="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Multidimensional Arrays
        </h1>
        <p class="mt-3 text-green-100 text-lg">Working with arrays of arrays for complex data structures</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold"> класс</span>
            Introduction to Multidimensional Arrays
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Multidimensional arrays are arrays of arrays. The most common multidimensional array is the two-dimensional array, 
            also known as a matrix. Java allows arrays with more than two dimensions, though they are less commonly used.
          </p>
          <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">💡 Key Concept</h4>
            <p class="text-green-700">A 2D array can be visualized as a table with rows and columns, where each element is accessed using two indices.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            2D Array Declaration and Initialization
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">2D arrays can be declared and initialized in several ways:</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-bold text-gray-800 mb-2">Declaration Syntax:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                dataType[][] arrayName; // Preferred way<br/>
                dataType arrayName[][]; // Also valid but less preferred
              </div>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Initialization Examples:</h4>
              <div class="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                // Method 1: Declaration and initialization separately<br/>
                int[][] matrix;<br/>
                matrix = new int[3][4]; // 3 rows, 4 columns<br/>
                <br/>
                // Method 2: Declaration and initialization together<br/>
                int[][] scores = new int[5][10];<br/>
                <br/>
                // Method 3: Initialize with values<br/>
                int[][] grid = {<br/>
                &nbsp;&nbsp;{1, 2, 3},<br/>
                &nbsp;&nbsp;{4, 5, 6},<br/>
                &nbsp;&nbsp;{7, 8, 9}<br/>
                };<br/>
                <br/>
                // Method 4: Using new keyword with values<br/>
                int[][] table = new int[][]{<br/>
                &nbsp;&nbsp;{10, 20},<br/>
                &nbsp;&nbsp;{30, 40},<br/>
                &nbsp;&nbsp;{50, 60}<br/>
                };
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Accessing 2D Array Elements
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">2D array elements are accessed using two indices: [row][column]</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold text-purple-800 mb-2">Element Access:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  int[][] matrix = {<br/>
                  &nbsp;&nbsp;{1, 2, 3},<br/>
                  &nbsp;&nbsp;{4, 5, 6},<br/>
                  &nbsp;&nbsp;{7, 8, 9}<br/>
                  };<br/>
                  System.out.println(matrix[0][0]); // Prints 1<br/>
                  System.out.println(matrix[1][2]); // Prints 6<br/>
                  matrix[2][1] = 10; // Changes element to 10
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Array Properties:</h4>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                  int[][] array = new int[3][5];<br/>
                  System.out.println(array.length); // Prints 3 (rows)<br/>
                  System.out.println(array[0].length); // Prints 5 (columns)<br/>
                  <br/>
                  // Each row can have different length (jagged array)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Iterating Through 2D Arrays
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-bold text-red-800 mb-2">Traditional Nested Loops:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                int[][] matrix = {<br/>
                &nbsp;&nbsp;{1, 2, 3},<br/>
                &nbsp;&nbsp;{4, 5, 6},<br/>
                &nbsp;&nbsp;{7, 8, 9}<br/>
                };<br/>
                for (int i = 0; i < matrix.length; i++) {<br/>
                &nbsp;&nbsp;for (int j = 0; j < matrix[i].length; j++) {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(matrix[i][j] + " ");<br/>
                &nbsp;&nbsp;}<br/>
                &nbsp;&nbsp;System.out.println();<br/>
                }
              </div>
            </div>
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-bold text-blue-800 mb-2">Enhanced For Loops:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                int[][] matrix = {<br/>
                &nbsp;&nbsp;{1, 2, 3},<br/>
                &nbsp;&nbsp;{4, 5, 6},<br/>
                &nbsp;&nbsp;{7, 8, 9}<br/>
                };<br/>
                for (int[] row : matrix) {<br/>
                &nbsp;&nbsp;for (int element : row) {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(element + " ");<br/>
                &nbsp;&nbsp;}<br/>
                &nbsp;&nbsp;System.out.println();<br/>
                }
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Jagged Arrays
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Jagged arrays are multidimensional arrays where each row can have different lengths:</p>
            
            <div class="bg-indigo-50 p-4 rounded-lg">
              <h4 class="font-bold text-indigo-800 mb-2">Jagged Array Example:</h4>
              <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm">
                // Declare jagged array<br/>
                int[][] jagged = new int[3][];<br/>
                <br/>
                // Initialize each row with different lengths<br/>
                jagged[0] = new int[2]; // First row has 2 elements<br/>
                jagged[1] = new int[4]; // Second row has 4 elements<br/>
                jagged[2] = new int[3]; // Third row has 3 elements<br/>
                <br/>
                // Initialize with values<br/>
                int[][] triangle = {<br/>
                &nbsp;&nbsp;{1},<br/>
                &nbsp;&nbsp;{2, 3},<br/>
                &nbsp;&nbsp;{4, 5, 6},<br/>
                &nbsp;&nbsp;{7, 8, 9, 10}<br/>
                };
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Multidimensional Arrays</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always check array bounds before accessing elements</li>
                <li>• Use meaningful variable names for dimensions</li>
                <li>• Initialize arrays with appropriate sizes</li>
                <li>• Use enhanced for loops when indices are not needed</li>
                <li>• Validate input when working with multidimensional arrays</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't access elements outside array bounds</li>
                <li>• Don't assume all rows have the same length</li>
                <li>• Don't use magic numbers for array dimensions</li>
                <li>• Don't ignore ArrayIndexOutOfBoundsException</li>
                <li>• Don't create unnecessarily deep multidimensional arrays</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * MultidimensionalArraysDemo.java
 * 
 * This comprehensive example demonstrates multidimensional arrays in Java:
 * - 2D array declaration and initialization
 * - Element access and modification
 * - Array traversal with different loop types
 * - Matrix operations and manipulations
 * - Jagged arrays and their applications
 * - Best practices for multidimensional array usage
 * 
 * Run this program to see how multidimensional arrays work in practice.
 */

import java.util.Arrays;

public class MultidimensionalArraysDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate 2D array declaration and initialization
        demonstrate2DArrayDeclaration();
        
        // Demonstrate 2D array element access
        demonstrate2DArrayAccess();
        
        // Demonstrate 2D array iteration
        demonstrate2DArrayIteration();
        
        // Demonstrate matrix operations
        demonstrateMatrixOperations();
        
        // Demonstrate jagged arrays
        demonstrateJaggedArrays();
        
        // Demonstrate bounds safety
        demonstrateBoundsSafety();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║              MULTIDIMENSIONAL ARRAYS DEMO                    ║");
        System.out.println("║        Working with Arrays of Arrays in Java                 ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrate2DArrayDeclaration() {
        System.out.println("🔸 2D ARRAY DECLARATION AND INITIALIZATION");
        System.out.println("   ────────────────────────────────────────");
        
        // Method 1: Declaration and initialization separately
        int[][] matrix;
        matrix = new int[3][4];
        System.out.println("   3x4 matrix initialized with zeros:");
        printMatrix(matrix);
        
        // Method 2: Declaration and initialization together
        String[][] names = new String[2][3];
        names[0][0] = "Alice";
        names[0][1] = "Bob";
        names[0][2] = "Charlie";
        names[1][0] = "David";
        names[1][1] = "Eve";
        names[1][2] = "Frank";
        System.out.println("   2x3 names matrix:");
        printStringMatrix(names);
        
        // Method 3: Initialize with values
        double[][] prices = {
            {19.99, 29.99, 39.99},
            {49.99, 59.99, 69.99},
            {79.99, 89.99, 99.99}
        };
        System.out.println("   3x3 prices matrix:");
        printDoubleMatrix(prices);
        
        System.out.println();
    }
    
    private static void demonstrate2DArrayAccess() {
        System.out.println("🔸 2D ARRAY ELEMENT ACCESS");
        System.out.println("   ───────────────────────");
        
        int[][] grid = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        System.out.println("   Original grid:");
        printMatrix(grid);
        
        System.out.println("   Accessing specific elements:");
        System.out.println("   Element at [0][0]: " + grid[0][0]);
        System.out.println("   Element at [1][2]: " + grid[1][2]);
        System.out.println("   Element at [2][3]: " + grid[2][3]);
        
        // Modifying array elements
        grid[0][0] = 100;
        grid[1][2] = 200;
        grid[2][3] = 300;
        System.out.println("   After modifications:");
        printMatrix(grid);
        
        System.out.println();
    }
    
    private static void demonstrate2DArrayIteration() {
        System.out.println("🔸 2D ARRAY ITERATION METHODS");
        System.out.println("   ───────────────────────────");
        
        int[][] numbers = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("   Numbers matrix:");
        printMatrix(numbers);
        
        // Traditional nested for loops
        System.out.println("   Using traditional nested for loops:");
        for (int i = 0; i < numbers.length; i++) {
            for (int j = 0; j < numbers[i].length; j++) {
                System.out.print(numbers[i][j] + " ");
            }
            System.out.println();
        }
        
        // Enhanced for loops
        System.out.println("   Using enhanced for loops:");
        for (int[] row : numbers) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
        
        System.out.println();
    }
    
    private static void demonstrateMatrixOperations() {
        System.out.println("🔸 MATRIX OPERATIONS");
        System.out.println("   ─────────────────");
        
        int[][] matrixA = {
            {1, 2, 3},
            {4, 5, 6}
        };
        
        int[][] matrixB = {
            {7, 8, 9},
            {10, 11, 12}
        };
        
        System.out.println("   Matrix A:");
        printMatrix(matrixA);
        
        System.out.println("   Matrix B:");
        printMatrix(matrixB);
        
        // Matrix addition
        System.out.println("   Matrix A + Matrix B:");
        int[][] sum = addMatrices(matrixA, matrixB);
        printMatrix(sum);
        
        // Matrix transposition
        System.out.println("   Transpose of Matrix A:");
        int[][] transpose = transposeMatrix(matrixA);
        printMatrix(transpose);
        
        System.out.println();
    }
    
    private static void demonstrateJaggedArrays() {
        System.out.println("🔸 JAGGED ARRAYS");
        System.out.println("   ─────────────");
        
        // Declare and initialize jagged array
        int[][] jagged = new int[4][];
        jagged[0] = new int[1];
        jagged[1] = new int[2];
        jagged[2] = new int[3];
        jagged[3] = new int[4];
        
        // Initialize elements
        int value = 1;
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = value++;
            }
        }
        
        System.out.println("   Jagged array (each row has different length):");
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                System.out.print(jagged[i][j] + " ");
            }
            System.out.println();
        }
        
        // Another example with triangle pattern
        System.out.println("   Triangle pattern using jagged array:");
        int[][] triangle = {
            {1},
            {2, 3},
            {4, 5, 6},
            {7, 8, 9, 10}
        };
        
        for (int[] row : triangle) {
            for (int element : row) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
        
        System.out.println();
    }
    
    private static void demonstrateBoundsSafety() {
        System.out.println("🔸 ARRAY BOUNDS SAFETY");
        System.out.println("   ───────────────────");
        
        int[][] smallMatrix = {
            {1, 2},
            {3, 4}
        };
        System.out.println("   Small 2x2 matrix:");
        printMatrix(smallMatrix);
        System.out.println("   Matrix dimensions: " + smallMatrix.length + "x" + smallMatrix[0].length);
        
        // Safe access
        System.out.println("   Accessing valid indices:");
        System.out.println("   [0][0]: " + smallMatrix[0][0]);
        System.out.println("   [1][1]: " + smallMatrix[1][1]);
        
        // Demonstrating bounds checking
        System.out.println("   Attempting to access invalid indices:");
        try {
            int value = smallMatrix[2][0]; // This will throw an exception
            System.out.println("   Value at [2][0]: " + value);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("   ⚠️  ArrayIndexOutOfBoundsException caught: Index out of bounds");
        }
        
        System.out.println();
    }
    
    // Utility methods for matrix operations
    private static int[][] addMatrices(int[][] a, int[][] b) {
        int rows = a.length;
        int cols = a[0].length;
        int[][] result = new int[rows][cols];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        
        return result;
    }
    
    private static int[][] transposeMatrix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                transpose[j][i] = matrix[i][j];
            }
        }
        
        return transpose;
    }
    
    // Utility methods for printing matrices
    private static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int element : row) {
                System.out.printf("%4d ", element);
            }
            System.out.println();
        }
    }
    
    private static void printStringMatrix(String[][] matrix) {
        for (String[] row : matrix) {
            for (String element : row) {
                System.out.printf("%-8s ", element);
            }
            System.out.println();
        }
    }
    
    private static void printDoubleMatrix(double[][] matrix) {
        for (double[] row : matrix) {
            for (double element : row) {
                System.out.printf("%7.2f ", element);
            }
            System.out.println();
        }
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • 2D array declaration and initialization methods           ║");
        System.out.println("║  • Element access and modification in multidimensional arrays║");
        System.out.println("║  • Different ways to iterate through 2D arrays               ║");
        System.out.println("║  • Matrix operations like addition and transposition         ║");
        System.out.println("║  • Jagged arrays and their applications                      ║");
        System.out.println("║  • Array bounds safety and exception handling                ║");
        System.out.println("║  • Best practices for working with multidimensional arrays   ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always validate array indices before accessing            ║");
        System.out.println("║  • Use enhanced for loops when indices are not needed        ║");
        System.out.println("║  • Handle ArrayIndexOutOfBoundsException appropriately      ║");
        System.out.println("║  • Consider memory usage with large multidimensional arrays  ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

`,
    exercise: `
1. Create a 2D array to store a 3x3 matrix and print all elements.
2. Create a jagged array where each row has a different number of columns.
3. Write a program to add two 2x2 matrices.
4. Create a program to transpose a 3x3 matrix.
5. Write a program to find the sum of each row in a 2D array.
`
  }
};
