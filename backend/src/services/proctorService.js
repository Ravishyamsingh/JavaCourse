import { ProctorEvent, ProctorSession, QuestionProgress, TestLifecycle } from '../models/ProctorModels.js';
import { User } from '../models.js';
import { logger } from '../utils/monitoring.js';

/**
 * Proctoring Service
 * Handles business logic for proctoring system
 */

/**
 * Get comprehensive session analytics
 */
export const getSessionAnalytics = async (userId, testId, sessionId) => {
  try {
    const [session, progress, events, lifecycle] = await Promise.all([
      ProctorSession.findOne({ userId, testId, sessionId }),
      QuestionProgress.find({ userId, testId, sessionId }),
      ProctorEvent.find({ userId, testId, sessionId }),
      TestLifecycle.findOne({ userId, testId, sessionId })
    ]);

    if (!session) {
      return null;
    }

    const sessionDuration = session.endedAt
      ? (session.endedAt - session.startedAt) / 1000 / 60
      : (new Date() - session.startedAt) / 1000 / 60;

    return {
      session,
      progress,
      events,
      lifecycle,
      analytics: {
        sessionDuration,
        totalQuestions: progress.length,
        completedQuestions: progress.filter(p => p.completed).length,
        completionRate: progress.length > 0
          ? (progress.filter(p => p.completed).length / progress.length * 100).toFixed(2)
          : 0,
        totalAttempts: progress.reduce((sum, p) => sum + p.attempts, 0),
        averageAttemptsPerQuestion: progress.length > 0
          ? (progress.reduce((sum, p) => sum + p.attempts, 0) / progress.length).toFixed(2)
          : 0,
        totalTimeMs: progress.reduce((sum, p) => sum + p.timeSpentMs, 0),
        averageTimePerQuestion: progress.length > 0
          ? (progress.reduce((sum, p) => sum + p.timeSpentMs, 0) / progress.length / 1000 / 60).toFixed(2)
          : 0,
        violationCount: session.violationsCount,
        warningCount: session.warningsCount,
        eventCount: events.length,
        criticalEvents: events.filter(e => e.severity === 'critical').length,
        warningEvents: events.filter(e => e.severity === 'warning').length,
        infoEvents: events.filter(e => e.severity === 'info').length
      }
    };
  } catch (error) {
    logger.error('Error getting session analytics', { userId, testId, sessionId, message: error.message });
    throw error;
  }
};

/**
 * Get test-wide analytics
 */
export const getTestAnalytics = async (testId, startDate, endDate) => {
  try {
    const query = { testId };
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    const [sessions, events, allProgress] = await Promise.all([
      ProctorSession.find(query).populate('userId', 'email firstName lastName'),
      ProctorEvent.find(query),
      QuestionProgress.find(query)
    ]);

    const completedSessions = sessions.filter(s => s.status === 'submitted');
    const sessionDurations = sessions
      .filter(s => s.endedAt)
      .map(s => (s.endedAt - s.startedAt) / 1000 / 60);

    return {
      summary: {
        totalSessions: sessions.length,
        completedSessions: completedSessions.length,
        completionRate: sessions.length > 0
          ? (completedSessions.length / sessions.length * 100).toFixed(2)
          : 0,
        autoSubmittedSessions: sessions.filter(s => s.status === 'auto_submitted').length,
        abortedSessions: sessions.filter(s => s.status === 'aborted').length,
        inProgressSessions: sessions.filter(s => s.status === 'in_progress').length
      },
      violations: {
        totalViolations: sessions.reduce((sum, s) => sum + s.violationsCount, 0),
        totalWarnings: sessions.reduce((sum, s) => sum + s.warningsCount, 0),
        averageViolationsPerSession: sessions.length > 0
          ? (sessions.reduce((sum, s) => sum + s.violationsCount, 0) / sessions.length).toFixed(2)
          : 0,
        averageWarningsPerSession: sessions.length > 0
          ? (sessions.reduce((sum, s) => sum + s.warningsCount, 0) / sessions.length).toFixed(2)
          : 0
      },
      events: {
        totalEvents: events.length,
        criticalEvents: events.filter(e => e.severity === 'critical').length,
        warningEvents: events.filter(e => e.severity === 'warning').length,
        infoEvents: events.filter(e => e.severity === 'info').length
      },
      questions: {
        totalQuestionsAttempted: allProgress.length,
        totalQuestionsCompleted: allProgress.filter(p => p.completed).length,
        completionRate: allProgress.length > 0
          ? (allProgress.filter(p => p.completed).length / allProgress.length * 100).toFixed(2)
          : 0,
        averageAttemptsPerQuestion: allProgress.length > 0
          ? (allProgress.reduce((sum, p) => sum + p.attempts, 0) / allProgress.length).toFixed(2)
          : 0,
        averageTimePerQuestion: allProgress.length > 0
          ? (allProgress.reduce((sum, p) => sum + p.timeSpentMs, 0) / allProgress.length / 1000 / 60).toFixed(2)
          : 0
      },
      timing: {
        averageSessionDuration: sessionDurations.length > 0
          ? (sessionDurations.reduce((a, b) => a + b, 0) / sessionDurations.length).toFixed(2)
          : 0,
        minSessionDuration: sessionDurations.length > 0
          ? Math.min(...sessionDurations).toFixed(2)
          : 0,
        maxSessionDuration: sessionDurations.length > 0
          ? Math.max(...sessionDurations).toFixed(2)
          : 0
      }
    };
  } catch (error) {
    logger.error('Error getting test analytics', { testId, startDate, endDate, message: error.message });
    throw error;
  }
};

