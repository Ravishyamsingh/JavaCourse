import { User } from '../models.js';

export const getDashboardAnalytics = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;

    const dateFilter = {};
    if (startDate) dateFilter.$gte = new Date(startDate);
    if (endDate) dateFilter.$lte = new Date(endDate);

    const query = dateFilter ? { createdAt: dateFilter } : {};

    const [
      totalUsers,
      activeUsers,
      newUsersThisMonth,
      totalLessonsCompleted,
      totalQuizzesAttempted,
      averageScore,
      userEngagement,
      topPerformers
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ isActive: true }),
      User.countDocuments({
        createdAt: {
          $gte: new Date(new Date().setDate(1)),
          $lte: new Date()
        }
      }),
      User.aggregate([
        { $group: { _id: null, total: { $sum: { $size: '$progress.completedLessons' } } } }
      ]),
      User.aggregate([
        { $group: { _id: null, total: { $sum: { $size: '$progress.quizHistory' } } } }
      ]),
      User.aggregate([
        { $group: { _id: null, avg: { $avg: '$progress.totalScore' } } }
      ]),
      User.aggregate([
        {
          $group: {
            _id: null,
            activeCount: { $sum: { $cond: ['$isActive', 1, 0] } },
            totalCount: { $sum: 1 }
          }
        },
        {
          $project: {
            engagementRate: {
              $multiply: [{ $divide: ['$activeCount', '$totalCount'] }, 100]
            }
          }
        }
      ]),
      User.find()
        .select('firstName lastName email progress.totalScore')
        .sort({ 'progress.totalScore': -1 })
        .limit(10)
        .lean()
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          totalUsers,
          activeUsers,
          inactiveUsers: totalUsers - activeUsers,
          newUsersThisMonth
        },
        engagement: {
          totalLessonsCompleted: totalLessonsCompleted[0]?.total || 0,
          totalQuizzesAttempted: totalQuizzesAttempted[0]?.total || 0,
          averageScore: Math.round(averageScore[0]?.avg || 0),
          engagementRate: Math.round(userEngagement[0]?.engagementRate || 0)
        },
        topPerformers: topPerformers.map(user => ({
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          score: user.progress?.totalScore || 0
        }))
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getUserProgressAnalytics = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select('firstName lastName email progress')
      .lean();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const progressData = user.progress || {};

    const analytics = {
      user: {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email
      },
      learning: {
        lessonsCompleted: progressData.completedLessons?.length || 0,
        quizzesAttempted: progressData.quizHistory?.length || 0,
        certificatesEarned: progressData.certificatesEarned?.length || 0,
        totalScore: progressData.totalScore || 0,
        averageQuizScore: calculateAverageScore(progressData.quizHistory)
      },
      engagement: {
        studyStreak: progressData.studyStreak || 0,
        totalStudyTime: progressData.totalStudyTime || 0,
        lastActivityDate: progressData.lastCompletedAt,
        enrolledCourses: progressData.enrolledCourses?.length || 0
      },
      activityTrend: progressData.activityLog || [],
      quizPerformance: progressData.quizHistory || []
    };

    res.json({
      success: true,
      data: analytics
    });
  } catch (error) {
    next(error);
  }
};

export const getCourseAnalytics = async (req, res, next) => {
  try {
    const users = await User.find()
      .select('progress.enrolledCourses progress.completedLessons progress.totalScore')
      .lean();

    const courseStats = {};

    users.forEach(user => {
      if (user.progress?.enrolledCourses) {
        user.progress.enrolledCourses.forEach(courseId => {
          if (!courseStats[courseId]) {
            courseStats[courseId] = {
              enrollments: 0,
              completions: 0,
              totalScore: 0,
              averageScore: 0
            };
          }
          courseStats[courseId].enrollments += 1;
          courseStats[courseId].totalScore += user.progress.totalScore || 0;
        });
      }
    });

    Object.keys(courseStats).forEach(courseId => {
      const stats = courseStats[courseId];
      stats.averageScore = Math.round(stats.totalScore / stats.enrollments);
    });

    res.json({
      success: true,
      data: courseStats
    });
  } catch (error) {
    next(error);
  }
};

