import { logger } from './monitoring.js';

/**
 * Advanced Retry Strategy for Gemini API
 * Implements exponential backoff, circuit breaker, and request queuing
 */

class RetryStrategy {
  constructor(options = {}) {
    this.maxRetries = options.maxRetries || 3;
    this.initialDelayMs = options.initialDelayMs || 1000;
    this.maxDelayMs = options.maxDelayMs || 30000;
    this.backoffMultiplier = options.backoffMultiplier || 2;
    this.jitterFactor = options.jitterFactor || 0.1;
    this.timeoutMs = options.timeoutMs || 30000;
  }

  /**
   * Calculate exponential backoff with jitter
   */
  calculateBackoffDelay(attempt) {
    const exponentialDelay = Math.min(
      this.initialDelayMs * Math.pow(this.backoffMultiplier, attempt),
      this.maxDelayMs
    );
    const jitter = Math.random() * this.jitterFactor * exponentialDelay;
    return exponentialDelay + jitter;
  }

  /**
   * Sleep utility
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Check if error is retryable
   */
  isRetryable(error, statusCode) {
    const retryableStatuses = [408, 429, 500, 502, 503, 504];
    const retryableCodes = [
      'RATE_LIMIT_EXCEEDED',
      'RESOURCE_EXHAUSTED',
      'INTERNAL_ERROR',
      'DEADLINE_EXCEEDED',
      'UNAVAILABLE',
      'ECONNRESET',
      'ECONNREFUSED',
      'ETIMEDOUT',
      'EHOSTUNREACH',
      'ENETUNREACH'
    ];

    const isRetryableStatus = retryableStatuses.includes(statusCode);
    const isRetryableCode = retryableCodes.some(code => 
      error.message.includes(code) || error.code === code
    );

    return isRetryableStatus || isRetryableCode;
  }

  /**
   * Execute function with retry logic
   */
  async executeWithRetry(fn, context = {}) {
    let lastError;

    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        logger.info('Executing request', {
          attempt: attempt + 1,
          maxRetries: this.maxRetries,
          context
        });

        const result = await Promise.race([
          fn(),
          this.createTimeoutPromise()
        ]);

        logger.info('Request succeeded', {
          attempt: attempt + 1,
          context
        });

        return result;
      } catch (error) {
        lastError = error;
        const statusCode = error.statusCode || error.status || 0;

        logger.warn('Request failed', {
          attempt: attempt + 1,
          error: error.message,
          statusCode,
          context
        });

        if (attempt === this.maxRetries) {
          logger.error('Max retries exceeded', {
            totalAttempts: attempt + 1,
            error: error.message,
            context
          });
          throw error;
        }

        if (!this.isRetryable(error, statusCode)) {
          logger.error('Error is not retryable', {
            error: error.message,
            statusCode,
            context
          });
          throw error;
        }

        const delayMs = this.calculateBackoffDelay(attempt);
        logger.info('Retrying after delay', {
          delayMs,
          attempt: attempt + 1,
          context
        });

        await this.sleep(delayMs);
      }
    }

    throw lastError;
  }

  /**
   * Create timeout promise
   */
  createTimeoutPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`Request timeout after ${this.timeoutMs}ms`));
      }, this.timeoutMs);
    });
  }
}

/**
 * Circuit Breaker Pattern for API calls
 */
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.successThreshold = options.successThreshold || 2;
    this.timeout = options.timeout || 60000; // 1 minute
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.successCount = 0;
    this.lastFailureTime = null;
    this.name = options.name || 'CircuitBreaker';
  }

  /**
   * Execute function with circuit breaker
   */
  async execute(fn) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        logger.info('Circuit breaker transitioning to HALF_OPEN', {
          name: this.name
        });
        this.state = 'HALF_OPEN';
        this.successCount = 0;
      } else {
        throw new Error(`Circuit breaker is OPEN for ${this.name}`);
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  /**
   * Handle successful execution
   */
  onSuccess() {
    this.failureCount = 0;

    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= this.successThreshold) {
        logger.info('Circuit breaker transitioning to CLOSED', {
          name: this.name
        });
        this.state = 'CLOSED';
        this.successCount = 0;
      }
    }
  }

  /**
   * Handle failed execution
   */
  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();

    if (this.failureCount >= this.failureThreshold) {
      logger.warn('Circuit breaker transitioning to OPEN', {
        name: this.name,
        failureCount: this.failureCount
      });
      this.state = 'OPEN';
    }
  }

  /**
   * Get circuit breaker status
   */
  getStatus() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      successCount: this.successCount,
      lastFailureTime: this.lastFailureTime
    };
  }

  /**
   * Reset circuit breaker
   */
  reset() {
    this.state = 'CLOSED';
    this.failureCount = 0;
    this.successCount = 0;
    this.lastFailureTime = null;
    logger.info('Circuit breaker reset', { name: this.name });
  }
}

/**
 * Request Queue with Priority Support
 */
class RequestQueue {
  constructor(options = {}) {
    this.concurrency = options.concurrency || 5;
    this.maxQueueSize = options.maxQueueSize || 100;
    this.queue = [];
    this.activeRequests = 0;
    this.processedRequests = 0;
    this.failedRequests = 0;
  }

