import { User } from '../models.js';
import { ProctorSession, QuestionProgress } from '../models/ProctorModels.js';
import { ADMIN_BACKEND_CONFIG, getReportTemplate } from '../config/adminConfig.js';

export async function generateUserProgressReport(filters = {}) {
  try {
    const query = {};
    
    if (filters.role) query.role = filters.role;
    if (filters.isActive !== undefined) query.isActive = filters.isActive;
    if (filters.dateFrom || filters.dateTo) {
      query.createdAt = {};
      if (filters.dateFrom) query.createdAt.$gte = new Date(filters.dateFrom);
      if (filters.dateTo) query.createdAt.$lte = new Date(filters.dateTo);
    }

    const users = await User.find(query)
      .select('firstName lastName email role progress createdAt lastLogin isActive')
      .lean();

    return users.map(user => ({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      role: user.role,
      status: user.isActive ? 'Active' : 'Inactive',
      lessonsCompleted: user.progress?.completedLessons?.length || 0,
      quizzesAttempted: user.progress?.quizHistory?.length || 0,
      totalScore: user.progress?.totalScore || 0,
      certificatesEarned: user.progress?.certificatesEarned?.length || 0,
      studyStreak: user.progress?.studyStreak || 0,
      totalStudyTime: Math.round((user.progress?.totalStudyTime || 0) / 60), // Convert to minutes
      joinedDate: user.createdAt ? new Date(user.createdAt).toISOString().split('T')[0] : 'N/A',
      lastLogin: user.lastLogin ? new Date(user.lastLogin).toISOString().split('T')[0] : 'Never'
    }));
  } catch (error) {
    throw new Error(`Failed to generate user progress report: ${error.message}`);
  }
}

export async function generateProctoringReport(filters = {}) {
  try {
    const query = {};

    if (filters.status) query.status = filters.status;
    if (filters.dateFrom || filters.dateTo) {
      query.startedAt = {};
      if (filters.dateFrom) query.startedAt.$gte = new Date(filters.dateFrom);
      if (filters.dateTo) query.startedAt.$lte = new Date(filters.dateTo);
    }

    const sessions = await ProctorSession.find(query)
      .populate('userId', 'firstName lastName email')
      .lean();

    const progress = await QuestionProgress.find()
      .select('userId testId sessionId questionId completed attempts timeSpentMs')
      .lean();

    return sessions.map(session => {
      const sessionProgress = progress.filter(p => 
        p.sessionId === session.sessionId
      );

      return {
        testId: session.testId,
        sessionId: session.sessionId,
        userName: `${session.userId.firstName} ${session.userId.lastName}`,
        userEmail: session.userId.email,
        status: session.status,
        startedAt: session.startedAt,
        endedAt: session.endedAt,
        duration: session.endedAt ? 
          Math.round((session.endedAt - session.startedAt) / 1000 / 60) : 0,
        totalQuestions: sessionProgress.length,
        completedQuestions: sessionProgress.filter(p => p.completed).length,
        totalAttempts: sessionProgress.reduce((sum, p) => sum + p.attempts, 0),
        totalTimeMs: sessionProgress.reduce((sum, p) => sum + p.timeSpentMs, 0),
        violations: session.violationsCount || 0,
        warnings: session.warningsCount || 0
      };
    });
  } catch (error) {
    throw new Error(`Failed to generate proctoring report: ${error.message}`);
  }
}

export async function generateCourseAnalyticsReport() {
  try {
    const users = await User.find()
      .select('progress.enrolledCourses progress.completedLessons progress.totalScore')
      .lean();

    const courseStats = {};

    users.forEach(user => {
      if (user.progress?.enrolledCourses) {
        user.progress.enrolledCourses.forEach(courseId => {
          if (!courseStats[courseId]) {
            courseStats[courseId] = {
              enrollments: 0,
              completions: 0,
              totalScore: 0,
              averageScore: 0,
              completionRate: 0
            };
          }
          courseStats[courseId].enrollments += 1;
          courseStats[courseId].totalScore += user.progress.totalScore || 0;
          
          if (user.progress.completedLessons?.length > 0) {
            courseStats[courseId].completions += 1;
          }
        });
      }
    });

    Object.keys(courseStats).forEach(courseId => {
      const stats = courseStats[courseId];
      stats.averageScore = Math.round(stats.totalScore / stats.enrollments);
      stats.completionRate = Math.round((stats.completions / stats.enrollments) * 100);
    });

    return courseStats;
  } catch (error) {
    throw new Error(`Failed to generate course analytics report: ${error.message}`);
  }
}