/**
 * Detect suspicious activity patterns
 */
export const detectSuspiciousActivity = async (userId, testId, sessionId) => {
  try {
    const [session, events] = await Promise.all([
      ProctorSession.findOne({ userId, testId, sessionId }),
      ProctorEvent.find({ userId, testId, sessionId }).sort({ createdAt: 1 })
    ]);

    if (!session) {
      return null;
    }

    const suspiciousPatterns = [];

    // Check for excessive violations
    if (session.violationsCount > 5) {
      suspiciousPatterns.push({
        type: 'excessive_violations',
        severity: 'critical',
        count: session.violationsCount,
        message: `User has ${session.violationsCount} violations`
      });
    }

    // Check for excessive warnings
    if (session.warningsCount > 10) {
      suspiciousPatterns.push({
        type: 'excessive_warnings',
        severity: 'warning',
        count: session.warningsCount,
        message: `User has ${session.warningsCount} warnings`
      });
    }

    // Check for rapid tab switches
    const tabSwitches = events.filter(e => e.type === 'tab_switch');
    if (tabSwitches.length > 20) {
      suspiciousPatterns.push({
        type: 'rapid_tab_switching',
        severity: 'warning',
        count: tabSwitches.length,
        message: `User switched tabs ${tabSwitches.length} times`
      });
    }

    // Check for multiple violations in short time
    const violationEvents = events.filter(e => e.type === 'violation');
    if (violationEvents.length > 3) {
      const timeSpan = violationEvents[violationEvents.length - 1].createdAt - violationEvents[0].createdAt;
      if (timeSpan < 5 * 60 * 1000) { // 5 minutes
        suspiciousPatterns.push({
          type: 'clustered_violations',
          severity: 'critical',
          count: violationEvents.length,
          timeSpanMinutes: (timeSpan / 1000 / 60).toFixed(2),
          message: `${violationEvents.length} violations in ${(timeSpan / 1000 / 60).toFixed(2)} minutes`
        });
      }
    }

    // Check for unusual session duration
    const sessionDuration = session.endedAt
      ? (session.endedAt - session.startedAt) / 1000 / 60
      : (new Date() - session.startedAt) / 1000 / 60;

    if (sessionDuration < 1) {
      suspiciousPatterns.push({
        type: 'very_short_session',
        severity: 'warning',
        duration: sessionDuration.toFixed(2),
        message: `Session duration is only ${sessionDuration.toFixed(2)} minutes`
      });
    }

    return {
      isSuspicious: suspiciousPatterns.length > 0,
      patterns: suspiciousPatterns,
      riskLevel: suspiciousPatterns.some(p => p.severity === 'critical') ? 'high' : 'medium'
    };
  } catch (error) {
    logger.error('Error detecting suspicious activity', { userId, testId, sessionId, message: error.message });
    throw error;
  }
};

/**
 * Generate detailed session report
 */
