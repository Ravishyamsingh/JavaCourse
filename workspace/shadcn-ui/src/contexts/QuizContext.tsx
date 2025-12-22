import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { DynamicQuizQuestion, dynamicQuizGenerator } from '@/data/dynamicQuizGenerator';
// DEPRECATED: External API imports kept for reference but no longer used
// import { generateQuizViaBackend, ModuleSelection } from '@/services/quizApi';
import { localQuizService, QUIZ_RULES } from '@/services/localQuizService';

type GeminiStatus = {
  state: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  usedFallback?: boolean;
};

interface QuizResult {
  questionId: string;
  selected: number;
  isCorrect: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  module: string;
  timeSpent?: number;
}

interface QuizSession {
  id: string;
  startTime: Date;
  endTime?: Date;
  module?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  totalQuestions: number;
  correctAnswers: number;
  results: QuizResult[];
}

interface QuizStats {
  totalQuizzesTaken: number;
  averageScore: number;
  modulePerformance: { [module: string]: number };
  difficultyPerformance: { [difficulty: string]: number };
  recentSessions: QuizSession[];
}

interface QuizContextType {
  // Current quiz state
  quizResults: QuizResult[];
  currentQuestions: DynamicQuizQuestion[];
  score: number;
  totalQuestions: number;
  
  // Quiz management
  addQuizResult: (result: QuizResult) => void;
  resetQuiz: () => void;
  getQuizScore: () => number;
  
  // Dynamic quiz generation
  generateQuiz: (options: {
    module?: string;
    modulesRange?: { from: number; to: number };
    modulesList?: number[];
    difficulty?: 'easy' | 'medium' | 'hard';
    count?: number;
    adaptive?: boolean;
    useGemini?: boolean;
  }) => DynamicQuizQuestion[];
  
  // Session management
  startQuizSession: (questions: DynamicQuizQuestion[], options?: {
    module?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
  }) => void;
  endQuizSession: () => void;
  getCurrentSession: () => QuizSession | null;
  
  // Statistics and analytics
  getQuizStats: () => QuizStats;
  getModulePerformance: (module: string) => number;
  getRecommendedDifficulty: () => 'easy' | 'medium' | 'hard';
  
  // Quiz history
  getQuizHistory: () => QuizSession[];
  clearQuizHistory: () => void;

  // Gemini status
  geminiStatus: GeminiStatus;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<DynamicQuizQuestion[]>([]);
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  const [quizHistory, setQuizHistory] = useState<QuizSession[]>([]);
  const [geminiStatus, setGeminiStatus] = useState<GeminiStatus>({ state: 'idle' });

