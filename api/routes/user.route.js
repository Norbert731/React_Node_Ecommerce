import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { jwtToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", jwtToken, deleteUser);

export default router;
