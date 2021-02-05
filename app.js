const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRouter = require('./routes/product');

const app = express();

app.use(express.json());

app.use(productRouter);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.error(err));