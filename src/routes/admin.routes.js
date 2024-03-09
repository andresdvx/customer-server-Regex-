import { Router } from "express";
import validateNames from "../middlewares/admin/namesValidator.js";
import validateUser from "../middlewares/admin/userValidator.js";
import validatePassword from "../middlewares/admin/passwordValidator.js";
import {
  getAdmins,
  getAdminById,
  signUpAdmin,
  signInAdmin,
  deleteAdmin,
  updateAdmin,
  verifyAuth,
} from "../controllers/admin.controller.js";

const adminRoutes = Router();

adminRoutes.get("/", getAdmins);

adminRoutes.get("/:_id", getAdminById);

adminRoutes.post(
  "/signup",
  validateNames,
  validateUser,
  validatePassword,
  signUpAdmin,
  verifyAuth
);

adminRoutes.post("/signin", signInAdmin);

adminRoutes.delete("/delete/:_id", deleteAdmin);

adminRoutes.put("/update/:_id", validateNames, validateUser, updateAdmin);

adminRoutes.post("/logout", (req, res) => {
  res.cookie("authToken", "", {
    expires: new Date(0),
  });
  return res.status(200).json({ message: "log out succesfully" });
});

adminRoutes.post("/verify-auth", verifyAuth);

export default adminRoutes;
