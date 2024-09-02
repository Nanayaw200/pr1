import express from "express";
import {
  create,
  getdoctors,
  update,
  updateDoctorAvater,
} from "../controllers/doctorInfoController.js";

const router = express.Router();

router.get("/all", getdoctors);
router.post("/create", create);
router.patch("/update/:id", update);
router.patch("/update/avater/:id", updateDoctorAvater);
export default router;
