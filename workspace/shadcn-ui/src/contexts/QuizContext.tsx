import { createContext, useContext, ReactNode, useState } from 'react';

interface QuizResult {
  questionId: number;
  selected: number;
  isCorrect: boolean;
}

interface QuizContextType {
  quizResults: QuizResult[];
  score: number;
  totalQuestions: number;
  addQuizResult: (result: QuizResult) => void;
  resetQuiz: () => void;
  getQuizScore: () => number;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  
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
  };

  const getQuizScore = () => {
    return quizResults.filter(result => result.isCorrect).length;
  };

  const value = {
    quizResults,
    score: getQuizScore(),
    totalQuestions: quizResults.length,
    addQuizResult,
    resetQuiz,
    getQuizScore
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