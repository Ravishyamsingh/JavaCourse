import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useQuiz } from './QuizContext';
import { fetchUserProgress, saveUserProgress } from '@/services/progressApi';
import { useAuth } from './AuthContext';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  date: string | null;
  category: string;
  rarity: string;
}

interface AchievementContextType {
  achievements: Achievement[];
  unlockAchievement: (id: string) => void;
  getUnlockedAchievements: () => Achievement[];
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

// Initial achievements
const initialAchievements: Achievement[] = [
  {
    id: 'first-quiz',
    title: 'First Quiz',
    description: 'Complete your first quiz',
    icon: '🎓',
    unlocked: false,
    date: null,
    category: 'quiz',
    rarity: 'common'
  },
  {
    id: 'quiz-master',
    title: 'Quiz Master',
    description: 'Score 90% or higher on a quiz',
    icon: '🏆',
    unlocked: false,
    date: null,
    category: 'quiz',
    rarity: 'rare'
  },
  {
    id: 'consistent-learner',
    title: 'Consistent Learner',
    description: 'Complete 5 quizzes',
    icon: '📚',
    unlocked: false,
    date: null,
    category: 'quiz',
    rarity: 'uncommon'
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Score 100% on a quiz',
    icon: '💯',
    unlocked: false,
    date: null,
    category: 'quiz',
    rarity: 'legendary'
  }
];

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('achievements');
    return saved ? JSON.parse(saved) : initialAchievements;
  });
  const { quizResults, getQuizScore } = useQuiz();
  const { isAuthenticated } = useAuth();

  // Load achievements from backend on login, fallback to localStorage
  useEffect(() => {
    const loadAchievements = async () => {
      if (isAuthenticated) {
        try {
          const res = await fetchUserProgress();
          if (res.success && res.achievements) {
            setAchievements(res.achievements.length ? res.achievements : initialAchievements);
            return;
          }
        } catch (e) {}
      }
      // fallback: localStorage
      const saved = localStorage.getItem('achievements');
      setAchievements(saved ? JSON.parse(saved) : initialAchievements);
    };
    loadAchievements();
  }, [isAuthenticated]);

  // Save achievements to backend (if authenticated) or localStorage
  useEffect(() => {
    if (isAuthenticated) {
      saveUserProgress({
        completedLessons: [], // handled in ProgressContext
        achievements,
        studyStreak: 0,
        totalStudyTime: 0
      }).catch(() => {
        localStorage.setItem('achievements', JSON.stringify(achievements));
      });
    } else {
      localStorage.setItem('achievements', JSON.stringify(achievements));
    }
  }, [achievements, isAuthenticated]);

  // Check for quiz-related achievements
  useEffect(() => {
    if (quizResults.length > 0) {
      const score = getQuizScore();
      const total = quizResults.length;
      const percentage = total > 0 ? (score / total) * 100 : 0;
      if (quizResults.length >= 1) unlockAchievement('first-quiz');
      if (percentage >= 90) unlockAchievement('quiz-master');
      if (percentage === 100) unlockAchievement('perfect-score');
      if (quizResults.length >= 5) unlockAchievement('consistent-learner');
    }
  }, [quizResults, getQuizScore]);

  const unlockAchievement = (id: string) => {
    setAchievements(prev => {
      const achievementIndex = prev.findIndex(a => a.id === id);
      if (achievementIndex >= 0 && !prev[achievementIndex].unlocked) {
        const newAchievements = [...prev];
        newAchievements[achievementIndex] = {
          ...newAchievements[achievementIndex],
          unlocked: true,
          date: new Date().toISOString().split('T')[0]
        };
        return newAchievements;
      }
      return prev;
    });
  };

  const getUnlockedAchievements = () => {
    return achievements.filter(a => a.unlocked);
  };

  const value = {
    achievements,
    unlockAchievement,
    getUnlockedAchievements
  };

  return (
    <AchievementContext.Provider value={value}>
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const context = useContext(AchievementContext);
  if (context === undefined) {
    throw new Error('useAchievements must be used within an AchievementProvider');
  }
  return context;
}