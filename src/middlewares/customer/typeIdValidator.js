const validateTypeId = (req, res, next) => {
  const { typeId } = req.body;
  if (typeId.length < 1)
    return res.status(400).json({ message: "Enter a valid type id" });
  next();
};

export default validateTypeId;

