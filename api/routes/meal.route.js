import express from "express";
import {
  addMeal,
  deleteMeal,
  singleMeal,
  allMeals,
} from "../controllers/meal.controller.js";
import { jwtToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", jwtToken, addMeal);
router.delete("/:id", jwtToken, deleteMeal);
router.get("/single/:id", jwtToken, singleMeal);
router.get("/", jwtToken, allMeals);

export default router;
