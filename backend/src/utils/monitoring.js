/**
 * Monitoring and Alerting System
 * Tracks security events, performance metrics, and system health
 */

import winston from 'winston';
import fs from 'fs';
import path from 'path';

// Ensure logs directory exists
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Configure Winston logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'java-course-api' },
  transports: [
    // Error log file
    new winston.transports.File({ 
      filename: path.join(logsDir, 'error.log'), 
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    // Combined log file
    new winston.transports.File({ 
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 10
    }),
    // Security events log
    new winston.transports.File({ 
      filename: path.join(logsDir, 'security.log'),
      level: 'warn',
      maxsize: 5242880, // 5MB
      maxFiles: 10
    })
  ]
});

// Add console transport in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

// Security event tracking
class SecurityMonitor {
  constructor() {
    this.events = new Map();
    this.thresholds = {
      failedLogins: { count: 5, window: 15 * 60 * 1000 }, // 5 failures in 15 minutes
      rateLimitHits: { count: 10, window: 5 * 60 * 1000 }, // 10 hits in 5 minutes
      csrfFailures: { count: 3, window: 10 * 60 * 1000 }, // 3 failures in 10 minutes
      suspiciousActivity: { count: 3, window: 30 * 60 * 1000 } // 3 events in 30 minutes
    };
  }

  // Track security events
  trackEvent(eventType, details = {}) {
    const timestamp = Date.now();
    const key = `${eventType}:${details.ip || 'unknown'}`;
    
    if (!this.events.has(key)) {
      this.events.set(key, []);
    }
    
    const events = this.events.get(key);
    events.push({ timestamp, details });
    
    // Clean old events
    const threshold = this.thresholds[eventType];
    if (threshold) {
      const cutoff = timestamp - threshold.window;
      const recentEvents = events.filter(event => event.timestamp > cutoff);
      this.events.set(key, recentEvents);
      
      // Check if threshold exceeded
      if (recentEvents.length >= threshold.count) {
        this.triggerAlert(eventType, key, recentEvents);
      }
    }
    
    // Log security event
    logger.warn('Security Event', {
      type: eventType,
      ip: details.ip,
      userAgent: details.userAgent,
      userId: details.userId,
      details: details,
      timestamp: new Date(timestamp).toISOString()
    });
  }

  // Trigger security alert
  triggerAlert(eventType, key, events) {
    const alert = {
      type: 'SECURITY_ALERT',
      eventType,
      key,
      count: events.length,
      timeWindow: this.thresholds[eventType].window / 1000 / 60, // minutes
      firstEvent: new Date(events[0].timestamp).toISOString(),
      lastEvent: new Date(events[events.length - 1].timestamp).toISOString(),
      details: events.map(e => e.details)
    };
    
    logger.error('Security Alert Triggered', alert);
    
    // In production, send to alerting system (email, Slack, etc.)
    if (process.env.NODE_ENV === 'production') {
      this.sendAlert(alert);
    }
  }

  // Send alert to external systems
  async sendAlert(alert) {
    try {
      // Example: Send to webhook, email service, or monitoring platform
      console.log('🚨 SECURITY ALERT:', JSON.stringify(alert, null, 2));
      
      // TODO: Implement actual alerting (email, Slack, PagerDuty, etc.)
      // await sendToSlack(alert);
      // await sendEmail(alert);
    } catch (error) {
      logger.error('Failed to send security alert', { error: error.message, alert });
    }
  }

  // Get security metrics
  getMetrics() {
    const metrics = {};
    
    for (const [key, events] of this.events.entries()) {
      const [eventType] = key.split(':');
      if (!metrics[eventType]) {
        metrics[eventType] = 0;
      }
      metrics[eventType] += events.length;
    }
    
    return metrics;
  }

  // Clean up old events periodically
  cleanup() {
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    for (const [key, events] of this.events.entries()) {
      const recentEvents = events.filter(event => now - event.timestamp < maxAge);
      if (recentEvents.length === 0) {
        this.events.delete(key);
      } else {
        this.events.set(key, recentEvents);
      }
    }
  }
}

