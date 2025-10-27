import connectDB from "./dbconnection/index.js";
import { app } from "./src/app.js";
import config from "./src/config.js";
import { logger } from "./src/utils/monitoring.js";

// Config is loaded in config.js, no need to load dotenv again
const PORT = config.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      logger.info('Server started', {
        port: PORT,
        healthCheck: `http://localhost:${PORT}/api/health`,
        address: `http://0.0.0.0:${PORT}`
      });
    });
  })
  .catch((err) => {
    logger.error('MongoDB connection failed', { message: err.message, stack: err.stack });
    process.exit(1);
  });