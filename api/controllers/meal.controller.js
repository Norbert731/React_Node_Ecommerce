import Meal from "../models/meal.model.js";

export const addMeal = async (req, res) => {
  if (!req.isAdmin) return console.log("Nie możesz tego zrobić");

  const createMeal = new Meal({
    userId: req.userId,
    ...req.body,
  });

  try {
    const saveMeal = await createMeal.save();
    res.status(201).json(saveMeal);
  } catch (error) {
    return res.status(201).send("error");
  }
};

export const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
  } catch (error) {}
};

export const singleMeal = async (req, res) => {
  try {
  } catch (error) {}
};

export const Meals = async (req, res) => {
  try {
  } catch (error) {}
};
