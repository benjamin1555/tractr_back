const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);
router.get('/products/:productId', productController.getProduct);

module.exports = router;