import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
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
  const [lastCompletedLessonId, setLastCompletedLessonId] = useState<string | null>(null);
  const [lastCompletedAt, setLastCompletedAt] = useState<string | null>(null);
  const [lastCompletionDate, setLastCompletionDate] = useState<string | null>(null);
  const hasLoadedFromSource = useRef(false);
  const { isAuthenticated, isLoading, tokens } = useAuth();
  const accessToken = tokens?.accessToken;

  // Always use backend as source of truth for authenticated users
  useEffect(() => {
    if (isLoading) return; // Wait for auth to finish initializing
    if (isAuthenticated && !accessToken) return; // Wait for tokens before syncing

    hasLoadedFromSource.current = false;

    const loadProgress = async () => {
      if (isAuthenticated && accessToken) {
        try {
          const res = await fetchUserProgress(accessToken);
          if (res.success && res.progress) {
            setCompletedLessons(res.progress.completedLessons || []);
            const syncedStreak = res.progress.studyStreak ?? 1;
            setStudyStreak(syncedStreak > 0 ? syncedStreak : 1);
            setTotalStudyTime(res.progress.totalStudyTime || 0);
            setLastCompletedLessonId(res.progress.lastCompletedLessonId || null);

            if (res.progress.lastCompletedAt) {
              const isoValue = new Date(res.progress.lastCompletedAt).toISOString();
              setLastCompletedAt(isoValue);
              setLastCompletionDate(new Date(isoValue).toDateString());
            } else {
              setLastCompletedAt(null);
              setLastCompletionDate(null);
            }
            hasLoadedFromSource.current = true;
            return;
          }
        } catch (e) {
          setCompletedLessons([]);
          setStudyStreak(1);
          setTotalStudyTime(0);
          setLastCompletedLessonId(null);
          setLastCompletedAt(null);
          setLastCompletionDate(null);
          hasLoadedFromSource.current = true;
        }
      } else {
        // fallback: localStorage for unauthenticated users only
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
        if (savedStudyTime !== null) {
          const parsedStudyTime = parseFloat(savedStudyTime);
          setTotalStudyTime(Number.isNaN(parsedStudyTime) ? 0 : parsedStudyTime);
        }
        if (savedStreak !== null) {
          const parsedStreak = parseInt(savedStreak, 10);
          setStudyStreak(Number.isNaN(parsedStreak) ? 1 : parsedStreak);
        }
        const savedLastCompletion = localStorage.getItem('last-completion-date');
        if (savedLastCompletion) {
          setLastCompletionDate(savedLastCompletion);
        } else {
          setLastCompletionDate(null);
        }
        setLastCompletedLessonId(null);
        setLastCompletedAt(null);
        hasLoadedFromSource.current = true;
      }
    };
    loadProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isLoading, accessToken]);

  // Save progress to backend (if authenticated) or localStorage on change
  useEffect(() => {
    if (!hasLoadedFromSource.current) return;

    if (isAuthenticated && accessToken) {
      saveUserProgress({
        completedLessons,
        studyStreak,
        totalStudyTime,
        lastCompletedLessonId: lastCompletedLessonId || undefined,
        lastCompletedAt,
      }, accessToken).catch((error) => {
        console.error('Failed to sync progress with server:', error);
      });
    } else {
      localStorage.setItem('course-progress', JSON.stringify(completedLessons));
      localStorage.setItem('study-time', totalStudyTime.toString());
      localStorage.setItem('study-streak', studyStreak.toString());
      if (lastCompletionDate) {
        localStorage.setItem('last-completion-date', lastCompletionDate);
      } else {
        localStorage.removeItem('last-completion-date');
      }
    }
  }, [completedLessons, studyStreak, totalStudyTime, isAuthenticated, accessToken, lastCompletedAt, lastCompletedLessonId, lastCompletionDate]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (!prev.includes(lessonId)) {
        // Add lesson to completed list
        const newCompleted = [...prev, lessonId];
        
        // Update study time (simulate lesson duration)
        const lessonDuration = Math.floor(Math.random() * 30) + 15; // Random 15-45 minutes
        setTotalStudyTime(prevTime => prevTime + (lessonDuration / 60));
        
        // Update streak (simple logic - could be more sophisticated)
        const today = new Date();
        const todayKey = today.toDateString();
        const lastRecorded = isAuthenticated ? lastCompletionDate : localStorage.getItem('last-completion-date');

        if (lastRecorded !== todayKey) {
          const previousDate = lastRecorded ? new Date(lastRecorded) : null;
          if (previousDate) {
            const diffDays = Math.floor(
              (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) -
                Date.UTC(previousDate.getFullYear(), previousDate.getMonth(), previousDate.getDate())) /
              (24 * 60 * 60 * 1000)
            );
            setStudyStreak(prevStreak => (diffDays === 1 ? prevStreak + 1 : 1));
          } else {
            setStudyStreak(1);
          }
        }

        if (isAuthenticated) {
          setLastCompletedLessonId(lessonId);
          const isoValue = today.toISOString();
          setLastCompletedAt(isoValue);
          setLastCompletionDate(todayKey);
        } else {
          localStorage.setItem('last-completion-date', todayKey);
          setLastCompletionDate(todayKey);
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
    setLastCompletedLessonId(null);
    setLastCompletedAt(null);
    setLastCompletionDate(null);
    
    // Clear localStorage
    localStorage.removeItem('course-progress');
    localStorage.removeItem('study-time');
    localStorage.removeItem('study-streak');
    localStorage.removeItem('last-completion-date');
    hasLoadedFromSource.current = true;
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
