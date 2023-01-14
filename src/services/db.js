import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let client = null;
const initializeDbConnection = async () => {
  client = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export { initializeDbConnection };
