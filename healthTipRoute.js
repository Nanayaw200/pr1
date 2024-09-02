import express from "express";
import {
  create,
  deleteHealthTip,
  getHealthTip,
  getHealthTips,
  update,
} from "../controllers/healthTipsController.js";

const router = express.Router();

router.post("/create", create);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteHealthTip);
router.get("/:id", getHealthTip);
router.get("", getHealthTips);
export default router;
