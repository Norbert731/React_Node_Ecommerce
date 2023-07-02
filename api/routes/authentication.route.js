import express from "express";
import {
  register,
  login,
  logout,
} from "../controllers/authentication.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/login", logout);

export default router;
