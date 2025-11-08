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
  lastSyncedAt: null,
  activityLog: [],
  quizHistory: []
};

const dedupeStringArray = (values = []) => {
  if (!Array.isArray(values)) return undefined;
  const trimmed = values
    .filter((value) => typeof value === 'string')
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
  return Array.from(new Set(trimmed));
};

const getDateKey = (input) => {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().split('T')[0];
};

const toDateFromKey = (key) => {
  if (!key) return null;
  const date = new Date(`${key}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const normaliseActivityLog = (log = []) =>
  log
    .map((entry) => {
      const date = entry?.date instanceof Date ? entry.date : new Date(entry?.date);
      if (Number.isNaN(date.getTime())) return null;
      return {
        date,
        lessonsCompleted: Number(entry?.lessonsCompleted || 0),
        studyTime: Number(entry?.studyTime || 0),
        quizAttempts: Number(entry?.quizAttempts || 0),
        scoreEarned: Number(entry?.scoreEarned || 0)
      };
    })
    .filter(Boolean);

const mergeActivityLogEntry = (log = [], entry = {}) => {
  const dateKey = getDateKey(entry.date || new Date());
  if (!dateKey) return log;

  const existingLog = [...log];
  const entryIndex = existingLog.findIndex((item) => getDateKey(item.date) === dateKey);

  if (entryIndex >= 0) {
    const existing = existingLog[entryIndex];
    existingLog[entryIndex] = {
      date: existing.date,
      lessonsCompleted: existing.lessonsCompleted + Number(entry.lessonsCompleted || 0),
      studyTime: existing.studyTime + Number(entry.studyTime || 0),
      quizAttempts: existing.quizAttempts + Number(entry.quizAttempts || 0),
      scoreEarned: existing.scoreEarned + Number(entry.scoreEarned || 0)
    };
  } else {
    existingLog.push({
      date: toDateFromKey(dateKey),
      lessonsCompleted: Number(entry.lessonsCompleted || 0),
      studyTime: Number(entry.studyTime || 0),
      quizAttempts: Number(entry.quizAttempts || 0),
      scoreEarned: Number(entry.scoreEarned || 0)
    });
  }

  return existingLog;
};

const normaliseQuizHistory = (history = []) =>
  history
    .map((attempt) => {
      const completedAt = attempt?.completedAt ? new Date(attempt.completedAt) : new Date();
      if (Number.isNaN(completedAt.getTime())) return null;

      return {
        quizId: attempt?.quizId || `quiz_${completedAt.getTime()}`,
        moduleId: attempt?.moduleId || null,
        topic: attempt?.topic || 'Quiz',
        score: Number(attempt?.score || 0),
        totalQuestions: Number(attempt?.totalQuestions || 0),
        timeTakenMinutes: Number(attempt?.timeTakenMinutes || 0),
        completedAt
      };
    })
    .filter(Boolean);

const computeWeeklyActivity = (log = [], days = 7) => {
  const entries = normaliseActivityLog(log);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  const result = [];
  for (let i = days - 1; i >= 0; i -= 1) {
    const currentDay = new Date(today);
    currentDay.setUTCDate(today.getUTCDate() - i);
    const key = getDateKey(currentDay);
    const match = entries.find((entry) => getDateKey(entry.date) === key);

    const lessons = match?.lessonsCompleted || 0;
    const studyTime = match?.studyTime || 0;
    const quizAttempts = match?.quizAttempts || 0;
    const scoreEarned = match?.scoreEarned || 0;

    result.push({
      date: `${key}T00:00:00.000Z`,
      lessons,
      studyTime,
      quizAttempts,
      scoreEarned
    });
  }

  return result;
};

const formatQuizHistory = (history = [], limit = 10) =>
  normaliseQuizHistory(history)
    .sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())
    .slice(0, limit)
    .map((entry) => ({
      quizId: entry.quizId,
      moduleId: entry.moduleId,
      topic: entry.topic,
      score: entry.score,
      totalQuestions: entry.totalQuestions,
      timeTakenMinutes: entry.timeTakenMinutes,
      completedAt: entry.completedAt.toISOString()
    }));

export const getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const storedProgress = user.progress ? user.progress.toObject?.() || user.progress : {};
    const progressData = {
      ...defaultProgressState,
      ...storedProgress
    };

    // Ensure completedLessons is always an array
    if (!Array.isArray(progressData.completedLessons)) {
      progressData.completedLessons = [];
    }

    const activityLog = normaliseActivityLog(progressData.activityLog);
    const quizHistory = normaliseQuizHistory(progressData.quizHistory);

    const responseProgress = {
      ...progressData,
      activityLog: activityLog.map((entry) => ({
        date: entry.date.toISOString(),
        lessonsCompleted: entry.lessonsCompleted,
        studyTime: entry.studyTime,
        quizAttempts: entry.quizAttempts,
        scoreEarned: entry.scoreEarned
      })),
      quizHistory: quizHistory.map((entry) => ({
        quizId: entry.quizId,
        moduleId: entry.moduleId,
        topic: entry.topic,
        score: entry.score,
        totalQuestions: entry.totalQuestions,
        timeTakenMinutes: entry.timeTakenMinutes,
        completedAt: entry.completedAt.toISOString()
      }))
    };

    const weeklyActivity = computeWeeklyActivity(activityLog);
    const recentQuizHistory = formatQuizHistory(quizHistory, 10);

    res.json({
      success: true,
      progress: responseProgress,
      achievements: responseProgress.achievements || [],
      metrics: {
        weeklyActivity,
        quizHistory: recentQuizHistory,
        lastActivityAt: responseProgress.lastCompletedAt || responseProgress.lastSyncedAt,
        totalLessonsCompleted: responseProgress.completedLessons?.length || 0,
        totalQuizAttempts: quizHistory.length
      }
    });
  } catch (error) {
    console.error('Progress fetch error:', error);
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
      enrolledCourses,
      activityEntry,
      quizAttempt
    } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const currentProgress = user.progress ? user.progress.toObject?.() || user.progress : {};
    const currentActivityLog = normaliseActivityLog(currentProgress.activityLog);
    const currentQuizHistory = normaliseQuizHistory(currentProgress.quizHistory);

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

    let updatedActivityLog = [...currentActivityLog];
    if (activityEntry) {
      updatedActivityLog = mergeActivityLogEntry(updatedActivityLog, activityEntry);
      updates.activityLog = updatedActivityLog.map((entry) => ({
        date: entry.date,
        lessonsCompleted: entry.lessonsCompleted,
        studyTime: entry.studyTime,
        quizAttempts: entry.quizAttempts,
        scoreEarned: entry.scoreEarned
      }));
    }

    let updatedQuizHistory = [...currentQuizHistory];
    if (quizAttempt) {
      const attemptEntry = normaliseQuizHistory([quizAttempt])[0];
      if (attemptEntry) {
        updatedQuizHistory = [attemptEntry, ...updatedQuizHistory].slice(0, 100);
        updates.quizHistory = updatedQuizHistory.map((entry) => ({
          quizId: entry.quizId,
          moduleId: entry.moduleId,
          topic: entry.topic,
          score: entry.score,
          totalQuestions: entry.totalQuestions,
          timeTakenMinutes: entry.timeTakenMinutes,
          completedAt: entry.completedAt
        }));

        const updatedCompletedQuizzes = new Set([
          ...(updates.completedQuizzes || currentProgress.completedQuizzes || []),
          attemptEntry.quizId
        ]);
        updates.completedQuizzes = Array.from(updatedCompletedQuizzes).filter(Boolean);

        const baseScore = updates.totalScore ?? currentProgress.totalScore ?? 0;
        updates.totalScore = baseScore + attemptEntry.score;
      }
    }

    // Ensure completedLessons is always an array and deduplicated
    const finalCompletedLessons = Array.from(new Set([
      ...(currentProgress.completedLessons || []),
      ...(updates.completedLessons || [])
    ])).filter(Boolean);

    user.progress = {
      ...defaultProgressState,
      ...currentProgress,
      ...updates,
      completedLessons: finalCompletedLessons,
      lastSyncedAt: new Date()
    };

    await user.save();

    const savedProgress = user.progress?.toObject ? user.progress.toObject() : user.progress;
    const responseActivityLog = normaliseActivityLog(savedProgress.activityLog);
    const responseQuizHistory = normaliseQuizHistory(savedProgress.quizHistory);

    res.json({
      success: true,
      progress: {
        ...defaultProgressState,
        ...savedProgress,
        activityLog: responseActivityLog.map((entry) => ({
          date: entry.date.toISOString(),
          lessonsCompleted: entry.lessonsCompleted,
          studyTime: entry.studyTime,
          quizAttempts: entry.quizAttempts,
          scoreEarned: entry.scoreEarned
        })),
        quizHistory: responseQuizHistory.map((entry) => ({
          quizId: entry.quizId,
          moduleId: entry.moduleId,
          topic: entry.topic,
          score: entry.score,
          totalQuestions: entry.totalQuestions,
          timeTakenMinutes: entry.timeTakenMinutes,
          completedAt: entry.completedAt.toISOString()
        }))
      },
      achievements: savedProgress.achievements || [],
      metrics: {
        weeklyActivity: computeWeeklyActivity(responseActivityLog),
        quizHistory: formatQuizHistory(responseQuizHistory, 10),
        lastActivityAt: savedProgress.lastCompletedAt || savedProgress.lastSyncedAt,
        totalLessonsCompleted: savedProgress.completedLessons?.length || 0,
        totalQuizAttempts: responseQuizHistory.length
      }
    });
  } catch (error) {
    console.error('Progress update error:', error);
    res.status(500).json({ success: false, message: 'Failed to update progress' });
  }
};
