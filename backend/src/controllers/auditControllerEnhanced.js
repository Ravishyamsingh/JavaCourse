import { AuditLog } from '../models/AdminModels.js';
import { logger } from '../utils/monitoring.js';

/**
 * Audit Log Middleware
 * Logs all admin operations for compliance and security
 */
export const auditLogMiddleware = (action, resource) => {
  return async (req, res, next) => {
    // Store original send function
    const originalSend = res.send;

    // Override send to capture response
    res.send = function (data) {
      // Log the audit entry
      logAuditEntry(req, action, resource, res.statusCode, data).catch(err => {
        logger.error('Error logging audit entry:', err);
      });

      // Call original send
      return originalSend.call(this, data);
    };

    next();
  };
};

/**
 * Log audit entry to database
 */
async function logAuditEntry(req, action, resource, statusCode, responseData) {
  try {
    const isSuccess = statusCode >= 200 && statusCode < 300;
    let resourceId = null;

    // Extract resource ID from various sources
    if (req.params.userId) resourceId = req.params.userId;
    else if (req.params.contentId) resourceId = req.params.contentId;
    else if (req.params.alertId) resourceId = req.params.alertId;
    else if (req.body?._id) resourceId = req.body._id;

    const auditLog = new AuditLog({
      userId: req.user?._id,
      action,
      resource,
      resourceId,
      changes: req.body,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('user-agent'),
      status: isSuccess ? 'success' : 'failure',
      errorMessage: isSuccess ? null : extractErrorMessage(responseData)
    });

    await auditLog.save();

    // Log to console for immediate visibility
    logger.info('Audit log recorded', {
      action,
      resource,
      userId: req.user?._id,
      status: auditLog.status,
      statusCode
    });
  } catch (error) {
    logger.error('Failed to save audit log:', error);
  }
}

/**
 * Extract error message from response
 */
function extractErrorMessage(responseData) {
  try {
    if (typeof responseData === 'string') {
      const parsed = JSON.parse(responseData);
      return parsed.message || parsed.error;
    }
    return responseData?.message || responseData?.error;
  } catch {
    return null;
  }
}

/**
 * Get audit logs with filtering
 */
export const getAuditLogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 50, action, resource, userId, status } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const query = {};
    if (action) query.action = action;
    if (resource) query.resource = resource;
    if (userId) query.userId = userId;
    if (status) query.status = status;

    const [logs, total] = await Promise.all([
      AuditLog.find(query)
        .populate('userId', 'firstName lastName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      AuditLog.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: logs,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching audit logs:', error);
    next(error);
  }
};

/**
 * Get audit logs for specific user
 */
export const getUserAuditLogs = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 50 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [logs, total] = await Promise.all([
      AuditLog.find({ userId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      AuditLog.countDocuments({ userId })
    ]);

    res.json({
      success: true,
      data: logs,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching user audit logs:', error);
    next(error);
  }
};

/**
 * Get audit log statistics
 */
export const getAuditLogStats = async (req, res, next) => {
  try {
    const stats = await AuditLog.aggregate([
      {
        $group: {
          _id: '$action',
          count: { $sum: 1 },
          successCount: {
            $sum: { $cond: [{ $eq: ['$status', 'success'] }, 1, 0] }
          },
          failureCount: {
            $sum: { $cond: [{ $eq: ['$status', 'failure'] }, 1, 0] }
          }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const resourceStats = await AuditLog.aggregate([
      {
        $group: {
          _id: '$resource',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        actionStats: stats,
        resourceStats,
        totalLogs: await AuditLog.countDocuments()
      }
    });
  } catch (error) {
    logger.error('Error fetching audit log stats:', error);
    next(error);
  }
};

/**
 * Export audit logs as CSV
 */
export const exportAuditLogs = async (req, res, next) => {
  try {
    const { format = 'csv', action, resource, status } = req.query;

    const query = {};
    if (action) query.action = action;
    if (resource) query.resource = resource;
    if (status) query.status = status;

    const logs = await AuditLog.find(query)
      .populate('userId', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .lean();

    if (format === 'csv') {
      const headers = ['ID', 'Action', 'Resource', 'User', 'Status', 'IP Address', 'Created At'];
      const rows = logs.map(log => [
        log._id,
        log.action,
        log.resource,
        `${log.userId?.firstName} ${log.userId?.lastName}`,
        log.status,
        log.ipAddress,
        new Date(log.createdAt).toISOString()
      ]);

      const csv = [headers, ...rows]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n');

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="audit-logs-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      data: logs,
      count: logs.length
    });
  } catch (error) {
    logger.error('Error exporting audit logs:', error);
    next(error);
  }
};
