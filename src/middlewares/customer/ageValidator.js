const validateAge = (req, res, next) => {
  const { typeId, birthDate } = req.body;
  const year = new Date(birthDate).getFullYear();
  const age = new Date().getFullYear() - year;
  switch (typeId) {
    case "RC":
      if (age > 7)
        return res
          .status(400)
          .json({ message: "Age does not match identification type" });
      break;
    case "TI":
      if (age > 17 || age < 8)
        return res
          .status(400)
          .json({ message: "Age does not match identification type" });
      break;
    case "CC":
      if (age < 18)
        return res
          .status(400)
          .json({ message: "Age does not match identification type" });
      break;
  }
  next();
};

export default validateAge;
