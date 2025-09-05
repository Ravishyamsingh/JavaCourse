import connectDB from "./dbconnection/index.js";
import { app } from "./src/app.js";
import config from "./src/config.js";

// Config is loaded in config.js, no need to load dotenv again
const PORT = config.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health`);
      console.log(`Server accessible at: http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
    process.exit(1);
  });