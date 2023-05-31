import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, isRouteErrorResponse } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);

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
    isSeller: true,
  };

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
          {!currentUser && <span>Korzyści dołączenia</span>}
          {!currentUser && <button>Login</button>}
          {currentUser && (
            <div className="user">
              <img
                src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt="logo"
              ></img>
              <span>{currentUser?.username}</span>
              <div className="options">
                <span>Ulubione</span>
                <span>Zamówienia</span>
                <span>Wiadomości</span>
                <span>Wyloguj</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr></hr>
          <div className="menu">
            <span>Test</span>
            <span>Test</span>
            <span>Test</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
