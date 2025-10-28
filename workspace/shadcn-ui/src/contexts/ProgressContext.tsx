import React, { createContext, useContext, useState, useEffect } from 'react';
import { courseModules, getTotalLessonsCount, getModuleProgress } from '@/data/courseStructure';
import { fetchUserProgress, saveUserProgress } from '@/services/progressApi';
import { useAuth } from './AuthContext';

interface ProgressContextType {
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getProgressPercentage: () => number;
  getCompletedCount: () => number;
  getTotalLessons: () => number;
  getModuleProgress: (moduleId: string) => number;
  studyStreak: number;
  totalStudyTime: number;
  updateStudyTime: (minutes: number) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

const allLessonsData = courseModules.flatMap((module) =>
  module.lessons.map((lesson) => ({ id: lesson.id, module: module.id }))
);

const TOTAL_LESSONS = allLessonsData.length;

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [studyStreak, setStudyStreak] = useState(1);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
  const { isAuthenticated } = useAuth();

  // Load progress from backend on login, fallback to localStorage if not authenticated
  useEffect(() => {
    const loadProgress = async () => {
      if (isAuthenticated) {
        try {
          const res = await fetchUserProgress();
          if (res.success && res.progress) {
            setCompletedLessons(res.progress.completedLessons || []);
            setStudyStreak(res.progress.studyStreak || 1);
            setTotalStudyTime(res.progress.totalStudyTime || 0);
            return;
          }
        } catch (e) {
          // fallback to localStorage if backend fails
        }
      }
      // fallback: localStorage
      const savedProgress = localStorage.getItem('course-progress');
      const savedStudyTime = localStorage.getItem('study-time');
      const savedStreak = localStorage.getItem('study-streak');
      if (savedProgress) {
        try {
          const parsed = JSON.parse(savedProgress);
          setCompletedLessons(parsed);
        } catch (error) {
          console.error('Error loading progress:', error);
        }
      }
      if (savedStudyTime) setTotalStudyTime(parseFloat(savedStudyTime));
      if (savedStreak) setStudyStreak(parseInt(savedStreak));
    };
    loadProgress();
  }, [isAuthenticated]);

  // Save progress to backend (if authenticated) or localStorage on change
  useEffect(() => {
    if (isAuthenticated) {
      saveUserProgress({
        completedLessons,
        achievements: [], // handled in AchievementContext
        studyStreak,
        totalStudyTime
      }).catch(() => {
        // fallback to localStorage if backend fails
        localStorage.setItem('course-progress', JSON.stringify(completedLessons));
        localStorage.setItem('study-time', totalStudyTime.toString());
        localStorage.setItem('study-streak', studyStreak.toString());
      });
    } else {
      localStorage.setItem('course-progress', JSON.stringify(completedLessons));
      localStorage.setItem('study-time', totalStudyTime.toString());
      localStorage.setItem('study-streak', studyStreak.toString());
    }
  }, [completedLessons, studyStreak, totalStudyTime, isAuthenticated]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (!prev.includes(lessonId)) {
        // Add lesson to completed list
        const newCompleted = [...prev, lessonId];
        
        // Update study time (simulate lesson duration)
        const lessonDuration = Math.floor(Math.random() * 30) + 15; // Random 15-45 minutes
        setTotalStudyTime(prevTime => prevTime + (lessonDuration / 60));
        
        // Update streak (simple logic - could be more sophisticated)
        const lastCompletionDate = localStorage.getItem('last-completion-date');
        const today = new Date().toDateString();
        
        if (lastCompletionDate !== today) {
          setStudyStreak(prev => prev + 1);
          localStorage.setItem('last-completion-date', today);
        }
        
        return newCompleted;
      }
      return prev;
    });
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return completedLessons.includes(lessonId);
  };

  const getProgressPercentage = (): number => {
    return Math.round((completedLessons.length / TOTAL_LESSONS) * 100);
  };

  const getCompletedCount = (): number => {
    return completedLessons.length;
  };

  const getTotalLessons = (): number => {
    return getTotalLessonsCount();
  };

  const getModuleProgressValue = (moduleId: string): number => {
    return getModuleProgress(moduleId, completedLessons);
  };

  const updateStudyTime = (minutes: number) => {
    setTotalStudyTime(prev => prev + (minutes / 60));
  };

  const resetProgress = () => {
    // Reset all progress data
    setCompletedLessons([]);
    setStudyStreak(1);
    setTotalStudyTime(0);
    
    // Clear localStorage
    localStorage.removeItem('course-progress');
    localStorage.removeItem('study-time');
    localStorage.removeItem('study-streak');
    localStorage.removeItem('last-completion-date');
  };

  const value: ProgressContextType = {
    completedLessons,
    markLessonComplete,
    isLessonCompleted,
    getProgressPercentage,
    getCompletedCount,
    getTotalLessons,
    getModuleProgress: getModuleProgressValue,
    studyStreak,
    totalStudyTime,
    updateStudyTime,
    resetProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
