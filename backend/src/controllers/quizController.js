import {
  generateQuizForModule,
  generateMixedQuiz,
  generateAdaptiveQuiz,
  generatePracticeExam,
  getAvailableModules
} from '../services/quizGenerationService.js';
import { logger } from '../utils/monitoring.js';
import { User } from '../models.js';
import { QuestionProgress, ProctorSession } from '../models/ProctorModels.js';
import { AuditLog } from '../models/AdminModels.js';
import { cacheService } from '../services/cacheService.js';

/**
 * Generate quiz for a specific module
 * POST /api/quiz/generate-module
 */
export async function generateModuleQuiz(req, res) {
  try {
    const { module, count = 10, difficulty = 'mixed' } = req.body;

    if (!module || typeof module !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Module name is required',
        code: 'INVALID_MODULE'
      });
    }

    if (count < 1 || count > 50) {
      return res.status(400).json({
        success: false,
        message: 'Question count must be between 1 and 50',
        code: 'INVALID_COUNT'
      });
    }

    const validDifficulties = ['easy', 'medium', 'hard', 'mixed'];
    if (!validDifficulties.includes(difficulty)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid difficulty level',
        code: 'INVALID_DIFFICULTY'
      });
    }

    // Try to get from Redis cache first (for same module/count/difficulty)
    const cachedQuiz = await cacheService.getGeneratedQuiz(module, count, difficulty);
    if (cachedQuiz) {
      logger.info('Serving cached quiz', { module, count, difficulty });
      return res.json({
        success: true,
        data: cachedQuiz,
        cached: true
      });
    }

    logger.info('Generating module quiz', {
      module,
      count,
      difficulty,
      userId: req.user?.id
    });

    const result = await generateQuizForModule(module, count, difficulty);

    // Cache the generated quiz (30 minute TTL)
    await cacheService.setGeneratedQuiz(module, count, difficulty, result);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    logger.error('Module quiz generation failed', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      message: error.message,
      code: 'QUIZ_GENERATION_FAILED'
    });
  }
}

/**
 * Generate mixed quiz from multiple modules
 * POST /api/quiz/generate-mixed
 */
export async function generateMixedQuizHandler(req, res) {
  try {
    const { modules, count = 20, difficulty = 'mixed' } = req.body;

    if (!Array.isArray(modules) || modules.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'At least one module is required',
        code: 'INVALID_MODULES'
      });
    }

    if (count < 1 || count > 100) {
      return res.status(400).json({
        success: false,
        message: 'Question count must be between 1 and 100',
        code: 'INVALID_COUNT'
      });
    }

    logger.info('Generating mixed quiz', {
      modules,
      count,
      difficulty,
      userId: req.user?.id
    });

    const result = await generateMixedQuiz(modules, count, difficulty);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    logger.error('Mixed quiz generation failed', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      message: error.message,
      code: 'QUIZ_GENERATION_FAILED'
    });
  }
}

/**
 * Generate adaptive quiz based on user performance
 * POST /api/quiz/generate-adaptive
 */
export async function generateAdaptiveQuizHandler(req, res) {
  try {
    const { performance, count = 15 } = req.body;

    if (count < 1 || count > 50) {
      return res.status(400).json({
        success: false,
        message: 'Question count must be between 1 and 50',
        code: 'INVALID_COUNT'
      });
    }

    logger.info('Generating adaptive quiz', {
      count,
      userId: req.user?.id
    });

    const result = await generateAdaptiveQuiz(performance || {}, count);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    logger.error('Adaptive quiz generation failed', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      message: error.message,
      code: 'QUIZ_GENERATION_FAILED'
    });
  }
}

/**
 * Generate practice exam
 * POST /api/quiz/generate-exam
 */
export async function generateExamHandler(req, res) {
  try {
    const { modules = null, count = 50 } = req.body;

    if (count < 10 || count > 200) {
      return res.status(400).json({
        success: false,
        message: 'Question count must be between 10 and 200',
        code: 'INVALID_COUNT'
      });
    }

    logger.info('Generating practice exam', {
      modules,
      count,
      userId: req.user?.id
    });

    const result = await generatePracticeExam(modules, count);

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    logger.error('Practice exam generation failed', {
      error: error.message,
      userId: req.user?.id
    });

    res.status(500).json({
      success: false,
      message: error.message,
      code: 'QUIZ_GENERATION_FAILED'
    });
  }
}

/**
 * Get available modules
 * GET /api/quiz/modules
 */