export const getCompletionRateAnalytics = async (req, res, next) => {
  try {
    const users = await User.find()
      .select('progress.completedLessons progress.enrolledCourses')
      .lean();

    const totalUsers = users.length;
    const usersWithProgress = users.filter(u => u.progress?.completedLessons?.length > 0).length;
    const completionRate = totalUsers > 0 ? Math.round((usersWithProgress / totalUsers) * 100) : 0;

    const lessonCompletionDistribution = {};
    users.forEach(user => {
      const completedCount = user.progress?.completedLessons?.length || 0;
      const range = Math.floor(completedCount / 10) * 10;
      const key = `${range}-${range + 9}`;
      lessonCompletionDistribution[key] = (lessonCompletionDistribution[key] || 0) + 1;
    });

    res.json({
      success: true,
      data: {
        completionRate,
        totalUsers,
        usersWithProgress,
        distribution: lessonCompletionDistribution
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getTimeSeriesAnalytics = async (req, res, next) => {
  try {
    const { days = 30 } = req.query;

    const users = await User.find()
      .select('progress.activityLog')
      .lean();

    const timeSeries = {};
    const now = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      timeSeries[dateKey] = {
        lessonsCompleted: 0,
        quizzesAttempted: 0,
        studyTime: 0,
        scoreEarned: 0
      };
    }

    users.forEach(user => {
      if (user.progress?.activityLog) {
        user.progress.activityLog.forEach(activity => {
          const dateKey = new Date(activity.date).toISOString().split('T')[0];
          if (timeSeries[dateKey]) {
            timeSeries[dateKey].lessonsCompleted += activity.lessonsCompleted || 0;
            timeSeries[dateKey].quizzesAttempted += activity.quizAttempts || 0;
            timeSeries[dateKey].studyTime += activity.studyTime || 0;
            timeSeries[dateKey].scoreEarned += activity.scoreEarned || 0;
          }
        });
      }
    });

    const sortedTimeSeries = Object.keys(timeSeries)
      .sort()
      .reduce((acc, key) => {
        acc[key] = timeSeries[key];
        return acc;
      }, {});

    res.json({
      success: true,
      data: sortedTimeSeries
    });
  } catch (error) {
    next(error);
  }
};

export const getPerformanceMetrics = async (req, res, next) => {
  try {
    const users = await User.find()
      .select('progress.quizHistory progress.totalScore')
      .lean();

    const metrics = {
      totalAttempts: 0,
      averageScore: 0,
      highestScore: 0,
      lowestScore: 100,
      scoreDistribution: {
        excellent: 0,
        good: 0,
        average: 0,
        poor: 0
      }
    };

    let totalScore = 0;

    users.forEach(user => {
      if (user.progress?.quizHistory) {
        user.progress.quizHistory.forEach(quiz => {
          metrics.totalAttempts += 1;
          totalScore += quiz.score || 0;
          metrics.highestScore = Math.max(metrics.highestScore, quiz.score || 0);
          metrics.lowestScore = Math.min(metrics.lowestScore, quiz.score || 0);

          const score = quiz.score || 0;
          if (score >= 80) metrics.scoreDistribution.excellent += 1;
          else if (score >= 60) metrics.scoreDistribution.good += 1;
          else if (score >= 40) metrics.scoreDistribution.average += 1;
          else metrics.scoreDistribution.poor += 1;
        });
      }
    });

    metrics.averageScore = metrics.totalAttempts > 0 ? Math.round(totalScore / metrics.totalAttempts) : 0;

    res.json({
      success: true,
      data: metrics
    });
  } catch (error) {
    next(error);
  }
};

function calculateAverageScore(quizHistory) {
  if (!quizHistory || quizHistory.length === 0) return 0;
  const totalScore = quizHistory.reduce((sum, quiz) => sum + (quiz.score || 0), 0);
  return Math.round(totalScore / quizHistory.length);
}
