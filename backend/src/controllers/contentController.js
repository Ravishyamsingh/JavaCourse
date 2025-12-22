import mongoose from 'mongoose';
import { cacheService } from '../services/cacheService.js';

const contentSchema = new mongoose.Schema({
  type: { type: String, enum: ['lesson', 'module', 'course'], required: true },
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  order: { type: Number },
  parentId: mongoose.Schema.Types.ObjectId,
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  duration: { type: Number },
  tags: [String],
  isPublished: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Content = mongoose.model('Content', contentSchema);

export const createContent = async (req, res, next) => {
  try {
    const { type, title, description, content, parentId, difficulty, duration, tags } = req.body;

    if (!type || !title) {
      return res.status(400).json({
        success: false,
        message: 'Type and title are required'
      });
    }

    const newContent = new Content({
      type,
      title,
      description,
      content,
      parentId,
      difficulty,
      duration,
      tags: tags || [],
      createdBy: req.user._id,
      updatedBy: req.user._id
    });

    await newContent.save();

    // Invalidate content cache when admin creates new content
    await cacheService.invalidateContentCache();

    res.status(201).json({
      success: true,
      message: 'Content created successfully',
      data: newContent
    });
  } catch (error) {
    next(error);
  }
};

export const updateContent = async (req, res, next) => {
  try {
    const { contentId } = req.params;
    const { title, description, content, difficulty, duration, tags, isPublished } = req.body;

    const contentItem = await Content.findById(contentId);
    if (!contentItem) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    if (title) contentItem.title = title;
    if (description) contentItem.description = description;
    if (content) contentItem.content = content;
    if (difficulty) contentItem.difficulty = difficulty;
    if (duration) contentItem.duration = duration;
    if (tags) contentItem.tags = tags;
    if (typeof isPublished === 'boolean') contentItem.isPublished = isPublished;

    contentItem.updatedBy = req.user._id;
    contentItem.updatedAt = new Date();

    await contentItem.save();

    // Invalidate content cache when admin updates content
    await cacheService.invalidateContentCache();

    res.json({
      success: true,
      message: 'Content updated successfully',
      data: contentItem
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContent = async (req, res, next) => {
  try {
    const { contentId } = req.params;

    const contentItem = await Content.findByIdAndDelete(contentId);
    if (!contentItem) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Invalidate content cache when admin deletes content
    await cacheService.invalidateContentCache();

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const getContent = async (req, res, next) => {
  try {
    const { contentId } = req.params;

    const contentItem = await Content.findById(contentId)
      .populate('createdBy', 'firstName lastName email')
      .populate('updatedBy', 'firstName lastName email');

    if (!contentItem) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    res.json({
      success: true,
      data: contentItem
    });
  } catch (error) {
    next(error);
  }
};

export const getAllContent = async (req, res, next) => {
  try {
    const { type, isPublished, page = 1, limit = 20, sortBy = 'createdAt', sortOrder = -1 } = req.query;

    const query = {};
    if (type) query.type = type;
    if (typeof isPublished === 'string') query.isPublished = isPublished === 'true';

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sort = { [sortBy]: parseInt(sortOrder) };

    const [content, total] = await Promise.all([
      Content.find(query)
        .populate('createdBy', 'firstName lastName')
        .populate('updatedBy', 'firstName lastName')
        .sort(sort)
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      Content.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: content,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get content by type - PUBLIC endpoint for non-admin users
 * Uses Redis caching for improved performance
 */
export const getContentByType = async (req, res, next) => {
  try {
    const { type } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // Try to get from Redis cache first
    const cachedContent = await cacheService.getContentByType(type, pageNum);
    if (cachedContent) {
      return res.json({
        ...cachedContent,
        cached: true
      });
    }

    const skip = (pageNum - 1) * limitNum;

    const [content, total] = await Promise.all([
      Content.find({ type, isPublished: true })
        .sort({ order: 1, createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .lean(),
      Content.countDocuments({ type, isPublished: true })
    ]);

    const responseData = {
      success: true,
      data: content,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        pages: Math.ceil(total / limitNum)
      }
    };

    // Cache the response (30 minute TTL)
    await cacheService.setContentByType(type, pageNum, responseData);

    res.json(responseData);
  } catch (error) {
    next(error);
  }
};

export const bulkUpdateContent = async (req, res, next) => {
  try {
    const { contentIds, updates } = req.body;

    if (!Array.isArray(contentIds) || contentIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid content IDs'
      });
    }

    updates.updatedBy = req.user._id;
    updates.updatedAt = new Date();

    const result = await Content.updateMany(
      { _id: { $in: contentIds } },
      { $set: updates }
    );

    res.json({
      success: true,
      message: `Updated ${result.modifiedCount} content items`,
      data: {
        matched: result.matchedCount,
        modified: result.modifiedCount
      }
    });
  } catch (error) {
    next(error);
  }
};

export const reorderContent = async (req, res, next) => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items)) {
      return res.status(400).json({
        success: false,
        message: 'Items must be an array'
      });
    }

    const updates = items.map((item, index) =>
      Content.findByIdAndUpdate(item.id, { order: index }, { new: true })
    );

    await Promise.all(updates);

    res.json({
      success: true,
      message: 'Content reordered successfully'
    });
  } catch (error) {
    next(error);
  }
};
