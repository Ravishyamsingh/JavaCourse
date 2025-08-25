export interface QuizQuestion {
  id: number;
  module: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // Module 1: Java Fundamentals
  {
    id: 1,
    module: "Java Fundamentals",
    question: "What is the correct way to declare a variable in Java?",
    options: [
      "var name = value;",
      "variable name = value;",
      "type name = value;",
      "declare name = value;"
    ],
    correctAnswer: 2,
    explanation: "In Java, variables are declared with the syntax: type variableName = value;"
  },
  {
    id: 2,
    module: "Java Fundamentals",
    question: "Which keyword is used to define a class in Java?",
    options: [
      "class",
      "Class",
      "define",
      "struct"
    ],
    correctAnswer: 0,
    explanation: "The 'class' keyword is used to define a class in Java."
  },
  {
    id: 3,
    module: "Java Fundamentals",
    question: "What is the entry point of a Java application?",
    options: [
      "main()",
      "start()",
      "init()",
      "run()"
    ],
    correctAnswer: 0,
    explanation: "The main() method is the entry point of a Java application."
  },
  
  // Module 3: Object-Oriented Programming
  {
    id: 4,
    module: "Object-Oriented Programming",
    question: "Which of the following is NOT a pillar of OOP?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Compilation"
    ],
    correctAnswer: 3,
    explanation: "The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction."
  },
  {
    id: 5,
    module: "Object-Oriented Programming",
    question: "What does the 'final' keyword mean when applied to a class?",
    options: [
      "The class cannot be instantiated",
      "The class cannot be extended",
      "The class cannot have methods",
      "The class cannot have variables"
    ],
    correctAnswer: 1,
    explanation: "When 'final' is applied to a class, it means the class cannot be extended (inherited)."
  },
  
  // Module 5: Collections Framework
  {
    id: 6,
    module: "Collections Framework",
    question: "Which interface represents an ordered collection that allows duplicate elements?",
    options: [
      "Set",
      "Map",
      "List",
      "Collection"
    ],
    correctAnswer: 2,
    explanation: "The List interface represents an ordered collection that allows duplicate elements."
  },
  {
    id: 7,
    module: "Collections Framework",
    question: "Which collection class is synchronized?",
    options: [
      "ArrayList",
      "HashMap",
      "Vector",
      "HashSet"
    ],
    correctAnswer: 2,
    explanation: "Vector is synchronized, while ArrayList, HashMap, and HashSet are not."
  },
  
  // Module 6: Exception Handling
  {
    id: 8,
    module: "Exception Handling",
    question: "Which keyword is used to explicitly throw an exception?",
    options: [
      "throw",
      "throws",
      "exception",
      "raise"
    ],
    correctAnswer: 0,
    explanation: "The 'throw' keyword is used to explicitly throw an exception."
  },
  {
    id: 9,
    module: "Exception Handling",
    question: "Which block is always executed whether an exception occurs or not?",
    options: [
      "try",
      "catch",
      "finally",
      "throw"
    ],
    correctAnswer: 2,
    explanation: "The 'finally' block is always executed whether an exception occurs or not."
  },
  
  // Module 8: Multithreading
  {
    id: 10,
    module: "Multithreading",
    question: "Which method is used to start a thread in Java?",
    options: [
      "run()",
      "start()",
      "execute()",
      "begin()"
    ],
    correctAnswer: 1,
    explanation: "The start() method is used to start a thread in Java, which then calls the run() method."
  },
  {
    id: 11,
    module: "Multithreading",
    question: "Which keyword ensures that only one thread can access a method or block at a time?",
    options: [
      "volatile",
      "static",
      "synchronized",
      "final"
    ],
    correctAnswer: 2,
    explanation: "The 'synchronized' keyword ensures that only one thread can access a method or block at a time."
  },
  
  // Module 9: Database Connectivity (JDBC)
  {
    id: 12,
    module: "Database Connectivity (JDBC)",
    question: "Which interface is used to execute SQL statements in JDBC?",
    options: [
      "Statement",
      "Connection",
      "ResultSet",
      "Driver"
    ],
    correctAnswer: 0,
    explanation: "The Statement interface is used to execute SQL statements in JDBC."
  },
  {
    id: 13,
    module: "Database Connectivity (JDBC)",
    question: "Which method is used to execute a SELECT query in JDBC?",
    options: [
      "execute()",
      "executeQuery()",
      "executeUpdate()",
      "executeSelect()"
    ],
    correctAnswer: 1,
    explanation: "The executeQuery() method is used to execute a SELECT query in JDBC."
  },
  
  // Module 10: GUI Development with Swing
  {
    id: 14,
    module: "GUI Development with Swing",
    question: "Which class is the base class for all Swing components?",
    options: [
      "Component",
      "JComponent",
      "Container",
      "Object"
    ],
    correctAnswer: 1,
    explanation: "JComponent is the base class for all Swing components except top-level containers."
  },
  {
    id: 15,
    module: "GUI Development with Swing",
    question: "Which layout manager arranges components in a grid with equal-sized cells?",
    options: [
      "FlowLayout",
      "BorderLayout",
      "GridLayout",
      "GridBagLayout"
    ],
    correctAnswer: 2,
    explanation: "GridLayout arranges components in a grid with equal-sized cells."
  },
  
  // Module 12: Spring Framework Introduction
  {
    id: 16,
    module: "Spring Framework Introduction",
    question: "What is the core concept of Spring Framework?",
    options: [
      "Object-oriented programming",
      "Inversion of Control",
      "Multithreading",
      "Database connectivity"
    ],
    correctAnswer: 1,
    explanation: "Inversion of Control (IoC) is the core concept of Spring Framework."
  },
  {
    id: 17,
    module: "Spring Framework Introduction",
    question: "Which annotation is used to inject dependencies in Spring?",
    options: [
      "@Inject",
      "@Autowired",
      "@Component",
      "@Service"
    ],
    correctAnswer: 1,
    explanation: "The @Autowired annotation is used to inject dependencies in Spring."
  },
  
  // Module 16: Web Development with Java
  {
    id: 18,
    module: "Web Development with Java",
    question: "Which technology is used to create dynamic web pages in Java?",
    options: [
      "HTML",
      "CSS",
      "JSP",
      "JavaScript"
    ],
    correctAnswer: 2,
    explanation: "JSP (JavaServer Pages) is used to create dynamic web pages in Java."
  },
  {
    id: 19,
    module: "Web Development with Java",
    question: "What does MVC stand for in web development?",
    options: [
      "Model View Controller",
      "Module View Component",
      "Method Variable Class",
      "Main View Content"
    ],
    correctAnswer: 0,
    explanation: "MVC stands for Model View Controller, a design pattern used in web development."
  },
  
  // Module 20: Career and Advanced Learning
  {
    id: 20,
    module: "Career and Advanced Learning",
    question: "Which certification is considered the standard for Java developers?",
    options: [
      "Oracle Certified Java Developer",
      "Oracle Certified Professional, Java SE Programmer",
      "Java Master Certification",
      "Sun Certified Java Developer"
    ],
    correctAnswer: 1,
    explanation: "Oracle Certified Professional, Java SE Programmer is the standard certification for Java developers."
  }
];

export const getQuizQuestionsByModule = (module: string) => {
  return quizQuestions.filter(question => question.module === module);
};

export const getRandomQuizQuestions = (count: number) => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};