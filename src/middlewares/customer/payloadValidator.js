const validatePayload = (req, res, next) => {
  const payload = req.body;
  if (Object.keys(payload).length == 0)
    return res.status(400).json({ message: "Enter all the information" });
  next();
};

export default validatePayload;
