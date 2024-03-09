const validateTelephone = (req, res, next) => {
  const { telephone } = req.body;
  const regEx = /^\d+$/;

  if (!regEx.test(telephone))
    return res.status(400).json({ message: "Enter a valid telephone" });

  if (telephone.length != 10)
    return res
      .status(400)
      .json({ message: "Telephone must have 10 characteres" });

  next();
};

export default validateTelephone;
