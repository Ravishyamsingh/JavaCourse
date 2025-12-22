/**
 * Swagger API Documentation Configuration
 * Comprehensive API documentation for all endpoints
 */

export const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Java Course CMS API',
      version: '2.0.0',
      description: 'Comprehensive API documentation for Java Course Management System',
      contact: {
        name: 'API Support',
        email: 'support@javacourse.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Development Server'
      },
      {
        url: 'https://api.javacourse.com/api',
        description: 'Production Server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            email: { type: 'string', format: 'email' },
            role: { type: 'string', enum: ['user', 'admin', 'superadmin'] },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' }
          }
        },
        SecurityAlert: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            type: { type: 'string', enum: ['warning', 'error', 'info'] },
            title: { type: 'string' },
            description: { type: 'string' },
            severity: { type: 'string', enum: ['low', 'medium', 'high', 'critical'] },
            resolved: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' }
          }
        },
        GradingConfig: {
          type: 'object',
          properties: {
            passingScore: { type: 'number', minimum: 0, maximum: 100 },
            excellentScore: { type: 'number', minimum: 0, maximum: 100 },
            goodScore: { type: 'number', minimum: 0, maximum: 100 },
            averageScore: { type: 'number', minimum: 0, maximum: 100 },
            poorScore: { type: 'number', minimum: 0, maximum: 100 },
            weightage: {
              type: 'object',
              properties: {
                quizzes: { type: 'number' },
                assignments: { type: 'number' },
                participation: { type: 'number' }
              }
            }
          }
        },
        SystemConfig: {
          type: 'object',
          properties: {
            maintenanceMode: { type: 'boolean' },
            maxUploadSize: { type: 'number' },
            sessionTimeout: { type: 'number' },
            passwordExpiry: { type: 'number' },
            apiRateLimit: { type: 'number' },
            backupFrequency: { type: 'string', enum: ['hourly', 'daily', 'weekly', 'monthly'] },
            enabledFeatures: { type: 'array', items: { type: 'string' } },
            emailNotifications: { type: 'boolean' },
            twoFactorRequired: { type: 'boolean' }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
            code: { type: 'string' }
          }
        }
      }
    },
    paths: {
      '/health': {
        get: {
          summary: 'Health Check',
          description: 'Check if the API is running',
          tags: ['Health'],
          responses: {
            '200': {
              description: 'API is healthy',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: { type: 'string' },
                      timestamp: { type: 'string' }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/auth/signup': {
        post: {
          summary: 'User Signup',
          description: 'Create a new user account',
          tags: ['Authentication'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    firstName: { type: 'string' },
                    lastName: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', minLength: 8 }
                  },
                  required: ['firstName', 'lastName', 'email', 'password']
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'User created successfully',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/User' }
                }
              }
            },
            '400': {
              description: 'Invalid input',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Error' }
                }
              }
            }
          }
        }
      },
      '/auth/login': {
        post: {
          summary: 'User Login',
          description: 'Authenticate user and get tokens',
          tags: ['Authentication'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string' }
                  },
                  required: ['email', 'password']
                }
              }
            }
          },
          responses: {
            '200': {
              description: 'Login successful',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      success: { type: 'boolean' },
                      accessToken: { type: 'string' },
                      refreshToken: { type: 'string' },
                      user: { $ref: '#/components/schemas/User' }
                    }
                  }
                }
              }
            },
            '401': {
              description: 'Invalid credentials',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Error' }
                }
              }
            }
          }
        }
      },
      '/admin/users': {
        get: {
          summary: 'Get All Users',
          description: 'Retrieve all users (Admin only)',
          tags: ['Admin'],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', default: 1 }
            },
            {
              name: 'limit',
              in: 'query',
              schema: { type: 'integer', default: 20 }
            },
            {
              name: 'role',
              in: 'query',
              schema: { type: 'string', enum: ['user', 'admin', 'superadmin'] }
            }
          ],
          responses: {
            '200': {
              description: 'Users retrieved successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      success: { type: 'boolean' },
                      data: { type: 'array', items: { $ref: '#/components/schemas/User' } },
                      pagination: {
                        type: 'object',
                        properties: {
                          total: { type: 'integer' },
                          page: { type: 'integer' },
                          limit: { type: 'integer' },
                          pages: { type: 'integer' }
                        }
                      }
                    }
                  }
                }
              }
            },
            '403': {
              description: 'Forbidden - Admin access required',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Error' }
                }
              }
            }
          }
        }
      },
      '/admin/system/config': {
        get: {
          summary: 'Get System Configuration',
          description: 'Retrieve system configuration (Admin only)',
          tags: ['Admin', 'System'],
          security: [{ bearerAuth: [] }],
          responses: {
            '200': {
              description: 'System configuration retrieved',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/SystemConfig' }
                }
              }
            }
          }
        },
        put: {
          summary: 'Update System Configuration',
          description: 'Update system configuration (Admin only)',
          tags: ['Admin', 'System'],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/SystemConfig' }
              }
            }
          },
          responses: {
            '200': {
              description: 'Configuration updated successfully',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/SystemConfig' }
                }
              }
            }
          }
        }
      },
      '/admin/grading/config': {
        get: {
          summary: 'Get Grading Configuration',
          description: 'Retrieve grading configuration (Admin only)',
          tags: ['Admin', 'Grading'],
          security: [{ bearerAuth: [] }],
          responses: {
            '200': {
              description: 'Grading configuration retrieved',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/GradingConfig' }
                }
              }
            }
          }
        },
        put: {
          summary: 'Update Grading Configuration',
          description: 'Update grading configuration (Admin only)',
          tags: ['Admin', 'Grading'],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/GradingConfig' }
              }
            }
          },
          responses: {
            '200': {
              description: 'Grading configuration updated',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/GradingConfig' }
                }
              }
            }
          }
        }
      },
      '/admin/security/alerts': {
        get: {
          summary: 'Get Security Alerts',
          description: 'Retrieve security alerts (Admin only)',
          tags: ['Admin', 'Security'],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: 'resolved',
              in: 'query',
              schema: { type: 'boolean' }
            },
            {
              name: 'page',
              in: 'query',
              schema: { type: 'integer', default: 1 }
            }
          ],
          responses: {
            '200': {
              description: 'Security alerts retrieved',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      success: { type: 'boolean' },
                      data: { type: 'array', items: { $ref: '#/components/schemas/SecurityAlert' } }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: []
};

export default swaggerConfig;
