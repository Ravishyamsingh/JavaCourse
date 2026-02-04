import { AuditLog } from '../models/AdminModels.js';
import { logger } from '../utils/monitoring.js';

// Sensitive keys that should be redacted from audit logs
const SENSITIVE_KEYS = ['password', 'pass', 'token', 'authToken', 'accessToken', 'refreshToken', 'ssn', 'creditCard', 'email', 'secret', 'apiKey', 'currentPassword', 'newPassword', 'confirmPassword'];

/**
 * Deep clone an object and redact sensitive keys
 */
const sanitizeForAudit = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;
  
  const cloned = Array.isArray(obj) ? [] : {};
  
  for (const [key, value] of Object.entries(obj)) {
    const lowerKey = key.toLowerCase();
    const isSensitive = SENSITIVE_KEYS.some(sensitiveKey => 
      lowerKey.includes(sensitiveKey.toLowerCase())
    );
    
    if (isSensitive) {
      cloned[key] = '[REDACTED]';
    } else if (value && typeof value === 'object') {
      cloned[key] = sanitizeForAudit(value);
    } else {
      cloned[key] = value;
    }
  }
  
  return cloned;
};

export const auditLogMiddleware = (action, resource) => {
  return async (req, res, next) => {
    const originalSend = res.send;

    res.send = function(data) {
      res.send = originalSend;

      if (req.user && (req.user.role === 'admin' || req.user.role === 'superadmin')) {
        const statusCode = res.statusCode;
        const isSuccess = statusCode >= 200 && statusCode < 300;

        const auditData = {
          userId: req.user._id,
          action,
          resource,
          resourceId: req.params.id || req.params.userId || req.params.contentId,
          ipAddress: req.ip,
          userAgent: req.headers['user-agent'],
          status: isSuccess ? 'success' : 'failure'
        };

        if (!isSuccess) {
          try {
            const parsed = JSON.parse(data);
            auditData.errorMessage = parsed.message || 'Unknown error';
          } catch {
            auditData.errorMessage = data;
          }
        }

        if (req.body && Object.keys(req.body).length > 0) {
          auditData.changes = sanitizeForAudit(req.body);
        }

        AuditLog.create(auditData).catch(err => {
          logger.error('Failed to create audit log', { message: err.message, stack: err.stack });
        });
      }

      return originalSend.call(this, data);
    };

    next();
  };
};

export const createAuditLog = async (userId, action, resource, resourceId, changes = null, status = 'success', errorMessage = null) => {
  try {
    await AuditLog.create({
      userId,
      action,
      resource,
      resourceId,
      changes,
      status,
      errorMessage,
      ipAddress: null,
      userAgent: null
    });
  } catch (error) {
    logger.error('Failed to create audit log', { message: error.message, stack: error.stack });
  }
};

export const getAuditLogs = async (filters = {}, page = 1, limit = 50) => {
  try {
    const skip = (page - 1) * limit;
    const query = {};

    if (filters.userId) query.userId = filters.userId;
    if (filters.action) query.action = filters.action;
    if (filters.resource) query.resource = filters.resource;
    if (filters.status) query.status = filters.status;
    if (filters.dateFrom || filters.dateTo) {
      query.createdAt = {};
      if (filters.dateFrom) {
        const dateFrom = new Date(filters.dateFrom);
        if (isFinite(dateFrom.getTime())) {
          query.createdAt.$gte = dateFrom;
        }
      }
      if (filters.dateTo) {
        const dateTo = new Date(filters.dateTo);
        if (isFinite(dateTo.getTime())) {
          query.createdAt.$lte = dateTo;
        }
      }
      // Remove empty createdAt if no valid dates
      if (Object.keys(query.createdAt).length === 0) {
        delete query.createdAt;
      }
    }

    const [logs, total] = await Promise.all([
      AuditLog.find(query)
        .populate('userId', 'firstName lastName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      AuditLog.countDocuments(query)
    ]);

    return {
      logs,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    };
  } catch (error) {
    throw new Error(`Failed to fetch audit logs: ${error.message}`);
  }
};
