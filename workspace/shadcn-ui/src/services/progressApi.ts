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

export async function fetchUserProgress(token?: string) {
  const res = await fetch(`${API_URL}/user/progress`, {
    credentials: 'include',
    headers: {
      ...getAuthHeaders(token)
    }
  });
  if (!res.ok) throw new Error('Failed to fetch user progress');
  return res.json();
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
}

export async function saveUserProgress(payload: ProgressUpdatePayload, token?: string) {
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
