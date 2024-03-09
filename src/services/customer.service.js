import {
  getCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomer,
  updateCustomer,
  searchCustomer,
} from "../repositories/customer.repository.js";

export const getCustomersService = async () => {
  const customers = await getCustomers();
  if (!customers) throw new Error("No products yet");
  return customers;
};

export const getCustomerByIdService = async (id) => {
  const customer = await getCustomerById(id);
  if (!customer) throw new Error("Customer doesn exist");
  return customer;
};

export const createCustomerService = async (payload) => {
  const { idNumber } = payload;
  const foundCustomer = await searchCustomer(idNumber);
  if (foundCustomer.length == 1) {
    return [];
  }
  const customer = await createCustomer(payload);
  return [customer];
};

export const updateCustomerService = async (id, payload) => {
  const customer = await updateCustomer(id, payload);
  if (!customer) throw new Error("customer cannot be updated");
  return customer;
};

export const deleteCustomerService = async (id) => {
  const customer = await deleteCustomer(id);
  if (!customer) throw new Error("customer cannot be deleted");
  return customer;
};
