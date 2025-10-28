// backend/src/controllers/progressController.js
import User from '../models.js';

export const getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({
      success: true,
      progress: user.progress || {},
      achievements: user.progress?.achievements || []
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch progress' });
  }
};

export const updateUserProgress = async (req, res) => {
  try {
    const { completedLessons, achievements, studyStreak, totalStudyTime } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    user.progress = {
      ...user.progress,
      completedLessons,
      achievements,
      studyStreak,
      totalStudyTime
    };
    await user.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update progress' });
  }
};
