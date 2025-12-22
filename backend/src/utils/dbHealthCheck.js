/**
 * Database Health Check Utility
 * Monitors database connection and performance
 */

import mongoose from 'mongoose';
import { logger } from './monitoring.js';

export class DatabaseHealthCheck {
  constructor() {
    this.lastCheckTime = null;
    this.connectionStatus = 'disconnected';
    this.metrics = {
      responseTime: 0,
      operationCount: 0,
      errorCount: 0
    };
  }

  /**
   * Check database connection status
   */
  async checkConnection() {
    try {
      const startTime = Date.now();
      
      // Perform a simple query to check connection
      await mongoose.connection.db.admin().ping();
      
      const responseTime = Date.now() - startTime;
      this.connectionStatus = 'connected';
      this.metrics.responseTime = responseTime;
      this.lastCheckTime = new Date();

      logger.info('Database health check passed', {
        responseTime,
        status: this.connectionStatus
      });

      return {
        status: 'healthy',
        connected: true,
        responseTime,
        timestamp: this.lastCheckTime
      };
    } catch (error) {
      this.connectionStatus = 'error';
      this.metrics.errorCount++;

      logger.error('Database health check failed', {
        error: error.message,
        status: this.connectionStatus
      });

      return {
        status: 'unhealthy',
        connected: false,
        error: error.message,
        timestamp: new Date()
      };
    }
  }

  /**
   * Get database statistics
   */
  async getStatistics() {
    try {
      const admin = mongoose.connection.db.admin();
      const stats = await admin.serverStatus();

      return {
        uptime: stats.uptime,
        connections: stats.connections,
        operations: stats.opcounters,
        memory: stats.mem,
        network: stats.network
      };
    } catch (error) {
      logger.error('Failed to get database statistics', { error: error.message });
      return null;
    }
  }

  /**
   * Get collection statistics
   */
  async getCollectionStats(collectionName) {
    try {
      const collection = mongoose.connection.collection(collectionName);
      const stats = await collection.stats();

      return {
        name: collectionName,
        count: stats.count,
        size: stats.size,
        avgObjSize: stats.avgObjSize,
        storageSize: stats.storageSize,
        indexes: stats.nindexes
      };
    } catch (error) {
      logger.error(`Failed to get stats for collection ${collectionName}`, {
        error: error.message
      });
      return null;
    }
  }

  /**
   * Monitor connection pool
   */
  getConnectionPoolStatus() {
    const connection = mongoose.connection;
    
    return {
      readyState: connection.readyState,
      readyStateString: this.getReadyStateString(connection.readyState),
      host: connection.host,
      port: connection.port,
      name: connection.name,
      collections: Object.keys(connection.collections).length
    };
  }

  /**
   * Convert readyState to string
   */
  getReadyStateString(state) {
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    return states[state] || 'unknown';
  }

  /**
   * Get full health report
   */
  async getFullHealthReport() {
    const connectionCheck = await this.checkConnection();
    const poolStatus = this.getConnectionPoolStatus();
    const stats = await this.getStatistics();

    return {
      timestamp: new Date().toISOString(),
      connection: connectionCheck,
      pool: poolStatus,
      statistics: stats,
      metrics: this.metrics
    };
  }
}

export const dbHealthCheck = new DatabaseHealthCheck();
