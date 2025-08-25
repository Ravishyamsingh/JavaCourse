import { LessonContent } from '../../types/LessonTypes';

export const lesson_19_2: LessonContent = {
  title: 'Building a Console Application',
  type: 'lesson',
  duration: '90 min',
  module: 'Project Development',
  content: {
    overview: 'Learn to build complete console applications in Java, covering user input handling, menu systems, file operations, data validation, and error handling for robust command-line programs.',
    objectives: [
      'Design and implement console application architecture',
      'Handle user input and validation effectively',
      'Create interactive menu systems and navigation',
      'Implement file operations and data persistence',
      'Apply proper error handling and logging',
      'Build modular and maintainable console applications',
      'Test and debug console applications thoroughly'
    ],
    theory: '<div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Building a Console Application' +
      '</h1>' +
      '<p class="mt-3 text-green-100 text-lg">Creating robust command-line applications with Java</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Console Application Architecture' +
      '</h2>' +
      '<p class="text-gray-700 mb-4 leading-relaxed text-lg">' +
      'Console applications require careful architecture to handle user interaction, data processing, ' +
      'and system integration effectively while maintaining code organization and testability.' +
      '</p>' +
      '<div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mb-4">' +
      '<h4 class="font-bold text-green-800 mb-2">🏗️ Key Components</h4>' +
      '<ul class="text-green-700 space-y-1">' +
      '<li>• <strong>Main Application Class:</strong> Entry point and application lifecycle</li>' +
      '<li>• <strong>Menu System:</strong> User navigation and command handling</li>' +
      '<li>• <strong>Input Handler:</strong> User input validation and processing</li>' +
      '<li>• <strong>Business Logic:</strong> Core application functionality</li>' +
      '<li>• <strong>Data Layer:</strong> File operations and data persistence</li>' +
      '<li>• <strong>Utility Classes:</strong> Helper methods and common operations</li>' +
      '</ul>' +
      '</div>' +
      '<div class="grid md:grid-cols-2 gap-6">' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">✅ Design Principles</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Single Responsibility Principle</li>' +
      '<li>• Separation of concerns</li>' +
      '<li>• Dependency injection</li>' +
      '<li>• Error handling strategies</li>' +
      '<li>• Modular design patterns</li>' +
      '<li>• Testable code structure</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-yellow-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-yellow-800 mb-2">🎯 Best Practices</h4>' +
      '<ul class="space-y-2 text-gray-700 text-sm">' +
      '<li>• Clear user interface design</li>' +
      '<li>• Comprehensive input validation</li>' +
      '<li>• Graceful error handling</li>' +
      '<li>• Consistent output formatting</li>' +
      '<li>• Proper resource management</li>' +
      '<li>• Logging and debugging support</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'User Input and Menu Systems' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-teal-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-teal-800 mb-2">Input Handling Strategies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Scanner Class</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Standard input reading and parsing</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• nextLine() for string input</li>' +
      '<li>• nextInt() for integer input</li>' +
      '<li>• hasNext() for input validation</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">BufferedReader</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Efficient input reading with buffering</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• readLine() method</li>' +
      '<li>• Exception handling</li>' +
      '<li>• Resource management</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">Menu Design Patterns</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Pattern</th>' +
      '<th class="py-2 px-4 text-left">Use Case</th>' +
      '<th class="py-2 px-4 text-left">Benefits</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Command Pattern</td>' +
      '<td class="py-2 px-4">Menu option handling</td>' +
      '<td class="py-2 px-4">Extensible and maintainable</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">State Pattern</td>' +
      '<td class="py-2 px-4">Application state management</td>' +
      '<td class="py-2 px-4">Clear state transitions</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Strategy Pattern</td>' +
      '<td class="py-2 px-4">Different input processing</td>' +
      '<td class="py-2 px-4">Flexible input handling</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'File Operations and Data Persistence' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-purple-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-purple-800 mb-2">File Handling Approaches</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Text Files</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Simple data storage and retrieval</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• CSV format for structured data</li>' +
      '<li>• Properties files for configuration</li>' +
      '<li>• JSON for complex data structures</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Binary Files</h5>' +
      '<p class="text-sm text-gray-700 mb-2">Efficient data storage</p>' +
      '<ul class="text-xs space-y-1">' +
      '<li>• Object serialization</li>' +
      '<li>• Custom binary formats</li>' +
      '<li>• Database file formats</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>' +
      'Error Handling and Validation' +
      '</h2>' +
      '<div class="space-y-6">' +
      '<div class="bg-orange-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-orange-800 mb-2">Validation Strategies</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Input Validation</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Type checking and conversion</li>' +
      '<li>• Range and format validation</li>' +
      '<li>• Business rule enforcement</li>' +
      '<li>• User-friendly error messages</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-orange-800 mb-2">Exception Handling</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Try-catch blocks for error recovery</li>' +
      '<li>• Custom exception classes</li>' +
      '<li>• Logging for debugging</li>' +
      '<li>• Graceful application shutdown</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '</div>',
    codeExample: '// Complete Console Application Example - Student Management System\n\n' +
      'import java.util.*;\n' +
      'import java.io.*;\n' +
      'import java.time.LocalDate;\n' +
      'import java.time.format.DateTimeFormatter;\n' +
      'import java.time.format.DateTimeParseException;\n' +
      'import java.util.stream.Collectors;\n\n' +
      '// Main Application Class\n' +
      'public class StudentManagementApp {\n' +
      '    private static final Scanner scanner = new Scanner(System.in);\n' +
      '    private static final StudentService studentService = new StudentService();\n' +
      '    private static final MenuHandler menuHandler = new MenuHandler();\n' +
      '    \n' +
      '    public static void main(String[] args) {\n' +
      '        System.out.println("=== Student Management System ===");\n' +
      '        System.out.println("Welcome! Loading application...");\n' +
      '        \n' +
      '        try {\n' +
      '            // Initialize application\n' +
      '            studentService.loadStudentsFromFile();\n' +
      '            \n' +
      '            // Main application loop\n' +
      '            boolean running = true;\n' +
      '            while (running) {\n' +
      '                try {\n' +
      '                    menuHandler.displayMainMenu();\n' +
      '                    int choice = InputValidator.getIntInput("Enter your choice: ", 1, 7);\n' +
      '                    running = menuHandler.handleMenuChoice(choice, studentService);\n' +
      '                } catch (Exception e) {\n' +
      '                    System.err.println("Error: " + e.getMessage());\n' +
      '                    System.out.println("Please try again.");\n' +
      '                }\n' +
      '            }\n' +
      '            \n' +
      '        } catch (Exception e) {\n' +
      '            System.err.println("Fatal error: " + e.getMessage());\n' +
      '            e.printStackTrace();\n' +
      '        } finally {\n' +
      '            // Cleanup resources\n' +
      '            try {\n' +
      '                studentService.saveStudentsToFile();\n' +
      '                scanner.close();\n' +
      '                System.out.println("Application closed successfully.");\n' +
      '            } catch (Exception e) {\n' +
      '                System.err.println("Error during cleanup: " + e.getMessage());\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// Student Model\n' +
      'class Student {\n' +
      '    private String studentId;\n' +
      '    private String firstName;\n' +
      '    private String lastName;\n' +
      '    private String email;\n' +
      '    private LocalDate dateOfBirth;\n' +
      '    private String major;\n' +
      '    private double gpa;\n' +
      '    private List<String> courses;\n' +
      '    \n' +
      '    public Student(String studentId, String firstName, String lastName, \n' +
      '                  String email, LocalDate dateOfBirth, String major) {\n' +
      '        this.studentId = studentId;\n' +
      '        this.firstName = firstName;\n' +
      '        this.lastName = lastName;\n' +
      '        this.email = email;\n' +
      '        this.dateOfBirth = dateOfBirth;\n' +
      '        this.major = major;\n' +
      '        this.gpa = 0.0;\n' +
      '        this.courses = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addCourse(String course) {\n' +
      '        if (!courses.contains(course)) {\n' +
      '            courses.add(course);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public void updateGPA(double gpa) {\n' +
      '        if (gpa >= 0.0 && gpa <= 4.0) {\n' +
      '            this.gpa = gpa;\n' +
      '        } else {\n' +
      '            throw new IllegalArgumentException("GPA must be between 0.0 and 4.0");\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    @Override\n' +
      '    public String toString() {\n' +
      '        return String.format("ID: %s | Name: %s %s | Email: %s | Major: %s | GPA: %.2f", \n' +
      '                            studentId, firstName, lastName, email, major, gpa);\n' +
      '    }\n' +
      '    \n' +
      '    // Getters and setters\n' +
      '    public String getStudentId() { return studentId; }\n' +
      '    public String getFirstName() { return firstName; }\n' +
      '    public String getLastName() { return lastName; }\n' +
      '    public String getEmail() { return email; }\n' +
      '    public String getMajor() { return major; }\n' +
      '    public double getGpa() { return gpa; }\n' +
      '    public List<String> getCourses() { return courses; }\n' +
      '}\n\n' +
      '// Menu Handler\n' +
      'class MenuHandler {\n' +
      '    \n' +
      '    public void displayMainMenu() {\n' +
      '        System.out.println("\\n" + "=".repeat(50));\n' +
      '        System.out.println("           STUDENT MANAGEMENT SYSTEM");\n' +
      '        System.out.println("=".repeat(50));\n' +
      '        System.out.println("1. Add New Student");\n' +
      '        System.out.println("2. View All Students");\n' +
      '        System.out.println("3. Search Student");\n' +
      '        System.out.println("4. Update Student");\n' +
      '        System.out.println("5. Delete Student");\n' +
      '        System.out.println("6. Generate Reports");\n' +
      '        System.out.println("7. Exit");\n' +
      '        System.out.println("=".repeat(50));\n' +
      '    }\n' +
      '    \n' +
      '    public boolean handleMenuChoice(int choice, StudentService service) {\n' +
      '        switch (choice) {\n' +
      '            case 1:\n' +
      '                addNewStudent(service);\n' +
      '                break;\n' +
      '            case 2:\n' +
      '                viewAllStudents(service);\n' +
      '                break;\n' +
      '            case 3:\n' +
      '                searchStudent(service);\n' +
      '                break;\n' +
      '            case 4:\n' +
      '                updateStudent(service);\n' +
      '                break;\n' +
      '            case 5:\n' +
      '                deleteStudent(service);\n' +
      '                break;\n' +
      '            case 6:\n' +
      '                generateReports(service);\n' +
      '                break;\n' +
      '            case 7:\n' +
      '                System.out.println("Thank you for using Student Management System!");\n' +
      '                return false;\n' +
      '            default:\n' +
      '                System.out.println("Invalid choice. Please try again.");\n' +
      '        }\n' +
      '        return true;\n' +
      '    }\n' +
      '    \n' +
      '    private void addNewStudent(StudentService service) {\n' +
      '        System.out.println("\\n--- Add New Student ---");\n' +
      '        \n' +
      '        try {\n' +
      '            String studentId = InputValidator.getStringInput("Student ID: ");\n' +
      '            \n' +
      '            // Check if student already exists\n' +
      '            if (service.findStudentById(studentId) != null) {\n' +
      '                System.out.println("Student with ID " + studentId + " already exists!");\n' +
      '                return;\n' +
      '            }\n' +
      '            \n' +
      '            String firstName = InputValidator.getStringInput("First Name: ");\n' +
      '            String lastName = InputValidator.getStringInput("Last Name: ");\n' +
      '            String email = InputValidator.getEmailInput("Email: ");\n' +
      '            LocalDate dateOfBirth = InputValidator.getDateInput("Date of Birth (yyyy-mm-dd): ");\n' +
      '            String major = InputValidator.getStringInput("Major: ");\n' +
      '            \n' +
      '            Student student = new Student(studentId, firstName, lastName, email, dateOfBirth, major);\n' +
      '            service.addStudent(student);\n' +
      '            \n' +
      '            System.out.println("Student added successfully!");\n' +
      '            \n' +
      '        } catch (Exception e) {\n' +
      '            System.err.println("Error adding student: " + e.getMessage());\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void viewAllStudents(StudentService service) {\n' +
      '        System.out.println("\\n--- All Students ---");\n' +
      '        List<Student> students = service.getAllStudents();\n' +
      '        \n' +
      '        if (students.isEmpty()) {\n' +
      '            System.out.println("No students found.");\n' +
      '            return;\n' +
      '        }\n' +
      '        \n' +
      '        System.out.println("Total Students: " + students.size());\n' +
      '        System.out.println("-".repeat(80));\n' +
      '        \n' +
      '        for (Student student : students) {\n' +
      '            System.out.println(student);\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void searchStudent(StudentService service) {\n' +
      '        System.out.println("\\n--- Search Student ---");\n' +
      '        String searchTerm = InputValidator.getStringInput("Enter Student ID or Name: ");\n' +
      '        \n' +
      '        List<Student> results = service.searchStudents(searchTerm);\n' +
      '        \n' +
      '        if (results.isEmpty()) {\n' +
      '            System.out.println("No students found matching: " + searchTerm);\n' +
      '        } else {\n' +
      '            System.out.println("Search Results (" + results.size() + " found):");\n' +
      '            System.out.println("-".repeat(80));\n' +
      '            for (Student student : results) {\n' +
      '                System.out.println(student);\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void updateStudent(StudentService service) {\n' +
      '        System.out.println("\\n--- Update Student ---");\n' +
      '        String studentId = InputValidator.getStringInput("Enter Student ID to update: ");\n' +
      '        \n' +
      '        Student student = service.findStudentById(studentId);\n' +
      '        if (student == null) {\n' +
      '            System.out.println("Student not found with ID: " + studentId);\n' +
      '            return;\n' +
      '        }\n' +
      '        \n' +
      '        System.out.println("Current student info: " + student);\n' +
      '        System.out.println("\\nWhat would you like to update?");\n' +
      '        System.out.println("1. GPA");\n' +
      '        System.out.println("2. Add Course");\n' +
      '        System.out.println("3. Major");\n' +
      '        \n' +
      '        int choice = InputValidator.getIntInput("Enter choice: ", 1, 3);\n' +
      '        \n' +
      '        try {\n' +
      '            switch (choice) {\n' +
      '                case 1:\n' +
      '                    double newGpa = InputValidator.getDoubleInput("Enter new GPA (0.0-4.0): ", 0.0, 4.0);\n' +
      '                    student.updateGPA(newGpa);\n' +
      '                    System.out.println("GPA updated successfully!");\n' +
      '                    break;\n' +
      '                case 2:\n' +
      '                    String course = InputValidator.getStringInput("Enter course name: ");\n' +
      '                    student.addCourse(course);\n' +
      '                    System.out.println("Course added successfully!");\n' +
      '                    break;\n' +
      '                case 3:\n' +
      '                    String newMajor = InputValidator.getStringInput("Enter new major: ");\n' +
      '                    // Note: In real implementation, you would have a setter for major\n' +
      '                    System.out.println("Major update functionality would be implemented here");\n' +
      '                    break;\n' +
      '            }\n' +
      '            \n' +
      '            service.updateStudent(student);\n' +
      '            \n' +
      '        } catch (Exception e) {\n' +
      '            System.err.println("Error updating student: " + e.getMessage());\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void deleteStudent(StudentService service) {\n' +
      '        System.out.println("\\n--- Delete Student ---");\n' +
      '        String studentId = InputValidator.getStringInput("Enter Student ID to delete: ");\n' +
      '        \n' +
      '        Student student = service.findStudentById(studentId);\n' +
      '        if (student == null) {\n' +
      '            System.out.println("Student not found with ID: " + studentId);\n' +
      '            return;\n' +
      '        }\n' +
      '        \n' +
      '        System.out.println("Student to delete: " + student);\n' +
      '        String confirmation = InputValidator.getStringInput("Are you sure? (yes/no): ");\n' +
      '        \n' +
      '        if (confirmation.equalsIgnoreCase("yes")) {\n' +
      '            service.deleteStudent(studentId);\n' +
      '            System.out.println("Student deleted successfully!");\n' +
      '        } else {\n' +
      '            System.out.println("Delete operation cancelled.");\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    private void generateReports(StudentService service) {\n' +
      '        System.out.println("\\n--- Generate Reports ---");\n' +
      '        System.out.println("1. Students by Major");\n' +
      '        System.out.println("2. GPA Statistics");\n' +
      '        System.out.println("3. Course Enrollment");\n' +
      '        \n' +
      '        int choice = InputValidator.getIntInput("Select report type: ", 1, 3);\n' +
      '        \n' +
      '        switch (choice) {\n' +
      '            case 1:\n' +
      '                service.generateMajorReport();\n' +
      '                break;\n' +
      '            case 2:\n' +
      '                service.generateGPAReport();\n' +
      '                break;\n' +
      '            case 3:\n' +
      '                service.generateCourseReport();\n' +
      '                break;\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// Input Validation Utility\n' +
      'class InputValidator {\n' +
      '    private static final Scanner scanner = new Scanner(System.in);\n' +
      '    \n' +
      '    public static String getStringInput(String prompt) {\n' +
      '        System.out.print(prompt);\n' +
      '        String input = scanner.nextLine().trim();\n' +
      '        \n' +
      '        while (input.isEmpty()) {\n' +
      '            System.out.print("Input cannot be empty. " + prompt);\n' +
      '            input = scanner.nextLine().trim();\n' +
      '        }\n' +
      '        \n' +
      '        return input;\n' +
      '    }\n' +
      '    \n' +
      '    public static int getIntInput(String prompt, int min, int max) {\n' +
      '        while (true) {\n' +
      '            try {\n' +
      '                System.out.print(prompt);\n' +
      '                int value = Integer.parseInt(scanner.nextLine().trim());\n' +
      '                \n' +
      '                if (value >= min && value <= max) {\n' +
      '                    return value;\n' +
      '                } else {\n' +
      '                    System.out.println("Please enter a number between " + min + " and " + max);\n' +
      '                }\n' +
      '            } catch (NumberFormatException e) {\n' +
      '                System.out.println("Please enter a valid number.");\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public static double getDoubleInput(String prompt, double min, double max) {\n' +
      '        while (true) {\n' +
      '            try {\n' +
      '                System.out.print(prompt);\n' +
      '                double value = Double.parseDouble(scanner.nextLine().trim());\n' +
      '                \n' +
      '                if (value >= min && value <= max) {\n' +
      '                    return value;\n' +
      '                } else {\n' +
      '                    System.out.println("Please enter a number between " + min + " and " + max);\n' +
      '                }\n' +
      '            } catch (NumberFormatException e) {\n' +
      '                System.out.println("Please enter a valid number.");\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public static String getEmailInput(String prompt) {\n' +
      '        while (true) {\n' +
      '            String email = getStringInput(prompt);\n' +
      '            if (email.matches("^[\\\\w.-]+@[\\\\w.-]+\\\\.\\\\w+$")) {\n' +
      '                return email;\n' +
      '            } else {\n' +
      '                System.out.println("Please enter a valid email address.");\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public static LocalDate getDateInput(String prompt) {\n' +
      '        while (true) {\n' +
      '            try {\n' +
      '                String dateStr = getStringInput(prompt);\n' +
      '                return LocalDate.parse(dateStr, DateTimeFormatter.ofPattern("yyyy-MM-dd"));\n' +
      '            } catch (DateTimeParseException e) {\n' +
      '                System.out.println("Please enter date in yyyy-MM-dd format.");\n' +
      '            }\n' +
      '        }\n' +
      '    }\n' +
      '}\n\n' +
      '// Student Service\n' +
      'class StudentService {\n' +
      '    private List<Student> students;\n' +
      '    private static final String DATA_FILE = "students.csv";\n' +
      '    \n' +
      '    public StudentService() {\n' +
      '        this.students = new ArrayList<>();\n' +
      '    }\n' +
      '    \n' +
      '    public void addStudent(Student student) {\n' +
      '        students.add(student);\n' +
      '    }\n' +
      '    \n' +
      '    public List<Student> getAllStudents() {\n' +
      '        return new ArrayList<>(students);\n' +
      '    }\n' +
      '    \n' +
      '    public Student findStudentById(String studentId) {\n' +
      '        return students.stream()\n' +
      '                .filter(s -> s.getStudentId().equals(studentId))\n' +
      '                .findFirst()\n' +
      '                .orElse(null);\n' +
      '    }\n' +
      '    \n' +
      '    public List<Student> searchStudents(String searchTerm) {\n' +
      '        return students.stream()\n' +
      '                .filter(s -> s.getStudentId().contains(searchTerm) || \n' +
      '                           (s.getFirstName() + " " + s.getLastName()).toLowerCase().contains(searchTerm.toLowerCase()))\n' +
      '                .collect(Collectors.toList());\n' +
      '    }\n' +
      '    \n' +
      '    public void updateStudent(Student student) {\n' +
      '        // In a real implementation, you might need to update the list\n' +
      '        System.out.println("Student updated: " + student.getStudentId());\n' +
      '    }\n' +
      '    \n' +
      '    public void deleteStudent(String studentId) {\n' +
      '        students.removeIf(s -> s.getStudentId().equals(studentId));\n' +
      '    }\n' +
      '    \n' +
      '    public void loadStudentsFromFile() {\n' +
      '        try (BufferedReader reader = new BufferedReader(new FileReader(DATA_FILE))) {\n' +
      '            String line;\n' +
      '            reader.readLine(); // Skip header\n' +
      '            while ((line = reader.readLine()) != null) {\n' +
      '                String[] parts = line.split(",");\n' +
      '                if (parts.length >= 6) {\n' +
      '                    Student student = new Student(\n' +
      '                        parts[0], parts[1], parts[2], parts[3], \n' +
      '                        LocalDate.parse(parts[4]), parts[5]\n' +
      '                    );\n' +
      '                    students.add(student);\n' +
      '                }\n' +
      '            }\n' +
      '            System.out.println("Loaded " + students.size() + " students from file.");\n' +
      '        } catch (IOException e) {\n' +
      '            System.out.println("No existing data file found. Starting fresh.");\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public void saveStudentsToFile() {\n' +
      '        try (PrintWriter writer = new PrintWriter(new FileWriter(DATA_FILE))) {\n' +
      '            writer.println("ID,First Name,Last Name,Email,Date of Birth,Major");\n' +
      '            for (Student student : students) {\n' +
      '                writer.println(student.getStudentId() + "," + \n' +
      '                              student.getFirstName() + "," + \n' +
      '                              student.getLastName() + "," + \n' +
      '                              student.getEmail() + "," + \n' +
      '                              student.getDateOfBirth() + "," + \n' +
      '                              student.getMajor());\n' +
      '            }\n' +
      '            System.out.println("Saved " + students.size() + " students to file.");\n' +
      '        } catch (IOException e) {\n' +
      '            System.err.println("Error saving students to file: " + e.getMessage());\n' +
      '        }\n' +
      '    }\n' +
      '    \n' +
      '    public void generateMajorReport() {\n' +
      '        Map<String, Long> majorCount = students.stream()\n' +
      '                .collect(Collectors.groupingBy(Student::getMajor, Collectors.counting()));\n' +
      '        \n' +
      '        System.out.println("\\n--- Students by Major ---");\n' +
      '        majorCount.forEach((major, count) -> \n' +
      '            System.out.println(major + ": " + count + " students"));\n' +
      '    }\n' +
      '    \n' +
      '    public void generateGPAReport() {\n' +
      '        DoubleSummaryStatistics stats = students.stream()\n' +
      '                .mapToDouble(Student::getGpa)\n' +
      '                .summaryStatistics();\n' +
      '        \n' +
      '        System.out.println("\\n--- GPA Statistics ---");\n' +
      '        System.out.printf("Average GPA: %.2f\\n", stats.getAverage());\n' +
      '        System.out.printf("Highest GPA: %.2f\\n", stats.getMax());\n' +
      '        System.out.printf("Lowest GPA: %.2f\\n", stats.getMin());\n' +
      '    }\n' +
      '    \n' +
      '    public void generateCourseReport() {\n' +
      '        Map<String, Long> courseCount = students.stream()\n' +
      '                .flatMap(s -> s.getCourses().stream())\n' +
      '                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n' +
      '        \n' +
      '        System.out.println("\\n--- Course Enrollment ---");\n' +
      '        courseCount.entrySet().stream()\n' +
      '                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())\n' +
      '                .forEach(entry -> \n' +
      '                    System.out.println(entry.getKey() + ": " + entry.getValue() + " students"));\n' +
      '    }\n' +
      '}',
    exercise: '<div class="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-8 shadow-2xl">' +
      '<h1 class="text-3xl font-bold m-0 flex items-center">' +
      '<span class="w-3 h-10 bg-white rounded mr-4"></span>' +
      'Exercise: Build a Task Management Console Application' +
      '</h1>' +
      '<p class="mt-3 text-green-100 text-lg">Create a complete console application for managing tasks and projects</p>' +
      '</div>' +
      '<div class="space-y-8">' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>' +
      'Application Requirements' +
      '</h2>' +
      '<div class="bg-green-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-green-800 mb-2">📋 Task Management Features</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Core Functionality</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Add new tasks with title, description, priority</li>' +
      '<li>• View all tasks with filtering options</li>' +
      '<li>• Update task status (pending, in-progress, completed)</li>' +
      '<li>• Delete tasks</li>' +
      '<li>• Search tasks by title or description</li>' +
      '<li>• Mark tasks as complete</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-green-800 mb-2">Advanced Features</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Set due dates for tasks</li>' +
      '<li>• Assign tasks to categories/projects</li>' +
      '<li>• Generate task statistics</li>' +
      '<li>• Export tasks to CSV file</li>' +
      '<li>• Persistent data storage</li>' +
      '<li>• User-friendly menu system</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gray-800 text-green-400 p-4 rounded-lg">' +
      '<h4 class="text-white mb-2">💡 Implementation Tasks</h4>' +
      '<pre class="text-sm">' +
      '1. Create Task model class with attributes\\n' +
      '2. Implement TaskService for business logic\\n' +
      '3. Build MenuHandler for user interaction\\n' +
      '4. Add InputValidator for data validation\\n' +
      '5. Implement file operations for persistence\\n' +
      '6. Create main application class\\n' +
      '7. Add error handling and logging\\n' +
      '8. Test all functionality thoroughly</pre>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>' +
      'Class Structure and Design' +
      '</h2>' +
      '<div class="bg-teal-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-teal-800 mb-2">🏗️ Required Classes</h4>' +
      '<div class="grid md:grid-cols-2 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Model Classes</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Task - Core data model</li>' +
      '<li>• Project - Task grouping (optional)</li>' +
      '<li>• Category - Task categorization</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-teal-800 mb-2">Service Classes</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• TaskService - Business logic</li>' +
      '<li>• FileService - Data persistence</li>' +
      '<li>• ReportService - Statistics generation</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-blue-50 p-4 rounded-lg">' +
      '<h4 class="font-bold text-blue-800 mb-2">🔧 Technical Requirements</h4>' +
      '<div class="overflow-x-auto">' +
      '<table class="min-w-full bg-white rounded border">' +
      '<thead>' +
      '<tr class="bg-gray-100">' +
      '<th class="py-2 px-4 text-left">Requirement</th>' +
      '<th class="py-2 px-4 text-left">Implementation</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Input Validation</td>' +
      '<td class="py-2 px-4">Use custom validation methods</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Error Handling</td>' +
      '<td class="py-2 px-4">Try-catch blocks with user feedback</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">Data Persistence</td>' +
      '<td class="py-2 px-4">CSV file storage with buffering</td>' +
      '</tr>' +
      '<tr class="border-b">' +
      '<td class="py-2 px-4 font-medium">User Interface</td>' +
      '<td class="py-2 px-4">Clear menus and formatted output</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</section>' +
      '<section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">' +
      '<h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">' +
      '<span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>' +
      'Testing and Validation' +
      '</h2>' +
      '<div class="bg-purple-50 p-4 rounded-lg mb-4">' +
      '<h4 class="font-bold text-purple-800 mb-2">✅ Test Scenarios</h4>' +
      '<div class="grid md:grid-cols-3 gap-4">' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Functionality Tests</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Add 10+ tasks</li>' +
      '<li>• Update task status</li>' +
      '<li>• Search by keywords</li>' +
      '<li>• Delete tasks</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Error Handling</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Invalid input</li>' +
      '<li>• File not found</li>' +
      '<li>• Data corruption</li>' +
      '<li>• Memory issues</li>' +
      '</ul>' +
      '</div>' +
      '<div class="bg-white p-3 rounded border">' +
      '<h5 class="font-bold text-purple-800 mb-2">Performance</h5>' +
      '<ul class="text-sm space-y-1">' +
      '<li>• Large dataset handling</li>' +
      '<li>• Response time</li>' +
      '<li>• Memory usage</li>' +
      '<li>• Resource cleanup</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mt-8">' +
      '<h3 class="text-xl font-bold mb-2">🎯 Learning Outcomes</h3>' +
      '<p class="text-green-100">' +
      'After completing this exercise, you will have built a complete console application ' +
      'with proper architecture, data persistence, error handling, and user interaction.' +
      '</p>' +
      '</div>' +
      '</div>'
  }
};