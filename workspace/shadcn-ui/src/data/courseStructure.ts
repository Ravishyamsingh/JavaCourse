export interface ModuleStructure {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: LessonStructure[];
}

export interface LessonStructure {
  id: string;
  title: string;
  duration: string;
  type: 'lesson' | 'tutorial' | 'coding' | 'project';
}

export const courseModules: ModuleStructure[] = [
  {
    id: 'module-1',
    title: 'Java Fundamentals',
    description: 'Learn the basics of Java programming',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-1-1', title: 'Introduction to Java', duration: '25 min', type: 'lesson' },
      { id: 'lesson-1-2', title: 'Setting up Development Environment', duration: '35 min', type: 'tutorial' },
      { id: 'lesson-1-3', title: 'Your First Java Program', duration: '35 min', type: 'coding' },
      { id: 'lesson-1-4', title: 'Variables and Data Types', duration: '40 min', type: 'lesson' },
      { id: 'lesson-1-5', title: 'Operators in Java', duration: '35 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-2',
    title: 'Control Flow and Loops',
    description: 'Master decision making and loops',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-2-1', title: 'Conditional Statements', duration: '30 min', type: 'lesson' },
      { id: 'lesson-2-2', title: 'Switch Statements', duration: '25 min', type: 'lesson' },
      { id: 'lesson-2-3', title: 'For Loops', duration: '25 min', type: 'coding' },
      { id: 'lesson-2-4', title: 'While and Do-While Loops', duration: '25 min', type: 'coding' },
      { id: 'lesson-2-5', title: 'Break and Continue', duration: '15 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-3',
    title: 'Object-Oriented Programming',
    description: 'Learn OOP concepts and principles',
    duration: '4-5 hours',
    lessons: [
      { id: 'lesson-3-1', title: 'Introduction to OOP', duration: '30 min', type: 'lesson' },
      { id: 'lesson-3-2', title: 'Classes and Objects', duration: '35 min', type: 'coding' },
      { id: 'lesson-3-3', title: 'Constructors and Methods', duration: '40 min', type: 'coding' },
      { id: 'lesson-3-4', title: 'Inheritance', duration: '45 min', type: 'lesson' },
      { id: 'lesson-3-5', title: 'Polymorphism', duration: '35 min', type: 'lesson' },
      { id: 'lesson-3-6', title: 'Encapsulation', duration: '30 min', type: 'lesson' },
      { id: 'lesson-3-7', title: 'Abstract Classes and Interfaces', duration: '40 min', type: 'coding' }
    ]
  },
  {
    id: 'module-4',
    title: 'Arrays and Collections',
    description: 'Working with arrays and collections',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-4-1', title: 'Introduction to Arrays', duration: '25 min', type: 'lesson' },
      { id: 'lesson-4-2', title: 'Multidimensional Arrays', duration: '30 min', type: 'coding' },
      { id: 'lesson-4-3', title: 'Array Manipulation and Sorting', duration: '35 min', type: 'coding' },
      { id: 'lesson-4-4', title: 'Introduction to Collections Framework', duration: '25 min', type: 'lesson' },
      { id: 'lesson-4-5', title: 'ArrayList and LinkedList', duration: '40 min', type: 'coding' },
      { id: 'lesson-4-6', title: 'HashMap and HashSet', duration: '35 min', type: 'coding' },
      { id: 'lesson-4-7', title: 'Advanced Collections (TreeMap, TreeSet, Queue)', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-5',
    title: 'String Manipulation and Regular Expressions',
    description: 'Master string manipulation and pattern matching',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-5-1', title: 'String Class and String Methods', duration: '35 min', type: 'lesson' },
      { id: 'lesson-5-2', title: 'StringBuilder and StringBuffer', duration: '25 min', type: 'lesson' },
      { id: 'lesson-5-3', title: 'String Formatting and Parsing', duration: '30 min', type: 'coding' },
      { id: 'lesson-5-4', title: 'Regular Expressions Basics', duration: '30 min', type: 'lesson' },
      { id: 'lesson-5-5', title: 'Advanced Regular Expressions', duration: '35 min', type: 'coding' },
      { id: 'lesson-5-6', title: 'Text Processing and Pattern Matching', duration: '40 min', type: 'project' }
    ]
  },
  {
    id: 'module-6',
    title: 'Exception Handling and Debugging',
    description: 'Handle errors gracefully and debug effectively',
    duration: '3 hours',
    lessons: [
      { id: 'lesson-6-1', title: 'Understanding Exceptions', duration: '25 min', type: 'lesson' },
      { id: 'lesson-6-2', title: 'Try-Catch-Finally Blocks', duration: '30 min', type: 'coding' },
      { id: 'lesson-6-3', title: 'Custom Exceptions', duration: '20 min', type: 'coding' },
      { id: 'lesson-6-4', title: 'Exception Hierarchy and Best Practices', duration: '25 min', type: 'lesson' },
      { id: 'lesson-6-5', title: 'Debugging Techniques', duration: '30 min', type: 'lesson' },
      { id: 'lesson-6-6', title: 'Logging and Error Handling', duration: '35 min', type: 'coding' }
    ]
  },
  {
    id: 'module-7',
    title: 'File I/O and Serialization',
    description: 'Read from and write to files with serialization',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-7-1', title: 'File Handling Basics', duration: '25 min', type: 'lesson' },
      { id: 'lesson-7-2', title: 'Reading and Writing Text Files', duration: '30 min', type: 'coding' },
      { id: 'lesson-7-3', title: 'Binary File Operations', duration: '30 min', type: 'coding' },
      { id: 'lesson-7-4', title: 'Working with Directories', duration: '25 min', type: 'lesson' },
      { id: 'lesson-7-5', title: 'Object Serialization', duration: '35 min', type: 'coding' },
      { id: 'lesson-7-6', title: 'Advanced I/O Operations (NIO)', duration: '40 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-8',
    title: 'Generics and Type Safety',
    description: 'Learn generics for type-safe programming',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-8-1', title: 'Introduction to Generics', duration: '25 min', type: 'lesson' },
      { id: 'lesson-8-2', title: 'Generic Classes and Methods', duration: '30 min', type: 'coding' },
      { id: 'lesson-8-3', title: 'Wildcards and Bounded Type Parameters', duration: '30 min', type: 'lesson' },
      { id: 'lesson-8-4', title: 'Generic Collections', duration: '25 min', type: 'coding' },
      { id: 'lesson-8-5', title: 'Type Erasure and Limitations', duration: '20 min', type: 'lesson' },
      { id: 'lesson-8-6', title: 'Best Practices with Generics', duration: '25 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-9',
    title: 'Concurrency and Multithreading',
    description: 'Learn concurrent programming in Java',
    duration: '4-5 hours',
    lessons: [
      { id: 'lesson-9-1', title: 'Introduction to Threads', duration: '30 min', type: 'lesson' },
      { id: 'lesson-9-2', title: 'Creating and Managing Threads', duration: '35 min', type: 'coding' },
      { id: 'lesson-9-3', title: 'Thread Synchronization', duration: '40 min', type: 'lesson' },
      { id: 'lesson-9-4', title: 'Inter-thread Communication', duration: '30 min', type: 'coding' },
      { id: 'lesson-9-5', title: 'Executor Framework', duration: '35 min', type: 'lesson' },
      { id: 'lesson-9-6', title: 'Concurrent Collections and Utilities', duration: '40 min', type: 'coding' },
      { id: 'lesson-9-7', title: 'Advanced Concurrency Patterns', duration: '45 min', type: 'project' }
    ]
  },
  {
    id: 'module-10',
    title: 'Lambda Expressions and Functional Programming',
    description: 'Explore functional programming with lambdas and streams',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-10-1', title: 'Introduction to Lambda Expressions', duration: '25 min', type: 'lesson' },
      { id: 'lesson-10-2', title: 'Functional Interfaces', duration: '30 min', type: 'lesson' },
      { id: 'lesson-10-3', title: 'Method References', duration: '25 min', type: 'coding' },
      { id: 'lesson-10-4', title: 'Stream API Basics', duration: '35 min', type: 'coding' },
      { id: 'lesson-10-5', title: 'Advanced Stream Operations', duration: '40 min', type: 'coding' },
      { id: 'lesson-10-6', title: 'Optional Class and Null Safety', duration: '25 min', type: 'lesson' },
      { id: 'lesson-10-7', title: 'Functional Programming Best Practices', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-11',
    title: 'Database Connectivity (JDBC)',
    description: 'Connect Java applications to databases',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-11-1', title: 'Introduction to JDBC', duration: '20 min', type: 'lesson' },
      { id: 'lesson-11-2', title: 'Connecting to Databases', duration: '35 min', type: 'coding' },
      { id: 'lesson-11-3', title: 'Executing SQL Queries', duration: '40 min', type: 'coding' },
      { id: 'lesson-11-4', title: 'PreparedStatement and CallableStatement', duration: '30 min', type: 'lesson' },
      { id: 'lesson-11-5', title: 'ResultSet Processing', duration: '35 min', type: 'coding' },
      { id: 'lesson-11-6', title: 'Transaction Management', duration: '25 min', type: 'lesson' },
      { id: 'lesson-11-7', title: 'Connection Pooling and Best Practices', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-12',
    title: 'Advanced Java Features',
    description: 'Explore advanced JVM features and capabilities',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-12-1', title: 'Annotations and Reflection', duration: '30 min', type: 'lesson' },
      { id: 'lesson-12-2', title: 'Java Modules (JPMS)', duration: '35 min', type: 'lesson' },
      { id: 'lesson-12-3', title: 'JVM Internals and Memory Management', duration: '40 min', type: 'lesson' },
      { id: 'lesson-12-4', title: 'Performance Tuning', duration: '35 min', type: 'coding' },
      { id: 'lesson-12-5', title: 'Security Features', duration: '30 min', type: 'lesson' },
      { id: 'lesson-12-6', title: 'JMX and Monitoring', duration: '25 min', type: 'lesson' },
      { id: 'lesson-12-7', title: 'Native Interoperability (JNI)', duration: '40 min', type: 'coding' }
    ]
  },
  {
    id: 'module-13',
    title: 'Design Patterns',
    description: 'Learn common design patterns in Java',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-13-1', title: 'Introduction to Design Patterns', duration: '25 min', type: 'lesson' },
      { id: 'lesson-13-2', title: 'Creational Patterns (Singleton, Factory, Builder)', duration: '35 min', type: 'coding' },
      { id: 'lesson-13-3', title: 'Structural Patterns (Adapter, Decorator, Facade)', duration: '35 min', type: 'coding' },
      { id: 'lesson-13-4', title: 'Behavioral Patterns (Observer, Strategy, Command)', duration: '35 min', type: 'coding' },
      { id: 'lesson-13-5', title: 'MVC and MVP Patterns', duration: '30 min', type: 'lesson' },
      { id: 'lesson-13-6', title: 'Dependency Injection Patterns', duration: '25 min', type: 'lesson' },
      { id: 'lesson-13-7', title: 'Anti-patterns and Common Mistakes', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-14',
    title: 'Testing and Quality Assurance',
    description: 'Learn testing frameworks and quality assurance',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-14-1', title: 'Introduction to Unit Testing', duration: '25 min', type: 'lesson' },
      { id: 'lesson-14-2', title: 'JUnit Framework Basics', duration: '35 min', type: 'coding' },
      { id: 'lesson-14-3', title: 'Mocking with Mockito', duration: '30 min', type: 'coding' },
      { id: 'lesson-14-4', title: 'Integration Testing', duration: '35 min', type: 'coding' },
      { id: 'lesson-14-5', title: 'Test-Driven Development (TDD)', duration: '30 min', type: 'lesson' },
      { id: 'lesson-14-6', title: 'Code Coverage and Quality Metrics', duration: '25 min', type: 'lesson' },
      { id: 'lesson-14-7', title: 'Continuous Integration and Testing', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-15',
    title: 'Build Tools and Project Management',
    description: 'Master build tools and project management',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-15-1', title: 'Introduction to Maven', duration: '25 min', type: 'lesson' },
      { id: 'lesson-15-2', title: 'Maven Project Structure and POM', duration: '30 min', type: 'coding' },
      { id: 'lesson-15-3', title: 'Dependency Management', duration: '30 min', type: 'lesson' },
      { id: 'lesson-15-4', title: 'Introduction to Gradle', duration: '25 min', type: 'lesson' },
      { id: 'lesson-15-5', title: 'Build Automation and Plugins', duration: '35 min', type: 'coding' },
      { id: 'lesson-15-6', title: 'Multi-module Projects', duration: '30 min', type: 'project' },
      { id: 'lesson-15-7', title: 'CI/CD Pipeline Integration', duration: '35 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-16',
    title: 'Web Development with Java',
    description: 'Build web applications with Java technologies',
    duration: '4-5 hours',
    lessons: [
      { id: 'lesson-16-1', title: 'Introduction to Servlets', duration: '30 min', type: 'lesson' },
      { id: 'lesson-16-2', title: 'JSP (JavaServer Pages)', duration: '35 min', type: 'coding' },
      { id: 'lesson-16-3', title: 'Spring Framework Basics', duration: '40 min', type: 'lesson' },
      { id: 'lesson-16-4', title: 'Spring Boot Introduction', duration: '35 min', type: 'coding' },
      { id: 'lesson-16-5', title: 'RESTful Web Services', duration: '40 min', type: 'coding' },
      { id: 'lesson-16-6', title: 'Spring Data and Persistence', duration: '35 min', type: 'coding' },
      { id: 'lesson-16-7', title: 'Security with Spring Security', duration: '40 min', type: 'coding' }
    ]
  },
  {
    id: 'module-17',
    title: 'Microservices and Cloud',
    description: 'Develop microservices and deploy to cloud platforms',
    duration: '4-5 hours',
    lessons: [
      { id: 'lesson-17-1', title: 'Microservices Architecture', duration: '30 min', type: 'lesson' },
      { id: 'lesson-17-2', title: 'Spring Boot for Microservices', duration: '35 min', type: 'coding' },
      { id: 'lesson-17-3', title: 'Service Discovery and Configuration', duration: '30 min', type: 'lesson' },
      { id: 'lesson-17-4', title: 'API Gateway and Load Balancing', duration: '35 min', type: 'coding' },
      { id: 'lesson-17-5', title: 'Message Queues and Event Streaming', duration: '40 min', type: 'coding' },
      { id: 'lesson-17-6', title: 'Containerization with Docker', duration: '35 min', type: 'project' },
      { id: 'lesson-17-7', title: 'Cloud Deployment (AWS, Azure, GCP)', duration: '40 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-18',
    title: 'Advanced Topics and Best Practices',
    description: 'Learn industry best practices and advanced topics',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-18-1', title: 'Code Review and Quality Standards', duration: '25 min', type: 'lesson' },
      { id: 'lesson-18-2', title: 'Documentation and JavaDoc', duration: '20 min', type: 'lesson' },
      { id: 'lesson-18-3', title: 'Internationalization (i18n)', duration: '30 min', type: 'coding' },
      { id: 'lesson-18-4', title: 'Performance Optimization Techniques', duration: '35 min', type: 'lesson' },
      { id: 'lesson-18-5', title: 'Security Best Practices', duration: '30 min', type: 'lesson' },
      { id: 'lesson-18-6', title: 'Scalability and Architecture Patterns', duration: '35 min', type: 'lesson' },
      { id: 'lesson-18-7', title: 'Industry Best Practices and Standards', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-19',
    title: 'Project Development',
    description: 'Apply knowledge through comprehensive projects',
    duration: '5-6 hours',
    lessons: [
      { id: 'lesson-19-1', title: 'Project Planning and Design', duration: '30 min', type: 'lesson' },
      { id: 'lesson-19-2', title: 'Building a Console Application', duration: '90 min', type: 'project' },
      { id: 'lesson-19-3', title: 'Creating a GUI Application', duration: '120 min', type: 'project' },
      { id: 'lesson-19-4', title: 'Developing a Web Application', duration: '150 min', type: 'project' },
      { id: 'lesson-19-5', title: 'Database Integration Project', duration: '120 min', type: 'project' },
      { id: 'lesson-19-6', title: 'REST API Development', duration: '90 min', type: 'project' },
      { id: 'lesson-19-7', title: 'Complete Full-Stack Project', duration: '180 min', type: 'project' }
    ]
  },
  {
    id: 'module-20',
    title: 'Career and Advanced Learning',
    description: 'Prepare for career advancement and continued learning',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-20-1', title: 'Java Certification Preparation', duration: '45 min', type: 'lesson' },
      { id: 'lesson-20-2', title: 'Career Paths for Java Developers', duration: '30 min', type: 'lesson' },
      { id: 'lesson-20-3', title: 'Open Source Contribution', duration: '35 min', type: 'lesson' },
      { id: 'lesson-20-4', title: 'Advanced Java Frameworks', duration: '40 min', type: 'lesson' },
      { id: 'lesson-20-5', title: 'Keeping Up with Java Evolution', duration: '25 min', type: 'lesson' },
      { id: 'lesson-20-6', title: 'Building a Professional Portfolio', duration: '30 min', type: 'lesson' },
      { id: 'lesson-20-7', title: 'Interview Preparation and Technical Skills', duration: '60 min', type: 'lesson' }
    ]
  }
];

// Utility functions
export const getTotalLessonsCount = (): number => {
  return courseModules.reduce((total, module) => total + module.lessons.length, 0);
};

export const getModuleById = (moduleId: string): ModuleStructure | undefined => {
  return courseModules.find(module => module.id === moduleId);
};

export const getLessonById = (lessonId: string): LessonStructure | undefined => {
  for (const module of courseModules) {
    const lesson = module.lessons.find(lesson => lesson.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
};

export const getModuleProgress = (moduleId: string, completedLessons: string[]): number => {
  const module = getModuleById(moduleId);
  if (!module) return 0;
  
  const completedCount = module.lessons.filter(lesson => 
    completedLessons.includes(lesson.id)
  ).length;
  
  return Math.round((completedCount / module.lessons.length) * 100);
};
