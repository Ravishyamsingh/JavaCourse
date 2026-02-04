import { executeJavaRemotely, CompilerError } from '../services/remoteCompiler.js';
import { logger } from '../utils/monitoring.js';
import { cacheService } from '../services/cacheService.js';
import config from '../config.js';

// Compiler input validation limits
const MAX_CODE_SIZE = config.JAVA_SOURCE_LIMIT_BYTES || 40000; // 40KB default
const MAX_INPUT_SIZE = config.JAVA_INPUT_LIMIT_BYTES || 8000;  // 8KB default

export const runJavaCompiler = async (req, res) => {
  try {
    const { code, input = '' } = req.body || {};
    
    // Input validation
    if (!code || typeof code !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Code is required and must be a string',
        code: 'INVALID_CODE'
      });
    }

    // Check code size
    const codeSize = Buffer.byteLength(code, 'utf8');
    if (codeSize > MAX_CODE_SIZE) {
      return res.status(400).json({
        success: false,
        message: `Code size (${codeSize} bytes) exceeds maximum allowed size (${MAX_CODE_SIZE} bytes)`,
        code: 'CODE_TOO_LARGE'
      });
    }

    // Check input size
    const inputSize = Buffer.byteLength(input, 'utf8');
    if (inputSize > MAX_INPUT_SIZE) {
      return res.status(400).json({
        success: false,
        message: `Input size (${inputSize} bytes) exceeds maximum allowed size (${MAX_INPUT_SIZE} bytes)`,
        code: 'INPUT_TOO_LARGE'
      });
    }

    // Basic code sanitization check (no file system access, no network calls in untrusted code)
    const dangerousPatterns = [
      /Runtime\.getRuntime\(\)\.exec/gi,
      /ProcessBuilder/gi,
      /new\s+File\s*\(/gi,
      /FileInputStream/gi,
      /FileOutputStream/gi,
      /FileWriter/gi,
      /FileReader/gi,
      /Socket\s*\(/gi,
      /ServerSocket/gi,
      /URLConnection/gi,
      /System\.exit/gi
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(code)) {
        return res.status(400).json({
          success: false,
          message: 'Code contains potentially dangerous operations that are not allowed',
          code: 'DANGEROUS_CODE'
        });
      }
    }

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
