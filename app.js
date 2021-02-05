const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const productRouter = require('./routes/product');

const setHeaders = require('./middleware/setHeaders');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(setHeaders);
app.use(express.json());

app.use(productRouter);

app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.error(err));