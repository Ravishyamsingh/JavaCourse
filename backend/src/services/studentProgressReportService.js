import { User } from '../models.js';
import { logger } from '../utils/monitoring.js';

export const REPORT_TEMPLATES = {
  STUDENT_PROGRESS: [
    'name',
    'email',
    'role',
    'status',
    'lessonsCompleted',
    'quizzesAttempted',
    'totalScore',
    'certificatesEarned',
    'studyStreak',
    'totalStudyTime',
    'joinedDate',
    'lastLogin'
  ],
  PERFORMANCE_METRICS: [
    'name',
    'email',
    'totalScore',
    'averageScore',
    'quizzesAttempted',
    'certificatesEarned',
    'studyStreak'
  ],
  ACTIVITY_REPORT: [
    'name',
    'email',
    'lessonsCompleted',
    'quizzesAttempted',
    'totalStudyTime',
    'lastLogin',
    'joinedDate'
  ],
  COMPREHENSIVE: [
    'name',
    'email',
    'role',
    'status',
    'lessonsCompleted',
    'quizzesAttempted',
    'totalScore',
    'averageScore',
    'certificatesEarned',
    'studyStreak',
    'totalStudyTime',
    'joinedDate',
    'lastLogin',
    'isActive'
  ]
};

/**
 * Generate comprehensive user progress report
 */
export const generateUserProgressReport = async () => {
  try {
    const users = await User.find({ role: 'user' })
      .select('firstName lastName email role isActive progress createdAt lastLogin')
      .lean();

    const report = users.map((user) => {
      const progress = user.progress || {};
      const lessonsCompleted = progress.completedLessons?.length || 0;
      const quizzesAttempted = progress.completedQuizzes?.length || 0;
      const totalScore = progress.totalScore || 0;
      const averageScore = quizzesAttempted > 0 ? Math.round(totalScore / quizzesAttempted) : 0;
      const certificatesEarned = progress.certificatesEarned?.length || 0;
      const studyStreak = progress.studyStreak || 0;
      const totalStudyTime = Math.round(progress.totalStudyTime || 0);

      return {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
        status: user.isActive ? 'Active' : 'Inactive',
        lessonsCompleted,
        quizzesAttempted,
        totalScore,
        averageScore,
        certificatesEarned,
        studyStreak,
        totalStudyTime,
        joinedDate: new Date(user.createdAt).toLocaleDateString(),
        lastLogin: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never',
        isActive: user.isActive ? 'Yes' : 'No'
      };
    });

    return report;
  } catch (error) {
    logger.error('Error generating user progress report', { message: error.message, stack: error.stack });
    throw error;
  }
};

/**
 * Generate performance metrics report
 */
export const generatePerformanceMetricsReport = async () => {
  try {
    const users = await User.find({ role: 'user' })
      .select('firstName lastName email progress')
      .lean();

    const report = users.map((user) => {
      const progress = user.progress || {};
      const quizzesAttempted = progress.completedQuizzes?.length || 0;
      const totalScore = progress.totalScore || 0;
      const averageScore = quizzesAttempted > 0 ? Math.round(totalScore / quizzesAttempted) : 0;

      return {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        totalScore,
        averageScore,
        quizzesAttempted,
        certificatesEarned: progress.certificatesEarned?.length || 0,
        studyStreak: progress.studyStreak || 0
      };
    });

    return report.sort((a, b) => b.averageScore - a.averageScore);
  } catch (error) {
    logger.error('Error generating performance metrics report', { message: error.message, stack: error.stack });
    throw error;
  }
};

/**
 * Generate activity report
 */
export const generateActivityReport = async () => {
  try {
    const users = await User.find({ role: 'user' })
      .select('firstName lastName email progress createdAt lastLogin')
      .lean();

    const report = users.map((user) => {
      const progress = user.progress || {};
      const lessonsCompleted = progress.completedLessons?.length || 0;
      const quizzesAttempted = progress.completedQuizzes?.length || 0;
      const totalStudyTime = Math.round(progress.totalStudyTime || 0);

      return {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        lessonsCompleted,
        quizzesAttempted,
        totalStudyTime,
        lastLogin: user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never',
        joinedDate: new Date(user.createdAt).toLocaleDateString()
      };
    });

    return report;
  } catch (error) {
    logger.error('Error generating activity report', { message: error.message, stack: error.stack });
    throw error;
  }
};

/**
 * Generate student activity metrics for dashboard
 */
