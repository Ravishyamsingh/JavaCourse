/**
 * Advanced Analytics Service
 * Provides comprehensive analytics and reporting
 */

import { User } from '../models.js';
import { UserProgress } from '../models/AdminModels.js';
import { logger } from '../utils/monitoring.js';

class AnalyticsService {
  /**
   * Get user engagement metrics
   */
  async getUserEngagementMetrics() {
    try {
      const totalUsers = await User.countDocuments();
      const activeUsers = await User.countDocuments({ isActive: true });
      const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const activeLastWeek = await User.countDocuments({
        isActive: true,
        lastLogin: { $gte: lastWeek }
      });

      return {
        totalUsers,
        activeUsers,
        activeLastWeek,
        engagementRate: ((activeUsers / totalUsers) * 100).toFixed(2),
        weeklyEngagementRate: ((activeLastWeek / totalUsers) * 100).toFixed(2)
      };
    } catch (error) {
      logger.error('Failed to get user engagement metrics', { error: error.message });
      return null;
    }
  }

  /**
   * Get course completion rates
   */
  async getCourseCompletionRates() {
    try {
      const completionData = await UserProgress.aggregate([
        {
          $group: {
            _id: null,
            totalUsers: { $sum: 1 },
            completedLessons: { $sum: '$lessonsCompleted' },
            passedQuizzes: { $sum: '$quizzesPass' },
            certificatesEarned: { $sum: '$certificatesEarned' }
          }
        }
      ]);

      if (completionData.length === 0) {
        return {
          completionRate: 0,
          quizPassRate: 0,
          certificateRate: 0
        };
      }

      const data = completionData[0];
      return {
        completionRate: ((data.completedLessons / (data.totalUsers * 10)) * 100).toFixed(2),
        quizPassRate: ((data.passedQuizzes / (data.totalUsers * 5)) * 100).toFixed(2),
        certificateRate: ((data.certificatesEarned / data.totalUsers) * 100).toFixed(2)
      };
    } catch (error) {
      logger.error('Failed to get course completion rates', { error: error.message });
      return null;
    }
  }

  /**
   * Get performance trends
   */
  async getPerformanceTrends(days = 30) {
    try {
      const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

      const trends = await UserProgress.aggregate([
        {
          $match: {
            updatedAt: { $gte: startDate }
          }
        },
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$updatedAt' }
            },
            avgScore: { $avg: '$averageScore' },
            totalLessons: { $sum: '$lessonsCompleted' },
            totalQuizzes: { $sum: '$quizzesAttempted' },
            userCount: { $sum: 1 }
          }
        },
        {
          $sort: { _id: 1 }
        }
      ]);

      return trends;
    } catch (error) {
      logger.error('Failed to get performance trends', { error: error.message });
      return [];
    }
  }

  /**
   * Get user demographics
   */
  async getUserDemographics() {
    try {
      const roleDistribution = await User.aggregate([
        {
          $group: {
            _id: '$role',
            count: { $sum: 1 }
          }
        }
      ]);

      const statusDistribution = await User.aggregate([
        {
          $group: {
            _id: '$isActive',
            count: { $sum: 1 }
          }
        }
      ]);

      return {
        roleDistribution,
        statusDistribution
      };
    } catch (error) {
      logger.error('Failed to get user demographics', { error: error.message });
      return null;
    }
  }

  /**
   * Get top performers
   */
  async getTopPerformers(limit = 10) {
    try {
      const topPerformers = await UserProgress.find()
        .sort({ averageScore: -1 })
        .limit(limit)
        .populate('userId', 'firstName lastName email')
        .lean();

      return topPerformers;
    } catch (error) {
      logger.error('Failed to get top performers', { error: error.message });
      return [];
    }
  }

  /**
   * Get learning paths analysis
   */
  async getLearningPathsAnalysis() {
    try {
      const analysis = await UserProgress.aggregate([
        {
          $group: {
            _id: null,
            avgLessonsCompleted: { $avg: '$lessonsCompleted' },
            avgQuizzesAttempted: { $avg: '$quizzesAttempted' },
            avgStudyTime: { $avg: '$totalStudyTime' },
            avgStreak: { $avg: '$studyStreak' }
          }
        }
      ]);

      return analysis[0] || {};
    } catch (error) {
      logger.error('Failed to get learning paths analysis', { error: error.message });
      return {};
    }
  }

  /**
   * Get retention metrics
   */
  async getRetentionMetrics() {
    try {
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      const sixtyDaysAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);

      const activeThirtyDays = await User.countDocuments({
        lastLogin: { $gte: thirtyDaysAgo }
      });

      const activeSixtyDays = await User.countDocuments({
        lastLogin: { $gte: sixtyDaysAgo }
      });

      const totalUsers = await User.countDocuments();

      return {
        thirtyDayRetention: ((activeThirtyDays / totalUsers) * 100).toFixed(2),
        sixtyDayRetention: ((activeSixtyDays / totalUsers) * 100).toFixed(2)
      };
    } catch (error) {
      logger.error('Failed to get retention metrics', { error: error.message });
      return null;
    }
  }

  /**
   * Generate comprehensive analytics report
   */
  async generateComprehensiveReport() {
    try {
      const [
        engagement,
        completion,
        trends,
        demographics,
        topPerformers,
        learningPaths,
        retention
      ] = await Promise.all([
        this.getUserEngagementMetrics(),
        this.getCourseCompletionRates(),
        this.getPerformanceTrends(),
        this.getUserDemographics(),
        this.getTopPerformers(),
        this.getLearningPathsAnalysis(),
        this.getRetentionMetrics()
      ]);

      return {
        timestamp: new Date().toISOString(),
        engagement,
        completion,
        trends,
        demographics,
        topPerformers,
        learningPaths,
        retention
      };
    } catch (error) {
      logger.error('Failed to generate comprehensive report', { error: error.message });
      return null;
    }
  }

  /**
   * Export analytics to CSV
   */
  async exportAnalyticsToCSV(data) {
    try {
      let csv = 'Analytics Report\n';
      csv += `Generated: ${new Date().toISOString()}\n\n`;

      // Engagement metrics
      csv += 'User Engagement Metrics\n';
      csv += 'Total Users,Active Users,Active Last Week,Engagement Rate,Weekly Engagement Rate\n';
      csv += `${data.engagement.totalUsers},${data.engagement.activeUsers},${data.engagement.activeLastWeek},${data.engagement.engagementRate}%,${data.engagement.weeklyEngagementRate}%\n\n`;

      // Completion rates
      csv += 'Course Completion Rates\n';
      csv += 'Completion Rate,Quiz Pass Rate,Certificate Rate\n';
      csv += `${data.completion.completionRate}%,${data.completion.quizPassRate}%,${data.completion.certificateRate}%\n\n`;

      // Retention metrics
      csv += 'Retention Metrics\n';
      csv += '30-Day Retention,60-Day Retention\n';
      csv += `${data.retention.thirtyDayRetention}%,${data.retention.sixtyDayRetention}%\n`;

      return csv;
    } catch (error) {
      logger.error('Failed to export analytics to CSV', { error: error.message });
      return null;
    }
  }
}

export const analyticsService = new AnalyticsService();
