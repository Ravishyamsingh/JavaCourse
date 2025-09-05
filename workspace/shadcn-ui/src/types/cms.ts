// CMS Core Types and Interfaces

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: UserRole;
  provider: 'local' | 'google';
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  permissions: Permission[];
}

export enum UserRole {
  STUDENT = 'student',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin'
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  conditions?: Record<string, any>;
}

// Content Management Types
export interface Course {
  id: string;
  title: string;
  description: string;
  slug: string;
  thumbnail?: string;
  status: ContentStatus;
  visibility: ContentVisibility;
  instructorId: string;
  modules: Module[];
  tags: string[];
  difficulty: DifficultyLevel;
  estimatedDuration: number; // in hours
  prerequisites: string[];
  learningObjectives: string[];
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  version: number;
  seoData: SEOData;
}

export interface Module {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  status: ContentStatus;
  estimatedDuration: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  content: LessonContent;
  type: LessonType;
  order: number;
  status: ContentStatus;
  estimatedDuration: number;
  resources: Resource[];
  assignments: Assignment[];
  quizzes: Quiz[];
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export interface LessonContent {
  id: string;
  lessonId: string;
  content: string; // Rich text content
  codeExamples: CodeExample[];
  mediaFiles: MediaFile[];
  interactiveElements: InteractiveElement[];
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CodeExample {
  id: string;
  title: string;
  language: string;
  code: string;
  explanation?: string;
  isExecutable: boolean;
  expectedOutput?: string;
}

export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  alt?: string;
  caption?: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface InteractiveElement {
  id: string;
  type: 'quiz' | 'code_editor' | 'drag_drop' | 'matching' | 'fill_blank';
  config: Record<string, any>;
  order: number;
}

// Assignment Types
export interface Assignment {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  instructions: string;
  type: AssignmentType;
  maxScore: number;
  dueDate?: Date;
  allowLateSubmission: boolean;
  latePenalty?: number;
  rubric?: Rubric;
  resources: Resource[];
  submissions: Submission[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  content: string;
  attachments: MediaFile[];
  submittedAt: Date;
  status: SubmissionStatus;
  score?: number;
  feedback?: string;
  gradedBy?: string;
  gradedAt?: Date;
  attempts: number;
}

export interface Rubric {
  id: string;
  criteria: RubricCriterion[];
  totalPoints: number;
}

export interface RubricCriterion {
  id: string;
  name: string;
  description: string;
  maxPoints: number;
  levels: RubricLevel[];
}

export interface RubricLevel {
  id: string;
  name: string;
  description: string;
  points: number;
}

// Quiz Types
export interface Quiz {
  id: string;
  lessonId?: string;
  title: string;
  description: string;
  instructions: string;
  questions: Question[];
  timeLimit?: number; // in minutes
  maxAttempts: number;
  passingScore: number;
  showCorrectAnswers: boolean;
  randomizeQuestions: boolean;
  randomizeAnswers: boolean;
  status: ContentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Question {
  id: string;
  quizId: string;
  type: QuestionType;
  question: string;
  explanation?: string;
  points: number;
  order: number;
  options?: QuestionOption[];
  correctAnswer: string | string[];
  codeSnippet?: string;
  mediaFiles: MediaFile[];
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  studentId: string;
  answers: QuizAnswer[];
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  startedAt: Date;
  completedAt?: Date;
  timeSpent: number; // in seconds
  attemptNumber: number;
}

export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect: boolean;
  points: number;
}

// Discussion Forum Types
export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  order: number;
  isActive: boolean;
  moderators: string[];
  topics: ForumTopic[];
}

export interface ForumTopic {
  id: string;
  categoryId: string;
  title: string;
  content: string;
  authorId: string;
  isPinned: boolean;
  isLocked: boolean;
  views: number;
  replies: ForumReply[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  lastReplyAt?: Date;
}

export interface ForumReply {
  id: string;
  topicId: string;
  content: string;
  authorId: string;
  parentReplyId?: string;
  likes: number;
  likedBy: string[];
  isModerated: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, any>;
  isRead: boolean;
  priority: NotificationPriority;
  channels: NotificationChannel[];
  createdAt: Date;
  readAt?: Date;
  expiresAt?: Date;
}

// Analytics Types
export interface AnalyticsEvent {
  id: string;
  userId?: string;
  sessionId: string;
  eventType: string;
  eventData: Record<string, any>;
  timestamp: Date;
  userAgent?: string;
  ipAddress?: string;
  courseId?: string;
  lessonId?: string;
}

export interface StudentProgress {
  id: string;
  studentId: string;
  courseId: string;
  completedLessons: string[];
  completedQuizzes: string[];
  completedAssignments: string[];
  totalTimeSpent: number; // in minutes
  lastAccessedAt: Date;
  progressPercentage: number;
  achievements: Achievement[];
  certificates: Certificate[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: Record<string, any>;
  earnedAt: Date;
  points: number;
}

export interface Certificate {
  id: string;
  studentId: string;
  courseId: string;
  templateId: string;
  certificateNumber: string;
  issuedAt: Date;
  validUntil?: Date;
  verificationCode: string;
  metadata: Record<string, any>;
}

// Resource Types
export interface Resource {
  id: string;
  title: string;
  description?: string;
  type: ResourceType;
  url?: string;
  file?: MediaFile;
  content?: string;
  isDownloadable: boolean;
  accessLevel: AccessLevel;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// SEO Types
export interface SEOData {
  title?: string;
  description?: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

// Enums
export enum ContentStatus {
  DRAFT = 'draft',
  REVIEW = 'review',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

export enum ContentVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
  UNLISTED = 'unlisted'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  EXPERT = 'expert'
}

export enum LessonType {
  LESSON = 'lesson',
  TUTORIAL = 'tutorial',
  CODING = 'coding',
  PROJECT = 'project',
  ASSESSMENT = 'assessment'
}

export enum AssignmentType {
  ESSAY = 'essay',
  CODE = 'code',
  PROJECT = 'project',
  QUIZ = 'quiz',
  PEER_REVIEW = 'peer_review'
}

export enum SubmissionStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  GRADED = 'graded',
  RETURNED = 'returned'
}

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  MULTIPLE_SELECT = 'multiple_select',
  TRUE_FALSE = 'true_false',
  SHORT_ANSWER = 'short_answer',
  ESSAY = 'essay',
  CODE = 'code',
  FILL_BLANK = 'fill_blank',
  MATCHING = 'matching',
  ORDERING = 'ordering'
}

export enum NotificationType {
  SYSTEM = 'system',
  COURSE = 'course',
  ASSIGNMENT = 'assignment',
  QUIZ = 'quiz',
  FORUM = 'forum',
  ACHIEVEMENT = 'achievement',
  REMINDER = 'reminder'
}

export enum NotificationPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum NotificationChannel {
  IN_APP = 'in_app',
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push'
}

export enum ResourceType {
  DOCUMENT = 'document',
  VIDEO = 'video',
  AUDIO = 'audio',
  IMAGE = 'image',
  LINK = 'link',
  CODE = 'code',
  DATASET = 'dataset'
}

export enum AccessLevel {
  PUBLIC = 'public',
  ENROLLED = 'enrolled',
  PREMIUM = 'premium',
  INSTRUCTOR = 'instructor',
  ADMIN = 'admin'
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Form Types
export interface CMSFormData {
  [key: string]: any;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Search and Filter Types
export interface SearchFilters {
  query?: string;
  status?: ContentStatus[];
  visibility?: ContentVisibility[];
  difficulty?: DifficultyLevel[];
  tags?: string[];
  instructorId?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  facets?: Record<string, any>;
  suggestions?: string[];
}