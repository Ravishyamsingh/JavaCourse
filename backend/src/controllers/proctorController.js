import { ProctorEvent, ProctorSession, QuestionProgress, TestLifecycle } from '../models/ProctorModels.js';
import crypto from 'crypto';

/**
 * Generate a secure resume token
 */
function generateResumeToken() {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Generate idempotency key for request deduplication
 */
function idempotencyKey(req) {
  if (req.headers['idempotency-key']) return String(req.headers['idempotency-key']);
  const basis = JSON.stringify({
    u: req.user?._id?.toString?.(),
    t: req.body?.testId,
    s: req.body?.sessionId,
    type: req.body?.type,
    d: req.body?.details,
  });
  return crypto.createHash('sha256').update(basis).digest('hex');
}

/**
 * Determine event severity based on type
 */
function getEventSeverity(eventType) {
  const severityMap = {
    'violation': 'critical',
    'presence_warning': 'warning',
    'tab_switch': 'warning',
    'fullscreen_exit': 'warning',
    'window_blur': 'info',
    'test_started': 'info',
    'test_submitted': 'info',
    'test_auto_submitted': 'warning',
    'test_interrupted': 'warning',
    'test_resumed': 'info',
    'progress_saved': 'info',
    'question_completed': 'info',
    'code_executed': 'info'
  };
  return severityMap[eventType] || 'info';
}

/**
 * Start a proctoring session
 * POST /api/proctor/start
 */
export const startSession = async (req, res, next) => {
  try {
    const { testId, sessionId, meta } = req.body || {};
    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    // Upsert session with atomic operation
    const session = await ProctorSession.findOneAndUpdate(
      { userId: req.user._id, testId, sessionId },
      {
        $setOnInsert: {
          startedAt: new Date(),
          status: 'in_progress',
          userId: req.user._id,
          testId,
          sessionId
        },
        $set: {
          lastSeenAt: new Date(),
          meta: meta || {}
        }
      },
      { new: true, upsert: true }
    );

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId: req.user._id, testId, sessionId },
      {
        $setOnInsert: {
          createdAt: new Date(),
          userId: req.user._id,
          testId,
          sessionId
        },
        $push: {
          actions: {
            type: 'start',
            at: new Date(),
            details: meta || {}
          }
        }
      },
      { upsert: true }
    );

    // Create event log
    await ProctorEvent.create({
      userId: req.user._id,
      testId,
      sessionId,
      type: 'test_started',
      severity: 'info',
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      details: meta || {},
      eventIdempotencyKey: idempotencyKey(req)
    });

    res.json({
      success: true,
      message: 'Session started successfully',
      session
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Submit a proctoring session
 * POST /api/proctor/submit
 */
export const submitSession = async (req, res, next) => {
  try {
    const { 
      testId, 
      sessionId, 
      auto,
      totalQuestions,
      completedQuestions,
      totalViolations,
      questionsData
    } = req.body || {};
    
    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const submitStatus = auto ? 'auto_submitted' : 'submitted';
    const eventType = auto ? 'test_auto_submitted' : 'test_submitted';

    // Update session status with comprehensive data
    const session = await ProctorSession.findOneAndUpdate(
      { userId: req.user._id, testId, sessionId },
      {
        $set: {
          status: submitStatus,
          endedAt: new Date(),
          lastSeenAt: new Date(),
          totalQuestions: totalQuestions || 0,
          completedQuestions: completedQuestions || 0,
          totalViolations: totalViolations || 0,
          submissionData: {
            questionsData: questionsData || [],
            submittedAt: new Date(),
            auto: !!auto
          }
        }
      },
      { new: true, upsert: true }
    );

    // Save individual question progress if provided
    if (Array.isArray(questionsData)) {
      for (const qData of questionsData) {
        if (qData.questionId) {
          await QuestionProgress.findOneAndUpdate(
            { 
              userId: req.user._id, 
              testId, 
              sessionId, 
              questionId: qData.questionId 
            },
            {
              $set: {
                code: qData.code || '',
                output: qData.output || '',
                completed: !!qData.completed,
                attempts: qData.attempts || 0,
                timeSpentMs: qData.timeSpentMs || 0,
                lastRunAt: new Date(),
                difficulty: qData.difficulty || 'easy'
              }
            },
            { upsert: true }
          );
        }
      }
    }

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId: req.user._id, testId, sessionId },
      {
        $setOnInsert: {
          createdAt: new Date(),
          userId: req.user._id,
          testId,
          sessionId
        },
        $push: {
          actions: {
            type: auto ? 'auto_submit' : 'submit',
            at: new Date(),
            details: { 
              reason: auto ? 'timeout' : 'manual',
              totalQuestions,
              completedQuestions,
              totalViolations
            }
          }
        }
      },
      { upsert: true }
    );

    // Create event log
    await ProctorEvent.create({
      userId: req.user._id,
      testId,
      sessionId,
      type: eventType,
      severity: auto ? 'warning' : 'info',
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      details: { 
        auto,
        totalQuestions,
        completedQuestions,
        totalViolations
      },
      eventIdempotencyKey: idempotencyKey(req)
    });

    res.json({
      success: true,
      message: `Session ${submitStatus}`,
      session,
      stats: {
        totalQuestions,
        completedQuestions,
        completionRate: totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0,
        totalViolations
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Log a proctoring event
 * POST /api/proctor/log
 */
export const logEvent = async (req, res, next) => {
  try {
    const { testId, sessionId, type, details } = req.body || {};
    if (!testId || !sessionId || !type) {
      return res.status(400).json({
        success: false,
        message: 'testId, sessionId and type are required',
        code: 'MISSING_PARAMS'
      });
    }

    const severity = getEventSeverity(type);

    // Create event with idempotency
    const event = await ProctorEvent.create({
      userId: req.user._id,
      testId,
      sessionId,
      type,
      severity,
      details: details || {},
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      eventIdempotencyKey: idempotencyKey(req)
    });

    // Update session counters and last seen
    const updateOps = {
      $set: { lastSeenAt: new Date() }
    };

    if (type === 'violation') {
      updateOps.$inc = { violationsCount: 1 };
    } else if (type === 'presence_warning') {
      updateOps.$inc = { warningsCount: 1 };
    }

    await ProctorSession.updateOne(
      { userId: req.user._id, testId, sessionId },
      updateOps,
      { upsert: true }
    );

    // Record in lifecycle if it's a significant event
    if (['violation', 'presence_warning', 'tab_switch'].includes(type)) {
      await TestLifecycle.updateOne(
        { userId: req.user._id, testId, sessionId },
        {
          $setOnInsert: {
            createdAt: new Date(),
            userId: req.user._id,
            testId,
            sessionId
          },
          $push: {
            actions: {
              type: `event_${type}`,
              at: new Date(),
              details: details || {}
            }
          }
        },
        { upsert: true }
      );
    }

    res.status(201).json({
      success: true,
      message: 'Event logged successfully',
      event
    });
  } catch (err) {
    // Handle idempotency duplicate key error
    if (err && err.code === 11000 && err.keyPattern?.eventIdempotencyKey) {
      return res.status(200).json({
        success: true,
        message: 'Event already logged (duplicate)',
        duplicate: true
      });
    }
    next(err);
  }
};

/**
 * Upsert question progress
 * POST /api/proctor/question
 */
export const upsertQuestionProgress = async (req, res, next) => {
  try {
    const { testId, sessionId, questionId, code, output, completed, timeSpentMs, attemptDelta } = req.body || {};
    if (!testId || !sessionId || !questionId) {
      return res.status(400).json({
        success: false,
        message: 'testId, sessionId and questionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const updateOps = {
      $set: {
        code: code !== undefined ? code : undefined,
        output: output !== undefined ? output : undefined,
        completed: !!completed
      },
      $inc: {
        attempts: attemptDelta || 0,
        timeSpentMs: timeSpentMs || 0
      }
    };

    // Remove undefined fields
    Object.keys(updateOps.$set).forEach(key => {
      if (updateOps.$set[key] === undefined) {
        delete updateOps.$set[key];
      }
    });

    // Set lastRunAt if code was executed
    if (code !== undefined || completed) {
      updateOps.$set.lastRunAt = new Date();
    }

    const progress = await QuestionProgress.findOneAndUpdate(
      { userId: req.user._id, testId, sessionId, questionId },
      updateOps,
      { new: true, upsert: true }
    );

    // Log question completion event
    if (completed) {
      await ProctorEvent.create({
        userId: req.user._id,
        testId,
        sessionId,
        type: 'question_completed',
        severity: 'info',
        details: { questionId, timeSpentMs },
        ip: req.ip,
        userAgent: req.headers['user-agent']
      });
    }

    res.json({
      success: true,
      message: 'Question progress updated',
      progress
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get session summary
 * GET /api/proctor/summary/:testId/:sessionId
 */
export const getSessionSummary = async (req, res, next) => {
  try {
    const { testId, sessionId } = req.params;

    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const [session, progress, events, lifecycle] = await Promise.all([
      ProctorSession.findOne({ userId: req.user._id, testId, sessionId }),
      QuestionProgress.find({ userId: req.user._id, testId, sessionId }),
      ProctorEvent.find({ userId: req.user._id, testId, sessionId }).sort({ createdAt: 1 }),
      TestLifecycle.findOne({ userId: req.user._id, testId, sessionId })
    ]);

    // Calculate summary statistics
    const stats = {
      totalQuestions: progress.length,
      completedQuestions: progress.filter(p => p.completed).length,
      totalAttempts: progress.reduce((sum, p) => sum + p.attempts, 0),
      totalTimeMs: progress.reduce((sum, p) => sum + p.timeSpentMs, 0),
      violationCount: session?.violationsCount || 0,
      warningCount: session?.warningsCount || 0,
      eventCount: events.length
    };

    res.json({
      success: true,
      message: 'Session summary retrieved',
      session,
      progress,
      events,
      lifecycle,
      stats
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: List all events with filtering
 * GET /api/proctor/admin/events
 */
export const adminListEvents = async (req, res, next) => {
  try {
    const { userId, testId, type, severity, sessionId, limit = 100, skip = 0 } = req.query;

    const query = {};
    if (userId) query.userId = userId;
    if (testId) query.testId = testId;
    if (type) query.type = type;
    if (severity) query.severity = severity;
    if (sessionId) query.sessionId = sessionId;

    const [events, total] = await Promise.all([
      ProctorEvent.find(query)
        .sort({ createdAt: -1 })
        .skip(Number(skip))
        .limit(Math.min(Number(limit), 1000))
        .populate('userId', 'email firstName lastName'),
      ProctorEvent.countDocuments(query)
    ]);

    res.json({
      success: true,
      message: 'Events retrieved',
      events,
      pagination: {
        total,
        skip: Number(skip),
        limit: Math.min(Number(limit), 1000),
        hasMore: Number(skip) + events.length < total
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: Get detailed session information
 * GET /api/proctor/admin/session/:userId/:testId/:sessionId
 */
export const adminSessionDetail = async (req, res, next) => {
  try {
    const { userId, testId, sessionId } = req.params;

    if (!userId || !testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'userId, testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const [session, lifecycle, progress, events] = await Promise.all([
      ProctorSession.findOne({ userId, testId, sessionId }).populate('userId', 'email firstName lastName'),
      TestLifecycle.findOne({ userId, testId, sessionId }),
      QuestionProgress.find({ userId, testId, sessionId }),
      ProctorEvent.find({ userId, testId, sessionId }).sort({ createdAt: 1 })
    ]);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Calculate detailed statistics
    const stats = {
      sessionDuration: session.endedAt
        ? (session.endedAt - session.startedAt) / 1000 / 60 // minutes
        : (new Date() - session.startedAt) / 1000 / 60,
      totalQuestions: progress.length,
      completedQuestions: progress.filter(p => p.completed).length,
      totalAttempts: progress.reduce((sum, p) => sum + p.attempts, 0),
      totalTimeMs: progress.reduce((sum, p) => sum + p.timeSpentMs, 0),
      violationCount: session.violationsCount,
      warningCount: session.warningsCount,
      eventCount: events.length,
      criticalEvents: events.filter(e => e.severity === 'critical').length,
      warningEvents: events.filter(e => e.severity === 'warning').length
    };

    // Group events by type
    const eventsByType = {};
    events.forEach(event => {
      if (!eventsByType[event.type]) {
        eventsByType[event.type] = 0;
      }
      eventsByType[event.type]++;
    });

    res.json({
      success: true,
      message: 'Session details retrieved',
      session,
      lifecycle,
      progress,
      events,
      stats,
      eventsByType
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: Generate comprehensive report for a test
 * GET /api/proctor/admin/report/:testId
 */
export const adminTestReport = async (req, res, next) => {
  try {
    const { testId } = req.params;
    const { startDate, endDate } = req.query;

    if (!testId) {
      return res.status(400).json({
        success: false,
        message: 'testId is required',
        code: 'MISSING_PARAMS'
      });
    }

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

    // Aggregate statistics
    const report = {
      testId,
      totalSessions: sessions.length,
      completedSessions: sessions.filter(s => s.status === 'submitted').length,
      autoSubmittedSessions: sessions.filter(s => s.status === 'auto_submitted').length,
      abortedSessions: sessions.filter(s => s.status === 'aborted').length,
      totalViolations: sessions.reduce((sum, s) => sum + s.violationsCount, 0),
      totalWarnings: sessions.reduce((sum, s) => sum + s.warningsCount, 0),
      totalEvents: events.length,
      criticalEvents: events.filter(e => e.severity === 'critical').length,
      warningEvents: events.filter(e => e.severity === 'warning').length,
      averageSessionDuration: sessions.length > 0
        ? sessions.reduce((sum, s) => sum + (s.endedAt ? (s.endedAt - s.startedAt) : 0), 0) / sessions.length / 1000 / 60
        : 0,
      totalQuestionsAttempted: allProgress.length,
      totalQuestionsCompleted: allProgress.filter(p => p.completed).length,
      averageAttemptsPerQuestion: allProgress.length > 0
        ? allProgress.reduce((sum, p) => sum + p.attempts, 0) / allProgress.length
        : 0,
      averageTimePerQuestion: allProgress.length > 0
        ? allProgress.reduce((sum, p) => sum + p.timeSpentMs, 0) / allProgress.length / 1000 / 60
        : 0
    };

    // Event distribution
    const eventDistribution = {};
    events.forEach(event => {
      if (!eventDistribution[event.type]) {
        eventDistribution[event.type] = 0;
      }
      eventDistribution[event.type]++;
    });

    // Session details for report
    const sessionDetails = sessions.map(s => ({
      sessionId: s.sessionId,
      userId: s.userId._id,
      userEmail: s.userId.email,
      userName: `${s.userId.firstName} ${s.userId.lastName}`,
      status: s.status,
      startedAt: s.startedAt,
      endedAt: s.endedAt,
      duration: s.endedAt ? (s.endedAt - s.startedAt) / 1000 / 60 : null,
      violations: s.violationsCount,
      warnings: s.warningsCount
    }));

    res.json({
      success: true,
      message: 'Test report generated',
      report,
      eventDistribution,
      sessionDetails
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: Get user's test history
 * GET /api/proctor/admin/user/:userId/history
 */
export const adminUserTestHistory = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { limit = 50, skip = 0 } = req.query;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'userId is required',
        code: 'MISSING_PARAMS'
      });
    }

    const [sessions, total] = await Promise.all([
      ProctorSession.find({ userId })
        .sort({ startedAt: -1 })
        .skip(Number(skip))
        .limit(Math.min(Number(limit), 100)),
      ProctorSession.countDocuments({ userId })
    ]);

    // Get summary for each session
    const sessionsWithSummary = await Promise.all(
      sessions.map(async (session) => {
        const [progress, events] = await Promise.all([
          QuestionProgress.find({ userId, testId: session.testId, sessionId: session.sessionId }),
          ProctorEvent.find({ userId, testId: session.testId, sessionId: session.sessionId })
        ]);

        return {
          ...session.toObject(),
          summary: {
            totalQuestions: progress.length,
            completedQuestions: progress.filter(p => p.completed).length,
            totalEvents: events.length,
            criticalEvents: events.filter(e => e.severity === 'critical').length
          }
        };
      })
    );

    res.json({
      success: true,
      message: 'User test history retrieved',
      sessions: sessionsWithSummary,
      pagination: {
        total,
        skip: Number(skip),
        limit: Math.min(Number(limit), 100),
        hasMore: Number(skip) + sessions.length < total
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get user's current active sessions
 * GET /api/proctor/active-sessions
 */
export const getActiveSessions = async (req, res, next) => {
  try {
    const sessions = await ProctorSession.find({
      userId: req.user._id,
      status: 'in_progress'
    }).sort({ startedAt: -1 });

    res.json({
      success: true,
      message: 'Active sessions retrieved',
      sessions
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Abort a session
 * POST /api/proctor/abort
 */
export const abortSession = async (req, res, next) => {
  try {
    const { testId, sessionId } = req.body || {};

    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const session = await ProctorSession.findOneAndUpdate(
      { userId: req.user._id, testId, sessionId },
      {
        $set: {
          status: 'aborted',
          endedAt: new Date(),
          lastSeenAt: new Date()
        }
      },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId: req.user._id, testId, sessionId },
      {
        $push: {
          actions: {
            type: 'abort',
            at: new Date(),
            details: {}
          }
        }
      }
    );

    // Create event log
    await ProctorEvent.create({
      userId: req.user._id,
      testId,
      sessionId,
      type: 'test_aborted',
      severity: 'warning',
      ip: req.ip,
      userAgent: req.headers['user-agent']
    });

    res.json({
      success: true,
      message: 'Session aborted',
      session
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Auto-save progress during test
 * POST /api/proctor/save-progress
 */
export const saveProgress = async (req, res, next) => {
  try {
    const { testId, sessionId, currentQuestionId, answers, violations } = req.body || {};

    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    // Update session with current progress
    const session = await ProctorSession.findOneAndUpdate(
      { userId: req.user._id, testId, sessionId },
      {
        $set: {
          lastSeenAt: new Date(),
          currentQuestionId: currentQuestionId || null,
          'savedProgress.answers': answers || {},
          'savedProgress.lastSavedAt': new Date(),
          violationsCount: violations || 0
        }
      },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Also save individual question progress
    if (answers && typeof answers === 'object') {
      for (const [questionId, data] of Object.entries(answers)) {
        if (questionId && data) {
          await QuestionProgress.findOneAndUpdate(
            { userId: req.user._id, testId, sessionId, questionId },
            {
              $set: {
                code: data.code || '',
                output: data.lastOutput || '',
                completed: !!data.completed,
                attempts: data.attempts || 0,
                lastRunAt: new Date()
              }
            },
            { upsert: true }
          );
        }
      }
    }

    res.json({
      success: true,
      message: 'Progress saved',
      savedAt: new Date()
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get saved progress for resuming a test
 * GET /api/proctor/get-progress/:testId/:sessionId
 */
export const getProgress = async (req, res, next) => {
  try {
    const { testId, sessionId } = req.params;

    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const session = await ProctorSession.findOne({
      userId: req.user._id,
      testId,
      sessionId
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Get all question progress
    const questionProgress = await QuestionProgress.find({
      userId: req.user._id,
      testId,
      sessionId
    });

    // Convert to answers format
    const answers = {};
    questionProgress.forEach(qp => {
      answers[qp.questionId] = {
        code: qp.code,
        lastOutput: qp.output,
        completed: qp.completed,
        attempts: qp.attempts
      };
    });

    res.json({
      success: true,
      session: {
        testId: session.testId,
        sessionId: session.sessionId,
        status: session.status,
        currentQuestionId: session.currentQuestionId,
        violationsCount: session.violationsCount,
        warningsCount: session.warningsCount,
        startedAt: session.startedAt,
        lastSavedAt: session.savedProgress?.lastSavedAt
      },
      answers,
      canResume: ['in_progress', 'resumable', 'interrupted'].includes(session.status)
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Resume a test session with a resume token
 * POST /api/proctor/resume
 */
export const resumeSession = async (req, res, next) => {
  try {
    const { testId, sessionId, resumeToken } = req.body || {};

    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const session = await ProctorSession.findOne({
      userId: req.user._id,
      testId,
      sessionId
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Check if session is resumable
    if (!['in_progress', 'resumable', 'interrupted'].includes(session.status)) {
      return res.status(400).json({
        success: false,
        message: `Session cannot be resumed. Current status: ${session.status}`,
        code: 'SESSION_NOT_RESUMABLE'
      });
    }

    // If resume token is required, validate it
    if (session.resumeToken) {
      if (!resumeToken || session.resumeToken !== resumeToken) {
        return res.status(403).json({
          success: false,
          message: 'Invalid or missing resume token',
          code: 'INVALID_RESUME_TOKEN'
        });
      }

      // Check if token has expired
      if (session.resumeExpiresAt && new Date() > session.resumeExpiresAt) {
        return res.status(403).json({
          success: false,
          message: 'Resume token has expired',
          code: 'RESUME_TOKEN_EXPIRED'
        });
      }
    }

    // Update session status back to in_progress
    await ProctorSession.updateOne(
      { _id: session._id },
      {
        $set: {
          status: 'in_progress',
          lastSeenAt: new Date()
        },
        $unset: {
          resumeToken: 1,
          resumeExpiresAt: 1
        }
      }
    );

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId: req.user._id, testId, sessionId },
      {
        $push: {
          actions: {
            type: 'resume',
            at: new Date(),
            details: { hadResumeToken: !!resumeToken }
          }
        }
      }
    );

    // Create event log
    await ProctorEvent.create({
      userId: req.user._id,
      testId,
      sessionId,
      type: 'test_resumed',
      severity: 'info',
      ip: req.ip,
      userAgent: req.headers['user-agent']
    });

    // Get saved progress
    const questionProgress = await QuestionProgress.find({
      userId: req.user._id,
      testId,
      sessionId
    });

    const answers = {};
    questionProgress.forEach(qp => {
      answers[qp.questionId] = {
        code: qp.code,
        lastOutput: qp.output,
        completed: qp.completed,
        attempts: qp.attempts
      };
    });

    res.json({
      success: true,
      message: 'Session resumed successfully',
      session: {
        testId: session.testId,
        sessionId: session.sessionId,
        currentQuestionId: session.currentQuestionId,
        violationsCount: session.violationsCount,
        warningsCount: session.warningsCount,
        startedAt: session.startedAt
      },
      answers
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Mark a session as interrupted (called when user loses connection/closes browser)
 * POST /api/proctor/interrupt
 */
export const interruptSession = async (req, res, next) => {
  try {
    const { testId, sessionId, reason } = req.body || {};

    if (!testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const session = await ProctorSession.findOneAndUpdate(
      { userId: req.user._id, testId, sessionId, status: 'in_progress' },
      {
        $set: {
          status: 'interrupted',
          lastSeenAt: new Date()
        }
      },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Active session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId: req.user._id, testId, sessionId },
      {
        $push: {
          actions: {
            type: 'interrupt',
            at: new Date(),
            details: { reason: reason || 'unknown' }
          }
        }
      }
    );

    // Create event log
    await ProctorEvent.create({
      userId: req.user._id,
      testId,
      sessionId,
      type: 'test_interrupted',
      severity: 'warning',
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      details: { reason: reason || 'unknown' }
    });

    res.json({
      success: true,
      message: 'Session marked as interrupted',
      session
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: Generate resume link for a user
 * POST /api/proctor/admin/generate-resume-link
 */
export const adminGenerateResumeLink = async (req, res, next) => {
  try {
    const { userId, testId, sessionId, reason, expiresInHours = 24 } = req.body || {};

    if (!userId || !testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'userId, testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const session = await ProctorSession.findOne({ userId, testId, sessionId });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Generate resume token
    const resumeToken = generateResumeToken();
    const resumeExpiresAt = new Date(Date.now() + expiresInHours * 60 * 60 * 1000);

    // Update session with resume token
    await ProctorSession.updateOne(
      { _id: session._id },
      {
        $set: {
          status: 'resumable',
          resumeToken,
          resumeExpiresAt,
          resumeAllowedBy: req.user._id,
          resumeReason: reason || 'Admin granted resume access'
        }
      }
    );

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId, testId, sessionId },
      {
        $push: {
          actions: {
            type: 'admin_resume_granted',
            at: new Date(),
            details: {
              grantedBy: req.user._id,
              reason: reason || 'Admin granted resume access',
              expiresAt: resumeExpiresAt
            }
          }
        }
      }
    );

    // Create event log
    await ProctorEvent.create({
      userId,
      testId,
      sessionId,
      type: 'admin_resume_granted',
      severity: 'info',
      details: {
        grantedBy: req.user._id,
        reason: reason || 'Admin granted resume access',
        expiresAt: resumeExpiresAt
      }
    });

    // Generate the resume URL
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
    const resumeUrl = `${frontendUrl}/test/resume?testId=${testId}&sessionId=${sessionId}&token=${resumeToken}`;

    res.json({
      success: true,
      message: 'Resume link generated successfully',
      resumeUrl,
      resumeToken,
      expiresAt: resumeExpiresAt,
      sessionStatus: 'resumable'
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: List interrupted/resumable sessions
 * GET /api/proctor/admin/interrupted-sessions
 */
export const adminListInterruptedSessions = async (req, res, next) => {
  try {
    const { limit = 50, skip = 0 } = req.query;

    const [sessions, total] = await Promise.all([
      ProctorSession.find({
        status: { $in: ['interrupted', 'resumable', 'in_progress'] }
      })
        .populate('userId', 'email firstName lastName')
        .populate('resumeAllowedBy', 'email firstName lastName')
        .sort({ lastSeenAt: -1 })
        .skip(Number(skip))
        .limit(Math.min(Number(limit), 100)),
      ProctorSession.countDocuments({
        status: { $in: ['interrupted', 'resumable', 'in_progress'] }
      })
    ]);

    // Add summary info to each session
    const sessionsWithSummary = await Promise.all(
      sessions.map(async (session) => {
        const progress = await QuestionProgress.find({
          userId: session.userId._id,
          testId: session.testId,
          sessionId: session.sessionId
        });

        return {
          ...session.toObject(),
          progressSummary: {
            questionsAttempted: progress.length,
            questionsCompleted: progress.filter(p => p.completed).length,
            hasResumeToken: !!session.resumeToken,
            resumeExpired: session.resumeExpiresAt ? new Date() > session.resumeExpiresAt : false
          }
        };
      })
    );

    res.json({
      success: true,
      message: 'Interrupted sessions retrieved',
      sessions: sessionsWithSummary,
      pagination: {
        total,
        skip: Number(skip),
        limit: Math.min(Number(limit), 100),
        hasMore: Number(skip) + sessions.length < total
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Admin: Revoke resume token
 * POST /api/proctor/admin/revoke-resume
 */
export const adminRevokeResume = async (req, res, next) => {
  try {
    const { userId, testId, sessionId } = req.body || {};

    if (!userId || !testId || !sessionId) {
      return res.status(400).json({
        success: false,
        message: 'userId, testId and sessionId are required',
        code: 'MISSING_PARAMS'
      });
    }

    const session = await ProctorSession.findOneAndUpdate(
      { userId, testId, sessionId },
      {
        $unset: {
          resumeToken: 1,
          resumeExpiresAt: 1,
          resumeAllowedBy: 1,
          resumeReason: 1
        },
        $set: {
          status: 'aborted'
        }
      },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found',
        code: 'SESSION_NOT_FOUND'
      });
    }

    // Record lifecycle action
    await TestLifecycle.updateOne(
      { userId, testId, sessionId },
      {
        $push: {
          actions: {
            type: 'admin_resume_revoked',
            at: new Date(),
            details: { revokedBy: req.user._id }
          }
        }
      }
    );

    res.json({
      success: true,
      message: 'Resume access revoked',
      session
    });
  } catch (err) {
    next(err);
  }
};
