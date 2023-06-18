import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <span className="brackets">&#10100;</span>
          <span className="title-text">MealSupp</span>
          <span className="brackets">&#10101;</span>
        </div>
        <div>
          <Link to="/" className="default-link">
            <span>Polityka prywatności</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
