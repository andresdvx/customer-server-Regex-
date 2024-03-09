const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 8)
    return res
      .status(400)
      .json({ message: "Password must have at least 8 characteres" });
  next();
};

export default validatePassword;
