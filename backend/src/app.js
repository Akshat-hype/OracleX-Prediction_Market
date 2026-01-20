import express from "express";
import cors from "cors";
import morgan from "morgan";

import marketRoutes from "./routes/market.routes.js";
import userRoutes from "./routes/user.routes.js";
import resolveRoutes from "./routes/resolve.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_, res) => {
  res.status(200).json({ status: "OK", service: "OracleX Backend" });
});

app.use("/api/markets", marketRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resolve", resolveRoutes);

app.use(errorHandler);

export default app;
