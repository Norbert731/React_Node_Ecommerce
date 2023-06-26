import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1>Wyszukaj posiłek na który masz ochotę</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="lupa" />
              <input type="text" placeholder="Np. żurek" />
            </div>
            <button className="searchBtn">Wyszukaj</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/bowl-of-vegan-hero.png" alt="miska z warzywami" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
