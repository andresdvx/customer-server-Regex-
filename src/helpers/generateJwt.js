import jwt from "jsonwebtoken";

const geneateToken = (user) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      user,
    },
    process.env.SECRET
  );
  return token;
};

export default geneateToken;