// Performance monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      requests: 0,
      errors: 0,
      responseTimes: [],
      memoryUsage: [],
      activeConnections: 0
    };
    
    // Start periodic monitoring
    setInterval(() => this.collectMetrics(), 60000); // Every minute
  }

  // Track request metrics
  trackRequest(duration, statusCode, route) {
    this.metrics.requests++;
    this.metrics.responseTimes.push({
      duration,
      statusCode,
      route,
      timestamp: Date.now()
    });
    
    if (statusCode >= 400) {
      this.metrics.errors++;
    }
    
    // Keep only last 1000 response times
    if (this.metrics.responseTimes.length > 1000) {
      this.metrics.responseTimes = this.metrics.responseTimes.slice(-1000);
    }
    
    // Log slow requests
    if (duration > 5000) { // 5 seconds
      logger.warn('Slow Request Detected', {
        duration,
        route,
        statusCode,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Collect system metrics
  collectMetrics() {
    const memUsage = process.memoryUsage();
    this.metrics.memoryUsage.push({
      rss: memUsage.rss,
      heapUsed: memUsage.heapUsed,
      heapTotal: memUsage.heapTotal,
      external: memUsage.external,
      timestamp: Date.now()
    });
    
    // Keep only last 60 memory samples (1 hour)
    if (this.metrics.memoryUsage.length > 60) {
      this.metrics.memoryUsage = this.metrics.memoryUsage.slice(-60);
    }
    
    // Check for memory leaks
    const currentMem = memUsage.heapUsed;
    const avgMem = this.getAverageMemoryUsage();
    
    if (currentMem > avgMem * 1.5) { // 50% above average
      logger.warn('Potential Memory Leak Detected', {
        currentMemory: currentMem,
        averageMemory: avgMem,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Get average memory usage
  getAverageMemoryUsage() {
    if (this.metrics.memoryUsage.length === 0) return 0;
    
    const total = this.metrics.memoryUsage.reduce((sum, sample) => sum + sample.heapUsed, 0);
    return total / this.metrics.memoryUsage.length;
  }

  // Get performance metrics
  getMetrics() {
    const recentResponses = this.metrics.responseTimes.filter(
      r => Date.now() - r.timestamp < 60000 // Last minute
    );
    
    const avgResponseTime = recentResponses.length > 0 
      ? recentResponses.reduce((sum, r) => sum + r.duration, 0) / recentResponses.length
      : 0;
    
    return {
      totalRequests: this.metrics.requests,
      totalErrors: this.metrics.errors,
      errorRate: this.metrics.requests > 0 ? (this.metrics.errors / this.metrics.requests) * 100 : 0,
      averageResponseTime: Math.round(avgResponseTime),
      currentMemoryUsage: process.memoryUsage(),
      averageMemoryUsage: this.getAverageMemoryUsage(),
      activeConnections: this.metrics.activeConnections
    };
  }
}

// Health check system
class HealthChecker {
  constructor() {
    this.checks = new Map();
    this.registerDefaultChecks();
  }

  // Register default health checks
  registerDefaultChecks() {
    this.registerCheck('database', async () => {
      const mongoose = await import('mongoose');
      return {
        status: mongoose.connection.readyState === 1 ? 'healthy' : 'unhealthy',
        details: {
          readyState: mongoose.connection.readyState,
          host: mongoose.connection.host,
          name: mongoose.connection.name
        }
      };
    });

    this.registerCheck('memory', async () => {
      const usage = process.memoryUsage();
      const maxHeap = 1024 * 1024 * 1024; // 1GB threshold
      
      return {
        status: usage.heapUsed < maxHeap ? 'healthy' : 'warning',
        details: {
          heapUsed: usage.heapUsed,
          heapTotal: usage.heapTotal,
          rss: usage.rss,
          external: usage.external
        }
      };
    });

    this.registerCheck('disk', async () => {
      try {
        const stats = fs.statSync(logsDir);
        return {
          status: 'healthy',
          details: {
            logsDirectory: logsDir,
            accessible: true
          }
        };
      } catch (error) {
        return {
          status: 'unhealthy',
          details: {
            error: error.message
          }
        };
      }
    });
  }

  // Register a health check
  registerCheck(name, checkFunction) {
    this.checks.set(name, checkFunction);
  }

  // Run all health checks
  async runChecks() {
    const results = {};
    let overallStatus = 'healthy';

    for (const [name, checkFn] of this.checks.entries()) {
      try {
        const result = await checkFn();
        results[name] = result;
        
        if (result.status === 'unhealthy') {
          overallStatus = 'unhealthy';
        } else if (result.status === 'warning' && overallStatus === 'healthy') {
          overallStatus = 'warning';
        }
      } catch (error) {
        results[name] = {
          status: 'unhealthy',
          error: error.message
        };
        overallStatus = 'unhealthy';
      }
    }

    return {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      checks: results
    };
  }
}

// Initialize monitoring instances
const securityMonitor = new SecurityMonitor();
const performanceMonitor = new PerformanceMonitor();
const healthChecker = new HealthChecker();

// Cleanup old data periodically
setInterval(() => {
  securityMonitor.cleanup();
}, 60 * 60 * 1000); // Every hour

// Export monitoring utilities
export {
  logger,
  securityMonitor,
  performanceMonitor,
  healthChecker
};

// Convenience functions for common monitoring tasks
export const logSecurityEvent = (eventType, details) => {
  securityMonitor.trackEvent(eventType, details);
};

export const logPerformance = (duration, statusCode, route) => {
  performanceMonitor.trackRequest(duration, statusCode, route);
};

export const getSystemHealth = async () => {
  return await healthChecker.runChecks();
};

export const getMetrics = () => {
  return {
    security: securityMonitor.getMetrics(),
    performance: performanceMonitor.getMetrics(),
    timestamp: new Date().toISOString()
  };
};

export default {
  logger,
  securityMonitor,
  performanceMonitor,
  healthChecker,
  logSecurityEvent,
  logPerformance,
  getSystemHealth,
  getMetrics
};