import express from "express";
// import http from "http";
import cors from "cors";
import authRouter from "./routes/authRoute.js";
import patient from "./routes/patientInfoRoute.js";
import doctor from "./routes/doctorInfoRoute.js";
import appointment from "./routes/appointmentRoute.js";
import healthtip from "./routes/healthTipRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/patient", patient);
app.use("/api/doctor", doctor);
app.use("/api/appointment", appointment);
app.use("/api/healthtips", healthtip);

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("listening on port ", port);
});
