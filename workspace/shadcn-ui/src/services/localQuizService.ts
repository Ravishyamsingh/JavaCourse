import quizBank from '@/data/quiz-bank.json';
import { DynamicQuizQuestion } from '@/data/dynamicQuizGenerator';

/**
 * Local Quiz Service
 * 
 * Self-contained service for loading and generating quizzes from local JSON file.
 * This is the PRIMARY data source for quiz questions.
 * 
 * QUIZ GENERATION RULES:
 * 1. Total system contains 20 modules
 * 2. User can select minimum 1 and maximum 5 modules per quiz
 * 3. User can request any number of questions
 * 4. Maximum 50 questions per quiz (hard cap)
 * 5. Questions are randomly selected and mixed from chosen modules
 * 6. Every quiz follows a different pattern (randomized)
 * 7. Variety in difficulty, wording, and question types
 * 8. No fixed distribution per module - freely mixed
 * 
 * External APIs (Gemini, backend) are deprecated and should not be used.
 */

// Constants for quiz generation rules
export const QUIZ_RULES = {
  MAX_MODULES_PER_QUIZ: 5,
  MIN_MODULES_PER_QUIZ: 1,
  MAX_QUESTIONS_PER_QUIZ: 50,
  MIN_QUESTIONS_PER_QUIZ: 1,
  TOTAL_MODULES: 20
} as const;

export interface LocalQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface QuizModule {
  id: number;
  name: string;
  keywords: string[];
  totalQuestions: number;
  questions: LocalQuizQuestion[];
}

export interface QuizBankMetadata {
  version: string;
  totalModules: number;
  totalQuestions: number;
  lastUpdated: string;
  description: string;
}

export interface QuizGenerationResult {
  questions: DynamicQuizQuestion[];
  metadata: {
    requestedCount: number;
    generatedCount: number;
    selectedModules: number[];
    timestamp: string;
    quizId: string;
  };
}

class LocalQuizService {
  private quizBank: typeof quizBank;

  constructor() {
    this.quizBank = quizBank;
  }

  /**
   * Get metadata about the quiz bank
   */
  getMetadata(): QuizBankMetadata {
    return this.quizBank.metadata;
  }

  /**
   * Get all available module IDs
   */
  getAvailableModules(): number[] {
    return Object.keys(this.quizBank.modules).map(id => parseInt(id));
  }

  /**
   * Get module information by ID
   */
  getModuleInfo(moduleId: number): QuizModule | null {
    const moduleKey = moduleId.toString();
    const module = this.quizBank.modules[moduleKey as keyof typeof this.quizBank.modules];
    
    if (!module) {
      console.warn(`Module ${moduleId} not found in quiz bank`);
      return null;
    }

    return module as QuizModule;
  }

  /**
   * Get all questions for a specific module
   */
  getModuleQuestions(moduleId: number): LocalQuizQuestion[] {
    const module = this.getModuleInfo(moduleId);
    return module ? module.questions : [];
  }

