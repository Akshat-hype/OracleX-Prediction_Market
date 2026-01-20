import { Router } from "express";
import {
  createMarket,
  getMarkets,
  getMarketById,
} from "../controllers/market.controller.js";

const router = Router();

router.post("/", createMarket);
router.get("/", getMarkets);
router.get("/:id", getMarketById);

export default router;
