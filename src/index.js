import express from "express";
import passportSetup from "./services/passport";
import authRoutes from "./routes/authRoutes";
import { initializeDbConnection } from "./services/db";
import * as admin from "firebase-admin";
import credentials from "../credentials.json";

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const app = express();
const start = async () => {
  await initializeDbConnection();
  authRoutes(app);

  app.listen(5000, () => {
    console.log(`Server has been start on PORT:5000`);
  });
};

start();
