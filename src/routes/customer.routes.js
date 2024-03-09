import { Router } from "express";
import validatePayload from "../middlewares/customer/payloadValidator.js";
import validateFistName from "../middlewares/customer/fistNameValidator.js";
import validateIdNumber from "../middlewares/customer/idNumberValidator.js";
import validateLastName from "../middlewares/customer/lastNameValidator.js";
import validateTypeId from "../middlewares/customer/typeIdValidator.js";
import validateAge from "../middlewares/customer/ageValidator.js";
import validateBirthDate from "../middlewares/customer/birthDateValidator.js";
import validateEmail from "../middlewares/customer/emailValidator.js";
import validateTelephone from "../middlewares/customer/telephoneValidator.js";
import validateAuth from "../middlewares/validateAuth.js";
import {
  createCustomer,
  getCustomers,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customer.controller.js";

const customerRoutes = Router();

customerRoutes.get("/", validateAuth, getCustomers);

customerRoutes.get("/:id", validateAuth, getCustomerById);

customerRoutes.post(
  "/create",
  validateAuth,
  validatePayload,
  validateIdNumber,
  validateFistName,
  validateLastName,
  validateTypeId,
  validateAge,
  validateEmail,
  validateTelephone,
  validateBirthDate,
  createCustomer
);

customerRoutes.put(
  "/update/:id",
  validateAuth,
  validatePayload,
  validateIdNumber,
  validateFistName,
  validateLastName,
  validateTypeId,
  validateAge,
  validateBirthDate,
  validateEmail,
  validateTelephone,
  updateCustomer
);

customerRoutes.delete("/delete/:id", validateAuth, deleteCustomer);

export default customerRoutes;
