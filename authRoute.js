import express from "express";
const router = express.Router();

import {getusers, login, register } from "../controllers/userController.js";

router.post("/register", register);
router.get("/users", getusers);
router.post("/login", login);
// router.patch("/update/:id", updateAccount);
// router.patch("/update/pass/:id", changepassword);
// router.get("/name/:name", getUserName);
// router.get("/title/:title", getQuestionByTitle);
// router.patch("/opdnumber/:id", updateOpdByNumber);
// router.delete("/delete/:id", deleteAccount);

export default router;
