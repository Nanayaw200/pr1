import express from "express";
import {
  create,
  update,
  updatePatientAvater,
} from "../controllers/patientInfoController.js";
const router = express.Router();

router.post("/create", create);
router.patch("/update/:id", update);
router.patch("/update/avater/:id", updatePatientAvater);
export default router;
