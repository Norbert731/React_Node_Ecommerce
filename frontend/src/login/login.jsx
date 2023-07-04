import React, { useState } from "react";
import "./login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import req from "../utils/req";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await req.post("authentication/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      nav("/");
    } catch (error) {
      setError("Wystąpił problem podczas próby logowania");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nazwa użytkownika</label>
        <input
          name="username"
          type="text"
          placeholder="Jacek"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Hasło</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zaloguj</button>
        {error && error}
      </form>
      <div>
        <span>
          Nie masz konta?{" "}
          <Link className="default-link reg-link" to={"/register"}>
            Zarejestruj się
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
