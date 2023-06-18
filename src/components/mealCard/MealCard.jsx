import React from "react";
import "./mealcard.scss";
import { Link } from "react-router-dom";
import { AllMeals } from "../../data";

function MealCard({ meal }) {
  return (
    <Link to="/Meal" className="default-link">
      <div className="mealcard">
        <img src={meal.img} alt="obrazek z jedzeniem" />
        <div className="info">
          <div className="name-like">
            <div className="name">{meal.name}</div>
            <div className="like">
              <img src="./img/heart.png" alt="serce" />
            </div>
          </div>
          <div className="rating-price">
            <div className="star">
              <img src="./img/star.png" alt="gwiazdka" />
              <span>{meal.star}</span>
            </div>
            <div className="price">{meal.price}zł</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MealCard;
