/**
 * Standardized API Response Formatter
 * Ensures consistent response structure across all endpoints
 */

export class ApiResponse {
  constructor(statusCode, data, message = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    this.timestamp = new Date().toISOString();
  }
}

export class ApiError extends Error {
  constructor(statusCode, message, code = 'ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}

/**
 * Response helper functions
 */
export const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json(new ApiResponse(statusCode, data, message));
};

export const sendError = (res, statusCode, message, code = 'ERROR') => {
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    code,
    timestamp: new Date().toISOString()
  });
};

export const sendPaginatedResponse = (res, data, total, page, limit, message = 'Success') => {
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message,
    data,
    pagination: {
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      pages: Math.ceil(total / parseInt(limit)),
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1
    },
    timestamp: new Date().toISOString()
  });
};
