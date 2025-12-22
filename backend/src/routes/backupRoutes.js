/**
 * Backup and Recovery Routes
 * Handles backup creation, restoration, and management
 */

import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { authorize } from '../middleware/rbac.js';
import { backupService } from '../services/backupService.js';
import { logger } from '../utils/monitoring.js';

const router = express.Router();

/**
 * Create backup (SuperAdmin only)
 */
router.post('/create', authMiddleware, authorize({ roles: ['superadmin'] }), async (req, res, next) => {
  try {
    const result = await backupService.createBackup();
    
    if (result.success) {
      logger.info('Backup created by admin', { userId: req.user._id, backupName: result.backupName });
      res.json({
        success: true,
        message: 'Backup created successfully',
        data: result
      });
    } else {
      res.status(500).json({
        success: false,
        message: result.message
      });
    }
  } catch (error) {
    logger.error('Backup creation error', { error: error.message });
    next(error);
  }
});

/**
 * List all backups (SuperAdmin only)
 */
router.get('/list', authMiddleware, authorize({ roles: ['superadmin'] }), async (req, res, next) => {
  try {
    const result = backupService.listBackups();
    
    res.json({
      success: result.success,
      data: result.backups || [],
      message: result.message
    });
  } catch (error) {
    logger.error('Backup list error', { error: error.message });
    next(error);
  }
});

/**
 * Restore backup (SuperAdmin only)
 */
router.post('/restore/:backupName', authMiddleware, authorize({ roles: ['superadmin'] }), async (req, res, next) => {
  try {
    const { backupName } = req.params;

    if (!backupName) {
      return res.status(400).json({
        success: false,
        message: 'Backup name is required'
      });
    }

    // Require confirmation
    if (!req.body.confirmed) {
      return res.status(400).json({
        success: false,
        message: 'Restore operation requires confirmation',
        requiresConfirmation: true
      });
    }

    const result = await backupService.restoreBackup(backupName);
    
    if (result.success) {
      logger.warn('Database restored by admin', { userId: req.user._id, backupName });
      res.json({
        success: true,
        message: result.message,
        data: result
      });
    } else {
      res.status(500).json({
        success: false,
        message: result.message
      });
    }
  } catch (error) {
    logger.error('Backup restore error', { error: error.message });
    next(error);
  }
});

/**
 * Verify backup (SuperAdmin only)
 */
router.get('/verify/:backupName', authMiddleware, authorize({ roles: ['superadmin'] }), async (req, res, next) => {
  try {
    const { backupName } = req.params;

    if (!backupName) {
      return res.status(400).json({
        success: false,
        message: 'Backup name is required'
      });
    }

    const result = await backupService.verifyBackup(backupName);
    
    res.json({
      success: result.success,
      data: result,
      message: result.message
    });
  } catch (error) {
    logger.error('Backup verification error', { error: error.message });
    next(error);
  }
});

/**
 * Cleanup old backups (SuperAdmin only)
 */
router.post('/cleanup', authMiddleware, authorize({ roles: ['superadmin'] }), async (req, res, next) => {
  try {
    const result = await backupService.cleanupOldBackups();
    
    if (result.success) {
      logger.info('Backup cleanup executed by admin', { userId: req.user._id, deletedCount: result.deletedCount });
      res.json({
        success: true,
        message: `${result.deletedCount} old backups deleted`,
        data: result
      });
    } else {
      res.status(500).json({
        success: false,
        message: result.message
      });
    }
  } catch (error) {
    logger.error('Backup cleanup error', { error: error.message });
    next(error);
  }
});

export default router;
