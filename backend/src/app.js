import express from "express";
import cors from "cors";
import router from "./routes.js";
import config from "./config.js";
import {
  securityHeaders,
  compressionMiddleware,
  globalRateLimit,
  responseTimeMiddleware,
  requestLogger,
  errorHandler,
  detailedHealthCheck,
  gracefulShutdown,
  logger
} from "./middleware/production.js";
import { sanitizeRequestMiddleware, preventClickjacking } from "./middleware/securityAdvanced.js";

const app = express();

// Trust proxy for accurate IP addresses
app.set('trust proxy', 1);

// Disable x-powered-by header
app.disable('x-powered-by');

// Production middleware
app.use(securityHeaders);
app.use(compressionMiddleware);
app.use(responseTimeMiddleware);
app.use(requestLogger);
app.use(globalRateLimit);


// Secure CORS configuration
const normaliseOrigin = (origin) => {
  if (!origin) return null;
  try {
    const url = new URL(origin);
    return `${url.protocol}//${url.host}`;
  } catch (error) {
    return origin.trim();
  }
};

const parseOrigins = (value) => {
  if (!value) return [];
  return value
    .split(',')
    .map((origin) => normaliseOrigin(origin))
    .filter(Boolean);
};

const getAllowedOrigins = () => {
  const baseOrigins = [
    'https://accounts.google.com', // Required for Google OAuth
    'https://apis.google.com'      // Required for Google APIs
  ];

  // Allow operators to inject additional origins even if NODE_ENV is misconfigured.
  const envOrigins = parseOrigins(process.env.ALLOWED_ORIGINS || config.ALLOWED_ORIGINS);

  const configuredOrigins = [
    normaliseOrigin(config.FRONTEND_URL),
    normaliseOrigin(config.BACKEND_URL),
    normaliseOrigin(process.env.FRONTEND_URL),
    ...parseOrigins(config.CORS_ORIGIN)
  ].filter(Boolean);

  if (process.env.NODE_ENV === 'production') {
    // Production origins from environment variables
    return Array.from(new Set([...baseOrigins, ...envOrigins, ...configuredOrigins]));
  }

  // Development origins - still restricted but more permissive
  const devOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
    'http://localhost:8080'
  ];

  return Array.from(new Set([...baseOrigins, ...devOrigins, ...envOrigins, ...configuredOrigins]));
};

const allowedOrigins = getAllowedOrigins();

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin only in development (mobile apps, curl, Postman)
    if (!origin && process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    // Check if origin is in allowed list
    if (origin && allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Log blocked origins for security monitoring using logger
    logger.warn('CORS blocked origin', {
      origin: origin || 'null',
      environment: process.env.NODE_ENV
    });
    
    return callback(new Error(`Origin ${origin} not allowed by CORS policy`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'X-CSRF-Token',
    'Accept',
    'Origin',
    'Cache-Control'
  ],
  exposedHeaders: ['X-CSRF-Token'],
  maxAge: 86400, // Cache preflight requests for 24 hours
  optionsSuccessStatus: 200 // Support legacy browsers
}));

// Body parsing middleware with size limits
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Security middleware
app.use(sanitizeRequestMiddleware);
app.use(preventClickjacking);

// Basic health check (before router to avoid 404)
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Enhanced health check
app.get("/api/health/detailed", detailedHealthCheck);

// Use routes
app.use("/api", router);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Java Course Authentication API",
    version: "2.0.0",
    status: "running",
    timestamp: new Date().toISOString(),
    documentation: "/api/health",
    environment: process.env.NODE_ENV || 'development'
  });
});

// Global error handler
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    code: 'NOT_FOUND',
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });
});

export { app };
