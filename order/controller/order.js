const Order = require('../models/order');
const axios = require('axios');

exports.addOrder = async (orderData) => {
  const order = Order.create(orderData);
  return "Order has been added"
}

exports.getAllOrder = async () => {
  try {
    const data = [];
    const order = await Order.findAll();

    for (let i = 0; i < order.length; i++) {

      const book = await axios.get(`http://localhost:5000/book/getBookById/${order[i].dataValues.bookId}`)

      const customer = await axios.get(`http://localhost:5001/customer/getCustomerById/${order[i].dataValues.custometId}`)

      data.push({
        ...order[i].dataValues,
        title: book.data.title,
        author: book.data.author,
        name: customer.data.name,
        age: customer.data.age,
        address: customer.data.address
      })
    }

    return data
  } catch (error) {
    throw error
  }

}

exports.getOrderById = async (id) => {
  let data = {};
  const order = await Order.findOne({ where: { id } });
  const book = await axios.get(`http://localhost:5000/book/getBookById/${order.dataValues.bookId}`)
  const customer = await axios.get(`http://localhost:5001/customer/getCustomerById/${order.dataValues.custometId}`)
  console.log(customer.data);
  data = {
    ...order.dataValues,
    title: book.data.title,
    author: book.data.author,
    name: customer.data.name,
    age: customer.data.age,
    address: customer.data.address
  }
  console.log(data);
  return data
}

exports.updateOrderById = async (id, customerData) => {
  const order = await Order.update(customerData,
    {
      where: { id }
    })
  return "Order has been updated"
}


exports.deleteOrderById = async (id) => {
  const customer = await Order.destroy({ where: { id } });
  return "Order has been deleted"
}