  // Load quiz history from localStorage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('quiz-history');
      if (savedHistory) {
        const parsed = JSON.parse(savedHistory);
        if (Array.isArray(parsed)) {
          setQuizHistory(parsed);
        }
      }
    } catch (error) {
      console.error('Error loading quiz history:', error);
      localStorage.removeItem('quiz-history');
    }
  }, []);

  // Save quiz history to localStorage whenever it changes (debounced)
  useEffect(() => {
    if (quizHistory.length === 0) return;
    
    try {
      const timeout = setTimeout(() => {
        localStorage.setItem('quiz-history', JSON.stringify(quizHistory));
      }, 500);
      
      return () => clearTimeout(timeout);
    } catch (error) {
      console.error('Error saving quiz history:', error);
    }
  }, [quizHistory]);

  // Auto-end quiz session when user navigates away or closes tab
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (currentSession) {
        // Save the session before page unloads
        const completedSession: QuizSession = {
          ...currentSession,
          endTime: new Date(),
          correctAnswers: quizResults.filter(r => r.isCorrect).length,
          results: [...quizResults]
        };
        
        // Use synchronous storage to ensure it saves before unload
        try {
          const existingHistory = localStorage.getItem('quiz-history');
          const history = existingHistory ? JSON.parse(existingHistory) : [];
          localStorage.setItem('quiz-history', JSON.stringify([completedSession, ...history.slice(0, 49)]));
        } catch (error) {
          console.error('Error saving session on unload:', error);
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && currentSession) {
        // End session when tab becomes hidden (user switched tabs or minimized)
        endQuizSession();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentSession, quizResults]);

  const addQuizResult = (result: QuizResult) => {
    setQuizResults(prev => {
      // Check if question already exists in results
      const existingIndex = prev.findIndex(r => r.questionId === result.questionId);
      if (existingIndex >= 0) {
        // Update existing result
        const newResults = [...prev];
        newResults[existingIndex] = result;
        return newResults;
      }
      // Add new result
      return [...prev, result];
    });
  };

  const resetQuiz = () => {
    setQuizResults([]);
    setCurrentQuestions([]);
    setCurrentSession(null);
    setGeminiStatus({ state: 'idle' });
  };

  const getQuizScore = () => {
    return quizResults.filter(result => result.isCorrect).length;
  };

  const generateQuiz = (options: {
    module?: string;
    modulesRange?: { from: number; to: number };
    modulesList?: number[];
    difficulty?: 'easy' | 'medium' | 'hard';
    count?: number;
    adaptive?: boolean;
    useGemini?: boolean;
  }) => {
    const { module, modulesRange, modulesList, difficulty, count = 10, adaptive = false, useGemini = false } = options;

    // Always clear current questions at the start to prevent stale data
    setCurrentQuestions([]);

    // Cap quiz count to MAX_QUESTIONS_PER_QUIZ (50)
    const cappedCount = Math.min(Math.max(count, QUIZ_RULES.MIN_QUESTIONS_PER_QUIZ), QUIZ_RULES.MAX_QUESTIONS_PER_QUIZ);

    let questions: DynamicQuizQuestion[] = [];

    try {
      // =============================================================
      // PRIMARY DATA SOURCE: Local JSON Quiz Bank
      // 
      // QUIZ GENERATION RULES:
      // 1. Total system contains 20 modules
      // 2. User can select 1-5 modules per quiz (max 5)
      // 3. Maximum 50 questions per quiz
      // 4. Questions are randomly selected and mixed
      // 5. Different pattern each time (randomized)
      // 
      // External APIs (Gemini, backend) are deprecated and ignored
      // =============================================================

      // Note: useGemini parameter is ignored - kept for backward compatibility
      if (useGemini) {
        console.warn('useGemini is deprecated. Using local quiz bank instead.');
      }

      if (adaptive) {
        // DEPRECATED: Old adaptive logic - now uses local quiz bank
        // Generate adaptive questions based on user performance
        const modulePerformance = getModulePerformanceData();
        questions = dynamicQuizGenerator.generateAdaptiveQuestions(modulePerformance, cappedCount);
      } else if (modulesRange) {
        // Generate from module range using local quiz bank
        // Range will be limited to max 5 modules internally
        const { from, to } = modulesRange;
        questions = localQuizService.generateQuizFromRange(from, to, cappedCount, difficulty);
      } else if (modulesList && modulesList.length > 0) {
        // Generate from specific modules using local quiz bank
        // Enforce max 5 modules rule
        if (modulesList.length > QUIZ_RULES.MAX_MODULES_PER_QUIZ) {
          console.warn(`Selection limited to ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} modules. Using first ${QUIZ_RULES.MAX_MODULES_PER_QUIZ} of ${modulesList.length} selected.`);
        }
        questions = localQuizService.generateMixedQuiz(modulesList, cappedCount, difficulty);
      } else if (module) {
        // Try to parse module as number (e.g., "Module 1" -> 1, or "1" -> 1)
        const moduleMatch = module.match(/\d+/);
        const moduleId = moduleMatch ? parseInt(moduleMatch[0]) : null;
        
        if (moduleId) {
          questions = localQuizService.generateQuiz(moduleId, cappedCount, difficulty);
        } else {
          // Fallback if module format is unexpected
          console.warn(`Unable to parse module ID from "${module}". Using module 1.`);
          questions = localQuizService.generateQuiz(1, cappedCount, difficulty);
        }
      } else if (difficulty) {
        // Generate mixed questions with specific difficulty
        // Use random selection of up to 5 modules for variety
        const availableModules = localQuizService.getAvailableModules();
        const shuffledModules = [...availableModules].sort(() => Math.random() - 0.5);
        const selectedModules = shuffledModules.slice(0, QUIZ_RULES.MAX_MODULES_PER_QUIZ);
        questions = localQuizService.generateMixedQuiz(selectedModules, cappedCount, difficulty);
      } else {
        // Generate mixed questions from random 5 modules for variety
        const availableModules = localQuizService.getAvailableModules();
        const shuffledModules = [...availableModules].sort(() => Math.random() - 0.5);
        const selectedModules = shuffledModules.slice(0, QUIZ_RULES.MAX_MODULES_PER_QUIZ);
        questions = localQuizService.generateMixedQuiz(selectedModules, cappedCount);
      }

      // Validate we got questions
      if (!questions || questions.length === 0) {
        throw new Error('No questions available for the selected criteria');
      }

      setCurrentQuestions(questions);
      setGeminiStatus({ state: 'idle' }); // Always idle since we're not using external APIs
      return questions;

    } catch (error) {
      console.error('Quiz generation error:', error);
      
      // Fallback: Try to get any questions from module 1
      try {
        questions = localQuizService.generateQuiz(1, cappedCount);
        setCurrentQuestions(questions);
        
        setGeminiStatus({
          state: 'error',
          message: 'Some filters could not be applied. Showing available questions.',
          usedFallback: true,
        });
      } catch (fallbackError) {
        console.error('Fallback quiz generation failed:', fallbackError);
        setGeminiStatus({
          state: 'error',
          message: 'Unable to load quiz questions. Please try again.',
          usedFallback: true,
        });
      }
      
      return questions;
    }
  };

  const startQuizSession = (questions: DynamicQuizQuestion[], options?: {
    module?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
  }) => {
    const session: QuizSession = {
      id: `quiz_${Date.now()}`,
      startTime: new Date(),
      module: options?.module,
      difficulty: options?.difficulty,
      totalQuestions: questions.length,
      correctAnswers: 0,
      results: []
    };
    
    setCurrentSession(session);
    setCurrentQuestions(questions);
    setQuizResults([]);
  };

  const endQuizSession = () => {
    if (currentSession) {
      const completedSession: QuizSession = {
        ...currentSession,
        endTime: new Date(),
        correctAnswers: getQuizScore(),
        results: [...quizResults]
      };

      setQuizHistory(prev => [completedSession, ...prev.slice(0, 49)]); // Keep last 50 sessions
      setCurrentSession(null);
    }
  };

  const getCurrentSession = () => currentSession;

  const getModulePerformanceData = (): { [module: string]: number } => {
    const performance: { [module: string]: number } = {};
    
    for (const session of quizHistory) {
      if (session.module && session.totalQuestions > 0) {
        const moduleScore = session.correctAnswers / session.totalQuestions;
        if (performance[session.module]) {
          performance[session.module] = (performance[session.module] + moduleScore) / 2;
        } else {
          performance[session.module] = moduleScore;
        }
      }
    }

    return performance;
  };

  const getQuizStats = (): QuizStats => {
    const totalQuizzes = quizHistory.length;
    const totalScore = quizHistory.reduce((sum, session) =>
      sum + (session.correctAnswers / session.totalQuestions), 0);
    const averageScore = totalQuizzes > 0 ? totalScore / totalQuizzes : 0;

    const modulePerformance = getModulePerformanceData();
    
    const difficultyPerformance: { [difficulty: string]: number } = {};
    for (const session of quizHistory) {
      if (session.difficulty && session.totalQuestions > 0) {
        const score = session.correctAnswers / session.totalQuestions;
        if (difficultyPerformance[session.difficulty]) {
          difficultyPerformance[session.difficulty] =
            (difficultyPerformance[session.difficulty] + score) / 2;
        } else {
          difficultyPerformance[session.difficulty] = score;
        }
      }
    }

    return {
      totalQuizzesTaken: totalQuizzes,
      averageScore,
      modulePerformance,
      difficultyPerformance,
      recentSessions: quizHistory.slice(0, 10)
    };
  };

  const getModulePerformance = (module: string): number => {
    const modulePerformance = getModulePerformanceData();
    return modulePerformance[module] || 0;
  };

  const getRecommendedDifficulty = (): 'easy' | 'medium' | 'hard' => {
    const stats = getQuizStats();
    if (stats.averageScore < 0.6) return 'easy';
    if (stats.averageScore < 0.8) return 'medium';
    return 'hard';
  };

  const getQuizHistory = () => quizHistory;

  const clearQuizHistory = () => {
    setQuizHistory([]);
    localStorage.removeItem('quiz-history');
  };

  const value: QuizContextType = {
    // Current quiz state
    quizResults,
    currentQuestions,
    score: getQuizScore(),
    totalQuestions: quizResults.length,
    
    // Quiz management
    addQuizResult,
    resetQuiz,
    getQuizScore,
    
    // Dynamic quiz generation
    generateQuiz,
    
    // Session management
    startQuizSession,
    endQuizSession,
    getCurrentSession,
    
    // Statistics and analytics
    getQuizStats,
    getModulePerformance,
    getRecommendedDifficulty,
    
    // Quiz history
    getQuizHistory,
    clearQuizHistory,

    // Gemini status
    geminiStatus
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
