import mongoose from 'mongoose';

const { Schema, Types } = mongoose;

const AuditLogSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', index: true, required: true },
  action: { type: String, required: true },
  resource: { type: String, required: true },
  resourceId: { type: String },
  changes: { type: Schema.Types.Mixed },
  ipAddress: String,
  userAgent: String,
  status: { type: String, enum: ['success', 'failure'], default: 'success' },
  errorMessage: String,
  createdAt: { type: Date, default: Date.now, index: true }
}, { versionKey: false });

AuditLogSchema.index({ userId: 1, createdAt: -1 });
AuditLogSchema.index({ action: 1, createdAt: -1 });
AuditLogSchema.index({ resource: 1, createdAt: -1 });

const AdminPermissionSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  resource: { type: String, required: true },
  action: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

const AdminRoleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  permissions: [{ type: Types.ObjectId, ref: 'AdminPermission' }],
  isSystem: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const SystemSettingsSchema = new Schema({
  key: { type: String, required: true, unique: true },
  value: { type: Schema.Types.Mixed, required: true },
  type: { type: String, enum: ['string', 'number', 'boolean', 'json'], default: 'string' },
  description: String,
  updatedBy: { type: Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const NotificationTemplateSchema = new Schema({
  name: { type: String, required: true, unique: true },
  subject: String,
  body: String,
  type: { type: String, enum: ['email', 'sms', 'push'], required: true },
  variables: [String],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const BulkOperationSchema = new Schema({
  name: String,
  type: { type: String, enum: ['user_update', 'user_delete', 'content_publish', 'content_delete'], required: true },
  status: { type: String, enum: ['pending', 'processing', 'completed', 'failed'], default: 'pending' },
  totalItems: Number,
  processedItems: { type: Number, default: 0 },
  failedItems: { type: Number, default: 0 },
  filters: Schema.Types.Mixed,
  updates: Schema.Types.Mixed,
  createdBy: { type: Types.ObjectId, ref: 'User', required: true },
  startedAt: Date,
  completedAt: Date,
  errors: [String],
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false, suppressReservedKeysWarning: true });

BulkOperationSchema.index({ status: 1, createdAt: -1 });
BulkOperationSchema.index({ createdBy: 1, createdAt: -1 });

const AdminDashboardWidgetSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true },
  widgetType: { type: String, required: true },
  position: Number,
  settings: Schema.Types.Mixed,
  isVisible: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

AdminDashboardWidgetSchema.index({ userId: 1, position: 1 });

const SystemConfigSchema = new Schema({
  maintenanceMode: { type: Boolean, default: false },
  maxUploadSize: { type: Number, default: 10, min: 1, max: 1000 },
  sessionTimeout: { type: Number, default: 30, min: 5, max: 1440 },
  passwordExpiry: { type: Number, default: 90, min: 0, max: 365 },
  apiRateLimit: { type: Number, default: 1000, min: 100, max: 10000 },
  backupFrequency: { type: String, enum: ['hourly', 'daily', 'weekly', 'monthly'], default: 'daily' },
  enabledFeatures: [String],
  emailNotifications: { type: Boolean, default: true },
  twoFactorRequired: { type: Boolean, default: false },
  ipWhitelist: [String],
  lastUpdatedBy: { type: Types.ObjectId, ref: 'User' },
  lastUpdatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

SystemConfigSchema.index({ lastUpdatedAt: -1 });

const UserProgressSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
  lessonsCompleted: { type: Number, default: 0 },
  quizzesAttempted: { type: Number, default: 0 },
  quizzesPass: { type: Number, default: 0 },
  averageScore: { type: Number, default: 0, min: 0, max: 100 },
  certificatesEarned: { type: Number, default: 0 },
  studyStreak: { type: Number, default: 0 },
  totalStudyTime: { type: Number, default: 0 },
  lastActive: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

UserProgressSchema.index({ userId: 1, updatedAt: -1 });
UserProgressSchema.index({ createdAt: -1 });

const SystemMetricsHistorySchema = new Schema({
  cpuUsage: { type: Number, required: true, min: 0, max: 100 },
  memoryUsage: { type: Number, required: true, min: 0, max: 100 },
  diskUsage: { type: Number, required: true, min: 0, max: 100 },
  uptime: { type: Number, required: true },
  requestsPerSecond: { type: Number, required: true },
  errorRate: { type: Number, required: true, min: 0, max: 100 },
  responseTime: { type: Number, required: true },
  databaseConnections: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now, index: true, expires: 2592000 }
}, { versionKey: false });

SystemMetricsHistorySchema.index({ timestamp: -1 });

const GradingConfigSchema = new Schema({
  passingScore: { type: Number, default: 60, min: 0, max: 100 },
  excellentScore: { type: Number, default: 90, min: 0, max: 100 },
  goodScore: { type: Number, default: 75, min: 0, max: 100 },
  averageScore: { type: Number, default: 60, min: 0, max: 100 },
  poorScore: { type: Number, default: 40, min: 0, max: 100 },
  weightage: {
    quizzes: { type: Number, default: 50 },
    assignments: { type: Number, default: 30 },
    participation: { type: Number, default: 20 }
  },
  lastUpdatedBy: { type: Types.ObjectId, ref: 'User' },
  lastUpdatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

const SecurityAlertSchema = new Schema({
  type: { type: String, enum: ['warning', 'error', 'info'], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'medium' },
  resolved: { type: Boolean, default: false },
  resolvedAt: Date,
  resolvedBy: { type: Types.ObjectId, ref: 'User' },
  resolution: String,
  createdBy: { type: Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now, index: true }
}, { versionKey: false });

SecurityAlertSchema.index({ resolved: 1, createdAt: -1 });
SecurityAlertSchema.index({ severity: 1, createdAt: -1 });

const SystemHealthSchema = new Schema({
  cpuUsage: Number,
  memoryUsage: Number,
  diskUsage: Number,
  uptime: Number,
  requestsPerSecond: Number,
  errorRate: Number,
  responseTime: Number,
  databaseConnections: Number,
  timestamp: { type: Date, default: Date.now, index: true }
}, { versionKey: false });

SystemHealthSchema.index({ timestamp: -1 });

export const AuditLog = mongoose.model('AuditLog', AuditLogSchema);
export const AdminPermission = mongoose.model('AdminPermission', AdminPermissionSchema);
export const AdminRole = mongoose.model('AdminRole', AdminRoleSchema);
export const SystemSettings = mongoose.model('SystemSettings', SystemSettingsSchema);
export const NotificationTemplate = mongoose.model('NotificationTemplate', NotificationTemplateSchema);
export const BulkOperation = mongoose.model('BulkOperation', BulkOperationSchema);
export const AdminDashboardWidget = mongoose.model('AdminDashboardWidget', AdminDashboardWidgetSchema);
export const SystemConfig = mongoose.model('SystemConfig', SystemConfigSchema);
export const GradingConfig = mongoose.model('GradingConfig', GradingConfigSchema);
export const SecurityAlert = mongoose.model('SecurityAlert', SecurityAlertSchema);
export const SystemHealth = mongoose.model('SystemHealth', SystemHealthSchema);
export const UserProgress = mongoose.model('UserProgress', UserProgressSchema);
export const SystemMetricsHistory = mongoose.model('SystemMetricsHistory', SystemMetricsHistorySchema);
