const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./routes/book')

const app = express();

app.use(bodyParser.json())

app.use("/book", Book);


const PORT = 5000;

app.listen(PORT, console.log(`Server running on ${PORT}`))