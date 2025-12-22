import {
  generateUserProgressReport,
  generateProctoringReport,
  generateCourseAnalyticsReport,
  generateDetailedUserReport,
  convertToCSV,
  exportReport,
  filterReportColumns,
  REPORT_TEMPLATES
} from '../services/reportService.js';
import { logger } from '../utils/monitoring.js';

export const downloadUserProgressReport = async (req, res, next) => {
  try {
    const format = req.query.format || 'json';
    const filters = {
      role: req.query.role,
      isActive: req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo
    };

    logger.info('Generating user progress report', { format, filters });

    const report = await generateUserProgressReport(filters);

    if (format === 'csv') {
      const headers = ['name', 'email', 'role', 'lessonsCompleted', 'quizzesAttempted', 'totalScore', 'certificatesEarned', 'studyStreak', 'totalStudyTime', 'joinedDate', 'lastLogin'];
      const csv = convertToCSV(report, headers);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="user-progress-report-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="user-progress-report-${Date.now()}.json"`);
    res.json(report);
  } catch (error) {
    logger.error('Error downloading user progress report', {
      message: error.message,
      stack: error.stack
    });
    next(error);
  }
};

export const getUserProgressReport = async (req, res, next) => {
  try {
    const filters = {
      role: req.query.role,
      isActive: req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo
    };

    logger.info('Fetching user progress report', { filters });

    const report = await generateUserProgressReport(filters);

    res.json({
      success: true,
      message: 'Progress report generated successfully',
      data: report,
      count: report.length
    });
  } catch (error) {
    logger.error('Error fetching user progress report', {
      message: error.message
    });
    next(error);
  }
};

export const downloadAdminUsersReport = async (req, res, next) => {
  try {
    const format = req.query.format || 'json';
    const filters = {
      role: req.query.role,
      isActive: req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo
    };

    logger.info('Generating admin users report', { format, filters });

    const report = await generateUserProgressReport(filters);

    if (format === 'csv') {
      const headers = ['name', 'email', 'role', 'lessonsCompleted', 'quizzesAttempted', 'totalScore', 'certificatesEarned', 'studyStreak', 'totalStudyTime', 'joinedDate', 'lastLogin'];
      const csv = convertToCSV(report, headers);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="users-report-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="users-report-${Date.now()}.json"`);
    res.json(report);
  } catch (error) {
    logger.error('Error downloading admin users report', {
      message: error.message,
      stack: error.stack
    });
    next(error);
  }
};

export const getAdminUsersReport = async (req, res, next) => {
  try {
    const filters = {
      role: req.query.role,
      isActive: req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo
    };

    logger.info('Fetching admin users report', { filters });

    const report = await generateUserProgressReport(filters);

    res.json({
      success: true,
      message: 'Users report generated successfully',
      data: report,
      count: report.length
    });
  } catch (error) {
    logger.error('Error fetching admin users report', {
      message: error.message
    });
    next(error);
  }
};

export const downloadProctoringReport = async (req, res, next) => {
  try {
    const format = req.query.format || 'json';
    const filters = {
      status: req.query.status,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo
    };

    logger.info('Generating proctoring report', { format, filters });

    const report = await generateProctoringReport(filters);

    if (format === 'csv') {
      const headers = ['testId', 'sessionId', 'userName', 'userEmail', 'status', 'startedAt', 'endedAt', 'duration', 'totalQuestions', 'completedQuestions', 'totalAttempts', 'totalTimeMs', 'violations', 'warnings'];
      const csv = convertToCSV(report, headers);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="proctoring-report-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="proctoring-report-${Date.now()}.json"`);
    res.json(report);
  } catch (error) {
    logger.error('Error downloading proctoring report', {
      message: error.message,
      stack: error.stack
    });
    next(error);
  }
};

export const getProctoringReport = async (req, res, next) => {
  try {
    const filters = {
      status: req.query.status,
      dateFrom: req.query.dateFrom,
      dateTo: req.query.dateTo
    };

    logger.info('Fetching proctoring report', { filters });

    const report = await generateProctoringReport(filters);

    res.json({
      success: true,
      message: 'Proctoring report generated successfully',
      data: report,
      count: report.length
    });
  } catch (error) {
    logger.error('Error fetching proctoring report', {
      message: error.message
    });
    next(error);
  }
};

export const getCourseAnalyticsReport = async (req, res, next) => {
  try {
    logger.info('Fetching course analytics report');

    const report = await generateCourseAnalyticsReport();

    res.json({
      success: true,
      message: 'Course analytics report generated successfully',
      data: report
    });
  } catch (error) {
    logger.error('Error fetching course analytics report', {
      message: error.message
    });
    next(error);
  }
};

export const getDetailedUserReport = async (req, res, next) => {
  try {
    const { userId } = req.params;

    logger.info('Fetching detailed user report', { userId });

    const report = await generateDetailedUserReport(userId);

    res.json({
      success: true,
      message: 'Detailed user report generated successfully',
      data: report
    });
  } catch (error) {
    logger.error('Error fetching detailed user report', {
      message: error.message
    });
    next(error);
  }
};

export default {
  downloadUserProgressReport,
  getUserProgressReport,
  downloadAdminUsersReport,
  getAdminUsersReport,
  downloadProctoringReport,
  getProctoringReport,
  getCourseAnalyticsReport,
  getDetailedUserReport
};
