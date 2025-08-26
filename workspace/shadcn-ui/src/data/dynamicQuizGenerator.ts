import { courseModules } from './courseStructure';

export interface DynamicQuizQuestion {
  id: string;
  module: string;
  lesson: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple-choice' | 'true-false' | 'code-analysis';
}

export interface QuizTemplate {
  pattern: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple-choice' | 'true-false' | 'code-analysis';
}

// Knowledge base for generating questions based on lesson content
const javaKnowledgeBase = {
  'Java Fundamentals': {
    keywords: ['Java', 'JVM', 'bytecode', 'platform independent', 'object-oriented', 'class', 'main method'],
    concepts: [
      {
        concept: 'Java History',
        questions: [
          {
            pattern: 'Who created the Java programming language?',
            options: ['James Gosling', 'Dennis Ritchie', 'Bjarne Stroustrup', 'Guido van Rossum'],
            correctIndex: 0,
            explanation: 'James Gosling created Java at Sun Microsystems in 1995.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'What was Java originally called before it was renamed?',
            options: ['Oak', 'Pine', 'Cedar', 'Maple'],
            correctIndex: 0,
            explanation: 'Java was originally called "Oak" before being renamed to Java.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          }
        ]
      },
      {
        concept: 'Java Features',
        questions: [
          {
            pattern: 'What does WORA stand for in Java?',
            options: ['Write Once, Run Anywhere', 'Write Once, Read Anywhere', 'Work Once, Run Always', 'Write Only, Run Anywhere'],
            correctIndex: 0,
            explanation: 'WORA stands for "Write Once, Run Anywhere", which is Java\'s key philosophy.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'Which of the following is NOT a key feature of Java?',
            options: ['Platform Independence', 'Object-Oriented', 'Multiple Inheritance', 'Secure'],
            correctIndex: 2,
            explanation: 'Java does not support multiple inheritance of classes to avoid complexity and ambiguity.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          }
        ]
      },
      {
        concept: 'Java Syntax',
        questions: [
          {
            pattern: 'What is the entry point of a Java application?',
            options: ['main() method', 'start() method', 'init() method', 'run() method'],
            correctIndex: 0,
            explanation: 'The main() method is the entry point of every Java application.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'Which keyword is used to define a class in Java?',
            options: ['class', 'Class', 'define', 'struct'],
            correctIndex: 0,
            explanation: 'The "class" keyword is used to define a class in Java.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          }
        ]
      }
    ]
  },
  'Control Structures': {
    keywords: ['if', 'else', 'switch', 'for', 'while', 'do-while', 'break', 'continue'],
    concepts: [
      {
        concept: 'Conditional Statements',
        questions: [
          {
            pattern: 'Which operator is used for equality comparison in Java?',
            options: ['=', '==', '===', 'equals()'],
            correctIndex: 1,
            explanation: 'The == operator is used for equality comparison in Java. The = operator is for assignment.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'What is the correct syntax for an if-else statement?',
            options: [
              'if (condition) { } else { }',
              'if condition { } else { }',
              'if (condition) then { } else { }',
              'if condition then { } else { }'
            ],
            correctIndex: 0,
            explanation: 'The correct syntax requires parentheses around the condition and curly braces for code blocks.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          }
        ]
      },
      {
        concept: 'Loops',
        questions: [
          {
            pattern: 'Which loop executes at least once regardless of the condition?',
            options: ['for loop', 'while loop', 'do-while loop', 'enhanced for loop'],
            correctIndex: 2,
            explanation: 'The do-while loop executes the code block first, then checks the condition.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'What keyword is used to exit a loop prematurely?',
            options: ['exit', 'break', 'stop', 'return'],
            correctIndex: 1,
            explanation: 'The "break" keyword is used to exit a loop prematurely.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          }
        ]
      }
    ]
  },
  'Object-Oriented Programming': {
    keywords: ['class', 'object', 'inheritance', 'polymorphism', 'encapsulation', 'abstraction'],
    concepts: [
      {
        concept: 'OOP Principles',
        questions: [
          {
            pattern: 'Which of the following is NOT a pillar of Object-Oriented Programming?',
            options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Compilation'],
            correctIndex: 3,
            explanation: 'The four pillars of OOP are Encapsulation, Inheritance, Polymorphism, and Abstraction.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'What does encapsulation mean in OOP?',
            options: [
              'Hiding implementation details',
              'Creating multiple classes',
              'Using inheritance',
              'Overloading methods'
            ],
            correctIndex: 0,
            explanation: 'Encapsulation means hiding the internal implementation details and exposing only necessary interfaces.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          }
        ]
      },
      {
        concept: 'Classes and Objects',
        questions: [
          {
            pattern: 'What keyword is used to create an object in Java?',
            options: ['create', 'new', 'object', 'instance'],
            correctIndex: 1,
            explanation: 'The "new" keyword is used to create objects in Java.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'What is a constructor in Java?',
            options: [
              'A method that destroys objects',
              'A special method used to initialize objects',
              'A method that returns objects',
              'A method that copies objects'
            ],
            correctIndex: 1,
            explanation: 'A constructor is a special method used to initialize objects when they are created.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          }
        ]
      }
    ]
  },
  'Exception Handling': {
    keywords: ['try', 'catch', 'finally', 'throw', 'throws', 'exception'],
    concepts: [
      {
        concept: 'Exception Basics',
        questions: [
          {
            pattern: 'Which keyword is used to explicitly throw an exception?',
            options: ['throw', 'throws', 'exception', 'raise'],
            correctIndex: 0,
            explanation: 'The "throw" keyword is used to explicitly throw an exception.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'Which block is always executed whether an exception occurs or not?',
            options: ['try', 'catch', 'finally', 'throw'],
            correctIndex: 2,
            explanation: 'The "finally" block is always executed whether an exception occurs or not.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          }
        ]
      }
    ]
  },
  'Collections Framework': {
    keywords: ['List', 'Set', 'Map', 'ArrayList', 'HashMap', 'LinkedList'],
    concepts: [
      {
        concept: 'Collection Interfaces',
        questions: [
          {
            pattern: 'Which interface represents an ordered collection that allows duplicate elements?',
            options: ['Set', 'Map', 'List', 'Collection'],
            correctIndex: 2,
            explanation: 'The List interface represents an ordered collection that allows duplicate elements.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'Which collection does NOT allow duplicate elements?',
            options: ['ArrayList', 'LinkedList', 'HashSet', 'Vector'],
            correctIndex: 2,
            explanation: 'HashSet implements the Set interface, which does not allow duplicate elements.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          }
        ]
      }
    ]
  },
  'Multithreading': {
    keywords: ['thread', 'synchronized', 'volatile', 'concurrent'],
    concepts: [
      {
        concept: 'Thread Basics',
        questions: [
          {
            pattern: 'Which method is used to start a thread in Java?',
            options: ['run()', 'start()', 'execute()', 'begin()'],
            correctIndex: 1,
            explanation: 'The start() method is used to start a thread in Java, which then calls the run() method.',
            difficulty: 'easy' as const,
            type: 'multiple-choice' as const
          },
          {
            pattern: 'Which keyword ensures that only one thread can access a method or block at a time?',
            options: ['volatile', 'static', 'synchronized', 'final'],
            correctIndex: 2,
            explanation: 'The "synchronized" keyword ensures that only one thread can access a method or block at a time.',
            difficulty: 'medium' as const,
            type: 'multiple-choice' as const
          }
        ]
      }
    ]
  }
};

export class DynamicQuizGenerator {
  private questionIdCounter = 1;

  /**
   * Generate quiz questions for a specific module
   */
  generateQuestionsForModule(moduleName: string, count: number = 10): DynamicQuizQuestion[] {
    const questions: DynamicQuizQuestion[] = [];
    const moduleKnowledge = javaKnowledgeBase[moduleName as keyof typeof javaKnowledgeBase];
    
    if (!moduleKnowledge) {
      console.warn(`No knowledge base found for module: ${moduleName}`);
      return this.generateFallbackQuestions(moduleName, count);
    }

    // Generate questions from each concept
    for (const conceptData of moduleKnowledge.concepts) {
      for (const questionTemplate of conceptData.questions) {
        if (questions.length >= count) break;
        
        questions.push({
          id: `dyn_${this.questionIdCounter++}`,
          module: moduleName,
          lesson: conceptData.concept,
          question: questionTemplate.pattern,
          options: questionTemplate.options,
          correctAnswer: questionTemplate.correctIndex,
          explanation: questionTemplate.explanation,
          difficulty: questionTemplate.difficulty,
          type: questionTemplate.type
        });
      }
      if (questions.length >= count) break;
    }

    // If we need more questions, generate variations
    while (questions.length < count && moduleKnowledge.concepts.length > 0) {
      const randomConcept = moduleKnowledge.concepts[Math.floor(Math.random() * moduleKnowledge.concepts.length)];
      const randomQuestion = randomConcept.questions[Math.floor(Math.random() * randomConcept.questions.length)];
      
      // Create a variation of the question
      const variation = this.createQuestionVariation(randomQuestion, moduleName, randomConcept.concept);
      if (variation && !questions.some(q => q.question === variation.question)) {
        questions.push(variation);
      }
    }

    return questions.slice(0, count);
  }

  /**
   * Generate questions for all modules
   */
  generateMixedQuestions(count: number = 20): DynamicQuizQuestion[] {
    const questions: DynamicQuizQuestion[] = [];
    const moduleNames = Object.keys(javaKnowledgeBase);
    const questionsPerModule = Math.ceil(count / moduleNames.length);

    for (const moduleName of moduleNames) {
      const moduleQuestions = this.generateQuestionsForModule(moduleName, questionsPerModule);
      questions.push(...moduleQuestions);
    }

    // Shuffle and return the requested count
    return this.shuffleArray(questions).slice(0, count);
  }

  /**
   * Generate questions based on difficulty level
   */
  generateQuestionsByDifficulty(difficulty: 'easy' | 'medium' | 'hard', count: number = 10): DynamicQuizQuestion[] {
    const allQuestions = this.generateMixedQuestions(100); // Generate a large pool
    const filteredQuestions = allQuestions.filter(q => q.difficulty === difficulty);
    return this.shuffleArray(filteredQuestions).slice(0, count);
  }

  /**
   * Generate adaptive questions based on user performance
   */
  generateAdaptiveQuestions(userPerformance: { [module: string]: number }, count: number = 10): DynamicQuizQuestion[] {
    const questions: DynamicQuizQuestion[] = [];
    
    // Focus on modules where user performance is lower
    const sortedModules = Object.entries(userPerformance)
      .sort(([,a], [,b]) => a - b) // Sort by performance (ascending)
      .map(([module]) => module);

    for (const moduleName of sortedModules) {
      if (questions.length >= count) break;
      
      const performance = userPerformance[moduleName];
      const difficulty = performance < 0.6 ? 'easy' : performance < 0.8 ? 'medium' : 'hard';
      const questionsNeeded = Math.min(count - questions.length, 3);
      
      const moduleQuestions = this.generateQuestionsForModule(moduleName, questionsNeeded)
        .filter(q => q.difficulty === difficulty);
      
      questions.push(...moduleQuestions);
    }

    return questions;
  }

  /**
   * Create a variation of an existing question
   */
  private createQuestionVariation(template: QuizTemplate, moduleName: string, concept: string): DynamicQuizQuestion | null {
    // Simple variation: shuffle options
    const shuffledOptions = [...template.options];
    const correctOption = shuffledOptions[template.correctIndex];
    
    // Shuffle the array
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // Find new correct index
    const newCorrectIndex = shuffledOptions.indexOf(correctOption);
    
    return {
      id: `dyn_var_${this.questionIdCounter++}`,
      module: moduleName,
      lesson: concept,
      question: template.pattern,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex,
      explanation: template.explanation,
      difficulty: template.difficulty,
      type: template.type
    };
  }

  /**
   * Generate fallback questions when no knowledge base exists
   */
  private generateFallbackQuestions(moduleName: string, count: number): DynamicQuizQuestion[] {
    const fallbackQuestions: DynamicQuizQuestion[] = [
      {
        id: `fallback_${this.questionIdCounter++}`,
        module: moduleName,
        lesson: 'General Knowledge',
        question: `What is the main focus of the ${moduleName} module?`,
        options: [
          `Understanding ${moduleName} concepts`,
          'Learning Python basics',
          'Database management',
          'Web design principles'
        ],
        correctAnswer: 0,
        explanation: `The ${moduleName} module focuses on understanding its core concepts and practical applications.`,
        difficulty: 'easy' as const,
        type: 'multiple-choice' as const
      }
    ];

    return fallbackQuestions.slice(0, count);
  }

  /**
   * Shuffle array utility
   */
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Get available modules for quiz generation
   */
  getAvailableModules(): string[] {
    return Object.keys(javaKnowledgeBase);
  }

  /**
   * Get question statistics
   */
  getQuestionStats(): { [module: string]: { total: number; byDifficulty: { [key: string]: number } } } {
    const stats: { [module: string]: { total: number; byDifficulty: { [key: string]: number } } } = {};
    
    for (const [moduleName, moduleData] of Object.entries(javaKnowledgeBase)) {
      stats[moduleName] = {
        total: 0,
        byDifficulty: { easy: 0, medium: 0, hard: 0 }
      };
      
      for (const concept of moduleData.concepts) {
        for (const question of concept.questions) {
          stats[moduleName].total++;
          stats[moduleName].byDifficulty[question.difficulty]++;
        }
      }
    }
    
    return stats;
  }
}

// Export singleton instance
export const dynamicQuizGenerator = new DynamicQuizGenerator();

// Utility functions for backward compatibility
export const getDynamicQuizQuestionsByModule = (module: string, count: number = 10) => {
  return dynamicQuizGenerator.generateQuestionsForModule(module, count);
};

export const getRandomDynamicQuizQuestions = (count: number = 20) => {
  return dynamicQuizGenerator.generateMixedQuestions(count);
};

export const getDynamicQuizQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', count: number = 10) => {
  return dynamicQuizGenerator.generateQuestionsByDifficulty(difficulty, count);
};