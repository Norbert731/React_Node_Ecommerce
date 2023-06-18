import React from "react";
import "./meal.scss";

function Meal() {
  return (
    <div className="meal">
      <div className="container">
        <div className="breadcrumbs"> Przystawki / Zupa</div>
        <h1>Name of meal</h1>
        <div className="content">
          <img
            src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="jedzenie"
          />
          <div className="stars">
            <img src="./img/star.png" alt="gwiazda" />
            <img src="./img/star.png" alt="gwiazda" />
            <img src="./img/star.png" alt="gwiazda" />
            <img src="./img/star.png" alt="gwiazda" />
            <img src="./img/star.png" alt="gwiazda" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meal;
