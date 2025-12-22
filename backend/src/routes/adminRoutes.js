import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { authorize } from '../middleware/rbac.js';
import { adminRateLimit } from '../middleware/security.js';
import { validateRequest } from '../utils/validation.js';
import Joi from 'joi';
import { logger } from '../utils/monitoring.js';
import {
  adminGetAllUsers,
  adminGetUserById,
  adminCreateUser,
  adminUpdateUser,
  adminDeleteUser,
  adminResetUserPassword,
  adminUpdateUserRole,
  adminGetUserProgress,
  adminGetDashboardStats,
  adminBulkUpdateUsers,
  adminExportUsers,
  adminGetSystemLogs,
  adminGrantPermissions,
  adminRevokePermissions,
  adminGetUserPermissions
} from '../controllers/adminController.js';
import {
  createContent,
  updateContent,
  deleteContent,
  getContent,
  getAllContent,
  getContentByType,
  bulkUpdateContent,
  reorderContent
} from '../controllers/contentController.js';
import {
  getDashboardAnalytics,
  getUserProgressAnalytics,
  getCourseAnalytics,
  getCompletionRateAnalytics,
  getTimeSeriesAnalytics,
  getPerformanceMetrics
} from '../controllers/analyticsController.js';
import {
  getAuditLogs,
  getUserAuditLogs,
  getAuditLogStats,
  exportAuditLogs
} from '../controllers/auditController.js';
import {
  getSystemConfig,
  updateSystemConfig,
  getGradingConfig,
  updateGradingConfig,
  getSecurityAlerts,
  createSecurityAlert,
  resolveSecurityAlert,
  addIpWhitelist,
  removeIpWhitelist,
  getSystemMetrics,
  getSystemHealth,
  getUserProgress,
  updateUserProgress,
  getMetricsHistory,
  cleanupOldMetrics
} from '../controllers/systemControllerEnhanced.js';
import {
  getStudentProgressReport,
  getPerformanceMetricsReport,
  getActivityReport,
  getStudentActivityMetrics,
  getComprehensiveReport,
  exportCustomReport,
  getReportTemplates
} from '../controllers/studentProgressReportController.js';
import { auditLogMiddleware } from '../middleware/auditLog.js';

const router = express.Router();

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('user', 'admin', 'superadmin').optional()
});

const updateUserSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional(),
  role: Joi.string().valid('user', 'admin', 'superadmin').optional(),
  isActive: Joi.boolean().optional()
});

const resetPasswordSchema = Joi.object({
  newPassword: Joi.string().min(8).required()
});

const updateRoleSchema = Joi.object({
  role: Joi.string().valid('user', 'admin', 'superadmin').required(),
  permissions: Joi.array().items(
    Joi.object({
      resource: Joi.string().required(),
      actions: Joi.array().items(Joi.string()).required(),
      conditions: Joi.object().optional()
    })
  ).optional()
});

const contentSchema = Joi.object({
  type: Joi.string().valid('lesson', 'module', 'course').required(),
  title: Joi.string().required(),
  description: Joi.string().optional(),
  content: Joi.string().optional(),
  parentId: Joi.string().optional(),
  difficulty: Joi.string().valid('beginner', 'intermediate', 'advanced').optional(),
  duration: Joi.number().optional(),
  tags: Joi.array().items(Joi.string()).optional()
});

const bulkUpdateSchema = Joi.object({
  userIds: Joi.array().items(Joi.string()).required(),
  updates: Joi.object().required()
});

router.use(authMiddleware);
router.use(authorize({ roles: ['admin', 'superadmin'] }));
router.use(adminRateLimit);

router.get('/dashboard/stats', adminGetDashboardStats);

// Static routes must come before dynamic :userId routes
router.get('/users/export', adminExportUsers);
router.post('/users/bulk-update', validateRequest(bulkUpdateSchema), adminBulkUpdateUsers);
router.get('/users', adminGetAllUsers);
router.post('/users', validateRequest(createUserSchema), auditLogMiddleware('CREATE_USER', 'USER'), adminCreateUser);
router.get('/users/:userId', adminGetUserById);
router.put('/users/:userId', validateRequest(updateUserSchema), auditLogMiddleware('UPDATE_USER', 'USER'), adminUpdateUser);
router.delete('/users/:userId', auditLogMiddleware('DELETE_USER', 'USER'), adminDeleteUser);
router.post('/users/:userId/reset-password', validateRequest(resetPasswordSchema), auditLogMiddleware('RESET_PASSWORD', 'USER'), adminResetUserPassword);
router.put('/users/:userId/role', validateRequest(updateRoleSchema), auditLogMiddleware('UPDATE_ROLE', 'USER'), adminUpdateUserRole);
router.get('/users/:userId/progress', adminGetUserProgress);
router.get('/users/:userId/permissions', adminGetUserPermissions);
router.post('/users/:userId/permissions/grant', auditLogMiddleware('GRANT_PERMISSIONS', 'USER'), adminGrantPermissions);
router.post('/users/:userId/permissions/revoke', auditLogMiddleware('REVOKE_PERMISSIONS', 'USER'), adminRevokePermissions);

router.get('/system-logs', adminGetSystemLogs);

