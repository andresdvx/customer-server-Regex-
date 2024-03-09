import { request, response } from "express";
import descryptPassword from "../helpers/decryptPassword.js";
import geneateToken from "../helpers/generateJwt.js";
import jwt from "jsonwebtoken";
import hashPassword from "../helpers/hashPassword.js";
import {
  getAdmins,
  getAdminById,
  signUp,
  signIn,
  deleteAdmin,
  updateAdmin,
  getAdminByUserName,
} from "../repositories/admin.repository.js";

export const getAdminsService = async () => {
  const admins = await getAdmins();
  return admins;
};

export const getAdminByIdService = async (payload) => {
  const { _id } = payload;
  const admin = await getAdminById(_id);
  if (!admin) {
    throw new Error(`cannot get admin with id ${_id}`);
  }
  return admin;
};

export const signUpService = async (payload, req, res) => {
  const { firstName, lastName, user, password } = payload;
  const hashedPassword = await hashPassword(password);
  const foundAdmin = await getAdminByUserName(user);
  if (foundAdmin.length > 0) {
    throw new Error(`An user already exists with user name ${user}`);
  }
  const admin = await signUp(firstName, lastName, user, hashedPassword);
  const token = geneateToken(user);
  res.cookie("authToken", token);
  return admin;
};

export const signInService = async (payload, req, res) => {
  const { user, password } = payload;
  const foundAdmin = await getAdminByUserName(user);
  if (foundAdmin.length === 0) {
    throw new Error("User does not exist");
  }
  const descryptedPass = foundAdmin[0].password;
  const match = await descryptPassword(password, descryptedPass);
  if (!match) {
    throw new Error("Incorrect password");
  }
  const admin = await signIn(user, descryptedPass);
  const token = geneateToken(user);
  res.cookie("authToken", token);
  return admin;
};

export const deleteAdminService = async (_id) => {
  const admin = await deleteAdmin(_id);
  if (!admin) {
    throw new Error(`admin with id ${_id} cannot be deleted`);
  }
  return admin;
};

export const updateAdminService = async (_id, payload) => {
  const { firstName, lastName, user, password } = payload;
  const hashedPassword = await hashPassword(password);
  const admin = await updateAdmin(
    _id,
    firstName,
    lastName,
    user,
    hashedPassword
  );
  if (!admin) {
    throw new Error("user cannot be updated");
  }
  return admin;
};

export const verifyAuthService = async (req = request, res) => {
  const { authToken } = req.cookies;
  if (!authToken) {
    throw new Error("Unauthorized please login => verify");
  }
  const admin = jwt.verify(
    authToken,
    process.env.SECRET,
    async (error, user) => {
      if (error) {
        throw new Error("Invalid token => verify");
      }
      const adminValidated = await getAdminByUserName(user.user);
      if (!admin) {
        throw new Error("No admin with that user");
      }
      return adminValidated;
    }
  );
  return admin;
};
