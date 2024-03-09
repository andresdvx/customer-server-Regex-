const validateIdNumber = (req, res, next) => {
  const { idNumber } = req.body;
  const regEx = new RegExp("^[0-9]+$");

  if (!regEx.test(idNumber))
    return res.status(400).json({ message: "Enter a valid id number" });

  if (idNumber.length < 8)
    return res
      .status(400)
      .json({ message: "Id number must have at least 8 characteres" });

  if (idNumber.length > 12)
    return res
      .status(400)
      .json({ message: "Id number must have at most 12 characteres" });

  next();
};

export default validateIdNumber;
