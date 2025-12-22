/**
 * Frontend Validation Utilities
 * Validates admin panel data before sending to backend
 */

export const validateSystemConfig = (config) => {
  const errors = [];

  if (config.maxUploadSize !== undefined) {
    if (!Number.isInteger(config.maxUploadSize) || config.maxUploadSize < 1 || config.maxUploadSize > 1000) {
      errors.push('Max upload size must be an integer between 1 and 1000 MB');
    }
  }

  if (config.sessionTimeout !== undefined) {
    if (!Number.isInteger(config.sessionTimeout) || config.sessionTimeout < 5 || config.sessionTimeout > 1440) {
      errors.push('Session timeout must be an integer between 5 and 1440 minutes');
    }
  }

  if (config.passwordExpiry !== undefined) {
    if (!Number.isInteger(config.passwordExpiry) || config.passwordExpiry < 0 || config.passwordExpiry > 365) {
      errors.push('Password expiry must be an integer between 0 and 365 days');
    }
  }

  if (config.apiRateLimit !== undefined) {
    if (!Number.isInteger(config.apiRateLimit) || config.apiRateLimit < 100 || config.apiRateLimit > 10000) {
      errors.push('API rate limit must be an integer between 100 and 10000');
    }
  }

  if (config.backupFrequency !== undefined) {
    const validFrequencies = ['hourly', 'daily', 'weekly', 'monthly'];
    if (!validFrequencies.includes(config.backupFrequency)) {
      errors.push('Invalid backup frequency');
    }
  }

  return errors;
};

export const validateGradingConfig = (config) => {
  const errors = [];

  const scores = ['passingScore', 'excellentScore', 'goodScore', 'averageScore', 'poorScore'];
  
  scores.forEach(score => {
    if (config[score] !== undefined) {
      if (!Number.isInteger(config[score]) || config[score] < 0 || config[score] > 100) {
        errors.push(`${score} must be an integer between 0 and 100`);
      }
    }
  });

  if (config.weightage) {
    const total = (config.weightage.quizzes || 0) + (config.weightage.assignments || 0) + (config.weightage.participation || 0);
    if (total !== 100) {
      errors.push('Weightage must total exactly 100%');
    }

    ['quizzes', 'assignments', 'participation'].forEach(key => {
      if (config.weightage[key] !== undefined) {
        if (!Number.isInteger(config.weightage[key]) || config.weightage[key] < 0 || config.weightage[key] > 100) {
          errors.push(`${key} weightage must be an integer between 0 and 100`);
        }
      }
    });
  }

  return errors;
};

export const validateSecurityAlert = (alert) => {
  const errors = [];

  if (!alert.type || !['warning', 'error', 'info'].includes(alert.type)) {
    errors.push('Invalid alert type');
  }

  if (!alert.title || alert.title.trim().length === 0) {
    errors.push('Alert title is required');
  }

  if (!alert.description || alert.description.trim().length === 0) {
    errors.push('Alert description is required');
  }

  if (alert.severity && !['low', 'medium', 'high', 'critical'].includes(alert.severity)) {
    errors.push('Invalid alert severity');
  }

  return errors;
};

export const validateIpAddress = (ip) => {
  const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Regex = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;

  if (!ipv4Regex.test(ip) && !ipv6Regex.test(ip)) {
    return false;
  }

  if (ipv4Regex.test(ip)) {
    const parts = ip.split('.');
    return parts.every(part => {
      const num = parseInt(part, 10);
      return num >= 0 && num <= 255;
    });
  }

  return true;
};

export const validateUserProgress = (progress) => {
  const errors = [];

  if (progress.lessonsCompleted !== undefined) {
    if (!Number.isInteger(progress.lessonsCompleted) || progress.lessonsCompleted < 0) {
      errors.push('Lessons completed must be a non-negative integer');
    }
  }

  if (progress.quizzesAttempted !== undefined) {
    if (!Number.isInteger(progress.quizzesAttempted) || progress.quizzesAttempted < 0) {
      errors.push('Quizzes attempted must be a non-negative integer');
    }
  }

  if (progress.quizzesPass !== undefined) {
    if (!Number.isInteger(progress.quizzesPass) || progress.quizzesPass < 0) {
      errors.push('Quizzes passed must be a non-negative integer');
    }
  }

  if (progress.averageScore !== undefined) {
    if (typeof progress.averageScore !== 'number' || progress.averageScore < 0 || progress.averageScore > 100) {
      errors.push('Average score must be between 0 and 100');
    }
  }

  if (progress.certificatesEarned !== undefined) {
    if (!Number.isInteger(progress.certificatesEarned) || progress.certificatesEarned < 0) {
      errors.push('Certificates earned must be a non-negative integer');
    }
  }

  if (progress.studyStreak !== undefined) {
    if (!Number.isInteger(progress.studyStreak) || progress.studyStreak < 0) {
      errors.push('Study streak must be a non-negative integer');
    }
  }

  if (progress.totalStudyTime !== undefined) {
    if (typeof progress.totalStudyTime !== 'number' || progress.totalStudyTime < 0) {
      errors.push('Total study time must be a non-negative number');
    }
  }

  return errors;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters long' };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one uppercase letter' };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one lowercase letter' };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one number' };
  }

  return { valid: true, message: 'Password is valid' };
};
