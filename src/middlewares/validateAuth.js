import { request, response } from "express";
import jwt from "jsonwebtoken";

const validateAuth = (req = request, res = response, next) => {
  const { authToken } = req.cookies;
  // console.log(authToken, "=> validate");
  if (!authToken)
    return res.status(401).json({ message: "unauthorized no token => validate" });
  jwt.verify(authToken, process.env.SECRET, (error, user) => {
    // console.log(user.user);
    if (error) {
      return res.status(403).json({ message: "unauthorized  => validate" });
    }
    req.user = user.user;
  });
  next();
};

export default validateAuth;
