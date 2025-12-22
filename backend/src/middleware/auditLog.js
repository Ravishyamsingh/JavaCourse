import { AuditLog } from '../models/AdminModels.js';

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
          auditData.changes = req.body;
        }

        AuditLog.create(auditData).catch(err => {
          console.error('Failed to create audit log:', err);
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
    console.error('Failed to create audit log:', error);
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
      if (filters.dateFrom) query.createdAt.$gte = new Date(filters.dateFrom);
      if (filters.dateTo) query.createdAt.$lte = new Date(filters.dateTo);
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
