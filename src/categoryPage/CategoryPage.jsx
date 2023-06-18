import React from "react";
import { useState } from "react";
import "./categorypage.scss";
import { AllMeals } from "../data";
import MealCard from "../components/mealCard/MealCard";

function CategoryPage() {
  const [open, setOpen] = useState(false);
  const [openValue, setOpenValue] = useState("Wszystkie");

  const reSort = (type) => {
    setOpenValue(type);
    setOpen(false);
  };

  return (
    <div className="categorypage">
      <div className="container">
        <span className="breadcrumbs"> Dania / Przystawki</span>
        <h1>Przystawki</h1>
        <div className="sortingMenu">
          <span className="sortBy">Sortowanie:</span>
          <div className="sortType-block">
            <span
              className="sortType"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {openValue === "All" ? "Wszystkie" : "Najnowsze"}
            </span>

            <img src="./img/down-arrow.png" alt="strzalka" />
            {open && (
              <div className="sortMenu">
                {openValue === "All" ? (
                  <span onClick={() => setOpenValue("createdAt")}>
                    Najnowsze
                  </span>
                ) : (
                  <span onClick={() => setOpenValue("All")}>Wszystkie</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {AllMeals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
