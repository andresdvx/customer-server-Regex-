import { request } from "express";

const validatePicture = (req = request, res, next) => {
//   const { picture } = req.files;
//   if (picture == null || undefined) return res.status(400).json({ message: "Select a picture" });
  next();
};

export default validatePicture;
