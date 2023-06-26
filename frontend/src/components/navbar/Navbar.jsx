import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, isRouteErrorResponse, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [optionBtn, setOptionBtn] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Joe Doe",
    isAdmin: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="default-link">
            <span className="brackets">&#10100;</span>
            <span className="title-text">MealSupp</span>
            <span className="brackets">&#10101;</span>
          </Link>
        </div>
        <div className="links">
          <span>Przepisy</span>
          {!currentUser && <span>Korzyści dołączenia</span>}
          {!currentUser && <button>Login</button>}
          {currentUser && (
            <div className="user" onClick={() => setOptionBtn(!optionBtn)}>
              <img
                src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt="logo"
              ></img>
              <span>{currentUser?.username}</span>
              {optionBtn && (
                <div className="options">
                  {currentUser?.isAdmin && (
                    <>
                      <Link className="default-link" to="/addMeal">
                        Add new meal
                      </Link>
                    </>
                  )}
                  {/* <span>Ulubione</span> */}
                  <Link className="default-link" to="/myMeal">
                    Meals
                  </Link>
                  <Link className="default-link" to="/orders">
                    <span>Zamówienia</span>
                  </Link>
                  <Link className="default-link" to="/messages">
                    <span>Wiadomości</span>
                  </Link>
                  <Link className="default-link" to="/">
                    <span>Wyloguj</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr></hr>
          <div className="menu">
            <Link to="/" className="default-link">
              Category
            </Link>
            <Link to="/" className="default-link">
              Category
            </Link>
            <Link to="/" className="default-link">
              Category
            </Link>
            <Link to="/" className="default-link">
              Category
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
