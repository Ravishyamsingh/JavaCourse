import Joi from 'joi';
import DOMPurify from 'isomorphic-dompurify';

// Enhanced validation schemas
export const signupSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s'-]+$/)
    .required()
    .messages({
      'string.pattern.base': 'First name can only contain letters, spaces, hyphens, and apostrophes',
      'string.min': 'First name cannot be empty',
      'string.max': 'First name cannot exceed 50 characters'
    }),
  
  lastName: Joi.string()
    .trim()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s'-]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Last name can only contain letters, spaces, hyphens, and apostrophes',
      'string.min': 'Last name cannot be empty',
      'string.max': 'Last name cannot exceed 50 characters'
    }),
  
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .trim()
    .max(254)
    .required()
    .messages({
      'string.email': 'Please provide a valid email address',
      'string.max': 'Email address is too long'
    }),
  
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password cannot exceed 128 characters',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    })
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .trim()
    .required()
    .messages({
      'string.email': 'Please provide a valid email address'
    }),
  
  password: Joi.string()
    .min(1)
    .max(128)
    .required()
    .messages({
      'string.min': 'Password is required',
      'string.max': 'Password is too long'
    }),
  
  selectedRole: Joi.string()
    .valid('guest', 'user', 'admin', 'superadmin')
    .optional()
});

export const profileUpdateSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s'-]+$/)
    .optional(),
  
  lastName: Joi.string()
    .trim()
    .min(1)
    .max(50)
    .pattern(/^[a-zA-Z\s'-]+$/)
    .optional(),
  
  avatar: Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .max(500)
    .optional(),
  
  'profile.bio': Joi.string()
    .trim()
    .max(500)
    .optional(),
  
  'profile.phone': Joi.string()
    .pattern(/^\+?[\d\s\-\(\)]+$/)
    .max(20)
    .optional(),
  
  'profile.dateOfBirth': Joi.date()
    .max('now')
    .min('1900-01-01')
    .optional(),
  
  'profile.gender': Joi.string()
    .valid('male', 'female', 'other', 'prefer_not_to_say')
    .optional(),
  
  'profile.location.country': Joi.string()
    .trim()
    .max(100)
    .optional(),
  
  'profile.location.city': Joi.string()
    .trim()
    .max(100)
    .optional(),
  
  'profile.location.timezone': Joi.string()
    .trim()
    .max(50)
    .optional(),
  
  'profile.socialLinks.linkedin': Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .max(200)
    .optional(),
  
  'profile.socialLinks.github': Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .max(200)
    .optional(),
  
  'profile.socialLinks.twitter': Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .max(200)
    .optional(),
  
  'profile.socialLinks.website': Joi.string()
    .uri({ scheme: ['http', 'https'] })
    .max(200)
    .optional(),
  
  'preferences.theme': Joi.string()
    .valid('light', 'dark', 'system')
    .optional(),
  
  'preferences.language': Joi.string()
    .pattern(/^[a-z]{2}(-[A-Z]{2})?$/)
    .optional(),
  
  'preferences.notifications.email': Joi.boolean().optional(),
  'preferences.notifications.push': Joi.boolean().optional(),
  'preferences.notifications.sms': Joi.boolean().optional(),
  'preferences.notifications.courseUpdates': Joi.boolean().optional(),
  'preferences.notifications.achievements': Joi.boolean().optional(),
  'preferences.notifications.marketing': Joi.boolean().optional(),
  
  'preferences.privacy.profileVisibility': Joi.string()
    .valid('public', 'private', 'friends')
    .optional(),
  
  'preferences.privacy.showProgress': Joi.boolean().optional(),
  'preferences.privacy.showAchievements': Joi.boolean().optional()
});

export const searchQuerySchema = Joi.object({
  search: Joi.string()
    .trim()
    .max(100)
    .pattern(/^[a-zA-Z0-9\s@._-]+$/)
    .optional()
    .messages({
      'string.pattern.base': 'Search query contains invalid characters',
      'string.max': 'Search query is too long'
    }),
  
  page: Joi.number()
    .integer()
    .min(1)
    .max(1000)
    .default(1),
  
  limit: Joi.number()
    .integer()
    .min(1)
    .max(100)
    .default(20),
  
  role: Joi.string()
    .valid('guest', 'user', 'admin', 'superadmin')
    .optional(),
  
  status: Joi.string()
    .valid('active', 'inactive')
    .optional()
});

export const roleUpdateSchema = Joi.object({
  role: Joi.string()
    .valid('guest', 'user', 'admin', 'superadmin')
    .required()
    .messages({
      'any.only': 'Invalid role specified'
    })
});

// Input sanitization functions
export const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    // Remove potential NoSQL injection patterns
    const sanitized = input
      .replace(/[\$\{\}]/g, '') // Remove MongoDB operators
      .trim();
    
    // Use DOMPurify for HTML sanitization
    return DOMPurify.sanitize(sanitized, { 
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: []
    });
  }
  
  if (typeof input === 'object' && input !== null) {
    const sanitized = {};
    for (const [key, value] of Object.entries(input)) {
      // Sanitize keys to prevent prototype pollution
      const cleanKey = key.replace(/^__|prototype|constructor/gi, '');
      sanitized[cleanKey] = sanitizeInput(value);
    }
    return sanitized;
  }
  
  return input;
};

// Validation middleware factory
export const validateRequest = (schema, property = 'body') => {
  return (req, res, next) => {
    try {
      // Sanitize input first
      req[property] = sanitizeInput(req[property]);
      
      // Validate with Joi schema
      const { error, value } = schema.validate(req[property], {
        abortEarly: false,
        stripUnknown: true,
        convert: true
      });
      
      if (error) {
        const errors = error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message,
          value: detail.context?.value
        }));
        
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          code: 'VALIDATION_ERROR',
          errors
        });
      }
      
      // Replace request data with validated and sanitized data
      req[property] = value;
      next();
    } catch (validationError) {
      console.error('❌ Validation middleware error:', validationError);
      return res.status(500).json({
        success: false,
        message: 'Validation processing failed',
        code: 'VALIDATION_PROCESSING_ERROR'
      });
    }
  };
};

// Legacy validation functions for backward compatibility
export const validateSignup = (data) => {
  const { error } = signupSchema.validate(data);
  return { error };
};

export const validateLogin = (data) => {
  const { error } = loginSchema.validate(data);
  return { error };
};

// MongoDB query sanitization
export const sanitizeMongoQuery = (query) => {
  if (typeof query !== 'object' || query === null) {
    return query;
  }
  
  const sanitized = {};
  for (const [key, value] of Object.entries(query)) {
    // Remove dangerous operators
    if (key.startsWith('$') && !['$regex', '$options', '$in', '$nin', '$exists'].includes(key)) {
      continue;
    }
    
    // Sanitize regex patterns to prevent ReDoS
    if (key === '$regex' && typeof value === 'string') {
      // Limit regex complexity and length
      if (value.length > 100 || /[*+?{}\[\]\\|()^$]/.test(value)) {
        sanitized[key] = value.replace(/[*+?{}\[\]\\|()^$]/g, '\\$&').substring(0, 50);
      } else {
        sanitized[key] = value;
      }
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizeMongoQuery(value);
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};

export default {
  signupSchema,
  loginSchema,
  profileUpdateSchema,
  searchQuerySchema,
  roleUpdateSchema,
  sanitizeInput,
  validateRequest,
  validateSignup,
  validateLogin,
  sanitizeMongoQuery
};
