import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import {
  Link,
  isRouteErrorResponse,
  useLocation,
  useNavigate,
} from "react-router-dom";
import req from "../../utils/req";

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

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const nav = useNavigate();

  const handleLogout = async () => {
    try {
      await req.post("authentication/logout");
      localStorage.setItem("currentUser", null);
      nav("/");
    } catch (error) {
      console.log(error);
    }
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
          <span>Dania</span>
          {!currentUser && <span>Korzyści dołączenia</span>}
          {!currentUser && (
            <Link to="/login">
              <button>Zaloguj</button>
            </Link>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOptionBtn(!optionBtn)}>
              <img
                src={currentUser.img || "/img/default-avatar.png"}
                alt="logo"
              ></img>
              <span>{currentUser?.username}</span>
              {optionBtn && (
                <div className="options">
                  {currentUser?.isAdmin && (
                    <>
                      <Link className="default-link" to="/myMeal">
                        Meals
                      </Link>
                      <Link className="default-link" to="/addMeal">
                        Dodaj danie
                      </Link>
                    </>
                  )}
                  <Link className="default-link" to="/orders">
                    <span>Zamówienia</span>
                  </Link>
                  <Link className="default-link" to="/messages">
                    <span>Wiadomości</span>
                  </Link>
                  <Link className="default-link" onClick={handleLogout}>
                    <span>Wyloguj</span>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
