import jwt from "jsonwebtoken";

const verifyToken = (token, req, res) => {
  const token = jwt.verify(token, process.env.SECRET, (error, user) => {
    if (error) throw new Error("Unauthorized");
    return user.user;
  });
};

export default verifyToken;
