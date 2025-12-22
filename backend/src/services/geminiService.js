import fetch from 'node-fetch';
import config from '../config.js';
import { logger } from '../utils/monitoring.js';

/**
 * Gemini API Service with comprehensive error handling and retry logic
 */

const GEMINI_API_BASE = config.GEMINI_API_BASE || 'https://generativelanguage.googleapis.com/v1beta/models';
// Use config model or fall back to Gemini 2.5 Flash (latest stable, free tier available)
const GEMINI_MODEL = config.GEMINI_MODEL || 'gemini-2.5-flash';
const MAX_RETRIES = config.GEMINI_MAX_RETRIES || 3;
const INITIAL_RETRY_DELAY = 1000; // 1 second
const MAX_RETRY_DELAY = 10000; // 10 seconds

class GeminiAPIError extends Error {
  constructor(message, code, statusCode, details = {}) {
    super(message);
    this.name = 'GeminiAPIError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}

/**
 * Exponential backoff with jitter
 */
function calculateBackoffDelay(attempt) {
  const exponentialDelay = Math.min(
    INITIAL_RETRY_DELAY * Math.pow(2, attempt),
    MAX_RETRY_DELAY
  );
  const jitter = Math.random() * 0.1 * exponentialDelay;
  return exponentialDelay + jitter;
}

/**
 * Sleep utility
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Validate API key format
 */
function validateApiKey(apiKey) {
  if (!apiKey) {
    throw new GeminiAPIError(
      'API key is missing',
      'MISSING_API_KEY',
      400,
      { hint: 'Set GEMINI_API_KEY environment variable' }
    );
  }

  if (typeof apiKey !== 'string' || apiKey.trim().length === 0) {
    throw new GeminiAPIError(
      'API key is invalid format',
      'INVALID_API_KEY_FORMAT',
      400,
      { hint: 'API key must be a non-empty string' }
    );
  }

  return apiKey.trim();
}

/**
 * Check if error is retryable
 */
function isRetryableError(statusCode, errorCode) {
  const retryableStatuses = [408, 429, 500, 502, 503, 504];
  const retryableCodes = [
    'RATE_LIMIT_EXCEEDED',
    'RESOURCE_EXHAUSTED',
    'INTERNAL_ERROR',
    'DEADLINE_EXCEEDED',
    'UNAVAILABLE',
    'ECONNRESET',
    'ECONNREFUSED',
    'ETIMEDOUT'
  ];

  return (
    retryableStatuses.includes(statusCode) ||
    retryableCodes.includes(errorCode)
  );
}

/**
 * Parse error response from Gemini API
 */
function parseErrorResponse(statusCode, responseBody) {
  try {
    const errorData = typeof responseBody === 'string' 
      ? JSON.parse(responseBody) 
      : responseBody;

    const error = errorData.error || {};
    return {
      code: error.code || 'UNKNOWN_ERROR',
      message: error.message || 'Unknown error occurred',
      status: error.status || statusCode,
      details: error.details || []
    };
  } catch (e) {
    return {
      code: 'PARSE_ERROR',
      message: 'Failed to parse error response',
      status: statusCode,
      details: []
    };
  }
}

/**
 * Make request to Gemini API with retry logic
 */
async function makeGeminiRequest(endpoint, payload, attempt = 0) {
  const apiKey = validateApiKey(config.GEMINI_API_KEY);
  const url = `${GEMINI_API_BASE}/${endpoint}?key=${apiKey}`;

  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'JavaCourseAPI/1.0'
    },
    body: JSON.stringify(payload),
    timeout: 30000 // 30 second timeout
  };

  try {
    logger.info('Gemini API Request', {
      endpoint,
      attempt: attempt + 1,
      url: url.replace(apiKey, '***')
    });

    const response = await fetch(url, requestConfig);
    const responseText = await response.text();

    if (!response.ok) {
      const errorInfo = parseErrorResponse(response.status, responseText);
      const error = new GeminiAPIError(
        errorInfo.message,
        errorInfo.code,
        response.status,
        errorInfo.details
      );

      logger.warn('Gemini API Error Response', {
        statusCode: response.status,
        errorCode: errorInfo.code,
        message: errorInfo.message,
        attempt: attempt + 1
      });

      // Check if error is retryable
      if (isRetryableError(response.status, errorInfo.code) && attempt < MAX_RETRIES) {
        const delay = calculateBackoffDelay(attempt);
        logger.info('Retrying Gemini API request', {
          attempt: attempt + 1,
          delayMs: delay,
          errorCode: errorInfo.code
        });
        await sleep(delay);
        return makeGeminiRequest(endpoint, payload, attempt + 1);
      }

      throw error;
    }

    const responseData = JSON.parse(responseText);
    logger.info('Gemini API Success', {
      endpoint,
      attempt: attempt + 1
    });

    return responseData;
  } catch (error) {
    // Handle network errors
    if (error instanceof TypeError) {
      const networkError = new GeminiAPIError(
        `Network error: ${error.message}`,
        'NETWORK_ERROR',
        0,
        { originalError: error.message }
      );

      if (attempt < MAX_RETRIES) {
        const delay = calculateBackoffDelay(attempt);
        logger.warn('Network error, retrying', {
          attempt: attempt + 1,
          delayMs: delay,
          error: error.message
        });
        await sleep(delay);
        return makeGeminiRequest(endpoint, payload, attempt + 1);
      }

      throw networkError;
    }

    // Re-throw if already a GeminiAPIError
    if (error instanceof GeminiAPIError) {
      throw error;
    }

    // Wrap unexpected errors
    throw new GeminiAPIError(
      `Unexpected error: ${error.message}`,
      'UNEXPECTED_ERROR',
      500,
      { originalError: error.message }
    );
  }
}