export async function generateDetailedUserReport(userId) {
  try {
    const user = await User.findById(userId)
      .select('-password -security.twoFactorSecret -security.backupCodes')
      .lean();

    if (!user) {
      throw new Error('User not found');
    }

    const sessions = await ProctorSession.find({ userId })
      .lean();

    const progress = await QuestionProgress.find({ userId })
      .lean();

    return {
      user: {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
        joinedDate: user.createdAt,
        lastLogin: user.lastLogin,
        isActive: user.isActive
      },
      progress: {
        lessonsCompleted: user.progress?.completedLessons?.length || 0,
        quizzesAttempted: user.progress?.quizHistory?.length || 0,
        totalScore: user.progress?.totalScore || 0,
        certificatesEarned: user.progress?.certificatesEarned?.length || 0,
        studyStreak: user.progress?.studyStreak || 0,
        totalStudyTime: user.progress?.totalStudyTime || 0
      },
      proctoring: {
        totalSessions: sessions.length,
        completedSessions: sessions.filter(s => s.status === 'submitted').length,
        autoSubmittedSessions: sessions.filter(s => s.status === 'auto_submitted').length,
        totalViolations: sessions.reduce((sum, s) => sum + (s.violationsCount || 0), 0)
      },
      questionProgress: progress.map(p => ({
        questionId: p.questionId,
        completed: p.completed,
        attempts: p.attempts,
        timeSpentMs: p.timeSpentMs
      }))
    };
  } catch (error) {
    throw new Error(`Failed to generate detailed user report: ${error.message}`);
  }
}

export function convertToCSV(data, headers) {
  if (!data || data.length === 0) return '';

  // Filter headers to only include valid ones
  const validHeaders = headers.filter(h => h && typeof h === 'string');
  const csv = [validHeaders.join(',')];

  data.forEach(row => {
    const values = validHeaders.map(header => {
      const value = row[header];
      if (value === null || value === undefined) return '';
      if (typeof value === 'string' && value.includes(',')) {
        return `"${value}"`;
      }
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    });
    csv.push(values.join(','));
  });

  return csv.join('\n');
}

export function filterReportColumns(data, columns) {
  if (!columns || columns.length === 0) return data;
  
  return data.map(row => {
    const filtered = {};
    columns.forEach(col => {
      if (row.hasOwnProperty(col)) {
        filtered[col] = row[col];
      }
    });
    return filtered;
  });
}

export const REPORT_TEMPLATES = {
  STUDENT_PROGRESS: ['name', 'email', 'lessonsCompleted', 'totalScore'],
  ENGAGEMENT: ['name', 'email', 'studyStreak', 'totalStudyTime', 'lastLogin'],
  PERFORMANCE: ['name', 'email', 'totalScore', 'certificatesEarned', 'quizzesAttempted'],
  ENROLLMENT: ['name', 'email', 'role', 'joinedDate', 'isActive'],
  FULL: ['name', 'email', 'role', 'lessonsCompleted', 'quizzesAttempted', 'totalScore', 'certificatesEarned', 'studyStreak', 'totalStudyTime', 'joinedDate', 'lastLogin']
};

export function convertToJSON(data) {
  return JSON.stringify(data, null, 2);
}

export async function exportReport(reportData, format = 'json', filename = 'report') {
  try {
    if (format === 'csv') {
      const headers = Object.keys(reportData[0] || {});
      return convertToCSV(reportData, headers);
    } else {
      return convertToJSON(reportData);
    }
  } catch (error) {
    throw new Error(`Failed to export report: ${error.message}`);
  }
}