router.post('/content', validateRequest(contentSchema), createContent);
router.get('/content', getAllContent);
router.get('/content/type/:type', getContentByType);
router.get('/content/:contentId', getContent);
router.put('/content/:contentId', updateContent);
router.delete('/content/:contentId', deleteContent);
router.post('/content/bulk-update', bulkUpdateContent);
router.post('/content/reorder', reorderContent);

router.get('/analytics/dashboard', getDashboardAnalytics);
router.get('/analytics/user/:userId', getUserProgressAnalytics);
router.get('/analytics/courses', getCourseAnalytics);
router.get('/analytics/completion-rate', getCompletionRateAnalytics);
router.get('/analytics/time-series', getTimeSeriesAnalytics);
router.get('/analytics/performance', getPerformanceMetrics);

router.get('/audit-logs', getAuditLogs);
router.get('/audit-logs/user/:userId', getUserAuditLogs);
router.get('/audit-logs/stats', getAuditLogStats);
router.get('/audit-logs/export', exportAuditLogs);

// Reports - Must come before other routes
// Student Progress Report - Download
router.get('/reports/student-progress/download', async (req, res, next) => {
  try {
    const { format = 'csv' } = req.query;
    const { generateUserProgressReport, convertToCSV } = await import('../services/reportService.js');
    
    const report = await generateUserProgressReport();
    const headers = ['name', 'email', 'role', 'status', 'lessonsCompleted', 'quizzesAttempted', 'totalScore', 'certificatesEarned', 'studyStreak', 'totalStudyTime', 'joinedDate', 'lastLogin'];

    if (format === 'csv') {
      const csv = convertToCSV(report, headers);
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="student-progress-${Date.now()}.csv"`);
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      return res.send(csv);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="student-progress-${Date.now()}.json"`);
    res.json({
      success: true,
      data: report,
      count: report.length,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error downloading student progress report', { error: error.message });
    next(error);
  }
});

// Focused report endpoints
router.get('/reports/focused', async (req, res, next) => {
  try {
    const { template = 'STUDENT_PROGRESS', format = 'json' } = req.query;
    const { generateUserProgressReport, filterReportColumns, convertToCSV, REPORT_TEMPLATES } = await import('../services/reportService.js');
    
    const columns = REPORT_TEMPLATES[template] || REPORT_TEMPLATES.STUDENT_PROGRESS;
    const report = await generateUserProgressReport();
    const filtered = filterReportColumns(report, columns);

    if (format === 'csv') {
      const csv = convertToCSV(filtered, columns);
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="report-${template}-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      template,
      columns,
      data: filtered,
      count: filtered.length
    });
  } catch (error) {
    next(error);
  }
});

// Custom column report
router.get('/reports/custom', async (req, res, next) => {
  try {
    const { columns, format = 'json' } = req.query;
    const { generateUserProgressReport, filterReportColumns, convertToCSV } = await import('../services/reportService.js');
    
    if (!columns) {
      return res.status(400).json({
        success: false,
        message: 'Columns parameter required (comma-separated)'
      });
    }

    const columnArray = columns.split(',').map(c => c.trim());
    const report = await generateUserProgressReport();
    const filtered = filterReportColumns(report, columnArray);

    if (format === 'csv') {
      const csv = convertToCSV(filtered, columnArray);
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="custom-report-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      columns: columnArray,
      data: filtered,
      count: filtered.length
    });
  } catch (error) {
    next(error);
  }
});

// System Configuration Routes
router.get('/system/config', getSystemConfig);
router.put('/system/config', auditLogMiddleware('UPDATE_SYSTEM_CONFIG', 'SYSTEM'), updateSystemConfig);

// Grading Configuration Routes
router.get('/grading/config', getGradingConfig);
router.put('/grading/config', auditLogMiddleware('UPDATE_GRADING_CONFIG', 'SYSTEM'), updateGradingConfig);

// Security Routes
router.get('/security/alerts', getSecurityAlerts);
router.post('/security/alerts', auditLogMiddleware('CREATE_SECURITY_ALERT', 'SECURITY'), createSecurityAlert);
router.put('/security/alerts/:alertId', auditLogMiddleware('RESOLVE_SECURITY_ALERT', 'SECURITY'), resolveSecurityAlert);

// IP Whitelist Routes
router.post('/security/whitelist', auditLogMiddleware('ADD_IP_WHITELIST', 'SECURITY'), addIpWhitelist);
router.delete('/security/whitelist/:ip', auditLogMiddleware('REMOVE_IP_WHITELIST', 'SECURITY'), removeIpWhitelist);

// Monitoring Routes
router.get('/monitoring/metrics', getSystemMetrics);
router.get('/monitoring/health', getSystemHealth);
router.get('/monitoring/metrics-history', getMetricsHistory);
router.post('/monitoring/cleanup-metrics', getSystemMetrics);

// User Progress Routes
router.get('/users/:userId/progress', getUserProgress);
router.put('/users/:userId/progress', auditLogMiddleware('UPDATE_USER_PROGRESS', 'USER'), updateUserProgress);

// Student Progress Report Routes
router.get('/reports/student-progress', getStudentProgressReport);
router.get('/reports/performance-metrics', getPerformanceMetricsReport);
router.get('/reports/activity', getActivityReport);
router.get('/reports/metrics', getStudentActivityMetrics);
router.get('/reports/comprehensive', getComprehensiveReport);
router.get('/reports/export', exportCustomReport);
router.get('/reports/templates', getReportTemplates);

export default router;
