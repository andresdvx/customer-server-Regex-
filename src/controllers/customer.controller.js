import { request, response } from "express";
import {
  getCustomersService,
  getCustomerByIdService,
  createCustomerService,
  deleteCustomerService,
  updateCustomerService,
} from "../services/customer.service.js";

export const getCustomers = async (req = request, res = response) => {
  try {
    const customers = await getCustomersService();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ message: "cannot get customers" });
  }
};

export const getCustomerById = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const customer = await getCustomerByIdService(id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json({ message: "cannot get customer" });
  }
};

export const createCustomer = async (req = request, res = response) => {
  const payload = req.body;
  const customer = await createCustomerService(payload);
  return customer.length == 1
    ? res.status(201).json({ message: "customer created successfuly" })
    : res
        .status(400)
        .json({ message: "A customer already exists with id number" });
};

export const updateCustomer = async (req = request, res = response) => {
  const { id } = req.params;
  const payload = req.body;
  try {
    const customer = await updateCustomerService(id, payload);
    return res.status(201).json(customer);
  } catch (error) {
    return res.status(500).json({ message: "cannot update customer" });
  }
};

export const deleteCustomer = async (req = request, res = response) => {
  const { id } = req.params;
  try {
    const customer = await deleteCustomerService(id);
    return res.status(200).json({ message: "customer deleted" });
  } catch (error) {
    return res.status(500).json({ message: "cannot delete customer" });
  }
};
