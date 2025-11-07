import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { courseModules, getTotalLessonsCount, getModuleProgress } from '@/data/courseStructure';
import { fetchUserProgress, saveUserProgress, ProgressUpdatePayload } from '@/services/progressApi';
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
            const serverProgress = res.progress;

            // Pull any locally cached progress (e.g. from pre-auth browsing)
            const localLessonsRaw = localStorage.getItem('course-progress');
            const localStudyTimeRaw = localStorage.getItem('study-time');
            const localStreakRaw = localStorage.getItem('study-streak');
            const localLastCompletion = localStorage.getItem('last-completion-date');

            const serverLessons = Array.isArray(serverProgress.completedLessons)
              ? serverProgress.completedLessons
              : [];
            let localLessons: string[] = [];
            if (localLessonsRaw) {
              try {
                const parsed = JSON.parse(localLessonsRaw);
                if (Array.isArray(parsed)) {
                  localLessons = parsed;
                }
              } catch (parseError) {
                console.warn('Failed to parse local lesson cache:', parseError);
              }
            }
            const mergedLessons = Array.from(new Set([...(serverLessons || []), ...(localLessons || [])]));

            const serverStudyTime = typeof serverProgress.totalStudyTime === 'number' ? serverProgress.totalStudyTime : 0;
            const localStudyTime = localStudyTimeRaw ? parseFloat(localStudyTimeRaw) : 0;
            const mergedStudyTime = Number.isFinite(localStudyTime)
              ? Math.max(serverStudyTime, localStudyTime)
              : serverStudyTime;

            const serverStreak = typeof serverProgress.studyStreak === 'number' ? serverProgress.studyStreak : 0;
            const localStreak = localStreakRaw ? parseInt(localStreakRaw, 10) : 0;
            const mergedStreak = Number.isFinite(localStreak)
              ? Math.max(serverStreak, localStreak)
              : serverStreak;

            const updates: ProgressUpdatePayload = {};
            let syncSucceeded = false;

            if (mergedLessons.length !== serverLessons.length) {
              updates.completedLessons = mergedLessons;
            }

            if (mergedStudyTime > serverStudyTime) {
              updates.totalStudyTime = parseFloat(mergedStudyTime.toFixed(2));
            }

            if (mergedStreak > serverStreak) {
              updates.studyStreak = mergedStreak;
            }

            if (localLastCompletion) {
              const localCompletedDate = new Date(localLastCompletion);
              const localTimestamp = localCompletedDate.getTime();
              const serverCompletedDate = serverProgress.lastCompletedAt ? new Date(serverProgress.lastCompletedAt) : null;
              const serverTimestamp = serverCompletedDate ? serverCompletedDate.getTime() : NaN;

              if (!Number.isNaN(localTimestamp) && (Number.isNaN(serverTimestamp) || localTimestamp > serverTimestamp)) {
                updates.lastCompletedAt = localCompletedDate.toISOString();
              }
            }

            let syncedProgress = serverProgress;

            const pendingUpdateKeys = Object.keys(updates);

            if (pendingUpdateKeys.length === 0) {
              syncSucceeded = true;
            }

            if (pendingUpdateKeys.length > 0) {
              try {
                const syncResponse = await saveUserProgress(updates, accessToken);
                if (syncResponse.success && syncResponse.progress) {
                  syncedProgress = syncResponse.progress;
                  syncSucceeded = true;
                } else {
                  syncedProgress = {
                    ...serverProgress,
                    ...updates,
                  };
                }
              } catch (syncError) {
                console.error('Failed to sync local progress with server:', syncError);
                syncedProgress = {
                  ...serverProgress,
                  ...updates,
                };
              }
            }

            setCompletedLessons(syncedProgress.completedLessons || []);
            const syncedStreak = syncedProgress.studyStreak ?? mergedStreak ?? 1;
            setStudyStreak(syncedStreak > 0 ? syncedStreak : 1);
            setTotalStudyTime(syncedProgress.totalStudyTime ?? mergedStudyTime ?? 0);
            setLastCompletedLessonId(syncedProgress.lastCompletedLessonId || null);

            if (syncedProgress.lastCompletedAt) {
              const isoValue = new Date(syncedProgress.lastCompletedAt).toISOString();
              setLastCompletedAt(isoValue);
              setLastCompletionDate(new Date(isoValue).toDateString());
            } else if (localLastCompletion) {
              const fallbackDate = new Date(localLastCompletion);
              if (!Number.isNaN(fallbackDate.getTime())) {
                setLastCompletedAt(fallbackDate.toISOString());
                setLastCompletionDate(fallbackDate.toDateString());
              } else {
                setLastCompletedAt(null);
                setLastCompletionDate(null);
              }
            } else {
              setLastCompletedAt(null);
              setLastCompletionDate(null);
            }

            // Once synced, clear stale local cache so we don't reapply it later
            if (syncSucceeded) {
              localStorage.removeItem('course-progress');
              localStorage.removeItem('study-time');
              localStorage.removeItem('study-streak');
              localStorage.removeItem('last-completion-date');
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