export const generateStudentActivityMetrics = async () => {
  try {
    const users = await User.find({ role: 'user' })
      .select('firstName lastName email progress')
      .lean();

    const metrics = {
      totalStudents: users.length,
      activeStudents: 0,
      highActivityStudents: 0,
      mediumActivityStudents: 0,
      lowActivityStudents: 0,
      averageScore: 0,
      averageLessonsCompleted: 0,
      averageQuizzesAttempted: 0,
      totalCertificatesEarned: 0,
      studentsByActivityLevel: {
        high: [],
        medium: [],
        low: []
      }
    };

    let totalScore = 0;
    let totalLessons = 0;
    let totalQuizzes = 0;

    users.forEach((user) => {
      const progress = user.progress || {};
      const lessonsCompleted = progress.completedLessons?.length || 0;
      const quizzesAttempted = progress.completedQuizzes?.length || 0;
      const totalStudentScore = progress.totalScore || 0;
      const certificatesEarned = progress.certificatesEarned?.length || 0;
      const studyStreak = progress.studyStreak || 0;

      totalScore += totalStudentScore;
      totalLessons += lessonsCompleted;
      totalQuizzes += quizzesAttempted;
      metrics.totalCertificatesEarned += certificatesEarned;

      // Determine activity level
      const activityScore = lessonsCompleted + quizzesAttempted + studyStreak;
      const studentInfo = {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        lessonsCompleted,
        quizzesAttempted,
        score: totalStudentScore,
        certificates: certificatesEarned,
        studyStreak
      };

      if (activityScore > 50) {
        metrics.highActivityStudents++;
        metrics.studentsByActivityLevel.high.push(studentInfo);
      } else if (activityScore > 20) {
        metrics.mediumActivityStudents++;
        metrics.studentsByActivityLevel.medium.push(studentInfo);
      } else {
        metrics.lowActivityStudents++;
        metrics.studentsByActivityLevel.low.push(studentInfo);
      }

      if (lessonsCompleted > 0 || quizzesAttempted > 0) {
        metrics.activeStudents++;
      }
    });

    metrics.averageScore = users.length > 0 ? Math.round(totalScore / users.length) : 0;
    metrics.averageLessonsCompleted = users.length > 0 ? Math.round(totalLessons / users.length) : 0;
    metrics.averageQuizzesAttempted = users.length > 0 ? Math.round(totalQuizzes / users.length) : 0;

    return metrics;
  } catch (error) {
    logger.error('Error generating student activity metrics', { message: error.message, stack: error.stack });
    throw error;
  }
};

/**
 * Filter report columns
 */
export const filterReportColumns = (data, columns) => {
  return data.map((row) => {
    const filtered = {};
    columns.forEach((col) => {
      if (col in row) {
        filtered[col] = row[col];
      }
    });
    return filtered;
  });
};

/**
 * Convert data to CSV format
 */
export const convertToCSV = (data, columns) => {
  if (!data || data.length === 0) return '';

  const headers = columns || Object.keys(data[0]);
  const csv = [headers.join(',')];

  data.forEach((row) => {
    const values = headers.map((header) => {
      const value = row[header];
      if (value === null || value === undefined) return '';
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    });
    csv.push(values.join(','));
  });

  return csv.join('\n');
};

/**
 * Convert data to JSON format
 */
export const convertToJSON = (data) => {
  return JSON.stringify(data, null, 2);
};

/**
 * Get report statistics
 */
export const getReportStatistics = async (reportData) => {
  try {
    const stats = {
      totalRecords: reportData.length,
      averageScore: 0,
      highestScore: 0,
      lowestScore: 0,
      averageLessonsCompleted: 0,
      averageQuizzesAttempted: 0,
      totalCertificates: 0,
      activeStudents: 0,
      inactiveStudents: 0
    };

    if (reportData.length === 0) return stats;

    let totalScore = 0;
    let totalLessons = 0;
    let totalQuizzes = 0;
    let highestScore = 0;
    let lowestScore = Infinity;

    reportData.forEach((record) => {
      const score = record.totalScore || record.averageScore || 0;
      totalScore += score;
      totalLessons += record.lessonsCompleted || 0;
      totalQuizzes += record.quizzesAttempted || 0;
      stats.totalCertificates += record.certificatesEarned || 0;

      if (score > highestScore) highestScore = score;
      if (score < lowestScore) lowestScore = score;

      if (record.status === 'Active' || record.isActive === 'Yes') {
        stats.activeStudents++;
      } else {
        stats.inactiveStudents++;
      }
    });

    stats.averageScore = Math.round(totalScore / reportData.length);
    stats.highestScore = highestScore;
    stats.lowestScore = lowestScore === Infinity ? 0 : lowestScore;
    stats.averageLessonsCompleted = Math.round(totalLessons / reportData.length);
    stats.averageQuizzesAttempted = Math.round(totalQuizzes / reportData.length);

    return stats;
  } catch (error) {
    logger.error('Error calculating report statistics', { message: error.message, stack: error.stack });
    throw error;
  }
};

/**
 * Export report with statistics
 */
export const exportReportWithStatistics = async (reportType = 'STUDENT_PROGRESS', format = 'json') => {
  try {
    let reportData;

    switch (reportType) {
      case 'PERFORMANCE_METRICS':
        reportData = await generatePerformanceMetricsReport();
        break;
      case 'ACTIVITY_REPORT':
        reportData = await generateActivityReport();
        break;
      case 'COMPREHENSIVE':
        reportData = await generateUserProgressReport();
        break;
      default:
        reportData = await generateUserProgressReport();
    }

    const statistics = await getReportStatistics(reportData);

    const exportData = {
      reportType,
      generatedAt: new Date().toISOString(),
      statistics,
      data: reportData
    };

    if (format === 'csv') {
      const columns = REPORT_TEMPLATES[reportType] || REPORT_TEMPLATES.STUDENT_PROGRESS;
      return convertToCSV(reportData, columns);
    }

    return exportData;
  } catch (error) {
    logger.error('Error exporting report with statistics', { reportType, format, message: error.message });
    throw error;
  }
};

export default {
  generateUserProgressReport,
  generatePerformanceMetricsReport,
  generateActivityReport,
  generateStudentActivityMetrics,
  filterReportColumns,
  convertToCSV,
  convertToJSON,
  getReportStatistics,
  exportReportWithStatistics,
  REPORT_TEMPLATES
};
