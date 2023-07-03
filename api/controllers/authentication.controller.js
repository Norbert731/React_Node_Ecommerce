import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hashed = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hashed,
    });

    await newUser.save();
    res.status(201).send("Konto zostało utowrzone");
  } catch (error) {
    res.status(500).send("Wystąpił błąd");
  }
};
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.status(404).send("Użytkownik o takiej nazwie nie istnieje");

    // user token
    const userToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );

    const CorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!CorrectPassword)
      return res
        .status(404)
        .send("Podana nazwa użytkownika lub hasło nie są prawidłowe");

    // hide user password
    const { password, ...showUser } = user._doc;
    res
      .cookie("userToken", userToken, {
        httpOnly: true,
      })
      .status(200)
      .send(showUser);
  } catch (error) {
    res.status(500).send("Twój token wygasł");
    console.log(error);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("userToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("Wyglogowano");
};
