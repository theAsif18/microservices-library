const Customer = require('../models/customer');

exports.addCustomer = async (customerData) => {

  const customer = Customer.create(customerData);

  return "Customer has been added"
}

exports.getAllCustomer = async () => {
  const customer = await Customer.findAll();
  return customer
}

exports.getCustomerById = async (id) => {
  const customer = await Customer.findOne({ where: { id } });
  return customer
}

exports.updateCustomerById = async (id, customerData) => {
  const customer = await Customer.update(customerData,
    {
      where: { id }
    })
  return "Customer has been updated"
}


exports.deleteCustomerById = async (id) => {
  const customer = await Customer.destroy({ where: { id } });
  return "Customer has been deleted"
}