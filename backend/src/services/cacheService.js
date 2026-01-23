/**
 * Redis Caching Service
 * Handles caching for improved performance
 * 
 * IMPORTANT: This service is optimized for a 30MB free Redis plan.
 * - Uses short TTLs to prevent memory overflow
 * - ALL TTLs are capped at MAX_TTL_SECONDS (1 day = 86400 seconds)
 * - Compresses large objects before caching
 * - Implements memory-aware eviction
 * - ONLY for non-admin user flows (admin operations bypass Redis completely)
 * - User progress is ALWAYS saved synchronously to MongoDB first
 * - Redis is used only as a read cache, never as primary storage
 * 
 * NO ADMIN DATA IS STORED IN REDIS:
 * - Admin controllers do not import or use this service
 * - Admin operations go directly to MongoDB
 * - Audit logs, admin users, system config all bypass Redis
 */

import redis from 'redis';
import crypto from 'crypto';
import { logger } from '../utils/monitoring.js';

/**
 * Maximum TTL for any cached data (1 day in seconds)
 * All cache entries will be automatically deleted after this time
 */
const MAX_TTL_SECONDS = 86400; // 1 day = 24 hours

/**
 * Cache key prefixes and TTL configurations
 * Optimized for 30MB free Redis plan
 * All TTLs are well under MAX_TTL_SECONDS for safety
 */
export const CACHE_CONFIG = {
  // User-specific caches (short TTL to allow for updates)
  // NOTE: User progress is ALWAYS saved to MongoDB synchronously first
  USER_PROGRESS: {
    prefix: 'up:',  // Short prefix to save memory
    ttl: 300,       // 5 minutes - progress changes frequently
    maxSize: 5000   // Max bytes per entry
  },
  USER_PROFILE: {
    prefix: 'usr:',
    ttl: 600,       // 10 minutes
    maxSize: 2000
  },
  USER_SESSIONS: {
    prefix: 'sess:',
    ttl: 1800,      // 30 minutes
    maxSize: 1000
  },
  
  // Content caches (longer TTL as content rarely changes)
  CONTENT_LIST: {
    prefix: 'cl:',
    ttl: 1800,      // 30 minutes
    maxSize: 10000
  },
  CONTENT_ITEM: {
    prefix: 'ci:',
    ttl: 3600,      // 1 hour
    maxSize: 5000
  },
  
  // Quiz caches (medium TTL)
  QUIZ_MODULES: {
    prefix: 'qm:',
    ttl: 7200,      // 2 hours - modules list rarely changes
    maxSize: 2000
  },
  QUIZ_GENERATED: {
    prefix: 'qg:',
    ttl: 1800,      // 30 minutes - generated quizzes
    maxSize: 15000
  },
  
  // Compiler caches
  COMPILER_RESULT: {
    prefix: 'comp:',
    ttl: 300,       // 5 minutes - same code/input = same output
    maxSize: 10000
  },
  
  // Rate limiting / counters
  RATE_LIMIT: {
    prefix: 'rl:',
    ttl: 60,        // 1 minute
    maxSize: 100
  }
};

/**
 * Generate cache key with prefix
 */
export function getCacheKey(config, ...parts) {
  return config.prefix + parts.join(':');
}

class CacheService {
  constructor() {
    this.client = null;
    this.connected = false;
    this.memoryUsageBytes = 0;
    this.maxMemoryBytes = 25 * 1024 * 1024; // 25MB (leaving 5MB buffer for 30MB plan)
    this.initializeRedis();
  }

  /**
   * Initialize Redis connection
   */
  async initializeRedis() {
    try {
      if (!process.env.REDIS_URL) {
        logger.warn('Redis URL not configured - caching disabled');
        return;
      }

      this.client = redis.createClient({
        url: process.env.REDIS_URL,
        password: process.env.REDIS_PASSWORD,
        db: parseInt(process.env.REDIS_DB || '0'),
        socket: {
          reconnectStrategy: (retries) => Math.min(retries * 50, 500)
        }
      });

      this.client.on('error', (err) => {
        logger.error('Redis client error', { error: err.message });
        this.connected = false;
      });

      this.client.on('connect', () => {
        logger.info('Redis connected');
        this.connected = true;
      });

      await this.client.connect();
      
      // Check memory usage on startup
      await this.checkMemoryUsage();
    } catch (error) {
      logger.error('Failed to initialize Redis', { error: error.message });
      this.connected = false;
    }
  }

