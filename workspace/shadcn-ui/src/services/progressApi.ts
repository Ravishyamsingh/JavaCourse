// Utility for syncing progress and achievements with backend
import { Achievement } from '@/contexts/AchievementContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function fetchUserProgress() {
  const res = await fetch(`${API_URL}/user/progress`, {
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to fetch user progress');
  return res.json();
}

export async function saveUserProgress({
  completedLessons,
  achievements,
  studyStreak,
  totalStudyTime,
}: {
  completedLessons: string[];
  achievements: Achievement[];
  studyStreak: number;
  totalStudyTime: number;
}) {
  const res = await fetch(`${API_URL}/user/progress`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ completedLessons, achievements, studyStreak, totalStudyTime }),
  });
  if (!res.ok) throw new Error('Failed to save user progress');
  return res.json();
}
