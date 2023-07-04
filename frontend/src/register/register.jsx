import React, { useState } from "react";
import upload from "../utils/uploadPhotos";
import req from "../utils/req";
import { useNavigate } from "react-router-dom";
import "./register.scss";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isAdmin: false,
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await req.post("/authentication/register", {
        ...user,
        img: url,
      });
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Tworznie konta</h1>
          <label htmlFor="">Nazwa użytkownika</label>
          <input
            name="username"
            type="text"
            placeholder="Janek"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="janem@email.com"
            onChange={handleChange}
          />
          <label htmlFor="">Hasło</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Zdjęcie profilowe</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Kraj</label>
          <input
            name="country"
            type="text"
            placeholder="Polska"
            onChange={handleChange}
          />
          <button type="submit">Utwórz</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
