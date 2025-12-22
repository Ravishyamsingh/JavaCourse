import { executeJavaRemotely, CompilerError } from '../services/remoteCompiler.js';
import { logger } from '../utils/monitoring.js';
import { cacheService } from '../services/cacheService.js';

export const runJavaCompiler = async (req, res) => {
  try {
    const { code, input = '' } = req.body || {};
    
    // Try to get cached result first (same code + input = same output)
    const cachedResult = await cacheService.getCompilerResult(code, input);
    if (cachedResult) {
      logger.info('Serving cached compiler result');
      return res.json({
        ...cachedResult,
        cached: true
      });
    }

    const result = await executeJavaRemotely({ code, input });

    const responseData = {
      success: true,
      output: result.stdout || 'Program finished without output.',
      diagnostics: result.stderr || result.buildStderr || '',
      stats: {
        compileTimeMs: result.buildTime ?? 0,
        runTimeMs: result.time ?? 0,
      },
      raw: result.raw || result,
    };

    // Cache successful compilation results (5 minute TTL)
    if (result.stdout !== undefined || result.stderr === '') {
      await cacheService.setCompilerResult(code, input, responseData);
    }

    return res.json(responseData);
  } catch (error) {
    if (error instanceof CompilerError) {
      logger.warn('Java compiler error', {
        code: error.code,
        statusCode: error.statusCode,
        details: error.details
      });

      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
        code: error.code,
        details: error.details
      });
    }

    logger.error('Unexpected compiler failure', {
      message: error.message,
      stack: error.stack
    });

    return res.status(500).json({
      success: false,
      message: 'Unexpected compiler failure',
      code: 'COMPILER_FATAL_ERROR'
    });
  }
};