export async function getModulesHandler(req, res) {
  try {
    // Try to get from Redis cache first
    const cachedModules = await cacheService.getQuizModules();
    if (cachedModules) {
      return res.json({
        success: true,
        data: cachedModules,
        cached: true
      });
    }

    const modules = getAvailableModules();
    const responseData = {
      modules,
      count: modules.length
    };

    // Cache the modules list (2 hour TTL since modules rarely change)
    await cacheService.setQuizModules(responseData);

    res.json({
      success: true,
      data: responseData
    });
  } catch (error) {
    logger.error('Failed to get modules', {
      error: error.message
    });

    res.status(500).json({
      success: false,
      message: 'Failed to get modules',
      code: 'GET_MODULES_FAILED'
    });
  }
}

/**
 * Submit quiz answers and get score with persistence
 * POST /api/quiz/submit
 */
export async function submitQuizHandler(req, res) {
  const session = await User.startSession();
  session.startTransaction();
  
  try {
    const { quizId, answers, sessionId, moduleId, topic } = req.body;
    const userId = req.user._id;

    if (!quizId || !Array.isArray(answers) || answers.length === 0) {
      await session.abortTransaction();
      return res.status(400).json({
        success: false,
        message: 'Quiz ID and answers are required',
        code: 'INVALID_SUBMISSION'
      });
    }

    // Calculate score
    let correctCount = 0;
    answers.forEach(answer => {
      if (answer.selected === answer.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / answers.length) * 100);
    const passed = score >= 70;
    const submittedAt = new Date();

    // Save individual question progress
    const questionProgressPromises = answers.map(answer =>
      QuestionProgress.findOneAndUpdate(
        {
          userId,
          testId: quizId,
          sessionId: sessionId || quizId,
          questionId: answer.questionId
        },
        {
          userId,
          testId: quizId,
          sessionId: sessionId || quizId,
          questionId: answer.questionId,
          completed: answer.selected === answer.correctAnswer,
          attempts: (answer.attempts || 0) + 1,
          timeSpentMs: answer.timeSpentMs || 0
        },
        { upsert: true, new: true, session }
      )
    );

    await Promise.all(questionProgressPromises);

    // Update ProctorSession if exists
    if (sessionId) {
      await ProctorSession.findOneAndUpdate(
        { sessionId },
        {
          status: 'submitted',
          endedAt: submittedAt,
          completedQuestions: correctCount,
          totalQuestions: answers.length,
          submissionData: {
            questionsData: answers,
            submittedAt,
            auto: false
          }
        },
        { session }
      );
    }

    // Update User progress
    const user = await User.findById(userId, null, { session });
    if (user) {
      // Add to quiz history
      if (!user.progress) user.progress = {};
      if (!user.progress.quizHistory) user.progress.quizHistory = [];

      user.progress.quizHistory.push({
        quizId,
        moduleId: moduleId || 'general',
        topic: topic || 'Quiz',
        score,
        totalQuestions: answers.length,
        timeTakenMinutes: Math.round((answers.reduce((sum, a) => sum + (a.timeSpentMs || 0), 0)) / 60000),
        completedAt: submittedAt
      });

      // Update total score
      user.progress.totalScore = (user.progress.totalScore || 0) + score;

      await user.save({ session });
    }

    // Create audit log
    await AuditLog.create([{
      userId,
      action: 'QUIZ_SUBMITTED',
      resource: 'QUIZ',
      resourceId: quizId,
      changes: {
        score,
        passed,
        correctAnswers: correctCount,
        totalQuestions: answers.length
      },
      status: 'success'
    }], { session });

    await session.commitTransaction();

    // Invalidate user progress cache since quiz submission updates progress
    await cacheService.invalidateUserProgress(userId.toString());

    logger.info('Quiz submitted successfully', {
      quizId,
      userId,
      score,
      passed,
      answerCount: answers.length
    });

    res.json({
      success: true,
      data: {
        quizId,
        totalQuestions: answers.length,
        correctAnswers: correctCount,
        score,
        passed,
        submittedAt: submittedAt.toISOString()
      }
    });
  } catch (error) {
    await session.abortTransaction();
    
    logger.error('Quiz submission failed', {
      error: error.message,
      userId: req.user?._id
    });

    res.status(500).json({
      success: false,
      message: 'Failed to submit quiz: ' + error.message,
      code: 'SUBMISSION_FAILED'
    });
  } finally {
    await session.endSession();
  }
}

export default {
  generateModuleQuiz,
  generateMixedQuizHandler,
  generateAdaptiveQuizHandler,
  generateExamHandler,
  getModulesHandler,
  submitQuizHandler
};
