import express from "express";
import {
  create,
  deleteAppointment,
  docupdate,
  docupdatestatus,
  getAppontment,
  getAppontmentDoc,
  getAppontmentDocLimit,
  getpatientAppontmentLimit,
  update,
} from "../controllers/appointmentController.js";
const router = express.Router();

router.post("/create", create);
router.patch("/update/:id", update);
router.patch("/doc/update/:id", docupdate);
router.patch("/doc/update/status/:id", docupdatestatus);
router.delete("/delete/:id", deleteAppointment);
router.get("/:id", getAppontment);
router.get("/doc/limit/:id", getAppontmentDocLimit);
router.get("/patient/limit/:id", getpatientAppontmentLimit);
router.get("/appointment/:id", getAppontmentDoc);
export default router;
