const express = require("express");
const router = express.Router();

const { addBook, getAllBook, getBookById, deleteBookById, updateBookById } = require('../controller/book')

router.post("/add", async (req, res) => {
  try {

    const data = await addBook(req.body);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.get("/getAllBook", async (req, res) => {
  try {

    const data = await getAllBook();

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});


router.get("/getBookById/:id", async (req, res) => {
  try {
    const data = await getBookById(req.params.id);
    console.log(data);
    if (!data) {
      return res.status(200).send({ msg: "Book not found" });
    }
    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.patch("/updateBookById/:id", async (req, res) => {
  try {
    const data = await updateBookById(req.params.id, req.body);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

router.delete("/deleteBookById/:id", async (req, res) => {
  try {
    const data = await deleteBookById(req.params.id);

    res.status(200).send(data);
  } catch (err) {
    res.status(400).json({ errors: err.toString("utf8") });
  }
});

module.exports = router;