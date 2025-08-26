import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { DynamicQuizQuestion, dynamicQuizGenerator } from '@/data/dynamicQuizGenerator';

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
    difficulty?: 'easy' | 'medium' | 'hard';
    count?: number;
    adaptive?: boolean;
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
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<DynamicQuizQuestion[]>([]);
  const [currentSession, setCurrentSession] = useState<QuizSession | null>(null);
  const [quizHistory, setQuizHistory] = useState<QuizSession[]>([]);

  // Load quiz history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('quiz-history');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setQuizHistory(parsed);
      } catch (error) {
        console.error('Error loading quiz history:', error);
      }
    }
  }, []);

  // Save quiz history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('quiz-history', JSON.stringify(quizHistory));
  }, [quizHistory]);

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
  };

  const getQuizScore = () => {
    return quizResults.filter(result => result.isCorrect).length;
  };

  const generateQuiz = (options: {
    module?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    count?: number;
    adaptive?: boolean;
  }) => {
    const { module, difficulty, count = 10, adaptive = false } = options;

    let questions: DynamicQuizQuestion[];

    if (adaptive) {
      // Generate adaptive questions based on user performance
      const modulePerformance = getModulePerformanceData();
      questions = dynamicQuizGenerator.generateAdaptiveQuestions(modulePerformance, count);
    } else if (module) {
      // Generate questions for specific module
      questions = dynamicQuizGenerator.generateQuestionsForModule(module, count);
      if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
      }
    } else if (difficulty) {
      // Generate questions by difficulty
      questions = dynamicQuizGenerator.generateQuestionsByDifficulty(difficulty, count);
    } else {
      // Generate mixed questions
      questions = dynamicQuizGenerator.generateMixedQuestions(count);
    }

    setCurrentQuestions(questions);
    return questions;
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
    clearQuizHistory
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