import connectDB from "./dbconnection/index.js";
import { app } from "./src/app.js";
import config from "./src/config.js";
import { logger } from "./src/utils/monitoring.js";

const PORT = config.PORT;

/**
 * Start the server with proper database connection
 */
const startServer = async () => {
  try {
    // Step 1: Connect to database first
    logger.info('🔄 Connecting to MongoDB...', { url: config.MONGO_URL });
    await connectDB();
    logger.info('✅ MongoDB connected successfully');

    // Step 2: Start HTTP server
    const server = app.listen(PORT, '0.0.0.0', () => {
      logger.info('🚀 Server started successfully', {
        port: PORT,
        environment: config.NODE_ENV,
        frontend: config.FRONTEND_URL,
        backend: config.BACKEND_URL,
        healthCheck: `http://localhost:${PORT}/api/health`,
        timestamp: new Date().toISOString()
      });
    });

    // Step 3: Handle server errors
    server.on('error', (error) => {
      logger.error('❌ Server error', {
        code: error.code,
        message: error.message,
        stack: error.stack
      });

      if (error.code === 'EADDRINUSE') {
        logger.error(`❌ Port ${PORT} is already in use`);
        process.exit(1);
      }
    });

    // Step 4: Graceful shutdown on SIGTERM
    process.on('SIGTERM', () => {
      logger.info('📋 SIGTERM received, starting graceful shutdown...');
      server.close(() => {
        logger.info('✅ Server closed gracefully');
        process.exit(0);
      });

      // Force shutdown after 30 seconds
      setTimeout(() => {
        logger.error('❌ Forced shutdown after 30 seconds');
        process.exit(1);
      }, 30000);
    });

    // Step 5: Graceful shutdown on SIGINT (Ctrl+C)
    process.on('SIGINT', () => {
      logger.info('📋 SIGINT received, starting graceful shutdown...');
      server.close(() => {
        logger.info('✅ Server closed gracefully');
        process.exit(0);
      });

      // Force shutdown after 30 seconds
      setTimeout(() => {
        logger.error('❌ Forced shutdown after 30 seconds');
        process.exit(1);
      }, 30000);
    });

    return server;

  } catch (error) {
    logger.error('❌ Failed to start server', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });

    if (error.message.includes('connect ECONNREFUSED')) {
      logger.error('❌ MongoDB is not running. Please start MongoDB and try again.');
      logger.error(`   Connection string: ${config.MONGO_URL}`);
    }

    process.exit(1);
  }
};

// Start the server
startServer().catch((error) => {
  logger.error('❌ Unexpected error during startup', {
    message: error.message,
    stack: error.stack
  });
  process.exit(1);
});