import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { courseModules, getTotalLessonsCount, getModuleProgress } from '@/data/courseStructure';
import {
  fetchUserProgress,
  saveUserProgress,
  ProgressUpdatePayload,
  WeeklyActivityEntry,
  QuizHistoryEntry,
  ProgressMetrics,
  UserProgressState
} from '@/services/progressApi';
import { useAuth } from './AuthContext';

interface ProgressContextType {
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => Promise<void>;
  isLessonCompleted: (lessonId: string) => boolean;
  isMarkingLesson: (lessonId: string) => boolean;
  getProgressPercentage: () => number;
  getCompletedCount: () => number;
  getTotalLessons: () => number;
  getModuleProgress: (moduleId: string) => number;
  studyStreak: number;
  totalStudyTime: number;
  updateStudyTime: (minutes: number) => void;
  resetProgress: () => void;
  weeklyActivity: WeeklyActivityEntry[];
  quizHistory: QuizHistoryEntry[];
  lastActivityAt: string | null;
  totalQuizAttempts: number;
  refreshProgress: () => Promise<void>;
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

const MIN_LESSON_DURATION_MINUTES = 15;

const parseDurationToMinutes = (duration?: string): number => {
  if (!duration || typeof duration !== 'string') {
    return MIN_LESSON_DURATION_MINUTES;
  }

  const normalised = duration.toLowerCase();
  const numericMatches = normalised.match(/\d+(?:\.\d+)?/g);
  if (!numericMatches || numericMatches.length === 0) {
    return MIN_LESSON_DURATION_MINUTES;
  }

  const toNumber = (value: string) => Number.parseFloat(value);

  if (normalised.includes('hour')) {
    const hours = toNumber(numericMatches[0]);
    let minutes = hours * 60;
    if (Number.isFinite(minutes) && numericMatches.length > 1 && normalised.includes('min')) {
      minutes += toNumber(numericMatches[1]);
    }
    if (!Number.isFinite(minutes) || minutes <= 0) {
      return MIN_LESSON_DURATION_MINUTES;
    }
    return Math.max(MIN_LESSON_DURATION_MINUTES, Math.round(minutes));
  }

  if (normalised.includes('-') && numericMatches.length >= 2) {
    const first = toNumber(numericMatches[0]);
    const second = toNumber(numericMatches[1]);
    const average = (first + second) / 2;
    if (!Number.isFinite(average) || average <= 0) {
      return MIN_LESSON_DURATION_MINUTES;
    }
    return Math.max(MIN_LESSON_DURATION_MINUTES, Math.round(average));
  }

  const minutes = toNumber(numericMatches[0]);
  if (!Number.isFinite(minutes) || minutes <= 0) {
    return MIN_LESSON_DURATION_MINUTES;
  }

  return Math.max(MIN_LESSON_DURATION_MINUTES, Math.round(minutes));
};

interface LessonMetadata {
  moduleId: string;
  title: string;
  type: string;
  durationMinutes: number;
}

const lessonMetadata = new Map<string, LessonMetadata>();

courseModules.forEach((module) => {
  module.lessons.forEach((lesson) => {
    lessonMetadata.set(lesson.id, {
      moduleId: module.id,
      title: lesson.title,
      type: lesson.type,
      durationMinutes: parseDurationToMinutes(lesson.duration)
    });
  });
});

const createEmptyWeeklyActivity = (): WeeklyActivityEntry[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const result: WeeklyActivityEntry[] = [];

  for (let i = 6; i >= 0; i -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    result.push({
      date: `${date.toISOString().split('T')[0]}T00:00:00.000Z`,
      lessons: 0,
      studyTime: 0,
      quizAttempts: 0,
      scoreEarned: 0
    });
  }

  return result;
};

const normaliseWeeklyActivity = (entries?: WeeklyActivityEntry[]): WeeklyActivityEntry[] => {
  if (!entries || !Array.isArray(entries) || entries.length === 0) {
    return createEmptyWeeklyActivity();
  }

  return entries.map((entry) => ({
    date: typeof entry.date === 'string' ? entry.date : new Date(entry.date).toISOString(),
    lessons: Number.isFinite(entry.lessons) ? entry.lessons : 0,
    studyTime: Number.isFinite(entry.studyTime) ? entry.studyTime : 0,
    quizAttempts: Number.isFinite(entry.quizAttempts) ? entry.quizAttempts : 0,
    scoreEarned: Number.isFinite(entry.scoreEarned) ? entry.scoreEarned : 0
  }));
};

const normaliseQuizHistoryEntries = (entries?: QuizHistoryEntry[]): QuizHistoryEntry[] => {
  if (!entries || !Array.isArray(entries) || entries.length === 0) {
    return [];
  }

  return entries
    .map((entry) => ({
      quizId: entry.quizId,
      moduleId: entry.moduleId ?? null,
      topic: entry.topic,
      score: Number.isFinite(entry.score) ? entry.score : 0,
      totalQuestions: Number.isFinite(entry.totalQuestions) ? entry.totalQuestions : 0,
      timeTakenMinutes: Number.isFinite(entry.timeTakenMinutes) ? entry.timeTakenMinutes : 0,
      completedAt: typeof entry.completedAt === 'string' ? entry.completedAt : new Date(entry.completedAt).toISOString()
    }))
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [studyStreak, setStudyStreak] = useState(1);
  const [totalStudyTime, setTotalStudyTime] = useState(0);
  const [lastCompletedLessonId, setLastCompletedLessonId] = useState<string | null>(null);
  const [lastCompletedAt, setLastCompletedAt] = useState<string | null>(null);
  const [lastCompletionDate, setLastCompletionDate] = useState<string | null>(null);
  const [weeklyActivity, setWeeklyActivity] = useState<WeeklyActivityEntry[]>(createEmptyWeeklyActivity());
  const [quizHistory, setQuizHistory] = useState<QuizHistoryEntry[]>([]);
  const [lastActivityAt, setLastActivityAt] = useState<string | null>(null);
  const [totalQuizAttempts, setTotalQuizAttempts] = useState(0);
  const hasLoadedFromSource = useRef(false);
  const lessonsInFlightRef = useRef<Set<string>>(new Set());
  const { isAuthenticated, isLoading, tokens } = useAuth();
  const accessToken = tokens?.accessToken;

  const applySyncedProgress = useCallback(
    (progress: UserProgressState, metrics?: ProgressMetrics | null, fallbackCompletion?: string | null) => {
      const resolvedProgress: UserProgressState = {
        ...progress,
        completedLessons: progress.completedLessons || [],
        completedQuizzes: progress.completedQuizzes || [],
        achievements: progress.achievements || [],
        certificatesEarned: progress.certificatesEarned || [],
        totalScore: progress.totalScore ?? 0,
        enrolledCourses: progress.enrolledCourses || [],
        studyStreak: progress.studyStreak ?? 0,
        totalStudyTime: progress.totalStudyTime ?? 0,
        lastCompletedLessonId: progress.lastCompletedLessonId ?? null,
        lastCompletedAt: progress.lastCompletedAt ?? null,
        lastSyncedAt: progress.lastSyncedAt ?? null,
        activityLog: progress.activityLog || [],
        quizHistory: progress.quizHistory || []
      };

      setCompletedLessons(resolvedProgress.completedLessons);
      const streakValue = resolvedProgress.studyStreak > 0 ? resolvedProgress.studyStreak : 1;
      setStudyStreak(streakValue);
      setTotalStudyTime(resolvedProgress.totalStudyTime);
      setLastCompletedLessonId(resolvedProgress.lastCompletedLessonId);

      const fallbackLastCompletion = fallbackCompletion || null;

      let resolvedLastCompletedAt: string | null = null;
      if (resolvedProgress.lastCompletedAt) {
        const parsedLastCompleted = new Date(resolvedProgress.lastCompletedAt);
        if (!Number.isNaN(parsedLastCompleted.getTime())) {
          resolvedLastCompletedAt = parsedLastCompleted.toISOString();
        }
      }

      if (resolvedLastCompletedAt) {
        setLastCompletedAt(resolvedLastCompletedAt);
        setLastCompletionDate(new Date(resolvedLastCompletedAt).toDateString());
      } else if (fallbackLastCompletion) {
        const fallbackDate = new Date(fallbackLastCompletion);
        if (!Number.isNaN(fallbackDate.getTime())) {
          const isoValue = fallbackDate.toISOString();
          setLastCompletedAt(isoValue);
          setLastCompletionDate(fallbackDate.toDateString());
        } else {
          setLastCompletedAt(null);
          setLastCompletionDate(null);
        }
      } else {
        setLastCompletedAt(null);
        setLastCompletionDate(null);
      }

      const resolvedLastActivity =
        metrics?.lastActivityAt ||
        resolvedProgress.lastCompletedAt ||
        resolvedProgress.lastSyncedAt ||
        fallbackLastCompletion ||
        null;
      let resolvedLastActivityIso: string | null = null;
      if (resolvedLastActivity) {
        const parsedLastActivity = new Date(resolvedLastActivity);
        if (!Number.isNaN(parsedLastActivity.getTime())) {
          resolvedLastActivityIso = parsedLastActivity.toISOString();
        }
      }

      setLastActivityAt(resolvedLastActivityIso);

      const weeklyData = metrics?.weeklyActivity ?? [];
      setWeeklyActivity(normaliseWeeklyActivity(weeklyData));

      const quizData = metrics?.quizHistory?.length
        ? metrics.quizHistory
        : resolvedProgress.quizHistory;

      const normalisedHistory = normaliseQuizHistoryEntries(quizData);
      setQuizHistory(normalisedHistory);
      setTotalQuizAttempts(metrics?.totalQuizAttempts ?? normalisedHistory.length);
    },
    []
  );

  const loadProgress = useCallback(async () => {
    if (isLoading) return;
    if (isAuthenticated && !accessToken) return;

    hasLoadedFromSource.current = false;

    const applyDefaultState = (fallbackLastCompletion?: string | null) => {
      let fallbackIso: string | null = null;
      if (fallbackLastCompletion) {
        const parsed = new Date(fallbackLastCompletion);
        if (!Number.isNaN(parsed.getTime())) {
          fallbackIso = parsed.toISOString();
        }
      }

      setCompletedLessons([]);
      setStudyStreak(1);
      setTotalStudyTime(0);
      setLastCompletedLessonId(null);
      setLastCompletedAt(null);
      setLastCompletionDate(fallbackLastCompletion ?? null);
      setWeeklyActivity(createEmptyWeeklyActivity());
      setQuizHistory([]);
      setLastActivityAt(fallbackIso);
      setTotalQuizAttempts(0);
      hasLoadedFromSource.current = true;
    };

    if (isAuthenticated && accessToken) {
      try {
        const res = await fetchUserProgress(accessToken);
        if (res.success && res.progress) {
          const serverProgress = res.progress;
          const metrics = res.metrics ?? null;

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

          const serverStudyTime =
            typeof serverProgress.totalStudyTime === 'number' ? serverProgress.totalStudyTime : 0;
          const localStudyTime = localStudyTimeRaw ? parseFloat(localStudyTimeRaw) : 0;
          const mergedStudyTime = Number.isFinite(localStudyTime)
            ? Math.max(serverStudyTime, localStudyTime)
            : serverStudyTime;

          const serverStreak =
            typeof serverProgress.studyStreak === 'number' ? serverProgress.studyStreak : 0;
          const localStreak = localStreakRaw ? parseInt(localStreakRaw, 10) : 0;
          const mergedStreak = Number.isFinite(localStreak)
            ? Math.max(serverStreak, localStreak)
            : serverStreak;

          const updates: ProgressUpdatePayload = {};
          const sanitizedUpdates: Partial<UserProgressState> = {};

          if (mergedLessons.length !== serverLessons.length) {
            updates.completedLessons = mergedLessons;
            sanitizedUpdates.completedLessons = mergedLessons;
          }

          if (mergedStudyTime > serverStudyTime) {
            const roundedStudyTime = parseFloat(mergedStudyTime.toFixed(2));
            updates.totalStudyTime = roundedStudyTime;
            sanitizedUpdates.totalStudyTime = roundedStudyTime;
          }

          if (mergedStreak > serverStreak) {
            updates.studyStreak = mergedStreak;
            sanitizedUpdates.studyStreak = mergedStreak;
          }

          if (localLastCompletion) {
            const localCompletedDate = new Date(localLastCompletion);
            const localTimestamp = localCompletedDate.getTime();
            const serverCompletedDate = serverProgress.lastCompletedAt
              ? new Date(serverProgress.lastCompletedAt)
              : null;
            const serverTimestamp = serverCompletedDate ? serverCompletedDate.getTime() : NaN;

            if (
              !Number.isNaN(localTimestamp) &&
              (Number.isNaN(serverTimestamp) || localTimestamp > serverTimestamp)
            ) {
              const isoValue = localCompletedDate.toISOString();
              updates.lastCompletedAt = isoValue;
              sanitizedUpdates.lastCompletedAt = isoValue;
            }
          }

          let latestMetrics = metrics;
          let syncedProgress = serverProgress;
          let syncSucceeded = Object.keys(updates).length === 0;

          if (!syncSucceeded) {
            try {
              const syncResponse = await saveUserProgress(updates, accessToken);
              if (syncResponse.success && syncResponse.progress) {
                syncedProgress = syncResponse.progress;
                latestMetrics = syncResponse.metrics ?? latestMetrics;
                syncSucceeded = true;
              } else {
                syncedProgress = {
                  ...serverProgress,
                  ...sanitizedUpdates,
                  activityLog: serverProgress.activityLog,
                  quizHistory: serverProgress.quizHistory
                };
              }
            } catch (syncError) {
              console.error('Failed to sync local progress with server:', syncError);
              syncedProgress = {
                ...serverProgress,
                ...sanitizedUpdates,
                activityLog: serverProgress.activityLog,
                quizHistory: serverProgress.quizHistory
              };
            }
          }

          applySyncedProgress(syncedProgress, latestMetrics, localLastCompletion ?? null);

          if (syncSucceeded) {
            localStorage.removeItem('course-progress');
            localStorage.removeItem('study-time');
            localStorage.removeItem('study-streak');
            localStorage.removeItem('last-completion-date');
          }

          hasLoadedFromSource.current = true;
          return;
        }

        applyDefaultState();
      } catch (error) {
        applyDefaultState();
      }
      return;
    }

    // Local fallback for unauthenticated users
    const savedProgress = localStorage.getItem('course-progress');
    const savedStudyTime = localStorage.getItem('study-time');
    const savedStreak = localStorage.getItem('study-streak');
    const savedLastCompletion = localStorage.getItem('last-completion-date');

    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        setCompletedLessons(Array.isArray(parsed) ? parsed : []);
      } catch (error) {
        console.error('Error loading progress:', error);
        setCompletedLessons([]);
      }
    } else {
      setCompletedLessons([]);
    }

    if (savedStudyTime !== null) {
      const parsedStudyTime = parseFloat(savedStudyTime);
      setTotalStudyTime(Number.isNaN(parsedStudyTime) ? 0 : parsedStudyTime);
    } else {
      setTotalStudyTime(0);
    }

    if (savedStreak !== null) {
      const parsedStreak = parseInt(savedStreak, 10);
      setStudyStreak(Number.isNaN(parsedStreak) ? 1 : parsedStreak);
    } else {
      setStudyStreak(1);
    }

    if (savedLastCompletion) {
      setLastCompletionDate(savedLastCompletion);
      const fallbackDate = new Date(savedLastCompletion);
      setLastCompletedAt(!Number.isNaN(fallbackDate.getTime()) ? fallbackDate.toISOString() : null);
      setLastActivityAt(!Number.isNaN(fallbackDate.getTime()) ? fallbackDate.toISOString() : null);
    } else {
      setLastCompletionDate(null);
      setLastCompletedAt(null);
      setLastActivityAt(null);
    }

    setWeeklyActivity(createEmptyWeeklyActivity());
    setQuizHistory([]);
    setTotalQuizAttempts(0);

    hasLoadedFromSource.current = true;
  }, [isAuthenticated, isLoading, accessToken, applySyncedProgress]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  // Save progress to backend (if authenticated) or localStorage on change
  useEffect(() => {
    if (!hasLoadedFromSource.current) return;

    if (isAuthenticated && accessToken) {
      const payload: ProgressUpdatePayload = {
        completedLessons,
        studyStreak,
        totalStudyTime,
        lastCompletedLessonId: lastCompletedLessonId || undefined,
        lastCompletedAt,
      };

      saveUserProgress(payload, accessToken)
        .then((response) => {
          if (response?.success && response.progress) {
            applySyncedProgress(response.progress, response.metrics ?? null, lastCompletedAt);
          }
        })
        .catch((error) => {
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
  }, [
    completedLessons,
    studyStreak,
    totalStudyTime,
    isAuthenticated,
    accessToken,
    lastCompletedAt,
    lastCompletedLessonId,
    lastCompletionDate,
    applySyncedProgress
  ]);

  const markLessonComplete = useCallback(async (lessonId: string) => {
    const normalisedId = lessonId?.trim();
    if (!normalisedId) {
      return;
    }

    if (lessonsInFlightRef.current.has(normalisedId)) {
      return;
    }

    lessonsInFlightRef.current.add(normalisedId);

    const metadata = lessonMetadata.get(normalisedId);
    const durationMinutes = metadata?.durationMinutes ?? MIN_LESSON_DURATION_MINUTES;
    const durationHours = Number.parseFloat((durationMinutes / 60).toFixed(2));
    const completionDate = new Date();
    const completionIso = completionDate.toISOString();
    const completionDayKey = completionDate.toDateString();
    const mergedLessons = Array.from(new Set([...completedLessons, normalisedId]));
    const lessonAlreadyCompleted = completedLessons.includes(normalisedId);
    const previousCompletionDate = lastCompletionDate ? new Date(lastCompletionDate) : null;

    const nextStudyStreak = (() => {
      if (lessonAlreadyCompleted) {
        return studyStreak;
      }
      if (!previousCompletionDate || Number.isNaN(previousCompletionDate.getTime())) {
        return 1;
      }
      const diffDays = Math.floor(
        (Date.UTC(
          completionDate.getFullYear(),
          completionDate.getMonth(),
          completionDate.getDate()
        ) -
          Date.UTC(
            previousCompletionDate.getFullYear(),
            previousCompletionDate.getMonth(),
            previousCompletionDate.getDate()
          )) /
          (24 * 60 * 60 * 1000)
      );
      if (diffDays === 0) {
        return studyStreak;
      }
      if (diffDays === 1) {
        return studyStreak + 1;
      }
      return 1;
    })();

    const updatedTotalStudyTime = lessonAlreadyCompleted
      ? totalStudyTime
      : Number.parseFloat((totalStudyTime + durationHours).toFixed(2));

    const applyLocalCompletion = () => {
      // Only update totals, streaks and weekly activity if this call actually adds the lesson
      let didAddLesson = false;
      setCompletedLessons((prev) => {
        if (prev.includes(normalisedId)) return prev;
        didAddLesson = true;
        return Array.from(new Set([...prev, normalisedId]));
      });

      if (didAddLesson) {
        setTotalStudyTime(() => updatedTotalStudyTime);
        setStudyStreak(() => nextStudyStreak);

        setWeeklyActivity((prevActivity) => {
          const baseline = prevActivity.length ? prevActivity : createEmptyWeeklyActivity();
          const dateKey = completionIso.split('T')[0];
          let found = false;

          const updated = baseline.map((entry) => {
            const entryKey = entry.date.split('T')[0];
            if (entryKey === dateKey) {
              found = true;
              return {
                ...entry,
                lessons: entry.lessons + 1,
                studyTime: parseFloat((entry.studyTime + durationHours).toFixed(2))
              };
            }
            return entry;
          });

          if (!found) {
            const newEntry: WeeklyActivityEntry = {
              date: `${dateKey}T00:00:00.000Z`,
              lessons: 1,
              studyTime: parseFloat(durationHours.toFixed(2)),
              quizAttempts: 0,
              scoreEarned: 0
            };
            return [...updated.slice(1), newEntry];
          }

          return updated;
        });
      }

      // Always update last activity timestamps even if already completed so UI shows recent interaction
      setLastActivityAt(completionIso);
      setLastCompletedLessonId(normalisedId);
      setLastCompletedAt(completionIso);
      setLastCompletionDate(completionDayKey);
    };

    try {
      if (isAuthenticated && accessToken) {
        const payload: ProgressUpdatePayload = {
          completedLessons: mergedLessons,
          lastCompletedLessonId: normalisedId,
          lastCompletedAt: completionIso,
          studyStreak: nextStudyStreak,
          totalStudyTime: updatedTotalStudyTime
        };

        if (!lessonAlreadyCompleted) {
          payload.activityEntry = {
            date: completionIso,
            lessonsCompleted: 1,
            studyTime: durationHours,
            quizAttempts: 0,
            scoreEarned: 0
          };
        }

        const response = await saveUserProgress(payload, accessToken);

        if (response?.success && response.progress) {
          applySyncedProgress(response.progress, response.metrics ?? null, completionIso);
          hasLoadedFromSource.current = true;
          return;
        }

        await loadProgress();
        applyLocalCompletion();
        return;
      }

      applyLocalCompletion();
    } catch (error) {
      console.error('Failed to mark lesson as complete:', error);
      applyLocalCompletion();
      throw error;
    } finally {
      lessonsInFlightRef.current.delete(normalisedId);
    }
  }, [
    completedLessons,
    isAuthenticated,
    accessToken,
    lastCompletionDate,
    studyStreak,
    totalStudyTime,
    applySyncedProgress,
    loadProgress
  ]);

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
    setWeeklyActivity(createEmptyWeeklyActivity());
    setQuizHistory([]);
    setLastActivityAt(null);
    setTotalQuizAttempts(0);
    
    // Clear localStorage
    localStorage.removeItem('course-progress');
    localStorage.removeItem('study-time');
    localStorage.removeItem('study-streak');
    localStorage.removeItem('last-completion-date');
    hasLoadedFromSource.current = true;
  };

  const refreshProgress = useCallback(async () => {
    await loadProgress();
  }, [loadProgress]);

  const value: ProgressContextType = {
    completedLessons,
    markLessonComplete,
    isMarkingLesson: (lessonId: string) => lessonsInFlightRef.current.has(lessonId),
    isLessonCompleted,
    getProgressPercentage,
    getCompletedCount,
    getTotalLessons,
    getModuleProgress: getModuleProgressValue,
    studyStreak,
    totalStudyTime,
    updateStudyTime,
    resetProgress,
    weeklyActivity,
    quizHistory,
    lastActivityAt,
    totalQuizAttempts,
    refreshProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