  /**
   * Add request to queue
   */
  async enqueue(fn, priority = 0) {
    if (this.queue.length >= this.maxQueueSize) {
      throw new Error('Request queue is full');
    }

    return new Promise((resolve, reject) => {
      this.queue.push({
        fn,
        priority,
        resolve,
        reject,
        timestamp: Date.now()
      });

      this.queue.sort((a, b) => b.priority - a.priority);
      this.process();
    });
  }

  /**
   * Process queue
   */
  async process() {
    while (this.activeRequests < this.concurrency && this.queue.length > 0) {
      const request = this.queue.shift();
      this.activeRequests++;

      this.executeRequest(request);
    }
  }

  /**
   * Execute single request
   */
  async executeRequest(request) {
    try {
      const result = await request.fn();
      this.processedRequests++;
      request.resolve(result);
    } catch (error) {
      this.failedRequests++;
      request.reject(error);
    } finally {
      this.activeRequests--;
      this.process();
    }
  }

  /**
   * Get queue status
   */
  getStatus() {
    return {
      queueSize: this.queue.length,
      activeRequests: this.activeRequests,
      processedRequests: this.processedRequests,
      failedRequests: this.failedRequests,
      concurrency: this.concurrency
    };
  }

  /**
   * Clear queue
   */
  clear() {
    this.queue = [];
    logger.info('Request queue cleared');
  }
}

/**
 * Rate Limiter with Token Bucket Algorithm
 */
class RateLimiter {
  constructor(options = {}) {
    this.requestsPerMinute = options.requestsPerMinute || 60;
    this.tokens = this.requestsPerMinute;
    this.lastRefillTime = Date.now();
    this.name = options.name || 'RateLimiter';
  }

  /**
   * Refill tokens based on elapsed time
   */
  refillTokens() {
    const now = Date.now();
    const elapsedMs = now - this.lastRefillTime;
    const elapsedMinutes = elapsedMs / 60000;
    const tokensToAdd = elapsedMinutes * this.requestsPerMinute;

    this.tokens = Math.min(
      this.requestsPerMinute,
      this.tokens + tokensToAdd
    );
    this.lastRefillTime = now;
  }

  /**
   * Check if request is allowed
   */
  isAllowed() {
    this.refillTokens();
    return this.tokens >= 1;
  }

  /**
   * Consume token
   */
  consume() {
    if (this.isAllowed()) {
      this.tokens--;
      return true;
    }
    return false;
  }

  /**
   * Wait until token is available
   */
  async waitForToken() {
    while (!this.isAllowed()) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    this.consume();
  }

  /**
   * Get limiter status
   */
  getStatus() {
    return {
      name: this.name,
      tokensAvailable: Math.floor(this.tokens),
      requestsPerMinute: this.requestsPerMinute,
      nextRefillTime: new Date(this.lastRefillTime + 60000)
    };
  }
}

/**
 * Adaptive Retry Strategy that learns from failures
 */
class AdaptiveRetryStrategy extends RetryStrategy {
  constructor(options = {}) {
    super(options);
    this.stats = {
      totalAttempts: 0,
      successfulAttempts: 0,
      failedAttempts: 0,
      rateLimitErrors: 0,
      timeoutErrors: 0,
      networkErrors: 0,
      otherErrors: 0
    };
  }

  /**
   * Categorize error
   */
  categorizeError(error, statusCode) {
    if (statusCode === 429) {
      this.stats.rateLimitErrors++;
      return 'RATE_LIMIT';
    }
    if (error.message.includes('timeout')) {
      this.stats.timeoutErrors++;
      return 'TIMEOUT';
    }
    if (error.message.includes('ECONNREFUSED') || error.message.includes('ECONNRESET')) {
      this.stats.networkErrors++;
      return 'NETWORK';
    }
    this.stats.otherErrors++;
    return 'OTHER';
  }

  /**
   * Execute with adaptive retry
   */
  async executeWithAdaptiveRetry(fn, context = {}) {
    this.stats.totalAttempts++;

    try {
      const result = await this.executeWithRetry(fn, context);
      this.stats.successfulAttempts++;
      return result;
    } catch (error) {
      this.stats.failedAttempts++;
      const errorType = this.categorizeError(error, error.statusCode);
      
      logger.error('Adaptive retry failed', {
        errorType,
        stats: this.stats,
        context
      });

      throw error;
    }
  }

  /**
   * Get statistics
   */
  getStats() {
    const successRate = this.stats.totalAttempts > 0
      ? (this.stats.successfulAttempts / this.stats.totalAttempts * 100).toFixed(2)
      : 0;

    return {
      ...this.stats,
      successRate: `${successRate}%`
    };
  }

  /**
   * Reset statistics
   */
  resetStats() {
    this.stats = {
      totalAttempts: 0,
      successfulAttempts: 0,
      failedAttempts: 0,
      rateLimitErrors: 0,
      timeoutErrors: 0,
      networkErrors: 0,
      otherErrors: 0
    };
  }
}

export {
  RetryStrategy,
  CircuitBreaker,
  RequestQueue,
  RateLimiter,
  AdaptiveRetryStrategy
};
