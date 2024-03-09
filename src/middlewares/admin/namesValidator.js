const validateNames = (req, res, next) => {
  const { firstName, lastName } = req.body;
  const regEx = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
  if (!regEx.test(firstName))
    return res.status(400).json({ message: "Enter a valid first name" });

  if (!regEx.test(lastName))
    return res.status(400).json({ message: "Enter a valid last name" });
  next();
};

export default validateNames;
