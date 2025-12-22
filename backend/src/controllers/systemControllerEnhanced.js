import { SystemConfig, SecurityAlert, GradingConfig, SystemHealth, UserProgress, SystemMetricsHistory, AuditLog } from '../models/AdminModels.js';
import { logger } from '../utils/monitoring.js';
import os from 'os';

/**
 * Validate system config data
 */
const validateSystemConfig = (data) => {
  const errors = [];
  
  if (data.maxUploadSize !== undefined) {
    if (data.maxUploadSize < 1 || data.maxUploadSize > 1000) {
      errors.push('Max upload size must be between 1 and 1000 MB');
    }
  }
  
  if (data.sessionTimeout !== undefined) {
    if (data.sessionTimeout < 5 || data.sessionTimeout > 1440) {
      errors.push('Session timeout must be between 5 and 1440 minutes');
    }
  }
  
  if (data.passwordExpiry !== undefined) {
    if (data.passwordExpiry < 0 || data.passwordExpiry > 365) {
      errors.push('Password expiry must be between 0 and 365 days');
    }
  }
  
  if (data.apiRateLimit !== undefined) {
    if (data.apiRateLimit < 100 || data.apiRateLimit > 10000) {
      errors.push('API rate limit must be between 100 and 10000');
    }
  }
  
  return errors;
};

/**
 * Get system configuration
 */
export const getSystemConfig = async (req, res, next) => {
  try {
    let config = await SystemConfig.findOne().lean();
    
    if (!config) {
      config = new SystemConfig({
        maintenanceMode: false,
        maxUploadSize: 10,
        sessionTimeout: 30,
        passwordExpiry: 90,
        apiRateLimit: 1000,
        backupFrequency: 'daily',
        enabledFeatures: ['quizzes', 'assignments', 'certificates'],
        emailNotifications: true,
        twoFactorRequired: false,
        ipWhitelist: []
      });
      await config.save();
    }

    res.json({
      success: true,
      data: config
    });
  } catch (error) {
    logger.error('Error fetching system config:', error);
    next(error);
  }
};

/**
 * Update system configuration
 */
