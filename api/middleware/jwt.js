import jwt from "jsonwebtoken";

export const jwtToken = (req, res) => {
  const token = req.cookies.userToken;
  if (!token) return res.status(401).send("Problem z autentykacją");

  jwt.verify(token, process.env.JWT, async (error, payload) => {
    if (error) return res.status(403).send("Problem z autentykacją");
    req.userId = payload.id;
    req.isAdmin = payload.isAdmin;
  });
};
