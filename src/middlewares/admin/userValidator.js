const validateUser = (req, res, next) => {
  const { user } = req.body;
  const regEx = new RegExp("^[a-z0-9_-]{6,16}$");
  if (!regEx.test(user))
    return res.status(400).json({
      message: "Enter a valid user name, enter between 6 and 16 characteres",
    });
  next();
};

export default validateUser;
