const validateFistName = (req, res, next) => {
  const { firstName } = req.body;
  const regEx = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");

  if (!regEx.test(firstName))
    return res.status(400).json({ message: "Enter a valid first name" });

  next();
};

export default validateFistName;
