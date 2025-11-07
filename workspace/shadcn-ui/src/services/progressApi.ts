// Utility for syncing progress and achievements with backend
import { Achievement } from '@/contexts/AchievementContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = (token?: string) => {
  if (!token) {
    throw new Error('Missing access token');
  }
  return {
    Authorization: `Bearer ${token}`
  };
};

export interface WeeklyActivityEntry {
  date: string;
  lessons: number;
  studyTime: number;
  quizAttempts: number;
  scoreEarned: number;
}

export interface QuizHistoryEntry {
  quizId: string;
  moduleId: string | null;
  topic: string;
  score: number;
  totalQuestions: number;
  timeTakenMinutes: number;
  completedAt: string;
}

export interface ActivityLogEntry {
  date: string;
  lessonsCompleted: number;
  studyTime: number;
  quizAttempts: number;
  scoreEarned: number;
}

export interface UserProgressState {
  completedLessons: string[];
  completedQuizzes: string[];
  achievements: Achievement[];
  certificatesEarned: string[];
  totalScore: number;
  enrolledCourses: string[];
  studyStreak: number;
  totalStudyTime: number;
  lastCompletedLessonId: string | null;
  lastCompletedAt: string | null;
  lastSyncedAt: string | null;
  activityLog: ActivityLogEntry[];
  quizHistory: QuizHistoryEntry[];
}

export interface ProgressMetrics {
  weeklyActivity: WeeklyActivityEntry[];
  quizHistory: QuizHistoryEntry[];
  lastActivityAt: string | null;
  totalLessonsCompleted: number;
  totalQuizAttempts: number;
}

export interface ProgressApiResponse {
  success: boolean;
  progress?: UserProgressState;
  achievements?: Achievement[];
  metrics?: ProgressMetrics;
  message?: string;
}

export interface ActivityEntryPayload {
  date?: string | Date;
  lessonsCompleted?: number;
  studyTime?: number;
  quizAttempts?: number;
  scoreEarned?: number;
}

export interface QuizAttemptPayload {
  quizId?: string;
  moduleId?: string | null;
  topic?: string;
  score?: number;
  totalQuestions?: number;
  timeTakenMinutes?: number;
  completedAt?: string | Date;
}

export interface ProgressUpdatePayload {
  completedLessons?: string[];
  completedQuizzes?: string[];
  achievements?: Achievement[];
  certificatesEarned?: string[];
  studyStreak?: number;
  totalStudyTime?: number;
  totalScore?: number;
  lastCompletedLessonId?: string;
  lastCompletedAt?: string | Date | null;
  enrolledCourses?: string[];
  activityEntry?: ActivityEntryPayload;
  quizAttempt?: QuizAttemptPayload;
}

export async function fetchUserProgress(token?: string): Promise<ProgressApiResponse> {
  const res = await fetch(`${API_URL}/user/progress`, {
    credentials: 'include',
    headers: {
      ...getAuthHeaders(token)
    }
  });
  if (!res.ok) throw new Error('Failed to fetch user progress');
  return res.json();
}

export async function saveUserProgress(payload: ProgressUpdatePayload, token?: string): Promise<ProgressApiResponse> {
  const res = await fetch(`${API_URL}/user/progress`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(token)
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to save user progress');
  return res.json();
}
