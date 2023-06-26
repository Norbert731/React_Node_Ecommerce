import React from "react";
import { Link } from "react-router-dom";
import "./newmealcard.scss";

function NewMealCard({ meal }) {
  return (
    <Link to="/" className="default-link">
      <div className="newmealcard">
        <img src={meal.img} alt="Jedzenie" />
        <div className="info">
          <p>{meal.name}</p>
        </div>
      </div>
    </Link>
  );
}

export default NewMealCard;
