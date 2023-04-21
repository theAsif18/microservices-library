const express = require("express");
const router = express.Router();

const { addOrder, getAllOrder, getOrderById, deleteOrderById, updateOrderById } = require('../controller/order')

router.post("/add", async (req, res) => {
  try {

    const data = await addOrder(req.body);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.get("/getAllOrder", async (req, res) => {
  try {

    const data = await getAllOrder();

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});


router.get("/getOrderById/:id", async (req, res) => {
  try {
    const data = await getOrderById(req.params.id);
    console.log(data);
    if (!data) {
      return res.status(200).send({ msg: "Order not found" });
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.patch("/updateOrderById/:id", async (req, res) => {
  try {
    const data = await updateOrderById(req.params.id, req.body);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.delete("/deleteOrderById/:id", async (req, res) => {
  try {
    const data = await deleteOrderById(req.params.id);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

module.exports = router;