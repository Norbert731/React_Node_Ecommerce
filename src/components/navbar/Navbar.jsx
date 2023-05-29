import React, { useState } from "react";
import "./Navbar.scss";
import { Link, isRouteErrorResponse } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="brackets">&#10100;</span>
          <span className="title-text">MealSupp</span>
          <span className="brackets">&#10101;</span>
          {/* </Link> */}
        </div>
        <div className="links">
          <span>Przepisy</span>
          <button>Login</button>
        </div>
      </div>
      <hr></hr>
      <div className="menu">
        <span>Test</span>
        <span>Test</span>
        <span>Test</span>
      </div>
    </div>
  );
}

export default Navbar;