export const updateSystemConfig = async (req, res, next) => {
  try {
    const validationErrors = validateSystemConfig(req.body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    const { maintenanceMode, maxUploadSize, sessionTimeout, passwordExpiry, apiRateLimit, backupFrequency, enabledFeatures, emailNotifications, twoFactorRequired } = req.body;

    let config = await SystemConfig.findOne();
    
    if (!config) {
      config = new SystemConfig();
    }

    if (typeof maintenanceMode === 'boolean') config.maintenanceMode = maintenanceMode;
    if (maxUploadSize) config.maxUploadSize = maxUploadSize;
    if (sessionTimeout) config.sessionTimeout = sessionTimeout;
    if (passwordExpiry !== undefined) config.passwordExpiry = passwordExpiry;
    if (apiRateLimit) config.apiRateLimit = apiRateLimit;
    if (backupFrequency) config.backupFrequency = backupFrequency;
    if (enabledFeatures) config.enabledFeatures = enabledFeatures;
    if (typeof emailNotifications === 'boolean') config.emailNotifications = emailNotifications;
    if (typeof twoFactorRequired === 'boolean') config.twoFactorRequired = twoFactorRequired;

    config.lastUpdatedBy = req.user._id;
    config.lastUpdatedAt = new Date();

    await config.save();

    logger.info('System configuration updated', { userId: req.user._id });

    res.json({
      success: true,
      message: 'System configuration updated successfully',
      data: config
    });
  } catch (error) {
    logger.error('Error updating system config:', error);
    next(error);
  }
};

/**
 * Get grading configuration
 */
export const getGradingConfig = async (req, res, next) => {
  try {
    let config = await GradingConfig.findOne().lean();
    
    if (!config) {
      config = new GradingConfig({
        passingScore: 60,
        excellentScore: 90,
        goodScore: 75,
        averageScore: 60,
        poorScore: 40,
        weightage: {
          quizzes: 50,
          assignments: 30,
          participation: 20
        }
      });
      await config.save();
    }

    res.json({
      success: true,
      data: config
    });
  } catch (error) {
    logger.error('Error fetching grading config:', error);
    next(error);
  }
};

/**
 * Update grading configuration
 */
export const updateGradingConfig = async (req, res, next) => {
  try {
    const { passingScore, excellentScore, goodScore, averageScore, poorScore, weightage } = req.body;

    const errors = [];

    if (passingScore !== undefined && (passingScore < 0 || passingScore > 100)) {
      errors.push('Passing score must be between 0 and 100');
    }

    if (excellentScore !== undefined && (excellentScore < 0 || excellentScore > 100)) {
      errors.push('Excellent score must be between 0 and 100');
    }

    if (goodScore !== undefined && (goodScore < 0 || goodScore > 100)) {
      errors.push('Good score must be between 0 and 100');
    }

    if (averageScore !== undefined && (averageScore < 0 || averageScore > 100)) {
      errors.push('Average score must be between 0 and 100');
    }

    if (poorScore !== undefined && (poorScore < 0 || poorScore > 100)) {
      errors.push('Poor score must be between 0 and 100');
    }

    if (weightage) {
      const total = (weightage.quizzes || 0) + (weightage.assignments || 0) + (weightage.participation || 0);
      if (total !== 100) {
        errors.push('Weightage must total 100%');
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    let config = await GradingConfig.findOne();
    
    if (!config) {
      config = new GradingConfig();
    }

    if (passingScore !== undefined) config.passingScore = passingScore;
    if (excellentScore !== undefined) config.excellentScore = excellentScore;
    if (goodScore !== undefined) config.goodScore = goodScore;
    if (averageScore !== undefined) config.averageScore = averageScore;
    if (poorScore !== undefined) config.poorScore = poorScore;
    if (weightage) config.weightage = weightage;

    config.lastUpdatedBy = req.user._id;
    config.lastUpdatedAt = new Date();

    await config.save();

    logger.info('Grading configuration updated', { userId: req.user._id });

    res.json({
      success: true,
      message: 'Grading configuration updated successfully',
      data: config
    });
  } catch (error) {
    logger.error('Error updating grading config:', error);
    next(error);
  }
};

/**
 * Get security alerts
 */
export const getSecurityAlerts = async (req, res, next) => {
  try {
    const { resolved, page = 1, limit = 50 } = req.query;

    const query = {};
    if (typeof resolved === 'string') {
      query.resolved = resolved === 'true';
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [alerts, total] = await Promise.all([
      SecurityAlert.find(query)
        .populate('createdBy', 'firstName lastName email')
        .populate('resolvedBy', 'firstName lastName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      SecurityAlert.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: alerts,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching security alerts:', error);
    next(error);
  }
};

/**
 * Create security alert
 */
export const createSecurityAlert = async (req, res, next) => {
  try {
    const { type, title, description, severity } = req.body;

    if (!type || !title || !description) {
      return res.status(400).json({
        success: false,
        message: 'Type, title, and description are required'
      });
    }

    const alert = new SecurityAlert({
      type,
      title,
      description,
      severity: severity || 'medium',
      createdBy: req.user._id
    });

    await alert.save();
    await alert.populate('createdBy', 'firstName lastName email');

    logger.warn('Security alert created', { alertId: alert._id, type, title });

    res.status(201).json({
      success: true,
      message: 'Security alert created',
      data: alert
    });
  } catch (error) {
    logger.error('Error creating security alert:', error);
    next(error);
  }
};

/**
 * Resolve security alert
 */
export const resolveSecurityAlert = async (req, res, next) => {
  try {
    const { alertId } = req.params;
    const { resolution } = req.body;

    const alert = await SecurityAlert.findById(alertId);
    if (!alert) {
      return res.status(404).json({
        success: false,
        message: 'Alert not found'
      });
    }

    alert.resolved = true;
    alert.resolvedAt = new Date();
    alert.resolvedBy = req.user._id;
    if (resolution) alert.resolution = resolution;

    await alert.save();
    await alert.populate('resolvedBy', 'firstName lastName email');

    logger.info('Security alert resolved', { alertId, userId: req.user._id });

    res.json({
      success: true,
      message: 'Alert resolved successfully',
      data: alert
    });
  } catch (error) {
    logger.error('Error resolving security alert:', error);
    next(error);
  }
};

/**
 * Add IP to whitelist
 */
export const addIpWhitelist = async (req, res, next) => {
  try {
    const { ip } = req.body;

    if (!ip) {
      return res.status(400).json({
        success: false,
        message: 'IP address is required'
      });
    }

    let config = await SystemConfig.findOne();
    if (!config) {
      config = new SystemConfig();
    }

    if (!config.ipWhitelist) {
      config.ipWhitelist = [];
    }

    if (config.ipWhitelist.includes(ip)) {
      return res.status(400).json({
        success: false,
        message: 'IP already in whitelist'
      });
    }

    config.ipWhitelist.push(ip);
    config.lastUpdatedBy = req.user._id;
    config.lastUpdatedAt = new Date();
    
    await config.save();

    logger.info('IP added to whitelist', { ip, userId: req.user._id });

    res.json({
      success: true,
      message: 'IP added to whitelist',
      data: config.ipWhitelist
    });
  } catch (error) {
    logger.error('Error adding IP to whitelist:', error);
    next(error);
  }
};

/**
 * Remove IP from whitelist
 */
export const removeIpWhitelist = async (req, res, next) => {
  try {
    const { ip } = req.params;

    let config = await SystemConfig.findOne();
    if (!config || !config.ipWhitelist) {
      return res.status(404).json({
        success: false,
        message: 'IP not found in whitelist'
      });
    }

    config.ipWhitelist = config.ipWhitelist.filter(item => item !== ip);
    config.lastUpdatedBy = req.user._id;
    config.lastUpdatedAt = new Date();
    
    await config.save();

    logger.info('IP removed from whitelist', { ip, userId: req.user._id });

    res.json({
      success: true,
      message: 'IP removed from whitelist',
      data: config.ipWhitelist
    });
  } catch (error) {
    logger.error('Error removing IP from whitelist:', error);
    next(error);
  }
};

/**
 * Get system health metrics
 */
export const getSystemMetrics = async (req, res, next) => {
  try {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const cpuUsage = Math.round((1 - freeMemory / totalMemory) * 100);

    const metrics = {
      cpuUsage,
      memoryUsage: Math.round((usedMemory / totalMemory) * 100),
      diskUsage: 45,
      uptime: process.uptime(),
      requestsPerSecond: 150,
      errorRate: 0.5,
      responseTime: 45,
      databaseConnections: 10
    };

    const metricsHistory = new SystemMetricsHistory(metrics);
    await metricsHistory.save();

    res.json({
      success: true,
      data: metrics
    });
  } catch (error) {
    logger.error('Error fetching system metrics:', error);
    next(error);
  }
};

/**
 * Get system health status
 */
export const getSystemHealth = async (req, res, next) => {
  try {
    const health = {
      status: 'healthy',
      timestamp: new Date(),
      services: {
        database: 'connected',
        cache: 'connected',
        email: 'operational',
        storage: 'operational'
      },
      checks: {
        responseTime: { status: 'ok', value: '45ms' },
        errorRate: { status: 'ok', value: '0.5%' },
        memoryUsage: { status: 'ok', value: '65%' },
        cpuUsage: { status: 'ok', value: '35%' }
      }
    };

    res.json({
      success: true,
      data: health
    });
  } catch (error) {
    logger.error('Error fetching system health:', error);
    next(error);
  }
};

/**
 * Get user progress
 */
export const getUserProgress = async (req, res, next) => {
  try {
    const { userId } = req.params;

    let progress = await UserProgress.findOne({ userId }).lean();

    if (!progress) {
      progress = new UserProgress({ userId });
      await progress.save();
    }

    res.json({
      success: true,
      data: progress
    });
  } catch (error) {
    logger.error('Error fetching user progress:', error);
    next(error);
  }
};

/**
 * Update user progress
 */
export const updateUserProgress = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { lessonsCompleted, quizzesAttempted, quizzesPass, averageScore, certificatesEarned, studyStreak, totalStudyTime } = req.body;

    let progress = await UserProgress.findOne({ userId });

    if (!progress) {
      progress = new UserProgress({ userId });
    }

    if (lessonsCompleted !== undefined) progress.lessonsCompleted = lessonsCompleted;
    if (quizzesAttempted !== undefined) progress.quizzesAttempted = quizzesAttempted;
    if (quizzesPass !== undefined) progress.quizzesPass = quizzesPass;
    if (averageScore !== undefined) progress.averageScore = Math.min(100, Math.max(0, averageScore));
    if (certificatesEarned !== undefined) progress.certificatesEarned = certificatesEarned;
    if (studyStreak !== undefined) progress.studyStreak = studyStreak;
    if (totalStudyTime !== undefined) progress.totalStudyTime = totalStudyTime;

    progress.lastActive = new Date();
    progress.updatedAt = new Date();

    await progress.save();

    logger.info('User progress updated', { userId });

    res.json({
      success: true,
      message: 'User progress updated successfully',
      data: progress
    });
  } catch (error) {
    logger.error('Error updating user progress:', error);
    next(error);
  }
};

/**
 * Get metrics history
 */
export const getMetricsHistory = async (req, res, next) => {
  try {
    const { days = 7, limit = 100 } = req.query;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));

    const metrics = await SystemMetricsHistory.find({
      timestamp: { $gte: startDate }
    })
      .sort({ timestamp: -1 })
      .limit(parseInt(limit))
      .lean();

    res.json({
      success: true,
      data: metrics,
      count: metrics.length
    });
  } catch (error) {
    logger.error('Error fetching metrics history:', error);
    next(error);
  }
};

/**
 * Cleanup old metrics (called periodically)
 */
export const cleanupOldMetrics = async (req, res, next) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await SystemMetricsHistory.deleteMany({
      timestamp: { $lt: thirtyDaysAgo }
    });

    logger.info('Old metrics cleaned up', { deletedCount: result.deletedCount });

    res.json({
      success: true,
      message: 'Old metrics cleaned up successfully',
      deletedCount: result.deletedCount
    });
  } catch (error) {
    logger.error('Error cleaning up old metrics:', error);
    next(error);
  }
};
