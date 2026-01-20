import { Router } from "express";
import { resolveMarket } from "../controllers/resolve.controller.js";

const router = Router();

router.post("/:id", resolveMarket);

export default router;
