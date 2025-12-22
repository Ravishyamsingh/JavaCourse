/**
 * Health Check Routes
 * Provides system health and status endpoints
 */

import express from 'express';
import { dbHealthCheck } from '../utils/dbHealthCheck.js';
import { logger } from '../utils/monitoring.js';
import { cacheService } from '../services/cacheService.js';

const router = express.Router();

/**
 * Basic health check
 */
router.get('/health', async (req, res) => {
  try {
    const health = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.APP_VERSION || '1.0.0'
    };

    res.status(200).json(health);
  } catch (error) {
    logger.error('Health check failed', { error: error.message });
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * Detailed health check with database and cache status
 */
router.get('/health/detailed', async (req, res) => {
  try {
    const dbHealth = await dbHealthCheck.checkConnection();
    const poolStatus = dbHealthCheck.getConnectionPoolStatus();
    const stats = await dbHealthCheck.getStatistics();
    const cacheMemory = await cacheService.getMemoryInfo();

    const health = {
      status: dbHealth.connected ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.APP_VERSION || '1.0.0',
      database: {
        status: dbHealth.status,
        connected: dbHealth.connected,
        responseTime: dbHealth.responseTime,
        pool: poolStatus,
        statistics: stats
      },
      cache: {
        type: 'redis',
        connected: cacheMemory.available,
        memory: cacheMemory.available ? {
          usedMB: cacheMemory.usedMB,
          maxMB: 30,
          utilizationPercent: cacheMemory.utilizationPercent
        } : null,
        plan: '30MB free tier'
      },
      memory: {
        heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        external: Math.round(process.memoryUsage().external / 1024 / 1024),
        rss: Math.round(process.memoryUsage().rss / 1024 / 1024)
      }
    };

    const statusCode = health.status === 'healthy' ? 200 : 503;
    res.status(statusCode).json(health);
  } catch (error) {
    logger.error('Detailed health check failed', { error: error.message });
    res.status(500).json({
      status: 'error',
      message: 'Detailed health check failed',
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * Readiness check (for Kubernetes)
 */
router.get('/ready', async (req, res) => {
  try {
    const dbHealth = await dbHealthCheck.checkConnection();

    if (dbHealth.connected) {
      res.status(200).json({
        ready: true,
        timestamp: new Date().toISOString()
      });
    } else {
      res.status(503).json({
        ready: false,
        reason: 'Database not connected',
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    logger.error('Readiness check failed', { error: error.message });
    res.status(503).json({
      ready: false,
      reason: 'Readiness check failed',
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * Liveness check (for Kubernetes)
 */
router.get('/live', (req, res) => {
  res.status(200).json({
    alive: true,
    timestamp: new Date().toISOString()
  });
});

/**
 * Database health check
 */
router.get('/health/database', async (req, res) => {
  try {
    const health = await dbHealthCheck.getFullHealthReport();
    const statusCode = health.connection.connected ? 200 : 503;
    res.status(statusCode).json(health);
  } catch (error) {
    logger.error('Database health check failed', { error: error.message });
    res.status(500).json({
      status: 'error',
      message: 'Database health check failed',
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * System metrics
 */
router.get('/metrics', (req, res) => {
  try {
    const metrics = {
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      environment: process.env.NODE_ENV
    };

    res.status(200).json(metrics);
  } catch (error) {
    logger.error('Metrics retrieval failed', { error: error.message });
    res.status(500).json({
      status: 'error',
      message: 'Metrics retrieval failed',
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * Redis cache health check
 * Monitors Redis memory usage for 30MB free plan
 */
router.get('/health/cache', async (req, res) => {
  try {
    const memoryInfo = await cacheService.getMemoryInfo();
    const stats = await cacheService.getStats();

    const health = {
      status: memoryInfo.available ? 'healthy' : 'unavailable',
      timestamp: new Date().toISOString(),
      redis: {
        connected: memoryInfo.available,
        memory: memoryInfo.available ? {
          usedMB: memoryInfo.usedMB,
          maxMB: memoryInfo.maxMB,
          utilizationPercent: memoryInfo.utilizationPercent,
          peakMB: memoryInfo.peakMB
        } : null,
        warning: memoryInfo.available && parseFloat(memoryInfo.utilizationPercent) > 80 
          ? 'Memory usage is high - consider reviewing cache TTLs' 
          : null
      },
      plan: {
        type: 'free',
        maxMemoryMB: 30,
        recommendation: 'Using short TTLs and efficient cache keys for 30MB limit'
      }
    };

    const statusCode = memoryInfo.available ? 200 : 503;
    res.status(statusCode).json(health);
  } catch (error) {
    logger.error('Cache health check failed', { error: error.message });
    res.status(500).json({
      status: 'error',
      message: 'Cache health check failed',
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