export const generateSessionReport = async (userId, testId, sessionId) => {
  try {
    const analytics = await getSessionAnalytics(userId, testId, sessionId);
    if (!analytics) {
      return null;
    }

    const suspicious = await detectSuspiciousActivity(userId, testId, sessionId);

    // Get user info
    const user = await User.findById(userId).select('email firstName lastName');

    // Group events by type
    const eventsByType = {};
    analytics.events.forEach(event => {
      if (!eventsByType[event.type]) {
        eventsByType[event.type] = [];
      }
      eventsByType[event.type].push(event);
    });

    return {
      reportMetadata: {
        generatedAt: new Date(),
        userId: userId.toString(),
        userEmail: user?.email,
        userName: user ? `${user.firstName} ${user.lastName}` : 'Unknown',
        testId,
        sessionId
      },
      sessionInfo: {
        status: analytics.session.status,
        startedAt: analytics.session.startedAt,
        endedAt: analytics.session.endedAt,
        duration: `${analytics.analytics.sessionDuration.toFixed(2)} minutes`
      },
      performance: {
        questionsCompleted: `${analytics.analytics.completedQuestions}/${analytics.analytics.totalQuestions}`,
        completionRate: `${analytics.analytics.completionRate}%`,
        averageAttemptsPerQuestion: analytics.analytics.averageAttemptsPerQuestion,
        averageTimePerQuestion: `${analytics.analytics.averageTimePerQuestion} minutes`
      },
      proctoring: {
        violations: analytics.analytics.violationCount,
        warnings: analytics.analytics.warningCount,
        totalEvents: analytics.analytics.eventCount,
        criticalEvents: analytics.analytics.criticalEvents,
        warningEvents: analytics.analytics.warningEvents
      },
      suspiciousActivity: suspicious,
      eventSummary: eventsByType,
      lifecycle: analytics.lifecycle?.actions || []
    };
  } catch (error) {
    logger.error('Error generating session report', { userId, testId, sessionId, message: error.message });
    throw error;
  }
};

/**
 * Export session data for compliance/audit
 */
export const exportSessionData = async (userId, testId, sessionId) => {
  try {
    const report = await generateSessionReport(userId, testId, sessionId);
    if (!report) {
      return null;
    }

    return {
      format: 'json',
      version: '1.0',
      timestamp: new Date().toISOString(),
      data: report
    };
  } catch (error) {
    logger.error('Error exporting session data', { userId, testId, sessionId, message: error.message });
    throw error;
  }
};

/**
 * Cleanup old proctoring data (for GDPR compliance)
 */
export const cleanupOldData = async (daysOld = 90) => {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);

    const [deletedEvents, deletedSessions, deletedProgress, deletedLifecycle] = await Promise.all([
      ProctorEvent.deleteMany({ createdAt: { $lt: cutoffDate } }),
      ProctorSession.deleteMany({ createdAt: { $lt: cutoffDate } }),
      QuestionProgress.deleteMany({ createdAt: { $lt: cutoffDate } }),
      TestLifecycle.deleteMany({ createdAt: { $lt: cutoffDate } })
    ]);

    return {
      success: true,
      deletedRecords: {
        events: deletedEvents.deletedCount,
        sessions: deletedSessions.deletedCount,
        progress: deletedProgress.deletedCount,
        lifecycle: deletedLifecycle.deletedCount
      },
      cutoffDate
    };
  } catch (error) {
    logger.error('Error cleaning up old data', { message: error.message, stack: error.stack });
    throw error;
  }
};

/**
 * Get flagged sessions for review
 */
export const getFlaggedSessions = async (severity = 'critical', limit = 50) => {
  try {
    const flaggedSessions = [];

    // Get sessions with violations
    const sessionsWithViolations = await ProctorSession.find({
      violationsCount: { $gt: 5 }
    })
      .sort({ violationsCount: -1 })
      .limit(limit)
      .populate('userId', 'email firstName lastName');

    for (const session of sessionsWithViolations) {
      const suspicious = await detectSuspiciousActivity(
        session.userId._id,
        session.testId,
        session.sessionId
      );

      if (suspicious?.isSuspicious) {
        flaggedSessions.push({
          session,
          suspicious,
          flaggedAt: new Date()
        });
      }
    }

    return flaggedSessions.sort((a, b) => {
      const severityOrder = { high: 0, medium: 1, low: 2 };
      return severityOrder[a.suspicious.riskLevel] - severityOrder[b.suspicious.riskLevel];
    });
  } catch (error) {
    logger.error('Error getting flagged sessions', { message: error.message, stack: error.stack });
    throw error;
  }
};

export default {
  getSessionAnalytics,
  getTestAnalytics,
  detectSuspiciousActivity,
  generateSessionReport,
  exportSessionData,
  cleanupOldData,
  getFlaggedSessions
};
