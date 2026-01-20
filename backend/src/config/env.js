import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET || "dev-secret",
  RPC_URL: process.env.RPC_URL || "http://127.0.0.1:8545",
};