  /**
   * Generate a unique quiz ID
   */
  private generateQuizId(): string {
    return `quiz_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Validate module selection
   * @throws Error if validation fails
   */
  private validateModuleSelection(moduleIds: number[]): void {
    if (!moduleIds || moduleIds.length === 0) {
      throw new Error(`Please select at least ${QUIZ_RULES.MIN_MODULES_PER_QUIZ} module`);
    }

    if (moduleIds.length > QUIZ_RULES.MAX_MODULES_PER_QUIZ) {
      throw new Error(`Maximum ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules allowed per quiz. You selected ${moduleIds.length}.`);
    }

    // Check if all modules exist
    const invalidModules = moduleIds.filter(id => !this.getModuleInfo(id));
    if (invalidModules.length > 0) {
      throw new Error(`Invalid module IDs: ${invalidModules.join(', ')}`);
    }
  }

  /**
   * MAIN QUIZ GENERATION METHOD
   * 
   * Generates a quiz following all the rules:
   * - 1-5 modules allowed
   * - Max 50 questions per quiz
   * - Random selection and mixing
   * - Different pattern each time
   * 
   * @param moduleIds - Array of 1-5 module IDs to include
   * @param requestedCount - Number of questions requested (will cap at 50)
   * @param difficulty - Optional difficulty filter
   * @returns QuizGenerationResult with questions and metadata
   */
  generateQuizWithRules(
    moduleIds: number[],
    requestedCount: number = 10,
    difficulty?: 'easy' | 'medium' | 'hard'
  ): QuizGenerationResult {
    // Validate module selection
    this.validateModuleSelection(moduleIds);

    // Apply question count limits
    const targetCount = Math.min(
      Math.max(requestedCount, QUIZ_RULES.MIN_QUESTIONS_PER_QUIZ),
      QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ
    );

    // Collect all available questions from selected modules
    const allQuestions: { question: LocalQuizQuestion; moduleId: number; moduleName: string }[] = [];

    for (const moduleId of moduleIds) {
      const module = this.getModuleInfo(moduleId);
      if (!module) continue;

      let questions = [...module.questions];

      // Filter by difficulty if specified
      if (difficulty) {
        const filtered = questions.filter(q => q.difficulty === difficulty);
        // Only use filtered if there are results, otherwise use all
        if (filtered.length > 0) {
          questions = filtered;
        }
      }

      // Add module context to each question
      for (const q of questions) {
        allQuestions.push({
          question: q,
          moduleId: moduleId,
          moduleName: module.name
        });
      }
    }

    // Multiple shuffles for better randomization
    let shuffled = this.shuffleArray(allQuestions);
    shuffled = this.shuffleArray(shuffled); // Double shuffle for variety
    
    // Random starting point for additional variety
    const startOffset = Math.floor(Math.random() * Math.min(5, shuffled.length));
    shuffled = [...shuffled.slice(startOffset), ...shuffled.slice(0, startOffset)];

    // Select questions (no more than available)
    const selectedCount = Math.min(targetCount, shuffled.length);
    const selectedQuestions = shuffled.slice(0, selectedCount);

    // Convert to DynamicQuizQuestion format with shuffled options
    const questions: DynamicQuizQuestion[] = selectedQuestions.map((item, index) => {
      const q = item.question;
      
      // Create array of option indices for shuffling
      const optionIndices = q.options.map((_, i) => i);
      const shuffledIndices = this.shuffleArray([...optionIndices]);
      
      // Shuffle options and track new correct answer position
      const shuffledOptions = shuffledIndices.map(i => q.options[i]);
      const newCorrectAnswer = shuffledIndices.indexOf(q.correctAnswer);

      return {
        id: `${q.id}_${index}`, // Unique ID for this quiz instance
        module: item.moduleName,
        lesson: `Module ${item.moduleId}`,
        question: q.question,
        options: shuffledOptions,
        correctAnswer: newCorrectAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        type: 'multiple-choice' as const,
        tags: q.tags
      };
    });

    return {
      questions,
      metadata: {
        requestedCount,
        generatedCount: questions.length,
        selectedModules: moduleIds,
        timestamp: new Date().toISOString(),
        quizId: this.generateQuizId()
      }
    };
  }

  /**
   * BACKWARD COMPATIBLE: Generate quiz from single module
   * Uses the new rule-based generation internally
   */
  generateQuiz(
    moduleId: number,
    count: number = 10,
    difficulty?: 'easy' | 'medium' | 'hard',
    shuffle: boolean = true
  ): DynamicQuizQuestion[] {
    try {
      const result = this.generateQuizWithRules([moduleId], count, difficulty);
      return result.questions;
    } catch (error) {
      console.error('Quiz generation error:', error);
      return [];
    }
  }

  /**
   * BACKWARD COMPATIBLE: Generate quiz from multiple modules
   * Now enforces the 5-module limit
   */
  generateMixedQuiz(
    moduleIds: number[],
    count: number = 10,
    difficulty?: 'easy' | 'medium' | 'hard'
  ): DynamicQuizQuestion[] {
    try {
      // Enforce max 5 modules - take first 5 if more provided
      const limitedModules = moduleIds.slice(0, QUIZ_RULES.MAX_MODULES_PER_QUIZ);
      
      if (moduleIds.length > QUIZ_RULES.MAX_MODULES_PER_QUIZ) {
        console.warn(`Only ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules allowed per quiz. Using first ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules.`);
      }

      const result = this.generateQuizWithRules(limitedModules, count, difficulty);
      return result.questions;
    } catch (error) {
      console.error('Mixed quiz generation error:', error);
      return [];
    }
  }

  /**
   * Generate quiz from a range of modules
   * Note: If range exceeds 5 modules, only first 5 will be used
   */
  generateQuizFromRange(
    fromModule: number,
    toModule: number,
    count: number = 10,
    difficulty?: 'easy' | 'medium' | 'hard'
  ): DynamicQuizQuestion[] {
    const moduleIds: number[] = [];
    for (let i = fromModule; i <= toModule; i++) {
      moduleIds.push(i);
    }
    return this.generateMixedQuiz(moduleIds, count, difficulty);
  }

  /**
   * Search questions by keyword/tag
   */
  searchQuestions(
    keyword: string,
    moduleId?: number
  ): DynamicQuizQuestion[] {
    const searchTerm = keyword.toLowerCase();
    const modules = moduleId 
      ? [this.getModuleInfo(moduleId)].filter(Boolean) 
      : this.getAvailableModules().map(id => this.getModuleInfo(id)).filter(Boolean);

    const results: DynamicQuizQuestion[] = [];

    for (const module of modules) {
      if (!module) continue;

      const matchingQuestions = module.questions.filter(q => 
        q.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        q.question.toLowerCase().includes(searchTerm) ||
        module.keywords.some(kw => kw.toLowerCase().includes(searchTerm))
      );

      const converted = matchingQuestions.map(q => ({
        id: q.id,
        module: module.name,
        lesson: `Module ${module.id}`,
        question: q.question,
        options: [...q.options],
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        difficulty: q.difficulty,
        type: 'multiple-choice' as const,
        tags: q.tags
      }));

      results.push(...converted);
    }

    return results;
  }

  /**
   * Get statistics about available questions
   */
  getStatistics() {
    const stats = {
      totalModules: 0,
      totalQuestions: 0,
      questionsByModule: {} as Record<number, number>,
      questionsByDifficulty: {
        easy: 0,
        medium: 0,
        hard: 0
      }
    };

    const moduleIds = this.getAvailableModules();
    stats.totalModules = moduleIds.length;

    for (const moduleId of moduleIds) {
      const module = this.getModuleInfo(moduleId);
      if (!module) continue;

      stats.questionsByModule[moduleId] = module.questions.length;
      stats.totalQuestions += module.questions.length;

      // Count by difficulty
      for (const q of module.questions) {
        stats.questionsByDifficulty[q.difficulty]++;
      }
    }

    return stats;
  }

  /**
   * Utility: Shuffle array (Fisher-Yates algorithm)
   */
  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

// Export singleton instance
export const localQuizService = new LocalQuizService();

// Export class for testing
export { LocalQuizService };