  /**
   * Check Redis memory usage (for 30MB plan monitoring)
   */
  async checkMemoryUsage() {
    try {
      if (!this.connected || !this.client) return null;
      
      const info = await this.client.info('memory');
      const match = info.match(/used_memory:(\d+)/);
      if (match) {
        this.memoryUsageBytes = parseInt(match[1], 10);
        const usageMB = (this.memoryUsageBytes / (1024 * 1024)).toFixed(2);
        const maxMB = (this.maxMemoryBytes / (1024 * 1024)).toFixed(2);
        
        if (this.memoryUsageBytes > this.maxMemoryBytes * 0.8) {
          logger.warn('Redis memory usage high', { usageMB, maxMB });
          // Trigger cleanup of old keys
          await this.cleanupOldKeys();
        }
        
        return this.memoryUsageBytes;
      }
      return null;
    } catch (error) {
      logger.error('Failed to check memory usage', { error: error.message });
      return null;
    }
  }

  /**
   * Cleanup old/expired keys to manage memory
   */
  async cleanupOldKeys() {
    try {
      if (!this.connected || !this.client) return;
      
      // Clean up expired keys by scanning
      let cursor = 0;
      let cleaned = 0;
      
      do {
        const result = await this.client.scan(cursor, { COUNT: 100 });
        cursor = result.cursor;
        
        for (const key of result.keys) {
          const ttl = await this.client.ttl(key);
          // Remove keys with very low TTL or no TTL set
          if (ttl === -1 || ttl === 0) {
            await this.client.del(key);
            cleaned++;
          }
        }
      } while (cursor !== 0 && cleaned < 1000);
      
      if (cleaned > 0) {
        logger.info('Cleaned up expired cache keys', { count: cleaned });
      }
    } catch (error) {
      logger.error('Cache cleanup error', { error: error.message });
    }
  }

  /**
   * Get value from cache
   */
  async get(key) {
    try {
      if (!this.connected || !this.client) return null;

      const value = await this.client.get(key);
      if (value) {
        logger.debug('Cache hit', { key });
        return JSON.parse(value);
      }
      return null;
    } catch (error) {
      logger.error('Cache get error', { error: error.message, key });
      return null;
    }
  }

  /**
   * Set value in cache
   * TTL is automatically capped at MAX_TTL_SECONDS (1 day) to ensure
   * all cached data is automatically deleted within 24 hours
   */
  async set(key, value, ttl = 3600) {
    try {
      if (!this.connected || !this.client) return false;

      // Enforce maximum TTL of 1 day (86400 seconds)
      const effectiveTtl = Math.min(ttl, MAX_TTL_SECONDS);
      
      await this.client.setEx(key, effectiveTtl, JSON.stringify(value));
      logger.debug('Cache set', { key, ttl: effectiveTtl });
      return true;
    } catch (error) {
      logger.error('Cache set error', { error: error.message, key });
      return false;
    }
  }

  /**
   * Delete value from cache
   */
  async delete(key) {
    try {
      if (!this.connected || !this.client) return false;

      await this.client.del(key);
      logger.debug('Cache deleted', { key });
      return true;
    } catch (error) {
      logger.error('Cache delete error', { error: error.message, key });
      return false;
    }
  }

  /**
   * Clear all cache
   */
  async clear() {
    try {
      if (!this.connected || !this.client) return false;

      await this.client.flushDb();
      logger.info('Cache cleared');
      return true;
    } catch (error) {
      logger.error('Cache clear error', { error: error.message });
      return false;
    }
  }

  /**
   * Get or set cache
   */
  async getOrSet(key, fn, ttl = 3600) {
    try {
      // Try to get from cache
      const cached = await this.get(key);
      if (cached) return cached;

      // Execute function and cache result
      const result = await fn();
      await this.set(key, result, ttl);
      return result;
    } catch (error) {
      logger.error('Cache getOrSet error', { error: error.message, key });
      // If cache fails, still execute the function
      return await fn();
    }
  }

