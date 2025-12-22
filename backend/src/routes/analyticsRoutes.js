/**
 * Advanced Analytics Routes
 * Provides comprehensive analytics endpoints
 */

import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { authorize } from '../middleware/rbac.js';
import { analyticsService } from '../services/analyticsService.js';
import { logger } from '../utils/monitoring.js';

const router = express.Router();

/**
 * Get user engagement metrics
 */
router.get('/engagement', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const metrics = await analyticsService.getUserEngagementMetrics();
    
    if (metrics) {
      res.json({
        success: true,
        data: metrics
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve engagement metrics'
      });
    }
  } catch (error) {
    logger.error('Engagement metrics error', { error: error.message });
    next(error);
  }
});

/**
 * Get course completion rates
 */
router.get('/completion', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const rates = await analyticsService.getCourseCompletionRates();
    
    if (rates) {
      res.json({
        success: true,
        data: rates
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve completion rates'
      });
    }
  } catch (error) {
    logger.error('Completion rates error', { error: error.message });
    next(error);
  }
});

/**
 * Get performance trends
 */
router.get('/trends', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const { days = 30 } = req.query;
    const trends = await analyticsService.getPerformanceTrends(parseInt(days));
    
    res.json({
      success: true,
      data: trends,
      period: `${days} days`
    });
  } catch (error) {
    logger.error('Performance trends error', { error: error.message });
    next(error);
  }
});

/**
 * Get user demographics
 */
router.get('/demographics', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const demographics = await analyticsService.getUserDemographics();
    
    if (demographics) {
      res.json({
        success: true,
        data: demographics
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve demographics'
      });
    }
  } catch (error) {
    logger.error('Demographics error', { error: error.message });
    next(error);
  }
});

/**
 * Get top performers
 */
router.get('/top-performers', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const { limit = 10 } = req.query;
    const performers = await analyticsService.getTopPerformers(parseInt(limit));
    
    res.json({
      success: true,
      data: performers,
      count: performers.length
    });
  } catch (error) {
    logger.error('Top performers error', { error: error.message });
    next(error);
  }
});

/**
 * Get learning paths analysis
 */
router.get('/learning-paths', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const analysis = await analyticsService.getLearningPathsAnalysis();
    
    res.json({
      success: true,
      data: analysis
    });
  } catch (error) {
    logger.error('Learning paths error', { error: error.message });
    next(error);
  }
});

/**
 * Get retention metrics
 */
router.get('/retention', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const metrics = await analyticsService.getRetentionMetrics();
    
    if (metrics) {
      res.json({
        success: true,
        data: metrics
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve retention metrics'
      });
    }
  } catch (error) {
    logger.error('Retention metrics error', { error: error.message });
    next(error);
  }
});

/**
 * Get comprehensive analytics report
 */
router.get('/report', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const report = await analyticsService.generateComprehensiveReport();
    
    if (report) {
      res.json({
        success: true,
        data: report
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to generate report'
      });
    }
  } catch (error) {
    logger.error('Report generation error', { error: error.message });
    next(error);
  }
});

/**
 * Export analytics to CSV
 */
router.get('/export/csv', authMiddleware, authorize({ roles: ['admin', 'superadmin'] }), async (req, res, next) => {
  try {
    const report = await analyticsService.generateComprehensiveReport();
    
    if (report) {
      const csv = await analyticsService.exportAnalyticsToCSV(report);
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="analytics-${Date.now()}.csv"`);
      res.send(csv);
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to export analytics'
      });
    }
  } catch (error) {
    logger.error('Analytics export error', { error: error.message });
    next(error);
  }
});

export default router;
