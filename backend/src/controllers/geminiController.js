import {
  generateContent,
  streamContent,
  checkQuotaUsage,
  validateApiKeyWithTest,
  GeminiAPIError
} from '../services/geminiService.js';
import {
  CircuitBreaker,
  RequestQueue,
  RateLimiter,
  AdaptiveRetryStrategy
} from '../utils/geminiRetryStrategy.js';
import { logger } from '../utils/monitoring.js';

/**
 * Initialize Gemini API components
 */
const circuitBreaker = new CircuitBreaker({
  name: 'GeminiAPI',
  failureThreshold: 5,
  successThreshold: 2,
  timeout: 60000
});

const requestQueue = new RequestQueue({
  concurrency: 5,
  maxQueueSize: 100
});

const rateLimiter = new RateLimiter({
  name: 'GeminiAPI',
  requestsPerMinute: 60
});

const adaptiveRetry = new AdaptiveRetryStrategy({
  maxRetries: 3,
  initialDelayMs: 1000,
  maxDelayMs: 30000
});

/**
 * Generate content endpoint
 * POST /api/gemini/generate
 */
export async function generateContentHandler(req, res) {
  try {
    const { prompt, options = {} } = req.body;

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required and must be a non-empty string',
        code: 'INVALID_PROMPT'
      });
    }

    // Check rate limit
    if (!rateLimiter.isAllowed()) {
      return res.status(429).json({
        success: false,
        message: 'Rate limit exceeded. Please try again later.',
        code: 'RATE_LIMITED',
        retryAfter: 60
      });
    }

    // Enqueue request
    const result = await requestQueue.enqueue(async () => {
      return circuitBreaker.execute(async () => {
        return adaptiveRetry.executeWithAdaptiveRetry(
          () => generateContent(prompt, options),
          { endpoint: '/api/gemini/generate', promptLength: prompt.length }
        );
      });
    }, 1); // Priority 1

    logger.info('Content generated successfully', {
      promptLength: prompt.length,
      responseLength: result.text.length
    });

    res.json({
      success: true,
      data: result,
      metadata: {
        queueStatus: requestQueue.getStatus(),
        circuitBreakerStatus: circuitBreaker.getStatus(),
        rateLimiterStatus: rateLimiter.getStatus()
      }
    });
  } catch (error) {
    handleGeminiError(error, res);
  }
}

/**
 * Stream content endpoint
 * POST /api/gemini/stream
 */
export async function streamContentHandler(req, res) {
  try {
    const { prompt, options = {} } = req.body;

    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required and must be a non-empty string',
        code: 'INVALID_PROMPT'
      });
    }

    // Check rate limit
    if (!rateLimiter.isAllowed()) {
      return res.status(429).json({
        success: false,
        message: 'Rate limit exceeded. Please try again later.',
        code: 'RATE_LIMITED'
      });
    }

    // Set up SSE headers
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let buffer = '';

    await requestQueue.enqueue(async () => {
      return circuitBreaker.execute(async () => {
        return streamContent(prompt, (chunk) => {
          buffer += chunk;
          res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
        }, options);
      });
    }, 1);

    res.write(`data: ${JSON.stringify({ complete: true, totalLength: buffer.length })}\n\n`);
    res.end();

    logger.info('Stream completed', {
      promptLength: prompt.length,
      totalLength: buffer.length
    });
  } catch (error) {
    if (!res.headersSent) {
      handleGeminiError(error, res);
    } else {
      res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
      res.end();
    }
  }
}

/**
 * Check API status
 * GET /api/gemini/status
 */
export async function checkStatusHandler(req, res) {
  try {
    const validation = await validateApiKeyWithTest();

    res.json({
      success: true,
      data: {
        apiKeyValid: validation.valid,
        message: validation.message,
        circuitBreaker: circuitBreaker.getStatus(),
        requestQueue: requestQueue.getStatus(),
        rateLimiter: rateLimiter.getStatus(),
        adaptiveRetry: adaptiveRetry.getStats()
      }
    });
  } catch (error) {
    logger.error('Status check failed', { error: error.message });
    res.status(500).json({
      success: false,
      message: 'Failed to check API status',
      error: error.message
    });
  }
}

/**
 * Check quota usage
 * GET /api/gemini/quota
 */
export async function checkQuotaHandler(req, res) {
  try {
    const quota = await checkQuotaUsage();

    if (!quota) {
      return res.status(503).json({
        success: false,
        message: 'Could not retrieve quota information',
        code: 'QUOTA_UNAVAILABLE'
      });
    }

    res.json({
      success: true,
      data: quota
    });
  } catch (error) {
    logger.error('Quota check failed', { error: error.message });
    res.status(500).json({
      success: false,
      message: 'Failed to check quota',
      error: error.message
    });
  }
}

/**
 * Get system metrics
 * GET /api/gemini/metrics
 */
export async function getMetricsHandler(req, res) {
  try {
    const metrics = {
      circuitBreaker: circuitBreaker.getStatus(),
      requestQueue: requestQueue.getStatus(),
      rateLimiter: rateLimiter.getStatus(),
      adaptiveRetry: adaptiveRetry.getStats(),
      timestamp: new Date().toISOString()
    };

    res.json({
      success: true,
      data: metrics
    });
  } catch (error) {
    logger.error('Metrics retrieval failed', { error: error.message });
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve metrics',
      error: error.message
    });
  }
}

/**
 * Reset circuit breaker
 * POST /api/gemini/reset-circuit-breaker
 */
export async function resetCircuitBreakerHandler(req, res) {
  try {
    circuitBreaker.reset();
    logger.info('Circuit breaker reset');

    res.json({
      success: true,
      message: 'Circuit breaker reset successfully',
      status: circuitBreaker.getStatus()
    });
  } catch (error) {
    logger.error('Circuit breaker reset failed', { error: error.message });
    res.status(500).json({
      success: false,
      message: 'Failed to reset circuit breaker',
      error: error.message
    });
  }
}

/**
 * Clear request queue
 * POST /api/gemini/clear-queue
 */
export async function clearQueueHandler(req, res) {
  try {
    requestQueue.clear();
    logger.info('Request queue cleared');

    res.json({
      success: true,
      message: 'Request queue cleared successfully',
      status: requestQueue.getStatus()
    });
  } catch (error) {
    logger.error('Queue clear failed', { error: error.message });
    res.status(500).json({
      success: false,
      message: 'Failed to clear queue',
      error: error.message
    });
  }
}

/**
 * Handle Gemini API errors
 */
function handleGeminiError(error, res) {
  logger.error('Gemini API error', {
    message: error.message,
    code: error.code,
    statusCode: error.statusCode
  });

  if (error instanceof GeminiAPIError) {
    const statusCode = error.statusCode || 500;
    const responseCode = {
      400: 'BAD_REQUEST',
      401: 'UNAUTHORIZED',
      403: 'FORBIDDEN',
      429: 'RATE_LIMITED',
      500: 'INTERNAL_ERROR',
      503: 'SERVICE_UNAVAILABLE'
    }[statusCode] || 'API_ERROR';

    return res.status(statusCode).json({
      success: false,
      message: error.message,
      code: error.code || responseCode,
      details: error.details
    });
  }

  res.status(500).json({
    success: false,
    message: 'An unexpected error occurred',
    code: 'UNEXPECTED_ERROR',
    error: error.message
  });
}

export {
  circuitBreaker,
  requestQueue,
  rateLimiter,
  adaptiveRetry
};
