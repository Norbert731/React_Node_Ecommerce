import Meal from "../models/meal.model.js";

export const addMeal = async (req, res) => {
  if (!req.isAdmin) {
    return res.status(401).json({ message: "Brak autoryzacji" });
  }

  const { userId, ...mealData } = req.body;

  const createMeal = new Meal({
    userId: req.userId,
    ...mealData,
  });

  try {
    const savedMeal = await createMeal.save();
    return res.status(201).json(savedMeal);
  } catch (error) {
    return res.status(500).json({ message: "Nie możesz dodać tego dania" });
  }
};

export const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (meal.userId !== req.userId)
      return res.status(500).json({ message: "Nie możesz usunąć tego dania!" });

    await Meal.findByIdAndDelete(req.params.id);
    res.status(200).send("Danie zostało pomyślnie usunięte");
  } catch (error) {
    return res.status(500).json({ message: "Błąd podczas usuwania" });
  }
};

export const singleMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal)
      return res.status(404).json({ message: "Błąd podczas wyświetlania" });
    res.status(200).send(meal);
  } catch (error) {}
};

export const allMeals = async (req, res) => {
  //to do filter
  try {
    const meals = await Meal.find();
    res.status(200).send(meals);
  } catch (error) {}
};