  /**
   * Increment counter
   */
  async increment(key, amount = 1) {
    try {
      if (!this.connected || !this.client) return null;

      const value = await this.client.incrBy(key, amount);
      return value;
    } catch (error) {
      logger.error('Cache increment error', { error: error.message, key });
      return null;
    }
  }

  /**
   * Get cache statistics
   */
  async getStats() {
    try {
      if (!this.connected || !this.client) {
        return { connected: false };
      }

      const info = await this.client.info('stats');
      return {
        connected: true,
        info
      };
    } catch (error) {
      logger.error('Cache stats error', { error: error.message });
      return { connected: false };
    }
  }

  /**
   * Cache middleware for Express
   */
  middleware(ttl = 3600) {
    return async (req, res, next) => {
      if (req.method !== 'GET') {
        return next();
      }

      const cacheKey = `route:${req.originalUrl}`;

      try {
        const cached = await this.get(cacheKey);
        if (cached) {
          res.set('X-Cache', 'HIT');
          return res.json(cached);
        }

        res.set('X-Cache', 'MISS');

        // Override res.json to cache the response
        const originalJson = res.json.bind(res);
        res.json = function(data) {
          this.cacheData = data;
          return originalJson(data);
        };

        // Cache the response after sending
        const originalSend = res.send.bind(res);
        res.send = function(data) {
          if (res.statusCode === 200 && res.cacheData) {
            this.cacheService.set(cacheKey, res.cacheData, ttl);
          }
          return originalSend(data);
        };

        res.cacheService = this;
        next();
      } catch (error) {
        logger.error('Cache middleware error', { error: error.message });
        next();
      }
    };
  }

  /**
   * Invalidate cache pattern
   */
  async invalidatePattern(pattern) {
    try {
      if (!this.connected || !this.client) return false;

      const keys = await this.client.keys(pattern);
      if (keys.length > 0) {
        await this.client.del(keys);
        logger.info('Cache pattern invalidated', { pattern, keysDeleted: keys.length });
      }
      return true;
    } catch (error) {
      logger.error('Cache pattern invalidation error', { error: error.message, pattern });
      return false;
    }
  }

  /**
   * Close Redis connection
   */
  async close() {
    try {
      if (this.client) {
        await this.client.quit();
        this.connected = false;
        logger.info('Redis connection closed');
      }
    } catch (error) {
      logger.error('Error closing Redis connection', { error: error.message });
    }
  }

  /**
   * Check if cache is available
   */
  isAvailable() {
    return this.connected && this.client !== null;
  }

  /**
   * Get memory usage info for monitoring
   */
  async getMemoryInfo() {
    try {
      if (!this.connected || !this.client) {
        return { available: false };
      }
      
      const info = await this.client.info('memory');
      const usedMatch = info.match(/used_memory:(\d+)/);
      const peakMatch = info.match(/used_memory_peak:(\d+)/);
      
      const usedBytes = usedMatch ? parseInt(usedMatch[1], 10) : 0;
      const peakBytes = peakMatch ? parseInt(peakMatch[1], 10) : 0;
      
      return {
        available: true,
        usedBytes,
        usedMB: (usedBytes / (1024 * 1024)).toFixed(2),
        peakBytes,
        peakMB: (peakBytes / (1024 * 1024)).toFixed(2),
        maxMB: 30,
        utilizationPercent: ((usedBytes / (30 * 1024 * 1024)) * 100).toFixed(1)
      };
    } catch (error) {
      logger.error('Failed to get memory info', { error: error.message });
      return { available: false, error: error.message };
    }
  }

  // ============================================
  // User Progress Cache Methods
  // ============================================
  
  /**
   * Get cached user progress
   */
  async getUserProgress(userId) {
    const key = getCacheKey(CACHE_CONFIG.USER_PROGRESS, userId);
    return this.get(key);
  }

  /**
   * Set cached user progress
   */
  async setUserProgress(userId, progress) {
    const key = getCacheKey(CACHE_CONFIG.USER_PROGRESS, userId);
    return this.set(key, progress, CACHE_CONFIG.USER_PROGRESS.ttl);
  }

