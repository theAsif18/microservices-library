const express = require('express');
const bodyParser = require('body-parser');

const Order = require('./routes/order')

const app = express();

app.use(bodyParser.json())

app.use("/order", Order);

const PORT = 5002;

app.listen(PORT, console.log(`Server running on ${PORT}`))