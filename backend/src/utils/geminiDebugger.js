import fetch from 'node-fetch';
import config from '../config.js';
import { logger } from './monitoring.js';

/**
 * Comprehensive Gemini API Debugger
 * Systematically checks and diagnoses API issues
 */

class GeminiDebugger {
  constructor() {
    this.results = [];
    this.errors = [];
  }

  /**
   * Add debug result
   */
  addResult(category, status, message, details = {}) {
    this.results.push({
      category,
      status, // 'PASS', 'FAIL', 'WARNING', 'INFO'
      message,
      details,
      timestamp: new Date().toISOString()
    });
  }

  /**
   * Check 1: API Key Configuration
   */
  async checkApiKeyConfiguration() {
    logger.info('🔍 Checking API Key Configuration...');

    const apiKey = config.GEMINI_API_KEY;

    if (!apiKey) {
      this.addResult(
        'API_KEY_CONFIG',
        'FAIL',
        'GEMINI_API_KEY environment variable is not set',
        {
          hint: 'Set GEMINI_API_KEY in .env file',
          example: 'GEMINI_API_KEY=your_api_key_here'
        }
      );
      return false;
    }

    if (apiKey.length < 20) {
      this.addResult(
        'API_KEY_CONFIG',
        'WARNING',
        'API key seems too short (less than 20 characters)',
        { actualLength: apiKey.length }
      );
    }

    if (apiKey.includes(' ')) {
      this.addResult(
        'API_KEY_CONFIG',
        'FAIL',
        'API key contains spaces',
        { hint: 'Remove any whitespace from API key' }
      );
      return false;
    }

    this.addResult(
      'API_KEY_CONFIG',
      'PASS',
      'API key is configured',
      { keyLength: apiKey.length, preview: apiKey.substring(0, 10) + '...' }
    );
    return true;
  }

