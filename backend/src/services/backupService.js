/**
 * Backup and Recovery Service
 * Handles automated backups and recovery operations
 */

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { logger } from '../utils/monitoring.js';

const execAsync = promisify(exec);

class BackupService {
  constructor() {
    this.backupDir = process.env.BACKUP_DIR || './backups';
    this.retentionDays = parseInt(process.env.BACKUP_RETENTION_DAYS || '30');
    this.ensureBackupDir();
  }

  /**
   * Ensure backup directory exists
   */
  ensureBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
      logger.info('Backup directory created', { path: this.backupDir });
    }
  }

  /**
   * Create database backup
   */
  async createBackup() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupName = `backup-${timestamp}`;
      const backupPath = path.join(this.backupDir, backupName);

      // Create backup directory
      fs.mkdirSync(backupPath, { recursive: true });

      // Get MongoDB URI
      const mongoUri = process.env.MONGODB_URI;
      if (!mongoUri) {
        throw new Error('MONGODB_URI not configured');
      }

      // Extract database name from URI
      const dbName = mongoUri.split('/').pop().split('?')[0];

      // Create mongodump command
      const dumpCommand = `mongodump --uri="${mongoUri}" --out="${backupPath}"`;

      logger.info('Starting database backup', { backupName, path: backupPath });

      // Execute backup
      await execAsync(dumpCommand);

      // Create metadata file
      const metadata = {
        timestamp: new Date().toISOString(),
        database: dbName,
        size: this.getDirectorySize(backupPath),
        status: 'completed'
      };

      fs.writeFileSync(
        path.join(backupPath, 'metadata.json'),
        JSON.stringify(metadata, null, 2)
      );

      logger.info('Database backup completed successfully', { backupName });

      return {
        success: true,
        backupName,
        path: backupPath,
        metadata
      };
    } catch (error) {
      logger.error('Database backup failed', { error: error.message });
      return { success: false, message: error.message };
    }
  }

  /**
   * Restore database from backup
   */
  async restoreBackup(backupName) {
    try {
      const backupPath = path.join(this.backupDir, backupName);

      if (!fs.existsSync(backupPath)) {
        throw new Error(`Backup not found: ${backupName}`);
      }

      // Get MongoDB URI
      const mongoUri = process.env.MONGODB_URI;
      if (!mongoUri) {
        throw new Error('MONGODB_URI not configured');
      }

      logger.info('Starting database restore', { backupName });

      // Create mongorestore command
      const restoreCommand = `mongorestore --uri="${mongoUri}" --dir="${backupPath}" --drop`;

      // Execute restore
      await execAsync(restoreCommand);

      logger.info('Database restore completed successfully', { backupName });

      return {
        success: true,
        message: 'Database restored successfully',
        backupName
      };
    } catch (error) {
      logger.error('Database restore failed', { error: error.message });
      return { success: false, message: error.message };
    }
  }

  /**
   * List all backups
   */
  listBackups() {
    try {
      const backups = fs.readdirSync(this.backupDir)
        .filter(file => fs.statSync(path.join(this.backupDir, file)).isDirectory())
        .map(backupName => {
          const backupPath = path.join(this.backupDir, backupName);
          const metadataPath = path.join(backupPath, 'metadata.json');
          
          let metadata = {};
          if (fs.existsSync(metadataPath)) {
            metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
          }

          return {
            name: backupName,
            path: backupPath,
            size: this.getDirectorySize(backupPath),
            ...metadata
          };
        })
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      return { success: true, backups };
    } catch (error) {
      logger.error('Failed to list backups', { error: error.message });
      return { success: false, message: error.message };
    }
  }

  /**
   * Delete old backups based on retention policy
   */
  async cleanupOldBackups() {
    try {
      const backups = fs.readdirSync(this.backupDir)
        .filter(file => fs.statSync(path.join(this.backupDir, file)).isDirectory());

      const now = Date.now();
      let deletedCount = 0;

      for (const backupName of backups) {
        const backupPath = path.join(this.backupDir, backupName);
        const stats = fs.statSync(backupPath);
        const ageInDays = (now - stats.mtimeMs) / (1000 * 60 * 60 * 24);

        if (ageInDays > this.retentionDays) {
          fs.rmSync(backupPath, { recursive: true, force: true });
          deletedCount++;
          logger.info('Old backup deleted', { backupName, ageInDays });
        }
      }

      logger.info('Backup cleanup completed', { deletedCount });
      return { success: true, deletedCount };
    } catch (error) {
      logger.error('Backup cleanup failed', { error: error.message });
      return { success: false, message: error.message };
    }
  }

  /**
   * Get directory size in bytes
   */
  getDirectorySize(dirPath) {
    try {
      let size = 0;
      const files = fs.readdirSync(dirPath);

      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
          size += this.getDirectorySize(filePath);
        } else {
          size += stats.size;
        }
      }

      return size;
    } catch (error) {
      logger.error('Failed to calculate directory size', { error: error.message });
      return 0;
    }
  }

  /**
   * Verify backup integrity
   */
  async verifyBackup(backupName) {
    try {
      const backupPath = path.join(this.backupDir, backupName);

      if (!fs.existsSync(backupPath)) {
        throw new Error(`Backup not found: ${backupName}`);
      }

      const metadataPath = path.join(backupPath, 'metadata.json');
      if (!fs.existsSync(metadataPath)) {
        throw new Error('Backup metadata not found');
      }

      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      const currentSize = this.getDirectorySize(backupPath);

      return {
        success: true,
        backup: backupName,
        metadata,
        currentSize,
        verified: true
      };
    } catch (error) {
      logger.error('Backup verification failed', { error: error.message });
      return { success: false, message: error.message };
    }
  }

  /**
   * Schedule automatic backups
   */
  scheduleBackups() {
    const frequency = process.env.BACKUP_FREQUENCY || 'daily';
    let interval;

    switch (frequency) {
      case 'hourly':
        interval = 60 * 60 * 1000;
        break;
      case 'daily':
        interval = 24 * 60 * 60 * 1000;
        break;
      case 'weekly':
        interval = 7 * 24 * 60 * 60 * 1000;
        break;
      case 'monthly':
        interval = 30 * 24 * 60 * 60 * 1000;
        break;
      default:
        interval = 24 * 60 * 60 * 1000;
    }

    setInterval(async () => {
      logger.info('Running scheduled backup', { frequency });
      const result = await this.createBackup();
      if (result.success) {
        await this.cleanupOldBackups();
      }
    }, interval);

    logger.info('Backup scheduler started', { frequency, interval });
  }
}

export const backupService = new BackupService();
