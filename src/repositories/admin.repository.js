import adminModel from "../models/admin.model.js";

export const getAdmins = async () => {
  const admins = await adminModel.find({});
  return admins;
};

export const getAdminById = async (_id) => {
  const admin = await adminModel.findById(_id);
  return admin;
};

export const signUp = async (firstName, lastName, user, password) => {
  const admin = await adminModel.create({
    firstName,
    lastName,
    user,
    password,
  });
  return admin;
};

export const signIn = async (user, password) => {
  const admin = await adminModel.find({ user, password });
  return admin;
};

export const getAdminByUserName = async (user) => {
  const admin = await adminModel.find({ user });
  return admin;
};

export const deleteAdmin = async (_id) => {
  const admin = await adminModel.findByIdAndDelete({ _id });
  return admin;
};

export const updateAdmin = async (_id, firstName, lastName, user, password) => {
  const admin = await adminModel.findByIdAndUpdate(_id, {
    firstName,
    lastName,
    user,
    password,
  });
  return admin;
};
