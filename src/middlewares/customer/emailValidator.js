const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regEx.test(email))
    return res.status(400).json({ message: "Enter a valid email" });
  next();
};

export default validateEmail;
