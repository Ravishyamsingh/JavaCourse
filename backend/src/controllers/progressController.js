// backend/src/controllers/progressController.js
import { User } from '../models.js';

const defaultProgressState = {
  completedLessons: [],
  completedQuizzes: [],
  achievements: [],
  certificatesEarned: [],
  totalScore: 0,
  enrolledCourses: [],
  studyStreak: 0,
  totalStudyTime: 0,
  lastCompletedLessonId: null,
  lastCompletedAt: null,
  lastSyncedAt: null
};

const dedupeStringArray = (values = []) => {
  if (!Array.isArray(values)) return undefined;
  const trimmed = values
    .filter((value) => typeof value === 'string')
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
  return Array.from(new Set(trimmed));
};

export const getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const progressData = {
      ...defaultProgressState,
      ...(user.progress ? user.progress.toObject?.() || user.progress : {})
    };

    res.json({
      success: true,
      progress: progressData,
      achievements: progressData.achievements || [],
      meta: {
        lastSyncedAt: progressData.lastSyncedAt
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch progress' });
  }
};

export const updateUserProgress = async (req, res) => {
  try {
    const {
      completedLessons,
      completedQuizzes,
      achievements,
      certificatesEarned,
      studyStreak,
      totalStudyTime,
      totalScore,
      lastCompletedLessonId,
      lastCompletedAt,
      enrolledCourses
    } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const currentProgress = user.progress || {};
    const updates = {};

    const lessons = dedupeStringArray(completedLessons);
    if (lessons) updates.completedLessons = lessons;

    const quizzes = dedupeStringArray(completedQuizzes);
    if (quizzes) updates.completedQuizzes = quizzes;

    if (Array.isArray(achievements)) {
      updates.achievements = achievements;
    }

    const certificates = dedupeStringArray(certificatesEarned);
    if (certificates) updates.certificatesEarned = certificates;

    if (typeof studyStreak === 'number' && studyStreak >= 0) {
      updates.studyStreak = Math.floor(studyStreak);
    }

    if (typeof totalStudyTime === 'number' && totalStudyTime >= 0) {
      updates.totalStudyTime = Number(totalStudyTime.toFixed(2));
    }

    if (typeof totalScore === 'number' && totalScore >= 0) {
      updates.totalScore = Math.round(totalScore);
    }

    if (typeof lastCompletedLessonId === 'string' && lastCompletedLessonId.trim().length > 0) {
      updates.lastCompletedLessonId = lastCompletedLessonId.trim();
    }

    if (lastCompletedAt) {
      const completedAtDate = new Date(lastCompletedAt);
      if (!Number.isNaN(completedAtDate.getTime())) {
        updates.lastCompletedAt = completedAtDate;
      }
    }

    const enrolled = dedupeStringArray(enrolledCourses);
    if (enrolled) updates.enrolledCourses = enrolled;

    user.progress = {
      ...defaultProgressState,
      ...currentProgress,
      ...updates,
      lastSyncedAt: new Date()
    };

    await user.save();

    res.json({
      success: true,
      progress: user.progress,
      achievements: user.progress.achievements || [],
      meta: {
        lastSyncedAt: user.progress.lastSyncedAt
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update progress' });
  }
};
