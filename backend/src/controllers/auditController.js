import { AuditLog } from '../models/AdminModels.js';

export const getAuditLogs = async (req, res, next) => {
  try {
    const { action, resource, status, dateFrom, dateTo, page = 1, limit = 50 } = req.query;

    const query = {};
    if (action) query.action = action;
    if (resource) query.resource = resource;
    if (status) query.status = status;

    if (dateFrom || dateTo) {
      query.createdAt = {};
      if (dateFrom) query.createdAt.$gte = new Date(dateFrom);
      if (dateTo) query.createdAt.$lte = new Date(dateTo);
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

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
    next(error);
  }
};

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
    next(error);
  }
};

export const getAuditLogStats = async (req, res, next) => {
  try {
    const { dateFrom, dateTo } = req.query;

    const query = {};
    if (dateFrom || dateTo) {
      query.createdAt = {};
      if (dateFrom) query.createdAt.$gte = new Date(dateFrom);
      if (dateTo) query.createdAt.$lte = new Date(dateTo);
    }

    const [
      totalLogs,
      successLogs,
      failureLogs,
      actionStats,
      resourceStats
    ] = await Promise.all([
      AuditLog.countDocuments(query),
      AuditLog.countDocuments({ ...query, status: 'success' }),
      AuditLog.countDocuments({ ...query, status: 'failure' }),
      AuditLog.aggregate([
        { $match: query },
        { $group: { _id: '$action', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      AuditLog.aggregate([
        { $match: query },
        { $group: { _id: '$resource', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ])
    ]);

    res.json({
      success: true,
      data: {
        totalLogs,
        successLogs,
        failureLogs,
        successRate: totalLogs > 0 ? Math.round((successLogs / totalLogs) * 100) : 0,
        actionStats,
        resourceStats
      }
    });
  } catch (error) {
    next(error);
  }
};

export const exportAuditLogs = async (req, res, next) => {
  try {
    const { format = 'json', action, resource, status, dateFrom, dateTo } = req.query;

    const query = {};
    if (action) query.action = action;
    if (resource) query.resource = resource;
    if (status) query.status = status;

    if (dateFrom || dateTo) {
      query.createdAt = {};
      if (dateFrom) query.createdAt.$gte = new Date(dateFrom);
      if (dateTo) query.createdAt.$lte = new Date(dateTo);
    }

    const logs = await AuditLog.find(query)
      .populate('userId', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .lean();

    if (format === 'csv') {
      const csv = convertLogsToCSV(logs);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="audit-logs-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="audit-logs-${Date.now()}.json"`);
    res.json(logs);
  } catch (error) {
    next(error);
  }
};

function convertLogsToCSV(logs) {
  if (!logs || logs.length === 0) return '';

  const headers = ['Timestamp', 'User', 'Email', 'Action', 'Resource', 'Resource ID', 'Status', 'IP Address', 'Error Message'];
  const csv = [headers.join(',')];

  logs.forEach(log => {
    const values = [
      new Date(log.createdAt).toISOString(),
      log.userId ? `${log.userId.firstName} ${log.userId.lastName}` : 'Unknown',
      log.userId?.email || '',
      log.action,
      log.resource,
      log.resourceId || '',
      log.status,
      log.ipAddress || '',
      log.errorMessage ? `"${log.errorMessage}"` : ''
    ];
    csv.push(values.join(','));
  });

  return csv.join('\n');
}
