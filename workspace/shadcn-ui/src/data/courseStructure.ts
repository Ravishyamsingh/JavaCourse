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
    title: 'Control Structures',
    description: 'Master decision making and loops',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-2-1', title: 'Conditional Statements (if, else)', duration: '30 min', type: 'lesson' },
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
    title: 'Arrays and Strings',
    description: 'Working with arrays and string manipulation',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-4-1', title: 'Introduction to Arrays', duration: '25 min', type: 'lesson' },
      { id: 'lesson-4-2', title: 'Multidimensional Arrays', duration: '30 min', type: 'coding' },
      { id: 'lesson-4-3', title: 'String Class and Methods', duration: '35 min', type: 'lesson' },
      { id: 'lesson-4-4', title: 'StringBuilder and StringBuffer', duration: '25 min', type: 'lesson' },
      { id: 'lesson-4-5', title: 'Array and String Algorithms', duration: '40 min', type: 'coding' }
    ]
  },
  {
    id: 'module-5',
    title: 'Collections Framework',
    description: 'Master Java collections and data structures',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-5-1', title: 'Introduction to Collections', duration: '20 min', type: 'lesson' },
      { id: 'lesson-5-2', title: 'ArrayList and LinkedList', duration: '35 min', type: 'coding' },
      { id: 'lesson-5-3', title: 'HashMap and HashSet', duration: '35 min', type: 'coding' },
      { id: 'lesson-5-4', title: 'TreeMap and TreeSet', duration: '30 min', type: 'lesson' },
      { id: 'lesson-5-5', title: 'Iterators and Enhanced For Loop', duration: '25 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-6',
    title: 'Exception Handling',
    description: 'Handle errors gracefully in your programs',
    duration: '2 hours',
    lessons: [
      { id: 'lesson-6-1', title: 'Understanding Exceptions', duration: '25 min', type: 'lesson' },
      { id: 'lesson-6-2', title: 'Try-Catch Blocks', duration: '30 min', type: 'coding' },
      { id: 'lesson-6-3', title: 'Finally Block and Resource Management', duration: '25 min', type: 'lesson' },
      { id: 'lesson-6-4', title: 'Custom Exceptions', duration: '20 min', type: 'coding' }
    ]
  },
  {
    id: 'module-7',
    title: 'File I/O Operations',
    description: 'Read from and write to files',
    duration: '2-3 hours',
    lessons: [
      { id: 'lesson-7-1', title: 'File and Directory Operations', duration: '25 min', type: 'lesson' },
      { id: 'lesson-7-2', title: 'Reading Files', duration: '30 min', type: 'coding' },
      { id: 'lesson-7-3', title: 'Writing Files', duration: '30 min', type: 'coding' },
      { id: 'lesson-7-4', title: 'Serialization', duration: '25 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-8',
    title: 'Multithreading',
    description: 'Learn concurrent programming in Java',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-8-1', title: 'Introduction to Threads', duration: '30 min', type: 'lesson' },
      { id: 'lesson-8-2', title: 'Creating and Running Threads', duration: '35 min', type: 'coding' },
      { id: 'lesson-8-3', title: 'Thread Synchronization', duration: '40 min', type: 'lesson' },
      { id: 'lesson-8-4', title: 'Thread Communication', duration: '30 min', type: 'coding' }
    ]
  },
  {
    id: 'module-9',
    title: 'Database Connectivity (JDBC)',
    description: 'Connect Java applications to databases',
    duration: '3 hours',
    lessons: [
      { id: 'lesson-9-1', title: 'Introduction to JDBC', duration: '20 min', type: 'lesson' },
      { id: 'lesson-9-2', title: 'Connecting to Database', duration: '35 min', type: 'coding' },
      { id: 'lesson-9-3', title: 'Executing SQL Queries', duration: '40 min', type: 'coding' },
      { id: 'lesson-9-4', title: 'Prepared Statements', duration: '30 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-10',
    title: 'GUI Development with Swing',
    description: 'Build desktop applications with graphical interfaces',
    duration: '4 hours',
    lessons: [
      { id: 'lesson-10-1', title: 'Introduction to Swing', duration: '25 min', type: 'lesson' },
      { id: 'lesson-10-2', title: 'Creating Windows and Frames', duration: '35 min', type: 'coding' },
      { id: 'lesson-10-3', title: 'Adding Components (Buttons, Labels, Text Fields)', duration: '40 min', type: 'coding' },
      { id: 'lesson-10-4', title: 'Event Handling', duration: '45 min', type: 'coding' },
      { id: 'lesson-10-5', title: 'Layout Managers', duration: '35 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-11',
    title: 'Advanced Topics',
    description: 'Explore advanced Java concepts',
    duration: '3-4 hours',
    lessons: [
      { id: 'lesson-11-1', title: 'Generics', duration: '35 min', type: 'lesson' },
      { id: 'lesson-11-2', title: 'Lambda Expressions', duration: '40 min', type: 'coding' },
      { id: 'lesson-11-3', title: 'Stream API', duration: '45 min', type: 'coding' },
      { id: 'lesson-11-4', title: 'Annotations', duration: '25 min', type: 'lesson' }
    ]
  },
  {
    id: 'module-12',
    title: 'Final Projects',
    description: 'Build real-world applications',
    duration: '5-6 hours',
    lessons: [
      { id: 'lesson-12-1', title: 'Console-based Calculator', duration: '90 min', type: 'project' },
      { id: 'lesson-12-2', title: 'Student Management System', duration: '120 min', type: 'project' },
      { id: 'lesson-12-3', title: 'Simple Banking Application', duration: '150 min', type: 'project' },
      { id: 'lesson-12-4', title: 'Course Wrap-up and Next Steps', duration: '30 min', type: 'lesson' }
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
