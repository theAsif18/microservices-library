const express = require("express");
const router = express.Router();

const { addCustomer, getAllCustomer, getCustomerById, deleteCustomerById, updateCustomerById } = require('../controller/customer')

router.post("/add", async (req, res) => {
  try {

    const data = await addCustomer(req.body);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.get("/getAllCustomer", async (req, res) => {
  try {

    const data = await getAllCustomer();

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});


router.get("/getCustomerById/:id", async (req, res) => {
  try {
    const data = await getCustomerById(req.params.id);
    console.log(data);
    if (!data) {
      return res.status(200).send({ msg: "Customer not found" });
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.patch("/updateCustomerById/:id", async (req, res) => {
  try {
    const data = await updateCustomerById(req.params.id, req.body);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.delete("/deleteCustomerById/:id", async (req, res) => {
  try {
    const data = await deleteCustomerById(req.params.id);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

module.exports = router;