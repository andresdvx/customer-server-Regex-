const validateBirthDate = (req, res, next) => {
  const { birthDate } = req.body;

  if (birthDate.length == 0)
    return res
      .status(400)
      .json({ message: "Enter your bith day" });

  if (Date.parse(birthDate) > Date.parse(new Date()))
    return res
      .status(400)
      .json({ message: "Birth date cannot be older than current date" });

  next();
};

export default validateBirthDate;