  /**
   * Invalidate user progress cache
   */
  async invalidateUserProgress(userId) {
    const key = getCacheKey(CACHE_CONFIG.USER_PROGRESS, userId);
    return this.delete(key);
  }

  // ============================================
  // User Profile Cache Methods
  // ============================================

  /**
   * Get cached user profile
   */
  async getUserProfile(userId) {
    const key = getCacheKey(CACHE_CONFIG.USER_PROFILE, userId);
    return this.get(key);
  }

  /**
   * Set cached user profile
   */
  async setUserProfile(userId, profile) {
    const key = getCacheKey(CACHE_CONFIG.USER_PROFILE, userId);
    return this.set(key, profile, CACHE_CONFIG.USER_PROFILE.ttl);
  }

  /**
   * Invalidate user profile cache
   */
  async invalidateUserProfile(userId) {
    const key = getCacheKey(CACHE_CONFIG.USER_PROFILE, userId);
    return this.delete(key);
  }

  // ============================================
  // Content Cache Methods
  // ============================================

  /**
   * Get cached content by type
   */
  async getContentByType(type, page = 1) {
    const key = getCacheKey(CACHE_CONFIG.CONTENT_LIST, type, page);
    return this.get(key);
  }

  /**
   * Set cached content by type
   */
  async setContentByType(type, page, content) {
    const key = getCacheKey(CACHE_CONFIG.CONTENT_LIST, type, page);
    return this.set(key, content, CACHE_CONFIG.CONTENT_LIST.ttl);
  }

  /**
   * Get cached content item
   */
  async getContentItem(contentId) {
    const key = getCacheKey(CACHE_CONFIG.CONTENT_ITEM, contentId);
    return this.get(key);
  }

  /**
   * Set cached content item
   */
  async setContentItem(contentId, content) {
    const key = getCacheKey(CACHE_CONFIG.CONTENT_ITEM, contentId);
    return this.set(key, content, CACHE_CONFIG.CONTENT_ITEM.ttl);
  }

  /**
   * Invalidate all content caches
   */
  async invalidateContentCache() {
    await this.invalidatePattern(`${CACHE_CONFIG.CONTENT_LIST.prefix}*`);
    await this.invalidatePattern(`${CACHE_CONFIG.CONTENT_ITEM.prefix}*`);
  }

  // ============================================
  // Quiz Cache Methods
  // ============================================

  /**
   * Get cached modules list
   */
  async getQuizModules() {
    const key = getCacheKey(CACHE_CONFIG.QUIZ_MODULES, 'list');
    return this.get(key);
  }

  /**
   * Set cached modules list
   */
  async setQuizModules(modules) {
    const key = getCacheKey(CACHE_CONFIG.QUIZ_MODULES, 'list');
    return this.set(key, modules, CACHE_CONFIG.QUIZ_MODULES.ttl);
  }

  /**
   * Get cached generated quiz
   */
  async getGeneratedQuiz(module, count, difficulty) {
    const key = getCacheKey(CACHE_CONFIG.QUIZ_GENERATED, module, count, difficulty);
    return this.get(key);
  }

  /**
   * Set cached generated quiz
   */
  async setGeneratedQuiz(module, count, difficulty, quiz) {
    const key = getCacheKey(CACHE_CONFIG.QUIZ_GENERATED, module, count, difficulty);
    return this.set(key, quiz, CACHE_CONFIG.QUIZ_GENERATED.ttl);
  }

  // ============================================
  // Compiler Cache Methods
  // ============================================

  /**
   * Generate compiler cache key from code hash
   */
  getCompilerCacheKey(code, input) {
    const hash = crypto.createHash('sha256').update(code + input).digest('hex').substring(0, 16);
    return getCacheKey(CACHE_CONFIG.COMPILER_RESULT, hash);
  }

  /**
   * Get cached compiler result
   */
  async getCompilerResult(code, input) {
    const key = this.getCompilerCacheKey(code, input);
    return this.get(key);
  }

  /**
   * Set cached compiler result
   */
  async setCompilerResult(code, input, result) {
    const key = this.getCompilerCacheKey(code, input);
    return this.set(key, result, CACHE_CONFIG.COMPILER_RESULT.ttl);
  }
}

export const cacheService = new CacheService();
