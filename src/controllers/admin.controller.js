import { request, response } from "express";
import {
  getAdminsService,
  getAdminByIdService,
  signUpService,
  signInService,
  deleteAdminService,
  updateAdminService,
  verifyAuthService,
} from "../services/admin.service.js";

export const getAdmins = async (req = request, res = response) => {
  try {
    const admins = await getAdminsService();
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAdminById = async (req = request, res = response) => {
  try {
    const payload = req.body;
    const admin = await getAdminByIdService(payload);
    return res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const signUpAdmin = async (req = request, res = response) => {
  try {
    const payload = req.body;
    const admin = await signUpService(payload, req, res);
    const { user, firstName, lastName, _id } = admin;
    return res.status(201).json({
      message: "admin created",
      admin: { user, firstName, lastName, _id },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const signInAdmin = async (req = request, res = response) => {
  try {
    const payload = req.body;
    const admin = await signInService(payload, req, res);
    const { user, firstName, lastName, _id } = admin[0];
    return res.status(200).json({ admin: { user, firstName, lastName, _id } });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

export const deleteAdmin = async (req = request, res = response) => {
  try {
    const { _id } = req.params;
    const admin = await deleteAdminService(_id);
    return res
      .status(200)
      .json({ message: `admin with id ${_id} has been deleted successfuly` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAdmin = async (req = request, res = response) => {
  try {
    const { _id } = req.params;
    const payload = req.body;
    const admin = await updateAdminService(_id, payload);
    return res.status(201).json(admin);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyAuth = async (req = request, res = response) => {
  try {
    const admin = await verifyAuthService(req, res);
    const { user, firstName, lastName, _id } = admin[0];
    return res.status(200).json({ admin: { user, firstName, lastName, _id } });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
