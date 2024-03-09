const validateLastName = (req, res, next) => {
  const { lastName } = req.body;
  const regEx = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");

  if (!regEx.test(lastName))
    return res.status(400).json({ message: "Enter a valid last name" });

  next();
};

export default validateLastName;
