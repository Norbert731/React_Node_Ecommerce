import React, { useState } from "react";
import axios from "axios";
import "./login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/authentication/login",
        {
          username,
          password,
        }
        // { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      setError(error);
      console.log(error);
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
      </form>
    </div>
  );
}

export default Login;