/**
 * Generate content using Gemini API
 */
export async function generateContent(prompt, options = {}) {
  const {
    temperature = 0.7,
    maxOutputTokens = 1024,
    topP = 0.95,
    topK = 40,
    safetySettings = []
  } = options;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature,
      maxOutputTokens,
      topP,
      topK
    },
    safetySettings
  };

  try {
    const response = await makeGeminiRequest(
      `${GEMINI_MODEL}:generateContent`,
      payload
    );

    if (!response.candidates || response.candidates.length === 0) {
      throw new GeminiAPIError(
        'No candidates returned from API',
        'NO_CANDIDATES',
        200,
        { response }
      );
    }

    const candidate = response.candidates[0];
    if (candidate.finishReason === 'SAFETY' || candidate.finishReason === 'OTHER') {
      throw new GeminiAPIError(
        `Content generation blocked: ${candidate.finishReason}`,
        'CONTENT_BLOCKED',
        400,
        { finishReason: candidate.finishReason }
      );
    }

    return {
      text: candidate.content.parts[0].text,
      finishReason: candidate.finishReason,
      usageMetadata: response.usageMetadata
    };
  } catch (error) {
    logger.error('Generate content failed', {
      error: error.message,
      code: error.code,
      statusCode: error.statusCode
    });
    throw error;
  }
}

/**
 * Stream content generation (for long responses)
 */
export async function streamContent(prompt, onChunk, options = {}) {
  const {
    temperature = 0.7,
    maxOutputTokens = 2048,
    topP = 0.95,
    topK = 40
  } = options;

  const apiKey = validateApiKey(config.GEMINI_API_KEY);
  const url = `${GEMINI_API_BASE}/${GEMINI_MODEL}:streamGenerateContent?key=${apiKey}&alt=sse`;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature,
      maxOutputTokens,
      topP,
      topK
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'JavaCourseAPI/1.0'
      },
      body: JSON.stringify(payload),
      timeout: 60000
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorInfo = parseErrorResponse(response.status, errorText);
      throw new GeminiAPIError(
        errorInfo.message,
        errorInfo.code,
        response.status,
        errorInfo.details
      );
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            if (data.candidates && data.candidates[0].content) {
              const text = data.candidates[0].content.parts[0].text;
              onChunk(text);
            }
          } catch (e) {
            logger.warn('Failed to parse stream chunk', { error: e.message });
          }
        }
      }
    }

    logger.info('Stream content completed successfully');
  } catch (error) {
    logger.error('Stream content failed', {
      error: error.message,
      code: error.code
    });
    throw error;
  }
}

/**
 * Check API quota and usage
 */
export async function checkQuotaUsage() {
  const apiKey = validateApiKey(config.GEMINI_API_KEY);
  
  try {
    // Note: This endpoint may not be available in all API versions
    const url = `https://generativelanguage.googleapis.com/v1/projects/quota?key=${apiKey}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'JavaCourseAPI/1.0'
      },
      timeout: 10000
    });

    if (!response.ok) {
      logger.warn('Could not fetch quota information', {
        statusCode: response.status
      });
      return null;
    }

    const data = await response.json();
    logger.info('Quota usage retrieved', { data });
    return data;
  } catch (error) {
    logger.warn('Failed to check quota usage', {
      error: error.message
    });
    return null;
  }
}

/**
 * Validate API key by making a test request
 */
export async function validateApiKeyWithTest() {
  try {
    const response = await generateContent('Hello', {
      maxOutputTokens: 10
    });
    return {
      valid: true,
      message: 'API key is valid',
      response: response.text.substring(0, 50)
    };
  } catch (error) {
    return {
      valid: false,
      message: error.message,
      code: error.code,
      statusCode: error.statusCode
    };
  }
}

export { GeminiAPIError };
