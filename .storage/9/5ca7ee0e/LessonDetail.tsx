import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  FileText, 
  Code, 
  CheckCircle2,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';

export default function LessonDetail() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  // Mock lesson data - in a real app, this would come from an API or context
  const getLessonData = (id: string) => {
    const lessons: Record<string, any> = {
      'lesson-1-1': {
        title: 'Introduction to Java',
        type: 'video',
        duration: '15 min',
        module: 'Java Fundamentals',
        content: {
          overview: 'Welcome to Java programming! In this lesson, you\'ll learn what Java is, its history, and why it\'s one of the most popular programming languages in the world.',
          objectives: [
            'Understand what Java is and its key features',
            'Learn about Java\'s "Write Once, Run Anywhere" philosophy',
            'Explore Java\'s applications in various domains',
            'Understand the Java ecosystem and community'
          ],
          theory: `
# Introduction to Java

## What is Java?

Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle) in 1995. It was created by James Gosling and his team with the goal of creating a language that could run on any platform.

## Key Features of Java

### 1. Platform Independence
Java follows the "Write Once, Run Anywhere" (WORA) principle. This means that Java code compiled on one operating system can run on any other operating system without modification.

### 2. Object-Oriented Programming
Java is fully object-oriented, supporting concepts like:
- **Classes and Objects**: Building blocks of Java programs
- **Inheritance**: Ability to create new classes based on existing ones
- **Polymorphism**: One interface, multiple implementations
- **Encapsulation**: Data hiding and bundling
- **Abstraction**: Hiding complex implementation details

### 3. Automatic Memory Management
Java provides automatic memory management through garbage collection, which automatically deallocates memory that is no longer in use.

### 4. Strong Type System
Java has a strong, static type system that helps catch errors at compile time rather than runtime.

### 5. Rich Standard Library
Java comes with a comprehensive set of libraries (Java API) that provide ready-to-use functionality for common programming tasks.

## Java Applications

Java is used in various domains:

- **Enterprise Applications**: Large-scale business applications
- **Web Development**: Server-side development with frameworks like Spring
- **Mobile Development**: Android app development
- **Desktop Applications**: GUI applications using Swing or JavaFX
- **Scientific Applications**: Research and data analysis
- **Financial Services**: Banking and trading systems

## Java Virtual Machine (JVM)

The JVM is the heart of Java's platform independence. It:
- Executes Java bytecode
- Provides runtime environment
- Manages memory allocation
- Handles security

## Java Development Kit (JDK)

The JDK includes:
- **Java Compiler (javac)**: Converts Java source code to bytecode
- **Java Runtime Environment (JRE)**: Provides libraries and JVM
- **Development Tools**: Debugger, documentation tools, etc.

## Why Learn Java?

1. **High Demand**: Java developers are in high demand in the job market
2. **Versatility**: Can be used for various types of applications
3. **Strong Community**: Large, active community providing support and resources
4. **Continuous Evolution**: Regular updates and improvements
5. **Enterprise Ready**: Robust and scalable for large applications
          `,
          codeExample: `// Your first Java program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java programming!");
    }
}`,
          exercise: 'Think about what type of applications you want to build with Java. Write down three ideas for Java projects you might want to create after completing this course.'
        }
      },
      'lesson-1-3': {
        title: 'Your First Java Program',
        type: 'coding',
        duration: '25 min',
        module: 'Java Fundamentals',
        content: {
          overview: 'In this hands-on lesson, you\'ll write, compile, and run your first Java program. You\'ll learn about the basic structure of a Java program and understand each component.',
          objectives: [
            'Write your first Java program',
            'Understand the structure of a Java program',
            'Learn about the main method',
            'Compile and run Java programs'
          ],
          theory: `
# Your First Java Program

## Program Structure

Every Java program follows a specific structure. Let's break down a simple "Hello World" program:

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Component Breakdown

### 1. Class Declaration
\`\`\`java
public class HelloWorld {
\`\`\`
- **public**: Access modifier - the class can be accessed from anywhere
- **class**: Keyword to declare a class
- **HelloWorld**: Class name (must match the filename)

### 2. Main Method
\`\`\`java
public static void main(String[] args) {
\`\`\`
- **public**: Method can be accessed from outside the class
- **static**: Method belongs to the class, not to any instance
- **void**: Method doesn't return any value
- **main**: Special method name - entry point of the program
- **String[] args**: Command line arguments

### 3. Method Body
\`\`\`java
System.out.println("Hello, World!");
\`\`\`
- **System.out**: Standard output stream
- **println**: Method to print a line with a newline character

## Step-by-Step Process

### Step 1: Write the Code
Create a file named \`HelloWorld.java\` with the following content:

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("This is my first Java program!");
    }
}
\`\`\`

### Step 2: Compile the Program
Use the Java compiler to convert source code to bytecode:
\`\`\`
javac HelloWorld.java
\`\`\`
This creates a \`HelloWorld.class\` file containing bytecode.

### Step 3: Run the Program
Execute the compiled program:
\`\`\`
java HelloWorld
\`\`\`

### Expected Output:
\`\`\`
Hello, World!
This is my first Java program!
\`\`\`

## Important Rules

1. **File Name**: Must match the public class name
2. **Case Sensitive**: Java is case-sensitive
3. **Semicolons**: Every statement must end with a semicolon
4. **Braces**: Use curly braces to define code blocks
          `,
          codeExample: `public class MyFirstProgram {
    public static void main(String[] args) {
        // This is a comment
        System.out.println("Welcome to Java Programming!");
        System.out.println("Java is awesome!");
        
        // You can print numbers too
        System.out.println(2024);
        System.out.println(10 + 5);
        
        // Multiple print statements
        System.out.print("This prints without newline. ");
        System.out.println("This continues on the same line.");
    }
}`,
          exercise: 'Create a Java program that prints information about yourself: your name, age, favorite hobby, and why you want to learn Java. Use multiple System.out.println() statements.'
        }
      },
      'lesson-3-2': {
        title: 'Classes and Objects',
        type: 'coding',
        duration: '35 min',
        module: 'Object-Oriented Programming',
        content: {
          overview: 'Learn the fundamental concepts of classes and objects in Java. Understand how to create classes, instantiate objects, and work with instance variables and methods.',
          objectives: [
            'Understand the concept of classes and objects',
            'Learn how to create and use classes',
            'Work with instance variables and methods',
            'Create and manipulate objects'
          ],
          theory: `
# Classes and Objects in Java

## What is a Class?

A class is a blueprint or template that defines the structure and behavior of objects. It encapsulates data (attributes) and methods (behaviors) that operate on that data.

## What is an Object?

An object is an instance of a class. It represents a specific entity with its own set of attribute values.

## Class Declaration Syntax

\`\`\`java
public class ClassName {
    // Instance variables (attributes)
    dataType variableName;
    
    // Methods (behaviors)
    returnType methodName(parameters) {
        // method body
    }
}
\`\`\`

## Example: Student Class

\`\`\`java
public class Student {
    // Instance variables
    String name;
    int age;
    String major;
    double gpa;
    
    // Method to display student information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
    }
    
    // Method to update GPA
    public void updateGPA(double newGPA) {
        gpa = newGPA;
        System.out.println("GPA updated to: " + gpa);
    }
}
\`\`\`

## Creating Objects

To create an object, use the \`new\` keyword:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // Creating objects
        Student student1 = new Student();
        Student student2 = new Student();
        
        // Setting values for student1
        student1.name = "Alice Johnson";
        student1.age = 20;
        student1.major = "Computer Science";
        student1.gpa = 3.8;
        
        // Setting values for student2
        student2.name = "Bob Smith";
        student2.age = 19;
        student2.major = "Mathematics";
        student2.gpa = 3.6;
        
        // Using methods
        student1.displayInfo();
        System.out.println("---");
        student2.displayInfo();
        
        // Updating GPA
        student1.updateGPA(3.9);
    }
}
\`\`\`

## Instance Variables vs Local Variables

### Instance Variables:
- Declared inside a class but outside any method
- Each object has its own copy
- Automatically initialized with default values
- Accessible throughout the class

### Local Variables:
- Declared inside a method
- Only accessible within that method
- Must be initialized before use

## Method Types

### Instance Methods:
- Belong to an object instance
- Can access instance variables
- Called using object reference

### Static Methods:
- Belong to the class itself
- Cannot access instance variables directly
- Called using class name

## Access Modifiers

- **public**: Accessible from anywhere
- **private**: Accessible only within the same class
- **protected**: Accessible within package and subclasses
- **default**: Accessible within the same package
          `,
          codeExample: `// Car class example
public class Car {
    // Instance variables
    String brand;
    String model;
    int year;
    String color;
    double price;
    boolean isRunning;
    
    // Method to start the car
    public void start() {
        if (!isRunning) {
            isRunning = true;
            System.out.println(brand + " " + model + " is now running!");
        } else {
            System.out.println("Car is already running.");
        }
    }
    
    // Method to stop the car
    public void stop() {
        if (isRunning) {
            isRunning = false;
            System.out.println(brand + " " + model + " has stopped.");
        } else {
            System.out.println("Car is already stopped.");
        }
    }
    
    // Method to display car details
    public void displayDetails() {
        System.out.println("=== Car Details ===");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
        System.out.println("Price: $" + price);
        System.out.println("Running: " + (isRunning ? "Yes" : "No"));
    }
    
    // Method to calculate age of car
    public int getAge() {
        return 2024 - year;
    }
}

// Main class to test Car
public class CarTest {
    public static void main(String[] args) {
        // Create car objects
        Car car1 = new Car();
        Car car2 = new Car();
        
        // Set properties for car1
        car1.brand = "Toyota";
        car1.model = "Camry";
        car1.year = 2020;
        car1.color = "Blue";
        car1.price = 25000.0;
        
        // Set properties for car2
        car2.brand = "Honda";
        car2.model = "Civic";
        car2.year = 2019;
        car2.color = "Red";
        car2.price = 22000.0;
        
        // Use methods
        car1.displayDetails();
        System.out.println("Car age: " + car1.getAge() + " years");
        car1.start();
        car1.start(); // Try to start again
        
        System.out.println("\\n" + "=".repeat(30) + "\\n");
        
        car2.displayDetails();
        car2.start();
        car2.stop();
    }
}`,
          exercise: 'Create a "Book" class with the following attributes: title, author, pages, price, and isAvailable. Add methods to: 1) Display book information, 2) Borrow book (set isAvailable to false), 3) Return book (set isAvailable to true). Create a main method to test your Book class with at least two book objects.'
        }
      }
    };
    
    return lessons[id] || {
      title: 'Lesson Not Found',
      type: 'lesson',
      duration: '0 min',
      module: 'Unknown',
      content: {
        overview: 'This lesson content is not available.',
        objectives: [],
        theory: 'Content not found.',
        codeExample: '',
        exercise: ''
      }
    };
  };

  const lesson = getLessonData(lessonId || '');

  const getIconForType = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-5 w-5" />;
      case 'coding': return <Code className="h-5 w-5" />;
      case 'tutorial': return <Lightbulb className="h-5 w-5" />;
      case 'project': return <Target className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-800';
      case 'coding': return 'bg-green-100 text-green-800';
      case 'tutorial': return 'bg-yellow-100 text-yellow-800';
      case 'project': return 'bg-purple-100 text-purple-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const markAsCompleted = () => {
    setIsCompleted(true);
    // In a real app, this would update the completion status in a database or context
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/course')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{lesson.title}</h1>
                <p className="text-sm text-gray-600">{lesson.module}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={getBadgeColor(lesson.type)}>
                {getIconForType(lesson.type)}
                <span className="ml-2 capitalize">{lesson.type}</span>
              </Badge>
              <span className="text-sm text-gray-600">{lesson.duration}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Lesson Overview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Lesson Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{lesson.content.overview}</p>
              <div>
                <h4 className="font-semibold mb-2">Learning Objectives:</h4>
                <ul className="space-y-1">
                  {lesson.content.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="theory" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="theory">Theory</TabsTrigger>
              <TabsTrigger value="code">Code Example</TabsTrigger>
              <TabsTrigger value="exercise">Exercise</TabsTrigger>
            </TabsList>

            <TabsContent value="theory">
              <Card>
                <CardHeader>
                  <CardTitle>Theory & Concepts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {lesson.content.theory}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                  <CardDescription>
                    Study this example to understand the concepts in practice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      <code>{lesson.content.codeExample}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exercise">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Exercise</CardTitle>
                  <CardDescription>
                    Complete this exercise to reinforce your learning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700">{lesson.content.exercise}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Your Solution:</h4>
                    <Textarea
                      placeholder="Write your code here..."
                      className="min-h-[200px] font-mono text-sm"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Completion Section */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {isCompleted ? (
                    <div className="flex items-center space-x-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Lesson Completed!</span>
                    </div>
                  ) : (
                    <span className="text-gray-600">Mark this lesson as complete when you're done</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {!isCompleted && (
                    <Button onClick={markAsCompleted} className="bg-green-600 hover:bg-green-700">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Mark as Complete
                    </Button>
                  )}
                  <Button variant="outline">
                    Next Lesson
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}