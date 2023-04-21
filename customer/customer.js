const express = require('express');
const bodyParser = require('body-parser');

const Customer = require('./routes/customer')

const app = express();

app.use(bodyParser.json())

app.use("/customer", Customer);

const PORT = 5001;

app.listen(PORT, console.log(`Server running on ${PORT}`))