  /**
   * Check 2: Network Connectivity
   */
  async checkNetworkConnectivity() {
    logger.info('🔍 Checking Network Connectivity...');

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1/models', {
        method: 'GET',
        timeout: 10000
      });

      if (response.ok || response.status === 401) {
        this.addResult(
          'NETWORK_CONNECTIVITY',
          'PASS',
          'Network connectivity to Gemini API is working',
          { statusCode: response.status }
        );
        return true;
      } else {
        this.addResult(
          'NETWORK_CONNECTIVITY',
          'WARNING',
          `Unexpected status code: ${response.status}`,
          { statusCode: response.status }
        );
        return true;
      }
    } catch (error) {
      this.addResult(
        'NETWORK_CONNECTIVITY',
        'FAIL',
        `Network connectivity failed: ${error.message}`,
        {
          error: error.message,
          hint: 'Check your internet connection and firewall settings'
        }
      );
      return false;
    }
  }

  /**
   * Check 3: API Key Validity
   */
  async checkApiKeyValidity() {
    logger.info('🔍 Checking API Key Validity...');

    const apiKey = config.GEMINI_API_KEY;
    if (!apiKey) {
      this.addResult(
        'API_KEY_VALIDITY',
        'SKIP',
        'Skipped - API key not configured'
      );
      return false;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'test' }] }],
            generationConfig: { maxOutputTokens: 10 }
          }),
          timeout: 15000
        }
      );

      const responseText = await response.text();

      if (response.ok) {
        this.addResult(
          'API_KEY_VALIDITY',
          'PASS',
          'API key is valid and working',
          { statusCode: response.status }
        );
        return true;
      }

      if (response.status === 401 || response.status === 403) {
        this.addResult(
          'API_KEY_VALIDITY',
          'FAIL',
          'API key is invalid or unauthorized',
          {
            statusCode: response.status,
            hint: 'Check if API key is correct and has proper permissions'
          }
        );
        return false;
      }

      if (response.status === 429) {
        this.addResult(
          'API_KEY_VALIDITY',
          'WARNING',
          'Rate limit exceeded - API key is valid but quota exhausted',
          { statusCode: response.status }
        );
        return true;
      }

      if (response.status >= 500) {
        this.addResult(
          'API_KEY_VALIDITY',
          'WARNING',
          'Server error - API might be temporarily unavailable',
          { statusCode: response.status }
        );
        return true;
      }

      this.addResult(
        'API_KEY_VALIDITY',
        'WARNING',
        `Unexpected response: ${response.status}`,
        { statusCode: response.status, response: responseText.substring(0, 200) }
      );
      return true;
    } catch (error) {
      this.addResult(
        'API_KEY_VALIDITY',
        'FAIL',
        `Failed to validate API key: ${error.message}`,
        { error: error.message }
      );
      return false;
    }
  }

  /**
   * Check 4: Rate Limiting Status
   */
  async checkRateLimitStatus() {
    logger.info('🔍 Checking Rate Limit Status...');

    const apiKey = config.GEMINI_API_KEY;
    if (!apiKey) {
      this.addResult(
        'RATE_LIMIT_STATUS',
        'SKIP',
        'Skipped - API key not configured'
      );
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'test' }] }],
            generationConfig: { maxOutputTokens: 10 }
          }),
          timeout: 15000
        }
      );

      const headers = response.headers;
      const rateLimitRemaining = headers.get('x-ratelimit-remaining');
      const rateLimitReset = headers.get('x-ratelimit-reset');

      if (response.status === 429) {
        this.addResult(
          'RATE_LIMIT_STATUS',
          'FAIL',
          'Rate limit exceeded',
          {
            statusCode: 429,
            remaining: rateLimitRemaining,
            resetTime: rateLimitReset,
            hint: 'Wait before making more requests or upgrade your plan'
          }
        );
      } else {
        this.addResult(
          'RATE_LIMIT_STATUS',
          'PASS',
          'Rate limit status is normal',
          {
            remaining: rateLimitRemaining || 'Not provided',
            resetTime: rateLimitReset || 'Not provided'
          }
        );
      }
    } catch (error) {
      this.addResult(
        'RATE_LIMIT_STATUS',
        'WARNING',
        `Could not check rate limit: ${error.message}`,
        { error: error.message }
      );
    }
  }

  /**
   * Check 5: Endpoint Configuration
   */
  async checkEndpointConfiguration() {
    logger.info('🔍 Checking Endpoint Configuration...');

    const endpoints = [
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent',
      'https://generativelanguage.googleapis.com/v1/models'
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'GET',
          timeout: 10000
        });

        this.addResult(
          'ENDPOINT_CONFIG',
          'PASS',
          `Endpoint accessible: ${endpoint}`,
          { statusCode: response.status }
        );
      } catch (error) {
        this.addResult(
          'ENDPOINT_CONFIG',
          'WARNING',
          `Endpoint not accessible: ${endpoint}`,
          { error: error.message }
        );
      }
    }
  }

  /**
   * Check 6: Request Format Validation
   */
  async checkRequestFormat() {
    logger.info('🔍 Checking Request Format...');

    const validFormats = {
      contents: 'array',
      generationConfig: 'object',
      safetySettings: 'array'
    };

    const testPayload = {
      contents: [
        {
          parts: [
            {
              text: 'test'
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 100,
        topP: 0.95,
        topK: 40
      }
    };

    let isValid = true;
    for (const [key, expectedType] of Object.entries(validFormats)) {
      if (key in testPayload) {
        const actualType = Array.isArray(testPayload[key]) ? 'array' : typeof testPayload[key];
        if (actualType === expectedType) {
          this.addResult(
            'REQUEST_FORMAT',
            'PASS',
            `${key} has correct format`,
            { expectedType, actualType }
          );
        } else {
          this.addResult(
            'REQUEST_FORMAT',
            'FAIL',
            `${key} has incorrect format`,
            { expectedType, actualType }
          );
          isValid = false;
        }
      }
    }

    return isValid;
  }

  /**
   * Check 7: Response Parsing
   */
  async checkResponseParsing() {
    logger.info('🔍 Checking Response Parsing...');

    const apiKey = config.GEMINI_API_KEY;
    if (!apiKey) {
      this.addResult(
        'RESPONSE_PARSING',
        'SKIP',
        'Skipped - API key not configured'
      );
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Hello' }] }],
            generationConfig: { maxOutputTokens: 50 }
          }),
          timeout: 15000
        }
      );

      const responseText = await response.text();

      try {
        const data = JSON.parse(responseText);
        
        if (data.candidates && data.candidates.length > 0) {
          this.addResult(
            'RESPONSE_PARSING',
            'PASS',
            'Response parsed successfully',
            {
              hasContent: !!data.candidates[0].content,
              finishReason: data.candidates[0].finishReason
            }
          );
        } else {
          this.addResult(
            'RESPONSE_PARSING',
            'WARNING',
            'Response parsed but no candidates found',
            { response: data }
          );
        }
      } catch (parseError) {
        this.addResult(
          'RESPONSE_PARSING',
          'FAIL',
          'Failed to parse JSON response',
          {
            error: parseError.message,
            responsePreview: responseText.substring(0, 200)
          }
        );
      }
    } catch (error) {
      this.addResult(
        'RESPONSE_PARSING',
        'WARNING',
        `Could not test response parsing: ${error.message}`,
        { error: error.message }
      );
    }
  }

  /**
   * Check 8: Timeout Configuration
   */
  async checkTimeoutConfiguration() {
    logger.info('🔍 Checking Timeout Configuration...');

    const timeoutValues = [5000, 10000, 15000, 30000];
    const apiKey = config.GEMINI_API_KEY;

    if (!apiKey) {
      this.addResult(
        'TIMEOUT_CONFIG',
        'SKIP',
        'Skipped - API key not configured'
      );
      return;
    }

    for (const timeout of timeoutValues) {
      try {
        const startTime = Date.now();
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              contents: [{ parts: [{ text: 'test' }] }],
              generationConfig: { maxOutputTokens: 10 }
            }),
            timeout
          }
        );
        const duration = Date.now() - startTime;

        this.addResult(
          'TIMEOUT_CONFIG',
          'PASS',
          `Request completed within ${timeout}ms timeout`,
          { actualDuration: duration, timeout }
        );
        break;
      } catch (error) {
        if (error.message.includes('timeout')) {
          this.addResult(
            'TIMEOUT_CONFIG',
            'WARNING',
            `Request timed out with ${timeout}ms timeout`,
            { timeout }
          );
        }
      }
    }
  }

  /**
   * Run all diagnostic checks
   */
  async runFullDiagnostics() {
    logger.info('🚀 Starting Full Gemini API Diagnostics...');
    console.log('\n========== GEMINI API DIAGNOSTICS ==========\n');

    await this.checkApiKeyConfiguration();
    await this.checkNetworkConnectivity();
    await this.checkApiKeyValidity();
    await this.checkRateLimitStatus();
    await this.checkEndpointConfiguration();
    await this.checkRequestFormat();
    await this.checkResponseParsing();
    await this.checkTimeoutConfiguration();

    return this.generateReport();
  }

  /**
   * Generate diagnostic report
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.length,
        passed: this.results.filter(r => r.status === 'PASS').length,
        failed: this.results.filter(r => r.status === 'FAIL').length,
        warnings: this.results.filter(r => r.status === 'WARNING').length,
        skipped: this.results.filter(r => r.status === 'SKIP').length
      },
      results: this.results,
      recommendations: this.generateRecommendations()
    };

    return report;
  }

  /**
   * Generate recommendations based on results
   */
  generateRecommendations() {
    const recommendations = [];
    const failedChecks = this.results.filter(r => r.status === 'FAIL');

    if (failedChecks.some(r => r.category === 'API_KEY_CONFIG')) {
      recommendations.push({
        priority: 'CRITICAL',
        issue: 'API Key not configured',
        solution: 'Set GEMINI_API_KEY environment variable in .env file',
        steps: [
          '1. Get API key from https://makersuite.google.com/app/apikey',
          '2. Add to .env: GEMINI_API_KEY=your_key_here',
          '3. Restart the application'
        ]
      });
    }

    if (failedChecks.some(r => r.category === 'API_KEY_VALIDITY')) {
      recommendations.push({
        priority: 'CRITICAL',
        issue: 'API Key is invalid or unauthorized',
        solution: 'Verify and regenerate API key',
        steps: [
          '1. Go to https://makersuite.google.com/app/apikey',
          '2. Delete the current key',
          '3. Create a new API key',
          '4. Update .env file with new key',
          '5. Restart application'
        ]
      });
    }

    if (failedChecks.some(r => r.category === 'NETWORK_CONNECTIVITY')) {
      recommendations.push({
        priority: 'CRITICAL',
        issue: 'Cannot reach Gemini API servers',
        solution: 'Check network and firewall settings',
        steps: [
          '1. Verify internet connection',
          '2. Check firewall/proxy settings',
          '3. Try accessing https://generativelanguage.googleapis.com in browser',
          '4. Check if ISP blocks Google APIs'
        ]
      });
    }

    const rateLimitWarnings = this.results.filter(r => 
      r.category === 'RATE_LIMIT_STATUS' && r.status === 'FAIL'
    );
    if (rateLimitWarnings.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        issue: 'Rate limit exceeded',
        solution: 'Implement request throttling and retry logic',
        steps: [
          '1. Implement exponential backoff retry strategy',
          '2. Add request queuing system',
          '3. Cache responses when possible',
          '4. Consider upgrading API plan',
          '5. Implement request batching'
        ]
      });
    }

    return recommendations;
  }

  /**
   * Print formatted report
   */
  printReport(report) {
    console.log('\n========== DIAGNOSTIC SUMMARY ==========');
    console.log(`Total Checks: ${report.summary.total}`);
    console.log(`✅ Passed: ${report.summary.passed}`);
    console.log(`❌ Failed: ${report.summary.failed}`);
    console.log(`⚠️  Warnings: ${report.summary.warnings}`);
    console.log(`⏭️  Skipped: ${report.summary.skipped}`);

    console.log('\n========== DETAILED RESULTS ==========');
    for (const result of report.results) {
      const icon = {
        'PASS': '✅',
        'FAIL': '❌',
        'WARNING': '⚠️',
        'SKIP': '⏭️'
      }[result.status];

      console.log(`\n${icon} [${result.category}] ${result.message}`);
      if (Object.keys(result.details).length > 0) {
        console.log(`   Details: ${JSON.stringify(result.details, null, 2)}`);
      }
    }

    if (report.recommendations.length > 0) {
      console.log('\n========== RECOMMENDATIONS ==========');
      for (const rec of report.recommendations) {
        console.log(`\n[${rec.priority}] ${rec.issue}`);
        console.log(`Solution: ${rec.solution}`);
        console.log('Steps:');
        for (const step of rec.steps) {
          console.log(`  ${step}`);
        }
      }
    }

    console.log('\n========== END OF REPORT ==========\n');
  }
}

export default GeminiDebugger;
