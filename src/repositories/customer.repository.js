import customerModel from "../models/customer.model.js";

export const getCustomers = async () => {
  const customers = await customerModel.find({});
  return customers;
};

export const getCustomerById = async (id) => {
  const customer = await customerModel.findById(id);
  return customer;
};

export const createCustomer = async (payload) => {
  const customer = await customerModel.create(payload);
  return customer;
};

export const updateCustomer = async (id, payload) => {
  const customer = await customerModel.findByIdAndUpdate(id, payload);
  return customer;
};

export const deleteCustomer = async (id) => {
  const customer = await customerModel.findByIdAndDelete(id);
  return customer;
};

export const searchCustomer = async(idNumber)=>{
  const customer = await customerModel.find({idNumber});
  return customer;
}