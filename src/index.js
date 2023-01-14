import express from "express";
import passportSetup from "./services/passport";
import authRoutes from "./routes/authRoutes";
import { initializeDbConnection } from "./services/db";

const app = express();
const start = async () => {
  await initializeDbConnection();
  authRoutes(app);

  app.listen(5000, () => {
    console.log(`Server has been start on PORT:5000`);
  });
};

start();
