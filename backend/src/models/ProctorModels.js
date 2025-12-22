import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

const ProctorEventSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', index: true, required: true },
  testId: { type: String, index: true, required: true },
  sessionId: { type: String, index: true, required: true },
  eventIdempotencyKey: { type: String },
  type: { type: String, required: true, index: true },
  details: { type: Schema.Types.Mixed },
  ip: String,
  userAgent: String,
  severity: { type: String, enum: ['info', 'warning', 'critical'], default: 'info' },
  processed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now, index: true },
}, { versionKey: false });

ProctorEventSchema.index({ userId: 1, testId: 1, createdAt: -1 });
ProctorEventSchema.index({ eventIdempotencyKey: 1 }, { unique: true, partialFilterExpression: { eventIdempotencyKey: { $type: 'string' }}});
ProctorEventSchema.index({ type: 1, createdAt: -1 });
ProctorEventSchema.index({ severity: 1, processed: 1 });

const ProctorSessionSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', index: true, required: true },
  testId: { type: String, index: true, required: true },
  sessionId: { type: String, index: true, required: true, unique: true },
  startedAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
  status: { type: String, enum: ['not_started', 'in_progress', 'submitted', 'auto_submitted', 'aborted', 'interrupted', 'resumable'], default: 'not_started', index: true },
  warningsCount: { type: Number, default: 0 },
  violationsCount: { type: Number, default: 0 },
  lastSeenAt: { type: Date, default: Date.now },
  meta: { type: Schema.Types.Mixed },
  totalQuestions: { type: Number, default: 0 },
  completedQuestions: { type: Number, default: 0 },
  totalViolations: { type: Number, default: 0 },
  // Resume support fields
  resumeToken: { type: String, index: true },
  resumeExpiresAt: { type: Date },
  resumeAllowedBy: { type: Types.ObjectId, ref: 'User' }, // Admin who allowed resume
  resumeReason: { type: String },
  currentQuestionId: { type: String }, // Track where user left off
  savedProgress: {
    answers: { type: Schema.Types.Mixed }, // { questionId: { code, output, completed, attempts } }
    lastSavedAt: { type: Date }
  },
  submissionData: {
    questionsData: [{ type: Schema.Types.Mixed }],
    submittedAt: { type: Date },
    auto: { type: Boolean, default: false }
  }
}, { versionKey: false });

ProctorSessionSchema.index({ userId: 1, testId: 1, sessionId: 1 }, { unique: true });
ProctorSessionSchema.index({ userId: 1, status: 1 });
ProctorSessionSchema.index({ status: 1, endedAt: 1 });

const QuestionProgressSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', index: true, required: true },
  testId: { type: String, index: true, required: true },
  sessionId: { type: String, index: true, required: true },
  questionId: { type: String, index: true, required: true },
  code: { type: String },
  output: { type: String },
  completed: { type: Boolean, default: false },
  attempts: { type: Number, default: 0 },
  lastRunAt: { type: Date },
  timeSpentMs: { type: Number, default: 0 },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'easy' }
}, { timestamps: true, versionKey: false });

QuestionProgressSchema.index({ userId: 1, testId: 1, sessionId: 1, questionId: 1 }, { unique: true });
QuestionProgressSchema.index({ completed: 1, userId: 1 });

const TestLifecycleSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', index: true, required: true },
  testId: { type: String, index: true, required: true },
  sessionId: { type: String, index: true, required: true },
  actions: [{
    type: { type: String, required: true },
    at: { type: Date, default: Date.now },
    details: { type: Schema.Types.Mixed },
  }],
  createdAt: { type: Date, default: Date.now },
}, { versionKey: false });

TestLifecycleSchema.index({ userId: 1, testId: 1, sessionId: 1 }, { unique: true });

export const ProctorEvent = mongoose.model('ProctorEvent', ProctorEventSchema);
export const ProctorSession = mongoose.model('ProctorSession', ProctorSessionSchema);
export const QuestionProgress = mongoose.model('QuestionProgress', QuestionProgressSchema);
export const TestLifecycle = mongoose.model('TestLifecycle', TestLifecycleSchema);
