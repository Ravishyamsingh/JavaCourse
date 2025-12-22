/**
 * Admin Backend Configuration
 * Centralized configuration for all admin-related constants
 */

export const ADMIN_BACKEND_CONFIG = {
  // User Roles
  USER_ROLES: {
    GUEST: 'guest',
    USER: 'user',
    ADMIN: 'admin',
    SUPER_ADMIN: 'superadmin'
  },

  // Pagination Defaults
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 20,
    MAX_LIMIT: 100,
    MIN_LIMIT: 1
  },

  // Password Requirements
  PASSWORD: {
    MIN_LENGTH: 8,
    SALT_ROUNDS: 12
  },

  // System Logs
  SYSTEM_LOGS: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 50,
    MAX_LIMIT: 200
  },

  // Dashboard Stats
  DASHBOARD: {
    RECENT_USERS_LIMIT: 10,
    STATS_CACHE_TTL: 300000 // 5 minutes
  },

  // Report Templates
  REPORT_TEMPLATES: {
    STUDENT_PROGRESS: ['name', 'email', 'lessonsCompleted', 'totalScore'],
    ENGAGEMENT: ['name', 'email', 'studyStreak', 'totalStudyTime', 'lastLogin'],
    PERFORMANCE: ['name', 'email', 'totalScore', 'certificatesEarned', 'quizzesAttempted'],
    ENROLLMENT: ['name', 'email', 'role', 'joinedDate', 'isActive'],
    FULL: ['name', 'email', 'role', 'lessonsCompleted', 'quizzesAttempted', 'totalScore', 'certificatesEarned', 'studyStreak', 'totalStudyTime', 'joinedDate', 'lastLogin']
  },

  // CSV Export Configuration
  CSV: {
    CHARSET: 'utf-8',
    DELIMITER: ',',
    QUOTE_CHAR: '"',
    ESCAPE_CHAR: '"'
  },

  // Error Messages
  ERRORS: {
    INVALID_ROLE: 'Invalid role. Must be one of: user, admin, superadmin',
    USER_NOT_FOUND: 'User not found',
    EMAIL_EXISTS: 'Email already exists',
    MISSING_FIELDS: 'Missing required fields',
    INVALID_PASSWORD: 'Password must be at least 8 characters',
    CANNOT_DELETE_SELF: 'Cannot delete your own account',
    CANNOT_DEMOTE_SELF: 'Cannot demote yourself from superadmin role',
    INVALID_PERMISSIONS: 'Invalid permission structure. Each permission must have resource and actions array',
    PERMISSIONS_REQUIRED: 'Permissions array is required',
    RESOURCES_REQUIRED: 'Resources array is required',
    INVALID_USER_IDS: 'Invalid user IDs',
    INVALID_PARAMETERS: 'Invalid request parameters'
  },

  // Success Messages
  SUCCESS: {
    USER_CREATED: 'User created successfully',
    USER_UPDATED: 'User updated successfully',
    USER_DELETED: 'User deleted successfully',
    PASSWORD_RESET: 'Password reset successfully',
    ROLE_UPDATED: 'User role updated successfully',
    PERMISSIONS_GRANTED: 'Permissions granted successfully',
    PERMISSIONS_REVOKED: 'Permissions revoked successfully',
    USERS_UPDATED: 'Users updated successfully'
  },

  // HTTP Status Codes
  HTTP_STATUS: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_ERROR: 500
  },

  // Audit Log Actions
  AUDIT_ACTIONS: {
    CREATE_USER: 'CREATE_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'DELETE_USER',
    RESET_PASSWORD: 'RESET_PASSWORD',
    UPDATE_ROLE: 'UPDATE_ROLE',
    GRANT_PERMISSIONS: 'GRANT_PERMISSIONS',
    REVOKE_PERMISSIONS: 'REVOKE_PERMISSIONS'
  },

  // Audit Log Resources
  AUDIT_RESOURCES: {
    USER: 'USER',
    PERMISSION: 'PERMISSION',
    SYSTEM: 'SYSTEM'
  },

  // Field Selection for Queries
  FIELD_SELECTION: {
    USER_PUBLIC: '-password -security.twoFactorSecret -security.backupCodes',
    USER_BASIC: 'firstName lastName email role createdAt',
    USER_FULL: 'firstName lastName email role progress createdAt lastLogin isActive'
  },

  // Sort Options
  SORT_OPTIONS: {
    CREATED_ASC: { createdAt: 1 },
    CREATED_DESC: { createdAt: -1 },
    NAME_ASC: { firstName: 1, lastName: 1 },
    NAME_DESC: { firstName: -1, lastName: -1 },
    EMAIL_ASC: { email: 1 },
    EMAIL_DESC: { email: -1 }
  },

  // Validation Rules
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD_MIN_LENGTH: 8,
    NAME_MIN_LENGTH: 1,
    NAME_MAX_LENGTH: 100,
    EMAIL_MAX_LENGTH: 255
  }
};

/**
 * Get error message by key
 * @param {string} key - Error key
 * @param {string} defaultMessage - Default message if key not found
 * @returns {string} Error message
 */
export const getErrorMessage = (key, defaultMessage = 'An error occurred') => {
  return ADMIN_BACKEND_CONFIG.ERRORS[key] || defaultMessage;
};

/**
 * Get success message by key
 * @param {string} key - Success key
 * @param {string} defaultMessage - Default message if key not found
 * @returns {string} Success message
 */
export const getSuccessMessage = (key, defaultMessage = 'Operation successful') => {
  return ADMIN_BACKEND_CONFIG.SUCCESS[key] || defaultMessage;
};

/**
 * Get report template columns
 * @param {string} templateName - Template name
 * @returns {Array} Array of column names
 */
export const getReportTemplate = (templateName) => {
  return ADMIN_BACKEND_CONFIG.REPORT_TEMPLATES[templateName] || [];
};

/**
 * Validate user role
 * @param {string} role - Role to validate
 * @returns {boolean} True if valid role
 */
export const isValidRole = (role) => {
  return Object.values(ADMIN_BACKEND_CONFIG.USER_ROLES).includes(role);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  return ADMIN_BACKEND_CONFIG.VALIDATION.EMAIL_REGEX.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {boolean} True if valid password
 */
export const isValidPassword = (password) => {
  return password && password.length >= ADMIN_BACKEND_CONFIG.PASSWORD.MIN_LENGTH;
};

export default ADMIN_BACKEND_CONFIG;
